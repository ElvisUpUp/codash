(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.workplusdeviceReady = factory());
}(this, (function () { 'use strict';

  function deviceReady(options = {}) {
    const { timeout = 5000, isMock = false } = options;

    return new Promise((resolve, reject) => {
      if (isMock) {
        console.log('[codash]: Mock device ready.');
        return resolve();
      }

      let ready = false;
      setTimeout(() => {
        if (!ready) resolve({ status: -1, deviceready: false });
      }, timeout);

      document.addEventListener('deviceready', () => {
        ready = true;
        resolve();
      }, false);
    });
  }

  return deviceReady;

})));
