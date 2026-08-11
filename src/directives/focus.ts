/**
 * Trigger focus event when component is loaded.
 */
export default {
  mounted (el: HTMLElement) {
    if (el instanceof HTMLDivElement) {
      const component = el.querySelector('input, textarea')
      if ((component instanceof HTMLInputElement) || (component instanceof HTMLTextAreaElement)) {
        component.focus()
      }
    } else {
      el.focus()
    }
  },
}
