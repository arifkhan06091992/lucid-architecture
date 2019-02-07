<div id="total_sales_chart" style="height:350px;"></div>

<script>
    var data_labels=<?php echo json_encode($dashboard_total_sale_report['labels'])?>;
    var total_sale_data=<?php echo json_encode($dashboard_total_sale_report['total_sale_data'])?>;
    var online_sale_data=<?php echo json_encode($dashboard_total_sale_report['online_sale_data'])?>;
    var box_office_sale_data=<?php echo json_encode($dashboard_total_sale_report['box_office_sale_data'])?>;
</script>
<script src="{{asset('public/backend/developer/page/js/dashboard/dashboard_total_sale_chart.js') }}"></script>
