$(document).ready(function(){

    new seatsio.SeatingChart({
        divId: 'chart',
        publicKey: SEATS_IO_PUBLIC_KEY,
        event: EVENT_ID,
        maxSelectedObjects : NO_OF_TICKETS,

        loading: '<div class="loader"></div>',
        reserveOnSelect : true,
        regenerateReservationToken : true,
        showLegend : true,
        tooltipStyle: 'color: #fff; background-color: #23a8d3',
        showRowLabels : true,

        reservationTokenInputName: "reservationToken",
        selectedObjectsInputName: 'objects',

        onObjectSelected: function(object){
            console.dir(object);
        },
        onObjectDeselected: function(object){
            console.dir(object);
        },
        /*
        onOrphanSeatsChanged: function(object){
            console.dir(object);
        },

         pricing: [
         {'category': 1, 'ticketTypes': [
         {'ticketType': 'student', 'price': 10},
         {'ticketType': 'normal', 'price': 20}
         ]},
         {'category': 2, 'ticketTypes': [
         {'ticketType': 'student', 'price': 20},
         {'ticketType': 'normal', 'price': 30}
         ]},
         {'category': 3, 'ticketTypes': [
         {'ticketType': 'student', 'price': 30},
         {'ticketType': 'normal', 'price': 40}
         ]},
         {'category': 4, 'ticketTypes': [
         {'ticketType': 'student', 'price': 40},
         {'ticketType': 'normal', 'price': 50}
         ]}
         ],
         */
        priceFormatter: function(price) {
            return APP_CURRENCY + price;
        },
        objectColor: function(object, defaultColor, extraConfig) {

        },
        //orphanSeats : 'warn',
        onChartRendered: function(object) {

            //console.log(object.iframe.contentDocument);
            //var lagends=$('#legend');
            //$("#legend").appendTo(".seat-map-error-message");
            //$('#legend').wrap('<p>');
            //console.log(lagends.innerHTML);
            //$('#legend').remove();
            //lagends.insertAfter('#chart');
            //$('.seat-map-error-message').html('asdasd');
        }
    }).render();



});

function checkNoOfSets()
{
    var selected_seats=$("input[name=objects]").val();
    var no_of_selected_seats = selected_seats.split(',');
    no_of_selected_seats=no_of_selected_seats.length;

    if(selected_seats=="" || no_of_selected_seats<NO_OF_TICKETS)
    {
        $('#error-message').text('You must select min '+NO_OF_TICKETS+' seats');
    }
    else
    {
        $('#select-seats-form').submit();
    }
}
