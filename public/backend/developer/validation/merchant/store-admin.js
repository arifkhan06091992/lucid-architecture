/**
 * Created by dikshant.kala on 19-04-2017.
 */


$(document).ready(function() {

    // validate form
    $("#add").validate({
        rules: {
            name: {
                notEmpty: true,
                validname: true,
                minlength: 3,
                maxlength: 50
            },
            store_name: {
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
                maxlength:15
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
                maxlength:8
            }
        },
        messages: {
            name: {
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name can not be longer than 50 characters"
            },
            store_name: {
                minlength: "Store name must be at least 3 characters long",
                maxlength: "Store name can not be longer than 50 characters"
            },
            contact_person_name: {
                minlength: "Contact person name must be at least 3 characters long",
                maxlength: "Contact person name can not be longer than 50 characters"
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
