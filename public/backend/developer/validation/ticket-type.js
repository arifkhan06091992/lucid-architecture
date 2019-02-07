/**
 * Created by sonukumar.singh on 3/29/2017.
 */

$(document).ready(function() {

    var _token=$('meta[name="csrf-token"]').attr('content');

    // validate signup form on keyup and submit
    $("#add").validate({
        rules: {
            title: {
                notEmpty: true,
                minlength:3,
                maxlength:20,
                "remote" :
                    {
                        url: BASE_URL+'/api/check-existing-ticket-type',
                        type: "post",
                        data : {_token : _token ,ticket_type_id : ticket_type_id , created_by_type : created_by_type, created_by_id : logged_in_user_id}
                    }
            },
            description: {
                notEmpty: true,
                minlength:10,
                maxlength:500
            }
        },
        messages: {
            title: {
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name cannot be longer than 20 characters",
                remote: "This ticket type already registered"
            },
            description: {
                minlength: "Description must be at least 10 characters long",
                maxlength: "Description cannot be longer than 500 characters"
            }
        },
        submitHandler: function (form) {
            form.submit();
            $('#ajaxLoader').show();
        }
    });

});

