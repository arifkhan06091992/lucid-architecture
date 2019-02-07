
$(document).ready(function() {

    dataTable = $('#custom-datatable').DataTable( {
        "oLanguage": {
            "sProcessing": "Loading ..."
        },
        keys: true,
        "processing": true,
        "serverSide": true,
        "ajax":{
            url : BASE_URL+'/merchant/event/get-event-data', // json datasource
            type: "get",  // method  , by default get
            error: function(){  // error handling
                $(".custom-datatable-error").html("");
                $("#custom-datatable").append('<tbody class="course-management-error"><tr><th colspan="3">No data found in the server</th></tr></tbody>');
                $("#custom-datatable_processing").css("display","none");
            }
        },
        "columnDefs": [ { orderable: false, targets: [0,2,4,5,6] }],
        "order": [[ 0, 'desc' ]]
    } );
    $('.dataTables_filter input').attr("placeholder", "Event Name").css('width','200px');
    $('.dataTables_filter input').attr("class", "form-control input-sm clearable");

    // filter by range
    $('#demo').on('apply.daterangepicker', function(ev, picker) {
        dataTable.columns( 3 ).search( picker.startDate.format('YYYY-MM-DD')+'/'+picker.endDate.format('YYYY-MM-DD') ).draw();
    });

    // filter by min price
    $('#event_type').change(function() {
        dataTable.columns( 0 ).search(this.value).draw();
    });

    // reset data list
    $('#reset_list').on( 'click', function () {
        dataTable.search( '' ).columns().search( '' ).draw();
    });

    $('#demo').daterangepicker({
        autoUpdateInput : false,
        "showDropdowns": true,
        "autoApply": true,
        "ranges": {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        "alwaysShowCalendars": true,
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        opens: 'left',
        format: 'DD/MM/YYYY',
    }, function(start, end, label) {

        $('#demo').val(start.format('YYYY/MM/DD') + '-' + end.format('YYYY/MM/DD'));
    });




    // initialize autocomplete with custom appendTo
    $('#location_filter').autocomplete({
        lookup: locations,
        onSelect: function (suggestion) {
            //console.log('You selected: ' + suggestion.value + ', ' + suggestion.data);
            dataTable.columns( 4 ).search( suggestion.data ).draw();
        },
        onInvalidateSelection: function (suggestion) {
            dataTable.columns( 4 ).search("").draw();
        }
    });


    // initialize autocomplete with custom appendTo
    $('#organizer_filter').autocomplete({
        lookup: listArray,
        onSelect: function (suggestion) {
            //console.log('You selected: ' + suggestion.value + ', ' + suggestion.data);
            dataTable.columns( 5 ).search( suggestion.data ).draw();
        },
        onInvalidateSelection: function (suggestion) {
            dataTable.columns( 5 ).search("").draw();
        }
    });

} );
