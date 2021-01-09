import { prefix } from "@/app-constants";
import { css, customElement, html, LitElement, property } from "lit-element";
import { styleMap } from "lit-html/directives/style-map";

@customElement(`${prefix}-grid`)
export class Grid extends LitElement {
  @property() rows: string = '';
  @property() cols: string = '';
  @property() areas: string = '';
  @property() gap: string = "1rem";
  @property() items: string = "center"; // position of item inside box => align-items , justify-items => start | end | center | stretch
  @property() content: string = "center"; // position of grid container inside of its container => align-content / justify-content => start | end | center | stretch | space-around | space-between | space-evenly
  @property() flow: string = "row";

  static get styles() {
    return css`
      :host {
        display: block;
      }

      slot {
        display: grid;
      }
    `;
  }

  render() {
    return html`
      <slot
        style=${styleMap({
          gridTemplateRows: this.rows,
          gridTemplateColumns: this.cols,
          gridTemplateAreas: this.areas,
          gap: this.gap,
          justifyItems: this.items,
          placeItems: this.items,
          placeContent: this.content,
          gridAutoFlow: this.flow
        })}
      ></slot>
    `;
  }
}