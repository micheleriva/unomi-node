# README

![Apache Unomi](.gitbook/assets/unomi.png)

## Getting Stared

You can install the **Apache Unomi Node.js SDK** using **npm** or **yarn**:

```text
npm install --save unomi-node
```

```text
yarn add unomi-node
```

## Connect to Unomi

You can connect to **Unomi** using the `connect` function:

```text
import unomisdk from "unomi-node";

const unomi = unomisdk.connect({
  url: "<your Unomi url>",
  auth: {
    username: "<username>",
    password: "<password>"
  }
});

export default unomi;
```

From now, everytime we refer to the variable `unomi`, we're referring to the exported above Unomi instance.

Continue reading on [GitBook](https://micheleriva.gitbook.io/unomi-node/).

