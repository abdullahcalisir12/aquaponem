# Aquaponem

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
7. [License](#licence)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Installing

### Install Aquaponem via npm

```
npm i aquaponem
```

### Using Aquaponem via cdn

Put this into your html

Note: if you use script tag, please skip initialization and go to Usage section

```

```

## Initialization

### All component initialization

```
import 'aquaponem';
```

### Single component initialization

```
import { Theme, Button } from 'aquaponem';
```

## Usage

```
<aq-theme dark>
  <aq-btn variant="primary">Button<aq-btn>
<aq-theme>
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
