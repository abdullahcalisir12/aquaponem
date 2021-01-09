import { LitElement, html, customElement, property, css } from 'lit-element';
import { prefix } from '@constants';
import { styleMap } from "lit-html/directives/style-map";

@customElement(`${prefix}-flex`)
export class Flex extends LitElement {
  @property() column: string = '12';
  @property() gutters: string = '0px';
  @property() flow: string = ''; // flex-direction, flex-wrap
  @property() justify: string = '';
  @property() items: string = '';
  @property() content: string = '';

  static get styles() {
    return css`
      slot {
        display: flex;
        flex-wrap: wrap;
        margin: 0 calc(var(--gutters-h) / -2);
      }
    `;
  }

  updated(changedProperties: Map<string, string>) {
    if (this.column && changedProperties.has('column')) this.style.setProperty('--total-col', this.column);
    if (this.gutters && changedProperties.has('gutters')) {
      let [v, h] = this.gutters.split(' ');
      h = h ? h : v;
      this.style.setProperty('--gutters-h', h);
      this.style.setProperty('--gutters-v', v);
    };
  }

  render() {
    return html`
      <slot
        style=${styleMap({
          flexFlow: this.flow,
          justifyContent: this.justify,
          alignItems: this.items,
          alignContent: this.content
        })}></slot>
    `;
  }
}
