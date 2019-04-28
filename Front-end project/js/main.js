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



// $(window).scroll(function (e) {
//     if ($("html").scrollTop() >= 100) {
//         $("#menu-bar .navbar").addClass("scrolled");
//     } else {
//         $("#menu-bar .navbar").removeClass("scrolled");
//     }
// });



//Pop Categories section carousel js start
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }

})


//carousel nav button animation show/hide start
$(".owl-stage-outer").mouseover(function(){
    console.log("hi")
    $(".owl-prev").animate({left: '7px'}).css("display", "block")
    $(".owl-next").animate({right: '7px'}).css("display", "block")
});

$(".owl-stage-outer").mouseout(function(){
    console.log("bye")
    $(".owl-prev").animate({left: '-37px'}).css("display", "none")
    $(".owl-next").animate({right: '-37px'}).css("display", "none")
})
//carousel nav button animation show/hide end



//Pop Categories section carousel js end

})
