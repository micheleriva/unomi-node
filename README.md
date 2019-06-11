![Apache Unomi](/unomi.png)

# Getting Stared

You can install the **Apache Unomi Node.js SDK** using **npm** or **yarn**:	

```bash
npm install --save unomi-node
```

```bash
yarn add unomi-node
```

# Connect to Unomi
You can connect to **Unomi** using the `connect` function:
```javascript
import unomisdk from "unomi-node";

const unomi = unomisdk.connect({
  url: "http://localhost:8181",
  auth: {
    username: "karaf",
    password: "karaf"
  }
});

export default unomi;
```

From now, everytime we refer to the variable `unomi`, we're referring to the exported above Unomi instance.
Continue reading on [GitBook](https://micheleriva.gitbook.io/unomi-node/)!

# LICENSE
[Apache 2.0](/LICENSE.md)
