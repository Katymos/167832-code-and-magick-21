'use strict';

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
const similarList = document.querySelector('.setup-similar-list');
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
  'rgb(0, 0, 0'
];

const eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

let getRndInteger = function (arr) {
  let index = Math.ceil(Math.random() * arr.length - 1);

  return arr[index];
};

let getPropertyValue = function (arr) {
  arr = getRndInteger(arr);

  return arr;
};

const wizards = [
  {
    name: `${getPropertyValue(names)} ${getPropertyValue(secondNames)}`,
    coatColor: getPropertyValue(coatColors),
    eyesColor: getPropertyValue(eyesColor)
  },
  {
    name: `${getPropertyValue(names)} ${getPropertyValue(secondNames)}`,
    coatColor: getPropertyValue(coatColors),
    eyesColor: getPropertyValue(eyesColor)
  },
  {
    name: `${getPropertyValue(names)} ${getPropertyValue(secondNames)}`,
    coatColor: getPropertyValue(coatColors),
    eyesColor: getPropertyValue(eyesColor)
  },
  {
    name: `${getPropertyValue(names)} ${getPropertyValue(secondNames)}`,
    coatColor: getPropertyValue(coatColors),
    eyesColor: getPropertyValue(eyesColor)
  }
];

let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarList.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
