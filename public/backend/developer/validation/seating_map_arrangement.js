
$(document).ready(function() {

    var _token=$('meta[name="csrf-token"]').attr('content');

    // validate form
    $("#add").validate({
        ignore : "",
        rules: {
            title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50,
                "remote" :
                    {
                        url: BASE_URL+'/api/check-existing-seating-maps',
                        type: "post",
                        data : {_token : _token ,seating_map_id : seating_map_id , created_by_type : created_by_type, created_by_id : logged_in_user_id}
                    }
            },
            no_of_section: {
                notEmpty: true,
                digits : true,
                min: 0,
                max: 50
            },
            "name_of_sections[]": {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            }
        },
        messages: {
            title: {
                minlength: "name must be at least 3 characters long",
                maxlength: "name can not be longer than 50 characters",
                remote: "This name already registered"
            },
            no_of_section: {
                digits : "Please Enter a valid Digit",
                min: "Please enter positive value",
                max: "Maximum 50 sections allowed"
            },
            "name_of_sections[]": {
                minlength: "name must be at least 3 characters long",
                maxlength: "name can not be longer than 50 characters"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $('#no_of_section').keyup(function(){

        var no_of_sections=$(this).val();
        var html="";
        var i;

        if(parseInt(no_of_sections)>=1 && parseInt(no_of_sections)<=50)
        {
            for(i=1;i<=no_of_sections;i++)
            {
                html+=
                    '<div class="item form-group">\
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="no_of_section">Name of Section '+i+' <span class="notEmpty" aria-notEmpty="true">*</span></label>\
                        <div class="col-md-6 col-sm-6 col-xs-12">\
                            <input class="form-control col-md-7 col-xs-12" id="name_of_section_'+i+'" placeholder="Enter Name of Section" name="name_of_sections[]" type="text">\
                            <div class="error-message" id="error_name_of_section_'+i+'"></div>\
                        </div>\
                    </div>';
            }
        }
        $('#sections').html(html);
    });

});

function addSection()
{
    NO_OF_SECTIONS++;

    html=
        '<div class="item form-group">\
            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="no_of_section">Name of Section '+NO_OF_SECTIONS+' <span class="notEmpty" aria-notEmpty="true">*</span></label>\
            <div class="col-md-6 col-sm-6 col-xs-12">\
                <input class="form-control col-md-7 col-xs-12" id="name_of_section_'+NO_OF_SECTIONS+'" placeholder="Enter Name of Section" name="name_of_sections[]" type="text">\
                <div class="error-message" id="error_name_of_section_'+NO_OF_SECTIONS+'"></div>\
            </div>\
            <div class="col-md-3 col-sm-3 col-xs-12">\
                <input class="btn btn-danger" type="button" value="Remove" onclick="removeSection('+NO_OF_SECTIONS+')">\
            </div>\
        </div>';

    $('#sections').append(html);
}

function removeSection(section_key)
{
    console.log($('#name_of_section_'+section_key).parents('.item'));
    $('#name_of_section_'+section_key).parents('.item').remove();

    NO_OF_SECTIONS--;
}