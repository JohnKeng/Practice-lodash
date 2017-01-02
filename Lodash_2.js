let _ = lodash = ( function () {

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
			var arg = partials.map( function ( a ) {
				if ( a === _ ) {
					a = args.shift()
				}
				return a
			} )
			return func.apply( thisArg, arg.concat( args ) )
		}
	}

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
	let filter = function () {}
	let find = function () {}
	let flatten = function () {}
	let flattenDeep = function () {}
	let forEach = function () {}
	let has = function () {}
	let head = function () {}
	let identity = function () {}
	let indexOf = function () {}

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
	let isObject = function () {}
	let isRegExp = function () {}
	let isString = function () {}
	let isUndefined = function () {}
		// 数组、buffer、布尔值、日期、error、map、数字、对象、正则、集合、字符串、symbols、类数组对象
		// 对象通过自有的属性进行比较，函数和 DOM 通过 === 进行比较。
	let isEqual = function ( value, other ) {

	}
	let iteratee = function () {}
	let keys = function () {}
	let last = function () {}
	let map = function () {}
	let matches = function () {}
	let max = function () {}
	let min = function () {}
	let mixin = function () {}
	let negate = function () {}
	let noConflict = function () {}
	let noop = function () {}
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
		// =========================
	return {
		assign: assign,
		assignIn: assignIn,
		extend: assignIn,
		before: before,
		bind: bind,
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


	}
} )( window )
