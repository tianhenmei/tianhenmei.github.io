/****************************************************
* 1、typeof 类型区分
*****************************************************/
typeof []            // "object"
typeof {}            // "object"
typeof null          // "object"
typeof /abc/g        // "object"
typeof function(){}  // "function"
typeof undefined     // "undefined"
typeof false         // "boolean"
typeof ""            // "string"
typeof 99            // "number"
typeof NaN           // "number"
typeof Infinity      // "number"


null == undefined    // true

// 浮点数的最高精度是17位，但在进行计算时其精度远远不如整数
0.1 + 0.2            // 0.30000000000000004
Number.MIN_VALUE     // 5e-324
Number.MAX_VALUE     // 1.7976931348623157e+308
// 如果某次计算返回了正或负的Infinity值，那么该值将无法继续参与下一次的计算，因为Infinity不是能够参与计算的数值
// isFinite() 函数用于检查其参数是否是无穷大。
    // 如果 number 是有限数字（或可转换为有限数字），那么返回 true。
    // 否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。
NaN == NaN           // false
isNaN(NaN)           // true
isNaN(0)             // false
isNaN("10")          // false
isNaN("abc")         // true
isNaN(true)          // false

// 一元加操作符的操作与Number() 函数相同
Number(null)         // 0
Number(undefined)    // NaN
Number({})           // NaN
Number('')           // 0
parseInt('')         // NaN

// Object
    // Constructor 保存用于创建当前对象的函数
    // hasOwnProperty(propertyName): 用于检查给定的属性在当前对象实例中
        // （而不是在实例的原型中是否存在，其中，作为参数的属性名propertyName必须以字符串形式指定）
    // isPrototypeOf(object): 用于检查传入的对象是否是另一个对象的原型
    // propertyIsEnumerable(propertyName): 用于检查给定的属性是否能够使用for-in语句来枚举
    // toLocaleString(): 返回对象的字符串表示，该字符串与执行环境的地区对应
    // toString(): 返回对象的字符串表示
    // valueOf(): 返回对象的字符串、数值或布尔值表示，通常与toString方法的返回值相同

    // 如果未定义valueOf，则默认调用toString，如果两者都定义，则valueOf比toString优先级更高
    // 但如果这个对象是Date，则都调用toString()
    var x = {
        toString: function () { return "foo"; },
        valueOf: function () { return 42; }
    };
    alert(x); // foo
    "x=" + x; // "x=42"
    x + "=x"; // "42=x"
    x + "1"; // 421
    x + 1; // 43
    ["x=", x].join(""); // "x=foo"


/****************************************************
* 2、valueOf 与 toString 函数区分
*****************************************************/
// toString(),它的作用是返回一个反映这个对象的字符串
    // 可以看做是把一个数据转换成了相应字符串的形式
    // 值                转换为
    //                   字符串                 数字        布尔值        对象
    // undefined         "undefined"           NaN        false        throws TypeError
    // null              "null"                NaN        false        throws TypeError

    // true              "true"                1                       new Boolean(true)
    // false             "false"               0                       new Boolean(false)

    // ""(空字符串)                             0          false        new String("")
    // "1.2"(非空，数字)                        1.2         true        new String("1.2")
    // "one"(非空，非数字)                       0          true        new String("one")

    // 0                 "0"                              false        new Number(0)
    // -0                "0"                              false        new Number(-0)
    // NaN               "NaN"                            false        new Number(NaN)
    // Infinity          "Infinity"                       true         new Number(Infinity)
    // -Infinity         "-Infinity"                      true         new Number(-Infinity)
    // 1(无穷大，非零)     "1"                              true         new Number(1)

    // {}(任意对象)       "[object Object]"     NaN        true 
    // [](任意数组)       ""                    0          true
    // [9](一个数字元素)   "9"                   9          true
    // ['a'](其他数组)    使用join()方法         NaN        true
    // function(){}(任意函数)  function(){}     NaN        true

// valueOf(),它的作用是返回它相应的原始值
    // 每个JavaScript固有对象的 valueOf 方法定义不同。
    // 对象	返回值
    // Array	数组的元素被转换为字符串，这些字符串由逗号分隔，连接在一起。其操作与 Array.toString 和 Array.join 方法相同。
    // Boolean	Boolean 值。
    // Date	    存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC。
    // Function	函数本身。
    // Number	数字值。
    // Object	对象本身。这是默认情况。
    // String	字符串值。
    // Math 和 Error 对象没有 valueOf 方法。
