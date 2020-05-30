var date = $("#date");
var saveButton = $(".save-Btn");
var event = $(".event");
var timeBlock = $(".time-block");

function setStatus() {
    hour = moment().hours();
    timeBlock.each(function (){
        var thisHour = parseInt($(this).attr("id"));
        if (thisHour > hour){
            $((this).children[1]).addClass("future")
        }
        else if (thisHour === hour){
            $((this).children[1]).addClass("present")
        }
        else {
            $((this).children[1]).addClass("past")
        }
    });

    //localStorage.setItem("text", JSON.stringify, (lists));
}

setStatus();

function setPlaner() {
    var timer = setInterval(function (){
        var currentDate = moment().format("dddd, MMM Do YYYY");
        date.text(currentDate);
    }, 1000);

}
setPlaner();