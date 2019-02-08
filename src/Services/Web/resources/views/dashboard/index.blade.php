@section('page_styles')
    <link href="{{asset("public/backend/vendors/iCheck/skins/flat/green.css")}}" rel="stylesheet">
    <link href="{{asset('public/backend/vendors/select2/dist/css/select2.css')}}" rel="stylesheet">
    <script src="{{asset('public/backend/vendors/echarts/dist/echarts.min.js')}}"></script>
@stop
@extends('web::layout.admin')
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
@stop
@section('page_scripts')
    <script src="{{asset("public/backend/vendors/iCheck/icheck.min.js")}}"></script>
    <script src="{{asset("public/backend/vendors/select2/dist/js/select2.js")}}"></script>
    <script src="{{asset('public/backend/developer/page/js/dashboard/dashboard.js') }}"></script>
@stop