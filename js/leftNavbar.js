let left_nav_innerCode = 
`
<aside class="site-off desktop-hide">
    <div class="off-canvas">
        <div class="canvas-head flexitem">
            <div class="logo_left"><a href="./7_images.html"><span><img class="logo_nav" src="./Logo_png_7/Png7.ak.png" alt=""></span></a></div>
            <a href="#" class="t-close flexcenter"><i class="ri-close-line"></i></a>
        </div>
        <div class="departments">
            
        </div>
        <nav>
            <span>Satlyk harytlar</span>
            <ul>
                <li><a href="./kitaplar.html">Kitaplar</a></li>
                <li><a href="./index.html">Balykçylyga degişli</a></li>
                <li><a href="./basgalar.html">Başgalar</a></li>
            </ul>
            <span>Hyzmatlar</span>
            <ul>
                <li><a href="./yakynda.html">Lazer hyzmaty</a></li>
                <li><a href="./yakynda.html">Maket ýasamak</a></li>
            </ul>
            <span>Saglyk</span>
            <ul>
                <li><a href="./yakynda.html">Saglyk maslahatlar</a></li>
            </ul>
                <span>Programirowaniýe</span>
            <ul>
                <li><a href="./yakynda.html">Css şablonlar</a></li>
                <li><a href="./qr_code_generator.html">Qr code döret</a></li>
            </ul>
            <span>Biz barada</span>
            <ul>
                <li><a href="./biz_barada.html">Biz barada</a></li>
                <li><a href="./eltip_bermek_hyzmaty.html">Eltip bermek hyzmaty</a></li>
                <li><a href="./yakynda.html">Köplenç berilýan soraglar</a></li>
                <li><a href="./ulanmak_sertleri.html">Ulanmak şertleri</a></li>
            </ul>
            <span>Habarlaşmak üçin</span>
            <ul>
                <li><a href="tel:+99364629645">+993 64 629645</a></li>
                <li><a href="mailto:creatorcreatsthebest07@gmail.com"></a>Creatorcreatsthebest07@gmail.com</li>
            </ul>
        </nav>
        <div class="thetop-nav">

        </div>
    </div>
</aside>
`


function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove("expand") : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

function reload_id(){

    let left_nav = document.getElementById("left_navbar")
    left_nav.innerHTML = left_nav_innerCode;

    closeButton = document.querySelector(".t-close"),
    overlay = document.getElementById("overlay"),
    addclass = document.querySelector('.site');

    addclass.classList.toggle('showmenu')
    overlay.style.visibility = 'inherit';
    overlay.style.opacity = 1;

    closeButton.addEventListener('click', function(){
        addclass.classList.remove("showmenu")
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = 0;
    })


    
}




