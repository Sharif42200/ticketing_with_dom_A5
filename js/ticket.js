const allKbd = document.getElementsByClassName('kbd');
let selectCount = 0;
let maxSeat = 4;
let selectedSeat = [];

for (let kbd of allKbd) {
    const select = kbd.addEventListener('click', function (event) {
        // getting the selected target value
        const targetValue = event.target.innerText;

        if (selectCount >= maxSeat) {
            alert('You cannot select more then ' + maxSeat + ' seats');
            return;
        }
        if (selectedSeat.includes(targetValue)) {
            alert('This seat is already selected')
            return;
        }
        else {
            kbd.classList.add('bg-prime-color');
            kbd.classList.add('text-white');
        }
        selectCount = selectCount + 1;
        selectedSeat.push(targetValue);


        const tr = document.createElement('tr');
        const newElement = document.createElement('td');
        newElement.innerText = targetValue;
        const newElement2 = document.createElement('td');
        newElement2.innerText = 'economy';
        const newElement3 = document.createElement('td');
        newElement3.innerText = 550;

        tr.append(newElement)
        tr.append(newElement2)
        tr.append(newElement3)

        const getEconomy = document.getElementById('economy');
        getEconomy.append(tr);





        totalSeatDecrease();
        usersSeatIncrease();
        totalAmount('total-price');
        totalAmount('grand-total');


        const apply = document.getElementById('apply-btn');
        if (selectCount === maxSeat) {
            apply.removeAttribute('disabled');
        }
        else {
            apply.setAttribute('disabled', true);
        }


    })

}


function totalSeatDecrease() {
    let totalSeat = convertIntoNumber('total-seat');
    totalSeat = totalSeat - 1;
    // console.log(totalSeat);
    setNewValue('total-seat', totalSeat);
}


function usersSeatIncrease() {
    let userSeat = convertIntoNumber('users-seat');
    userSeat = userSeat + 1;
    // console.log(userSeat);
    setNewValue('users-seat', userSeat);
}


// next btn work
const phone = document.getElementById('phone-number');

phone.addEventListener('keyup', function () {

    nextBtnUpdate();
})


function nextBtnUpdate() {
    // next button work
    const nextBtn = document.getElementById('next-btn');
    const phone = document.getElementById('phone-number');


    if (selectedSeat.length > 0 && phone.value.trim() !== "") {
        nextBtn.removeAttribute('disabled');
    }
    else {
        nextBtn.setAttribute('disabled', true);
    }
}



