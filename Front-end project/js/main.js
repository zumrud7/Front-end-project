$(document).ready(function(){


// alert message hide function start
$("#alert i").click(function(){
    $("#alert").hide()
})
// alert message hide function end

$(".btn-solid").mouseover(function(){
    var line = $("<div></div>")
})


// Login Modal close function start
$("#modal-registration .modal").on("hide.bs.modal", function () {
    $("#modal-registration ul .nav-link:first").addClass("active")
    $("#modal-registration .nav-link:last").removeClass("active")
    $("#modal-registration #login").addClass("active");
    $("#modal-registration #signup").removeClass("active");
});
// Login Modal close function end







// Menu-bar mouseover/mouseout func start
var navOption = $("#menu-bar .nav-item")
var navDropdown = $("#menu-bar .nav-item .dropdown-menu")


    for (let i = 0; i < navOption.length; i++) {
     
        $(navOption[i]).on("mouseover mouseout", function(){
            $(navDropdown[i]).toggleClass("show")
            $(navOption[i]).toggleClass("show")
        })
}
// Menu-bar mouseover/mouseout func end






// Menu bar search button toggle start // 
$("#menu-bar .search-link").click(function(){
    
    if ($("#menu-bar .search-link i").hasClass("fa-search")){
        $("#menu-bar .search-link i").removeClass("fa-search")
        $("#menu-bar .search-link i").addClass("fa-times").css("font-size", "25px")
      
    }
    else if($("#menu-bar .search-link i").hasClass("fa-times")){
        $("#menu-bar .search-link i").removeClass("fa-times")
        $("#menu-bar .search-link i").addClass("fa-search").css("font-size", "17px")
    }
    $("#menu-bar .search-box").toggleClass("active")
    $("#menu-bar .search-box input").val('')
})
// Menu bar search button toggle end //







})
