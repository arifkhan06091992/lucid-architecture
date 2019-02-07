$(document).ready(function() {

    var _token = $('input[name="_token"]').val();

    // validate form
    $("#add").validate({
        ignore : "",
        rules: {
            schedule_type: {
                required: true
            },
            "hourly_included_days[]": {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '1';
                }
            },
            hourly_start_recurring_at: {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '1';
                }
            },
            hourly_end_recurring_at: {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '1';
                }
            },
            hourly_repeat_every: {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '1';
                }
            },
            daily_time: {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '2';
                }
            },
            "daily_repeat_every[]": {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '2';
                }
            },
            weekly_day: {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '3';
                }
            },
            weekly_time: {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '3';
                }
            },
            weekly_repeat_every: {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '3';
                },
                digits : true,
                min: 0,
                max: 999
            },
            monthly_day: {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '4';
                }
            },
            monthly_time: {
                required: function(element){
                    return $("input[name='schedule_type']:checked").val() == '4';
                }
            },
            sales_close_time: {
                required: true
            },
            is_social_media_discount: {
                required: true
            },
            like_discount_type: {
                required: function(element){
                    return $("input[name='is_social_media_discount']:checked").val() == '1';
                }
            },
            like_discount: {
                required: function(element){
                    return $("input[name='is_social_media_discount']:checked").val() == '1';
                },
                number: true,
                min: 0,
                max: 99999999
            },
            share_discount_type: {
                required: function(element){
                    return $("input[name='is_social_media_discount']:checked").val() == '1';
                }
            },
            share_discount: {
                required: function(element){
                    return $("input[name='is_social_media_discount']:checked").val() == '1';
                },
                number: true,
                min: 0,
                max: 99999999
            },
            like_share_discount_type: {
                required: function(element){
                    return $("input[name='is_social_media_discount']:checked").val() == '1';
                }
            },
            like_share_discount: {
                required: function(element){
                    return $("input[name='is_social_media_discount']:checked").val() == '1';
                },
                number: true,
                min: 0,
                max: 99999999
            },
            coupon_code_id: {
                required: function(element){
                    return event_type_id == '2';
                }
            },
            coupon_code_price: {
                required: function(element){
                    return event_type_id == '2';
                }
            },
            social_facebook_link: {
                notEmpty: true,
                minlength:3,
                maxlength:255,
                validUrl : true
            },
            social_twitter_link: {
                notEmpty: true,
                minlength:3,
                maxlength:255,
                validUrl : true
            },
            social_google_link: {
                notEmpty: true,
                minlength:3,
                maxlength:255,
                validUrl : true
            },
            social_linkedin_link: {
                notEmpty: true,
                minlength:3,
                maxlength:255,
                validUrl : true
            },
            social_instagram_link: {
                notEmpty: true,
                minlength:3,
                maxlength:255,
                validUrl : true
            },
            social_youtube_link: {
                notEmpty: true,
                minlength:3,
                maxlength:255,
                validUrl : true
            },
            is_merchant_sale: {
                required: true
            }

        },
        messages: {
            schedule_type: {

            },
            "hourly_included_days[]": {

            },
            hourly_start_recurring_at: {

            },
            hourly_end_recurring_at: {

            },
            hourly_repeat_every: {

            },
            daily_time: {

            },
            "daily_repeat_every[]": {

            },
            weekly_day: {

            },
            weekly_time: {

            },
            weekly_repeat_every: {
                digits : "Please Enter a valid Digit",
                min: "Please enter positive value",
                max: "Maximum 3 digits allowed"
            },
            monthly_day: {

            },
            monthly_time: {

            },
            sales_close_time: {

            },
            is_social_media_discount: {

            },
            like_discount_type: {

            },
            like_discount: {
                number: "Please Enter a valid Price",
                min: "Please enter positive value",
                max: "Maximum 8 digits allowed"
            },
            share_discount_type: {

            },
            share_discount: {
                number: "Please Enter a valid Price",
                min: "Please enter positive value",
                max: "Maximum 8 digits allowed"
            },
            like_share_discount_type: {

            },
            like_share_discount: {
                number: "Please Enter a valid Price",
                min: "Please enter positive value",
                max: "Maximum 8 digits allowed"
            },
            coupon_code_id: {

            },
            coupon_code_price: {

            },
            social_facebook_link: {
                minlength:"Facebook link must contain at least 3 characters",
                maxlength: "Facebook link cannot be longer than 255 characters"
            },
            social_twitter_link: {
                minlength:"Twitter link must contain at least 3 characters",
                maxlength: "Twitter link cannot be longer than 255 characters"
            },
            social_google_link: {
                minlength:"Google link must contain at least 3 characters",
                maxlength: "Google link cannot be longer than 255 characters"
            },
            social_linkedin_link: {
                minlength:"LinkedIn link must contain at least 3 characters",
                maxlength: "LinkedIn link cannot be longer than 255 characters"
            },
            social_instagram_link: {
                minlength:"Intasgram link must contain at least 3 characters",
                maxlength:"Instagram link cannot be longer than 255 characters"
            },
            social_youtube_link: {
                minlength:"Youtube link must contain at least 3 characters",
                maxlength: "Youtube link cannot be longer than 255 characters"
            },
            is_merchant_sale: {

            }

        },
        errorPlacement: function (error, element) {

            if (element.attr("class") == "form-control select2 select2-hidden-accessible error"|| element.attr("class") == "form-control tags error")
            {
                error.insertAfter($(element).next());
            }
            else
            {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $('.select2').select2().on(
        "change", function (e)
        {
            $(this).valid();   // jquery validation script validate on change
        }
    );;

    if (/Mobi/.test(navigator.userAgent))
    {
        // if mobile device, use native pickers
        $(".time input").attr("type", "time");
    }
    else
    {

        $(".timepicker").datetimepicker({
            format: "LT",
            icons: {
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down"
            }
        });
    }

    $('.duration_picker').durationPicker({ showSeconds: true ,showDays : false});

    $('.sales-close-picker').durationPicker();

    /**
     * --- Hide and show repeat block according to schedule type
     */

    function changeSchedule()
    {
        if ($("input[name='schedule_type']:checked").val() == '1')
        {
            $('#hourly_section').show();
            $('#daily_section').hide();
            $('#weekly_section').hide();
            $('#monthly_section').hide();
        }

        if ($("input[name='schedule_type']:checked").val() == '2')
        {
            $('#hourly_section').hide();
            $('#daily_section').show();
            $('#weekly_section').hide();
            $('#monthly_section').hide();
        }

        if ($("input[name='schedule_type']:checked").val() == '3')
        {
            $('#hourly_section').hide();
            $('#daily_section').hide();
            $('#weekly_section').show();
            $('#monthly_section').hide();
        }

        if ($("input[name='schedule_type']:checked").val() == '4')
        {
            $('#hourly_section').hide();
            $('#daily_section').hide();
            $('#weekly_section').hide();
            $('#monthly_section').show();
        }
    }

    changeSchedule();

    $('input[type=radio][name=schedule_type]').on('change', function(event){
        changeSchedule();
    });

    /**
     * --- Hide and show discount block
     */

    function changeSocialDiscount()
    {
        if ($("input[name='is_social_media_discount']:checked").val() == '1')
        {
            $('#discount_section').show();
        }

        if ($("input[name='is_social_media_discount']:checked").val() == '0')
        {
            $('#discount_section').hide();
        }
    }

    changeSocialDiscount();

    $('input[type=radio][name=is_social_media_discount]').on('change', function(event){
        changeSocialDiscount();
    });

});
