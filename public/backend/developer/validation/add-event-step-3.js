$(document).ready(function() {

    var _token = $('input[name="_token"]').val();

    // validate form
    $("#add").validate({
        ignore : "",
        rules: {
            venue_type_id: {
                notEmpty: true
            },
            venue_id: {
                notEmpty: true,
                "remote" :
                    {
                        url: BASE_URL+'/api/check-existing-event-venue',
                        type: "post",
                        data : {_token : _token ,event_id : event_id , created_by_type : 2, created_by_id : logged_in_user_id}
                    }
            },
            start_time: {
                notEmpty: true,
            },
            end_time: {
                notEmpty: true
            }

        },
        messages: {
            venue_id : {
                remote: "This venue already added"
            }
        },
        errorPlacement: function (error, element) {

            if (element.attr("class") == "form-control select2 select2-hidden-accessible pending error" || element.attr("class") == "form-control select2 select2-hidden-accessible error")
            {
                error.insertAfter($(element).next());
            }
            else
            {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $('.select2').select2().on(
        "change", function (e)
        {
            $(this).valid();   // jquery validation script validate on change
        }
    );;

    $(function () {
        $.fn.datetimepicker.defaults.extraFormats = ['YYYY-MM-DD HH:mm'];
        $('#start_time').datetimepicker({sideBySide: true});
        $('#end_time').datetimepicker({
            useCurrent: false, //Important! See issue #1075
            sideBySide: true
        });
        $("#start_time").on("dp.change", function (e) {
            $('#end_time').data("DateTimePicker").minDate(e.date);
        });
        $("#end_time").on("dp.change", function (e) {
            $('#start_time').data("DateTimePicker").maxDate(e.date);
        });
    });


    $('#venue_type_id').change(function () {

        var state="not_found";
        if($('#venue_type_id').val()!="")
        {
            venue_type_id=$('#venue_type_id').val();
        }
        $.ajax({
            url: BASE_URL+'/admin/event/getVenuesByVenueType',
            type:'post',
            data : {venue_type_id:venue_type_id, _token : _token},
            dataType: 'text',
            beforeSend: function() {
                $('#ajaxLoader').show();
            },
            success: function( data, textStatus, jQxhr ){
                //console.log( data );
                $('#venue_id').html(data);
                $('#ajaxLoader').hide();
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

    });

});
