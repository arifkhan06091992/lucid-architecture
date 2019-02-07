
$(document).ready(function() {

    // validate form
    $("#add").validate({
        rules: {
            first_name: {
                notEmpty: true,
                validname: true,
                minlength: 3,
                maxlength: 50
            },
            last_name: {
                notEmpty: true,
                validname: true,
                minlength: 3,
                maxlength: 50
            },
            email: {
                notEmpty: true,
                validEmail: true,
                maxlength:100
            },
            mobile_no: {
                notEmpty: true,
                minlength:8,
                maxlength:20
            },
            password: {
                notEmpty: true,
                atLeastOneCharacter: true,
                atLeastOneDigit: true,
                atLeastOneSpecialCharacter: true,
                minlength: 8,
                maxlength: 20
            },
            password_confirmation: {
                notEmpty: true,
                equalTo: '#password'
            }
        },
        messages: {
            first_name: {
                minlength: "First name must be at least 3 characters long",
                maxlength: "First name can not be longer than 50 characters"
            },
            last_name: {
                minlength: "Last name must be at least 3 characters long",
                maxlength: "Last name can not be longer than 50 characters"
            },
            email: {
                maxlength: "Email cannot be longer than 100 characters"
            },
            password: {
                minlength: "Password must be at least 8 characters long",
                maxlength: "Password cannot be longer than 20 characters",
            },
            password_confirmation: {
                equalTo: "Please enter the same password as above"
            },
            mobile_no: {
                minlength:"Phone No. must contain at least 8 characters",
                maxlength: "Phone No. cannot be longer than 20 characters"
            }
        },
        errorPlacement: function (error, element) {
            $(element).tooltipster('update', $(error).text());
            $(element).tooltipster('show');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        submitHandler: function (form) {
            form.submit();
        }
    });


    // validate form
    $("#edit").validate({
        rules: {
            first_name: {
                notEmpty: true,
                validname: true,
                minlength: 3,
                maxlength: 50
            },
            last_name: {
                notEmpty: true,
                validname: true,
                minlength: 3,
                maxlength: 50
            },
            email: {
                notEmpty: true,
                validEmail: true,
                maxlength:100
            },
            mobile_no: {
                notEmpty: true,
                minlength:8,
                maxlength:20
            },
            password: {
                notEmpty: true,
                atLeastOneCharacter: true,
                atLeastOneDigit: true,
                atLeastOneSpecialCharacter: true,
                minlength: 8,
                maxlength: 20
            },
            password_confirmation: {
                notEmpty: true,
                equalTo: '#password'
            }
        },
        messages: {
            first_name: {
                minlength: "First name must be at least 3 characters long",
                maxlength: "First name can not be longer than 50 characters"
            },
            last_name: {
                minlength: "Last name must be at least 3 characters long",
                maxlength: "Last name can not be longer than 50 characters"
            },
            email: {
                maxlength: "Email cannot be longer than 100 characters"
            },
            password: {
                minlength: "Password must be at least 8 characters long",
                maxlength: "Password cannot be longer than 20 characters",
            },
            password_confirmation: {
                equalTo: "Please enter the same password as above"
            },
            mobile_no: {
                minlength:"Phone No. must contain at least 8 characters",
                maxlength: "Phone No. cannot be longer than 20 characters"
            }
        },
        errorPlacement: function (error, element) {
            $(element).tooltipster('update', $(error).text());
            $(element).tooltipster('show');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

});
