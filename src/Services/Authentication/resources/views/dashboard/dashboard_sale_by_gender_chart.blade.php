
<div id="sales_by_gender" style="height:350px;"></div>

<script>
    var male_gender_event_bookings={{$dashboard_sale_by_gender_report['male_gender_event_bookings']}};
    var female_gender_event_bookings={{$dashboard_sale_by_gender_report['female_gender_event_bookings']}};
    var other_gender_event_bookings={{$dashboard_sale_by_gender_report['other_gender_event_bookings']}};
</script>
<script src="{{asset('public/backend/developer/page/js/dashboard/dashboard_sale_by_gender_chart.js') }}"></script>