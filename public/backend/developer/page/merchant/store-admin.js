$(document).ready(function () {

    dataTable = $('#custom-datatable').DataTable({
            "oLanguage": {
                "sProcessing": "Loading ..."
            },
            keys: true,
            "processing": true,
            "serverSide": true,
            "ajax": {
                url: BASE_URL + '/merchant/store-admin/getDatatableData', // json datasource
                type: "get",  // method  , by default get
                error: function ()
                {
                    $(".custom-databale-error").html("");
                    $("#custom-databale").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                    $("#custom-databale_processing").css("display", "none");
                }
            },
            "columnDefs": [ { orderable: false, targets: [0,1,7] }],
            "order": [[0, 'desc']]
        }
    );

    $('.dataTables_filter input').attr("placeholder", "Store Admin Name, Email");
    $('.dataTables_filter input').attr("class", "form-control input-sm clearable");

    // filter by country
    $('#country').on(
        'change', function ()
        {
            dataTable.columns(7).search(this.value).draw();
        }
    );

    // filter by range
    $('#demo').on(
        'apply.daterangepicker', function (ev, picker)
        {
            dataTable.columns(8).search(picker.startDate.format('YYYY-MM-DD') + '/' + picker.endDate.format('YYYY-MM-DD')).draw();
        }
    );

    // reset data list
    $('#reset_list').on(
        'click', function ()
        {
            dataTable.search('').columns().search('').draw();
        }
    );

    $('#demo').daterangepicker(
        {
            autoUpdateInput : false,
            "showDropdowns": true,
            "autoApply": true,
            "ranges": {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            "alwaysShowCalendars": true,
            startDate: moment().subtract(29, 'days'),
            endDate: moment(),
            opens: 'left',
            format: 'DD/MM/YYYY',
        }, function (start, end, label)
        {
            $('#demo').val(start.format('YYYY/MM/DD') + '-' + end.format('YYYY/MM/DD'));
        }
    );
});

var _token = $('input[name="_token"]').val();

function deleteRecord(id)
{

    bootbox.confirm(
        {
            message: 'Are you sure you want to delete this store admin ?',
            buttons: {
                'cancel': {
                    label: '<span><span>Cancel</span></span>',
                    className: 'btn btn-primary'
                },
                'confirm': {
                    label: '<span><span>Delete</span></span>',
                    className: 'btn btn-danger'
                }
            },
            callback: function (result)
            {
                if (result)
                {
                    $('#ajaxLoader').show();
                    $.ajax(
                        {
                            url: BASE_URL + '/merchant/store-admin/' + id,
                            type: 'DELETE',
                            data: {_token: _token},
                            success: function (data)
                            {
                                location.reload();
                            },
                            error: function ()
                            {
                                console.log('There is some error in store admin deleting. Please try again.');
                            }
                        }
                    );
                    return false;
                }
            }
        }
    );

}

function statusChange(id, elmnt)
{
    bootbox.confirm(
        {
            message: 'Are you sure you want to change store admin status ?',
            buttons: {
                'cancel': {
                    label: '<span><span>Cancel</span></span>',
                    className: 'btn btn-primary'
                },
                'confirm': {
                    label: '<span><span>Change</span></span>',
                    className: 'btn btn-danger'
                }
            },
            callback: function (result)
            {
                if (result)
                {
                    $('#ajaxLoader').show();
                    $.ajax(
                        {
                            url: BASE_URL + '/merchant/store-admin/ajaxChangeStatus',
                            type: 'POST',
                            data: {
                                id: id,
                                _token: _token
                            },
                            success: function (data)
                            {
                                location.reload();
                            },
                            error: function ()
                            {
                                console.log('There is some error in store admin status change. Please try again.');
                            }
                        }
                    );
                    return false;
                }
            }
        }
    );
}

// reset password
function changePassword(id)
{
    bootbox.confirm(
        {
            message: 'Are you sure you want to change password of this store admin ?',
            buttons: {
                'cancel': {
                    label: '<span><span>Cancel</span></span>',
                    className: 'btn btn-primary'
                },
                'confirm': {
                    label: '<span><span>Change Password</span></span>',
                    className: 'btn btn-danger'
                }
            },
            callback: function (result)
            {
                if (result)
                {
                    $('#ajaxLoader').show();
                    $.ajax(
                        {
                            url: BASE_URL + '/merchant/store-admin/changePassword/' + id,
                            type: 'POST',
                            data: {_token: _token},
                            success: function (data)
                            {
                                location.reload();
                            },
                            error: function ()
                            {
                                console.log('There is some error in store admin update. Please try again.');
                            }
                        }
                    );
                    return false;
                }
            }
        }
    );

}
