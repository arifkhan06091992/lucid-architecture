/**
 * Created by sonukumar.singh on 3/29/2017.
 */

$(document).ready(function() {

    var _token= $('meta[name="csrf-token"]').attr('content');

    // validate signup form on keyup and submit
    $("#add-ticket-type-from").validate({
        rules: {
            ticket_type_id: {
                notEmpty: true,
                "remote" :
                    {
                        url: BASE_URL+'/api/check-existing-package-ticket-type',
                        type: "post",
                        data : {_token : _token ,package_id : package_id , created_by_type : 1, created_by_id : logged_in_user_id}
                    }
            },
            ticket_quantity: {
                notEmpty: true,
                number : true,
                min : 1,
                max : 999999999
            }
        },
        messages: {
            ticket_type_id: {
                remote: "This ticket type already selected"
            },
            ticket_quantity: {
                number : "Please enter valid number",
                min : "Please enter positive value",
                max : "Value must be less than 8 digits"
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
            $('#ajaxLoader').show();
        }
    });

    $('.select2').select2().on(
        "change", function (e)
        {
            $(this).valid();   // jquery validation script validate on change
        }
    );;

});

