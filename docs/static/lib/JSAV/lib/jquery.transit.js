/*!
* jQuery Transit - CSS3 transitions and transformations
* (c) 2011-2012 Rico Sta. Cruz
* MIT Licensed.
*
* http://ricostacruz.com/jquery.transit
* http://github.com/rstacruz/jquery.transit
*/(function($){$.transit={version:"0.9.9",propertyMap:{marginLeft:'margin',marginRight:'margin',marginBottom:'margin',marginTop:'margin',paddingLeft:'padding',paddingRight:'padding',paddingBottom:'padding',paddingTop:'padding'},enabled:true,useTransitionEnd:true};var div=document.createElement('div');var support={};function getVendorPropertyName(prop){if(prop in div.style)return prop;var prefixes=['Moz','Webkit','O','ms'];var prop_=prop.charAt(0).toUpperCase()+prop.substr(1);if(prop in div.style){return prop;}
for(var i=0;i<prefixes.length;++i){var vendorProp=prefixes[i]+prop_;if(vendorProp in div.style){return vendorProp;}}}
function checkTransform3dSupport(){div.style[support.transform]='';div.style[support.transform]='rotateY(90deg)';return div.style[support.transform]!=='';}
var isChrome=navigator.userAgent.toLowerCase().indexOf('chrome')>-1;support.transition=getVendorPropertyName('transition');support.transitionDelay=getVendorPropertyName('transitionDelay');support.transform=getVendorPropertyName('transform');support.transformOrigin=getVendorPropertyName('transformOrigin');support.filter=getVendorPropertyName('Filter');support.transform3d=checkTransform3dSupport();var eventNames={'transition':'transitionend','MozTransition':'transitionend','OTransition':'oTransitionEnd','WebkitTransition':'webkitTransitionEnd','msTransition':'MSTransitionEnd'};var transitionEnd=support.transitionEnd=eventNames[support.transition]||null;for(var key in support){if(support.hasOwnProperty(key)&&typeof $.support[key]==='undefined'){$.support[key]=support[key];}}
div=null;$.cssEase={'_default':'ease','in':'ease-in','out':'ease-out','in-out':'ease-in-out','snap':'cubic-bezier(0,1,.5,1)','easeOutCubic':'cubic-bezier(.215,.61,.355,1)','easeInOutCubic':'cubic-bezier(.645,.045,.355,1)','easeInCirc':'cubic-bezier(.6,.04,.98,.335)','easeOutCirc':'cubic-bezier(.075,.82,.165,1)','easeInOutCirc':'cubic-bezier(.785,.135,.15,.86)','easeInExpo':'cubic-bezier(.95,.05,.795,.035)','easeOutExpo':'cubic-bezier(.19,1,.22,1)','easeInOutExpo':'cubic-bezier(1,0,0,1)','easeInQuad':'cubic-bezier(.55,.085,.68,.53)','easeOutQuad':'cubic-bezier(.25,.46,.45,.94)','easeInOutQuad':'cubic-bezier(.455,.03,.515,.955)','easeInQuart':'cubic-bezier(.895,.03,.685,.22)','easeOutQuart':'cubic-bezier(.165,.84,.44,1)','easeInOutQuart':'cubic-bezier(.77,0,.175,1)','easeInQuint':'cubic-bezier(.755,.05,.855,.06)','easeOutQuint':'cubic-bezier(.23,1,.32,1)','easeInOutQuint':'cubic-bezier(.86,0,.07,1)','easeInSine':'cubic-bezier(.47,0,.745,.715)','easeOutSine':'cubic-bezier(.39,.575,.565,1)','easeInOutSine':'cubic-bezier(.445,.05,.55,.95)','easeInBack':'cubic-bezier(.6,-.28,.735,.045)','easeOutBack':'cubic-bezier(.175, .885,.32,1.275)','easeInOutBack':'cubic-bezier(.68,-.55,.265,1.55)'};$.cssHooks['transit:transform']={get:function(elem){return $(elem).data('transform')||new Transform();},set:function(elem,v){var value=v;if(!(value instanceof Transform)){value=new Transform(value);}
if(support.transform==='WebkitTransform'&&!isChrome){elem.style[support.transform]=value.toString(true);}else{elem.style[support.transform]=value.toString();}
$(elem).data('transform',value);}};$.cssHooks.transform={set:$.cssHooks['transit:transform'].set};$.cssHooks.filter={get:function(elem){return elem.style[support.filter];},set:function(elem,value){elem.style[support.filter]=value;}};if($.fn.jquery<"1.8"){$.cssHooks.transformOrigin={get:function(elem){return elem.style[support.transformOrigin];},set:function(elem,value){elem.style[support.transformOrigin]=value;}};$.cssHooks.transition={get:function(elem){return elem.style[support.transition];},set:function(elem,value){elem.style[support.transition]=value;}};}
registerCssHook('scale');registerCssHook('translate');registerCssHook('translate3d');registerCssHook('rotate');registerCssHook('rotateX');registerCssHook('rotateY');registerCssHook('rotate3d');registerCssHook('perspective');registerCssHook('skewX');registerCssHook('skewY');registerCssHook('x',true);registerCssHook('y',true);registerCssHook('z',true);function Transform(str){if(typeof str==='string'){this.parse(str);}
return this;}
Transform.prototype={setFromString:function(prop,val){var args=(typeof val==='string')?val.split(','):(val.constructor===Array)?val:[val];args.unshift(prop);Transform.prototype.set.apply(this,args);},set:function(prop){var args=Array.prototype.slice.apply(arguments,[1]);if(this.setter[prop]){this.setter[prop].apply(this,args);}else{this[prop]=args.join(',');}},get:function(prop){if(this.getter[prop]){return this.getter[prop].apply(this);}else{return this[prop]||0;}},setter:{rotate:function(theta){this.rotate=unit(theta,'deg');},rotateX:function(theta){this.rotateX=unit(theta,'deg');},rotateY:function(theta){this.rotateY=unit(theta,'deg');},scale:function(x,y){if(y===undefined){y=x;}
this.scale=x+","+y;},skewX:function(x){this.skewX=unit(x,'deg');},skewY:function(y){this.skewY=unit(y,'deg');},perspective:function(dist){this.perspective=unit(dist,'px');},x:function(x){this.set('translate',x,null);},y:function(y){this.set('translate',null,y);},z:function(z){this.set('translate3d',null,null,z);},translate:function(x,y){this.set('translate3d',x,y,null);},translate3d:function(x,y,z){if(this._translateX===undefined){this._translateX=0;}
if(this._translateY===undefined){this._translateY=0;}
if(x!==null&&x!==undefined){this._translateX=unit(x,'px');}
if(y!==null&&y!==undefined){this._translateY=unit(y,'px');}
if(z!==null&&z!==undefined){this._translateZ=unit(z,'px');}
if(this._translateZ===undefined){delete this.translate3d;this.translate=this._translateX+","+this._translateY;}else{delete this.translate;this.translate3d=this._translateX+","+this._translateY+","+this._translateZ;}}},getter:{x:function(){return this._translateX||0;},y:function(){return this._translateY||0;},z:function(){return this._translateZ||0;},scale:function(){var s=(this.scale||"1,1").split(',');if(s[0]){s[0]=parseFloat(s[0]);}
if(s[1]){s[1]=parseFloat(s[1]);}
return(s[0]===s[1])?s[0]:s;},rotate3d:function(){var s=(this.rotate3d||"0,0,0,0deg").split(',');for(var i=0;i<=3;++i){if(s[i]){s[i]=parseFloat(s[i]);}}
if(s[3]){s[3]=unit(s[3],'deg');}
return s;}},parse:function(str){var self=this;str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(x,prop,val){self.setFromString(prop,val);});},toString:function(use3d){var re=[];for(var i in this){if(this.hasOwnProperty(i)){if((!support.transform3d)&&((i==='rotateX')||(i==='rotateY')||(i==='perspective')||(i==='transformOrigin'))){continue;}
if(i[0]!=='_'){if(use3d&&(i==='scale')){re.push(i+"3d("+this[i]+",1)");}else if(use3d&&(i==='translate')){re.push(i+"3d("+this[i]+")");}else{re.push(i+"("+this[i]+")");}}}}
return re.join(" ");}};function callOrQueue(self,queue,fn){if(queue===true){self.queue(fn);}else if(queue){self.queue(queue,fn);}else{fn();}}
function getProperties(props){var re=[];$.each(props,function(key){key=$.camelCase(key);key=$.transit.propertyMap[key]||$.cssProps[key]||key;key=uncamel(key);if(support[key])
key=uncamel(support[key]);if($.inArray(key,re)===-1){re.push(key);}});return re;}
function getTransition(properties,duration,easing,delay){var props=getProperties(properties);if($.cssEase[easing]){easing=$.cssEase[easing];}
var attribs=''+toMS(duration)+' '+easing;if(parseInt(delay,10)>0){attribs+=' '+toMS(delay);}
var transitions=[];$.each(props,function(i,name){transitions.push(name+' '+attribs);});return transitions.join(', ');}
$.fn.transition=$.fn.transit=function(properties,duration,easing,callback){var self=this;var delay=0;var queue=true;var theseProperties=jQuery.extend(true,{},properties);if(typeof duration==='function'){callback=duration;duration=undefined;}
if(typeof duration==='object'){easing=duration.easing;delay=duration.delay||0;queue=duration.queue||true;callback=duration.complete;duration=duration.duration;if($.fx.off){duration=0;}}
if(typeof easing==='function'){callback=easing;easing=undefined;}
if(typeof theseProperties.easing!=='undefined'){easing=theseProperties.easing;delete theseProperties.easing;}
if(typeof theseProperties.duration!=='undefined'){duration=theseProperties.duration;delete theseProperties.duration;}
if(typeof theseProperties.complete!=='undefined'){callback=theseProperties.complete;delete theseProperties.complete;}
if(typeof theseProperties.queue!=='undefined'){queue=theseProperties.queue;delete theseProperties.queue;}
if(typeof theseProperties.delay!=='undefined'){delay=theseProperties.delay;delete theseProperties.delay;}
if(typeof duration==='undefined'){duration=$.fx.speeds._default;}
if(typeof easing==='undefined'){easing=$.cssEase._default;}
duration=toMS(duration);var transitionValue=getTransition(theseProperties,duration,easing,delay);var work=$.transit.enabled&&support.transition;var i=work?(parseInt(duration,10)+parseInt(delay,10)):0;if(i===0){var fn=function(next){self.css(theseProperties);if(callback){callback.apply(self);}
if(next){next();}};callOrQueue(self,queue,fn);return self;}
var oldTransitions={};var run=function(nextCall){var bound=false;var called=false;var cb=function(){if(called){return;}
called=true;if(bound){self.unbind(transitionEnd,cb);}
if(i>0){self.each(function(){this.style[support.transition]=(oldTransitions[this]||null);});}
if(typeof callback==='function'){callback.apply(self);}
if(typeof nextCall==='function'){nextCall();}};if((i>0)&&(transitionEnd)&&($.transit.useTransitionEnd)){bound=true;self.bind(transitionEnd,cb);}
window.setTimeout(cb,i);self.each(function(){if(i>0){this.style[support.transition]=transitionValue;}
$(this).css(theseProperties);});};var deferredRun=function(next){this.offsetWidth;run(next);};callOrQueue(self,queue,deferredRun);return this;};function registerCssHook(prop,isPixels){if(!isPixels){$.cssNumber[prop]=true;}
$.transit.propertyMap[prop]=support.transform;$.cssHooks[prop]={get:function(elem){var t=$(elem).css('transit:transform');return t.get(prop);},set:function(elem,value){var t=$(elem).css('transit:transform');t.setFromString(prop,value);$(elem).css({'transit:transform':t});}};}
function uncamel(str){return str.replace(/([A-Z])/g,function(letter){return '-'+letter.toLowerCase();});}
function unit(i,units){if((typeof i==="string")&&(!i.match(/^[\-0-9\.]+$/))){return i;}else{return ""+i+units;}}
function toMS(duration){var i=duration;if(typeof i==='string'&&(!i.match(/^[\-0-9\.]+/))){i=$.fx.speeds[i]||$.fx.speeds._default;}
return unit(i,'ms');}
$.transit.getTransitionValue=getTransition;})(jQuery);