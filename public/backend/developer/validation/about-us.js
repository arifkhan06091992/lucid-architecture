/**
 * Created by ayushi agrawal on 17-04-5017.
 */


$(document).ready(function() {

    // validate form
    $("#edit").validate({
        rules: {
            first_section_title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            first_section_subtitle_1: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            first_section_text_1: {
                notEmpty: true,
                minlength: 3,
                maxlength: 255
            },
            first_section_subtitle_2: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            first_section_text_2: {
                notEmpty: true,
                minlength: 3,
                maxlength: 255
            },
            first_section_subtitle_3: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            first_section_text_3: {
                notEmpty: true,
                minlength: 3,
                maxlength: 255
            },
            second_section_title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            second_section_text: {
                notEmpty: true,
                minlength: 3,
                maxlength: 5000
            },
            third_section_title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            third_section_text: {
                notEmpty: true,
                minlength: 3,
                maxlength: 500
            },
            no_of_cities: {
                notEmpty: true,
                number: true,
                min:0,
                max : 100000000
            },
            no_of_organizers: {
                notEmpty: true,
                number: true,
                min:0,
                max : 100000000
            },
            no_of_event_created: {
                notEmpty: true,
                number: true,
                min:0,
                max : 100000000
            },
            no_of_registration: {
                notEmpty: true,
                number: true,
                min:0,
                max : 100000000
            }

        },
        messages: {
            first_section_title: {
                minlength: "First Section Title must be at least 3 characters long",
                maxlength: "First Section Title can not be longer than 50 characters"
            },
            first_section_subtitle_1: {
                minlength: "First Section Subtitle 1 must be at least 3 characters long",
                maxlength: "First Section Subtitle 1 can not be longer than 50 characters"
            },
            first_section_text_1: {
                minlength: "First Section Text 1 must be at least 3 characters long",
                maxlength: "First Section Text 1 can not be longer than 255 characters"
            },
            first_section_subtitle_2: {
                minlength: "First Section Subtitle 2 must be at least 3 characters long",
                maxlength: "First Section Subtitle 2 can not be longer than 50 characters"
            },
            first_section_text_2: {
                minlength: "First Section Text 2 must be at least 3 characters long",
                maxlength: "First Section Text 2 can not be longer than 255 characters"
            },
            first_section_subtitle_3: {
                minlength: "First Section Subtitle 3 must be at least 3 characters long",
                maxlength: "First Section Subtitle 3 can not be longer than 50 characters"
            },
            first_section_text_3: {
                minlength: "First Section Text 3 must be at least 3 characters long",
                maxlength: "First Section Text 3 can not be longer than 255 characters"
            },
            second_section_title: {
                minlength: "Second Section Title must be at least 3 characters long",
                maxlength: "Second Section Title can not be longer than 50 characters"
            },
            second_section_text: {
                minlength: "Second Section Text must be at least 3 characters long",
                maxlength: "Second Section Text can not be longer than 5000 characters"
            },
            third_section_title: {
                minlength: "Third Section Title must be at least 3 characters long",
                maxlength: "Third Section Title can not be longer than 50 characters"
            },
            third_section_text: {
                minlength: "Third Section Text must be at least 3 characters long",
                maxlength: "Third Section Text can not be longer than 500 characters"
            },
            no_of_cities: {
                number: "Please enter valid number",
                min:"Number should be a Positive value",
                max:"Number cannot be greater than 100000000"
            },
            no_of_organizers: {
                number: "Please enter valid number",
                min:"Number should be a Positive value",
                max:"Number cannot be greater than 100000000"
            },
            no_of_event_created: {
                number: "Please enter valid number",
                min:"Number should be a Positive value",
                max:"Number cannot be greater than 100000000"
            },
            no_of_registration: {
                number: "Please enter valid number",
                min:"Number should be a Positive value",
                max:"Number cannot be greater than 100000000"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

});
