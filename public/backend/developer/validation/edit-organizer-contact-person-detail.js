/**
 * Created by ayushi agrawal on 18-04-2017.
 */


$(document).ready(function() {

    $("#edit_contact").validate({

        rules: {

            name: {
                notEmpty: true,
                validname: true,
                minlength: 3,
                maxlength: 50
            },
            email: {
                notEmpty: true,
                validEmail: true,
                minlength: 3,
                maxlength: 255
            },
            mobile_no: {
                notEmpty: true,
                number:true,
                minlength: 6,
                maxlength: 20
            },
            address: {
                notEmpty: true,
                minlength: 3,
                maxlength: 255
            },
            latitude: {
                notEmpty: true
            },
            longitude: {
                notEmpty: true
            }
        },
        messages: {

            name: {
                minlength: "Name must be at least 3 characters long",
                maxlength: "Name can not be longer than 50 characters"
            },
            email: {
                minlength: "Email must be at least 3 characters long",
                maxlength: "Email can not be longer than 50 characters"
            },
            phone_no: {
                minlength: "Phone No. must be at least 6 characters long",
                maxlength: "Phone No. can not be longer than 20 characters"
            },
            address: {
                minlength: "Address must be at least 3 characters long",
                maxlength: "Address can not be longer than 255 characters"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });


    $('#choose_from_map').click(function(){

        $('#select-address-modal').modal('show');

    });

    $('#select-address-modal').on('hidden.bs.modal', function () {

        $('#map_canvas').html("");

    });

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
                    $('#current').html('<p>'+results[1].formatted_address+'</p>');
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
