// crear tres variable
let bill = 0;
let tip = 0;
let people = 1;

// query selectors
const billValue = document.querySelector('.input-bill');
const tipValue = Array.from(document.getElementsByClassName('percentage-button'));
const peopleValue = document.querySelector('.input-people');
const tipResult = document.getElementById('tip-amount');
const totalResult = document.getElementById('total');
const resetBtn = document.querySelector('.reset-button');

// operaciones matematica
function tipAmount() {
  return ((bill * tip) / 100) / people;
}

function totalAmount() {
  return (bill / people) + tipAmount();
}

// funcion para imprimir resultados
function printResult() {
  if (bill !== 0 && people !== 0) {
    if (tipAmount() > 1000000) {
      tipResult.innerHTML = '$$';
      tipResult.parentElement.style.color = 'red';
    } else {
      tipResult.innerHTML = (tipAmount().toFixed(2));
      tipResult.parentElement.style.color = '#26c2ad';
    }

    if (totalAmount() > 1000000) {
      totalResult.innerHTML = '$$';
      totalResult.parentElement.style.color = 'red';
    } else {
      totalResult.innerHTML = (totalAmount().toFixed(2));
      totalResult.parentElement.style.color = '#26c2ad';
    }
  }
}

printResult();

// event listener cada qeu cambie algo
billValue.addEventListener('input', () => {
  if (billValue.value > 0) {
    bill = billValue.value;
    billValue.classList.remove('input-invalid');
    printResult();
  } else {
    billValue.classList.add('input-invalid');
  }
});

peopleValue.addEventListener('input', () => {
  if (peopleValue.value > 0) {
    people = peopleValue.value;
    peopleValue.classList.remove('input-invalid');
    printResult();
  } else {
    peopleValue.classList.add('input-invalid');
  }
});

tipValue.forEach((e) => {
  e.addEventListener('click', () => {
    const btnActive = document.querySelector('.btn-active');
    if (btnActive !== null) { btnActive.classList.remove('btn-active'); }
    tip = e.value;
    if (!e.hasAttribute('type')) { e.classList.add('btn-active'); }
    printResult();
  });
  e.addEventListener('input', () => {
    if (e.value >= 0) { tip = e.value; } else { tip = 0; }
    printResult();
  });
});

resetBtn.addEventListener('click', () => {
  tipResult.innerHTML = 0;
  totalResult.innerHTML = 0;
  bill = 0;
  people = 1;
  billValue.value = 0;
  peopleValue.value = 1;
  const btnActive = document.querySelector('.btn-active');
  if (btnActive !== null) { btnActive.classList.remove('btn-active'); }
  tip = 0;
});