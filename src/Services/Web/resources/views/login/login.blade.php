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
    <link rel="stylesheet" type="text/css" href="{{asset("public/backend/")}}/vendors/validation-tooltipster/custom-plugin.css"/>

    <!-- Custom Theme Style -->
    <link href="{{asset("public/backend/")}}/build/css/custom.min.css" rel="stylesheet">

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

<body class="login" style="background-size: cover">
<div>
    <a class="hiddenanchor" id="signup"></a> <a class="hiddenanchor" id="signin"></a>

    <div class="login_wrapper">
        <div class="animate form login_form">
            <section class="login_content">
                <a href="{{url('/')}}" class="">
                    <img src="{{asset('public/frontend/images/logo1.png')}}" alt="{{env('APP_NAME')}} Logo" title="{{env('APP_NAME')}}">
                </a>
                <div class="clearfix">&nbsp;</div>
                @if(Session::has('errorMessage'))
                    <div class="alert alert-danger alert-dismissible fade in" role="alert">
                        {{ Session::get('errorMessage') }}
                    </div>
                @endif
                @if(Session::has('successMessage'))
                    <div class="alert alert-success alert-dismissible fade in" role="alert">
                        {{ Session::get('successMessage') }}
                    </div>
                @endif
                <form id="login" action="{{url('/authenticate')}}" method="post">
                    {!! csrf_field() !!}
                    <h1>Admin Login</h1>
                    <div>
                        <input type="text" class="form-control" placeholder="Email" name="email" required="" value="{{ old('email') }}"/>
                        <div class="error-message">{{ $errors->first('email') }}</div>
                    </div>
                    <div>
                        <input type="password" class="form-control" placeholder="Password" name="password" required=""/>
                        <div class="error-message">{{ $errors->first('password') }}</div>
                    </div>
                    <div>
                        <button class="btn btn-primary col-md-12 submit" type="submit">Log in</button>
                    </div>

                    <div class="clearfix"></div>

                    <div class="separator">
                        <p class="change_link">Forgot Password?
                            <a href="{{url('/forgot-password')}}" class="to_register"> Click here to reset </a>
                        </p>

                        <div class="clearfix"></div>
                        <br/>

                        <div>
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

</html>

