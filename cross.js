function defer(f,t){t=parseInt(f.delayExecution||t);if(t){setTimeout(f,t)}else{f()}};
//

function isComplete(e){return e.readyState==='complete'};
//

var $w=window, $d=$w.document, $r=$d.documentElement;
//

(function(o){
 if(!o.w3c){
	o.checkIe=function(){
		if(!$d.Ready){
			try{$r.doScroll('left');CheckReadyness()}catch(e){defer(o.checkIe,100)}
		}
	}
 }
})(
	$w.eventModel=(function(o,p){
	 var k=(p in o);
	 function f(a,b,c,d,e){return {w3c:k,delListener:a,addListener:b,prefix:c,checkDom:d,}};
	 return k?f('removeEventListener',p,'' ,'DOMContentloaded',0):f('detachEvent','attachEvent','on','onreadyStatechange',1);
	})($d,'addEventListener')
);



(function(w,d){
	d.Ready=false;
	//
	
	var PendingExecution=[];
	//
	
	function CheckReadyness(f){
		if(!d.Ready){
			var f;
			if(d.body){
				d.Ready=true;while(f=PendingExecution.shift()){defer(f)}				
			}else{
				f=CheckReadyness;f.delayExecution*=.8;
				console.log('delayExecution:',delayExecution);
				return defer(f);
			}
		}
	};
	CheckReadyness.delayExecution=100;
	//
	
	function var ach(s){
		var o=w.eventModel,p=o[s+'Listener'],a=d[p],b=w[p],c=o.checkDom,t='load',l=o.prefix+t;
		function f(e){if(o.w3c||e.type===t||d.readyState==='complete'){detach();CheckReadyness()}}
		return function(){a(c,f,0);b(l,f,0)};
	};
	//
	
	var detach=ach('del'),attach=ach('add');
	//
	
	
	w.onDomReady=function(f){
		if(isComplete(d)){
			CheckReadyness(f);
		}else{
			console.log(d,'isNotReady');	
			PendingExecution.push(f);
			attach()
		};
		
	};

})($w,$d);

'use strict';
function Run(){console.log('itdone');};
Run.delay=250;
onDomReady(Run);
