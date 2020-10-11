'use strict';

const setup = document.querySelector('.setup');
const setupOpen = document.querySelector('.setup-open');
const setupClose = document.querySelector('.setup-close');

const similarList = setup.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const secondNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

const coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

const eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

const fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

const getRndInteger = function (arr) {
  const index = Math.ceil(Math.random() * arr.length - 1);

  return arr[index];
};

const wizards = [
  {
    name: `${getRndInteger(names)} ${getRndInteger(secondNames)}`,
    coatColor: getRndInteger(coatColors),
    eyesColors: getRndInteger(eyesColors)
  },
  {
    name: `${getRndInteger(names)} ${getRndInteger(secondNames)}`,
    coatColor: getRndInteger(coatColors),
    eyesColors: getRndInteger(eyesColors)
  },
  {
    name: `${getRndInteger(names)} ${getRndInteger(secondNames)}`,
    coatColor: getRndInteger(coatColors),
    eyesColors: getRndInteger(eyesColors)
  },
  {
    name: `${getRndInteger(names)} ${getRndInteger(secondNames)}`,
    coatColor: getRndInteger(coatColors),
    eyesColors: getRndInteger(eyesColors)
  }
];

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColors;

  return wizardElement;
};

const fillWizard = function () {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarList.appendChild(fragment);
};

fillWizard();

setup.querySelector('.setup-similar').classList.remove('hidden');

// Change wizart roperties module4-task1

const setupPlayer = document.querySelector('.setup-player');
const wizartCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
const wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
const wizartFireball = document.querySelector('.setup-fireball-wrap');

const inputCoat = setupPlayer.querySelector('input[name="coat-color"]');
const inputEyes = setupPlayer.querySelector('input[name="eyes-color"]');
const inputFireball = setupPlayer.querySelector('input[name="fireball-color"]');

const changeWizartProperties = function (elem, input, arr) {

  if (elem === wizartFireball) {
    elem.style.backgroundColor = getRndInteger(arr);
  }

  elem.style.fill = getRndInteger(arr);
  input.value = elem.style.fill;
};

setupPlayer.addEventListener('click', function (evt) {
  if (evt.target === wizartCoat) {
    changeWizartProperties(wizartCoat, inputCoat, coatColors);
  } else if (evt.target === wizardEyes) {
    changeWizartProperties(wizardEyes, inputEyes, eyesColors);
  } else if (evt.target.closest('.setup-fireball-wrap')) {
    changeWizartProperties(wizartFireball, inputFireball, fireballColors);
  }
});

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

