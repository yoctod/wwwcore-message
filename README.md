<img src="http://bitcore.io/css/images/module-message.png" alt="wwwcore message" height="35">
# Wwwcoin Message Verification and Signing for Wwwcore


[![NPM Package](https://img.shields.io/npm/v/wwwcore-message.svg?style=flat-square)](https://www.npmjs.org/package/wwwcore-message)
[![Build Status](https://img.shields.io/travis/yoctod/wwwcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/yoctod/wwwcore-message)
[![Coverage Status](https://img.shields.io/coveralls/yoctod/wwwcore-message.svg?style=flat-square)](https://coveralls.io/r/yoctod/wwwcore-message?branch=master)

wwwcore-message adds support for verifying and signing wwwoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main wwwcore repo](https://github.com/yoctod/wwwcore) for more information.

## Getting Started

```sh
npm install wwwcore-message
```

```sh
bower install wwwcore-message
```

To sign a message:

```javascript
var wwwcore = require('wwwcore-lib');
var Message = require('wwwcore-message');

var privateKey = wwwcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/yoctod/wwwcore/blob/master/CONTRIBUTING.md) on the main wwwcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/yoctod/wwwcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Wwwcoin Core Developers

