$(document).ready(function () {


    const txtArr = ["Full Stack Developer", "Web Developer", "Web Designer"];
    var currentChar = 0;
    var currentSentChar = 0;
    var interval;

    function typing() {
        var text = txtArr[currentChar].substring(0, currentSentChar + 1);
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

    $('.switch-toggle').click(function(e){
        e.preventDefault();
        $('.setting-switch').toggleClass('slide');
    })


    $('.filter-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').filter('.' + value).show(700);
            $('.filter').not('.' + value).hide(700);
        }
        else {
            $('.filter').not('.' + value).hide(700);
            $('.filter').filter('.' + value).show(700);
            $('.hideImg').filter('.' + value).css('display', 'block');
            // $('.filter').removeClass('hide');
        }
    })


    $('.menu-nav').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })

    setInterval(function () {
        $('.about-img').addClass('activeAnim');
        $('.skill').addClass('activeAnim');
        $('.contact-title').addClass('activeAnim');
    }, 800)

    setInterval(function () {
        $('.left p').addClass('activeAnim');
        $('.abt-btn').addClass('activeAnim');
        $('form').addClass('bounceUp');
    }, 2500)

    setInterval(function () {
        $('.right-list li').addClass('activeAnim');
    }, 4000);

    setInterval(function () {
        $('.skill-single').addClass('activeAnim');
    }, 1800)

    setInterval(function () {
        $('.work').addClass('activeAnim');
        $('.info').addClass('bounceUp');
    }, 3500)

    setInterval(function () {
        $('.work-single').addClass('activeAnim');
    }, 5000)

    setInterval(function(){
        $('.portf').addClass('activeAnim');
    },500);
    setInterval(function(){
        $('.filter-item').addClass('activeAnim');
    },2300);

})