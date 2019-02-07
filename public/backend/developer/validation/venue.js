
$(document).ready(function() {

    var _token=$('meta[name="csrf-token"]').attr('content');

    // validate form

    $("#add").validate({
        rules: {
            venue_name: {
                notEmpty: true,
                minlength: 3,
                maxlength: 50,
                "remote" :
                    {
                        url: BASE_URL+'/api/check-existing-venue',
                        type: "post",
                        data : {_token : _token ,venue_id : venue_id , created_by_type : created_by_type, created_by_id : logged_in_user_id}
                    }
            },
            address: {
                notEmpty: true
            },
            latitude: {
                notEmpty: true
            },
            longitude: {
                notEmpty: true
            },
            city: {
                notEmpty: true
            },
            country_id: {
                notEmpty: true
            },
            post_code: {
                notEmpty: true,
                minlength: 5,
                maxlength:8
            },
            telephone: {
                notEmpty: true,
                number:true,
                minlength:8,
                maxlength:15,
                min:1
            },
            logo: {
                notEmpty: true,
                extension : 'jpg,png'
            }
        },
        messages: {
            venue_name: {
                minlength: "Venue name must be at least 3 characters long",
                maxlength: "Venue name can not be longer than 50 characters",
                remote: "This Venue name already registered"
            },
            logo: {
                extension:"Only jpg,png formats are allowed.",
            },
            telephone: {
                minlength:"Telephone must contain at least 8 digits",
                maxlength: "Telephone cannot be longer than 15 digits",
                min:"Please enter a valid number"
            },
            post_code: {
                minlength:"Post Code must contain at least 5 digits",
                maxlength: "Post Code cannot be longer than 8 digits"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });


    // validate form
    $("#edit").validate({
        rules: {
            venue_name: {
                notEmpty: true,
                validname_space: true,
                minlength: 3,
                maxlength: 50,
                normalizer: function( value ) {
                    return $.trim( value );
                },
                "remote" :
                    {
                        url: BASE_URL+'/api/check-existing-venue',
                        type: "post",
                        data : {_token : _token ,venue_id : venue_id , created_by_type : created_by_type, created_by_id : logged_in_user_id}
                    }
            },
            address: {
                notEmpty: true
            },
            latitude: {
                notEmpty: true
            },
            longitude: {
                notEmpty: true
            },
            city: {
                notEmpty: true
            },
            country_id: {
                notEmpty: true
            },
            post_code: {
                notEmpty: true,
                postcode: true,
                minlength: 5,
                maxlength:8
            },
            telephone: {
                notEmpty: true,
                number:true,
                minlength:8,
                maxlength:15,
                min:1
            },
            logo: {
                extension : 'jpg,png'
            }
        },
        messages: {
            venue_name: {
                minlength: "Venue name must be at least 3 characters long",
                maxlength: "Venue name can not be longer than 50 characters",
                remote: "This Venue name already registered"
            },
            logo: {
                extension:"Only jpg,png formats are allowed.",
            },
            telephone: {
                minlength:"Telephone must contain at least 8 digits",
                maxlength: "Telephone cannot be longer than 15 digits",
                min:"Please enter a valid number"
            },
            post_code: {
                minlength:"Post Code must contain at least 5 digits",
                maxlength: "Post Code cannot be longer than 8 digits"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });



    $('#choose_from_map').click(function(){

        $('#select-address-modal').modal('show');

    });

    /*----------------------------------------

    $('#place').select2(
        {
            ajax: {
                url: BASE_URL + '/api/getLocationSuggestions',
                dataType: 'json',
                quietMillis: 100,
                data: function (term, page)
                {
                    return {
                        term: term, //search term
                        page_limit: 250 // page size
                    };
                },
                results: function (data, page)
                {
                    return {results: data.results};
                }
            }
        }
    ).change(function(){

        var place_id =$(this).val();
        if(place_id!=null)
        {
            $.ajax(
                {
                    url: BASE_URL + '/api/getLocationDetail',
                    type: 'get',
                    data: {
                        placeid : $(this).val(),
                        _token : $('meta[name="csrf-token"]').attr('content')
                    },
                    beforeSend: function ()
                    {
                        $('#ajaxLoader').show();
                    },
                    success: function (data, textStatus, jQxhr)
                    {
                        console.log(data);
                        $('#latitude').val(data.latitude);
                        $('#longitude').val(data.longitude);
                        $('#google_place_id').val(data.google_place_id);
                        $('#city').val(data.city);

                        $('[name=country] option').filter(function() {
                            return ($(this).text() == data.country); //To select Blue
                        }).prop('selected', true);

                        $('#ajaxLoader').hide();
                    },
                    error: function (jqXhr, textStatus, errorThrown)
                    {
                        console.log(errorThrown);
                        $('#ajaxLoader').hide();
                    }
                }
            );
        }

    });

     --------------------------------------------*/

});



$('#select-address-modal').on('shown.bs.modal', function (e) {


    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 5,
        center: new google.maps.LatLng(BASE_LATITUDE, BASE_LOGITUDE),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var myMarker = new google.maps.Marker({
        position: new google.maps.LatLng(BASE_LATITUDE,BASE_LOGITUDE),
        draggable: true
    });

    google.maps.event.addListener(myMarker, 'dragend', function (evt) {
        var geocoder = new google.maps.Geocoder;
        geocodeLatLng(geocoder, evt.latLng.lat(),evt.latLng.lng());
    });

    google.maps.event.addListener(myMarker, 'dragstart', function (evt) {
        document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
    });

    map.setCenter(myMarker.position);
    myMarker.setMap(map);

    function geocodeLatLng(geocoder,lat,longt)
    {
        var latlng = {lat: parseFloat(lat), lng: parseFloat(longt)};
        geocoder.geocode({'location': latlng}, function(results, status)
        {
            if (status === google.maps.GeocoderStatus.OK)
            {
                if (results[1])
                {
                    console.log(results[1]);
                    $('#address').val(results[1].formatted_address);
                    $('#latitude').val(lat);
                    $('#longitude').val(longt);
                    $('#google_place_id').val(results[1].place_id);
                    $('#current').html('<p>'+results[1].formatted_address+'</p>');

                    $.each(results[1].address_components, function( address_component_index, address_component ) {

                        if(jQuery.inArray("administrative_area_level_2", address_component.types) !== -1)
                        {
                            $('#city').val(address_component.long_name);
                        }
                        if(jQuery.inArray("administrative_area_level_1", address_component.types) !== -1)
                        {
                            //$('#city').val(data.city);
                        }
                        if(jQuery.inArray("country", address_component.types) !== -1)
                        {
                            $('[name=country_id] option').filter(function() {
                                return ($(this).text() == address_component.long_name); //To select Blue
                            }).prop('selected', true);
                        }

                    });

                }
                else
                {
                    $('#current').html('<p>No results found</p>');
                }
            }
            else
            {
                $('#current').html('<p>Geocoder failed due to: ' + status+'</p>');
            }
        });
    }

});

