/**
 * Created by dikshant.kala on 18-04-2017.
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
            url : BASE_URL+'/admin/home-top-category/getDatatableData', // json datasource
            type: "get",  // method  , by default get
            error: function(){  // error handling
                $(".custom-datatable-error").html("");
                $("#custom-datatable").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                $("#custom-datatable_processing").css("display","none");
            }
        },
        "columnDefs": [ { orderable: false, targets: [0,4] }],
        "order": [[ 0, 'desc' ]]
    } );
    $('.dataTables_filter input').attr("placeholder", "Home Top Category Name").css('width','200px');
    $('.dataTables_filter input').attr("class", "form-control input-sm clearable");

    // filter by range
    $('#demo').on('apply.daterangepicker', function(ev, picker) {
        dataTable.columns( 3 ).search( picker.startDate.format('YYYY-MM-DD')+'/'+picker.endDate.format('YYYY-MM-DD') ).draw();
    });

    // reset data list
    $('#reset_list').on( 'click', function () {
        dataTable.search( '' ).columns().search( '' ).draw();
    });

} );

var _token = $('input[name="_token"]').val();

function deleteRecord(id){

    bootbox.confirm({
        message: 'Are you sure you want to delete this home top category name ?',
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
                    url: BASE_URL+'/admin/home-top-category/'+id,
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
        message: 'Are you sure you want to change home top category status ?',
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
                    url: BASE_URL+'/admin/home-top-category/ajaxChangeStatus',
                    type: 'POST',
                    data: { id: id , _token : _token},
                    success: function (data) {
                        location.reload();
                    },
                    error: function () {
                        console.log('There is some error in home top category status change. Please try again.');
                    }
                });
                return false;
            }
        }
    });
}
