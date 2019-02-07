<div class="row top_tiles">
    <div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="tile-stats">
            <div class="icon"><i class="fa fa-location-arrow"></i></div>
            <div class="count">{{$dashboard_count_boxes_data['total_running_events']}}</div>
            <h3>Total Events Running</h3>
            <p>Total Number of Running Events.</p>
        </div>
    </div>
    <div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="tile-stats">
            <div class="icon"><i class="fa fa-shopping-cart"></i></div>
            <div class="count">{{$dashboard_count_boxes_data['total_customers']}}</div>
            <h3>Total Customers</h3>
            <p>Total Number of Registered Customers.</p>
        </div>
    </div>
    <div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="tile-stats">
            <div class="icon"><i class="fa fa-shopping-cart"></i></div>
            <div class="count">{{$dashboard_count_boxes_data['total_organizers']}}</div>
            <h3>Total Organizer</h3>
            <p>Total Number of Registered Organizer.</p>
        </div>
    </div>
</div>
<div class="row top_tiles">
    <div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="tile-stats">
            <div class="icon"><i class="fa fa-book"></i></div>
            <div class="count">{{$dashboard_count_boxes_data['total_bookings']}}</div>
            <h3>Total Bookings</h3>
            <p>Total number of Bookings.</p>
        </div>
    </div>
    <div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="tile-stats">
            <div class="icon"><i class="fa fa-book"></i></div>
            <div class="count">{{$dashboard_count_boxes_data['total_online_bookings']}}</div>
            <h3>Total Online Bookings</h3>
            <p>Total Number of Online Bookings.</p>
        </div>
    </div>
    <div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="tile-stats">
            <div class="icon"><i class="fa fa-book"></i></div>
            <div class="count">{{$dashboard_count_boxes_data['total_on_the_door_bookings']}}</div>
            <h3>Total On The Door Bookings</h3>
            <p>Total Number of On The Door Bookings.</p>
        </div>
    </div>
</div>
<div class="row top_tiles">
    <div class="animated flipInY col-lg-4 col-lg-offset-2 col-md-4 col-sm-6 col-xs-12">
        <div class="tile-stats">
            <div class="icon"><i class="fa fa-money"></i></div>
            <div class="count">{{env('APP_CURRENCY').$dashboard_count_boxes_data['total_revenue']}}</div>
            <h3>Total Revenue</h3>
            <p>Total Revenue by Booking.</p>
        </div>
    </div>
    <div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="tile-stats">
            <div class="icon"><i class="fa fa-ticket"></i></div>
            <div class="count">{{$dashboard_count_boxes_data['total_tickets_sold']}}</div>
            <h3>Total Tickets Sold</h3>
            <p>Total number of Tickets sold till now.</p>
        </div>
    </div>
</div>