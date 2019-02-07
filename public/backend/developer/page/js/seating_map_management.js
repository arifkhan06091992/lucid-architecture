/**
 * Created by ayushi agrawal on 17-04-2017.
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
            url : BASE_URL+'/admin/seating-maps/getDatatableData', // json datasource
            type: "get",  // method  , by default get
            error: function(){  // error handling
                $(".custom-databale-error").html("");
                $("#custom-databale").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                $("#custom-databale_processing").css("display","none");
            }
        },
        "columnDefs": [ { orderable: false, targets: [0,4] }],
        "order": [[ 3, 'desc' ]],
        "sProcessing": "Loading ..."
    } );
    $('.dataTables_filter input').attr("placeholder", "Title and Key").css('width','200px');
    $('.dataTables_filter input').attr("class", "form-control input-sm clearable");

    // reset data list
    $('#reset_list').on( 'click', function () {
        dataTable.search( '' ).columns().search( '' ).draw();
    });

} );

var _token = $('input[name="_token"]').val();

function deleteRecord(id){

    bootbox.confirm({
        message: 'Are you sure you want to delete this seating map arrangement ?',
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
                    url: BASE_URL+'/admin/seating-maps/'+id,
                    type: 'DELETE',
                    data: {  _token : _token},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        console.log('There is some error in case study deleting. Please try again.');
                    }
                });
                return false;
            }
        }
    });

}

function statusChange(id,elmnt){

    bootbox.confirm({
        message: 'Are you sure you want to change seating map arrangement status ?',
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
                    url: BASE_URL+'/admin/seating-maps/ajaxChangeStatus',
                    type: 'POST',
                    data: { id: id , _token : _token},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        console.log('There is some error in case study status change. Please try again.');
                    }
                });
                return false;
            }
        }
    });
}
