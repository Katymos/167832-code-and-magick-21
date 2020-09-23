var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;

var GAP = 20;
var FONT_GAP = 20;
var BAR_WIDTH = 40;

var heightTitle = CLOUD_Y + GAP + FONT_GAP + GAP + FONT_GAP;
var barHeight = CLOUD_HEIGHT - heightTitle - GAP - FONT_GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = `16px PT Mono`;
  ctx.fillStyle = '#000';
  ctx.textBaseline = "hanging";

  var maxTime = getMaxElement(times);
  var titles = ['Ура вы победили!', 'Список результатов: '];

  for (var i = 0; i < titles.length; i++) {
    ctx.fillText(titles[i],
      CLOUD_X + GAP,
      CLOUD_Y + GAP + (FONT_GAP * i)
    );
  }

  for (var i = 0; i < names.length; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = `hsl(240, ` + Math.floor(Math.random() * 100) + `%, 50%)`;
    }

    ctx.fillText(
      Math.ceil(times[i]),
      CLOUD_X + GAP + GAP + (BAR_WIDTH + GAP * 2) * i,
      CLOUD_HEIGHT - GAP - FONT_GAP - GAP - (barHeight * times[i]) / maxTime,
    );

    ctx.fillRect(
      CLOUD_X + GAP + GAP + (BAR_WIDTH + GAP * 2) * i,
      CLOUD_HEIGHT - GAP - FONT_GAP - ((barHeight * times[i]) / maxTime),
      BAR_WIDTH,
      (barHeight * times[i]) / maxTime,
    );

    ctx.fillStyle = '#000';

    ctx.fillText(
      names[i],
      CLOUD_X + GAP + GAP + (BAR_WIDTH + GAP * 2) * i,
      CLOUD_HEIGHT - GAP
    );
  }
};
