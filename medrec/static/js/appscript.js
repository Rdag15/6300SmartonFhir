function get_medication(json_data) {
    $.ajax({
        url: "/medications/",
        type: 'POST',
        data: JSON.stringify(json_data),
        contentType:'application/json; charset=utf-8',
        dataType: "json",
        success: function(data){
            //data contains the json object for the data table
            // send the data to datatables 
            // This is not actually something I will use?
            $('#medication-table').DataTable({
            "data":data,
            "columns":[
                {"data":"medication"},
                {"data": "start"},
                {"data": "quantity"}
            ]
            });
        },
        error: function(data){
            //error display
            $('body').append(JSON.stringify(data))
        }
    });
}