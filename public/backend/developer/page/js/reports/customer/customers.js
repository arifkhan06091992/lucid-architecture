$(document).ready(function() {

    var dataTable = $('#orders-table').DataTable( {
        "oLanguage": {
            "sProcessing": "Loading ..."
        },
        keys: true,
        "processing": true,
        "serverSide": true,
        "lengthChange": true,
        "ajax":{
            url : BASE_URL+'/admin/report/customers/get-customers-data', // json datasource
            type: "get",  // method  , by default get
            error: function(){  // error handling
                $(".orders-table-error").html("");
                $("#orders-table").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                $("#orders-table_processing").css("display","none");
            }
        },
        "ordering": false
    } );

    $('.dataTables_filter input').attr("placeholder", "Event Title").css('width','200px');

    // filter by range
    $('#search_date').on('apply.daterangepicker', function(ev, picker) {
        console.log(picker.startDate.format('YYYY-MM-DD')+'/'+picker.endDate.format('YYYY-MM-DD') );
        dataTable.columns(3).search( picker.startDate.format('YYYY-MM-DD')+'/'+picker.endDate.format('YYYY-MM-DD') ).draw();
    });

    // custom sorting
    $('#order_by_date').change(function() {
        dataTable.columns(6).search(this.value).draw();
    });


    $('#search_date').daterangepicker(
        {
            autoUpdateInput : false,
            "showDropdowns": true,
            "autoApply": true,
            "ranges": {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'This Week': [moment().startOf('week'), moment()],
                'Last Week': [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
                'This Month': [moment().startOf('month'), moment()],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            "alwaysShowCalendars": true,
            maxDate: moment(),
            opens: 'left',
            locale: {
                format: 'YYYY/MM/DD'
            }
        }, function (start, end, label)
        {

            $('#search_date').val(start.format('YYYY/MM/DD') + '-' + end.format('YYYY/MM/DD'));
        }
    );

} );

function viewTicketDetails(event_booking_customer_detail_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/organizer/reports/customers/view-customer-detail/'+event_booking_customer_detail_id,
        type: 'GET',
        success: function (data) {
            $('#view-customer-detail-modal-body').html(data);
            $('#view-customer-detail-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}
