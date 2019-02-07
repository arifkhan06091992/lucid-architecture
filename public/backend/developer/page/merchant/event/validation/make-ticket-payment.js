$(document).ready(function () {

    // Payment Methods Tabs

    $('ul.tabs li').click(
        function ()
        {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        }
    );

        //Paypal Checkout Button

    paypal.Button.render({

        env: PAYPAL_CHECKOUT_ENV, // sandbox | production

        style: {
            label: 'pay',
            fundingicons: true, // optional
            branding: true, // optional
            size:  'large',    // small | medium | large | responsive
            shape: 'pill',     // pill | rect
            color: 'blue',     // gold | blue | silver | black
            tagline: false
        },

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create
        client: {
            sandbox:    PAYPAL_SANDBOX_CLIENT_ID,
            production: PAYPAL_PRODUCTION_CLIENT_ID
        },

        // Show the buyer a 'Pay Now' button in the checkout flow
        commit: true,

        // payment() is called when the button is clicked
        payment: function(data, actions) {

            var total_price=$('#total_price').val();
            total_price=parseFloat(total_price);
            total_price=total_price.toFixed(2);
            console.log(total_price);

            // Make a call to the REST api to create the payment
            return actions.payment.create({
                payment: {
                    "transactions": [
                        {
                            "amount": {
                                "total": total_price,
                                "currency": "USD",
                                "details": {
                                    "subtotal": total_price
                                }
                            }
                            /*
                            ,
                            "item_list": {
                                "items": [
                                    {
                                        "name": EVENT_NAME,
                                        "description": PAYMENT_DESCRIPTION,
                                        "price": total_price,
                                        "quantity": NO_OF_TICKET,
                                        "currency": "USD"
                                    }
                                ]
                            }
                            */
                        }
                    ]
                }
            });
        },

        // onAuthorize() is called when the buyer approves the payment
        onAuthorize: function(data, actions) {

            // Make a call to the REST api to execute the payment
            return actions.payment.execute().then(function(payment) {

                if(payment.state=='failed')
                {
                    bootbox.dialog({
                        message: "<label class='text-danger'>Payment failed due to some reason. Please try again.</label>",
                        buttons: {
                            danger: {
                                label: "OK",
                                className: "btn-danger"
                            }
                        }
                    });
                }
                else
                {
                    $('#payment_type').val(1);
                    $('#payment_method').val(1);
                    $('#transaction_id').val(payment.id);
                    $('#payment_status').val((payment.state=="approved")?2:1);
                    $('#transaction_data').val(JSON.stringify(payment));
                    $('#make-payment-form').submit();
                }
            });
        }

    }, '#paypal-button-container');


});

function confirmOrder()
{
    if($('#confirm_booking').prop('checked'))
    {
        $('#payment_type').val(2);
        $('#payment_method').val(6);
        $('#transaction_id').val("Offline Payment");
        $('#payment_status').val(2);
        $('#transaction_data').val("");
        $('#make-payment-form').submit();
    }
    else
    {
        $('.error-message').html('Please Check Above Checkbox.');
    }
}

