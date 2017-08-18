//使用修饰器，使得对象的方法被调用时，自动发出一个事件。
/*
	定义了一个名为publish的修饰器，它通过改写descriptor.value，
	使得原方法被调用时，会自动发出一个事件。
	“发布/订阅”库
	Postal.js
*/
import postal from "postal/lib/postal.lodash";

export default function publish(topic, channel) {
  return function(target, name, descriptor) {
    const fn = descriptor.value;

    descriptor.value = function() {
      let value = fn.apply(this, arguments);
      postal.channel(channel || target.channel || "/").publish(topic, value);
    };
  };
}

/*------------------------例子--------------------

	以后，只要调用someMethod或者anotherMethod，就会自动发出一个事件。

import publish from "path/to/decorators/publish";

class FooComponent {
  @publish("foo.some.message", "component")
  someMethod() {
    return {
      my: "data"
    };
  }
  @publish("foo.some.other")
  anotherMethod() {
    // ...
  }
}

let foo = new FooComponent();

foo.someMethod() // 在"component"频道发布"foo.some.message"事件，附带的数据是{ my: "data" }
foo.anotherMethod() // 在"/"频道发布"foo.some.other"事件，不附带数据

*/