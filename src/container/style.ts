import { css } from 'lit-element';

export const containerStyle = css`
  :host {
    display: block;
  }

  .container {
    margin: auto;
  }

  @media only screen and (max-width: 768px) {
    .container {
      max-width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    .container, .container-sm {
      max-width: 720px;
    }
  }


  @media only screen and (min-width: 1024px) {
    .container, .container-md {
      max-width: 960px;
    }
  }

  @media only screen and (min-width: 1280px) {
    .container, .container-lg {
      max-width: 1200px;
    }
  }

  @media only screen and (min-width: 1440px) {
    .container, .container-xl {
      max-width: 1344px;
    }
  }

  @media only screen and (min-width: 1920px) {
    .container, .container-2xl {
      max-width: 1600px;
    }
  }

  .container-fluid {
    width: 100%;
  }
`;
