'use strict';

(() => {

  const POST_URL = `https://21.javascript.pages.academy/code-and-magick`;
  const GET_URL = `https://21.javascript.pages.academy/code-and-magick/data`;
  const TIMEOUT = 10000;
  const SUCCESS_STATUS = 200;

  const load = (url, requestType, onSuccessCallback, onErrorCallback, data = ``) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    xhr.timeout = TIMEOUT;
    xhr.open(requestType, url);
    xhr.send(data);

    xhr.addEventListener(`load`, () => {
      if (xhr.status === SUCCESS_STATUS) {
        if (data) {
          onSuccessCallback();
        } else {
          onSuccessCallback(xhr.response);
        }
      } else {
        onErrorCallback(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.addEventListener(`timeout`, () => {
      onErrorCallback(`Запрос не успел выполниться за ${xhr.timeout} мс`);
    });

    xhr.addEventListener(`error`, () => {
      onErrorCallback(`Произошла ошибка соединения`);
    });
  };

  window.load = {
    load,
    POST_URL,
    GET_URL,
  };
})();
