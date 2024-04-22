function convertIntoNumber(elementId)
{
    const element = document.getElementById(elementId);
    const elementInnerText = element.innerText;
    const elementInNumber = parseInt(elementInnerText);
    return elementInNumber;
}

function setNewValue(elementId , value)
{
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function totalAmount(elementId)
{
    let element = convertIntoNumber(elementId);
    element = element + 550;
    setNewValue(elementId , element);
    return element;
}


function addClassById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function removeClassById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}