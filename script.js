function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length <= 1) return 0;

	arr.sort((a,b)=> a-b);
	let cost = 0;

	while(arr.length > 1){
		let a = arr.shift();
		let b = arr.shift();

		let sum = a + b;

		cost += sum;

		let idx = arr.findIndex(x => x > sum);

		if(idx === -1){
			arr.push(sum);
		}else{
			arr.splice(idx, 0, sum);
		}
	}

	return cost;

}

module.exports=mincost;
