import { prefix } from "@constants";
import { html, customElement, LitElement, property, TemplateResult, css} from "lit-element";

@customElement(`${prefix}-input`)
export class Input extends LitElement {
  @property({ type: Boolean, reflect: true }) multiline = false;
  @property() label!: string;
  @property() color!: string;

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <field-wrapper color=${this.color} legend=${this.label}>
        ${ this.multiline ? html`<textarea></textarea>` : html`<input />`}
      </field-wrapper>
    `;
  }
}