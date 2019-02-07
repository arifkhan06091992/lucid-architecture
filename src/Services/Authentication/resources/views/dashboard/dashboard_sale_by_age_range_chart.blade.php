

<div id="sales_by_age_range" style="height:350px;"></div>

<script>
    var var_0_15=<?php echo json_encode($dashboard_sale_by_age_range_report['0-15'])?>;
    var var_16_25=<?php echo json_encode($dashboard_sale_by_age_range_report['16-25'])?>;
    var var_26_30=<?php echo json_encode($dashboard_sale_by_age_range_report['26-30'])?>;
    var var_31_50=<?php echo json_encode($dashboard_sale_by_age_range_report['31-50'])?>;
    var var_51_100=<?php echo json_encode($dashboard_sale_by_age_range_report['51-100'])?>;
</script>
<script src="{{asset('public/backend/developer/page/js/dashboard/dashboard_sale_by_age_range_chart.js') }}"></script>