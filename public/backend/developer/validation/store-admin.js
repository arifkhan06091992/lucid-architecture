$(document).ready(function() {

    // validate form
    $("#add").validate({
        rules: {
            merchant_id: {
                notEmpty: true
            },
            store_name: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            name: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            contact_person_name: {
                notEmpty: true,
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
                number:true,
                minlength:8,
                maxlength:15,
                min:1
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
            },
            postcode: {
                postcode: true,
                minlength: 5,
                maxlength:8,
                normalizer: function( value ) {
                    return $.trim( value );
                }
            }
        },
        messages: {
            store_name: {
                minlength: "First name must be at least 3 characters long",
                maxlength: "First name can not be longer than 50 characters"
            },
            name: {
                minlength: "Last name must be at least 3 characters long",
                maxlength: "Last name can not be longer than 50 characters"
            },
            contact_person_name: {
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
                minlength:"Mobile No. must contain at least 8 digits",
                maxlength: "Mobile No. cannot be longer than 15 digits",
                min:"Please enter a valid number"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });


});