(function(w){
	function f(e){
		function g(e){
			var d=e.target;
			r('load',g);
			//console.warn(666);
			//console.dir(e);
		}
		var d=e.target,r=w.removeEventListener;
		r('DOMContentLoaded',f);
		//d.getElementById('page').className='js';
		if(d.readyState!=='complete'){a('load',g)}else{g({target:d})}
	}
	var a=w.addEventListener;
	a('DOMContentLoaded',f);
})(window);
