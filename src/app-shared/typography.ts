import { css } from 'lit-element';

export const textStyles = css`
  h1, :host(.text-x4l) * {
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 4rem;
  }

  h2, :host(.text-x3l) * {
    font-weight: 600;
    font-size: 3rem;
    line-height: 3.5rem;
  }

  h3, :host(.text-x2l) * {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3rem;
  }

  h4, :host(.text-xl) * {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.25rem;
  }

  h5, :host(.text-lg) * {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 1.75rem;
    letter-spacing: -0.5px;
  }

  p, :host(.text-md) * {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.25rem;
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
