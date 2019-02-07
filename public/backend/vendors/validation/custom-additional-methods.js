/**
 * Created by dikshant.kala on 17-04-2017.
 */

$(document).ready(
    function ()
    {

        //validate greece postcode
        jQuery.validator.addMethod(
            'postcode', function (value, element)
            {

                return this.optional(element) || (value.match(/^[0-9\. ]+$/));

            }, 'Only 0-9, space are allowed.'
        );
        // only alphanumeric characters allowed
        jQuery.validator.addMethod(
            'atLeastOneCharacter', function (value, element)
            {

                return this.optional(element) || (value.match(/[a-zA-Z]/));

            }, 'Password must contain at least one letter.'
        );

        // only alphanumeric characters allowed
        jQuery.validator.addMethod(
            'atLeastOneDigit', function (value, element)
            {

                return this.optional(element) || value.match(/[0-9]/);

            }, 'Password must contain at least one digit.'
        );

        // only alphanumeric characters allowed
        jQuery.validator.addMethod(
            'atLeastOneSpecialCharacter', function (value, element)
            {

                return this.optional(element) || value.match(/[-!$%^&*()_+|~=`:<>?.@#\{\}\[\]\\;,]/);

            }, 'Password must contain at least one special character.'
        );

        //Only Alpahabets, period or apostrophe allowed
        jQuery.validator.addMethod(
            'validname', function (value, element)
            {
                return this.optional(element) || value.match(/^[a-zA-Z .']+$/i);
            }, 'Only Alpahabets, period or apostrophe allowed.'
        );

        //Only Alpahabets, space, period or apostrophe allowed
        jQuery.validator.addMethod(
            'validname_space', function (value, element)
            {
                return this.optional(element) || value.match(/^[a-zA-Z .']+$/i);
            }, 'Only Alpahabets, space, period or apostrophe allowed.'
        );


        //Please enter valid email
        jQuery.validator.addMethod(
            "validEmail", function (value, element)
            {
                if (value == '')
                {
                    return true;
                }
                var temp1;
                temp1 = true;
                var ind = value.indexOf('@');
                var str2 = value.substr(ind + 1);
                var str3 = str2.substr(0, str2.indexOf('.'));
                if (str3.lastIndexOf('-') == (str3.length - 1) || (str3.indexOf('-') != str3.lastIndexOf('-')))
                {
                    return false;
                }
                var str1 = value.substr(0, ind);
                if ((str1.lastIndexOf('_') == (str1.length - 1)) || (str1.lastIndexOf('.') == (str1.length - 1)) || (str1.lastIndexOf('-') == (str1.length - 1)))
                {
                    return false;
                }
                str = /(^[a-zA-Z0-9]+[\._-]{0,1})+([a-zA-Z0-9]+[_]{0,1})*@([a-zA-Z0-9]+[-]{0,1})+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]+)$/;
                temp1 = str.test(value);
                return temp1;
            }, "Please enter a valid email address."
        );

        // only alphanumeric characters allowed
        jQuery.validator.addMethod(
            'alphanumeric', function (value, element)
            {
                if (/^[a-zA-Z0-9]+$/i.test(value))
                {
                    return true;
                }
            }, 'Only Alphanumeric characters are allowed.'
        );

        jQuery.validator.addMethod(
            "notEmpty", function (value, element)
            {
                return value != '' && value.trim().length != 0;
            }, "THIS FIELD IS REQUIRED."
        );

        // only alphanumeric characters allowed
        jQuery.validator.addMethod('alphabets_and_spaces', function (value, element) {

            if(/^[a-zA-Z ']+$/i.test(value))
            {
                return true;
            }

        }, 'Only Alpahabets and space allowed.');

        // Valid URL
        $.validator.addMethod('validUrl', function(value, element) {
            var url = $.validator.methods.url.bind(this);
            return url(value, element);
        }, 'Please enter a valid URL like http://example.com or https://example.com');


    }
);
