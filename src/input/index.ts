import { prefix } from "@constants";
import { html, customElement, LitElement, property, TemplateResult} from "lit-element";

@customElement(`${prefix}-input`)
export class Input extends LitElement {
  @property({ type: Boolean, reflect: true }) multiline = false;

  render(): TemplateResult {
    return html`
      <field-wrapper color="primary" label="Input">
        ${ this.multiline ? html`<textarea></textarea>` : html`<input />`}
      </field-wrapper>
    `;
  }
}