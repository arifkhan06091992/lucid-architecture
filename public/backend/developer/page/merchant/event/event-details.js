$(document).ready(function(){

    austDay = new Date(EVENT_START_TIME);
    $('#defaultCountdown').countdown({until: austDay});
    $('#year').text(austDay.getFullYear());

    // Show / Active Package/ Tickets Tab

    var activeTab = localStorage.getItem('activeTab');

    if (activeTab) {
        $('a[href="' + activeTab + '"]').tab('show');
    }

    if (location.hash) {
        $('a[href=\'' + location.hash + '\']').tab('show');
    }

    $(window).on('popstate', function () {
        var anchor = location.hash ||
                     $('a[data-toggle=\'tab\']').first().attr('href');
        $('a[href=\'' + anchor + '\']').tab('show');
    });

});


// <![CDATA[
$(document).on(
    'shown.bs.tab', 'a[data-toggle="tab"]', function (e)
    {

        var mapOptions = {
            center: new google.maps.LatLng(CENTER_LAT, CENTER_LONG),
            zoom: 10,
            maxZoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("venue-map"), mapOptions);
        var infoWindow = new google.maps.InfoWindow();

        var lat_lng = [];
        var latlngbounds = new google.maps.LatLngBounds();

        for (i = 0; i < venues.length; i++)
        {
            var data = venues[i];
            var myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
            lat_lng.push(myLatlng);

            var image = {
                url: data.icon,
                size: new google.maps.Size(30, 50), // This marker is 20 pixels wide by 32 pixels high.
            };

            var marker = new google.maps.Marker(
                {
                    position: myLatlng,
                    map: map,
                    title: data.venue_name,
                    icon: image
                }
            );

            latlngbounds.extend(marker.position);

            (function (marker, data)
            {
                google.maps.event.addListener(
                    marker, "click", function (e)
                    {
                        infoWindow.setContent(data.description);
                        infoWindow.open(map, marker);
                    }
                );
            })(marker, data);
        }
        map.setCenter(latlngbounds.getCenter());
        map.fitBounds(latlngbounds);
    }
);
// ]]>


function buyEventPopup(event_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/merchant/event/buy-event-popup/'+event_id,
        type: 'GET',
        success: function (data) {
            if(data.event_type==1)
            {
                selectFreeTicketQuantityPopup(event_id);
                $('#ajaxLoader').hide();
            }
            else
            {
                $('#buy-event-popup-model-body').html(data.buy_event_popup);
                $('#buy-event-popup-model').modal('show');
                $('#ajaxLoader').hide();
            }
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}


function selectTicketQuantityPopup(event_group_ticket_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/merchant/event/select-ticket-quantity-popup/'+event_group_ticket_id,
        type: 'GET',
        success: function (data) {
            $('#select-ticket-quantity-popup-model-body').html(data);
            $('#select-ticket-quantity-popup-model').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}

function selectFreeTicketQuantityPopup(event_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/merchant/event/select-free-ticket-quantity-popup/'+event_id,
        type: 'GET',
        success: function (data) {
            $('#select-ticket-quantity-popup-model-body').html(data);
            $('#select-ticket-quantity-popup-model').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}