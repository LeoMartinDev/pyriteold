import Vue from 'vue';

Vue.directive('dropzone', {
  bind(el, binding, vnode) {
    const events = [
      "drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop"
    ];

    events.forEach(event => {
      el.addEventListener(
        event,
        e => {
          e.preventDefault();
          e.stopPropagation();
          vnode.context.$emit(event, e);
        },
        false
      );
    });
  }
});