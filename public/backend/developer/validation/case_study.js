/**
 * Created by ayushi agrawal on 17-04-2017.
 */


$(document).ready(function() {

    // validate form
    $("#add").validate({
        rules: {
            client_name: {
                notEmpty: true,
                validname_space: true,
                minlength: 3,
                maxlength: 50,
                normalizer: function( value ) {
                    return $.trim( value );
                }
            },
            company_name: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            overview: {
                notEmpty: true,
                maxlength:100
            },
            location: {
                notEmpty: true
            },
            image: {
                notEmpty: true,
                extension: "jpg|png|jpeg"
            },
            description: {
                notEmpty: true,
                maxlength: 255
            },
            requirements: {
                notEmpty: true,
                maxlength: 255
            },
            our_solutions: {
                notEmpty: true,
                maxlength: 255
            },
            attendance_count: {
                notEmpty: true,
                number: true,
                min:0
            }

        },
        messages: {
            client_name: {
                minlength: "Client name must be at least 3 characters long",
                maxlength: "Client name can not be longer than 50 characters"
            },
            company_name: {
                minlength: "Company name must be at least 3 characters long",
                maxlength: "Company name can not be longer than 50 characters"
            },
            overview: {
                maxlength: "Overview cannot be longer than 100 characters"
            },
            description: {
                maxlength: "Description cannot be longer than 255 characters",
            },
            requirements: {
                maxlength: "Description cannot be longer than 255 characters",
            },
            our_solutions: {
                maxlength: "Description cannot be longer than 255 characters",
            },
            attendance_count: {
                number:"Attendance should be a number",
                min:"Attendance should be a number",
            },
            image: {
                extension:"Only jpeg,jpg,png formats are allowed.",
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
            client_name: {
                notEmpty: true,
                validname_space: true,
                minlength: 3,
                maxlength: 50,
                normalizer: function( value ) {
                    return $.trim( value );
                }
            },
            company_name: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            overview: {
                notEmpty: true,
                maxlength:100
            },
            location: {
                notEmpty: true
            },
            image: {
                extension: "jpg|png|jpeg"
            },
            description: {
                notEmpty: true,
                maxlength: 255
            },
            requirements: {
                notEmpty: true,
                maxlength: 255
            },
            our_solutions: {
                notEmpty: true,
                maxlength: 255
            },
            attendance_count: {
                notEmpty: true,
                number: true,
                min:0
            }

        },
        messages: {
            client_name: {
                minlength: "Client name must be at least 3 characters long",
                maxlength: "Client name can not be longer than 50 characters"
            },
            company_name: {
                minlength: "Company name must be at least 3 characters long",
                maxlength: "Company name can not be longer than 50 characters"
            },
            overview: {
                maxlength: "Overview cannot be longer than 100 characters"
            },
            description: {
                maxlength: "Description cannot be longer than 255 characters",
            },
            requirements: {
                maxlength: "Description cannot be longer than 255 characters",
            },
            our_solutions: {
                maxlength: "Description cannot be longer than 255 characters",
            },
            attendance_count: {
                number:"Attendance should be a number",
                min:"Attendance should be a number",
            },
            image: {
                extension:"Only jpeg,jpg,png formats are allowed.",
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
