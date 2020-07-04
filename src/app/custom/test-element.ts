import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('test-element')
export class TestElement extends LitElement {
  static styles = css`span { color: orange; }`;

  @property({ type: String, reflect: true })
  customerName = 'world';

  render() {
    return html`<h1>Showing details of <span>${this.customerName}</span>!</h1>`;
  }
}
