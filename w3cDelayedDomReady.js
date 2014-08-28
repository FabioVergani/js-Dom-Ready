
var $w=window, $d=$w.document, $r=$d.documentElement;
//

function defer(f,t){t=parseInt(f.delayExecution||t);if(t){setTimeout(f,t)}else{f()}};
function deferEach(m){var f;while(f=m.shift()){defer(f)}};

//
function isReady(e){return e.domReady||/^loaded|^c/.test(e.readyState)};

//
(function(w,d,n){

	function g(i){d.ReadyAt=i;deferEach(Q);w[n]=null};
	var Q=function(s){
		var p=s+'EventListener',a=d[p],b=w[p],
		c=function(f,a,b,i){f(b,function(){a(b,i)})},
		f=function(i){d.domReady=1;g(i)};
		return function(){c(a,f,'DOMContentloaded',1);c(b,f,'load',2)};
	};
	var A=Q('add'),B=Q('del');	
	Q=(w[n]=function(f){if(isReady(d)){g(0)}else{Q.push(f);A(B)}}).m=[];//PendingExecution
	
})($w,$d,'onDomReady');




console.dir(window.onDomReady);
console.log('d.domReady:',document.domReady)
//
var executionCalls=0;
function firsttest(){console.log('ReadyAt:',document.ReadyAt);test()};
function test(s){console.log('executionCalls:', executionCalls++,s)};
function test1(){test('delay:'+test1.delayExecution)};test1.delayExecution=500;
function test2(){test('delay:'+test2.delayExecution)};test2.delayExecution=1000;
function lasttest(){console.log('d.domReady:',document.domReady);test()};
//
onDomReady(firsttest);
onDomReady(test2);
onDomReady(test1);

onDomReady(lasttest);

