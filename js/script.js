$(document).ready(function () {

    $('.preloader').addClass("active");
    setTimeout(function () {
        $('.preloader').addClass('complete');
    }, 1500)

    var pageProgress = function () {
        $(window).scroll(function () {
            var position = $(window).scrollTop();
            var windowHeight = $(window).height();
            var mainHeight = $('.main').height();

            var total = (position / (mainHeight - windowHeight)) * 100;
            // console.log("Total Scroll: "+ total);

            $('.progress').css("width", total + "%");
        })
    }
    pageProgress();

    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    })

    var filterLi = document.querySelectorAll('.filter-item');
    console.log(filterLi);

    filterLi.forEach((filt) => {
        filt.addEventListener('click', function () {
            console.log(filt);
        })
    })

    $(window).scroll(function () {
        let position = $(window).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('customNav');
        }
        else {
            $('.nav-menu').removeClass('customNav');
        }
    })

    const txtArr = ["Full Stack Developer", "Web Developer", "Web Designer"];
    var currentChar = 0;
    var currentSentChar = 0;
    var interval;

    function typing() {
        var text = txtArr[currentChar].substring(0, currentSentChar + 1);
        // console.log(text);
        $('.typing').text(text);
        currentSentChar++;

        if (text === txtArr[currentChar]) {
            clearInterval(interval)
            setTimeout(function () {
                interval = setInterval(deleting, 150);
            }, 1300);
        }
    }

    function deleting() {
        var text = txtArr[currentChar].substring(0, currentSentChar - 1);
        // console.log(text);
        $('.typing').text(text);
        currentSentChar--;

        if (text === '') {
            clearInterval(interval)
            if (currentChar === (txtArr.length - 1)) {
                currentChar = 0;
            }
            else {
                currentChar++;
            }

            currentSentChar = 0;

            setTimeout(function () {
                $('.cursor').css('display', 'inline-block');
                interval = setInterval(typing, 150);
            }, 100);
        }
    }
    interval = setInterval(typing, 130)

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 0) {
            // $('.nav-a').eq(0).addClass('active');
        }
    })

    $(window).scroll(function () {
        let position = $(window).scrollTop();
        if (position >= 250) {
            $('.about-content').addClass('bounceRight');
            $('.nav-menu').addClass('customNav');
            var windowHeight = $(window).height();
            var imgHeight = $('.about-img').height();
            var imgScroll = ((position / (windowHeight - imgHeight)) / 10);
            // console.log(imgScroll);
            $('.abt-img').css("transform", 'translateY(' + imgScroll + '%' + ')')
        }
        else {
            $('.nav-menu').removeClass('customNav');
            // $('.nav-a').eq(0).removeClass('active');
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1300) {
            // console.log('scrolled');
            $('.work').addClass('bounceUp');
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1400) {
            // console.log('scrolled');
            $('.work-single').addClass('bounceRight');
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1850) {
            $('.skill').addClass('bounceUp');
        }
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1950) {
            $('.skill-single').addClass('bounceRight');
            var skillLength = document.querySelectorAll('.skill-length');
            // console.log(skillLength);


            skillLength.forEach((skill) => {
                // console.log(skill);

                setInterval(function () {
                    skill.classList.add('activeAnim');
                }, 3000)
            })
        }
        else {
            // $('.nav-a').eq(1).removeClass('active')
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 2200) {
            $('.skillBounceLeft').addClass('bounceLeft');
            $('.skillBounceRight').addClass('bounceRight');
        }
    })

    $(window).scroll(function () {
        let position = $(window).scrollTop();
        if (position >= 2900) {
            $('.portf').addClass('bounceUp');

            var windowHeight = $(window).height();
            var imgHeight = $('.image').height();
            var imgScroll = ((position / (windowHeight - imgHeight)) - 6);
            // console.log(imgScroll)
            $('.image img').css("transform", 'translateY(' + imgScroll + '%' + ')');
        }
        else {
            // $('.nav-a').eq(2).removeClass('active')  
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 3750) {
            $('.contact').addClass('bounceUp');
        }
        else {
        }
    });

    $('.nav-item').click(function () {
        console.log($(this).siblings());
        $(this).addClass('active').siblings().removeClass('active');
    })
})



