
function view_event_ticket(event_booking_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/booking/view-event-ticket/'+event_booking_id,
        type: 'GET',
        success: function (data) {
            $('#view-event-ticket-modal-body').html(data);
            $('#view-event-ticket-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}


function cancelEventBooking(event_booking_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/booking/cancel-event-booking/'+event_booking_id,
        type: 'GET',
        success: function (data) {
            $('#cancel-event-booking-modal-body').html(data);
            $('#cancel-event-booking-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}

function contactOrganizer(event_booking_id)
{
    $('#ajaxLoader').show();
    $.ajax({
        headers: {
            'X-CSRFToken': $('meta[name="csrf-token"]').attr('content')
        },
        url: BASE_URL+'/admin/booking/contact-organizer/'+event_booking_id,
        type: 'GET',
        success: function (data) {
            $('#contact-organizer-modal-body').html(data);
            $('#contact-organizer-modal').modal('show');
            $('#ajaxLoader').hide();
        },
        error: function () {
            $('#ajaxLoader').hide();
        }
    });
}