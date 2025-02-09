import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('local-time')
export class LocalTime extends LitElement {
  @property()
  date = ''

  @property()
  locale = 'en-US'

  render() {
    const date = new Date(this.date)
    const value = new Intl.DateTimeFormat(this.locale, {
      dateStyle: 'medium',
      timeStyle: 'medium',
      hourCycle: 'h12'
    }).format(date)
    return html`<span>${value}</span>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'local-time': LocalTime
  }
}
