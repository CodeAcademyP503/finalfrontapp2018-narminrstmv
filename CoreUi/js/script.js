// yan menu
function myFunction() {
    let a = document.getElementById("mySidenav");
    if (getComputedStyle(a).width == "0px") {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "#3a4149";

    } else {

        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "#3a4149";
    }
}
// yan menu



$('#calendar').fullCalendar({
    events: source,
    header: {
        left: '',
        center: 'prev title next',
        right: ''
    },
    eventRender: function (event, element) {
        element.attr('href', 'javascript:void(0);');
        element.click(function () {
            $("#startTime").html(moment(event.start).format('MMM Do h:mm A'));
            $("#endTime").html(moment(event.end).format('MMM Do h:mm A'));
            $("#eventInfo").html(event.description);
            $("#eventLink").attr('href', event.url);
            $("#eventContent").dialog({ modal: true, title: event.title, width: 350 });
        });
    }
});

