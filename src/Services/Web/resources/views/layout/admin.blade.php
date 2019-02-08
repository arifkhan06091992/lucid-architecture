<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
@include('web::includes.head')
<body class="nav-md">
<div class="container body">
    <div class="main_container">
        @include('web::includes.navigation')
        @include('web::includes.header')
        <div class="right_col" role="main">
            <div class="">
                @if(Session::has('successMessage'))
                    <div class="alert alert-success alert-dismissible fade in" role="alert" style="margin-top: 50px;">
                        {{ Session::get('successMessage') }}
                    </div>
                @endif
                @if(Session::has('errorMessage'))
                    <div class="alert alert-danger alert-dismissible fade in" role="alert" style="margin-top: 50px;">
                        {{ Session::get('errorMessage') }}
                    </div>
                @endif
                @yield('content')
            </div>
        </div>
        @include('web::includes.footer')
    </div>
</div>
@include('web::includes.scripts')
</body>
</html>
