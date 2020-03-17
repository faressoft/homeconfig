# HomeConf

[![npm](https://img.shields.io/npm/v/homeconfjs.svg)](https://www.npmjs.com/package/homeconfjs)
[![npm](https://img.shields.io/npm/l/homeconfjs.svg)](https://github.com/faressoft/homeconfjs/blob/master/LICENSE)

> Global config files for cli apps helper

---

# Table of Contents

* [Installation](#installation)
* [Getting Started](#getting-started)
* [License](#license)

# Installation

```bash
npm install --save homeconfjs
```

# Usage

The file will be created automatically, named `packageName.json`
at the path `homeConf.path` that may varies depending on the current OS. 

```js
const HomeConf = require('homeconfjs');
const homeConf = new HomeConf(); // Default: {}
```

Or

```js
const HomeConf = require('homeconfjs');
const homeConf = new HomeConf({defaultObject}); // Specify the default object
```

Or

```js
const HomeConf = require('homeconfjs');
const homeConf = new HomeConf(`${__dirname}/default.json`); // Use the file as default
```

### API

#### config

Get the actual config object.

```
homeConf.config
```

#### path

Get the path of the config file

```
homeConf.path
```

#### get('objectPath')

Get a value by its object path.

```js
homeConf.get('user.name')
```

#### set('objectPath', value)

Set and save a value by its object path.

```js
homeConf.get('user.name', 'Anas')
```

# License

This project is under the MIT license.
