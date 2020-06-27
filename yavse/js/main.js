//datetimepicker
$('.time_input').datetimepicker({
    datepicker: false,
    format: 'H:i'
});

//работаю по выходным
$('.weekends_btn').click(function () {
    if ($(".weekends_btn input").is(":checked")) {
        $('.working_day:nth-last-child(1) input, .working_day:nth-last-child(2) input').prop("checked", true);
    } else {
        $('.working_day:nth-last-child(1) input, .working_day:nth-last-child(2) input').prop("checked", false);
    }
});
$('.working_day').click(function () {
    if ($(".working_day:nth-last-child(1) input").is(":checked") && $(".working_day:nth-last-child(2) input").is(":checked")) {
        $('.weekends_btn input').prop("checked", true);
    } else {
        $('.weekends_btn input').prop("checked", false);
    }
});


//alert_btn
$('.alert_btn').click(function () {
    $(".alert").addClass('active');
    setTimeout(function () {
        $(".alert").removeClass('active');
    }, 5000);
});

//анимация на странице с картой
$(window).scroll(function () {
    var headerElement = $('.map-small');
    var caunt = 'translateY(' + $(window).scrollTop() / 2 + 'px)';
    headerElement.css("transform", caunt);
});

//slick
$('.slick').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 3,
            }
    }

  ]
});

//Drag and drop
if ($('div').hasClass('upload_container') == true) {

    var $rbar = $('.main_slider .circle-go');
    var rlen = 2 * Math.PI * $rbar.attr('r');
    let dropArea = document.getElementById('upload_container')

    ;
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)
        document.body.addEventListener(eventName, preventDefaults, false)
    })

    ;
['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false)
    })

    ;
['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false)
    })

    dropArea.addEventListener('drop', handleDrop, false)

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    function highlight(e) {
        dropArea.classList.add('highlight')
    }

    function unhighlight(e) {
        dropArea.classList.remove('active')
    }

    function handleDrop(e) {
        var dt = e.dataTransfer
        var files = dt.files

        handleFiles(files)
    }

    let uploadProgress = []
    let progressBar = document.getElementById('progress-bar')

    function initializeProgress(numFiles) {
        progressBar.value = 0
        uploadProgress = []

        for (let i = numFiles; i > 0; i--) {
            uploadProgress.push(0)
        }
    }

    function updateProgress(fileNumber, percent) {
        uploadProgress[fileNumber] = percent
        let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
        console.debug('update', fileNumber, percent, total)
        progressBar.value = total
    }

    function handleFiles(files) {
        files = [...files]
        initializeProgress(files.length)
        files.forEach(uploadFile)
        files.forEach(previewFile)
    }

    function previewFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function () {
            let img = document.createElement('img')
            img.src = reader.result
            //        $('.upload_container__img').children().remove();
            $('.upload_container__img').append(img)
        }
    }

    function uploadFile(file, i) {
        var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload'
        //    let url = 'ВАШ URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ'
        var xhr = new XMLHttpRequest()
        var formData = new FormData()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

        // Update progress (can be used to show progress indicator)
        xhr.upload.addEventListener("progress", function (e) {

            $rbar.css({
                strokeDasharray: rlen,
                strokeDashoffset: (i, (e.loaded * 100.0 / e.total) || 100)
            });

            updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
        })

        xhr.addEventListener('readystatechange', function (e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                updateProgress(i, 100) // <- Add this
            } else if (xhr.readyState == 4 && xhr.status != 200) {
                // Error. Inform the user
            }
        })

        formData.append('upload_preset', 'ujpu6gyk')
        formData.append('file', file)
        xhr.send(formData)
    }
}

//табы
function tab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active')
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).className += " active";
    evt.currentTarget.className += " active";
}

//закрыть fancybox
$('.fancybox_close, .category__close').click(function () {
    $.fancybox.close();
});

//открыть карту
$('#map .btn').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('active');
    $('#map .aside__el-box').toggleClass('active');
    $('#map .btn').toggleClass('active');
});

//добавить в избранное
$('.add_to_wishlist_btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    if (this.textContent == 'В избранном')
        this.textContent = 'Добавить в избранное';
    else
        this.textContent = 'В избранном';
});

//открыть меню категорий
$('.category__open').click(function (e) {
    e.preventDefault();
    $('#category').toggleClass('active');
    $('body').addClass('active');
    $('#category__animation').toggleClass('category__animation');
});

//закрыть меню категорий
$('.category__close').click(function (e) {
    e.preventDefault();
    $('body').removeClass('active');
    $('#category').removeClass('active');
    $('#category__animation').removeClass('category__animation');
});

//избранное
$('.card__heart').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
});

//карта фуллскрин
$('.map-btn__toggle').click(function (e) {
    e.preventDefault();
    $('#map').toggleClass('active');
    $('body').toggleClass('active');
});

//показывать номер телефона
$(".card__show-phone").click(function () {
    var $parent = $(this).closest(".card__user-phone-box");
    $parent.find(".card__user-phone").text($parent.data("phone"));
    $(this).hide();
    $parent.find(".hide").show();
});

//цвет header при скролле
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('header').addClass('header__scroll');
    } else {
        $('header').removeClass('header__scroll')
    }
});

//хедер меню
$('.header-user').click(function (e) {
    e.preventDefault();
    $('.header-profile-menu').toggleClass('active');
    $(this).toggleClass('active');
    $('body').toggleClass('active');
});

$(document).mouseup(function (e) {
    var container = $(".header-user-wrapp");
    if (container.has(e.target).length === 0) {
        container.find('.header-user').removeClass('active');
        container.find('.header-profile-menu').removeClass('active');
        $('body').removeClass('active');
    }
});

//иницилизайия фенсибокс
$(document).ready(function () {
    $(".fancybox").fancybox();
});


//аккордеон в категориях
var accordion = (function () {

    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');

    // default settings
    var settings = {
        // animation speed
        speed: 400,

        // close all other accordion items if true
        oneOpen: false
    };

    return {
        // pass configurable object literal
        init: function ($settings) {
            $accordion_header.on('click', function () {
                accordion.toggle($(this));
            });

            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                $('.js-accordion-item.active:not(:first)').removeClass('active');
            }

            // reveal the active accordion bodies
            $('.js-accordion-item.active').find('> .js-accordion-body').show();
        },
        toggle: function ($this) {

            if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                $this.closest('.js-accordion')
                    .find('> .js-accordion-item')
                    .removeClass('active')
                    .find('.js-accordion-body')
                    .slideUp()
            }

            // show/hide the clicked accordion item
            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();

$(document).ready(function () {
    accordion.init({
        speed: 300,
        oneOpen: true
    });
});
