import { LazyInstance } from './lazy_instance';

class Foo {}

let lazyFoo = new LazyInstance(() => new Foo());
let foo = lazyFoo.get(); // Instantiates Foo
let foo2 = lazyFoo.get(); // Returns the same Foo
console.log(foo === foo2);
