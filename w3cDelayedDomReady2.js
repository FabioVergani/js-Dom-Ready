var $w=window, $d=$w.document, $r=$d.documentElement;
//

function defer(f,t){t=parseInt(f.delayExecution||t);if(t){setTimeout(f,t)}else{f()}};
function deferEach(m){var f;while(f=m.shift()){defer(f)}};
//

(function(w,d,n,k,z){
 function g(i){d.ReadyAt=i;deferEach(q);w[n]=null};
 var t=w[z]=function(e){return e[k]||/^loaded|^c/.test(e.readyState)},q=function(s){var p=s+'EventListener',a=d[p],b=w[p],c=function(f,a,b,i){f(b,function(){a(b,i)})},f=function(i){d[k]=true;g(i)};return function(){c(a,f,'DOMContentloaded',1);c(b,f,'load',2)}},a=q('add'),b=q('del');	
 q=(w[n]=function(f){if(t(d)){g(0)}else{q.push(f);a(b)}}).m=[/*PendingExecution*/];
})($w,$d,'onDomReady','domReady','isReady');//bonus:window.isReady(anotherdocument)
//








console.log('d.domReady:',document.domReady)
//
var executionCalls=0;
function firsttest(){console.log('ReadyAt:',document.ReadyAt);test()};
function test(s){console.log('executionCalls:', executionCalls++,s||'')};
function test1(){test('delay:'+test1.delayExecution)};
test1.delayExecution=500;
function test2(){test('delay:'+test2.delayExecution);console.dir(window);console.dir(document)};
test2.delayExecution=1000;
function lasttest(){console.log('d.domReady:',document.domReady);test()};
//
onDomReady(firsttest);
onDomReady(test2);
onDomReady(test1);

onDomReady(lasttest);
