# node-example-cli

<details>
<summary>Inspiration</summary>

https://github.com/mhulse/node-boilerplate-cli
</details>

**A simple starting point for Node.js command line projects.**

**Includes: docker image!**

Next, create a globally-installed symbolic link:

## Step 1

```bash
$ npm install
```

## Step 2

```bash
$ npm link
```

Run/test this demo code out of the box:

```bash
$ example -d path/to/a/directory/
```

## Development

To begin development on your own CLI script, the first thing you want to do is edit [`package.json`](package.json).

Change the `name`:

```json
"name": "node-cli"
```

... and provide your own CLI command name:

```json
"bin": {
  "example": "index.js"
}
```

Enter values for all other keys.
