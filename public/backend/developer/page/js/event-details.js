$(document).ready(function(){

    var activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        $('a[href="' + activeTab + '"]').tab('show');
    }

    if (location.hash) {
        $('a[href=\'' + location.hash + '\']').tab('show');
    }

    $('body').on('click', 'a[data-toggle=\'tab\']', function (e) {
        e.preventDefault()
        var tab_name = this.getAttribute('href')
        if (history.pushState) {
            history.pushState(null, null, tab_name)
        }
        else {
            location.hash = tab_name
        }
        localStorage.setItem('activeTab', tab_name)

        $(this).tab('show');
        return false;
    });
    $(window).on('popstate', function () {
        var anchor = location.hash ||
                     $('a[data-toggle=\'tab\']').first().attr('href');
        $('a[href=\'' + anchor + '\']').tab('show');
    });


});


function editEventStep1(event_id)
{
    $('#ajaxLoader').show();

    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/event/edit/step-1/'+event_id,
        type: 'GET',
        success: function (data) {
            $('#edit-event-step-1-modal-body').html(data);
            $('#edit-event-step-1-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}

function editEventStep2(event_id)
{
    $('#ajaxLoader').show();

    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/event/edit/step-2/'+event_id,
        type: 'GET',
        success: function (data) {
            $('#edit-event-step-2-modal-body').html(data);
            $('#edit-event-step-2-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}

function AddNewVenue(event_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/event/add/step-3/'+event_id,
        type: 'GET',
        success: function (data) {
            $('#add-venue-modal-body').html(data);
            $('#add-venue-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}

function makeEventMainVenue(event_venue_id)
{
    $('#ajaxLoader').show();

    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/event/add/make-event-main-venue/'+event_venue_id,
        type: 'GET',
        success: function (data) {
            location.reload();
        },
        error: function () {
            location.reload();
        }
    });
}

function deleteEventVenue(event_venue_id) {

    bootbox.confirm({
        message: 'Are you sure you want to remove this event venue ?',
        buttons: {
            'cancel': {
                label: '<span><span>Cancel</span></span>',
                className: 'btn btn-primary'
            },
            'confirm': {
                label: '<span><span>Remove</span></span>',
                className: 'btn btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $('#ajaxLoader').show();
                $.ajax({
                    headers: {
                        'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: BASE_URL + '/admin/event/delete/venue/' + event_venue_id,
                    type: 'DELETE',
                    data: {_token: $('meta[name="csrf-token"]').attr('content')},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        location.reload();
                    }
                });
                return false;
            }
        }
    });

}

function AddGroups(event_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/event/add/groups/'+event_id,
        type: 'GET',
        success: function (data) {
            $('#add-event-group-modal-body').html(data);
            $('#add-event-group-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}


function deleteEventGroup(event_group_id) {

    bootbox.confirm({
        message: 'Are you sure you want to remove this event group ?',
        buttons: {
            'cancel': {
                label: '<span><span>Cancel</span></span>',
                className: 'btn btn-primary'
            },
            'confirm': {
                label: '<span><span>Remove</span></span>',
                className: 'btn btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $('#ajaxLoader').show();
                $.ajax({
                    headers: {
                        'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: BASE_URL + '/admin/event/delete/group/' + event_group_id,
                    type: 'DELETE',
                    data: {_token: $('meta[name="csrf-token"]').attr('content')},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        location.reload();
                    }
                });
                return false;
            }
        }
    });

}

function AddPackages(event_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/event/add/packages/'+event_id,
        type: 'GET',
        success: function (data) {
            $('#add-event-package-modal-body').html(data);
            $('#add-event-package-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}


function deleteEventPackage(event_package_id) {

    bootbox.confirm({
        message: 'Are you sure you want to remove this event package ?',
        buttons: {
            'cancel': {
                label: '<span><span>Cancel</span></span>',
                className: 'btn btn-primary'
            },
            'confirm': {
                label: '<span><span>Remove</span></span>',
                className: 'btn btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $('#ajaxLoader').show();
                $.ajax({
                    headers: {
                        'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: BASE_URL + '/admin/event/delete/package/' + event_package_id,
                    type: 'DELETE',
                    data: {_token: $('meta[name="csrf-token"]').attr('content')},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        location.reload();
                    }
                });
                return false;
            }
        }
    });

}


function AddEventTicketType(event_group_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/event/add/ticket-type/'+event_group_id,
        type: 'GET',
        success: function (data) {
            $('#add-event-ticket-type-modal-body').html(data);
            $('#add-event-ticket-type-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}


function deleteEventGroupTicket(event_group_ticket_id) {

    bootbox.confirm({
        message: 'Are you sure you want to remove this event group ticket ?',
        buttons: {
            'cancel': {
                label: '<span><span>Cancel</span></span>',
                className: 'btn btn-primary'
            },
            'confirm': {
                label: '<span><span>Remove</span></span>',
                className: 'btn btn-danger'
            }
        },
        callback: function (result) {
            if (result) {
                $('#ajaxLoader').show();
                $.ajax({
                    headers: {
                        'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: BASE_URL + '/admin/event/delete/group-ticket/' + event_group_ticket_id,
                    type: 'DELETE',
                    data: {_token: $('meta[name="csrf-token"]').attr('content')},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        location.reload();
                    }
                });
                return false;
            }
        }
    });

}

function viewEventGroupDetails(event_group_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/event/add/view-event-group-details/'+event_group_id,
        type: 'GET',
        success: function (data) {
            $('#show-event-group-details-modal-body').html(data);
            $('#show-event-group-details-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}

function editEventPackage(event_package_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/event/add/edit-event-package/'+event_package_id,
        type: 'GET',
        success: function (data) {
            $('#update-package-details-modal-body').html(data);
            $('#update-package-details-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}