$(document).ready(function () {


    // alert message hide function start
    $("#alert i").click(function () {
        $("#alert").hide()
    })
    // alert message hide function end



    //settings display start
    // open settings color-box start
    $("#settings .color-options").click(function () {

        $("#settings .color-options").toggleClass("active");
        $("#settings .color-box").toggleClass("active");



        // select color in color-box start
        var colorBtn = $("#settings .color-box button")

        for (let i = 0; i < colorBtn.length; i++) {
            $(colorBtn[i]).click(function (ev) {

                console.log($(colorBtn[i]).css("backgroundColor"))
                if (!$(colorBtn[i]).hasClass("active")) {
                    $(colorBtn).removeClass("active");
                    $(colorBtn[i]).addClass("active");
                }
            })

        }
        // select color in color-box end

        $(colorBtn).removeClass("active");

    })
    //settings display end



//sticky menu bar and scroll back to top function START
    var num = 100
    $(window).scroll(function(){
        if ($(window).scrollTop() > num && !$("#back-to-top .top").hasClass("active")){
            $('#menu-bar').removeClass("fixed");
            $("#menu-bar").addClass("fixed"); 
            $("#back-to-top .top").show()


            //scroll back to top function on click of a button START
            $("#back-to-top .top a").click(function() {
                $("body").scrollTop(0);
            });
            //scroll back to top function on click of a button END
        }
        else {
            $('#menu-bar').removeClass("fixed");
            $("#back-to-top .top").hide()
        }
    });
//sticky menu bar and scroll back to top function END




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

        $(navOption[i]).on("mouseover mouseout", function () {
            $(navDropdown[i]).toggleClass("show")
            $(navOption[i]).toggleClass("show")
        })
    }
    // Menu-bar mouseover/mouseout func end






    // Menu bar search button toggle start // 
    $("#menu-bar .search-link").click(function () {

        if ($("#menu-bar .search-link i").hasClass("fa-search")) {
            $("#menu-bar .search-link i").removeClass("fa-search")
            $("#menu-bar .search-link i").addClass("fa-times").css("font-size", "25px")

        }
        else if ($("#menu-bar .search-link i").hasClass("fa-times")) {
            $("#menu-bar .search-link i").removeClass("fa-times")
            $("#menu-bar .search-link i").addClass("fa-search").css("font-size", "17px")
        }
        $("#menu-bar .search-box").toggleClass("active")
        $("#menu-bar .search-box input").val('')
    })
    // Menu bar search button toggle end //


    //Pop Categories section carousel js start
    $("#pop-categories .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }

    })


    //carousel nav button animation show/hide start
    $(".owl-stage-outer").mouseover(function () {
        $(".owl-prev").stop();
        $(".owl-next").stop();
        $(".owl-prev").animate({ left: '7px' }).css("display", "block")
        $(".owl-next").animate({ right: '7px' }).css("display", "block")
    });

    $(".owl-stage-outer").mouseout(function () {
        $(".owl-prev").stop();
        $(".owl-next").stop();
        $(".owl-prev").animate({ left: '-37px' }).css("display", "none")
        $(".owl-next").animate({ right: '-37px' }).css("display", "none")
    })
    //carousel nav button animation show/hide end

    //Pop Categories section carousel js end




    //gallery mouseover function for icon display start
    var photo = $("#gallery .photo")
    var titleBtn = $("#gallery .photo .title-btn")
    for (let i = 0; i < photo.length; i++) {
        $(photo[i]).mouseover(function () {
            $(titleBtn[i]).stop();
            $(titleBtn[i]).animate({ top: "70px" });
        })

        $(photo[i]).mouseout(function () {
            $(titleBtn[i]).stop();
            $(titleBtn[i]).animate({ top: "250px" });
        })

    }

    //gallery mouseover function for icon display end

   

    // our teachers hover js start

    var cardImg = $("#our-teachers .card-img-top")
    var logos = $("#our-teachers .card-img-top .social-media")
    for (let i = 0; i < cardImg.length; i++) {
        $(cardImg[i]).mouseover(function () {
            $(logos[i]).stop();
            $(logos[i]).animate({ top: "120px" });
        })

        $(cardImg[i]).mouseout(function () {
            $(logos[i]).stop();
            $(logos[i]).animate({ top: "255px" });
        })

    }

    // our teachers hover js end
    $("#student-say .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 2,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }

    })


    // our block icon animation on hover start
    var myImg = $("#our-blog .card")
    var myIcon = $("#our-blog .card-img-top .icon")
    for (let i = 0; i < cardImg.length; i++) {
        $(myImg[i]).mouseover(function () {
            $(myIcon[i]).stop();
            $(myIcon[i]).animate({ top: "75px" });
        })

        $(myImg[i]).mouseout(function () {
            $(myIcon[i]).stop();
            $(myIcon[i]).animate({ top: "255px" });
        })

    }

    // our block icon animation on hover end




    // our client icon animation start
    $('#our-client .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
// our client icon animation end



// gallery filter photos function START
$("#gallery .category-item").click(function(){

   
    var category = $(this).attr("id");
    // alert(category)

    if(category == "all"){

        
         $("#gallery .photo").addClass("hide");
         setTimeout(function(){

            $(".photo").removeClass("hide")
         }, 200)
    }
    else {
        $("#gallery .photo").addClass("hide");
        setTimeout(function(){

            $("." + category).removeClass("hide")
        }, 200)
        
    }
})
// gallery filter photos function END



})
