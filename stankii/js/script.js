$(document).ready(function () {

    //custom-select
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);




    //click
    $('.click_area').click(function () {
        var marker = $(this).hasClass('active');
        if (marker == true) {
            $(this).removeClass('active');
            $(this).parents('.click_box').find('.hidden_box').removeClass('open');
        } else {
            $('.click_area').removeClass('active');
            $('.hidden_box').removeClass('open');
            $(this).addClass('active');
            $(this).parents('.click_box').find('.hidden_box').addClass('open');
        }
    });

    $('.account .click_area, .account .hidden_box').hover(function () {
        $(this).parents('.click_box').find('.hidden_box').toggleClass('open');
    });

    $('.filter_menu .has_dropdown a, .filter_menu .has_dropdown i').click(function (e) {
        e.preventDefault();
        $(this).parents('.has_dropdown').toggleClass('active');
    });


    //    menu
    $('.menu .has_dropdown i').click(function (e) {
        $(this).parent('.has_dropdown').toggleClass('active');
        $(this).parent('.has_dropdown').find('.dropdown').toggleClass('open');
    });

    //    slick
    if ($('div').hasClass('slider-wrapper') == true) {
        var $status = $('.pagingInfo');
        var $slickElement = $('.slider-for');

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + ' / ' + slick.slideCount);
        });

        $slickElement.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.slider-nav',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        fade: false,
                    }
    },

  ]
        });

        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            focusOnSelect: true,
        });

    }


    //dropzone

    if ($('div').hasClass('dropzone') == true) {
        Dropzone.autoDiscover = false;

        var dropzoneMaxSizeFile = $(".upload_container label").data('max-size');
        $(".upload_container label").dropzone({
            url: "/upload",
            maxFilesize: dropzoneMaxSizeFile,
            maxFiles: 1,
            delay: 0,
            animationDuration: 100,
            addRemoveLinks: true,
            removedfile: function (file) {
                var _ref;
                return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
            }
        });
    }

    //    Input Mask
    (function ($) {
        if ($.fn.inputmask === undefined) {
            //jquery plugin
            $.fn.inputmask = function (fn, options) {
                var nptmask;
                options = options || {};
                if (typeof fn === "string") {
                    switch (fn) {
                        case "mask":
                            nptmask = new inputmask(options);
                            return this.each(function () {
                                nptmask.mask(this);
                            });
                        case "unmaskedvalue":
                            var input = this.jquery && this.length > 0 ? this[0] : this;
                            return input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
                        case "remove":
                            return this.each(function () {
                                if (this.inputmask) this.inputmask.remove();
                            });
                        case "getemptymask":
                            var input = this.jquery && this.length > 0 ? this[0] : this;
                            return input.inputmask ? input.inputmask.getemptymask() : "";
                        case "hasMaskedValue": //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
                            var input = this.jquery && this.length > 0 ? this[0] : this;
                            return input.inputmask ? input.inputmask.hasMaskedValue() : false;
                        case "isComplete":
                            var input = this.jquery && this.length > 0 ? this[0] : this;
                            return input.inputmask ? input.inputmask.isComplete() : true;
                        case "getmetadata": //return mask metadata if exists
                            var input = this.jquery && this.length > 0 ? this[0] : this;
                            return input.inputmask ? input.inputmask.getmetadata() : undefined;
                        default:
                            options.alias = fn;
                            nptmask = new inputmask(options);
                            return this.each(function () {
                                nptmask.mask(this);
                            });
                    }
                } else if (typeof fn == "object") {
                    nptmask = new inputmask(fn);
                    return this.each(function () {
                        nptmask.mask(this);
                    });
                } else if (fn == undefined) {
                    //look for data-inputmask atributes
                    return this.each(function () {
                        nptmask = new inputmask(options);
                        nptmask.mask(this);
                    });
                }
            };
        }
        return $.fn.inputmask;
    })(jQuery);

    $(".phone").inputmask("8 (999)999-99-99"); //маска

    //    select2
    $('.select2').select2();

    $('.select2[name=town]').select2({
        placeholder: "Город"
    });


    $(".producer .select-items div").click(function () {
        var triger = $(this).parents('.custom-select').find('select').val();
        if (triger == 'add_new') {
            $(this).parents('.custom-select').addClass('hidden');
            $('.add_new_producer').addClass('active');
        }
    });

    $(".category1").click(function () {
        $('.category2').removeClass('hide');
    });
    $(".category2").click(function () {
        $('.category3').removeClass('hide');
    });


    $(document).on('input', '.phone', function () {
        var target = $(this).val().length;
        console.log(target);
    });

});