// 一般来说，对象到字符串的转换经过了如下步骤：
// 1.如果对象具有toString()方法，则调用这个方法。如果它返回一个原始值，js将这个值转换成字符串，并返还这个字符串结果。
// 2.如果对象没有toString()方法，或者这个方法并不返回一个原始值，那么js将调用valueOf()方法。
// 3.否则，js无法从toString()或者valueOf()获得一个原始值，因此这时它将抛出一个类型错误异常。

// 一般来说，对象到数字的转换过程中，js做了同样类似的事情，但这里它会首先尝试使用valueOf()方法：
// 1.如果对象具有valueOf()方法，后者返回一个原始值，则js将这个原始值转换成数字，并返回这个数字。
// 2.否则，如果对象具有toString()方法，后者返回一个原始值，则js将转换并返回。
// （首先js转换成相应的字符串原始值，再继续将这个原始值转换成相应的数字类型，再返回数字）
// 3.否则，js抛出一个类型错误异常。

// 对象通过toString或valueOf方法转换为原始值，JS语言核心的内置类首先尝试使用valueOf()，再尝试使用toString()
var str = new String('hello,world');
console.log(typeof str); //'object'
console.log(typeof str.valueOf()); //'string'
// 对于所有非日期对象来说，对象到原始值的转换基本上是对象到数字的转换
// （首先调用valueOf,但日期对象则使用对象到字符串的转换模式，但这种转换只执行一次就立即被使用，
// 不会像上面所说的那般 先转成字符串再转成相应的数字类型）
// js中“+"运算符可以进行数学加法和字符串连接操作
// 如果他它的其中一个操作数是对象，则js将使用特殊的方法将对象转换成原始值，
// 而不是使用其他算术运算符的方法执行对象到数字的转换，”==“运算符类似
// 和”==“一样，”<"与其他运算符也会做对象到原始值的转换，但要除去日期对象的特殊情形
// “-“减号运算符把两个操作数都转换成数字


// 如果只重写了toString，对象转换时会无视valueOf的存在来进行转换。
// 如果只重写了valueOf方法，在要转换为字符串的时候会优先考虑valueOf方法。
// 在不能调用toString的情况下，只能让valueOf上阵了



// 100的阶乘
function multiply(a,b){
	var arr = a.split('').reverse(),
		brr = b.split('').reverse(),
		res = [],  // 存放乘积数组
		ces = [],  // 存放 乘积和 数组
		temp = 0,
		tens = 0,  // 十位数
		units = 0,  // 个位数
		len = 0,  // 结果最长数
		i = 0,
		j = 0,
        p = 0;
	for(i = 0; i < arr.length; i++){
		tens = 0;
		units = 0;
        res[i] = [];
        if(arr[i] == 0){
            res[i].push(0);
            continue;
        }
		for(p = 0; p < i; p++){
			res[i].push(0);
		}
		for(j = 0; j < brr.length; j++){
			temp = arr[i] * brr[j] + tens;
			tens = Math.floor(temp / 10);
			units = temp % 10;
			res[i].push(units);
		}
		if(tens > 0){
			res[i].push(tens);
		}
		if(res[i].length > len){
			len = res[i].length;
		}
    }
    // for(i = 0; i < res.length; i++){
    //     res[i] = res[i].reverse();
    // }
    tens = 0;
	for(i = 0; i < len; i++){
		temp = 0;
		for(j = 0; j < res.length; j++){
			temp += +res[j][i] || 0
		}
		temp += tens;
		tens = Math.floor(temp / 10);
        units = temp % 10;
		ces.push(units);
	}
	if(tens > 0){
        ces.push(tens);
    }
	return ces.reverse().join('');
}
function loopMultiply(arr){
	var str = arr[0] ? arr[0] + '' : '1',
		i = 0;
	for(i = 1; i < arr.length; i++){
        str = multiply(arr[i] ? arr[i] + '' : '1',str);
        console.log(str);
	}
	return str;
}
function factorial(n){
	var num = 1,
        arr = [],
        result = '';
	for(var i = 2; i <= n; i++){
		if(num >= ((2**53 - 1) / i)){
            arr.push(num);
            num = i;
        }else {
			num *= i;
        }
    }
    arr.push(num);
    result = loopMultiply(arr);
	return result;
}

factorial(100);
