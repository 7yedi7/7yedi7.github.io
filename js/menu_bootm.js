
// function create_menu_bottomCss(cssAdress){
//     link = document.createElement('link');
//         link.rel = "stylesheet";
//         link.href = cssAdress;
//         head_tag = document.getElementsByTagName("head")[0];
//         head_tag.appendChild(link)
//     }
//     create_menu_bottomCss("./css/menu_bottom.css")


menu_bottom_innerCode = 
`
<div class="body_menu_bottom desktop-hide">
            <div class="navigation">
                <ul>
                    <li class="list">
                        <a href="tel:+99364629645">
                            <span class="icon"><i class="ri-phone-line"></i></span>
                            <span class="text">Jaň etmek</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="sms:+99364629645;?&body=7%20islän%20soraglaryňyzy%20jogaplamaga%20taýýar.">
                            <span class="icon"><i class="ri-chat-1-line"></i></span>
                            <span class="text">SMS</span>
                        </a>
                    </li>
                    <li class="list active">
                        <a href="./index.html">
                            <span class="icon"><i class="ri-home-8-line"></i></span>
                            <span class="text">Baş sahypa</span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon"><i class="ri-search-line"></i></span>
                            <span class="text">Gözleg</span>
                        </a>
                    </li>
                    <li class="list">
                        <a onclick="Yza_gaytmak()" href="#">
                            <span class="icon"><i class="ri-arrow-left-line"></i></span>
                            <span class="text">Yza gaýtmak</span>
                        </a>
                    </li>
                    <div id="indicator" class="indicator"></div>
                </ul>
            </div>
        </div>
`
let menu_bottom = document.getElementById("menu_bottom")
menu_bottom.innerHTML = menu_bottom_innerCode;

function Yza_gaytmak(){
    let path = window.location.pathname;
    let page = path.split('/').pop();
    if(page == "yakynda.html" || page == "biz_barada.html" || page == "eltip_bermek_hyzmaty.html" || page == "ulanmak_sertleri.html"){
        window.location.href = "./index.html"
    }
    wide_projuct_place = document.getElementById("widely_product")
    wide_projuct_place.innerHTML ="";
    widely_product_content = document.getElementById("widely_product_content")
    if(products_main_first.classList.contains("open")){
        window.location.href = "./index.html"
    }
    else{
        products_main_first.classList.remove("hide")
        products_main_first.classList.add("open")
    product_widely = document.getElementById("product_widely")
        product_widely.classList.remove("open")
        product_widely.classList.add("hide")
        swiperr()
    }
        
}


        const list = document.querySelectorAll('.list');
        function activeLink(){
            list.forEach((item) =>
            item.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((item) =>
        item.addEventListener('click' , activeLink));

        let lists = list

for (let i = 0; i < lists.length; i++){
    lists[i].addEventListener("click", function(){
        if (i==0){
            calculate_screenBottom(1)
            
        }
        if (i==1){
            calculate_screenBottom(3)
            
        }
        if (i==2){
            calculate_screenBottom(5)
            // window.location.href= "index.html"
        }
        if (i==3){
            calculate_screenBottom(7)
        }
        if (i==4){
            calculate_screenBottom(9)
            // window.location.href= "index.html"
        }
    })

}

function calculate_screenBottom(a){
    let w = window.innerWidth;
    let h = window.innerHeight;
    console.log(w, h);
    let calculated_indicator = w/5;
    let k = calculated_indicator-calculated_indicator/2;
    let b=k*a
    let d = b-34

    let indicator = document.getElementById("indicator");
    indicator.style.transform =`translateX(${(d)}px)`
}
calculate_screenBottom(5)
console.log(2)