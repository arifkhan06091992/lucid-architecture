/**
 * Created by ayushi agrawal on 17-04-2017.
 */


$(document).ready(function() {

    // validate form
    $("#add").validate({
        rules: {
            question: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            answer: {
                notEmpty: true,
                minlength: 3,
                maxlength: 1000
            }
        },
        messages: {
            question: {
                minlength: "Question be at least 3 characters long",
                maxlength: "Question can not be longer than 50 characters"
            },
            answer: {
                minlength: "Answer must be at least 3 characters long",
                maxlength: "Answer can not be longer than 1000 characters"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
