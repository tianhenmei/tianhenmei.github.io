// 100的阶乘
function multiply(a,b){
	var arr = a.split('').reverse(),
		brr = b.split('').reverse(),
		res = [],  // 存放 乘积 数组
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
		// 如果当前为0，则乘积为0，直接放置0
        if(arr[i] == 0){
            res[i].push(0);
            continue;
		}
		// 当前第i位相乘时，应该将前i位都置为0
		for(p = 0; p < i; p++){
			res[i].push(0);
		}
		// 挨个相乘
		for(j = 0; j < brr.length; j++){
			temp = arr[i] * brr[j] + tens;  // 当前结果+上次的进位
			tens = Math.floor(temp / 10);  // 这次进位
			units = temp % 10;  // 当前结果
			res[i].push(units);
		}
		if(tens > 0){  // 如果最后一位相乘还有值，则将进位也放入数组中
			res[i].push(tens);
		}
		if(res[i].length > len){  // 保存结果中最长的数组长度
			len = res[i].length;
		}
    }
    // for(i = 0; i < res.length; i++){
    //     res[i] = res[i].reverse();
	// }
	// 循环乘积数组，将结果加起来
    tens = 0;
	for(i = 0; i < len; i++){
		temp = 0;
		// 按列相加，没有值取0
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
	var max = 2**53 - 1,	
		num = 1,
        arr = [],
        result = '';
	for(var i = 2; i <= n; i++){
		if(num >= (max / i)){
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