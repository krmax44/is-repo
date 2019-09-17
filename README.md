# Is Repo

[![Build Status](https://travis-ci.com/krmax44/is-repo.svg?branch=master)](https://travis-ci.com/krmax44/is-repo)
[![install size](https://packagephobia.now.sh/badge?p=is-repo)](https://packagephobia.now.sh/result?p=is-repo)
[![npm version](https://img.shields.io/npm/v/is-repo)](https://www.npmjs.com/package/is-repo)

Determines whether a given path is a Git repository. Uses `git rev-parse --is-inside-work-tree`.

## Installation

```bash
yarn add is-repo
# or with npm
npm i is-repo
```

## Usage

Very simple.

```js
import isRepo from 'is-repo';

await isRepo(); // defaults to process.cwd()
await isRepo('path/to/repo'); // true || false
```
