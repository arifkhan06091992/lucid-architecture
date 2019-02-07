<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="{{csrf_token()}}" name="csrf-token"/>

    <title>{{env('APP_NAME')}}</title>

    <!-- Bootstrap -->
    <link href="{{asset("backend/vendors/bootstrap/dist/css/bootstrap.min.css")}}" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="{{asset("backend/vendors/font-awesome/css/font-awesome.min.css")}}" rel="stylesheet">
    <!-- NProgress -->
    <link href="{{asset("backend/vendors/nprogress/nprogress.css")}}" rel="stylesheet">

    <!-- jQuery custom content scroller -->
    <link href="{{asset("backend/vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css")}}" rel="stylesheet"/>

    <!-- Custom Theme Style -->
    <link href="{{asset("/backend/build/css/custom.min.css")}}" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="{{asset("/backend/developer/css/developer.css")}}" rel="stylesheet">
    <!-- Custom Page Styles -->
@yield('page_styles')

<!-- jQuery -->
    <script src="{{asset("backend/vendors/jquery/dist/jquery.min.js")}}"></script>
    <!-- Bootstrap -->
    <script src="{{asset("backend/vendors/bootstrap/dist/js/bootstrap.min.js")}}"></script>

</head>