function checkCouponCode()
{
    var coupon_code_name = $('#coupon_code_name').val();

    var no_of_booked_ticket=$('#no_of_booked_ticket').val();

    var old_total_price=parseFloat($('#old_total_price').val());

    old_total_price=parseFloat(old_total_price);


    if(coupon_code_name=="")
    {
        $('#coupon_name').val("");
        $('#coupon_code').val("");
        $('#coupon_code_type').val("");
        $('#coupon_code_price_type').val("");
        $('#coupon_code_amount').val(0);
        $('#coupon_code_price').val(0);
        $('#total_price').val(old_total_price);

        $("#coupon_status").html("<label class='text-danger'>Please Enter Discount Coupon Code</label>");
        $('#coupon_amount').html("$0.00");
        $('#total_amount').html('$'+(old_total_price).toFixed(2));
        return false;
    }

    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/merchant/event/check-coupon-code/'+coupon_code_name,
        type: 'post',
        data: {  _token : $('meta[name="csrf-token"]').attr('content')},
        beforeSend: function() {
            $('#ajaxLoader').show();
        },
        success: function (data) {

            console.log(data);
            if(data.status==0)
            {
                $('#coupon_name').val("");
                $('#coupon_code').val("");
                $('#coupon_code_type').val("");
                $('#coupon_code_price_type').val("");
                $('#coupon_code_amount').val(0);
                $('#coupon_code_price').val(0);
                $('#total_price').val(old_total_price);

                $("#coupon_status").html("<label class='text-danger'>Invalid Coupon Code</label>");
                $('#coupon_amount').html("$0.00");
                $('#total_amount').html('$'+(old_total_price).toFixed(2));
            }
            if(data.status=='1')
            {
                var coupon_code = data.coupon_data.coupon_code;

                if(data.coupon_data.coupon_code_price_type==1)
                {
                    var discount_amount=data.coupon_data.coupon_code_amount;
                    discount_amount=parseFloat(discount_amount);

                    var total = old_total_price-discount_amount;
                    total=total.toFixed(2);

                    discount_amount=discount_amount.toFixed(2);

                    if(total<=0)
                    {
                        $('#coupon_name').val("");
                        $('#coupon_code').val("");
                        $('#coupon_code_type').val("");
                        $('#coupon_code_price_type').val("");
                        $('#coupon_code_amount').val(0);
                        $('#coupon_code_price').val(0);
                        $('#total_price').val(old_total_price);

                        $("#coupon_status").html("<label class='text-danger'>This Coupon Code Could not be applied because it's  price exceeds or equal to total price of products</label>");
                        $('#coupon_amount').html("$0.00");
                        $('#total_amount').html('$'+(old_total_price).toFixed(2));
                    }
                    else
                    {

                        $('#coupon_name').val(data.coupon_data.coupon_name);
                        $('#coupon_code').val(coupon_code);
                        $('#coupon_code_type').val(data.coupon_data.coupon_code_type);
                        $('#coupon_code_price_type').val(data.coupon_data.coupon_code_price_type);
                        $('#coupon_code_amount').val(data.coupon_data.coupon_code_amount);
                        $('#coupon_code_price').val(discount_amount);
                        $('#total_price').val(total);

                        $("#coupon_status").html("<label class='text-success'>Coupon "+coupon_code+" Applied</label>");
                        $('#coupon_amount').html('$'+discount_amount);
                        $('#total_amount').html('$'+(total));
                        $('#coupon_code_button').attr('onclick','removeCouponCode()');
                        $('#coupon_code_button').attr('value','Remove');
                    }
                }
                if(data.coupon_data.coupon_code_price_type==2)
                {
                    var discount_percentage=data.coupon_data.coupon_code_amount;
                    discount_percentage=parseFloat(discount_percentage);
                    discount_amount=old_total_price*discount_percentage/100;

                    var total = old_total_price-discount_amount;

                    total=total.toFixed(2);
                    discount_amount=discount_amount.toFixed(2);

                    $('#coupon_name').val(data.coupon_data.coupon_name);
                    $('#coupon_code').val(coupon_code);
                    $('#coupon_code_type').val(data.coupon_data.coupon_code_type);
                    $('#coupon_code_price_type').val(data.coupon_data.coupon_code_price_type);
                    $('#coupon_code_amount').val(data.coupon_data.coupon_code_amount);
                    $('#coupon_code_price').val(discount_amount);
                    $('#total_price').val(total);

                    $("#coupon_status").html("<label class='text-success'>Coupon "+coupon_code+" Applied</label>");
                    $('#coupon_amount').html('$'+discount_amount);
                    $('#total_amount').html('$'+(total));

                    $('#coupon_code_button').attr('onclick','removeCouponCode()');
                    $('#coupon_code_button').attr('value','Remove');
                }

            }

            $('#ajaxLoader').hide();

        },
        error: function () {

            $('#coupon_name').val("");
            $('#coupon_code').val("");
            $('#coupon_code_type').val("");
            $('#coupon_code_price_type').val("");
            $('#coupon_code_amount').val(0);
            $('#coupon_code_price').val(0);
            $('#total_price').val(old_total_price);

            $("#coupon_status").html("<label class='text-danger'>Invalid Coupon Code</label>");
            $('#coupon_amount').html("$0.00");
            $('#total_amount').html('$'+(old_total_price).toFixed(2));
            $('#ajaxLoader').hide();
        }
    });

}

function removeCouponCode()
{
    var old_total_price=parseFloat($('#old_total_price').val());

    $('#coupon_name').val("");
    $('#coupon_code').val("");
    $('#coupon_code_type').val("");
    $('#coupon_code_price_type').val("");
    $('#coupon_code_amount').val(0);
    $('#coupon_code_price').val(0);
    $('#total_price').val(old_total_price);

    $("#coupon_status").html("<label class='text-danger'>Coupon Code Removed.</label>");
    $('#coupon_amount').html("$0.00");
    $('#total_amount').html('$'+(old_total_price).toFixed(2));

    $('#coupon_code_button').attr('onclick','checkCouponCode()');
    $('#coupon_code_button').attr('value','Apply');
}