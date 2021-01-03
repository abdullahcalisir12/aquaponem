import { css } from 'lit-element';

export const buttonStyles = css`
  :host {
    display: inline-block;
  }

  button, a {
    all: unset;
    text-align: center;
    cursor: pointer;
    box-sizing: content-box;
    background-color: var(--color);
    border: 3px solid var(--color);
    color: var(--c-on-btn);
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .125rem 1rem;
  }

  button:hover, a:hover {
    background-color: transparent;
    color: var(--color);
  }

  button.btn-s-sm, a.btn-s-sm {
    min-height: 24px;
    font-size: .625rem;
  }

  button.btn-s-md, a.btn-s-md {
    min-height: 28px;
    font-size: .75rem;
  }

  button.btn-s-base, a.btn-s-base {
    min-height: 32px;
    font-size: .875rem;
  }

  button.btn-s-lg, a.btn-s-lg {
    min-height: 36px;
    font-size: 1rem;
  }

  button.btn-s-xl, a.btn-s-xl {
    min-height: 40px;
    font-size: 1.25rem;
  }

  button.btn-r-none, a.btn-r-none {
    border-radius: 0px;
  }

  button.btn-r-sm, a.btn-r-sm {
    border-radius: 4px;
  }

  button.btn-r-base, a.btn-r-base {
    border-radius: 8px;
  }

  button.btn-r-lg, a.btn-r-lg {
    border-radius: 12px;
  }

  button.btn-r-full, a.btn-r-full {
    border-radius: 9999px;
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