$(document).ready(function() {

    var _token = $('input[name="_token"]').val();

    // validate form
    $("#add").validate({
        ignore : "",
        rules: {
            group_id: {
                notEmpty: true,
                "remote" :
                    {
                        url: BASE_URL+'/api/check-existing-event-group',
                        type: "post",
                        data : {_token : _token ,event_id : event_id , created_by_type : 2, created_by_id : logged_in_user_id}
                    }
            }

        },
        messages: {
            group_id: {
                "remote" : "This Group Already Added"
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
    );;

});
