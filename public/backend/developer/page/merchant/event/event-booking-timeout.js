$(document).ready(function(){

    var clock = new FlipClock($('.your-clock'),EVENT_TIMEOUT, {
        clockFace: 'MinuteCounter',
        countdown : true,
        stop: function() {
            window.location=BASE_URL+"/merchant/event/buy-event-timeout/1";
        }
    });

});