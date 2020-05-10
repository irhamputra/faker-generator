<div align="center">
<h1>
<br/>
faker-generator
<br/>
<br/>
</h1>

<small>
a JavaScript utility to generate an array of object of faker data. This included Faker.js
</small>
<br/>
<br/>
<sup>
<a href="https://www.npmjs.com/package/@irhamputra/use-lottie" target="_blank">
<img src="https://img.shields.io/npm/v/@irhamputra/use-lottie.svg" alt="npm package" />
</a>
<a href="https://standardjs.com" target="_blank">
<img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="npm package" />
</a>
</sup>

## Install

```bash
npm install --save @irhamputra/faker-generator
```
</div>

## Usage
```javascript
const generator = require('faker-generator'); // es5
// import generator from 'faker-generator'; for es6

const schema = {
    name: "{{name.firstName}} {{name.lastName}}",
    address: "{{address.cityPrefix}} {{address.citySuffix}}",
    state: "{{address.state}}",
    phone: "{{phone.phoneNumber}}",
    imageUrl: "{{image.people}}",
    email: "{{internet.email}}",
}

const data = generator(schema, 20, 20)
console.log(data)
```

## Documentation

```javascript
generator(schema, min, max);
```

* params
    * schema: object (required)
    * min & max: number
        * generate minimum and maximum length of array 

## License

MIT © [irhamputra](https://github.com/irhamputra)
