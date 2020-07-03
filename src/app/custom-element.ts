import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('cust-element')
export class CustElement extends LitElement {
  static styles = css`* { color: tomato; }`;

  @property({ type: String, reflect: true })
  who = 'world';

  render() {
    return html`<h1>Hello ${this.who}</h1>`;
  }
}