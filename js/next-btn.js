// next btn
function next() {
    addClassById('navbar');
    addClassById('banner');
    addClassById('coupon-box');
    addClassById('buy-ticket');
    addClassById('footer');
    removeClassById('success');
    // buy-ticket , coupon-box , banner , navbar
}


function continueBtn() {
    window.location.href = "index.html";
}