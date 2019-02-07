$(document).ready(function() {

    $("#add").validate({
        rules: {
            first_name: {
                required: true,
                validname: true,
                minlength: 3,
                maxlength: 50
            },
            last_name: {
                required: true,
                validname: true,
                minlength: 3,
                maxlength: 50
            },
            email: {
                required: true,
                validEmail: true,
                maxlength: 100
            },
            mobile_no: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            password: {
                required: true,
                atLeastOneCharacter: true,
                atLeastOneDigit: true,
                atLeastOneSpecialCharacter: true,
                minlength: 8,
                maxlength: 20
            },
            password_confirmation: {
                required: true,
                equalTo: '#password'
            },
            postcode: {
                postcode: true,
                minlength: 5,
                maxlength: 8
            }
        }
    });

});
