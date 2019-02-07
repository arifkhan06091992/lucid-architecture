/**
 * Created by ayushi agrawal on 17-04-2017.
 */


$(document).ready(function() {

    // validate form
    $("#add").validate({
        rules: {
            title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            sub_title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            link: {
                notEmpty: true,
                validUrl : true,
                minlength: 3,
                maxlength: 255
            },
            link_title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            image: {
                notEmpty: true,
                extension: "jpg|png|jpeg"
            }
        },
        messages: {
            title: {
                minlength: "Title must be at least 3 characters long",
                maxlength: "Title can not be longer than 50 characters"
            },
            sub_title: {
                minlength: "Sub Title must be at least 3 characters long",
                maxlength: "Sub Title can not be longer than 50 characters"
            },
            link: {
                minlength: "Link must be at least 3 characters long",
                maxlength: "Link can not be longer than 255 characters"
            },
            link_title: {
                minlength: "Link Title must be at least 3 characters long",
                maxlength: "Link Title can not be longer than 50 characters"
            },
            image: {
                extension:"Only jpeg,jpg,png formats are allowed.",
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    // validate form
    $("#edit").validate({
        rules: {
            title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            sub_title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            link: {
                notEmpty: true,
                validUrl : true,
                minlength: 3,
                maxlength: 255
            },
            link_title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            image: {
                extension: "jpg|png|jpeg"
            }
        },
        messages: {
            title: {
                minlength: "Title must be at least 3 characters long",
                maxlength: "Title can not be longer than 50 characters"
            },
            sub_title: {
                minlength: "Sub Title must be at least 3 characters long",
                maxlength: "Sub Title can not be longer than 50 characters"
            },
            link: {
                minlength: "Link must be at least 3 characters long",
                maxlength: "Link can not be longer than 255 characters"
            },
            link_title: {
                minlength: "Link Title must be at least 3 characters long",
                maxlength: "Link Title can not be longer than 50 characters"
            },
            image: {
                extension:"Only jpeg,jpg,png formats are allowed.",
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
