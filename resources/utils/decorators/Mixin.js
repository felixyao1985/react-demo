/*
	在修饰器的基础上，可以实现Mixin模式。
	所谓Mixin模式，就是对象继承的一种替代方案，中文译为“混入”（mix in），
	意为在一个对象之中混入另外一个对象的方法。
*/
export function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list);
  };
}

/*---------------------例子--------------------------
import { mixins } from './mixins';

const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // "foo"

*/