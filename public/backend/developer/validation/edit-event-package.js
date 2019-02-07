$(document).ready(function() {

    var _token = $('input[name="_token"]').val();

    // validate form
    $("#add").validate({
        ignore : "",
        rules: {
            start_time: {
                notEmpty: true,
            },
            end_time: {
                notEmpty: true
            },
            price: {
                notEmpty: true,
                number: true,
                min: 1,
                max: 99999999
            },
            quantity: {
                notEmpty: true,
                number: true,
                min: 1,
                max: 99999999
            }

        },
        messages: {
            ticket_type_id : {
                "remote" : "This Ticket Type Already Added"
            },
            price: {
                number: "Please Enter a valid Price",
                min: "Please enter positive value",
                max: "Maximum 8 digits allowed"
            },
            quantity: {
                number: "Please Enter a valid number",
                min: "Please enter positive number",
                max: "Maximum 8 digits allowed"
            }
        },
        errorPlacement: function (error, element) {

            if (element.attr("class") == "form-control select2 select2-hidden-accessible pending error")
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
    );

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
});
