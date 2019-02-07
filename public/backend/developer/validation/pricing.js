/**
 * Created by ayushi agrawal on 17-04-2017.
 */


$(document).ready(function() {

    CKEDITOR.replace('features');
    // validate form
    $("#add").validate({
        rules: {
            title: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50
            },
            features: {
                notEmpty: function(textarea) {
                    CKEDITOR.instances[textarea.id].updateElement(); // update textarea
                    var editorcontent = textarea.value.replace(/<[^>]*>/gi, ''); // strip tags

                    return editorcontent.length === 0;
                },
                minlength: 3
            }
        },
        messages: {
            title: {
                minlength: "Title must be at least 3 characters long",
                maxlength: "Title can not be longer than 50 characters"
            },
            features: {
                minlength: "Features must be at least 3 characters long"
            }
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "features") {
                error.insertAfter("#cke_features");
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
