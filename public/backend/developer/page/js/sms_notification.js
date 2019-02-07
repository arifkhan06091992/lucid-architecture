/**
 * Created by ayushi agrawal on 18-04-2017.
 */
$(document).ready(function() {
    dataTable = $('#custom-databale').DataTable( {
        "oLanguage": {
            "sProcessing": "Loading ..."
        },
        keys: true,
        "processing": true,
        "serverSide": true,
        "ajax":{
            url : BASE_URL+'/admin/sms-notifications/getDatatableData', // json datasource
            type: "get",  // method  , by default get
            error: function(){  // error handling
                $(".custom-databale-error").html("");
                $("#custom-databale").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                $("#custom-databale_processing").css("display","none");
            }
        },
        "columnDefs": [ { orderable: false, targets: [0,3] }],
        "order": [[ 0, 'desc' ]]
    } );
    $('.dataTables_filter input').attr("placeholder", "User Type").css('width','200px');
    $('.dataTables_filter input').attr("class", "form-control input-sm clearable");

} );

var _token = $('input[name="_token"]').val();

function statusChange(id,elmnt){

    bootbox.confirm({
        message: 'Are you sure you want to change sms notification status ?',
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
                    url: BASE_URL+'/admin/sms-notifications/ajaxChangeStatus',
                    type: 'POST',
                    data: { id: id , _token : _token},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        console.log('There is some error in sms notification status change. Please try again.');
                    }
                });
                return false;
            }
        }
    });
}
