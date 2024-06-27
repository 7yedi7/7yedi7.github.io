headerNav_innerCode = 
`
<div id="header_nav">
        <div class="header-nav">
            <div class="container">
                <div class="wrapper flexitem">
                    <a href="#" onclick="reload_id()" class="trigger desktop-hide"><span><i style="color: white;" class="ri-menu-2-line"></i></span></a>
                    <div class="left desktop-hide">
                    </div>
                    <div class="right flexitem desktop-hide">
                        <div style="width: 32px;">
                            <a href="./7_images.html"><img style="width: 100%;" src="./Logo_png_7/Png7.ak.png" alt=""></a>
                        </div>
                    </div>
    
    
    
                     <div class="left_desktop flexitem mobile-hide">
                        <div style="width: 32px;">
                            <img style="width: 100%;" src="./Logo_png_7/Png7.ak.png" alt="">
                        </div>
                     </div>
                     <div class="right_desktop mobile-hide">
                        <ul>
                            <li><a href="./biz_barada.html">Biz barada</a></li>
                            <li><a href="tel:+99364629645">Habarlaşmak</a></li>
                            <li><a href="./yakynda.html">Täzelikler</a></li>
                         </ul>
                        <div class="search-box">
                         <form action="" class="search">
                             <span class="icon-large"><i class="ri-search-line"></i></span>
                             <input type="search" placeholder="Search for products">
                             <button type="submit">Search</button>
                         </form>
                     </div>
                     </div>
    
    
                     
                </div>
            </div>
    
        </div>
    </div>
`

function header_nav_func(){

    let header_nav = document.getElementById("header_nav")
    header_nav.innerHTML = headerNav_innerCode;

}
header_nav_func();