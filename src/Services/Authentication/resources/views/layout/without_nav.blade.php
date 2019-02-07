<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/html">
@include('admin.includes.head')

<body class="nav-sm">
<div class="container body">
    <div class="main_container">
    @include('admin.includes.navigation')
    <!-- top navigation -->
    @include('admin.includes.header')
    <!-- /top navigation -->
        <!-- page content -->
        <div class="right_col" role="main">
            <div class="">
                @if(Session::has('success_message'))
                    <div class="alert alert-success alert-dismissible fade in" role="alert" style="margin-top: 50px;">
                        {{ Session::get('success_message') }}
                    </div>
                @endif
                @if(Session::has('error_message'))
                    <div class="alert alert-danger alert-dismissible fade in" role="alert" style="margin-top: 50px;">
                        {{ Session::get('error_message') }}
                    </div>
                @endif
                @yield('content')
            </div>
        </div>
        <!-- /page content -->
        <!-- footer content -->
    @include('admin.includes.footer')
    <!-- /footer content -->
    </div>
</div>
@include('admin.includes.scripts')
</body>
</html>
