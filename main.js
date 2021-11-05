document.querySelector('.main__video').onclick = () => {
  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div class='main__modal'><iframe  class='main__frame' width="315" height="188" src="https://www.youtube.com/embed/tGKlj-g6dWY?autoplay=1" title="YouTube video player"
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
  <div class='main__close'>  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.7188 11.2812L11.2812 12.7188L18.5625 20L11.2812 27.2812L12.7188 28.7188L20 21.4375L27.2812 28.7188L28.7188 27.2812L21.4375 20L28.7188 12.7188L27.2812 11.2812L20 18.5625L12.7188 11.2812Z" fill="#6A6A6A"/>
  </svg></div>
  </div>`)
  document.querySelector('.main__modal').onclick = (e) => {
    e.target.remove()
  }

  document.querySelector('.main__close').onclick = () => {
    document.querySelector('.main__modal').remove()
  }

}

let counter = 1
cards = [
  { card: 1, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] },
  { card: 2, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] },
  { card: 3, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] },
  { card: 4, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] },
  { card: 5, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] },
  { card: 6, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] },
  { card: 7, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] },
  { card: 8, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] },
  { card: 9, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] },
  { card: 10, price: '17 000', result: '17 000', total: 17000, day: '1 часa', dayValue: 0, options: [] }
]


document.querySelector('.big-button').onclick = (e) => {

  e.path[1].insertAdjacentHTML('beforebegin', `    <article class="card">
  <div class="container">
  <ul class="card__inner">
    <span class="card__btn card__btn--back">
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.48">
          <path
            d="M19.0312 5.06274L8.03125 16.0627L7.34375 16.7815L8.03125 17.5002L19.0312 28.5002L20.4688 27.0627L10.1875 16.7815L20.4688 6.50024L19.0312 5.06274Z"
            fill="white" />
        </g>
      </svg>
    </span>
    <ul class="card__list">
      <li class="card__item">
        <img class="card__card" src="./img/1.png" alt="">
      </li>
      <li class="card__item">
        <img class="card__card" src="./img/2.png" alt="">
      </li>
      <li class="card__item">
        <img class="card__card" src="./img/3.png" alt="">
      </li>
    </ul>
    <span class="card__btn card__btn--forward">
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.48">
          <path
            d="M12.9688 5.06274L11.5312 6.50024L21.8125 16.7815L11.5312 27.0627L12.9688 28.5002L23.9688 17.5002L24.6562 16.7815L23.9688 16.0627L12.9688 5.06274Z"
            fill="white" />
        </g>
      </svg>
    </span>
  </ul>
  <h3 class="card__name">Фотобудка с ширмой #${cards[counter].card}</h3>
  <div class="card__size">Размер: <span class="card__params">2м x 1.5м x 2 м</span></div>
  <span class="card__desc">Доп. опции</span>
  <ul class="card__options">
  <li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #1</h4>
        <span class="card__option-price">2500 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>

<li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #2</h4>
        <span class="card__option-price">3000 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>
<li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #3</h4>
        <span class="card__option-price">3500 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>

<li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #4</h4>
        <span class="card__option-price">4000 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>

<li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #5</h4>
        <span class="card__option-price">4500 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>

<li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #6</h4>
        <span class="card__option-price">5000 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>

<li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #7</h4>
        <span class="card__option-price">5500 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>

<li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #8</h4>
        <span class="card__option-price">6000 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>

<li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #9</h4>
        <span class="card__option-price">6500 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>

<li class="card__option">
  <label class="card__label">
    <input class="card__checkbox" type="checkbox">
    <div class="card__left">
      <img class="card__mini" src="./img/option.png" alt="">
      <div class="card__content">
        <h4 class="card__subtitle">Разработка макета #10</h4>
        <span class="card__option-price">7000 <span class="card__currency">₽</span></span>
      </div>
    </div>
  </label>
</li>

  </ul>

  <span class="card__rent-desc">Укажите время аренды</span>
  <ul class="card__rent">
    <li class="card__time active" value="0">1 часa</li>
    <li class="card__time" value="2000">2 часа</li>
    <li class="card__time" value="3000">3 часа</li>
    <li class="card__time" value="4000">5 часов</li>
    <li class="card__time" value="5000">выставка 2 дня</li>
    <li class="card__time" value="7000">выставка 3 дня</li>
  </ul>
  <div class="card__result">
  <span class="card__price">${cards[counter].price} <span class="card__currency">₽</span></span>
    <button class="button">Оставить заявку</button>
  </div>
  </div>
</article>`)

  if (counter == 9) {
    e.target.remove()
  }

  liseners()

  counter++
}

let counterSlider1 = createCounter()
let counterSlider2 = createCounter()
let counterSlider3 = createCounter()
let counterSlider4 = createCounter()
let counterSlider5 = createCounter()
let counterSlider6 = createCounter()
let counterSlider7 = createCounter()
let counterSlider8 = createCounter()
let counterSlider9 = createCounter()
let counterSlider10 = createCounter()

let counters = [counterSlider1, counterSlider2, counterSlider3, counterSlider4, counterSlider5, counterSlider6, counterSlider7, counterSlider8, counterSlider9, counterSlider10]


function createCounter() {
  let a = 0;
  return {
    plus: function () {
      return a++
    },
    minus: function () {
      return a--
    },
    status: function () {
      return a
    }
  }
}

function back(slider, i) {
 
  if (counters[i].status() > 0) {
    counters[i].minus()
  }
  slider[i].style.transform = `translateX(-${counters[i].status() * 100}%)`
}

function forward(slider, i) {
  
  if (counters[i].status() < 2) {
    counters[i].plus()
  }
  slider[i].style.transform = `translateX(-${counters[i].status() * 100}%)`
}

function color(e, el, i) {

  for (el of el.children) {
    el.classList.remove('active')
  }
  let value = e.target.value
  let a = e.target.innerHTML.split(' ')

  if (e.target.tagName === 'LI') {
    if (cards[i].dayValue !== value) {
      cards[i].total = cards[i].total - cards[i].dayValue + value
      cards[i].dayValue = value
    }

    cards[i].day = a[a.length - 2] + ' ' + a[a.length - 1]
    e.target.classList.add('active')
  }
  result(i)
 
}

function countPrice(e, i) {

  let total = cards[i].total
  let option = +e.path[2].children[0].children[1].children[1].children[1].childNodes[0].textContent.split(' ').join('')
  let inner = e.path[2].children[0].children[1].children[1].children[0].innerHTML.split('#')[1]
  if (e.target.checked) {
    total += option
    cards[i].total = total
    cards[i].options['inner' + inner] = [e.path[2].children[0].children[1].children[1].children[0].innerHTML, option]
  } else {
    total -= option
    cards[i].total = total
    delete cards[i].options['inner' + inner]
  }
  result(i)
 
}

function openModal(e, i) {
  document.querySelector('body').insertAdjacentHTML('afterbegin', `
  <div class="modal" data-number="${i + 1}">
  <div class='container'>
  <div class='modal__inner'> 
    <div class='modal__top'>
    <h2 class="title title--margin">Ваша заявка</h2> 
    <span class='modal__close'></span>
    </div>
    <div class="modal__main">
      <div class="modal__left">
        <h4 class="modal__name">Фотобудка с ширмой #${cards[i].card}</h4>
        <div class="modal__size modal__size--margin">Размер: <span class="modal__params">2м x 1.5м x 2 м</span></div>
        <span class="modal__selected">${cards[i].day}</span>
        <ul class="modal__days">
        <li class="modal__day" value='0'>1 час</li>
        <li class="modal__day" value='2000'>2 часа</li>
        <li class="modal__day" value='3000'>3 часа</li>
        <li class="modal__day" value='4000'>5 часов</li>
        <li class="modal__day" value='5000'>2 дня</li>
        <li class="modal__day" value='7000'>3 дня</li>
      </ul>
      </div>
      <span class="modal__price">${cards[i].price} <span class="card__currency">₽</span></span>
      </div>
      <ul class="modal__options">
      </ul>
  </div>
    <div class="modal__results">
      <div class='modal__result-top'> 
        <span class="modal__result">Итого:</span>
        <span class="modal__total">${cards[i].result} <span class="card__currency">₽</span></span>
      </div>
     <div class='modal__feedback'> 
      <input class='modal__input' type='tel' placeholder="+7 (000) 000 00 00" maxlength="18"/>
      <span class="modal__answer">Позвоните мне</span>
      <ul class='modal__responses'> 
        <li class="modal__respons">Позвоните мне</li>
        <li class="modal__respons">Напишите мне</li>
      </ul>
      </div>
      <button class='big-button big-button--red' type='button'> Отправить заявку </button>
      </div>
    </div>
 
</div>`)
  for (item in cards[i].options) {
    document.querySelector('.modal__options').insertAdjacentHTML('beforeend', ` 
    <li class='modal__item'>
    <h4 class="modal__option-name">${cards[i].options[item][0]}</h4>
    <span class="modal__option-price">${cards[i].options[item][1]} <span class="card__currency">₽</span></span>
    </li>`)
  }
  inputMasc()

  let optios = document.querySelector('.modal__days')
  let selected = document.querySelector('.modal__selected')
  selected.onclick = (e) => {
    optios.style.display = 'flex'
    for (el of optios.children) {
      el.onclick = (e) => {
        let i = document.querySelector('.modal').getAttribute('data-number')-1
        let value = e.target.value
        cards[i].day = e.target.innerHTML
        cards[i].total = cards[i].total - cards[i].dayValue + value
        cards[i].dayValue = value
        result(i)
        document.querySelector('.modal__total').childNodes[0].textContent = cards[i].result
        document.querySelector('.modal__selected').innerHTML = cards[i].day
        optios.style.display = 'none'
      }
    }
  }


  let responses = document.querySelector('.modal__responses')
  let answer = document.querySelector('.modal__answer')
  
  answer.onclick = (e) => {
    responses.style.display = 'block'
    for (el of responses.children) {
      el.onclick = (e) => {
        answer.innerHTML = e.target.innerHTML
        responses.style.display = 'none'
      }
    }
  }

  document.querySelector('.modal__close').onclick = () => {
    document.querySelector('.modal').remove()
  }

  document.querySelector('.big-button--red').onclick = () => {
    document.querySelector('.modal').remove()
  }
}

function liseners() {
  let slider = document.querySelectorAll('.card__list')
  document.querySelectorAll('.card__rent').forEach((el, i) => {
    el.onclick = (e) => {
      color.call(null, e, el, i)
    }
  })

  document.querySelectorAll('.card__btn--back').forEach((el, i) => {
    el.onclick = back.bind(null, slider, i)
  })

  document.querySelectorAll('.card__btn--forward').forEach((el, i) => {
    el.onclick = forward.bind(null, slider, i)
  })

  document.querySelectorAll('.card__options').forEach((el, i) => {
    el.onchange = (e) => countPrice.call(null, e, i)
  })

  document.querySelectorAll('.button').forEach((el, i) => {
    el.onclick = (e) => openModal.call(null, e, i)
  })
}

function result(i) {
  let first = []
  let second = []
  cards[i].total.toString().split('').reverse().forEach((el, i) => {
    if (i < 3) {
      first.unshift(el)
    } else {
      second.unshift(el)
    }
  })

  cards[i].result = [...second, ' ', ...first, ' '].join('')
}

liseners()

