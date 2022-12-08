const startAnimation = (entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("slide-in-from-left", entry.isIntersecting);
  });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 };

const elements = document.querySelectorAll('.info');
elements.forEach(el => {
  observer.observe(el, options);
});

const startAnimationRev = (entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
  });
};

const observerRev = new IntersectionObserver(startAnimationRev);
const optionsRev = { root: null, rootMargin: '0px', threshold: 1 };

const elementsRev = document.querySelectorAll('.info-rev');
elementsRev.forEach(el => {
  observerRev.observe(el, options);
});


let main = document.querySelector('main');
let orderBtn = document.querySelector('.order-now');

orderBtn.addEventListener('click', () => {
  let row = document.querySelector('#delivery-body');
  row.classList.toggle('flex-column');

  if (row.classList.contains('flex-column')) {
    orderBtn.innerHTML = 'Back';
  } else {
    orderBtn.innerHTML = 'Order now';
  }

  let deliveryHiddenPart = document.querySelector('.delivery-hidden-part');
  let orderForm = document.querySelector('.order-form');

  deliveryHiddenPart.classList.toggle('d-none');
  orderForm.classList.toggle('d-none');

  let plusBtn = document.querySelector('.plus-btn');
  let minusBtn = document.querySelector('.minus-btn');
  let orderCount = document.querySelector('.order-count');
  let priceField = document.querySelector('.price-field');

  let i = 1;
  orderCount.value = i
  priceField.value = 60

  plusBtn.addEventListener('click', () => {
    if (orderCount.value >= 0) {
      i++;
      orderCount.value = i;
      priceField.value = 60 * orderCount.value;
    }
  })
  minusBtn.addEventListener('click', () => {
    if (orderCount.value > 0) {
      i--;
      orderCount.value = i;
      priceField.value = 60 * orderCount.value;
    }
  })
  orderCount.addEventListener('input', () => {
    priceField.value = orderCount.value * 60
  })
})

let floatinBtn = document.querySelector('#floating-btn');

window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20) {
      floatinBtn.style = `display: block;`
    } else {
      floatinBtn.style = `display: none;`
    }
})

floatinBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
})