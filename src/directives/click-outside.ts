let clickOutsideEvent = (event: Event) => {
  if (event.target === null) return
}
const created = function (el: HTMLElement, binding: { value: (event: Event) => void }) {
  clickOutsideEvent = function (event: Event) {
    // check if click is outside the el and his children
    if (!(el == event.target || el.contains(event.target as Node))) {
      // call method provided in attribute value
      if (typeof binding.value === 'function') {
        binding.value(event)
      }
    }
  }
  window.addEventListener('mousedown', clickOutsideEvent)
}
const unmounted = function () {
  window.removeEventListener('mousedown', clickOutsideEvent)
}
export default {
  created,
  unmounted,
}
