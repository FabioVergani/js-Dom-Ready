(function($w){'use strict';
 function at(e,s,h,b){e.addEventListener(s,function f(x){var o=x,e=o.target,s=o.type;h(e,s,o);e.removeEventListener(s,f);},b);}//e,s,o > e:element,s:evt-tipe,o:evt-object,Boolean(b)
 //
 function swapclass(x,a,b){var c=x.classList;c.remove.apply(c,a);c.add.apply(c,b);return c;}
 function swaprootclass(a,b){var c=nodesroot;return swapclass(c,a,b);}
 //-
 function R(e,s){//ready

	function L(e){//complete
	 swaprootclass(['ready'],['loaded']);
	 w.loaded=true;
	}

	var o=e, d=(o.ownerDocument||o), w=d.defaultView;

	/*
	$id=d.getElementById.bind(d),
	$tags=d.getElementsByTagName.bind(d),// .querySelector querySelectorAll getElementsByClassName
	Body=d.body||$tags('body')[0],
	O=w.Object,RawObj=O.create.bind(null,null),
	console.dir(s);
	*/
	swaprootclass(['ready-no'],['ready']);
	if(s===1){L(o);}else{at(w,'load',L);};
 };
 //-
 var undefined, w=$w, d=w.document, rs=d.readyState,
 nodesroot=d.documentElement;
 //-
 swaprootclass(['js-no'],['js','ready-no']);
 //-
 if(rs==='complete'){R(w,1);}else{at(w,rs==='interactive'?'load':'DOMContentLoaded',R);};
})(window);
//END.








