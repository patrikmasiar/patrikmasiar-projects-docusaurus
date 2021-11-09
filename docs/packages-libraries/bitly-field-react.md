# Bitly field React JS
[![npm](https://img.shields.io/npm/v/bitly-field-react?style=plastic)](https://www.npmjs.com/package/bitly-field-react)
[![NPM](https://img.shields.io/npm/dy/bitly-field-react?style=plastic)](https://www.npmjs.com/package/bitly-field-react)

![Bitly field React JS](/img/bitlyfield.png)

## Technologies
`#javascript` `#react` `#bitly-api` `#typescript`

## Overview
Bitly field is a library with customized text field component for React JS, that is using Bitly API so users are able to get response with shorten link directly from this input field.
The field is configurable, so it can be used for different requirements.

## Getting started
### Installation
`npm install bitly-field-react`

### Usage
```javascript
import BitlyField from 'bitly-field-react';

...

<BitlyField
  config={{
    accessToken: {YOUR_BITLY_ACCESS_TOKEN}, // REQUIRED
    domain: null, // String (optional)
    title: null, // String (optional)
    group_guid: null, // String (optional)
    tags: [] // Array of strings (optional)
    deeplinks: [], // Array of object (optional)
  }}
  onSuccess={(response) => callback(response)}
  onError={(error) => callback(error)}
/>
...
```

### Types
```javascript
SuccessResponse {
  id: string;
  link: string;
  long_url: string;
  deeplinks: any[];
  custom_bitlinks: any[];
  created_at: string;
  archived: boolean;
  tags: any[];
  references: any;
};

config: {
  accessToken: string;
  domain?: string | null;
  title?: string | null;
  group_guid?: string | null;
  tags?: string[];
  deeplinks?: any[];
};
onSuccess: (response: SuccessResponse) => void;
onError?: (error: any) => void;
className?: string | null;
placeholder?: string;
inputClassName?: string | null;
buttonClassName?: string | null;
```

### Docs
#### Bitly API documentation
[dev.bitly.com/v4](https://dev.bitly.com/v4_documentation.html)

```javascript
config: {
  accessToken: {YOUR_BITLY_ACCESS_TOKEN} // REQUIRED
  domain: null, // String (optional)
  title: null, // String (optional)
  group_guid: null, // String (optional)
  tags: [] // Array of strings (optional)
  deeplinks: [], // Array of object (optional)
}

onSuccess => response = {
  id: String, // bit.ly/3g8v5gj
  link: String, // https://bit.ly/3g8v5gj
  long_url: String, // http://masso.sk/
  deeplinks: Array, // []
  custom_bitlinks: Array, // []
  created_at: String, // 2020-06-29T14:04:03+0000
  archived: Boolean, // true || false
  tags: Array, // []
  references: Object, // {group: ""}
};
```

### Props
| NAME | TYPE | DEFAULT VALUE |
|:-------------|:-------------|:-------------|
|config|Object (required)||
|onSuccess|Function (required)||
|onError|Function|() => null|
|placeholder|String|null|
|inputClassName|String|null|
|buttonClassName|String|null|
|className|String|null|

## Sources
  * [NPM package](https://www.npmjs.com/package/bitly-field-react)
  * [Github repository](https://github.com/patrikmasiar/bitly-field-react)