@section('page_styles')
    <link href="{{asset("backend/vendors/iCheck/skins/flat/green.css")}}" rel="stylesheet">
    <link href="{{asset('backend/vendors/select2/dist/css/select2.css')}}" rel="stylesheet">
    <script src="{{asset('public/backend/vendors/echarts/dist/echarts.min.js')}}"></script>
@stop
@extends('admin.layout.admin')
@section('content')
    <style>
        .tile-stats .icon i {
            font-size: 50px;
        }

        .x_panel, .x_title {
            margin-bottom: 20px;
        }
    </style>
    <div class="row top_tiles">
        <div class="">
            <div class="col-lg-4 col-sm-4 col-xs-12">
                <div class="lft_box">
                    <div class="page-title">
                        <div class="title_left">
                            <h3>Statics</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-sm-8 col-xs-12">
                <div class="col-md-2">
                </div>
                <div class="col-md-2">
                    <div class="radio gh drop_btm pull-right">
                        All Time    {{Form::radio('dashboard_count_boxes_type',0,1,['class'=>'flat'])}}
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="radio gh drop_btm pull-right">
                        Today       {{Form::radio('dashboard_count_boxes_type',1,0,['class'=>'flat'])}}
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="radio gh drop_btm pull-right">
                        This Week   {{Form::radio('dashboard_count_boxes_type',2,0,['class'=>'flat'])}}
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="radio gh drop_btm pull-right">
                        This Month  {{Form::radio('dashboard_count_boxes_type',3,0,['class'=>'flat'])}}
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="radio gh drop_btm pull-right">
                        This Year   {{Form::radio('dashboard_count_boxes_type',4,0,['class'=>'flat'])}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="dashboard_count_boxes">
        @include('admin.dashboard.dashboard_count_boxes')
    </div>

    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="dashboard_graph x_panel">
                <div class="row x_title">
                    <div class="col-md-6">
                        <h3>Total Sale</h3>
                    </div>
                    <div class="col-md-6">
                        <div id="reportrange" class="pull-right">
                            {{Form::select('total_sales_chart_event_id',$events,NULL,['class'=>'select2 ignore','id'=>'total_sales_chart_event_id','placeholder'=>'Please select a event'])}}
                        </div>
                    </div>
                </div>
                <div class="x_content" id="dashboard_total_sales_chart">
                    @include('admin.dashboard.dashboard_total_sale_chart')
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="dashboard_graph x_panel">
                <div class="row x_title">
                    <div class="col-md-6">
                        <h3>Total Revenue</h3>
                    </div>
                    <div class="col-md-6">
                        <div id="reportrange" class="pull-right">
                            {{Form::select('total_revenue_chart_event_id',$events,NULL,['class'=>'select2 ignore','id'=>'total_revenue_chart_event_id','placeholder'=>'Please select a event'])}}
                        </div>
                    </div>
                </div>
                <div class="x_content" id="dashboard_total_revenue_chart">
                    @include('admin.dashboard.dashboard_total_revenue_chart')
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="dashboard_graph x_panel">
                <div class="row x_title">
                    <div class="col-md-6">
                        <h3>Sales by Gender</h3>
                    </div>
                    <div class="col-md-6">
                        <div id="reportrange" class="pull-right">
                            {{Form::select('sales_by_gender_event_id',$events,NULL,['class'=>'select2 ignore','id'=>'sales_by_gender_event_id','placeholder'=>'Please select a event'])}}
                        </div>
                    </div>
                </div>
                <div class="x_content" id="dashboard_sales_by_gender">
                    @include('admin.dashboard.dashboard_sale_by_gender_chart')
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="dashboard_graph x_panel">
                <div class="row x_title">
                    <div class="col-md-6">
                        <h3>Sales by Age Range</h3>
                    </div>
                    <div class="col-md-6">
                        <div id="reportrange" class="pull-right">
                            {{Form::select('sales_by_age_range_event_id',$events,NULL,['class'=>'select2 ignore','id'=>'sales_by_age_range_event_id','placeholder'=>'Please select a event'])}}
                        </div>
                    </div>
                </div>
                <div class="x_content" id="dashboard_sales_by_age_range">
                    @include('admin.dashboard.dashboard_sale_by_age_range_chart')
                </div>
            </div>
        </div>
    </div>
@stop
@section('page_scripts')
    <script src="{{asset("backend/vendors/iCheck/icheck.min.js")}}"></script>
    <script src="{{asset("backend/vendors/select2/dist/js/select2.js")}}"></script>
    <script src="{{asset('backend/developer/page/js/dashboard/dashboard.js') }}"></script>
@stop