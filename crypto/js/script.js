$(document).ready(function () {

    //    mob_menu
    $('.menu_btn, header .menu a ').click(function () {
        $('header .menu').toggleClass('open');
        $('body').toggleClass('active');
        $(this).toggleClass('active');
    });

    //    profile
    $('.profile_name').click(function () {
        $(this).parent('.profile').find('.profile_menu').toggleClass('active');
    });


    //    input placeholder
    function checkInput() {
        $('form').find('input').each(function () {
            if ($(this).val() != '') {
                $(this).addClass('has_value');
            }
        });
    };
    checkInput();

    $('input').change(function () {
        if ($(this).val())
            $(this).addClass('has_value');
        else
            $(this).removeClass('has_value');
    });


    //copy_btn
    $('.copy_btn').click(function () {
        var copyText = $(this).parent('.copy_box').find('.copy_text');
        var Text = copyText.val();
        copyText.select();
        document.execCommand("copy");

        $(this).parent('.copy_box').find('.copy_text').val('copied');

        setTimeout(function () {
            copyText.val(Text);
        }, 1000);

    });

    //    custom select, trading page
    $('.selectboxssvalue').click(function () {
        $(this).parent(".selectboxss").find('.selectboxssmenu').toggleClass('active');
    });

    $('.selectoption').click(function () {
        $(this).parents(".selectboxss").find('.selectboxssvalue').html($(this).html());
        $(this).parents(".selectboxss").find('.selectboxssmenu').toggleClass('active');
    });

    $('.trading_select__head, .trading_select__hidden .trading_select__item').click(function () {
        $(this).parents('.trading_select').find('.trading_select__hidden').toggleClass('open');
        $('.trading_select').toggleClass('active');
    });

    $('.trading_select__hidden .trading_select__item').click(function () {
        $(this).parents(".trading_select").find('.trading_select__head .trading_select__item').html($(this).html());
    });

    $(document).mouseup(function (e) {
        var container = $(".selectboxss");
        if (container.has(e.target).length === 0) {
            container.find('.selectboxssmenu').removeClass('active');
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".trading_select");
        if (container.has(e.target).length === 0) {
            container.find('.trading_select__hidden ').removeClass('open');
        }
    });





    function trading_chat() {
        var width_container = $(".col-xl-10").width();
        var width_body = $("body").width();
        var trading_chat_width = (width_body - width_container) / 2 + 80;
        $(".trading_chat").css("width", trading_chat_width);
    };
    
    trading_chat();
    window.onresize = function () {
        trading_chat();
    };




    //custom-select
    var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
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
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
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
    document.addEventListener("click", closeAllSelect);

});
