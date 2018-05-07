//  1  清除或截断一个数组
// 通过更改数组的长度（length）这个简单的方法，我们就能清除或者截断一个数组啦：
// const arr = [11, 22, 33, 44, 55, 66, 77, 88];
// console.log(arr);

// arr.length = 5;
// console.log(arr);

// arr.length = 0;
// console.log(arr);

// 2.使用对象解构来模拟命名参数
// 如果你需要将一系列可选项作为参数传入函数，那么你也许倾向于使用了一个对象(Object)来定义配置(Config)。

dosomething({ foo: 'Hello', bar: 'Hey!', baz: 42 });

function dosomething(config) {
	const foo = config.foo !== undefined ? config.foo : 'Hi';
	const bar = config.bar !== undefined ? config.bar : 'Yo!';
	const baz = config.baz !== undefined ? config.baz : 33;
	// ..
};

// 这是一个陈旧、但是很有效的方法，它模拟了JavaScript中的命名参数。不过呢，在doSomething中处理config的方式略显繁琐。在ES2015中，你可以直接使用对象解构。
function dosomething({foo = 'Hi', bar = 'Yo!', baz = 33}) {
	// ..
};

// 如果你想让这个参数是可选的，也很简单。
function dosomething({foo = 'Hi', bar = 'Yo!', baz = 33} = {}) {
	// ..
};

// 3. 使用对象解构来处理数组
// 可以使用对象解构的语法来获取数组的元素：

const csvFileLine = '1997,John Doe,US,john@doe.com,New York';
const {2: country, 4: state} = csvFileLine.split(',');
// console.log(country);
// console.log(state);

// 4. 在switch语句中用范围值
// 可以使用下面的技巧来写满足范围值的switch语句：

function getWaterState(tempInCelsius) {
	let state;
	
	switch (true) {
	  case (tempInCelsius <= 0): 
		state = 'Solid';
		break;
	  case (tempInCelsius > 0 && tempInCelsius < 100): 
		state = 'Liquid';
		break;
	  default: 
		state = 'Gas';
	}
	return state;
}

//  其实， if 方法更好, 有几点优势：几点优势：
// A) 代码量更少，更加易读；
// B) 你不需要声明一个局部变量，读者不会一直要去追踪你如何对这个变量做了更改；
// C) switch(true)真的会让人莫名其妙。
  function getWaterState2(tempInCelsius) {
	if (tempInCelsius <= 0) {
	  return 'Solid';
	}
	if (tempInCelsius < 100) {
	  return 'Liquid';
	}
	return 'Gas';
}

//   5. await多个async函数
// 在使用async/await的时候，可以使用Promise.all来await多个async函数。

// await.Promise.all([anAsyncCall(), thisIsAlsoAsync(), oneMore()])

// 6. 创建一个纯(pure)对象  (不推荐， 除非你一定要使用。因为它的执行效率很慢，而且占用空间更大。因为V8并没有对空对象做优化。)
// 你可以创建一个100%的纯对象，他不从Object中继承任何属性或则方法（比如，constructor，toString()等等）。

const pureObject = Object.create(null);
// console.log(pureObject); // => {}
// console.log(pureObject.construcrot); // => undefined
// console.log(pureObject.toString); // => undefined
// console.log(pureObject.hasOwnProperty);  // => undefined


// 7. 格式化JSON代码
// JSON.stringify不止可以将一个对象字符化，还可以格式化输出JSON对象。

const obj = { 
  foo: { bar: [11, 22, 33, 44], baz: { bing: true, boom: 'Hello' } } 
};
// The third parameter is the number of spaces used to 
// beautify the JSON output.
JSON.stringify(obj, null, 4); 
// console.log(JSON.stringify(obj, null, 4));

// =>"{
// =>    "foo": {
// =>        "bar": [
// =>            11,
// =>            22,
// =>            33,
// =>            44
// =>        ],
// =>        "baz": {
// =>            "bing": true,
// =>            "boom": "Hello"
// =>        }
// =>    }
// =>}"

// 8. 从数组中移除重复元素
// ES2015中，有了集合的语法。通过使用集合语法和Spread操作，可以很容易将重复的元素移除：

// const removeDuplicateItems = arr => [...new Set(arr)];
// const result = removeDuplicateItems([42, 'foo', 42, 'foo', true, true]);
// console.log(result);

// 9. 平铺多维数组
// 使用Spread操作，可以很容易去平铺嵌套多维数组

// const arr = [11, [22, 33], [44, 55], 66];
// const flatArr = [].concat(...arr); //=> [11, 22, 33, 44, 55, 66]
// const arr = [11, [22, 33], [44, 55, 66]];
// const flatArr = [].concat(...arr);
// console.log(flatArr);

// 可惜，上面的方法仅仅适用于二维数组。不过，通过递归，我们可以平铺任意维度的嵌套数组。
// unction flattenArray(arr) {
// 	const flattened = [].concat(...arr);
// 	return flattened.some(item => Array.isArray(item)) ? 
// 	  flattenArray(flattened) : flattened;
//   }
  
//   const arr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
//   const flatArr = flattenArray(arr); 
//   //=> [11, 22, 33, 44, 55, 66, 77, 88, 99]

//   unciton flattenArray(arr) {
// 	  const flattend = [].concat(...arr);
// 	  return flattend.some(item => Array.isArray(item)) ? flattenArray(flattend) : flattend;
//   }

//   const arr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
//   const flatArr = flattenArray(arr);












