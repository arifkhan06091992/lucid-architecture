$(document).ready(function () {

    // validate signup form on keyup and submit
    $("#make-payment-form").validate({
        rules: {
            confirm_booking: {
                required: true
            }
        },
        messages: {
            confirm_booking: {
                required: "Please Check Above Checkbox"
            }
        },
        errorPlacement: function(error, element)
        {
            error.insertAfter('.content');
        },
        submitHandler: function (form) {
            form.submit();
            $('#ajaxLoader').show();
        }
    });


});
