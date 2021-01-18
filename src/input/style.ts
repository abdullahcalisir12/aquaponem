import { css } from 'lit-element';

export const style = css`
  :host {
    display: block;
  }

  label {
    display: flex;
    position: relative;
    font-size: 1.25rem;
    border: 2px solid var(--c-neutral);
    border-radius: var(--br-md);
  }

  label.focused, label.filled {
    border-color: var(--c-primary);
  }

  label.success {
    border-color: var(--c-success);
  }

  label.error {
    border-color: var(--c-danger);
  }

  label.disabled {
    border-color: var(--c-disabled);
  }

  label span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) !important;
    left: 1.5rem;
    font-size: 1.25rem;
    transition: top 0.3s ease, font-size 0.3s, color 0.3s;
    color: var(--c-neutral);
  }

  label.focused span, label.filled span {
    padding: 0 .5rem;
    top: 0;
    left: 1rem;
    font-size: 1rem;
    color: var(--c-primary);
    background-color: var(--bg-color);
  }

  label.success span {
    color: var(--c-success);
  }

  label.error span {
    color: var(--c-danger);
  }

  label.disabled span {
    color: var(--c-disabled);
  }
`;