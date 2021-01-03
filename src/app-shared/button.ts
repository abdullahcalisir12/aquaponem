import { css } from 'lit-element';

export const buttonStyles = css`
  :host {
    display: inline-block;
  }

  button, a {
    all: unset;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    background-color: var(--color);
    border: var(--bw-3) solid var(--color);
    border-radius: var(--btn-br);
    color: var(--c-on-btn);
    font-weight: var(--fw-b);
    text-transform: uppercase;
    padding: var(--spc-3) var(--spc-4);
    height: 100%;
    width: 100%;
  }

  button:hover, a:hover {
    background-color: transparent;
    color: var(--color);
  }

  button.btn-s-sm, a.btn-s-sm {
    padding: .375rem .75rem;
    font-size: var(--spc-3);
  }

  button.btn-s-md, a.btn-s-md {
    font-size: var(--spc-3);
  }

  button.btn-s-base, a.btn-s-base {
    font-size: var(--spc-4);
  }

  button.btn-s-lg, a.btn-s-lg {
    font-size: var(--spc-5);
  }

  button.btn-s-xl, a.btn-s-xl {
    font-size: var(--spc-6);
  }

  :host([outlined]) button, :host([outlined]) a {
    background-color: transparent;
    color: var(--color);
  }

  :host([outlined]) button:hover, :host([outlined]) a:hover {
    background-color: var(--color);
    color: var(--c-on-btn);
  }

  :host([flat]) button, :host([flat]) a {
    background-color: transparent;
    color: var(--color);
    border-color: transparent;
  }

  :host([flat]) button:hover, :host([flat]) a:hover {
    background-color: var(--color);
    color: var(--c-on-btn);
  }
`