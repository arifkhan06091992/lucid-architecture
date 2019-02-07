/**
 * Created by ayushi agrawal on 18-04-2017.
 */
$(document).ready(function() {
    dataTable = $('#custom-databale').DataTable( {
        "oLanguage": {
            "sProcessing": ""
        },
        keys: true,
        "processing": true,
        "serverSide": true,
        "ajax":{
            url : BASE_URL+'/admin/enquiries/getDatatableData', // json datasource
            type: "get",  // method  , by default get
            error: function(){  // error handling
                $(".custom-databale-error").html("");
                $("#custom-databale").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                $("#custom-databale_processing").css("display","none");
            }
        },
        "columnDefs": [ { orderable: false, targets: [0,4,6] }],
        "order": [[0, 'desc' ]],
        "sProcessing": "Loading ..."
    } );
    $('.dataTables_filter input').attr("placeholder", "Name, Email, Mobile").css('width','200px');
    $('.dataTables_filter input').attr("class", "form-control input-sm clearable");

    // filter by range
    $('#demo').on('apply.daterangepicker', function(ev, picker) {
        dataTable.columns( 5 ).search( picker.startDate.format('YYYY-MM-DD')+'/'+picker.endDate.format('YYYY-MM-DD') ).draw();
    });

    // reset data list
    $('#reset_list').on( 'click', function () {
        dataTable.search( '' ).columns().search( '' ).draw();
    });
} );

