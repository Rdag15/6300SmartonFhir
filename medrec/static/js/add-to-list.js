$(".medadd").on('click', function () {
    var probtext = "";
    var inputs = prompt("please enter a medication");
    for (var i = 0; i < inputs.length; i++) {
        probtext += inputs[i];
    }
    if (probtext.length > 2) {
        var li = document.createElement("li");
        var node = document.createTextNode(probtext);
        li.appendChild(node);
        document.getElementById("medlist").appendChild(li);
    }
});
$(".messageadd").on('click', function () {
    var probtext = "";
    var inputs = prompt("please enter a message");
    for (var i = 0; i < inputs.length; i++) {
        probtext += inputs[i];
    }
    if (probtext.length > 2) {
        var li = document.createElement("li");
        var node = document.createTextNode(probtext);
        li.appendChild(node);
        document.getElementById("messlist").appendChild(li);
    }
});




$(function () {
        $("#opener").on("click", function () {
            $("#dialog-confirm").dialog({
                style: "display: block",
                buttons: {
                    Cancel: function () 
                    {
                        $(this).dialog("close");
                    }
                }
            })
    });
});

$(function(){
    $("#probbuttton").click(function(){
            var probtext = "";
            var winputs = $("#fname").val();
            for (var i = 0; i < winputs.length; i++) {
                probtext += winputs[i];
            }
            if (probtext.length > 2) {
                var li = document.createElement("li");
                var node = document.createTextNode(probtext);
                li.appendChild(node);
                document.getElementById("problist").appendChild(li);
                $("#fname").val("");
            }
    })
})

$(document).on('keypress', 'input', function (e) {

    if (e.keyCode == 13 && e.target.type !== 'submit') {
        e.preventDefault();
        return $(e.target).blur().focus();
    }

});