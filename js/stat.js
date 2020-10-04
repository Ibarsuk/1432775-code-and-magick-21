"use strict";

(() => {
  const CLOUD_POSITION_X = 100;
  const CLOUD_POSITION_Y = 10;
  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const CLOUD_COLOR = `#ffffff`;
  const CLOUD_SHADOW = `rgba(0, 0, 0, 0.3)`;
  const FONT = `16px PT Mono`;
  const WIN_MESSAGE_COLOR = `#000000`;
  const WIN_MESSAGE_FIRST = `Ура вы победили!`;
  const WIN_MESSAGE_SECOND = `Список результатов:`;
  const GRAPH_MAX_HEIGHT = 150;
  const GRAPH_WIDTH = 40;
  const GRAPH_GAP = 50;

  const drawCloud = (ctx, x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  const fillText = (ctx, message, x, y, font, color = `#000000`) => {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(message, x, y);
  };

  const getMaxTime = (times) => {
    let maxTime = times[0];
    times.forEach((value) => {
      if (value > maxTime) {
        maxTime = value;
      }
    });
    return maxTime;
  };

  const renderGraph = (ctx, x, y, name, time, maxTime, barColor = `#000000`) => {
    fillText(ctx, name, x, y, FONT);
    const barHeight = GRAPH_MAX_HEIGHT * time / maxTime;
    ctx.fillStyle = barColor;
    ctx.fillRect(x, y - 10 - barHeight, GRAPH_WIDTH, barHeight);
    fillText(ctx, time, x, y - 10 - barHeight - 26, FONT);
  };

  const renderAllGraphs = (ctx, names, times) => {
    const playersMaxTime = getMaxTime(times);
    let x = CLOUD_POSITION_X + 20;
    let y = CLOUD_POSITION_Y + CLOUD_HEIGHT - 26;
    times.forEach((value, i) => {
      const barColor = names[i] === `Вы` ? `rgba(255, 0, 0, 1)` : `hsl(240, 100%, ${window.util.getRandomInt(1, 100)}%)`;
      renderGraph(ctx, x + ((GRAPH_WIDTH + GRAPH_GAP) * i), y, names[i], value.toFixed(), playersMaxTime, barColor);
    });
  };

  window.renderStatistics = (ctx, names, times) => {
    drawCloud(ctx, CLOUD_POSITION_X + 10, CLOUD_POSITION_Y + 10, CLOUD_SHADOW);
    drawCloud(ctx, CLOUD_POSITION_X, CLOUD_POSITION_Y, CLOUD_COLOR);
    ctx.textBaseline = `hanging`;
    fillText(ctx, WIN_MESSAGE_FIRST, CLOUD_POSITION_X + 20, CLOUD_POSITION_Y + 20, FONT, WIN_MESSAGE_COLOR);
    fillText(ctx, WIN_MESSAGE_SECOND, CLOUD_POSITION_X + 20, CLOUD_POSITION_Y + 36, FONT, WIN_MESSAGE_COLOR);
    renderAllGraphs(ctx, names, times);
  };
})();

