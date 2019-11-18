export default {
  bind(el, bindings, vnode) {
    const formModifire = bindings.modifiers['font'];

    if (formModifire) {
      el.style.fontSize = '30px';
    }

    const delayModifier = bindings.modifiers['delay'];

    let delay = 0;

    if (delayModifier) {
      delay = 2000;
    }
    setTimeout(() => {
      const arg = bindings.arg;
      el.style[arg] = bindings.value;
    }, delay);
  }
}
