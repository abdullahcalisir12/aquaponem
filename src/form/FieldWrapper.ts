import { VariantManager } from "@shared";
import { html, css, property, CSSResult, customElement } from "lit-element";

@customElement('field-wrapper')
export class FieldWrapper extends VariantManager {
  @property() legend: string = '';

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
      }

      fieldset {
        all: unset;
        display: flex;
        position: relative;
        border: 2px solid var(--color);
        border-radius: var(--br-md);
        background-color: var(--bg-color) !important;
      }

      legend {
        padding: 0 .5rem;
        margin-left: 1rem;
        color: var(--color);
      }

      ::slotted(input), ::slotted(textarea) {
        all: unset;
        display: block;
        height: 100%;
        width: 100%;
        padding: .75rem 1.5rem 1rem;
        font-size: 1.25rem;
      }
    `;
  }

  render() {
    return html`
      <fieldset part="fieldset">
        <legend part="legend">${this.legend}</legend>
        <slot></slot>
      </fieldset>
    `;
  }
}
