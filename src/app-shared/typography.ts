import { css } from 'lit-element';

export const textStyles = css`
  h1, :host(.text-x4l) * {
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 1;
  }

  h2, :host(.text-x3l) * {
    font-weight: 600;
    font-size: 3rem;
    line-height: 1;
  }

  h3, :host(.text-x2l) * {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 1;
  }

  h4, :host(.text-xl) * {
    font-weight: 600;
    font-size: 2rem;
    line-height: 1;
  }

  h5, :host(.text-lg) * {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 1;
  }

  h6, p, :host(.text-md) * {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1;
  }

  .text-sm, :host(.text-sm) * {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1;
  }

  .text-xs, :host(.text-xs) * {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1;
  }

  .text-xxs, :host(.text-xxs) * {
    font-weight: 400;
    font-size: .75rem;
    line-height: 1;
  }
`;
