/**
 * Created by sonukumar.singh on 3/29/2017.
 */

$(document).ready(function() {

    var _token=$('meta[name="csrf-token"]').attr('content');

    // validate signup form on keyup and submit
    $("#add").validate({
        ignore : "",
        rules: {
            name: {
                notEmpty: true,
                minlength:3,
                maxlength:20,
                "remote" :
                    {
                        url: BASE_URL+'/api/check-existing-merchandise',
                        type: "post",
                        data : {_token : _token ,merchandise_id : merchandise_id , created_by_type : created_by_type, created_by_id : logged_in_user_id}
                    }
            },
            description: {
                notEmpty: true,
                minlength:10,
                maxlength:500
            },
            image: {
                notEmpty: true,
                extension: "jpg|jpeg|png|JPG|JPEG|PNG"
            },
            "color_name[]": {
                notEmpty: true,
                minlength:3,
                maxlength:20
            },
            "color[]": {
                notEmpty: true
            },
            "size[]": {
                notEmpty: true,
                maxlength:255
            }
        },
        messages: {
            name: {
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name cannot be longer than 20 characters",
                remote: "This merchandise already registered"
            },
            description: {
                minlength: "Description must be at least 10 characters long",
                maxlength: "Description cannot be longer than 500 characters"
            },
            image: {
                extension: "Only jpg, jpeg and png images allowed."
            },
            "color_name[]": {
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name cannot be longer than 20 characters"
            },
            "color[]": {

            },
            "size[]": {
                maxlength: "Name cannot be longer than 255 characters"
            }
        },
        submitHandler: function (form) {
            form.submit();
            $('#ajaxLoader').show();
        }
    });

    // validate signup form on keyup and submit
    $("#edit").validate({
        ignore : "",
        rules: {
            name: {
                notEmpty: true,
                minlength:3,
                maxlength:20,
                "remote" :
                    {
                        url: BASE_URL+'/api/check-existing-merchandise',
                        type: "post",
                        data : {_token : _token ,merchandise_id : merchandise_id , created_by_type : created_by_type, created_by_id : logged_in_user_id}
                    }
            },
            description: {
                notEmpty: true,
                minlength:10,
                maxlength:500
            },
            image: {
                extension: "jpg|jpeg|png|JPG|JPEG|PNG"
            },
            "color_name[]": {
                notEmpty: true,
                minlength:3,
                maxlength:20
            },
            "color[]": {
                notEmpty: true
            },
            "size[]": {
                notEmpty: true,
                maxlength:255
            }
        },
        messages: {
            name: {
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name cannot be longer than 20 characters",
                remote: "This merchandise already registered"
            },
            description: {
                minlength: "Description must be at least 10 characters long",
                maxlength: "Description cannot be longer than 500 characters"
            },
            image: {
                extension: "Only jpg, jpeg and png images allowed."
            },
            "color_name[]": {
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name cannot be longer than 20 characters"
            },
            "color[]": {

            },
            "size[]": {
                maxlength: "Name cannot be longer than 255 characters"
            }
        },
        submitHandler: function (form) {
            form.submit();
            $('#ajaxLoader').show();
        }
    });

});

function addColorField()
{
    NO_OF_COLOR_SECTIONS++;

    html=
        '<div class="row" id="color_section_'+NO_OF_COLOR_SECTIONS+'">\
            <div class="col-md-6 col-sm-6 col-xs-12">\
                <div class="form-group">\
                    <input class="form-control" placeholder="Enter Color Name" name="color_name[]" type="text" id="color_name_'+NO_OF_COLOR_SECTIONS+'">\
                    <div class="error-message" id="error_color_name_'+NO_OF_COLOR_SECTIONS+'"></div>\
                </div>\
            </div>\
            <div class="col-md-3 col-sm-3 col-xs-1">\
                <div class="product_color">\
                    <input class="jscolor color_input" placeholder="Enter Color Name" name="color[]" type="text" value="#23a8d3" id="color_'+NO_OF_COLOR_SECTIONS+'">\
                    <div class="error-message" id="error_color_'+NO_OF_COLOR_SECTIONS+'"></div>\
                </div>\
            </div>\
            <div class="col-md-2 col-sm-2 col-xs-1">\
                <div class="product_color_add">\
                    <button type="button" class="save_contact_btn" onclick="removeColorField('+NO_OF_COLOR_SECTIONS+')">X\
                    </button>\
                </div>\
            </div>\
        </div>';

    $('#color_section').append(html);

    jscolor.installByClassName("jscolor");
}

function removeColorField(section_key)
{
    $('#color_section_'+section_key).remove();
    jscolor.installByClassName("jscolor");
    NO_OF_COLOR_SECTIONS--;
}


function addSizeField()
{
    NO_OF_SIZE_SECTIONS++;

    html=
        '<div class="row" id="size_section_'+NO_OF_SIZE_SECTIONS+'">\
            <div class="col-md-9 col-sm-9 col-xs-9">\
                <div class="form-group">\
                    <input class="form-control" placeholder="Enter Size Name" name="size[]" type="text" id="size_'+NO_OF_SIZE_SECTIONS+'">\
                </div>\
            </div>\
            <div class="col-md-2 col-sm-2 col-xs-2">\
                <div class="product_color_add">\
                    <button type="button" class="save_contact_btn" onclick="removeSizeField('+NO_OF_SIZE_SECTIONS+')">X\
                    </button>\
                </div>\
            </div>\
        </div>';

    $('#size_section').append(html);
}

function removeSizeField(section_key)
{
    $('#size_section_'+section_key).remove();
    NO_OF_SIZE_SECTIONS--;
}