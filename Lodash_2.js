( function ( windowGlobal ) {

	/**
	 * 分配一个或多个被分配对象可自身可枚举属性，到目标对象上，
	 * 分配的属性会覆盖目标对象身上的同名属性
	 * @param  {object} obj    目标属性
	 * @param  {[object]} args 被分配的对象
	 * @return {object}        分配后的目标对象
	 */
	let assign = function ( obj, ...args ) {
		args.forEach( function ( a ) {
			for ( let key in a ) {
				if ( a.hasOwnProperty( key ) ) {
					obj[ key ] = a[ key ]
				}
			}
		} )
		return obj
	}

	/**
	 * 分配一个或者多个被分配对象自身 或者 继承到的 可枚举属性，到目标对象上，
	 * 分配的属性会覆盖目标身上的同名属性
	 * @param  {object} obj    目标属性
	 * @param  {[object]} args 被分配的对象
	 * @return {object}        分配后的目标对象
	 */
	let assignIn = function ( obj, ...args ) {
		args.forEach( function ( a ) {
			for ( let key in a ) {
				obj[ key ] = a[ key ]
			}
		} )
		return obj
	}

	/**
	 * 限制函数的调用的函数，让函数只能被调用有限次数（n 次）
	 * 当 限制次数为 0 时，被限制的函数不会被调用， 返回 undefined
	 * @param  {number} n      指定被限制调用的次数
	 * @param  {function} func 指定被限制调用的函数
	 * @return {function}      新的被限制调用的函数
	 */
	let before = function ( n, func ) {
		let count = 0
		let result
		return function ( ...arg ) {
			count++
			if ( count <= n ) {
				result = func.apply( this, arg )
			}
			return result
		}
	}

	/**
	 * 绑定 this 和部分参数给 被调用函数，
	 * 使得 func 在 绑定的 this 的上下文环境被调用，并固定部分参数
	 * @param  {function}  func     被绑定的函数
	 * @param  {*} thisArg          被绑定函数执行的上下文
	 * @param  {...*}  partials     被绑定的参数
	 * @return {function}           绑定后的新函数
	 */
	let bind = function ( func, thisArg, ...partials ) {
		return function ( ...args ) {
			let arg = partials.map( function ( a ) {
				if ( a === _ ) {
					a = args.shift()
				}
				return a
			} )
			return func.apply( thisArg, arg.concat( args ) )
		}
	}

	/**
	 * 检查传入的值是不是一个 arguments 对象
	 * @param  {*}  value      被检查的对象
	 * @return {Boolean}       如果是 arguments 对象，返回 true
	 */
	let isArguments = function ( value ) {
		return toString.call( value ) === '[object Arguments]'
	}

	/**
	 * 检查传入的值是不是一个 数组
	 * @param  {*}  value      被检查的对象
	 * @return {Boolean}       如果是 对象，返回 true
	 */
	let isArray = function ( value ) {
		return toString.call( value ) === '[object Array]'
	}

	/**
	 * 检查一个值是不是 ArrayBuffer 对象
	 * @param  {*}  value      需要检查的值
	 * @return {Boolean}       如果是 ArrayBuffer 对象，返回 true
	 */
	let isArrayBuffer = function ( value ) {
		return toString.call( value ) === '[object ArrayBuffer]'
	}

	/**
	 * 检查一个对象是否是类数组对象，包括 string ，（string 含有 length 属性，函数不是类数组对象）
	 * @param  {*}  value      被检查的对象
	 * @return {Boolean}       如果是 类数组对象，返回 true
	 */
	let isArrayLike = function ( value ) {
		return !!( ( typeof value === 'object' || typeof value === 'string' ) &&
			isFinite( value.length ) &&
			Number.isInteger( value.length ) &&
			value.length >= 0 &&
			value.length <= Number.MAX_SAFE_INTEGER )
	}

	/**
	 * 检查一个对象是否是类数组对象，不包括 string 和 function
	 * @param  {*}  value      被检查的对象
	 * @return {Boolean}       如果是 类数组对象，返回 true
	 */
	let isArrayLikeObject = function ( value ) {
		return !!( typeof value === 'object' &&
			isFinite( value.length ) &&
			Number.isInteger( value.length ) &&
			value.length >= 0 &&
			value.length <= Number.MAX_SAFE_INTEGER )
	}

	/**
	 * 检查 传入的值 是否是布尔值
	 * @param  {*}  value      被检查的对象
	 * @return {Boolean}       如果是布尔值。返回 true
	 */
	let isBoolean = function ( value ) {
		return toString.call( value ) === '[object Boolean]'
	}

	/**
	 * 检查 传入的值是否是 buffer
	 * @param  {*}  value      被检查的对象
	 * @return {Boolean}       如果是 buffer 对象，返回 true
	 */
	let isBuffer = function ( value ) {
		return toString.call( value ) === '[object Uint8Array]'
	}

	/**
	 * 检查一个对象是否是 日期对象
	 * @param  {*}  value      被检查的对象
	 * @return {Boolean}       如果是 Date 对象，返回 true
	 */
	let isDate = function ( value ) {
		return toString.call( value ) === '[object Date]'
	}

	/**
	 * 检查一个值 是否是 DOM 元素
	 * @param  {*}  value      被检查的值
	 * @return {Boolean}       如果是 DOM 元素，返回 true
	 */
	let isElement = function ( value ) {
		return /Element\]$/.test( toString.call( value ) )
	}

	/**
	 * 检查一个值是不是 空对象
	 * @param  {*}  value      被检查的值
	 * @return {Boolean}       如果是空对象，返回 true
	 */
	let isEmpty = function ( value ) {
		if ( value === null ) {
			return true
		}
		if ( value.length && value.length === 0 ) {
			return true
		} else if ( value.size && value.size === 0 ) {
			return true
		} else if ( Object.keys( value ) && Object.keys( value ).length === 0 ) {
			return true
		}
		return false
	}

	/**
	 * 检查值是否是有限数
	 * @param  {*}  value      被检查的值
	 * @return {Boolean}       如果是有限数，返回 true
	 */
	let isFinite = function ( value ) {
		return Number.isFinite( value )
	}

	/**
	 * 检查值是否是 函数对象
	 * @param  {*}  value      被检查的值
	 * @return {Boolean}       如果是函数对象，返回 true
	 */
	let isFunction = function ( value ) {
		return toString.call( value ) === '[object Function]'
	}

	/**
	 * 判断一个值是不是 NaN，实例 NaN 对象也会正常判断，
	 * 出数字外其他类型值判断返回 false
	 * @param  {*}  value      被检查的值
	 * @return {Boolean}       如果是 NaN 对象，返回 true
	 */
	let isNaN = function ( value ) {
		if ( ( typeof value === 'number' || value instanceof Number ) && +value !== +value ) {
			return true
		}
		return false
	}

	/**
	 * 检查一个值 是不是 null
	 * @param  {*}  value      被检查的对象
	 * @return {Boolean}       如果是 null，返回 true
	 */
	let isNull = function ( value ) {
		return toString.call( value ) === '[object Null]'
	}

	/**
	 * 判断一个值是不是数字类型
	 * @param  {*}  value      被检查的数
	 * @return {Boolean}       如果是 数字，返回 true
	 */
	let isNumber = function ( value ) {
		return toString.call( value ) === '[object Number]'
	}

	/**
	 * 检查一个值 是否是 对象，null 返回 false
	 * @param  {*}  value      被检查的值
	 * @return {Boolean}       如果该值继承自对象，返回 true
	 */
	let isObject = function ( value ) {
		return value instanceof Object
	}

	/**
	 * 这个方法返回 undefined
	 * @return undefined
	 */
	let noop = function () {
		return void 0
	}

	/**
	 * 调用迭代器 n 次，并将调用的结果以数组的形式返回，
	 * 迭代器只传一个参数：循环的指针数
	 * @param  {number} n          需要调用的次数
	 * @param  {function} iteratee 被调用的迭代器
	 * @return {array}             迭代出的结果集
	 */
	let times = function ( n, iteratee ) {
		var result = []
		for ( var i = 0; i < n; i++ ) {
			result.push( iteratee( i ) )
		}
		return result
	}

	/**
	 * 创建一个返回值的函数
	 * @param  {*} value      被新函数返回的值
	 * @return {function}     新的函数
	 */
	let constant = function ( value ) {
		return function () {
			return value
		}
	}

	/**
	 * 检查一个值是否是正则表达式
	 * @param  {*}  value      被检查的值
	 * @return {Boolean}       如果是正则表达式，返回 true
	 */
	let isRegExp = function ( value ) {
		return toString.call( value ) === '[object RegExp]'
	}

	/**
	 * 检查一个值是否是字符串
	 * @param  {*}  value 被检查的值
	 * @return {Boolean}       如果是字符串，返回 true
	 */
	let isString = function ( value ) {
		return toString.call( value ) === '[object String]'
	}

	/**
	 * 判断一个值是不是 未定义的值
	 * @param  {*}  value      被检查的值
	 * @return {Boolean}       如果是 未定义 undefined ，返回 true
	 */
	let isUndefined = function ( value ) {
		return toString.call( value ) === '[object Undefined]'
	}

	/**
	 * 将两个值进行深度比较，确定他们是否相等
	 * This method supports comparing
	 * arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays.
	 * Object objects are compared by their own, not inherited, enumerable properties.
	 * Functions and DOM nodes are compared by strict equality, i.e. ===.
	 * @param  {*}  value      被检查的值
	 * @param  {[type]}  other 去比较的值
	 * @return {Boolean}       如果两个值深度相等，返回 true
	 */
	let isEqual = function ( value, other ) {
		if ( value === other ) {
			return true
		}
		if ( this.isRegExp( value ) && this.isRegExp( other ) ) {
			return '' + value === '' + other
		}
		if ( this.isNumber( value ) && this.isNumber( other ) ) {
			return +value === +other
		}
		if ( this.isString( value ) && this.isString( other ) ) {
			return '' + value === '' + other
		}
		if ( this.isBoolean( value ) && this.isBoolean( other ) ) {
			return !!value === !!other
		}
		if ( this.isError( value ) && this.isError( other ) ) {
			return value.message === other.message
		}
		if ( this.isDate( value ) && this.isDate( other ) ) {
			return '' + value === '' + other
		}
		if ( this.isSymbol( value ) && this.isSymbol( other ) ) {
			return value.name === other.name
		}
		if ( this.isFunction( value ) && this.isFunction( other ) ) {
			return value === other
		}
		if ( this.isElement( value ) && this.isElement( other ) ) {
			return value === other
		}
		if ( ( this.isArray( value ) && this.isArray( other ) ) ||
			( this.isArrayBuffer( value ) && this.isArrayBuffer( other ) ) ||
			( this.isMap( value ) && this.isMap( other ) ) ||
			( this.isPlainObject( value ) && this.isPlainObject( other ) ) ||
			( this.isSet( value ) && this.isSet( other ) ) ||
			( this.isArrayLike( value ) && this.isArrayLike( other ) ) ||
			( this.isArrayLikeObject( value ) && this.isArrayLikeObject( other ) ) ||
			( this.isBuffer( value ) && this.isBuffer( other ) )
		) {
			let size = Object.keys( value )
			if ( size.length === 0 && Object.keys( other ).length === 0 ) {
				return true
			}
			if ( size.length === Object.keys( other ).length ) {
				let onOff = true
				for ( let i = 0; i < size.length; i++ ) {
					if ( !this.isEqual( value[ size[ i ] ], other[ size[ i ] ] ) ) {
						onOff = false
						break
					}
				}
				return onOff
			}
		}
		return false
	}

	/**
	 * 判断一个值是不是 error 对象
	 * @param  {*}  value      被判断的值
	 * @return {Boolean}       如果是 error 对象，返回 true
	 */
	let isError = function ( value ) {
		return toString.call( value ) === '[object Error]'
	}

	/**
	 * 判断一个值是不是 Symbol 对象
	 * @param  {*}  value      被判断的值
	 * @return {Boolean}       如果是 Symbol 对象，返回 true
	 */
	let isSymbol = function ( value ) {
		return toString.call( value ) === '[object Symbol]'
	}

	/**
	 * 判断一个值是不是 Map 对象
	 * @param  {*}  value      被判断的值
	 * @return {Boolean}       如果是 Map 对象，返回 true
	 */
	let isMap = function ( value ) {
		return toString.call( value ) === '[object Map]'
	}

	/**
	 * 判断一个值是不是 WeakMap 对象
	 * @param  {*}  value      被判断的值
	 * @return {Boolean}       如果是 WeakMap 对象，返回 true
	 */
	let isWeakMap = function ( value ) {
		return toString.call( value ) === '[object WeakMap]'
	}

	/**
	 * 根据参数重载，如果参数是属性名（字符串形式），返回 返回对应的属性值 的回调函数
	 * 如果参数是数组（长度为 2 的一维 键值对），返回 返回布尔值 的回调函数
	 * 如果参数是对象 ，返回布尔值
	 * @param  {string | array | object} func 选择回调函数的参数
	 * @return {function}                     返回该回调函数
	 */
	let iteratee = function ( func ) {
		//debugger
		if ( this.isString( func ) ) {
			return this.property( func )
		}
		if ( this.isArray( func ) ) {
			return this.matchesProperty( func[ 0 ], func[ 1 ] )
		}
		if ( this.isPlainObject( func ) ) {
			return this.matches( func )
		}
	}

	/**
	 * 创建一个包含所给对象所有的可枚举属性的数组
	 * @param  {object} object 被枚举的对象
	 * @return {array}         包含所给对象的所有可枚举自有属性的数组
	 */
	let keys = function ( object ) {
		let obj = Object( object )
		let result = []
		for ( let key in object ) {
			if ( object.hasOwnProperty( key ) ) {
				result.push( key )
			}
		}
		return result
	}

	/**
	 * 返回数组的最后一项的值
	 * @param  {array} array  被查询的数组
	 * @return {*}            该数组最后一项的值
	 */
	let last = function ( array ) {
		return array[ array.length - 1 ]
	}

	/**
	 * 返回一个函数，执行对象和给定参数的深度对比，
	 * 如果对象具有等效的属性。返回 true
	 * @param  {object} source 需要对比的参数
	 * @return {function}      返回新的函数
	 */
	let matches = function ( source ) {
		let that = this
		return function ( it ) {
			for ( let key in source ) {
				if ( source.hasOwnProperty( key ) ) {
					if ( !that.isEqual( source[ key ], it[ key ] ) ) {
						return false
					}
				}
			}
			return true
		}
	}

	/**
	 * 创建一个函数，根据指定的路径和值来判断对象，如果等值，则返回 true
	 * @param  { array | string } path     用于比较的路径
	 * @param  {*} srcValue                用于比较的值
	 * @return {function}                  返回新的函数
	 */
	let matchesProperty = function ( path, srcValue ) {
		let prop
		if ( this.isString( path ) ) {
			prop = path.match( /\w+/g )
		}
		if ( this.isArray( path ) ) {
			prop = path
		}
		let that = this
		return function ( it ) {
			return that.isEqual( prop.reduce( function ( memo, curr ) {
				return memo = memo[ curr ]
			}, it ), srcValue )
		}
	}

	/**
	 * 创建一个返回给定对象路径的值的函数
	 * @param  {array | string} path 查找的路径
	 * @return {function}       创建的新的函数
	 */
	let property = function ( path ) {
		let prop
		if ( this.isString( path ) ) {
			prop = path.match( /\w+/g )
		}
		if ( this.isArray( path ) ) {
			prop = path
		}
		return function ( it ) {
			return prop.reduce( function ( memo, curr ) {
				return memo = memo[ curr ]
			}, it )
		}
	}

	/**
	 * 迭代集合的每一个元素，通过调用 iteratee 返回一个新的数组
	 * @param  {array | object} collection    被迭代的集合
	 * @param  {function | string} iteratee   用于迭代的函数
	 * @return {array}                        返回一个新数组
	 */
	let map = function ( collection, iteratee ) {
		let result = []
		for ( let key in collection ) {
			if ( collection.hasOwnProperty( key ) ) {
				if ( this.isString( iteratee ) ) {
					result.push( this.property( iteratee )( collection[ key ] ) )
				} else if ( this.isFunction( iteratee ) ) {
					result.push( iteratee( collection[ key ] ) )
				}
			}
		}
		return result
	}

	/**
	 * 迭代集合元素，返回成员调用断言函数后为 true 的数组
	 * @param  {array | object} collection                     被迭代的对象
	 * @param  {function | object | array | string} predicate  断言
	 * @return {array}                                         筛选后的新数组
	 */
	let filter = function ( collection, predicate ) {
		let result = []
		for ( let key in collection ) {
			if ( collection.hasOwnProperty( key ) ) {
				if ( ( this.isString( predicate ) && this.property( predicate )( collection[ key ] ) ) ||
					( this.isArray( predicate ) && this.matchesProperty( predicate[ 0 ], predicate[ 1 ] )( collection[ key ] ) ) ||
					( this.isPlainObject( predicate ) && this.matches( predicate )( collection[ key ] ) ) ||
					( this.isFunction( predicate ) && predicate( collection[ key ] ) )
				) {
					result.push( collection[ key ] )
				}
			}
		}
		return result
	}

	/**
	 * 判断一个值是不是纯对象
	 * 纯对象为 Object 构造函数构造出来的对象或 原型对象为 null 的对象
	 * @param  {*}  value      被检查的值
	 * @return {Boolean}       如果是纯对象，返回 true
	 */
	let isPlainObject = function ( value ) {
		return value.constructor === Object || Object.getPrototypeOf( value ) === null
	}

	let max = function () {}
	let min = function () {}
	let mixin = function () {}
	let negate = function () {}
	let noConflict = function () {}
	let once = function () {}
	let pick = function () {}
	let reduce = function () {}
	let result = function () {}
	let size = function () {}
	let slice = function () {}
	let some = function () {}
	let sortBy = function () {}
	let tap = function () {}
	let thru = function () {}
	let toArray = function () {}
	let uniqueId = function () {}
	let value = function () {}
	let valu = function () {}
	let chain = function () {}
	let clone = function () {}
	let compact = function () {}
	let concat = function () {}
	let create = function () {}
	let defaults = function () {}
	let defer = function () {}
	let delay = function () {}
	let each = function () {}
	let escape = function () {}
	let every = function () {}
	let find = function () {}
	let flatten = function () {}
	let flattenDeep = function () {}
	let forEach = function () {}
	let has = function () {}
	let head = function () {}
	let identity = function () {}
	let indexOf = function () {}

	/**
	 * 遍历对象的可枚举自有属性
	 * @param  {object} object     被迭代的对象
	 * @param  {function} iteratee 对对象每个成员进行调用的函数
	 * @return {object}            返回一个对象
	 */
	let forOwn = function ( object, iteratee ) {
		for ( let key in object ) {
			if ( object.hasOwnProperty( key ) ) {
				if ( iteratee( object[ key ], key, object ) === false ) {
					break
				}
			}
		}
	}

	// =========================

	windowGlobal._ = {
		assign: assign,
		assignIn: assignIn,
		extend: assignIn,
		before: before,
		bind: bind,
		// ===
		isArguments: isArguments,
		isArray: isArray,
		isArrayBuffer: isArrayBuffer,
		isArrayLike: isArrayLike,
		isArrayLikeObject: isArrayLikeObject,
		isBoolean: isBoolean,
		isBuffer: isBuffer,
		isDate: isDate,
		isElement: isElement,
		isEmpty: isEmpty,
		isFinite: isFinite,
		isFunction: isFunction,
		isNaN: isNaN,
		isNull: isNull,
		isNumber: isNumber,
		isObject: isObject,
		isRegExp: isRegExp,
		isString: isString,
		isUndefined: isUndefined,
		isEqual: isEqual,
		iteratee: iteratee,
		keys: keys,
		last: last,
		matches: matches,
		matchesProperty: matchesProperty,
		property: property,
		forOwn: forOwn,
		map: map,
		filter: filter,
		isPlainObject: isPlainObject,
		times: times,
		constant: constant,
		noop: noop,
		isError: isError,
		isSymbol: isSymbol,
		isMap: isMap,
		isWeakMap: isWeakMap,

	}
} )( typeof global === 'undefined' ? window : global )
