import * as BaseUtils from 'utils/base';

let resizeEventHandlers = [];
let responsiveHelperInited = false;
let debounce = false;

export default {
  resolve(eventHandler) {
    let id = BaseUtils.UniqueIndex();
    resizeEventHandlers.push({ id, eventHandler });
    return id;
  },

  unresolve(id) {
    resizeEventHandlers = resizeEventHandlers.filter((item) => item.id !== id);
  },
};

if (!responsiveHelperInited && typeof window === 'object') {
  window.addEventListener('resize', (event) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      resizeEventHandlers.map((item) => {
        typeof item.eventHandler === 'function' && item.eventHandler(event);
      });
      debounce = false;
    }, 100);
  });

  responsiveHelperInited = true;
}
