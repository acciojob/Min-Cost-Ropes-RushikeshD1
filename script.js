function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length < 2){
		return arr[0];
	}
	
	arr.sort((a,b)=> a-b);
	// 2 3 4 6
	// 0 1 2 3
	let sum = arr[0] + arr[1] // 5 + 9 + 15

	for(let i=2; i<arr.length; i++){// 4
		let ans = 0 // 9
		ans = sum + arr[i];
		sum += ans
	}

	return sum;
  
}

module.exports=mincost;
