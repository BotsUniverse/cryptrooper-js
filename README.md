
# Cryptrooper JS

A package to encrypt and decrypt texts with a key in a very simple way.

> `Note: The Cryptrooper.py of python is not as same as this module.`

---



## Features
| | `Core Features` | |
|:---|:---|:---|
| 1. | Supports All the Languages        | ௹ |
| 2. | Can Encode And Decode Emojes Also | 😎 |
| 3. | Cannot Be Decoded Without A Key   | 🔑 |
| 4. | Works In Front-End And Back-End   | 🐱‍💻 |

## Installation

##### Installation by 2 ways.
- By releases.
    -
- By CDN.
    -

#### The Latest release is the most stabel and featured one.
#### CDN: Find the cdn from [cdn.jsdelivr.net](https://cdn.jsdelivr.net/)
Or link this in your `html`:
```html
<!-- The Cryptrooper.js Link -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/sprin-g-reen/cryptrooper-js/index.js"></script>
```
---
## Code Skeleton

```js
// The outline of the class might look like this
class Cryptrooper {
    constructor ( key,text ) -> undefined
    encode () -> object
    decode () -> object
}

// the returned object might look like this
Object: {
    text    : ,
    key     : ,
    result  : ,
    error   :
}
```
## Usage Example


```js
var cryptoo = new Cryptrooper("My Key", "My Text To Encode");
var result = cryptoo.encode()

console.log( result )
// returns:
//   {
//      error: null
//      key: "My Text To Encode"
//      result: "154 242 64 159 202 241"
//      text: "My Key"
//   }



var decoder = new Cryptrooper("My Key", "154 242 64 159 202 241");
var d_result = decoder.decode()
// returns:
//   {
//      error: null
//      key: "154 242 64 159 202 241"
//      result: "My Text To Encode"
//      text: "My Key"
//   }
```
