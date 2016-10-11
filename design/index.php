<?php
$utm_source   = isset($_GET['utm_source']) ? $_GET['utm_source'] : null;
$utm_medium   = isset($_GET['utm_medium']) ? $_GET['utm_medium'] : null;
$utm_campaign = isset($_GET['utm_campaign']) ? $_GET['utm_campaign'] : null;
$utm_content  = isset($_GET['utm_content']) ? $_GET['utm_content'] : null;
$utm_term     = isset($_GET['utm_term']) ? $_GET['utm_term'] : null;
$user_agent   =  $_SERVER['HTTP_USER_AGENT'];
$ip = $_SERVER["REMOTE_ADDR"];
if (!($utm_source == 'affiliate' && $utm_medium == 'sd' && $utm_campaign == 'qa3')) {
unset($_COOKIE['aff_sub']);
unset($_COOKIE['aff_id']);
setcookie('aff_sub', null, -1, '/');
setcookie('aff_id', null, -1, '/');
}
$aff_sub = isset($_GET['aff_sub']) ? $_GET['aff_sub'] : null;
$aff_id = isset($_GET['aff_id']) ? $_GET['aff_id'] : null;
if (empty($aff_sub)) {
$aff_sub = isset($_COOKIE['aff_sub']) ? $_COOKIE['aff_sub'] : null;
}
if (empty($aff_id)) {
$aff_id = isset($_COOKIE['aff_id']) ? $_COOKIE['aff_id'] : null;
}
$hidden_phones = false;
if (!empty($aff_sub) && !empty($aff_id) ) {
SetCookie("aff_sub", $aff_sub, time()+2592000);
SetCookie("aff_id", $aff_id, time()+2592000);
$hidden_phones = true;
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <meta name="Title" content="" />
    <meta name="description" content="" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="" />
    <meta property="og:url" content="" />
    <meta property="og:sitename" content="" />
    <meta property="og:title" content="">
    <meta property="og:image" content="" />
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />
    <meta name="twitter:image:src" content="" />
    <meta itemprop="name" content="" />
    <meta itemprop="description" content="" />
    <meta itemprop="image" content="" />
    <title>GoDESIGN</title>
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link type="text/css" rel="stylesheet" href="css/app.css" />
      
      <!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1620272558248962');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1620272558248962&ev=PageView&noscript=1"
/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->
      
    <!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter39824720 = new Ya.Metrika({
                    id:39824720,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/39824720" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
      
  </head>
  <body>
    <header class="head">
      <div class="container">
        <div class="row">
          <div class="col-md-11">
            <div class="head-logo"><a href="/"><img src="images/head_logo.png" alt="head_logo"></a></div>
            <div class="mob-btn"></div>
            <ul class="menu">
              <li class="menu-item why_java-link">Почему дизайн?</li>
              <li class="menu-item career-link-menu">Для кого?</li>
              <!-- <li class="menu-item program_link">Программа</li> -->
              <li class="menu-item week-link">Отзывы</li>
              <li class="menu-item registration-link default_registration reg-btn">Зарегистрироваться</li>
            </ul>
            <ul class="phone ">
              <li class="phone-item">093 343 21 27</li>
              <li class="phone-item">067 326 95 92</li>
              <li class="phone-item">050 366 17 77</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <section class="godesignfinal">
      <!-- <img src="images/head_main.png" alt="" class="head_main_img"> -->
      <img src="images/head_main2.png" alt="" class="head_main_img2">
      <img src="images/513300980-2.jpg" alt="godesignfinal" class="godesignfinal_img">
      <img src="images/513300980-2.jpg" alt="godesignfinal" class="godesignfinal_img parallax-layer">
      <div class="go_fon">
        <div class="container">
          <h2 class="godesignfinal_title">Курс <br><span>GoDESIGN</span></h2>
          <p class="godesignfinal_text">Освой навыки, которые позволят <br>тебе создать первый дизайн сайта, <br>за 75 дней
          </p>
          <span class="data">
            <span class="light">Дата старта:</span>
            <span class="bold">15 октября</span>
          </span>
          <a class="registration_btn default_registration reg-btn godesignfinal_btn registration-link" >Забронировать место</a>
          <span class="godesignfinal_span">Осталось <span>15</span> мест</span>
        </div>
      </div>
    </section>
    <section class="tel_box">
      <div class="container">
        <h1 class="tel_title">ПОЧЕМУ СТОИТ ВЫБРАТЬ <br> <span> КАРЬЕРУ ДИЗАЙНЕРА?</span></h1>
        <div class="tel-block">
          <div class="row tel-block-width">
            <div class="col-md-3">
              <div class="tel-block-img">
                <img src="images/part_tel_1.png"  alt="">
              </div>
            </div>
            <div class="col-md-9">
              <div class="phone_text phone_text1">
                Дизайнеры необходимы каждому бизнесу, который развивает свой продукт, нуждается <br>в росте и меняется.
              </div>
            </div>
          </div>
          <div class="row tel-block-width">
            <div class="col-md-3 mob">
              <div class="tel-block-img">
                <img src="images/part_tel_2.png" alt="">
              </div>
            </div>
            <div class="col-md-9">
              <div class="phone_text phone_text2">
                Дизайнеры необходимы каждому бизнесу, который развивает свой продукт, нуждается <br>в росте и меняется.
              </div>
            </div>
            <div class="col-md-3 desct">
              <div class="tel-block-img">
                <img src="images/part_tel_2.png" alt="">
              </div>
            </div>
          </div>
          <div class="row tel-block-width">
            <div class="col-md-3">
              <div class="tel-block-img">
                <img src="images/part_te_l3.png" alt="">
              </div>
            </div>
            <div class="col-md-9">
              <div class="phone_text phone_text3">
                Дизайнеры необходимы каждому бизнесу, который развивает свой продукт, нуждается <br>в росте и меняется.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="achievements">
      <div class="container">
        <img src="images/tr-53-copy-6.png" alt="tr" class="bg_achievements_top">
        <h1 class="achievements_title"><span>ТРИ ГЛАВНЫХ ФАКТА,</span> <br> ПОЧЕМУ СТОИТ ВЫБРАТЬ GOIT</h1>
        <div class="row">
          <div class="col-md-3 col-md-offset-6 col-sm-3 col-sm-offset-6 achievements_margin achievements_box1">
            <h4>Обучение основано на практике</h4>
            <p>За 2 года обучения мы вывели идеальную соотношение практики к теории: 70% на 30%. <br> Весь материал будет показан на реальных примерах. Большую часть курса ты будешь практиковаться.</p>
          </div>
        </div>
        <div class="row achievements_margin">
          <div class="col-md-3 col-md-offset-0 col-sm-3 col-sm-offset-0 achievements_box2">
            <h4>Ты создашь проект, который положишь в портфолио</h4>
            <p>В рамках курса ты создашь свой первый дизайн сайта. <br> Помимо этого накопиться ряд решений, которые потом сможешь использовать в своей будущей работе.</p>
          </div>
          <div class="achievements_img_box col-md-5 col-sm-5">
            <img src="images/achievements_img1.png" alt="achievements_img1" class="achievements_img1">
            <img src="images/achievements_img2.png" alt="achievements_img2" class="achievements_img2">
            <img src="images/achievements_img3.png" alt="achievements_img3" class="achievements_img3">
          </div>
          <div class="col-md-4 col-sm-4 achievements_box3">
            <h4>67% наших студентов находят работу после окончания курса</h4>
            <p>Качество образования поддерживают лидеры рынка. <br>В их числе: Template Monster, Smetner Associates, ABCname, OVM.project, IT Delight.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="value">
      <div class="container">
        <img src="images/bg_achievements_bottom.png" alt="tr" class="bg_achievements_bottom">
        <h2 class="value_title"><span>ЗА ЧТО ПЛАТЯТ ДИЗАЙНЕРУ</span></h2>
        <p class="value_sub_title">Какому дизайнеру заказчик может доверить заказ от 300$ до 3000$?</p>
        <div class="value_box">
          <img src="images/ellipse-1.png" alt="ellipse" class="value_img">
        </div>
        <div class="row padding_value">
          <div class="col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1 value4">
            <ul>
              <li><span>Создание простого прототипа</span></li>
              <li><span>Работа в графических редакторах</span></li>
              <li><span>Подбор иконок для сайта</span></li>
              <li><span>Работа с правками макета</span></li>
              <li><span>Подготовка макета к верстке</span></li>
              
            </ul>
          </div>
          <div class="col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2 value_orng value5">
            <img src="images/line_orng.png" alt="line_blue">
            <ul>
              <li>Этими навыками владеют <br> 82% - 91% дизайнеров.</li>
            </ul>
          </div>
          <div class="col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 value1">
            <ul>
              <li class="bold"><span>Качественный бриффинг заказчика</span></li>
              <li class="bold"><span>Создание прототипа в Axure</span></li>
              <li class="bold"><span>Работа с модульными сетками</span></li>
              <li class="bold"><span>Работа со шрифтами и типографикой</span></li>
              <li class="bold"><span>Работа с формами и кнопками</span></li>
              <li class="bold"><span>Создание визуального стиля сайта</span></li>
              <li class="bold"><span>Создание адаптивных макетов</span></li>
              <li class="bold"><span>Проектирование эффектов</span></li>
              <li class="bold"><span>Подготовка качественного портфолио</span></li>
              
            </ul>
          </div>
        </div>
        <div class="row margin_value">
          <div class="col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2 value_orng value2">
            <img src="images/line_orng.png" alt="line_blue">
            <ul>
              <li>Этими навыками владеют <br> 82% - 91% дизайнеров.</li>
            </ul>
          </div>
          <div class="col-md-4 col-md-offset-2 col-sm-4 col-sm-offset-2  value_blue value3">
            <img src="images/line_blue.png" alt="line_blue">
            <ul>
              <li>Этими навыками обладают 3%-7% дизайнеров на рынке.</li>
              <li class="bold"><br>Им достаются <br>самые интересные и хорошо <br> оплачиваемые проекты</li>
              <a class="registration_btn default_registration reg-btn registration-link" >Хочу стать таким дизайнером</a>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="practice">
      <div class="container">
        <div class="practice_img_box">
          <div class="practice_box">
            <h3 class="practice_title">НА КУРСЕ ТЫ ПОЛУЧИШЬ ВСЕ ЭТИ НАВЫКИ</h3>
            <p class="practice_text">К концу обучения мы поможем грамотно реализовать первый проект для твоего портфолио.</p>
            <p class="practice_text">Да-да, готовься не только учиться создавать дизайн сайта, но и работать над своей будущей карьерой.</p>
            <a class="registration_btn default_registration reg-btn registration-link" >Зарегистрироваться </a>
          </div>
        </div>
      </div>
    </section>
    <section class="meetings">
      <div class="container">
        <h2 class="meetings_title">64 ЧАСА МАТЕРИАЛА <br><span>ЗА 2,5 МЕСЯЦА ОБУЧЕНИЯ</span></h2>
        <div id="carousel-example-generic" class="carousel slide meetings_carousel" data-ride="carousel" data-interval="false">
          <div class="row">
            <div class="col-md-12">
              <div id="slider1">
                <div class="content">
                  <div class="slide-img" >
                    <span>Тренинги по Soft Skills</span>
                  </div>
                  <div class="slide-img" >
                    <span>Регулярные занятия <br> по Design Skills </span>
                  </div>
                  <div class="slide-img" >
                    <span>Тренинги по работе <br>на фрилансе</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="images/meetings_left.png" alt="meetings_left" class="meetings_left2" href="#carousel-example-generic" data-slide="prev" data-target="#carousel-example-generic">
          
          <img src="images/meetings1.png" alt="meetings1" class="meetings1">
          <img src="images/meetings_right.png" alt="meetings_right" class="meetings_right3" href="#carousel-example-generic" data-slide="next" data-target="#carousel-example-generic">
          <!-- Controls -->
          <!-- Wrapper for slides -->
          <div class="carousel-inner meetings_carousel_inner">
            <div class="item meetings_item active">
              <h3><span>10</span>  онлайн занятий  + <span>10</span> оффлайн встреч</h3>
              <div class="col-md-7 col-sm-7 col-sm-offset-4 col-md-offset-4">
                <p>Каждую неделю в рамках курса ты будешь проходить одну тему. В течении недели ты получишь порцию теории по теме, онлайн занятие с преподавателем и практическую оффлайн встречу. </p>
                <p>Задача таких практикумов - групповое решение реальных заданий в рамках курса в режиме реального времени. Вместе с менторами ты ищешь решение, сразу же задаешь вопросы и разбираешь сложные
                  моменты.
                </p>
              </div>
              <img src="images/3-layers.png" alt="">
            </div>
            <div class="item meetings_item ">
              <h3><span>3</span>  онлайн урока  + <span>1</span> практическое задание</h3>
              <div class="col-md-7 col-sm-7 col-sm-offset-4 col-md-offset-4">
                <p>Ты научишься грамотно и эффективно работать на биржах фриланса, чтобы получить свой первый коммерческий проект уже сразу после выпуска.</p>
                <p>Результатом этой части курса станет качественно составленный твой личный профиль на бирже фриланса UpWork. Ты узнаешь, как лучше офомлять твое портфолио и познакомишься с таким сервисом, как www.behance.net
                </p>
              </div>
              <img src="images/5-layers.png" alt="">
            </div>
            <div class="item meetings_item">
              <h3><span>5</span>  онлайн знятий  + <span>2</span> оффлайн встречи</h3>
              <div class="col-md-7 col-sm-7 col-sm-offset-4 col-md-offset-4">
                <p>Чтобы достичь поставленные тобою цели, только знаний дизайна может быть не достаточно. Развитие Soft Skills помогут тебе выполнять проекты качественно и в срок!</p>
                <p>Тренинговая атмосфера занятий - это развитие личностных компетенций и навыков, которые необходимы для твоей успешной работы в будущем.
                </p>
              </div>
              <img src="images/6-layers.png" alt="">
            </div>
          </div>
        </div>
      </section>
      <section class="types">
        <div class="container">
          <img src="images/types_bg_top.png" alt="types" class="types_bg_top">
          <h2 class="meetings_title">МЫ ГОТОВИЛИ КУРС ДЛЯ ДВУХ <br> <span>ТИПОВ СТУДЕНТОВ</span></h2>
          <div class="types_box_left col-md-5 col-sm-5  col-sm-offset-1 col-md-offset-1 ">
            <div class="types_foto1">
              <img src="images/123.png" alt="types_trg" class="types_trgl1">
            </div>
            <h4>Работники других сфер без опыта работы в дизайне</h4>
            <p> <span>Что будет полезно:</span> <br> За 2 месяца получишь необходимые навыки и знания для создания дизайна твоего первого проекта.</p>
          </div>
          <div class="types_box_right col-md-5 col-sm-5">
            <div class="types_foto2">
              <img src="images/321.png" alt="types_trg" class="types_trgl2">
            </div>
            <h4>Начинающий дизайнер без компетенций в больших проектах</h4>
            <p> <span>Что будет полезно:</span> <br> Ты научишься воплощать большие проекты и начнешь осознанно реализовывать поставленные цели заказчика.</p>
          </div>
        </div>
      </section>
      <section class="ways">
        <div class="container">
          <h2 class="meetings_title">У КАЖДОГО ДИЗАЙНЕРА ЕСТЬ <br> <span>4 ПУТИ РАЗВИТИЯ</span></h2>
        </div>
        <div class="row ways_box1">
          <div class="col-md-4 col-sm-4 col-sm-offset-2 col-md-offset-2">
            <img src="images/ways_img_1.png" alt="img" class="ways_img_1 active1">
            <img src="images/ways_img_1white.png" alt="img" class="ways_img_1white">
            <h4>ВЕБ-СТУДИЯ</h4>
            <p>Веб-дизайнер специализируется на создании эффективных сайтов разных сложностей. и работает в команде со специалистами по маркетингу и с бренд-менеджерами. В некоторых компаниях в обязанности веб-дизайнера входит также и вёрстка отдельных страниц.</p>
          </div>
          <div class="col-md-4 col-sm-4">
            <img src="images/ways_img_2.png" alt="img" class="ways_img_1 active1">
            <img src="images/ways_img_2white.png" alt="img" class="ways_img_1white">
            <h4>БИЗНЕС</h4>
            <p>Часто бизнес нанимает специалиста под собственные потребности. У тебя может быть широкая практика от создания различной рекламной продукции до веб-разработок. Чаще всего дизайнеры работают со специалистами по маркетингу либо с руководителями.</p>
          </div>
        </div>
        <div class="row ways_box2 active">
          <div class="col-md-4 col-sm-4 col-sm-offset-2 col-md-offset-2">
            <img src="images/ways_img_3.png" alt="img" class="ways_img_1white">
            <img src="images/ways_img_3white.png" alt="img" class="ways_img_1 active1">
            <h4>ФРИЛАНС</h4>
            <p>Работаете самостоятельно, либо с удаленной командой сидя у себя дома, или в совершенно другой точке земного шара. Вы самостоятельно выбираете проекты и отвечаете за свое развитие и финансы.</p>
          </div>
          <div class="col-md-5 col-sm-5 col-sm-offset-0 col-md-offset-0">
            <img src="images/ways_img_4.png" alt="img" class="ways_img_1white">
            <img src="images/ways_img_4white.png" alt="img" class="ways_img_1 active1">
            <h4>СТУДИЯ МОБИЛЬНЫХ ПРИЛОЖЕНИЙ</h4>
            <p>В таких студиях дизайнеры специализируются на производстве благоприятной атмосферы для использования мобильных гаджетов. Лучше возможности прокачаться в создании мобильных интерейсов и не найти.</p>
          </div>
        </div>
      </section>
      <section class="help">
        <div class="container">
          <ul>
            <img src="images/help_img.png" alt="help_img_1" class="help_img_1">
            <img src="images/help_img_2.png" alt="help_img_2" class="help_img_2">
            <li class="li_4"> <span>Перед</span> курсом мы поможем определить </li>
            <li class="li_1">твой уровень на данный момент</li>
            <li class="li_2"><span>После</span> курса ты определишься <span>куда</span></li>
            <li class="li_3">развиваться дальше.</li>
          </ul>
        </div>
        <a class="registration_btn default_registration reg-btn registration-link" >Зарегистрироваться</a>
      </section>
      <!--       <section class="selection">
        <div class="container">
          <img src="images/selection_img.png" alt="selection_img" class="selection_img">
          <h2 class="meetings_title">ДА, ОТБОР НА КУРС ЕСТЬ И ОН <span>ДОСТАТОЧНО ЖЕСТКИЙ</span></h2>
          <div class="row">
            <div class="col-md-6 col-sm-6 selection_img_box">
              <img src="images/selection1.png" alt="selection1" class="selection1">
              <img src="images/selection2.png" alt="selection2" class="selection2">
              <img src="images/selection3.png" alt="selection3" class="selection3">
            </div>
            <div class="col-md-6 col-sm-6">
              <p>Твое трудоустройство, а не просто сертификат об окончании – тот результат, на который работает наша команда.</p>
              <p>Именно поэтому мы серьезно отбираем только тех студентов, которые готовы пройти весь путь до конца и хотят получить свой первый хороший проект</p>
              <h4>Наши требования к тебе:</h4>
              <div class="selection_text">
                <img src="images/selection_text_1.png" alt="" class="selection_text1">
                <span>Мотивация и готовность идти до конца</span>
                <p>Мы обучаем и трудоустраиваем тех, кто хочет работать в этом направлении, а не просто хочет узнать для себя что-то новое.</p>
              </div>
              <div class="selection_text">
                <img src="images/selection_text2.png" alt="" class="selection_text2">
                <span>Готовность "прилежно" учиться</span>
                <p>На наших студентов смотрят крупные компании, поэтому за прогулы и несоблюдение дедлайнов мы отчисляем</p>
              </div>
              <div class="selection_text">
                <img src="images/selection_text3.png" alt="" class="selection_text3">
                <span>Базовые знания графических редакторов</span>
                <p>Не смотря на то, что этот курс рассчитан на новичков в дизайне, тебе все равно необходимо обладать минимальным пониманием графических редакторов</p>
              </div>
              <a class="registration_btn default_registration reg-btn registration-link" >Забронировать место</a>
            </div>
          </div>
        </div>
      </section> -->
      <section class="how">
        <div class="how_bg">
          <!--      <img src="images/how_bg.png" alt="how_bg">-->
        </div>
        <div class="container z-index">
          <h2 class="how_title"><span>ЧТО ТЫ БУДЕШЬ ДЕЛАТЬ, </span> <br> КОГДА ПОПАДЕШЬ НА КУРС</h2>
          <div class="row">
            <div class="col-md-4 col-sm-4 col-sm-offset-2 col-md-offset-2 how1">
              <h5>УЧИТЬ</h5>
              <p>Дизайнеру нужен бекграунд, чтоб он мог осознанно создавать проект, который на 100% выполняет поставленные задачи</p>
              <img src="images/row_img1.png" alt="row_img1" class="row_img1">
              <img src="images/row_img3.png" alt="row_img3" class="row_img3">
              <img src="images/row_img4.png" alt="row_img4" class="row_img4">
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-4 col-sm-offset-5 col-md-offset-5 how2">
              <h5>ВЫИГРЫВАТЬ</h5>
              <p>С выполнением каждого задания и пройденным занятием ты будешь чувствовать победу</p>
              <img src="images/row_img4.png" alt="row_img4" class="row_img5">
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-4 col-sm-offset-1 col-md-offset-1 how3">
              <h5>ПРАКТИКОВАТЬ</h5>
              <p>Будем пробовать все в реальной жизни, в разных формах и воплощениях</p>
              <img src="images/row_img5.png" alt="row_img5" class="row_img6">
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-4 col-sm-offset-5 col-md-offset-5 how4">
              <h5>ОТТАЧИВАТЬ</h5>
              <p>Всю полученную теорию и практику ты будешь вкладывать в свой проект, <br> под руководством тьюторов и менторов</p>
              <img src="images/row_img2.png" alt="row_img2" class="row_img2">
              <img src="images/row_img5.png" alt="row_img5" class="row_img7">
            </div>
          </div>
        </div>
      </section>
      <!--       <section class="programs">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h2 class="programs-title">ПОДРОБНАЯ ПРОГРАММА КУРСА </h2>
            </div>
          </div>
          <div class="row mar-top70">
            <div class="col-md-6">
              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_1">
                    <h4 class="panel-title large">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_1">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_2">
                    <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_2">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_3">
                    <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_3">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_4">
                    <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_4">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_5">
                    <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_5">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_1">
                    <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_6" aria-expanded="true" aria-controls="collapse_6">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_6">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_7">
                    <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_7" aria-expanded="false" aria-controls="collapse_7">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_7" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_7">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_8">
                    <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_8" aria-expanded="false" aria-controls="collapse_8">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_8" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_8">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_9">
                    <h4 class="panel-title large">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_9" aria-expanded="false" aria-controls="collapse_9">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_9" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_9">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="heading_10">
                    <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse"  href="#collapse_10" aria-expanded="false" aria-controls="collapse_10">
                      Название темы
                    </a>
                    </h4>
                  </div>
                  <div id="collapse_10" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_10">
                    <div class="panel-body">
                      <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.
                        <br><br> Примеров очень много – вы пользуетесь ими каждый день: Instagram, Bump, Foursquare. Вот на кого нужно равняться. Это основное преимущество создания мобильных приложений – вам не нужно никаких ресурсов, перед вами огромный
                      рынок, берите и захватывайте его. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <!--       <section class="teachers">
        <img src="images/teachers_img.png" alt="teachers_img" class="teachers_img">
        <div class="container">
          <h2 class="teachers_title">НАШИ ПРЕПОДОВАТЕЛИ</h2>
          <div id="carousel-generic" class="carousel slide" data-ride="carousel" data-interval="false">
            Wrapper for slides
            <div class="carousel-inner teachers_carousel">
              <div class="item active">
                <div class="col-md-3 col-sm-3 col-md-offset-0 col-sm-offset-0 teachers_carousel_box1">
                  <div class="teachers_foto1">
                    <img src="images/teachers_foto1.png" alt="">
                  </div>
                  <h5>Андрей Пивоваров <br>(CEO, co-founder GoIT)</h5>
                  <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.</p>
                </div>
                <div class="col-md-3 col-sm-3 col-md-offset-5 col-sm-offset-5 teachers_carousel_box2">
                  <div class="teachers_foto2">
                    <img src="images/teachers_foto_2.png" alt="">
                  </div>
                  <h5>Андрей Пивоваров <br>(CEO, co-founder GoIT)</h5>
                  <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.</p>
                </div>
              </div>
              <div class="item">
                <div class="col-md-3 col-sm-3 col-md-offset-0 col-sm-offset-0 teachers_carousel_box1">
                  <div class="teachers_foto1">
                    <img src="images/teachers_foto1.png" alt="">
                  </div>
                  <h5>Андрей Пивоваров <br>(CEO, co-founder GoIT)</h5>
                  <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.</p>
                </div>
                <div class="col-md-3 col-sm-3 col-md-offset-5 col-sm-offset-5 teachers_carousel_box2">
                  <div class="teachers_foto2">
                    <img src="images/teachers_foto_2.png" alt="">
                  </div>
                  <h5>Андрей Пивоваров <br>(CEO, co-founder GoIT)</h5>
                  <p>Больше всего меня завораживает факт, что команда из 2-3 человек может сделать проект международного уровня, прославиться и заработать.</p>
                </div>
              </div>
            </div>
            Controls
            <a href="#carousel-generic" data-slide="prev" class="carousel_arrow">
              <img src="images/teachers_img2.png" alt="">
            </a>
          </div>
        </div>
      </section> -->
      <section class="mentor">
        <div class="container">
          <!-- <img src="images/mento_img.png" alt="mento_img" class="mentor_img"> -->
        </div>
        <div class="mentor_box">
          <img src="images/1111111111.png" alt="mentor" class="mentor_bg">
          <div class="text-center">
            <div class="mentor_col">
              <h4>У ТЕБЯ БУДЕТ <br>МЕНТОР</h4>
              <p>Ментор - это практикующий дизайнер, который поможет тебе освоить профессию. Им будет опытный специалист, за спиной которого стоят множество разработок сайтов и интерфейсов.</p>
              <img src="images/mentor_img2.png" alt="mentor2">
              <!--</div><div  class="mentor2">-->
            </div>
            <div class="mentor_col2">
              <ul>
                <li>Чат с ментором для регулярного общения</li>
                <li>Ответы на вопросы и дополнительные разъяснения</li>
                <li>Поддержка в работе над личным проектом</li>
                <li>Советы из практического опыта</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="countres">
        <!--    <img src="images/countres.jpg" alt="countres" class="countres_img">-->
        <div class="container">
          <img src="images/countres_tr.png" alt="countres_tr" class="countres_tr">
          <div class="row">
            <div class="col-md-5 col-sm-5 col-lg-5 countres_title">
              У нас обучаются специалисты <br>из 27 городов и <br>5 стран <br>
              <a class="registration_btn default_registration reg-btn registration-link" >Присоедениться</a>
            </div>
            <div class="col-md-5 col-sm-5 col-lg-5 countres_img_box">
              <img src="images/contries_img2.png" alt="contries_img2" class="contries_img2">
              <img src="images/contries_img3.png" alt="contries1" class="contries1">
              <img src="images/contries_img4.png" alt="contries2" class="contries2">
              <img src="images/contries_img5.png" alt="contries3" class="contries3">
              <img src="images/contries_img6.png" alt="contries4" class="contries4">
              <img src="images/contries_img7.png" alt="contries5" class="contries5">
            </div>
          </div>
        </div>
      </section>
      <section class="reviews2">
        <div class="container">
          <h2 class="reviews2_title">Отзывы студентов GoIT</h2>
          <div id="carousel-generic1" data-interval="false" class="carousel slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner carousel-inner-my">
              <div class="item active item_pos">
                <div class="col-md-4">
                  <div class="reviews2-img">
                    <img src="images/yulia.jpg" alt="">
                  </div>
                </div>
                <div class="col-md-8 col-sm-8">
                  <div class="reviews2_box">
                    <h4>Юлия Ольховская</h4>
                    <span>Студентка GoQA</span> <br>
                    <div class="reviews2_margin">
                      <img src="images/reviews2_img2.png" alt="">
                      <img src="images/reviews2_img2.png" alt="">
                      <img src="images/reviews2_img2.png" alt="">
                      <img src="images/reviews2_img2.png" alt="">
                      <img src="images/reviews2_img2.png" alt="">
                    </div>
                    <p>Go crazy with GoIT! Ребята - вы зажгли во мне такой олимпийский огонь, что наверно хватит на несколько лет (а если будем меняться, то и на столетия хватит всем). За время обучения я стала практически "евангелистом" GoIT. Говорю о вас всем, всегда и везде.</p>
                    <p>Верю в вас! Почему? Вы - профессиональны и терпеливы, как преподаватели.</p>
                    <!-- a href=""><img src="images/fb-icon-11-2.png" alt=""></a-->
                  </div>
                </div>
              </div>
              <div class="item item_pos">
                <div class="col-md-4">
                  <div class="reviews2-img">
                    <img src="images/karamichev.jpg" alt="">
                  </div>
                </div>
                <div class="col-md-8 col-sm-8 reviews2_box">
                  <h4>Карамышев Валерий</h4>
                  <span>Студент GoFrontend</span> <br>
                  <div class="reviews2_margin">
                    <img src="images/reviews2_img2.png" alt="">
                    <img src="images/reviews2_img2.png" alt="">
                    <img src="images/reviews2_img2.png" alt="">
                    <img src="images/reviews2_img2.png" alt="">
                    <img src="images/reviews2_img2.png" alt="">
                  </div>
                  <p>Самое ценное в курсе - хорошо продуманный учебный материал и его подача. Эмоции от курса только положительные. Особых трудностей при прохождении курса не возникало и за это спасибо преподавателю и менторам. Результатами доволен. Уже рекомендовал этот курс знакомым и коллегам, которые так же думают о новой специальности. </p>
                  <p>И собираюсь продолжать дальше рекомендовать! Почему? Потому что GoIT дает действительно качественную базу знаний для дальнейшего развития IT специалистов.</p>
                  <!--a href=""><img src="images/fb-icon-11-2.png" alt=""> baskakov.dmitriy</a-->
                </div>
              </div>
              <div class="item item_pos">
                <div class="col-md-4">
                  <div class="reviews2-img">
                    <img src="images/olya.jpg" alt="">
                  </div>
                </div>
                <div class="col-md-8 col-sm-8 reviews2_box">
                  <h4>Ольга Куликова</h4>
                  <span>Студентка GoJava</span> <br>
                  <div class="reviews2_margin">
                    <img src="images/reviews2_img2.png" alt="">
                    <img src="images/reviews2_img2.png" alt="">
                    <img src="images/reviews2_img2.png" alt="">
                    <img src="images/reviews2_img2.png" alt="">
                    <img src="images/reviews2_img2.png" alt="">
                  </div>
                  <p>Я поверила, что с GoIT я смогу научиться и добьюсь желаемого результата. Планка была задана высокая еще с предварительного собеседования. Я училась по 6-8, а иногда и по 12 часов в день!</p>
                  <p>В результате:три проекта, которые не стыдно записать в резюме, подготовка не только по Tech Skills, но и Soft Skills, работа над резюме, подготовка к интервью, английский, масса ивентов, конференций, хакатон, более ста новых айтишников в друзьях и знакомых, поддержка в трудоустройстве после обучения. Это было здорово!</p>
                  <!-- a href=""><img src="images/fb-icon-11-2.png" alt=""></a-->
                </div>
              </div>
            </div>
            <!-- Controls -->
            <img src="images/reviews2_left.png" alt="reviews2_left" class="reviews2_left" href="#carousel-generic1" data-slide="prev">
            <img src="images/reviews2_right%20.png" alt="reviews2_right" class="reviews2_right" href="#carousel-generic1" data-slide="next">
          </div>
        </div>
      </section>
      <section class="price">
        <div class="container">
          <img src="images/price_img.png" alt="price_img" class="price_img">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 price_margin ">
              <h2 class="price_title">СТОИМОСТЬ ОБУЧЕНИЯ</h2>
              <div class="price_block">
                <table class="price_table">
                  <tr>
                    <td></td>
                    <td>
                      <div class="price_title_tbl1">Базовый</div>
                    </td>
                    <td>
                      <div class="price_title_tbl2">Продвинутый</d>
                      </td>
                    </tr>
                    <tr class="skills">
                      <td class="" colspan="3">Опции</td>
                    </tr>
                    <tr class="price_bg">
                      <td>Участие во всех занятиях Tech Skills</td>
                      <td><img src="images/ok.png" alt="ok"></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr class="">
                      <td>Участие во всех занятиях Soft Skills </td>
                      <td><img src="images/ok.png" alt="ok"></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr class="price_bg">
                      <td>Доступ ко всем видеолекциям и материалам</td>
                      <td><img src="images/ok.png" alt="ok"></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr>
                      <td>Ментор, помогающий во всех теоретических вопросах</td>
                      <td><img src="images/ok.png" alt="ok"></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr class="color price_bg">
                      <td>Членство в GoIT клубе</td>
                      <td><img src="images/ok.png" alt="ok"></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr>
                      <td>2 индивидуальные консультаций по 45 минут с опытным веб-дизайнером</td>
                      <td></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                    <tr class="career">
                      <td colspan="3">FREELANCE</td>
                    </tr>
                    <tr class="price_bg">
                      <td>Участие во всех занятиях</td>
                      <td><img src="images/ok.png" alt="ok"></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr>
                      <td>Доступ ко всем видеолекциям</td>
                      <td><img src="images/ok.png" alt="ok"></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr class="color price_bg">
                      <td>Индивидуальный фидбек на выполненное практическое задание</td>
                      <td></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr class="career">
                      <td colspan="3">OFFLINE</td>
                    </tr>
                    <tr class="price_bg">
                      <td>Первая оффлайн встреча участников курса</td>
                      <td><img src="images/ok.png" alt="ok"></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr>
                      <td>Выпускной</td>
                      <td><img src="images/ok.png" alt="ok"></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr class="color price_bg">
                      <td>10 оффлайн встреч по Design Skills</td>
                      <td></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr>
                      <td>2 оффлайн встречи по Soft Skills</td>
                      <td></td>
                      <td><img src="images/ok_blue.png" alt="ok_blue"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                  <div class="price__footer">
                    <!--
                    <h3 class="price__title_small1">Живые встречи в Киеве</h3>
                    <div class="price__footer_box">
                      <div class="price__footer_title">Добавить к стоимости участие в живых практикумах в Киеве?</div>
                      <div class="price__btn_group">
                        <label id="add" class="order__currency-item ">
                          <input class="order-add" type="radio" name="order-currency" checked>
                          <span class="order__currency-item-label  order__left borderadd">Добавить</span>
                        </label>
                        <label id="no-add" class="order__currency-item ">
                          <input class="order-no"  type="radio" name="order-currency">
                          <span class="order__currency-item-label  order__right bordernoadd">Не добавлять</span>
                        </label>
                      </div>
                    </div>
                    -->
                    <div class="price__footer_box">
                      <h3 class="price__title_small2">Цена</h3>
                      <div class="live_workshops_yes active">
                        <div class="price__order price__order_offset">
                          <div class="price__order_title old">
                            <span class="active_price1">8 490 ГРН</span>
                            <span>при оплате до 26 сентября </span>
                          </div>
                          <div class="price__order_title ">
                            <span class="active_price1">8 990 ГРН</span>
                            <span>при оплате до 3 октября </span>
                          </div>
                          <div class="price__order_title new">
                            <span class="active_price1">9 490 ГРН</span>
                            <span>при оплате до 13 октября </span>
                          </div>
                          <div class="mar-top75">
                            <a class="registration_btn standart reg-btn" >Забронировать место</a>
                          </div>
                        </div>
                        <div class="price__order">
                          <div class="price__order_title old">
                            <span class="active_price1">11 490 ГРН</span>
                            <span>при оплате до 26 сентября </span>
                          </div>
                          <div class="price__order_title ">
                            <span class="active_price1">11 990 ГРН</span>
                            <span>при оплате до 3 октября </span>
                          </div>
                          <div class="price__order_title new">
                            <span class="active_price1">12 490 ГРН</span>
                            <span>при оплате до 13 октября </span>
                          </div>
                          <div class="mar-top75">
                            <a class="price__btn registration_btn super reg-btn" >Забронировать место</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="get">
          <!--    <img src="images/get_bg.png" alt="get_bg" class="get_bg">-->
          <div class="wrapper">
            <div class="get_box">
              <h2 class="get_title">ХОЧЕШЬ ПОЛУЧАТЬ ОТ 400$ В  <br> МЕСЯЦ В ВЕБ-ДИЗАЙНЕ?</h2>
              <p>Оставь контакты и мы расскажем тебе, <br> как это сделать за 75 дней.</p>
              <a class="registration_btn default_registration reg-btn registration-link" >Оставить контакты</a>
              <img src="images/get_bg2.png" alt="get_bg2" class="get_bg2">
            </div>
          </div>
        </section>
        <section class="questions">
          <div class="container">
            <h2 class="questions_title"> Остались вопросы по курсу ? или у Тебя <br> есть сомнения  “стоит ли начинать развиваться в этом направлении”...</h2>
            <span class="questions_text">Оставь заявку и мы позвоним тебе для консультации</span>
            <form action="crm/registration.php" method="post" class="form" id="registration-form">
              <input class="credit_input_text" name="name" type="text" placeholder="Твое имя" required>
              <input class="credit_input_text" id="phone" name="phone" type="text" placeholder="Твой телефон" required>
              <input class="credit_input_text" name="email" type="email" placeholder="Твой E-mail" required>
              <input type="hidden" id="comment" name="comment" value="Заявка на курс">
              <input type="hidden" id="offline" name="offline" value="Хочет пакет с Оффлайн встречам">
              <input type="hidden" id="registrationType" name="registrationType" value="default_registration">
              <input type="hidden" id="orderType" name="orderType" value="order-add">
              <input type="hidden" id="utm_source" name="utm_source" value="<?php echo $utm_source; ?>">
              <input type="hidden" id="utm_content" name="utm_content" value="<?php echo $utm_content; ?>">
              <input type="hidden" id="utm_medium" name="utm_medium" value="<?php echo $utm_medium; ?>">
              <input type="hidden" id="utm_term" name="utm_term" value="<?php echo $utm_term; ?>">
              <input type="hidden" id="utm_campaign" name="utm_campaign" value="<?php echo $utm_campaign; ?>">
              <input type="hidden" id="user_agent" name="user_agent" value="<?php echo $user_agent; ?>">
              <input type="hidden" id="google_id" name="google_id" value="">
              <input type="hidden"  name="ip" value="<?php echo $ip; ?>">
              <input type="hidden" id="click_id" name="click_id" value="<?php echo $aff_sub; ?>">
              <input type="hidden" class="number_of_button"  name="Number_of_Button" value="Number_of_Button">
              <input type="hidden" id="affiliate_id" name="affiliate_id" value="<?php echo $aff_id; ?>">
              <button id="registration-btn" type="submit" class="registration_btn" >Оставить заявку</button>
            </form>
          </div>
        </section>

        <script src="js/vendor.js"></script>
        <script src="js/app.js"></script>
        <script>
        (function () {
        var widget_id = 789564;
        _shcp = [{
        widget_id: widget_id
        }];
        var lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || "en")
        .substr(0, 2).toLowerCase();
        var url = "widget.siteheart.com/widget/sh/" + widget_id + "/" + lang + "/widget.js";
        var hcc = document.createElement("script");
        hcc.type = "text/javascript";
        hcc.async = true;
        hcc.src = ("https:" == document.location.protocol ? "https" : "http") + "://" + url;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hcc, s.nextSibling);
        })();
        </script>
        <!-- End SiteHeart code -->
        <script  type="text/javascript">
        var gacid;
        (function () {
        var match = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
        var raw = (match) ? decodeURIComponent(match[1]) : null;
        if (raw)  {
        match = raw.match(/(\d+\.\d+)$/);
        }
        gacid = (match) ? match[1] : null;
        
        if (gacid) {
        return gacid;
        }
        })();
        $('#google_id').attr('value', gacid);
        </script>
      </body>
    </html>      