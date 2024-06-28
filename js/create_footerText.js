let footer_info_textInner =
`
<div class="widgets">
                <div class="container">
                    <div class="wrapper">
                        <div class="flexwrap">
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Biz barada</h4>
                                    <ul class="flexcol">
                                        <li><a href="./biz_barada.html">Biz barada</a></li>
                                        <li><a href="./eltip_bermek_hyzmaty.html">Eltip bermek hyzmaty</a></li>
                                        <li><a href="./yakynda.html">Köplenç berilýän soraglar</a></li>
                                        <li><a href="./ulanmak_sertleri.html">Ulanmak şertleri</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Satlyk harytlar</h4>
                                    <ul class="flexcol">
                                        <li><a href="./yakynda.html">Kitaplar</a></li>
                                        <li><a href="./yakynda.html">Balykçylyk</a></li>
                                        <li><a href="./yakynda.html">Başgalar</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Hyzmatlar</h4>
                                    <ul class="flexcol">
                                        <li><a href="./yakynda.html">Lazer hyzmaty</a></li>
                                        <li><a href="./yakynda.html">Maket ýasamak</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item mini-links">
                                    <h4>Habarlaşmak üçin</h4>
                                    <ul class="flexcol">
                                        <li><a href="tel:+99364629645">+993 64 629645</a></li>
                                        <li><a href="mailto:creatorcreatsthebest07@gmail.com">creatorcreatsthebest07@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
`
function footer_info_Text_func(){

    let footer_text = document.getElementById("footer_text")
    footer_text.innerHTML = footer_info_textInner;

}
footer_info_Text_func();