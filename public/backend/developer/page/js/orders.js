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
            url : BASE_URL+'/admin/booking/get-booking-data', // json datasource
            type: "get",  // method  , by default get
            error: function(){  // error handling
                $(".orders-table-error").html("");
                $("#orders-table").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                $("#orders-table_processing").css("display","none");
            }
        },
        ordering : false
    } );

    $('.dataTables_filter input').attr("placeholder", "Event Title").css('width','200px');

    // booked_by filter
    $('#booked_by').change(function() {
        dataTable.columns(1).search(this.value).draw();
    });

    // event_type  filter
    $('#event_type').change(function() {
        dataTable.columns(3).search(this.value).draw();
    });
    // event_type  filter
    $('#group_or_package').change(function() {
        dataTable.columns(5).search(this.value).draw();
    });

    // sales  filter
    $('#sales').change(function() {
        dataTable.columns(6).search(this.value).draw();
    });

    // payment_type  filter
    $('#payment_type').change(function() {
        dataTable.columns(7).search(this.value).draw();
    });

    // custom sorting
    $('#order_by_date').change(function() {
        dataTable.columns(8).search(this.value).draw();
    });

    // filter by date range
    $('#search_date').on('apply.daterangepicker', function(ev, picker) {
        console.log(picker.startDate.format('YYYY-MM-DD')+'/'+picker.endDate.format('YYYY-MM-DD') );
        dataTable.columns(9).search( picker.startDate.format('YYYY-MM-DD')+'/'+picker.endDate.format('YYYY-MM-DD') ).draw();
    });

    // reset data list
    $('#reset_list').on( 'click', function () {
        location.reload();
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
            $('#demo').val(start.format('YYYY/MM/DD') + '-' + end.format('YYYY/MM/DD'));
        }
    );

} );
