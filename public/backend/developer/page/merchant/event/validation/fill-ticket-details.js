/**
 * Created by sonukumar.singh on 3/29/2017.
 */

$(document).ready(function() {

    // validate signup form on keyup and submit
    $("#fill-ticket-details-form").validate({
        ignore : "",
        rules: {
            parent_name: {
                notEmpty: true,
                validname: true,
                maxlength:20
            },
            parent_email: {
                notEmpty: true,
                validEmail: true,
                maxlength:100
            },
            parent_mobile_no: {
                notEmpty: true,
                number: true,
                minlength:10,
                maxlength:10
            },
            "names[]": {
                notEmpty: true,
                validname: true,
                minlength:3,
                maxlength:20
            },
            "dob[]": {
                notEmpty: true
            }
        },
        messages: {
            parent_name: {
                maxlength: "Name cannot be longer than 20 characters"
            },
            parent_email: {
                maxlength: "Email cannot be longer than 100 characters"
            },
            parent_mobile_no: {
                number: "Mobile No. Must be in Digits",
                minlength: "Mobile No. should be 10 digits",
                maxlength: "Mobile No. should be 10 digits"
            },
            "names[]": {
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name cannot be longer than 20 characters"
            }
        },
        submitHandler: function (form) {
            form.submit();
            $('#ajaxLoader').show();
        }
    });

    $(".dob").inputmask("yyyy/mm/dd", {yearrange: { minyear: 1900, maxyear: 2016 },dateFormat: 'dd/mm/yy'});

});
