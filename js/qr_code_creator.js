function qr_generate(){
    console.log("inside qr")
    let qr_img = document.getElementById("qr_code_id");
    let qr_text = document.getElementById("qr_code_input").value
    let x = 250;
    qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${x}x${x}&data=${qr_text}`
}