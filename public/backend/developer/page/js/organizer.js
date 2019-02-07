/**
 * Created by dikshant.kala on 13-04-2017.
 */
$(document).ready(function() {


    $('#demo').daterangepicker({
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
    }, function(start, end, label) {
        $('#demo').val(start.format('YYYY/MM/DD') + '-' + end.format('YYYY/MM/DD'));
    });


    dataTable = $('#custom-datatable').DataTable( {
        "oLanguage": {
            "sProcessing": "Loading ..."
        },
        keys: true,
        "processing": true,
        "serverSide": true,
        "ajax":{
            url : BASE_URL+'/admin/organizer/getDatatableData', // json datasource
            type: "get",  // method  , by default get
            error: function(){  // error handling
                $(".custom-databale-error").html("");
                $("#custom-databale").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                $("#custom-databale_processing").css("display","none");
            }
        },
        "columnDefs": [ { orderable: false, targets: [0,7] }],
        "order": [[ 0, 'desc' ]]
    } );
    $('.dataTables_filter input').attr("placeholder", "Name, Email, Mobile, Company Name").css('width','200px');
    $('.dataTables_filter input').attr("class", "form-control input-sm clearable");


    // filter by country
    $('#country').on( 'change', function () {
        dataTable.columns( 6 ).search( this.value ).draw();
    });

    // filter by range
    $('#demo').on('apply.daterangepicker', function(ev, picker) {
        dataTable.columns( 7 ).search( picker.startDate.format('YYYY-MM-DD')+'/'+picker.endDate.format('YYYY-MM-DD') ).draw();
    });

    // reset data list
    $('#reset_list').on( 'click', function () {
        dataTable.search( '' ).columns().search( '' ).draw();
    });


} );


var _token = $('input[name="_token"]').val();

function deleteRecord(id){

    bootbox.confirm({
        message: 'Are you sure you want to delete this organizer ?',
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
        callback: function(result) {
            if (result) {
                $('#ajaxLoader').show();
                $.ajax({
                    url: BASE_URL+'/admin/organizer/'+id,
                    type: 'DELETE',
                    data: {  _token : _token},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        console.log('There is some error in course deleting. Please try again.');
                    }
                });
                return false;
            }
        }
    });

}

function statusChange(id,elmnt){
    bootbox.confirm({
        message: 'Are you sure you want to change organizer status ?',
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
        callback: function(result) {
            if (result) {
                $('#ajaxLoader').show();
                $.ajax({
                    url: BASE_URL+'/admin/organizer/ajaxChangeStatus',
                    type: 'POST',
                    data: { id: id , _token : _token},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        console.log('There is some error in course status change. Please try again.');
                    }
                });
                return false;
            }
        }
    });
}


// reset password
function changePassword(id){

    bootbox.confirm({
        message: 'Are you sure you want to change password of this organizer ?',
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
        callback: function(result) {
            if (result) {
                $('#ajaxLoader').show();
                $.ajax({
                    url: BASE_URL+'/admin/organizer/changePassword/'+id,
                    type: 'POST',
                    data: {  _token : _token},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        console.log('There is some error in organizer update. Please try again.');
                    }
                });
                return false;
            }
        }
    });

}

function editOrganizerContactPersonDetail()
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/organizer/edit-organizer-contact-person-detail',
        type: 'GET',
        success: function (data) {
            $('#edit-organizer-contact-person-detail-modal-body').html(data);
            $('#edit-organizer-contact-person-detail-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}
