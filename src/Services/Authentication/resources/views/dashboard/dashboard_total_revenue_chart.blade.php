

<div id="total_revenue_chart" style="height:350px;"></div>

<script>
    var data_labels=<?php echo json_encode($dashboard_total_revenue_report['labels'])?>;
    var total_revenue_data=<?php echo json_encode($dashboard_total_revenue_report['total_revenue_data'])?>;
    var online_revenue_data=<?php echo json_encode($dashboard_total_revenue_report['online_revenue_data'])?>;
    var box_office_revenue_data=<?php echo json_encode($dashboard_total_revenue_report['box_office_revenue_data'])?>;
</script>
<script src="{{asset('public/backend/developer/page/js/dashboard/dashboard_total_revenue_chart.js') }}"></script>

