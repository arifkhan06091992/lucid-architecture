
function addTicketType(id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/package/add-ticket-type/'+id,
        type: 'GET',
        success: function (data) {
            $('#add-ticket-type-model-body').html(data);
            $('#add-ticket-type-model').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}
function addMerchandise(id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/package/add-merchandise/'+id,
        type: 'GET',
        success: function (data) {
            $('#add-merchandise-model-body').html(data);
            $('#add-merchandise-model').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}


function deleteTicketType(id) {

    bootbox.confirm({
        message: 'Are you sure you want to remove this ticket type ?',
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
                    url: BASE_URL + '/admin/package/ticket-type/' + id,
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
function deleteMerchandise(id){

    bootbox.confirm({
        message: 'Are you sure you want to remove this merchandise ?',
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
        callback: function(result) {
            if (result) {
                $('#ajaxLoader').show();
                $.ajax({
                    headers: {
                        'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: BASE_URL+'/admin/package/merchandise/'+id,
                    type: 'DELETE',
                    data: {  _token : $('meta[name="csrf-token"]').attr('content')},
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