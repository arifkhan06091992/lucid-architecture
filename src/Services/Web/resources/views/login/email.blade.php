<?php
/**
 * Created by PhpStorm.
 * User: dikshant.kala
 * Date: 25-04-2017
 * Time: 19:37
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{env('APP_NAME')}}</title>

    <!-- Bootstrap -->
    <link href="{{asset("public/backend/")}}/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="{{asset("public/backend/")}}/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="{{asset("public/backend/")}}/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- Animate.css -->
    <link href="{{asset("public/backend/")}}/vendors/animate.css/animate.min.css" rel="stylesheet">

    <!-- validation tooltip-->
    <link rel="stylesheet" type="text/css" href="{{asset("public/backend/")}}/vendors/validation-tooltipster/custom-plugin.css" />

    <!-- Custom Theme Style -->
    <link href="{{asset("public/backend/")}}/build/css/custom.min.css" rel="stylesheet">
    <!-- Custom Theme Style -->
    <link href="{{asset("public/backend/developer/css/developer.css")}}" rel="stylesheet">
    <!-- Custom Theme Style -->
    <link href="{{asset("public/backend/developer/css/developer.css")}}" rel="stylesheet">

    <style>
        .login_wrapper {
            margin: 1.5% auto 0;
        }
        .login_content {
            text-shadow: 0 1px 0 transparent;
        }
    </style>
</head>

<body class="login" style="background-image: url({{asset('public/frontend/images/dance_stage_performance_simulation_light_47_2560x1600.jpg')}});background-size: cover">
<div>
    <a class="hiddenanchor" id="signup"></a>
    <a class="hiddenanchor" id="signin"></a>

    <div class="login_wrapper">
        <div class="animate form login_form">
            <section class="login_content">
                <a href="{{url('/')}}" class="">
                    <img src="{{asset('public/frontend/images/logo1.png')}}" alt="{{env('APP_NAME')}} Logo" title="{{env('APP_NAME')}}">
                </a>
                <div class="clearfix">&nbsp;</div>
                @if(Session::has('error_message'))
                    <div class="alert alert-danger alert-dismissible fade in" role="alert" style="background-color:rgb(206, 84, 84)">
                        {{ Session::get('error_message') }}
                    </div>
                @endif
                @if(Session::has('success_message'))
                    <div class="alert alert-success alert-dismissible fade in" role="alert" >
                        {{ Session::get('success_message') }}
                    </div>
                @endif
                <form action="{{url('admin/forgot-password')}}" method="post" id="email-frm">
                    {!! csrf_field() !!}
                    <h1>Reset Password</h1>
                    <div>
                        <input type="text" class="form-control" placeholder="Enter email" name="email" required="" value="{{ old('email') }}"/>
                    </div>
                    <div>
                        <button class="btn btn-default submit" type="submit">Reset Password</button>
                    </div>

                    <div class="clearfix"></div>

                    <div class="separator">
                        <p class="change_link">
                            <a href="{{url('/admin')}}" class="to_register"> Click here to login </a>
                        </p>

                        <div class="clearfix"></div>
                        <br />

                        <div>
                            <h1><i class="fa fa-paw"></i> {{env('APP_NAME')}}</h1>
                            <p>©2017 All Rights Reserved. {{env('APP_NAME')}}</p>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </div>
</div>
</body>
<!-- jQuery -->
<script src="{{asset("public/backend/vendors/jquery/dist/jquery.min.js")}}"></script>
<!-- Bootstrap -->
<script src="{{asset("public/backend/vendors/bootstrap/dist/js/bootstrap.min.js")}}"></script>
<!-- validation -->
<script src="{{asset("public/backend/")}}/vendors/validation/jquery.validate.min.js"></script>
<script src="{{asset("public/backend/")}}/vendors/validation/additional-methods.min.js"></script>
<script src="{{asset("public/backend/")}}/vendors/validation/custom-additional-methods.js"></script>
<script src="{{asset("public/backend/")}}/vendors/validation-tooltipster/custom-plugin.js"></script>

<script>
    $(document).ready(function() {

        // validate form
        $("#email-frm").validate({
            rules: {
                email: {
                    validEmail: true,
                    maxlength:100
                },
            },
            messages: {
                email: {
                    maxlength: "Email cannot be longer than 100 characters"
                },
            },
            errorPlacement: function (error, element) {
                $(element).tooltipster('update', $(error).text());
                $(element).tooltipster('show');
            },
            success: function (label, element) {
                $(element).tooltipster('hide');
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

    });
</script>
</html>
