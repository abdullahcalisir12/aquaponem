import { css } from 'lit-element';

export const appStyles = css`
  :host {
    display: block;
    min-height: 100vh;
    color: var(--c-on-bg);
    background-color: var(--c-bg);
    font-family: var(--f-family, sans-serif);
  }
`;