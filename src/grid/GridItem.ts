import { customElement, html, LitElement, property } from "lit-element";
import { prefix } from "@constants";

@customElement(`${prefix}-grid-item`)
export class GridItem extends LitElement {
  @property() col!: string;
  @property() row!: string;
  @property() area!: string;
  @property() place!: string;

  updated(changedProperties: Map<string, string>) {
    if (this.col && changedProperties.has('col')) this.style.gridColumn = this.col;
    if (this.row && changedProperties.has('row')) this.style.gridRow = this.row;
    if (this.area && changedProperties.has('area')) this.style.gridArea = this.area;
    if (this.place && changedProperties.has('place')) this.style.placeSelf = this.place;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}