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
    chunk: function(arr, n) {
        var lenR = Math.ceil(arr.length / n)
        var lenA = arr.length
        var result = new Array(lenR)
        for (var i = 0; i < lenR; i++) {
            result[i] = []
        }
        for (var j = 0; j < lenA; j++) {
            result[parseInt(j / n)][j % n] = arr[j]
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
    compact: function(arr) {
        var result = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
                result.push(arr[i])
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
    difference: function(arr) {
        var tmp = []
        var len = arguments.length
        var result = []
        for (var i = 0; i < arr.length; i++) {
            result.push(arr[i])
        }
        for (var i = 1; i < len; i++) {
            tmp.push(arguments[i])
        }
        tmp = this.flattenDeep(tmp)
        for (var i = 0; i < result.length; i++) {
            for (var j = 0; j < tmp.length; j++) {
                if (result[i] === tmp[j]) {
                    result.splice(i, 1)
                    j = -1
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
    drop: function(arr, del) {
        var result = arr
        if (del == undefined) {
            del = 1
        }
        result.splice(0, del)
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
    dropRight: function(arr, del) {
        var result = arr.sort()
        if (del == undefined) {
            del = 1
        }
        result.splice(0, del)
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
    first: function(arr) {
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
    head: function(arr) {
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
    initial: function(arr) {
        var result = arr
        result.splice(-1, 1)
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
    last: function(arr) {
        return arr[arr.length - 1]
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
    /* lodash 最新版本的 rest 功能不一样
     * rest: function(arr){
     * 	var result = arr
     * 	result.splice(0,1)
     * 	return result
     * },
     **/
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
    flatten: function(arr, isDeep) {
        if (!isDeep) {
            return flat(arr)
        } else {
            return flatDeep(arr)
        }

        function flatDeep(a) {
            var resultDeep = a
            var onOff = true
            for (var i = 0; i < resultDeep.length; i++) {
                if (Array.isArray(resultDeep[i])) {
                    i = 0
                    resultDeep = flat(resultDeep)
                }
            }
            return resultDeep
        }

        function flat(a) {
            var result = []
            var len = a.length
            for (var i = 0; i < len; i++) {
                if (!Array.isArray(a[i])) {
                    result.push(a[i])
                } else {
                    for (var j = 0; j < a[i].length; j++) {
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
    flattenDeep: function(arr) {
        return flatDeep(arr)

        function flatDeep(a) {
            var resultDeep = a
            var onOff = true
            for (var i = 0; i < resultDeep.length; i++) {
                if (Array.isArray(resultDeep[i])) {
                    i = 0
                    resultDeep = flat(resultDeep)
                }
            }
            return resultDeep
        }

        function flat(a) {
            var result = []
            var len = a.length
            for (var i = 0; i < len; i++) {
                if (!Array.isArray(a[i])) {
                    result.push(a[i])
                } else {
                    for (var j = 0; j < a[i].length; j++) {
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
    without: function(arr) {
        var result = arr
        var lenArg = arguments.length
        var lenArr = result.length
        for (var i = 1; i < lenArg; i++) {
            for (var j = 0; j < lenArr; j++) {
                if (arguments[i] === result[j]) {
                    result.splice(j, 1)
                    j = -1
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
    union: function() {
        var tmp = []
        for (var i = 0; i < arguments.length; i++) {
            tmp.push(arguments[i])
        }
        var result = this.flattenDeep(tmp)
        var len = result.length
        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j < len; j++) {
                if (result[i] === result[j]) {
                    result.splice(j, 1)
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
    intersection: function() {
        var result = []
        var len0 = arguments[0].length
        var len = arguments.length
        var count = 0
        for (var i = 0; i < len0; i++) {
            count = 0
            for (var j = 1; j < len; j++) {
                for (var k = 0; k < arguments[j].length; k++) {
                    if (arguments[0][i] === arguments[j][k]) {
                        count++
                        break
                    }
                }
            }
            if (count == len - 1) {
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
    concat: function(arr) {
        var result = []
        var tmp = []
        var len = arr.length
        var lenA = arguments.length
        for (var i = 0; i < len; i++) {
            result.push(arr[i])
        }
        for (var i = 1; i < lenA; i++) {
            tmp.push(arguments[i])
        }
        var lenTmp = tmp.length
        tmp = this.flatten(tmp)
        for (var i = 0; i < lenTmp; i++) {
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
    fill: function(arr, n, start, end) {
        if (!start) {
            start = 0
        }
        if (!end && end !== 0) {
            end = arr.length
        }
        for (var i = start; i < end; i++) {
            arr.splice(i, 1, n)
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
    fromPairs: function(arr) {
        var result = {}
        var len = arr.length
        for (var i = 0; i < len; i++) {
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
    pull: function(arr) {
        var lenArg = arguments.length
        var lenArr = arr.length
        for (var i = 1; i < lenArg; i++) {
            for (var j = 0; j < lenArr; j++) {
                if (arguments[i] === arr[j]) {
                    arr.splice(j, 1)
                    j = -1
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
    pullAll: function(arr, del) {
        var lenDel = del.length
        var lenArr = arr.length
        for (var i = 0; i < lenDel; i++) {
            for (var j = 0; j < lenArr; j++) {
                if (del[i] === arr[j]) {
                    arr.splice(j, 1)
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
    pullAt: function(arr) {
        var result = []
        var lenArg = arguments.length
        for (var i = lenArg - 1; i >= 1; i--) {
            if (arguments[i] < arr.length) {
                result.push(arr[arguments[i]])
                arr.splice(arguments[i], 1)
            }
        }
        result = result.reverse()
        return result
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
    reverse: function(arr) {
        var len = arr.length
        var result = []
        for (var i = 0; i < len; i++) {
            result.push(arr.pop())
        }
        for (var i = 0; i < len; i++) {
            arr.push(result[i])
        }
        return arr
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
    tail: function(arr) {
        var result = arr
        result.splice(0, 1)
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
    take: function(arr, n) {
        if (!n && n !== 0) {
            n = 1
        }
        var result = []
        var len = arr.length
        n = n > len ? len : n
        for (var i = 0; i < n; i++) {
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
    takeRight: function(arr, n) {
        if (!n && n !== 0) {
            n = 1
        }
        var result = []
        var len = arr.length
        n = n > len ? len : n
        var start = len - n
        for (var i = start; i < len; i++) {
            result.push(arr[i])
        }
        return result
    },
    /**
     * 创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
     * 参数
     * array (Array): 要检查的数组。
     * 返回值
     * (Array): 返回新的去重后的数组。
     * 例子
     * uniq([2, 1, 2]);
     * // => [2, 1]
     **/
    uniq: function(arr) {
        var result = arr
        var len = arr.length
        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j < len - i; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1)
                    j = i
                }
            }
        }
        return result
    },
    /**
     * 这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。
     * 参数
     * array (Array): 要处理的分组元素数组。
     * 返回值
     * (Array): 返回重组元素的新数组。
     * 例子
     * var zipped = zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     * unzip(zipped);
     * // => [['fred', 'barney'], [30, 40], [true, false]]
     **/
    unzip: function(arr) {
        var result = []
        var len = arr.length
        var lenR = arr[0].length
        for (var i = 0; i < lenR; i++) {
            result[i] = []
        }
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                result[j][i] = arr[i][j]
            }
        }
        return result
    },
    /**
     * 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
     * 参数
     * [arrays] (...Array): 要检查的数组。
     * 返回值
     * (Array): 返回过滤值后的新数组。
     * 例子
     * xor([2, 1], [2, 3]);
     * // => [1, 3]
     **/
    xor: function() {

        var result = []
        var len = arguments.length
        for (var i = 0; i < len; i++) {
            result.push(arguments[i])
        }
        result = this.flatten(result)
        len = result.length
        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j < len - i; j++) {
                if (result[i] === result[j]) {
                    result.splice(i, 1)
                    result.splice(j - 1, 1)
                    i = -1
                    break
                }
            }
        }
        return result
    },
    /**
     * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
     * 参数
     * [arrays] (...Array): 要处理的数组。
     * 返回值
     * (Array): 返回分组元素的新数组。
     * 例子
     * zip(['fred', 'barney'], [30, 40], [true, false]);
     * /// => [['fred', 30, true], ['barney', 40, false]]
     **/
    zip: function() {
        var tmp = []
        var result = []
        var len = arguments.length
        for (var i = 0; i < len; i++) {
            tmp.push(arguments[i])
        }
        for (var i = 0; i < tmp[0].length; i++) {
            result[i] = []
        }
        len = tmp.length
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < tmp[i].length; j++) {
                result[j][i] = tmp[i][j]
            }
        }
        return result
    },
    /**
     * 使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
     * 参数
     * array (Array): 需要查找的数组。
     * value (*): 需要查找的值。
     * [fromIndex=0] (number): 开始查询的位置。
     * 返回值
     * (number): 返回 值value在数组中的索引位置, 没有找到为返回-1。
     * 例子
     * indexOf([1, 2, 1, 2], 2);
     * // => 1
     * // Search from the `fromIndex`.
     * indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     **/
    indexOf: function(arr, n, start) {
        if (!start) {
            start = 0
        }
        var len = arr.length
        var onOff = false
        for (var i = start; i < len; i++) {
            if (arr[i] === n) {
                onOff = true
                break
            }
        }
        if (onOff) {
            return i
        } else {
            return -1
        }
    },
    /**
     * 将 array 中的所有元素转换为由 separator 分隔的字符串。
     * 参数
     * array (Array): 要转换的数组。
     * [separator=','] (string): 分隔元素。
     * [fromIndex=0] (number): 开始查询的位置。
     * 返回值
     * (string): 返回连接字符串。
     * 例子
     * join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     **/
    join: function(arr, n) {
        var result = arr
        result = result.join(n)
        return result
    },
    /**
     * 这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。
     * 参数
     * array (Array): 要搜索的数组。
     * value (*): 要搜索的值。
     * [fromIndex=array.length-1] (number): 开始搜索的索引值。
     * 返回值
     * (number): 返回匹配值的索引值，否则返回 -1。
     * 例子
     * lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     * // Search from the `fromIndex`.
     * lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     **/
    lastIndexOf: function(arr, n, start) {
        //
        var len = arr.length
        if (!start) {
            start = 0
        }
        var onOff = false
        for (var i = len - start; i >= 0; i--) {
            if (arr[i] === n) {
                onOff = true
                break
            }
        }
        if (onOff) {
            return i
        } else {
            return -1
        }
    },
    /**
     * 获取数组的索引n处的元素。 如果n为负，则返回从末尾开始的第n个元素。
     * 参数
     * array (Array): The array to query.
     * [n=0] (number): The index of the element to return.
     * 返回值
     * (*): Returns the nth element of array.
     * 例子
     * var array = ['a', 'b', 'c', 'd'];
     * nth(array, 1);
     * // => 'b'
     * nth(array, -2);
     * // => 'c';
     **/
    nth: function(arr, index) {
        if (!index) {
            index = 0
        }
        index = parseInt(index)
        if (index >= 0) {
            return arr[index]
        } else {
            return arr[arr.length + index]
        }
    },
    /**
     * 使用二分检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
     * 参数
     * array (Array): 要检查的排序数组。
     * value (*): 要评估的值。
     * 返回值
     * (number): 返回 value值 应该在数组array中插入的索引位置 index。
     * 例子
     * sortedIndex([30, 50], 40);
     * // => 1
     **/
    sortedIndex: function(arr, n) {

        var len = arr.length
        var result = []
        for (var i = 0; i < len; i++) {
            result.push(arr[i])
        }
        var index = parseInt(len / 2)
        for (; n > result[index] && n <= result[index + 1];) {
            if (n <= result[index]) {
                index = parseInt(index / 2)
            }
            if (n > result[index]) {
                index = parseInt((len + index) / 2)
            }
        }
        return index
    },
    /**
     * 转换字符串string为 驼峰写法。
     * 参数
     * [string=''] (string): 要转换的字符串。
     * 返回值
     * (string): 返回驼峰写法的字符串。
     * 例子
     * camelCase('Foo Bar');
     * // => 'fooBar'
     * camelCase('--foo-bar--');
     * // => 'fooBar'
     * camelCase('__FOO_BAR__');
     * // => 'fooBar'
     **/
    camelCase: function(str) {
        var result = str
        var tmp = []
        result = result.toLowerCase()
        if (result.charCodeAt(0) >= 97 && result.charCodeAt(0) <= 122) {
            tmp.push(result.charAt(0))
        }
        for (var i = 1; i < result.length; i++) {
            if (result.charCodeAt(i) >= 97 && result.charCodeAt(i) <= 122) {
                if (result.charCodeAt(i - 1) < 97 || result.charCodeAt(i - 1) > 122) {
                    tmp.push(result.charAt(i).toUpperCase())
                    continue
                }
                tmp.push(result.charAt(i))
            }
        }
        tmp[0] = tmp[0].toLowerCase()
        result = tmp.join("")
        return result
    },
    /**
     * 转换字符串string首字母为大写，剩下为小写。
     * 参数
     * [string=''] (string): 要大写开头的字符串。
     * 返回值
     * (string): 返回大写开头的字符串。
     * 例子
     * capitalize('FRED');
     * // => 'Fred'
     **/
    capitalize: function(str) {
        tmp = []
        result = str.toLowerCase()
        tmp.push(result.charAt(0).toUpperCase())
        tmp.push(result.substring(1))
        result = tmp.join("")
        return result
    },
    /**
     * 转换字符串string中拉丁语-1补充字母 和 拉丁语扩展字母-A 为基本的拉丁字母，并且去除组合变音标记。
     * 参数
     * [string=''] (string): 要处理的字符串。
     * 返回值
     * (string): 返回处理后的字符串。
     * 例子
     * deburr('déjà vu');
     * // => 'deja vu'
     **/
    deburr: function(str) {

        var tmp = str.split("")
        for (var i = 0; i < tmp.length; i++) {
            if (192 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 221) {
                tmp[i] = deburrTrans(tmp[i]).toUpperCase()
            }
            if (224 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 255) {
                tmp[i] = deburrTrans(tmp[i])
            }
        }
        var result = tmp.join("")
        return result

        function deburrTrans(n) {
            var result = n.toLowerCase()
            var codeN = result.charCodeAt(0)
            if ((224 <= codeN && codeN <= 229)) {
                result = "a"
            }
            if ((232 <= codeN && codeN <= 235)) {
                result = "e"
            }
            if ((236 <= codeN && codeN <= 239)) {
                result = "i"
            }
            if ((242 <= codeN && codeN <= 245)) {
                result = "o"
            }
            if ((249 <= codeN && codeN <= 252)) {
                result = "u"
            }
            return result
        }
    },
    /**
     * 检查字符串string是否以给定的target字符串结尾。
     * 参数
     * [string=''] (string): 要检索的字符串。
     * [target] (string): 要检索字符。
     * [position=string.length] (number): 检索的位置。
     * 返回值
     * (boolean): 如果字符串string以target字符串结尾，那么返回 true，否则返回 false。
     * 例子
     * endsWith('abc', 'c');
     * // => true
     * endsWith('abc', 'b');
     * // => false
     * endsWith('abc', 'b', 2);
     * // => true
     **/
    endsWith: function(str, n, index) {
        if (!index && index !== 0) {
            index = 1
        }
        return n === str.charAt(str.length - index) ? true : false
    },
    /**
     * 转换字符串string为 kebab case.
     * 参数
     * [string=''] (string): 要转换的字符串。
     * 返回值
     * (string): 返回转换后的字符串。
     * 例子
     * kebabCase('Foo Bar');
     * // => 'foo-bar'
     * kebabCase('fooBar');
     * // => 'foo-bar'
     * kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     **/
    kebabCase: function(str) {
        var result = str
        var tmp = result.split("")
        var reArr = []
        for (var i = 0; i < tmp.length - 1; i++) {
            if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) && !((97 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 122) || (65 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 90))) {
                tmp.splice(i, 1)
                i--
            }
        }
        for (var i = 0; i < tmp.length; i++) {
            if (!(97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) && !(65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) {
                tmp.splice(i, 1)
                i--
            } else {
                break
            }
        }
        for (var i = 1; i < tmp.length; i++) {
            if ((65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) && !(65 <= tmp[i - 1].charCodeAt(0) && tmp[i - 1].charCodeAt(0) <= 90)) {
                tmp.splice(i, 0, "-")
                i++
            }
        }
        for (var i = 0; i < tmp.length; i++) {
            if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) || (tmp[i].charCodeAt(0) === 45))) {
                tmp.splice(i, 1)
            }
        }
        result = tmp.join("").toLowerCase()
        return result
    },
    /**
     * 转换字符串string以空格分开单词，并转换为小写。
     * 参数
     * [string=''] (string): 要转换的字符串。
     * 返回值
     * (string): 返回转换后的字符串。
     * 例子
     * lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     * lowerCase('fooBar');
     * // => 'foo bar'
     * kebabCase('__FOO_BAR__');
     * // => 'foo bar'
     **/
    lowerCase: function(str) {
        var result = str
        var tmp = result.split("")
        var reArr = []
        for (var i = 0; i < tmp.length - 1; i++) {
            if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) && !((97 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 122) || (65 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 90))) {
                tmp.splice(i, 1)
                i--
            }
        }
        for (var i = 0; i < tmp.length; i++) {
            if (!(97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) && !(65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) {
                tmp.splice(i, 1)
                i--
            } else {
                break
            }
        }
        for (var i = 1; i < tmp.length; i++) {
            if ((65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) && !(65 <= tmp[i - 1].charCodeAt(0) && tmp[i - 1].charCodeAt(0) <= 90)) {
                tmp.splice(i, 0, " ")
                i++
            }
        }
        for (var i = 0; i < tmp.length; i++) {
            if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) || (tmp[i].charCodeAt(0) === 32))) {
                tmp.splice(i, 1)
            }
        }
        result = tmp.join("").toLowerCase()
        return result
    },
    /**
     * 转换字符串string的首字母为小写。
     * 参数
     * [string=''] (string): 要转换的字符串。
     * 返回值
     * (string): 返回转换后的字符串。
     * 例子
     * lowerFirst('Fred');
     * // => 'fred'
     * lowerFirst('FRED');
     * // => 'fRED'
     **/
    lowerFirst: function(str) {
        var tmp = str.split("")
        tmp.splice(0, 1, str.charAt(0).toLowerCase())
        var result = tmp.join("")
        return result
    },
    /**
     * 如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度。
     * 参数
     * [string=''] (string): 要填充的字符串。
     * [length=0] (number): 填充的长度。
     * [chars=' '] (string): 填充字符。
     * 返回值
     * (string): 返回填充后的字符串。
     * 例子
     * pad('abc', 8);
     * // => '  abc   '
     * pad('abc', 8, '_-');
     * // => '_-abc_-_'
     * pad('abc', 3);
     * // => 'abc'
     **/
    pad: function(str, len, sign) {
        var result = str
        if (!sign && sign !== 0) {
            sign = " "
        }
        var tmp = [result]
        if (result.length < len) {
            for (var i = 0, j = 0; i < len - result.length; i = i + sign.length, j++) {
                if (j % 2 !== 0) {
                    tmp.unshift(sign)
                } else {
                    tmp.push(sign)
                }
            }
            result = tmp.join("").substr(0, len)
            return result

        } else {
            return result
        }
    },
    /**
     * 如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分。
     * 参数
     * [string=''] (string): 要填充的字符串。
     * [length=0] (number): 填充的长度。
     * [chars=' '] (string): 填充字符。
     * 返回值
     * (string): 返回填充后的字符串。
     * 例子
     * padEnd('abc', 6);
     * // => 'abc   '
     * padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     * padEnd('abc', 3);
     * // => 'abc'
     **/
    padEnd: function(str, len, sign) {
        var result = str
        if (!sign && sign !== 0) {
            sign = " "
        }
        var tmp = [result]
        if (result.length < len) {
            for (var i = 0; i < len - result.length; i = i + sign.length) {
                tmp.push(sign)
            }
            result = tmp.join("").substr(0, len)
            return result
        } else {
            return result
        }
    },
    /**
     * 如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分。
     * 参数
     * [string=''] (string): 要填充的字符串。
     * [length=0] (number): 填充的长度。
     * [chars=' '] (string): 填充字符。
     * 返回值
     * (string): 返回填充后的字符串。
     * 例子
     * padStart('abc', 6);
     * // => '   abc'
     * padStart('abc', 6, '_-');
     * // => '_-_abc'
     * padStart('abc', 3);
     * // => 'abc'
     **/
    padStart: function(str, len, sign) {
        var result = str
        if (!sign && sign !== 0) {
            sign = " "
        }
        var tmpS = sign.split("").reverse()
        sign = tmpS.join("")
        var tmp = [result]
        if (result.length < len) {
            for (var i = 0; i < len - result.length; i = i + sign.length) {
                tmp.unshift(sign)
            }
            result = tmp.join("")
            result = result.substring(result.length - len, result.length)
            return result
        } else {
            return result
        }
    },
    /**
     * 重复 N 次给定字符串。
     * 参数
     * [string=''] (string): 要重复的字符串。
     * [n=1] (number): 重复的次数。
     * 返回值
     * (string): 返回重复的字符串。
     * 例子
     * repeat('*', 3);
     * // => '***'
     * repeat('abc', 2);
     * // => 'abcabc'
     * repeat('abc', 0);
     * // => ''
     **/
    repeat: function(str, n) {
        var result = ''
        for (var i = 0; i < n; i++) {
            result = result + str
        }
        return result
    },
    /**
     * 转换字符串string为 snake case..
     * 参数
     * [string=''] (string): 要转换的字符串。
     * 返回值
     * (string): 返回转换后的字符串。
     * 例子
     * snakeCase('Foo Bar');
     * // => 'foo_bar'
     * snakeCase('fooBar');
     * // => 'foo_bar'
     * snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     **/
    snakeCase: function(str) {
        var result = str
        var tmp = result.split("")
        var reArr = []
        for (var i = 0; i < tmp.length - 1; i++) {
            if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) && !((97 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 122) || (65 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 90))) {
                tmp.splice(i, 1)
                i--
            }
        }
        for (var i = 0; i < tmp.length; i++) {
            if (!(97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) && !(65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) {
                tmp.splice(i, 1)
                i--
            } else {
                break
            }
        }
        for (var i = 1; i < tmp.length; i++) {
            if ((65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) && !(65 <= tmp[i - 1].charCodeAt(0) && tmp[i - 1].charCodeAt(0) <= 90)) {
                tmp.splice(i, 0, "_")
                i++
            }
        }
        for (var i = 0; i < tmp.length; i++) {
            if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) || (tmp[i].charCodeAt(0) === 95))) {
                tmp.splice(i, 1)
            }
        }
        result = tmp.join("").toLowerCase()
        return result
    },
    /**
     * 创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数：(value, index|key, collection).
     * 参数
     * collection (Array|Object): 用来迭代的集合。
     * [iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
     * 返回值
     * (Array): 返回新的映射后数组。
     * 例子
     **/
    map: function(arr, fn) {
        var result = []
        var len = arr.length
        for (var i = 0; i < len; i++) {
            result.push(fn(arr[i], i, arr))
        }
        return result
    },
    /**
     * 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。
     * 参数
     * collection (Array|Object): 一个用来迭代的集合。
     * [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
     * 返回值
     * (Array): 返回一个新的过滤后的数组。
     * 例子
     **/
    filter: function(arr, fn) {
        var result = []
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i])
            }
        }
        return result
    },
    /**
     * 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。
     * 参数
     * collection (Array|Object): 一个用来迭代的集合。
     * [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
     * 返回值
     * (Array): 返回一个新的过滤后的数组。
     * 例子
     **/
    partition: function(arr, fn) {
        var result = [
            [],
            []
        ]
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                result[0].push(arr[i])
            } else {
                result[1].push(arr[i])
            }
        }
        return result
    },
    reduce: function(arr, fn, init) {
        var start = 1
        if (init === undefined) {
            init = arr[1]
            start = 2
        }
        var result = fn(arr[0], init)
        for (var i = start; i < arr.length; i++) {
            result = fn(arr[i], result)
        }
        return result
    },
    /**
     * 创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。
     * 参数
     * object (Object): 要键值倒置对象。
     * 返回值
     * (Object): 返回新的键值倒置后的对象。
     * 例子
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     * invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    invert: function(obj) {
        var result = {}
        for (keys in obj) {
            result[obj[keys]] = keys
        }
        return result
    },
    /**
     * 创建一个object键值倒置后的对象。 如果 object 有重复的值，放入数组。
     * 参数
     * object (Object): 要键值倒置对象。
     * 返回值
     * (Object): 返回新的键值倒置后的对象。
     * 例子
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     * invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    invert2: function(obj) {
        var result = {}
        for (keys in obj) {
            if (!result[obj[keys]]) {
                result[obj[keys]] = keys
            } else if (Array.isArray(result[obj[keys]])) {
                result[obj[keys]].push(keys)
            } else {
                result[obj[keys]] = [result[obj[keys]]]
                result[obj[keys]].push(keys)

            }

        }
        return result
    },
    /**
     * 创建一个 object 的自身可枚举属性名为数组。
     * 参数
     * object (Object): 要检索的对象。
     * 返回
     * (Array): 返回包含属性名的数组。
     * function Foo() {this.a = 1;this.b = 2;}
     * Foo.prototype.c = 3;
     * keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     * keys('hi');
     * // => ['0', '1']
     * activate-power-mode
     */
    keys: function(obj) {

        var result = []
        for (key in obj) {
            result.push(key)
        }
        return result
    },
    /**
     * 使用 iteratee 遍历对象的自身和继承的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。
     * 参数
     * object (Object): 要遍历的对象。
     * [iteratee=_.identity] (Function): 每次迭代时调用的函数。
     * 返回
     * (Object): 返回 object。
     * function Foo() {this.a = 1;this.b = 2;}
     * Foo.prototype.c = 3;
     * forIn(new Foo, function(value, key) {console.log(key);});
     * // => Logs 'a', 'b', then 'c' (无法保证遍历的顺序)。
     */
    forIn: function(obj, fn) {

        for (keys in obj) {
            if (obj[keys]) {
                fn(obj[keys], keys, obj)
            } else {
                break
            }
        }
    },
    /**
     * 反向版 _.mapValues。 这个方法创建一个对象，对象的值与object相同，并且 key 是通过 iteratee 运行 object 中每个自身可枚举属性名字符串 产生的。iteratee调用三个参数： (value, key, object)。
     * @param  object (Object): 要遍历的对象。
     * @param  [iteratee=_.identity] (Function): 每次迭代时调用的函数。
     * @return (Object): 返回映射后的新对象。
     * example mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {return key + value;});
     * // => { 'a1': 1, 'b2': 2 }
     */
    mapKeys: function(obj, fn) {
        var result = {}
        for (keys in obj) {
            result[fn(obj[keys], keys, obj)] = obj[keys]
        }
        return result
    },
    /**
     * 创建一个对象，这个对象的key与object对象相同，值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。 iteratee调用三个参数： (value, key, object)。
     * @param  object (Object): 要遍历的对象。
     * @param  [iteratee=_.identity] (Function): 每次迭代时调用的函数。
     * @return (Object): 返回映射后的新对象。
     * example var users = {'fred':{ 'user': 'fred',    'age': 40 },'pebbles': { 'user': 'pebbles', 'age': 1 }};
     * mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     * mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    mapValues: function(obj, fn) {
        var result = {}
        if (typeof fn == "string") {
            for (keys in obj) {
                result[keys] = obj[keys][fn]
            }
        } else {
            for (keys in obj) {
                result[keys] = fn(obj[keys], keys, obj)
            }
        }
        return result
    },
    /**
     * 创建一个从 object 中选中的属性的对象。
     * @param  object (Object): 来源对象。
     * @param  [props] (...(string|string[])): 要被忽略的属性。
     * @return (Object): 返回新对象。
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     * pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    pick: function(obj, arr) {
        var result = {}
        for (var i = 0; i < arr.length; i++) {
            for (keys in obj) {
                if (arr[i] == keys) {
                    result[keys] = obj[keys]
                }
            }
        }
        return result
    },
    /**
     * 创建 object 自身可枚举属性的值为数组。
     * @param  object (Object): 要检索的对象。
     * @return (Array): 返回对象属性的值的数组。
     * example function Foo() {this.a = 1;this.b = 2;}
     * Foo.prototype.c = 3;
     * values(new Foo);
     * // => [1, 2]
     * values('hi');
     * // => ['h', 'i']
     */
    values: function(obj) {
        var result = []
        for (keys in obj) {
            result.push(obj[keys])
        }
        return result
    },
    /**
     * 创建一个数组，值来自 object 的paths路径相应的值。
     * @param  object (Object): 要迭代的对象。
     * @param  [paths] (...(string|string[])): 要获取的对象的元素路径，单独指定或者指定在数组中。
     * @return (Array): 返回选中值的数组。
     * example var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     * at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    at: function(obj, arr) {
        debugger
        var result = []
        for (var i = 0; i < arr.length; i++) {
            result.push(eval("obj." + arr[i]))
        }
        return result
    },
    /**
     * 分配来源对象的可枚举属性到目标对象上。 来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性。
     * @param  object (Object): 目标对象。
     * (Object): 返回 object.
     * example
     * function Foo() {this.a = 1;}
     * function Bar() {this.c = 3;}
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     * assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    assign: function(obj) {
        var result = {}
        for (var i = 0; i < arguments.length; i++) {
            for (keys in arguments[i]) {
                result[keys] = arguments[i][keys]
            }
        }
        return result
    },
    /**
     * 该方法类似_.assign， 除了它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。
     * @param  object (Object): 目标对象。
     * @param [sources] (...Object): 来源对象。
     * @return (Object): 返回 object.
     * example var object = {'a': [{ 'b': 2 }, { 'd': 4 }]};
     * var other = {'a': [{ 'c': 3 }, { 'e': 5 }]};
     * merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    merge: function(obj) {
        debugger
        for (var i = 1; i < arguments.length; i++) {
            for (keys in arguments[i]) { //arguments[1] == other
                if (!obj[keys]) { // obj[a]
                    obj[keys] = arguments[i][keys]
                } else {
                    for (var j = 0; j < arguments[i][keys].length; j++) {
                        if (typeof arguments[i][keys][j] == "object" && arguments[i][keys][j] !== null && !Array.isArray(arguments[i][keys][j] !== null)) {
                            for (key in arguments[i][keys][j]) {
                                obj[keys][j][key] = arguments[i][keys][j][key]
                            }
                        } else {
                            obj[keys][j] = arguments[i][keys][j]
                        }
                    }
                }
            }

        }
        return obj
    },
}
