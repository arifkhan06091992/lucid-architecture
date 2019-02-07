$(document).ready(function () {


    var _token = $('meta[name="csrf-token"]').attr('content');

    $('.select2').select2();

    /**
     * This Block will call a route to get total no of count boxes
     * according to selected time interval
     */
    $('input[type=radio][name=dashboard_count_boxes_type]').on('ifChecked',function() {

        $('#ajaxLoader').show();
        $.ajax({
            url: BASE_URL+'/merchant/dashboard/dashboard-count-boxes',
            type: 'POST',
            data: { "dashboard_count_boxes_type": this.value , _token : _token},
            success: function (data) {

                $('#dashboard_count_boxes').html(data);
                $('#ajaxLoader').hide();

            },
            error: function () {
                console.log('There is some error in user deleting. Please try again.');
            }
        });
    });

    /**
     * This function will call a event filter for no of event booking
     */
    $('#total_sales_chart_event_id').change(function(){

        $('#ajaxLoader').show();
        $.ajax({
            url: BASE_URL+'/merchant/dashboard/dashboard-total-sale-chart',
            type: 'POST',
            data: { "event_id": this.value , _token : _token},
            success: function (data) {

                $('#dashboard_total_sales_chart').html(data);
                $('#ajaxLoader').hide();

            },
            error: function () {
                console.log('There is some error in user deleting. Please try again.');
            }
        });

    });

    /**
     * This function will call a event filter for no of event booking
     */
    $('#total_revenue_chart_event_id').change(function(){

        $('#ajaxLoader').show();
        $.ajax({
            url: BASE_URL+'/merchant/dashboard/dashboard-total-revenue-chart',
            type: 'POST',
            data: { "event_id": this.value , _token : _token},
            success: function (data) {

                $('#dashboard_total_revenue_chart').html(data);
                $('#ajaxLoader').hide();

            },
            error: function () {
                console.log('There is some error in user deleting. Please try again.');
            }
        });

    });

    /**
     * This function will call a event filter for no of event booking
     */
    $('#sales_by_gender_event_id').change(function(){

        $('#ajaxLoader').show();
        $.ajax({
            url: BASE_URL+'/merchant/dashboard/dashboard-sales-by-gender-chart',
            type: 'POST',
            data: { "event_id": this.value , _token : _token},
            success: function (data) {

                $('#dashboard_sales_by_gender').html(data);
                $('#ajaxLoader').hide();

            },
            error: function () {
                console.log('There is some error in user deleting. Please try again.');
            }
        });

    });

    /**
     * This function will call a event filter for no of event booking
     */
    $('#sales_by_age_range_event_id').change(function(){

        $('#ajaxLoader').show();
        $.ajax({
            url: BASE_URL+'/merchant/dashboard/dashboard-sales-by-age-range-chart',
            type: 'POST',
            data: { "event_id": this.value , _token : _token},
            success: function (data) {

                $('#dashboard_sales_by_age_range').html(data);
                $('#ajaxLoader').hide();

            },
            error: function () {
                console.log('There is some error in user deleting. Please try again.');
            }
        });

    });
});

