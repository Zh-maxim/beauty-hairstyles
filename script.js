window.onload = () => {
    let upperLoader = document.querySelector(".upperLoader")
    let opacityDisapear = () => {
        upperLoader.style.transition = "0.5s"
        upperLoader.style.opacity = 0
    }
    let loaderDistract = () => {
        upperLoader.style.display = "none"
    }
    setTimeout(opacityDisapear, 1000)
    setTimeout(loaderDistract, 1500)
}

let slider = document.querySelector(".sliderDown")
let counter = 0
let cont1 = document.querySelector(".cont1")
let cont2 = document.querySelector(".cont2")
let cont3 = document.querySelector(".cont3")
let timerSlider = 3000
let toSlide = () => {
    counter = counter - 800
    if (counter == -2400) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont1.classList.add('redCont')
        counter = 0
    }
    if (counter == 0) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont1.classList.add('redCont')
    }
    if (counter == -800) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont2.classList.add('redCont')
    }
    if (counter == -1600) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont3.classList.add('redCont')
    }
    slider.style.left = counter + 'px'
}
let setik = setInterval(toSlide, timerSlider)
cont1.onclick = () => {
    cont1.classList.remove('redCont')
    cont2.classList.remove('redCont')
    cont3.classList.remove('redCont')
    cont1.classList.add('redCont')
    clearInterval(setik)
    counter = 0
    slider.style.left = counter + 'px'
}
cont2.onclick = () => {
    cont1.classList.remove('redCont')
    cont2.classList.add('redCont')
    cont3.classList.remove('redCont')
    clearInterval(setik)
    counter = -800
    slider.style.left = counter + 'px'
}
cont3.onclick = () => {
    cont1.classList.remove('redCont')
    cont2.classList.remove('redCont')
    cont3.classList.add('redCont')
    clearInterval(setik)
    counter = -1600
    slider.style.left = counter + 'px'
}
let btnToUp = document.querySelector('.btnToUp')
scrollCount = window.scrollY;
if (scrollCount == 0) {
    btnToUp.style.display = 'none'
}
addEventListener("scroll", () => {
    scrollCount = window.scrollY;
    if (scrollCount == 0) {
        btnToUp.style.display = 'none'
    }
    else {
        btnToUp.style.display = "flex"
    }
})
btnToUp.onclick = () => {
    window.scrollTo(0, 0);
}
let infoBtnToggles = document.getElementsByClassName("infoBtnToggles")
let NameOfArticle = document.querySelector('.NameOfArticle')
let paragraphOfCity = document.getElementsByClassName('paragraphOfCity')
let NameOfPlace = document.querySelector('.NameOfPlace')
let picOfPlace = document.getElementsByClassName('picOfPlace')
infoBtnToggles[1].onclick = () => {
    NameOfArticle.innerHTML = "Модельная"
    paragraphOfCity[0].innerHTML = "Модельная мужская стрижка — это классика, удачное решение вне моды и сезона. К модельным мужским стрижкам относятся классические варианты с небольшой долей креатива в оформлении."
    paragraphOfCity[1].innerHTML = "Такие прически легко подчеркивают индивидуальные особенности внешности и формируют стиль. По сути, это золотая середина между чем-то эпатажным и революционным и спокойным консервативным. Такое название стрижки носят из-за того, что их моделируют и подстраивают под конкретного клиента и его внешние особенности. Модельной мужской стрижкой можно назвать любую прическу, которая подобрана с учетом индивидуальных особенностей внешности. Под это определение подойдет и классическая мужская стрижка, и остромодная."
    NameOfPlace.innerHTML = "МОДЕ<brЛЬ<br>НАЯ"
    picOfPlace[0].classList.remove('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[0].onclick = () => {
    NameOfArticle.innerHTML = "Бокс"
    paragraphOfCity[0].innerHTML = "Мужские стрижки на короткие волосы — это в первую очередь бокс и его вариации. Актуальные стрижки спортсменов получили свое название от одноименного вида единоборств — бокса."
    paragraphOfCity[1].innerHTML = "Максимальная длина стрижки бокс не превышает 4–5 см, за счет чего такую прическу часто выбирают мужчины с бизнес-имиджем или любители спорта. Она не требует особых навыков укладки и специальных приспособлений."
    NameOfPlace.innerHTML = "Б<br>ОК<br>С"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.remove('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[2].onclick = () => {
    NameOfArticle.innerHTML = "Милитари"
    paragraphOfCity[0].innerHTML = "Образ военнослужащих вызывают ассоциацию со смелостью, честью и отвагой. Не странно, что многие мужчины выбирают для себя стиль милитари. Особенно это актуально для тех, кто ведет активный образ жизни."
    paragraphOfCity[1].innerHTML = "Такие стрижки выглядят аккуратно, не требуют ежедневной укладки, смотрятся стильно и современно. Она популярна у спортсменов, которым важны убранные со лба пряди, не мешающие движениям. Стрижка милитари подходит для мужчин с активным образом жизни, благодаря практичности."
    NameOfPlace.innerHTML = "МИЛ<br>ИТ<br>АРИ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.remove('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[3].onclick = () => {
    NameOfArticle.innerHTML = "Британка"
    paragraphOfCity[0].innerHTML = "Небрежность и шарм — к этому стремятся мужчины, которые носят популярную сегодня британку."
    paragraphOfCity[1].innerHTML = "Эта стрижка пришла к нам из Великобритании — как, собственно, не сложно догадаться из названия. Для того чтобы представить себе британку, достаточно вспомнить таких звезд, как Джастин Тимберлейк или Криштиану Роналду — именно они привыкли появляться на публике с этой стрижкой. Главная ее особенность — довольно длинная челка, длинные передние пряди и максимально короткие волосы на затылке и по бокам.Британка — непростая стрижка, требующая укладки, однако те, кто ее носит, утверждают: немного практики, и перед зеркалом придется проводить не больше пяти минут!"
    NameOfPlace.innerHTML = "БРИ<br>ТАН<br>КА"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.remove('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[4].onclick = () => {
    NameOfArticle.innerHTML = "Фейд"
    paragraphOfCity[0].innerHTML = "Мужская стрижка Фейд (Fade) — это стриженные коротко волосы на затылке и висках в сочетании с длинными на макушке. Она была частью милитари-стиля, популярного в Америке в середине прошлого века. Затем в моду вошли кок с зачесанной наверх длинной челкой и моптом, как у знаменитой ливерпульской четверки."
    paragraphOfCity[1].innerHTML = "Мужская стрижка фейд предполагает нечеткий переход от коротких волос к длинным. Благодаря плавности этого перехода он еще получил название бархатный фейд: волосы на затылке и висках как будто образуют единое переливающееся полотно. Создается подобный эффект с помощью профессиональной машинки для стрижки волос: чем качественнее и дороже будет инструмент, тем лучше."
    NameOfPlace.innerHTML = "Ф<br>ЕЙ<br>Д"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.remove('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[5].onclick = () => {
    NameOfArticle.innerHTML = "Кроп"
    paragraphOfCity[0].innerHTML = "Мужская стрижка кроп (crop) — это дальняя родственница бокса, полубокса и даже шапочки, но отличается от своих сородичей уникальным сочетанием стиля и удобства. Главные черты мужского кропа — коротко выбритые бока и затылок в паре с довольно длинными филированными прядями на макушке и в районе лба, плюс короткая челка."
    paragraphOfCity[1].innerHTML = "Идеальное решение для любого парня — стрижка кроп виртуозно сочетает в себе сдержанность и порыв. Перепад между короткими и длинными прядями очень стильный, а в результате стрижка crop без проблем встроится и в удобный кэжуал, и в строгий деловой образ."
    NameOfPlace.innerHTML = "К<br>РО<br>П"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.remove('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[6].onclick = () => {
    NameOfArticle.innerHTML = "Принстон"
    paragraphOfCity[0].innerHTML = "Мужская модная стрижка Принстон присущей ей универсальностью покоряет любого. Из серьезной офисной или университетской прически делают легкую небрежную укладку. Она будет сочетаться с sport style или casual. Мужчинам зрелым стилисты советуют выполнять классическую строгую укладку. Для молодых людей подойдет стиль с креативным стайлингом. Растрепанные волосы сочетаются с небритостью."
    paragraphOfCity[1].innerHTML = "Принстон – выполненная в традициях одноименного университета стильная мужская стрижка. Здесь воплощен классический стиль и модные тенденции. Вариант подходит для работы и для выходов в свет."
    NameOfPlace.innerHTML = "ПРИ<br>НС<br>ТОН"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.remove('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[7].onclick = () => {
    NameOfArticle.innerHTML = "Ежик"
    paragraphOfCity[0].innerHTML = "Из множества мужских модельных стрижек “ежик” особенно популярен у завсегдатаев спортзалов и тех, кто в любую погоду выходит на пробежку с первыми лучами солнца. Название стрижки говорит само за себя: она неуловимо напоминает ощетинившегося лесного зверька с колючками."
    paragraphOfCity[1].innerHTML = "“Колючая” прическа практически универсальна – она уместна при волнистой и прямой структуре волос, хорошо смотрится со спортивным стилем одежды и со строгим костюмом, с гладким лицом и мужественным сочетанием небольшой бородки и усов. К тому же некоторые виды “ежика” помогают скорректировать черты лица. Например, стрижка с короткой челкой сделает широкий и высокий лоб более гармоничным. Если вы большой поклонник этой стрижки, посоветуйтесь со своим парикмахером - он подскажет, как видоизменить прическу, чтобы она подчеркивала достоинства внешности, а не обнажала недостатки."
    NameOfPlace.innerHTML = "Е<br>ЖИ<br>К"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.remove('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[8].onclick = () => {
    NameOfArticle.innerHTML = "Андеркат"
    paragraphOfCity[0].innerHTML = "В последние годы все голливудские актеры и футболисты мирового уровня выбирают стрижку андеркат, и не зря, ведь она считается самой стильной и экстравагантной. Несмотря на то, что пик ее популярности пришелся на последние несколько лет, появилась она еще в 20-х годах XX века и была востребована у британских солдат."
    paragraphOfCity[1].innerHTML = "Дословно с английского языка undercut переводится как «срезанный низ». Это означает, что особенностью стрижки являются коротко срезанные или выбритые волосы на затылочной и височной зонах с резким переходом к верхней части (шевелюра в теменной зоне должна быть длиннее 5 сантиметров). Главная фишка этой современной стрижки — яркий переход от максимально коротких к длинным волосам. Несмотря на то, что мужская стрижка андеркат считается очень модной, подходит она далеко не всем представителям сильного пола."
    NameOfPlace.innerHTML = "АНД<br>ЕР<br>КАТ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.remove('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[9].onclick = () => {
    NameOfArticle.innerHTML = "Улан-Удэ"
    paragraphOfCity[0].innerHTML = "Улан-Удэ — столица солнечной Бурятии и один из крупнейших центров буддизма в России. Это не самая популярная туристическая локация, многие путешественники оказываются здесь проездом, например по пути на Байкал. Размеры Улан-Удэ небольшие, поэтому познакомиться с бурятской столицей можно даже за один день. В городе расположено много символичных памятников, красивый буддийский монастырь и весьма необычная скульптура Ленина."
    paragraphOfCity[1].innerHTML = "Улан-Удэ — это невероятно красивый, солнечный и, что самое прекрасное, многонациональный город. Благодаря этому здесь сплелись традиции и обычаи разных народов, но превалирует культура бурятская. Популярные места: вято-Одигитриевский кафедральный собор, памятник Гэсэру, Величественная «Мать Бурятия».";
    NameOfPlace.innerHTML = "УЛАН<br><br>УДЭ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.remove('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[10].onclick = () => {
    NameOfArticle.innerHTML = "Калининград"
    paragraphOfCity[0].innerHTML = "Калининград — город на западе России, центр одноимённой области. Сюда едут ради желания почувствовать себя хоть одной ногой в Европе, особенно в плане климата, готической архитектуры и кухни. До 1946 года город был известен как Кенигсберг и принадлежал Германии, но по итогам Второй мировой войны вошел в состав СССР, а затем и России. Это лишь малый отрезок богатой истории Калининграда, который появился в 1255 году."
    paragraphOfCity[1].innerHTML = "Поездка по Калининградской области — настоящее путешествие во времени: если внимательно смотреть по сторонам, подмечая приметы разных эпох, то непростая история этих мест начинает оживать. Её первыми героями были прусские племена, о владычестве которых напоминают сегодня древние курганы и необхватные дубы в некогда священных рощах. Популярные места: крепость «Кенигсберг», Озерск, замок Шаакен, музей Мирового океана.";
    NameOfPlace.innerHTML = "КАЛИ<br>НИН<br>ГРАД"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.remove('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[11].onclick = () => {
    NameOfArticle.innerHTML = "Новгород"
    paragraphOfCity[0].innerHTML = "Живописные земли на северо-западе европейской части нашей страны — один из древнейших регионов России. Туристы приезжают в Новгородскую область полюбоваться лесами, красивыми озерами, старинными храмами и монастырями. Немало интересных мест ждут путешественников в областном центре — Великом Новгороде, на бальнеологическом курорте Старая Русса, в исторических городах Боровичи, Чудово, Холм, Малая Вишера, на просторах Валдайской возвышенности и в Валдайском национальном парке."
    paragraphOfCity[1].innerHTML = "Новгородская область – регион России, богатый на исторические достопримечательности. Свидетельства прошлого можно встретить в ряде поселений, но особенно много их в Великом Новгороде – ключевом городе для Руси. Популярные места: Новгородский детинец, Софийский собор, озеро Селигер.";
    NameOfPlace.innerHTML = "НОВ<br>ГО<br>РОД"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.remove('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[12].onclick = () => {
    NameOfArticle.innerHTML = "Камчатский край"
    paragraphOfCity[0].innerHTML = "Практически на самом краю России раскинулся камчатский полуостров, омываемый с одной стороны Охотским морем, а с другой водами Тихого океана. Камчатка — это предмет национальной гордости, ведь на её территории сосредоточено всё многообразие северной природы. Густые леса, кристально чистые озера, стремительные реки и, что самое главное, вулканы. Камчатка входит в состав Тихоокеанского вулканического огненного кольца, так как на её территории существует больше 300 вулканов: большинство из них время от времени проявляют активность."
    paragraphOfCity[1].innerHTML = "Камчатка у туристов прежде всего ассоциируется с природными особенностями. В этом направлении у края огромное разнообразие: водопады, сопки, вулканы, парки, горячие источники и многое другое. Они разбросаны по всему региону, так что осмотреть всё за одну поездку будет непросто. Однако, вот самые популярные места: олина Гейзеров, командорские острова, ключевская сопка.";
    NameOfPlace.innerHTML = "КАМ<br>ЧАТ<br>КА"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.remove('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[13].onclick = () => {
    NameOfArticle.innerHTML = "Волгоградская область"
    paragraphOfCity[0].innerHTML = "Бескрайние степи и солёные озёра, меловые горы на месте доисторического моря, стометровые скальные останцы и даже своя Волжская Швейцария — всё это необычайно живописная природа Волгоградской области. Отдых в регионе придётся по душе не только любителям экотуризма, но и поклонникам малых городов с красивой архитектурой и необычными музеями, например, казачьего городка под открытым небом."
    paragraphOfCity[1].innerHTML = "Край широких рек и соленых озер, необъятных степей и заповедных лесов, регион с богатой историей. Волгоградская область — один из самых интересных, при этом один из самых неочевидных вариантов провести отпуск на юге. Популярные места: озеро Эльтон, природный парк «Донской», природный парк «Щербаковский».";
    NameOfPlace.innerHTML = "ВОЛ<br>ГОГ<br>РАД"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.remove('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[14].onclick = () => {
    NameOfArticle.innerHTML = "Остров Сахалин"
    paragraphOfCity[0].innerHTML = "Сахалин — место для тех, кто хочет почувствовать себя первооткрывателем на краю света. Главное на этом далеком острове — почти нетронутая человеком природа: горы, мысы, бухты, озера, водопады, Охотское и Японское моря. Куда ни посмотри — пейзажи завораживают. Исследовать Сахалин можно бесконечно, каждый раз открывая для себя новые достопримечательности. И все это без шума и излишков цивилизации."
    paragraphOfCity[1].innerHTML = "Далекий и загадочный остров. Край озер, источников и вулканов. Таким кажется Сахалин большинству туристов. Поэтому, как магнитом тянет сюда все больше людей: своими глазами увидеть живописную природу и прикоснуться к истории острова.";
    NameOfPlace.innerHTML = "СА<br>ХА<br>ЛИН"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.remove('disabledPic')
}