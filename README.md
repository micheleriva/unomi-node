---
description: >-
  A Node.js SDK for the Apache Unomi Customer Data Platform. Still a big work in
  progress!
---

# Apache Unomi Node.js SDK

![](.gitbook/assets/unomi.png)

## Getting Stared

You can install the **Apache Unomi Node.js SDK** using **npm** or **yarn**:

```bash
npm install --save unomi-node
```

```bash
yarn add unomi-node
```

## Connect to Unomi

You can connect to **Unomi** using the `connect` function:

```javascript
import unomisdk from "unomi-node";

const unomi = unomisdk.connect({
  url: "<your-unomi-url>",
  auth: {
    username: "<username>",
    password: "<password>"
  }
});

export default unomi;
```

From now, everytime we refer to the variable `unomi`, we're referring to the exported above Unomi instance.

