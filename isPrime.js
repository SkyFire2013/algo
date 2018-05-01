function isPrime(n){
	var ctr = 0;
	for(var i = 1;i < n;i++){
       	if(n % i == 0){ctr++}
    }
	
	if(ctr > 1){
		return false;
	} else {
		return true;
	}
}