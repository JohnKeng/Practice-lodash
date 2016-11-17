TianXiaoBo = {
	/**
	 * 将 array 拆分成多个 size 长度的块把这些块组成一个新数组。如果 array 无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。
	 * 参数
		* array (Array): 需要被处理的数组。
		* [size=1] (number): 每个块的长度。
	 * 返回值
		* (Array): 返回一个包含拆分块数组的新数组（相当于一个二维数组）。
	 * 例子
		* chunk(['a', 'b', 'c', 'd'], 2);
		* => [['a', 'b'], ['c', 'd']]
		* chunk(['a', 'b', 'c', 'd'], 3);
		* => [['a', 'b', 'c'], ['d']]
	**/
	chunk: function(arr, n){
		var lenR = Math.ceil(arr.length/n)
		var lenA = arr.length
		var result = new Array(lenR)
		for(var i=0; i<lenR; i++){
			result[i] = []
		}
		for(var j=0; j<lenA; j++){
			result[parseInt(j/n)][j%n] = arr[j]
		}
		return result
	},
	/**
	 * 创建一个新数组并包含原数组中所有的非假值元素。例如 false、null、 0、""、undefined 和 NaN 都是“假值”。
	 * 参数
		* array (Array): 数组参数。
	 * 返回值
		* (Array): 返回过滤假值后的数组。
	 * 例子
		* compact([0, 1, false, 2, '', 3]);
		* // => [1, 2, 3]
	**/
	compact: function(arr){
		var result = arr
		var len = result.length
		for(var i=0; i<len; i++){
			if(!result[i]){
				result.splice(i,1)
			}
		}
		return result
	},
	/**
	 * Creates an array of unique array values not included in the other provided arrays using SameValueZero for equality comparisons.
	 * 参数
		* array (Array): 需要过滤的数组。
		* [values] (...Array): 数组需要排除掉的值。
	 * 返回值
		* (Array): 返回过滤后的数组
	 * 例子
		* difference([1, 2, 3], [4, 2]);
		* // => [1, 3]
		* difference([1, '2', 3], [4, 2]);
		* // => [1, "2", 3]
	**/
	difference: function(arr){
		var tmp = []
		var len = arguments.length
		var result = []
		for(var i=0; i<arr.length; i++){
			result.push(arr[i])
		}
		for(var i=1; i<len; i++){
			tmp.push(arguments[i])
		}
		tmp.splice(0,1)
		tmp = this.flattenDeep(tmp)
		for(var i=0; i<result.length; i++){
			for(var j=0; j<tmp.length; j++){
				if(result[i] === tmp[j]){
					result.splice(i,1)
					j= -1
				}
			}
		}
		return result
	},
	/**
	 * 将 array 中的前 n 个元素去掉，然后返回剩余的部分。
	 * 参数
		* array (Array): 被操作的数组。
		* [n=1] (number): 去掉的元素个数。
	 * 返回值
		* (Array): 返回 array 的剩余部分。
	 * 例子
		* drop([1, 2, 3]);
		* // => [2, 3] 默认是1开始的
		* drop([1, 2, 3], 2);
		* // => [3]
		* drop([1, 2, 3], 5);
		* // => []
		* drop([1, 2, 3], 0);
		* // => [1, 2, 3]
	**/
	drop: function(arr, del){
		var result = arr
		if(del == undefined){
			del = 1
		}
		result.splice(0,del)
		return result
	},
	/**
	 * 将 array 尾部的 n 个元素去除，并返回剩余的部分。
	 * 参数
		* array (Array): 需要被处理数组。
		* [n=1] (number): 去掉的元素个数。
	 * 返回值
		* (Array): 返回 array 的剩余部分。
	 * 例子
		* dropRight([1, 2, 3]);
		* // => [1, 2]
		* dropRight([1, 2, 3], 2);
		* // => [1]
		* dropRight([1, 2, 3], 5);
		* // => []
		* dropRight([1, 2, 3], 0);
		* // => [1, 2, 3]
	**/
	dropRight: function(arr, del){
		var result = arr.sort()
		if(del == undefined){
			del = 1
		}
		result.splice(0,del)
		return result.sort()
	},
	/**
	 * 获取数组 array的第一个元素
	 * 参数
		* array (Array): 需要查询的数组
	 * 返回值
		* (*): 返回数组的第一个元素
	 * 例子
		* first([1, 2, 3]);
		* // => 1
		* first([]);
		* // => undefined
	**/
	first: function(arr){
		return arr[0]
		return true
	},
	/**
	 * 获取数组 array的第一个元素
	 * 参数
		* array (Array): 需要查询的数组
	 * 返回值
		* (*): 返回数组的第一个元素
	 * 例子
		* first([1, 2, 3]);
		* // => 1
		* first([]);
		* // => undefined
	**/
	head: function(arr){
		return arr[0]
		return true
	},
	/**
	 * 去除数组最后一个元素array.
	 * 参数
		* array (Array): 需要查询的数组.
	 * 返回值
		* (Array): 返回截取的数组array.
	 * 例子
		* initial([1, 2, 3]);
		* // => [1, 2]
	**/
	initial: function(arr){
		var result = arr
		result.splice(-1,1)
		return result
	},
	/**
	 * 取出数组的最后一个元素 array.
	 * 参数
		* array (Array): 查询的数组
	 * 返回值
		* (*): 返回 array的最后一个元素.
	 * 例子
		* last([1, 2, 3]);
		* // => 3
	**/
	last: function(arr){
		return arr[arr.length-1]
		return true
	},
	/**
	 * 获取数组 array第一个元素除外的所有元素.
	 * 参数
		* array (Array): 需要查询的数组
	 * 返回值
		* (Array): 返回截取的 array.
	 * 例子
		* rest([1, 2, 3]);
		* // => [2, 3]
	**/
	// lodash 最新版本的 rest 功能不一样
	// rest: function(arr){
	// 	var result = arr
	// 	result.splice(0,1)
	// 	return result
	// },
	/**
	 * 可以理解为将嵌套数组的维数减少，flattened（平坦）. 如果 isDeep 值为 true 时，嵌套数组将递归为一维数组, 否则只减少嵌套数组一个级别的维数.
	 * 参数
		* array (Array): 需要flattened（减少维数）的嵌套数组
		* [isDeep] (boolean): 是否深递归
	 * 返回值
		* (Array): 返回处理后的数组
	 * 例子
		* flatten([1, [2, 3, [4]]]);
		* // => [1, 2, 3, [4]]
		* // using `isDeep`
		* flatten([1, [2, 3, [4]]], true);
		* // => [1, 2, 3, 4]
	**/
	flatten: function (arr, isDeep){
		if(!isDeep){
			return flat(arr)
		}else{
			return flatDeep(arr)
		}
		function flatDeep(a){
			var resultDeep = a
			var onOff = true
			for(var i=0; i<resultDeep.length; i++){
				if(Array.isArray(resultDeep[i])){
					i = 0
					resultDeep = flat(resultDeep)
				}
			}
			return resultDeep
		}
		function flat(a){
			var result = []
			var len = a.length
			for(var i=0; i<len; i++){
				if(!Array.isArray(a[i])){
					result.push(a[i])
				}else{
					for(var j=0; j<a[i].length; j++){
						result.push(a[i][j])
					}
				}
			}
			return result
		}
	},
	/**
	 * 递归地平坦一个嵌套的数组.相当于_.flatten(array, true)
	 * 参数
		* array (Array): 需要
	 * 返回值
		* (Array): 返回处理后的数组.
	 * 例子
		* flattenDeep([1, [2, 3, [4]]]);
		* // => [1, 2, 3, 4]
	**/
	flattenDeep: function(arr){
		return flatDeep(arr)
		function flatDeep(a){
			var resultDeep = a
			var onOff = true
			for(var i=0; i<resultDeep.length; i++){
				if(Array.isArray(resultDeep[i])){
					i = 0
					resultDeep = flat(resultDeep)
				}
			}
			return resultDeep
		}
		function flat(a){
			var result = []
			var len = a.length
			for(var i=0; i<len; i++){
				if(!Array.isArray(a[i])){
					result.push(a[i])
				}else{
					for(var j=0; j<a[i].length; j++){
						result.push(a[i][j])
					}
				}
			}
			return result
		}
	},
	/**
	 * 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较.
	 * 注意: 不像 _.pull, 这个方法会返回一个新数组。
	 * 参数
		* array (Array): 要检查的数组。
		* [values] (...*): 要剔除的值。
	 * 返回值
		* (Array): 返回过滤值后的新数组。
	 * 例子
		* without([2, 1, 2, 3], 1, 2);
		* // => [3]
	**/
	without: function(arr){
		var result = arr
		var lenArg = arguments.length
		var lenArr = result.length
		for(var i=1; i<lenArg; i++){
			for(var j=0; j<lenArr; j++){
				if(arguments[i] === result[j]){
					result.splice(j,1)
					j=-1
				}
			}
		}
		return result
	},
	/**
	 * 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
	 * 参数
		* [arrays] (...Array): 要检查的数组。
	 * 返回值
		* (Array): 返回一个新的联合数组。
	 * 例子
		* union([2], [1, 2]);
		* // => [2, 1]
	**/
	union: function(){
		var tmp = []
		for(var i=0; i<arguments.length; i++){
			tmp.push(arguments[i])
		}
		var result = this.flattenDeep(tmp)
		var len = result.length
		for(var i=0; i<len; i++){
			for(var j=i+1; j<len; j++){
				if(result[i] === result[j]){
					result.splice(j,1)
				}
			}
		}
		return result
	},
	/**
	 * 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（愚人码头注：可以理解为给定数组的交集）
	 * 参数
		* [arrays] (...Array): 待检查的数组。
	 * 返回值
		* (Array): 返回一个包含所有传入数组交集元素的新数组。
	 * 例子
		* intersection([2, 1], [4, 2], [1, 2]);
		* // => [2]
	**/
	intersection: function(){
		var result = []
		var len0 = arguments[0].length
		var len = arguments.length
		var count = 0
		for(var i=0; i<len0; i++){
			count = 0
			for(var j=1; j<len; j++){
				for(var k=0; k<arguments[j].length; k++){
					if(arguments[0][i] === arguments[j][k]){
						count++
						break
					}
				}
			}
			if(count == len-1){
				result.push(arguments[0][i])
			}
		}
		return result
	},
	/**
	 * 创建一个新数组，将array与任何数组 或 值连接在一起。
	 * 参数
		* array (Array): 被连接的数组。
		* [values] (...*): 连接的值。
	 * 返回值
		* (Array): 返回连接后的新数组。
	 * 例子
		* var array = [1];
		* var other = concat(array, 2, [3], [[4]]);
		* console.log(other);
		* // => [1, 2, 3, [4]]
		* console.log(array);
		* // => [1]
	**/
	concat: function(arr){
		var result = []
		var tmp = []
		var len = arr.length
		var lenA = arguments.length
		for(var i=0; i<len; i++){
			result.push(arr[i])
		}
		for(var i=1; i<lenA; i++){
			tmp.push(arguments[i])
		}
		var lenTmp = tmp.length
		tmp = this.flatten(tmp)
		for(var i=0; i<lenTmp; i++){
			result.push(tmp[i])
		}
		return result
	},
	/**
	 * 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
	 * Note: 这个方法会改变 array
	 * 参数
		* array (Array): 要填充改变的数组。
		* value (*): 填充给 array 的值。
		* [start=0] (number): 开始位置（默认0）。
		* [end=array.length] (number):结束位置（默认array.length）。
	 * 返回值
		* (Array): 返回 array。
	 * 例子
		* var array = [1, 2, 3];
		* fill(array, 'a');
		* console.log(array);
		* // => ['a', 'a', 'a']
		* fill(Array(3), 2);
		* // => [2, 2, 2]
		* fill([4, 6, 8, 10], '*', 1, 3);
		* // => [4, '*', '*', 10]
	**/
	fill: function(arr,n,start,end){
		if(!start){
			start = 0
		}
		if(!end&&end!==0){
			end = arr.length
		}
		for(var i=start; i<end; i++){
			arr.splice(i,1,n)
		}
		return arr
	},
	/**
	 * 这个方法返回一个由键值对pairs构成的对象。
	 * Note: 这个方法会改变 array
	 * 参数
		* pairs (Array): 键值对pairs。
	 * 返回值
		* (Object): 返回一个新对象。
	 * 例子
		* fromPairs([['fred', 30], ['barney', 40]]);
		* // => { 'fred': 30, 'barney': 40 }
	**/
	fromPairs: function(arr){
		var result = {}
		var len = arr.length
		for(var i=0; i<len; i++){
			result[arr[i][0]] = arr[i][1]
		}
		return result
	},
	/**
	 * 移除数组array中所有和给定值相等的元素，使用 SameValueZero 进行全等比较。
	 * 注意： 和 _.without 方法不同，这个方法会改变数组。使用 _.remove 从一个数组中移除元素。
	 * 参数
		* array (Array): 要修改的数组。
		* [values] (...*): 要删除的值。
	 * 返回值
		* (Array): 返回 array.
	 * 例子
		* var array = [1, 2, 3, 1, 2, 3];
		* pull(array, 2, 3);
		* console.log(array);
		* // => [1, 1]
	**/
	pull: function(arr){
		var lenArg = arguments.length
		var lenArr = arr.length
		for(var i=1; i<lenArg; i++){
			for(var j=0; j<lenArr; j++){
				if(arguments[i] === arr[j]){
					arr.splice(j,1)
					j=-1
				}
			}
		}
		return arr
	},
	/**
	 * 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
	 * Note: 不同于 _.difference, 这个方法会改变数组 array。
	 * 参数
		* array (Array): 要修改的数组。
		* values (Array): 要移除值的数组。
	 * 返回值
		* (Array): 返回 array。
	 * 例子
		* var array = [1, 2, 3, 1, 2, 3];
		* pullAll(array, [2, 3]);
		* console.log(array);
		* // => [1, 1]
	**/
	pullAll: function(arr,del){
		var lenDel = del.length
		var lenArr = arr.length
		for(var i=0; i<lenDel; i++){
			for(var j=0; j<lenArr; j++){
				if(del[i] === arr[j]){
					arr.splice(j,1)
				}
			}
		}
		return arr
	},
	/**
	 * 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。
	 * Note: 和 _.at不同, 这个方法会改变数组 array。
	 * 参数
		* array (Array): 要修改的数组。
		* [indexes] (...(number|number[])): 要移除元素的索引。
	 * 返回值
		* (Array): 返回移除元素组成的新数组。
	 * 例子
		* var array = [5, 10, 15, 20];
		* var evens = _.pullAt(array, 1, 3);
		* console.log(array);
		* // => [5, 15]
		* console.log(evens);
		* // => [10, 20]
	**/
	pullAt: function(arr){
		//debugger
		var result = []
		var lenArg = arguments.length
		for(var i=lenArg-1; i>=1; i--){
			result.push(arr[arguments[i]])
			arr.splice(arguments[i],1)
		}
		return result.reverse()
	},
	/**
	 * 反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
	 * Note: 这个方法会改变原数组 array，基于 Array#reverse.
	 * 参数
		* array (Array): 要修改的数组。
	 * 返回值
		* (Array): 返回 array.
	 * 例子
		* var array = [1, 2, 3];
		* reverse(array);
		* // => [3, 2, 1]
		* console.log(array);
		* // => [3, 2, 1]
	**/
	reverse: function(arr){
		return arr.reverse()
		return true
	},
	/**
	 * 获取除了array数组第一个元素以外的全部元素。
	 * 参数
		* array (Array): 要检索的数组。
	 * 返回值
		* (Array): 返回 array 数组的切片（除了array数组第一个元素以外的全部元素）。
	 * 例子
		* tail([1, 2, 3]);
		* // => [2, 3]
	**/
	tail: function(arr){
		var result = arr
		result.splice(0,1)
		return result
	},
	/**
	 * 创建一个数组切片，从array数组的起始元素开始提取n个元素。
	 * 参数
		* array (Array): 要检索的数组。
		* [n=1] (number): 要提取的元素个数。
	 * 返回值
		* (Array): 返回 array 数组的切片（从起始元素开始n个元素）。
	 * 例子
		* take([1, 2, 3]);
		* // => [1]
		* take([1, 2, 3], 2);
		* // => [1, 2]
		* take([1, 2, 3], 5);
		* // => [1, 2, 3]
		* take([1, 2, 3], 0);
		* // => []
	**/
	take: function(arr,n){
		if(!n&&n!==0){
			n = 1
		}
		var result = []
		var len = arr.length
		n = n>len ? len:n
		for(var i=0; i<n; i++){
			result.push(arr[i])
		}
		return result
	},
	/**
	 * 创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
	 * 参数
		* array (Array): 要检索的数组。
		* [n=1] (number): 要提取的元素个数。
	 * 返回值
		* (Array): 返回 array 数组的切片（从结尾元素开始n个元素）。
	 * 例子
		* take([1, 2, 3]);
		* // => [3]
		* take([1, 2, 3], 2);
		* // => [2, 3]
		* take([1, 2, 3], 5);
		* // => [1, 2, 3]
		* take([1, 2, 3], 0);
		* // => []
	**/
	takeRight: function(arr,n){
		if(!n&&n!==0){
			n = 1
		}
		var result = []
		var len = arr.length
		n = n>len ? len:n
		var start = len-n
		for(var i=start; i<len; i++){
			result.push(arr[i])
		}
		return result
	},
}
