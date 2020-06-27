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

    //    to_favorites_btn
    $('.to_favorites_btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    //mob_menu
    $('.mob_menu .click_area').click(function () {
        $('body').toggleClass('active');
        $(this).toggleClass('active');
        $(this).parent('.mob_menu').find('.hidden_box').toggleClass('open');
    });

    //search_form
    $('.search_form_btn').click(function (e) {
        e.preventDefault();
        $(this).parents('.header_main').find('.search_form').toggleClass('open');
        $(this).parents('.header_main').find('.search_form_bg').toggleClass('active');
    });

    $('.search_form_bg').click(function () {
        $(this).toggleClass('active');
        $(this).parents('.header_main').find('.search_form').toggleClass('open');
    });

    //    subcategories
    $('.subcategories .show_more').click(function () {
        $(this).toggleClass('active');
        $(this).parent('.subcategories').find('ul').toggleClass('open');
    });

    //    requisites
    $('.info .click_box').click(function () {
        $(this).toggleClass('active');
        $(this).parent('.requisites').find('.hidden_box').toggleClass('open');
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
    });

    // QUANTITY
    $('.le-quantity').click(function (e) {
        e.preventDefault();
        var elem = $(this).parent().find('input.counter');
        var currentQty = elem.val();

        if ($(this).hasClass('minus') && currentQty > 0) {
            elem.val(parseInt(currentQty, 10) - 1);
            elem.trigger("change");
        } else {
            if ($(this).hasClass('plus')) {
                elem.val(parseInt(currentQty, 10) + 1);
                elem.trigger("change");
            }
        }
    });


});
