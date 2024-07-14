let value_size;
let qr_size
window.onload = function(){
    qr_size =  document.getElementById("qr_size")

    qr_size.oninput =function(){
        console.log(qr_size.value)
        value_size = document.getElementById("value_size")
        value_size.textContent = qr_size.value
    }
}


function qr_generate(){
    console.log("inside qr")
    let qr_img = document.getElementById("qr_code_id");
    let qr_text = document.getElementById("qr_code_input").value
    let x = qr_size.value;
    qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${x}x${x}&data=${qr_text}`
}