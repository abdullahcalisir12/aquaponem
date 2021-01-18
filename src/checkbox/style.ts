import { css } from "lit-element";


export const style = css`
  :host {
    display: block;
  }

  .container {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: var(--c-neutral);
  }

  .container input {
    display: none;
  }

  .checkmark {
    position:relative;
    height: 32px;
    width: 32px;
    border: 2px solid var(--c-neutral);
    background-color: transparent;
    border-radius: var(--br-md);
    margin-right: .75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container:hover {
    opacity: .75;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    background: var(--c-neutral);
    border-radius: var(--br-sm);
    width: 20px;
    height: 20px;
  }

  .container input:checked ~ .checkmark {
    border-color: var(--c-primary);
  }

  .container input:checked ~ .checkmark:after {
    display: block;
    background: var(--c-primary);
  }
`;