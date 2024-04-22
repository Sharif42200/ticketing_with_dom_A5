function getInput(id){
    let coupon = document.getElementById(id);
    let value = coupon.value;
    return value;
    // console.log(value);
}


function applyBtn() {
    let couponCode = getInput('coupon-code');
    let new15 = 0.15 // 15%
    let couple20 = 0.2 // 20%

    const discount = document.getElementById('discount');

    if(couponCode === 'NEW15')
    {
        let grand = convertIntoNumber('grand-total');
        let percentage = grand * new15;
        discount.innerText = percentage;
        let grandTotal = parseFloat(grand - percentage);
        setNewValue('grand-total' , grandTotal);
    }
    else if(couponCode === 'Couple 20')
    {
        let grand = convertIntoNumber('grand-total');
        let percentage = grand * couple20;
        discount.innerText = percentage;
        let grandTotal = parseFloat(grand - percentage);
        setNewValue('grand-total' , grandTotal);
    }
    else{
        alert('Sorry , invalid coupon code');
        return;
    }

    // const couponField = document.getElementById('coupon-field');
    // couponField.classList.add('hidden');
    addClassById('coupon-field');

    // const discountBox = document.getElementById('discount-box');
    // discountBox.classList.remove('hidden');
    removeClassById('discount-box');
}





