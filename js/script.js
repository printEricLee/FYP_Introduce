$(document).ready(function () {

    $("#collapse").on("click", function () {

        $("#sidebar").toggleClass("active");
        $(".fa-left-long").toggleClass("fa-right-long");

    })
})