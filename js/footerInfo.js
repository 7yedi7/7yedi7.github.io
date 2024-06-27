let footerInfo_innerCode = 
`
        <div class="footer-info">
            <div class="container">
                <div class="wrapper">
                    <div class="flexcol">
                        <div class="logo">
                            <a href="./7_images.html"><img src="./Logo_png_7/Png7.yasyl — favicon.png" alt=""></a>
                        </div>
                        <div class="socials">
                            <ul class="flexitem">
                                <li><a href="#"><i class="ri-twitter-line"></i></a></li>
                                <li><a href="#"><i class="ri-facebook-line"></i></a></li>
                                <li><a href="#"><i class="ri-instagram-line"></i></a></li>
                                <li><a href="#"><i class="ri-linkedin-line"></i></a></li>
                                <li><a href="#"><i class="ri-youtube-line"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`

function footer_nav_func(){

    let footer_nav = document.getElementById("footer_info")
    footer_nav.innerHTML = footerInfo_innerCode;

}
footer_nav_func();