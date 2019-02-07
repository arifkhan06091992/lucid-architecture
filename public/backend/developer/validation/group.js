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
                        url: BASE_URL+'/api/check-existing-group',
                        type: "post",
                        data : {_token : _token ,group_id : group_id , created_by_type : created_by_type, created_by_id : logged_in_user_id}
                    }
            }
        },
        messages: {
            title: {
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name cannot be longer than 20 characters",
                remote: "This group already registered"
            }
        },
        submitHandler: function (form) {
            form.submit();
            $('#ajaxLoader').show();
        }
    });

});

