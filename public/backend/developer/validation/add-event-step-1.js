$(document).ready(
    function ()
    {
        var _token = $('input[name="_token"]').val();

        // -----------------------------------validate form-----------------------------------------------------
        $("#add").validate(
            {
                ignore: "",
                rules: {
                    title: {
                        notEmpty: true,
                        minlength: 3,
                        maxlength: 50
                    },
                    organizer_id: {
                        notEmpty: true
                    },
                    event_category_id: {
                        notEmpty: true
                    },
                    event_subcategory_id: {
                        notEmpty: true
                    },
                    event_type_id: {
                        notEmpty: true
                    },
                    seating_map_id: {
                        notEmpty: true
                    },
                    start_time: {
                        notEmpty: true,
                    },
                    end_time: {
                        notEmpty: true
                    },
                    image: {
                        notEmpty: true,
                        extension: "jpg|jpeg|png|JPG|JPEG|PNG"
                    },
                    description: {
                        required: function (textarea)
                        {
                            CKEDITOR.instances[textarea.id].updateElement(); // update textarea
                            var editorcontent = textarea.value.replace(/<[^>]*>/gi, ''); // strip tags
                            return editorcontent.length === 0;
                        },
                        minlength: 3,
                        maxlength: 5000
                    },
                    terms_condition: {
                        required: function (textarea)
                        {
                            CKEDITOR.instances[textarea.id].updateElement(); // update textarea
                            var editorcontent = textarea.value.replace(/<[^>]*>/gi, ''); // strip tags
                            return editorcontent.length === 0;
                        },
                        minlength: 3,
                        maxlength: 5000
                    },
                    tag_ids: {
                        notEmpty: true,
                        maxlength: 500
                    },
                    is_recurring_event: {
                        notEmpty: true
                    }

                },
                messages: {
                    title: {
                        minlength: "Title must be at least 3 characters long",
                        maxlength: "Title cannot be longer than 50 characters"
                    },
                    organizer_id: {},
                    event_category_id: {},
                    event_subcategory_id: {},
                    event_type_id: {},
                    seating_map_id: {},
                    start_time: {},
                    end_time: {},
                    image: {
                        extension: "Only jpg, jpeg and png images allowed."
                    },
                    description: {
                        minlength: "Description must be at least 3 characters long",
                        maxlength: "Description cannot be longer than 5000 characters"
                    },
                    terms_condition: {
                        minlength: "Terms and Condition must be at least 3 characters long",
                        maxlength: "Terms and Condition cannot be longer than 5000 characters"
                    },
                    tag_ids: {
                        maxlength: "Tags cannot be longer than 500 characters"
                    },
                    is_recurring_event: {}

                },
                errorPlacement: function (error, element)
                {

                    if (element.attr("class") == "form-control ck-editor error" || element.attr("class") == "form-control select2 select2-hidden-accessible error" || element.attr("class") == "form-control tags error")
                    {
                        error.insertAfter($(element).next());
                    }
                    else
                    {
                        error.insertAfter(element);
                    }
                },
                submitHandler: function (form)
                {
                    form.submit();
                }
            }
        );

        // -----------------------------------validate form-----------------------------------------------------
        $("#edit").validate(
            {
                ignore: "",
                rules: {
                    title: {
                        notEmpty: true,
                        minlength: 3,
                        maxlength: 50
                    },
                    organizer_id: {
                        notEmpty: true
                    },
                    event_category_id: {
                        notEmpty: true
                    },
                    event_subcategory_id: {
                        notEmpty: true
                    },
                    event_type_id: {
                        notEmpty: true
                    },
                    seating_map_id: {
                        notEmpty: true
                    },
                    start_time: {
                        notEmpty: true,
                    },
                    end_time: {
                        notEmpty: true
                    },
                    image: {
                        extension: "jpg|jpeg|png|JPG|JPEG|PNG"
                    },
                    description: {
                        required: function (textarea)
                        {
                            CKEDITOR.instances[textarea.id].updateElement(); // update textarea
                            var editorcontent = textarea.value.replace(/<[^>]*>/gi, ''); // strip tags
                            return editorcontent.length === 0;
                        },
                        minlength: 3,
                        maxlength: 5000
                    },
                    terms_condition: {
                        required: function (textarea)
                        {
                            CKEDITOR.instances[textarea.id].updateElement(); // update textarea
                            var editorcontent = textarea.value.replace(/<[^>]*>/gi, ''); // strip tags
                            return editorcontent.length === 0;
                        },
                        minlength: 3,
                        maxlength: 5000
                    },
                    tag_ids: {
                        notEmpty: true,
                        maxlength: 500
                    },
                    is_recurring_event: {
                        notEmpty: true
                    }

                },
                messages: {
                    title: {
                        minlength: "Title must be at least 3 characters long",
                        maxlength: "Title cannot be longer than 50 characters"
                    },
                    organizer_id: {},
                    event_category_id: {},
                    event_subcategory_id: {},
                    event_type_id: {},
                    seating_map_id: {},
                    start_time: {},
                    end_time: {},
                    image: {
                        extension: "Only jpg, jpeg and png images allowed."
                    },
                    description: {
                        minlength: "Description must be at least 3 characters long",
                        maxlength: "Description cannot be longer than 5000 characters"
                    },
                    terms_condition: {
                        minlength: "Terms and Condition must be at least 3 characters long",
                        maxlength: "Terms and Condition cannot be longer than 5000 characters"
                    },
                    tag_ids: {
                        maxlength: "Tags cannot be longer than 500 characters"
                    },
                    is_recurring_event: {}

                },
                errorPlacement: function (error, element)
                {

                    if (element.attr("class") == "form-control ck-editor error" || element.attr("class") == "form-control select2 select2-hidden-accessible error" || element.attr("class") == "form-control tags error")
                    {
                        error.insertAfter($(element).next());
                    }
                    else
                    {
                        error.insertAfter(element);
                    }
                },
                submitHandler: function (form)
                {
                    form.submit();
                }
            }
        );

        // -----------------------------------End validate form-----------------------------------------------------


        // ----------------------------------Select 2-----------------------------------------------------

        $('.select2').select2().on(
            "change", function (e)
            {
                $(this).valid();   // jquery validation script validate on change
            }
        );

        // ----------------------------------End Select 2-----------------------------------------------------

        $(
            function ()
            {
                $.fn.datetimepicker.defaults.extraFormats = ['YYYY-MM-DD HH:mm'];
                $('#start_time').datetimepicker({sideBySide: true});
                $('#end_time').datetimepicker(
                    {
                        useCurrent: false, //Important! See issue #1075
                        sideBySide: true
                    }
                );
                $("#start_time").on(
                    "dp.change", function (e)
                    {
                        $('#end_time').data("DateTimePicker").minDate(e.date);
                    }
                );
                $("#end_time").on(
                    "dp.change", function (e)
                    {
                        $('#start_time').data("DateTimePicker").maxDate(e.date);
                    }
                );
            }
        );

        // ----------------------------------CKEDITOR With validation-----------------------------------------------------

        CKEDITOR.replace('description').on(
            'change', function ()
            {
                $("#description").valid();
            }
        );
        CKEDITOR.replace('terms_condition').on(
            'change', function ()
            {
                $("#terms_condition").valid();
            }
        );

        $('#tag_ids').tagsInput(
            {
                width: 'auto',
                'onChange' : function(){
                    $('#tag_ids').valid();
                },
            }
        );


        $('#event_category_id').change(
            function ()
            {

                var state = "not_found";
                if ($('#event_category_id').val() != "")
                {
                    event_category_id = $('#event_category_id').val();
                }
                $.ajax(
                    {
                        url: BASE_URL + '/admin/event/getSubcategoryByCategory',
                        type: 'post',
                        data: {
                            event_category_id: event_category_id,
                            _token: _token
                        },
                        dataType: 'text',
                        beforeSend: function ()
                        {
                            $('#ajaxLoader').show();
                        },
                        success: function (data, textStatus, jQxhr)
                        {
                            //console.log( data );
                            $('#event_subcategory_id').html(data);
                            $('#ajaxLoader').hide();
                        },
                        error: function (jqXhr, textStatus, errorThrown)
                        {
                            console.log(errorThrown);
                        }
                    }
                );

            }
        );

    }
);