function factorial(n){
	var p,t = n;
	if(n > 1){
		for(var i = n-1; i > 0;i--){
            p = t * i;
            t = p;
        }
        return t;
	} else {
		return n;
	}
}
factorial(7);