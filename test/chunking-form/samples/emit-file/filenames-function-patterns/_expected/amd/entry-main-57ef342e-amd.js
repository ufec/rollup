define(['require'], (function (require) { 'use strict';

	console.log('main');
	new Promise(function (resolve, reject) { require(['./chunk-deb-c542d45b-amd'], resolve, reject); }).then(console.log);

}));
