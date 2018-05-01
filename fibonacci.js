function fibonacci(n){
	//1 1 2 3 5 8 13 21 34 55 89
	var a = 1;
	var b = 1;
	var c = a + b;//2
	console.log(a);
	console.log(b);
	console.log(c);
	for(var i = 1; i <= n;i++){
		a = b;
		b = c;//2
		c = a + b;//3
		console.log(c);
	}	
}

fibonacci(10);