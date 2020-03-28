$(function() {
    $('[data-toggle="tooltip"]').tooltip()
         })


$("#submitEventButton").click(function() {
    $("#submitEventModal").modal("show");
});

let calendar = new CalendarYvv ("#calendar", moment().format("Y-M-D"), "Monday");
         calendar.createCalendar();
         calendar.diasResal = [1,2,3];
         calendar.colorResal = "#28a7454d";
         calendar.textResalt = "#28a745";
         calendar.bg = "bg-dark";
         calendar.textColor = "text-white";
         calendar.btnH = "btn-outline-light";
         calendar.btnD = "btn-rounded-success";
         calendar.funcPer = function(ev){
             console.log(ev)};