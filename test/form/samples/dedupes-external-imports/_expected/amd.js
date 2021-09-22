define(['exports', 'external'], (function (exports, external) { 'use strict';

	class Foo extends external.Component {
		constructor () {
			super();
			this.isFoo = true;
		}
	}

	class Bar extends external.Component {
		constructor () {
			super();
			this.isBar = true;
		}
	}

	class Baz extends external.Component {
		constructor () {
			super();
			this.isBaz = true;
		}
	}

	const foo = new Foo();
	const bar = new Bar();
	const baz = new Baz();

	exports.bar = bar;
	exports.baz = baz;
	exports.foo = foo;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
