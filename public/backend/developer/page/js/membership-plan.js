/**
 * Created by dikshant.kala on 13-04-2017.
 */
$(document).ready(function() {
    dataTable = $('#custom-datatable').DataTable( {
        "oLanguage": {
            "sProcessing": "Loading ..."
        },
        keys: true,
        "processing": true,
        "serverSide": true,
        "ajax":{
            url : BASE_URL+'/admin/membership-plan/getDatatableData', // json datasource
            type: "get",  // method  , by default get
            error: function(){  // error handling
                $(".custom-datatable-error").html("");
                $("#custom-datatable").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                $("#custom-datatable_processing").css("display","none");
            }
        },
        "columnDefs": [ { orderable: false, targets: [0,7] }]
        //"order": [[ 5, 'desc' ]]
    } );
    $('.dataTables_filter input').attr("placeholder", "search with name, email.");
    $('.dataTables_filter input').attr("class", "form-control input-sm clearable");

} );

var _token = $('input[name="_token"]').val();

function deleteRecord(id){

    bootbox.confirm({
        message: 'Are you sure you want to delete this membership plan ?',
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
                    url: BASE_URL+'/admin/membership-plan/'+id,
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
        message: 'Are you sure you want to change membership plan status ?',
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
                    url: BASE_URL+'/admin/membership-plan/ajaxChangeStatus',
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
