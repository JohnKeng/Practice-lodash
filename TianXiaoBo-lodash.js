TianXiaoBo = {
    /**
     * �� array ��ֳɶ�� size ���ȵĿ����Щ�����һ�������顣��� array �޷����ָ��ȫ���ȳ��Ŀ飬��ô���ʣ���Ԫ�ؽ����һ���顣
     * ����
     * array (Array): ��Ҫ����������顣
     * [size=1] (number): ÿ����ĳ��ȡ�
     * ����ֵ
     * (Array): ����һ��������ֿ�����������飨�൱��һ����ά���飩��
     * ����
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
     * ����һ�������鲢����ԭ���������еķǼ�ֵԪ�ء����� false��null�� 0��""��undefined �� NaN ���ǡ���ֵ����
     * ����
     * array (Array): ���������
     * ����ֵ
     * (Array): ���ع��˼�ֵ������顣
     * ����
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
     * ����
     * array (Array): ��Ҫ���˵����顣
     * [values] (...Array): ������Ҫ�ų�����ֵ��
     * ����ֵ
     * (Array): ���ع��˺������
     * ����
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
     * �����������_.difference ������������һ�� iteratee
     * @param  array (Array): Ҫ�������顣
     * @param  [values] (...Array): �ų���ֵ��
     * @param  [iteratee=_.identity] (Array|Function|Object|string): iteratee ����ÿ��Ԫ�ء�
     * @return (Array): ����һ������ֵ��������顣
     */
    differenceBy: function(arr, value, iter) {
        var result = []
        var onOff
        if (typeof iter == 'function') {
            for (var i = 0; i < arr.length; i++) {
                onOff = true
                for (var j = 0; j < value.length; j++) {
                    if (iter(value[j]) == iter(arr[i])) {
                        onOff = false
                    }
                }
                if (onOff) {
                    result.push(arr[i])
                }
            }
        }
        if (typeof iter == 'string') {
            for (var i = 0; i < arr.length; i++) {
                onOff = true
                for (var j = 0; j < value.length; j++) {
                    if (arr[i][iter] == value[j][iter]) {
                        onOff = false
                    }
                }
                if (onOff) {
                    result.push(arr[i])
                }
            }
        }
        return result
    },
    /**
     * �����������_.difference ������������һ�� comparator
     * @param  array (Array): Ҫ�������顣
     * @param  [values] (...Array): �ų���ֵ��
     * @param  [comparator] (Function): comparator ����ÿ��Ԫ�ء�
     * @return (Array): ����һ������ֵ��������顣
     */
    differenceWith: function(arr, value, compara) {
        var result = []
        var onOff
        for (var i = 0; i < arr.length; i++) {
            onOff = true
            for (var j = 0; j < value.length; j++) {
                if (compara(arr[i], value[j])) {
                    onOff = false
                }
            }
            if (onOff) {
                result.push(arr[i])
            }
        }
        return result
    },
    /**
     * �� array �е�ǰ n ��Ԫ��ȥ����Ȼ�󷵻�ʣ��Ĳ��֡�
     * ����
     * array (Array): �����������顣
     * [n=1] (number): ȥ����Ԫ�ظ�����
     * ����ֵ
     * (Array): ���� array ��ʣ�ಿ�֡�
     * ����
     * drop([1, 2, 3]);
     * // => [2, 3] Ĭ����1��ʼ��
     * drop([1, 2, 3], 2);
     * // => [3]
     * drop([1, 2, 3], 5);
     * // => []
     * drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     **/
    drop: function(arr, del) {
        var result = []
        if (del == undefined) {
            del = 1
        }
        for (var i = del; i < arr.length; i++) {
            result.push(arr[i])
        }
        return result
    },
    /**
     * �� array β���� n ��Ԫ��ȥ����������ʣ��Ĳ��֡�
     * ����
     * array (Array): ��Ҫ���������顣
     * [n=1] (number): ȥ����Ԫ�ظ�����
     * ����ֵ
     * (Array): ���� array ��ʣ�ಿ�֡�
     * ����
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
        var result = []
        if (del == undefined) {
            del = 1
        }
        for (var i = 0; i < arr.length - del; i++) {
            result.push(arr[i])
        }
        return result
    },
    /**
     * ��ȡ���� array�ĵ�һ��Ԫ��
     * ����
     * array (Array): ��Ҫ��ѯ������
     * ����ֵ
     * (*): ��������ĵ�һ��Ԫ��
     * ����
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
     * ��ȡ���� array�ĵ�һ��Ԫ��
     * ����
     * array (Array): ��Ҫ��ѯ������
     * ����ֵ
     * (*): ��������ĵ�һ��Ԫ��
     * ����
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
     * ȥ���������һ��Ԫ��array.
     * ����
     * array (Array): ��Ҫ��ѯ������.
     * ����ֵ
     * (Array): ���ؽ�ȡ������array.
     * ����
     * initial([1, 2, 3]);
     * // => [1, 2]
     **/
    initial: function(arr) {
        var result = Array.prototype.slice.call(arr)
        result.splice(-1, 1)
        return result
    },
    /**
     * ȡ����������һ��Ԫ�� array.
     * ����
     * array (Array): ��ѯ������
     * ����ֵ
     * (*): ���� array�����һ��Ԫ��.
     * ����
     * last([1, 2, 3]);
     * // => 3
     **/
    last: function(arr) {
        return arr[arr.length - 1]
        return true
    },
    /**
     * ��ȡ���� array��һ��Ԫ�س��������Ԫ��.
     * ����
     * array (Array): ��Ҫ��ѯ������
     * ����ֵ
     * (Array): ���ؽ�ȡ�� array.
     * ����
     * rest([1, 2, 3]);
     * // => [2, 3]
     **/
    /* lodash ���°汾�� rest ���ܲ�һ��
     * rest: function(arr){
     *  var result = arr
     *  result.splice(0,1)
     *  return result
     * },
     **/
    /**
     * �������Ϊ��Ƕ�������ά�����٣�flattened��ƽ̹��. ��� isDeep ֵΪ true ʱ��Ƕ�����齫�ݹ�Ϊһά����, ����ֻ����Ƕ������һ�������ά��.
     * ����
     * array (Array): ��Ҫflattened������ά������Ƕ������
     * [isDeep] (boolean): �Ƿ���ݹ�
     * ����ֵ
     * (Array): ���ش���������
     * ����
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
     * �ݹ��ƽ̹һ��Ƕ�׵�����.�൱��_.flatten(array, true)
     * ����
     * array (Array): ��Ҫ
     * ����ֵ
     * (Array): ���ش���������.
     * ����
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
     * ����һ���޳����и���ֵ�������飬�޳�ֵ��ʱ��ʹ��SameValueZero����ȱȽ�.
     * ע��: ���� _.pull, ��������᷵��һ�������顣
     * ����
     * array (Array): Ҫ�������顣
     * [values] (...*): Ҫ�޳���ֵ��
     * ����ֵ
     * (Array): ���ع���ֵ��������顣
     * ����
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
     * ����һ����˳�����е�Ψһֵ�����顣���и��������Ԫ��ֵʹ��SameValueZero����ֵ�Ƚϡ���������ͷע�� arrays�����飩�Ĳ�������˳�򷵻أ����������Ԫ����Ψһ�ģ�
     * ����
     * [arrays] (...Array): Ҫ�������顣
     * ����ֵ
     * (Array): ����һ���µ��������顣
     * ����
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
     * ����Ψһֵ�����飬�������������и������鶼������Ԫ�أ�ʹ�� SameValueZero��������ԱȽϡ���������ͷע���������Ϊ��������Ľ�����
     * ����
     * [arrays] (...Array): ���������顣
     * ����ֵ
     * (Array): ����һ���������д������齻��Ԫ�ص������顣
     * ����
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
     * ����һ�������飬��array���κ����� �� ֵ������һ��
     * ����
     * array (Array): �����ӵ����顣
     * [values] (...*): ���ӵ�ֵ��
     * ����ֵ
     * (Array): �������Ӻ�������顣
     * ����
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
     * ʹ�� value ֵ����䣨�滻�� array����startλ�ÿ�ʼ, ��endλ�ý�������������endλ�ã���
     * Note: ���������ı� array
     * ����
     * array (Array): Ҫ���ı�����顣
     * value (*): ���� array ��ֵ��
     * [start=0] (number): ��ʼλ�ã�Ĭ��0����
     * [end=array.length] (number):����λ�ã�Ĭ��array.length����
     * ����ֵ
     * (Array): ���� array��
     * ����
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
     * �����������һ���ɼ�ֵ��pairs���ɵĶ���
     * Note: ���������ı� array
     * ����
     * pairs (Array): ��ֵ��pairs��
     * ����ֵ
     * (Object): ����һ���¶���
     * ����
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
     * �Ƴ�����array�����к͸���ֵ��ȵ�Ԫ�أ�ʹ�� SameValueZero ����ȫ�ȱȽϡ�
     * ע�⣺ �� _.without ������ͬ�����������ı����顣ʹ�� _.remove ��һ���������Ƴ�Ԫ�ء�
     * ����
     * array (Array): Ҫ�޸ĵ����顣
     * [values] (...*): Ҫɾ����ֵ��
     * ����ֵ
     * (Array): ���� array.
     * ����
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
     * �����������_.pull�������������������һ��Ҫ�Ƴ�ֵ�����顣
     * Note: ��ͬ�� _.difference, ���������ı����� array��
     * ����
     * array (Array): Ҫ�޸ĵ����顣
     * values (Array): Ҫ�Ƴ�ֵ�����顣
     * ����ֵ
     * (Array): ���� array��
     * ����
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
     * �������� indexes���Ƴ�array�ж�Ӧ��Ԫ�أ������ر��Ƴ�Ԫ�ص����顣
     * Note: �� _.at��ͬ, ���������ı����� array��
     * ����
     * array (Array): Ҫ�޸ĵ����顣
     * [indexes] (...(number|number[])): Ҫ�Ƴ�Ԫ�ص�������
     * ����ֵ
     * (Array): �����Ƴ�Ԫ����ɵ������顣
     * ����
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
     * ��תarray��ʹ�õ�һ��Ԫ�ر�Ϊ���һ��Ԫ�أ��ڶ���Ԫ�ر�Ϊ�����ڶ���Ԫ�أ��������ơ�
     * Note: ���������ı�ԭ���� array������ Array#reverse.
     * ����
     * array (Array): Ҫ�޸ĵ����顣
     * ����ֵ
     * (Array): ���� array.
     * ����
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
     * ��ȡ����array�����һ��Ԫ�������ȫ��Ԫ�ء�
     * ����
     * array (Array): Ҫ���������顣
     * ����ֵ
     * (Array): ���� array �������Ƭ������array�����һ��Ԫ�������ȫ��Ԫ�أ���
     * ����
     * tail([1, 2, 3]);
     * // => [2, 3]
     **/
    tail: function(arr) {
        var result = arr
        result.splice(0, 1)
        return result
    },
    /**
     * ����һ��������Ƭ����array�������ʼԪ�ؿ�ʼ��ȡn��Ԫ�ء�
     * ����
     * array (Array): Ҫ���������顣
     * [n=1] (number): Ҫ��ȡ��Ԫ�ظ�����
     * ����ֵ
     * (Array): ���� array �������Ƭ������ʼԪ�ؿ�ʼn��Ԫ�أ���
     * ����
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
     * ����һ��������Ƭ����array��������һ��Ԫ�ؿ�ʼ��ȡn��Ԫ�ء�
     * ����
     * array (Array): Ҫ���������顣
     * [n=1] (number): Ҫ��ȡ��Ԫ�ظ�����
     * ����ֵ
     * (Array): ���� array �������Ƭ���ӽ�βԪ�ؿ�ʼn��Ԫ�أ���
     * ����
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
     * ����һ��ȥ�غ��array���鸱����ʹ���� SameValueZero ����ֵ�Ƚϡ�ֻ�е�һ�γ��ֵ�Ԫ�زŻᱻ������
     * ����
     * array (Array): Ҫ�������顣
     * ����ֵ
     * (Array): �����µ�ȥ�غ�����顣
     * ����
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
     * �������������_.zip�����������շ���Ԫ�ص����飬���Ҵ���һ�����飬����Ԫ�ص����ǰ�Ľṹ��
     * ����
     * array (Array): Ҫ����ķ���Ԫ�����顣
     * ����ֵ
     * (Array): ��������Ԫ�ص������顣
     * ����
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
     * ����һ����������Ψһֵ�����飬ʹ��symmetric difference����ֵ�Ƚϡ�����ֵ��˳��ȡ������������ĳ���˳��
     * ����
     * [arrays] (...Array): Ҫ�������顣
     * ����ֵ
     * (Array): ���ع���ֵ��������顣
     * ����
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
     * ����һ������Ԫ�ص����飬����ĵ�һ��Ԫ�ذ������и�������ĵ�һ��Ԫ�أ�����ĵڶ���Ԫ�ذ������и�������ĵڶ���Ԫ�أ��Դ����ơ�
     * ����
     * [arrays] (...Array): Ҫ��������顣
     * ����ֵ
     * (Array): ���ط���Ԫ�ص������顣
     * ����
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
     * ʹ�� SameValueZero ��ֵ�Ƚϣ������״� value ������array�б��ҵ��� ����ֵ�� ��� fromIndex Ϊ��ֵ����������arrayβ����������ƥ�䡣
     * ����
     * array (Array): ��Ҫ���ҵ����顣
     * value (*): ��Ҫ���ҵ�ֵ��
     * [fromIndex=0] (number): ��ʼ��ѯ��λ�á�
     * ����ֵ
     * (number): ���� ֵvalue�������е�����λ��, û���ҵ�Ϊ����-1��
     * ����
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
     * �� array �е�����Ԫ��ת��Ϊ�� separator �ָ����ַ�����
     * ����
     * array (Array): Ҫת�������顣
     * [separator=','] (string): �ָ�Ԫ�ء�
     * [fromIndex=0] (number): ��ʼ��ѯ��λ�á�
     * ����ֵ
     * (string): ���������ַ�����
     * ����
     * join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     **/
    join: function(arr, n) {
        var result = arr
        result = result.join(n)
        return result
    },
    /**
     * ����������� _.indexOf �����������Ǵ��ҵ������array��Ԫ�ء�
     * ����
     * array (Array): Ҫ���������顣
     * value (*): Ҫ������ֵ��
     * [fromIndex=array.length-1] (number): ��ʼ����������ֵ��
     * ����ֵ
     * (number): ����ƥ��ֵ������ֵ�����򷵻� -1��
     * ����
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
     * ��ȡ���������n����Ԫ�ء� ���nΪ�����򷵻ش�ĩβ��ʼ�ĵ�n��Ԫ�ء�
     * ����
     * array (Array): The array to query.
     * [n=0] (number): The index of the element to return.
     * ����ֵ
     * (*): Returns the nth element of array.
     * ����
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
     * ʹ�ö��ּ��������� valueֵ Ӧ�ò��뵽������ ������С������λ�ã��Ա�֤array������
     * ����
     * array (Array): Ҫ�����������顣
     * value (*): Ҫ������ֵ��
     * ����ֵ
     * (number): ���� valueֵ Ӧ��������array�в��������λ�� index��
     * ����
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
     * ת���ַ���stringΪ �շ�д����
     * ����
     * [string=''] (string): Ҫת�����ַ�����
     * ����ֵ
     * (string): �����շ�д�����ַ�����
     * ����
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
     * ת���ַ���string����ĸΪ��д��ʣ��ΪСд��
     * ����
     * [string=''] (string): Ҫ��д��ͷ���ַ�����
     * ����ֵ
     * (string): ���ش�д��ͷ���ַ�����
     * ����
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
     * ת���ַ���string��������-1������ĸ �� ��������չ��ĸ-A Ϊ������������ĸ������ȥ����ϱ�����ǡ�
     * ����
     * [string=''] (string): Ҫ������ַ�����
     * ����ֵ
     * (string): ���ش������ַ�����
     * ����
     * deburr('d��j�� vu');
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
     * ����ַ���string�Ƿ��Ը�����target�ַ�����β��
     * ����
     * [string=''] (string): Ҫ�������ַ�����
     * [target] (string): Ҫ�����ַ���
     * [position=string.length] (number): ������λ�á�
     * ����ֵ
     * (boolean): ����ַ���string��target�ַ�����β����ô���� true�����򷵻� false��
     * ����
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
     * ת���ַ���stringΪ kebab case.
     * ����
     * [string=''] (string): Ҫת�����ַ�����
     * ����ֵ
     * (string): ����ת������ַ�����
     * ����
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
     * ת���ַ���string�Կո�ֿ����ʣ���ת��ΪСд��
     * ����
     * [string=''] (string): Ҫת�����ַ�����
     * ����ֵ
     * (string): ����ת������ַ�����
     * ����
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
     * ת���ַ���string������ĸΪСд��
     * ����
     * [string=''] (string): Ҫת�����ַ�����
     * ����ֵ
     * (string): ����ת������ַ�����
     * ����
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
     * ���string�ַ�������С�� length ��������Ҳ�����ַ��� ���û��ƽ�����䣬��ضϳ����ĳ��ȡ�
     * ����
     * [string=''] (string): Ҫ�����ַ�����
     * [length=0] (number): ���ĳ��ȡ�
     * [chars=' '] (string): ����ַ���
     * ����ֵ
     * (string): ����������ַ�����
     * ����
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
     * ���string�ַ�������С�� length �����Ҳ�����ַ��� �������length������ضϳ����Ĳ��֡�
     * ����
     * [string=''] (string): Ҫ�����ַ�����
     * [length=0] (number): ���ĳ��ȡ�
     * [chars=' '] (string): ����ַ���
     * ����ֵ
     * (string): ����������ַ�����
     * ����
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
     * ���string�ַ�������С�� length �����������ַ��� �������length������ضϳ����Ĳ��֡�
     * ����
     * [string=''] (string): Ҫ�����ַ�����
     * [length=0] (number): ���ĳ��ȡ�
     * [chars=' '] (string): ����ַ���
     * ����ֵ
     * (string): ����������ַ�����
     * ����
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
     * �ظ� N �θ����ַ�����
     * ����
     * [string=''] (string): Ҫ�ظ����ַ�����
     * [n=1] (number): �ظ��Ĵ�����
     * ����ֵ
     * (string): �����ظ����ַ�����
     * ����
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
     * ת���ַ���stringΪ snake case..
     * ����
     * [string=''] (string): Ҫת�����ַ�����
     * ����ֵ
     * (string): ����ת������ַ�����
     * ����
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
     * ����һ�����飬 value��ֵ�� �� iteratee���������������� collection�����ϣ��е�ÿ��Ԫ�غ󷵻صĽ���� iteratee����������������3��������(value, index|key, collection).
     * ����
     * collection (Array|Object): ���������ļ��ϡ�
     * [iteratee=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * ����ֵ
     * (Array): �����µ�ӳ������顣
     * ����
     **/
    map: function(colle, pred) {
        //debugger
        var result = []
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        for (var key in colle) {
            result.push(fn(colle[key], key, colle))
        }
        return result
    },
    /**
     * ���� collection�����ϣ�Ԫ�أ����� predicate�����Ժ�����������ֵ ������Ԫ�ص����顣 predicate�����Ժ�������������������(value, index|key, collection)��
     * ����
     * collection (Array|Object): һ�����������ļ��ϡ�
     * [predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * ����ֵ
     * (Array): ����һ���µĹ��˺�����顣
     * ����
     **/
    filter: function(colle, pred) {
        //debugger
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        var result = []
        for (var i = 0; i < colle.length; i++) {
            if (fn(colle[i])) {
                result.push(colle[i])
            }
        }
        return result
    },
    /**
     * ���� collection�����ϣ�Ԫ�أ����� predicate�����Ժ�����������ֵ ������Ԫ�ص����顣 predicate�����Ժ�������������������(value, index|key, collection)��
     * ����
     * collection (Array|Object): һ�����������ļ��ϡ�
     * [predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * ����ֵ
     * (Array): ����һ���µĹ��˺�����顣
     * ����
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
    /**
     * ѹ�� collection�����ϣ�Ϊһ��ֵ��ͨ�� iteratee���������������� collection�����ϣ��е�ÿ��Ԫ�أ�ÿ�η��ص�ֵ����Ϊ��һ�ε���ʹ��(������ͷע����Ϊiteratee�������������ĵ�һ������ʹ��)�� ���û���ṩ accumulator���� collection�����ϣ��еĵ�һ��Ԫ����Ϊ��ʼֵ��(������ͷע��accumulator�����ڵ�һ�ε�����ʱ����Ϊiteratee��������������һ������ʹ�á�) iteratee ����4��������(accumulator, value, index|key, collection).
     * @param  collection (Array|Object): ���������ļ��ϡ�
     * @param  [iteratee=_.identity] (Function): ÿ�ε������õĺ�����
     * @param  [accumulator] (*): ��ʼֵ��
     * @return (*): �����ۼӺ��ֵ��
     */
    reduce: function(colle, iter, acc) {
        var theKey = Object.keys(colle)
        var start = 1
        if (acc === undefined) {
            acc = colle[theKey[1]]
            start = 2
        }
        acc = iter(acc, colle[theKey[0]], theKey[0], colle)
        for (var i = start; i < theKey.length; i++) {
            acc = iter(acc, colle[theKey[i]], theKey[i], colle)
        }
        return acc
    },
    /**
     * ����������� _.reduce ���������Ǵ��ҵ������collection�����ϣ��е�Ԫ�صġ�
     * @param  collection (Array|Object): ���������ļ��ϡ�
     * @param  [iteratee=_.identity] (Function): ÿ�ε������õĺ�����
     * @param  [accumulator] (*): ��ʼֵ��
     * @return (*): �����ۼӺ��ֵ��
     */
    reduceRight: function(colle, iter, acc) {
        var theKey = Object.keys(colle)
        var start = theKey.length - 2
        if (acc === undefined) {
            acc = colle[theKey[theKey.length - 2]]
            start = theKey.length - 3
        }
        acc = iter(acc, colle[theKey[theKey.length - 1]], theKey[theKey.length - 1], colle)
        for (var i = start; i >= 0; i--) {
            acc = iter(acc, colle[theKey[i]], theKey[i], colle)
        }
        return acc
    },
    /**
     * ����һ��object��ֵ���ú�Ķ��� ��� object ���ظ���ֵ�������ֵ�Ḳ��ǰ���ֵ��
     * ����
     * object (Object): Ҫ��ֵ���ö���
     * ����ֵ
     * (Object): �����µļ�ֵ���ú�Ķ���
     * ����
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
     * ����һ��object��ֵ���ú�Ķ��� ��� object ���ظ���ֵ���������顣
     * ����
     * object (Object): Ҫ��ֵ���ö���
     * ����ֵ
     * (Object): �����µļ�ֵ���ú�Ķ���
     * ����
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
     * ����һ�� object �������ö��������Ϊ���顣
     * ����
     * object (Object): Ҫ�����Ķ���
     * ����
     * (Array): ���ذ��������������顣
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
            if (obj.hasOwnProperty(key)) {
                result.push(key)
            }
        }
        return result
    },
    /**
     * ����һ�� object ���� �� �̳еĿ�ö��������Ϊ���顣
     * @param  object (Object): Ҫ�����Ķ���
     * @return (Array): ���ذ��������������顣
     */
    keysIn: function(obj) {
        var result = []
        for (key in obj) {
            result.push(key)
        }
        return result
    },
    /**
     * ʹ�� iteratee �������������ͼ̳еĿ�ö�����ԡ� iteratee �ᴫ��3��������(value, key, object)�� ������� false��iteratee ����ǰ�˳�������
     * ����
     * object (Object): Ҫ�����Ķ���
     * [iteratee=_.identity] (Function): ÿ�ε���ʱ���õĺ�����
     * ����
     * (Object): ���� object��
     * function Foo() {this.a = 1;this.b = 2;}
     * Foo.prototype.c = 3;
     * forIn(new Foo, function(value, key) {console.log(key);});
     * // => Logs 'a', 'b', then 'c' (�޷���֤������˳��)��
     */
    forIn: function(obj, fn) {
        for (keys in obj) {
            if (obj[keys]) {
                fn(obj[keys], keys, obj)
            } else {
                break
            }
        }
        return obj
    },
    /**
     * ����� _.mapValues�� �����������һ�����󣬶����ֵ��object��ͬ������ key ��ͨ�� iteratee ���� object ��ÿ�������ö���������ַ��� �����ġ�iteratee�������������� (value, key, object)��
     * @param  object (Object): Ҫ�����Ķ���
     * @param  [iteratee=_.identity] (Function): ÿ�ε���ʱ���õĺ�����
     * @return (Object): ����ӳ�����¶���
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
     * ����һ��������������key��object������ͬ��ֵ��ͨ�� iteratee ���� object ��ÿ�������ö���������ַ��������ġ� iteratee�������������� (value, key, object)��
     * @param  object (Object): Ҫ�����Ķ���
     * @param  [iteratee=_.identity] (Function): ÿ�ε���ʱ���õĺ�����
     * @return (Object): ����ӳ�����¶���
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
     * ����һ���� object ��ѡ�е����ԵĶ���
     * @param  object (Object): ��Դ����
     * @param  [props] (...(string|string[])): Ҫ�����Ե����ԡ�
     * @return (Object): �����¶���
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
     * ���� object �����ö�����Ե�ֵΪ���顣
     * @param  object (Object): Ҫ�����Ķ���
     * @return (Array): ���ض������Ե�ֵ�����顣
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
     * ����һ�����飬ֵ���� object ��paths·����Ӧ��ֵ��
     * @param  object (Object): Ҫ�����Ķ���
     * @param  [paths] (...(string|string[])): Ҫ��ȡ�Ķ����Ԫ��·��������ָ������ָ���������С�
     * @return (Array): ����ѡ��ֵ�����顣
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
     * ������Դ����Ŀ�ö�����Ե�Ŀ������ϡ� ��Դ�����Ӧ�ù����Ǵ����ң�������һ����������ԻḲ����һ����������ԡ�
     * @param  object (Object): Ŀ�����
     * (Object): ���� object.
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
     * �÷�������_.assign�� �������ݹ�ϲ� sources ��Դ��������ͼ̳еĿ�ö�����Ե� object Ŀ��������Ŀ��ֵ���ڣ�������Ϊundefined��sources ��Դ�������Խ����������������ͨ�����ݹ�ϲ������������ֵ�ᱻֱ�ӷ��串�ǡ�Դ����Ӵ����ҷ��䡣��������Դ�������ԻḲ��֮ǰ��������ԡ�
     * @param  object (Object): Ŀ�����
     * @param [sources] (...Object): ��Դ����
     * @return (Object): ���� object.
     * example var object = {'a': [{ 'b': 2 }, { 'd': 4 }]};
     * var other = {'a': [{ 'c': 3 }, { 'e': 5 }]};
     * merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    merge: function(obj) {
        for (var i = 1; i < arguments.length; i++) {
            for (keys in arguments[i]) { //arguments[1] == other
                if (!obj[keys]) { // obj[a]
                    obj[keys] = arguments[i][keys]
                } else {
                    for (var j = 0; j < arguments[i][keys].length; j++) {
                        if (typeof arguments[i][keys][j] == "object" && arguments[i][keys][j] !== null) {
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
    /**
     * �÷�������_.merge������������һ�� customizer�������Բ���Ŀ��������Դ�������Եĺϲ�ֵ
     * @param  object (Object): Ŀ�����
     * @param  [sources] (...Object): ��Դ����
     * @param  customizer (Function): ����������ƺϲ�ֵ��
     * @return (Object): ���� object��
     */
    mergeWith: function(obj) {
        if (arguments[arguments.length - 1] === undefined) {
            var fn = function(objV, objS) {
                obj[keys][j][key] = arguments[i][keys][j][key]
            }
        } else {
            var fn = arguments[arguments.length - 1]
        }
        for (var i = 1; i < arguments.length - 1; i++) {
            for (keys in arguments[i]) { //arguments[1] == other
                if (!obj[keys]) { // obj[a]
                    obj[keys] = arguments[i][keys]
                } else {
                    obj[keys] = fn(obj[keys], arguments[i][keys])
                }
            }

        }
        return obj
    },
    /**
     * ����һ������func�ĺ�����ͨ��this�󶨺ʹ��������Ĳ�������func�����ô��������� n �Ρ� ֮���ٵ������������������һ��������func�Ľ����
     * @param  n (number): �������ٴβ��ٵ���func
     * @param  func (Function): ����ִ�еĺ�����
     * @return (Function): �����µ��޶�������
     */
    before: function(n, fn) {
        var count
        var theLastResult
        return function(arg) {
            count++
            if (count < n) {
                theLastResult = fn(arg)
                return theLastResult
            } else {
                return theLastResult
            }
        }
    },
    /**
     * _.before�ķ�����;�˷�������һ������������������n������֮�����ϴ���func ��
     * @param  n (number): func ����Ӧ���ڵ��ö��ٴκ��ִ�С�
     * @param  func (Function): �����޶��ĺ�����
     * @return (Function): �����µ��޶�������
     */
    after: function(n, fn) {
        var count = 0
        return function(arg) {
            count++
            if (count >= n) {
                return fn(arg)
            }
        }
    },
    /**
     * ִ����Ƚ���ȷ�����ߵ�ֵ�Ƿ���ȡ�
     * @param  value (*): �����Ƚϵ�ֵ��
     * @param  other (*): ��һ�������Ƚϵ�ֵ��
     * @return (boolean): ��� ����ֵ��ȫ��ͬ����ô���� true�����򷵻� false��
     * example
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     * isEqual(object, other);
     * // => true
     */
    isEqual: function(value1, value2) {
        //debugger
        if (value1 !== value1 && value2 !== value2) {
            return true
        }
        if (value1 === value2) {
            return true
        } else if (typeof value1 !== 'object' || typeof value2 !== 'object') {
            return false
        } else if (Array.isArray(value1) !== Array.isArray(value2)) {
            return false
        } else {
            var p
            for (p in value1) {
                if (typeof value1[p] !== 'undefined' && typeof value2[p] === 'undefined') {
                    return false;
                }
                if (!TianXiaoBo.isEqual(value1[p], value2[p])) {
                    return false;
                }

            }
            for (p in value2) {
                if (typeof value2[p] !== 'undefined' && typeof value1[p] === 'undefined') {
                    return false;
                }
            }
            return true;

        }
    },
    /**
     * ����һ����Ƚϵķ������Ƚϸ����Ķ���� source ���� ��������Ķ���ӵ����ͬ������ֵ���� true�����򷵻� false��
     * @param  source (Object): Ҫƥ������ֵ��Դ����
     * @return (Function): �����µĺ�����
     */
    matches: function(source) {
        var self = this
        return function(obj) {
            for (key in source) {
                if (!self.isEqual(source[key], obj[key])) {
                    return false
                }
            }
            return true
        }
    },
    /**
     * ����һ����Ƚϵķ������Ƚϸ�������� path ��ֵ�Ƿ��� srcValue �� ����Ƿ��� true �����򷵻� false ��
     * @param  path (Array|string): �������������·������
     * srcValue (*): Ҫƥ���ֵ��
     * @return (Function): �����µĺ�����
     */
    matchesProperty: function(path, value) {
        return function(obj) {
            if (TianXiaoBo.isEqual(eval('obj.' + path), value)) {
                return true
            } else {
                return false
            }
        }
    },
    /**
     * ����һ�����ظ�������� path ��ֵ�ĺ�����
     * @param  path (Array|string): Ҫ�õ�ֵ������·����
     * @return path (Array|string): Ҫ�õ�ֵ������·����
     */
    property: function(path) {
        if (Array.isArray(path)) {
            path.join(".")
        }
        return function(obj) {
            return eval('obj.' + path)
        }
    },
    /**
     * ����һ����Ƭ���飬ȥ��array�д� predicate ���ؼ�ֵ��ʼ��β���Ĳ���
     * @param  array (Array): Ҫ��ѯ�����顣
     * @param  [predicate=_.identity] (Function): �����������ÿһ�ε������á�
     * @return (Array): ����arrayʣ����Ƭ��
     */
    dropRightWhile: function(arr, ident) {
        var newArray = Array.prototype.slice.call(arr)
        var self = this
        if (this.isObject(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj, ident)
            }
        }
        if (this.isArray(ident)) {

            var fn = function(obj) {
                return self.isEqual(obj[ident[0]], ident[1])
            }
        }
        if (this.isString(ident)) {
            var fn = function(obj) {
                return !(ident in obj)
            }
        }
        if (this.isFunction(ident)) {
            var fn = ident
        }
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                break
            }
        }
        newArray.length = i
        return newArray
    },
    /**
     * ����һ����Ƭ���飬ȥ��array�д���㿪ʼ�� predicate ���ؼ�ֵ�������֡�
     * @param  array (Array): Ҫ��ѯ�����顣
     * @param  [predicate=_.identity] (Function): �����������ÿһ�ε������á�
     * @return (Array): ����arrayʣ����Ƭ��
     */
    dropWhile: function(arr, ident) {
        var newArray = Array.prototype.slice.call(arr)
        var self = this
        if (this.isObject(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj, ident)
            }
        }
        if (this.isArray(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj[ident[0]], ident[1])
            }
        }
        if (this.isString(ident)) {
            var fn = function(obj) {
                return !(ident in obj)
            }
        }
        if (this.isFunction(ident)) {
            var fn = ident
        }
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                newArray.shift()
            } else {
                return newArray
            }
        }
    },
    /**
     * ��� value �Ƿ���һ���� arguments ����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ���value��һ�� arguments ���� ���� true�����򷵻� false��
     */
    isArguments: function(arg) {
        if (arg.callee) {
            return true
        } else {
            return false
        }
    },
    /**
     * ��� value �Ƿ��� Array �����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ���value��һ�����鷵�� true�����򷵻� false��
     */
    isArray: function(arr) {
        if (arr instanceof Array) {
            return true
        } else {
            return false
        }
    },
    /**
     * ��� value �Ƿ���ԭʼ boolean ���ͻ��߶���
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ������ֵ����ô���� true�����򷵻� false��
     */
    isBoolean: function(value) {

        return typeof value === 'boolean'
    },
    /**
     * ��� value �Ƿ��� Date ����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ�����ڶ�����ô���� true�����򷵻� false��
     */
    isDate: function(value) {

        return value instanceof Date
    },
    /**
     * ��� value �Ƿ���ԭʼ������ֵ��
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ��������ֵ����ô���� true�����򷵻� false��
     */
    isFinite: function(value) {
        if (typeof value == 'number') {
            if (value === 0) {
                return true
            } else if (value + value == value) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    },
    /**
     * ��� value �Ƿ��� Function ����
     * @param  value (*): Ҫ����ֵ
     * @return (boolean): ��� value ��һ����������ô���� true�����򷵻� false��
     */
    isFunction: function(value) {

        return typeof value === 'function'
    },
    /**
     * ��� value �Ƿ��� NaN��
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ�� NaN����ô���� true�����򷵻� false��
     */
    isNaN: function(value) {
        if (value !== value) {
            return true
        } else {
            if (typeof value == 'object') {
                if (value.valueOf() !== value.valueOf()) {
                    return true
                }
            } else {
                return false
            }
        }
    },
    /**
     * ��� valuealue �Ƿ��� null��
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊnull����ô���� true�����򷵻� false��
     */
    isNull: function(value) {
        if (value == undefined && value !== undefined) {
            return true
        } else {
            return false
        }
    },
    /**
     * ��� value �Ƿ���ԭʼNumber��ֵ�� ���� ����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ��������ô���� true�����򷵻� false��
     */
    isNumber: function(value) {
        if (typeof value == 'number' || typeof value.valueOf() == 'number') {
            return true
        } else {
            return false
        }
    },
    /**
     * ��� value �Ƿ�Ϊ Object �� language type
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ��������ô���� true�����򷵻� false��
     */
    isObject: function(value) {
        if (this.isNull(value)) {
            return false
        } else if (this.isFunction(value)) {
            return true
        } else if (typeof value == 'object') {
            return true
        } else {
            return false
        }
    },
    /**
     * ��� value �Ƿ�ΪRegExp����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ��������ʽ����ô���� true�����򷵻� false��
     */
    isRegExp: function(value) {

        return value instanceof RegExp
    },
    /**
     * ��� value �Ƿ���ԭʼ�ַ���String���߶���
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ���ַ�������ô���� true�����򷵻� false��
     */
    isString: function(value) {

        return typeof value == 'string'
    },
    /**
     * ��� value �Ƿ��� undefined.
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value �� undefined ����ô���� true�����򷵻� false��
     */
    isUndefined: function(value) {

        return typeof value == 'undefined'
    },
    /**
     * �Ƿ��������������ַ���
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    iscollection: function(value) {

        return this.isObject(value) || this.isString(value)
    },
    /**
     * ����collection�����ϣ��ĳ��ȣ������������������ַ����������� length ����������Ƕ��󣬷������ö�����Եĸ�����
     * @param  collection (Array|Object): Ҫ���ļ���
     * @return (number): ���ؼ��ϵĳ��ȡ�
     */
    size: function(collection) {
        var count = 0
        if (this.iscollection(collection)) {
            for (key in collection) {
                count++
            }
        }
        return count
    },
    /**
     * ��� value �Ƿ�Ϊһ���ն��󣬼��ϣ�ӳ�����set��
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊ�գ���ô���� true�����򷵻� false��
     */
    isEmpty: function(value) {
        if (typeof value == 'object' || typeof value == 'string') {
            if (this.size(value)) {
                return false
            }
        }
        return true
    },
    /**
     * ������������׸��ṩ�Ĳ�����
     * @param  value (*): �κ�ֵ��
     * @return (*): ���� value.
     */
    identity: function(value) {

        return value
    },
    /**
     * ���� iteratee ���� collection(����) �е�ÿ��Ԫ�أ� iteratee ����3�������� (value, index|key, collection)
     * @param  collection (Array|Object): һ�����������ļ��ϡ�
     * @param  [iteratee=_.identity] (Function): ÿ�ε������õĺ�����
     * @return (*): ���ؼ��� collection��
     */
    forEach: function(collection, iteratee) {
        if (iteratee == undefined) {
            this.identity(collection)
        }
        if (this.iscollection(collection)) {
            for (key in collection) {
                var tmp = iteratee(collection[key], key, collection)
                if (tmp === false) {
                    break
                }
            }
        }
        return collection
    },
    /**
     * ����һ������func�ĺ�����ͨ��this�󶨺ʹ��������Ĳ�������func�����ô��������� n �Ρ� ֮���ٵ������������������һ��������func�Ľ����
     * @param  n (number): �������ٴβ��ٵ���func��������ͷע�����Ƶ���func �Ĵ�������
     * @param  func (Function): ����ִ�еĺ�����
     * @return (Function): �����µ��޶�������
     */
    before: function(n, func) {
        var count
        var lastResult
        return function(arg) {
            count++
            if (count <= n) {
                lastResult = func(arg)
                return lastResult
            } else {
                return lastResult
            }
        }
    },
    /**
     * before�ķ�����;�˷�������һ������������������n������֮�����ϴ���func ��
     * @param  n (number): func ����Ӧ���ڵ��ö��ٴκ��ִ�С�
     * @param  func (Function): �����޶��ĺ���
     * @return (Function): �����µ��޶�������
     */
    after: function(n, func) {
        var co
        unt
        return function(arg) {
            count++
            if (count >= n) {
                return func(arg)
            }
        }
    },
    /**
     * ����һ������func�ĺ�����thisArg��func�����е� this ������func���������partials���Ӳ�����
     * _.bind.placeholderֵ��Ĭ������ _ ��Ϊ���Ӳ��ֲ�����ռλ����
     * @param  func (Function): �󶨵ĺ�����
     * @param  thisArg (*): func �󶨵�this����
     * @param  [partials] (...*): ���ӵĲ��ֲ�����
     * @return (Function): �����µİ󶨺�����
     */
    bind: function(func, thisArg) {
        var self = this
        var temp = Array.prototype.slice.call(arguments, 2)
        return function(...args) {
            for (var i = 0; i < temp.length; i++) {
                if (self.isEqual(temp[i], _)) {
                    temp[i] = args.shift()
                }
            }
            return func.apply(thisArg, temp.concat(args))
        }
    },
    /**
     * ������Դ����Ŀ�ö�����Ե�Ŀ������ϡ� ��Դ�����Ӧ�ù����Ǵ����ң�������һ����������ԻḲ����һ����������ԡ�
     * @param  object (Object): Ŀ�����
     * @param  [sources] (...Object): ��Դ����]
     * @return (Object): ���� object.
     */
    assign: function(object, source) {
        for (var i = 0; i < arguments.length; i++) {
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    object[key] = arguments[i][key]
                }
            }
        }
        return object
    },
    /**
     * ����������� _.assign�� ��������������̳���Դ��������ԡ�
     * @param  object (Object): Ŀ�����
     * @param  [sources] (...Object): ��Դ����
     * @return (Object): ���� object��n]
     */
    assignIn: function(object, source) {
        for (var i = 0; i < arguments.length; i++) {
            for (key in arguments[i]) {
                object[key] = arguments[i][key]
            }
        }
        return object
    },
    /**
     * �÷�������_.find�������Ǹ÷������ص�һ��ͨ�� predicate �ж�Ϊ��ֵ��Ԫ�ص�����ֵ��index����������Ԫ�ر���
     * @param  array (Array): Ҫ���������顣
     * @param  [fromIndex=0] (number): The index to search from.
     * @return (number): �����ҵ�Ԫ�ص� ����ֵ��index�������򷵻� -1��
     */
    findIndex: function(arr, ident, index) {
        index = index || 0
        var self = this
        if (this.isObject(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj, ident)
            }
        }
        if (this.isArray(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj[ident[0]], ident[1])
            }
        }
        if (this.isString(ident)) {
            var fn = function(obj) {
                return obj[ident]
            }
        }
        if (this.isFunction(ident)) {
            var fn = ident
        }
        for (var i = index; i < arr.length; i++) {
            if (fn(arr[i])) {
                return i
            }
        }
        return -1
    },
    /**
     * �����ʽ���� _.findIndex�� ���������Ǵ��ҵ���ĵ�������array�е�Ԫ�ء�
     * @param  array (Array): Ҫ���������顣
     * @param  [predicate=_.identity] (Array|Function|Object|string): �����������ÿһ�ε������á�
     * @param  [fromIndex=array.length-1] (number): The index to search from.
     * @return (number): �����ҵ�Ԫ�ص� ����ֵ��index�������򷵻� -1��
     */
    findLastIndex: function(arr, ident, index) {
        index = index || arr.length - 1
        var self = this
        if (this.isObject(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj, ident)
            }
        }
        if (this.isArray(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj[ident[0]], ident[1])
            }
        }
        if (this.isString(ident)) {
            var fn = function(obj) {
                return obj[ident]
            }
        }
        if (this.isFunction(ident)) {
            var fn = ident
        }
        for (var i = index; i >= 0; i--) {
            if (fn(arr[i])) {
                return i
            }
        }
        return -1
    },
    /**
     * ���� depth �ݹ���� array ��Ƕ�ײ㼶
     * @param  array (Array): ��Ҫ����Ƕ�ײ㼶�����顣
     * @param  [depth=1] (number):�����ٵ�Ƕ�ײ㼶����
     * @return (Array): ���ؼ���Ƕ�ײ㼶��������顣
     */
    flattenDepth: function(arr, depth) {
        //debugger
        var result = arr
        for (var i = 0; i < depth; i++) {
            result = this.flatten(result)
        }
        return result
    },
    /**
     * ����������� _.intersection��������������һ�� iteratee ����ÿһ��arrays��ÿ��ֵ�Բ���һ��ֵ��ͨ��������ֵ�����˱Ƚϡ����ֵ�Ǵӵ�һ������ѡ��
     * @params [arrays] (...Array): ���������顣
     * @params [iteratee=_.identity] (Array|Function|Object|string): iteratee��������������ÿ��Ԫ�ء�
     * @return (Array): ����һ���������д������齻��Ԫ�ص������顣
     */
    intersectionBy: function() {
        var ident = arguments[arguments.length - 1]
        var result = []
        var self = this
        if (this.isString(ident)) {
            var fn = function(obj) {
                return obj[ident]
            }
        }
        if (this.isFunction(ident)) {
            var fn = ident
        }
        //return this.intersection(arguments[0].map(fn), arguments[1].map(fn))
        for (var keys in arguments[0]) {
            for (var key in arguments[1]) {
                if (fn(arguments[0][keys]) === fn(arguments[1][key])) {
                    result.push(arguments[0][keys])
                }
            }
        }
        return result
    },
    /**
     * ����������� _.intersection��������������һ�� comparator ���ñȽ�arrays�е�Ԫ�ء����ֵ�Ǵӵ�һ������ѡ��comparator �ᴫ������������(arrVal, othVal)��
     * @params [arrays] (...Array): ���������顣
     * @params [comparator] (Function): comparator���Ƚ���������ÿ��Ԫ�ء�
     * @return (Array): ����һ���������д������齻��Ԫ�ص������顣
     */
    intersectionWith: function() {
        var ident = arguments[arguments.length - 1]
        var result = []
        for (var keys in arguments[0]) {
            for (var key in arguments[1]) {
                if (ident(arguments[0][keys], arguments[1][key])) {
                    result.push(arguments[0][keys])
                }
            }
        }
        return result
    },
    /**
     * ����һ������func�ĺ���������funcʱ������ n�����������Զ���Ĳ�����
     * @param  func (Function): ��Ҫ�����Ʋ��������ĺ�����
     * @param  [n=func.length] (number): ���ƵĲ���������
     * @return (Function): �����µĸ��Ǻ�����
     */
    ary: function(func, n) {
        return function(args) {
            if (arguments.length > n) {
                arguments.length = n
            }
            return func(args)
        }
    },
    /**
     * �������������_.pullAll �������������������һ�� iteratee������������ ���� array �� values��ÿ��ֵ�Բ���һ��ֵ��ͨ��������ֵ�����˱Ƚϡ�
     * @param  array (Array): Ҫ�޸ĵ����顣
     * @param  values (Array): Ҫ�Ƴ�ֵ������
     * @param  [iteratee=_.identity] (Array|Function|Object|string): iteratee��������������ÿ��Ԫ�ء�
     * @return (Array): ���� array.
     */
    pullAllBy: function(arr, value, iter) {
        if (this.isString(iter)) {
            var fn = function(obj) {
                return obj[iter]
            }
        }
        for (var i = 0; i < value.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (fn(value[i]) == fn(arr[j])) {
                    arr.splice(j, 1)
                    j--
                }
            }
        }
        return arr
    },
    /**
     * ������������� _.pullAll������������������� comparator ����array�е�Ԫ�غ�values�Ƚϡ�
     * @param  array (Array): Ҫ�޸ĵ����顣
     * @param  values (Array): Ҫ�Ƴ�ֵ�����顣
     * @param  [comparator] (Function): comparator���Ƚ���������ÿ��Ԫ�ء�
     * @return (Array): ���� array��
     */
    pullAllWith: function(arr, oth, fn) {
        for (var i = 0; i < oth.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (fn(arr[j], oth[i])) {
                    arr.splice(j, 1)
                    j--
                }
            }
        }
        return arr
    },
    /**
     * ����������� _.sortedIndex ������������һ�� iteratee ������������������ÿһ�����飨array��Ԫ�أ����ؽ����value ֵ�Ƚ�����������
     * @param  array (Array): Ҫ�����������顣
     * @param  value (*): Ҫ������ֵ��
     * @param  [iteratee=_.identity] (Array|Function|Object|string): ��������������ÿ��Ԫ�ء�
     * @return (number): ���� valueֵ Ӧ��������array�в��������λ�� index��
     */
    sortedIndexBy: function(arr, value, iter) {
        if (this.isFunction(iter)) {
            var fn = iter
        }
        if (this.isString(iter)) {
            var fn = function(obj) {
                return obj[iter]
            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (fn(value) <= fn(arr[i])) {
                break
            }
        }
        return i
    },
    /**
     * ����������� _.indexOf�������������Ѿ����������array��ִ�ж����Ƽ�����
     * @param  array (Array): Ҫ���������顣
     * @param  value (*): ������ֵ��
     * @return (number): ����ƥ��ֵ������λ�ã����򷵻� -1��
     */
    sortedIndexOf: function(arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (value == arr[i]) {
                return i
            }
        }
        return -1
    },
    /**
     * �˷���������_.sortedIndex������ ������ valueֵ �� array �о����ܴ������λ�ã�index����
     * @param  array (Array): Ҫ�����������顣
     * @param  value (*): Ҫ������ֵ��
     * @return (number): ���� valueֵ Ӧ��������array�в��������λ�� index��
     */
    sortedLastIndex: function(arr, value) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (value == arr[i]) {
                return i + 1
            }
        }
        return -1
    },
    /**
     * ����������� _.sortedLastIndex ������������һ�� iteratee ������������������ÿһ�����飨array��Ԫ�أ����ؽ����value ֵ�Ƚ�����������
     * @param  array (Array): Ҫ�����������顣
     * @param  value (*): Ҫ������ֵ��
     * @param  [iteratee=_.identity] (Array|Function|Object|string): ��������������ÿ��Ԫ�ء�
     * @return (number): ���� valueֵ Ӧ��������array�в��������λ�� index��
     */
    sortedLastIndexBy: function(arr, value, iter) {
        if (this.isFunction(iter)) {
            var fn = iter
        }
        if (this.isString(iter)) {
            var fn = function(obj) {
                return obj[iter]
            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (fn(value) < fn(arr[i])) {
                break
            }
        }
        return i
    },
    /**
     * ����������� _.lastIndexOf�������������Ѿ����������array��ִ�ж����Ƽ�����
     * @param  array (Array): Ҫ���������顣
     * @param  value (*): ������ֵ��
     * @return (number): ����ƥ��ֵ������λ�ã����򷵻� -1��
     */
    sortedLastIndexOf: function(arr, value) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (value == arr[i]) {
                return i
            }
        }
        return -1
    },
    /**
     * ����������� _.uniq�����������Ż��������顣
     * @param  array (Array): Ҫ�������顣
     * @return (Array): ����һ���µĲ��ظ������顣
     */
    sortedUniq: function(arr) {
        arr.sort(function(a, b) {
            return a - b
        })
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                arr.splice(i, 1)
                i--
            }
        }
        return arr
    },
    /**
     * ����������� _.uniqBy�����������Ż��������顣
     * @param  array (Array): Ҫ�������顣
     * @param  [iteratee] (Function): ��������������ÿ��Ԫ�ء�
     * @return (Array): ����һ���µĲ��ظ������顣
     */
    sortedUniqBy: function(arr, fn) {
        arr.sort(function(a, b) {
            return a - b
        })
        for (var i = 0; i < arr.length - 1; i++) {
            if (fn(arr[i]) == fn(arr[i + 1])) {
                arr.splice(i + 1, 1)
                i--
            }
        }
        return arr
    },
    /**
     * ��array��������һ��Ԫ�ؿ�ʼ��ȡԪ�أ�ֱ�� predicate ���ؼ�ֵ��predicate �ᴫ������������ (value, index, array)��
     * @param  array (Array): Ҫ���������顣
     * @param  [predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @return (Array): ���� array �������Ƭ��
     */
    takeRightWhile: function(arr, ident) {
        var self = this
        if (this.isObject(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj, ident)
            }
        }
        if (this.isArray(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj[ident[0]], ident[1])
            }
        }
        if (this.isString(ident)) {
            var fn = function(obj) {
                return !(ident in obj)
            }
        }
        if (this.isFunction(ident)) {
            var fn = ident
        }
        var result = []
        for (var i = arr.length - 1; i >= 0; i--) {
            if (fn(arr[i])) {
                result.unshift(arr[i])
            } else {
                return result
            }
        }
    },
    /**
     * ��array�������ʼԪ�ؿ�ʼ��ȡԪ�أ���ֱ�� predicate ���ؼ�ֵ
     * @param  array (Array): ��Ҫ���������
     * @param  [predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @return (Array): ���� array �������Ƭ��
     */
    takeWhile: function(arr, ident) {
        var self = this
        if (this.isObject(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj, ident)
            }
        }
        if (this.isArray(ident)) {
            var fn = function(obj) {
                return self.isEqual(obj[ident[0]], ident[1])
            }
        }
        if (this.isString(ident)) {
            var fn = function(obj) {
                return !(ident in obj)
            }
        }
        if (this.isFunction(ident)) {
            var fn = ident
        }
        var result = []
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                result.push(arr[i])
            } else {
                return result
            }
        }
    },
    /**
     * ʹ�� iteratee ��������Ŀ�ö�����ԡ� iteratee �ᴫ��3��������(value, key, object)�� ������� false��iteratee ����ǰ�˳�������
     * @param  object (Object): Ҫ�����Ķ���
     * @param  [iteratee=_.identity] (Function): ÿ�ε���ʱ���õĺ�����
     * @return (Object): ���� object��
     */
    forOwn: function(obj, iter) {
        for (keys in obj) {
            if (obj.hasOwnProperty(keys)) {
                if (iter(obj[keys], keys, obj) === false) {
                    break
                }
            }
        }
        return obj
    },
    /**
     * ����������� _.union ������������һ�� iteratee ������������������ÿһ�����飨array����ÿ��Ԫ���Բ���Ψһ�Լ���ı�׼��iteratee �ᴫ��һ��������(value)��
     * @param  [arrays] (...Array): Ҫ�������顣
     * @param  [iteratee=_.identity] (Array|Function|Object|string): ��������������ÿ��Ԫ�ء�
     * @return (Array): ����һ���µ��������顣
     */
    unionBy: function(arr, value, iter) {
        if (this.isString(iter)) {
            var fn = function(obj) {
                return obj[iter]
            }
        }
        if (this.isFunction(iter)) {
            fn = iter
        }
        var result = Array.prototype.slice.call(arr)
        var onOff = true
        for (var i = 0; i < value.length; i++) {
            onOff = true
            for (var j = 0; j < arr.length; j++) {
                if (fn(value[i]) == fn(arr[j])) {
                    onOff = false
                }
            }
            if (onOff) {
                result.push(value[i])
            }
        }
        return result
    },
    /**
     * ����������� _.union�� ����������һ�� comparator ���ñȽ�arrays�����ÿһ��Ԫ��
     * @params [arrays] (...Array): Ҫ��������
     * @params [comparator] (Function): �ȽϺ���������ÿ��Ԫ�ء�
     * @return (Array): ����һ���µ��������顣
     */
    unionWith: function() {
        var temp = Array.prototype.slice.call(arguments)
        var onOff
        for (var i = 1; i < temp.length - 1; i++) {
            for (var j = 0; j < temp[i].length; j++) {
                onOff = true
                for (var k = 0; k < temp[0].length; k++) {
                    if (temp[temp.length - 1](temp[0][k], temp[i][j])) {
                        onOff = false
                        continue
                    }
                }
                if (onOff) {
                    temp[0].push(temp[i][j])
                }
            }
        }
        return temp[0]
    },
    /**
     * ����������� _.uniq ������������һ�� iteratee ������������������ÿһ�����飨array����ÿ��Ԫ���Բ���Ψһ�Լ���ı�׼��
     * @param  array (Array): Ҫ�������顣
     * @param  [iteratee=_.identity] (Array|Function|Object|string): ��������������ÿ��Ԫ�ء�
     * @return (Array): �����µ�ȥ�غ�����顣
     */
    uniqBy: function(arr, iter) {
        var result = Array.prototype.slice.call(arr)
        if (this.isString(iter)) {
            var fn = function(obj) {
                return obj[iter]
            }
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        for (var i = 0; i < result.length; i++) {
            for (var j = i + 1; j < result.length; j++) {
                if (fn(result[i]) == fn(result[j])) {
                    result.splice(j, 1)
                    j--
                }
            }
        }
        return result
    },
    uniqWith: function(arr, comp) {
        debugger
        var result = Array.prototype.slice.call(arr)
        for (var i = 0; i < result.length; i++) {
            for (var j = i + 1; j < result.length; j++) {
                if (comp(arr[i], arr[j])) {
                    result.splice(j, 1)
                    j--
                }
            }
        }
        return result
    },
    /**
     * ���� JSON �ַ���������ʼ��ָ�룬���� JSON ����
     * @param  {[string]} jsonString [����� JSON �ַ���]
     * @return {[object]}            [������� JOSN ����]
     */
    parseJson: function(jsonString) {
        var theJson = '',
            index = 0,
            onOff = false
            /**
             * ����ո�
             */
        for (var i = 0; i < jsonString.length; i++) {
            if (jsonString[i] == '"') {
                onOff = onOff ? false : true
            }
            if (!onOff && (jsonString[i] == ' ' || jsonString[i] == '\n' || jsonString[i] == '\r' || jsonString[i] == '\t')) {
                continue
            }
            theJson = theJson + jsonString[i]
        }
        return parse()

        /**
         * [ָ��ָ����ʵ�λ��ʱ���еĽ��������������ַ�����ͬ�ı��ַ��ز�ͬ��ֵ]
         * @param  {[string]} jsonString [��ǰ��Ҫ�������ַ����������ǵݹ���ֵ��]
         * @param  {[number]} index)     {                   var indexChar [ָ��]
         * @return {[*]}            [�������ֵ]
         */
        function parse() {
            var indexChar = theJson[index]
            if (indexChar == '{') {
                return parseObject()
            }

            if (indexChar == '[') {
                return parseArray()
            }

            if (indexChar == 't') {
                return parseTrue()
            }

            if (indexChar == 'f') {
                return parseFalse()
            }

            if (indexChar == 'n') {
                return parseNull()
            }

            if (indexChar == '"') {
                return parseString()
            }

            if (isDigit(indexChar)) {
                return parseNumber()
            }
        }
        /**
         * [parseNumber ����ֵΪ���ֵ� value]
         * @return {[type]} [����]
         */
        function parseNumber() {
            for (var i = index + 1;; i++) {
                if (!isDigit(theJson[i])) {
                    break
                }
            }
            var num = theJson.slice(index, i)
            index = i
            return parseInt(num)
        }
        /**
         * [�ж�һ���ַ��ܷ�ת��Ϊ����]
         * @param  {[string]}  char [����ĵ����ַ�]
         * @return {Boolean}      [�����ת��Ϊ���֣�����true]
         */
        function isDigit(char) {
            if (!char) {
                return false
            }
            var the0 = '0'.charCodeAt(0)
            var the9 = '9'.charCodeAt(0)
            var theChar = char.charCodeAt(0)
            if (the0 <= theChar && theChar <= the9) {
                return true
            } else {
                return false
            }
        }
        /**
         * [parseString ����ֵΪ�ַ�����valueֵ]
         * @return {[string]} [������Ϊֵ���ַ���]
         */
        function parseString() {
            var theEnd = theJson.indexOf('"', index + 1)
            var theString = theJson.slice(index + 1, theEnd)
            index = theEnd + 1
            return theString
        }
        /**
         * [parseNull ���� ֵΪnull��valueֵ]
         * @return {[type]} [����null]
         */
        function parseNull() {
            index += 4
            return null
        }
        /**
         * [parseFalse ����ֵΪ false �� value ֵ]
         * @return {[boolean]} [����false]
         */
        function parseFalse() {
            index += 5
            return false
        }
        /**
         * * [parseFalse ����ֵΪ true �� value ֵ]
         * @return {[boolean]} [����true]
         */
        function parseTrue() {
            index += 4
            return true
        }
        /**
         * [parseArray �ݹ��������]
         * @return {[array]} [����һ������]
         */
        function parseArray() {
            var result = [],
                product
            index++
            for (;;) {
                product = parse()
                result.push(product)
                if (theJson[index] === ',') {
                    index++
                    continue
                }
                if (theJson[index] === ']') {
                    break
                }
            }
            index++
            return result
        }
        /**
         * [parseObject �ݹ��������]
         * @return {[object]} [���ض���]
         */
        function parseObject() {
            var result = {},
                key,
                value
            index++
            for (;;) {
                key = parseString()
                index++
                value = parse()
                result[key] = value
                if (theJson[index] === "}") {
                    break
                }
                if (theJson[index] === ",") {
                    index++
                    continue
                }
            }
            index++
            return result
        }
    },
    /**
     * ��������ӡ�
     * @param augend (number): ��ӵĵ�һ������
     * @param addend (number): ��ӵĵڶ�������
     * @result (number): �����ܺ͡�
     */
    add: function(num1, num2) {

        return num1 + num2
    },
    /**
     * �˷���������_.unzip������������һ��iterateeָ������ֵӦ����α���ϡ�iteratee ����ʱ�ᴫ��ÿ�������ֵ�� (...group)��
     * @param  array (Array): Ҫ����ķ���Ԫ�����顣
     * @param  [iteratee=_.identity] (Function): �������������������ֵ��
     * @return (Array): ��������Ԫ�ص������顣
     */
    unzipWith: function(arr, iter) {
        var result = []
        for (var j = 0; j < arr[0].length; j++) {
            for (var i = 0; i < arr.length - 1; i++) {
                result.push(iter(arr[i][j], arr[i + 1][j]))
            }
        }
        return result
    },
    arrayToLinkedList: function(array) {
        var result = {
            next: null
        }
        array.map(function(thevalue) {
            return {
                value: thevalue,
                next: null
            }
        }).reduce(function(list, curr) {
            list.next = curr
            return curr
        }, result)
        return result
    },
    /**
     * ����������� _.xor ������������ iteratee��������������������� ����ÿһ�� arrays�����飩��ÿһ��ֵ�������ɱȽϵ���ֵ��iteratee ����һ�������� (value).
     * @params [arrays] (...Array): Ҫ�������顣
     * @params [iteratee=_.identity] (Array|Function|Object|string): ����ÿһ��Ԫ�صĵ���������
     * @return (Array): ���ع���ֵ��������顣
     */
    xorBy: function() {
        var result = []
        var iter = arguments[arguments.length - 1]
        if (this.isString(iter)) {
            var fn = function(obj) {
                return obj[iter]
            }
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        var temp = Array.prototype.slice.call(arguments, 0, arguments.length - 1)
        var theComp = this.flattenDeep(temp)
        var count = 0
        for (var i = 0; i < theComp.length; i++) {
            count = 0
            for (var j = 0; j < theComp.length; j++) {
                if (this.isEqual(fn(theComp[i]), fn(theComp[j]))) {
                    count++
                }
            }
            if (count == 1) {
                result.push(theComp[i])
            }
        }
        return result
    },
    /**
     * �÷������� _.xor������������һ�� comparator ���Ե��ñȽ������Ԫ�ء� comparator ����2��������(arrVal, othVal).
     * @params [arrays] (...Array): Ҫ�������顣
     * @params [comparator] (Function): ����ÿһ��Ԫ�صıȽϺ�����
     * @return (Array): ���ع���ֵ��������顣
     */
    xorWith: function() {
        var result = []
        var iter = arguments[arguments.length - 1]
        var temp = Array.prototype.slice.call(arguments, 0, arguments.length - 1)
        var theComp = this.flattenDeep(temp)
        var count = 0
        for (var i = 0; i < theComp.length; i++) {
            count = 0
            for (var j = 0; j < theComp.length; j++) {
                if (iter(theComp[i], theComp[j])) {
                    count++
                }
            }
            if (count == 1) {
                result.push(theComp[i])
            }
        }
        return result
    },
    /**
     * ����������� _.fromPairs������������2�����飬��һ�������е�ֵ��Ϊ���Ա�ʶ���������������ڶ��������е�ֵ��Ϊ��Ӧ������ֵ��
     * @param  [props=[]] (Array): The property identifiers.
     * @param  [values=[]] (Array): The property values.
     * @return (Object): Returns the new object.
     */
    zipObject: function(props, value) {
        var result = {}
        for (var i = 0; i < props.length; i++) {
            result[props[i]] = value[i]
        }
        return result
    },
    /**
     * ����������� _.zipObject��������֧������·����
     * @param  [props=[]] (Array): ���Ա�ʶ��������������
     * @param  [values=[]] (Array): ����ֵ��
     * @return (Object): �����¶���
     */
    zipObjectDeep: function(props, value) {
        debugger
        var result = {}
        for (var i = 0; i < props.length; i++) {
            var thePath = '.' + props[i]
            parse(thePath, result, value[i], 0)
        }
        return result
            /**
             * �����ַ��������ַ���·����ӵ������ϣ������ض���
             * @param  {[string]} pathstr [·���ַ���,��·����ȷ]
             * @param  {[object]} obj     [����ӵĶ���]
             * @param  {[number/string/boolean..]} [��Ҫ����Ҷ�ӵ�ֵ]
             * @return {[object]}         [���ض���]
             */
        function parse(pathstr, obj, value, flag) {
            var start = flag + 1,
                end = start + 1,
                key
            while (true) {
                if (pathstr[end] === '.' || pathstr[end] === '[' || pathstr[end] === undefined || pathstr[end] === ']') {
                    break
                }
                end++
            }
            key = pathstr.slice(start, end)
            if (pathstr[end] === ']') {
                end++
            }
            start = end
            if (key in obj) {
                parse(pathstr, obj[key], value, start)
            } else if (pathstr[end] === '.') {
                obj[key] = {}
                parse(pathstr, obj[key], value, start)
            } else if (pathstr[end] === '[') {
                obj[key] = []
                parse(pathstr, obj[key], value, start)
            } else if (pathstr[end] === undefined) {
                obj[key] = value
                return obj
            }
        }
    },
    /**
     * �������������_.zip����֮ͬ������������һ�� iteratee���������������� ָ�������ֵӦ����α���ϡ� ��iteratee����ÿ�����Ԫ�أ� (...group).
     * @param [arrays] (...Array): Ҫ��������顣
     * @param [iteratee=_.identity] (Function): ����������Ϸ����ֵ��
     * @return (Array): ���ط���Ԫ�ص������顣
     */
    zipWith: function() {
        var result = [],
            theArr = Array.prototype.slice.call(arguments, 0, arguments.length - 1),
            theIter = arguments[arguments.length - 1],
            temp
        for (var j = 0; j < theArr[0].length; j++) {
            temp = []
            for (var i = 0; i < theArr.length; i++) {
                temp.push(theArr[i][j])
            }
            result.push(theIter(...temp))
        }
        return result
    },
    /**
     * ����һ����ɶ���key�������Ǿ��� iteratee������������ ִ�д���collection��ÿ��Ԫ�غ󷵻صĽ����ÿ��key��������Ӧ��ֵ�� iteratee���������������ظ�key�������Ĵ�����������ͷע��������������
     * @param  {[type]} colle [description]
     * @param  {[type]} iter  [description]
     * @return {[type]}       [description]
     */
    countBy: function(colle, iter) {
        var count,
            result = {},
            keys
        if (this.isString(iter)) {
            var fn = function(obj) {
                return obj[iter]
            }
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        for (var key in colle) {
            keys = fn(colle[key])
            if (keys in result) {
                count++
            } else {
                count = 1
            }
            result[keys] = count
        }
        return result
    },
    /**
     * ͨ�� predicate�����Ժ����� ��� collection�����ϣ��е� ���� Ԫ���Ƿ񶼷�����ֵ��
     * @param  collection (Array|Object): һ�����������ļ��ϡ�
     * @param  [predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @return (boolean): �������Ԫ�ؾ� predicate�����Ժ����� ���󶼶�������ֵ����ô�ͷ���true�����򷵻� false ��
     */
    every: function(colle, pred) {
        //debugger
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        for (var i = 0; i < colle.length; i++) {
            if (!fn(colle[i])) {
                return false
            }
        }
        return true
    },
    /**
     * ���� collection�����ϣ�Ԫ�أ����� predicate�����Ժ�������һ��������ֵ�ĵ�һ��Ԫ�ء�predicate�����Ժ���������3�������� (value, index|key, collection)��
     * @param  collection (Array|Object): һ�����������ļ��ϡ�
     * @param  [predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @param  [fromIndex=0] (number): ��ʼ����������λ�á�
     * @return (*): ����ƥ��Ԫ�أ����򷵻� undefined��
     */
    find: function(colle, pred, index) {
        if (index === undefined) {
            index = 0
        }
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        for (var i = index; i < colle.length; i++) {
            if (fn(colle[i])) {
                return colle[i]
            }
        }
    },
    /**
     * �����������_.find ����֮ͬ�����ڣ�_.findLast�Ǵ����������collection �����ϣ�Ԫ�صġ�
     * @param  collection (Array|Object): һ�����������ļ��ϡ�
     * @param  [predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @param  [fromIndex=collection.length-1] (number): ��ʼ����������λ�á�
     * @return (*): ����ƥ��Ԫ�أ����򷵻� undefined��
     */
    findLast: function(colle, pred, index) {
        if (index === undefined) {
            index = colle.length - 1
        }
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        for (var i = index; i >= 0; i--) {
            if (fn(colle[i])) {
                return colle[i]
            }
        }
    },
    /**
     * ����һ����ƽ����������ͷע��ͬ�����飩�����飬��������ֵ����collection�����ϣ��е�ÿһ��ֵ���� iteratee������������ ����󷵻صĽ�������ұ�ƽ���ϲ��� iteratee �������������� (value, index|key, collection)��
     * @param  collection (Array|Object): һ���������������ļ��ϡ�
     * @param  [iteratee=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @return (Array): �����±�ƽ�����顣
     */
    flatMap: function(colle, iter) {
        var result = []
        if (this.isFunction(iter)) {
            var fn = iter
        }
        for (var i = 0; i < colle.length; i++) {
            result.push(fn(colle[i]))
        }
        return this.flatten(result)
    },
    /**
     * ����������� _.flatMap ��֮ͬ�����ڣ�_.flatMapDeep �������ƽ���ݹ�ӳ��Ľ����
     * @param  collection (Array|Object): һ�����������ļ��ϡ�
     * @param  [iteratee=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @return (Array): �����±�ƽ�����顣
     */
    flatMapDeep: function(colle, iter) {
        var result = []
        if (this.isFunction(iter)) {
            var fn = iter
        }
        for (var i = 0; i < colle.length; i++) {
            result.push(fn(colle[i]))
        }
        return this.flattenDeep(result)
    },
    /**
     * �÷�������_.flatMap����֮ͬ�����ڣ�_.flatMapDepth �����ָ���� depth���ݹ���ȣ�������ƽ���ݹ�ӳ������
     * @param  collection (Array|Object): һ�����������ļ��ϡ�
     * @param  [iteratee=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @param  [depth=1] (number): ���ݹ���ȡ�
     * @return (Array): �����±�ƽ�����顣
     */
    flatMapDepth: function(colle, iter, depth) {
        if (depth === undefined) {
            depth = 1
        }
        var result = []
        if (this.isFunction(iter)) {
            var fn = iter
        }
        for (var i = 0; i < colle.length; i++) {
            result.push(fn(colle[i]))
        }
        return this.flattenDepth(result, depth)
    },
    /**
     * ���� iteratee ���� collection(����) �е�ÿ��Ԫ�أ� iteratee ����3�������� (value, index|key, collection)�� �������������iteratee����ʽ�ķ��� false ����������ǰ�˳���
     * @param  collection (Array|Object): һ�����������ļ��ϡ�
     * @param  [iteratee=_.identity] (Function): ÿ�ε������õĺ�����
     * @return (*): ���ؼ��� collection��
     */
    forEachRight: function(collection, iteratee) {
        if (this.iscollection(collection)) {
            var theKey = []
            for (key in collection) {
                theKey.unshift(key)
            }
            for (var i = 0; i < theKey.length; i++) {
                if (!iteratee(collection[theKey[i]], theKey[i], collection) === false) {
                    break
                }
            }
        }
        return collection
    },
    /**
     * ����һ������key �� iteratee ���� collection(����) �е�ÿ��Ԫ�ط��صĽ����
     * @param  collection (Array|Object): һ�����������ļ��ϡ�
     * @param  [iteratee=_.identity] (Array|Function|Object|string): ���������������ת��key��
     * @return (Object): ����һ����ɾۺϵĶ���
     */
    groupBy: function(colle, iter) {
        debugger
        if (this.isString(iter)) {
            var fn = function(obj) {
                return obj[iter]
            }
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        var result = {}
        var theKey
        for (var key in colle) {
            theKey = fn(colle[key])
            if (theKey in result) {
                result[theKey].push(colle[key])
            } else {
                result[theKey] = [colle[key]]
            }

        }
        return result
    },
    /**
     * ��� value(ֵ) �Ƿ��� collection(����) �С���� collection(����)��һ���ַ�������ô��� value��ֵ�����ַ����� �Ƿ����ַ����У� ����ʹ�� SameValueZero ����ֵ�Ƚϡ� ���ָ�� fromIndex �Ǹ�������ô�� collection(����) �Ľ�β��ʼ������
     * @param  collection (Array|Object|string): Ҫ�����ļ��ϡ�
     * @param  value (*): Ҫ������ֵ��
     * @param  [fromIndex=0] (number): Ҫ������ ����λ�á�
     * @return (boolean): ����ҵ� value ���� true�� ���򷵻� false��
     */
    includes: function(colle, value, index) {
        var temp = []
        if (index === undefined) {
            index = 0
        }
        for (var key in colle) {
            temp.push(colle[key])
        }
        if (this.isString(colle)) {
            var onOff
            for (var i = 0; i < colle.length; i++) {
                onOff = false
                if (value[0] === colle[i]) {
                    onOff = true
                    for (var j = 1; j < value.length; j++) {
                        if (value[j] !== colle[i + j]) {
                            onOff = false
                        }
                    }
                }
                if (onOff) {
                    return true
                }
            }
        } else {
            if (index < 0) {
                index = temp.length + index
                for (var i = index; i >= 0; i--) {
                    if (temp[i] === value) {
                        return true
                    }
                }
            } else {
                for (var i = index; i < temp.length; i++) {
                    if (temp[i] === value) {
                        return true
                    }
                }
            }
        }
        return false
    },
    /**
     * ����path��·�����ϵķ������� collection(����)�е�ÿ��Ԫ�أ�����һ�����飬����ÿ�ε��÷����õ��Ľ�����κθ��ӵĲ����ṩ��ÿ�������õķ��������methodName������������һ��������ÿ�ε��ú���ʱ���ڲ��� this ָ�򼯺��е�ÿ��Ԫ�ء�
     * @param  collection (Array|Object): ���������ļ��ϡ�
     * @param  path (Array|Function|string): �������÷�����·�� �� ��ÿ�ε������õĺ�����
     * @param  [args] (...*): ����ÿ�������Ĳ�����
     * @return (Array): ���صĽ�����顣
     */
    invokeMap: function(colle, path, ...args) {
        var result = []
        if (this.isString(path)) {
            for (var key in colle) {
                result.push(colle[key][path](...args))
            }
        }
        if (this.isFunction(path)) {
            for (var key in colle) {
                result.push(path.call(colle[key], ...args))
            }
        }
        return result
    },
    /**
     * ����һ��������ɣ� key������ �� collection�����ϣ��е�ÿ��Ԫ�ؾ��� iteratee������������ ����󷵻صĽ���� ÿ�� key��������Ӧ��ֵ������key�����������һ��Ԫ�ء�iteratee����������������1��������(value)��
     * @param  collection (Array|Object): ���������ļ��ϡ�
     * @param  [iteratee=_.identity] (Array|Function|Object|string): ���������������ת��key��
     * @return (Object): ����һ����ɾۺϵĶ���
     */
    keyBy: function(colle, iter) {
        var result = {}
        if (this.isString(iter)) {
            var fn = function(obj) {
                return obj[iter]
            }
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        for (var key in colle) {
            result[fn(colle[key])] = colle[key]
        }
        return result
    },
    /**
     * �˷���������_.sortBy������������ָ�� iteratee���������������������� ���ûָ�� orders�����򣩣�����ֵ���������� ����ָ��Ϊ"desc" ���򣬻���ָ��Ϊ "asc" ���������Ӧֵ��
     * @param  collection (Array|Object): ���������ļ��ϡ�
     * @param  [iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): ����ĵ���������
     * @param  [orders] (string[]): iteratees��������������˳��
     * @return (Array): ���������������顣
     */
    orderBy: function(colle, iter, order) {
        debugger
        for (var i = iter.length - 1; i >= 0; i--) {
            if (order[i] === 'desc') {
                colle.sort(function(a, b) {
                    if (a[iter[i]] > b[iter[i]]) {
                        return -1
                    } else if (a[iter[i]] == b[iter[i]]) {
                        return 0
                    } else {
                        return 1
                    }
                })
            } else {
                colle.sort(function(a, b) {
                    if (a[iter[i]] < b[iter[i]]) {
                        return -1
                    } else if (a[iter[i]] == b[iter[i]]) {
                        return 0
                    } else {
                        return 1
                    }
                })
            }
        }
        return colle
    },
    /**
     * ����һ���ֳ������Ԫ�����飬��һ�����predicate�����Ժ���������Ϊ truthy����ֵ����Ԫ�أ��ڶ������predicate�����Ժ���������Ϊ falsey����ֵ����Ԫ�ء�predicate ����1��������(value)��
     * @param  collection (Array|Object): ���������ļ��ϡ�
     * @param  {[predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @return (Array): ����Ԫ�ط��������顣
     */
    partition: function(colle, pred) {
        var result = [
            [],
            []
        ]
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        for (var i = 0; i < colle.length; i++) {
            if (fn(colle[i])) {
                result[0].push(colle[i])
            } else {
                result[1].push(colle[i])
            }
        }
        return result
    },
    /**
     * _.filter�ķ��򷽷�;�˷��� ���� predicate�����Ժ����� �� ���� truthy����ֵ����collection�����ϣ�Ԫ�أ�������ͷע�ͣ����棩��
     * @param  collection (Array|Object): ���������ļ��ϡ�
     * @param  [predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @return (Array): ���ع��˺��������
     */
    reject: function(colle, pred) {
        var result = []
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        for (var i = 0; i < colle.length; i++) {
            if (!fn(colle[i])) {
                result.push(colle[i])
            }
        }
        return result
    },
    /**
     * ��collection�����ϣ��л��һ�����Ԫ�ء�
     * @param  collection (Array|Object): Ҫȡ���ļ��ϡ�
     * @return (*): �������Ԫ�ء�
     */
    sample: function(colle) {
        var theKey = parseInt(Math.random() * colle.length)
        return colle[theKey]
    },
    /**
     * ��collection�����ϣ��л�� n �����Ԫ�ء�
     * @param  collection (Array|Object): Ҫȡ���ļ��ϡ�
     * @param  [n=1] (number): ȡ����Ԫ�ظ�����
     * @return (Array): �������Ԫ�ء�
     */
    sampleSize: function(colle, n) {
        var result = [],
            theKey
        if (n === undefined) {
            n = 1
        }
        if (n > colle.length) {
            n = colle.length
        }
        for (var i = 0; i < n; i++) {
            theKey = parseInt(Math.random() * colle.length)
            result.push(colle[theKey])
        }
        return result
    },
    /**
     * ͨ�� predicate�����Ժ����� ���collection�����ϣ��е�Ԫ���Ƿ���� ���� truthy����ֵ����Ԫ�أ�һ�� predicate�����Ժ����� ���� truthy����ֵ����������ֹͣ�� predicate ����3��������(value, index|key, collection)��
     * @param  collection (Array|Object): ���������ļ��ϡ�
     * @param  [predicate=_.identity] (Array|Function|Object|string): ÿ�ε������õĺ�����
     * @return (boolean): �������Ԫ�ؾ� predicate ��鶼Ϊ truthy����ֵ�������� true �����򷵻� false ��
     */
    some: function(colle, pred) {
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        for (var i = 0; i < colle.length; i++) {
            if (fn(colle[i], i, colle)) {
                return true
            }
        }
        return false
    },
    /**
     * ����һ��Ԫ�����顣 �� iteratee ����Ľ���������� �������ִ���ȶ�����Ҳ����˵��ͬԪ�ػᱣ��ԭʼ���� iteratees ����1�������� (value)��
     * @param  collection (Array|Object): ���������ļ��ϡ�
     * @param [iteratees=[_.identity]] (...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])): ���������������
     * @return (Array): �������������顣
     */
    sortBy: function(colle) {
        debugger
        for (var i = 1; i < arguments.length; i++) {
            if (this.isFunction(arguments[i][0])) {
                var fn = arguments[i][0]
                colle.sort(function(a, b) {
                    if (fn(a) < fn(b)) {
                        return -1
                    } else if (fn(a) === fn(b)) {
                        return 0
                    } else {
                        return 1
                    }
                })
            }
            if (this.isArray(arguments[i])) {
                for (var k = arguments[i].length - 1; k >= 0; k--) {
                    var theValue = arguments[i]
                    colle.sort(function(a, b) {
                        if (a[theValue[k]] < b[theValue[k]]) {
                            return -1
                        } else if (a[theValue[k]] === b[theValue[k]]) {
                            return 0
                        } else {
                            return 1
                        }
                    })
                }
            }
            if (this.isString(arguments[i])) {
                var theStr = arguments[i]
                colle.sort(function(a, b) {
                    if (a[theStr] < b[theStr]) {
                        return -1
                    } else if (a[theStr] < b[theStr]) {
                        return 0
                    } else {
                        return 1
                    }
                })
            }
        }
        return colle
    },
    /**
     * �Ƴٵ���func��ֱ����ǰ��ջ������ϡ� ����ʱ���κθ��ӵĲ����ᴫ��func��
     * @param  func (Function): Ҫ�ӳٵĺ�����
     * @param  [args] (...*): ���ڵ���ʱ���� func �Ĳ���
     * @return (number):���ؼ�ʱ�� id��
     */
    defer: function(func, ...args) {

        return setTimeout(func(...args), 0);
    },
    /**
     * �ӳ� wait �������� func�� ����ʱ���κθ��ӵĲ����ᴫ��func��
     * @param  func (Function): Ҫ�ӳٵĺ�����
     * @param  wait (number): Ҫ�ӳٵĺ�������
     * @param  [args] (...*): ���ڵ���ʱ���뵽 func �Ĳ�����
     * @return (number): ���ؼ�ʱ�� id
     */
    delay: function(func, wait, ...args) {

        return setTimeout(func(...args), wait);
    },
    /**
     * ��� value ��������, ��ôǿ��תΪ���顣
     * @param  value (*): Ҫ�����ֵ��
     * @return (Array): ����ת��������顣
     */
    castArray: function(value) {
        var result = []
        if (arguments.length === 0) {
            return result
        }
        if (this.isArray(value)) {
            return value
        } else {
            result.push(value)
        }
        return result
    },
    /**
     * ����һ��������ֵ�ļ��ϡ� ʹ�� Fisher-Yates shuffle �汾��
     * @param  collection (Array|Object): Ҫ���ҵļ��ϡ�
     * @return (Array): ���ش��ҵ������顣
     */
    shuffle: function(colle) {
        var result = colle.sort(function(a, b) {
            if (Math.random() > 0.5) {
                return 1
            } else {
                return -1
            }
        })
        return result
    },
    /**
     * ͨ�����ö���source�������� object ����Ӧ����ֵ����� object�Ƿ���� source����sourceƫӦ��ʱ�����ַ����� _.conforms�����ǵȼ۵ġ�
     * @param  object (Object): Ҫ���Ķ���
     * @param  source (Object): Ҫ���������Ƿ���ϵĶ���
     * @return (boolean): ��� object ���ϣ����� true������ false��
     */
    conformsTo: function(obj, sour) {
        for (var key in obj) {
            if (key in sour) {
                if (sour[key](obj[key])) {
                    return true
                }
            }
        }
        return false
    },
    /**
     * ִ�� SameValueZero �Ƚ����ߵ�ֵ����ȷ�������Ƿ���ȡ�
     * @param  value (*): Ҫ�Ƚϵ�ֵ��
     * @param  other (*): ��һ��Ҫ�Ƚϵ�ֵ��
     * @return (boolean): �������ֵ��ȷ��� true �����򷵻� false ��
     */
    eq: function(value1, value2) {
        if (typeof value1 === 'number' && typeof value2 === 'number') {
            if (value1.toString() === 'NaN' && value2.toString() === 'NaN') {
                return true
            }
        }
        if (value1 === value2) {
            return true
        }
        return false
    },
    /**
     * ��� value�Ƿ���� other��
     * @param  value (*): Ҫ�Ƚϵ�ֵ��
     * @param  other (*): ��һ��Ҫ�Ƚϵ�ֵ��
     * @return (boolean): ���value ���� other ���� true�����򷵻� false��
     */
    gt: function(value, other) {
        if (value > other) {
            return true
        }
        return false
    },
    /**
     * ��� value�Ƿ���ڻ��ߵ��� other��
     * @param  value (*): Ҫ�Ƚϵ�ֵ��
     * @param  other (*): ��һ��Ҫ�Ƚϵ�ֵ��
     * @return (boolean): ���value ���ڻ��ߵ��� other ���� true�����򷵻� false��
     */
    gte: function(value, other) {
        if (value >= other) {
            return true
        }
        return false
    },
    /**
     * ��� value �Ƿ��� ArrayBuffer ����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ���value��һ������ buffer ���� true�����򷵻� false��
     */
    isArrayBuffer: function(value) {

        return value instanceof ArrayBuffer
    },
    /**
     * ��� value �Ƿ��������顣 ���һ��ֵ����Ϊ�������飬��ô������һ������������value.length�Ǹ����������ڵ��� 0��С�ڻ���� Number.MAX_SAFE_INTEGER��
     * @param  value (*): Ҫ����ֵ
     * @return (boolean): ���value��һ�������飬��ô���� true�����򷵻� false��
     */
    isArrayLike: function(value) {
        if (this.isFunction(value)) {
            return false
        }
        if (typeof value === 'object' || typeof value === 'string') {
            if (Math.round(value.length) === value.length && 0 <= value.length && value.length <= Number.MAX_SAFE_INTEGER) {
                return true
            }
        }
        return false
    },
    /**
     * �����������_.isArrayLike�������������value�Ƿ��Ǹ�����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ�������������ô���� true�����򷵻� false��
     */
    isArrayLikeObject: function(value) {
        if (this.isFunction(value)) {
            return false
        }
        if (typeof value === 'object') {
            if (Math.round(value.length) === value.length && 0 <= value.length && value.length <= Number.MAX_SAFE_INTEGER) {
                return true
            }
        }
        return false
    },
    /**
     * ��� value �Ƿ��ǿ����� DOM Ԫ�ء�
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ��DOMԪ�أ���ô���� true�����򷵻� false��
     */
    isElement: function(value) {
        if ('nodeType' in value) {
            if (0 < value.nodeType && value.nodeType <= 12) {
                return true
            }
        }
        return false
    },
    /**
     * ��� value �Ƿ��� Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, ���� URIError����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ������Error��������ô���� true�����򷵻� false��
     */
    isError: function(value) {

        return value instanceof Error
    },
    isInteger: function(value) {
        return parseInt(value) === value
    },
    /**
     * ��� value �Ƿ�Ϊ��Ч�������鳤�ȡ�
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ����Ч���ȣ���ô���� true�����򷵻� false��
     */
    isLength: function(value) {
        if (parseInt(value) === value) {
            if (0 <= value && value <= Number.MAX_SAFE_INTEGER) {
                return true
            }
        }
        return false
    },
    /**
     * ��� value �Ƿ�Ϊһ�� Map ����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ�� Map ������ô���� true�����򷵻� false��
     */
    isMap: function(value) {

        return value instanceof Map
    },
    /**
     * ִ��һ����ȱȽϣ���ȷ�� object �Ƿ��к� source ��ȫ��ȵ�����ֵ��
     * @param  object (Object): Ҫ���Ķ���
     * @param  source (Object): ����ֵ��ƥ��Ķ���
     * @return (boolean): ���objectƥ�䣬��ô���� true�����򷵻� false��
     */
    isMatch: function(obj, source) {
        if (source === undefined) {
            var self = this
            return function(obj) {
                for (key in obj) {
                    if (!self.isEqual(obj[key], obj[key])) {
                        return false
                    }
                }
                return true
            }
        } else {
            for (var key in source) {
                if (this.isEqual(obj[key], source[key])) {
                    return true
                }
            }
            return false
        }
    },
    /**
     * ��� value �Ƿ���һ��ԭ��������δʵ��
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value ��һ�� ԭ����������ô���� true�����򷵻� false��
     */
    isNative: function(value) {
        if (value === undefined) {
            return true
        }
        return value instanceof Function
    },
    /**
     * ��� value �Ƿ��� null ���� undefined��
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊnull �� undefined����ô���� true�����򷵻� false��
     */
    isNil: function(value) {
        if (value === undefined || value === null) {
            return true
        }
        return false
    },
    /**
     * ��� value �Ƿ��� ����� ���һ��ֵ���������ô����Ӧ���� null������ typeof ��Ľ���� "object"��
     * @param  value (*): Ҫ����ֵ��
     * @return {Boolean}       [description]
     */
    isObjectLike: function(value) {
        if (typeof value === 'object' && value !== null) {
            return true
        }
        return false
    },
    /**
     * ��� value �Ƿ�����ͨ���� Ҳ����˵�ö����� Object ���캯������������ [[Prototype]] Ϊ null ��
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ����ͨ������ô���� true�����򷵻� false��
     */
    isPlainObject: function(value) {
        if (Object.getPrototypeOf(value) === null || (value).constructor === Object) {
            return true
        }
        return false
    },
    /**
     * ��� value �Ƿ���һ����ȫ������ һ����ȫ����Ӧ���Ƿ��� IEEE-754 ��׼�ķ�˫���ȸ�������
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ����ȫ��������ô���� true�����򷵻� false��
     */
    isSafeInteger: function(value) {

        return value === parseInt(value)
    },
    /**
     * ��� value �Ƿ���һ��Set����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ�� set ������ô���� true�����򷵻� false��
     */
    isSet: function(value) {

        return value instanceof Set
    },
    /**
     * ��� value �Ƿ���ԭʼ Symbol ���߶���
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ��symbol����ô���� true�����򷵻� false��
     */
    isSymbol: function(value) {
        if (typeof value === 'symbol' || typeof value === 'object') {
            return true
        }
        return false
    },
    /**
     * ��� value �Ƿ���TypedArray��
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ��typed array����ô���� true�����򷵻� false��
     */
    isTypedArray: function(value) {
        if (value.constructor === Int8Array) {
            return true
        }
        if (value.constructor === Uint8Array) {
            return true
        }
        if (value.constructor === Uint8ClampedArray) {
            return true
        }
        if (value.constructor === Int16Array) {
            return true
        }
        if (value.constructor === Uint16Array) {
            return true
        }
        if (value.constructor === Int32Array) {
            return true
        }
        if (value.constructor === Uint32Array) {
            return true
        }
        if (value.constructor === Float32Array) {
            return true
        }
        if (value.constructor === Float64Array) {
            return true
        }
        return false
    },
    /**
     * ��� value �Ƿ��� WeakMap ����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ�� WeakMap ���� ����ô���� true�����򷵻� false��
     */
    isWeakMap: function(value) {

        return value instanceof WeakMap
    },
    /**
     * ��� value �Ƿ��� WeakSet ����
     * @param  value (*): Ҫ����ֵ��
     * @return (boolean): ��� value Ϊһ�� WeakSet ���� ����ô���� true�����򷵻� false��
     */
    isWeakSet: function(value) {

        return value instanceof WeakSet
    },
    /**
     * ��� value �Ƿ�С�� other��
     * @param  value (*): �����Ƚϵ�ֵ��
     * @param  other (*): ��һ�������Ƚϵ�ֵ��
     * @return (boolean): ���value С�ڵ��� other ���� true�����򷵻� false��
     */
    lt: function(value, other) {
        if (value < other) {
            return true
        }
        return false
    },
    /**
     * ��� value �Ƿ�С�ڵ��� other��
     * @param  value (*): �����Ƚϵ�ֵ��
     * @param  other (*): ��һ�������Ƚϵ�ֵ��
     * @return {[type]}       [description]
     */
    lte: function(value, other) {
        if (value <= other) {
            return true
        }
        return false
    },
    /**
     * ת�� value Ϊһ�����顣
     * @param  value (*): Ҫת����ֵ��
     * @return (Array): ����ת��������顣
     */
    toArray: function(value) {
        var result = []
        if (typeof value === 'object' && value !== null) {
            for (var key in value) {
                result.push(value[key])
            }
        }
        if (typeof value === 'string') {
            for (var i = 0; i < value.length; i++) {
                result.push(value[i])
            }
        }
        return result
    },
    /**
     * ת�� value Ϊһ���������֡�
     * @param  value (*): Ҫת����ֵ��
     * @return (number): ����ת��������֡�
     */
    toFinite: function(value) {
        if (isNaN(Number(value) === NaN)) {
            return "it's not a number"
        } else {
            if (Number.MIN_VALUE <= Number(value) && Number(value) <= Number.MAX_VALUE) {
                return Number(value)
            } else if (value < 0) {
                return Number.MIN_VALUE
            } else {
                return Number.MAX_VALUE
            }
        }
    },
    /**
     * ת�� value Ϊһ��������
     * @param  value (*): Ҫת����ֵ��
     * @return (number): ����ת�����������
     */
    toInteger: function(value) {
        var num = Number(value)
        if (isNaN(num === NaN)) {
            return "it's not a number"
        } else {
            if (Number.MIN_VALUE <= num && num <= Number.MAX_VALUE) {
                if (num >= 0) {
                    return Math.round(num)
                } else {
                    return 0
                }
            } else if (value < 0) {
                return 0
            } else {
                return Number.MAX_VALUE
            }
        }
    },
    /**
     * ת�� value Ϊ�������������ĳ���������
     * @param  value (*): Ҫת����ֵ��
     * @return (number): ����ת�����������
     */
    toLength: function(value) {
        var num = Number(value)
        if (isNaN(num === NaN)) {
            return "it's not a number"
        } else {
            if (0 <= num && num <= 4294967295) {
                return Math.round(num)
            } else if (value < 0) {
                return 0
            } else {
                return 4294967295
            }
        }
    },
    /**
     * ת�� value Ϊһ�����֡�
     * @param  value (*): Ҫ�����ֵ��
     * @return (number): �������֡�
     */
    toNumber: function(value) {
        if (isNaN(Number(value) === NaN)) {
            return "it's not a number"
        } else {
            return Number(value)
        }
    },
    /**
     * ת�� value Ϊ��ȫ������ ��ȫ�����������ڱȽϺ�׼ȷ�ı�ʾ��
     * @param  value (*): Ҫת����ֵ��
     * @return (number): ����ת�����������
     */
    toSafeInteger: function(value) {
        var num = Number(value)
        if (isNaN(num === NaN)) {
            return "it's not a number"
        } else if (num < -9007199254740991) {
            return -9007199254740991
        } else if (num > 9007199254740991) {
            return 9007199254740991
        } else {
            return Math.round(num)
        }
    },
    /**
     * ���� precision�����ȣ� �������� number����������ͷע�� precision�����ȣ��������Ϊ������λС������
     * @param  number (number): Ҫ���������ֵ��
     * @param  [precision=0] (number): ��������ĵľ��ȡ�
     * @return (number): �������������ֵ��
     */
    ceil: function(number, prec) {
        if (prec === undefined) {
            prec = 0
        }
        var temp = number
        var count = 0
        while (parseInt(temp) !== temp) {
            temp *= 10
            count++
        }
        var d = Math.pow(10, count - prec)
        if (parseInt(temp / d) === temp / d) {
            return number
        } else {
            temp = parseInt(temp / d) + 1
            return temp / Math.pow(10, prec)
        }
    },
    /**
     * �����������
     * @param  dividend (number): ����ĵ�һ������
     * @param  divisor (number): ����ĵڶ�������
     * @return (number): ����������
     */
    divide: function(dividend, divisor) {

        return dividend / divisor
    },
    /**
     * ���� precision�����ȣ� �������� number����������ͷע�� precision�����ȣ��������Ϊ������λС������
     * @param  number (number): Ҫ���������ֵ��
     * @param  [precision=0] (number): ��������ľ��ȡ�
     * @return (number): �������������ֵ��
     */
    floor: function(number, prec) {
        if (prec === undefined) {
            prec = 0
        }
        var temp = number
        var count = 0
        while (parseInt(temp) !== temp) {
            temp *= 10
            count++
        }
        var d = Math.pow(10, count - prec)
        temp = parseInt(temp / d)
        return temp / Math.pow(10, prec)
    },
    /**
     * ���� array �е����ֵ�� ��� array �� �յĻ��߼�ֵ���᷵�� undefined��
     * @param  array (Array): Ҫ���������顣
     * @return (*): ��������ֵ��
     */
    max: function(arr) {
        if (arr.length === 0) {
            return undefined
        }
        if (arr.length === 1) {
            return arr[0]
        }
        return arr.reduce((a, b) => a > b ? a : b)
    },
    /**
     * ����������� _.max ���������� iteratee ������ array�е�ÿһ��Ԫ�أ���������ֵ����ı�׼�� iteratee �����1������: (value) ��
     * @param  array (Array): Ҫ���������顣
     * @param  [iteratee=_.identity] (Function): ����ÿ��Ԫ�صĵ���������
     * @return (*): ��������ֵ��
     */
    maxBy: function(arr, iter) {
        if (this.isString(iter)) {
            var fn = this.property(iter)
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        return arr.reduce((a, b) => fn(a) > fn(b) ? a : b)
    },
    /**
     * ���� array ��ƽ��ֵ��
     * @param  array (Array): Ҫ���������顣
     * @return (number): ����ƽ��ֵ��
     */
    mean: function(arr) {
        if (arr.length === 0) {
            return undefined
        }
        if (arr.length === 1) {
            return arr[0]
        }
        return arr.reduce((a, b) => a + b) / arr.length
    },
    /**
     * ����������� _.mean�� ���������� iteratee ������ array�е�ÿһ��Ԫ�أ���������ֵ����ı�׼�� iteratee �����1������: (value) ��
     * @param  array (Array): Ҫ���������顣
     * @param  [iteratee=_.identity] (Function): ����ÿ��Ԫ�صĵ���������
     * @return (number): ����ƽ��ֵ��
     */
    meanBy: function(arr, iter) {
        if (this.isString(iter)) {
            var fn = this.property(iter)
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        return arr.map(a => fn(a)).reduce((a, b) => a + b) / arr.length
    },
    /**
     * ���� array �е���Сֵ�� ��� array �� �յĻ��߼�ֵ���᷵�� undefined��
     * @param  array (Array): Ҫ���������顣
     * @return (*): ������С��ֵ��
     */
    min: function(arr) {
        if (arr.length === 0) {
            return undefined
        }
        if (arr.length === 1) {
            return arr[0]
        }
        return arr.reduce((a, b) => a < b ? a : b)
    },
    /**
     * ����������� _.min ���������� iteratee ������ array�е�ÿһ��Ԫ�أ���������ֵ����ı�׼�� iteratee �����1������: (value) ��
     * @param  array (Array): Ҫ���������顣
     * @param  [iteratee=_.identity] (Function): ����ÿ��Ԫ�صĵ���������
     * @return (*): ������С��ֵ��
     */
    minBy: function(arr, iter) {
        if (this.isString(iter)) {
            var fn = this.property(iter)
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        return arr.reduce((a, b) => fn(a) < fn(b) ? a : b)
    },
    /**
     * ��������ˡ�
     * @param  augend (number): ��˵ĵ�һ������
     * @param  addend (number): ��˵ĵڶ�������
     * @return (number): ���س˻���
     */
    multiply: function(multiplier, multiplicand) {

        return multiplier * multiplicand
    },
    /**
     * ���� precision�����ȣ� �������� number��
     * @param  number (number): Ҫ������������֡�
     * @param  [precision=0] (number): ��������ľ��ȡ�
     * @return (number): ����������������֡�
     */
    round: function(number, prec) {
        if (prec === undefined) {
            prec = 0
        }
        var temp = number
        var count = 0
        while (parseInt(temp) !== temp) {
            temp *= 10
            count++
        }
        var d = Math.pow(10, count - prec)
        if (temp / d - parseInt(temp / d) < 0.5) {
            return temp = parseInt(temp / d)
            return temp / Math.pow(10, prec)
        } else {
            temp = parseInt(temp / d) + 1
            return temp / Math.pow(10, prec)
        }
    },
    /**
     * �������
     * @param  minuend (number): ����ĵ�һ������
     * @param  subtrahend (number): ����ĵڶ�������
     * @return (number): ���ز
     */
    subtract: function(minuend, subtrahend) {

        return minuend - subtrahend
    },
    /**
     * ���� array ��ֵ���ܺ�
     * @param  array (Array): Ҫ���������顣
     * @return (number): �����ܺ͡�
     */
    sum: function(array) {

        return array.reduce((a, b) => a + b)
    },
    /**
     * ����������� _.summin ���������� iteratee ������ array�е�ÿһ��Ԫ�أ���������ֵ����ı�׼�� iteratee �����1������: (value) ��
     * @param  array (Array): Ҫ���������顣
     * @param  [iteratee=_.identity] (Function): ����ÿ��Ԫ�صĵ���������
     * @return (number): �����ܺ͡�
     */
    sumBy: function(arr, iter) {
        if (this.isString(iter)) {
            var fn = this.property(iter)
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        return arr.map(a => fn(a)).reduce((a, b) => a + b)
    },
    /**
     * ���������� lower �� upper ֮���ֵ��
     * @param  number (number): �����Ƶ�ֵ��
     * @param  [lower] (number): ���ޡ�
     * @param  upper (number): ����
     * @return (number): ���ر����Ƶ�ֵ��
     */
    clamp: function(num, low, upp) {

        return num > low ? (num > upp ? upp : num) : low
    },
    /**
     * ��� n �Ƿ��� start �� end ֮�䣬�������� end�� ��� end û��ָ������ô start ����Ϊ0�� ��� start ���� end����ô�����ύ���Ա�֧�ָ���Χ��
     * @param  number (number): Ҫ����ֵ��
     * @param  [start=0] (number): ��ʼ��Χ��
     * @param  end (number): ������Χ��
     * @return (boolean): ���number�ڷ�Χ�� ����ô����true�����򷵻� false��
     */
    inRange: function(number, start, end) {
        if (end === undefined) {
            end = start
            start = 0
        }
        number = Math.abs(number)
        start = Math.abs(start)
        end = Math.abs(end)
        return start <= number && number < end ? true : false
    },
    /**
     * ����һ������ lower �� upper ֮������� ���ֻ�ṩһ����������һ��0���ṩ��֮������� ��� floating ��Ϊ true������ lower �� upper �Ǹ�������������ظ�������
     * @param  [lower=0] (number): ���ޡ�
     * @param  [upper=1] (number): ���ޡ�
     * @param  [floating] (boolean): ָ���Ƿ񷵻ظ�������
     * @return (number): �����������
     */
    random: function(low, upp, float) {
        if (float === undefined) {
            if (upp === undefined) {
                upp = low
                low = 0
                float = false
            } else if (parseInt(upp) === upp) {
                float = false
            } else if (typeof upp !== 'number') {
                float = upp
                upp = low
                low = 0
            } else {
                float = true
            }
        }
        if (low === upp) {
            return low
        } else if (low > upp) {
            var temp = low
            low = upp
            upp = temp
        }
        var num
        var sym
        do {
            num = Math.random()
            sym = Math.random() > 0.5 ? 1 : -1
            if (low >= 0) {
                sym = 1
            }
            num = num * (Math.abs(low) > Math.abs(upp) ? Math.abs(low) : Math.abs(upp)) * sym
            num = float ? num : Math.round(num)
        } while (num < low || upp <= num)
        return num
    },
    /**
     * ������Դ����Ŀ�ö�����Ե�Ŀ��������н���Ϊ undefined �������ϡ� ��Դ���������Ӧ�á� һ����������ͬ���Ե�ֵ�������Ľ������Ե���
     * @param  object (Object): Ŀ�����
     * @param  [sources] (...Object): ��Դ����
     * @return (Object): ���� object��
     */
    defaults: function(obj) {
        for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                if (key in obj) {
                    continue
                } else {
                    obj[key] = arguments[i][key]
                }
            }
        }
        return obj
    },
    /**
     * ����������� _.defaults����������ݹ����Ĭ�����ԡ�
     * @param  object (Object): Ŀ�����
     * @param  [sources] (...Object): ��Դ����
     * @return (Object): ���� object��
     */
    defaultsDeep: function(obj) {
        for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                if (key in obj) {
                    if (typeof obj[key] === 'object') {
                        this.defaults(obj[key], arguments[i][key])
                    } else {
                        continue
                    }
                } else {
                    obj[key] = arguments[i][key]
                }
            }
        }
        return obj
    },
    /**
     * ����������� _.find �� �������������ȱ� predicate �ж�Ϊ��ֵ��Ԫ�� key��������Ԫ�ر���
     * @param  object (Object): ��Ҫ�����Ķ���
     * @param  [predicate=_.identity] (Function): ÿ�ε���ʱ���õĺ�����
     * @return (*): ����ƥ��� key�����򷵻� undefined��
     */
    findKey: function(colle, pred) {
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        for (var key in colle) {
            if (fn(colle[key])) {
                return key
            }
        }
    },
    /**
     * �����������_.findKey�� �������Ƿ�����ʼ�����ġ�
     * @param  object (Object): ��Ҫ�����Ķ���
     * @param  [predicate=_.identity] (Function): ÿ�ε���ʱ���õĺ�����
     * @return (*): ����ƥ��� key�����򷵻� undefined.
     */
    findLastKey: function(colle, pred) {
        if (this.isObject(pred)) {
            var fn = this.matches(pred)
        }
        if (this.isArray(pred)) {
            var fn = this.matchesProperty(...pred)
        }
        if (this.isString(pred)) {
            var fn = this.property(pred)
        }
        if (this.isFunction(pred)) {
            var fn = pred
        }
        var keys = Object.keys(colle)
        for (var i = keys.length - 1; i >= 0; i--) {
            if (fn(colle[keys[i]])) {
                return keys[i]
            }
        }
    },
    /**
     * ����������� _.forIn�� �������Ƿ�����ʼ����object�ġ�
     * @param  object (Object): Ҫ�����Ķ���
     * @param  [iteratee=_.identity] (Function): ÿ�ε���ʱ���õĺ�����
     * @return (Object): ���� object��
     */
    forInRight: function(obj, fn) {
        var keys = []
        for (var key in obj) {
            keys.push(key)
        }
        for (var i = keys.length - 1; i >= 0; i--) {
            if (obj[keys[i]]) {
                fn(obj[keys[i]], keys[i], obj)
            } else {
                break
            }
        }
        return obj
    },
    /**
     * ����������� _.forOwn�� �������Ƿ�����ʼ����object�ġ�
     * @param  object (Object): Ҫ�����Ķ���
     * @param  [iteratee=_.identity] (Function): ÿ�ε���ʱ���õĺ�����
     * @return (Object): ���� object��
     */
    forOwnRight: function(obj, iter) {
        var keys = Object.keys(obj)
        for (var i = keys.length - 1; i >= 0; i--) {
            if (iter(obj[keys[i]], keys[i], obj) === false) {
                break
            }
        }
        return obj
    },
    /**
     * ���� iteratee n �Σ�ÿ�ε��÷��صĽ�����뵽�����С� iteratee ������1�������� (index)��
     * @param  n (number): ���� iteratee �Ĵ�����
     * @param  [iteratee=_.identity] (Function): ÿ�ε������õĺ�����
     * @return [iteratee=_.identity] (Function): ÿ�ε������õĺ�����
     */
    times: function(n, iter) {
        var result = []
        for (var i = 0; i < n; i++) {
            result.push(iter(i))
        }
        return result
    },
    /**
     * ����һ������ value �ĺ�����
     * @param  value (*): Ҫ�º������ص�ֵ��
     * @return (Function): �����µĳ���������
     */
    constant: function(value) {
        return function() {
            return value
        }
    },
    /**
     * ����һ�������������Ƶ����飬����������������object���������ö�����ԡ�
     * @param  object (Object): Ҫ���Ķ���
     * @return (Array): ���غ�������
     */
    functions: function(obj) {
        return Object.keys(obj)
    },
    functionsIn: function(obj) {
        var result = []
        for (var keys in obj) {
            result.push(keys)
        }
        return result
    },
    /**
     * ����һ�������������Ƶ����飬����������������object��������ͼ̳еĿ�ö�����ԡ�
     * @param  object (Object): Ҫ���Ķ���
     * @return (Array): ���غ�������
     */
    functionsIn: function(obj) {
        var result = []
        for (var keys in obj) {
            result.push(keys)
        }
        return result
    },
    /**
     * ���� object�����path·����ȡֵ�� ������� value �� undefined ���� defaultValue ȡ����
     * @param  object (Object): Ҫ�����Ķ���
     * @param  path (Array|string): Ҫ��ȡ���Ե�·����
     * @param  [defaultValue] (*): �������ֵ�� undefined ����ֵ�ᱻ���ء�
     * @return (*): ���ؽ�����ֵ��
     */
    get: function(obj, path, defaults) {
        var temp = [],
            start = 0,
            end = 1,
            result
        if (typeof path === 'string') {
            while (start < path.length) {
                if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
                    temp.push(path.slice(start, end))
                    end++
                    start = end
                } else if (path[end] === ']') {
                    temp.push(path.slice(start, end))
                    end += 2
                    start = end
                } else {
                    end++
                }
            }
        } else {
            temp = path
        }
        if (obj.hasOwnProperty(temp[0])) {
            result = obj[temp[0]]
        }
        for (var i = 1; i < temp.length; i++) {
            if (temp[i] in result) {
                result = result[temp[i]]
            } else {
                return defaults
            }
        }
        if (result === undefined) {
            return defaults
        }
        return result
    },
    /**
     * ����һ���̳� prototype �Ķ��� ����ṩ�� prototype�����Ŀ�ö�����Իᱻ���䵽�����Ķ����ϡ�
     * @param  prototype (Object): Ҫ�̳еĶ���
     * @param  [properties] (Object): ����������ԡ�
     * @return (Object): �����¶���
     */
    create: function(proto, prop) {
        var result = {}
        Object.setPrototypeOf(result, proto)
        if (prop) {
            for (var key in prop) {
                result[key] = prop[key]
            }
        }
        return result
    },
    /**
     * ��� path �Ƿ���object�����ֱ�����ԡ�
     * @param  object (Object): Ҫ�����Ķ���
     * @param  path (Array|string): Ҫ����·��path��
     * @return (boolean): ���path���ڣ���ô���� true �����򷵻� false��
     */
    has: function(obj, path) {
        if (this.get(obj, path, 'undefined') === 'undefined') {
            return false
        }
        return true
    },
    /**
     * ��� path �Ƿ���object�����ֱ�ӻ�̳����ԡ�
     * @param  object (Object): Ҫ�����Ķ���
     * @param  path (Array|string): Ҫ����·��path��
     * @return (boolean): ���path���ڣ���ô���� true �����򷵻� false��
     */
    hasIn: function(obj, path) {
        //debugger
        var temp = [],
            start = 0,
            end = 1
        if (typeof path === 'string') {
            while (start < path.length) {
                if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
                    temp.push(path.slice(start, end))
                    end++
                    start = end
                } else if (path[end] === ']') {
                    temp.push(path.slice(start, end))
                    end += 2
                    start = end
                } else {
                    end++
                }
            }
        } else {
            temp = path
        }
        return theIn(obj, temp, 0)

        function theIn(obj, arr, index) {
            if (index >= arr.length) {
                return true
            }
            if (arr[index] in obj) {
                return theIn(obj[arr[index]], arr, index + 1)
            } else {
                return false
            }
        }
    },
    /**
     * ����������� _.invert�����˵��ö��� �� collection�����ϣ��е�ÿ��Ԫ�ؾ��� iteratee������������ ����󷵻صĽ����ÿ����ת����Ӧ��ת��ֵ��һ���������ɷ�תֵkey�����顣
     * @param  object (Object): Ҫ��ֵ���ö���
     * @param  [iteratee=_.identity] (Function): ÿ�ε���ʱ���õĺ�����
     * @return (Object): �����µļ�ֵ���ú�Ķ���
     */
    invertBy: function(obj, iter) {
        var result = {},
            theKey
        if (iter === undefined) {
            var fn = function(obj) {
                return obj
            }
        }
        if (this.isFunction(iter)) {
            var fn = iter
        }
        for (keys in obj) {
            theKey = fn(obj[keys])
            if (!(theKey in result)) {
                result[theKey] = []
            }
            result[theKey].push(keys)
        }
        return result
    },
    /**
     * ����object����path�ϵķ�����
     * @param  object (Object): Ҫ�����Ķ���
     * @param  path (Array|string): �������õķ���·����
     * @param  [args] (...*): ���õķ����Ĳ�����
     * @return (*): ���ص��÷����Ľ����
     */
    invoke: function(obj, path, ...args) {
        //debugger
        var temp = [],
            start = 0,
            end = 1
        if (typeof path === 'string') {
            while (start < path.length) {
                if (path[end] === '.' || path[end] === '[' || path[end] === undefined) {
                    temp.push(path.slice(start, end))
                    end++
                    start = end
                } else if (path[end] === ']') {
                    temp.push(path.slice(start, end))
                    end += 2
                    start = end
                } else {
                    end++
                }
            }
        } else {
            temp = path
        }
        result = obj[temp[0]]
        for (var i = 1; i < temp.length - 1; i++) {
            result = result[temp[i]]
        }
        return result[temp[temp.length - 1]](...args)
    },










}
