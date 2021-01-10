import { prefix } from "@constants";
import { html, customElement, LitElement, property, TemplateResult} from "lit-element";

@customElement(`${prefix}-input`)
export class Input extends LitElement {
  @property({ type: Boolean, reflect: true }) multiline = false;
  @property() label!: string;
  @property() color!: string;

  render(): TemplateResult {
    return html`
      <field-wrapper color=${this.color} legend=${this.label}>
        ${ this.multiline ? html`<textarea></textarea>` : html`<input />`}
      </field-wrapper>
    `;
  }
}