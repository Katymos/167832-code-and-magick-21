"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;

const CLOUD_X = 100;
const CLOUD_Y = 10;

const GAP = 20;
const FONT_GAP = 20;
const BAR_WIDTH = 40;

const heightTitle = CLOUD_Y + GAP + FONT_GAP + GAP + FONT_GAP;
const barHeight = CLOUD_HEIGHT - heightTitle - GAP - FONT_GAP;
const coordinateX = CLOUD_X + GAP + GAP + (BAR_WIDTH + GAP * 2);

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  const maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = "hanging";

  const maxTime = getMaxElement(times);
  const titles = ['Ура вы победили!', 'Список результатов: '];

  for (let i = 0; i < titles.length; i++) {
    ctx.fillText(titles[i],
        CLOUD_X + GAP,
        CLOUD_Y + GAP + (FONT_GAP * i)
    );
  }

  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = `hsl(240, ` + Math.floor(Math.random() * 100) + `%, 50%)`;
    }

    ctx.fillText(
        Math.ceil(times[i]),
        coordinateX * i,
        CLOUD_HEIGHT - GAP - FONT_GAP - GAP - (barHeight * times[i]) / maxTime
    );

    ctx.fillRect(
        coordinateX * i,
        CLOUD_HEIGHT - GAP - FONT_GAP - ((barHeight * times[i]) / maxTime),
        BAR_WIDTH,
        (barHeight * times[i]) / maxTime
    );

    ctx.fillStyle = '#000';

    ctx.fillText(
        names[i],
        coordinateX * i,
        CLOUD_HEIGHT - GAP
    );
  }
};
