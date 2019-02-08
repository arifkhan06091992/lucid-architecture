
<!-- FastClick -->
<script src="{{asset("backend/vendors/fastclick/lib/fastclick.js")}}"></script>
<!-- NProgress -->
<script src="{{asset("backend/vendors/nprogress/nprogress.js")}}"></script>
<!-- jQuery custom content scroller -->
<script src="{{asset("backend/vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js")}}"></script>

<!-- Custom Page Scripts -->
<script>
    var BASE_URL = '{{url('/')}}';
    var ASSET_URL = '{{asset('/')}}';
</script>

@yield('page_scripts')

<!-- Custom Theme Scripts -->
<script src="{{asset("backend/build/js/custom.min.js")}}"></script>

<script>
    $(".alert").delay(5000).fadeOut();
</script>

<!-- show loader before loading of a page -->
<script type="text/javascript">
    $(window).load(function() {
        $("#page-loader").fadeOut("slow");
    })
</script>

<script>
    $(document).ready(function(){

        $('.modal').on('hidden.bs.modal', function () {

            if(this.id!="select-address-modal")
            {
                $('.modal-body').html("");
            }
        })

    });
</script>
