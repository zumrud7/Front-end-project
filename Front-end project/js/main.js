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
    $(window).scroll(function () {
        if ($(window).scrollTop() > num && !$("#back-to-top .top").hasClass("active")) {
            $('#menu-bar').removeClass("fixed");
            $("#menu-bar").addClass("fixed");
            $("#back-to-top .top").show()


            //scroll back to top function on click of a button START
            $("#back-to-top .top a").click(function () {
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



    //GALLERY SECTION FUNCTION START
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


    // gallery button active function start
    var catItem = $("#gallery .category-item")
    for (let i = 0; i < catItem.length; i++) {

        $(catItem[i]).click(function () {
            if (!$(catItem[i]).hasClass("active")) {
                $(catItem).removeClass("active");
                $(catItem[i]).addClass("active");
            }

        })
    }
    // gallery button active function end

    // gallery filter photos function START
    $(catItem).click(function () {


        var category = $(this).attr("id");
        // alert(category)

        if (category == "all") {


            $("#gallery .photo").addClass("hide");
            setTimeout(function () {

                $(".photo").removeClass("hide")
            }, 200)
        }
        else {
            $("#gallery .photo").addClass("hide");
            setTimeout(function () {

                $("." + category).removeClass("hide")
            }, 200)

        }

    })
    // gallery filter photos function END
    //GALLERY SECTION FUNCTION END


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

    //STUDENT SAY SECTION CAROUSEL START
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
    //STUDENT SAY SECTION CAROUSEL END

    // our-blog icon animation on hover start
    var myImg = $("#our-blog .card")
    var myIcon = $("#our-blog .card-img-top .icon")
    for (let i = 0; i < myImg.length; i++) {
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





    // our-courses page pagination change function start
    var myPages = $("#our-courses .page li")

    for (let i = 0; i < myPages.length; i++) {
        $(myPages[i]).click(function (ev) {


            if ($(myPages[i]).hasClass("disabled")) {
                $(this).removeClass("active")
            }
            else {

                $(myPages).removeClass("active")
                $(myPages[i]).addClass("active")
            }

        })
    }
    // our-courses page pagination change function end  


    // events pagination change function start
    var myPagination = $("#events .page li")

    for (let i = 0; i < myPagination.length; i++) {
        $(myPagination[i]).click(function (ev) {


            if ($(myPagination[i]).hasClass("disabled")) {
                $(this).removeClass("active")
            }
            else {

                $(myPagination).removeClass("active")
                $(myPagination[i]).addClass("active")
            }

        })
    }

    // events pagination change function end



    // event-detail form submit comment function start
    var submitBtn = $("#event-detail form button");

    $(submitBtn).click(function () {
        if ($("#event-detail #validationName").val() == "") {
            $("#event-detail form .alert").show()
        }

        else if ($("#event-detail #validationEmail").val() == "" || $("#event-detail textarea").val() == "") {
            $("#event-detail form .alert").text("Please fill Email, Phone, Subject fields!");
            $("#event-detail form .alert").show();
        }

    })

    // input background change 
    $("#event-detail .comment input").on("input", function () {

        $("#event-detail .comment input").blur(function () {
            $(this).css({
                backgroundColor: "#d8ebff",
                color: "#034a96"
            })
        })
    })
    // input background change 

    // event-detail form submit comment function end


    // join now countdown date START

    var deadline = new Date("Aug 7, 2019 17:17:17").getTime();

    setInterval(function () {
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = deadline - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        $("#event-detail .join-now .days").text(days);
        $("#event-detail .join-now .hours").text(hours);
        $("#event-detail .join-now .minutes").text(minutes);
        $("#event-detail .join-now .seconds").text(seconds);


    }, 1000);

    // join now countdown date END

// course-detail page curriculum tab accordion menu START
    var curriculumTitle = $("#course-detail .curriculum-tab li");
    var curriculumIcon = $("#course-detail .curriculum-tab li .fa-angle-down")
    var curriculumBody = $("#course-detail .curriculum-tab p");

    for (let i = 0; i < curriculumTitle.length; i++) {
        $(curriculumTitle[i]).click(function () {

            $(curriculumBody[i]).slideToggle();
            $(curriculumIcon[i]).toggleClass("fa-angle-up");

        })

    }

// course-detail page curriculum tab accordion menu END

// course detail review-tab "add a review section" increase star function start

$("#course-detail #s1").click(function(){
    $("#course-detail #reviews form .fa-star").css("color", "#888888")
    $("#course-detail #s1").css("color", "#FFBC09");
})
$("#course-detail #s2").click(function(){
    $("#course-detail #reviews form .fa-star").css("color", "#888888")
    $("#course-detail #s1, #s2").css("color", "#FFBC09");
})
$("#course-detail #s3").click(function(){
    $("#course-detail #reviews form .fa-star").css("color", "#888888")
    $("#course-detail #s1, #s2, #s3").css("color", "#FFBC09");
})
$("#course-detail #s4").click(function(){
    $("#course-detail #reviews form .fa-star").css("color", "#888888")
    $("#course-detail #s1, #s2, #s3, #s4").css("color", "#FFBC09");
})
$("#course-detail #s5").click(function(){
    $("#course-detail #reviews form .fa-star").css("color", "#888888")
    $("#course-detail #s1, #s2, #s3, #s4, #s5").css("color", "#FFBC09");
})
// course detail review-tab "add a review section" increase star function end



// contact page form submit function START
var formBtn = $("#contact form button");

$(formBtn).click(function () {
    if ($("#contact .form-location #validationName").val() == "") {
        $("#contact .form-location form .alert").show()
    }

    else if ($("#event-detail #validationEmail, #validationPhone, #validationSubject, textarea").val() == "") {
        $("#contact form .alert").text("Please fill Email, Phone, Subject fields!");
        $("#contact form .alert").show();
    }

})
// contact page form submit function END






})
