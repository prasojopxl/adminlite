$(document).ready(function () {
	new WOW().init();
	
	// button switch dark
	$(".wrp-switchicon").click(function(){
		$(this).toggleClass("dark")
	});


	
	// data tables
	let example = $('#example').DataTable({
		paging: false,
		searching: false,
		"info":     false,
		columnDefs: [{
			orderable: false,
			className: 'select-checkbox',
			targets: 0
		}],
		select: {
			style: 'os',
			selector: 'td:first-child'
		},
		order: [
			[1, 'asc']
		]
	});
	example.on("click", "th.select-checkbox", function() {
		if ($("th.select-checkbox").hasClass("selected")) {
			example.rows().deselect();
			$("th.select-checkbox").removeClass("selected");
		} else {
			example.rows().select();
			$("th.select-checkbox").addClass("selected");
		}
	}).on("select deselect", function() {
		("Some selection or deselection going on")
		if (example.rows({
				selected: true
			}).count() !== example.rows().count()) {
			$("th.select-checkbox").removeClass("selected");
		} else {
			$("th.select-checkbox").addClass("selected");
		}
	});
	
	//List Data Tabel
    $('#table-bordered').DataTable( {
        "scrollX": true,
		"autoWidth": false,
		searching: false,
		info: false,
		"pageLength": 5
		// "sDom": '<"top"ip>rt<"bottom"fl><"clear">'
    } );	

	//List Data Tabel
    $('#table-full').DataTable( {
        "scrollX": true,
		"autoWidth": false,
		searching: false,
		info: false,
		"pageLength": 5,
		"sDom": '<"top"ip>rt<"bottom"fl><"clear">'
    } );	

	//List Data Tabel
    $('#table-condensed').DataTable( {
        "scrollX": true,
		"autoWidth": false,
		searching: false,
		info: false,
		"pageLength": 5,
		"sDom": '<"top"ip>rt<"bottom"fl><"clear">'
    } );	

	//List Data Tabel
    $('#table-striped').DataTable( {
        "scrollX": true,
		"autoWidth": false,
		searching: false,
		info: false,
		"pageLength": 5,
		// "sDom": '<"top"ip>rt<"bottom"fl><"clear">'
    } );	


	// table 2
    let myTable = $('#example2').DataTable({
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox',
            targets: 0,
        }],
        select: {
            style: 'os', // 'single', 'multi', 'os', 'multi+shift'
            selector: 'td:first-child',
		},
		"ordering": false

    });

    $('#MyTableCheckAllButton').click(function() {
		alert(",m")
        if (myTable.rows({
                selected: true
            }).count() > 0) {
            myTable.rows().deselect();
            return;
        }

        myTable.rows().select();
    });

    myTable.on('select deselect', function(e, dt, type, indexes) {
        if (type === 'row') {
            // We may use dt instead of myTable to have the freshest data.
            if (dt.rows().count() === dt.rows({
                    selected: true
                }).count()) {
                // Deselect all items button.
                $('#MyTableCheckAllButton i').attr('class', 'far fa-check-square');
                return;
            }

            if (dt.rows({
                    selected: true
                }).count() === 0) {
                // Select all items button.
                $('#MyTableCheckAllButton i').attr('class', 'far fa-square');
                return;
            }

            // Deselect some items button.
            $('#MyTableCheckAllButton i').attr('class', 'far fa-minus-square');
        }
    });	

	$('.custom-upload input[type=file]').change(function(){
		$(this).next().find('input').val($(this).val());
	});	
	
});

$( function() {
    $( "#slider" ).slider({
      value:100,
      min: 0,
      max: 500,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
  } );

