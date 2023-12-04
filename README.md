<h1 align="center">Datree</h1>

<p align="center">A Double-array trie structure</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="All Contributors: 2 👪" src="https://img.shields.io/badge/all_contributors-2_👪-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://codecov.io/gh/theodesp/datree" target="_blank"><img alt="Codecov Test Coverage" src="https://codecov.io/gh/theodesp/datree/branch/main/graph/badge.svg"/></a>
	<a href="https://github.com/theodesp/datree/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" /></a>
	<a href="https://github.com/theodesp/datree/blob/main/LICENSE.md" target="_blank"><img alt="License: MIT" src="https://img.shields.io/github/license/theodesp/datree?color=21bb42"></a>
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
	<img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
	<img alt="npm package version" src="https://img.shields.io/npm/v/create-typescript-app?color=21bb42" />
</p>

This library provides an implementation of Double Array Tree (DATree) in TypeScript. This
is a radix tree implemented using two arrays to store the transition diagram
instead of pointers/nodes. It is slower for insertions that the graph implementation
but is blazingly fast for retrieval.

A very good discription is at

http://linux.thai.net/~thep/datrie/datrie.html

from Theppitak Karoonboonyanan, who also provides libdatrie, a C implementation of the same.

## Usage

```shell
npm i datree
```

```ts
import { Datree } from "datree";

// Construct the Trie
const trie = new Datree();
const strings = ["and", "ant", "do", "geek", "dad", "ball"];

// Index strings
for (let s in strings) {
	trie.insert(s);
	// Alternative method
	//trie.add(s);
}

const searches = ["do", "geek", "bat"];
// Perform searches

for (let i = 0; i < searches.length; i += 1) {
	const result = trie.search(searches[i]);
	// Alternative method
	// const result = trie.containsIndex(searches[i]);
	// There was a match. Print match info
	if (result) {
		switch (result.matchType) {
			case PERFECT_MATCH:
			case PURE_PREFIX:
			case PREFIX:
				console.log(`${searches[i]}: Present in trie`);
		}
	}
	// result not found
	console.log(`${searches[i]}: Not Present in trie`);
}
```

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/theodesp"><img src="https://avatars.githubusercontent.com/u/328805?v=4?s=100" width="100px;" alt="Theofanis Despoudis"/><br /><sub><b>Theofanis Despoudis</b></sub></a><br /><a href="https://github.com/theodesp/datree/commits?author=theodesp" title="Code">💻</a> <a href="#content-theodesp" title="Content">🖋</a> <a href="https://github.com/theodesp/datree/commits?author=theodesp" title="Documentation">📖</a> <a href="#ideas-theodesp" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-theodesp" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-theodesp" title="Maintenance">🚧</a> <a href="#projectManagement-theodesp" title="Project Management">📆</a> <a href="#tool-theodesp" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [create-typescript-app](https://github.com/JoshuaKGoldberg/create-typescript-app).
