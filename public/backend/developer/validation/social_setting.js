$(document).ready(function() {
    // validate form

    // only alphanumeric characters allowed
    jQuery.validator.addMethod('facebook_url', function (value, element) {

        return this.optional(element) || (value.match(/^(https?:\/\/)?((w{3}\.)?)facebook\.com\/(#!\/)?[a-z0-9_]+$/));

    }, 'Faceboojk');

    $("#edit").validate({

        rules: {
            facebook_url: {
                notEmpty: true,
                validUrl : true,
                minlength: 3,
                maxlength: 255
            },
            twitter_url: {
                notEmpty: true,
                validUrl : true,
                minlength: 3,
                maxlength: 255
            },
            google_plus_url: {
                notEmpty: true,
                validUrl : true,
                minlength: 3,
                maxlength: 255
            },
            linkedin_url: {
                notEmpty: true,
                validUrl : true,
                minlength: 3,
                maxlength: 255
            },
            instagram: {
                notEmpty: true,
                validUrl : true,
                minlength: 3,
                maxlength: 255
            }
        },
        messages: {
            facebook_url: {
                minlength: "Link must be at least 3 characters long",
                maxlength: "Link can not be longer than 255 characters"
            },
            twitter_url: {
                minlength: "Link must be at least 3 characters long",
                maxlength: "Link can not be longer than 255 characters"
            },
            google_plus_url: {
                minlength: "Link must be at least 3 characters long",
                maxlength: "Link can not be longer than 255 characters"
            },
            linkedin_url: {
                minlength: "Link must be at least 3 characters long",
                maxlength: "Link can not be longer than 255 characters"
            },
            instagram: {
                minlength: "Link must be at least 3 characters long",
                maxlength: "Link can not be longer than 255 characters"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $("#edit_general").validate({

        rules: {
            transaction_fee: {
                notEmpty: true,
                number: true,
                min:0
            },
            sms_feature_price: {
                notEmpty: true,
                number: true,
                min:0
            },
            vat: {
                notEmpty: true,
                number: true,
                max:100,
                min:0
            },
        },
        messages:{
            transaction_fee: {
                min:"Please enter a valid number"
            },
            sms_feature_price: {
                min:"Please enter a valid number"
            },
            vat: {
                min:"Please enter a valid number"
            },
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
