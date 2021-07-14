# @seflage/lazy_instance

## Install

`npm install @selfage/lazy_instance`

## Overview

Written in TypeScript and compiled to ES6 with inline source map & source. See [@selfage/tsconfig](https://www.npmjs.com/package/@selfage/tsconfig) for full compiler options. Provides a simply class to only call the provided constructoion function once, when getting the instance.

## Usage

```TypeScript
import { LazyInstance } from '@selfage/lazy_instance';

class Foo {}

let lazyFoo = new LazyInstance(() => new Foo());
let foo = lazyFoo.get(); // Instantiates Foo
let foo2 = lazyFoo.get(); // Returns the same Foo
console.log(foo === foo2);
```
