function mincost(arr)
{ 
//write your code here
// return the min cost
	let resArr = [];
	let sum = 0;
	if (arr.length > 1){
		sum = arr[0] + arr[1];
		resArr.push(sum);
	}
	
	for(let i=2; i<arr.length; i++){
		sum += res[i-2] + arr[i];
		res.push(sum);
	}

	if (resArr.length > 0){
		let ans = res.reduce((acc, curr) => acc + curr,0);
		return ans;
	}

	return arr[0];

}
module.exports=mincost;
