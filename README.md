# Apache Unomi Node.js SDK

Node.js SDK for the **Apache Unomi CDP**. Work in progress.

# Installation

Install `unomi-node` with **npm**:
```bash
npm install --save unomi-node
```

or **yarn**:
```bash
yarn add unomi-node
```

# Usage

Import `unomisdk` and create a connection:

```js
import unomisdk from "unomi-node";

export const unomi = unomisdk.connect({
  url: "http://localhost:8181",
  auth: {
    username: "karaf",
    password: "karaf"
  }
});
```

Then run your queries!

```js
import { unomi } from "./my-unomi-connection.js";

const profile = {
  itemId: "237649",
  properties: {
    firstName: "John",
    lastName:  "Doe"
  },
  version: 1
};

unomi.profile.create(profile)
     .then((res)  => console.log(res))
     .catch((err) => console.log(err));
```

# API

### Profiles

**unomi.profile.create**<br />
Create a new profile. <br />
Example:

```js
unomi.profile.create({
  itemId: "123456",
  properties: {
    firstName: "John",
    lastName: "Doe"
  },
  version: 1
});
```

**unomi.profile.get**<br />
Get a specific profile. <br />
Example:
```js
unomi.profile.get("123456");
```

# License
[Apache 2.0](/LICENSE.md)