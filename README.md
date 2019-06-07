![Apache Unomi](/unomi.png)


### Getting Stared
### Getting Stared


You can install the **Apache Unomi Node.js SDK** using **npm** or **yarn**:	You can install the **Apache Unomi Node.js SDK** using **npm** or **yarn**:
```text	```text
npm install --save unomi-node	npm install --save unomi-node
```	```
```text	```text
yarn add unomi-node	yarn add unomi-node
```	```
### Connect to Unomi	### Connect to Unomi
You can connect to **Unomi** using the `connect` function:	You can connect to **Unomi** using the `connect` function:
```text	```text
import unomisdk from "unomi-node";	import unomisdk from "unomi-node";
const unomi = unomisdk.connect({	const unomi = unomisdk.connect({
  url: "<your Unomi url>",	  url: "<your Unomi url>",
  auth: {	  auth: {
    username: "<username>",	    username: "<username>",
    password: "<password>"	    password: "<password>"
  }	  }
});	});
export default unomi;	export default unomi;
```	```
From now, everytime we refer to the variable `unomi`, we're referring to the exported above Unomi instance.	From now, everytime we refer to the variable `unomi`, we're referring to the exported above Unomi instance.