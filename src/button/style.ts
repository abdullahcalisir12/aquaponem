import { css } from 'lit-element';

export const buttonStyles = css`
  :host {
    display: inline-block;
  }

  button, a {
    all: unset;
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    text-transform: uppercase;

    color: var(--c-on-btn);
    font-weight: var(--fw-b);
    border-radius: var(--btn-br);
    background-color: var(--color);
    padding: var(--spc-3) var(--spc-4);
    border: var(--bw-3) solid var(--color);
  }

  button:hover, a:hover {
    color: var(--color);
    background-color: transparent;
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
    color: var(--color);
    background-color: transparent;
  }

  :host([outlined]) button:hover, :host([outlined]) a:hover {
    color: var(--c-on-btn);
    background-color: var(--color);
  }

  :host([flat]) button, :host([flat]) a {
    color: var(--color);
    border-color: transparent;
    background-color: transparent;
  }

  :host([flat]) button:hover, :host([flat]) a:hover {
    color: var(--c-on-btn);
    background-color: var(--color);
  }

  :host([block]) {
    width: 100%;
  }
`