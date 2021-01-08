import { html, css, property, TemplateResult, CSSResult } from "lit-element";
import { VariantManager } from "./colors";

export class FieldWrapper extends VariantManager {
  @property() label: string = '';

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
      }

      legend {
        padding: 0 .5rem;
        margin-left: 1rem;
        color: var(--color);
      }

      input, textarea, .select-container {
        all: unset;
        display: block;
        height: 100%;
        width: 100%;
        padding: .75rem 1.5rem 1rem;
        font-size: 1.25rem;
      }
    `;
  }

  public withFieldWrapper(template: TemplateResult): TemplateResult {
    return this.withVariant(html`
      <fieldset>
        <legend>${this.label}</legend>
        ${template}
      </fieldset>
    `);
  }
}