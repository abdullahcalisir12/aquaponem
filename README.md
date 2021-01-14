# Aquaponem ![CodeFactor](https://www.codefactor.io/repository/github/abdullahcalisir12/aquaponem/badge?s=42676a78b4b0376a53e5dcf314224ccf94cc4b2a)

Aquaponem is a web components library using lit-element to create a shared design system for my personal projects.

# Table of Contents

1. [Getting Started](#getting-started)
2. [Installing](#installing)
   1. [Install via npm](#install-aquaponem-via-npm)
   2. [Install via cdn](#install-aquaponem-via-cdn)
3. [Initialization](#initialization)
   1. [Initialize All Components](#all-component-initialization)
   2. [Initialize Single Component](#single-component-initialization)
4. [Usage](#usage)
5. [Built With](#built-with)
6. [Authors](#authors)
7. [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Installing

### Install Aquaponem via npm

```
npm i aquaponem
```

### Install Aquaponem via cdn

Put this into your html and replace @latest with any version you want to use, ex. @0.0.2

Note: if you use script tag, please skip initialization and go to Usage section

```
<script src='https://unpkg.com/aquaponem@latest/build/dist/index.js'></script>
```

or

```
<script src='https://unpkg.com/aquaponem@latest/build/dist/app/index.js'></script>
<script src='https://unpkg.com/aquaponem@latest/build/dist/theme/index.js'></script>
<script src='https://unpkg.com/aquaponem@latest/build/dist/button/index.js'></script>
```

## Initialization

### All component initialization

```
import 'aquaponem';
```

### Single component initialization

```
import { App, Theme, Button } from 'aquaponem';
```

## Usage

```
<aq-app>
   <aq-theme dark>
      <aq-btn color="primary">Button<aq-btn>
   <aq-theme>
<aq-app>
```

## Built With

- [lit-element](https://lit-element.polymer-project.org/) - A simple base class for creating fast, lightweight web components
- [lit-html](https://lit-html.polymer-project.org/) - An efficient, expressive extensible HTML templating library for JavaScript
- [typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [snowpack](https://www.snowpack.dev/) - The faster frontend build tool.

## Authors

- **Abdullah Calisir** - Front End Engineer - [github](https://github.com/abdullahcalisir12) - [linkedin](https://www.linkedin.com/in/abdullahcalisir12/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
