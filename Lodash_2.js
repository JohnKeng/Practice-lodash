let _ = lodash = ( function () {

	/**
	 * 分配一个或多个被分配对象可自身可枚举属性，到目标对象上，
	 * 分配的属性会覆盖目标对象身上的同名属性
	 * @param  {object} obj  目标属性
	 * @param  {[object]} args 被分配的对象
	 * @return {object}      分配后的目标对象
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
	 * @param  {object} obj  目标属性
	 * @param  {[object]} args 被分配的对象
	 * @return {object}      分配后的目标对象
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
	 * @param  {number} n    指定被限制调用的次数
	 * @param  {function} func 指定被限制调用的函数
	 * @return {function}      新的被限制调用的函数
	 */
	let before = function ( n, func ) {
		let count = 0
		let result
		return function ( ...arg ) {
			count++
			if ( count <= n ) {
				result = func.call( this, ...arg )
			}
			return result
		}
	}
	let bind = function () {}
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
	let isArguments = function () {}
	let isArray = function () {}
	let isBoolean = function () {}
	let isDate = function () {}
	let isEmpty = function () {}
	let isEqual = function () {}
	let isFinite = function () {}
	let isFunction = function () {}
	let isNaN = function () {}
	let isNull = function () {}
	let isNumber = function () {}
	let isObject = function () {}
	let isRegExp = function () {}
	let isString = function () {}
	let isUndefined = function () {}
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
	}
} )( window )
