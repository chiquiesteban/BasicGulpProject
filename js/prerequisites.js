require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window._=require("lodash"),window.$=window.jQuery=require("jquery"),window.Pestle=require("pestle"),window.NGS={platform:function(){return new Pestle.Core({debug:{logLevel:0}})}()},window.NGS.platform.Taxonomy=require("../components/Taxonomy/Taxonomy.coffee"),window.NGS.platform.AdSlot=require("../components/AdSlot/AdSlot.coffee"),window.NGS.platform.image=require("../components/general/Image/Image.coffee"),window.NGS.platform.interactive=require("../components/Interactive/Interactive.coffee"),require("./GlobalNav.coffee"),require("../components/social/horizon/ActivitySnippet/ActivitySnippet.coffee"),require("../components/UniversalVideo/UniversalVideo.coffee"),require("../components/MapMarker/MapMarker.coffee"),require("../components/MostPopular/MostPopular.js"),require("../components/genericSlider/GenericSlider/GenericSlider.coffee"),require("../components/social/AddThis/AddThis.coffee"),window.NGS.platform.addExtension(NGS.platform.Taxonomy),window.NGS.platform.addExtension(NGS.platform.AdSlot);
},{"../components/AdSlot/AdSlot.coffee":2,"../components/Interactive/Interactive.coffee":3,"../components/MapMarker/MapMarker.coffee":4,"../components/MostPopular/MostPopular.js":5,"../components/Taxonomy/Taxonomy.coffee":8,"../components/UniversalVideo/UniversalVideo.coffee":9,"../components/general/Image/Image.coffee":10,"../components/genericSlider/GenericSlider/GenericSlider.coffee":11,"../components/social/AddThis/AddThis.coffee":17,"../components/social/horizon/ActivitySnippet/ActivitySnippet.coffee":18,"./GlobalNav.coffee":20,"jquery":"jquery","lodash":"lodash","pestle":24}],2:[function(require,module,exports){
var tax;window._=require("lodash"),window.Pestle=require("pestle"),require("../Taxonomy/Taxonomy.coffee"),tax=void 0,module.exports={name:"AdSlot",optionKey:"adSlot",isLoaded:!1,elementInViewport:function(t){return!!t==!1?null:NGS.platform.sandbox.vp.inViewport(t)?"ATF":"BTF"},initialize:function(t){var e;return null==(e=NGS.platform).AdSlot&&(e.AdSlot={}),this.init(t)},init:function(t){var e,o,n,a,i;if(t.sandbox.log.info("AdSlot is loaded"),!this.isLoaded){for(tax=NGS.platform.Taxonomy.data,n=[tax.locations,tax.series,tax.genres,tax.people,tax.organizations,tax.events,tax.concepts,tax.audiences],o=0,e=[];o<n.length;)void 0!==n[o]&&""!==n[o]&&(e.push(n[o]),o++);this.options.setTargeting={s1:tax.source,s2:tax.firstSubjectAncestor,s3:tax.firstSubject,kw:tax.adKeywords,breakpoint:NGS.platform.sandbox.rwd(),category:tax.otherSubjects,metadata:function(){return _.flatten(e)}()},i=void 0,(a=function(t){return function(){var e;return e=document.getElementById("ad-1"),e?(i=t.elementInViewport(e),t.options.setTargeting.metadata.push(i)):setTimeout(a,100)}}(this))(),this.isLoaded=!0}},options:{dfpID:function(){var t,e;e=void 0;try{if(e=parseInt(document.querySelector('meta[name="dfp:networkCode"]').content,10),null!=e)return e}catch(o){t=o,console.log("df:networkCode meta tag missing")}}(),enableSingleRequest:!0,setUrlTargeting:!0,setTargeting:null}};
},{"../Taxonomy/Taxonomy.coffee":8,"lodash":"lodash","pestle":24}],3:[function(require,module,exports){
window.$=require("jquery"),module.exports={init:function(){return console.log("interactive js loaded!")}};
},{"jquery":"jquery"}],4:[function(require,module,exports){
var cachedGetScript;window.$=window.jQuery=require("jquery"),window.Pestle=require("pestle"),cachedGetScript=require("../../scripts/CachedScript.coffee"),Pestle.Module.add("MapMarker",{isLoaded:!1,init:function(){var i,t,e,o,a,n,r,s,p,d,c,l,m,h,u,v,g;if(i=this.options.apitoken,h=this.options.points,r=this.options.objectid,n=this.options.icon,p=this.options.mapid,e=this.options.centerlat,o=this.options.centerlong,u=this.options.zoom,""!==p&&""!==i){for(L.mapbox.accessToken=i,s=L.mapbox.map(r,p),t={},v=0,g=h.length;g>v;v++)m=h[v],t.longitude=m.longitude,t.latitude=m.latitude,c={title:m.title},d=L.marker([m.latitude,m.longitude],c),(void 0!==n&&""!==n||void 0!==m.leadImageUrl&&""!==m.leadImageUrl)&&(l=L.icon({iconUrl:void 0!==n&&""!==n?n:m.leadImageUrl,iconSize:[50,50],iconAnchor:[25,50],popupAnchor:[0,-50],className:"PinNatGeo"}),d.setIcon(l)),a='<div class="mapcomponent-tooltip-"><div class=" mapcomponent-tooltip-left"><a href="'+m.path+'.html"><div class="mapcomponent-img-container"><div class="mapcomponent-img-innercontainer"><img src="'+m.leadImageUrl+'"/></a></div></div></div><div class="mapcomponent-tooltip-right"><a href="'+m.path+'.html"><h2>'+m.title+'</h2></a><a class="mapcomponent-tooltip-moreabout" href="'+m.path+'.html">More</a></div></div>',d.bindPopup(a),d.addTo(s);return s.setView([t.latitude,t.longitude],u),this.isLoaded=!0}},initialize:function(){var i,t;return i=this.sandbox.log,i.info("MapMarker initialized"),t=this,cachedGetScript.getScript("/etc/designs/platform/v1/vendor/mapbox.js/mapbox.js").then(function(){return t.init()})}});
},{"../../scripts/CachedScript.coffee":19,"jquery":"jquery","pestle":24}],5:[function(require,module,exports){
require("es5-shim"),window._=require("lodash"),window.$=window.jQuery=require("jquery"),window.React=require("react"),window.Pestle=require("pestle");var MostPopular=require("./MostPopular.jsx");Pestle.Module.add("MostPopular",{isLoaded:!1,initialize:function(){if(!this.isLoaded){var e={showKeyword:!0,showDescription:this.options.showabstract,showImage:this.options.showimage};return React.render(React.createElement(MostPopular,{heading:this.options.heading,groupId:this.options.guid,addons:e,maxResults:Number(this.options.maxresults),timeInterval:this.options.timeinterval,showMoreAt:Number(this.options.mobileinitialcount)||2,endPoint:this.options.endpoint,site:this.options.site}),this.el),this.isLoaded=!0,this.sandbox.log.info("MostPopular js loaded:",this.el)}}}),module.exports=MostPopular;
},{"./MostPopular.jsx":6,"es5-shim":21,"jquery":"jquery","lodash":"lodash","pestle":24,"react":170}],6:[function(require,module,exports){
require("es5-shim"),window.$=require("jquery");var React=require("react"),Pestle=require("pestle"),Spinner=require("../Spinner/Spinner.jsx"),MostPopularItemImage=React.createClass({displayName:"MostPopularItemImage",render:function(){return React.createElement("a",{href:this.props.link,className:"popularitem-imagelink"},React.createElement("div",{className:"popularitem-imagepreview"},this.props.src?React.createElement("div",{className:"delayed-image-load","data-src":this.props.src+"/{width}/{pixel_ratio}"}):React.createElement("i",{className:"icongs icongs-border gn_text--highlight"})))}}),MostPopularListItem=React.createClass({displayName:"MostPopularListItem",propTypes:{groupId:React.PropTypes.string,showDescription:React.PropTypes.bool,showImage:React.PropTypes.bool,title:React.PropTypes.string.isRequired,link:React.PropTypes.string.isRequired,image:React.PropTypes.string,description:React.PropTypes.string,keyword:React.PropTypes.string,hideFromMobile:React.PropTypes.bool},getInitialProps:function(){return{hideFromMobile:!1}},getInitialState:function(){return{showHiddenItems:!1}},componentDidMount:function(){$(document).on(this.props.groupId+".showMore",function(){this.setState({showHiddenItems:!0})}.bind(this)),$(document).on(this.props.groupId+".showLess",function(){this.setState({showHiddenItems:!1})}.bind(this)),Pestle.emit("responsiveimages:create")},render:function(){var e="popularitem ";return e+=this.props.hideFromMobile&&1!=this.state.showHiddenItems?"hide-from-mobile":"",React.createElement("li",{className:e},this.props.showImage?React.createElement(MostPopularItemImage,{key:this.props.keyword,link:"//"+this.props.link,src:this.props.image}):React.createElement("div",null),React.createElement("h4",{className:"popularitem-title fade fade-one-lines"},React.createElement("a",{href:"//"+this.props.link,className:"popularitem-link"},this.props.title)),this.props.showDescription?React.createElement("p",{className:"popularitem-description fade fade-three-lines"},this.props.description):React.createElement("p",null))}}),MostPopularMoreButton=React.createClass({displayName:"MostPopularMoreButton",propTypes:{groupId:React.PropTypes.string},getInitialState:function(){return{showMore:!0}},handleClickMoreButton:function(){this.state.showMore?($(this.refs.showMoreBtn.getDOMNode()).trigger(this.props.groupId+".showMore"),this.setState({showMore:!1})):($(this.refs.showMoreBtn.getDOMNode()).trigger(this.props.groupId+".showLess"),this.setState({showMore:!0}))},render:function(){return React.createElement("button",{ref:"showMoreBtn",className:"mostpopular-component-showmore",onClick:this.handleClickMoreButton},"Show ",this.state.showMore?"More":"Less")}}),MostPopular=React.createClass({displayName:"MostPopular",propTypes:{heading:React.PropTypes.string.isRequired,groupId:React.PropTypes.string.isRequired,addons:React.PropTypes.object,endPoint:React.PropTypes.string.isRequired,showMoreAt:React.PropTypes.number,maxResults:React.PropTypes.number,timeInterval:React.PropTypes.string.isRequired},getInitialState:function(){return{mostPopularData:[],isLoading:!0}},componentDidMount:function(){if(this.props.timeInterval&&this.props.site){var e=this.props.endPoint+"?"+$.param({maxResults:this.props.maxResults,timeInterval:this.props.timeInterval,site:this.props.site});this.fetchData(e)}},fetchData:function(e){return $.getJSON(e,function(e){var t=0;this.setState({isLoading:!1,mostPopularData:_.map(e,function(e){return{itemKey:t++,description:e["ga:dimension6"],image:e["ga:dimension7"],title:e["ga:pageTitle"],link:e["ga:pagePath"],keyword:e["ga:keyword"]}})})}.bind(this)).fail(function(){throw this.setState({isLoading:!1}),new Error("MostPopular component fetchData "+e+" not found.")}.bind(this))},render:function(){return React.createElement("div",{className:"mostpopular-component"},React.createElement("h3",{className:"mostpopular-component-title"},this.props.heading),React.createElement(Spinner,{showContentWhen:!this.state.isLoading},React.createElement("ul",{id:"mpcontent",className:"mostpopular-component-content"},this.state.mostPopularData.map(_.bind(function(e){return React.createElement(MostPopularListItem,{groupId:this.props.groupId,showDescription:Boolean(this.props.addons.showDescription),showImage:Boolean(this.props.addons.showImage),hideFromMobile:e.itemKey>=this.props.showMoreAt?!0:!1,key:e.itemKey,title:e.title,image:e.image,description:e.description,keyword:e.keyword,link:e.link})},this)),this.state.mostPopularData.length>this.props.showMoreAt?React.createElement(MostPopularMoreButton,{groupId:this.props.groupId}):React.createElement("div",null))))}});module.exports=MostPopular;
},{"../Spinner/Spinner.jsx":7,"es5-shim":21,"jquery":"jquery","pestle":24,"react":170}],7:[function(require,module,exports){
require("es5-shim");var React=require("react"),Spinner=React.createClass({displayName:"Spinner",propTypes:{showContentWhen:React.PropTypes.bool.isRequired},render:function(){return this.props.showContentWhen?React.createElement("div",{key:"content"},this.props.children):React.createElement("div",{className:"spinner-container"},React.createElement("div",{className:"spinner-animation"}))}});module.exports=Spinner;
},{"es5-shim":21,"react":170}],8:[function(require,module,exports){
"use strict";var Taxonomy;window.$=require("jquery"),Taxonomy={name:"Taxonomy",optionKey:"taxonomy",isLoaded:!1,initialize:function(o){return this.init(o)},init:function(o){var n;return n=document.querySelectorAll('meta[name^="tax:"]'),o.sandbox.log.info("Taxonomy js loaded"),NGS.platform.Taxonomy.data=_.object(_.map(n,function(o){var n,e,t,i,a;return i=o.name.toString().split(":")[1],n=o.content.trim(),t=["adKeywords","otherSubjects","locations","series","genres","people","organizations","events","concepts","audiences"],e=_.indexOf(t,i),-1!==e&&(a=n,n=[],_.forEach(a.split(","),function(o){return n.push(o.trim())})),[i,n]})),this.isLoaded=!0}},module.exports=Taxonomy;
},{"jquery":"jquery"}],9:[function(require,module,exports){
var Pestle;window._=require("lodash"),window.$=require("jquery"),Pestle=require("pestle"),window.ngsPlayer=require("modules-video"),window.ngsPlayerConfig={autoload:!1},NGS.modules={video:{pageConfig:{autoload:!1}}},Pestle.Module.add("UniversalVideo",{createPlayer:function(e){return e.guid=e.videoguid,ngsPlayer.init(e)},initialize:function(){return $(document).ready(function(e){return function(){return e.createPlayer(e.options),e.sandbox.log.info("UniversalVideo component initialized:")}}(this))}});
},{"jquery":"jquery","lodash":"lodash","modules-video":23,"pestle":24}],10:[function(require,module,exports){
window.$=require("jquery"),module.exports={init:function(){return console.log("imageextended js loaded")}};
},{"jquery":"jquery"}],11:[function(require,module,exports){
var FullScreenMode,Pestle,ReadMoreButton,cachedGetScript;window.$=require("jquery"),Pestle=require("pestle"),FullScreenMode=require("./plugins/fullscreenmode/plugins.fullscreenbtn.coffee"),ReadMoreButton=require("./plugins/readmorebutton/plugins.readmorebtn.coffee"),cachedGetScript=require("../../../scripts/CachedScript.coffee"),Pestle.Module.add("GenericSlider",{isLoaded:!1,init:function(){var e,t;return e=[],t={items:this.options.items,autoplay:this.options.autoplay,autoplayTimeout:this.options.autoplayTimeout,autoplayHoverPause:this.options.autoplayHoverPause,loop:this.options.loop,dots:this.options.dots,mouseDrag:this.options.mousedrag,touchDrag:this.options.touchdrag,pullDrag:this.options.pulldrag},null!=this.options.plugins&&(t=$.extend(t,this.options.plugins)),e[this.options.id]=$("#"+this.options.id+" .slider-content").owlCarousel(t),$("#"+this.options.id+" .slider-prev").on("click",function(t){return function(o){return o.preventDefault(),e[t.options.id].trigger("prev.owl.carousel")}}(this)),$("#"+this.options.id+" .slider-next").on("click",function(t){return function(o){return o.preventDefault(),e[t.options.id].trigger("next.owl.carousel")}}(this)),this.isLoaded=!0},initialize:function(){var e,t;return e=this.sandbox.log,e.info("GenericSlider initialized"),t=this,cachedGetScript.getScript("/etc/designs/platform/v1/vendor/owl.carousel/dist/owl.carousel.min.js").then(function(){return $.fn.owlCarousel.Constructor.Plugins.FullScreenMode=FullScreenMode,$.fn.owlCarousel.Constructor.Plugins.ReadMoreButton=ReadMoreButton,t.init()})}});
},{"../../../scripts/CachedScript.coffee":19,"./plugins/fullscreenmode/plugins.fullscreenbtn.coffee":12,"./plugins/readmorebutton/plugins.readmorebtn.coffee":15,"jquery":"jquery","pestle":24}],12:[function(require,module,exports){
var FullScreenMode,button,frame;frame=require("./templates/fullscreen-frame.tpl"),button=require("./templates/fullscreenbtn.tpl"),FullScreenMode=function(e){return this.owl=e,this.owl.options=$.extend({},FullScreenMode.Defaults,this.owl.options),this.owl.$element=this.owl.dom.$el,this.handlers={"refresh.owl.carousel changed.owl.carousel":$.proxy(function(){return this.owl.settings.fullScreenMode?this.hideFullscreenBtn():void 0},this),"initialized.owl.carousel":$.proxy(function(){return this.owl.settings.fullScreenMode?this.render():void 0},this)},this.owl.$element.on(this.handlers),$(document).on("keyup",$.proxy(function(e){return null!=e&&e.preventDefault(),27===e.keyCode&&$("body").hasClass("fullscreenmode--active")?this.exitFullscreen():void 0},this))},FullScreenMode.Defaults={fullScreenMode:!1,imageSlideSelector:"image"},FullScreenMode.prototype.render=function(){var e;return this.owl.$element.prepend(button()),this.hideFullscreenBtn(),e=this.owl.$element.find(".fullscreen-toggle"),e.on("click",$.proxy(function(e){return this.toggleFullscreen(e)},this))},FullScreenMode.prototype.hideFullscreenBtn=function(){var e,l;return e=this.owl.dom.$stage.find(".active ."+this.owl.settings.imageSlideSelector),l=this.owl.dom.$stage.closest(".slider-content").children(".btn-fullscreen"),e.length?l.show():l.hide()},FullScreenMode.prototype.enterFullscreen=function(){var e,l,t,n,r,o,s,i,c,u,d;return e=$("body"),t=this.owl.dom.$stage.find(".active .slide"),i=t.find("img"),u=i.attr("src"),n=i.attr("alt"),l=this.owl.dom.$stage.find(".active .slider-caption"),d=l.find(".slider-text1").text(),r=l.find(".slider-text2").text(),e.prepend(frame({tileImage:u,altText:n,caption:d,credit:r,hasCredits:d||r})),e.addClass("fullscreenmode--active"),$("body").on("click",".fullscreen-toggle",$.proxy(function(e){return this.toggleFullscreen(e)},this)),o=window.document,s=o.documentElement,c=s.requestFullscreen||s.mozRequestFullScreen||s.webkitRequestFullScreen||s.msRequestFullscreen,c.call(s)},FullScreenMode.prototype.exitFullscreen=function(){return $("body").removeClass("fullscreenmode--active"),$(".fullscreen--photo").remove(),this.cancelFullscreen()},FullScreenMode.prototype.toggleFullscreen=function(e){return this.isFullScreenActivated()?this.exitFullscreen():this.enterFullscreen(),null!=e?e.preventDefault():void 0},FullScreenMode.prototype.isFullScreenActivated=function(){var e,l;return e=window.document,l=e.isFullScreen||e.webkitIsFullScreen||e.mozFullScreen||e.msIsFullScreen},FullScreenMode.prototype.cancelFullscreen=function(){var e,l,t;return l=window.document,t=l.documentElement,$("body").off("click",".fullscreen-toggle"),e=l.exitFullscreen||l.mozCancelFullScreen||l.webkitExitFullscreen||l.msExitFullscreen,e.call(l)},FullScreenMode.prototype.destroy=function(){var e,l,t,n;for(n=this.handlers,l=0,t=n.length;t>l;l++)e=n[l],this.owl.dom.$el.off(e,this.handlers[e]);return $("body").off("click",".fullscreen-toggle"),$(document).off("keyup")},module.exports=FullScreenMode;
},{"./templates/fullscreen-frame.tpl":13,"./templates/fullscreenbtn.tpl":14}],13:[function(require,module,exports){
var _=require("underscore");module.exports=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="fullscreenmode fullscreen--photo"><a href="#" class="fullscreen-toggle btn-fullscreen exit-fullscreen"></a><div class="fullscreenphoto-container"><div class="fullscreenphoto-imagecontainer"><img src="'+(null==(__t=tileImage)?"":__t)+'" alt="'+(null==(__t=altText)?"":__t)+'" class="fullscreenphoto-img"></div>',"undefined"!=typeof hasCredits&&(__p+='<div class="fullscreenphoto-caption">',"undefined"!=typeof caption&&(__p+='<h2 class="fullscreenphoto-title">'+(null==(__t=caption)?"":__t)+"</h2>"),__p+="","undefined"!=typeof credit&&(__p+='<p class="fullscreenphoto-subtitle">'+(null==(__t=credit)?"":__t)+"</p>"),__p+="</div>"),__p+="</div></div>";return __p};
},{"underscore":171}],14:[function(require,module,exports){
var _=require("underscore");module.exports=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<a href="#" class="fullscreen-toggle btn-fullscreen"></a>';return __p};
},{"underscore":171}],15:[function(require,module,exports){
var ReadMoreButton,readmorebtn;readmorebtn=require("./templates/readmorebtn.tpl"),ReadMoreButton=function(e){return this.owl=e,this.owl.options=$.extend({},ReadMoreButton.Defaults,this.owl.options),this.owl.$element=this.owl.dom.$el,this.handlers={"refresh.owl.carousel changed.owl.carousel":$.proxy(function(){return this.owl.settings.readMoreButton?this.update():void 0},this),"initialized.owl.carousel":$.proxy(function(){return this.owl.settings.readMoreButton?this.render():void 0},this)},this.owl.$element.on(this.handlers)},ReadMoreButton.Defaults={readMoreButton:!1,pageSlideSelector:"page",readMoreButtonText:"Learn More"},ReadMoreButton.prototype.render=function(){var e;return e=readmorebtn({caption:this.owl.settings.readMoreButtonText}),this.owl.$element.find(".slider-caption .slider-text2").append(e),this.update()},ReadMoreButton.prototype.update=function(){var e,t;return e=this.owl.dom.$stage.find(".active ."+this.owl.settings.pageSlideSelector),t=this.owl.dom.$stage.find(".btn-readmore"),e.length?(t.attr("href",e.data("url")),t.show()):t.hide()},ReadMoreButton.prototype.destroy=function(){var e,t,o,r,n;for(r=this.handlers,n=[],t=0,o=r.length;o>t;t++)e=r[t],n.push(this.owl.dom.$el.off(e,this.handlers[e]));return n},module.exports=ReadMoreButton;
},{"./templates/readmorebtn.tpl":16}],16:[function(require,module,exports){
var _=require("underscore");module.exports=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<a href="#" class="btn-readmore">'+(null==(__t=caption)?"":__t)+"</a>";return __p};
},{"underscore":171}],17:[function(require,module,exports){
var Pestle;window.$=require("jquery"),Pestle=require("pestle"),Pestle.Module.add("AddThis",{isLoaded:!1,initialize:function(){var d;return window.addthis_config={data_track_addressbar:!1},d=this,$.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid=ng-dmg",function(){var i;return window.addthis.addEventListener("addthis.ready",i=function(){d.sandbox.log.info("AddThis is loaded"),d.isLoaded=!0})})}});
},{"jquery":"jquery","pestle":24}],18:[function(require,module,exports){
window.$=window.jQuery=require("jquery"),window.Pestle=require("pestle"),Pestle.Module.add("ActivitySnippet",{isLoaded:!1,initialize:function(){var i;return i=this,this.isLoaded?void 0:(console.log("ActivitySnippet js loaded"),this.isLoaded=!0)}});
},{"jquery":"jquery","pestle":24}],19:[function(require,module,exports){
window.$=require("jquery"),window.cachedScriptPromises=window.cachedScriptPromises||{},module.exports={getScript:function(e,r){return cachedScriptPromises[e]||(cachedScriptPromises[e]=$.Deferred(function(r){return $.getScript(e).then(r.resolve,r.reject)}).promise()),cachedScriptPromises[e].done(r)}};
},{"jquery":"jquery"}],20:[function(require,module,exports){
var Pestle,cachedGetScript;window.$=require("jquery"),Pestle=require("pestle"),cachedGetScript=require("../scripts/CachedScript.coffee"),Pestle.Module.add("GlobalNav",{isLoaded:!1,initialize:function(){var e,i;return e=this,window.GN=this.options,i=this.options.script,cachedGetScript.getScript(i).then(function(){return e.isLoaded=!0,e.sandbox.log.info("GlobalNav is loaded")},function(i){return e.sandbox.log.info(i.message)})}});
},{"../scripts/CachedScript.coffee":19,"jquery":"jquery","pestle":24}],21:[function(require,module,exports){
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){function t(t){var e=+t;return e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}function e(t){var e=typeof t;return null===t||"undefined"===e||"boolean"===e||"number"===e||"string"===e}function r(t){var r,n,i;if(e(t))return t;if(n=t.valueOf,g(n)&&(r=n.call(t),e(r)))return r;if(i=t.toString,g(i)&&(r=i.call(t),e(r)))return r;throw new TypeError}var n=Array.prototype,i=Object.prototype,o=Function.prototype,a=String.prototype,u=Number.prototype,l=n.slice,s=n.splice,c=n.push,f=n.unshift,p=o.call,h=i.toString,g=function(t){return"[object Function]"===h.call(t)},y=function(t){return"[object RegExp]"===h.call(t)},d=function(t){return"[object Array]"===h.call(t)},v=function(t){return"[object String]"===h.call(t)},m=function(t){var e=h.call(t),r="[object Arguments]"===e;return r||(r=!d(t)&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&g(t.callee)),r},b=function(t){var e,r=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}();return e=r?function(t,e,r,n){!n&&e in t||Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}:function(t,e,r,n){!n&&e in t||(t[e]=r)},function(r,n,i){for(var o in n)t.call(n,o)&&e(r,o,n[o],i)}}(i.hasOwnProperty),w={ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return Object(t)},ToUint32:function(t){return t>>>0}},x=function(){};b(o,{bind:function(t){var e=this;if(!g(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r,n=l.call(arguments,1),i=function(){if(this instanceof r){var i=e.apply(this,n.concat(l.call(arguments)));return Object(i)===i?i:this}return e.apply(t,n.concat(l.call(arguments)))},o=Math.max(0,e.length-n.length),a=[],u=0;o>u;u++)a.push("$"+u);return r=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this, arguments); }")(i),e.prototype&&(x.prototype=e.prototype,r.prototype=new x,x.prototype=null),r}});var O=p.bind(i.hasOwnProperty),T=function(){var t=[1,2],e=t.splice();return 2===t.length&&d(e)&&0===e.length}();b(n,{splice:function(){return 0===arguments.length?[]:s.apply(this,arguments)}},!T);var j=function(){var t={};return n.splice.call(t,0,0,1),1===t.length}();b(n,{splice:function(e,r){if(0===arguments.length)return[];var n=arguments;return this.length=Math.max(t(this.length),0),arguments.length>0&&"number"!=typeof r&&(n=l.call(arguments),n.length<2?n.push(this.length-e):n[1]=t(r)),s.apply(this,n)}},!j);var S=1!==[].unshift(0);b(n,{unshift:function(){return f.apply(this,arguments),this.length}},S),b(Array,{isArray:d});var E=Object("a"),N="a"!==E[0]||!(0 in E),I=function(t){var e=!0,r=!0;return t&&(t.call("foo",function(t,r,n){"object"!=typeof n&&(e=!1)}),t.call([1],function(){"use strict";r="string"==typeof this},"x")),!!t&&e&&r};b(n,{forEach:function(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=arguments[1],i=-1,o=r.length>>>0;if(!g(t))throw new TypeError;for(;++i<o;)i in r&&t.call(n,r[i],i,e)}},!I(n.forEach)),b(n,{map:function(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0,i=Array(n),o=arguments[1];if(!g(t))throw new TypeError(t+" is not a function");for(var a=0;n>a;a++)a in r&&(i[a]=t.call(o,r[a],a,e));return i}},!I(n.map)),b(n,{filter:function(t){var e,r=w.ToObject(this),n=N&&v(this)?this.split(""):r,i=n.length>>>0,o=[],a=arguments[1];if(!g(t))throw new TypeError(t+" is not a function");for(var u=0;i>u;u++)u in n&&(e=n[u],t.call(a,e,u,r)&&o.push(e));return o}},!I(n.filter)),b(n,{every:function(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!g(t))throw new TypeError(t+" is not a function");for(var o=0;n>o;o++)if(o in r&&!t.call(i,r[o],o,e))return!1;return!0}},!I(n.every)),b(n,{some:function(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!g(t))throw new TypeError(t+" is not a function");for(var o=0;n>o;o++)if(o in r&&t.call(i,r[o],o,e))return!0;return!1}},!I(n.some));var D=!1;n.reduce&&(D="object"==typeof n.reduce.call("es5",function(t,e,r,n){return n})),b(n,{reduce:function(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0;if(!g(t))throw new TypeError(t+" is not a function");if(!n&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,o=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in r){i=r[o++];break}if(++o>=n)throw new TypeError("reduce of empty array with no initial value")}for(;n>o;o++)o in r&&(i=t.call(void 0,i,r[o],o,e));return i}},!D);var M=!1;n.reduceRight&&(M="object"==typeof n.reduceRight.call("es5",function(t,e,r,n){return n})),b(n,{reduceRight:function(t){var e=w.ToObject(this),r=N&&v(this)?this.split(""):e,n=r.length>>>0;if(!g(t))throw new TypeError(t+" is not a function");if(!n&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var i,o=n-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in r){i=r[o--];break}if(--o<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>o)return i;do o in r&&(i=t.call(void 0,i,r[o],o,e));while(o--);return i}},!M);var F=Array.prototype.indexOf&&-1!==[0,1].indexOf(1,2);b(n,{indexOf:function(e){var r=N&&v(this)?this.split(""):w.ToObject(this),n=r.length>>>0;if(!n)return-1;var i=0;for(arguments.length>1&&(i=t(arguments[1])),i=i>=0?i:Math.max(0,n+i);n>i;i++)if(i in r&&r[i]===e)return i;return-1}},F);var R=Array.prototype.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);b(n,{lastIndexOf:function(e){var r=N&&v(this)?this.split(""):w.ToObject(this),n=r.length>>>0;if(!n)return-1;var i=n-1;for(arguments.length>1&&(i=Math.min(i,t(arguments[1]))),i=i>=0?i:n-Math.abs(i);i>=0;i--)if(i in r&&e===r[i])return i;return-1}},R);var U=!{toString:null}.propertyIsEnumerable("toString"),C=function(){}.propertyIsEnumerable("prototype"),k=!O("x","0"),A=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],P=A.length;b(Object,{keys:function(t){var e=g(t),r=m(t),n=null!==t&&"object"==typeof t,i=n&&v(t);if(!n&&!e&&!r)throw new TypeError("Object.keys called on a non-object");var o=[],a=C&&e;if(i&&k||r)for(var u=0;u<t.length;++u)o.push(String(u));if(!r)for(var l in t)a&&"prototype"===l||!O(t,l)||o.push(String(l));if(U)for(var s=t.constructor,c=s&&s.prototype===t,f=0;P>f;f++){var p=A[f];c&&"constructor"===p||!O(t,p)||o.push(p)}return o}});var Z=Object.keys&&function(){return 2===Object.keys(arguments).length}(1,2),J=Object.keys;b(Object,{keys:function(t){return J(m(t)?n.slice.call(t):t)}},!Z);var z=-621987552e5,$="-000001",B=Date.prototype.toISOString&&-1===new Date(z).toISOString().indexOf($);b(Date.prototype,{toISOString:function(){var t,e,r,n,i;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(n=this.getUTCFullYear(),i=this.getUTCMonth(),n+=Math.floor(i/12),i=(i%12+12)%12,t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],n=(0>n?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(n>=0&&9999>=n?-4:-6),e=t.length;e--;)r=t[e],10>r&&(t[e]="0"+r);return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},B);var H=!1;try{H=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(z).toJSON().indexOf($)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(L){}H||(Date.prototype.toJSON=function(){var t,e=Object(this),n=r(e);if("number"==typeof n&&!isFinite(n))return null;if(t=e.toISOString,"function"!=typeof t)throw new TypeError("toISOString property is not callable");return t.call(e)});var X=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),Y=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")),q=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));(!Date.parse||q||Y||!X)&&(Date=function(t){function e(r,n,i,o,a,u,l){var s=arguments.length;if(this instanceof t){var c=1===s&&String(r)===r?new t(e.parse(r)):s>=7?new t(r,n,i,o,a,u,l):s>=6?new t(r,n,i,o,a,u):s>=5?new t(r,n,i,o,a):s>=4?new t(r,n,i,o):s>=3?new t(r,n,i):s>=2?new t(r,n):s>=1?new t(r):new t;return c.constructor=e,c}return t.apply(this,arguments)}function r(t,e){var r=e>1?1:0;return o[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)}function n(e){return Number(new t(1970,0,1,0,0,0,e))}var i=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),o=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var a in t)e[a]=t[a];return e.now=t.now,e.UTC=t.UTC,e.prototype=t.prototype,e.prototype.constructor=e,e.parse=function(e){var o=i.exec(e);if(o){var a,u=Number(o[1]),l=Number(o[2]||1)-1,s=Number(o[3]||1)-1,c=Number(o[4]||0),f=Number(o[5]||0),p=Number(o[6]||0),h=Math.floor(1e3*Number(o[7]||0)),g=Boolean(o[4]&&!o[8]),y="-"===o[9]?1:-1,d=Number(o[10]||0),v=Number(o[11]||0);return(f>0||p>0||h>0?24:25)>c&&60>f&&60>p&&1e3>h&&l>-1&&12>l&&24>d&&60>v&&s>-1&&s<r(u,l+1)-r(u,l)&&(a=60*(24*(r(u,l)+s)+c+d*y),a=1e3*(60*(a+f+v*y)+p)+h,g&&(a=n(a)),a>=-864e13&&864e13>=a)?a:0/0}return t.parse.apply(this,arguments)},e}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()});var G=u.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),K={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,e){for(var r=-1;++r<K.size;)e+=t*K.data[r],K.data[r]=e%K.base,e=Math.floor(e/K.base)},divide:function(t){for(var e=K.size,r=0;--e>=0;)r+=K.data[e],K.data[e]=Math.floor(r/t),r=r%t*K.base},numToString:function(){for(var t=K.size,e="";--t>=0;)if(""!==e||0===t||0!==K.data[t]){var r=String(K.data[t]);""===e?e=r:e+="0000000".slice(0,7-r.length)+r}return e},pow:function ue(t,e,r){return 0===e?r:e%2===1?ue(t,e-1,r*t):ue(t*t,e/2,r)},log:function(t){for(var e=0;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e}};b(u,{toFixed:function(t){var e,r,n,i,o,a,u,l;if(e=Number(t),e=e!==e?0:Math.floor(e),0>e||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(r=Number(this),r!==r)return"NaN";if(-1e21>=r||r>=1e21)return String(r);if(n="",0>r&&(n="-",r=-r),i="0",r>1e-21)if(o=K.log(r*K.pow(2,69,1))-69,a=0>o?r*K.pow(2,-o,1):r/K.pow(2,o,1),a*=4503599627370496,o=52-o,o>0){for(K.multiply(0,a),u=e;u>=7;)K.multiply(1e7,0),u-=7;for(K.multiply(K.pow(10,u,1),0),u=o-1;u>=23;)K.divide(1<<23),u-=23;K.divide(1<<u),K.multiply(1,1),K.divide(2),i=K.numToString()}else K.multiply(0,a),K.multiply(1<<-o,0),i=K.numToString()+"0.00000000000000000000".slice(2,2+e);return e>0?(l=i.length,i=e>=l?n+"0.0000000000000000000".slice(0,e-l+2)+i:n+i.slice(0,l-e)+"."+i.slice(l-e)):i=n+i,i}},G);var Q=a.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t="undefined"==typeof/()??/.exec("")[1];a.split=function(e,r){var n=this;if("undefined"==typeof e&&0===r)return[];if("[object RegExp]"!==h.call(e))return Q.call(this,e,r);var i,o,a,u,l=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),f=0;for(e=new RegExp(e.source,s+"g"),n+="",t||(i=new RegExp("^"+e.source+"$(?!\\s)",s)),r="undefined"==typeof r?-1>>>0:w.ToUint32(r),o=e.exec(n);o&&(a=o.index+o[0].length,!(a>f&&(l.push(n.slice(f,o.index)),!t&&o.length>1&&o[0].replace(i,function(){for(var t=1;t<arguments.length-2;t++)"undefined"==typeof arguments[t]&&(o[t]=void 0)}),o.length>1&&o.index<n.length&&c.apply(l,o.slice(1)),u=o[0].length,f=a,l.length>=r)));)e.lastIndex===o.index&&e.lastIndex++,o=e.exec(n);return f===n.length?(u||!e.test(""))&&l.push(""):l.push(n.slice(f)),l.length>r?l.slice(0,r):l}}():"0".split(void 0,0).length&&(a.split=function(t,e){return"undefined"==typeof t&&0===e?[]:Q.call(this,t,e)});var V=a.replace,W=function(){var t=[];return"x".replace(/x(.)?/g,function(e,r){t.push(r)}),1===t.length&&"undefined"==typeof t[0]}();W||(a.replace=function(t,e){var r=g(e),n=y(t)&&/\)[*?]/.test(t.source);if(r&&n){var i=function(r){var n=arguments.length,i=t.lastIndex;t.lastIndex=0;var o=t.exec(r)||[];return t.lastIndex=i,o.push(arguments[n-2],arguments[n-1]),e.apply(this,o)};return V.call(this,t,i)}return V.call(this,t,e)});var _=a.substr,te="".substr&&"b"!=="0b".substr(-1);b(a,{substr:function(t,e){return _.call(this,0>t&&(t=this.length+t)<0?0:t,e)}},te);var ee="	\n\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029ï»¿",re="â€‹",ne="["+ee+"]",ie=new RegExp("^"+ne+ne+"*"),oe=new RegExp(ne+ne+"*$"),ae=a.trim&&(ee.trim()||!re.trim());b(a,{trim:function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(ie,"").replace(oe,"")}},ae),(8!==parseInt(ee+"08")||22!==parseInt(ee+"0x16"))&&(parseInt=function(t){var e=/^0[xX]/;return function(r,n){return r=String(r).trim(),Number(n)||(n=e.test(r)?16:10),t(r,n)}}(parseInt))});
},{}],22:[function(require,module,exports){
function drainQueue(){if(!draining){draining=!0;for(var e,o=queue.length;o;){e=queue,queue=[];for(var r=-1;++r<o;)e[r]();o=queue.length}draining=!1}}function noop(){}var process=module.exports={},queue=[],draining=!1;process.nextTick=function(e){queue.push(e),draining||setTimeout(drainQueue,0)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};
},{}],23:[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.ngsPlayer=e()}}(function(){return function e(t,n,o){function r(i,l){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!l&&s)return s(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[i]={exports:{}};t[i][0].call(d.exports,function(e){var n=t[i][1][e];return r(n?n:e)},d,d.exports,e,t,n,o)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,t){"use strict";function n(e){o.init(e)}var o=e("./lib/Player"),r=e("./lib/configs"),a=r.autoload;void 0!==window.ngsPlayerConfig&&void 0!==window.ngsPlayerConfig.autoload&&(a=window.ngsPlayerConfig.autoload),jQuery(function(){if(a)for(var e=document.getElementsByClassName("ngs-video"),t=0;t<e.length;t++){var o=jQuery(e[t]).data();n(o)}}),t.exports=o},{"./lib/Player":4,"./lib/configs":7}],2:[function(e,t){"use strict";var n=e("./pdk"),o=e("./configs"),r=function(e){e.controls.clearCurrentRelease(),e.controls.loadReleaseURL(e.releaseUrl,!0)},a=function(e,t){if("undefined"==typeof e.feed&&"undefined"==typeof e.guid)return void o.log("Incorrect Feed or GUID.");var n,a=e.feed+"?byGuid="+e.guid;t.name="inline",a+="&defaultThumbnailAssetType=MED&form=cjson&params=mbr%3dtrue%26player%3d"+t.name+'"',n="//feed.theplatform.com/f/ngs/"+a+"&fields=content,defaultThumbnailUrl&fileFields=url,format",jQuery.getJSON(n,function(e){if(e.entryCount>0&&e.entries.length>0){for(var n=0;n<e.entries[0].content.length;n++)switch(e.entries[0].content[n].format){case"MPEG4":t.mp4Src=e.entries[0].content[n].url;break;case"WebM":t.webmSrc=e.entries[0].content[n].url}t.releaseUrl=e.entries[0].content[0].url,t.poster=e.entries[0].defaultThumbnailUrl,r(t)}})},i=function(e){if("object"!=typeof $pdk)n.setup(e),n.loaded(i,e);else{var t=document.createElement("iframe");if(t.id=e.iframeId,t.frameBorder="0",t.setAttribute("seamless",""),t.setAttribute("allowFullScreen",""),e.mpxId=e.debug?"W8SA9U3lmygP":"6BAjBPIaE25o",t.src="//player.theplatform.com/p/ngs/"+e.mpxId+"/embed",t.style.width="100%",t.style.height="100%",document.getElementById(e.instance).appendChild(t),e.controls=$pdk.bind(e.iframeId),!e.account&&e.feed&&"undefined"!=typeof e.guid&&e.guid.length>0)return a({feed:e.feed,guid:e.guid},e);e.releaseURL="http://link.theplatform.com/s/ngs/media/guid/"+e.account+"/"+e.guid+"?mbr=true&policy="+e.adpolicy,e.controls.loadReleaseURL(e.releaseURL,!0)}},l=function(e){return this.feed=e.feed,this.account=e.account,this.guid=e.guid,this.adpolicy=e.adpolicy,this.instance=e.instance,this.iframeId=this.instance+"-player",this.className="",this.debug=e.debug,i(this),this};t.exports=l},{"./configs":7,"./pdk":8}],3:[function(e,t){"use strict";var n,o=e("./configs"),r=e("./pdk"),a=function(e){var t=new jQuery.Deferred;!function(){return"function"==typeof Player?t.resolve("Player loaded"):(setTimeout(function e(){return"function"==typeof Player?t.resolve("Player loaded"):void setTimeout(e,250)},250),void setTimeout(function n(){"pending"===t.state()&&(t.notify("working... "),setTimeout(n,500))},1))}(),jQuery.when(t).done(function(){n=new Player(e.instance),o.debug&&(n.logLevel="debug");var t,r=window.ngsPlayerConfig,a=jQuery.extend(o,r);for(t in a)a.hasOwnProperty(t)&&(n[t]=a[t]);n.adPolicy=n.adPolicy||e.adpolicy,n.skinUrl=o.skinPath+"/glass/glass-ngs.json",n.layoutUrl=o.layoutPath+"/metaLayout_ngsPlayer.xml",n.plugin1="type=content|url="+o.pdkPath+"/pdk/swf/akamaiHD.swf|fallback=switch%3Dprogressive|enableDVR=true|priority=1|manifest=true|hosts=ngs-vh.akamaihd.net|fireAllCuePoints=true",n.plugin2="type=content|url="+o.pdkPath+"/pdk/js/plugins/akamaiHD.js|fallback=switch%3Dprogressive|enableDVR=true|priority=1|manifest=true|hosts=ngs-vh.akamaihd.net|fireAllCuePoints",n.pluginIma3Flash="type=content|url="+o.pdkPath+"/pdk/swf/doubleclick.swf|host=pubads.g.doubleclick.net|priority=1",n.pluginIma3Html="type=adcomponent|URL="+o.pdkPath+"/pdk/js/plugins/doubleclick.js|host=pubads.g.doubleclick.net|mimeTypes=video/mp4",n.pluginChartbeatFlash="type=tracking|URL=http://static.chartbeat.com/swf/ChartbeatPDK.swf|acctId=49634|appId=video@nationalgeographic.com|priority=1",n.releaseURL="http://link.theplatform.com/s/ngs/media/guid/"+e.account+"/"+e.guid+"?mbr=true&policy="+n.adPolicy,n.bind(n._markupId)})},i=function(e){return"object"==typeof $pdk?(a(e),{player:this}):(r.setup(e),void r.loaded(a,e))};t.exports=i},{"./configs":7,"./pdk":8}],4:[function(e,t){"use strict";var n=e("./configs"),o=e("./api"),r={},a=e("./LocalPlayer"),i=e("./InlinePlayer"),l=e("./TexturalPlayer"),s=function(e){if(n.debug&&window.tpLogLevel){var t=document.createElement("script");t.innerHTML='var tpLogLevel = "debug"',document.getElementsByTagName("head")[0].appendChild(t)}switch(e.debug=n.debug,e.type){case"local":r[e.instance]=new a(e),r[e.instance].api=o;break;case"textural":case"textual":r[e.instance]=new l(e);break;case"inline":r[e.instance]=new i(e)}};t.exports=jQuery.extend(r,{init:s})},{"./InlinePlayer":2,"./LocalPlayer":3,"./TexturalPlayer":5,"./api":6,"./configs":7}],5:[function(e,t){"use strict";var n=function(e){var t=document.createElement("video");if(t.id=e.iframeId,t.poster=e.poster,t.controls=e.controls,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted?e.muted:!0,t.className=e.className,document.getElementById(e.instance).appendChild(t),e.mp4Src){var n=document.createElement("source");n.src=e.mp4Src,n.type="video/mp4",document.getElementById(e.iframeId).appendChild(n)}if(e.webmSrc){var o=document.createElement("source");o.src=e.webmSrc,o.type="video/webm",document.getElementById(e.iframeId).appendChild(o)}},o=function(e){var t=document.getElementById(e.instance);t.hasChildNodes()&&t.removeChild(t.childNodes[0])},r=function(e,t){var o,r=e.feed+"?byGuid="+e.guid;t.name="textual",r+="&contentFilter=byWidth%3D1024&defaultThumbnailAssetType=MED&form=cjson&params=format%3dredirect%26switch%3dprogressive%26mbr%3dtrue%26player%3d"+t.name+'"',o="http://feed.theplatform.com/f/ngs/"+r+"&fields=content,defaultThumbnailUrl&fileFields=url,format",jQuery.getJSON(o,function(e){if(e.entryCount>0&&e.entries.length>0){for(var o=0;o<e.entries[0].content.length;o++)switch(e.entries[0].content[o].format){case"MPEG4":t.mp4Src=e.entries[0].content[o].url;break;case"WebM":t.webmSrc=e.entries[0].content[o].url}t.poster=e.entries[0].defaultThumbnailUrl,n(t)}})},a=function(e){o(e),r({feed:e.feed,guid:e.guid},e)},i=function(e){var t;for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);this.videoId=this.instance+"-player",this.className="textual",a(this)};t.exports=i},{}],6:[function(e,t){"use strict";var n,o,r=new jQuery.Deferred;!function(){function e(){return"object"==typeof $pdk?(window.clearTimeout(o),r.resolve("PDK loaded")):(r.notify("checking... "),void t())}function t(){o=window.setTimeout(e,500)}return"object"==typeof $pdk?r.resolve("PDK loaded"):void t()}(),jQuery.when(r).done(function(){n=window.$pdk});var a={play:function(e){n.controller.clickPlayButton(e)},pause:function(e){n.controller.pause(!0,e)},unpause:function(e){n.controller.pause(!1,e)},stop:function(e){n.controller.endCurrentRelease(e)},seekPercent:function(e,t){n.controller.seekToPercentage(e,t)},seekPosition:function(e,t){n.controller.seekToPosition(e,t)},load:function(e,t){n.controller.clearCurrentRelease(t),n.controller.loadReleaseURL(e,!0,t)},set:function(e,t){n.controller.setReleaseURL(e,!0,t)}};t.exports=a},{}],7:[function(e,t){"use strict";var n=document.location.search.replace(/(^\?)/,"").split("&").reduce(function(e,t){return t=t.split("="),e[t[0]]=t[1],e},{}),o=n.dev?"//assets-qa.nationalgeographic.com/modules-video":"//assets.nationalgeographic.com/modules-video",r=!!n.dev,a={name:"ngsvideo",pdkPath:"//pdk.theplatform.com",jsPath:o+"/assets/js",cssPath:o+"/assets/css",skinPath:o+"/assets/skins",layoutPath:o+"/assets/data"};t.exports={debug:r,autoload:!0,pdkPath:a.pdkPath,skinPath:a.skinPath,cssPath:a.cssPath,layoutPath:a.layoutPath,name:a.name,"fp.bgcolor":"0x000000","fa.scale":"noscale",wmode:"opaque",allowFullScreen:"true",autoplay:"false",allowLink:"true",embeddedPlayerHTML:'<iframe src="'+document.location.href+'" width="640" height="360" frameBorder="0" seamless="seamless" allowFullScreen></iframe>',playAll:"true",endCard:"none",useDefaulPlayOverlay:"false",backgroundColor:"0x000000",controlBackgroundColor:"0x061423",controlColor:"0xf8f8f8",controlFrameColor:"0x1a2735",controlHoverColor:"0x061423",controlSelectedColor:"0xf8f8f8",frameColor:"0xf8f8f8",pageBackgroundColor:"0x061423",playProgressColor:"0x061423",scrubberColor:"0x061423",scrubberFrameColor:"0x061423",scrubTrackColor:"0x061423",textBackgroundColor:"0x000000",textColor:"0xf8f8f8",loadProgressColor:"0x061423",overlayColor:"0xf8f8f8"}},{}],8:[function(e,t,n){"use strict";var o=e("./utils"),r=e("./configs"),a=function(e,t){var n;return"object"==typeof $pdk?(clearTimeout(n),e(t)):void(n=window.setTimeout(function(){a(e,t)},250))},i=function(e){var t,n,o,r,a,i;for(n=document.getElementsByTagName("head")[0],o=document.createDocumentFragment(),"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]),i=e.length-1;i>=0;i--){t=document.createElement("meta"),a=e[i];for(r in a)a.hasOwnProperty(r)&&(t[r]=a[r]);o.appendChild(t)}n.appendChild(o)},l=function(e){var t=r.debug?"next":"current",n="//pdk.theplatform.com/pdk/tpPdkController.js",a="//pdk.theplatform.com/"+t+"/pdk/tpPdk.js",i="local"===e.type,l=i?a:n;jQuery(function(){o.loadScript(l,"")})},s=function(e){var t=document.querySelector("body");"pdk-loaded"!==document.querySelector("body").className&&("local"===e.type&&(i([{name:"tp:preferredRuntimes",content:"HTML5,Flash"},{name:"tp:preferredFormats",content:"MPEG4,F4M,FLV,M3U"},{name:"tp:initialize",content:"true"},{name:"tp:EnableExternalController",content:"true"}]),o.loadStylesheet(r.skinPath+"/glass/main.css"),o.loadStylesheet(r.cssPath+"/video.css")),l(e),t.className="pdk-loaded")};n.setup=s,n.loaded=a},{"./configs":7,"./utils":9}],9:[function(e,t){"use strict";t.exports={log:function(){var e=document.getElementsByTagName("script")[0],t=(new Date).getTime();return function(n){var o=document.createElement("div");o.innerHTML=n+" ("+((new Date).getTime()-t)+"ms)",e.parentNode.insertBefore(o,e)}},loadScript:function(e,t){var n=document.createElement("script");n.async=!0,n.src=e;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o),n.addEventListener?n.addEventListener("load",t,!1):n.attachEvent("onreadystatechange",function(){/complete|loaded/.test(n.readyState)&&t()})},loadStylesheet:function(e){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],24:[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.pestle=e()}}(function(){var e;return function t(e,n,i){function o(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return o(n?n:t)},u,u.exports,t,e,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({"./src/core.coffee":[function(e,t){!function(e,n){return t.exports=e.Pestle=n(e,{})}(window,function(t,n){var i,o;return i=e("./base.coffee"),o=e("./util/extmanager.coffee"),n=new i.Events,n.Module=e("./util/module.coffee"),n.modules={},n.Core=function(){function t(t){var n,r,s;null==t&&(t={}),this.setConfig(t),this.started=!1,this.extManager=new o,this.sandbox=i.util.clone(i),this.sandboxes={},n=e("./extension/components.coffee"),r=e("./extension/responsivedesign.coffee"),s=e("./extension/responsiveimages.coffee"),this.extManager.add(n),this.extManager.add(r),this.extManager.add(s)}return t.prototype.version="0.0.1",t.prototype.cfg={debug:{logLevel:5},namespace:"platform",extension:{}},t.prototype.addExtension=function(e){if(this.started)throw i.log.error("The Core has already been started. You can not add new extensions at this point."),new Error("You can not add extensions when the Core has already been started.");return this.extManager.add(e)},t.prototype.setConfig=function(e){var t;if(this.started)throw i.log.error("The Core has already been started. You can not add new extensions at this point."),new Error("You can not add extensions when the Core has already been started.");if(i.util.isObject(e))return this.config=i.util.isEmpty(this.config)?i.util.defaults(e,this.cfg):i.util.defaults(e,this.config);throw t="[setConfig method] only accept an object as a parameter and you're passing: "+typeof e,i.log.error(t),new Error(t)},t.prototype.start=function(e){var t;return null==e&&(e=""),i.log.setLevel(this.config.debug.logLevel),this.started&&""!==e?(i.log.info("Pestle is initializing a component"),this.sandbox.startComponents(e,this)):(i.log.info("Pestle started the initializing process"),this.started=!0,this.extManager.init(this),t=$.Callbacks("unique memory"),i.util.each(this.extManager.getInitializedExtensions(),function(n){return function(o){return o&&(i.util.isFunction(o.afterAppStarted)&&o.activated&&("components"===o.optionKey?o.afterAppStarted(e,n):o.afterAppStarted(n)),i.util.isFunction(o.afterAppInitialized)&&o.activated)?t.add(o.afterAppInitialized):void 0}}(this)),t.fire(this))},t.prototype.createSandbox=function(e){return this.sandboxes[e]=i.util.extend({},this.sandbox,{name:e})},t.prototype.getInitializedComponents=function(){return this.sandbox.getInitializedComponents()},t}(),n})},{"./base.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/base.coffee","./extension/components.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/extension/components.coffee","./extension/responsivedesign.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/extension/responsivedesign.coffee","./extension/responsiveimages.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/extension/responsiveimages.coffee","./util/extmanager.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/extmanager.coffee","./util/module.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/module.coffee"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/cookies-js/src/cookies.js":[function(t,n,i){!function(t,o){"use strict";var r=function(e){if("object"!=typeof e.document)throw new Error("Cookies.js requires a `window` with a `document` object");var t=function(e,n,i){return 1===arguments.length?t.get(e):t.set(e,n,i)};return t._document=e.document,t._cacheKeyPrefix="cookey.",t.defaults={path:"/",secure:!1},t.get=function(e){return t._cachedDocumentCookie!==t._document.cookie&&t._renewCache(),t._cache[t._cacheKeyPrefix+e]},t.set=function(e,n,i){return i=t._getExtendedOptions(i),i.expires=t._getExpiresDate(n===o?-1:i.expires),t._document.cookie=t._generateCookieString(e,n,i),t},t.expire=function(e,n){return t.set(e,o,n)},t._getExtendedOptions=function(e){return{path:e&&e.path||t.defaults.path,domain:e&&e.domain||t.defaults.domain,expires:e&&e.expires||t.defaults.expires,secure:e&&e.secure!==o?e.secure:t.defaults.secure}},t._isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},t._getExpiresDate=function(e,n){switch(n=n||new Date,typeof e){case"number":e=new Date(n.getTime()+1e3*e);break;case"string":e=new Date(e)}if(e&&!t._isValidDate(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return e},t._generateCookieString=function(e,t,n){e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent),e=e.replace(/\(/g,"%28").replace(/\)/g,"%29"),t=(t+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent),n=n||{};var i=e+"="+t;return i+=n.path?";path="+n.path:"",i+=n.domain?";domain="+n.domain:"",i+=n.expires?";expires="+n.expires.toUTCString():"",i+=n.secure?";secure":""},t._getCacheFromString=function(e){for(var n={},i=e?e.split("; "):[],r=0;r<i.length;r++){var s=t._getKeyValuePairFromCookieString(i[r]);n[t._cacheKeyPrefix+s.key]===o&&(n[t._cacheKeyPrefix+s.key]=s.value)}return n},t._getKeyValuePairFromCookieString=function(e){var t=e.indexOf("=");return t=0>t?e.length:t,{key:decodeURIComponent(e.substr(0,t)),value:decodeURIComponent(e.substr(t+1))}},t._renewCache=function(){t._cache=t._getCacheFromString(t._document.cookie),t._cachedDocumentCookie=t._document.cookie},t._areEnabled=function(){var e="cookies.js",n="1"===t.set(e,1).get(e);return t.expire(e),n},t.enabled=t._areEnabled(),t},s="object"==typeof t.document?r(t):r;"function"==typeof e&&e.amd?e(function(){return s}):"object"==typeof i?("object"==typeof n&&"object"==typeof n.exports&&(i=n.exports=s),i.Cookies=s):t.Cookies=s}("undefined"==typeof window?this:window)},{}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/imager.js/Imager.js":[function(t,n,i){!function(t,o){"use strict";function r(e,t){for(var n=0,i=e.length,o=[];i>n;n++)o[n]=t(e[n],n);return o}function s(e){return e}function a(e,t){var n=this,i=o;t=t||{},void 0!==e&&("string"==typeof e?(t.selector=e,e=void 0):"undefined"==typeof e.length&&(t=e,e=void 0)),this.imagesOffScreen=[],this.viewportHeight=i.documentElement.clientHeight,this.selector=t.selector||".delayed-image-load",this.className=t.className||"image-replace",this.gif=i.createElement("img"),this.gif.src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7",this.gif.className=this.className,this.gif.alt="",this.scrollDelay=t.scrollDelay||250,this.onResize=t.hasOwnProperty("onResize")?t.onResize:!0,this.lazyload=t.hasOwnProperty("lazyload")?t.lazyload:!1,this.scrolled=!1,this.availablePixelRatios=t.availablePixelRatios||[1,2],this.availableWidths=t.availableWidths||c,this.onImagesReplaced=t.onImagesReplaced||function(){},this.widthsMap={},this.refreshPixelRatio(),this.widthInterpolator=t.widthInterpolator||s,this.deltaSquare=t.deltaSquare||1.5,this.squareSelector=t.squareSelector||"sqrcrop",this.adaptSelector=this.adaptSelector||"adapt",this.gif.removeAttribute("height"),this.gif.removeAttribute("width"),"function"!=typeof this.availableWidths&&("number"==typeof this.availableWidths.length?this.widthsMap=a.createWidthsMap(this.availableWidths,this.widthInterpolator):(this.widthsMap=this.availableWidths,this.availableWidths=l(this.availableWidths)),this.availableWidths=this.availableWidths.sort(function(e,t){return e-t})),e?(this.divs=r(e,s),this.selector=null):this.divs=r(i.querySelectorAll(this.selector),s),this.changeDivsToEmptyImages(),u(function(){n.init()})}var c,l,u,f,p;u=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)},p=function(){return Object.prototype.hasOwnProperty.call(o.createElement("img"),"naturalWidth")?function(e){return e.naturalWidth}:function(e){var t=o.createElement("img");return t.src=e.src,t.width}}(),f=function(){return o.addEventListener?function(e,t,n){return e.addEventListener(t,n,!1)}:function(e,t,n){return e.attachEvent("on"+t,n)}}(),c=[96,130,165,200,235,270,304,340,375,410,445,485,520,555,590,625,660,695,736],l="function"==typeof Object.keys?Object.keys:function(e){var t,n=[];for(t in e)n.push(t);return n},a.prototype.scrollCheck=function(){this.scrolled&&(this.imagesOffScreen.length||t.clearInterval(this.interval),this.divs=this.imagesOffScreen.slice(0),this.imagesOffScreen.length=0,this.changeDivsToEmptyImages(),this.scrolled=!1)},a.prototype.init=function(){this.initialized=!0,this.checkImagesNeedReplacing(this.divs),this.onResize&&this.registerResizeEvent(),this.lazyload&&this.registerScrollEvent()},a.prototype.createGif=function(e){if(e.className.match(new RegExp("(^| )"+this.className+"( |$)")))return e;var t=e.getAttribute("data-class"),n=e.getAttribute("data-width"),i=this.gif.cloneNode(!1);return n&&(i.width=n,i.setAttribute("data-width",n)),i.className=(t?t+" ":"")+this.className,i.setAttribute("data-src",e.getAttribute("data-src")),i.setAttribute("alt",e.getAttribute("data-alt")||this.gif.alt),e.parentNode.replaceChild(i,e),i},a.prototype.changeDivsToEmptyImages=function(){var e=this;r(this.divs,function(t,n){e.lazyload?e.isThisElementOnScreen(t)?e.divs[n]=e.createGif(t):e.imagesOffScreen.push(t):e.divs[n]=e.createGif(t)}),this.initialized&&this.checkImagesNeedReplacing(this.divs)},a.prototype.isThisElementOnScreen=function(e){var t=a.getPageOffset(),n=0;if(e.offsetParent)do n+=e.offsetTop;while(e=e.offsetParent);return n<this.viewportHeight+t?!0:!1},a.prototype.checkImagesNeedReplacing=function(e){var t=this;this.isResizing||(this.isResizing=!0,this.refreshPixelRatio(),r(e,function(e){t.replaceImagesBasedOnScreenDimensions(e)}),this.isResizing=!1,this.onImagesReplaced(e))},a.prototype.replaceImagesBasedOnScreenDimensions=function(e){var t,n,i;i=p(e),t="function"==typeof this.availableWidths?this.availableWidths(e):this.determineAppropriateResolution(e),e.width=t,e.src!==this.gif.src&&i>=t||(n=this.changeImageSrcToUseNewImageDimensions(this.buildUrlStructure(e.getAttribute("data-src"),e),t),e.src=n)},a.prototype.determineAppropriateResolution=function(e){return a.getClosestValue(e.getAttribute("data-width")||e.parentNode.clientWidth,this.availableWidths)},a.prototype.refreshPixelRatio=function(){this.devicePixelRatio=a.getClosestValue(a.getPixelRatio(),this.availablePixelRatios)},a.prototype.changeImageSrcToUseNewImageDimensions=function(e,t){return e.replace(/{width}/g,a.transforms.width(t,this.widthsMap)).replace(/{pixel_ratio}/g,a.transforms.pixelRatio(this.devicePixelRatio))},a.prototype.buildUrlStructure=function(e,t){var n=this.isImageContainerSquare(t)?"."+this.squareSelector:"";return e.replace(/\.(jpg|gif|bmp|png)[^s]?({width})?[^s]({pixel_ratio})?/g,"."+this.adaptSelector+".$2.$3"+n+".$1")},a.prototype.isImageContainerSquare=function(e){return e.parentNode.clientWidth/e.parentNode.clientHeight<=this.deltaSquare},a.getPixelRatio=function(e){return(e||t).devicePixelRatio||1},a.createWidthsMap=function(e,t){for(var n={},i=e.length;i--;)n[e[i]]=t(e[i]);return n},a.transforms={pixelRatio:function(e){return e},width:function(e,t){return t[e]||e}},a.getClosestValue=function(e,t){var n=t.length,i=t[n-1];for(e=parseFloat(e,10);n--;)e<=t[n]&&(i=t[n]);return i},a.prototype.registerResizeEvent=function(){var e=this;f(t,"resize",function(){e.checkImagesNeedReplacing(e.divs)})},a.prototype.registerScrollEvent=function(){var e=this;this.scrolled=!1,this.interval=t.setInterval(function(){e.scrollCheck()},e.scrollDelay),f(t,"scroll",function(){e.scrolled=!0})},a.getPageOffsetGenerator=function(e){return e?function(){return t.pageYOffset}:function(){return o.documentElement.scrollTop}},a.getPageOffset=a.getPageOffsetGenerator(Object.prototype.hasOwnProperty.call(t,"pageYOffset")),a.applyEach=r,"object"==typeof n&&"object"==typeof n.exports?n.exports=i=a:"function"==typeof e&&e.amd?e(function(){return a}):"object"==typeof t&&(t.Imager=a)}(window,document)},{}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/ismobilejs/isMobile.js":[function(t,n){!function(t){var i=/iPhone/i,o=/iPod/i,r=/iPad/i,s=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,a=/Android/i,c=/IEMobile/i,l=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,u=/BlackBerry/i,f=/BB10/i,p=/Opera Mini/i,d=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,h=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),m=function(e,t){return e.test(t)},g=function(e){var t=e||navigator.userAgent;return this.apple={phone:m(i,t),ipod:m(o,t),tablet:m(r,t),device:m(i,t)||m(o,t)||m(r,t)},this.android={phone:m(s,t),tablet:!m(s,t)&&m(a,t),device:m(s,t)||m(a,t)},this.windows={phone:m(c,t),tablet:m(l,t),device:m(c,t)||m(l,t)},this.other={blackberry:m(u,t),blackberry10:m(f,t),opera:m(p,t),firefox:m(d,t),device:m(u,t)||m(f,t)||m(p,t)||m(d,t)},this.seven_inch=m(h,t),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},v=function(){var e=new g;return e.Class=g,e};"undefined"!=typeof n&&n.exports&&"undefined"==typeof window?n.exports=g:"undefined"!=typeof n&&n.exports&&"undefined"!=typeof window?n.exports=v():"function"==typeof e&&e.amd?e(t.isMobile=v()):t.isMobile=v()}(this)},{}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/loglevel/lib/loglevel.js":[function(t,n){!function(i,o){"object"==typeof n&&n.exports&&"function"==typeof t?n.exports=o():"function"==typeof e&&"object"==typeof e.amd?e(o):i.log=o()}(this,function(){function e(e){return typeof console===c?!1:void 0!==console[e]?t(console,e):void 0!==console.log?t(console,"log"):a}function t(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(i){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function n(e,t){return function(){typeof console!==c&&(i(t),s[e].apply(s,arguments))}}function i(e){for(var t=0;t<l.length;t++){var n=l[t];s[n]=e>t?a:s.methodFactory(n,e)}}function o(e){var t=(l[e]||"silent").toUpperCase();try{return void(window.localStorage.loglevel=t)}catch(n){}try{window.document.cookie="loglevel="+t+";"}catch(n){}}function r(){var e;try{e=window.localStorage.loglevel}catch(t){}if(typeof e===c)try{e=/loglevel=([^;]+)/.exec(window.document.cookie)[1]}catch(t){}void 0===s.levels[e]&&(e="WARN"),s.setLevel(s.levels[e])}var s={},a=function(){},c="undefined",l=["trace","debug","info","warn","error"];s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=function(t,i){return e(t)||n(t,i)},s.setLevel=function(e){if("string"==typeof e&&void 0!==s.levels[e.toUpperCase()]&&(e=s.levels[e.toUpperCase()]),!("number"==typeof e&&e>=0&&e<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+e;return o(e),i(e),typeof console===c&&e<s.levels.SILENT?"No console available for logging":void 0},s.enableAll=function(){s.setLevel(s.levels.TRACE)},s.disableAll=function(){s.setLevel(s.levels.SILENT)};var u=typeof window!==c?window.log:void 0;return s.noConflict=function(){return typeof window!==c&&window.log===s&&(window.log=u),s},r(),s})},{}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/verge/verge.js":[function(e,t){!function(e,n,i){"undefined"!=typeof t&&t.exports?t.exports=i():e[n]=i()}(this,"verge",function(){function e(){return{width:u(),height:f()}}function t(e,t){var n={};return t=+t||0,n.width=(n.right=e.right+t)-(n.left=e.left-t),n.height=(n.bottom=e.bottom+t)-(n.top=e.top-t),n}function n(e,n){return e=e&&!e.nodeType?e[0]:e,e&&1===e.nodeType?t(e.getBoundingClientRect(),n):!1}function i(t){t=null==t?e():1===t.nodeType?n(t):t;var i=t.height,o=t.width;return i="function"==typeof i?i.call(t):i,o="function"==typeof o?o.call(t):o,o/i}var o={},r="undefined"!=typeof window&&window,s="undefined"!=typeof document&&document,a=s&&s.documentElement,c=r.matchMedia||r.msMatchMedia,l=c?function(e){return!!c.call(r,e).matches}:function(){return!1},u=o.viewportW=function(){var e=a.clientWidth,t=r.innerWidth;return t>e?t:e},f=o.viewportH=function(){var e=a.clientHeight,t=r.innerHeight;return t>e?t:e};return o.mq=l,o.matchMedia=c?function(){return c.apply(r,arguments)}:function(){return{}},o.viewport=e,o.scrollX=function(){return r.pageXOffset||a.scrollLeft},o.scrollY=function(){return r.pageYOffset||a.scrollTop},o.rectangle=n,o.aspect=i,o.inX=function(e,t){var i=n(e,t);return!!i&&i.right>=0&&i.left<=u()},o.inY=function(e,t){var i=n(e,t);return!!i&&i.bottom>=0&&i.top<=f()},o.inViewport=function(e,t){var i=n(e,t);return!!i&&i.bottom>=0&&i.right>=0&&i.top<=f()&&i.left<=u()},o})},{}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/wolfy87-eventemitter/EventEmitter.js":[function(t,n){(function(){"use strict";function t(){}function i(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function o(e){return function(){return this[e].apply(this,arguments)}}var r=t.prototype,s=this,a=s.EventEmitter;r.getListeners=function(e){var t,n,i=this._getEvents();if(e instanceof RegExp){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},r.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},r.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},r.addListener=function(e,t){var n,o=this.getListenersAsObject(e),r="object"==typeof t;for(n in o)o.hasOwnProperty(n)&&-1===i(o[n],t)&&o[n].push(r?t:{listener:t,once:!1});return this},r.on=o("addListener"),r.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},r.once=o("addOnceListener"),r.defineEvent=function(e){return this.getListeners(e),this},r.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},r.removeListener=function(e,t){var n,o,r=this.getListenersAsObject(e);for(o in r)r.hasOwnProperty(o)&&(n=i(r[o],t),-1!==n&&r[o].splice(n,1));return this},r.off=o("removeListener"),r.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},r.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},r.manipulateListeners=function(e,t,n){var i,o,r=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)r.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(o=t[i])&&("function"==typeof o?r.call(this,i,o):s.call(this,i,o));return this},r.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if(e instanceof RegExp)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},r.removeAllListeners=o("removeEvent"),r.emitEvent=function(e,t){var n,i,o,r,s=this.getListenersAsObject(e);for(o in s)if(s.hasOwnProperty(o))for(i=s[o].length;i--;)n=s[o][i],n.once===!0&&this.removeListener(e,n.listener),r=n.listener.apply(this,t||[]),r===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},r.trigger=o("emitEvent"),r.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},r.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},r._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},r._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return s.EventEmitter=a,t},"function"==typeof e&&e.amd?e(function(){return t}):"object"==typeof n&&n.exports?n.exports=t:s.EventEmitter=t}).call(this)},{}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/base.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(t,n){var i,o,r;return r=[{name:"jQuery",required:"1.10",obj:t.$,version:t.$?t.$.fn.jquery:0},{name:"Underscore",required:"1.7.0",obj:t._,version:t._?t._.VERSION:0}],o=e("./util/versionchecker.coffee"),o.check(r),n.log=e("./util/logger.coffee"),n.device=e("./util/devicedetection.coffee"),n.cookies=e("./util/cookies.coffee"),n.vp=e("./util/viewportdetection.coffee"),n.Imager=e("imager.js"),n.Events=e("./util/eventbus.coffee"),i=e("./util/general.coffee"),n.util=t._.extend(i,t._),n})},{"./util/cookies.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/cookies.coffee","./util/devicedetection.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/devicedetection.coffee","./util/eventbus.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/eventbus.coffee","./util/general.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/general.coffee","./util/logger.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/logger.coffee","./util/versionchecker.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/versionchecker.coffee","./util/viewportdetection.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/viewportdetection.coffee","imager.js":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/imager.js/Imager.js"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/extension/components.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(){var t,n,i;return t=e("./../base.coffee"),i=e("./../util/module.coffee"),n=function(){function e(){}return e.initializedComponents={},e.startAll=function(n,o,r){var s,a;return null==n&&(n="body"),null==r&&(r=Pestle.modules),a=e.parse(n,o.config.namespace),s=t.util.clone(a),t.log.info("Parsed components"),t.log.debug(s),t.util.isEmpty(a)||t.util.each(r,function(e,n){return t.util.isFunction(e)?void 0:i.extend(n,e)}),t.util.extend(r,Pestle.Module.list),e.instantiate(a,o),{all:e.initializedComponents,"new":s}},e.parse=function(n,i){var o,r,s;return r=[],t.util.isArray(i)?s=i:t.util.isString(i)&&(s=i.split(",")),o=[],t.util.each(s,function(e){return o.push("[data-"+e+"-component]")}),$(n).find(o.join(",")).each(function(n,o){var a,c;return $(o).data("pestle-guid")?void 0:(a=function(){return i="",t.util.each(s,function(e){return $(o).data(e+"-component")?i=e:void 0}),i}(),c=e.parseComponentOptions(this,a),r.push({name:c.name,options:c}))}),r},e.parseComponentOptions=function(n,i,o){var r,s,a,c;return c=t.util.clone(o||{}),c.el=n,r=$(n).data(),a="",s=0,t.util.each(r,function(e,t){return t=t.replace(new RegExp("^"+i),""),t=t.charAt(0).toLowerCase()+t.slice(1),"component"!==t?(c[t]=e,s++):a=e}),c.length=s+1,e.buildOptionsObject(a,c)},e.buildOptionsObject=function(e,t){return t.name=e,t},e.instantiate=function(n,i){var o,r,s,a;return n.length>0?(o=n.shift(),!t.util.isEmpty(Pestle.modules)&&Pestle.modules[o.name]&&o.options&&(r=Pestle.modules[o.name],a=i.createSandbox(o.name),o.options.guid=t.util.uniqueId(o.name+"_"),s=new r({sandbox:a,options:o.options}),s.initialize(),$(o.options.el).data("pestle-guid",o.options.guid),e.initializedComponents[o.options.guid]=s),e.instantiate(n,i)):void 0},e}(),{initialize:function(e){var i;return t.log.info("[ext] Component extension initialized"),i={},e.sandbox.startComponents=function(e,t){return i=n.startAll(e,t)},e.sandbox.getInitializedComponents=function(){return i.all},e.sandbox.getLastestInitializedComponents=function(){return i["new"]}},afterAppStarted:function(e,n){var i;return t.log.info("Calling startComponents from afterAppStarted"),i=e?e:null,n.sandbox.startComponents(i,n)},name:"Component Extension",classes:n,optionKey:"components"}})},{"./../base.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/base.coffee","./../util/module.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/module.coffee"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/extension/responsivedesign.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(){var t,n;return t=e("./../base.coffee"),n=function(){function e(e){null==e&&(e={}),t.util.bindAll(this,"_init","detectDevice","_checkViewport","_attachWindowHandlers","getDevice","_resizeHandler"),this.config=t.util.extend({},this.cfg,e),this._init()}return e.prototype.cfg={waitLimit:300,windowResizeEvent:!0,breakpoints:[{name:"mobile",bpmin:0,bpmax:767},{name:"tablet",bpmin:768,bpmax:959},{name:"desktop",bpmin:960}]},e.prototype._init=function(){return this.config.windowResizeEvent&&this._attachWindowHandlers(),this.detectDevice()},e.prototype._attachWindowHandlers=function(){var e;return e=t.util.debounce(this._resizeHandler,this.config.waitLimit),$(window).resize(e)},e.prototype._resizeHandler=function(){return Pestle.emit("rwd:windowresize"),this.detectDevice()},e.prototype.detectDevice=function(){var e,n,i,o,r,s,a,c;return n=this.config.breakpoints,a=t.vp.viewportW(),c=this._checkViewport(a,n),t.util.isEmpty(c)?(r="[ext] The passed settings to the Responsive Design Extension might not be correct since we haven't been able to detect an asociated breakpoint to the current viewport",t.log.warn(r)):(i=t.util.string.capitalize(c.name),t.util.isFunction(t.device["is"+i])&&(e=t.device["is"+i]),s=!1,t.util.isFunction(e)&&(s=e()),s||c.name?(o="rwd:"+c.name.toLowerCase(),t.log.info("[ext] Responsive Design extension is triggering the following"),t.log.info(o),Pestle.emit(o),this.device=c.name.toLowerCase()):void 0)},e.prototype.getDevice=function(){return this.device},e.prototype._checkViewport=function(e,n){var i;return i=t.util.filter(n,function(t){return e>=t.bpmin?t.bpmax&&0!==t.bpmax?e<=t.bpmax?!0:!1:!0:!1}),i.length>0?i.shift():{}},e}(),{initialize:function(e){var i,o;return t.log.info("[ext] Responsive Design Extension initialized"),i={},e.config.extension&&e.config.extension[this.optionKey]&&(i=t.util.defaults({},e.config.extension[this.optionKey])),o=new n(i),e.sandbox.rwd=function(){return o.detectDevice()},e.sandbox.rwd.getDevice=function(){return o.getDevice()}},afterAppInitialized:function(e){return t.log.info("afterAppInitialized method from ResponsiveDesign"),e.sandbox.rwd()},name:"Responsive Design Extension",optionKey:"responsivedesign"}})},{"./../base.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/base.coffee"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/extension/responsiveimages.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(){var t,n;return t=e("./../base.coffee"),n=function(){function e(e){null==e&&(e={}),t.util.bindAll(this,"_init","_createListeners","_createInstance"),this.config=t.util.extend({},this.cfg,e),this._init()}return e.prototype.cfg={availableWidths:[133,152,162,225,210,224,280,352,470,536,590,676,710,768,885,945,1190],availablePixelRatios:[1,2,3],defaultSelector:".delayed-image-load",lazymode:!0},e.prototype._init=function(){return this.config.lazymode&&this._createListeners(),this._createInstance()},e.prototype._createListeners=function(){return Pestle.on("responsiveimages:create",this._createInstance)},e.prototype._createInstance=function(e){var n,i;return null==e&&(e={}),t.log.info("[ext] Responsive Images Extension creating a new Imager instance"),i=e.selector||this.config.defaultSelector,n=t.util.isEmpty(e)?this.config:e,new t.Imager(i,n)},e}(),{initialize:function(e){var i;return t.log.info("[ext] Responsive Images Extension initialized"),i={},e.config.extension&&e.config.extension[this.optionKey]&&(i=t.util.defaults({},e.config.extension[this.optionKey])),e.sandbox.responsiveimages=function(){var e;return e=new n(i),Pestle.emit("responsiveimages:initialized")}},afterAppInitialized:function(e){return t.log.info("afterAppInitialized method from ResponsiveImages"),e.sandbox.responsiveimages()},name:"Responsive Images Extension",optionKey:"responsiveimages"}})},{"./../base.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/base.coffee"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/cookies.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(t,n){var i;return i=e("cookies-js"),n={set:function(e,t,n){return i.set(e,t,n)},get:function(e){return i.get(e)},expire:function(e,t){return i.expire(e,t)}}})},{"cookies-js":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/cookies-js/src/cookies.js"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/devicedetection.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(t,n){var i;return i=e("ismobilejs"),n={isMobile:function(){return i.phone},isTablet:function(){return i.tablet},isIphone:function(){return i.apple.phone},isIpod:function(){return i.apple.ipod},isIpad:function(){return i.apple.tablet},isApple:function(){return i.apple.device},isAndroidPhone:function(){return i.android.phone},isAndroidTablet:function(){return i.android.tablet},isAndroidDevice:function(){return i.android.device},isWindowsPhone:function(){return i.windows.phone},isWindowsTablet:function(){return i.windows.tablet},isWindowsDevice:function(){return i.windows.device}}})},{ismobilejs:"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/ismobilejs/isMobile.js"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/eventbus.coffee":[function(e,t){var n={}.hasOwnProperty,i=function(e,t){function i(){this.constructor=e}for(var o in t)n.call(t,o)&&(e[o]=t[o]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e};!function(e,n){return t.exports=n(e,{})}(window,function(t,n){var o;return o=e("wolfy87-eventemitter"),n=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return i(t,e),t}(o)})},{"wolfy87-eventemitter":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/wolfy87-eventemitter/EventEmitter.js"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/extmanager.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(t,n){var i;return i=e("../base.coffee"),n=function(){function e(){this._extensions=[],this._initializedExtensions=[]}return e.prototype._extensionConfigDefaults={activated:!0},e.prototype.add=function(e){var t;return e.name||(t="The extension doesn't have a name associated. It will be hepfull if you have assing all of your extensions a name for better debugging",i.log.warn(t)),i.util.each(this._extensions,function(t){if(_.isEqual(t,e))throw new Error("Extension: "+e.name+" already exists.")}),this._extensions.push(e)},e.prototype.init=function(e){var t;return t=i.util.clone(this._extensions),i.log.info("Added extensions (still not initialized):"),i.log.debug(t),this._initExtension(this._extensions,e),i.log.info("Initialized extensions:"),i.log.debug(this._initializedExtensions)},e.prototype._initExtension=function(e,t){var n;return e.length>0?(n=e.shift(),this._isExtensionAllowedToBeActivated(n,t.config)?(n.activated=!0,n.initialize(t),this._initializedExtensions.push(n)):n.activated=!1,this._initExtension(e,t)):void 0},e.prototype._isExtensionAllowedToBeActivated=function(e,t){var n,o;if(!e.optionKey)throw o="The optionKey is required and was not defined by: "+e.name,i.log.error(o),new Error(o);
return n=t.extension&&t.extension[e.optionKey]&&t.extension[e.optionKey].hasOwnProperty("activated")?t.extension[e.optionKey].activated:this._extensionConfigDefaults.activated},e.prototype.getInitializedExtensions=function(){return this._initializedExtensions},e.prototype.getInitializedExtensionByName=function(e){return i.util.where(this._initializedExtensions,{optionKey:e})},e.prototype.getExtensions=function(){return this._extensions},e.prototype.getExtensionByName=function(e){return i.util.where(this._extensions,{optionKey:e})},e}()})},{"../base.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/base.coffee"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/general.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(e,t){return t={versionCompare:function(e,t,n){var i,o,r,s,a,c;if(o=function(e){return(r?/^\d+[A-Za-z]*$/:/^\d+$/).test(e)},r=n&&n.lexicographical,c=n&&n.zeroExtend,s=e.split("."),a=t.split("."),!s.every(o)||!a.every(o))return 0/0;if(c){for(;s.length<a.length;)s.push("0");for(;a.length<s.length;)a.push("0")}for(r||(s=s.map(Number),a=a.map(Number)),i=-1;i<s.length;){if(i++,a.length<i)return 1;if(s[i]!==a[i]){if(s[i]>a[i])return 1;if(a[i]>s[i])return-1}}return s.length!==a.length?-1:0},string:{capitalize:function(e){return e=null==e?"":String(e),e.charAt(0).toUpperCase()+e.slice(1)}}}})},{}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/logger.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(t,n){var i;return i=e("loglevel"),n={setLevel:function(e){return i.setLevel(e)},trace:function(e){return i.trace(e)},debug:function(e){return i.debug(e)},info:function(e){return i.info(e)},warn:function(e){return i.warn(e)},error:function(e){return i.error(e)}}})},{loglevel:"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/loglevel/lib/loglevel.js"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/module.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(t,n){var i,o,r;return i=e("../base.coffee"),n=function(){function e(e){this.sandbox=e.sandbox,this.options=e.options,this.setElement()}return e}(),o=function(){function e(){}return e.list={},e.add=function(e,t){return this.extend(e,t,n)},e.get=function(e){return i.util.isString(e)&&this.list[e]?this.list[e]:void 0},e.extend=function(e,t,o){var s,a,c,l;if(i.util.isString(e)&&i.util.isObject(t)){if(o)if(i.util.isString(o)){if(s=this.list[o],!s)throw l="[Module/ "+e(0/0+o+"] which does not exist"),i.log.error(l),new Error(l);o=s}else i.util.isFunction(o)&&(o=o);else o=n;return a=r.call(o,t),i.util.has(this.list,e)?(l="[Component:"+e+"] have already been defined",i.log.warn(l),this):(c=r.call(o,t),this.list[e]=c,c)}},e}(),i.util.extend(n.prototype,i.Events,{initialize:function(){var e;return e="[Component/"+this.options.name+"]:Doesn't have an initialize method defined",i.log.warn(e)},setElement:function(){return this.undelegateEvents(),this.el=this.options.el,this.$el=$(this.el),this.delegateEvents()},delegateEvents:function(e){var t,n,o,r;if(t=/^(\S+)\s*(.*)$/,e||(e=i.util.result(this,"events"))){this.undelegateEvents();for(n in e)r=e[n],i.util.isFunction(r)||(r=this[e[n]]),r&&(o=n.match(t),this.delegate(o[1],o[2],i.util.bind(r,this)));return this}},delegate:function(e,t,n){return this.$el.on(e+".pestleEvent"+this.options.guid,t,n),this},undelegateEvents:function(){return this.$el&&this.$el.off(".pestleEvent"+this.options.guid),this},stop:function(){return this.undelegateEvents(),this.$el?this.$el.remove():void 0}}),r=function(e,t){var n,o,r;return r=this,o=e&&i.util.has(e,"constructor")?e.constructor:function(){return r.apply(this,arguments)},i.util.extend(o,r,t),n=function(){this.constructor=o},n.prototype=r.prototype,o.prototype=new n,e&&i.util.extend(o.prototype,e),o.prototype._super_=r.prototype.initialize,o},o.Module=n,o})},{"../base.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/base.coffee"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/versionchecker.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(t,n){var i,o;return o=e("./logger.coffee"),i=e("./general.coffee"),n={check:function(e){var t,r;if(e.length>0){if(t=e.shift(),!t.obj)throw r=t.name+" is a hard dependency and it has to be loaded before pestle.js",o.error(r),new Error(r);if(!(i.versionCompare(t.version,t.required)>=0))throw r="[FAIL] "+t.name+": version required: "+t.required+" <--> Loaded version: "+t.version,o.error(r),new Error(r);return n.check(e)}}}})},{"./general.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/general.coffee","./logger.coffee":"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/logger.coffee"}],"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/src/util/viewportdetection.coffee":[function(e,t){!function(e,n){return t.exports=n(e,{})}(window,function(t,n){var i;return i=e("verge"),n={viewportW:function(){return i.viewportW()},viewportH:function(){return i.viewportH()},viewport:function(){return i.viewport()},inViewport:function(e,t){return i.inViewport(e,t)},inX:function(e,t){return i.inX(e,t)},inY:function(e,t){return i.inY(e,t)},scrollX:function(){return i.scrollX()},scrollY:function(){return i.scrollY()},mq:function(e){return i.mq(e)},rectangle:function(e,t){return i.rectangle(e,t)},aspect:function(e){return i.aspect(e)}}})},{verge:"/home/likewise-open/GLOBANT/francisco.ramini/dev/projects/pestle/node_modules/verge/verge.js"}]},{},["./src/core.coffee"])("./src/core.coffee")});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],25:[function(require,module,exports){
"use strict";var focusNode=require("./focusNode"),AutoFocusMixin={componentDidMount:function(){this.props.autoFocus&&focusNode(this.getDOMNode())}};module.exports=AutoFocusMixin;
},{"./focusNode":135}],26:[function(require,module,exports){
"use strict";function isPresto(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function isKeypressCommand(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),ExecutionEnvironment=require("./ExecutionEnvironment"),SyntheticInputEvent=require("./SyntheticInputEvent"),keyOf=require("./keyOf"),canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&"TextEvent"in window&&!("documentMode"in document||isPresto()),SPACEBAR_CODE=32,SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE),topLevelTypes=EventConstants.topLevelTypes,eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:keyOf({onBeforeInput:null}),captured:keyOf({onBeforeInputCapture:null})},dependencies:[topLevelTypes.topCompositionEnd,topLevelTypes.topKeyPress,topLevelTypes.topTextInput,topLevelTypes.topPaste]}},fallbackChars=null,hasSpaceKeypress=!1,BeforeInputEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,s){var r;if(canUseTextInputEvent)switch(e){case topLevelTypes.topKeyPress:var a=s.which;if(a!==SPACEBAR_CODE)return;hasSpaceKeypress=!0,r=SPACEBAR_CHAR;break;case topLevelTypes.topTextInput:if(r=s.data,r===SPACEBAR_CHAR&&hasSpaceKeypress)return;break;default:return}else{switch(e){case topLevelTypes.topPaste:fallbackChars=null;break;case topLevelTypes.topKeyPress:s.which&&!isKeypressCommand(s)&&(fallbackChars=String.fromCharCode(s.which));break;case topLevelTypes.topCompositionEnd:fallbackChars=s.data}if(null===fallbackChars)return;r=fallbackChars}if(r){var o=SyntheticInputEvent.getPooled(eventTypes.beforeInput,n,s);return o.data=r,fallbackChars=null,EventPropagators.accumulateTwoPhaseDispatches(o),o}}};module.exports=BeforeInputEventPlugin;
},{"./EventConstants":39,"./EventPropagators":44,"./ExecutionEnvironment":45,"./SyntheticInputEvent":113,"./keyOf":157}],27:[function(require,module,exports){
"use strict";function prefixKey(r,o){return r+o.charAt(0).toUpperCase()+o.substring(1)}var isUnitlessNumber={columnCount:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeOpacity:!0},prefixes=["Webkit","ms","Moz","O"];Object.keys(isUnitlessNumber).forEach(function(r){prefixes.forEach(function(o){isUnitlessNumber[prefixKey(o,r)]=isUnitlessNumber[r]})});var shorthandPropertyExpansions={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},CSSProperty={isUnitlessNumber:isUnitlessNumber,shorthandPropertyExpansions:shorthandPropertyExpansions};module.exports=CSSProperty;
},{}],28:[function(require,module,exports){
(function (process){
"use strict";var CSSProperty=require("./CSSProperty"),ExecutionEnvironment=require("./ExecutionEnvironment"),camelizeStyleName=require("./camelizeStyleName"),dangerousStyleValue=require("./dangerousStyleValue"),hyphenateStyleName=require("./hyphenateStyleName"),memoizeStringOnly=require("./memoizeStringOnly"),warning=require("./warning"),processStyleName=memoizeStringOnly(function(e){return hyphenateStyleName(e)}),styleFloatAccessor="cssFloat";if(ExecutionEnvironment.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(styleFloatAccessor="styleFloat"),"production"!==process.env.NODE_ENV)var warnedStyleNames={},warnHyphenatedStyleName=function(e){warnedStyleNames.hasOwnProperty(e)&&warnedStyleNames[e]||(warnedStyleNames[e]=!0,"production"!==process.env.NODE_ENV?warning(!1,"Unsupported style property "+e+". Did you mean "+camelizeStyleName(e)+"?"):null)};var CSSPropertyOperations={createMarkupForStyles:function(e){var r="";for(var t in e)if(e.hasOwnProperty(t)){"production"!==process.env.NODE_ENV&&t.indexOf("-")>-1&&warnHyphenatedStyleName(t);var n=e[t];null!=n&&(r+=processStyleName(t)+":",r+=dangerousStyleValue(t,n)+";")}return r||null},setValueForStyles:function(e,r){var t=e.style;for(var n in r)if(r.hasOwnProperty(n)){"production"!==process.env.NODE_ENV&&n.indexOf("-")>-1&&warnHyphenatedStyleName(n);var a=dangerousStyleValue(n,r[n]);if("float"===n&&(n=styleFloatAccessor),a)t[n]=a;else{var o=CSSProperty.shorthandPropertyExpansions[n];if(o)for(var l in o)t[l]="";else t[n]=""}}}};module.exports=CSSPropertyOperations;
}).call(this,require('_process'))

},{"./CSSProperty":27,"./ExecutionEnvironment":45,"./camelizeStyleName":124,"./dangerousStyleValue":129,"./hyphenateStyleName":148,"./memoizeStringOnly":159,"./warning":169,"_process":22}],29:[function(require,module,exports){
(function (process){
"use strict";function CallbackQueue(){this._callbacks=null,this._contexts=null}var PooledClass=require("./PooledClass"),assign=require("./Object.assign"),invariant=require("./invariant");assign(CallbackQueue.prototype,{enqueue:function(t,l){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(t),this._contexts.push(l)},notifyAll:function(){var t=this._callbacks,l=this._contexts;if(t){"production"!==process.env.NODE_ENV?invariant(t.length===l.length,"Mismatched list of contexts in callback queue"):invariant(t.length===l.length),this._callbacks=null,this._contexts=null;for(var s=0,e=t.length;e>s;s++)t[s].call(l[s]);t.length=0,l.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),PooledClass.addPoolingTo(CallbackQueue),module.exports=CallbackQueue;
}).call(this,require('_process'))

},{"./Object.assign":50,"./PooledClass":51,"./invariant":150,"_process":22}],30:[function(require,module,exports){
"use strict";function shouldUseChangeEvent(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function manualDispatchChangeEvent(e){var t=SyntheticEvent.getPooled(eventTypes.change,activeElementID,e);EventPropagators.accumulateTwoPhaseDispatches(t),ReactUpdates.batchedUpdates(runEventInBatch,t)}function runEventInBatch(e){EventPluginHub.enqueueEvents(e),EventPluginHub.processEventQueue()}function startWatchingForChangeEventIE8(e,t){activeElement=e,activeElementID=t,activeElement.attachEvent("onchange",manualDispatchChangeEvent)}function stopWatchingForChangeEventIE8(){activeElement&&(activeElement.detachEvent("onchange",manualDispatchChangeEvent),activeElement=null,activeElementID=null)}function getTargetIDForChangeEvent(e,t,n){return e===topLevelTypes.topChange?n:void 0}function handleEventsForChangeEventIE8(e,t,n){e===topLevelTypes.topFocus?(stopWatchingForChangeEventIE8(),startWatchingForChangeEventIE8(t,n)):e===topLevelTypes.topBlur&&stopWatchingForChangeEventIE8()}function startWatchingForValueChange(e,t){activeElement=e,activeElementID=t,activeElementValue=e.value,activeElementValueProp=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(activeElement,"value",newValueProp),activeElement.attachEvent("onpropertychange",handlePropertyChange)}function stopWatchingForValueChange(){activeElement&&(delete activeElement.value,activeElement.detachEvent("onpropertychange",handlePropertyChange),activeElement=null,activeElementID=null,activeElementValue=null,activeElementValueProp=null)}function handlePropertyChange(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==activeElementValue&&(activeElementValue=t,manualDispatchChangeEvent(e))}}function getTargetIDForInputEvent(e,t,n){return e===topLevelTypes.topInput?n:void 0}function handleEventsForInputEventIE(e,t,n){e===topLevelTypes.topFocus?(stopWatchingForValueChange(),startWatchingForValueChange(t,n)):e===topLevelTypes.topBlur&&stopWatchingForValueChange()}function getTargetIDForInputEventIE(e){return e!==topLevelTypes.topSelectionChange&&e!==topLevelTypes.topKeyUp&&e!==topLevelTypes.topKeyDown||!activeElement||activeElement.value===activeElementValue?void 0:(activeElementValue=activeElement.value,activeElementID)}function shouldUseClickEvent(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function getTargetIDForClickEvent(e,t,n){return e===topLevelTypes.topClick?n:void 0}var EventConstants=require("./EventConstants"),EventPluginHub=require("./EventPluginHub"),EventPropagators=require("./EventPropagators"),ExecutionEnvironment=require("./ExecutionEnvironment"),ReactUpdates=require("./ReactUpdates"),SyntheticEvent=require("./SyntheticEvent"),isEventSupported=require("./isEventSupported"),isTextInputElement=require("./isTextInputElement"),keyOf=require("./keyOf"),topLevelTypes=EventConstants.topLevelTypes,eventTypes={change:{phasedRegistrationNames:{bubbled:keyOf({onChange:null}),captured:keyOf({onChangeCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topChange,topLevelTypes.topClick,topLevelTypes.topFocus,topLevelTypes.topInput,topLevelTypes.topKeyDown,topLevelTypes.topKeyUp,topLevelTypes.topSelectionChange]}},activeElement=null,activeElementID=null,activeElementValue=null,activeElementValueProp=null,doesChangeEventBubble=!1;ExecutionEnvironment.canUseDOM&&(doesChangeEventBubble=isEventSupported("change")&&(!("documentMode"in document)||document.documentMode>8));var isInputEventSupported=!1;ExecutionEnvironment.canUseDOM&&(isInputEventSupported=isEventSupported("input")&&(!("documentMode"in document)||document.documentMode>9));var newValueProp={get:function(){return activeElementValueProp.get.call(this)},set:function(e){activeElementValue=""+e,activeElementValueProp.set.call(this,e)}},ChangeEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,a){var o,l;if(shouldUseChangeEvent(t)?doesChangeEventBubble?o=getTargetIDForChangeEvent:l=handleEventsForChangeEventIE8:isTextInputElement(t)?isInputEventSupported?o=getTargetIDForInputEvent:(o=getTargetIDForInputEventIE,l=handleEventsForInputEventIE):shouldUseClickEvent(t)&&(o=getTargetIDForClickEvent),o){var u=o(e,t,n);if(u){var v=SyntheticEvent.getPooled(eventTypes.change,u,a);return EventPropagators.accumulateTwoPhaseDispatches(v),v}}l&&l(e,t,n)}};module.exports=ChangeEventPlugin;
},{"./EventConstants":39,"./EventPluginHub":41,"./EventPropagators":44,"./ExecutionEnvironment":45,"./ReactUpdates":103,"./SyntheticEvent":111,"./isEventSupported":151,"./isTextInputElement":153,"./keyOf":157}],31:[function(require,module,exports){
"use strict";var nextReactRootIndex=0,ClientReactRootIndex={createReactRootIndex:function(){return nextReactRootIndex++}};module.exports=ClientReactRootIndex;
},{}],32:[function(require,module,exports){
"use strict";function getCompositionEventType(e){switch(e){case topLevelTypes.topCompositionStart:return eventTypes.compositionStart;case topLevelTypes.topCompositionEnd:return eventTypes.compositionEnd;case topLevelTypes.topCompositionUpdate:return eventTypes.compositionUpdate}}function isFallbackStart(e,t){return e===topLevelTypes.topKeyDown&&t.keyCode===START_KEYCODE}function isFallbackEnd(e,t){switch(e){case topLevelTypes.topKeyUp:return-1!==END_KEYCODES.indexOf(t.keyCode);case topLevelTypes.topKeyDown:return t.keyCode!==START_KEYCODE;case topLevelTypes.topKeyPress:case topLevelTypes.topMouseDown:case topLevelTypes.topBlur:return!0;default:return!1}}function FallbackCompositionState(e){this.root=e,this.startSelection=ReactInputSelection.getSelection(e),this.startValue=this.getText()}var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),ExecutionEnvironment=require("./ExecutionEnvironment"),ReactInputSelection=require("./ReactInputSelection"),SyntheticCompositionEvent=require("./SyntheticCompositionEvent"),getTextContentAccessor=require("./getTextContentAccessor"),keyOf=require("./keyOf"),END_KEYCODES=[9,13,27,32],START_KEYCODE=229,useCompositionEvent=ExecutionEnvironment.canUseDOM&&"CompositionEvent"in window,useFallbackData=!useCompositionEvent||"documentMode"in document&&document.documentMode>8&&document.documentMode<=11,topLevelTypes=EventConstants.topLevelTypes,currentComposition=null,eventTypes={compositionEnd:{phasedRegistrationNames:{bubbled:keyOf({onCompositionEnd:null}),captured:keyOf({onCompositionEndCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionEnd,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:keyOf({onCompositionStart:null}),captured:keyOf({onCompositionStartCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionStart,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:keyOf({onCompositionUpdate:null}),captured:keyOf({onCompositionUpdateCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionUpdate,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]}};FallbackCompositionState.prototype.getText=function(){return this.root.value||this.root[getTextContentAccessor()]},FallbackCompositionState.prototype.getData=function(){var e=this.getText(),t=this.startSelection.start,o=this.startValue.length-this.startSelection.end;return e.substr(t,e.length-o-t)};var CompositionEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,o,n){var p,s;if(useCompositionEvent?p=getCompositionEventType(e):currentComposition?isFallbackEnd(e,n)&&(p=eventTypes.compositionEnd):isFallbackStart(e,n)&&(p=eventTypes.compositionStart),useFallbackData&&(currentComposition||p!==eventTypes.compositionStart?p===eventTypes.compositionEnd&&currentComposition&&(s=currentComposition.getData(),currentComposition=null):currentComposition=new FallbackCompositionState(t)),p){var i=SyntheticCompositionEvent.getPooled(p,o,n);return s&&(i.data=s),EventPropagators.accumulateTwoPhaseDispatches(i),i}}};module.exports=CompositionEventPlugin;
},{"./EventConstants":39,"./EventPropagators":44,"./ExecutionEnvironment":45,"./ReactInputSelection":83,"./SyntheticCompositionEvent":109,"./getTextContentAccessor":145,"./keyOf":157}],33:[function(require,module,exports){
(function (process){
"use strict";function insertChildAt(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var Danger=require("./Danger"),ReactMultiChildUpdateTypes=require("./ReactMultiChildUpdateTypes"),getTextContentAccessor=require("./getTextContentAccessor"),invariant=require("./invariant"),textContentAccessor=getTextContentAccessor(),updateTextContent;updateTextContent="textContent"===textContentAccessor?function(e,t){e.textContent=t}:function(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);if(t){var n=e.ownerDocument||document;e.appendChild(n.createTextNode(t))}};var DOMChildrenOperations={dangerouslyReplaceNodeWithMarkup:Danger.dangerouslyReplaceNodeWithMarkup,updateTextContent:updateTextContent,processUpdates:function(e,t){for(var n,a=null,r=null,i=0;n=e[i];i++)if(n.type===ReactMultiChildUpdateTypes.MOVE_EXISTING||n.type===ReactMultiChildUpdateTypes.REMOVE_NODE){var o=n.fromIndex,d=n.parentNode.childNodes[o],s=n.parentID;"production"!==process.env.NODE_ENV?invariant(d,"processUpdates(): Unable to find child %s of element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",o,s):invariant(d),a=a||{},a[s]=a[s]||[],a[s][o]=d,r=r||[],r.push(d)}var p=Danger.dangerouslyRenderMarkup(t);if(r)for(var l=0;l<r.length;l++)r[l].parentNode.removeChild(r[l]);for(var c=0;n=e[c];c++)switch(n.type){case ReactMultiChildUpdateTypes.INSERT_MARKUP:insertChildAt(n.parentNode,p[n.markupIndex],n.toIndex);break;case ReactMultiChildUpdateTypes.MOVE_EXISTING:insertChildAt(n.parentNode,a[n.parentID][n.fromIndex],n.toIndex);break;case ReactMultiChildUpdateTypes.TEXT_CONTENT:updateTextContent(n.parentNode,n.textContent);break;case ReactMultiChildUpdateTypes.REMOVE_NODE:}}};module.exports=DOMChildrenOperations;
}).call(this,require('_process'))

},{"./Danger":36,"./ReactMultiChildUpdateTypes":89,"./getTextContentAccessor":145,"./invariant":150,"_process":22}],34:[function(require,module,exports){
(function (process){
"use strict";function checkMask(e,t){return(e&t)===t}var invariant=require("./invariant"),DOMPropertyInjection={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},r=e.DOMAttributeNames||{},o=e.DOMPropertyNames||{},a=e.DOMMutationMethods||{};e.isCustomAttribute&&DOMProperty._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var n in t){"production"!==process.env.NODE_ENV?invariant(!DOMProperty.isStandardName.hasOwnProperty(n),"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",n):invariant(!DOMProperty.isStandardName.hasOwnProperty(n)),DOMProperty.isStandardName[n]=!0;var i=n.toLowerCase();if(DOMProperty.getPossibleStandardName[i]=n,r.hasOwnProperty(n)){var s=r[n];DOMProperty.getPossibleStandardName[s]=n,DOMProperty.getAttributeName[n]=s}else DOMProperty.getAttributeName[n]=i;DOMProperty.getPropertyName[n]=o.hasOwnProperty(n)?o[n]:n,DOMProperty.getMutationMethod[n]=a.hasOwnProperty(n)?a[n]:null;var u=t[n];DOMProperty.mustUseAttribute[n]=checkMask(u,DOMPropertyInjection.MUST_USE_ATTRIBUTE),DOMProperty.mustUseProperty[n]=checkMask(u,DOMPropertyInjection.MUST_USE_PROPERTY),DOMProperty.hasSideEffects[n]=checkMask(u,DOMPropertyInjection.HAS_SIDE_EFFECTS),DOMProperty.hasBooleanValue[n]=checkMask(u,DOMPropertyInjection.HAS_BOOLEAN_VALUE),DOMProperty.hasNumericValue[n]=checkMask(u,DOMPropertyInjection.HAS_NUMERIC_VALUE),DOMProperty.hasPositiveNumericValue[n]=checkMask(u,DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE),DOMProperty.hasOverloadedBooleanValue[n]=checkMask(u,DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE),"production"!==process.env.NODE_ENV?invariant(!DOMProperty.mustUseAttribute[n]||!DOMProperty.mustUseProperty[n],"DOMProperty: Cannot require using both attribute and property: %s",n):invariant(!DOMProperty.mustUseAttribute[n]||!DOMProperty.mustUseProperty[n]),"production"!==process.env.NODE_ENV?invariant(DOMProperty.mustUseProperty[n]||!DOMProperty.hasSideEffects[n],"DOMProperty: Properties that have side effects must use property: %s",n):invariant(DOMProperty.mustUseProperty[n]||!DOMProperty.hasSideEffects[n]),"production"!==process.env.NODE_ENV?invariant(!!DOMProperty.hasBooleanValue[n]+!!DOMProperty.hasNumericValue[n]+!!DOMProperty.hasOverloadedBooleanValue[n]<=1,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",n):invariant(!!DOMProperty.hasBooleanValue[n]+!!DOMProperty.hasNumericValue[n]+!!DOMProperty.hasOverloadedBooleanValue[n]<=1)}}},defaultValueCache={},DOMProperty={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<DOMProperty._isCustomAttributeFunctions.length;t++){var r=DOMProperty._isCustomAttributeFunctions[t];if(r(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var r,o=defaultValueCache[e];return o||(defaultValueCache[e]=o={}),t in o||(r=document.createElement(e),o[t]=r[t]),o[t]},injection:DOMPropertyInjection};module.exports=DOMProperty;
}).call(this,require('_process'))

},{"./invariant":150,"_process":22}],35:[function(require,module,exports){
(function (process){
"use strict";function shouldIgnoreValue(e,r){return null==r||DOMProperty.hasBooleanValue[e]&&!r||DOMProperty.hasNumericValue[e]&&isNaN(r)||DOMProperty.hasPositiveNumericValue[e]&&1>r||DOMProperty.hasOverloadedBooleanValue[e]&&r===!1}var DOMProperty=require("./DOMProperty"),escapeTextForBrowser=require("./escapeTextForBrowser"),memoizeStringOnly=require("./memoizeStringOnly"),warning=require("./warning"),processAttributeNameAndPrefix=memoizeStringOnly(function(e){return escapeTextForBrowser(e)+'="'});if("production"!==process.env.NODE_ENV)var reactProps={children:!0,dangerouslySetInnerHTML:!0,key:!0,ref:!0},warnedProperties={},warnUnknownProperty=function(e){if(!(reactProps.hasOwnProperty(e)&&reactProps[e]||warnedProperties.hasOwnProperty(e)&&warnedProperties[e])){warnedProperties[e]=!0;var r=e.toLowerCase(),t=DOMProperty.isCustomAttribute(r)?r:DOMProperty.getPossibleStandardName.hasOwnProperty(r)?DOMProperty.getPossibleStandardName[r]:null;"production"!==process.env.NODE_ENV?warning(null==t,"Unknown DOM property "+e+". Did you mean "+t+"?"):null}};var DOMPropertyOperations={createMarkupForID:function(e){return processAttributeNameAndPrefix(DOMProperty.ID_ATTRIBUTE_NAME)+escapeTextForBrowser(e)+'"'},createMarkupForProperty:function(e,r){if(DOMProperty.isStandardName.hasOwnProperty(e)&&DOMProperty.isStandardName[e]){if(shouldIgnoreValue(e,r))return"";var t=DOMProperty.getAttributeName[e];return DOMProperty.hasBooleanValue[e]||DOMProperty.hasOverloadedBooleanValue[e]&&r===!0?escapeTextForBrowser(t):processAttributeNameAndPrefix(t)+escapeTextForBrowser(r)+'"'}return DOMProperty.isCustomAttribute(e)?null==r?"":processAttributeNameAndPrefix(e)+escapeTextForBrowser(r)+'"':("production"!==process.env.NODE_ENV&&warnUnknownProperty(e),null)},setValueForProperty:function(e,r,t){if(DOMProperty.isStandardName.hasOwnProperty(r)&&DOMProperty.isStandardName[r]){var o=DOMProperty.getMutationMethod[r];if(o)o(e,t);else if(shouldIgnoreValue(r,t))this.deleteValueForProperty(e,r);else if(DOMProperty.mustUseAttribute[r])e.setAttribute(DOMProperty.getAttributeName[r],""+t);else{var a=DOMProperty.getPropertyName[r];DOMProperty.hasSideEffects[r]&&""+e[a]==""+t||(e[a]=t)}}else DOMProperty.isCustomAttribute(r)?null==t?e.removeAttribute(r):e.setAttribute(r,""+t):"production"!==process.env.NODE_ENV&&warnUnknownProperty(r)},deleteValueForProperty:function(e,r){if(DOMProperty.isStandardName.hasOwnProperty(r)&&DOMProperty.isStandardName[r]){var t=DOMProperty.getMutationMethod[r];if(t)t(e,void 0);else if(DOMProperty.mustUseAttribute[r])e.removeAttribute(DOMProperty.getAttributeName[r]);else{var o=DOMProperty.getPropertyName[r],a=DOMProperty.getDefaultValueForProperty(e.nodeName,o);DOMProperty.hasSideEffects[r]&&""+e[o]===a||(e[o]=a)}}else DOMProperty.isCustomAttribute(r)?e.removeAttribute(r):"production"!==process.env.NODE_ENV&&warnUnknownProperty(r)}};module.exports=DOMPropertyOperations;
}).call(this,require('_process'))

},{"./DOMProperty":34,"./escapeTextForBrowser":133,"./memoizeStringOnly":159,"./warning":169,"_process":22}],36:[function(require,module,exports){
(function (process){
"use strict";function getNodeName(e){return e.substring(1,e.indexOf(" "))}var ExecutionEnvironment=require("./ExecutionEnvironment"),createNodesFromMarkup=require("./createNodesFromMarkup"),emptyFunction=require("./emptyFunction"),getMarkupWrap=require("./getMarkupWrap"),invariant=require("./invariant"),OPEN_TAG_NAME_EXP=/^(<[^ \/>]+)/,RESULT_INDEX_ATTR="data-danger-index",Danger={dangerouslyRenderMarkup:function(e){"production"!==process.env.NODE_ENV?invariant(ExecutionEnvironment.canUseDOM,"dangerouslyRenderMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use React.renderToString for server rendering."):invariant(ExecutionEnvironment.canUseDOM);for(var r,n={},a=0;a<e.length;a++)"production"!==process.env.NODE_ENV?invariant(e[a],"dangerouslyRenderMarkup(...): Missing markup."):invariant(e[a]),r=getNodeName(e[a]),r=getMarkupWrap(r)?r:"*",n[r]=n[r]||[],n[r][a]=e[a];var t=[],o=0;for(r in n)if(n.hasOwnProperty(r)){var i=n[r];for(var u in i)if(i.hasOwnProperty(u)){var s=i[u];i[u]=s.replace(OPEN_TAG_NAME_EXP,"$1 "+RESULT_INDEX_ATTR+'="'+u+'" ')}var d=createNodesFromMarkup(i.join(""),emptyFunction);for(a=0;a<d.length;++a){var p=d[a];p.hasAttribute&&p.hasAttribute(RESULT_INDEX_ATTR)?(u=+p.getAttribute(RESULT_INDEX_ATTR),p.removeAttribute(RESULT_INDEX_ATTR),"production"!==process.env.NODE_ENV?invariant(!t.hasOwnProperty(u),"Danger: Assigning to an already-occupied result index."):invariant(!t.hasOwnProperty(u)),t[u]=p,o+=1):"production"!==process.env.NODE_ENV&&console.error("Danger: Discarding unexpected node:",p)}}return"production"!==process.env.NODE_ENV?invariant(o===t.length,"Danger: Did not assign to every index of resultList."):invariant(o===t.length),"production"!==process.env.NODE_ENV?invariant(t.length===e.length,"Danger: Expected markup to render %s nodes, but rendered %s.",e.length,t.length):invariant(t.length===e.length),t},dangerouslyReplaceNodeWithMarkup:function(e,r){"production"!==process.env.NODE_ENV?invariant(ExecutionEnvironment.canUseDOM,"dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use React.renderToString for server rendering."):invariant(ExecutionEnvironment.canUseDOM),"production"!==process.env.NODE_ENV?invariant(r,"dangerouslyReplaceNodeWithMarkup(...): Missing markup."):invariant(r),"production"!==process.env.NODE_ENV?invariant("html"!==e.tagName.toLowerCase(),"dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See renderComponentToString()."):invariant("html"!==e.tagName.toLowerCase());var n=createNodesFromMarkup(r,emptyFunction)[0];e.parentNode.replaceChild(n,e)}};module.exports=Danger;
}).call(this,require('_process'))

},{"./ExecutionEnvironment":45,"./createNodesFromMarkup":128,"./emptyFunction":131,"./getMarkupWrap":142,"./invariant":150,"_process":22}],37:[function(require,module,exports){
"use strict";var keyOf=require("./keyOf"),DefaultEventPluginOrder=[keyOf({ResponderEventPlugin:null}),keyOf({SimpleEventPlugin:null}),keyOf({TapEventPlugin:null}),keyOf({EnterLeaveEventPlugin:null}),keyOf({ChangeEventPlugin:null}),keyOf({SelectEventPlugin:null}),keyOf({CompositionEventPlugin:null}),keyOf({BeforeInputEventPlugin:null}),keyOf({AnalyticsEventPlugin:null}),keyOf({MobileSafariClickEventPlugin:null})];module.exports=DefaultEventPluginOrder;
},{"./keyOf":157}],38:[function(require,module,exports){
"use strict";var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),SyntheticMouseEvent=require("./SyntheticMouseEvent"),ReactMount=require("./ReactMount"),keyOf=require("./keyOf"),topLevelTypes=EventConstants.topLevelTypes,getFirstReactDOM=ReactMount.getFirstReactDOM,eventTypes={mouseEnter:{registrationName:keyOf({onMouseEnter:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]},mouseLeave:{registrationName:keyOf({onMouseLeave:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]}},extractedEvents=[null,null],EnterLeaveEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,o){if(e===topLevelTypes.topMouseOver&&(o.relatedTarget||o.fromElement))return null;if(e!==topLevelTypes.topMouseOut&&e!==topLevelTypes.topMouseOver)return null;var r;if(t.window===t)r=t;else{var s=t.ownerDocument;r=s?s.defaultView||s.parentWindow:window}var a,u;if(e===topLevelTypes.topMouseOut?(a=t,u=getFirstReactDOM(o.relatedTarget||o.toElement)||r):(a=r,u=t),a===u)return null;var v=a?ReactMount.getID(a):"",p=u?ReactMount.getID(u):"",l=SyntheticMouseEvent.getPooled(eventTypes.mouseLeave,v,o);l.type="mouseleave",l.target=a,l.relatedTarget=u;var i=SyntheticMouseEvent.getPooled(eventTypes.mouseEnter,p,o);return i.type="mouseenter",i.target=u,i.relatedTarget=a,EventPropagators.accumulateEnterLeaveDispatches(l,i,v,p),extractedEvents[0]=l,extractedEvents[1]=i,extractedEvents}};module.exports=EnterLeaveEventPlugin;
},{"./EventConstants":39,"./EventPropagators":44,"./ReactMount":87,"./SyntheticMouseEvent":115,"./keyOf":157}],39:[function(require,module,exports){
"use strict";var keyMirror=require("./keyMirror"),PropagationPhases=keyMirror({bubbled:null,captured:null}),topLevelTypes=keyMirror({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),EventConstants={topLevelTypes:topLevelTypes,PropagationPhases:PropagationPhases};module.exports=EventConstants;
},{"./keyMirror":156}],40:[function(require,module,exports){
(function (process){
var emptyFunction=require("./emptyFunction"),EventListener={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):("production"!==process.env.NODE_ENV&&console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."),{remove:emptyFunction})},registerDefault:function(){}};module.exports=EventListener;
}).call(this,require('_process'))

},{"./emptyFunction":131,"_process":22}],41:[function(require,module,exports){
(function (process){
"use strict";function validateInstanceHandle(){var e=!InstanceHandle||!InstanceHandle.traverseTwoPhase||!InstanceHandle.traverseEnterLeave;if(e)throw new Error("InstanceHandle not injected before use!")}var EventPluginRegistry=require("./EventPluginRegistry"),EventPluginUtils=require("./EventPluginUtils"),accumulateInto=require("./accumulateInto"),forEachAccumulated=require("./forEachAccumulated"),invariant=require("./invariant"),listenerBank={},eventQueue=null,executeDispatchesAndRelease=function(e){if(e){var n=EventPluginUtils.executeDispatch,t=EventPluginRegistry.getPluginModuleForEvent(e);t&&t.executeDispatch&&(n=t.executeDispatch),EventPluginUtils.executeDispatchesInOrder(e,n),e.isPersistent()||e.constructor.release(e)}},InstanceHandle=null,EventPluginHub={injection:{injectMount:EventPluginUtils.injection.injectMount,injectInstanceHandle:function(e){InstanceHandle=e,"production"!==process.env.NODE_ENV&&validateInstanceHandle()},getInstanceHandle:function(){return"production"!==process.env.NODE_ENV&&validateInstanceHandle(),InstanceHandle},injectEventPluginOrder:EventPluginRegistry.injectEventPluginOrder,injectEventPluginsByName:EventPluginRegistry.injectEventPluginsByName},eventNameDispatchConfigs:EventPluginRegistry.eventNameDispatchConfigs,registrationNameModules:EventPluginRegistry.registrationNameModules,putListener:function(e,n,t){"production"!==process.env.NODE_ENV?invariant(!t||"function"==typeof t,"Expected %s listener to be a function, instead got type %s",n,typeof t):invariant(!t||"function"==typeof t);var i=listenerBank[n]||(listenerBank[n]={});i[e]=t},getListener:function(e,n){var t=listenerBank[n];return t&&t[e]},deleteListener:function(e,n){var t=listenerBank[n];t&&delete t[e]},deleteAllListeners:function(e){for(var n in listenerBank)delete listenerBank[n][e]},extractEvents:function(e,n,t,i){for(var u,a=EventPluginRegistry.plugins,r=0,s=a.length;s>r;r++){var c=a[r];if(c){var l=c.extractEvents(e,n,t,i);l&&(u=accumulateInto(u,l))}}return u},enqueueEvents:function(e){e&&(eventQueue=accumulateInto(eventQueue,e))},processEventQueue:function(){var e=eventQueue;eventQueue=null,forEachAccumulated(e,executeDispatchesAndRelease),"production"!==process.env.NODE_ENV?invariant(!eventQueue,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."):invariant(!eventQueue)},__purge:function(){listenerBank={}},__getListenerBank:function(){return listenerBank}};module.exports=EventPluginHub;
}).call(this,require('_process'))

},{"./EventPluginRegistry":42,"./EventPluginUtils":43,"./accumulateInto":121,"./forEachAccumulated":136,"./invariant":150,"_process":22}],42:[function(require,module,exports){
(function (process){
"use strict";function recomputePluginOrdering(){if(EventPluginOrder)for(var n in namesToPlugins){var e=namesToPlugins[n],i=EventPluginOrder.indexOf(n);if("production"!==process.env.NODE_ENV?invariant(i>-1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",n):invariant(i>-1),!EventPluginRegistry.plugins[i]){"production"!==process.env.NODE_ENV?invariant(e.extractEvents,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",n):invariant(e.extractEvents),EventPluginRegistry.plugins[i]=e;var t=e.eventTypes;for(var r in t)"production"!==process.env.NODE_ENV?invariant(publishEventForPlugin(t[r],e,r),"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",r,n):invariant(publishEventForPlugin(t[r],e,r))}}}function publishEventForPlugin(n,e,i){"production"!==process.env.NODE_ENV?invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(i),"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",i):invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(i)),EventPluginRegistry.eventNameDispatchConfigs[i]=n;var t=n.phasedRegistrationNames;if(t){for(var r in t)if(t.hasOwnProperty(r)){var s=t[r];publishRegistrationName(s,e,i)}return!0}return n.registrationName?(publishRegistrationName(n.registrationName,e,i),!0):!1}function publishRegistrationName(n,e,i){"production"!==process.env.NODE_ENV?invariant(!EventPluginRegistry.registrationNameModules[n],"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",n):invariant(!EventPluginRegistry.registrationNameModules[n]),EventPluginRegistry.registrationNameModules[n]=e,EventPluginRegistry.registrationNameDependencies[n]=e.eventTypes[i].dependencies}var invariant=require("./invariant"),EventPluginOrder=null,namesToPlugins={},EventPluginRegistry={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(n){"production"!==process.env.NODE_ENV?invariant(!EventPluginOrder,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."):invariant(!EventPluginOrder),EventPluginOrder=Array.prototype.slice.call(n),recomputePluginOrdering()},injectEventPluginsByName:function(n){var e=!1;for(var i in n)if(n.hasOwnProperty(i)){var t=n[i];namesToPlugins.hasOwnProperty(i)&&namesToPlugins[i]===t||("production"!==process.env.NODE_ENV?invariant(!namesToPlugins[i],"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",i):invariant(!namesToPlugins[i]),namesToPlugins[i]=t,e=!0)}e&&recomputePluginOrdering()},getPluginModuleForEvent:function(n){var e=n.dispatchConfig;if(e.registrationName)return EventPluginRegistry.registrationNameModules[e.registrationName]||null;for(var i in e.phasedRegistrationNames)if(e.phasedRegistrationNames.hasOwnProperty(i)){var t=EventPluginRegistry.registrationNameModules[e.phasedRegistrationNames[i]];if(t)return t}return null},_resetEventPlugins:function(){EventPluginOrder=null;for(var n in namesToPlugins)namesToPlugins.hasOwnProperty(n)&&delete namesToPlugins[n];EventPluginRegistry.plugins.length=0;var e=EventPluginRegistry.eventNameDispatchConfigs;for(var i in e)e.hasOwnProperty(i)&&delete e[i];var t=EventPluginRegistry.registrationNameModules;for(var r in t)t.hasOwnProperty(r)&&delete t[r]}};module.exports=EventPluginRegistry;
}).call(this,require('_process'))

},{"./invariant":150,"_process":22}],43:[function(require,module,exports){
(function (process){
"use strict";function isEndish(e){return e===topLevelTypes.topMouseUp||e===topLevelTypes.topTouchEnd||e===topLevelTypes.topTouchCancel}function isMoveish(e){return e===topLevelTypes.topMouseMove||e===topLevelTypes.topTouchMove}function isStartish(e){return e===topLevelTypes.topMouseDown||e===topLevelTypes.topTouchStart}function forEachEventDispatch(e,t){var n=e._dispatchListeners,s=e._dispatchIDs;if("production"!==process.env.NODE_ENV&&validateEventDispatches(e),Array.isArray(n))for(var i=0;i<n.length&&!e.isPropagationStopped();i++)t(e,n[i],s[i]);else n&&t(e,n,s)}function executeDispatch(e,t,n){e.currentTarget=injection.Mount.getNode(n);var s=t(e,n);return e.currentTarget=null,s}function executeDispatchesInOrder(e,t){forEachEventDispatch(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function executeDispatchesInOrderStopAtTrueImpl(e){var t=e._dispatchListeners,n=e._dispatchIDs;if("production"!==process.env.NODE_ENV&&validateEventDispatches(e),Array.isArray(t)){for(var s=0;s<t.length&&!e.isPropagationStopped();s++)if(t[s](e,n[s]))return n[s]}else if(t&&t(e,n))return n;return null}function executeDispatchesInOrderStopAtTrue(e){var t=executeDispatchesInOrderStopAtTrueImpl(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function executeDirectDispatch(e){"production"!==process.env.NODE_ENV&&validateEventDispatches(e);var t=e._dispatchListeners,n=e._dispatchIDs;"production"!==process.env.NODE_ENV?invariant(!Array.isArray(t),"executeDirectDispatch(...): Invalid `event`."):invariant(!Array.isArray(t));var s=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,s}function hasDispatches(e){return!!e._dispatchListeners}var EventConstants=require("./EventConstants"),invariant=require("./invariant"),injection={Mount:null,injectMount:function(e){injection.Mount=e,"production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?invariant(e&&e.getNode,"EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode."):invariant(e&&e.getNode))}},topLevelTypes=EventConstants.topLevelTypes,validateEventDispatches;"production"!==process.env.NODE_ENV&&(validateEventDispatches=function(e){var t=e._dispatchListeners,n=e._dispatchIDs,s=Array.isArray(t),i=Array.isArray(n),r=i?n.length:n?1:0,a=s?t.length:t?1:0;"production"!==process.env.NODE_ENV?invariant(i===s&&r===a,"EventPluginUtils: Invalid `event`."):invariant(i===s&&r===a)});var EventPluginUtils={isEndish:isEndish,isMoveish:isMoveish,isStartish:isStartish,executeDirectDispatch:executeDirectDispatch,executeDispatch:executeDispatch,executeDispatchesInOrder:executeDispatchesInOrder,executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,hasDispatches:hasDispatches,injection:injection,useTouchEvents:!1};module.exports=EventPluginUtils;
}).call(this,require('_process'))

},{"./EventConstants":39,"./invariant":150,"_process":22}],44:[function(require,module,exports){
(function (process){
"use strict";function listenerAtPhase(e,t,a){var c=t.dispatchConfig.phasedRegistrationNames[a];return getListener(e,c)}function accumulateDirectionalDispatches(e,t,a){if("production"!==process.env.NODE_ENV&&!e)throw new Error("Dispatching id must not be null");var c=t?PropagationPhases.bubbled:PropagationPhases.captured,s=listenerAtPhase(e,a,c);s&&(a._dispatchListeners=accumulateInto(a._dispatchListeners,s),a._dispatchIDs=accumulateInto(a._dispatchIDs,e))}function accumulateTwoPhaseDispatchesSingle(e){e&&e.dispatchConfig.phasedRegistrationNames&&EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,accumulateDirectionalDispatches,e)}function accumulateDispatches(e,t,a){if(a&&a.dispatchConfig.registrationName){var c=a.dispatchConfig.registrationName,s=getListener(e,c);s&&(a._dispatchListeners=accumulateInto(a._dispatchListeners,s),a._dispatchIDs=accumulateInto(a._dispatchIDs,e))}}function accumulateDirectDispatchesSingle(e){e&&e.dispatchConfig.registrationName&&accumulateDispatches(e.dispatchMarker,null,e)}function accumulateTwoPhaseDispatches(e){forEachAccumulated(e,accumulateTwoPhaseDispatchesSingle)}function accumulateEnterLeaveDispatches(e,t,a,c){EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(a,c,accumulateDispatches,e,t)}function accumulateDirectDispatches(e){forEachAccumulated(e,accumulateDirectDispatchesSingle)}var EventConstants=require("./EventConstants"),EventPluginHub=require("./EventPluginHub"),accumulateInto=require("./accumulateInto"),forEachAccumulated=require("./forEachAccumulated"),PropagationPhases=EventConstants.PropagationPhases,getListener=EventPluginHub.getListener,EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};module.exports=EventPropagators;
}).call(this,require('_process'))

},{"./EventConstants":39,"./EventPluginHub":41,"./accumulateInto":121,"./forEachAccumulated":136,"_process":22}],45:[function(require,module,exports){
"use strict";var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),ExecutionEnvironment={canUseDOM:canUseDOM,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:canUseDOM&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:canUseDOM&&!!window.screen,isInWorker:!canUseDOM};module.exports=ExecutionEnvironment;
},{}],46:[function(require,module,exports){
"use strict";var DOMProperty=require("./DOMProperty"),ExecutionEnvironment=require("./ExecutionEnvironment"),MUST_USE_ATTRIBUTE=DOMProperty.injection.MUST_USE_ATTRIBUTE,MUST_USE_PROPERTY=DOMProperty.injection.MUST_USE_PROPERTY,HAS_BOOLEAN_VALUE=DOMProperty.injection.HAS_BOOLEAN_VALUE,HAS_SIDE_EFFECTS=DOMProperty.injection.HAS_SIDE_EFFECTS,HAS_NUMERIC_VALUE=DOMProperty.injection.HAS_NUMERIC_VALUE,HAS_POSITIVE_NUMERIC_VALUE=DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE,HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE,hasSVG;if(ExecutionEnvironment.canUseDOM){var implementation=document.implementation;hasSVG=implementation&&implementation.hasFeature&&implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var HTMLDOMPropertyConfig={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,allowTransparency:MUST_USE_ATTRIBUTE,alt:null,async:HAS_BOOLEAN_VALUE,autoComplete:null,autoPlay:HAS_BOOLEAN_VALUE,cellPadding:null,cellSpacing:null,charSet:MUST_USE_ATTRIBUTE,checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,classID:MUST_USE_ATTRIBUTE,className:hasSVG?MUST_USE_ATTRIBUTE:MUST_USE_PROPERTY,cols:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,colSpan:null,content:null,contentEditable:null,contextMenu:MUST_USE_ATTRIBUTE,controls:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,coords:null,crossOrigin:null,data:null,dateTime:MUST_USE_ATTRIBUTE,defer:HAS_BOOLEAN_VALUE,dir:null,disabled:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:null,encType:null,form:MUST_USE_ATTRIBUTE,formAction:MUST_USE_ATTRIBUTE,formEncType:MUST_USE_ATTRIBUTE,formMethod:MUST_USE_ATTRIBUTE,formNoValidate:HAS_BOOLEAN_VALUE,formTarget:MUST_USE_ATTRIBUTE,frameBorder:MUST_USE_ATTRIBUTE,height:MUST_USE_ATTRIBUTE,hidden:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:MUST_USE_PROPERTY,label:null,lang:null,list:MUST_USE_ATTRIBUTE,loop:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,manifest:MUST_USE_ATTRIBUTE,marginHeight:null,marginWidth:null,max:null,maxLength:MUST_USE_ATTRIBUTE,media:MUST_USE_ATTRIBUTE,mediaGroup:null,method:null,min:null,multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,name:null,noValidate:HAS_BOOLEAN_VALUE,open:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,rel:null,required:HAS_BOOLEAN_VALUE,role:MUST_USE_ATTRIBUTE,rows:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,rowSpan:null,sandbox:null,scope:null,scrolling:null,seamless:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,shape:null,size:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,sizes:MUST_USE_ATTRIBUTE,span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:null,src:null,srcDoc:MUST_USE_PROPERTY,srcSet:MUST_USE_ATTRIBUTE,start:HAS_NUMERIC_VALUE,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:MUST_USE_PROPERTY|HAS_SIDE_EFFECTS,width:MUST_USE_ATTRIBUTE,wmode:MUST_USE_ATTRIBUTE,autoCapitalize:null,autoCorrect:null,itemProp:MUST_USE_ATTRIBUTE,itemScope:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,itemType:MUST_USE_ATTRIBUTE,property:null},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"enctype",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};module.exports=HTMLDOMPropertyConfig;
},{"./DOMProperty":34,"./ExecutionEnvironment":45}],47:[function(require,module,exports){
(function (process){
"use strict";function _assertSingleLink(e){"production"!==process.env.NODE_ENV?invariant(null==e.props.checkedLink||null==e.props.valueLink,"Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa."):invariant(null==e.props.checkedLink||null==e.props.valueLink)}function _assertValueLink(e){_assertSingleLink(e),"production"!==process.env.NODE_ENV?invariant(null==e.props.value&&null==e.props.onChange,"Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink."):invariant(null==e.props.value&&null==e.props.onChange)}function _assertCheckedLink(e){_assertSingleLink(e),"production"!==process.env.NODE_ENV?invariant(null==e.props.checked&&null==e.props.onChange,"Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink"):invariant(null==e.props.checked&&null==e.props.onChange)}function _handleLinkedValueChange(e){this.props.valueLink.requestChange(e.target.value)}function _handleLinkedCheckChange(e){this.props.checkedLink.requestChange(e.target.checked)}var ReactPropTypes=require("./ReactPropTypes"),invariant=require("./invariant"),hasReadOnlyValue={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},LinkedValueUtils={Mixin:{propTypes:{value:function(e,n){return!e[n]||hasReadOnlyValue[e.type]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,n){return!e[n]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:ReactPropTypes.func}},getValue:function(e){return e.props.valueLink?(_assertValueLink(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(_assertCheckedLink(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(_assertValueLink(e),_handleLinkedValueChange):e.props.checkedLink?(_assertCheckedLink(e),_handleLinkedCheckChange):e.props.onChange}};module.exports=LinkedValueUtils;
}).call(this,require('_process'))

},{"./ReactPropTypes":96,"./invariant":150,"_process":22}],48:[function(require,module,exports){
(function (process){
"use strict";function remove(e){e.remove()}var ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),accumulateInto=require("./accumulateInto"),forEachAccumulated=require("./forEachAccumulated"),invariant=require("./invariant"),LocalEventTrapMixin={trapBubbledEvent:function(e,t){"production"!==process.env.NODE_ENV?invariant(this.isMounted(),"Must be mounted to trap events"):invariant(this.isMounted());var n=ReactBrowserEventEmitter.trapBubbledEvent(e,t,this.getDOMNode());this._localEventListeners=accumulateInto(this._localEventListeners,n)},componentWillUnmount:function(){this._localEventListeners&&forEachAccumulated(this._localEventListeners,remove)}};module.exports=LocalEventTrapMixin;
}).call(this,require('_process'))

},{"./ReactBrowserEventEmitter":54,"./accumulateInto":121,"./forEachAccumulated":136,"./invariant":150,"_process":22}],49:[function(require,module,exports){
"use strict";var EventConstants=require("./EventConstants"),emptyFunction=require("./emptyFunction"),topLevelTypes=EventConstants.topLevelTypes,MobileSafariClickEventPlugin={eventTypes:null,extractEvents:function(t,e,n,i){if(t===topLevelTypes.topTouchStart){var o=i.target;o&&!o.onclick&&(o.onclick=emptyFunction)}}};module.exports=MobileSafariClickEventPlugin;
},{"./EventConstants":39,"./emptyFunction":131}],50:[function(require,module,exports){
function assign(r){if(null==r)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(r),e=Object.prototype.hasOwnProperty,t=1;t<arguments.length;t++){var a=arguments[t];if(null!=a){var o=Object(a);for(var l in o)e.call(o,l)&&(n[l]=o[l])}}return n}module.exports=assign;
},{}],51:[function(require,module,exports){
(function (process){
"use strict";var invariant=require("./invariant"),oneArgumentPooler=function(e){var o=this;if(o.instancePool.length){var n=o.instancePool.pop();return o.call(n,e),n}return new o(e)},twoArgumentPooler=function(e,o){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,o),r}return new n(e,o)},threeArgumentPooler=function(e,o,n){var r=this;if(r.instancePool.length){var t=r.instancePool.pop();return r.call(t,e,o,n),t}return new r(e,o,n)},fiveArgumentPooler=function(e,o,n,r,t){var l=this;if(l.instancePool.length){var a=l.instancePool.pop();return l.call(a,e,o,n,r,t),a}return new l(e,o,n,r,t)},standardReleaser=function(e){var o=this;"production"!==process.env.NODE_ENV?invariant(e instanceof o,"Trying to release an instance into a pool of a different type."):invariant(e instanceof o),e.destructor&&e.destructor(),o.instancePool.length<o.poolSize&&o.instancePool.push(e)},DEFAULT_POOL_SIZE=10,DEFAULT_POOLER=oneArgumentPooler,addPoolingTo=function(e,o){var n=e;return n.instancePool=[],n.getPooled=o||DEFAULT_POOLER,n.poolSize||(n.poolSize=DEFAULT_POOL_SIZE),n.release=standardReleaser,n},PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fiveArgumentPooler:fiveArgumentPooler};module.exports=PooledClass;
}).call(this,require('_process'))

},{"./invariant":150,"_process":22}],52:[function(require,module,exports){
(function (process){
"use strict";var DOMPropertyOperations=require("./DOMPropertyOperations"),EventPluginUtils=require("./EventPluginUtils"),ReactChildren=require("./ReactChildren"),ReactComponent=require("./ReactComponent"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactContext=require("./ReactContext"),ReactCurrentOwner=require("./ReactCurrentOwner"),ReactElement=require("./ReactElement"),ReactElementValidator=require("./ReactElementValidator"),ReactDOM=require("./ReactDOM"),ReactDOMComponent=require("./ReactDOMComponent"),ReactDefaultInjection=require("./ReactDefaultInjection"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactLegacyElement=require("./ReactLegacyElement"),ReactMount=require("./ReactMount"),ReactMultiChild=require("./ReactMultiChild"),ReactPerf=require("./ReactPerf"),ReactPropTypes=require("./ReactPropTypes"),ReactServerRendering=require("./ReactServerRendering"),ReactTextComponent=require("./ReactTextComponent"),assign=require("./Object.assign"),deprecated=require("./deprecated"),onlyChild=require("./onlyChild");ReactDefaultInjection.inject();var createElement=ReactElement.createElement,createFactory=ReactElement.createFactory;"production"!==process.env.NODE_ENV&&(createElement=ReactElementValidator.createElement,createFactory=ReactElementValidator.createFactory),createElement=ReactLegacyElement.wrapCreateElement(createElement),createFactory=ReactLegacyElement.wrapCreateFactory(createFactory);var render=ReactPerf.measure("React","render",ReactMount.render),React={Children:{map:ReactChildren.map,forEach:ReactChildren.forEach,count:ReactChildren.count,only:onlyChild},DOM:ReactDOM,PropTypes:ReactPropTypes,initializeTouchEvents:function(e){EventPluginUtils.useTouchEvents=e},createClass:ReactCompositeComponent.createClass,createElement:createElement,createFactory:createFactory,constructAndRenderComponent:ReactMount.constructAndRenderComponent,constructAndRenderComponentByID:ReactMount.constructAndRenderComponentByID,render:render,renderToString:ReactServerRendering.renderToString,renderToStaticMarkup:ReactServerRendering.renderToStaticMarkup,unmountComponentAtNode:ReactMount.unmountComponentAtNode,isValidClass:ReactLegacyElement.isValidClass,isValidElement:ReactElement.isValidElement,withContext:ReactContext.withContext,__spread:assign,renderComponent:deprecated("React","renderComponent","render",this,render),renderComponentToString:deprecated("React","renderComponentToString","renderToString",this,ReactServerRendering.renderToString),renderComponentToStaticMarkup:deprecated("React","renderComponentToStaticMarkup","renderToStaticMarkup",this,ReactServerRendering.renderToStaticMarkup),isValidComponent:deprecated("React","isValidComponent","isValidElement",this,ReactElement.isValidElement)};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({Component:ReactComponent,CurrentOwner:ReactCurrentOwner,DOMComponent:ReactDOMComponent,DOMPropertyOperations:DOMPropertyOperations,InstanceHandles:ReactInstanceHandles,Mount:ReactMount,MultiChild:ReactMultiChild,TextComponent:ReactTextComponent}),"production"!==process.env.NODE_ENV){var ExecutionEnvironment=require("./ExecutionEnvironment");if(ExecutionEnvironment.canUseDOM&&window.top===window.self){navigator.userAgent.indexOf("Chrome")>-1&&"undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&console.debug("Download the React DevTools for a better development experience: http://fb.me/react-devtools");for(var expectedFeatures=[Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim,Object.create,Object.freeze],i=0;i<expectedFeatures.length;i++)if(!expectedFeatures[i]){console.error("One or more ES5 shim/shams expected by React are not available: http://fb.me/react-warning-polyfills");break}}}React.version="0.12.2",module.exports=React;
}).call(this,require('_process'))

},{"./DOMPropertyOperations":35,"./EventPluginUtils":43,"./ExecutionEnvironment":45,"./Object.assign":50,"./ReactChildren":55,"./ReactComponent":56,"./ReactCompositeComponent":58,"./ReactContext":59,"./ReactCurrentOwner":60,"./ReactDOM":61,"./ReactDOMComponent":63,"./ReactDefaultInjection":73,"./ReactElement":76,"./ReactElementValidator":77,"./ReactInstanceHandles":84,"./ReactLegacyElement":85,"./ReactMount":87,"./ReactMultiChild":88,"./ReactPerf":92,"./ReactPropTypes":96,"./ReactServerRendering":100,"./ReactTextComponent":102,"./deprecated":130,"./onlyChild":161,"_process":22}],53:[function(require,module,exports){
(function (process){
"use strict";var ReactEmptyComponent=require("./ReactEmptyComponent"),ReactMount=require("./ReactMount"),invariant=require("./invariant"),ReactBrowserComponentMixin={getDOMNode:function(){return"production"!==process.env.NODE_ENV?invariant(this.isMounted(),"getDOMNode(): A component must be mounted to have a DOM node."):invariant(this.isMounted()),ReactEmptyComponent.isNullComponentID(this._rootNodeID)?null:ReactMount.getNode(this._rootNodeID)}};module.exports=ReactBrowserComponentMixin;
}).call(this,require('_process'))

},{"./ReactEmptyComponent":78,"./ReactMount":87,"./invariant":150,"_process":22}],54:[function(require,module,exports){
"use strict";function getListeningForDocument(e){return Object.prototype.hasOwnProperty.call(e,topListenersIDKey)||(e[topListenersIDKey]=reactTopListenersCounter++,alreadyListeningTo[e[topListenersIDKey]]={}),alreadyListeningTo[e[topListenersIDKey]]}var EventConstants=require("./EventConstants"),EventPluginHub=require("./EventPluginHub"),EventPluginRegistry=require("./EventPluginRegistry"),ReactEventEmitterMixin=require("./ReactEventEmitterMixin"),ViewportMetrics=require("./ViewportMetrics"),assign=require("./Object.assign"),isEventSupported=require("./isEventSupported"),alreadyListeningTo={},isMonitoringScrollValue=!1,reactTopListenersCounter=0,topEventMapping={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},topListenersIDKey="_reactListenersID"+String(Math.random()).slice(2),ReactBrowserEventEmitter=assign({},ReactEventEmitterMixin,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel),ReactBrowserEventEmitter.ReactEventListener=e}},setEnabled:function(e){ReactBrowserEventEmitter.ReactEventListener&&ReactBrowserEventEmitter.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!ReactBrowserEventEmitter.ReactEventListener||!ReactBrowserEventEmitter.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var r=t,n=getListeningForDocument(r),o=EventPluginRegistry.registrationNameDependencies[e],i=EventConstants.topLevelTypes,s=0,a=o.length;a>s;s++){var p=o[s];n.hasOwnProperty(p)&&n[p]||(p===i.topWheel?isEventSupported("wheel")?ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topWheel,"wheel",r):isEventSupported("mousewheel")?ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topWheel,"mousewheel",r):ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topWheel,"DOMMouseScroll",r):p===i.topScroll?isEventSupported("scroll",!0)?ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(i.topScroll,"scroll",r):ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topScroll,"scroll",ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE):p===i.topFocus||p===i.topBlur?(isEventSupported("focus",!0)?(ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(i.topFocus,"focus",r),ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(i.topBlur,"blur",r)):isEventSupported("focusin")&&(ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topFocus,"focusin",r),ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(i.topBlur,"focusout",r)),n[i.topBlur]=!0,n[i.topFocus]=!0):topEventMapping.hasOwnProperty(p)&&ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(p,topEventMapping[p],r),n[p]=!0)}},trapBubbledEvent:function(e,t,r){return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(e,t,r)},trapCapturedEvent:function(e,t,r){return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(e,t,r)},ensureScrollValueMonitoring:function(){if(!isMonitoringScrollValue){var e=ViewportMetrics.refreshScrollValues;ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(e),isMonitoringScrollValue=!0}},eventNameDispatchConfigs:EventPluginHub.eventNameDispatchConfigs,registrationNameModules:EventPluginHub.registrationNameModules,putListener:EventPluginHub.putListener,getListener:EventPluginHub.getListener,deleteListener:EventPluginHub.deleteListener,deleteAllListeners:EventPluginHub.deleteAllListeners});module.exports=ReactBrowserEventEmitter;
},{"./EventConstants":39,"./EventPluginHub":41,"./EventPluginRegistry":42,"./Object.assign":50,"./ReactEventEmitterMixin":80,"./ViewportMetrics":120,"./isEventSupported":151}],55:[function(require,module,exports){
(function (process){
"use strict";function ForEachBookKeeping(e,o){this.forEachFunction=e,this.forEachContext=o}function forEachSingleChild(e,o,n,r){var l=e;l.forEachFunction.call(l.forEachContext,o,r)}function forEachChildren(e,o,n){if(null==e)return e;var r=ForEachBookKeeping.getPooled(o,n);traverseAllChildren(e,forEachSingleChild,r),ForEachBookKeeping.release(r)}function MapBookKeeping(e,o,n){this.mapResult=e,this.mapFunction=o,this.mapContext=n}function mapSingleChildIntoContext(e,o,n,r){var l=e,t=l.mapResult,i=!t.hasOwnProperty(n);if("production"!==process.env.NODE_ENV?warning(i,"ReactChildren.map(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",n):null,i){var a=l.mapFunction.call(l.mapContext,o,r);t[n]=a}}function mapChildren(e,o,n){if(null==e)return e;var r={},l=MapBookKeeping.getPooled(r,o,n);return traverseAllChildren(e,mapSingleChildIntoContext,l),MapBookKeeping.release(l),r}function forEachSingleChildDummy(){return null}function countChildren(e){return traverseAllChildren(e,forEachSingleChildDummy,null)}var PooledClass=require("./PooledClass"),traverseAllChildren=require("./traverseAllChildren"),warning=require("./warning"),twoArgumentPooler=PooledClass.twoArgumentPooler,threeArgumentPooler=PooledClass.threeArgumentPooler;PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler),PooledClass.addPoolingTo(MapBookKeeping,threeArgumentPooler);var ReactChildren={forEach:forEachChildren,map:mapChildren,count:countChildren};module.exports=ReactChildren;
}).call(this,require('_process'))

},{"./PooledClass":51,"./traverseAllChildren":168,"./warning":169,"_process":22}],56:[function(require,module,exports){
(function (process){
"use strict";var ReactElement=require("./ReactElement"),ReactOwner=require("./ReactOwner"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),invariant=require("./invariant"),keyMirror=require("./keyMirror"),ComponentLifeCycle=keyMirror({MOUNTED:null,UNMOUNTED:null}),injected=!1,unmountIDFromEnvironment=null,mountImageIntoNode=null,ReactComponent={injection:{injectEnvironment:function(e){"production"!==process.env.NODE_ENV?invariant(!injected,"ReactComponent: injectEnvironment() can only be called once."):invariant(!injected),mountImageIntoNode=e.mountImageIntoNode,unmountIDFromEnvironment=e.unmountIDFromEnvironment,ReactComponent.BackendIDOperations=e.BackendIDOperations,injected=!0}},LifeCycle:ComponentLifeCycle,BackendIDOperations:null,Mixin:{isMounted:function(){return this._lifeCycleState===ComponentLifeCycle.MOUNTED},setProps:function(e,n){var t=this._pendingElement||this._currentElement;this.replaceProps(assign({},t.props,e),n)},replaceProps:function(e,n){"production"!==process.env.NODE_ENV?invariant(this.isMounted(),"replaceProps(...): Can only update a mounted component."):invariant(this.isMounted()),"production"!==process.env.NODE_ENV?invariant(0===this._mountDepth,"replaceProps(...): You called `setProps` or `replaceProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created."):invariant(0===this._mountDepth),this._pendingElement=ReactElement.cloneAndReplaceProps(this._pendingElement||this._currentElement,e),ReactUpdates.enqueueUpdate(this,n)},_setPropsInternal:function(e,n){var t=this._pendingElement||this._currentElement;this._pendingElement=ReactElement.cloneAndReplaceProps(t,assign({},t.props,e)),ReactUpdates.enqueueUpdate(this,n)},construct:function(e){this.props=e.props,this._owner=e._owner,this._lifeCycleState=ComponentLifeCycle.UNMOUNTED,this._pendingCallbacks=null,this._currentElement=e,this._pendingElement=null},mountComponent:function(e,n,t){"production"!==process.env.NODE_ENV?invariant(!this.isMounted(),"mountComponent(%s, ...): Can only mount an unmounted component. Make sure to avoid storing components between renders or reusing a single component instance in multiple places.",e):invariant(!this.isMounted());var o=this._currentElement.ref;if(null!=o){var i=this._currentElement._owner;ReactOwner.addComponentAsRefTo(this,o,i)}this._rootNodeID=e,this._lifeCycleState=ComponentLifeCycle.MOUNTED,this._mountDepth=t},unmountComponent:function(){"production"!==process.env.NODE_ENV?invariant(this.isMounted(),"unmountComponent(): Can only unmount a mounted component."):invariant(this.isMounted());var e=this._currentElement.ref;null!=e&&ReactOwner.removeComponentAsRefFrom(this,e,this._owner),unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null,this._lifeCycleState=ComponentLifeCycle.UNMOUNTED},receiveComponent:function(e,n){"production"!==process.env.NODE_ENV?invariant(this.isMounted(),"receiveComponent(...): Can only update a mounted component."):invariant(this.isMounted()),this._pendingElement=e,this.performUpdateIfNecessary(n)},performUpdateIfNecessary:function(e){if(null!=this._pendingElement){var n=this._currentElement,t=this._pendingElement;this._currentElement=t,this.props=t.props,this._owner=t._owner,this._pendingElement=null,this.updateComponent(e,n)}},updateComponent:function(e,n){var t=this._currentElement;(t._owner!==n._owner||t.ref!==n.ref)&&(null!=n.ref&&ReactOwner.removeComponentAsRefFrom(this,n.ref,n._owner),null!=t.ref&&ReactOwner.addComponentAsRefTo(this,t.ref,t._owner))},mountComponentIntoNode:function(e,n,t){var o=ReactUpdates.ReactReconcileTransaction.getPooled();o.perform(this._mountComponentIntoNode,this,e,n,o,t),ReactUpdates.ReactReconcileTransaction.release(o)},_mountComponentIntoNode:function(e,n,t,o){var i=this.mountComponent(e,t,0);mountImageIntoNode(i,n,o)},isOwnedBy:function(e){return this._owner===e},getSiblingByRef:function(e){var n=this._owner;return n&&n.refs?n.refs[e]:null}}};module.exports=ReactComponent;
}).call(this,require('_process'))

},{"./Object.assign":50,"./ReactElement":76,"./ReactOwner":91,"./ReactUpdates":103,"./invariant":150,"./keyMirror":156,"_process":22}],57:[function(require,module,exports){
(function (process){
"use strict";var ReactDOMIDOperations=require("./ReactDOMIDOperations"),ReactMarkupChecksum=require("./ReactMarkupChecksum"),ReactMount=require("./ReactMount"),ReactPerf=require("./ReactPerf"),ReactReconcileTransaction=require("./ReactReconcileTransaction"),getReactRootElementInContainer=require("./getReactRootElementInContainer"),invariant=require("./invariant"),setInnerHTML=require("./setInnerHTML"),ELEMENT_NODE_TYPE=1,DOC_NODE_TYPE=9,ReactComponentBrowserEnvironment={ReactReconcileTransaction:ReactReconcileTransaction,BackendIDOperations:ReactDOMIDOperations,unmountIDFromEnvironment:function(e){ReactMount.purgeID(e)},mountImageIntoNode:ReactPerf.measure("ReactComponentBrowserEnvironment","mountImageIntoNode",function(e,n,t){if("production"!==process.env.NODE_ENV?invariant(n&&(n.nodeType===ELEMENT_NODE_TYPE||n.nodeType===DOC_NODE_TYPE),"mountComponentIntoNode(...): Target container is not valid."):invariant(n&&(n.nodeType===ELEMENT_NODE_TYPE||n.nodeType===DOC_NODE_TYPE)),t){if(ReactMarkupChecksum.canReuseMarkup(e,getReactRootElementInContainer(n)))return;"production"!==process.env.NODE_ENV?invariant(n.nodeType!==DOC_NODE_TYPE,"You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side."):invariant(n.nodeType!==DOC_NODE_TYPE),"production"!==process.env.NODE_ENV&&console.warn("React attempted to use reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server.")}"production"!==process.env.NODE_ENV?invariant(n.nodeType!==DOC_NODE_TYPE,"You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See renderComponentToString() for server rendering."):invariant(n.nodeType!==DOC_NODE_TYPE),setInnerHTML(n,e)})};module.exports=ReactComponentBrowserEnvironment;
}).call(this,require('_process'))

},{"./ReactDOMIDOperations":65,"./ReactMarkupChecksum":86,"./ReactMount":87,"./ReactPerf":92,"./ReactReconcileTransaction":98,"./getReactRootElementInContainer":144,"./invariant":150,"./setInnerHTML":164,"_process":22}],58:[function(require,module,exports){
(function (process){
"use strict";function getDeclarationErrorAddendum(e){var t=e._owner||null;return t&&t.constructor&&t.constructor.displayName?" Check the render method of `"+t.constructor.displayName+"`.":""}function validateTypeDef(e,t,n){for(var o in t)t.hasOwnProperty(o)&&("production"!==process.env.NODE_ENV?invariant("function"==typeof t[o],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e.displayName||"ReactCompositeComponent",ReactPropTypeLocationNames[n],o):invariant("function"==typeof t[o]))}function validateMethodOverride(e,t){var n=ReactCompositeComponentInterface.hasOwnProperty(t)?ReactCompositeComponentInterface[t]:null;ReactCompositeComponentMixin.hasOwnProperty(t)&&("production"!==process.env.NODE_ENV?invariant(n===SpecPolicy.OVERRIDE_BASE,"ReactCompositeComponentInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t):invariant(n===SpecPolicy.OVERRIDE_BASE)),e.hasOwnProperty(t)&&("production"!==process.env.NODE_ENV?invariant(n===SpecPolicy.DEFINE_MANY||n===SpecPolicy.DEFINE_MANY_MERGED,"ReactCompositeComponentInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t):invariant(n===SpecPolicy.DEFINE_MANY||n===SpecPolicy.DEFINE_MANY_MERGED))}function validateLifeCycleOnReplaceState(e){var t=e._compositeLifeCycleState;"production"!==process.env.NODE_ENV?invariant(e.isMounted()||t===CompositeLifeCycle.MOUNTING,"replaceState(...): Can only update a mounted or mounting component."):invariant(e.isMounted()||t===CompositeLifeCycle.MOUNTING),"production"!==process.env.NODE_ENV?invariant(null==ReactCurrentOwner.current,"replaceState(...): Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."):invariant(null==ReactCurrentOwner.current),"production"!==process.env.NODE_ENV?invariant(t!==CompositeLifeCycle.UNMOUNTING,"replaceState(...): Cannot update while unmounting component. This usually means you called setState() on an unmounted component."):invariant(t!==CompositeLifeCycle.UNMOUNTING)}function mixSpecIntoComponent(e,t){if(t){"production"!==process.env.NODE_ENV?invariant(!ReactLegacyElement.isValidFactory(t),"ReactCompositeComponent: You're attempting to use a component class as a mixin. Instead, just use a regular object."):invariant(!ReactLegacyElement.isValidFactory(t)),"production"!==process.env.NODE_ENV?invariant(!ReactElement.isValidElement(t),"ReactCompositeComponent: You're attempting to use a component as a mixin. Instead, just use a regular object."):invariant(!ReactElement.isValidElement(t));var n=e.prototype;t.hasOwnProperty(MIXINS_KEY)&&RESERVED_SPEC_KEYS.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==MIXINS_KEY){var i=t[o];if(validateMethodOverride(n,o),RESERVED_SPEC_KEYS.hasOwnProperty(o))RESERVED_SPEC_KEYS[o](e,i);else{var r=ReactCompositeComponentInterface.hasOwnProperty(o),a=n.hasOwnProperty(o),c=i&&i.__reactDontBind,s="function"==typeof i,p=s&&!r&&!a&&!c;if(p)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=i,n[o]=i;else if(a){var u=ReactCompositeComponentInterface[o];"production"!==process.env.NODE_ENV?invariant(r&&(u===SpecPolicy.DEFINE_MANY_MERGED||u===SpecPolicy.DEFINE_MANY),"ReactCompositeComponent: Unexpected spec policy %s for key %s when mixing in component specs.",u,o):invariant(r&&(u===SpecPolicy.DEFINE_MANY_MERGED||u===SpecPolicy.DEFINE_MANY)),u===SpecPolicy.DEFINE_MANY_MERGED?n[o]=createMergedResultFunction(n[o],i):u===SpecPolicy.DEFINE_MANY&&(n[o]=createChainedFunction(n[o],i))}else n[o]=i,"production"!==process.env.NODE_ENV&&"function"==typeof i&&t.displayName&&(n[o].displayName=t.displayName+"_"+o)}}}}function mixStaticSpecIntoComponent(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var i=n in RESERVED_SPEC_KEYS;"production"!==process.env.NODE_ENV?invariant(!i,'ReactCompositeComponent: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n):invariant(!i);var r=n in e;"production"!==process.env.NODE_ENV?invariant(!r,"ReactCompositeComponent: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n):invariant(!r),e[n]=o}}}function mergeObjectsWithNoDuplicateKeys(e,t){return"production"!==process.env.NODE_ENV?invariant(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeObjectsWithNoDuplicateKeys(): Cannot merge non-objects"):invariant(e&&t&&"object"==typeof e&&"object"==typeof t),mapObject(t,function(t,n){"production"!==process.env.NODE_ENV?invariant(void 0===e[n],"mergeObjectsWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n):invariant(void 0===e[n]),e[n]=t}),e}function createMergedResultFunction(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);return null==n?o:null==o?n:mergeObjectsWithNoDuplicateKeys(n,o)}}function createChainedFunction(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}var ReactComponent=require("./ReactComponent"),ReactContext=require("./ReactContext"),ReactCurrentOwner=require("./ReactCurrentOwner"),ReactElement=require("./ReactElement"),ReactElementValidator=require("./ReactElementValidator"),ReactEmptyComponent=require("./ReactEmptyComponent"),ReactErrorUtils=require("./ReactErrorUtils"),ReactLegacyElement=require("./ReactLegacyElement"),ReactOwner=require("./ReactOwner"),ReactPerf=require("./ReactPerf"),ReactPropTransferer=require("./ReactPropTransferer"),ReactPropTypeLocations=require("./ReactPropTypeLocations"),ReactPropTypeLocationNames=require("./ReactPropTypeLocationNames"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),instantiateReactComponent=require("./instantiateReactComponent"),invariant=require("./invariant"),keyMirror=require("./keyMirror"),keyOf=require("./keyOf"),monitorCodeUse=require("./monitorCodeUse"),mapObject=require("./mapObject"),shouldUpdateReactComponent=require("./shouldUpdateReactComponent"),warning=require("./warning"),MIXINS_KEY=keyOf({mixins:null}),SpecPolicy=keyMirror({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),injectedMixins=[],ReactCompositeComponentInterface={mixins:SpecPolicy.DEFINE_MANY,statics:SpecPolicy.DEFINE_MANY,propTypes:SpecPolicy.DEFINE_MANY,contextTypes:SpecPolicy.DEFINE_MANY,childContextTypes:SpecPolicy.DEFINE_MANY,getDefaultProps:SpecPolicy.DEFINE_MANY_MERGED,getInitialState:SpecPolicy.DEFINE_MANY_MERGED,getChildContext:SpecPolicy.DEFINE_MANY_MERGED,render:SpecPolicy.DEFINE_ONCE,componentWillMount:SpecPolicy.DEFINE_MANY,componentDidMount:SpecPolicy.DEFINE_MANY,componentWillReceiveProps:SpecPolicy.DEFINE_MANY,shouldComponentUpdate:SpecPolicy.DEFINE_ONCE,componentWillUpdate:SpecPolicy.DEFINE_MANY,componentDidUpdate:SpecPolicy.DEFINE_MANY,componentWillUnmount:SpecPolicy.DEFINE_MANY,updateComponent:SpecPolicy.OVERRIDE_BASE},RESERVED_SPEC_KEYS={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)mixSpecIntoComponent(e,t[n])},childContextTypes:function(e,t){validateTypeDef(e,t,ReactPropTypeLocations.childContext),e.childContextTypes=assign({},e.childContextTypes,t)},contextTypes:function(e,t){validateTypeDef(e,t,ReactPropTypeLocations.context),e.contextTypes=assign({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps=e.getDefaultProps?createMergedResultFunction(e.getDefaultProps,t):t},propTypes:function(e,t){validateTypeDef(e,t,ReactPropTypeLocations.prop),e.propTypes=assign({},e.propTypes,t)},statics:function(e,t){mixStaticSpecIntoComponent(e,t)}},CompositeLifeCycle=keyMirror({MOUNTING:null,UNMOUNTING:null,RECEIVING_PROPS:null}),ReactCompositeComponentMixin={construct:function(){ReactComponent.Mixin.construct.apply(this,arguments),ReactOwner.Mixin.construct.apply(this,arguments),this.state=null,this._pendingState=null,this.context=null,this._compositeLifeCycleState=null},isMounted:function(){return ReactComponent.Mixin.isMounted.call(this)&&this._compositeLifeCycleState!==CompositeLifeCycle.MOUNTING},mountComponent:ReactPerf.measure("ReactCompositeComponent","mountComponent",function(e,t,n){ReactComponent.Mixin.mountComponent.call(this,e,t,n),this._compositeLifeCycleState=CompositeLifeCycle.MOUNTING,this.__reactAutoBindMap&&this._bindAutoBindMethods(),this.context=this._processContext(this._currentElement._context),this.props=this._processProps(this.props),this.state=this.getInitialState?this.getInitialState():null,"production"!==process.env.NODE_ENV?invariant("object"==typeof this.state&&!Array.isArray(this.state),"%s.getInitialState(): must return an object or null",this.constructor.displayName||"ReactCompositeComponent"):invariant("object"==typeof this.state&&!Array.isArray(this.state)),this._pendingState=null,this._pendingForceUpdate=!1,this.componentWillMount&&(this.componentWillMount(),this._pendingState&&(this.state=this._pendingState,this._pendingState=null)),this._renderedComponent=instantiateReactComponent(this._renderValidatedComponent(),this._currentElement.type),this._compositeLifeCycleState=null;var o=this._renderedComponent.mountComponent(e,t,n+1);return this.componentDidMount&&t.getReactMountReady().enqueue(this.componentDidMount,this),o}),unmountComponent:function(){this._compositeLifeCycleState=CompositeLifeCycle.UNMOUNTING,this.componentWillUnmount&&this.componentWillUnmount(),this._compositeLifeCycleState=null,this._renderedComponent.unmountComponent(),this._renderedComponent=null,ReactComponent.Mixin.unmountComponent.call(this)},setState:function(e,t){"production"!==process.env.NODE_ENV?invariant("object"==typeof e||null==e,"setState(...): takes an object of state variables to update."):invariant("object"==typeof e||null==e),"production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?warning(null!=e,"setState(...): You passed an undefined or null state object; instead, use forceUpdate()."):null),this.replaceState(assign({},this._pendingState||this.state,e),t)},replaceState:function(e,t){validateLifeCycleOnReplaceState(this),this._pendingState=e,this._compositeLifeCycleState!==CompositeLifeCycle.MOUNTING&&ReactUpdates.enqueueUpdate(this,t)},_processContext:function(e){var t=null,n=this.constructor.contextTypes;if(n){t={};for(var o in n)t[o]=e[o];"production"!==process.env.NODE_ENV&&this._checkPropTypes(n,t,ReactPropTypeLocations.context)}return t},_processChildContext:function(e){var t=this.getChildContext&&this.getChildContext(),n=this.constructor.displayName||"ReactCompositeComponent";if(t){"production"!==process.env.NODE_ENV?invariant("object"==typeof this.constructor.childContextTypes,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",n):invariant("object"==typeof this.constructor.childContextTypes),"production"!==process.env.NODE_ENV&&this._checkPropTypes(this.constructor.childContextTypes,t,ReactPropTypeLocations.childContext);for(var o in t)"production"!==process.env.NODE_ENV?invariant(o in this.constructor.childContextTypes,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',n,o):invariant(o in this.constructor.childContextTypes);return assign({},e,t)}return e},_processProps:function(e){if("production"!==process.env.NODE_ENV){var t=this.constructor.propTypes;t&&this._checkPropTypes(t,e,ReactPropTypeLocations.prop)}return e},_checkPropTypes:function(e,t,n){var o=this.constructor.displayName;for(var i in e)if(e.hasOwnProperty(i)){var r=e[i](t,i,o,n);if(r instanceof Error){var a=getDeclarationErrorAddendum(this);"production"!==process.env.NODE_ENV?warning(!1,r.message+a):null}}},performUpdateIfNecessary:function(e){var t=this._compositeLifeCycleState;if(t!==CompositeLifeCycle.MOUNTING&&t!==CompositeLifeCycle.RECEIVING_PROPS&&(null!=this._pendingElement||null!=this._pendingState||this._pendingForceUpdate)){var n=this.context,o=this.props,i=this._currentElement;null!=this._pendingElement&&(i=this._pendingElement,n=this._processContext(i._context),o=this._processProps(i.props),this._pendingElement=null,this._compositeLifeCycleState=CompositeLifeCycle.RECEIVING_PROPS,this.componentWillReceiveProps&&this.componentWillReceiveProps(o,n)),this._compositeLifeCycleState=null;var r=this._pendingState||this.state;this._pendingState=null;var a=this._pendingForceUpdate||!this.shouldComponentUpdate||this.shouldComponentUpdate(o,r,n);"production"!==process.env.NODE_ENV&&"undefined"==typeof a&&console.warn((this.constructor.displayName||"ReactCompositeComponent")+".shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false."),a?(this._pendingForceUpdate=!1,this._performComponentUpdate(i,o,r,n,e)):(this._currentElement=i,this.props=o,this.state=r,this.context=n,this._owner=i._owner)}},_performComponentUpdate:function(e,t,n,o,i){var r=this._currentElement,a=this.props,c=this.state,s=this.context;this.componentWillUpdate&&this.componentWillUpdate(t,n,o),this._currentElement=e,this.props=t,this.state=n,this.context=o,this._owner=e._owner,this.updateComponent(i,r),this.componentDidUpdate&&i.getReactMountReady().enqueue(this.componentDidUpdate.bind(this,a,c,s),this)},receiveComponent:function(e,t){(e!==this._currentElement||null==e._owner)&&ReactComponent.Mixin.receiveComponent.call(this,e,t)},updateComponent:ReactPerf.measure("ReactCompositeComponent","updateComponent",function(e,t){ReactComponent.Mixin.updateComponent.call(this,e,t);var n=this._renderedComponent,o=n._currentElement,i=this._renderValidatedComponent();if(shouldUpdateReactComponent(o,i))n.receiveComponent(i,e);else{var r=this._rootNodeID,a=n._rootNodeID;n.unmountComponent(),this._renderedComponent=instantiateReactComponent(i,this._currentElement.type);var c=this._renderedComponent.mountComponent(r,e,this._mountDepth+1);ReactComponent.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(a,c)}}),forceUpdate:function(e){var t=this._compositeLifeCycleState;"production"!==process.env.NODE_ENV?invariant(this.isMounted()||t===CompositeLifeCycle.MOUNTING,"forceUpdate(...): Can only force an update on mounted or mounting components."):invariant(this.isMounted()||t===CompositeLifeCycle.MOUNTING),"production"!==process.env.NODE_ENV?invariant(t!==CompositeLifeCycle.UNMOUNTING&&null==ReactCurrentOwner.current,"forceUpdate(...): Cannot force an update while unmounting component or within a `render` function."):invariant(t!==CompositeLifeCycle.UNMOUNTING&&null==ReactCurrentOwner.current),this._pendingForceUpdate=!0,ReactUpdates.enqueueUpdate(this,e)},_renderValidatedComponent:ReactPerf.measure("ReactCompositeComponent","_renderValidatedComponent",function(){var e,t=ReactContext.current;ReactContext.current=this._processChildContext(this._currentElement._context),ReactCurrentOwner.current=this;try{e=this.render(),null===e||e===!1?(e=ReactEmptyComponent.getEmptyComponent(),ReactEmptyComponent.registerNullComponentID(this._rootNodeID)):ReactEmptyComponent.deregisterNullComponentID(this._rootNodeID)}finally{ReactContext.current=t,ReactCurrentOwner.current=null}return"production"!==process.env.NODE_ENV?invariant(ReactElement.isValidElement(e),"%s.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.",this.constructor.displayName||"ReactCompositeComponent"):invariant(ReactElement.isValidElement(e)),e}),_bindAutoBindMethods:function(){for(var e in this.__reactAutoBindMap)if(this.__reactAutoBindMap.hasOwnProperty(e)){var t=this.__reactAutoBindMap[e];this[e]=this._bindAutoBindMethod(ReactErrorUtils.guard(t,this.constructor.displayName+"."+e))}},_bindAutoBindMethod:function(e){var t=this,n=e.bind(t);if("production"!==process.env.NODE_ENV){n.__reactBoundContext=t,n.__reactBoundMethod=e,n.__reactBoundArguments=null;var o=t.constructor.displayName,i=n.bind;n.bind=function(r){for(var a=[],c=1,s=arguments.length;s>c;c++)a.push(arguments[c]);if(r!==t&&null!==r)monitorCodeUse("react_bind_warning",{component:o}),console.warn("bind(): React component methods may only be bound to the component instance. See "+o);else if(!a.length)return monitorCodeUse("react_bind_warning",{component:o}),console.warn("bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See "+o),n;var p=i.apply(n,arguments);return p.__reactBoundContext=t,p.__reactBoundMethod=e,p.__reactBoundArguments=a,p}}return n}},ReactCompositeComponentBase=function(){};assign(ReactCompositeComponentBase.prototype,ReactComponent.Mixin,ReactOwner.Mixin,ReactPropTransferer.Mixin,ReactCompositeComponentMixin);var ReactCompositeComponent={LifeCycle:CompositeLifeCycle,Base:ReactCompositeComponentBase,createClass:function(e){var t=function(){};t.prototype=new ReactCompositeComponentBase,t.prototype.constructor=t,injectedMixins.forEach(mixSpecIntoComponent.bind(null,t)),mixSpecIntoComponent(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),"production"!==process.env.NODE_ENV?invariant(t.prototype.render,"createClass(...): Class specification must implement a `render` method."):invariant(t.prototype.render),"production"!==process.env.NODE_ENV&&t.prototype.componentShouldUpdate&&(monitorCodeUse("react_component_should_update_warning",{component:e.displayName}),console.warn((e.displayName||"A component")+" has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value."));for(var n in ReactCompositeComponentInterface)t.prototype[n]||(t.prototype[n]=null);return ReactLegacyElement.wrapFactory("production"!==process.env.NODE_ENV?ReactElementValidator.createFactory(t):ReactElement.createFactory(t))},injection:{injectMixin:function(e){injectedMixins.push(e)}}};module.exports=ReactCompositeComponent;
}).call(this,require('_process'))

},{"./Object.assign":50,"./ReactComponent":56,"./ReactContext":59,"./ReactCurrentOwner":60,"./ReactElement":76,"./ReactElementValidator":77,"./ReactEmptyComponent":78,"./ReactErrorUtils":79,"./ReactLegacyElement":85,"./ReactOwner":91,"./ReactPerf":92,"./ReactPropTransferer":93,"./ReactPropTypeLocationNames":94,"./ReactPropTypeLocations":95,"./ReactUpdates":103,"./instantiateReactComponent":149,"./invariant":150,"./keyMirror":156,"./keyOf":157,"./mapObject":158,"./monitorCodeUse":160,"./shouldUpdateReactComponent":166,"./warning":169,"_process":22}],59:[function(require,module,exports){
"use strict";var assign=require("./Object.assign"),ReactContext={current:{},withContext:function(t,e){var n,r=ReactContext.current;ReactContext.current=assign({},r,t);try{n=e()}finally{ReactContext.current=r}return n}};module.exports=ReactContext;
},{"./Object.assign":50}],60:[function(require,module,exports){
"use strict";var ReactCurrentOwner={current:null};module.exports=ReactCurrentOwner;
},{}],61:[function(require,module,exports){
(function (process){
"use strict";function createDOMFactory(e){return ReactLegacyElement.markNonLegacyFactory("production"!==process.env.NODE_ENV?ReactElementValidator.createFactory(e):ReactElement.createFactory(e))}var ReactElement=require("./ReactElement"),ReactElementValidator=require("./ReactElementValidator"),ReactLegacyElement=require("./ReactLegacyElement"),mapObject=require("./mapObject"),ReactDOM=mapObject({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},createDOMFactory);module.exports=ReactDOM;
}).call(this,require('_process'))

},{"./ReactElement":76,"./ReactElementValidator":77,"./ReactLegacyElement":85,"./mapObject":158,"_process":22}],62:[function(require,module,exports){
"use strict";var AutoFocusMixin=require("./AutoFocusMixin"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),keyMirror=require("./keyMirror"),button=ReactElement.createFactory(ReactDOM.button.type),mouseListenerNames=keyMirror({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),ReactDOMButton=ReactCompositeComponent.createClass({displayName:"ReactDOMButton",mixins:[AutoFocusMixin,ReactBrowserComponentMixin],render:function(){var e={};for(var o in this.props)!this.props.hasOwnProperty(o)||this.props.disabled&&mouseListenerNames[o]||(e[o]=this.props[o]);return button(e,this.props.children)}});module.exports=ReactDOMButton;
},{"./AutoFocusMixin":25,"./ReactBrowserComponentMixin":53,"./ReactCompositeComponent":58,"./ReactDOM":61,"./ReactElement":76,"./keyMirror":156}],63:[function(require,module,exports){
(function (process){
"use strict";function assertValidProps(e){e&&("production"!==process.env.NODE_ENV?invariant(null==e.children||null==e.dangerouslySetInnerHTML,"Can only set one of `children` or `props.dangerouslySetInnerHTML`."):invariant(null==e.children||null==e.dangerouslySetInnerHTML),"production"!==process.env.NODE_ENV&&e.contentEditable&&null!=e.children&&console.warn("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),"production"!==process.env.NODE_ENV?invariant(null==e.style||"object"==typeof e.style,"The `style` prop expects a mapping from style properties to values, not a string."):invariant(null==e.style||"object"==typeof e.style))}function putListener(e,t,n,r){"production"!==process.env.NODE_ENV&&("onScroll"!==t||isEventSupported("scroll",!0)||(monitorCodeUse("react_no_scroll_event"),console.warn("This browser doesn't support the `onScroll` event")));var o=ReactMount.findReactContainerForID(e);if(o){var i=o.nodeType===ELEMENT_NODE_TYPE?o.ownerDocument:o;listenTo(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function validateDangerousTag(e){hasOwnProperty.call(validatedTagCache,e)||("production"!==process.env.NODE_ENV?invariant(VALID_TAG_REGEX.test(e),"Invalid tag: %s",e):invariant(VALID_TAG_REGEX.test(e)),validatedTagCache[e]=!0)}function ReactDOMComponent(e){validateDangerousTag(e),this._tag=e,this.tagName=e.toUpperCase()}var CSSPropertyOperations=require("./CSSPropertyOperations"),DOMProperty=require("./DOMProperty"),DOMPropertyOperations=require("./DOMPropertyOperations"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactComponent=require("./ReactComponent"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),ReactMount=require("./ReactMount"),ReactMultiChild=require("./ReactMultiChild"),ReactPerf=require("./ReactPerf"),assign=require("./Object.assign"),escapeTextForBrowser=require("./escapeTextForBrowser"),invariant=require("./invariant"),isEventSupported=require("./isEventSupported"),keyOf=require("./keyOf"),monitorCodeUse=require("./monitorCodeUse"),deleteListener=ReactBrowserEventEmitter.deleteListener,listenTo=ReactBrowserEventEmitter.listenTo,registrationNameModules=ReactBrowserEventEmitter.registrationNameModules,CONTENT_TYPES={string:!0,number:!0},STYLE=keyOf({style:null}),ELEMENT_NODE_TYPE=1,omittedCloseTags={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},VALID_TAG_REGEX=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,validatedTagCache={},hasOwnProperty={}.hasOwnProperty;ReactDOMComponent.displayName="ReactDOMComponent",ReactDOMComponent.Mixin={mountComponent:ReactPerf.measure("ReactDOMComponent","mountComponent",function(e,t,n){ReactComponent.Mixin.mountComponent.call(this,e,t,n),assertValidProps(this.props);var r=omittedCloseTags[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t)+r}),_createOpenTagMarkupAndPutListeners:function(e){var t=this.props,n="<"+this._tag;for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];if(null!=o)if(registrationNameModules.hasOwnProperty(r))putListener(this._rootNodeID,r,o,e);else{r===STYLE&&(o&&(o=t.style=assign({},t.style)),o=CSSPropertyOperations.createMarkupForStyles(o));var i=DOMPropertyOperations.createMarkupForProperty(r,o);i&&(n+=" "+i)}}if(e.renderToStaticMarkup)return n+">";var a=DOMPropertyOperations.createMarkupForID(this._rootNodeID);return n+" "+a+">"},_createContentMarkup:function(e){var t=this.props.dangerouslySetInnerHTML;if(null!=t){if(null!=t.__html)return t.__html}else{var n=CONTENT_TYPES[typeof this.props.children]?this.props.children:null,r=null!=n?null:this.props.children;if(null!=n)return escapeTextForBrowser(n);if(null!=r){var o=this.mountChildren(r,e);return o.join("")}}return""},receiveComponent:function(e,t){(e!==this._currentElement||null==e._owner)&&ReactComponent.Mixin.receiveComponent.call(this,e,t)},updateComponent:ReactPerf.measure("ReactDOMComponent","updateComponent",function(e,t){assertValidProps(this._currentElement.props),ReactComponent.Mixin.updateComponent.call(this,e,t),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e)}),_updateDOMProperties:function(e,t){var n,r,o,i=this.props;for(n in e)if(!i.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===STYLE){var a=e[n];for(r in a)a.hasOwnProperty(r)&&(o=o||{},o[r]="")}else registrationNameModules.hasOwnProperty(n)?deleteListener(this._rootNodeID,n):(DOMProperty.isStandardName[n]||DOMProperty.isCustomAttribute(n))&&ReactComponent.BackendIDOperations.deletePropertyByID(this._rootNodeID,n);for(n in i){var s=i[n],l=e[n];if(i.hasOwnProperty(n)&&s!==l)if(n===STYLE)if(s&&(s=i.style=assign({},s)),l){for(r in l)!l.hasOwnProperty(r)||s&&s.hasOwnProperty(r)||(o=o||{},o[r]="");for(r in s)s.hasOwnProperty(r)&&l[r]!==s[r]&&(o=o||{},o[r]=s[r])}else o=s;else registrationNameModules.hasOwnProperty(n)?putListener(this._rootNodeID,n,s,t):(DOMProperty.isStandardName[n]||DOMProperty.isCustomAttribute(n))&&ReactComponent.BackendIDOperations.updatePropertyByID(this._rootNodeID,n,s)}o&&ReactComponent.BackendIDOperations.updateStylesByID(this._rootNodeID,o)},_updateDOMChildren:function(e,t){var n=this.props,r=CONTENT_TYPES[typeof e.children]?e.children:null,o=CONTENT_TYPES[typeof n.children]?n.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,a=n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html,s=null!=r?null:e.children,l=null!=o?null:n.children,p=null!=r||null!=i,u=null!=o||null!=a;null!=s&&null==l?this.updateChildren(null,t):p&&!u&&this.updateTextContent(""),null!=o?r!==o&&this.updateTextContent(""+o):null!=a?i!==a&&ReactComponent.BackendIDOperations.updateInnerHTMLByID(this._rootNodeID,a):null!=l&&this.updateChildren(l,t)},unmountComponent:function(){this.unmountChildren(),ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID),ReactComponent.Mixin.unmountComponent.call(this)}},assign(ReactDOMComponent.prototype,ReactComponent.Mixin,ReactDOMComponent.Mixin,ReactMultiChild.Mixin,ReactBrowserComponentMixin),module.exports=ReactDOMComponent;
}).call(this,require('_process'))

},{"./CSSPropertyOperations":28,"./DOMProperty":34,"./DOMPropertyOperations":35,"./Object.assign":50,"./ReactBrowserComponentMixin":53,"./ReactBrowserEventEmitter":54,"./ReactComponent":56,"./ReactMount":87,"./ReactMultiChild":88,"./ReactPerf":92,"./escapeTextForBrowser":133,"./invariant":150,"./isEventSupported":151,"./keyOf":157,"./monitorCodeUse":160,"_process":22}],64:[function(require,module,exports){
"use strict";var EventConstants=require("./EventConstants"),LocalEventTrapMixin=require("./LocalEventTrapMixin"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),form=ReactElement.createFactory(ReactDOM.form.type),ReactDOMForm=ReactCompositeComponent.createClass({displayName:"ReactDOMForm",mixins:[ReactBrowserComponentMixin,LocalEventTrapMixin],render:function(){return form(this.props)},componentDidMount:function(){this.trapBubbledEvent(EventConstants.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit,"submit")}});module.exports=ReactDOMForm;
},{"./EventConstants":39,"./LocalEventTrapMixin":48,"./ReactBrowserComponentMixin":53,"./ReactCompositeComponent":58,"./ReactDOM":61,"./ReactElement":76}],65:[function(require,module,exports){
(function (process){
"use strict";var CSSPropertyOperations=require("./CSSPropertyOperations"),DOMChildrenOperations=require("./DOMChildrenOperations"),DOMPropertyOperations=require("./DOMPropertyOperations"),ReactMount=require("./ReactMount"),ReactPerf=require("./ReactPerf"),invariant=require("./invariant"),setInnerHTML=require("./setInnerHTML"),INVALID_PROPERTY_ERRORS={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},ReactDOMIDOperations={updatePropertyByID:ReactPerf.measure("ReactDOMIDOperations","updatePropertyByID",function(e,t,r){var a=ReactMount.getNode(e);"production"!==process.env.NODE_ENV?invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(t),"updatePropertyByID(...): %s",INVALID_PROPERTY_ERRORS[t]):invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(t)),null!=r?DOMPropertyOperations.setValueForProperty(a,t,r):DOMPropertyOperations.deleteValueForProperty(a,t)}),deletePropertyByID:ReactPerf.measure("ReactDOMIDOperations","deletePropertyByID",function(e,t,r){var a=ReactMount.getNode(e);"production"!==process.env.NODE_ENV?invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(t),"updatePropertyByID(...): %s",INVALID_PROPERTY_ERRORS[t]):invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(t)),DOMPropertyOperations.deleteValueForProperty(a,t,r)}),updateStylesByID:ReactPerf.measure("ReactDOMIDOperations","updateStylesByID",function(e,t){var r=ReactMount.getNode(e);CSSPropertyOperations.setValueForStyles(r,t)}),updateInnerHTMLByID:ReactPerf.measure("ReactDOMIDOperations","updateInnerHTMLByID",function(e,t){var r=ReactMount.getNode(e);setInnerHTML(r,t)}),updateTextContentByID:ReactPerf.measure("ReactDOMIDOperations","updateTextContentByID",function(e,t){var r=ReactMount.getNode(e);DOMChildrenOperations.updateTextContent(r,t)}),dangerouslyReplaceNodeWithMarkupByID:ReactPerf.measure("ReactDOMIDOperations","dangerouslyReplaceNodeWithMarkupByID",function(e,t){var r=ReactMount.getNode(e);DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(r,t)}),dangerouslyProcessChildrenUpdates:ReactPerf.measure("ReactDOMIDOperations","dangerouslyProcessChildrenUpdates",function(e,t){for(var r=0;r<e.length;r++)e[r].parentNode=ReactMount.getNode(e[r].parentID);DOMChildrenOperations.processUpdates(e,t)})};module.exports=ReactDOMIDOperations;
}).call(this,require('_process'))

},{"./CSSPropertyOperations":28,"./DOMChildrenOperations":33,"./DOMPropertyOperations":35,"./ReactMount":87,"./ReactPerf":92,"./invariant":150,"./setInnerHTML":164,"_process":22}],66:[function(require,module,exports){
"use strict";var EventConstants=require("./EventConstants"),LocalEventTrapMixin=require("./LocalEventTrapMixin"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),img=ReactElement.createFactory(ReactDOM.img.type),ReactDOMImg=ReactCompositeComponent.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[ReactBrowserComponentMixin,LocalEventTrapMixin],render:function(){return img(this.props)},componentDidMount:function(){this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(EventConstants.topLevelTypes.topError,"error")}});module.exports=ReactDOMImg;
},{"./EventConstants":39,"./LocalEventTrapMixin":48,"./ReactBrowserComponentMixin":53,"./ReactCompositeComponent":58,"./ReactDOM":61,"./ReactElement":76}],67:[function(require,module,exports){
(function (process){
"use strict";function forceUpdateIfMounted(){this.isMounted()&&this.forceUpdate()}var AutoFocusMixin=require("./AutoFocusMixin"),DOMPropertyOperations=require("./DOMPropertyOperations"),LinkedValueUtils=require("./LinkedValueUtils"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),ReactMount=require("./ReactMount"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),invariant=require("./invariant"),input=ReactElement.createFactory(ReactDOM.input.type),instancesByReactID={},ReactDOMInput=ReactCompositeComponent.createClass({displayName:"ReactDOMInput",mixins:[AutoFocusMixin,LinkedValueUtils.Mixin,ReactBrowserComponentMixin],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=assign({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=LinkedValueUtils.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=LinkedValueUtils.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,input(e,this.props.children)},componentDidMount:function(){var e=ReactMount.getID(this.getDOMNode());instancesByReactID[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=ReactMount.getID(e);delete instancesByReactID[t]},componentDidUpdate:function(){var e=this.getDOMNode();null!=this.props.checked&&DOMPropertyOperations.setValueForProperty(e,"checked",this.props.checked||!1);var t=LinkedValueUtils.getValue(this);null!=t&&DOMPropertyOperations.setValueForProperty(e,"value",""+t)},_handleChange:function(e){var t,n=LinkedValueUtils.getOnChange(this);n&&(t=n.call(this,e)),ReactUpdates.asap(forceUpdateIfMounted,this);var i=this.props.name;if("radio"===this.props.type&&null!=i){for(var a=this.getDOMNode(),r=a;r.parentNode;)r=r.parentNode;for(var o=r.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),s=0,u=o.length;u>s;s++){var c=o[s];if(c!==a&&c.form===a.form){var p=ReactMount.getID(c);"production"!==process.env.NODE_ENV?invariant(p,"ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."):invariant(p);var l=instancesByReactID[p];"production"!==process.env.NODE_ENV?invariant(l,"ReactDOMInput: Unknown radio button ID %s.",p):invariant(l),ReactUpdates.asap(forceUpdateIfMounted,l)}}}return t}});module.exports=ReactDOMInput;
}).call(this,require('_process'))

},{"./AutoFocusMixin":25,"./DOMPropertyOperations":35,"./LinkedValueUtils":47,"./Object.assign":50,"./ReactBrowserComponentMixin":53,"./ReactCompositeComponent":58,"./ReactDOM":61,"./ReactElement":76,"./ReactMount":87,"./ReactUpdates":103,"./invariant":150,"_process":22}],68:[function(require,module,exports){
(function (process){
"use strict";var ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),warning=require("./warning"),option=ReactElement.createFactory(ReactDOM.option.type),ReactDOMOption=ReactCompositeComponent.createClass({displayName:"ReactDOMOption",mixins:[ReactBrowserComponentMixin],componentWillMount:function(){"production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?warning(null==this.props.selected,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."):null)},render:function(){return option(this.props,this.props.children)}});module.exports=ReactDOMOption;
}).call(this,require('_process'))

},{"./ReactBrowserComponentMixin":53,"./ReactCompositeComponent":58,"./ReactDOM":61,"./ReactElement":76,"./warning":169,"_process":22}],69:[function(require,module,exports){
"use strict";function updateWithPendingValueIfMounted(){this.isMounted()&&(this.setState({value:this._pendingValue}),this._pendingValue=0)}function selectValueType(e,t){if(null!=e[t])if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function updateOptions(e,t){var i,l,a,n=e.props.multiple,s=null!=t?t:e.state.value,u=e.getDOMNode().options;if(n)for(i={},l=0,a=s.length;a>l;++l)i[""+s[l]]=!0;else i=""+s;for(l=0,a=u.length;a>l;l++){var r=n?i.hasOwnProperty(u[l].value):u[l].value===i;r!==u[l].selected&&(u[l].selected=r)}}var AutoFocusMixin=require("./AutoFocusMixin"),LinkedValueUtils=require("./LinkedValueUtils"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),select=ReactElement.createFactory(ReactDOM.select.type),ReactDOMSelect=ReactCompositeComponent.createClass({displayName:"ReactDOMSelect",mixins:[AutoFocusMixin,LinkedValueUtils.Mixin,ReactBrowserComponentMixin],propTypes:{defaultValue:selectValueType,value:selectValueType},getInitialState:function(){return{value:this.props.defaultValue||(this.props.multiple?[]:"")}},componentWillMount:function(){this._pendingValue=null},componentWillReceiveProps:function(e){!this.props.multiple&&e.multiple?this.setState({value:[this.state.value]}):this.props.multiple&&!e.multiple&&this.setState({value:this.state.value[0]})},render:function(){var e=assign({},this.props);return e.onChange=this._handleChange,e.value=null,select(e,this.props.children)},componentDidMount:function(){updateOptions(this,LinkedValueUtils.getValue(this))},componentDidUpdate:function(e){var t=LinkedValueUtils.getValue(this),i=!!e.multiple,l=!!this.props.multiple;(null!=t||i!==l)&&updateOptions(this,t)},_handleChange:function(e){var t,i=LinkedValueUtils.getOnChange(this);i&&(t=i.call(this,e));var l;if(this.props.multiple){l=[];for(var a=e.target.options,n=0,s=a.length;s>n;n++)a[n].selected&&l.push(a[n].value)}else l=e.target.value;return this._pendingValue=l,ReactUpdates.asap(updateWithPendingValueIfMounted,this),t}});module.exports=ReactDOMSelect;
},{"./AutoFocusMixin":25,"./LinkedValueUtils":47,"./Object.assign":50,"./ReactBrowserComponentMixin":53,"./ReactCompositeComponent":58,"./ReactDOM":61,"./ReactElement":76,"./ReactUpdates":103}],70:[function(require,module,exports){
"use strict";function isCollapsed(e,t,n,s){return e===n&&t===s}function getIEOffsets(e){var t=document.selection,n=t.createRange(),s=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var r=o.text.length,a=r+s;return{start:r,end:a}}function getModernOffsets(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,s=t.anchorOffset,o=t.focusNode,r=t.focusOffset,a=t.getRangeAt(0),f=isCollapsed(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),d=f?0:a.toString().length,c=a.cloneRange();c.selectNodeContents(e),c.setEnd(a.startContainer,a.startOffset);var i=isCollapsed(c.startContainer,c.startOffset,c.endContainer,c.endOffset),u=i?0:c.toString().length,g=u+d,l=document.createRange();l.setStart(n,s),l.setEnd(o,r);var O=l.collapsed;return{start:O?g:u,end:O?u:g}}function setIEOffsets(e,t){var n,s,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,s=n):t.start>t.end?(n=t.end,s=t.start):(n=t.start,s=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",s-n),o.select()}function setModernOffsets(e,t){if(window.getSelection){var n=window.getSelection(),s=e[getTextContentAccessor()].length,o=Math.min(t.start,s),r="undefined"==typeof t.end?o:Math.min(t.end,s);if(!n.extend&&o>r){var a=r;r=o,o=a}var f=getNodeForCharacterOffset(e,o),d=getNodeForCharacterOffset(e,r);if(f&&d){var c=document.createRange();c.setStart(f.node,f.offset),n.removeAllRanges(),o>r?(n.addRange(c),n.extend(d.node,d.offset)):(c.setEnd(d.node,d.offset),n.addRange(c))}}}var ExecutionEnvironment=require("./ExecutionEnvironment"),getNodeForCharacterOffset=require("./getNodeForCharacterOffset"),getTextContentAccessor=require("./getTextContentAccessor"),useIEOffsets=ExecutionEnvironment.canUseDOM&&document.selection,ReactDOMSelection={getOffsets:useIEOffsets?getIEOffsets:getModernOffsets,setOffsets:useIEOffsets?setIEOffsets:setModernOffsets};module.exports=ReactDOMSelection;
},{"./ExecutionEnvironment":45,"./getNodeForCharacterOffset":143,"./getTextContentAccessor":145}],71:[function(require,module,exports){
(function (process){
"use strict";function forceUpdateIfMounted(){this.isMounted()&&this.forceUpdate()}var AutoFocusMixin=require("./AutoFocusMixin"),DOMPropertyOperations=require("./DOMPropertyOperations"),LinkedValueUtils=require("./LinkedValueUtils"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),ReactDOM=require("./ReactDOM"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),invariant=require("./invariant"),warning=require("./warning"),textarea=ReactElement.createFactory(ReactDOM.textarea.type),ReactDOMTextarea=ReactCompositeComponent.createClass({displayName:"ReactDOMTextarea",mixins:[AutoFocusMixin,LinkedValueUtils.Mixin,ReactBrowserComponentMixin],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&("production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?warning(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."):null),"production"!==process.env.NODE_ENV?invariant(null==e,"If you supply `defaultValue` on a <textarea>, do not pass children."):invariant(null==e),Array.isArray(t)&&("production"!==process.env.NODE_ENV?invariant(t.length<=1,"<textarea> can only have at most one child."):invariant(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=LinkedValueUtils.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=assign({},this.props);return"production"!==process.env.NODE_ENV?invariant(null==e.dangerouslySetInnerHTML,"`dangerouslySetInnerHTML` does not make sense on <textarea>."):invariant(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,textarea(e,this.state.initialValue)},componentDidUpdate:function(){var e=LinkedValueUtils.getValue(this);if(null!=e){var t=this.getDOMNode();DOMPropertyOperations.setValueForProperty(t,"value",""+e)}},_handleChange:function(e){var t,n=LinkedValueUtils.getOnChange(this);return n&&(t=n.call(this,e)),ReactUpdates.asap(forceUpdateIfMounted,this),t}});module.exports=ReactDOMTextarea;
}).call(this,require('_process'))

},{"./AutoFocusMixin":25,"./DOMPropertyOperations":35,"./LinkedValueUtils":47,"./Object.assign":50,"./ReactBrowserComponentMixin":53,"./ReactCompositeComponent":58,"./ReactDOM":61,"./ReactElement":76,"./ReactUpdates":103,"./invariant":150,"./warning":169,"_process":22}],72:[function(require,module,exports){
"use strict";function ReactDefaultBatchingStrategyTransaction(){this.reinitializeTransaction()}var ReactUpdates=require("./ReactUpdates"),Transaction=require("./Transaction"),assign=require("./Object.assign"),emptyFunction=require("./emptyFunction"),RESET_BATCHED_UPDATES={initialize:emptyFunction,close:function(){ReactDefaultBatchingStrategy.isBatchingUpdates=!1}},FLUSH_BATCHED_UPDATES={initialize:emptyFunction,close:ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)},TRANSACTION_WRAPPERS=[FLUSH_BATCHED_UPDATES,RESET_BATCHED_UPDATES];assign(ReactDefaultBatchingStrategyTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function(){return TRANSACTION_WRAPPERS}});var transaction=new ReactDefaultBatchingStrategyTransaction,ReactDefaultBatchingStrategy={isBatchingUpdates:!1,batchedUpdates:function(t,a,e){var n=ReactDefaultBatchingStrategy.isBatchingUpdates;ReactDefaultBatchingStrategy.isBatchingUpdates=!0,n?t(a,e):transaction.perform(t,null,a,e)}};module.exports=ReactDefaultBatchingStrategy;
},{"./Object.assign":50,"./ReactUpdates":103,"./Transaction":119,"./emptyFunction":131}],73:[function(require,module,exports){
(function (process){
"use strict";function inject(){if(ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener),ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder),ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles),ReactInjection.EventPluginHub.injectMount(ReactMount),ReactInjection.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin,EnterLeaveEventPlugin:EnterLeaveEventPlugin,ChangeEventPlugin:ChangeEventPlugin,CompositionEventPlugin:CompositionEventPlugin,MobileSafariClickEventPlugin:MobileSafariClickEventPlugin,SelectEventPlugin:SelectEventPlugin,BeforeInputEventPlugin:BeforeInputEventPlugin}),ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent),ReactInjection.NativeComponent.injectComponentClasses({button:ReactDOMButton,form:ReactDOMForm,img:ReactDOMImg,input:ReactDOMInput,option:ReactDOMOption,select:ReactDOMSelect,textarea:ReactDOMTextarea,html:createFullPageComponent("html"),head:createFullPageComponent("head"),body:createFullPageComponent("body")}),ReactInjection.CompositeComponent.injectMixin(ReactBrowserComponentMixin),ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig),ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig),ReactInjection.EmptyComponent.injectEmptyComponent("noscript"),ReactInjection.Updates.injectReconcileTransaction(ReactComponentBrowserEnvironment.ReactReconcileTransaction),ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy),ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM?ClientReactRootIndex.createReactRootIndex:ServerReactRootIndex.createReactRootIndex),ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment),"production"!==process.env.NODE_ENV){var e=ExecutionEnvironment.canUseDOM&&window.location.href||"";if(/[?&]react_perf\b/.test(e)){var t=require("./ReactDefaultPerf");t.start()}}}var BeforeInputEventPlugin=require("./BeforeInputEventPlugin"),ChangeEventPlugin=require("./ChangeEventPlugin"),ClientReactRootIndex=require("./ClientReactRootIndex"),CompositionEventPlugin=require("./CompositionEventPlugin"),DefaultEventPluginOrder=require("./DefaultEventPluginOrder"),EnterLeaveEventPlugin=require("./EnterLeaveEventPlugin"),ExecutionEnvironment=require("./ExecutionEnvironment"),HTMLDOMPropertyConfig=require("./HTMLDOMPropertyConfig"),MobileSafariClickEventPlugin=require("./MobileSafariClickEventPlugin"),ReactBrowserComponentMixin=require("./ReactBrowserComponentMixin"),ReactComponentBrowserEnvironment=require("./ReactComponentBrowserEnvironment"),ReactDefaultBatchingStrategy=require("./ReactDefaultBatchingStrategy"),ReactDOMComponent=require("./ReactDOMComponent"),ReactDOMButton=require("./ReactDOMButton"),ReactDOMForm=require("./ReactDOMForm"),ReactDOMImg=require("./ReactDOMImg"),ReactDOMInput=require("./ReactDOMInput"),ReactDOMOption=require("./ReactDOMOption"),ReactDOMSelect=require("./ReactDOMSelect"),ReactDOMTextarea=require("./ReactDOMTextarea"),ReactEventListener=require("./ReactEventListener"),ReactInjection=require("./ReactInjection"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactMount=require("./ReactMount"),SelectEventPlugin=require("./SelectEventPlugin"),ServerReactRootIndex=require("./ServerReactRootIndex"),SimpleEventPlugin=require("./SimpleEventPlugin"),SVGDOMPropertyConfig=require("./SVGDOMPropertyConfig"),createFullPageComponent=require("./createFullPageComponent");module.exports={inject:inject};
}).call(this,require('_process'))

},{"./BeforeInputEventPlugin":26,"./ChangeEventPlugin":30,"./ClientReactRootIndex":31,"./CompositionEventPlugin":32,"./DefaultEventPluginOrder":37,"./EnterLeaveEventPlugin":38,"./ExecutionEnvironment":45,"./HTMLDOMPropertyConfig":46,"./MobileSafariClickEventPlugin":49,"./ReactBrowserComponentMixin":53,"./ReactComponentBrowserEnvironment":57,"./ReactDOMButton":62,"./ReactDOMComponent":63,"./ReactDOMForm":64,"./ReactDOMImg":66,"./ReactDOMInput":67,"./ReactDOMOption":68,"./ReactDOMSelect":69,"./ReactDOMTextarea":71,"./ReactDefaultBatchingStrategy":72,"./ReactDefaultPerf":74,"./ReactEventListener":81,"./ReactInjection":82,"./ReactInstanceHandles":84,"./ReactMount":87,"./SVGDOMPropertyConfig":104,"./SelectEventPlugin":105,"./ServerReactRootIndex":106,"./SimpleEventPlugin":107,"./createFullPageComponent":127,"_process":22}],74:[function(require,module,exports){
"use strict";function roundFloat(e){return Math.floor(100*e)/100}function addValue(e,t,a){e[t]=(e[t]||0)+a}var DOMProperty=require("./DOMProperty"),ReactDefaultPerfAnalysis=require("./ReactDefaultPerfAnalysis"),ReactMount=require("./ReactMount"),ReactPerf=require("./ReactPerf"),performanceNow=require("./performanceNow"),ReactDefaultPerf={_allMeasurements:[],_mountStack:[0],_injected:!1,start:function(){ReactDefaultPerf._injected||ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure),ReactDefaultPerf._allMeasurements.length=0,ReactPerf.enableMeasure=!0},stop:function(){ReactPerf.enableMeasure=!1},getLastMeasurements:function(){return ReactDefaultPerf._allMeasurements},printExclusive:function(e){e=e||ReactDefaultPerf._allMeasurements;var t=ReactDefaultPerfAnalysis.getExclusiveSummary(e);console.table(t.map(function(e){return{"Component class name":e.componentName,"Total inclusive time (ms)":roundFloat(e.inclusive),"Exclusive mount time (ms)":roundFloat(e.exclusive),"Exclusive render time (ms)":roundFloat(e.render),"Mount time per instance (ms)":roundFloat(e.exclusive/e.count),"Render time per instance (ms)":roundFloat(e.render/e.count),Instances:e.count}}))},printInclusive:function(e){e=e||ReactDefaultPerf._allMeasurements;var t=ReactDefaultPerfAnalysis.getInclusiveSummary(e);console.table(t.map(function(e){return{"Owner > component":e.componentName,"Inclusive time (ms)":roundFloat(e.time),Instances:e.count}})),console.log("Total time:",ReactDefaultPerfAnalysis.getTotalTime(e).toFixed(2)+" ms")},getMeasurementsSummaryMap:function(e){var t=ReactDefaultPerfAnalysis.getInclusiveSummary(e,!0);return t.map(function(e){return{"Owner > component":e.componentName,"Wasted time (ms)":e.time,Instances:e.count}})},printWasted:function(e){e=e||ReactDefaultPerf._allMeasurements,console.table(ReactDefaultPerf.getMeasurementsSummaryMap(e)),console.log("Total time:",ReactDefaultPerfAnalysis.getTotalTime(e).toFixed(2)+" ms")},printDOM:function(e){e=e||ReactDefaultPerf._allMeasurements;var t=ReactDefaultPerfAnalysis.getDOMSummary(e);console.table(t.map(function(e){var t={};return t[DOMProperty.ID_ATTRIBUTE_NAME]=e.id,t.type=e.type,t.args=JSON.stringify(e.args),t})),console.log("Total time:",ReactDefaultPerfAnalysis.getTotalTime(e).toFixed(2)+" ms")},_recordWrite:function(e,t,a,n){var r=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1].writes;r[e]=r[e]||[],r[e].push({type:t,time:a,args:n})},measure:function(e,t,a){return function(){for(var n=[],r=0,o=arguments.length;o>r;r++)n.push(arguments[r]);var u,l,s;if("_renderNewRootComponent"===t||"flushBatchedUpdates"===t)return ReactDefaultPerf._allMeasurements.push({exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},totalTime:0}),s=performanceNow(),l=a.apply(this,n),ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1].totalTime=performanceNow()-s,l;if("ReactDOMIDOperations"===e||"ReactComponentBrowserEnvironment"===e){if(s=performanceNow(),l=a.apply(this,n),u=performanceNow()-s,"mountImageIntoNode"===t){var c=ReactMount.getID(n[1]);ReactDefaultPerf._recordWrite(c,t,u,n[0])}else"dangerouslyProcessChildrenUpdates"===t?n[0].forEach(function(e){var t={};null!==e.fromIndex&&(t.fromIndex=e.fromIndex),null!==e.toIndex&&(t.toIndex=e.toIndex),null!==e.textContent&&(t.textContent=e.textContent),null!==e.markupIndex&&(t.markup=n[1][e.markupIndex]),ReactDefaultPerf._recordWrite(e.parentID,e.type,u,t)}):ReactDefaultPerf._recordWrite(n[0],t,u,Array.prototype.slice.call(n,1));return l}if("ReactCompositeComponent"!==e||"mountComponent"!==t&&"updateComponent"!==t&&"_renderValidatedComponent"!==t)return a.apply(this,n);var i="mountComponent"===t?n[0]:this._rootNodeID,m="_renderValidatedComponent"===t,f="mountComponent"===t,p=ReactDefaultPerf._mountStack,d=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1];if(m?addValue(d.counts,i,1):f&&p.push(0),s=performanceNow(),l=a.apply(this,n),u=performanceNow()-s,m)addValue(d.render,i,u);else if(f){var R=p.pop();p[p.length-1]+=u,addValue(d.exclusive,i,u-R),addValue(d.inclusive,i,u)}else addValue(d.inclusive,i,u);return d.displayNames[i]={current:this.constructor.displayName,owner:this._owner?this._owner.constructor.displayName:"<root>"},l}}};module.exports=ReactDefaultPerf;
},{"./DOMProperty":34,"./ReactDefaultPerfAnalysis":75,"./ReactMount":87,"./ReactPerf":92,"./performanceNow":163}],75:[function(require,module,exports){
function getTotalTime(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];t+=r.totalTime}return t}function getDOMSummary(e){for(var t=[],n=0;n<e.length;n++){var r,i=e[n];for(r in i.writes)i.writes[r].forEach(function(e){t.push({id:r,type:DOM_OPERATION_TYPES[e.type]||e.type,args:e.args})})}return t}function getExclusiveSummary(e){for(var t,n={},r=0;r<e.length;r++){var i=e[r],u=assign({},i.exclusive,i.inclusive);for(var s in u)t=i.displayNames[s].current,n[t]=n[t]||{componentName:t,inclusive:0,exclusive:0,render:0,count:0},i.render[s]&&(n[t].render+=i.render[s]),i.exclusive[s]&&(n[t].exclusive+=i.exclusive[s]),i.inclusive[s]&&(n[t].inclusive+=i.inclusive[s]),i.counts[s]&&(n[t].count+=i.counts[s])}var a=[];for(t in n)n[t].exclusive>=DONT_CARE_THRESHOLD&&a.push(n[t]);return a.sort(function(e,t){return t.exclusive-e.exclusive}),a}function getInclusiveSummary(e,t){for(var n,r={},i=0;i<e.length;i++){var u,s=e[i],a=assign({},s.exclusive,s.inclusive);t&&(u=getUnchangedComponents(s));for(var o in a)if(!t||u[o]){var c=s.displayNames[o];n=c.owner+" > "+c.current,r[n]=r[n]||{componentName:n,time:0,count:0},s.inclusive[o]&&(r[n].time+=s.inclusive[o]),s.counts[o]&&(r[n].count+=s.counts[o])}}var l=[];for(n in r)r[n].time>=DONT_CARE_THRESHOLD&&l.push(r[n]);return l.sort(function(e,t){return t.time-e.time}),l}function getUnchangedComponents(e){var t={},n=Object.keys(e.writes),r=assign({},e.exclusive,e.inclusive);for(var i in r){for(var u=!1,s=0;s<n.length;s++)if(0===n[s].indexOf(i)){u=!0;break}!u&&e.counts[i]>0&&(t[i]=!0)}return t}var assign=require("./Object.assign"),DONT_CARE_THRESHOLD=1.2,DOM_OPERATION_TYPES={mountImageIntoNode:"set innerHTML",INSERT_MARKUP:"set innerHTML",MOVE_EXISTING:"move",REMOVE_NODE:"remove",TEXT_CONTENT:"set textContent",updatePropertyByID:"update attribute",deletePropertyByID:"delete attribute",updateStylesByID:"update styles",updateInnerHTMLByID:"set innerHTML",dangerouslyReplaceNodeWithMarkupByID:"replace"},ReactDefaultPerfAnalysis={getExclusiveSummary:getExclusiveSummary,getInclusiveSummary:getInclusiveSummary,getDOMSummary:getDOMSummary,getTotalTime:getTotalTime};module.exports=ReactDefaultPerfAnalysis;
},{"./Object.assign":50}],76:[function(require,module,exports){
(function (process){
"use strict";function defineWarningProperty(e,t){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:function(){return this._store?this._store[t]:null},set:function(e){"production"!==process.env.NODE_ENV?warning(!1,"Don't set the "+t+" property of the component. Mutate the existing props object instead."):null,this._store[t]=e}})}function defineMutationMembrane(e){try{var t={props:!0};for(var n in t)defineWarningProperty(e,n);useMutationMembrane=!0}catch(r){}}var ReactContext=require("./ReactContext"),ReactCurrentOwner=require("./ReactCurrentOwner"),warning=require("./warning"),RESERVED_PROPS={key:!0,ref:!0},useMutationMembrane=!1,ReactElement=function(e,t,n,r,o,i){return this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,"production"!==process.env.NODE_ENV&&(this._store={validated:!1,props:i},useMutationMembrane)?void Object.freeze(this):void(this.props=i)};ReactElement.prototype={_isReactElement:!0},"production"!==process.env.NODE_ENV&&defineMutationMembrane(ReactElement.prototype),ReactElement.createElement=function(e,t,n){var r,o={},i=null,a=null;if(null!=t){a=void 0===t.ref?null:t.ref,"production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?warning(null!==t.key,"createElement(...): Encountered component with a `key` of null. In a future version, this will be treated as equivalent to the string 'null'; instead, provide an explicit key or use undefined."):null),i=null==t.key?null:""+t.key;for(r in t)t.hasOwnProperty(r)&&!RESERVED_PROPS.hasOwnProperty(r)&&(o[r]=t[r])}var u=arguments.length-2;if(1===u)o.children=n;else if(u>1){for(var c=Array(u),l=0;u>l;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps){var s=e.defaultProps;for(r in s)"undefined"==typeof o[r]&&(o[r]=s[r])}return new ReactElement(e,i,a,ReactCurrentOwner.current,ReactContext.current,o)},ReactElement.createFactory=function(e){var t=ReactElement.createElement.bind(null,e);return t.type=e,t},ReactElement.cloneAndReplaceProps=function(e,t){var n=new ReactElement(e.type,e.key,e.ref,e._owner,e._context,t);return"production"!==process.env.NODE_ENV&&(n._store.validated=e._store.validated),n},ReactElement.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},module.exports=ReactElement;
}).call(this,require('_process'))

},{"./ReactContext":59,"./ReactCurrentOwner":60,"./warning":169,"_process":22}],77:[function(require,module,exports){
(function (process){
"use strict";function getCurrentOwnerDisplayName(){var e=ReactCurrentOwner.current;return e&&e.constructor.displayName||void 0}function validateExplicitKey(e,r){e._store.validated||null!=e.key||(e._store.validated=!0,warnAndMonitorForKeyUse("react_key_warning",'Each child in an array should have a unique "key" prop.',e,r))}function validatePropertyKey(e,r,t){NUMERIC_PROPERTY_REGEX.test(e)&&warnAndMonitorForKeyUse("react_numeric_key_warning","Child objects should have non-numeric keys so ordering is preserved.",r,t)}function warnAndMonitorForKeyUse(e,r,t,n){var a=getCurrentOwnerDisplayName(),o=n.displayName,i=a||o,s=ownerHasKeyUseWarning[e];if(!s.hasOwnProperty(i)){s[i]=!0,r+=a?" Check the render method of "+a+".":" Check the renderComponent call using <"+o+">.";var c=null;t._owner&&t._owner!==ReactCurrentOwner.current&&(c=t._owner.constructor.displayName,r+=" It was passed a child from "+c+"."),r+=" See http://fb.me/react-warning-keys for more information.",monitorCodeUse(e,{component:i,componentOwner:c}),console.warn(r)}}function monitorUseOfObjectMap(){var e=getCurrentOwnerDisplayName()||"";ownerHasMonitoredObjectMap.hasOwnProperty(e)||(ownerHasMonitoredObjectMap[e]=!0,monitorCodeUse("react_object_map_children"))}function validateChildKeys(e,r){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];ReactElement.isValidElement(n)&&validateExplicitKey(n,r)}else if(ReactElement.isValidElement(e))e._store.validated=!0;else if(e&&"object"==typeof e){monitorUseOfObjectMap();for(var a in e)validatePropertyKey(a,e[a],r)}}function checkPropTypes(e,r,t,n){for(var a in r)if(r.hasOwnProperty(a)){var o;try{o=r[a](t,a,e,n)}catch(i){o=i}o instanceof Error&&!(o.message in loggedTypeFailures)&&(loggedTypeFailures[o.message]=!0,monitorCodeUse("react_failed_descriptor_type_check",{message:o.message}))}}var ReactElement=require("./ReactElement"),ReactPropTypeLocations=require("./ReactPropTypeLocations"),ReactCurrentOwner=require("./ReactCurrentOwner"),monitorCodeUse=require("./monitorCodeUse"),warning=require("./warning"),ownerHasKeyUseWarning={react_key_warning:{},react_numeric_key_warning:{}},ownerHasMonitoredObjectMap={},loggedTypeFailures={},NUMERIC_PROPERTY_REGEX=/^\d+$/,ReactElementValidator={createElement:function(e){"production"!==process.env.NODE_ENV?warning(null!=e,"React.createElement: type should not be null or undefined. It should be a string (for DOM elements) or a ReactClass (for composite components)."):null;var r=ReactElement.createElement.apply(this,arguments);if(null==r)return r;for(var t=2;t<arguments.length;t++)validateChildKeys(arguments[t],e);if(e){var n=e.displayName;e.propTypes&&checkPropTypes(n,e.propTypes,r.props,ReactPropTypeLocations.prop),e.contextTypes&&checkPropTypes(n,e.contextTypes,r._context,ReactPropTypeLocations.context)}return r},createFactory:function(e){var r=ReactElementValidator.createElement.bind(null,e);return r.type=e,r}};module.exports=ReactElementValidator;
}).call(this,require('_process'))

},{"./ReactCurrentOwner":60,"./ReactElement":76,"./ReactPropTypeLocations":95,"./monitorCodeUse":160,"./warning":169,"_process":22}],78:[function(require,module,exports){
(function (process){
"use strict";function getEmptyComponent(){return"production"!==process.env.NODE_ENV?invariant(component,"Trying to return null from a render, but no null placeholder component was injected."):invariant(component),component()}function registerNullComponentID(n){nullComponentIdsRegistry[n]=!0}function deregisterNullComponentID(n){delete nullComponentIdsRegistry[n]}function isNullComponentID(n){return nullComponentIdsRegistry[n]}var ReactElement=require("./ReactElement"),invariant=require("./invariant"),component,nullComponentIdsRegistry={},ReactEmptyComponentInjection={injectEmptyComponent:function(n){component=ReactElement.createFactory(n)}},ReactEmptyComponent={deregisterNullComponentID:deregisterNullComponentID,getEmptyComponent:getEmptyComponent,injection:ReactEmptyComponentInjection,isNullComponentID:isNullComponentID,registerNullComponentID:registerNullComponentID};module.exports=ReactEmptyComponent;
}).call(this,require('_process'))

},{"./ReactElement":76,"./invariant":150,"_process":22}],79:[function(require,module,exports){
"use strict";var ReactErrorUtils={guard:function(r){return r}};module.exports=ReactErrorUtils;
},{}],80:[function(require,module,exports){
"use strict";function runEventQueueInBatch(e){EventPluginHub.enqueueEvents(e),EventPluginHub.processEventQueue()}var EventPluginHub=require("./EventPluginHub"),ReactEventEmitterMixin={handleTopLevel:function(e,n,t,u){var i=EventPluginHub.extractEvents(e,n,t,u);runEventQueueInBatch(i)}};module.exports=ReactEventEmitterMixin;
},{"./EventPluginHub":41}],81:[function(require,module,exports){
"use strict";function findParent(e){var t=ReactMount.getID(e),n=ReactInstanceHandles.getReactRootIDFromNodeID(t),o=ReactMount.findReactContainerForID(n),a=ReactMount.getFirstReactDOM(o);return a}function TopLevelCallbackBookKeeping(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function handleTopLevelImpl(e){for(var t=ReactMount.getFirstReactDOM(getEventTarget(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=findParent(n);for(var o=0,a=e.ancestors.length;a>o;o++){t=e.ancestors[o];var i=ReactMount.getID(t)||"";ReactEventListener._handleTopLevel(e.topLevelType,t,i,e.nativeEvent)}}function scrollValueMonitor(e){var t=getUnboundedScrollPosition(window);e(t)}var EventListener=require("./EventListener"),ExecutionEnvironment=require("./ExecutionEnvironment"),PooledClass=require("./PooledClass"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactMount=require("./ReactMount"),ReactUpdates=require("./ReactUpdates"),assign=require("./Object.assign"),getEventTarget=require("./getEventTarget"),getUnboundedScrollPosition=require("./getUnboundedScrollPosition");assign(TopLevelCallbackBookKeeping.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),PooledClass.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass.twoArgumentPooler);var ReactEventListener={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:ExecutionEnvironment.canUseDOM?window:null,setHandleTopLevel:function(e){ReactEventListener._handleTopLevel=e},setEnabled:function(e){ReactEventListener._enabled=!!e},isEnabled:function(){return ReactEventListener._enabled},trapBubbledEvent:function(e,t,n){var o=n;if(o)return EventListener.listen(o,t,ReactEventListener.dispatchEvent.bind(null,e))},trapCapturedEvent:function(e,t,n){var o=n;if(o)return EventListener.capture(o,t,ReactEventListener.dispatchEvent.bind(null,e))},monitorScrollValue:function(e){var t=scrollValueMonitor.bind(null,e);EventListener.listen(window,"scroll",t),EventListener.listen(window,"resize",t)},dispatchEvent:function(e,t){if(ReactEventListener._enabled){var n=TopLevelCallbackBookKeeping.getPooled(e,t);try{ReactUpdates.batchedUpdates(handleTopLevelImpl,n)}finally{TopLevelCallbackBookKeeping.release(n)}}}};module.exports=ReactEventListener;
},{"./EventListener":40,"./ExecutionEnvironment":45,"./Object.assign":50,"./PooledClass":51,"./ReactInstanceHandles":84,"./ReactMount":87,"./ReactUpdates":103,"./getEventTarget":141,"./getUnboundedScrollPosition":146}],82:[function(require,module,exports){
"use strict";var DOMProperty=require("./DOMProperty"),EventPluginHub=require("./EventPluginHub"),ReactComponent=require("./ReactComponent"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactEmptyComponent=require("./ReactEmptyComponent"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),ReactNativeComponent=require("./ReactNativeComponent"),ReactPerf=require("./ReactPerf"),ReactRootIndex=require("./ReactRootIndex"),ReactUpdates=require("./ReactUpdates"),ReactInjection={Component:ReactComponent.injection,CompositeComponent:ReactCompositeComponent.injection,DOMProperty:DOMProperty.injection,EmptyComponent:ReactEmptyComponent.injection,EventPluginHub:EventPluginHub.injection,EventEmitter:ReactBrowserEventEmitter.injection,NativeComponent:ReactNativeComponent.injection,Perf:ReactPerf.injection,RootIndex:ReactRootIndex.injection,Updates:ReactUpdates.injection};module.exports=ReactInjection;
},{"./DOMProperty":34,"./EventPluginHub":41,"./ReactBrowserEventEmitter":54,"./ReactComponent":56,"./ReactCompositeComponent":58,"./ReactEmptyComponent":78,"./ReactNativeComponent":90,"./ReactPerf":92,"./ReactRootIndex":99,"./ReactUpdates":103}],83:[function(require,module,exports){
"use strict";function isInDocument(e){return containsNode(document.documentElement,e)}var ReactDOMSelection=require("./ReactDOMSelection"),containsNode=require("./containsNode"),focusNode=require("./focusNode"),getActiveElement=require("./getActiveElement"),ReactInputSelection={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=getActiveElement();return{focusedElem:e,selectionRange:ReactInputSelection.hasSelectionCapabilities(e)?ReactInputSelection.getSelection(e):null}},restoreSelection:function(e){var t=getActiveElement(),n=e.focusedElem,c=e.selectionRange;t!==n&&isInDocument(n)&&(ReactInputSelection.hasSelectionCapabilities(n)&&ReactInputSelection.setSelection(n,c),focusNode(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=ReactDOMSelection.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,c=t.end;if("undefined"==typeof c&&(c=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(c,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var o=e.createTextRange();o.collapse(!0),o.moveStart("character",n),o.moveEnd("character",c-n),o.select()}else ReactDOMSelection.setOffsets(e,t)}};module.exports=ReactInputSelection;
},{"./ReactDOMSelection":70,"./containsNode":125,"./focusNode":135,"./getActiveElement":137}],84:[function(require,module,exports){
(function (process){
"use strict";function getReactRootIDString(t){return SEPARATOR+t.toString(36)}function isBoundary(t,e){return t.charAt(e)===SEPARATOR||e===t.length}function isValidID(t){return""===t||t.charAt(0)===SEPARATOR&&t.charAt(t.length-1)!==SEPARATOR}function isAncestorIDOf(t,e){return 0===e.indexOf(t)&&isBoundary(e,t.length)}function getParentID(t){return t?t.substr(0,t.lastIndexOf(SEPARATOR)):""}function getNextDescendantID(t,e){if("production"!==process.env.NODE_ENV?invariant(isValidID(t)&&isValidID(e),"getNextDescendantID(%s, %s): Received an invalid React DOM ID.",t,e):invariant(isValidID(t)&&isValidID(e)),"production"!==process.env.NODE_ENV?invariant(isAncestorIDOf(t,e),"getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.",t,e):invariant(isAncestorIDOf(t,e)),t===e)return t;for(var n=t.length+SEPARATOR_LENGTH,r=n;r<e.length&&!isBoundary(e,r);r++);return e.substr(0,r)}function getFirstCommonAncestorID(t,e){var n=Math.min(t.length,e.length);if(0===n)return"";for(var r=0,a=0;n>=a;a++)if(isBoundary(t,a)&&isBoundary(e,a))r=a;else if(t.charAt(a)!==e.charAt(a))break;var s=t.substr(0,r);return"production"!==process.env.NODE_ENV?invariant(isValidID(s),"getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s",t,e,s):invariant(isValidID(s)),s}function traverseParentPath(t,e,n,r,a,s){t=t||"",e=e||"","production"!==process.env.NODE_ENV?invariant(t!==e,"traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.",t):invariant(t!==e);var i=isAncestorIDOf(e,t);"production"!==process.env.NODE_ENV?invariant(i||isAncestorIDOf(t,e),"traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.",t,e):invariant(i||isAncestorIDOf(t,e));for(var o=0,c=i?getParentID:getNextDescendantID,D=t;;D=c(D,e)){var R;if(a&&D===t||s&&D===e||(R=n(D,i,r)),R===!1||D===e)break;"production"!==process.env.NODE_ENV?invariant(o++<MAX_TREE_DEPTH,"traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s",t,e):invariant(o++<MAX_TREE_DEPTH)}}var ReactRootIndex=require("./ReactRootIndex"),invariant=require("./invariant"),SEPARATOR=".",SEPARATOR_LENGTH=SEPARATOR.length,MAX_TREE_DEPTH=100,ReactInstanceHandles={createReactRootID:function(){return getReactRootIDString(ReactRootIndex.createReactRootIndex())},createReactID:function(t,e){return t+e},getReactRootIDFromNodeID:function(t){if(t&&t.charAt(0)===SEPARATOR&&t.length>1){var e=t.indexOf(SEPARATOR,1);return e>-1?t.substr(0,e):t}return null},traverseEnterLeave:function(t,e,n,r,a){var s=getFirstCommonAncestorID(t,e);s!==t&&traverseParentPath(t,s,n,r,!1,!0),s!==e&&traverseParentPath(s,e,n,a,!0,!1)},traverseTwoPhase:function(t,e,n){t&&(traverseParentPath("",t,e,n,!0,!1),traverseParentPath(t,"",e,n,!1,!0))},traverseAncestors:function(t,e,n){traverseParentPath("",t,e,n,!0,!1)},_getFirstCommonAncestorID:getFirstCommonAncestorID,_getNextDescendantID:getNextDescendantID,isAncestorIDOf:isAncestorIDOf,SEPARATOR:SEPARATOR};module.exports=ReactInstanceHandles;
}).call(this,require('_process'))

},{"./ReactRootIndex":99,"./invariant":150,"_process":22}],85:[function(require,module,exports){
(function (process){
"use strict";function warnForLegacyFactoryCall(){if(ReactLegacyElementFactory._isLegacyCallWarningEnabled){var e=ReactCurrentOwner.current,t=e&&e.constructor?e.constructor.displayName:"";t||(t="Something"),legacyFactoryLogs.hasOwnProperty(t)||(legacyFactoryLogs[t]=!0,"production"!==process.env.NODE_ENV?warning(!1,t+" is calling a React component directly. Use a factory or JSX instead. See: http://fb.me/react-legacyfactory"):null,monitorCodeUse("react_legacy_factory_call",{version:3,name:t}))}}function warnForPlainFunctionType(e){var t=e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent;if(t)"production"!==process.env.NODE_ENV?warning(!1,"Did not expect to get a React class here. Use `Component` instead of `Component.type` or `this.constructor`."):null;else{if(!e._reactWarnedForThisType){try{e._reactWarnedForThisType=!0}catch(n){}monitorCodeUse("react_non_component_in_jsx",{version:3,name:e.name})}"production"!==process.env.NODE_ENV?warning(!1,"This JSX uses a plain function. Only React components are valid in React's JSX transform."):null}}function warnForNonLegacyFactory(e){"production"!==process.env.NODE_ENV?warning(!1,"Do not pass React.DOM."+e.type+' to JSX or createFactory. Use the string "'+e.type+'" instead.'):null}function proxyStaticMethods(e,t){if("function"==typeof t)for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];if("function"==typeof r){var a=r.bind(t);for(var o in r)r.hasOwnProperty(o)&&(a[o]=r[o]);e[n]=a}else e[n]=r}}var ReactCurrentOwner=require("./ReactCurrentOwner"),invariant=require("./invariant"),monitorCodeUse=require("./monitorCodeUse"),warning=require("./warning"),legacyFactoryLogs={},LEGACY_MARKER={},NON_LEGACY_MARKER={},ReactLegacyElementFactory={};ReactLegacyElementFactory.wrapCreateFactory=function(e){var t=function(t){return"function"!=typeof t?e(t):t.isReactNonLegacyFactory?("production"!==process.env.NODE_ENV&&warnForNonLegacyFactory(t),e(t.type)):t.isReactLegacyFactory?e(t.type):("production"!==process.env.NODE_ENV&&warnForPlainFunctionType(t),t)};return t},ReactLegacyElementFactory.wrapCreateElement=function(e){var t=function(t){if("function"!=typeof t)return e.apply(this,arguments);var n;return t.isReactNonLegacyFactory?("production"!==process.env.NODE_ENV&&warnForNonLegacyFactory(t),n=Array.prototype.slice.call(arguments,0),n[0]=t.type,e.apply(this,n)):t.isReactLegacyFactory?(t._isMockFunction&&(t.type._mockedReactClassConstructor=t),n=Array.prototype.slice.call(arguments,0),n[0]=t.type,e.apply(this,n)):("production"!==process.env.NODE_ENV&&warnForPlainFunctionType(t),t.apply(null,Array.prototype.slice.call(arguments,1)))};return t},ReactLegacyElementFactory.wrapFactory=function(e){"production"!==process.env.NODE_ENV?invariant("function"==typeof e,"This is suppose to accept a element factory"):invariant("function"==typeof e);var t=function(){return"production"!==process.env.NODE_ENV&&warnForLegacyFactoryCall(),e.apply(this,arguments)};return proxyStaticMethods(t,e.type),t.isReactLegacyFactory=LEGACY_MARKER,t.type=e.type,t},ReactLegacyElementFactory.markNonLegacyFactory=function(e){return e.isReactNonLegacyFactory=NON_LEGACY_MARKER,e},ReactLegacyElementFactory.isValidFactory=function(e){return"function"==typeof e&&e.isReactLegacyFactory===LEGACY_MARKER},ReactLegacyElementFactory.isValidClass=function(e){return"production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?warning(!1,"isValidClass is deprecated and will be removed in a future release. Use a more specific validator instead."):null),ReactLegacyElementFactory.isValidFactory(e)},ReactLegacyElementFactory._isLegacyCallWarningEnabled=!0,module.exports=ReactLegacyElementFactory;
}).call(this,require('_process'))

},{"./ReactCurrentOwner":60,"./invariant":150,"./monitorCodeUse":160,"./warning":169,"_process":22}],86:[function(require,module,exports){
"use strict";var adler32=require("./adler32"),ReactMarkupChecksum={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var r=adler32(e);return e.replace(">"," "+ReactMarkupChecksum.CHECKSUM_ATTR_NAME+'="'+r+'">')},canReuseMarkup:function(e,r){var a=r.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);a=a&&parseInt(a,10);var u=adler32(e);return u===a}};module.exports=ReactMarkupChecksum;
},{"./adler32":122}],87:[function(require,module,exports){
(function (process){
"use strict";function getReactRootID(e){var t=getReactRootElementInContainer(e);return t&&ReactMount.getID(t)}function getID(e){var t=internalGetID(e);if(t)if(nodeCache.hasOwnProperty(t)){var n=nodeCache[t];n!==e&&("production"!==process.env.NODE_ENV?invariant(!isValid(n,t),"ReactMount: Two valid but unequal nodes with the same `%s`: %s",ATTR_NAME,t):invariant(!isValid(n,t)),nodeCache[t]=e)}else nodeCache[t]=e;return t}function internalGetID(e){return e&&e.getAttribute&&e.getAttribute(ATTR_NAME)||""}function setID(e,t){var n=internalGetID(e);n!==t&&delete nodeCache[n],e.setAttribute(ATTR_NAME,t),nodeCache[t]=e}function getNode(e){return nodeCache.hasOwnProperty(e)&&isValid(nodeCache[e],e)||(nodeCache[e]=ReactMount.findReactNodeByID(e)),nodeCache[e]}function isValid(e,t){if(e){"production"!==process.env.NODE_ENV?invariant(internalGetID(e)===t,"ReactMount: Unexpected modification of `%s`",ATTR_NAME):invariant(internalGetID(e)===t);var n=ReactMount.findReactContainerForID(t);if(n&&containsNode(n,e))return!0}return!1}function purgeID(e){delete nodeCache[e]}function findDeepestCachedAncestorImpl(e){var t=nodeCache[e];return t&&isValid(t,e)?void(deepestNodeSoFar=t):!1}function findDeepestCachedAncestor(e){deepestNodeSoFar=null,ReactInstanceHandles.traverseAncestors(e,findDeepestCachedAncestorImpl);var t=deepestNodeSoFar;return deepestNodeSoFar=null,t}var DOMProperty=require("./DOMProperty"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),ReactCurrentOwner=require("./ReactCurrentOwner"),ReactElement=require("./ReactElement"),ReactLegacyElement=require("./ReactLegacyElement"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactPerf=require("./ReactPerf"),containsNode=require("./containsNode"),deprecated=require("./deprecated"),getReactRootElementInContainer=require("./getReactRootElementInContainer"),instantiateReactComponent=require("./instantiateReactComponent"),invariant=require("./invariant"),shouldUpdateReactComponent=require("./shouldUpdateReactComponent"),warning=require("./warning"),createElement=ReactLegacyElement.wrapCreateElement(ReactElement.createElement),SEPARATOR=ReactInstanceHandles.SEPARATOR,ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME,nodeCache={},ELEMENT_NODE_TYPE=1,DOC_NODE_TYPE=9,instancesByReactRootID={},containersByReactRootID={};if("production"!==process.env.NODE_ENV)var rootElementsByReactRootID={};var findComponentRootReusableArray=[],deepestNodeSoFar=null,ReactMount={_instancesByReactRootID:instancesByReactRootID,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,o){var r=t.props;return ReactMount.scrollMonitor(n,function(){e.replaceProps(r,o)}),"production"!==process.env.NODE_ENV&&(rootElementsByReactRootID[getReactRootID(n)]=getReactRootElementInContainer(n)),e},_registerComponent:function(e,t){"production"!==process.env.NODE_ENV?invariant(t&&(t.nodeType===ELEMENT_NODE_TYPE||t.nodeType===DOC_NODE_TYPE),"_registerComponent(...): Target container is not a DOM element."):invariant(t&&(t.nodeType===ELEMENT_NODE_TYPE||t.nodeType===DOC_NODE_TYPE)),ReactBrowserEventEmitter.ensureScrollValueMonitoring();var n=ReactMount.registerContainer(t);return instancesByReactRootID[n]=e,n},_renderNewRootComponent:ReactPerf.measure("ReactMount","_renderNewRootComponent",function(e,t,n){"production"!==process.env.NODE_ENV?warning(null==ReactCurrentOwner.current,"_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."):null;var o=instantiateReactComponent(e,null),r=ReactMount._registerComponent(o,t);return o.mountComponentIntoNode(r,t,n),"production"!==process.env.NODE_ENV&&(rootElementsByReactRootID[r]=getReactRootElementInContainer(t)),o}),render:function(e,t,n){"production"!==process.env.NODE_ENV?invariant(ReactElement.isValidElement(e),"renderComponent(): Invalid component element.%s","string"==typeof e?" Instead of passing an element string, make sure to instantiate it by passing it to React.createElement.":ReactLegacyElement.isValidFactory(e)?" Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.":"undefined"!=typeof e.props?" This may be caused by unintentionally loading two independent copies of React.":""):invariant(ReactElement.isValidElement(e));var o=instancesByReactRootID[getReactRootID(t)];if(o){var r=o._currentElement;if(shouldUpdateReactComponent(r,e))return ReactMount._updateRootComponent(o,e,t,n);ReactMount.unmountComponentAtNode(t)}var a=getReactRootElementInContainer(t),i=a&&ReactMount.isRenderedByReact(a),c=i&&!o,s=ReactMount._renderNewRootComponent(e,t,c);return n&&n.call(s),s},constructAndRenderComponent:function(e,t,n){var o=createElement(e,t);return ReactMount.render(o,n)},constructAndRenderComponentByID:function(e,t,n){var o=document.getElementById(n);return"production"!==process.env.NODE_ENV?invariant(o,'Tried to get element with id of "%s" but it is not present on the page.',n):invariant(o),ReactMount.constructAndRenderComponent(e,t,o)},registerContainer:function(e){var t=getReactRootID(e);return t&&(t=ReactInstanceHandles.getReactRootIDFromNodeID(t)),t||(t=ReactInstanceHandles.createReactRootID()),containersByReactRootID[t]=e,t},unmountComponentAtNode:function(e){"production"!==process.env.NODE_ENV?warning(null==ReactCurrentOwner.current,"unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."):null;var t=getReactRootID(e),n=instancesByReactRootID[t];return n?(ReactMount.unmountComponentFromNode(n,e),delete instancesByReactRootID[t],delete containersByReactRootID[t],"production"!==process.env.NODE_ENV&&delete rootElementsByReactRootID[t],!0):!1},unmountComponentFromNode:function(e,t){for(e.unmountComponent(),t.nodeType===DOC_NODE_TYPE&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=ReactInstanceHandles.getReactRootIDFromNodeID(e),n=containersByReactRootID[t];if("production"!==process.env.NODE_ENV){var o=rootElementsByReactRootID[t];if(o&&o.parentNode!==n){"production"!==process.env.NODE_ENV?invariant(internalGetID(o)===t,"ReactMount: Root element ID differed from reactRootID."):invariant(internalGetID(o)===t);var r=n.firstChild;r&&t===internalGetID(r)?rootElementsByReactRootID[t]=r:console.warn("ReactMount: Root element has been removed from its original container. New container:",o.parentNode)}}return n},findReactNodeByID:function(e){var t=ReactMount.findReactContainerForID(e);return ReactMount.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=ReactMount.getID(e);return t?t.charAt(0)===SEPARATOR:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(ReactMount.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=findComponentRootReusableArray,o=0,r=findDeepestCachedAncestor(t)||e;for(n[0]=r.firstChild,n.length=1;o<n.length;){for(var a,i=n[o++];i;){var c=ReactMount.getID(i);c?t===c?a=i:ReactInstanceHandles.isAncestorIDOf(c,t)&&(n.length=o=0,n.push(i.firstChild)):n.push(i.firstChild),i=i.nextSibling}if(a)return n.length=0,a}n.length=0,"production"!==process.env.NODE_ENV?invariant(!1,"findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",t,ReactMount.getID(e)):invariant(!1)},getReactRootID:getReactRootID,getID:getID,setID:setID,getNode:getNode,purgeID:purgeID};ReactMount.renderComponent=deprecated("ReactMount","renderComponent","render",this,ReactMount.render),module.exports=ReactMount;
}).call(this,require('_process'))

},{"./DOMProperty":34,"./ReactBrowserEventEmitter":54,"./ReactCurrentOwner":60,"./ReactElement":76,"./ReactInstanceHandles":84,"./ReactLegacyElement":85,"./ReactPerf":92,"./containsNode":125,"./deprecated":130,"./getReactRootElementInContainer":144,"./instantiateReactComponent":149,"./invariant":150,"./shouldUpdateReactComponent":166,"./warning":169,"_process":22}],88:[function(require,module,exports){
"use strict";function enqueueMarkup(e,t,n){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.INSERT_MARKUP,markupIndex:markupQueue.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function enqueueMove(e,t,n){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function enqueueRemove(e,t){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function enqueueTextContent(e,t){updateQueue.push({parentID:e,parentNode:null,type:ReactMultiChildUpdateTypes.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function processQueue(){updateQueue.length&&(ReactComponent.BackendIDOperations.dangerouslyProcessChildrenUpdates(updateQueue,markupQueue),clearQueue())}function clearQueue(){updateQueue.length=0,markupQueue.length=0}var ReactComponent=require("./ReactComponent"),ReactMultiChildUpdateTypes=require("./ReactMultiChildUpdateTypes"),flattenChildren=require("./flattenChildren"),instantiateReactComponent=require("./instantiateReactComponent"),shouldUpdateReactComponent=require("./shouldUpdateReactComponent"),updateDepth=0,updateQueue=[],markupQueue=[],ReactMultiChild={Mixin:{mountChildren:function(e,t){var n=flattenChildren(e),u=[],o=0;this._renderedChildren=n;for(var r in n){var d=n[r];if(n.hasOwnProperty(r)){var a=instantiateReactComponent(d,null);n[r]=a;var i=this._rootNodeID+r,l=a.mountComponent(i,t,this._mountDepth+1);a._mountIndex=o,u.push(l),o++}}return u},updateTextContent:function(e){updateDepth++;var t=!0;try{var n=this._renderedChildren;for(var u in n)n.hasOwnProperty(u)&&this._unmountChildByName(n[u],u);this.setTextContent(e),t=!1}finally{updateDepth--,updateDepth||(t?clearQueue():processQueue())}},updateChildren:function(e,t){updateDepth++;var n=!0;try{this._updateChildren(e,t),n=!1}finally{updateDepth--,updateDepth||(n?clearQueue():processQueue())}},_updateChildren:function(e,t){var n=flattenChildren(e),u=this._renderedChildren;if(n||u){var o,r=0,d=0;for(o in n)if(n.hasOwnProperty(o)){var a=u&&u[o],i=a&&a._currentElement,l=n[o];if(shouldUpdateReactComponent(i,l))this.moveChild(a,d,r),r=Math.max(a._mountIndex,r),a.receiveComponent(l,t),a._mountIndex=d;else{a&&(r=Math.max(a._mountIndex,r),this._unmountChildByName(a,o));var p=instantiateReactComponent(l,null);this._mountChildByNameAtIndex(p,o,d,t)}d++}for(o in u)!u.hasOwnProperty(o)||n&&n[o]||this._unmountChildByName(u[o],o)}},unmountChildren:function(){var e=this._renderedChildren;for(var t in e){var n=e[t];n.unmountComponent&&n.unmountComponent()}this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&enqueueMove(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){enqueueMarkup(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){enqueueRemove(this._rootNodeID,e._mountIndex)},setTextContent:function(e){enqueueTextContent(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,u){var o=this._rootNodeID+t,r=e.mountComponent(o,u,this._mountDepth+1);e._mountIndex=n,this.createChild(e,r),this._renderedChildren=this._renderedChildren||{},this._renderedChildren[t]=e},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null,e.unmountComponent(),delete this._renderedChildren[t]}}};module.exports=ReactMultiChild;
},{"./ReactComponent":56,"./ReactMultiChildUpdateTypes":89,"./flattenChildren":134,"./instantiateReactComponent":149,"./shouldUpdateReactComponent":166}],89:[function(require,module,exports){
"use strict";var keyMirror=require("./keyMirror"),ReactMultiChildUpdateTypes=keyMirror({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});module.exports=ReactMultiChildUpdateTypes;
},{"./keyMirror":156}],90:[function(require,module,exports){
(function (process){
"use strict";function createInstanceForTag(n,e,t){var o=tagToComponentClass[n];return null==o?("production"!==process.env.NODE_ENV?invariant(genericComponentClass,"There is no registered component for the tag %s",n):invariant(genericComponentClass),new genericComponentClass(n,e)):t===n?("production"!==process.env.NODE_ENV?invariant(genericComponentClass,"There is no registered component for the tag %s",n):invariant(genericComponentClass),new genericComponentClass(n,e)):new o.type(e)}var assign=require("./Object.assign"),invariant=require("./invariant"),genericComponentClass=null,tagToComponentClass={},ReactNativeComponentInjection={injectGenericComponentClass:function(n){genericComponentClass=n},injectComponentClasses:function(n){assign(tagToComponentClass,n)}},ReactNativeComponent={createInstanceForTag:createInstanceForTag,injection:ReactNativeComponentInjection};module.exports=ReactNativeComponent;
}).call(this,require('_process'))

},{"./Object.assign":50,"./invariant":150,"_process":22}],91:[function(require,module,exports){
(function (process){
"use strict";var emptyObject=require("./emptyObject"),invariant=require("./invariant"),ReactOwner={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,n,t){"production"!==process.env.NODE_ENV?invariant(ReactOwner.isValidOwner(t),"addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref."):invariant(ReactOwner.isValidOwner(t)),t.attachRef(n,e)},removeComponentAsRefFrom:function(e,n,t){"production"!==process.env.NODE_ENV?invariant(ReactOwner.isValidOwner(t),"removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This usually means that you're trying to remove a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref."):invariant(ReactOwner.isValidOwner(t)),t.refs[n]===e&&t.detachRef(n)},Mixin:{construct:function(){this.refs=emptyObject},attachRef:function(e,n){"production"!==process.env.NODE_ENV?invariant(n.isOwnedBy(this),"attachRef(%s, ...): Only a component's owner can store a ref to it.",e):invariant(n.isOwnedBy(this));var t=this.refs===emptyObject?this.refs={}:this.refs;t[e]=n},detachRef:function(e){delete this.refs[e]}}};module.exports=ReactOwner;
}).call(this,require('_process'))

},{"./emptyObject":132,"./invariant":150,"_process":22}],92:[function(require,module,exports){
(function (process){
"use strict";function _noMeasure(e,r,t){return t}var ReactPerf={enableMeasure:!1,storedMeasure:_noMeasure,measure:function(e,r,t){if("production"!==process.env.NODE_ENV){var a=null,n=function(){return ReactPerf.enableMeasure?(a||(a=ReactPerf.storedMeasure(e,r,t)),a.apply(this,arguments)):t.apply(this,arguments)};return n.displayName=e+"_"+r,n}return t},injection:{injectMeasure:function(e){ReactPerf.storedMeasure=e}}};module.exports=ReactPerf;
}).call(this,require('_process'))

},{"_process":22}],93:[function(require,module,exports){
(function (process){
"use strict";function createTransferStrategy(r){return function(e,n,t){e[n]=e.hasOwnProperty(n)?r(e[n],t):t}}function transferInto(r,e){for(var n in e)if(e.hasOwnProperty(n)){var t=TransferStrategies[n];t&&TransferStrategies.hasOwnProperty(n)?t(r,n,e[n]):r.hasOwnProperty(n)||(r[n]=e[n])}return r}var assign=require("./Object.assign"),emptyFunction=require("./emptyFunction"),invariant=require("./invariant"),joinClasses=require("./joinClasses"),warning=require("./warning"),didWarn=!1,transferStrategyMerge=createTransferStrategy(function(r,e){return assign({},e,r)}),TransferStrategies={children:emptyFunction,className:createTransferStrategy(joinClasses),style:transferStrategyMerge},ReactPropTransferer={TransferStrategies:TransferStrategies,mergeProps:function(r,e){return transferInto(assign({},r),e)},Mixin:{transferPropsTo:function(r){return"production"!==process.env.NODE_ENV?invariant(r._owner===this,"%s: You can't call transferPropsTo() on a component that you don't own, %s. This usually means you are calling transferPropsTo() on a component passed in as props or children.",this.constructor.displayName,"string"==typeof r.type?r.type:r.type.displayName):invariant(r._owner===this),"production"!==process.env.NODE_ENV&&(didWarn||(didWarn=!0,"production"!==process.env.NODE_ENV?warning(!1,"transferPropsTo is deprecated. See http://fb.me/react-transferpropsto for more information."):null)),transferInto(r.props,this.props),r}}};module.exports=ReactPropTransferer;
}).call(this,require('_process'))

},{"./Object.assign":50,"./emptyFunction":131,"./invariant":150,"./joinClasses":155,"./warning":169,"_process":22}],94:[function(require,module,exports){
(function (process){
"use strict";var ReactPropTypeLocationNames={};"production"!==process.env.NODE_ENV&&(ReactPropTypeLocationNames={prop:"prop",context:"context",childContext:"child context"}),module.exports=ReactPropTypeLocationNames;
}).call(this,require('_process'))

},{"_process":22}],95:[function(require,module,exports){
"use strict";var keyMirror=require("./keyMirror"),ReactPropTypeLocations=keyMirror({prop:null,context:null,childContext:null});module.exports=ReactPropTypeLocations;
},{"./keyMirror":156}],96:[function(require,module,exports){
"use strict";function createChainableTypeChecker(e){function r(r,t,n,a,c){if(a=a||ANONYMOUS,null!=t[n])return e(t,n,a,c);var o=ReactPropTypeLocationNames[c];return r?new Error("Required "+o+" `"+n+"` was not specified in "+("`"+a+"`.")):void 0}var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function createPrimitiveTypeChecker(e){function r(r,t,n,a){var c=r[t],o=getPropType(c);if(o!==e){var i=ReactPropTypeLocationNames[a],p=getPreciseType(c);return new Error("Invalid "+i+" `"+t+"` of type `"+p+"` "+("supplied to `"+n+"`, expected `"+e+"`."))}}return createChainableTypeChecker(r)}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunction.thatReturns())}function createArrayOfTypeChecker(e){function r(r,t,n,a){var c=r[t];if(!Array.isArray(c)){var o=ReactPropTypeLocationNames[a],i=getPropType(c);return new Error("Invalid "+o+" `"+t+"` of type "+("`"+i+"` supplied to `"+n+"`, expected an array."))}for(var p=0;p<c.length;p++){var u=e(c,p,n,a);if(u instanceof Error)return u}}return createChainableTypeChecker(r)}function createElementTypeChecker(){function e(e,r,t,n){if(!ReactElement.isValidElement(e[r])){var a=ReactPropTypeLocationNames[n];return new Error("Invalid "+a+" `"+r+"` supplied to "+("`"+t+"`, expected a ReactElement."))}}return createChainableTypeChecker(e)}function createInstanceTypeChecker(e){function r(r,t,n,a){if(!(r[t]instanceof e)){var c=ReactPropTypeLocationNames[a],o=e.name||ANONYMOUS;return new Error("Invalid "+c+" `"+t+"` supplied to "+("`"+n+"`, expected instance of `"+o+"`."))}}return createChainableTypeChecker(r)}function createEnumTypeChecker(e){function r(r,t,n,a){for(var c=r[t],o=0;o<e.length;o++)if(c===e[o])return;var i=ReactPropTypeLocationNames[a],p=JSON.stringify(e);return new Error("Invalid "+i+" `"+t+"` of value `"+c+"` "+("supplied to `"+n+"`, expected one of "+p+"."))}return createChainableTypeChecker(r)}function createObjectOfTypeChecker(e){function r(r,t,n,a){var c=r[t],o=getPropType(c);if("object"!==o){var i=ReactPropTypeLocationNames[a];return new Error("Invalid "+i+" `"+t+"` of type "+("`"+o+"` supplied to `"+n+"`, expected an object."))}for(var p in c)if(c.hasOwnProperty(p)){var u=e(c,p,n,a);if(u instanceof Error)return u}}return createChainableTypeChecker(r)}function createUnionTypeChecker(e){function r(r,t,n,a){for(var c=0;c<e.length;c++){var o=e[c];if(null==o(r,t,n,a))return}var i=ReactPropTypeLocationNames[a];return new Error("Invalid "+i+" `"+t+"` supplied to "+("`"+n+"`."))}return createChainableTypeChecker(r)}function createNodeChecker(){function e(e,r,t,n){if(!isNode(e[r])){var a=ReactPropTypeLocationNames[n];return new Error("Invalid "+a+" `"+r+"` supplied to "+("`"+t+"`, expected a ReactNode."))}}return createChainableTypeChecker(e)}function createShapeTypeChecker(e){function r(r,t,n,a){var c=r[t],o=getPropType(c);if("object"!==o){var i=ReactPropTypeLocationNames[a];return new Error("Invalid "+i+" `"+t+"` of type `"+o+"` "+("supplied to `"+n+"`, expected `object`."))}for(var p in e){var u=e[p];if(u){var y=u(c,p,n,a);if(y)return y}}}return createChainableTypeChecker(r,"expected `object`")}function isNode(e){switch(typeof e){case"number":case"string":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(isNode);if(ReactElement.isValidElement(e))return!0;for(var r in e)if(!isNode(e[r]))return!1;return!0;default:return!1}}function getPropType(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":r}function getPreciseType(e){var r=getPropType(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}var ReactElement=require("./ReactElement"),ReactPropTypeLocationNames=require("./ReactPropTypeLocationNames"),deprecated=require("./deprecated"),emptyFunction=require("./emptyFunction"),ANONYMOUS="<<anonymous>>",elementTypeChecker=createElementTypeChecker(),nodeTypeChecker=createNodeChecker(),ReactPropTypes={array:createPrimitiveTypeChecker("array"),bool:createPrimitiveTypeChecker("boolean"),func:createPrimitiveTypeChecker("function"),number:createPrimitiveTypeChecker("number"),object:createPrimitiveTypeChecker("object"),string:createPrimitiveTypeChecker("string"),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:elementTypeChecker,instanceOf:createInstanceTypeChecker,node:nodeTypeChecker,objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,component:deprecated("React.PropTypes","component","element",this,elementTypeChecker),renderable:deprecated("React.PropTypes","renderable","node",this,nodeTypeChecker)};module.exports=ReactPropTypes;
},{"./ReactElement":76,"./ReactPropTypeLocationNames":94,"./deprecated":130,"./emptyFunction":131}],97:[function(require,module,exports){
"use strict";function ReactPutListenerQueue(){this.listenersToPut=[]}var PooledClass=require("./PooledClass"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),assign=require("./Object.assign");assign(ReactPutListenerQueue.prototype,{enqueuePutListener:function(e,t,s){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:s})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];ReactBrowserEventEmitter.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),PooledClass.addPoolingTo(ReactPutListenerQueue),module.exports=ReactPutListenerQueue;
},{"./Object.assign":50,"./PooledClass":51,"./ReactBrowserEventEmitter":54}],98:[function(require,module,exports){
"use strict";function ReactReconcileTransaction(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=CallbackQueue.getPooled(null),this.putListenerQueue=ReactPutListenerQueue.getPooled()}var CallbackQueue=require("./CallbackQueue"),PooledClass=require("./PooledClass"),ReactBrowserEventEmitter=require("./ReactBrowserEventEmitter"),ReactInputSelection=require("./ReactInputSelection"),ReactPutListenerQueue=require("./ReactPutListenerQueue"),Transaction=require("./Transaction"),assign=require("./Object.assign"),SELECTION_RESTORATION={initialize:ReactInputSelection.getSelectionInformation,close:ReactInputSelection.restoreSelection},EVENT_SUPPRESSION={initialize:function(){var e=ReactBrowserEventEmitter.isEnabled();return ReactBrowserEventEmitter.setEnabled(!1),e},close:function(e){ReactBrowserEventEmitter.setEnabled(e)}},ON_DOM_READY_QUEUEING={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},PUT_LISTENER_QUEUEING={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},TRANSACTION_WRAPPERS=[PUT_LISTENER_QUEUEING,SELECTION_RESTORATION,EVENT_SUPPRESSION,ON_DOM_READY_QUEUEING],Mixin={getTransactionWrappers:function(){return TRANSACTION_WRAPPERS},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){CallbackQueue.release(this.reactMountReady),this.reactMountReady=null,ReactPutListenerQueue.release(this.putListenerQueue),this.putListenerQueue=null}};assign(ReactReconcileTransaction.prototype,Transaction.Mixin,Mixin),PooledClass.addPoolingTo(ReactReconcileTransaction),module.exports=ReactReconcileTransaction;
},{"./CallbackQueue":29,"./Object.assign":50,"./PooledClass":51,"./ReactBrowserEventEmitter":54,"./ReactInputSelection":83,"./ReactPutListenerQueue":97,"./Transaction":119}],99:[function(require,module,exports){
"use strict";var ReactRootIndexInjection={injectCreateReactRootIndex:function(e){ReactRootIndex.createReactRootIndex=e}},ReactRootIndex={createReactRootIndex:null,injection:ReactRootIndexInjection};module.exports=ReactRootIndex;
},{}],100:[function(require,module,exports){
(function (process){
"use strict";function renderToString(e){"production"!==process.env.NODE_ENV?invariant(ReactElement.isValidElement(e),"renderToString(): You must pass a valid ReactElement."):invariant(ReactElement.isValidElement(e));var n;try{var t=ReactInstanceHandles.createReactRootID();return n=ReactServerRenderingTransaction.getPooled(!1),n.perform(function(){var a=instantiateReactComponent(e,null),r=a.mountComponent(t,n,0);return ReactMarkupChecksum.addChecksumToMarkup(r)},null)}finally{ReactServerRenderingTransaction.release(n)}}function renderToStaticMarkup(e){"production"!==process.env.NODE_ENV?invariant(ReactElement.isValidElement(e),"renderToStaticMarkup(): You must pass a valid ReactElement."):invariant(ReactElement.isValidElement(e));var n;try{var t=ReactInstanceHandles.createReactRootID();return n=ReactServerRenderingTransaction.getPooled(!0),n.perform(function(){var a=instantiateReactComponent(e,null);return a.mountComponent(t,n,0)},null)}finally{ReactServerRenderingTransaction.release(n)}}var ReactElement=require("./ReactElement"),ReactInstanceHandles=require("./ReactInstanceHandles"),ReactMarkupChecksum=require("./ReactMarkupChecksum"),ReactServerRenderingTransaction=require("./ReactServerRenderingTransaction"),instantiateReactComponent=require("./instantiateReactComponent"),invariant=require("./invariant");module.exports={renderToString:renderToString,renderToStaticMarkup:renderToStaticMarkup};
}).call(this,require('_process'))

},{"./ReactElement":76,"./ReactInstanceHandles":84,"./ReactMarkupChecksum":86,"./ReactServerRenderingTransaction":101,"./instantiateReactComponent":149,"./invariant":150,"_process":22}],101:[function(require,module,exports){
"use strict";function ReactServerRenderingTransaction(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=CallbackQueue.getPooled(null),this.putListenerQueue=ReactPutListenerQueue.getPooled()}var PooledClass=require("./PooledClass"),CallbackQueue=require("./CallbackQueue"),ReactPutListenerQueue=require("./ReactPutListenerQueue"),Transaction=require("./Transaction"),assign=require("./Object.assign"),emptyFunction=require("./emptyFunction"),ON_DOM_READY_QUEUEING={initialize:function(){this.reactMountReady.reset()},close:emptyFunction},PUT_LISTENER_QUEUEING={initialize:function(){this.putListenerQueue.reset()},close:emptyFunction},TRANSACTION_WRAPPERS=[PUT_LISTENER_QUEUEING,ON_DOM_READY_QUEUEING],Mixin={getTransactionWrappers:function(){return TRANSACTION_WRAPPERS},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){CallbackQueue.release(this.reactMountReady),this.reactMountReady=null,ReactPutListenerQueue.release(this.putListenerQueue),this.putListenerQueue=null}};assign(ReactServerRenderingTransaction.prototype,Transaction.Mixin,Mixin),PooledClass.addPoolingTo(ReactServerRenderingTransaction),module.exports=ReactServerRenderingTransaction;
},{"./CallbackQueue":29,"./Object.assign":50,"./PooledClass":51,"./ReactPutListenerQueue":97,"./Transaction":119,"./emptyFunction":131}],102:[function(require,module,exports){
"use strict";var DOMPropertyOperations=require("./DOMPropertyOperations"),ReactComponent=require("./ReactComponent"),ReactElement=require("./ReactElement"),assign=require("./Object.assign"),escapeTextForBrowser=require("./escapeTextForBrowser"),ReactTextComponent=function(){};assign(ReactTextComponent.prototype,ReactComponent.Mixin,{mountComponent:function(e,t,o){ReactComponent.Mixin.mountComponent.call(this,e,t,o);var n=escapeTextForBrowser(this.props);return t.renderToStaticMarkup?n:"<span "+DOMPropertyOperations.createMarkupForID(e)+">"+n+"</span>"},receiveComponent:function(e){var t=e.props;t!==this.props&&(this.props=t,ReactComponent.BackendIDOperations.updateTextContentByID(this._rootNodeID,t))}});var ReactTextComponentFactory=function(e){return new ReactElement(ReactTextComponent,null,null,null,null,e)};ReactTextComponentFactory.type=ReactTextComponent,module.exports=ReactTextComponentFactory;
},{"./DOMPropertyOperations":35,"./Object.assign":50,"./ReactComponent":56,"./ReactElement":76,"./escapeTextForBrowser":133}],103:[function(require,module,exports){
(function (process){
"use strict";function ensureInjected(){"production"!==process.env.NODE_ENV?invariant(ReactUpdates.ReactReconcileTransaction&&batchingStrategy,"ReactUpdates: must inject a reconcile transaction class and batching strategy"):invariant(ReactUpdates.ReactReconcileTransaction&&batchingStrategy)}function ReactUpdatesFlushTransaction(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=CallbackQueue.getPooled(),this.reconcileTransaction=ReactUpdates.ReactReconcileTransaction.getPooled()}function batchedUpdates(e,t,a){ensureInjected(),batchingStrategy.batchedUpdates(e,t,a)}function mountDepthComparator(e,t){return e._mountDepth-t._mountDepth}function runBatchedUpdates(e){var t=e.dirtyComponentsLength;"production"!==process.env.NODE_ENV?invariant(t===dirtyComponents.length,"Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",t,dirtyComponents.length):invariant(t===dirtyComponents.length),dirtyComponents.sort(mountDepthComparator);for(var a=0;t>a;a++){var n=dirtyComponents[a];if(n.isMounted()){var i=n._pendingCallbacks;if(n._pendingCallbacks=null,n.performUpdateIfNecessary(e.reconcileTransaction),i)for(var c=0;c<i.length;c++)e.callbackQueue.enqueue(i[c],n)}}}function enqueueUpdate(e,t){return"production"!==process.env.NODE_ENV?invariant(!t||"function"==typeof t,"enqueueUpdate(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable."):invariant(!t||"function"==typeof t),ensureInjected(),"production"!==process.env.NODE_ENV?warning(null==ReactCurrentOwner.current,"enqueueUpdate(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."):null,batchingStrategy.isBatchingUpdates?(dirtyComponents.push(e),void(t&&(e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t]))):void batchingStrategy.batchedUpdates(enqueueUpdate,e,t)}function asap(e,t){"production"!==process.env.NODE_ENV?invariant(batchingStrategy.isBatchingUpdates,"ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."):invariant(batchingStrategy.isBatchingUpdates),asapCallbackQueue.enqueue(e,t),asapEnqueued=!0}var CallbackQueue=require("./CallbackQueue"),PooledClass=require("./PooledClass"),ReactCurrentOwner=require("./ReactCurrentOwner"),ReactPerf=require("./ReactPerf"),Transaction=require("./Transaction"),assign=require("./Object.assign"),invariant=require("./invariant"),warning=require("./warning"),dirtyComponents=[],asapCallbackQueue=CallbackQueue.getPooled(),asapEnqueued=!1,batchingStrategy=null,NESTED_UPDATES={initialize:function(){this.dirtyComponentsLength=dirtyComponents.length},close:function(){this.dirtyComponentsLength!==dirtyComponents.length?(dirtyComponents.splice(0,this.dirtyComponentsLength),flushBatchedUpdates()):dirtyComponents.length=0}},UPDATE_QUEUEING={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},TRANSACTION_WRAPPERS=[NESTED_UPDATES,UPDATE_QUEUEING];assign(ReactUpdatesFlushTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function(){return TRANSACTION_WRAPPERS},destructor:function(){this.dirtyComponentsLength=null,CallbackQueue.release(this.callbackQueue),this.callbackQueue=null,ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,a){return Transaction.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,a)}}),PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);var flushBatchedUpdates=ReactPerf.measure("ReactUpdates","flushBatchedUpdates",function(){for(;dirtyComponents.length||asapEnqueued;){if(dirtyComponents.length){var e=ReactUpdatesFlushTransaction.getPooled();e.perform(runBatchedUpdates,null,e),ReactUpdatesFlushTransaction.release(e)}if(asapEnqueued){asapEnqueued=!1;var t=asapCallbackQueue;asapCallbackQueue=CallbackQueue.getPooled(),t.notifyAll(),CallbackQueue.release(t)}}}),ReactUpdatesInjection={injectReconcileTransaction:function(e){"production"!==process.env.NODE_ENV?invariant(e,"ReactUpdates: must provide a reconcile transaction class"):invariant(e),ReactUpdates.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){"production"!==process.env.NODE_ENV?invariant(e,"ReactUpdates: must provide a batching strategy"):invariant(e),"production"!==process.env.NODE_ENV?invariant("function"==typeof e.batchedUpdates,"ReactUpdates: must provide a batchedUpdates() function"):invariant("function"==typeof e.batchedUpdates),"production"!==process.env.NODE_ENV?invariant("boolean"==typeof e.isBatchingUpdates,"ReactUpdates: must provide an isBatchingUpdates boolean attribute"):invariant("boolean"==typeof e.isBatchingUpdates),batchingStrategy=e}},ReactUpdates={ReactReconcileTransaction:null,batchedUpdates:batchedUpdates,enqueueUpdate:enqueueUpdate,flushBatchedUpdates:flushBatchedUpdates,injection:ReactUpdatesInjection,asap:asap};module.exports=ReactUpdates;
}).call(this,require('_process'))

},{"./CallbackQueue":29,"./Object.assign":50,"./PooledClass":51,"./ReactCurrentOwner":60,"./ReactPerf":92,"./Transaction":119,"./invariant":150,"./warning":169,"_process":22}],104:[function(require,module,exports){
"use strict";var DOMProperty=require("./DOMProperty"),MUST_USE_ATTRIBUTE=DOMProperty.injection.MUST_USE_ATTRIBUTE,SVGDOMPropertyConfig={Properties:{cx:MUST_USE_ATTRIBUTE,cy:MUST_USE_ATTRIBUTE,d:MUST_USE_ATTRIBUTE,dx:MUST_USE_ATTRIBUTE,dy:MUST_USE_ATTRIBUTE,fill:MUST_USE_ATTRIBUTE,fillOpacity:MUST_USE_ATTRIBUTE,fontFamily:MUST_USE_ATTRIBUTE,fontSize:MUST_USE_ATTRIBUTE,fx:MUST_USE_ATTRIBUTE,fy:MUST_USE_ATTRIBUTE,gradientTransform:MUST_USE_ATTRIBUTE,gradientUnits:MUST_USE_ATTRIBUTE,markerEnd:MUST_USE_ATTRIBUTE,markerMid:MUST_USE_ATTRIBUTE,markerStart:MUST_USE_ATTRIBUTE,offset:MUST_USE_ATTRIBUTE,opacity:MUST_USE_ATTRIBUTE,patternContentUnits:MUST_USE_ATTRIBUTE,patternUnits:MUST_USE_ATTRIBUTE,points:MUST_USE_ATTRIBUTE,preserveAspectRatio:MUST_USE_ATTRIBUTE,r:MUST_USE_ATTRIBUTE,rx:MUST_USE_ATTRIBUTE,ry:MUST_USE_ATTRIBUTE,spreadMethod:MUST_USE_ATTRIBUTE,stopColor:MUST_USE_ATTRIBUTE,stopOpacity:MUST_USE_ATTRIBUTE,stroke:MUST_USE_ATTRIBUTE,strokeDasharray:MUST_USE_ATTRIBUTE,strokeLinecap:MUST_USE_ATTRIBUTE,strokeOpacity:MUST_USE_ATTRIBUTE,strokeWidth:MUST_USE_ATTRIBUTE,textAnchor:MUST_USE_ATTRIBUTE,transform:MUST_USE_ATTRIBUTE,version:MUST_USE_ATTRIBUTE,viewBox:MUST_USE_ATTRIBUTE,x1:MUST_USE_ATTRIBUTE,x2:MUST_USE_ATTRIBUTE,x:MUST_USE_ATTRIBUTE,y1:MUST_USE_ATTRIBUTE,y2:MUST_USE_ATTRIBUTE,y:MUST_USE_ATTRIBUTE},DOMAttributeNames:{fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};module.exports=SVGDOMPropertyConfig;
},{"./DOMProperty":34}],105:[function(require,module,exports){
"use strict";function getSelection(e){if("selectionStart"in e&&ReactInputSelection.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function constructSelectEvent(e){if(!mouseDown&&null!=activeElement&&activeElement==getActiveElement()){var t=getSelection(activeElement);if(!lastSelection||!shallowEqual(lastSelection,t)){lastSelection=t;var n=SyntheticEvent.getPooled(eventTypes.select,activeElementID,e);return n.type="select",n.target=activeElement,EventPropagators.accumulateTwoPhaseDispatches(n),n}}}var EventConstants=require("./EventConstants"),EventPropagators=require("./EventPropagators"),ReactInputSelection=require("./ReactInputSelection"),SyntheticEvent=require("./SyntheticEvent"),getActiveElement=require("./getActiveElement"),isTextInputElement=require("./isTextInputElement"),keyOf=require("./keyOf"),shallowEqual=require("./shallowEqual"),topLevelTypes=EventConstants.topLevelTypes,eventTypes={select:{phasedRegistrationNames:{bubbled:keyOf({onSelect:null}),captured:keyOf({onSelectCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topContextMenu,topLevelTypes.topFocus,topLevelTypes.topKeyDown,topLevelTypes.topMouseDown,topLevelTypes.topMouseUp,topLevelTypes.topSelectionChange]}},activeElement=null,activeElementID=null,lastSelection=null,mouseDown=!1,SelectEventPlugin={eventTypes:eventTypes,extractEvents:function(e,t,n,o){switch(e){case topLevelTypes.topFocus:(isTextInputElement(t)||"true"===t.contentEditable)&&(activeElement=t,activeElementID=n,lastSelection=null);break;case topLevelTypes.topBlur:activeElement=null,activeElementID=null,lastSelection=null;break;case topLevelTypes.topMouseDown:mouseDown=!0;break;case topLevelTypes.topContextMenu:case topLevelTypes.topMouseUp:return mouseDown=!1,constructSelectEvent(o);case topLevelTypes.topSelectionChange:case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:return constructSelectEvent(o)}}};module.exports=SelectEventPlugin;
},{"./EventConstants":39,"./EventPropagators":44,"./ReactInputSelection":83,"./SyntheticEvent":111,"./getActiveElement":137,"./isTextInputElement":153,"./keyOf":157,"./shallowEqual":165}],106:[function(require,module,exports){
"use strict";var GLOBAL_MOUNT_POINT_MAX=Math.pow(2,53),ServerReactRootIndex={createReactRootIndex:function(){return Math.ceil(Math.random()*GLOBAL_MOUNT_POINT_MAX)}};module.exports=ServerReactRootIndex;
},{}],107:[function(require,module,exports){
(function (process){
"use strict";var EventConstants=require("./EventConstants"),EventPluginUtils=require("./EventPluginUtils"),EventPropagators=require("./EventPropagators"),SyntheticClipboardEvent=require("./SyntheticClipboardEvent"),SyntheticEvent=require("./SyntheticEvent"),SyntheticFocusEvent=require("./SyntheticFocusEvent"),SyntheticKeyboardEvent=require("./SyntheticKeyboardEvent"),SyntheticMouseEvent=require("./SyntheticMouseEvent"),SyntheticDragEvent=require("./SyntheticDragEvent"),SyntheticTouchEvent=require("./SyntheticTouchEvent"),SyntheticUIEvent=require("./SyntheticUIEvent"),SyntheticWheelEvent=require("./SyntheticWheelEvent"),getEventCharCode=require("./getEventCharCode"),invariant=require("./invariant"),keyOf=require("./keyOf"),warning=require("./warning"),topLevelTypes=EventConstants.topLevelTypes,eventTypes={blur:{phasedRegistrationNames:{bubbled:keyOf({onBlur:!0}),captured:keyOf({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:keyOf({onClick:!0}),captured:keyOf({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:keyOf({onContextMenu:!0}),captured:keyOf({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:keyOf({onCopy:!0}),captured:keyOf({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:keyOf({onCut:!0}),captured:keyOf({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:keyOf({onDoubleClick:!0}),captured:keyOf({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:keyOf({onDrag:!0}),captured:keyOf({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:keyOf({onDragEnd:!0}),captured:keyOf({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:keyOf({onDragEnter:!0}),captured:keyOf({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:keyOf({onDragExit:!0}),captured:keyOf({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:keyOf({onDragLeave:!0}),captured:keyOf({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:keyOf({onDragOver:!0}),captured:keyOf({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:keyOf({onDragStart:!0}),captured:keyOf({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:keyOf({onDrop:!0}),captured:keyOf({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:keyOf({onFocus:!0}),captured:keyOf({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:keyOf({onInput:!0}),captured:keyOf({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:keyOf({onKeyDown:!0}),captured:keyOf({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:keyOf({onKeyPress:!0}),captured:keyOf({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:keyOf({onKeyUp:!0}),captured:keyOf({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:keyOf({onLoad:!0}),captured:keyOf({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:keyOf({onError:!0}),captured:keyOf({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:keyOf({onMouseDown:!0}),captured:keyOf({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:keyOf({onMouseMove:!0}),captured:keyOf({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:keyOf({onMouseOut:!0}),captured:keyOf({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:keyOf({onMouseOver:!0}),captured:keyOf({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:keyOf({onMouseUp:!0}),captured:keyOf({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:keyOf({onPaste:!0}),captured:keyOf({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:keyOf({onReset:!0}),captured:keyOf({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:keyOf({onScroll:!0}),captured:keyOf({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:keyOf({onSubmit:!0}),captured:keyOf({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:keyOf({onTouchCancel:!0}),captured:keyOf({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:keyOf({onTouchEnd:!0}),captured:keyOf({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:keyOf({onTouchMove:!0}),captured:keyOf({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:keyOf({onTouchStart:!0}),captured:keyOf({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:keyOf({onWheel:!0}),captured:keyOf({onWheelCapture:!0})}}},topLevelEventsToDispatchConfig={topBlur:eventTypes.blur,topClick:eventTypes.click,topContextMenu:eventTypes.contextMenu,topCopy:eventTypes.copy,topCut:eventTypes.cut,topDoubleClick:eventTypes.doubleClick,topDrag:eventTypes.drag,topDragEnd:eventTypes.dragEnd,topDragEnter:eventTypes.dragEnter,topDragExit:eventTypes.dragExit,topDragLeave:eventTypes.dragLeave,topDragOver:eventTypes.dragOver,topDragStart:eventTypes.dragStart,topDrop:eventTypes.drop,topError:eventTypes.error,topFocus:eventTypes.focus,topInput:eventTypes.input,topKeyDown:eventTypes.keyDown,topKeyPress:eventTypes.keyPress,topKeyUp:eventTypes.keyUp,topLoad:eventTypes.load,topMouseDown:eventTypes.mouseDown,topMouseMove:eventTypes.mouseMove,topMouseOut:eventTypes.mouseOut,topMouseOver:eventTypes.mouseOver,topMouseUp:eventTypes.mouseUp,topPaste:eventTypes.paste,topReset:eventTypes.reset,topScroll:eventTypes.scroll,topSubmit:eventTypes.submit,topTouchCancel:eventTypes.touchCancel,topTouchEnd:eventTypes.touchEnd,topTouchMove:eventTypes.touchMove,topTouchStart:eventTypes.touchStart,topWheel:eventTypes.wheel};for(var topLevelType in topLevelEventsToDispatchConfig)topLevelEventsToDispatchConfig[topLevelType].dependencies=[topLevelType];var SimpleEventPlugin={eventTypes:eventTypes,executeDispatch:function(e,t,o){var a=EventPluginUtils.executeDispatch(e,t,o);"production"!==process.env.NODE_ENV?warning("boolean"!=typeof a,"Returning `false` from an event handler is deprecated and will be ignored in a future release. Instead, manually call e.stopPropagation() or e.preventDefault(), as appropriate."):null,a===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,o,a){var p=topLevelEventsToDispatchConfig[e];if(!p)return null;var n;switch(e){case topLevelTypes.topInput:case topLevelTypes.topLoad:case topLevelTypes.topError:case topLevelTypes.topReset:case topLevelTypes.topSubmit:n=SyntheticEvent;break;case topLevelTypes.topKeyPress:if(0===getEventCharCode(a))return null;case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:n=SyntheticKeyboardEvent;break;case topLevelTypes.topBlur:case topLevelTypes.topFocus:n=SyntheticFocusEvent;break;case topLevelTypes.topClick:if(2===a.button)return null;case topLevelTypes.topContextMenu:case topLevelTypes.topDoubleClick:case topLevelTypes.topMouseDown:case topLevelTypes.topMouseMove:case topLevelTypes.topMouseOut:case topLevelTypes.topMouseOver:case topLevelTypes.topMouseUp:n=SyntheticMouseEvent;break;case topLevelTypes.topDrag:case topLevelTypes.topDragEnd:case topLevelTypes.topDragEnter:case topLevelTypes.topDragExit:case topLevelTypes.topDragLeave:case topLevelTypes.topDragOver:case topLevelTypes.topDragStart:case topLevelTypes.topDrop:n=SyntheticDragEvent;break;case topLevelTypes.topTouchCancel:case topLevelTypes.topTouchEnd:case topLevelTypes.topTouchMove:case topLevelTypes.topTouchStart:n=SyntheticTouchEvent;break;case topLevelTypes.topScroll:n=SyntheticUIEvent;break;case topLevelTypes.topWheel:n=SyntheticWheelEvent;break;case topLevelTypes.topCopy:case topLevelTypes.topCut:case topLevelTypes.topPaste:n=SyntheticClipboardEvent}"production"!==process.env.NODE_ENV?invariant(n,"SimpleEventPlugin: Unhandled event type, `%s`.",e):invariant(n);var s=n.getPooled(p,o,a);return EventPropagators.accumulateTwoPhaseDispatches(s),s}};module.exports=SimpleEventPlugin;
}).call(this,require('_process'))

},{"./EventConstants":39,"./EventPluginUtils":43,"./EventPropagators":44,"./SyntheticClipboardEvent":108,"./SyntheticDragEvent":110,"./SyntheticEvent":111,"./SyntheticFocusEvent":112,"./SyntheticKeyboardEvent":114,"./SyntheticMouseEvent":115,"./SyntheticTouchEvent":116,"./SyntheticUIEvent":117,"./SyntheticWheelEvent":118,"./getEventCharCode":138,"./invariant":150,"./keyOf":157,"./warning":169,"_process":22}],108:[function(require,module,exports){
"use strict";function SyntheticClipboardEvent(t,e,n){SyntheticEvent.call(this,t,e,n)}var SyntheticEvent=require("./SyntheticEvent"),ClipboardEventInterface={clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}};SyntheticEvent.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface),module.exports=SyntheticClipboardEvent;
},{"./SyntheticEvent":111}],109:[function(require,module,exports){
"use strict";function SyntheticCompositionEvent(t,n,e){SyntheticEvent.call(this,t,n,e)}var SyntheticEvent=require("./SyntheticEvent"),CompositionEventInterface={data:null};SyntheticEvent.augmentClass(SyntheticCompositionEvent,CompositionEventInterface),module.exports=SyntheticCompositionEvent;
},{"./SyntheticEvent":111}],110:[function(require,module,exports){
"use strict";function SyntheticDragEvent(t,e,n){SyntheticMouseEvent.call(this,t,e,n)}var SyntheticMouseEvent=require("./SyntheticMouseEvent"),DragEventInterface={dataTransfer:null};SyntheticMouseEvent.augmentClass(SyntheticDragEvent,DragEventInterface),module.exports=SyntheticDragEvent;
},{"./SyntheticMouseEvent":115}],111:[function(require,module,exports){
"use strict";function SyntheticEvent(t,e,n){this.dispatchConfig=t,this.dispatchMarker=e,this.nativeEvent=n;var r=this.constructor.Interface;for(var a in r)if(r.hasOwnProperty(a)){var s=r[a];this[a]=s?s(n):n[a]}var i=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=i?emptyFunction.thatReturnsTrue:emptyFunction.thatReturnsFalse,this.isPropagationStopped=emptyFunction.thatReturnsFalse}var PooledClass=require("./PooledClass"),assign=require("./Object.assign"),emptyFunction=require("./emptyFunction"),getEventTarget=require("./getEventTarget"),EventInterface={type:null,target:getEventTarget,currentTarget:emptyFunction.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};assign(SyntheticEvent.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t.preventDefault?t.preventDefault():t.returnValue=!1,this.isDefaultPrevented=emptyFunction.thatReturnsTrue},stopPropagation:function(){var t=this.nativeEvent;t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,this.isPropagationStopped=emptyFunction.thatReturnsTrue},persist:function(){this.isPersistent=emptyFunction.thatReturnsTrue},isPersistent:emptyFunction.thatReturnsFalse,destructor:function(){var t=this.constructor.Interface;for(var e in t)this[e]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),SyntheticEvent.Interface=EventInterface,SyntheticEvent.augmentClass=function(t,e){var n=this,r=Object.create(n.prototype);assign(r,t.prototype),t.prototype=r,t.prototype.constructor=t,t.Interface=assign({},n.Interface,e),t.augmentClass=n.augmentClass,PooledClass.addPoolingTo(t,PooledClass.threeArgumentPooler)},PooledClass.addPoolingTo(SyntheticEvent,PooledClass.threeArgumentPooler),module.exports=SyntheticEvent;
},{"./Object.assign":50,"./PooledClass":51,"./emptyFunction":131,"./getEventTarget":141}],112:[function(require,module,exports){
"use strict";function SyntheticFocusEvent(t,e,n){SyntheticUIEvent.call(this,t,e,n)}var SyntheticUIEvent=require("./SyntheticUIEvent"),FocusEventInterface={relatedTarget:null};SyntheticUIEvent.augmentClass(SyntheticFocusEvent,FocusEventInterface),module.exports=SyntheticFocusEvent;
},{"./SyntheticUIEvent":117}],113:[function(require,module,exports){
"use strict";function SyntheticInputEvent(t,n,e){SyntheticEvent.call(this,t,n,e)}var SyntheticEvent=require("./SyntheticEvent"),InputEventInterface={data:null};SyntheticEvent.augmentClass(SyntheticInputEvent,InputEventInterface),module.exports=SyntheticInputEvent;
},{"./SyntheticEvent":111}],114:[function(require,module,exports){
"use strict";function SyntheticKeyboardEvent(e,t,n){SyntheticUIEvent.call(this,e,t,n)}var SyntheticUIEvent=require("./SyntheticUIEvent"),getEventCharCode=require("./getEventCharCode"),getEventKey=require("./getEventKey"),getEventModifierState=require("./getEventModifierState"),KeyboardEventInterface={key:getEventKey,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState,charCode:function(e){return"keypress"===e.type?getEventCharCode(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?getEventCharCode(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface),module.exports=SyntheticKeyboardEvent;
},{"./SyntheticUIEvent":117,"./getEventCharCode":138,"./getEventKey":139,"./getEventModifierState":140}],115:[function(require,module,exports){
"use strict";function SyntheticMouseEvent(e,t,n){SyntheticUIEvent.call(this,e,t,n)}var SyntheticUIEvent=require("./SyntheticUIEvent"),ViewportMetrics=require("./ViewportMetrics"),getEventModifierState=require("./getEventModifierState"),MouseEventInterface={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+ViewportMetrics.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+ViewportMetrics.currentScrollTop}};SyntheticUIEvent.augmentClass(SyntheticMouseEvent,MouseEventInterface),module.exports=SyntheticMouseEvent;
},{"./SyntheticUIEvent":117,"./ViewportMetrics":120,"./getEventModifierState":140}],116:[function(require,module,exports){
"use strict";function SyntheticTouchEvent(e,t,n){SyntheticUIEvent.call(this,e,t,n)}var SyntheticUIEvent=require("./SyntheticUIEvent"),getEventModifierState=require("./getEventModifierState"),TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState};SyntheticUIEvent.augmentClass(SyntheticTouchEvent,TouchEventInterface),module.exports=SyntheticTouchEvent;
},{"./SyntheticUIEvent":117,"./getEventModifierState":140}],117:[function(require,module,exports){
"use strict";function SyntheticUIEvent(e,t,n){SyntheticEvent.call(this,e,t,n)}var SyntheticEvent=require("./SyntheticEvent"),getEventTarget=require("./getEventTarget"),UIEventInterface={view:function(e){if(e.view)return e.view;var t=getEventTarget(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};SyntheticEvent.augmentClass(SyntheticUIEvent,UIEventInterface),module.exports=SyntheticUIEvent;
},{"./SyntheticEvent":111,"./getEventTarget":141}],118:[function(require,module,exports){
"use strict";function SyntheticWheelEvent(e,t,n){SyntheticMouseEvent.call(this,e,t,n)}var SyntheticMouseEvent=require("./SyntheticMouseEvent"),WheelEventInterface={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};SyntheticMouseEvent.augmentClass(SyntheticWheelEvent,WheelEventInterface),module.exports=SyntheticWheelEvent;
},{"./SyntheticMouseEvent":115}],119:[function(require,module,exports){
(function (process){
"use strict";var invariant=require("./invariant"),Mixin={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(i,n,a,t,r,s,e,l){"production"!==process.env.NODE_ENV?invariant(!this.isInTransaction(),"Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction."):invariant(!this.isInTransaction());var o,c;try{this._isInTransaction=!0,o=!0,this.initializeAll(0),c=i.call(n,a,t,r,s,e,l),o=!1}finally{try{if(o)try{this.closeAll(0)}catch(h){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(i){for(var n=this.transactionWrappers,a=i;a<n.length;a++){var t=n[a];try{this.wrapperInitData[a]=Transaction.OBSERVED_ERROR,this.wrapperInitData[a]=t.initialize?t.initialize.call(this):null}finally{if(this.wrapperInitData[a]===Transaction.OBSERVED_ERROR)try{this.initializeAll(a+1)}catch(r){}}}},closeAll:function(i){"production"!==process.env.NODE_ENV?invariant(this.isInTransaction(),"Transaction.closeAll(): Cannot close transaction when none are open."):invariant(this.isInTransaction());for(var n=this.transactionWrappers,a=i;a<n.length;a++){var t,r=n[a],s=this.wrapperInitData[a];try{t=!0,s!==Transaction.OBSERVED_ERROR&&r.close&&r.close.call(this,s),t=!1}finally{if(t)try{this.closeAll(a+1)}catch(e){}}}this.wrapperInitData.length=0}},Transaction={Mixin:Mixin,OBSERVED_ERROR:{}};module.exports=Transaction;
}).call(this,require('_process'))

},{"./invariant":150,"_process":22}],120:[function(require,module,exports){
"use strict";var getUnboundedScrollPosition=require("./getUnboundedScrollPosition"),ViewportMetrics={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(){var r=getUnboundedScrollPosition(window);ViewportMetrics.currentScrollLeft=r.x,ViewportMetrics.currentScrollTop=r.y}};module.exports=ViewportMetrics;
},{"./getUnboundedScrollPosition":146}],121:[function(require,module,exports){
(function (process){
"use strict";function accumulateInto(n,r){if("production"!==process.env.NODE_ENV?invariant(null!=r,"accumulateInto(...): Accumulated items must not be null or undefined."):invariant(null!=r),null==n)return r;var a=Array.isArray(n),u=Array.isArray(r);return a&&u?(n.push.apply(n,r),n):a?(n.push(r),n):u?[n].concat(r):[n,r]}var invariant=require("./invariant");module.exports=accumulateInto;
}).call(this,require('_process'))

},{"./invariant":150,"_process":22}],122:[function(require,module,exports){
"use strict";function adler32(r){for(var e=1,t=0,a=0;a<r.length;a++)e=(e+r.charCodeAt(a))%MOD,t=(t+e)%MOD;return e|t<<16}var MOD=65521;module.exports=adler32;
},{}],123:[function(require,module,exports){
function camelize(e){return e.replace(_hyphenPattern,function(e,n){return n.toUpperCase()})}var _hyphenPattern=/-(.)/g;module.exports=camelize;
},{}],124:[function(require,module,exports){
"use strict";function camelizeStyleName(e){return camelize(e.replace(msPattern,"ms-"))}var camelize=require("./camelize"),msPattern=/^-ms-/;module.exports=camelizeStyleName;
},{"./camelize":123}],125:[function(require,module,exports){
function containsNode(o,e){return o&&e?o===e?!0:isTextNode(o)?!1:isTextNode(e)?containsNode(o,e.parentNode):o.contains?o.contains(e):o.compareDocumentPosition?!!(16&o.compareDocumentPosition(e)):!1:!1}var isTextNode=require("./isTextNode");module.exports=containsNode;
},{"./isTextNode":154}],126:[function(require,module,exports){
function hasArrayNature(r){return!!r&&("object"==typeof r||"function"==typeof r)&&"length"in r&&!("setInterval"in r)&&"number"!=typeof r.nodeType&&(Array.isArray(r)||"callee"in r||"item"in r)}function createArrayFrom(r){return hasArrayNature(r)?Array.isArray(r)?r.slice():toArray(r):[r]}var toArray=require("./toArray");module.exports=createArrayFrom;
},{"./toArray":167}],127:[function(require,module,exports){
(function (process){
"use strict";function createFullPageComponent(e){var t=ReactElement.createFactory(e),n=ReactCompositeComponent.createClass({displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){"production"!==process.env.NODE_ENV?invariant(!1,"%s tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",this.constructor.displayName):invariant(!1)},render:function(){return t(this.props)}});return n}var ReactCompositeComponent=require("./ReactCompositeComponent"),ReactElement=require("./ReactElement"),invariant=require("./invariant");module.exports=createFullPageComponent;
}).call(this,require('_process'))

},{"./ReactCompositeComponent":58,"./ReactElement":76,"./invariant":150,"_process":22}],128:[function(require,module,exports){
(function (process){
function getNodeName(e){var r=e.match(nodeNamePattern);return r&&r[1].toLowerCase()}function createNodesFromMarkup(e,r){var a=dummyNode;"production"!==process.env.NODE_ENV?invariant(!!dummyNode,"createNodesFromMarkup dummy not initialized"):invariant(!!dummyNode);var n=getNodeName(e),t=n&&getMarkupWrap(n);if(t){a.innerHTML=t[1]+e+t[2];for(var o=t[0];o--;)a=a.lastChild}else a.innerHTML=e;var i=a.getElementsByTagName("script");i.length&&("production"!==process.env.NODE_ENV?invariant(r,"createNodesFromMarkup(...): Unexpected <script> element rendered."):invariant(r),createArrayFrom(i).forEach(r));for(var m=createArrayFrom(a.childNodes);a.lastChild;)a.removeChild(a.lastChild);return m}var ExecutionEnvironment=require("./ExecutionEnvironment"),createArrayFrom=require("./createArrayFrom"),getMarkupWrap=require("./getMarkupWrap"),invariant=require("./invariant"),dummyNode=ExecutionEnvironment.canUseDOM?document.createElement("div"):null,nodeNamePattern=/^\s*<(\w+)/;module.exports=createNodesFromMarkup;
}).call(this,require('_process'))

},{"./ExecutionEnvironment":45,"./createArrayFrom":126,"./getMarkupWrap":142,"./invariant":150,"_process":22}],129:[function(require,module,exports){
"use strict";function dangerousStyleValue(e,r){var s=null==r||"boolean"==typeof r||""===r;if(s)return"";var t=isNaN(r);return t||0===r||isUnitlessNumber.hasOwnProperty(e)&&isUnitlessNumber[e]?""+r:("string"==typeof r&&(r=r.trim()),r+"px")}var CSSProperty=require("./CSSProperty"),isUnitlessNumber=CSSProperty.isUnitlessNumber;module.exports=dangerousStyleValue;
},{"./CSSProperty":27}],130:[function(require,module,exports){
(function (process){
function deprecated(e,r,n,a,i){var s=!1;if("production"!==process.env.NODE_ENV){var t=function(){return"production"!==process.env.NODE_ENV?warning(s,e+"."+r+" will be deprecated in a future version. "+("Use "+e+"."+n+" instead.")):null,s=!0,i.apply(a,arguments)};return t.displayName=e+"_"+r,assign(t,i)}return i}var assign=require("./Object.assign"),warning=require("./warning");module.exports=deprecated;
}).call(this,require('_process'))

},{"./Object.assign":50,"./warning":169,"_process":22}],131:[function(require,module,exports){
function makeEmptyFunction(t){return function(){return t}}function emptyFunction(){}emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(t){return t},module.exports=emptyFunction;
},{}],132:[function(require,module,exports){
(function (process){
"use strict";var emptyObject={};"production"!==process.env.NODE_ENV&&Object.freeze(emptyObject),module.exports=emptyObject;
}).call(this,require('_process'))

},{"_process":22}],133:[function(require,module,exports){
"use strict";function escaper(e){return ESCAPE_LOOKUP[e]}function escapeTextForBrowser(e){return(""+e).replace(ESCAPE_REGEX,escaper)}var ESCAPE_LOOKUP={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},ESCAPE_REGEX=/[&><"']/g;module.exports=escapeTextForBrowser;
},{}],134:[function(require,module,exports){
(function (process){
"use strict";function flattenSingleChildIntoContext(e,n,t){var r=e,l=!r.hasOwnProperty(t);if("production"!==process.env.NODE_ENV?warning(l,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",t):null,l&&null!=n){var i,o=typeof n;i="string"===o?ReactTextComponent(n):"number"===o?ReactTextComponent(""+n):n,r[t]=i}}function flattenChildren(e){if(null==e)return e;var n={};return traverseAllChildren(e,flattenSingleChildIntoContext,n),n}var ReactTextComponent=require("./ReactTextComponent"),traverseAllChildren=require("./traverseAllChildren"),warning=require("./warning");module.exports=flattenChildren;
}).call(this,require('_process'))

},{"./ReactTextComponent":102,"./traverseAllChildren":168,"./warning":169,"_process":22}],135:[function(require,module,exports){
"use strict";function focusNode(o){try{o.focus()}catch(c){}}module.exports=focusNode;
},{}],136:[function(require,module,exports){
"use strict";var forEachAccumulated=function(c,r,a){Array.isArray(c)?c.forEach(r,a):c&&r.call(a,c)};module.exports=forEachAccumulated;
},{}],137:[function(require,module,exports){
function getActiveElement(){try{return document.activeElement||document.body}catch(e){return document.body}}module.exports=getActiveElement;
},{}],138:[function(require,module,exports){
"use strict";function getEventCharCode(e){var r,t=e.keyCode;return"charCode"in e?(r=e.charCode,0===r&&13===t&&(r=13)):r=t,r>=32||13===r?r:0}module.exports=getEventCharCode;
},{}],139:[function(require,module,exports){
"use strict";function getEventKey(e){if(e.key){var r=normalizeKey[e.key]||e.key;if("Unidentified"!==r)return r}if("keypress"===e.type){var t=getEventCharCode(e);return 13===t?"Enter":String.fromCharCode(t)}return"keydown"===e.type||"keyup"===e.type?translateToKey[e.keyCode]||"Unidentified":""}var getEventCharCode=require("./getEventCharCode"),normalizeKey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},translateToKey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};module.exports=getEventKey;
},{"./getEventCharCode":138}],140:[function(require,module,exports){
"use strict";function modifierStateGetter(t){var e=this,r=e.nativeEvent;if(r.getModifierState)return r.getModifierState(t);var i=modifierKeyToProp[t];return i?!!r[i]:!1}function getEventModifierState(){return modifierStateGetter}var modifierKeyToProp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};module.exports=getEventModifierState;
},{}],141:[function(require,module,exports){
"use strict";function getEventTarget(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}module.exports=getEventTarget;
},{}],142:[function(require,module,exports){
(function (process){
function getMarkupWrap(e){return"production"!==process.env.NODE_ENV?invariant(!!dummyNode,"Markup wrapping node not initialized"):invariant(!!dummyNode),markupWrap.hasOwnProperty(e)||(e="*"),shouldWrap.hasOwnProperty(e)||(dummyNode.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",shouldWrap[e]=!dummyNode.firstChild),shouldWrap[e]?markupWrap[e]:null}var ExecutionEnvironment=require("./ExecutionEnvironment"),invariant=require("./invariant"),dummyNode=ExecutionEnvironment.canUseDOM?document.createElement("div"):null,shouldWrap={circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},selectWrap=[1,'<select multiple="true">',"</select>"],tableWrap=[1,"<table>","</table>"],trWrap=[3,"<table><tbody><tr>","</tr></tbody></table>"],svgWrap=[1,"<svg>","</svg>"],markupWrap={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:selectWrap,option:selectWrap,caption:tableWrap,colgroup:tableWrap,tbody:tableWrap,tfoot:tableWrap,thead:tableWrap,td:trWrap,th:trWrap,circle:svgWrap,defs:svgWrap,ellipse:svgWrap,g:svgWrap,line:svgWrap,linearGradient:svgWrap,path:svgWrap,polygon:svgWrap,polyline:svgWrap,radialGradient:svgWrap,rect:svgWrap,stop:svgWrap,text:svgWrap};module.exports=getMarkupWrap;
}).call(this,require('_process'))

},{"./ExecutionEnvironment":45,"./invariant":150,"_process":22}],143:[function(require,module,exports){
"use strict";function getLeafNode(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function getSiblingNode(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function getNodeForCharacterOffset(e,t){for(var o=getLeafNode(e),n=0,r=0;o;){if(3==o.nodeType){if(r=n+o.textContent.length,t>=n&&r>=t)return{node:o,offset:t-n};n=r}o=getLeafNode(getSiblingNode(o))}}module.exports=getNodeForCharacterOffset;
},{}],144:[function(require,module,exports){
"use strict";function getReactRootElementInContainer(e){return e?e.nodeType===DOC_NODE_TYPE?e.documentElement:e.firstChild:null}var DOC_NODE_TYPE=9;module.exports=getReactRootElementInContainer;
},{}],145:[function(require,module,exports){
"use strict";function getTextContentAccessor(){return!contentKey&&ExecutionEnvironment.canUseDOM&&(contentKey="textContent"in document.documentElement?"textContent":"innerText"),contentKey}var ExecutionEnvironment=require("./ExecutionEnvironment"),contentKey=null;module.exports=getTextContentAccessor;
},{"./ExecutionEnvironment":45}],146:[function(require,module,exports){
"use strict";function getUnboundedScrollPosition(o){return o===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:o.scrollLeft,y:o.scrollTop}}module.exports=getUnboundedScrollPosition;
},{}],147:[function(require,module,exports){
function hyphenate(e){return e.replace(_uppercasePattern,"-$1").toLowerCase()}var _uppercasePattern=/([A-Z])/g;module.exports=hyphenate;
},{}],148:[function(require,module,exports){
"use strict";function hyphenateStyleName(e){return hyphenate(e).replace(msPattern,"-ms-")}var hyphenate=require("./hyphenate"),msPattern=/^ms-/;module.exports=hyphenateStyleName;
},{"./hyphenate":147}],149:[function(require,module,exports){
(function (process){
"use strict";function instantiateReactComponent(e,t){var n;if("production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?warning(e&&("function"==typeof e.type||"string"==typeof e.type),"Only functions or strings can be mounted as React components."):null,e.type._mockedReactClassConstructor)){ReactLegacyElement._isLegacyCallWarningEnabled=!1;try{n=new e.type._mockedReactClassConstructor(e.props)}finally{ReactLegacyElement._isLegacyCallWarningEnabled=!0}ReactElement.isValidElement(n)&&(n=new n.type(n.props));var o=n.render;if(o)return o._isMockFunction&&!o._getMockImplementation()&&o.mockImplementation(ReactEmptyComponent.getEmptyComponent),n.construct(e),n;e=ReactEmptyComponent.getEmptyComponent()}return n="string"==typeof e.type?ReactNativeComponent.createInstanceForTag(e.type,e.props,t):new e.type(e.props),"production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?warning("function"==typeof n.construct&&"function"==typeof n.mountComponent&&"function"==typeof n.receiveComponent,"Only React Components can be mounted."):null),n.construct(e),n}var warning=require("./warning"),ReactElement=require("./ReactElement"),ReactLegacyElement=require("./ReactLegacyElement"),ReactNativeComponent=require("./ReactNativeComponent"),ReactEmptyComponent=require("./ReactEmptyComponent");module.exports=instantiateReactComponent;
}).call(this,require('_process'))

},{"./ReactElement":76,"./ReactEmptyComponent":78,"./ReactLegacyElement":85,"./ReactNativeComponent":90,"./warning":169,"_process":22}],150:[function(require,module,exports){
(function (process){
"use strict";var invariant=function(r,e,n,i,o,a,t,s){if("production"!==process.env.NODE_ENV&&void 0===e)throw new Error("invariant requires an error message argument");if(!r){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[n,i,o,a,t,s],d=0;u=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return v[d++]}))}throw u.framesToPop=1,u}};module.exports=invariant;
}).call(this,require('_process'))

},{"_process":22}],151:[function(require,module,exports){
"use strict";function isEventSupported(e,t){if(!ExecutionEnvironment.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,u=n in document;if(!u){var i=document.createElement("div");i.setAttribute(n,"return;"),u="function"==typeof i[n]}return!u&&useHasFeature&&"wheel"===e&&(u=document.implementation.hasFeature("Events.wheel","3.0")),u}var ExecutionEnvironment=require("./ExecutionEnvironment"),useHasFeature;ExecutionEnvironment.canUseDOM&&(useHasFeature=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),module.exports=isEventSupported;
},{"./ExecutionEnvironment":45}],152:[function(require,module,exports){
function isNode(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}module.exports=isNode;
},{}],153:[function(require,module,exports){
"use strict";function isTextInputElement(e){return e&&("INPUT"===e.nodeName&&supportedInputTypes[e.type]||"TEXTAREA"===e.nodeName)}var supportedInputTypes={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};module.exports=isTextInputElement;
},{}],154:[function(require,module,exports){
function isTextNode(e){return isNode(e)&&3==e.nodeType}var isNode=require("./isNode");module.exports=isTextNode;
},{"./isNode":152}],155:[function(require,module,exports){
"use strict";function joinClasses(s){s||(s="");var e,r=arguments.length;if(r>1)for(var n=1;r>n;n++)e=arguments[n],e&&(s=(s?s+" ":"")+e);return s}module.exports=joinClasses;
},{}],156:[function(require,module,exports){
(function (process){
"use strict";var invariant=require("./invariant"),keyMirror=function(r){var n,i={};"production"!==process.env.NODE_ENV?invariant(r instanceof Object&&!Array.isArray(r),"keyMirror(...): Argument must be an object."):invariant(r instanceof Object&&!Array.isArray(r));for(n in r)r.hasOwnProperty(n)&&(i[n]=n);return i};module.exports=keyMirror;
}).call(this,require('_process'))

},{"./invariant":150,"_process":22}],157:[function(require,module,exports){
var keyOf=function(r){var e;for(e in r)if(r.hasOwnProperty(e))return e;return null};module.exports=keyOf;
},{}],158:[function(require,module,exports){
"use strict";function mapObject(r,t,e){if(!r)return null;var a={};for(var n in r)hasOwnProperty.call(r,n)&&(a[n]=t.call(e,r[n],n,r));return a}var hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=mapObject;
},{}],159:[function(require,module,exports){
"use strict";function memoizeStringOnly(n){var r={};return function(t){return r.hasOwnProperty(t)?r[t]:r[t]=n.call(this,t)}}module.exports=memoizeStringOnly;
},{}],160:[function(require,module,exports){
(function (process){
"use strict";function monitorCodeUse(e){"production"!==process.env.NODE_ENV?invariant(e&&!/[^a-z0-9_]/.test(e),"You must provide an eventName using only the characters [a-z0-9_]"):invariant(e&&!/[^a-z0-9_]/.test(e))}var invariant=require("./invariant");module.exports=monitorCodeUse;
}).call(this,require('_process'))

},{"./invariant":150,"_process":22}],161:[function(require,module,exports){
(function (process){
"use strict";function onlyChild(e){return"production"!==process.env.NODE_ENV?invariant(ReactElement.isValidElement(e),"onlyChild must be passed a children with exactly one child."):invariant(ReactElement.isValidElement(e)),e}var ReactElement=require("./ReactElement"),invariant=require("./invariant");module.exports=onlyChild;
}).call(this,require('_process'))

},{"./ReactElement":76,"./invariant":150,"_process":22}],162:[function(require,module,exports){
"use strict";var ExecutionEnvironment=require("./ExecutionEnvironment"),performance;ExecutionEnvironment.canUseDOM&&(performance=window.performance||window.msPerformance||window.webkitPerformance),module.exports=performance||{};
},{"./ExecutionEnvironment":45}],163:[function(require,module,exports){
var performance=require("./performance");performance&&performance.now||(performance=Date);var performanceNow=performance.now.bind(performance);module.exports=performanceNow;
},{"./performance":162}],164:[function(require,module,exports){
"use strict";var ExecutionEnvironment=require("./ExecutionEnvironment"),WHITESPACE_TEST=/^[ \r\n\t\f]/,NONVISIBLE_TEST=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,setInnerHTML=function(e,n){e.innerHTML=n};if(ExecutionEnvironment.canUseDOM){var testElement=document.createElement("div");testElement.innerHTML=" ",""===testElement.innerHTML&&(setInnerHTML=function(e,n){if(e.parentNode&&e.parentNode.replaceChild(e,e),WHITESPACE_TEST.test(n)||"<"===n[0]&&NONVISIBLE_TEST.test(n)){e.innerHTML="ï»¿"+n;var t=e.firstChild;1===t.data.length?e.removeChild(t):t.deleteData(0,1)}else e.innerHTML=n})}module.exports=setInnerHTML;
},{"./ExecutionEnvironment":45}],165:[function(require,module,exports){
"use strict";function shallowEqual(r,n){if(r===n)return!0;var t;for(t in r)if(r.hasOwnProperty(t)&&(!n.hasOwnProperty(t)||r[t]!==n[t]))return!1;for(t in n)if(n.hasOwnProperty(t)&&!r.hasOwnProperty(t))return!1;return!0}module.exports=shallowEqual;
},{}],166:[function(require,module,exports){
"use strict";function shouldUpdateReactComponent(e,t){return e&&t&&e.type===t.type&&e.key===t.key&&e._owner===t._owner?!0:!1}module.exports=shouldUpdateReactComponent;
},{}],167:[function(require,module,exports){
(function (process){
function toArray(r){var t=r.length;if("production"!==process.env.NODE_ENV?invariant(!Array.isArray(r)&&("object"==typeof r||"function"==typeof r),"toArray: Array-like object expected"):invariant(!Array.isArray(r)&&("object"==typeof r||"function"==typeof r)),"production"!==process.env.NODE_ENV?invariant("number"==typeof t,"toArray: Object needs a length property"):invariant("number"==typeof t),"production"!==process.env.NODE_ENV?invariant(0===t||t-1 in r,"toArray: Object should have keys for indices"):invariant(0===t||t-1 in r),r.hasOwnProperty)try{return Array.prototype.slice.call(r)}catch(e){}for(var n=Array(t),a=0;t>a;a++)n[a]=r[a];return n}var invariant=require("./invariant");module.exports=toArray;
}).call(this,require('_process'))

},{"./invariant":150,"_process":22}],168:[function(require,module,exports){
(function (process){
"use strict";function userProvidedKeyEscaper(e){return userProvidedKeyEscaperLookup[e]}function getComponentKey(e,r){return e&&null!=e.key?wrapUserProvidedKey(e.key):r.toString(36)}function escapeUserProvidedKey(e){return(""+e).replace(userProvidedKeyEscapeRegex,userProvidedKeyEscaper)}function wrapUserProvidedKey(e){return"$"+escapeUserProvidedKey(e)}function traverseAllChildren(e,r,n){return null==e?0:traverseAllChildrenImpl(e,"",0,r,n)}var ReactElement=require("./ReactElement"),ReactInstanceHandles=require("./ReactInstanceHandles"),invariant=require("./invariant"),SEPARATOR=ReactInstanceHandles.SEPARATOR,SUBSEPARATOR=":",userProvidedKeyEscaperLookup={"=":"=0",".":"=1",":":"=2"},userProvidedKeyEscapeRegex=/[=.:]/g,traverseAllChildrenImpl=function(e,r,n,t,a){var l,i,o=0;if(Array.isArray(e))for(var s=0;s<e.length;s++){var d=e[s];l=r+(r?SUBSEPARATOR:SEPARATOR)+getComponentKey(d,s),i=n+o,o+=traverseAllChildrenImpl(d,l,i,t,a)}else{var c=typeof e,u=""===r,v=u?SEPARATOR+getComponentKey(e,0):r;if(null==e||"boolean"===c)t(a,null,v,n),o=1;else if("string"===c||"number"===c||ReactElement.isValidElement(e))t(a,e,v,n),o=1;else if("object"===c){"production"!==process.env.NODE_ENV?invariant(!e||1!==e.nodeType,"traverseAllChildren(...): Encountered an invalid child; DOM elements are not valid children of React components."):invariant(!e||1!==e.nodeType);for(var p in e)e.hasOwnProperty(p)&&(l=r+(r?SUBSEPARATOR:SEPARATOR)+wrapUserProvidedKey(p)+SUBSEPARATOR+getComponentKey(e[p],0),i=n+o,o+=traverseAllChildrenImpl(e[p],l,i,t,a))}}return o};module.exports=traverseAllChildren;
}).call(this,require('_process'))

},{"./ReactElement":76,"./ReactInstanceHandles":84,"./invariant":150,"_process":22}],169:[function(require,module,exports){
(function (process){
"use strict";var emptyFunction=require("./emptyFunction"),warning=emptyFunction;"production"!==process.env.NODE_ENV&&(warning=function(n,r){for(var e=[],i=2,t=arguments.length;t>i;i++)e.push(arguments[i]);if(void 0===r)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(!n){var o=0;console.warn("Warning: "+r.replace(/%s/g,function(){return e[o++]}))}}),module.exports=warning;
}).call(this,require('_process'))

},{"./emptyFunction":131,"_process":22}],170:[function(require,module,exports){
module.exports=require("./lib/React");
},{"./lib/React":52}],171:[function(require,module,exports){
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)void 0===n[u]&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
},{}],"jquery":[function(require,module,exports){
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=it.type(e);return"function"===n||it.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(it.isFunction(t))return it.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return it.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ft.test(t))return it.filter(t,e,n);t=it.filter(t,e)}return it.grep(e,function(e){return it.inArray(e,t)>=0!==n})}function i(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function o(e){var t=xt[e]={};return it.each(e.match(bt)||[],function(e,n){t[n]=!0}),t}function a(){ht.addEventListener?(ht.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1)):(ht.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))}function s(){(ht.addEventListener||"load"===event.type||"complete"===ht.readyState)&&(a(),it.ready())}function l(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(Et,"-$1").toLowerCase();if(n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Nt.test(n)?it.parseJSON(n):n}catch(i){}it.data(e,t,n)}else n=void 0}return n}function u(e){var t;for(t in e)if(("data"!==t||!it.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function c(e,t,n,r){if(it.acceptData(e)){var i,o,a=it.expando,s=e.nodeType,l=s?it.cache:e,u=s?e[a]:e[a]&&a;if(u&&l[u]&&(r||l[u].data)||void 0!==n||"string"!=typeof t)return u||(u=s?e[a]=J.pop()||it.guid++:a),l[u]||(l[u]=s?{}:{toJSON:it.noop}),("object"==typeof t||"function"==typeof t)&&(r?l[u]=it.extend(l[u],t):l[u].data=it.extend(l[u].data,t)),o=l[u],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[it.camelCase(t)]=n),"string"==typeof t?(i=o[t],null==i&&(i=o[it.camelCase(t)])):i=o,i}}function d(e,t,n){if(it.acceptData(e)){var r,i,o=e.nodeType,a=o?it.cache:e,s=o?e[it.expando]:it.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){it.isArray(t)?t=t.concat(it.map(t,it.camelCase)):t in r?t=[t]:(t=it.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;for(;i--;)delete r[t[i]];if(n?!u(r):!it.isEmptyObject(r))return}(n||(delete a[s].data,u(a[s])))&&(o?it.cleanData([e],!0):nt.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function f(){return!0}function p(){return!1}function h(){try{return ht.activeElement}catch(e){}}function m(e){var t=Ot.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function g(e,t){var n,r,i=0,o=typeof e.getElementsByTagName!==Ct?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==Ct?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||it.nodeName(r,t)?o.push(r):it.merge(o,g(r,t));return void 0===t||t&&it.nodeName(e,t)?it.merge([e],o):o}function v(e){jt.test(e.type)&&(e.defaultChecked=e.checked)}function y(e,t){return it.nodeName(e,"table")&&it.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function b(e){return e.type=(null!==it.find.attr(e,"type"))+"/"+e.type,e}function x(e){var t=Vt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function w(e,t){for(var n,r=0;null!=(n=e[r]);r++)it._data(n,"globalEval",!t||it._data(t[r],"globalEval"))}function T(e,t){if(1===t.nodeType&&it.hasData(e)){var n,r,i,o=it._data(e),a=it._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)it.event.add(t,n,s[n][r])}a.data&&(a.data=it.extend({},a.data))}}function C(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!nt.noCloneEvent&&t[it.expando]){i=it._data(t);for(r in i.events)it.removeEvent(t,r,i.handle);t.removeAttribute(it.expando)}"script"===n&&t.text!==e.text?(b(t).text=e.text,x(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),nt.html5Clone&&e.innerHTML&&!it.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&jt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function N(t,n){var r,i=it(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:it.css(i[0],"display");return i.detach(),o}function E(e){var t=ht,n=Zt[e];return n||(n=N(e,t),"none"!==n&&n||(Kt=(Kt||it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Kt[0].contentWindow||Kt[0].contentDocument).document,t.write(),t.close(),n=N(e,t),Kt.detach()),Zt[e]=n),n}function k(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function S(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=pn.length;i--;)if(t=pn[i]+n,t in e)return t;return r}function A(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=it._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&At(r)&&(o[a]=it._data(r,"olddisplay",E(r.nodeName)))):(i=At(r),(n&&"none"!==n||!i)&&it._data(r,"olddisplay",i?n:it.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function D(e,t,n){var r=un.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function j(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=it.css(e,n+St[o],!0,i)),r?("content"===n&&(a-=it.css(e,"padding"+St[o],!0,i)),"margin"!==n&&(a-=it.css(e,"border"+St[o]+"Width",!0,i))):(a+=it.css(e,"padding"+St[o],!0,i),"padding"!==n&&(a+=it.css(e,"border"+St[o]+"Width",!0,i)));return a}function L(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=en(e),a=nt.boxSizing&&"border-box"===it.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=tn(e,t,o),(0>i||null==i)&&(i=e.style[t]),rn.test(i))return i;r=a&&(nt.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+j(e,t,n||(a?"border":"content"),r,o)+"px"}function H(e,t,n,r,i){return new H.prototype.init(e,t,n,r,i)}function _(){return setTimeout(function(){hn=void 0}),hn=it.now()}function q(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=St[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function M(e,t,n){for(var r,i=(xn[t]||[]).concat(xn["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function O(e,t,n){var r,i,o,a,s,l,u,c,d=this,f={},p=e.style,h=e.nodeType&&At(e),m=it._data(e,"fxshow");n.queue||(s=it._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,it.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],u=it.css(e,"display"),c="none"===u?it._data(e,"olddisplay")||E(e.nodeName):u,"inline"===c&&"none"===it.css(e,"float")&&(nt.inlineBlockNeedsLayout&&"inline"!==E(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",nt.shrinkWrapBlocks()||d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],gn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;h=!0}f[r]=m&&m[r]||it.style(e,r)}else u=void 0;if(it.isEmptyObject(f))"inline"===("none"===u?E(e.nodeName):u)&&(p.display=u);else{m?"hidden"in m&&(h=m.hidden):m=it._data(e,"fxshow",{}),o&&(m.hidden=!h),h?it(e).show():d.done(function(){it(e).hide()}),d.done(function(){var t;it._removeData(e,"fxshow");for(t in f)it.style(e,t,f[t])});for(r in f)a=M(h?m[r]:0,r,d),r in m||(m[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function F(e,t){var n,r,i,o,a;for(n in e)if(r=it.camelCase(n),i=t[r],o=e[n],it.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=it.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function B(e,t,n){var r,i,o=0,a=bn.length,s=it.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=hn||_(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:it.extend({},t),opts:it.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:hn||_(),duration:n.duration,tweens:[],createTween:function(t,n){var r=it.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(F(c,u.opts.specialEasing);a>o;o++)if(r=bn[o].call(u,e,c,u.opts))return r;return it.map(c,M,u),it.isFunction(u.opts.start)&&u.opts.start.call(e,u),it.fx.timer(it.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function P(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(bt)||[];if(it.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function R(e,t,n,r){function i(s){var l;return o[s]=!0,it.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||a||o[u]?a?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var o={},a=e===In;return i(t.dataTypes[0])||!o["*"]&&i("*")}function W(e,t){var n,r,i=it.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&it.extend(!0,e,n),e}function $(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)o=l[0];else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){o=a;break}r||(r=a)}o=o||r}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function z(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(d){return{state:"parsererror",error:a?d:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function I(e,t,n,r){var i;if(it.isArray(t))it.each(t,function(t,i){n||Jn.test(e)?r(e,i):I(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==it.type(t))r(e,t);else for(i in t)I(e+"["+i+"]",t[i],n,r)}function X(){try{return new e.XMLHttpRequest}catch(t){}}function U(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function V(e){return it.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var J=[],Y=J.slice,G=J.concat,Q=J.push,K=J.indexOf,Z={},et=Z.toString,tt=Z.hasOwnProperty,nt={},rt="1.11.1",it=function(e,t){return new it.fn.init(e,t)},ot=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,at=/^-ms-/,st=/-([\da-z])/gi,lt=function(e,t){return t.toUpperCase()};it.fn=it.prototype={jquery:rt,constructor:it,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=it.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return it.each(this,e,t)},map:function(e){return this.pushStack(it.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:J.sort,splice:J.splice},it.extend=it.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||it.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],a!==n&&(u&&n&&(it.isPlainObject(n)||(t=it.isArray(n)))?(t?(t=!1,o=e&&it.isArray(e)?e:[]):o=e&&it.isPlainObject(e)?e:{},a[r]=it.extend(u,o,n)):void 0!==n&&(a[r]=n));return a},it.extend({expando:"jQuery"+(rt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===it.type(e)},isArray:Array.isArray||function(e){return"array"===it.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!it.isArray(e)&&e-parseFloat(e)>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==it.type(e)||e.nodeType||it.isWindow(e))return!1;try{if(e.constructor&&!tt.call(e,"constructor")&&!tt.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}if(nt.ownLast)for(t in e)return tt.call(e,t);for(t in e);return void 0===t||tt.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Z[et.call(e)]||"object":typeof e},globalEval:function(t){t&&it.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(at,"ms-").replace(st,lt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ot,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?it.merge(r,"string"==typeof e?[e]:e):Q.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(K)return K.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),l=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&l.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&l.push(i);return G.apply([],l)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(i=e[t],t=e,e=i),it.isFunction(e)?(n=Y.call(arguments,2),r=function(){return e.apply(t||this,n.concat(Y.call(arguments)))},r.guid=e.guid=e.guid||it.guid++,r):void 0},now:function(){return+new Date},support:nt}),it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Z["[object "+t+"]"]=t.toLowerCase()});var ut=function(e){function t(e,t,n,r){var i,o,a,s,l,u,d,p,h,m;if((t?t.ownerDocument||t:R)!==H&&L(t),t=t||H,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(q&&!r){if(i=yt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&B(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(w.qsa&&(!M||!M.test(e))){if(p=d=P,h=t,m=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(u=E(e),(d=t.getAttribute("id"))?p=d.replace(xt,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",l=u.length;l--;)u[l]=p+f(u[l]);h=bt.test(e)&&c(t.parentNode)||t,m=u.join(",")}if(m)try{return Z.apply(n,h.querySelectorAll(m)),n}catch(g){}finally{d||t.removeAttribute("id")}}}return S(e.replace(lt,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[P]=!0,e}function i(e){var t=H.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||J)-(~e.sourceIndex||J);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&typeof e.getElementsByTagName!==V&&e}function d(){}function f(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=$++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,u=[W,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[P]||(t[P]={}),(s=l[r])&&s[0]===W&&s[1]===o)return u[2]=s[2];if(l[r]=u,u[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function v(e,t,n,i,o,a){return i&&!i[P]&&(i=v(i)),o&&!o[P]&&(o=v(o,a)),r(function(r,a,s,l){var u,c,d,f=[],p=[],h=a.length,v=r||m(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?v:g(v,f,e,s,l),b=n?o||(r?e:h||i)?[]:a:y;if(n&&n(y,b,s,l),i)for(u=g(b,p),i(u,[],s,l),c=u.length;c--;)(d=u[c])&&(b[p[c]]=!(y[p[c]]=d));if(r){if(o||e){if(o){for(u=[],c=b.length;c--;)(d=b[c])&&u.push(y[c]=d);o(null,b=[],u,l)}for(c=b.length;c--;)(d=b[c])&&(u=o?tt.call(r,d):f[c])>-1&&(r[u]=!(a[u]=d))}}else b=g(b===a?b.splice(h,b.length):b),o?o(null,a,b,l):Z.apply(a,b)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,l=p(function(e){return e===t},a,!0),u=p(function(e){return tt.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==A)||((t=n).nodeType?l(e,n,r):u(e,n,r))}];i>s;s++)if(n=T.relative[e[s].type])c=[p(h(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;i>r&&!T.relative[e[r].type];r++);return v(s>1&&h(c),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(lt,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&f(e))}c.push(n)}return h(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,l,u){var c,d,f,p=0,h="0",m=r&&[],v=[],y=A,b=r||o&&T.find.TAG("*",u),x=W+=null==y?1:Math.random()||.1,w=b.length;for(u&&(A=a!==H&&a);h!==w&&null!=(c=b[h]);h++){if(o&&c){for(d=0;f=e[d++];)if(f(c,a,s)){l.push(c);break}u&&(W=x)}i&&((c=!f&&c)&&p--,r&&m.push(c))}if(p+=h,i&&h!==p){for(d=0;f=n[d++];)f(m,v,a,s);if(r){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=Q.call(l));v=g(v)}Z.apply(l,v),u&&!r&&v.length>0&&p+n.length>1&&t.uniqueSort(l)}return u&&(W=x,A=y),m};return i?r(a):a}var x,w,T,C,N,E,k,S,A,D,j,L,H,_,q,M,O,F,B,P="sizzle"+-new Date,R=e.document,W=0,$=0,z=n(),I=n(),X=n(),U=function(e,t){return e===t&&(j=!0),0},V="undefined",J=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,K=G.push,Z=G.push,et=G.slice,tt=G.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",rt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=it.replace("w","w#"),at="\\["+rt+"*("+it+")(?:"+rt+"*([*^$|!~]?=)"+rt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+rt+"*\\]",st=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+at+")*)|.*)\\)|)",lt=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),ut=new RegExp("^"+rt+"*,"+rt+"*"),ct=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),dt=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),ft=new RegExp(st),pt=new RegExp("^"+ot+"$"),ht={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+at),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,xt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),Tt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(G=et.call(R.childNodes),R.childNodes),G[R.childNodes.length].nodeType}catch(Ct){Z={apply:G.length?function(e,t){K.apply(e,et.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},N=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:R,r=n.defaultView;return n!==H&&9===n.nodeType&&n.documentElement?(H=n,_=n.documentElement,q=!N(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){L()},!1):r.attachEvent&&r.attachEvent("onunload",function(){L()})),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=vt.test(n.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),w.getById=i(function(e){return _.appendChild(e).id=P,!n.getElementsByName||!n.getElementsByName(P).length}),w.getById?(T.find.ID=function(e,t){if(typeof t.getElementById!==V&&q){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==V?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==V&&q?t.getElementsByClassName(e):void 0},O=[],M=[],(w.qsa=vt.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>",e.querySelectorAll("[msallowclip^='']").length&&M.push("[*^$]="+rt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||M.push("\\["+rt+"*(?:value|"+nt+")"),e.querySelectorAll(":checked").length||M.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&M.push("name"+rt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||M.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),M.push(",.*:")})),(w.matchesSelector=vt.test(F=_.matches||_.webkitMatchesSelector||_.mozMatchesSelector||_.oMatchesSelector||_.msMatchesSelector))&&i(function(e){w.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),O.push("!=",st)}),M=M.length&&new RegExp(M.join("|")),O=O.length&&new RegExp(O.join("|")),t=vt.test(_.compareDocumentPosition),B=t||vt.test(_.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return j=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!w.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===R&&B(R,e)?-1:t===n||t.ownerDocument===R&&B(R,t)?1:D?tt.call(D,e)-tt.call(D,t):0:4&r?-1:1)}:function(e,t){if(e===t)return j=!0,0;var r,i=0,o=e.parentNode,s=t.parentNode,l=[e],u=[t];if(!o||!s)return e===n?-1:t===n?1:o?-1:s?1:D?tt.call(D,e)-tt.call(D,t):0;if(o===s)return a(e,t);for(r=e;r=r.parentNode;)l.unshift(r);for(r=t;r=r.parentNode;)u.unshift(r);for(;l[i]===u[i];)i++;return i?a(l[i],u[i]):l[i]===R?-1:u[i]===R?1:0},n):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==H&&L(e),n=n.replace(dt,"='$1']"),!(!w.matchesSelector||!q||O&&O.test(n)||M&&M.test(n)))try{var r=F.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==H&&L(e),B(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==H&&L(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!q):void 0;return void 0!==r?r:w.attributes||!q?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(j=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(U),j){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return D=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(wt,Tt),e[3]=(e[3]||e[4]||e[5]||"").replace(wt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ht.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ft.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(wt,Tt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,f,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(c=g[P]||(g[P]={}),u=c[e]||[],p=u[0]===W&&u[1],f=u[0]===W&&u[2],d=p&&g.childNodes[p];d=++p&&d&&d[m]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){c[e]=[W,p,f];break}}else if(y&&(u=(t[P]||(t[P]={}))[e])&&u[0]===W)f=u[1];else for(;(d=++p&&d&&d[m]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[P]||(d[P]={}))[e]=[W,f]),d!==t)););return f-=i,f===r||f%r===0&&f/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[P]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=tt.call(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=k(e.replace(lt,"$1"));return i[P]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return pt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(wt,Tt).toLowerCase(),function(t){var n;do if(n=q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===_},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return gt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=l(x);return d.prototype=T.filters=T.pseudos,T.setFilters=new d,E=t.tokenize=function(e,n){var r,i,o,a,s,l,u,c=I[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],u=T.preFilter;s;){(!r||(i=ut.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ct.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(lt," ")}),s=s.slice(r.length));for(a in T.filter)!(i=ht[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));
if(!r)break}return n?s.length:s?t.error(e):I(e,l).slice(0)},k=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=E(e)),n=t.length;n--;)o=y(t[n]),o[P]?r.push(o):i.push(o);o=X(e,b(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,a,s,l,u="function"==typeof e&&e,d=!r&&E(e=u.selector||e);if(n=n||[],1===d.length){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&q&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(wt,Tt),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=ht.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((l=T.find[s])&&(r=l(a.matches[0].replace(wt,Tt),bt.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&f(o),!e)return Z.apply(n,r),n;break}}return(u||k(e,d))(r,t,!q,n,bt.test(e)&&c(t.parentNode)||t),n},w.sortStable=P.split("").sort(U).join("")===P,w.detectDuplicates=!!j,L(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(H.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);it.find=ut,it.expr=ut.selectors,it.expr[":"]=it.expr.pseudos,it.unique=ut.uniqueSort,it.text=ut.getText,it.isXMLDoc=ut.isXML,it.contains=ut.contains;var ct=it.expr.match.needsContext,dt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ft=/^.[^:#\[\.,]*$/;it.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?it.find.matchesSelector(r,e)?[r]:[]:it.find.matches(e,it.grep(t,function(e){return 1===e.nodeType}))},it.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(it(e).filter(function(){for(t=0;i>t;t++)if(it.contains(r[t],this))return!0}));for(t=0;i>t;t++)it.find(e,r[t],n);return n=this.pushStack(i>1?it.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ct.test(e)?it(e):e||[],!1).length}});var pt,ht=e.document,mt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,gt=it.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:mt.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||pt).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof it?t[0]:t,it.merge(this,it.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:ht,!0)),dt.test(n[1])&&it.isPlainObject(t))for(n in t)it.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(r=ht.getElementById(n[2]),r&&r.parentNode){if(r.id!==n[2])return pt.find(e);this.length=1,this[0]=r}return this.context=ht,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):it.isFunction(e)?"undefined"!=typeof pt.ready?pt.ready(e):e(it):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),it.makeArray(e,this))};gt.prototype=it.fn,pt=it(ht);var vt=/^(?:parents|prev(?:Until|All))/,yt={children:!0,contents:!0,next:!0,prev:!0};it.extend({dir:function(e,t,n){for(var r=[],i=e[t];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!it(i).is(n));)1===i.nodeType&&r.push(i),i=i[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),it.fn.extend({has:function(e){var t,n=it(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(it.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=ct.test(e)||"string"!=typeof e?it(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&it.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?it.unique(o):o)},index:function(e){return e?"string"==typeof e?it.inArray(this[0],it(e)):it.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(it.unique(it.merge(this.get(),it(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),it.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return it.dir(e,"parentNode")},parentsUntil:function(e,t,n){return it.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return it.dir(e,"nextSibling")},prevAll:function(e){return it.dir(e,"previousSibling")},nextUntil:function(e,t,n){return it.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return it.dir(e,"previousSibling",n)},siblings:function(e){return it.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return it.sibling(e.firstChild)},contents:function(e){return it.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:it.merge([],e.childNodes)}},function(e,t){it.fn[e]=function(n,r){var i=it.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=it.filter(r,i)),this.length>1&&(yt[e]||(i=it.unique(i)),vt.test(e)&&(i=i.reverse())),this.pushStack(i)}});var bt=/\S+/g,xt={};it.Callbacks=function(e){e="string"==typeof e?xt[e]||o(e):it.extend({},e);var t,n,r,i,a,s,l=[],u=!e.once&&[],c=function(o){for(n=e.memory&&o,r=!0,a=s||0,s=0,i=l.length,t=!0;l&&i>a;a++)if(l[a].apply(o[0],o[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:d.disable())},d={add:function(){if(l){var r=l.length;!function o(t){it.each(t,function(t,n){var r=it.type(n);"function"===r?e.unique&&d.has(n)||l.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),t?i=l.length:n&&(s=r,c(n))}return this},remove:function(){return l&&it.each(arguments,function(e,n){for(var r;(r=it.inArray(n,l,r))>-1;)l.splice(r,1),t&&(i>=r&&i--,a>=r&&a--)}),this},has:function(e){return e?it.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],i=0,this},disable:function(){return l=u=n=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,n||d.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!l||r&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):c(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!r}};return d},it.extend({Deferred:function(e){var t=[["resolve","done",it.Callbacks("once memory"),"resolved"],["reject","fail",it.Callbacks("once memory"),"rejected"],["notify","progress",it.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return it.Deferred(function(n){it.each(t,function(t,o){var a=it.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&it.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?it.extend(e,r):r}},i={};return r.pipe=r.then,it.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Y.call(arguments),a=o.length,s=1!==a||e&&it.isFunction(e.promise)?a:0,l=1===s?e:it.Deferred(),u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Y.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&it.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,t)):--s;return s||l.resolveWith(r,o),l.promise()}});var wt;it.fn.ready=function(e){return it.ready.promise().done(e),this},it.extend({isReady:!1,readyWait:1,holdReady:function(e){e?it.readyWait++:it.ready(!0)},ready:function(e){if(e===!0?!--it.readyWait:!it.isReady){if(!ht.body)return setTimeout(it.ready);it.isReady=!0,e!==!0&&--it.readyWait>0||(wt.resolveWith(ht,[it]),it.fn.triggerHandler&&(it(ht).triggerHandler("ready"),it(ht).off("ready")))}}}),it.ready.promise=function(t){if(!wt)if(wt=it.Deferred(),"complete"===ht.readyState)setTimeout(it.ready);else if(ht.addEventListener)ht.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1);else{ht.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var n=!1;try{n=null==e.frameElement&&ht.documentElement}catch(r){}n&&n.doScroll&&!function i(){if(!it.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}a(),it.ready()}}()}return wt.promise(t)};var Tt,Ct="undefined";for(Tt in it(nt))break;nt.ownLast="0"!==Tt,nt.inlineBlockNeedsLayout=!1,it(function(){var e,t,n,r;n=ht.getElementsByTagName("body")[0],n&&n.style&&(t=ht.createElement("div"),r=ht.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==Ct&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",nt.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(r))}),function(){var e=ht.createElement("div");if(null==nt.deleteExpando){nt.deleteExpando=!0;try{delete e.test}catch(t){nt.deleteExpando=!1}}e=null}(),it.acceptData=function(e){var t=it.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return 1!==n&&9!==n?!1:!t||t!==!0&&e.getAttribute("classid")===t};var Nt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Et=/([A-Z])/g;it.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?it.cache[e[it.expando]]:e[it.expando],!!e&&!u(e)},data:function(e,t,n){return c(e,t,n)},removeData:function(e,t){return d(e,t)},_data:function(e,t,n){return c(e,t,n,!0)},_removeData:function(e,t){return d(e,t,!0)}}),it.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=it.data(o),1===o.nodeType&&!it._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=it.camelCase(r.slice(5)),l(o,r,i[r])));it._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){it.data(this,e)}):arguments.length>1?this.each(function(){it.data(this,e,t)}):o?l(o,e,it.data(o,e)):void 0},removeData:function(e){return this.each(function(){it.removeData(this,e)})}}),it.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=it._data(e,t),n&&(!r||it.isArray(n)?r=it._data(e,t,it.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=it.queue(e,t),r=n.length,i=n.shift(),o=it._queueHooks(e,t),a=function(){it.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return it._data(e,n)||it._data(e,n,{empty:it.Callbacks("once memory").add(function(){it._removeData(e,t+"queue"),it._removeData(e,n)})})}}),it.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?it.queue(this[0],e):void 0===t?this:this.each(function(){var n=it.queue(this,e,t);it._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&it.dequeue(this,e)})},dequeue:function(e){return this.each(function(){it.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=it.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=it._data(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var kt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,St=["Top","Right","Bottom","Left"],At=function(e,t){return e=t||e,"none"===it.css(e,"display")||!it.contains(e.ownerDocument,e)},Dt=it.access=function(e,t,n,r,i,o,a){var s=0,l=e.length,u=null==n;if("object"===it.type(n)){i=!0;for(s in n)it.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,it.isFunction(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(it(e),n)})),t))for(;l>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):l?t(e[0],n):o},jt=/^(?:checkbox|radio)$/i;!function(){var e=ht.createElement("input"),t=ht.createElement("div"),n=ht.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",nt.leadingWhitespace=3===t.firstChild.nodeType,nt.tbody=!t.getElementsByTagName("tbody").length,nt.htmlSerialize=!!t.getElementsByTagName("link").length,nt.html5Clone="<:nav></:nav>"!==ht.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),nt.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",nt.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",nt.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,nt.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){nt.noCloneEvent=!1}),t.cloneNode(!0).click()),null==nt.deleteExpando){nt.deleteExpando=!0;try{delete t.test}catch(r){nt.deleteExpando=!1}}}(),function(){var t,n,r=ht.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(nt[t+"Bubbles"]=n in e)||(r.setAttribute(n,"t"),nt[t+"Bubbles"]=r.attributes[n].expando===!1);r=null}();var Lt=/^(?:input|select|textarea)$/i,Ht=/^key/,_t=/^(?:mouse|pointer|contextmenu)|click/,qt=/^(?:focusinfocus|focusoutblur)$/,Mt=/^([^.]*)(?:\.(.+)|)$/;it.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,d,f,p,h,m,g=it._data(e);if(g){for(n.handler&&(l=n,n=l.handler,i=l.selector),n.guid||(n.guid=it.guid++),(a=g.events)||(a=g.events={}),(c=g.handle)||(c=g.handle=function(e){return typeof it===Ct||e&&it.event.triggered===e.type?void 0:it.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(bt)||[""],s=t.length;s--;)o=Mt.exec(t[s])||[],p=m=o[1],h=(o[2]||"").split(".").sort(),p&&(u=it.event.special[p]||{},p=(i?u.delegateType:u.bindType)||p,u=it.event.special[p]||{},d=it.extend({type:p,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&it.expr.match.needsContext.test(i),namespace:h.join(".")},l),(f=a[p])||(f=a[p]=[],f.delegateCount=0,u.setup&&u.setup.call(e,r,h,c)!==!1||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),u.add&&(u.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),i?f.splice(f.delegateCount++,0,d):f.push(d),it.event.global[p]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,d,f,p,h,m,g=it.hasData(e)&&it._data(e);if(g&&(c=g.events)){for(t=(t||"").match(bt)||[""],u=t.length;u--;)if(s=Mt.exec(t[u])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p){for(d=it.event.special[p]||{},p=(r?d.delegateType:d.bindType)||p,f=c[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;o--;)a=f[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,d.remove&&d.remove.call(e,a));l&&!f.length&&(d.teardown&&d.teardown.call(e,h,g.handle)!==!1||it.removeEvent(e,p,g.handle),delete c[p])}else for(p in c)it.event.remove(e,p+t[u],n,r,!0);it.isEmptyObject(c)&&(delete g.handle,it._removeData(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,l,u,c,d,f=[r||ht],p=tt.call(t,"type")?t.type:t,h=tt.call(t,"namespace")?t.namespace.split("."):[];if(s=c=r=r||ht,3!==r.nodeType&&8!==r.nodeType&&!qt.test(p+it.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),a=p.indexOf(":")<0&&"on"+p,t=t[it.expando]?t:new it.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:it.makeArray(n,[t]),u=it.event.special[p]||{},i||!u.trigger||u.trigger.apply(r,n)!==!1)){if(!i&&!u.noBubble&&!it.isWindow(r)){for(l=u.delegateType||p,qt.test(l+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),c=s;c===(r.ownerDocument||ht)&&f.push(c.defaultView||c.parentWindow||e)}for(d=0;(s=f[d++])&&!t.isPropagationStopped();)t.type=d>1?l:u.bindType||p,o=(it._data(s,"events")||{})[t.type]&&it._data(s,"handle"),o&&o.apply(s,n),o=a&&s[a],o&&o.apply&&it.acceptData(s)&&(t.result=o.apply(s,n),t.result===!1&&t.preventDefault());if(t.type=p,!i&&!t.isDefaultPrevented()&&(!u._default||u._default.apply(f.pop(),n)===!1)&&it.acceptData(r)&&a&&r[p]&&!it.isWindow(r)){c=r[a],c&&(r[a]=null),it.event.triggered=p;try{r[p]()}catch(m){}it.event.triggered=void 0,c&&(r[a]=c)}return t.result}},dispatch:function(e){e=it.event.fix(e);var t,n,r,i,o,a=[],s=Y.call(arguments),l=(it._data(this,"events")||{})[e.type]||[],u=it.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(a=it.event.handlers.call(this,e,l),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,o=0;(r=i.handlers[o++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,n=((it.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(i=[],o=0;s>o;o++)r=t[o],n=r.selector+" ",void 0===i[n]&&(i[n]=r.needsContext?it(n,this).index(l)>=0:it.find(n,this,null,[l]).length),i[n]&&i.push(r);i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[it.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=_t.test(i)?this.mouseHooks:Ht.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new it.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||ht),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||ht,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return it.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return it.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=it.extend(new it.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?it.event.trigger(i,null,t):it.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},it.removeEvent=ht.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===Ct&&(e[r]=null),e.detachEvent(r,n))},it.Event=function(e,t){return this instanceof it.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?f:p):this.type=e,t&&it.extend(this,t),this.timeStamp=e&&e.timeStamp||it.now(),void(this[it.expando]=!0)):new it.Event(e,t)},it.Event.prototype={isDefaultPrevented:p,isPropagationStopped:p,isImmediatePropagationStopped:p,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=f,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=f,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=f,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},it.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){it.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!it.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),nt.submitBubbles||(it.event.special.submit={setup:function(){return it.nodeName(this,"form")?!1:void it.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=it.nodeName(t,"input")||it.nodeName(t,"button")?t.form:void 0;n&&!it._data(n,"submitBubbles")&&(it.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),it._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&it.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return it.nodeName(this,"form")?!1:void it.event.remove(this,"._submit")}}),nt.changeBubbles||(it.event.special.change={setup:function(){return Lt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(it.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),it.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),it.event.simulate("change",this,e,!0)})),!1):void it.event.add(this,"beforeactivate._change",function(e){var t=e.target;Lt.test(t.nodeName)&&!it._data(t,"changeBubbles")&&(it.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||it.event.simulate("change",this.parentNode,e,!0)}),it._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return it.event.remove(this,"._change"),!Lt.test(this.nodeName)}}),nt.focusinBubbles||it.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){it.event.simulate(t,e.target,it.event.fix(e),!0)};it.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=it._data(r,t);i||r.addEventListener(e,n,!0),it._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=it._data(r,t)-1;i?it._data(r,t,i):(r.removeEventListener(e,n,!0),it._removeData(r,t))}}}),it.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(o in e)this.on(o,t,n,e[o],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=p;else if(!r)return this;return 1===i&&(a=r,r=function(e){return it().off(e),a.apply(this,arguments)},r.guid=a.guid||(a.guid=it.guid++)),this.each(function(){it.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,it(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=p),this.each(function(){it.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){it.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?it.event.trigger(e,t,n,!0):void 0}});var Ot="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ft=/ jQuery\d+="(?:null|\d+)"/g,Bt=new RegExp("<(?:"+Ot+")[\\s/>]","i"),Pt=/^\s+/,Rt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Wt=/<([\w:]+)/,$t=/<tbody/i,zt=/<|&#?\w+;/,It=/<(?:script|style|link)/i,Xt=/checked\s*(?:[^=]|=\s*.checked.)/i,Ut=/^$|\/(?:java|ecma)script/i,Vt=/^true\/(.*)/,Jt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Yt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:nt.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Gt=m(ht),Qt=Gt.appendChild(ht.createElement("div"));Yt.optgroup=Yt.option,Yt.tbody=Yt.tfoot=Yt.colgroup=Yt.caption=Yt.thead,Yt.th=Yt.td,it.extend({clone:function(e,t,n){var r,i,o,a,s,l=it.contains(e.ownerDocument,e);if(nt.html5Clone||it.isXMLDoc(e)||!Bt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Qt.innerHTML=e.outerHTML,Qt.removeChild(o=Qt.firstChild)),!(nt.noCloneEvent&&nt.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||it.isXMLDoc(e)))for(r=g(o),s=g(e),a=0;null!=(i=s[a]);++a)r[a]&&C(i,r[a]);if(t)if(n)for(s=s||g(e),r=r||g(o),a=0;null!=(i=s[a]);a++)T(i,r[a]);else T(e,o);return r=g(o,"script"),r.length>0&&w(r,!l&&g(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,c,d=e.length,f=m(t),p=[],h=0;d>h;h++)if(o=e[h],o||0===o)if("object"===it.type(o))it.merge(p,o.nodeType?[o]:o);else if(zt.test(o)){for(s=s||f.appendChild(t.createElement("div")),l=(Wt.exec(o)||["",""])[1].toLowerCase(),c=Yt[l]||Yt._default,s.innerHTML=c[1]+o.replace(Rt,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!nt.leadingWhitespace&&Pt.test(o)&&p.push(t.createTextNode(Pt.exec(o)[0])),!nt.tbody)for(o="table"!==l||$t.test(o)?"<table>"!==c[1]||$t.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)it.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(it.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(o));for(s&&f.removeChild(s),nt.appendChecked||it.grep(g(p,"input"),v),h=0;o=p[h++];)if((!r||-1===it.inArray(o,r))&&(a=it.contains(o.ownerDocument,o),s=g(f.appendChild(o),"script"),a&&w(s),n))for(i=0;o=s[i++];)Ut.test(o.type||"")&&n.push(o);return s=null,f},cleanData:function(e,t){for(var n,r,i,o,a=0,s=it.expando,l=it.cache,u=nt.deleteExpando,c=it.event.special;null!=(n=e[a]);a++)if((t||it.acceptData(n))&&(i=n[s],o=i&&l[i])){if(o.events)for(r in o.events)c[r]?it.event.remove(n,r):it.removeEvent(n,r,o.handle);l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==Ct?n.removeAttribute(s):n[s]=null,J.push(i))}}}),it.fn.extend({text:function(e){return Dt(this,function(e){return void 0===e?it.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ht).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?it.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||it.cleanData(g(n)),n.parentNode&&(t&&it.contains(n.ownerDocument,n)&&w(g(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&it.cleanData(g(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&it.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return it.clone(this,e,t)})},html:function(e){return Dt(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(Ft,""):void 0;if(!("string"!=typeof e||It.test(e)||!nt.htmlSerialize&&Bt.test(e)||!nt.leadingWhitespace&&Pt.test(e)||Yt[(Wt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Rt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(it.cleanData(g(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,it.cleanData(g(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=G.apply([],e);var n,r,i,o,a,s,l=0,u=this.length,c=this,d=u-1,f=e[0],p=it.isFunction(f);if(p||u>1&&"string"==typeof f&&!nt.checkClone&&Xt.test(f))return this.each(function(n){var r=c.eq(n);p&&(e[0]=f.call(this,n,r.html())),r.domManip(e,t)});if(u&&(s=it.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(o=it.map(g(s,"script"),b),i=o.length;u>l;l++)r=s,l!==d&&(r=it.clone(r,!0,!0),i&&it.merge(o,g(r,"script"))),t.call(this[l],r,l);if(i)for(a=o[o.length-1].ownerDocument,it.map(o,x),l=0;i>l;l++)r=o[l],Ut.test(r.type||"")&&!it._data(r,"globalEval")&&it.contains(a,r)&&(r.src?it._evalUrl&&it._evalUrl(r.src):it.globalEval((r.text||r.textContent||r.innerHTML||"").replace(Jt,"")));s=n=null}return this}}),it.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){it.fn[e]=function(e){for(var n,r=0,i=[],o=it(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),it(o[r])[t](n),Q.apply(i,n.get());return this.pushStack(i)}});var Kt,Zt={};!function(){var e;nt.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,r;return n=ht.getElementsByTagName("body")[0],n&&n.style?(t=ht.createElement("div"),r=ht.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==Ct&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(ht.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0}}();var en,tn,nn=/^margin/,rn=new RegExp("^("+kt+")(?!px)[a-z%]+$","i"),on=/^(top|right|bottom|left)$/;e.getComputedStyle?(en=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)},tn=function(e,t,n){var r,i,o,a,s=e.style;return n=n||en(e),a=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||it.contains(e.ownerDocument,e)||(a=it.style(e,t)),rn.test(a)&&nn.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""}):ht.documentElement.currentStyle&&(en=function(e){return e.currentStyle
},tn=function(e,t,n){var r,i,o,a,s=e.style;return n=n||en(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),rn.test(a)&&!on.test(t)&&(r=s.left,i=e.runtimeStyle,o=i&&i.left,o&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"}),function(){function t(){var t,n,r,i;n=ht.getElementsByTagName("body")[0],n&&n.style&&(t=ht.createElement("div"),r=ht.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",o=a=!1,l=!0,e.getComputedStyle&&(o="1%"!==(e.getComputedStyle(t,null)||{}).top,a="4px"===(e.getComputedStyle(t,null)||{width:"4px"}).width,i=t.appendChild(ht.createElement("div")),i.style.cssText=t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",t.style.width="1px",l=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight)),t.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=t.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===i[0].offsetHeight,s&&(i[0].style.display="",i[1].style.display="none",s=0===i[0].offsetHeight),n.removeChild(r))}var n,r,i,o,a,s,l;n=ht.createElement("div"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=n.getElementsByTagName("a")[0],r=i&&i.style,r&&(r.cssText="float:left;opacity:.5",nt.opacity="0.5"===r.opacity,nt.cssFloat=!!r.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",nt.clearCloneStyle="content-box"===n.style.backgroundClip,nt.boxSizing=""===r.boxSizing||""===r.MozBoxSizing||""===r.WebkitBoxSizing,it.extend(nt,{reliableHiddenOffsets:function(){return null==s&&t(),s},boxSizingReliable:function(){return null==a&&t(),a},pixelPosition:function(){return null==o&&t(),o},reliableMarginRight:function(){return null==l&&t(),l}}))}(),it.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};var an=/alpha\([^)]*\)/i,sn=/opacity\s*=\s*([^)]*)/,ln=/^(none|table(?!-c[ea]).+)/,un=new RegExp("^("+kt+")(.*)$","i"),cn=new RegExp("^([+-])=("+kt+")","i"),dn={position:"absolute",visibility:"hidden",display:"block"},fn={letterSpacing:"0",fontWeight:"400"},pn=["Webkit","O","Moz","ms"];it.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=tn(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":nt.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=it.camelCase(t),l=e.style;if(t=it.cssProps[s]||(it.cssProps[s]=S(l,s)),a=it.cssHooks[t]||it.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];if(o=typeof n,"string"===o&&(i=cn.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(it.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||it.cssNumber[s]||(n+="px"),nt.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{l[t]=n}catch(u){}}},css:function(e,t,n,r){var i,o,a,s=it.camelCase(t);return t=it.cssProps[s]||(it.cssProps[s]=S(e.style,s)),a=it.cssHooks[t]||it.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=tn(e,t,r)),"normal"===o&&t in fn&&(o=fn[t]),""===n||n?(i=parseFloat(o),n===!0||it.isNumeric(i)?i||0:o):o}}),it.each(["height","width"],function(e,t){it.cssHooks[t]={get:function(e,n,r){return n?ln.test(it.css(e,"display"))&&0===e.offsetWidth?it.swap(e,dn,function(){return L(e,t,r)}):L(e,t,r):void 0},set:function(e,n,r){var i=r&&en(e);return D(e,n,r?j(e,t,r,nt.boxSizing&&"border-box"===it.css(e,"boxSizing",!1,i),i):0)}}}),nt.opacity||(it.cssHooks.opacity={get:function(e,t){return sn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=it.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===it.trim(o.replace(an,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=an.test(o)?o.replace(an,i):o+" "+i)}}),it.cssHooks.marginRight=k(nt.reliableMarginRight,function(e,t){return t?it.swap(e,{display:"inline-block"},tn,[e,"marginRight"]):void 0}),it.each({margin:"",padding:"",border:"Width"},function(e,t){it.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+St[r]+t]=o[r]||o[r-2]||o[0];return i}},nn.test(e)||(it.cssHooks[e+t].set=D)}),it.fn.extend({css:function(e,t){return Dt(this,function(e,t,n){var r,i,o={},a=0;if(it.isArray(t)){for(r=en(e),i=t.length;i>a;a++)o[t[a]]=it.css(e,t[a],!1,r);return o}return void 0!==n?it.style(e,t,n):it.css(e,t)},e,t,arguments.length>1)},show:function(){return A(this,!0)},hide:function(){return A(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){At(this)?it(this).show():it(this).hide()})}}),it.Tween=H,H.prototype={constructor:H,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(it.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.pos=t=this.options.duration?it.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=it.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){it.fx.step[e.prop]?it.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[it.cssProps[e.prop]]||it.cssHooks[e.prop])?it.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},it.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},it.fx=H.prototype.init,it.fx.step={};var hn,mn,gn=/^(?:toggle|show|hide)$/,vn=new RegExp("^(?:([+-])=|)("+kt+")([a-z%]*)$","i"),yn=/queueHooks$/,bn=[O],xn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=vn.exec(t),o=i&&i[3]||(it.cssNumber[e]?"":"px"),a=(it.cssNumber[e]||"px"!==o&&+r)&&vn.exec(it.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,it.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};it.Animation=it.extend(B,{tweener:function(e,t){it.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],xn[n]=xn[n]||[],xn[n].unshift(t)},prefilter:function(e,t){t?bn.unshift(e):bn.push(e)}}),it.speed=function(e,t,n){var r=e&&"object"==typeof e?it.extend({},e):{complete:n||!n&&t||it.isFunction(e)&&e,duration:e,easing:n&&t||t&&!it.isFunction(t)&&t};return r.duration=it.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in it.fx.speeds?it.fx.speeds[r.duration]:it.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){it.isFunction(r.old)&&r.old.call(this),r.queue&&it.dequeue(this,r.queue)},r},it.fn.extend({fadeTo:function(e,t,n,r){return this.filter(At).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=it.isEmptyObject(e),o=it.speed(t,n,r),a=function(){var t=B(this,it.extend({},e),o);(i||it._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=it.timers,a=it._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&yn.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&it.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=it._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=it.timers,a=r?r.length:0;for(n.finish=!0,it.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),it.each(["toggle","show","hide"],function(e,t){var n=it.fn[t];it.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(q(t,!0),e,r,i)}}),it.each({slideDown:q("show"),slideUp:q("hide"),slideToggle:q("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){it.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),it.timers=[],it.fx.tick=function(){var e,t=it.timers,n=0;for(hn=it.now();n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||it.fx.stop(),hn=void 0},it.fx.timer=function(e){it.timers.push(e),e()?it.fx.start():it.timers.pop()},it.fx.interval=13,it.fx.start=function(){mn||(mn=setInterval(it.fx.tick,it.fx.interval))},it.fx.stop=function(){clearInterval(mn),mn=null},it.fx.speeds={slow:600,fast:200,_default:400},it.fn.delay=function(e,t){return e=it.fx?it.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e,t,n,r,i;t=ht.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],n=ht.createElement("select"),i=n.appendChild(ht.createElement("option")),e=t.getElementsByTagName("input")[0],r.style.cssText="top:1px",nt.getSetAttribute="t"!==t.className,nt.style=/top/.test(r.getAttribute("style")),nt.hrefNormalized="/a"===r.getAttribute("href"),nt.checkOn=!!e.value,nt.optSelected=i.selected,nt.enctype=!!ht.createElement("form").enctype,n.disabled=!0,nt.optDisabled=!i.disabled,e=ht.createElement("input"),e.setAttribute("value",""),nt.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),nt.radioValue="t"===e.value}();var wn=/\r/g;it.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=it.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,it(this).val()):e,null==i?i="":"number"==typeof i?i+="":it.isArray(i)&&(i=it.map(i,function(e){return null==e?"":e+""})),t=it.valHooks[this.type]||it.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=it.valHooks[i.type]||it.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(wn,""):null==n?"":n)}}}),it.extend({valHooks:{option:{get:function(e){var t=it.find.attr(e,"value");return null!=t?t:it.trim(it.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(nt.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&it.nodeName(n.parentNode,"optgroup"))){if(t=it(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=it.makeArray(t),a=i.length;a--;)if(r=i[a],it.inArray(it.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(s){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),it.each(["radio","checkbox"],function(){it.valHooks[this]={set:function(e,t){return it.isArray(t)?e.checked=it.inArray(it(e).val(),t)>=0:void 0}},nt.checkOn||(it.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Tn,Cn,Nn=it.expr.attrHandle,En=/^(?:checked|selected)$/i,kn=nt.getSetAttribute,Sn=nt.input;it.fn.extend({attr:function(e,t){return Dt(this,it.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){it.removeAttr(this,e)})}}),it.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===Ct?it.prop(e,t,n):(1===o&&it.isXMLDoc(e)||(t=t.toLowerCase(),r=it.attrHooks[t]||(it.expr.match.bool.test(t)?Cn:Tn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=it.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void it.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(bt);if(o&&1===e.nodeType)for(;n=o[i++];)r=it.propFix[n]||n,it.expr.match.bool.test(n)?Sn&&kn||!En.test(n)?e[r]=!1:e[it.camelCase("default-"+n)]=e[r]=!1:it.attr(e,n,""),e.removeAttribute(kn?n:r)},attrHooks:{type:{set:function(e,t){if(!nt.radioValue&&"radio"===t&&it.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Cn={set:function(e,t,n){return t===!1?it.removeAttr(e,n):Sn&&kn||!En.test(n)?e.setAttribute(!kn&&it.propFix[n]||n,n):e[it.camelCase("default-"+n)]=e[n]=!0,n}},it.each(it.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Nn[t]||it.find.attr;Nn[t]=Sn&&kn||!En.test(t)?function(e,t,r){var i,o;return r||(o=Nn[t],Nn[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Nn[t]=o),i}:function(e,t,n){return n?void 0:e[it.camelCase("default-"+t)]?t.toLowerCase():null}}),Sn&&kn||(it.attrHooks.value={set:function(e,t,n){return it.nodeName(e,"input")?void(e.defaultValue=t):Tn&&Tn.set(e,t,n)}}),kn||(Tn={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:void 0}},Nn.id=Nn.name=Nn.coords=function(e,t,n){var r;return n?void 0:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},it.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:void 0},set:Tn.set},it.attrHooks.contenteditable={set:function(e,t,n){Tn.set(e,""===t?!1:t,n)}},it.each(["width","height"],function(e,t){it.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}}})),nt.style||(it.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var An=/^(?:input|select|textarea|button|object)$/i,Dn=/^(?:a|area)$/i;it.fn.extend({prop:function(e,t){return Dt(this,it.prop,e,t,arguments.length>1)},removeProp:function(e){return e=it.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(t){}})}}),it.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!it.isXMLDoc(e),o&&(t=it.propFix[t]||t,i=it.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=it.find.attr(e,"tabindex");return t?parseInt(t,10):An.test(e.nodeName)||Dn.test(e.nodeName)&&e.href?0:-1}}}}),nt.hrefNormalized||it.each(["href","src"],function(e,t){it.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),nt.optSelected||(it.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),it.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){it.propFix[this.toLowerCase()]=this}),nt.enctype||(it.propFix.enctype="encoding");var jn=/[\t\r\n\f]/g;it.fn.extend({addClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u="string"==typeof e&&e;if(it.isFunction(e))return this.each(function(t){it(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(bt)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(jn," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=it.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof e&&e;if(it.isFunction(e))return this.each(function(t){it(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(bt)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(jn," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?it.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(it.isFunction(e)?function(n){it(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=it(this),o=e.match(bt)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===Ct||"boolean"===n)&&(this.className&&it._data(this,"__className__",this.className),this.className=this.className||e===!1?"":it._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(jn," ").indexOf(t)>=0)return!0;return!1}}),it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){it.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),it.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Ln=it.now(),Hn=/\?/,_n=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;it.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=it.trim(t+"");return i&&!it.trim(i.replace(_n,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():it.error("Invalid JSON: "+t)},it.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(r=new DOMParser,n=r.parseFromString(t,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(i){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||it.error("Invalid XML: "+t),n};var qn,Mn,On=/#.*$/,Fn=/([?&])_=[^&]*/,Bn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Pn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Rn=/^(?:GET|HEAD)$/,Wn=/^\/\//,$n=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,zn={},In={},Xn="*/".concat("*");try{Mn=location.href}catch(Un){Mn=ht.createElement("a"),Mn.href="",Mn=Mn.href}qn=$n.exec(Mn.toLowerCase())||[],it.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Mn,type:"GET",isLocal:Pn.test(qn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Xn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":it.parseJSON,"text xml":it.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?W(W(e,it.ajaxSettings),t):W(it.ajaxSettings,e)},ajaxPrefilter:P(zn),ajaxTransport:P(In),ajax:function(e,t){function n(e,t,n,r){var i,c,v,y,x,T=t;2!==b&&(b=2,s&&clearTimeout(s),u=void 0,a=r||"",w.readyState=e>0?4:0,i=e>=200&&300>e||304===e,n&&(y=$(d,w,n)),y=z(d,y,w,i),i?(d.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(it.lastModified[o]=x),x=w.getResponseHeader("etag"),x&&(it.etag[o]=x)),204===e||"HEAD"===d.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,v=y.error,i=!v)):(v=T,(e||!T)&&(T="error",0>e&&(e=0))),w.status=e,w.statusText=(t||T)+"",i?h.resolveWith(f,[c,T,w]):h.rejectWith(f,[w,T,v]),w.statusCode(g),g=void 0,l&&p.trigger(i?"ajaxSuccess":"ajaxError",[w,d,i?c:v]),m.fireWith(f,[w,T]),l&&(p.trigger("ajaxComplete",[w,d]),--it.active||it.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,a,s,l,u,c,d=it.ajaxSetup({},t),f=d.context||d,p=d.context&&(f.nodeType||f.jquery)?it(f):it.event,h=it.Deferred(),m=it.Callbacks("once memory"),g=d.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=Bn.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return u&&u.abort(t),n(0,t),this}};if(h.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,d.url=((e||d.url||Mn)+"").replace(On,"").replace(Wn,qn[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=it.trim(d.dataType||"*").toLowerCase().match(bt)||[""],null==d.crossDomain&&(r=$n.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]===qn[1]&&r[2]===qn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(qn[3]||("http:"===qn[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=it.param(d.data,d.traditional)),R(zn,d,t,w),2===b)return w;l=d.global,l&&0===it.active++&&it.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Rn.test(d.type),o=d.url,d.hasContent||(d.data&&(o=d.url+=(Hn.test(o)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=Fn.test(o)?o.replace(Fn,"$1_="+Ln++):o+(Hn.test(o)?"&":"?")+"_="+Ln++)),d.ifModified&&(it.lastModified[o]&&w.setRequestHeader("If-Modified-Since",it.lastModified[o]),it.etag[o]&&w.setRequestHeader("If-None-Match",it.etag[o])),(d.data&&d.hasContent&&d.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",d.contentType),w.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Xn+"; q=0.01":""):d.accepts["*"]);for(i in d.headers)w.setRequestHeader(i,d.headers[i]);if(d.beforeSend&&(d.beforeSend.call(f,w,d)===!1||2===b))return w.abort();x="abort";for(i in{success:1,error:1,complete:1})w[i](d[i]);if(u=R(In,d,t,w)){w.readyState=1,l&&p.trigger("ajaxSend",[w,d]),d.async&&d.timeout>0&&(s=setTimeout(function(){w.abort("timeout")},d.timeout));try{b=1,u.send(v,n)}catch(T){if(!(2>b))throw T;n(-1,T)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return it.get(e,t,n,"json")},getScript:function(e,t){return it.get(e,void 0,t,"script")}}),it.each(["get","post"],function(e,t){it[t]=function(e,n,r,i){return it.isFunction(n)&&(i=i||r,r=n,n=void 0),it.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),it.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){it.fn[t]=function(e){return this.on(t,e)}}),it._evalUrl=function(e){return it.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},it.fn.extend({wrapAll:function(e){if(it.isFunction(e))return this.each(function(t){it(this).wrapAll(e.call(this,t))});if(this[0]){var t=it(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(it.isFunction(e)?function(t){it(this).wrapInner(e.call(this,t))}:function(){var t=it(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=it.isFunction(e);return this.each(function(n){it(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){it.nodeName(this,"body")||it(this).replaceWith(this.childNodes)}).end()}}),it.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!nt.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||it.css(e,"display"))},it.expr.filters.visible=function(e){return!it.expr.filters.hidden(e)};var Vn=/%20/g,Jn=/\[\]$/,Yn=/\r?\n/g,Gn=/^(?:submit|button|image|reset|file)$/i,Qn=/^(?:input|select|textarea|keygen)/i;it.param=function(e,t){var n,r=[],i=function(e,t){t=it.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=it.ajaxSettings&&it.ajaxSettings.traditional),it.isArray(e)||e.jquery&&!it.isPlainObject(e))it.each(e,function(){i(this.name,this.value)});else for(n in e)I(n,e[n],t,i);return r.join("&").replace(Vn,"+")},it.fn.extend({serialize:function(){return it.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=it.prop(this,"elements");return e?it.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!it(this).is(":disabled")&&Qn.test(this.nodeName)&&!Gn.test(e)&&(this.checked||!jt.test(e))}).map(function(e,t){var n=it(this).val();return null==n?null:it.isArray(n)?it.map(n,function(e){return{name:t.name,value:e.replace(Yn,"\r\n")}}):{name:t.name,value:n.replace(Yn,"\r\n")}}).get()}}),it.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&X()||U()}:X;var Kn=0,Zn={},er=it.ajaxSettings.xhr();e.ActiveXObject&&it(e).on("unload",function(){for(var e in Zn)Zn[e](void 0,!0)}),nt.cors=!!er&&"withCredentials"in er,er=nt.ajax=!!er,er&&it.ajaxTransport(function(e){if(!e.crossDomain||nt.cors){var t;return{send:function(n,r){var i,o=e.xhr(),a=++Kn;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)void 0!==n[i]&&o.setRequestHeader(i,n[i]+"");o.send(e.hasContent&&e.data||null),t=function(n,i){var s,l,u;if(t&&(i||4===o.readyState))if(delete Zn[a],t=void 0,o.onreadystatechange=it.noop,i)4!==o.readyState&&o.abort();else{u={},s=o.status,"string"==typeof o.responseText&&(u.text=o.responseText);try{l=o.statusText}catch(c){l=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&r(s,l,u,o.getAllResponseHeaders())},e.async?4===o.readyState?setTimeout(t):o.onreadystatechange=Zn[a]=t:t()},abort:function(){t&&t(void 0,!0)}}}}),it.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return it.globalEval(e),e}}}),it.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),it.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=ht.head||it("head")[0]||ht.documentElement;return{send:function(r,i){t=ht.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var tr=[],nr=/(=)\?(?=&|$)|\?\?/;it.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tr.pop()||it.expando+"_"+Ln++;return this[e]=!0,e}}),it.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(nr.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&nr.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=it.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(nr,"$1"+i):t.jsonp!==!1&&(t.url+=(Hn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||it.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,tr.push(i)),a&&it.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),it.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ht;var r=dt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=it.buildFragment([e],t,i),i&&i.length&&it(i).remove(),it.merge([],r.childNodes))};var rr=it.fn.load;it.fn.load=function(e,t,n){if("string"!=typeof e&&rr)return rr.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=it.trim(e.slice(s,e.length)),e=e.slice(0,s)),it.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&it.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){i=arguments,a.html(r?it("<div>").append(it.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,i||[e.responseText,t,e])}),this},it.expr.filters.animated=function(e){return it.grep(it.timers,function(t){return e===t.elem}).length};var ir=e.document.documentElement;it.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u,c=it.css(e,"position"),d=it(e),f={};"static"===c&&(e.style.position="relative"),s=d.offset(),o=it.css(e,"top"),l=it.css(e,"left"),u=("absolute"===c||"fixed"===c)&&it.inArray("auto",[o,l])>-1,u?(r=d.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),it.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):d.css(f)}},it.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){it.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;if(o)return t=o.documentElement,it.contains(t,i)?(typeof i.getBoundingClientRect!==Ct&&(r=i.getBoundingClientRect()),n=V(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===it.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),it.nodeName(e[0],"html")||(n=e.offset()),n.top+=it.css(e[0],"borderTopWidth",!0),n.left+=it.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-it.css(r,"marginTop",!0),left:t.left-n.left-it.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||ir;e&&!it.nodeName(e,"html")&&"static"===it.css(e,"position");)e=e.offsetParent;return e||ir})}}),it.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);it.fn[e]=function(r){return Dt(this,function(e,r,i){var o=V(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:void(o?o.scrollTo(n?it(o).scrollLeft():i,n?i:it(o).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),it.each(["top","left"],function(e,t){it.cssHooks[t]=k(nt.pixelPosition,function(e,n){return n?(n=tn(e,t),rn.test(n)?it(e).position()[t]+"px":n):void 0})}),it.each({Height:"height",Width:"width"},function(e,t){it.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){it.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return Dt(this,function(t,n,r){var i;return it.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?it.css(t,n,a):it.style(t,n,r,a)
},t,o?r:void 0,o,null)}})}),it.fn.size=function(){return this.length},it.fn.andSelf=it.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return it});var or=e.jQuery,ar=e.$;return it.noConflict=function(t){return e.$===it&&(e.$=ar),t&&e.jQuery===it&&(e.jQuery=or),it},typeof t===Ct&&(e.jQuery=e.$=it),it});
},{}],"lodash":[function(require,module,exports){
(function (global){
(function(){function n(n,r,t){for(var e=(t||0)-1,u=n?n.length:0;++e<u;)if(n[e]===r)return e;return-1}function r(r,t){var e=typeof t;if(r=r.cache,"boolean"==e||null==t)return r[t]?0:-1;"number"!=e&&"string"!=e&&(e="object");var u="number"==e?t:m+t;return r=(r=r[e])&&r[u],"object"==e?r&&n(r,t)>-1?0:-1:r?0:-1}function t(n){var r=this.cache,t=typeof n;if("boolean"==t||null==n)r[n]=!0;else{"number"!=t&&"string"!=t&&(t="object");var e="number"==t?n:m+n,u=r[t]||(r[t]={});"object"==t?(u[e]||(u[e]=[])).push(n):u[e]=!0}}function e(n){return n.charCodeAt(0)}function u(n,r){for(var t=n.criteria,e=r.criteria,u=-1,o=t.length;++u<o;){var a=t[u],i=e[u];if(a!==i){if(a>i||"undefined"==typeof a)return 1;if(i>a||"undefined"==typeof i)return-1}}return n.index-r.index}function o(n){var r=-1,e=n.length,u=n[0],o=n[e/2|0],a=n[e-1];if(u&&"object"==typeof u&&o&&"object"==typeof o&&a&&"object"==typeof a)return!1;var i=f();i["false"]=i["null"]=i["true"]=i.undefined=!1;var l=f();for(l.array=n,l.cache=i,l.push=t;++r<e;)l.push(n[r]);return l}function a(n){return"\\"+G[n]}function i(){return h.pop()||[]}function f(){return g.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}function l(n){n.length=0,h.length<d&&h.push(n)}function c(n){var r=n.cache;r&&c(r),n.array=n.cache=n.criteria=n.object=n.number=n.string=n.value=null,g.length<d&&g.push(n)}function p(n,r,t){r||(r=0),"undefined"==typeof t&&(t=n?n.length:0);for(var e=-1,u=t-r||0,o=Array(0>u?0:u);++e<u;)o[e]=n[r+e];return o}function s(t){function h(n){return n&&"object"==typeof n&&!Xe(n)&&De.call(n,"__wrapped__")?n:new g(n)}function g(n,r){this.__chain__=!!r,this.__wrapped__=n}function d(n){function r(){if(e){var n=p(e);Te.apply(n,arguments)}if(this instanceof r){var o=J(t.prototype),a=t.apply(o,n||arguments);return Ir(a)?a:o}return t.apply(u,n||arguments)}var t=n[0],e=n[2],u=n[4];return Qe(r,n),r}function G(n,r,t,e,u){if(t){var o=t(n);if("undefined"!=typeof o)return o}var a=Ir(n);if(!a)return n;var f=Oe.call(n);if(!K[f])return n;var c=He[f];switch(f){case F:case B:return new c(+n);case q:case P:return new c(n);case L:return o=c(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o}var s=Xe(n);if(r){var v=!e;e||(e=i()),u||(u=i());for(var h=e.length;h--;)if(e[h]==n)return u[h];o=s?c(n.length):{}}else o=s?p(n):uu({},n);return s&&(De.call(n,"index")&&(o.index=n.index),De.call(n,"input")&&(o.input=n.input)),r?(e.push(n),u.push(o),(s?Qr:iu)(n,function(n,a){o[a]=G(n,r,t,e,u)}),v&&(l(e),l(u)),o):o}function J(n){return Ir(n)?qe(n):{}}function Q(n,r,t){if("function"!=typeof n)return Xt;if("undefined"==typeof r||!("prototype"in n))return n;var e=n.__bindData__;if("undefined"==typeof e&&(Je.funcNames&&(e=!n.name),e=e||!Je.funcDecomp,!e)){var u=Se.call(n);Je.funcNames||(e=!O.test(u)),e||(e=I.test(u),Qe(n,e))}if(e===!1||e!==!0&&1&e[1])return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return Tt(n,r)}function X(n){function r(){var n=f?a:this;if(u){var h=p(u);Te.apply(h,arguments)}if((o||c)&&(h||(h=p(arguments)),o&&Te.apply(h,o),c&&h.length<i))return e|=16,X([t,s?e:-4&e,h,null,a,i]);if(h||(h=arguments),l&&(t=n[v]),this instanceof r){n=J(t.prototype);var g=t.apply(n,h);return Ir(g)?g:n}return t.apply(n,h)}var t=n[0],e=n[1],u=n[2],o=n[3],a=n[4],i=n[5],f=1&e,l=2&e,c=4&e,s=8&e,v=t;return Qe(r,n),r}function Y(t,e){var u=-1,a=fr(),i=t?t.length:0,f=i>=b&&a===n,l=[];if(f){var p=o(e);p?(a=r,e=p):f=!1}for(;++u<i;){var s=t[u];a(e,s)<0&&l.push(s)}return f&&c(e),l}function nr(n,r,t,e){for(var u=(e||0)-1,o=n?n.length:0,a=[];++u<o;){var i=n[u];if(i&&"object"==typeof i&&"number"==typeof i.length&&(Xe(i)||sr(i))){r||(i=nr(i,r,t));var f=-1,l=i.length,c=a.length;for(a.length+=l;++f<l;)a[c++]=i[f]}else t||a.push(i)}return a}function rr(n,r,t,e,u,o){if(t){var a=t(n,r);if("undefined"!=typeof a)return!!a}if(n===r)return 0!==n||1/n==1/r;var f=typeof n,c=typeof r;if(!(n!==n||n&&V[f]||r&&V[c]))return!1;if(null==n||null==r)return n===r;var p=Oe.call(n),s=Oe.call(r);if(p==T&&(p=z),s==T&&(s=z),p!=s)return!1;switch(p){case F:case B:return+n==+r;case q:return n!=+n?r!=+r:0==n?1/n==1/r:n==+r;case L:case P:return n==we(r)}var v=p==$;if(!v){var h=De.call(n,"__wrapped__"),g=De.call(r,"__wrapped__");if(h||g)return rr(h?n.__wrapped__:n,g?r.__wrapped__:r,t,e,u,o);if(p!=z)return!1;var y=n.constructor,m=r.constructor;if(y!=m&&!(Er(y)&&y instanceof y&&Er(m)&&m instanceof m)&&"constructor"in n&&"constructor"in r)return!1}var b=!u;u||(u=i()),o||(o=i());for(var d=u.length;d--;)if(u[d]==n)return o[d]==r;var _=0;if(a=!0,u.push(n),o.push(r),v){if(d=n.length,_=r.length,a=_==d,a||e)for(;_--;){var w=d,j=r[_];if(e)for(;w--&&!(a=rr(n[w],j,t,e,u,o)););else if(!(a=rr(n[_],j,t,e,u,o)))break}}else au(r,function(r,i,f){return De.call(f,i)?(_++,a=De.call(n,i)&&rr(n[i],r,t,e,u,o)):void 0}),a&&!e&&au(n,function(n,r,t){return De.call(t,r)?a=--_>-1:void 0});return u.pop(),o.pop(),b&&(l(u),l(o)),a}function tr(n,r,t,e,u){(Xe(r)?Qr:iu)(r,function(r,o){var a,i,f=r,l=n[o];if(r&&((i=Xe(r))||fu(r))){for(var c=e.length;c--;)if(a=e[c]==r){l=u[c];break}if(!a){var p;t&&(f=t(l,r),(p="undefined"!=typeof f)&&(l=f)),p||(l=i?Xe(l)?l:[]:fu(l)?l:{}),e.push(r),u.push(l),p||tr(l,r,t,e,u)}}else t&&(f=t(l,r),"undefined"==typeof f&&(f=r)),"undefined"!=typeof f&&(l=f);n[o]=l})}function er(n,r){return n+Ie(Ge()*(r-n+1))}function ur(t,e,u){var a=-1,f=fr(),p=t?t.length:0,s=[],v=!e&&p>=b&&f===n,h=u||v?i():s;if(v){var g=o(h);f=r,h=g}for(;++a<p;){var y=t[a],m=u?u(y,a,t):y;(e?!a||h[h.length-1]!==m:f(h,m)<0)&&((u||v)&&h.push(m),s.push(y))}return v?(l(h.array),c(h)):u&&l(h),s}function or(n){return function(r,t,e){var u={};t=h.createCallback(t,e,3);var o=-1,a=r?r.length:0;if("number"==typeof a)for(;++o<a;){var i=r[o];n(u,i,t(i,o,r),r)}else iu(r,function(r,e,o){n(u,r,t(r,e,o),o)});return u}}function ar(n,r,t,e,u,o){var a=1&r,i=2&r,f=4&r,l=16&r,c=32&r;if(!i&&!Er(n))throw new je;l&&!t.length&&(r&=-17,l=t=!1),c&&!e.length&&(r&=-33,c=e=!1);var s=n&&n.__bindData__;if(s&&s!==!0)return s=p(s),s[2]&&(s[2]=p(s[2])),s[3]&&(s[3]=p(s[3])),!a||1&s[1]||(s[4]=u),!a&&1&s[1]&&(r|=8),!f||4&s[1]||(s[5]=o),l&&Te.apply(s[2]||(s[2]=[]),t),c&&Be.apply(s[3]||(s[3]=[]),e),s[1]|=r,ar.apply(null,s);var v=1==r||17===r?d:X;return v([n,r,t,e,u,o])}function ir(n){return nu[n]}function fr(){var r=(r=h.indexOf)===mt?n:r;return r}function lr(n){return"function"==typeof n&&Ne.test(n)}function cr(n){var r,t;return n&&Oe.call(n)==z&&(r=n.constructor,!Er(r)||r instanceof r)?(au(n,function(n,r){t=r}),"undefined"==typeof t||De.call(n,t)):!1}function pr(n){return ru[n]}function sr(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Oe.call(n)==T||!1}function vr(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t=r,r=!1),G(n,r,"function"==typeof t&&Q(t,e,1))}function hr(n,r,t){return G(n,!0,"function"==typeof r&&Q(r,t,1))}function gr(n,r){var t=J(n);return r?uu(t,r):t}function yr(n,r,t){var e;return r=h.createCallback(r,t,3),iu(n,function(n,t,u){return r(n,t,u)?(e=t,!1):void 0}),e}function mr(n,r,t){var e;return r=h.createCallback(r,t,3),dr(n,function(n,t,u){return r(n,t,u)?(e=t,!1):void 0}),e}function br(n,r,t){var e=[];au(n,function(n,r){e.push(r,n)});var u=e.length;for(r=Q(r,t,3);u--&&r(e[u--],e[u],n)!==!1;);return n}function dr(n,r,t){var e=Ze(n),u=e.length;for(r=Q(r,t,3);u--;){var o=e[u];if(r(n[o],o,n)===!1)break}return n}function _r(n){var r=[];return au(n,function(n,t){Er(n)&&r.push(t)}),r.sort()}function wr(n,r){return n?De.call(n,r):!1}function jr(n){for(var r=-1,t=Ze(n),e=t.length,u={};++r<e;){var o=t[r];u[n[o]]=o}return u}function kr(n){return n===!0||n===!1||n&&"object"==typeof n&&Oe.call(n)==F||!1}function xr(n){return n&&"object"==typeof n&&Oe.call(n)==B||!1}function Cr(n){return n&&1===n.nodeType||!1}function Or(n){var r=!0;if(!n)return r;var t=Oe.call(n),e=n.length;return t==$||t==P||t==T||t==z&&"number"==typeof e&&Er(n.splice)?!e:(iu(n,function(){return r=!1}),r)}function Nr(n,r,t,e){return rr(n,r,"function"==typeof t&&Q(t,e,2))}function Rr(n){return Le(n)&&!Pe(parseFloat(n))}function Er(n){return"function"==typeof n}function Ir(n){return!(!n||!V[typeof n])}function Sr(n){return Dr(n)&&n!=+n}function Ar(n){return null===n}function Dr(n){return"number"==typeof n||n&&"object"==typeof n&&Oe.call(n)==q||!1}function Tr(n){return n&&"object"==typeof n&&Oe.call(n)==L||!1}function $r(n){return"string"==typeof n||n&&"object"==typeof n&&Oe.call(n)==P||!1}function Fr(n){return"undefined"==typeof n}function Br(n,r,t){var e={};return r=h.createCallback(r,t,3),iu(n,function(n,t,u){e[t]=r(n,t,u)}),e}function Wr(n){var r=arguments,t=2;if(!Ir(n))return n;if("number"!=typeof r[2]&&(t=r.length),t>3&&"function"==typeof r[t-2])var e=Q(r[--t-1],r[t--],2);else t>2&&"function"==typeof r[t-1]&&(e=r[--t]);for(var u=p(arguments,1,t),o=-1,a=i(),f=i();++o<t;)tr(n,u[o],e,a,f);return l(a),l(f),n}function qr(n,r,t){var e={};if("function"!=typeof r){var u=[];au(n,function(n,r){u.push(r)}),u=Y(u,nr(arguments,!0,!1,1));for(var o=-1,a=u.length;++o<a;){var i=u[o];e[i]=n[i]}}else r=h.createCallback(r,t,3),au(n,function(n,t,u){r(n,t,u)||(e[t]=n)});return e}function zr(n){for(var r=-1,t=Ze(n),e=t.length,u=ve(e);++r<e;){var o=t[r];u[r]=[o,n[o]]}return u}function Lr(n,r,t){var e={};if("function"!=typeof r)for(var u=-1,o=nr(arguments,!0,!1,1),a=Ir(n)?o.length:0;++u<a;){var i=o[u];i in n&&(e[i]=n[i])}else r=h.createCallback(r,t,3),au(n,function(n,t,u){r(n,t,u)&&(e[t]=n)});return e}function Pr(n,r,t,e){var u=Xe(n);if(null==t)if(u)t=[];else{var o=n&&n.constructor,a=o&&o.prototype;t=J(a)}return r&&(r=h.createCallback(r,e,4),(u?Qr:iu)(n,function(n,e,u){return r(t,n,e,u)})),t}function Kr(n){for(var r=-1,t=Ze(n),e=t.length,u=ve(e);++r<e;)u[r]=n[t[r]];return u}function Ur(n){for(var r=arguments,t=-1,e=nr(r,!0,!1,1),u=r[2]&&r[2][r[1]]===n?1:e.length,o=ve(u);++t<u;)o[t]=n[e[t]];return o}function Mr(n,r,t){var e=-1,u=fr(),o=n?n.length:0,a=!1;return t=(0>t?Ue(0,o+t):t)||0,Xe(n)?a=u(n,r,t)>-1:"number"==typeof o?a=($r(n)?n.indexOf(r,t):u(n,r,t))>-1:iu(n,function(n){return++e>=t?!(a=n===r):void 0}),a}function Vr(n,r,t){var e=!0;r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&(e=!!r(n[u],u,n)););else iu(n,function(n,t,u){return e=!!r(n,t,u)});return e}function Gr(n,r,t){var e=[];r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o;){var a=n[u];r(a,u,n)&&e.push(a)}else iu(n,function(n,t,u){r(n,t,u)&&e.push(n)});return e}function Hr(n,r,t){r=h.createCallback(r,t,3);var e=-1,u=n?n.length:0;if("number"!=typeof u){var o;return iu(n,function(n,t,e){return r(n,t,e)?(o=n,!1):void 0}),o}for(;++e<u;){var a=n[e];if(r(a,e,n))return a}}function Jr(n,r,t){var e;return r=h.createCallback(r,t,3),Xr(n,function(n,t,u){return r(n,t,u)?(e=n,!1):void 0}),e}function Qr(n,r,t){var e=-1,u=n?n.length:0;if(r=r&&"undefined"==typeof t?r:Q(r,t,3),"number"==typeof u)for(;++e<u&&r(n[e],e,n)!==!1;);else iu(n,r);return n}function Xr(n,r,t){var e=n?n.length:0;if(r=r&&"undefined"==typeof t?r:Q(r,t,3),"number"==typeof e)for(;e--&&r(n[e],e,n)!==!1;);else{var u=Ze(n);e=u.length,iu(n,function(n,t,o){return t=u?u[--e]:--e,r(o[t],t,o)})}return n}function Yr(n,r){var t=p(arguments,2),e=-1,u="function"==typeof r,o=n?n.length:0,a=ve("number"==typeof o?o:0);return Qr(n,function(n){a[++e]=(u?r:n[r]).apply(n,t)}),a}function Zr(n,r,t){var e=-1,u=n?n.length:0;if(r=h.createCallback(r,t,3),"number"==typeof u)for(var o=ve(u);++e<u;)o[e]=r(n[e],e,n);else o=[],iu(n,function(n,t,u){o[++e]=r(n,t,u)});return o}function nt(n,r,t){var u=-1/0,o=u;if("function"!=typeof r&&t&&t[r]===n&&(r=null),null==r&&Xe(n))for(var a=-1,i=n.length;++a<i;){var f=n[a];f>o&&(o=f)}else r=null==r&&$r(n)?e:h.createCallback(r,t,3),Qr(n,function(n,t,e){var a=r(n,t,e);a>u&&(u=a,o=n)});return o}function rt(n,r,t){var u=1/0,o=u;if("function"!=typeof r&&t&&t[r]===n&&(r=null),null==r&&Xe(n))for(var a=-1,i=n.length;++a<i;){var f=n[a];o>f&&(o=f)}else r=null==r&&$r(n)?e:h.createCallback(r,t,3),Qr(n,function(n,t,e){var a=r(n,t,e);u>a&&(u=a,o=n)});return o}function tt(n,r,t,e){if(!n)return t;var u=arguments.length<3;r=h.createCallback(r,e,4);var o=-1,a=n.length;if("number"==typeof a)for(u&&(t=n[++o]);++o<a;)t=r(t,n[o],o,n);else iu(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)});return t}function et(n,r,t,e){var u=arguments.length<3;return r=h.createCallback(r,e,4),Xr(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)}),t}function ut(n,r,t){return r=h.createCallback(r,t,3),Gr(n,function(n,t,e){return!r(n,t,e)})}function ot(n,r,t){if(n&&"number"!=typeof n.length&&(n=Kr(n)),null==r||t)return n?n[er(0,n.length-1)]:v;var e=at(n);return e.length=Me(Ue(0,r),e.length),e}function at(n){var r=-1,t=n?n.length:0,e=ve("number"==typeof t?t:0);return Qr(n,function(n){var t=er(0,++r);e[r]=e[t],e[t]=n}),e}function it(n){var r=n?n.length:0;return"number"==typeof r?r:Ze(n).length}function ft(n,r,t){var e;r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&!(e=r(n[u],u,n)););else iu(n,function(n,t,u){return!(e=r(n,t,u))});return!!e}function lt(n,r,t){var e=-1,o=Xe(r),a=n?n.length:0,p=ve("number"==typeof a?a:0);for(o||(r=h.createCallback(r,t,3)),Qr(n,function(n,t,u){var a=p[++e]=f();o?a.criteria=Zr(r,function(r){return n[r]}):(a.criteria=i())[0]=r(n,t,u),a.index=e,a.value=n}),a=p.length,p.sort(u);a--;){var s=p[a];p[a]=s.value,o||l(s.criteria),c(s)}return p}function ct(n){return n&&"number"==typeof n.length?p(n):Kr(n)}function pt(n){for(var r=-1,t=n?n.length:0,e=[];++r<t;){var u=n[r];u&&e.push(u)}return e}function st(n){return Y(n,nr(arguments,!0,!0,1))}function vt(n,r,t){var e=-1,u=n?n.length:0;for(r=h.createCallback(r,t,3);++e<u;)if(r(n[e],e,n))return e;return-1}function ht(n,r,t){var e=n?n.length:0;for(r=h.createCallback(r,t,3);e--;)if(r(n[e],e,n))return e;return-1}function gt(n,r,t){var e=0,u=n?n.length:0;if("number"!=typeof r&&null!=r){var o=-1;for(r=h.createCallback(r,t,3);++o<u&&r(n[o],o,n);)e++}else if(e=r,null==e||t)return n?n[0]:v;return p(n,0,Me(Ue(0,e),u))}function yt(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t="function"!=typeof r&&e&&e[r]===n?null:r,r=!1),null!=t&&(n=Zr(n,t,e)),nr(n,r)}function mt(r,t,e){if("number"==typeof e){var u=r?r.length:0;e=0>e?Ue(0,u+e):e||0}else if(e){var o=Ot(r,t);return r[o]===t?o:-1}return n(r,t,e)}function bt(n,r,t){var e=0,u=n?n.length:0;if("number"!=typeof r&&null!=r){var o=u;for(r=h.createCallback(r,t,3);o--&&r(n[o],o,n);)e++}else e=null==r||t?1:r||e;return p(n,0,Me(Ue(0,u-e),u))}function dt(){for(var t=[],e=-1,u=arguments.length,a=i(),f=fr(),p=f===n,s=i();++e<u;){var v=arguments[e];(Xe(v)||sr(v))&&(t.push(v),a.push(p&&v.length>=b&&o(e?t[e]:s)))}var h=t[0],g=-1,y=h?h.length:0,m=[];n:for(;++g<y;){var d=a[0];if(v=h[g],(d?r(d,v):f(s,v))<0){for(e=u,(d||s).push(v);--e;)if(d=a[e],(d?r(d,v):f(t[e],v))<0)continue n;m.push(v)}}for(;u--;)d=a[u],d&&c(d);return l(a),l(s),m}function _t(n,r,t){var e=0,u=n?n.length:0;if("number"!=typeof r&&null!=r){var o=u;for(r=h.createCallback(r,t,3);o--&&r(n[o],o,n);)e++}else if(e=r,null==e||t)return n?n[u-1]:v;return p(n,Ue(0,u-e))}function wt(n,r,t){var e=n?n.length:0;for("number"==typeof t&&(e=(0>t?Ue(0,e+t):Me(t,e-1))+1);e--;)if(n[e]===r)return e;return-1}function jt(n){for(var r=arguments,t=0,e=r.length,u=n?n.length:0;++t<e;)for(var o=-1,a=r[t];++o<u;)n[o]===a&&(Fe.call(n,o--,1),u--);return n}function kt(n,r,t){n=+n||0,t="number"==typeof t?t:+t||1,null==r&&(r=n,n=0);for(var e=-1,u=Ue(0,Re((r-n)/(t||1))),o=ve(u);++e<u;)o[e]=n,n+=t;return o}function xt(n,r,t){var e=-1,u=n?n.length:0,o=[];for(r=h.createCallback(r,t,3);++e<u;){var a=n[e];r(a,e,n)&&(o.push(a),Fe.call(n,e--,1),u--)}return o}function Ct(n,r,t){if("number"!=typeof r&&null!=r){var e=0,u=-1,o=n?n.length:0;for(r=h.createCallback(r,t,3);++u<o&&r(n[u],u,n);)e++}else e=null==r||t?1:Ue(0,r);return p(n,e)}function Ot(n,r,t,e){var u=0,o=n?n.length:u;for(t=t?h.createCallback(t,e,1):Xt,r=t(r);o>u;){var a=u+o>>>1;t(n[a])<r?u=a+1:o=a}return u}function Nt(){return ur(nr(arguments,!0,!0))}function Rt(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t="function"!=typeof r&&e&&e[r]===n?null:r,r=!1),null!=t&&(t=h.createCallback(t,e,3)),ur(n,r,t)}function Et(n){return Y(n,p(arguments,1))}function It(){for(var n=-1,r=arguments.length;++n<r;){var t=arguments[n];if(Xe(t)||sr(t))var e=e?ur(Y(e,t).concat(Y(t,e))):t}return e||[]}function St(){for(var n=arguments.length>1?arguments:arguments[0],r=-1,t=n?nt(su(n,"length")):0,e=ve(0>t?0:t);++r<t;)e[r]=su(n,r);return e}function At(n,r){var t=-1,e=n?n.length:0,u={};for(r||!e||Xe(n[0])||(r=[]);++t<e;){var o=n[t];r?u[o]=r[t]:o&&(u[o[0]]=o[1])}return u}function Dt(n,r){if(!Er(r))throw new je;return function(){return--n<1?r.apply(this,arguments):void 0}}function Tt(n,r){return arguments.length>2?ar(n,17,p(arguments,2),null,r):ar(n,1,null,null,r)}function $t(n){for(var r=arguments.length>1?nr(arguments,!0,!1,1):_r(n),t=-1,e=r.length;++t<e;){var u=r[t];n[u]=ar(n[u],1,null,null,n)}return n}function Ft(n,r){return arguments.length>2?ar(r,19,p(arguments,2),null,n):ar(r,3,null,null,n)}function Bt(){for(var n=arguments,r=n.length;r--;)if(!Er(n[r]))throw new je;return function(){for(var r=arguments,t=n.length;t--;)r=[n[t].apply(this,r)];return r[0]}}function Wt(n,r){return r="number"==typeof r?r:+r||n.length,ar(n,4,null,null,null,r)}function qt(n,r,t){var e,u,o,a,i,f,l,c=0,p=!1,s=!0;if(!Er(n))throw new je;if(r=Ue(0,r)||0,t===!0){var h=!0;s=!1}else Ir(t)&&(h=t.leading,p="maxWait"in t&&(Ue(r,t.maxWait)||0),s="trailing"in t?t.trailing:s);var g=function(){var t=r-(hu()-a);if(0>=t){u&&Ee(u);var p=l;u=f=l=v,p&&(c=hu(),o=n.apply(i,e),f||u||(e=i=null))}else f=$e(g,t)},y=function(){f&&Ee(f),u=f=l=v,(s||p!==r)&&(c=hu(),o=n.apply(i,e),f||u||(e=i=null))};return function(){if(e=arguments,a=hu(),i=this,l=s&&(f||!h),p===!1)var t=h&&!f;else{u||h||(c=a);var v=p-(a-c),m=0>=v;m?(u&&(u=Ee(u)),c=a,o=n.apply(i,e)):u||(u=$e(y,v))}return m&&f?f=Ee(f):f||r===p||(f=$e(g,r)),t&&(m=!0,o=n.apply(i,e)),!m||f||u||(e=i=null),o}}function zt(n){if(!Er(n))throw new je;var r=p(arguments,1);return $e(function(){n.apply(v,r)},1)}function Lt(n,r){if(!Er(n))throw new je;var t=p(arguments,2);return $e(function(){n.apply(v,t)},r)}function Pt(n,r){if(!Er(n))throw new je;var t=function(){var e=t.cache,u=r?r.apply(this,arguments):m+arguments[0];return De.call(e,u)?e[u]:e[u]=n.apply(this,arguments)};return t.cache={},t}function Kt(n){var r,t;if(!Er(n))throw new je;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}}function Ut(n){return ar(n,16,p(arguments,1))}function Mt(n){return ar(n,32,null,p(arguments,1))}function Vt(n,r,t){var e=!0,u=!0;if(!Er(n))throw new je;return t===!1?e=!1:Ir(t)&&(e="leading"in t?t.leading:e,u="trailing"in t?t.trailing:u),U.leading=e,U.maxWait=r,U.trailing=u,qt(n,r,U)}function Gt(n,r){return ar(r,16,[n])}function Ht(n){return function(){return n}}function Jt(n,r,t){var e=typeof n;if(null==n||"function"==e)return Q(n,r,t);if("object"!=e)return re(n);var u=Ze(n),o=u[0],a=n[o];return 1!=u.length||a!==a||Ir(a)?function(r){for(var t=u.length,e=!1;t--&&(e=rr(r[u[t]],n[u[t]],null,!0)););return e}:function(n){var r=n[o];return a===r&&(0!==a||1/a==1/r)}}function Qt(n){return null==n?"":we(n).replace(eu,ir)}function Xt(n){return n}function Yt(n,r,t){var e=!0,u=r&&_r(r);r&&(t||u.length)||(null==t&&(t=r),o=g,r=n,n=h,u=_r(r)),t===!1?e=!1:Ir(t)&&"chain"in t&&(e=t.chain);var o=n,a=Er(o);Qr(u,function(t){var u=n[t]=r[t];a&&(o.prototype[t]=function(){var r=this.__chain__,t=this.__wrapped__,a=[t];Te.apply(a,arguments);var i=u.apply(n,a);if(e||r){if(t===i&&Ir(i))return this;i=new o(i),i.__chain__=r}return i})})}function Zt(){return t._=Ce,this}function ne(){}function re(n){return function(r){return r[n]}}function te(n,r,t){var e=null==n,u=null==r;if(null==t&&("boolean"==typeof n&&u?(t=n,n=1):u||"boolean"!=typeof r||(t=r,u=!0)),e&&u&&(r=1),n=+n||0,u?(r=n,n=0):r=+r||0,t||n%1||r%1){var o=Ge();return Me(n+o*(r-n+parseFloat("1e-"+((o+"").length-1))),r)}return er(n,r)}function ee(n,r){if(n){var t=n[r];return Er(t)?n[r]():t}}function ue(n,r,t){var e=h.templateSettings;n=we(n||""),t=ou({},t,e);var u,o=ou({},t.imports,e.imports),i=Ze(o),f=Kr(o),l=0,c=t.interpolate||E,p="__p += '",s=_e((t.escape||E).source+"|"+c.source+"|"+(c===N?x:E).source+"|"+(t.evaluate||E).source+"|$","g");n.replace(s,function(r,t,e,o,i,f){return e||(e=o),p+=n.slice(l,f).replace(S,a),t&&(p+="' +\n__e("+t+") +\n'"),i&&(u=!0,p+="';\n"+i+";\n__p += '"),e&&(p+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=f+r.length,r}),p+="';\n";var g=t.variable,y=g;y||(g="obj",p="with ("+g+") {\n"+p+"\n}\n"),p=(u?p.replace(w,""):p).replace(j,"$1").replace(k,"$1;"),p="function("+g+") {\n"+(y?"":g+" || ("+g+" = {});\n")+"var __t, __p = '', __e = _.escape"+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var m="\n/*\n//# sourceURL="+(t.sourceURL||"/lodash/template/source["+D++ +"]")+"\n*/";try{var b=ye(i,"return "+p+m).apply(v,f)}catch(d){throw d.source=p,d}return r?b(r):(b.source=p,b)}function oe(n,r,t){n=(n=+n)>-1?n:0;var e=-1,u=ve(n);for(r=Q(r,t,1);++e<n;)u[e]=r(e);return u}function ae(n){return null==n?"":we(n).replace(tu,pr)}function ie(n){var r=++y;return we(null==n?"":n)+r}function fe(n){return n=new g(n),n.__chain__=!0,n}function le(n,r){return r(n),n}function ce(){return this.__chain__=!0,this}function pe(){return we(this.__wrapped__)}function se(){return this.__wrapped__}t=t?Z.defaults(H.Object(),t,Z.pick(H,A)):H;var ve=t.Array,he=t.Boolean,ge=t.Date,ye=t.Function,me=t.Math,be=t.Number,de=t.Object,_e=t.RegExp,we=t.String,je=t.TypeError,ke=[],xe=de.prototype,Ce=t._,Oe=xe.toString,Ne=_e("^"+we(Oe).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Re=me.ceil,Ee=t.clearTimeout,Ie=me.floor,Se=ye.prototype.toString,Ae=lr(Ae=de.getPrototypeOf)&&Ae,De=xe.hasOwnProperty,Te=ke.push,$e=t.setTimeout,Fe=ke.splice,Be=ke.unshift,We=function(){try{var n={},r=lr(r=de.defineProperty)&&r,t=r(n,n,n)&&r}catch(e){}return t}(),qe=lr(qe=de.create)&&qe,ze=lr(ze=ve.isArray)&&ze,Le=t.isFinite,Pe=t.isNaN,Ke=lr(Ke=de.keys)&&Ke,Ue=me.max,Me=me.min,Ve=t.parseInt,Ge=me.random,He={};He[$]=ve,He[F]=he,He[B]=ge,He[W]=ye,He[z]=de,He[q]=be,He[L]=_e,He[P]=we,g.prototype=h.prototype;var Je=h.support={};Je.funcDecomp=!lr(t.WinRTError)&&I.test(s),Je.funcNames="string"==typeof ye.name,h.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:h}},qe||(J=function(){function n(){}return function(r){if(Ir(r)){n.prototype=r;var e=new n;n.prototype=null}return e||t.Object()}}());var Qe=We?function(n,r){M.value=r,We(n,"__bindData__",M)}:ne,Xe=ze||function(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Oe.call(n)==$||!1},Ye=function(n){var r,t=n,e=[];if(!t)return e;if(!V[typeof n])return e;for(r in t)De.call(t,r)&&e.push(r);return e},Ze=Ke?function(n){return Ir(n)?Ke(n):[]}:Ye,nu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ru=jr(nu),tu=_e("("+Ze(ru).join("|")+")","g"),eu=_e("["+Ze(nu).join("")+"]","g"),uu=function(n,r,t){var e,u=n,o=u;if(!u)return o;var a=arguments,i=0,f="number"==typeof t?2:a.length;if(f>3&&"function"==typeof a[f-2])var l=Q(a[--f-1],a[f--],2);else f>2&&"function"==typeof a[f-1]&&(l=a[--f]);for(;++i<f;)if(u=a[i],u&&V[typeof u])for(var c=-1,p=V[typeof u]&&Ze(u),s=p?p.length:0;++c<s;)e=p[c],o[e]=l?l(o[e],u[e]):u[e];return o},ou=function(n,r,t){var e,u=n,o=u;if(!u)return o;for(var a=arguments,i=0,f="number"==typeof t?2:a.length;++i<f;)if(u=a[i],u&&V[typeof u])for(var l=-1,c=V[typeof u]&&Ze(u),p=c?c.length:0;++l<p;)e=c[l],"undefined"==typeof o[e]&&(o[e]=u[e]);return o},au=function(n,r,t){var e,u=n,o=u;if(!u)return o;if(!V[typeof u])return o;r=r&&"undefined"==typeof t?r:Q(r,t,3);for(e in u)if(r(u[e],e,n)===!1)return o;return o},iu=function(n,r,t){var e,u=n,o=u;if(!u)return o;if(!V[typeof u])return o;r=r&&"undefined"==typeof t?r:Q(r,t,3);for(var a=-1,i=V[typeof u]&&Ze(u),f=i?i.length:0;++a<f;)if(e=i[a],r(u[e],e,n)===!1)return o;return o},fu=Ae?function(n){if(!n||Oe.call(n)!=z)return!1;var r=n.valueOf,t=lr(r)&&(t=Ae(r))&&Ae(t);return t?n==t||Ae(n)==t:cr(n)}:cr,lu=or(function(n,r,t){De.call(n,t)?n[t]++:n[t]=1}),cu=or(function(n,r,t){(De.call(n,t)?n[t]:n[t]=[]).push(r)}),pu=or(function(n,r,t){n[t]=r}),su=Zr,vu=Gr,hu=lr(hu=ge.now)&&hu||function(){return(new ge).getTime()},gu=8==Ve(_+"08")?Ve:function(n,r){return Ve($r(n)?n.replace(R,""):n,r||0)};return h.after=Dt,h.assign=uu,h.at=Ur,h.bind=Tt,h.bindAll=$t,h.bindKey=Ft,h.chain=fe,h.compact=pt,h.compose=Bt,h.constant=Ht,h.countBy=lu,h.create=gr,h.createCallback=Jt,h.curry=Wt,h.debounce=qt,h.defaults=ou,h.defer=zt,h.delay=Lt,h.difference=st,h.filter=Gr,h.flatten=yt,h.forEach=Qr,h.forEachRight=Xr,h.forIn=au,h.forInRight=br,h.forOwn=iu,h.forOwnRight=dr,h.functions=_r,h.groupBy=cu,h.indexBy=pu,h.initial=bt,h.intersection=dt,h.invert=jr,h.invoke=Yr,h.keys=Ze,h.map=Zr,h.mapValues=Br,h.max=nt,h.memoize=Pt,h.merge=Wr,h.min=rt,h.omit=qr,h.once=Kt,h.pairs=zr,h.partial=Ut,h.partialRight=Mt,h.pick=Lr,h.pluck=su,h.property=re,h.pull=jt,h.range=kt,h.reject=ut,h.remove=xt,h.rest=Ct,h.shuffle=at,h.sortBy=lt,h.tap=le,h.throttle=Vt,h.times=oe,h.toArray=ct,h.transform=Pr,h.union=Nt,h.uniq=Rt,h.values=Kr,h.where=vu,h.without=Et,h.wrap=Gt,h.xor=It,h.zip=St,h.zipObject=At,h.collect=Zr,h.drop=Ct,h.each=Qr,h.eachRight=Xr,h.extend=uu,h.methods=_r,h.object=At,h.select=Gr,h.tail=Ct,h.unique=Rt,h.unzip=St,Yt(h),h.clone=vr,h.cloneDeep=hr,h.contains=Mr,h.escape=Qt,h.every=Vr,h.find=Hr,h.findIndex=vt,h.findKey=yr,h.findLast=Jr,h.findLastIndex=ht,h.findLastKey=mr,h.has=wr,h.identity=Xt,h.indexOf=mt,h.isArguments=sr,h.isArray=Xe,h.isBoolean=kr,h.isDate=xr,h.isElement=Cr,h.isEmpty=Or,h.isEqual=Nr,h.isFinite=Rr,h.isFunction=Er,h.isNaN=Sr,h.isNull=Ar,h.isNumber=Dr,h.isObject=Ir,h.isPlainObject=fu,h.isRegExp=Tr,h.isString=$r,h.isUndefined=Fr,h.lastIndexOf=wt,h.mixin=Yt,h.noConflict=Zt,h.noop=ne,h.now=hu,h.parseInt=gu,h.random=te,h.reduce=tt,h.reduceRight=et,h.result=ee,h.runInContext=s,h.size=it,h.some=ft,h.sortedIndex=Ot,h.template=ue,h.unescape=ae,h.uniqueId=ie,h.all=Vr,h.any=ft,h.detect=Hr,h.findWhere=Hr,h.foldl=tt,h.foldr=et,h.include=Mr,h.inject=tt,Yt(function(){var n={};return iu(h,function(r,t){h.prototype[t]||(n[t]=r)}),n}(),!1),h.first=gt,h.last=_t,h.sample=ot,h.take=gt,h.head=gt,iu(h,function(n,r){var t="sample"!==r;h.prototype[r]||(h.prototype[r]=function(r,e){var u=this.__chain__,o=n(this.__wrapped__,r,e);return u||null!=r&&(!e||t&&"function"==typeof r)?new g(o,u):o})}),h.VERSION="2.4.1",h.prototype.chain=ce,h.prototype.toString=pe,h.prototype.value=se,h.prototype.valueOf=se,Qr(["join","pop","shift"],function(n){var r=ke[n];h.prototype[n]=function(){var n=this.__chain__,t=r.apply(this.__wrapped__,arguments);return n?new g(t,n):t}}),Qr(["push","reverse","sort","unshift"],function(n){var r=ke[n];h.prototype[n]=function(){return r.apply(this.__wrapped__,arguments),this}}),Qr(["concat","slice","splice"],function(n){var r=ke[n];h.prototype[n]=function(){return new g(r.apply(this.__wrapped__,arguments),this.__chain__)}}),h}var v,h=[],g=[],y=0,m=+new Date+"",b=75,d=40,_=" 	\fÂ ï»¿\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€",w=/\b__p \+= '';/g,j=/\b(__p \+=) '' \+/g,k=/(__e\(.*?\)|\b__t\)) \+\n'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,R=RegExp("^["+_+"]*0+(?=.$)"),E=/($^)/,I=/\bthis\b/,S=/['\n\r\t\u2028\u2029\\]/g,A=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],D=0,T="[object Arguments]",$="[object Array]",F="[object Boolean]",B="[object Date]",W="[object Function]",q="[object Number]",z="[object Object]",L="[object RegExp]",P="[object String]",K={};K[W]=!1,K[T]=K[$]=K[F]=K[B]=K[q]=K[z]=K[L]=K[P]=!0;var U={leading:!1,maxWait:0,trailing:!1},M={configurable:!1,enumerable:!1,value:null,writable:!1},V={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},G={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},H=V[typeof window]&&window||this,J=V[typeof exports]&&exports&&!exports.nodeType&&exports,Q=V[typeof module]&&module&&!module.nodeType&&module,X=Q&&Q.exports===J&&J,Y=V[typeof global]&&global;!Y||Y.global!==Y&&Y.window!==Y||(H=Y);var Z=s();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(H._=Z,define(function(){return Z})):J&&Q?X?(Q.exports=Z)._=Z:J._=Z:H._=Z}).call(this);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])


//# sourceMappingURL=main.map.json

window.Granite=window.Granite||{};
Granite.Sling={SELECTOR_INFINITY:".infinity",CHARSET:"_charset_",STATUS:":status",STATUS_BROWSER:"browser",OPERATION:":operation",OPERATION_DELETE:"delete",OPERATION_MOVE:"move",DELETE_SUFFIX:"@Delete",TYPEHINT_SUFFIX:"@TypeHint",COPY_SUFFIX:"@CopyFrom",MOVE_SUFFIX:"@MoveFrom",ORDER:":order",REPLACE:":replace",DESTINATION:":dest",SAVE_PARAM_PREFIX:":saveParamPrefix",IGNORE_PARAM:":ignore",REQUEST_LOGIN_PARAM:"sling:authRequestLogin",LOGIN_URL:"/system/sling/login.html",LOGOUT_URL:"/system/sling/logout.html"};
(function(a,b){a.Util=(function(){var c={patchText:function(f,e){if(e){if(!b.isArray(e)){f=f.replace("{0}",e)
}else{for(var d=0;
d<e.length;
d++){f=f.replace(("{"+d+"}"),e[d])
}}}return f
},getTopWindow:function(){var e=window;
if(this.iFrameTopWindow){return this.iFrameTopWindow
}try{while(e.parent&&e!==e.parent&&e.parent.location.href){e=e.parent
}}catch(d){}return e
},setIFrameMode:function(d){this.iFrameTopWindow=d||window
},applyDefaults:function(){var f,h=arguments[0]||{};
for(var e=1;
e<arguments.length;
e++){f=arguments[e];
for(var d in f){var g=f[d];
if(f.hasOwnProperty(d)&&g){if(typeof g==="object"&&!(g instanceof Array)){h[d]=c.applyDefaults(h[d],g)
}else{if(g instanceof Array){h[d]=g.slice(0)
}else{h[d]=g
}}}}}return h
},getKeyCode:function(d){return d.keyCode?d.keyCode:d.which
}};
return c
}())
}(Granite,jQuery));
(function(Granite,util,sling,$){Granite.HTTP=(function(){var contextPath=null,SCRIPT_URL_REGEXP=/^(?:http|https):\/\/[^\/]+(\/[^\/]+)\/(?:etc|libs|apps)\/.*\.js(\?.*)?$/,ENCODE_PATH_REGEXP=/[^1\w-\.!~\*'\(\)\/%;:@&=\$,]/,loginRedirected=false,self={};
self.getSchemeAndAuthority=function(url){var end;
try{if(url.indexOf("://")==-1){return""
}end=url.indexOf("/",url.indexOf("://")+3);
return(end==-1)?url:url.substring(0,end)
}catch(e){return""
}};
self.getContextPath=function(){return contextPath
};
self.detectContextPath=function(){try{if(window.CQURLInfo){contextPath=CQURLInfo.contextPath||""
}else{var scripts=document.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){var result=SCRIPT_URL_REGEXP.exec(scripts[i].src);
if(result){contextPath=result[1];
return
}}contextPath=""
}}catch(e){}};
self.externalize=function(url){try{if(url.indexOf("/")==0&&contextPath&&url.indexOf(contextPath+"/")!=0){url=contextPath+url
}}catch(e){}return url
};
self.internalize=function(url,doc){if(url.charAt(0)=="/"){if(contextPath){return url.substring(contextPath.length)
}else{return url
}}if(!doc){doc=document
}var docHost=self.getSchemeAndAuthority(doc.location.href);
var urlHost=self.getSchemeAndAuthority(url);
if(docHost==urlHost){return url.substring(urlHost.length+(contextPath?contextPath.length:0))
}else{return url
}};
self.getPath=function(url){if(!url){if(window.CQURLInfo&&CQURLInfo.requestPath){return CQURLInfo.requestPath
}else{url=window.location.pathname
}}else{url=self.removeParameters(url);
url=self.removeAnchor(url)
}url=self.internalize(url);
var i=url.indexOf(".",url.lastIndexOf("/"));
if(i!=-1){url=url.substring(0,i)
}return url
};
self.removeAnchor=function(url){if(url.indexOf("#")!=-1){return url.substring(0,url.indexOf("#"))
}return url
};
self.removeParameters=function(url){if(url.indexOf("?")!=-1){return url.substring(0,url.indexOf("?"))
}return url
};
self.encodePathOfURI=function(url){var parts,delim;
if(url.indexOf("?")!=-1){parts=url.split("?");
delim="?"
}else{if(url.indexOf("#")!=-1){parts=url.split("#");
delim="#"
}else{parts=[url]
}}if(ENCODE_PATH_REGEXP.test(parts[0])){parts[0]=self.encodePath(parts[0])
}return parts.join(delim)
};
self.encodePath=function(path){path=encodeURI(path).replace(/%5B/g,"[").replace(/%5D/g,"]");
path=path.replace(/\+/g,"%2B");
path=path.replace(/\?/g,"%3F");
path=path.replace(/;/g,"%3B");
path=path.replace(/#/g,"%23");
path=path.replace(/=/g,"%3D");
path=path.replace(/\$/g,"%24");
path=path.replace(/,/g,"%2C");
path=path.replace(/'/g,"%27");
path=path.replace(/"/g,"%22");
return path
};
self.handleLoginRedirect=function(){if(!loginRedirected){loginRedirected=true;
alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
var l=util.getTopWindow().document.location;
l.href=self.externalize(sling.LOGIN_URL)+"?resource="+l.pathname+encodeURIComponent(l.search)+l.hash
}};
self.getXhrHook=function(url,method,params){method=method||"GET";
if(window.G_XHR_HOOK&&$.isFunction(G_XHR_HOOK)){var p={url:url,method:method};
if(params){p.params=params
}return G_XHR_HOOK(p)
}return null
};
self.eval=function(response){if(typeof response!="object"){response=$.ajax({url:response,type:"get",async:false})
}try{return eval("("+(response.body?response.body:response.responseText)+")")
}catch(e){}return null
};
return self
}())
}(Granite,Granite.Util,Granite.Sling,jQuery));
(function(Granite,util,http,$){Granite.I18n=(function(){var dicts={},initialized=false,urlPrefix="/libs/cq/i18n/dict.",urlSuffix=".json",currentLocale="en",pseudoTranslations=false,languages=null,self={};
self.LOCALE_DEFAULT="en";
self.PSEUDO_LANGUAGE="zz";
self.PSEUDO_PATTERN_KEY="_pseudoPattern_";
self.init=function(config){if(!config){config=new Object()
}if(config.locale){this.setLocale(config.locale)
}urlPrefix=config.urlPrefix||urlPrefix;
urlSuffix=config.urlSuffix||urlSuffix;
initialized=true
};
self.setLocale=function(locale){currentLocale=locale
};
self.getLocale=function(){if(currentLocale&&$.isFunction(currentLocale)){currentLocale=currentLocale()
}return currentLocale
};
self.setUrlPrefix=function(prefix){urlPrefix=prefix
};
self.setUrlSuffix=function(suffix){urlSuffix=suffix
};
self.getDictionary=function(locale){locale=locale||self.getLocale()||Granite.I18n.LOCALE_DEFAULT;
if(!dicts[locale]){pseudoTranslations=(locale.indexOf(self.PSEUDO_LANGUAGE)==0);
var url=urlPrefix+locale+urlSuffix;
try{var response=$.ajax(url,{async:false,dataType:"json"});
dicts[locale]=$.parseJSON(response.responseText)
}catch(e){}if(!dicts[locale]){dicts[locale]={}
}}return dicts[locale]
};
self.get=function(text,snippets,note){var dict,newText,lookupText;
if(initialized){dict=self.getDictionary()
}lookupText=pseudoTranslations?self.PSEUDO_PATTERN_KEY:note?text+" (("+note+"))":text;
if(dict){newText=dict[lookupText]
}if(!newText){newText=text
}if(pseudoTranslations){newText=newText.replace("{string}",text).replace("{comment}",note?note:"")
}return util.patchText(newText,snippets)
};
self.getVar=function(text,note){if(!text){return null
}return self.get(text,null,note)
};
self.getLanguages=function(){if(!languages){try{var json=http.eval("/libs/wcm/core/resources/languages.overlay.infinity.json");
$.each(json,function(name,lang){lang.title=self.getVar(lang.language);
if(lang.title&&lang.country&&lang.country!="*"){lang.title+=" ("+self.getVar(lang.country)+")"
}});
languages=json
}catch(e){languages={}
}}return languages
};
self.parseLocale=function(langCode){if(!langCode){return null
}var pos=langCode.indexOf("_");
if(pos<0){pos=langCode.indexOf("-")
}var language,country;
if(pos<0){language=langCode;
country=null
}else{language=langCode.substring(0,pos);
country=langCode.substring(pos+1)
}return{code:langCode,language:language,country:country}
};
return self
}())
}(Granite,Granite.Util,Granite.HTTP,jQuery));
(function(b,c){var a=function(){var e={visibility:"hidden",position:"absolute",width:"30px",height:"30px","-webkit-border-radius":"20px","border-radius":"20px",border:"5px solid orange","-webkit-user-select":"none","user-select":"none",opacity:"0.5","z-index":"2000","pointer-events":"none"};
var f={};
var d=[];
return{debugWithMouse:false,init:function(){var g=this;
c(document).on("touchstart.touchindicator touchmove.touchindicator touchend.touchindicator",function(i){var h=i.originalEvent.touches;
g.update(h);
return true
});
if(this.debugWithMouse){c(document).on("mousemove.touchindicator",function(h){h.identifer="fake";
g.update([h]);
return true
})
}},update:function(k){var h={};
for(var j=0;
j<k.length;
j++){var m=k[j];
var l=m.identifier;
var g=f[l];
if(!g){g=d.pop();
if(!g){g=c("<div></div>").css(e);
c("body").append(g)
}}h[l]=g;
g.offset({left:m.pageX-20,top:m.pageY-20});
g.css("visibility","visible")
}for(l in f){if(f.hasOwnProperty(l)&&!h[l]){g=f[l];
g.css("visibility","hidden");
d.push(g)
}}f=h
}}
};
b.TouchIndicator=new a()
}(Granite,jQuery));
(function(c,a,b,d){c.OptOutUtil=(function(){var e={};
var f=[];
var g=[];
e.init=function(h){if(h){f=h.cookieNames?h.cookieNames:f;
g=h.whitelistCookieNames?h.whitelistCookieNames:g
}};
e.getCookieNames=function(){return f
};
e.getWhitelistCookieNames=function(){return g
};
e.isOptedOut=function(){var k=document.cookie.split(";");
for(var j=0;
j<k.length;
j++){var h=k[j];
var l=d.trim(h.split("=")[0]);
if(d.inArray(l,e.getCookieNames())>-1){return true
}}return false
};
e.maySetCookie=function(h){return !(e.isOptedOut()&&d.inArray(h,e.getWhitelistCookieNames())===-1)
};
return e
}())
}(Granite,Granite.Util,Granite.HTTP,jQuery));
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();
Granite.I18n.init();

(function(c,b,d){var a;
b.Granite=b.Granite||{};
b.Granite.$=b.Granite.$||c;
b._g=b._g||{};
b._g.$=b._g.$||c;
a=Granite.HTTP;
c.ajaxSetup({externalize:true,encodePath:true,hook:true,beforeSend:function(f,e){if(typeof G_IS_HOOKED=="undefined"||!G_IS_HOOKED(e.url)){if(e.externalize){e.url=a.externalize(e.url)
}if(e.encodePath){e.url=a.encodePathOfURI(e.url)
}}if(e.hook){var g=a.getXhrHook(e.url,e.type,e.data);
if(g){e.url=g.url;
if(g.params){if(e.type.toUpperCase()=="GET"){e.url+="?"+c.param(g.params)
}else{e.data=c.param(g.params)
}}}}},statusCode:{403:function(e){if(e.getResponseHeader("X-Reason")==="Authentication Failed"){a.handleLoginRedirect()
}}}});
c.ajaxSettings.traditional=true
}(jQuery,this));

window.$CQ=_g.$;

(function(){var w=this;
var k=w._;
var D={};
var C=Array.prototype,f=Object.prototype,r=Function.prototype;
var H=C.push,o=C.slice,y=C.concat,d=f.toString,j=f.hasOwnProperty;
var L=C.forEach,q=C.map,E=C.reduce,c=C.reduceRight,b=C.filter,B=C.every,p=C.some,n=C.indexOf,l=C.lastIndexOf,u=Array.isArray,e=Object.keys,F=r.bind;
var M=function(N){if(N instanceof M){return N
}if(!(this instanceof M)){return new M(N)
}this._wrapped=N
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=M
}exports._=M
}else{w._=M
}M.VERSION="1.5.2";
var I=M.each=M.forEach=function(S,P,O){if(S==null){return
}if(L&&S.forEach===L){S.forEach(P,O)
}else{if(S.length===+S.length){for(var N=0,R=S.length;
N<R;
N++){if(P.call(O,S[N],N,S)===D){return
}}}else{var Q=M.keys(S);
for(var N=0,R=Q.length;
N<R;
N++){if(P.call(O,S[Q[N]],Q[N],S)===D){return
}}}}};
M.map=M.collect=function(Q,P,O){var N=[];
if(Q==null){return N
}if(q&&Q.map===q){return Q.map(P,O)
}I(Q,function(T,R,S){N.push(P.call(O,T,R,S))
});
return N
};
var g="Reduce of empty array with no initial value";
M.reduce=M.foldl=M.inject=function(R,Q,N,P){var O=arguments.length>2;
if(R==null){R=[]
}if(E&&R.reduce===E){if(P){Q=M.bind(Q,P)
}return O?R.reduce(Q,N):R.reduce(Q)
}I(R,function(U,S,T){if(!O){N=U;
O=true
}else{N=Q.call(P,N,U,S,T)
}});
if(!O){throw new TypeError(g)
}return N
};
M.reduceRight=M.foldr=function(T,Q,N,P){var O=arguments.length>2;
if(T==null){T=[]
}if(c&&T.reduceRight===c){if(P){Q=M.bind(Q,P)
}return O?T.reduceRight(Q,N):T.reduceRight(Q)
}var S=T.length;
if(S!==+S){var R=M.keys(T);
S=R.length
}I(T,function(W,U,V){U=R?R[--S]:--S;
if(!O){N=T[U];
O=true
}else{N=Q.call(P,N,T[U],U,V)
}});
if(!O){throw new TypeError(g)
}return N
};
M.find=M.detect=function(Q,P,O){var N;
A(Q,function(T,R,S){if(P.call(O,T,R,S)){N=T;
return true
}});
return N
};
M.filter=M.select=function(Q,P,O){var N=[];
if(Q==null){return N
}if(b&&Q.filter===b){return Q.filter(P,O)
}I(Q,function(T,R,S){if(P.call(O,T,R,S)){N.push(T)
}});
return N
};
M.reject=function(P,O,N){return M.filter(P,function(S,Q,R){return !O.call(N,S,Q,R)
},N)
};
M.every=M.all=function(Q,P,O){P||(P=M.identity);
var N=true;
if(Q==null){return N
}if(B&&Q.every===B){return Q.every(P,O)
}I(Q,function(T,R,S){if(!(N=N&&P.call(O,T,R,S))){return D
}});
return !!N
};
var A=M.some=M.any=function(Q,P,O){P||(P=M.identity);
var N=false;
if(Q==null){return N
}if(p&&Q.some===p){return Q.some(P,O)
}I(Q,function(T,R,S){if(N||(N=P.call(O,T,R,S))){return D
}});
return !!N
};
M.contains=M.include=function(O,N){if(O==null){return false
}if(n&&O.indexOf===n){return O.indexOf(N)!=-1
}return A(O,function(P){return P===N
})
};
M.invoke=function(P,Q){var N=o.call(arguments,2);
var O=M.isFunction(Q);
return M.map(P,function(R){return(O?Q:R[Q]).apply(R,N)
})
};
M.pluck=function(O,N){return M.map(O,function(P){return P[N]
})
};
M.where=function(O,N,P){if(M.isEmpty(N)){return P?void 0:[]
}return M[P?"find":"filter"](O,function(R){for(var Q in N){if(N[Q]!==R[Q]){return false
}}return true
})
};
M.findWhere=function(O,N){return M.where(O,N,true)
};
M.max=function(Q,P,O){if(!P&&M.isArray(Q)&&Q[0]===+Q[0]&&Q.length<65535){return Math.max.apply(Math,Q)
}if(!P&&M.isEmpty(Q)){return -Infinity
}var N={computed:-Infinity,value:-Infinity};
I(Q,function(U,R,T){var S=P?P.call(O,U,R,T):U;
S>N.computed&&(N={value:U,computed:S})
});
return N.value
};
M.min=function(Q,P,O){if(!P&&M.isArray(Q)&&Q[0]===+Q[0]&&Q.length<65535){return Math.min.apply(Math,Q)
}if(!P&&M.isEmpty(Q)){return Infinity
}var N={computed:Infinity,value:Infinity};
I(Q,function(U,R,T){var S=P?P.call(O,U,R,T):U;
S<N.computed&&(N={value:U,computed:S})
});
return N.value
};
M.shuffle=function(Q){var P;
var O=0;
var N=[];
I(Q,function(R){P=M.random(O++);
N[O-1]=N[P];
N[P]=R
});
return N
};
M.sample=function(O,P,N){if(arguments.length<2||N){return O[M.random(O.length-1)]
}return M.shuffle(O).slice(0,Math.max(0,P))
};
var a=function(N){return M.isFunction(N)?N:function(O){return O[N]
}
};
M.sortBy=function(Q,P,N){var O=a(P);
return M.pluck(M.map(Q,function(T,R,S){return{value:T,index:R,criteria:O.call(N,T,R,S)}
}).sort(function(U,T){var S=U.criteria;
var R=T.criteria;
if(S!==R){if(S>R||S===void 0){return 1
}if(S<R||R===void 0){return -1
}}return U.index-T.index
}),"value")
};
var t=function(N){return function(S,R,P){var O={};
var Q=R==null?M.identity:a(R);
I(S,function(V,T){var U=Q.call(P,V,T,S);
N(O,U,V)
});
return O
}
};
M.groupBy=t(function(N,O,P){(M.has(N,O)?N[O]:(N[O]=[])).push(P)
});
M.indexBy=t(function(N,O,P){N[O]=P
});
M.countBy=t(function(N,O){M.has(N,O)?N[O]++:N[O]=1
});
M.sortedIndex=function(U,T,Q,P){Q=Q==null?M.identity:a(Q);
var S=Q.call(P,T);
var N=0,R=U.length;
while(N<R){var O=(N+R)>>>1;
Q.call(P,U[O])<S?N=O+1:R=O
}return N
};
M.toArray=function(N){if(!N){return[]
}if(M.isArray(N)){return o.call(N)
}if(N.length===+N.length){return M.map(N,M.identity)
}return M.values(N)
};
M.size=function(N){if(N==null){return 0
}return(N.length===+N.length)?N.length:M.keys(N).length
};
M.first=M.head=M.take=function(P,O,N){if(P==null){return void 0
}return(O==null)||N?P[0]:o.call(P,0,O)
};
M.initial=function(P,O,N){return o.call(P,0,P.length-((O==null)||N?1:O))
};
M.last=function(P,O,N){if(P==null){return void 0
}if((O==null)||N){return P[P.length-1]
}else{return o.call(P,Math.max(P.length-O,0))
}};
M.rest=M.tail=M.drop=function(P,O,N){return o.call(P,(O==null)||N?1:O)
};
M.compact=function(N){return M.filter(N,M.identity)
};
var x=function(O,P,N){if(P&&M.every(O,M.isArray)){return y.apply(N,O)
}I(O,function(Q){if(M.isArray(Q)||M.isArguments(Q)){P?H.apply(N,Q):x(Q,P,N)
}else{N.push(Q)
}});
return N
};
M.flatten=function(O,N){return x(O,N,[])
};
M.without=function(N){return M.difference(N,o.call(arguments,1))
};
M.uniq=M.unique=function(T,S,R,Q){if(M.isFunction(S)){Q=R;
R=S;
S=false
}var O=R?M.map(T,R,Q):T;
var P=[];
var N=[];
I(O,function(V,U){if(S?(!U||N[N.length-1]!==V):!M.contains(N,V)){N.push(V);
P.push(T[U])
}});
return P
};
M.union=function(){return M.uniq(M.flatten(arguments,true))
};
M.intersection=function(O){var N=o.call(arguments,1);
return M.filter(M.uniq(O),function(P){return M.every(N,function(Q){return M.indexOf(Q,P)>=0
})
})
};
M.difference=function(O){var N=y.apply(C,o.call(arguments,1));
return M.filter(O,function(P){return !M.contains(N,P)
})
};
M.zip=function(){var P=M.max(M.pluck(arguments,"length").concat(0));
var O=new Array(P);
for(var N=0;
N<P;
N++){O[N]=M.pluck(arguments,""+N)
}return O
};
M.object=function(R,O){if(R==null){return{}
}var N={};
for(var P=0,Q=R.length;
P<Q;
P++){if(O){N[R[P]]=O[P]
}else{N[R[P][0]]=R[P][1]
}}return N
};
M.indexOf=function(R,P,Q){if(R==null){return -1
}var N=0,O=R.length;
if(Q){if(typeof Q=="number"){N=(Q<0?Math.max(0,O+Q):Q)
}else{N=M.sortedIndex(R,P);
return R[N]===P?N:-1
}}if(n&&R.indexOf===n){return R.indexOf(P,Q)
}for(;
N<O;
N++){if(R[N]===P){return N
}}return -1
};
M.lastIndexOf=function(R,P,Q){if(R==null){return -1
}var N=Q!=null;
if(l&&R.lastIndexOf===l){return N?R.lastIndexOf(P,Q):R.lastIndexOf(P)
}var O=(N?Q:R.length);
while(O--){if(R[O]===P){return O
}}return -1
};
M.range=function(S,P,R){if(arguments.length<=1){P=S||0;
S=0
}R=arguments[2]||1;
var Q=Math.max(Math.ceil((P-S)/R),0);
var N=0;
var O=new Array(Q);
while(N<Q){O[N++]=S;
S+=R
}return O
};
var G=function(){};
M.bind=function(Q,O){var N,P;
if(F&&Q.bind===F){return F.apply(Q,o.call(arguments,1))
}if(!M.isFunction(Q)){throw new TypeError
}N=o.call(arguments,2);
return P=function(){if(!(this instanceof P)){return Q.apply(O,N.concat(o.call(arguments)))
}G.prototype=Q.prototype;
var S=new G;
G.prototype=null;
var R=Q.apply(S,N.concat(o.call(arguments)));
if(Object(R)===R){return R
}return S
}
};
M.partial=function(O){var N=o.call(arguments,1);
return function(){return O.apply(this,N.concat(o.call(arguments)))
}
};
M.bindAll=function(O){var N=o.call(arguments,1);
if(N.length===0){throw new Error("bindAll must be passed function names")
}I(N,function(P){O[P]=M.bind(O[P],O)
});
return O
};
M.memoize=function(P,O){var N={};
O||(O=M.identity);
return function(){var Q=O.apply(this,arguments);
return M.has(N,Q)?N[Q]:(N[Q]=P.apply(this,arguments))
}
};
M.delay=function(O,P){var N=o.call(arguments,2);
return setTimeout(function(){return O.apply(null,N)
},P)
};
M.defer=function(N){return M.delay.apply(M,[N,1].concat(o.call(arguments,1)))
};
M.throttle=function(O,Q,U){var N,S,V;
var T=null;
var R=0;
U||(U={});
var P=function(){R=U.leading===false?0:new Date;
T=null;
V=O.apply(N,S)
};
return function(){var W=new Date;
if(!R&&U.leading===false){R=W
}var X=Q-(W-R);
N=this;
S=arguments;
if(X<=0){clearTimeout(T);
T=null;
R=W;
V=O.apply(N,S)
}else{if(!T&&U.trailing!==false){T=setTimeout(P,X)
}}return V
}
};
M.debounce=function(R,U,O){var T,P,Q,S,N;
return function(){Q=this;
P=arguments;
S=new Date();
var W=function(){var X=(new Date())-S;
if(X<U){T=setTimeout(W,U-X)
}else{T=null;
if(!O){N=R.apply(Q,P)
}}};
var V=O&&!T;
if(!T){T=setTimeout(W,U)
}if(V){N=R.apply(Q,P)
}return N
}
};
M.once=function(P){var N=false,O;
return function(){if(N){return O
}N=true;
O=P.apply(this,arguments);
P=null;
return O
}
};
M.wrap=function(N,O){return function(){var P=[N];
H.apply(P,arguments);
return O.apply(this,P)
}
};
M.compose=function(){var N=arguments;
return function(){var O=arguments;
for(var P=N.length-1;
P>=0;
P--){O=[N[P].apply(this,O)]
}return O[0]
}
};
M.after=function(O,N){return function(){if(--O<1){return N.apply(this,arguments)
}}
};
M.keys=e||function(P){if(P!==Object(P)){throw new TypeError("Invalid object")
}var O=[];
for(var N in P){if(M.has(P,N)){O.push(N)
}}return O
};
M.values=function(R){var Q=M.keys(R);
var P=Q.length;
var N=new Array(P);
for(var O=0;
O<P;
O++){N[O]=R[Q[O]]
}return N
};
M.pairs=function(R){var P=M.keys(R);
var O=P.length;
var Q=new Array(O);
for(var N=0;
N<O;
N++){Q[N]=[P[N],R[P[N]]]
}return Q
};
M.invert=function(R){var N={};
var Q=M.keys(R);
for(var O=0,P=Q.length;
O<P;
O++){N[R[Q[O]]]=Q[O]
}return N
};
M.functions=M.methods=function(P){var O=[];
for(var N in P){if(M.isFunction(P[N])){O.push(N)
}}return O.sort()
};
M.extend=function(N){I(o.call(arguments,1),function(O){if(O){for(var P in O){N[P]=O[P]
}}});
return N
};
M.pick=function(O){var P={};
var N=y.apply(C,o.call(arguments,1));
I(N,function(Q){if(Q in O){P[Q]=O[Q]
}});
return P
};
M.omit=function(P){var Q={};
var O=y.apply(C,o.call(arguments,1));
for(var N in P){if(!M.contains(O,N)){Q[N]=P[N]
}}return Q
};
M.defaults=function(N){I(o.call(arguments,1),function(O){if(O){for(var P in O){if(N[P]===void 0){N[P]=O[P]
}}}});
return N
};
M.clone=function(N){if(!M.isObject(N)){return N
}return M.isArray(N)?N.slice():M.extend({},N)
};
M.tap=function(O,N){N(O);
return O
};
var J=function(U,T,O,P){if(U===T){return U!==0||1/U==1/T
}if(U==null||T==null){return U===T
}if(U instanceof M){U=U._wrapped
}if(T instanceof M){T=T._wrapped
}var R=d.call(U);
if(R!=d.call(T)){return false
}switch(R){case"[object String]":return U==String(T);
case"[object Number]":return U!=+U?T!=+T:(U==0?1/U==1/T:U==+T);
case"[object Date]":case"[object Boolean]":return +U==+T;
case"[object RegExp]":return U.source==T.source&&U.global==T.global&&U.multiline==T.multiline&&U.ignoreCase==T.ignoreCase
}if(typeof U!="object"||typeof T!="object"){return false
}var N=O.length;
while(N--){if(O[N]==U){return P[N]==T
}}var S=U.constructor,Q=T.constructor;
if(S!==Q&&!(M.isFunction(S)&&(S instanceof S)&&M.isFunction(Q)&&(Q instanceof Q))){return false
}O.push(U);
P.push(T);
var X=0,W=true;
if(R=="[object Array]"){X=U.length;
W=X==T.length;
if(W){while(X--){if(!(W=J(U[X],T[X],O,P))){break
}}}}else{for(var V in U){if(M.has(U,V)){X++;
if(!(W=M.has(T,V)&&J(U[V],T[V],O,P))){break
}}}if(W){for(V in T){if(M.has(T,V)&&!(X--)){break
}}W=!X
}}O.pop();
P.pop();
return W
};
M.isEqual=function(O,N){return J(O,N,[],[])
};
M.isEmpty=function(O){if(O==null){return true
}if(M.isArray(O)||M.isString(O)){return O.length===0
}for(var N in O){if(M.has(O,N)){return false
}}return true
};
M.isElement=function(N){return !!(N&&N.nodeType===1)
};
M.isArray=u||function(N){return d.call(N)=="[object Array]"
};
M.isObject=function(N){return N===Object(N)
};
I(["Arguments","Function","String","Number","Date","RegExp"],function(N){M["is"+N]=function(O){return d.call(O)=="[object "+N+"]"
}
});
if(!M.isArguments(arguments)){M.isArguments=function(N){return !!(N&&M.has(N,"callee"))
}
}if(typeof(/./)!=="function"){M.isFunction=function(N){return typeof N==="function"
}
}M.isFinite=function(N){return isFinite(N)&&!isNaN(parseFloat(N))
};
M.isNaN=function(N){return M.isNumber(N)&&N!=+N
};
M.isBoolean=function(N){return N===true||N===false||d.call(N)=="[object Boolean]"
};
M.isNull=function(N){return N===null
};
M.isUndefined=function(N){return N===void 0
};
M.has=function(O,N){return j.call(O,N)
};
M.noConflict=function(){w._=k;
return this
};
M.identity=function(N){return N
};
M.times=function(R,Q,P){var N=Array(Math.max(0,R));
for(var O=0;
O<R;
O++){N[O]=Q.call(P,O)
}return N
};
M.random=function(O,N){if(N==null){N=O;
O=0
}return O+Math.floor(Math.random()*(N-O+1))
};
var m={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};
m.unescape=M.invert(m.escape);
var K={escape:new RegExp("["+M.keys(m.escape).join("")+"]","g"),unescape:new RegExp("("+M.keys(m.unescape).join("|")+")","g")};
M.each(["escape","unescape"],function(N){M[N]=function(O){if(O==null){return""
}return(""+O).replace(K[N],function(P){return m[N][P]
})
}
});
M.result=function(N,P){if(N==null){return void 0
}var O=N[P];
return M.isFunction(O)?O.call(N):O
};
M.mixin=function(N){I(M.functions(N),function(O){var P=M[O]=N[O];
M.prototype[O]=function(){var Q=[this._wrapped];
H.apply(Q,arguments);
return s.call(this,P.apply(M,Q))
}
})
};
var z=0;
M.uniqueId=function(N){var O=++z+"";
return N?N+O:O
};
M.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var v=/(.)^/;
var h={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var i=/\\|'|\r|\n|\t|\u2028|\u2029/g;
M.template=function(V,Q,P){var O;
P=M.defaults({},P,M.templateSettings);
var R=new RegExp([(P.escape||v).source,(P.interpolate||v).source,(P.evaluate||v).source].join("|")+"|$","g");
var S=0;
var N="__p+='";
V.replace(R,function(X,Y,W,aa,Z){N+=V.slice(S,Z).replace(i,function(ab){return"\\"+h[ab]
});
if(Y){N+="'+\n((__t=("+Y+"))==null?'':_.escape(__t))+\n'"
}if(W){N+="'+\n((__t=("+W+"))==null?'':__t)+\n'"
}if(aa){N+="';\n"+aa+"\n__p+='"
}S=Z+X.length;
return X
});
N+="';\n";
if(!P.variable){N="with(obj||{}){\n"+N+"}\n"
}N="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+N+"return __p;\n";
try{O=new Function(P.variable||"obj","_",N)
}catch(T){T.source=N;
throw T
}if(Q){return O(Q,M)
}var U=function(W){return O.call(this,W,M)
};
U.source="function("+(P.variable||"obj")+"){\n"+N+"}";
return U
};
M.chain=function(N){return M(N).chain()
};
var s=function(N){return this._chain?M(N).chain():N
};
M.mixin(M);
I(["pop","push","reverse","shift","sort","splice","unshift"],function(N){var O=C[N];
M.prototype[N]=function(){var P=this._wrapped;
O.apply(P,arguments);
if((N=="shift"||N=="splice")&&P.length===0){delete P[0]
}return s.call(this,P)
}
});
I(["concat","join","slice"],function(N){var O=C[N];
M.prototype[N]=function(){return s.call(this,O.apply(this._wrapped,arguments))
}
});
M.extend(M.prototype,{chain:function(){this._chain=true;
return this
},value:function(){return this._wrapped
}})
}).call(this);
(function(a,b){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(e,f,d){a.Backbone=b(a,d,e,f)
})
}else{if(typeof exports!=="undefined"){var c=require("underscore");
b(a,exports,c)
}else{a.Backbone=b(a,{},a._,(a.jQuery||a.Zepto||a.ender||a.$))
}}}(this,function(v,B,N,z){var D=v.Backbone;
var g=[];
var F=g.push;
var o=g.slice;
var u=g.splice;
B.VERSION="1.1.2";
B.$=z;
B.noConflict=function(){v.Backbone=D;
return this
};
B.emulateHTTP=false;
B.emulateJSON=false;
var L=B.Events={on:function(O,R,Q){if(!y(this,"on",O,[R,Q])||!R){return this
}this._events||(this._events={});
var P=this._events[O]||(this._events[O]=[]);
P.push({callback:R,context:Q,ctx:Q||this});
return this
},once:function(P,S,Q){if(!y(this,"once",P,[S,Q])||!S){return this
}var O=this;
var R=N.once(function(){O.off(P,R);
S.apply(this,arguments)
});
R._callback=S;
return this.on(P,R,Q)
},off:function(O,X,P){var V,W,Y,U,T,Q,S,R;
if(!this._events||!y(this,"off",O,[X,P])){return this
}if(!O&&!X&&!P){this._events=void 0;
return this
}U=O?[O]:N.keys(this._events);
for(T=0,Q=U.length;
T<Q;
T++){O=U[T];
if(Y=this._events[O]){this._events[O]=V=[];
if(X||P){for(S=0,R=Y.length;
S<R;
S++){W=Y[S];
if((X&&X!==W.callback&&X!==W.callback._callback)||(P&&P!==W.context)){V.push(W)
}}}if(!V.length){delete this._events[O]
}}}return this
},trigger:function(Q){if(!this._events){return this
}var P=o.call(arguments,1);
if(!y(this,"trigger",Q,P)){return this
}var R=this._events[Q];
var O=this._events.all;
if(R){b(R,P)
}if(O){b(O,arguments)
}return this
},stopListening:function(R,P,T){var Q=this._listeningTo;
if(!Q){return this
}var O=!P&&!T;
if(!T&&typeof P==="object"){T=this
}if(R){(Q={})[R._listenId]=R
}for(var S in Q){R=Q[S];
R.off(P,T,this);
if(O||N.isEmpty(R._events)){delete this._listeningTo[S]
}}return this
}};
var x=/\s+/;
var y=function(V,T,P,S){if(!P){return true
}if(typeof P==="object"){for(var R in P){V[T].apply(V,[R,P[R]].concat(S))
}return false
}if(x.test(P)){var U=P.split(x);
for(var Q=0,O=U.length;
Q<O;
Q++){V[T].apply(V,[U[Q]].concat(S))
}return false
}return true
};
var b=function(T,R){var U,S=-1,Q=T.length,P=R[0],O=R[1],V=R[2];
switch(R.length){case 0:while(++S<Q){(U=T[S]).callback.call(U.ctx)
}return;
case 1:while(++S<Q){(U=T[S]).callback.call(U.ctx,P)
}return;
case 2:while(++S<Q){(U=T[S]).callback.call(U.ctx,P,O)
}return;
case 3:while(++S<Q){(U=T[S]).callback.call(U.ctx,P,O,V)
}return;
default:while(++S<Q){(U=T[S]).callback.apply(U.ctx,R)
}return
}};
var E={listenTo:"on",listenToOnce:"once"};
N.each(E,function(O,P){L[P]=function(S,Q,U){var R=this._listeningTo||(this._listeningTo={});
var T=S._listenId||(S._listenId=N.uniqueId("l"));
R[T]=S;
if(!U&&typeof Q==="object"){U=this
}S[O](Q,U,this);
return this
}
});
L.bind=L.on;
L.unbind=L.off;
N.extend(B,L);
var G=B.Model=function(O,Q){var P=O||{};
Q||(Q={});
this.cid=N.uniqueId("c");
this.attributes={};
if(Q.collection){this.collection=Q.collection
}if(Q.parse){P=this.parse(P,Q)||{}
}P=N.defaults({},P,N.result(this,"defaults"));
this.set(P,Q);
this.changed={};
this.initialize.apply(this,arguments)
};
N.extend(G.prototype,L,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(O){return N.clone(this.attributes)
},sync:function(){return B.sync.apply(this,arguments)
},get:function(O){return this.attributes[O]
},escape:function(O){return N.escape(this.get(O))
},has:function(O){return this.get(O)!=null
},set:function(W,O,aa){var U,X,Y,V,T,Z,Q,S;
if(W==null){return this
}if(typeof W==="object"){X=W;
aa=O
}else{(X={})[W]=O
}aa||(aa={});
if(!this._validate(X,aa)){return false
}Y=aa.unset;
T=aa.silent;
V=[];
Z=this._changing;
this._changing=true;
if(!Z){this._previousAttributes=N.clone(this.attributes);
this.changed={}
}S=this.attributes,Q=this._previousAttributes;
if(this.idAttribute in X){this.id=X[this.idAttribute]
}for(U in X){O=X[U];
if(!N.isEqual(S[U],O)){V.push(U)
}if(!N.isEqual(Q[U],O)){this.changed[U]=O
}else{delete this.changed[U]
}Y?delete S[U]:S[U]=O
}if(!T){if(V.length){this._pending=aa
}for(var R=0,P=V.length;
R<P;
R++){this.trigger("change:"+V[R],this,S[V[R]],aa)
}}if(Z){return this
}if(!T){while(this._pending){aa=this._pending;
this._pending=false;
this.trigger("change",this,aa)
}}this._pending=false;
this._changing=false;
return this
},unset:function(O,P){return this.set(O,void 0,N.extend({},P,{unset:true}))
},clear:function(P){var O={};
for(var Q in this.attributes){O[Q]=void 0
}return this.set(O,N.extend({},P,{unset:true}))
},hasChanged:function(O){if(O==null){return !N.isEmpty(this.changed)
}return N.has(this.changed,O)
},changedAttributes:function(Q){if(!Q){return this.hasChanged()?N.clone(this.changed):false
}var S,R=false;
var P=this._changing?this._previousAttributes:this.attributes;
for(var O in Q){if(N.isEqual(P[O],(S=Q[O]))){continue
}(R||(R={}))[O]=S
}return R
},previous:function(O){if(O==null||!this._previousAttributes){return null
}return this._previousAttributes[O]
},previousAttributes:function(){return N.clone(this._previousAttributes)
},fetch:function(P){P=P?N.clone(P):{};
if(P.parse===void 0){P.parse=true
}var O=this;
var Q=P.success;
P.success=function(R){if(!O.set(O.parse(R,P),P)){return false
}if(Q){Q(O,R,P)
}O.trigger("sync",O,R,P)
};
J(this,P);
return this.sync("read",this,P)
},save:function(S,P,W){var T,O,V,Q=this.attributes;
if(S==null||typeof S==="object"){T=S;
W=P
}else{(T={})[S]=P
}W=N.extend({validate:true},W);
if(T&&!W.wait){if(!this.set(T,W)){return false
}}else{if(!this._validate(T,W)){return false
}}if(T&&W.wait){this.attributes=N.extend({},Q,T)
}if(W.parse===void 0){W.parse=true
}var R=this;
var U=W.success;
W.success=function(Y){R.attributes=Q;
var X=R.parse(Y,W);
if(W.wait){X=N.extend(T||{},X)
}if(N.isObject(X)&&!R.set(X,W)){return false
}if(U){U(R,Y,W)
}R.trigger("sync",R,Y,W)
};
J(this,W);
O=this.isNew()?"create":(W.patch?"patch":"update");
if(O==="patch"){W.attrs=T
}V=this.sync(O,this,W);
if(T&&W.wait){this.attributes=Q
}return V
},destroy:function(P){P=P?N.clone(P):{};
var O=this;
var S=P.success;
var Q=function(){O.trigger("destroy",O,O.collection,P)
};
P.success=function(T){if(P.wait||O.isNew()){Q()
}if(S){S(O,T,P)
}if(!O.isNew()){O.trigger("sync",O,T,P)
}};
if(this.isNew()){P.success();
return false
}J(this,P);
var R=this.sync("delete",this,P);
if(!P.wait){Q()
}return R
},url:function(){var O=N.result(this,"urlRoot")||N.result(this.collection,"url")||s();
if(this.isNew()){return O
}return O.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)
},parse:function(P,O){return P
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return !this.has(this.idAttribute)
},isValid:function(O){return this._validate({},N.extend(O||{},{validate:true}))
},_validate:function(Q,P){if(!P.validate||!this.validate){return true
}Q=N.extend({},this.attributes,Q);
var O=this.validationError=this.validate(Q,P)||null;
if(!O){return true
}this.trigger("invalid",this,O,N.extend(P,{validationError:O}));
return false
}});
var a=["keys","values","pairs","invert","pick","omit"];
N.each(a,function(O){G.prototype[O]=function(){var P=o.call(arguments);
P.unshift(this.attributes);
return N[O].apply(N,P)
}
});
var c=B.Collection=function(P,O){O||(O={});
if(O.model){this.model=O.model
}if(O.comparator!==void 0){this.comparator=O.comparator
}this._reset();
this.initialize.apply(this,arguments);
if(P){this.reset(P,N.extend({silent:true},O))
}};
var p={add:true,remove:true,merge:true};
var M={add:true,remove:false};
N.extend(c.prototype,L,{model:G,initialize:function(){},toJSON:function(O){return this.map(function(P){return P.toJSON(O)
})
},sync:function(){return B.sync.apply(this,arguments)
},add:function(P,O){return this.set(P,N.extend({merge:false},O,M))
},remove:function(U,R){var T=!N.isArray(U);
U=T?[U]:N.clone(U);
R||(R={});
var S,O,Q,P;
for(S=0,O=U.length;
S<O;
S++){P=U[S]=this.get(U[S]);
if(!P){continue
}delete this._byId[P.id];
delete this._byId[P.cid];
Q=this.indexOf(P);
this.models.splice(Q,1);
this.length--;
if(!R.silent){R.index=Q;
P.trigger("remove",P,this,R)
}this._removeReference(P,R)
}return T?U[0]:U
},set:function(ah,P){P=N.defaults({},P,p);
if(P.parse){ah=this.parse(ah,P)
}var S=!N.isArray(ah);
ah=S?(ah?[ah]:[]):N.clone(ah);
var ad,ab,X,Q,Z,W,ag;
var U=P.at;
var af=this.model;
var O=this.comparator&&(U==null)&&P.sort!==false;
var ae=N.isString(this.comparator)?this.comparator:null;
var aj=[],aa=[],Y={};
var V=P.add,R=P.merge,ai=P.remove;
var ac=!O&&V&&ai?[]:false;
for(ad=0,ab=ah.length;
ad<ab;
ad++){Z=ah[ad]||{};
if(Z instanceof G){X=Q=Z
}else{X=Z[af.prototype.idAttribute||"id"]
}if(W=this.get(X)){if(ai){Y[W.cid]=true
}if(R){Z=Z===Q?Q.attributes:Z;
if(P.parse){Z=W.parse(Z,P)
}W.set(Z,P);
if(O&&!ag&&W.hasChanged(ae)){ag=true
}}ah[ad]=W
}else{if(V){Q=ah[ad]=this._prepareModel(Z,P);
if(!Q){continue
}aj.push(Q);
this._addReference(Q,P)
}}Q=W||Q;
if(ac&&(Q.isNew()||!Y[Q.id])){ac.push(Q)
}Y[Q.id]=true
}if(ai){for(ad=0,ab=this.length;
ad<ab;
++ad){if(!Y[(Q=this.models[ad]).cid]){aa.push(Q)
}}if(aa.length){this.remove(aa,P)
}}if(aj.length||(ac&&ac.length)){if(O){ag=true
}this.length+=aj.length;
if(U!=null){for(ad=0,ab=aj.length;
ad<ab;
ad++){this.models.splice(U+ad,0,aj[ad])
}}else{if(ac){this.models.length=0
}var T=ac||aj;
for(ad=0,ab=T.length;
ad<ab;
ad++){this.models.push(T[ad])
}}}if(ag){this.sort({silent:true})
}if(!P.silent){for(ad=0,ab=aj.length;
ad<ab;
ad++){(Q=aj[ad]).trigger("add",Q,this,P)
}if(ag||(ac&&ac.length)){this.trigger("sort",this,P)
}}return S?ah[0]:ah
},reset:function(R,P){P||(P={});
for(var Q=0,O=this.models.length;
Q<O;
Q++){this._removeReference(this.models[Q],P)
}P.previousModels=this.models;
this._reset();
R=this.add(R,N.extend({silent:true},P));
if(!P.silent){this.trigger("reset",this,P)
}return R
},push:function(P,O){return this.add(P,N.extend({at:this.length},O))
},pop:function(P){var O=this.at(this.length-1);
this.remove(O,P);
return O
},unshift:function(P,O){return this.add(P,N.extend({at:0},O))
},shift:function(P){var O=this.at(0);
this.remove(O,P);
return O
},slice:function(){return o.apply(this.models,arguments)
},get:function(O){if(O==null){return void 0
}return this._byId[O]||this._byId[O.id]||this._byId[O.cid]
},at:function(O){return this.models[O]
},where:function(O,P){if(N.isEmpty(O)){return P?void 0:[]
}return this[P?"find":"filter"](function(Q){for(var R in O){if(O[R]!==Q.get(R)){return false
}}return true
})
},findWhere:function(O){return this.where(O,true)
},sort:function(O){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}O||(O={});
if(N.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)
}else{this.models.sort(N.bind(this.comparator,this))
}if(!O.silent){this.trigger("sort",this,O)
}return this
},pluck:function(O){return N.invoke(this.models,"get",O)
},fetch:function(O){O=O?N.clone(O):{};
if(O.parse===void 0){O.parse=true
}var Q=O.success;
var P=this;
O.success=function(R){var S=O.reset?"reset":"set";
P[S](R,O);
if(Q){Q(P,R,O)
}P.trigger("sync",P,R,O)
};
J(this,O);
return this.sync("read",this,O)
},create:function(P,O){O=O?N.clone(O):{};
if(!(P=this._prepareModel(P,O))){return false
}if(!O.wait){this.add(P,O)
}var R=this;
var Q=O.success;
O.success=function(S,T){if(O.wait){R.add(S,O)
}if(Q){Q(S,T,O)
}};
P.save(null,O);
return P
},parse:function(P,O){return P
},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0;
this.models=[];
this._byId={}
},_prepareModel:function(Q,P){if(Q instanceof G){return Q
}P=P?N.clone(P):{};
P.collection=this;
var O=new this.model(Q,P);
if(!O.validationError){return O
}this.trigger("invalid",this,O.validationError,P);
return false
},_addReference:function(P,O){this._byId[P.cid]=P;
if(P.id!=null){this._byId[P.id]=P
}if(!P.collection){P.collection=this
}P.on("all",this._onModelEvent,this)
},_removeReference:function(P,O){if(this===P.collection){delete P.collection
}P.off("all",this._onModelEvent,this)
},_onModelEvent:function(Q,P,R,O){if((Q==="add"||Q==="remove")&&R!==this){return
}if(Q==="destroy"){this.remove(P,O)
}if(P&&Q==="change:"+P.idAttribute){delete this._byId[P.previous(P.idAttribute)];
if(P.id!=null){this._byId[P.id]=P
}}this.trigger.apply(this,arguments)
}});
var A=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];
N.each(A,function(O){c.prototype[O]=function(){var P=o.call(arguments);
P.unshift(this.models);
return N[O].apply(N,P)
}
});
var l=["groupBy","countBy","sortBy","indexBy"];
N.each(l,function(O){c.prototype[O]=function(R,P){var Q=N.isFunction(R)?R:function(S){return S.get(R)
};
return N[O](this.models,Q,P)
}
});
var I=B.View=function(O){this.cid=N.uniqueId("view");
O||(O={});
N.extend(this,N.pick(O,e));
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var w=/^(\S+)\s*(.*)$/;
var e=["model","collection","el","id","attributes","className","tagName","events"];
N.extend(I.prototype,L,{tagName:"div",$:function(O){return this.$el.find(O)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
this.stopListening();
return this
},setElement:function(O,P){if(this.$el){this.undelegateEvents()
}this.$el=O instanceof B.$?O:B.$(O);
this.el=this.$el[0];
if(P!==false){this.delegateEvents()
}return this
},delegateEvents:function(S){if(!(S||(S=N.result(this,"events")))){return this
}this.undelegateEvents();
for(var R in S){var T=S[R];
if(!N.isFunction(T)){T=this[S[R]]
}if(!T){continue
}var Q=R.match(w);
var P=Q[1],O=Q[2];
T=N.bind(T,this);
P+=".delegateEvents"+this.cid;
if(O===""){this.$el.on(P,T)
}else{this.$el.on(P,O,T)
}}return this
},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);
return this
},_ensureElement:function(){if(!this.el){var O=N.extend({},N.result(this,"attributes"));
if(this.id){O.id=N.result(this,"id")
}if(this.className){O["class"]=N.result(this,"className")
}var P=B.$("<"+N.result(this,"tagName")+">").attr(O);
this.setElement(P,false)
}else{this.setElement(N.result(this,"el"),false)
}}});
B.sync=function(U,P,O){var R=k[U];
N.defaults(O||(O={}),{emulateHTTP:B.emulateHTTP,emulateJSON:B.emulateJSON});
var T={type:R,dataType:"json"};
if(!O.url){T.url=N.result(P,"url")||s()
}if(O.data==null&&P&&(U==="create"||U==="update"||U==="patch")){T.contentType="application/json";
T.data=JSON.stringify(O.attrs||P.toJSON(O))
}if(O.emulateJSON){T.contentType="application/x-www-form-urlencoded";
T.data=T.data?{model:T.data}:{}
}if(O.emulateHTTP&&(R==="PUT"||R==="DELETE"||R==="PATCH")){T.type="POST";
if(O.emulateJSON){T.data._method=R
}var Q=O.beforeSend;
O.beforeSend=function(V){V.setRequestHeader("X-HTTP-Method-Override",R);
if(Q){return Q.apply(this,arguments)
}}
}if(T.type!=="GET"&&!O.emulateJSON){T.processData=false
}if(T.type==="PATCH"&&j){T.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")
}
}var S=O.xhr=B.ajax(N.extend(T,O));
P.trigger("request",P,S,O);
return S
};
var j=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);
var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
B.ajax=function(){return B.$.ajax.apply(B.$,arguments)
};
var q=B.Router=function(O){O||(O={});
if(O.routes){this.routes=O.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var r=/\((.*?)\)/g;
var t=/(\(\?)?:\w+/g;
var d=/\*\w+/g;
var h=/[\-{}\[\]+?.,\\\^$|#\s]/g;
N.extend(q.prototype,L,{initialize:function(){},route:function(P,Q,R){if(!N.isRegExp(P)){P=this._routeToRegExp(P)
}if(N.isFunction(Q)){R=Q;
Q=""
}if(!R){R=this[Q]
}var O=this;
B.history.route(P,function(T){var S=O._extractParameters(P,T);
O.execute(R,S);
O.trigger.apply(O,["route:"+Q].concat(S));
O.trigger("route",Q,S);
B.history.trigger("route",O,Q,S)
});
return this
},execute:function(P,O){if(P){P.apply(this,O)
}},navigate:function(P,O){B.history.navigate(P,O);
return this
},_bindRoutes:function(){if(!this.routes){return
}this.routes=N.result(this,"routes");
var P,O=N.keys(this.routes);
while((P=O.pop())!=null){this.route(P,this.routes[P])
}},_routeToRegExp:function(O){O=O.replace(h,"\\$&").replace(r,"(?:$1)?").replace(t,function(Q,P){return P?Q:"([^/?]+)"
}).replace(d,"([^?]*?)");
return new RegExp("^"+O+"(?:\\?([\\s\\S]*))?$")
},_extractParameters:function(O,P){var Q=O.exec(P).slice(1);
return N.map(Q,function(S,R){if(R===Q.length-1){return S||null
}return S?decodeURIComponent(S):null
})
}});
var i=B.History=function(){this.handlers=[];
N.bindAll(this,"checkUrl");
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var C=/^[#\/]|\s+$/g;
var f=/^\/+|\/+$/g;
var K=/msie [\w.]+/;
var n=/\/$/;
var H=/#.*$/;
i.started=false;
N.extend(i.prototype,L,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root
},getHash:function(P){var O=(P||this).location.href.match(/#(.*)$/);
return O?O[1]:""
},getFragment:function(Q,P){if(Q==null){if(this._hasPushState||!this._wantsHashChange||P){Q=decodeURI(this.location.pathname+this.location.search);
var O=this.root.replace(n,"");
if(!Q.indexOf(O)){Q=Q.slice(O.length)
}}else{Q=this.getHash()
}}return Q.replace(C,"")
},start:function(Q){if(i.started){throw new Error("Backbone.history has already been started")
}i.started=true;
this.options=N.extend({root:"/"},this.options,Q);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var P=this.getFragment();
var O=document.documentMode;
var R=(K.exec(navigator.userAgent.toLowerCase())&&(!O||O<=7));
this.root=("/"+this.root+"/").replace(f,"/");
if(R&&this._wantsHashChange){var T=B.$('<iframe src="javascript:0" tabindex="-1">');
this.iframe=T.hide().appendTo("body")[0].contentWindow;
this.navigate(P)
}if(this._hasPushState){B.$(window).on("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!R){B.$(window).on("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=P;
var S=this.location;
if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);
this.location.replace(this.root+"#"+this.fragment);
return true
}else{if(this._hasPushState&&this.atRoot()&&S.hash){this.fragment=this.getHash().replace(C,"");
this.history.replaceState({},document.title,this.root+this.fragment)
}}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){B.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
if(this._checkUrlInterval){clearInterval(this._checkUrlInterval)
}i.started=false
},route:function(O,P){this.handlers.unshift({route:O,callback:P})
},checkUrl:function(P){var O=this.getFragment();
if(O===this.fragment&&this.iframe){O=this.getFragment(this.getHash(this.iframe))
}if(O===this.fragment){return false
}if(this.iframe){this.navigate(O)
}this.loadUrl()
},loadUrl:function(O){O=this.fragment=this.getFragment(O);
return N.any(this.handlers,function(P){if(P.route.test(O)){P.callback(O);
return true
}})
},navigate:function(Q,P){if(!i.started){return false
}if(!P||P===true){P={trigger:!!P}
}var O=this.root+(Q=this.getFragment(Q||""));
Q=Q.replace(H,"");
if(this.fragment===Q){return
}this.fragment=Q;
if(Q===""&&O!=="/"){O=O.slice(0,-1)
}if(this._hasPushState){this.history[P.replace?"replaceState":"pushState"]({},document.title,O)
}else{if(this._wantsHashChange){this._updateHash(this.location,Q,P.replace);
if(this.iframe&&(Q!==this.getFragment(this.getHash(this.iframe)))){if(!P.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,Q,P.replace)
}}else{return this.location.assign(O)
}}if(P.trigger){return this.loadUrl(Q)
}},_updateHash:function(O,Q,R){if(R){var P=O.href.replace(/(javascript:|#).*$/,"");
O.replace(P+"#"+Q)
}else{O.hash="#"+Q
}}});
B.history=new i;
var m=function(O,Q){var P=this;
var S;
if(O&&N.has(O,"constructor")){S=O.constructor
}else{S=function(){return P.apply(this,arguments)
}
}N.extend(S,P,Q);
var R=function(){this.constructor=S
};
R.prototype=P.prototype;
S.prototype=new R;
if(O){N.extend(S.prototype,O)
}S.__super__=P.prototype;
return S
};
G.extend=c.extend=q.extend=I.extend=i.extend=m;
var s=function(){throw new Error('A "url" property or function must be specified')
};
var J=function(Q,P){var O=P.error;
P.error=function(R){if(O){O(Q,R,P)
}Q.trigger("error",Q,R,P)
}
};
return B
}));
window.Modernizr=function(ay,ax,aw){function U(b){ao.cssText=b
}function T(d,c){return U(ak.join(d+";")+(c||""))
}function S(d,c){return typeof d===c
}function R(d,c){return !!~(""+d).indexOf(c)
}function Q(f,c){for(var h in f){var g=f[h];
if(!R(g,"-")&&ao[g]!==aw){return c=="pfx"?g:!0
}}return !1
}function P(g,c,j){for(var i in g){var h=c[g[i]];
if(h!==aw){return j===!1?g[i]:S(h,"function")?h.bind(j||c):h
}}return !1
}function O(g,f,j){var i=g.charAt(0).toUpperCase()+g.slice(1),h=(g+" "+ai.join(i+" ")+i).split(" ");
return S(f,"string")||S(f,"undefined")?Q(h,f):(h=(g+" "+ah.join(i+" ")+i).split(" "),P(h,f,j))
}function N(){au.input=function(f){for(var b=0,a=f.length;
b<a;
b++){ad[f[b]]=f[b] in an
}return ad.list&&(ad.list=!!ax.createElement("datalist")&&!!ay.HTMLDataListElement),ad
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),au.inputtypes=function(b){for(var l=0,k,j,g,c=b.length;
l<c;
l++){an.setAttribute("type",j=b[l]),k=an.type!=="text",k&&(an.value=am,an.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(j)&&an.style.WebkitAppearance!==aw?(ar.appendChild(an),g=ax.defaultView,k=g.getComputedStyle&&g.getComputedStyle(an,null).WebkitAppearance!=="textfield"&&an.offsetHeight!==0,ar.removeChild(an)):/^(search|tel)$/.test(j)||(/^(url|email)$/.test(j)?k=an.checkValidity&&an.checkValidity()===!1:k=an.value!=am)),ae[b[l]]=!!k
}return ae
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var av="2.7.1",au={},at=!0,ar=ax.documentElement,aq="modernizr",ap=ax.createElement(aq),ao=ap.style,an=ax.createElement("input"),am=":)",al={}.toString,ak=" -webkit- -moz- -o- -ms- ".split(" "),aj="Webkit Moz O ms",ai=aj.split(" "),ah=aj.toLowerCase().split(" "),ag={svg:"http://www.w3.org/2000/svg"},af={},ae={},ad={},ac=[],ab=ac.slice,aa,Z=function(v,u,t,s){var r,q,p,o,h=ax.createElement("div"),g=ax.body,b=g||ax.createElement("body");
if(parseInt(t,10)){while(t--){p=ax.createElement("div"),p.id=s?s[t]:aq+(t+1),h.appendChild(p)
}}return r=["&#173;",'<style id="s',aq,'">',v,"</style>"].join(""),h.id=aq,(g?h:b).innerHTML+=r,b.appendChild(h),g||(b.style.background="",b.style.overflow="hidden",o=ar.style.overflow,ar.style.overflow="hidden",ar.appendChild(b)),q=u(h,v),g?h.parentNode.removeChild(h):(b.parentNode.removeChild(b),ar.style.overflow=o),!!q
},Y=function(a){var f=ay.matchMedia||ay.msMatchMedia;
if(f){return f(a).matches
}var e;
return Z("@media "+a+" { #"+aq+" { position: absolute; } }",function(c){e=(ay.getComputedStyle?getComputedStyle(c,null):c.currentStyle)["position"]=="absolute"
}),e
},X=function(){function c(h,g){g=g||ax.createElement(b[h]||"div"),h="on"+h;
var a=h in g;
return a||(g.setAttribute||(g=ax.createElement("div")),g.setAttribute&&g.removeAttribute&&(g.setAttribute(h,""),a=S(g[h],"function"),S(g[h],"undefined")||(g[h]=aw),g.removeAttribute(h))),g=null,a
}var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return c
}(),W={}.hasOwnProperty,V;
!S(W,"undefined")&&!S(W.call,"undefined")?V=function(d,c){return W.call(d,c)
}:V=function(d,c){return c in d&&S(d.constructor.prototype[c],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;
if(typeof h!="function"){throw new TypeError
}var g=ab.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};
b.prototype=h.prototype;
var d=new b,c=h.apply(d,g.concat(ab.call(arguments)));
return Object(c)===c?c:d
}return h.apply(a,g.concat(ab.call(arguments)))
};
return f
}),af.flexbox=function(){return O("flexWrap")
},af.canvas=function(){var b=ax.createElement("canvas");
return !!b.getContext&&!!b.getContext("2d")
},af.canvastext=function(){return !!au.canvas&&!!S(ax.createElement("canvas").getContext("2d").fillText,"function")
},af.webgl=function(){return !!ay.WebGLRenderingContext
},af.touch=function(){var a;
return"ontouchstart" in ay||ay.DocumentTouch&&ax instanceof DocumentTouch?a=!0:Z(["@media (",ak.join("touch-enabled),("),aq,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=b.offsetTop===9
}),a
},af.geolocation=function(){return"geolocation" in navigator
},af.postmessage=function(){return !!ay.postMessage
},af.websqldatabase=function(){return !!ay.openDatabase
},af.indexedDB=function(){return !!O("indexedDB",ay)
},af.hashchange=function(){return X("hashchange",ay)&&(ax.documentMode===aw||ax.documentMode>7)
},af.history=function(){return !!ay.history&&!!history.pushState
},af.draganddrop=function(){var b=ax.createElement("div");
return"draggable" in b||"ondragstart" in b&&"ondrop" in b
},af.websockets=function(){return"WebSocket" in ay||"MozWebSocket" in ay
},af.rgba=function(){return U("background-color:rgba(150,255,150,.5)"),R(ao.backgroundColor,"rgba")
},af.hsla=function(){return U("background-color:hsla(120,40%,100%,.5)"),R(ao.backgroundColor,"rgba")||R(ao.backgroundColor,"hsla")
},af.multiplebgs=function(){return U("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(ao.background)
},af.backgroundsize=function(){return O("backgroundSize")
},af.borderimage=function(){return O("borderImage")
},af.borderradius=function(){return O("borderRadius")
},af.boxshadow=function(){return O("boxShadow")
},af.textshadow=function(){return ax.createElement("div").style.textShadow===""
},af.opacity=function(){return T("opacity:.55"),/^0.55$/.test(ao.opacity)
},af.cssanimations=function(){return O("animationName")
},af.csscolumns=function(){return O("columnCount")
},af.cssgradients=function(){var e="background-image:",d="gradient(linear,left top,right bottom,from(#9f9),to(white));",f="linear-gradient(left top,#9f9, white);";
return U((e+"-webkit- ".split(" ").join(d+e)+ak.join(f+e)).slice(0,-e.length)),R(ao.backgroundImage,"gradient")
},af.cssreflections=function(){return O("boxReflect")
},af.csstransforms=function(){return !!O("transform")
},af.csstransforms3d=function(){var b=!!O("perspective");
return b&&"webkitPerspective" in ar.style&&Z("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(a,d){b=a.offsetLeft===9&&a.offsetHeight===3
}),b
},af.csstransitions=function(){return O("transition")
},af.fontface=function(){var b;
return Z('@font-face {font-family:"font";src:url("https://")}',function(k,j){var i=ax.getElementById("smodernizr"),h=i.sheet||i.styleSheet,a=h?h.cssRules&&h.cssRules[0]?h.cssRules[0].cssText:h.cssText||"":"";
b=/src/i.test(a)&&a.indexOf(j.split(" ")[0])===0
}),b
},af.generatedcontent=function(){var b;
return Z(["#",aq,"{font:0/0 a}#",aq,':after{content:"',am,'";visibility:hidden;font:3px/1 a}'].join(""),function(a){b=a.offsetHeight>=3
}),b
},af.video=function(){var b=ax.createElement("video"),f=!1;
try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),f.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),f.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")
}}catch(e){}return f
},af.audio=function(){var b=ax.createElement("audio"),f=!1;
try{if(f=!!b.canPlayType){f=new Boolean(f),f.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),f.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),f.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),f.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,"")
}}catch(e){}return f
},af.localstorage=function(){try{return localStorage.setItem(aq,aq),localStorage.removeItem(aq),!0
}catch(b){return !1
}},af.sessionstorage=function(){try{return sessionStorage.setItem(aq,aq),sessionStorage.removeItem(aq),!0
}catch(b){return !1
}},af.webworkers=function(){return !!ay.Worker
},af.applicationcache=function(){return !!ay.applicationCache
},af.svg=function(){return !!ax.createElementNS&&!!ax.createElementNS(ag.svg,"svg").createSVGRect
},af.inlinesvg=function(){var b=ax.createElement("div");
return b.innerHTML="<svg/>",(b.firstChild&&b.firstChild.namespaceURI)==ag.svg
},af.smil=function(){return !!ax.createElementNS&&/SVGAnimate/.test(al.call(ax.createElementNS(ag.svg,"animate")))
},af.svgclippaths=function(){return !!ax.createElementNS&&/SVGClipPath/.test(al.call(ax.createElementNS(ag.svg,"clipPath")))
};
for(var M in af){V(af,M)&&(aa=M.toLowerCase(),au[aa]=af[M](),ac.push((au[aa]?"":"no-")+aa))
}return au.input||N(),au.addTest=function(e,c){if(typeof e=="object"){for(var f in e){V(e,f)&&au.addTest(f,e[f])
}}else{e=e.toLowerCase();
if(au[e]!==aw){return au
}c=typeof c=="function"?c():c,typeof at!="undefined"&&at&&(ar.className+=" "+(c?"":"no-")+e),au[e]=c
}return au
},U(""),ap=an=null,function(L,K){function A(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;
return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)
}function z(){var b=t.elements;
return typeof b=="string"?b.split(" "):b
}function y(d){var c=C[d[E]];
return c||(c={},D++,d[E]=D,C[D]=c),c
}function x(b,h,f){h||(h=K);
if(B){return h.createElement(b)
}f||(f=y(h));
var e;
return f.cache[b]?e=f.cache[b].cloneNode():G.test(b)?e=(f.cache[b]=f.createElem(b)).cloneNode():e=f.createElem(b),e.canHaveChildren&&!H.test(b)&&!e.tagUrn?f.frag.appendChild(e):e
}function w(b,l){b||(b=K);
if(B){return b.createDocumentFragment()
}l=l||y(b);
var k=l.frag.cloneNode(),j=0,i=z(),h=i.length;
for(;
j<h;
j++){k.createElement(i[j])
}return k
}function v(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return t.shivMethods?x(a,d,c):c.createElem(a)
},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+z().join().replace(/[\w\-]+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'
})+");return n}")(t,c.frag)
}function u(b){b||(b=K);
var d=y(b);
return t.shivCSS&&!F&&!d.hasCSS&&(d.hasCSS=!!A(b,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),B||v(b,d),b
}var J="3.7.0",I=L.html5||{},H=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,G=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,F,E="_html5shiv",D=0,C={},B;
(function(){try{var b=K.createElement("a");
b.innerHTML="<xyz></xyz>",F="hidden" in b,B=b.childNodes.length==1||function(){K.createElement("a");
var c=K.createDocumentFragment();
return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"
}()
}catch(d){F=!0,B=!0
}})();
var t={elements:I.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:J,shivCSS:I.shivCSS!==!1,supportsUnknownElements:B,shivMethods:I.shivMethods!==!1,type:"default",shivDocument:u,createElement:x,createDocumentFragment:w};
L.html5=t,u(K)
}(this,ax),au._version=av,au._prefixes=ak,au._domPrefixes=ah,au._cssomPrefixes=ai,au.mq=Y,au.hasEvent=X,au.testProp=function(b){return Q([b])
},au.testAllProps=O,au.testStyles=Z,au.prefixed=function(e,d,f){return d?O(e,d,f):O(e,"pfx")
},ar.className=ar.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(at?" js "+ac.join(" "):""),au
}(this,this.document),function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)
}function Z(b){return"string"==typeof b
}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b
}function W(){var b=O.shift();
M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)
},0):(b(),W()):M=0
}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)
},50);
for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()
}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};
1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)
},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))
}function U(g,e,j,i,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&W()),this
}function T(){var b=L;
return b.loader={load:U,i:0},b
}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)
},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d
}},N,L;
L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;
for(l=0;
l<p;
l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))
}for(l=0;
l<h;
l++){q=E[l](q)
}return q
}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;
o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=aa(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(s)||aa(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2
})))
}function m(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}),n(b,r,v,0,t)
}else{if(Object(b)===b){for(g in o=function(){var a=0,i;
for(i in b){b.hasOwnProperty(i)&&a++
}return a
}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var i=[].slice.call(arguments);
q.apply(this,i),p()
}:r[g]=function(i){return function(){var a=[].slice.call(arguments);
i&&i.apply(this,a),p()
}
}(q[g])),n(b[g],r,v,g,t))
}}}}else{!h&&p()
}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;
u(t?w.yep:w.nope,!!s),s&&u(s)
}var k,f,d=this.yepnope.loader;
if(Z(e)){n(e,0,d,0)
}else{if(F(e)){for(k=0;
k<e.length;
k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)
}}else{Object(e)===e&&m(e,d)
}}},L.addPrefix=function(d,c){C[d]=c
},L.addFilter=function(b){E.push(b)
},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"
},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;
g.src=r;
for(b in p){g.setAttribute(b,p[b])
}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)
},R(function(){f||(f=1,q(1))
},n),m?g.onload():Q.parentNode.insertBefore(g,Q)
},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;
l.href=b,l.rel="stylesheet",l.type="text/css";
for(f in m){l.setAttribute(f,m[f])
}k||(Q.parentNode.insertBefore(l,Q),R(n,0))
}
}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
};
var Handlebars={};
(function(d,c){d.VERSION="1.0.0";
d.COMPILER_REVISION=4;
d.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};
d.helpers={};
d.partials={};
var n=Object.prototype.toString,b="[object Function]",h="[object Object]";
d.registerHelper=function(l,u,i){if(n.call(l)===h){if(i||u){throw new d.Exception("Arg not supported with multiple helpers")
}d.Utils.extend(this.helpers,l)
}else{if(i){u.not=i
}this.helpers[l]=u
}};
d.registerPartial=function(i,l){if(n.call(i)===h){d.Utils.extend(this.partials,i)
}else{this.partials[i]=l
}};
d.registerHelper("helperMissing",function(i){if(arguments.length===2){return c
}else{throw new Error("Missing helper: '"+i+"'")
}});
d.registerHelper("blockHelperMissing",function(u,l){var i=l.inverse||function(){},w=l.fn;
var v=n.call(u);
if(v===b){u=u.call(this)
}if(u===true){return w(this)
}else{if(u===false||u==null){return i(this)
}else{if(v==="[object Array]"){if(u.length>0){return d.helpers.each(u,l)
}else{return i(this)
}}else{return w(u)
}}}});
d.K=function(){};
d.createFrame=Object.create||function(i){d.K.prototype=i;
var l=new d.K();
d.K.prototype=null;
return l
};
d.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(u,i){if(d.logger.level<=u){var l=d.logger.methodMap[u];
if(typeof console!=="undefined"&&console[l]){console[l].call(console,i)
}}}};
d.log=function(l,i){d.logger.log(l,i)
};
d.registerHelper("each",function(l,C){var A=C.fn,v=C.inverse;
var x=0,y="",w;
var z=n.call(l);
if(z===b){l=l.call(this)
}if(C.data){w=d.createFrame(C.data)
}if(l&&typeof l==="object"){if(l instanceof Array){for(var u=l.length;
x<u;
x++){if(w){w.index=x
}y=y+A(l[x],{data:w})
}}else{for(var B in l){if(l.hasOwnProperty(B)){if(w){w.key=B
}y=y+A(l[B],{data:w});
x++
}}}}if(x===0){y=v(this)
}return y
});
d.registerHelper("if",function(l,i){var u=n.call(l);
if(u===b){l=l.call(this)
}if(!l||d.Utils.isEmpty(l)){return i.inverse(this)
}else{return i.fn(this)
}});
d.registerHelper("unless",function(l,i){return d.helpers["if"].call(this,l,{fn:i.inverse,inverse:i.fn})
});
d.registerHelper("with",function(l,i){var u=n.call(l);
if(u===b){l=l.call(this)
}if(!d.Utils.isEmpty(l)){return i.fn(l)
}});
d.registerHelper("log",function(l,i){var u=i.data&&i.data.level!=null?parseInt(i.data.level,10):1;
d.log(u,l)
});
var r=(function(){var y={trace:function u(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,simpleInverse:6,statements:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,params:27,hash:28,dataName:29,param:30,STRING:31,INTEGER:32,BOOLEAN:33,hashSegments:34,hashSegment:35,ID:36,EQUALS:37,DATA:38,pathSegments:39,SEP:40,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",31:"STRING",32:"INTEGER",33:"BOOLEAN",36:"ID",37:"EQUALS",38:"DATA",40:"SEP"},productions_:[0,[3,2],[4,2],[4,3],[4,2],[4,1],[4,1],[4,0],[7,1],[7,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[6,2],[17,3],[17,2],[17,2],[17,1],[17,1],[27,2],[27,1],[30,1],[30,1],[30,1],[30,1],[30,1],[28,1],[34,2],[34,1],[35,3],[35,3],[35,3],[35,3],[35,3],[26,1],[26,1],[26,1],[29,2],[21,1],[39,3],[39,1]],performAction:function l(z,C,D,G,F,B,E){var A=B.length-1;
switch(F){case 1:return B[A-1];
break;
case 2:this.$=new G.ProgramNode([],B[A]);
break;
case 3:this.$=new G.ProgramNode(B[A-2],B[A]);
break;
case 4:this.$=new G.ProgramNode(B[A-1],[]);
break;
case 5:this.$=new G.ProgramNode(B[A]);
break;
case 6:this.$=new G.ProgramNode([],[]);
break;
case 7:this.$=new G.ProgramNode([]);
break;
case 8:this.$=[B[A]];
break;
case 9:B[A-1].push(B[A]);
this.$=B[A-1];
break;
case 10:this.$=new G.BlockNode(B[A-2],B[A-1].inverse,B[A-1],B[A]);
break;
case 11:this.$=new G.BlockNode(B[A-2],B[A-1],B[A-1].inverse,B[A]);
break;
case 12:this.$=B[A];
break;
case 13:this.$=B[A];
break;
case 14:this.$=new G.ContentNode(B[A]);
break;
case 15:this.$=new G.CommentNode(B[A]);
break;
case 16:this.$=new G.MustacheNode(B[A-1][0],B[A-1][1]);
break;
case 17:this.$=new G.MustacheNode(B[A-1][0],B[A-1][1]);
break;
case 18:this.$=B[A-1];
break;
case 19:this.$=new G.MustacheNode(B[A-1][0],B[A-1][1],B[A-2][2]==="&");
break;
case 20:this.$=new G.MustacheNode(B[A-1][0],B[A-1][1],true);
break;
case 21:this.$=new G.PartialNode(B[A-1]);
break;
case 22:this.$=new G.PartialNode(B[A-2],B[A-1]);
break;
case 23:break;
case 24:this.$=[[B[A-2]].concat(B[A-1]),B[A]];
break;
case 25:this.$=[[B[A-1]].concat(B[A]),null];
break;
case 26:this.$=[[B[A-1]],B[A]];
break;
case 27:this.$=[[B[A]],null];
break;
case 28:this.$=[[B[A]],null];
break;
case 29:B[A-1].push(B[A]);
this.$=B[A-1];
break;
case 30:this.$=[B[A]];
break;
case 31:this.$=B[A];
break;
case 32:this.$=new G.StringNode(B[A]);
break;
case 33:this.$=new G.IntegerNode(B[A]);
break;
case 34:this.$=new G.BooleanNode(B[A]);
break;
case 35:this.$=B[A];
break;
case 36:this.$=new G.HashNode(B[A]);
break;
case 37:B[A-1].push(B[A]);
this.$=B[A-1];
break;
case 38:this.$=[B[A]];
break;
case 39:this.$=[B[A-2],B[A]];
break;
case 40:this.$=[B[A-2],new G.StringNode(B[A])];
break;
case 41:this.$=[B[A-2],new G.IntegerNode(B[A])];
break;
case 42:this.$=[B[A-2],new G.BooleanNode(B[A])];
break;
case 43:this.$=[B[A-2],B[A]];
break;
case 44:this.$=new G.PartialNameNode(B[A]);
break;
case 45:this.$=new G.PartialNameNode(new G.StringNode(B[A]));
break;
case 46:this.$=new G.PartialNameNode(new G.IntegerNode(B[A]));
break;
case 47:this.$=new G.DataNode(B[A]);
break;
case 48:this.$=new G.IdNode(B[A]);
break;
case 49:B[A-2].push({part:B[A],separator:B[A-1]});
this.$=B[A-2];
break;
case 50:this.$=[{part:B[A]}];
break
}},table:[{3:1,4:2,5:[2,7],6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],22:[1,14],23:[1,15],25:[1,16]},{1:[3]},{5:[1,17]},{5:[2,6],7:18,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,6],22:[1,14],23:[1,15],25:[1,16]},{5:[2,5],6:20,8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,5],22:[1,14],23:[1,15],25:[1,16]},{17:23,18:[1,22],21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],25:[2,8]},{4:29,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{4:30,6:3,7:4,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,5],20:[2,7],22:[1,14],23:[1,15],25:[1,16]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{17:31,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:32,21:24,29:25,36:[1,28],38:[1,27],39:26},{17:33,21:24,29:25,36:[1,28],38:[1,27],39:26},{21:35,26:34,31:[1,36],32:[1,37],36:[1,28],39:26},{1:[2,1]},{5:[2,2],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,2],22:[1,14],23:[1,15],25:[1,16]},{17:23,21:24,29:25,36:[1,28],38:[1,27],39:26},{5:[2,4],7:38,8:6,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,4],22:[1,14],23:[1,15],25:[1,16]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{5:[2,23],14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{18:[1,39]},{18:[2,27],21:44,24:[2,27],27:40,28:41,29:48,30:42,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,28],24:[2,28]},{18:[2,48],24:[2,48],31:[2,48],32:[2,48],33:[2,48],36:[2,48],38:[2,48],40:[1,51]},{21:52,36:[1,28],39:26},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],38:[2,50],40:[2,50]},{10:53,20:[1,54]},{10:55,20:[1,54]},{18:[1,56]},{18:[1,57]},{24:[1,58]},{18:[1,59],21:60,36:[1,28],39:26},{18:[2,44],36:[2,44]},{18:[2,45],36:[2,45]},{18:[2,46],36:[2,46]},{5:[2,3],8:21,9:7,11:8,12:9,13:10,14:[1,11],15:[1,12],16:[1,13],19:[1,19],20:[2,3],22:[1,14],23:[1,15],25:[1,16]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{18:[2,25],21:44,24:[2,25],28:61,29:48,30:62,31:[1,45],32:[1,46],33:[1,47],34:43,35:49,36:[1,50],38:[1,27],39:26},{18:[2,26],24:[2,26]},{18:[2,30],24:[2,30],31:[2,30],32:[2,30],33:[2,30],36:[2,30],38:[2,30]},{18:[2,36],24:[2,36],35:63,36:[1,64]},{18:[2,31],24:[2,31],31:[2,31],32:[2,31],33:[2,31],36:[2,31],38:[2,31]},{18:[2,32],24:[2,32],31:[2,32],32:[2,32],33:[2,32],36:[2,32],38:[2,32]},{18:[2,33],24:[2,33],31:[2,33],32:[2,33],33:[2,33],36:[2,33],38:[2,33]},{18:[2,34],24:[2,34],31:[2,34],32:[2,34],33:[2,34],36:[2,34],38:[2,34]},{18:[2,35],24:[2,35],31:[2,35],32:[2,35],33:[2,35],36:[2,35],38:[2,35]},{18:[2,38],24:[2,38],36:[2,38]},{18:[2,50],24:[2,50],31:[2,50],32:[2,50],33:[2,50],36:[2,50],37:[1,65],38:[2,50],40:[2,50]},{36:[1,66]},{18:[2,47],24:[2,47],31:[2,47],32:[2,47],33:[2,47],36:[2,47],38:[2,47]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{21:67,36:[1,28],39:26},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,68]},{18:[2,24],24:[2,24]},{18:[2,29],24:[2,29],31:[2,29],32:[2,29],33:[2,29],36:[2,29],38:[2,29]},{18:[2,37],24:[2,37],36:[2,37]},{37:[1,65]},{21:69,29:73,31:[1,70],32:[1,71],33:[1,72],36:[1,28],38:[1,27],39:26},{18:[2,49],24:[2,49],31:[2,49],32:[2,49],33:[2,49],36:[2,49],38:[2,49],40:[2,49]},{18:[1,74]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{18:[2,39],24:[2,39],36:[2,39]},{18:[2,40],24:[2,40],36:[2,40]},{18:[2,41],24:[2,41],36:[2,41]},{18:[2,42],24:[2,42],36:[2,42]},{18:[2,43],24:[2,43],36:[2,43]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]}],defaultActions:{17:[2,1]},parseError:function v(A,z){throw new Error(A)
},parse:function x(I){var P=this,F=[0],Y=[null],K=[],Z=this.table,A="",J=0,W=0,C=0,H=2,M=1;
this.lexer.setInput(I);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var B=this.lexer.yylloc;
K.push(B);
var D=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function O(ab){F.length=F.length-2*ab;
Y.length=Y.length-ab;
K.length=K.length-ab
}function N(){var ab;
ab=P.lexer.lex()||1;
if(typeof ab!=="number"){ab=P.symbols_[ab]||ab
}return ab
}var V,R,E,U,aa,L,T={},Q,X,z,G;
while(true){E=F[F.length-1];
if(this.defaultActions[E]){U=this.defaultActions[E]
}else{if(V===null||typeof V=="undefined"){V=N()
}U=Z[E]&&Z[E][V]
}if(typeof U==="undefined"||!U.length||!U[0]){var S="";
if(!C){G=[];
for(Q in Z[E]){if(this.terminals_[Q]&&Q>2){G.push("'"+this.terminals_[Q]+"'")
}}if(this.lexer.showPosition){S="Parse error on line "+(J+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+G.join(", ")+", got '"+(this.terminals_[V]||V)+"'"
}else{S="Parse error on line "+(J+1)+": Unexpected "+(V==1?"end of input":"'"+(this.terminals_[V]||V)+"'")
}this.parseError(S,{text:this.lexer.match,token:this.terminals_[V]||V,line:this.lexer.yylineno,loc:B,expected:G})
}}if(U[0] instanceof Array&&U.length>1){throw new Error("Parse Error: multiple actions possible at state: "+E+", token: "+V)
}switch(U[0]){case 1:F.push(V);
Y.push(this.lexer.yytext);
K.push(this.lexer.yylloc);
F.push(U[1]);
V=null;
if(!R){W=this.lexer.yyleng;
A=this.lexer.yytext;
J=this.lexer.yylineno;
B=this.lexer.yylloc;
if(C>0){C--
}}else{V=R;
R=null
}break;
case 2:X=this.productions_[U[1]][1];
T.$=Y[Y.length-X];
T._$={first_line:K[K.length-(X||1)].first_line,last_line:K[K.length-1].last_line,first_column:K[K.length-(X||1)].first_column,last_column:K[K.length-1].last_column};
if(D){T._$.range=[K[K.length-(X||1)].range[0],K[K.length-1].range[1]]
}L=this.performAction.call(T,A,W,J,this.yy,U[1],Y,K);
if(typeof L!=="undefined"){return L
}if(X){F=F.slice(0,-1*X*2);
Y=Y.slice(0,-1*X);
K=K.slice(0,-1*X)
}F.push(this.productions_[U[1]][0]);
Y.push(T.$);
K.push(T._$);
z=Z[F[F.length-2]][F[F.length-1]];
F.push(z);
break;
case 3:return true
}}return true
}};
var i=(function(){var C=({EOF:1,parseError:function E(H,G){if(this.yy.parser){this.yy.parser.parseError(H,G)
}else{throw new Error(H)
}},setInput:function(G){this._input=G;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function(){var H=this._input[0];
this.yytext+=H;
this.yyleng++;
this.offset++;
this.match+=H;
this.matched+=H;
var G=H.match(/(?:\r\n?|\n).*/g);
if(G){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return H
},unput:function(I){var G=I.length;
var H=I.split(/(?:\r\n?|\n)/g);
this._input=I+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-G-1);
this.offset-=G;
var K=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(H.length-1){this.yylineno-=H.length-1
}var J=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:H?(H.length===K.length?this.yylloc.first_column:0)+K[K.length-H.length].length-H[0].length:this.yylloc.first_column-G};
if(this.options.ranges){this.yylloc.range=[J[0],J[0]+this.yyleng-G]
}return this
},more:function(){this._more=true;
return this
},less:function(G){this.unput(this.match.slice(G))
},pastInput:function(){var G=this.matched.substr(0,this.matched.length-this.match.length);
return(G.length>20?"...":"")+G.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var G=this.match;
if(G.length<20){G+=this._input.substr(0,20-G.length)
}return(G.substr(0,20)+(G.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var G=this.pastInput();
var H=new Array(G.length+1).join("-");
return G+this.upcomingInput()+"\n"+H+"^"
},next:function(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var M,K,H,J,I,G;
if(!this._more){this.yytext="";
this.match=""
}var N=this._currentRules();
for(var L=0;
L<N.length;
L++){H=this._input.match(this.rules[N[L]]);
if(H&&(!K||H[0].length>K[0].length)){K=H;
J=L;
if(!this.options.flex){break
}}}if(K){G=K[0].match(/(?:\r\n?|\n).*/g);
if(G){this.yylineno+=G.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:G?G[G.length-1].length-G[G.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+K[0].length};
this.yytext+=K[0];
this.match+=K[0];
this.matches=K;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(K[0].length);
this.matched+=K[0];
M=this.performAction.call(this,this.yy,this,N[J],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(M){return M
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function z(){var G=this.next();
if(typeof G!=="undefined"){return G
}else{return this.lex()
}},begin:function A(G){this.conditionStack.push(G)
},popState:function F(){return this.conditionStack.pop()
},_currentRules:function D(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function A(G){this.begin(G)
}});
C.options={};
C.performAction=function B(K,H,J,G){var I=G;
switch(J){case 0:H.yytext="\\";
return 14;
break;
case 1:if(H.yytext.slice(-1)!=="\\"){this.begin("mu")
}if(H.yytext.slice(-1)==="\\"){H.yytext=H.yytext.substr(0,H.yyleng-1),this.begin("emu")
}if(H.yytext){return 14
}break;
case 2:return 14;
break;
case 3:if(H.yytext.slice(-1)!=="\\"){this.popState()
}if(H.yytext.slice(-1)==="\\"){H.yytext=H.yytext.substr(0,H.yyleng-1)
}return 14;
break;
case 4:H.yytext=H.yytext.substr(0,H.yyleng-4);
this.popState();
return 15;
break;
case 5:return 25;
break;
case 6:return 16;
break;
case 7:return 20;
break;
case 8:return 19;
break;
case 9:return 19;
break;
case 10:return 23;
break;
case 11:return 22;
break;
case 12:this.popState();
this.begin("com");
break;
case 13:H.yytext=H.yytext.substr(3,H.yyleng-5);
this.popState();
return 15;
break;
case 14:return 22;
break;
case 15:return 37;
break;
case 16:return 36;
break;
case 17:return 36;
break;
case 18:return 40;
break;
case 19:break;
case 20:this.popState();
return 24;
break;
case 21:this.popState();
return 18;
break;
case 22:H.yytext=H.yytext.substr(1,H.yyleng-2).replace(/\\"/g,'"');
return 31;
break;
case 23:H.yytext=H.yytext.substr(1,H.yyleng-2).replace(/\\'/g,"'");
return 31;
break;
case 24:return 38;
break;
case 25:return 33;
break;
case 26:return 33;
break;
case 27:return 32;
break;
case 28:return 36;
break;
case 29:H.yytext=H.yytext.substr(1,H.yyleng-2);
return 36;
break;
case 30:return"INVALID";
break;
case 31:return 5;
break
}};
C.rules=[/^(?:\\\\(?=(\{\{)))/,/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[}\/ ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:-?[0-9]+(?=[}\s]))/,/^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
C.conditions={mu:{rules:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],inclusive:false},emu:{rules:[3],inclusive:false},com:{rules:[4],inclusive:false},INITIAL:{rules:[0,1,2,31],inclusive:true}};
return C
})();
y.lexer=i;
function w(){this.yy={}
}w.prototype=y;
y.Parser=w;
return new w
})();
d.Parser=r;
d.parse=function(i){if(i.constructor===d.AST.ProgramNode){return i
}d.Parser.yy=d.AST;
return d.Parser.parse(i)
};
d.AST={};
d.AST.ProgramNode=function(l,i){this.type="program";
this.statements=l;
if(i){this.inverse=new d.AST.ProgramNode(i)
}};
d.AST.MustacheNode=function(x,u,l){this.type="mustache";
this.escaped=!l;
this.hash=u;
var w=this.id=x[0];
var v=this.params=x.slice(1);
var i=this.eligibleHelper=w.isSimple;
this.isHelper=i&&(v.length||u)
};
d.AST.PartialNode=function(i,l){this.type="partial";
this.partialName=i;
this.context=l
};
d.AST.BlockNode=function(u,l,i,w){var v=function(x,y){if(x.original!==y.original){throw new d.Exception(x.original+" doesn't match "+y.original)
}};
v(u.id,w);
this.type="block";
this.mustache=u;
this.program=l;
this.inverse=i;
if(this.inverse&&!this.program){this.isInverse=true
}};
d.AST.ContentNode=function(i){this.type="content";
this.string=i
};
d.AST.HashNode=function(i){this.type="hash";
this.pairs=i
};
d.AST.IdNode=function(z){this.type="ID";
var y="",w=[],A=0;
for(var x=0,u=z.length;
x<u;
x++){var v=z[x].part;
y+=(z[x].separator||"")+v;
if(v===".."||v==="."||v==="this"){if(w.length>0){throw new d.Exception("Invalid path: "+y)
}else{if(v===".."){A++
}else{this.isScoped=true
}}}else{w.push(v)
}}this.original=y;
this.parts=w;
this.string=w.join(".");
this.depth=A;
this.isSimple=z.length===1&&!this.isScoped&&A===0;
this.stringModeValue=this.string
};
d.AST.PartialNameNode=function(i){this.type="PARTIAL_NAME";
this.name=i.original
};
d.AST.DataNode=function(i){this.type="DATA";
this.id=i
};
d.AST.StringNode=function(i){this.type="STRING";
this.original=this.string=this.stringModeValue=i
};
d.AST.IntegerNode=function(i){this.type="INTEGER";
this.original=this.integer=i;
this.stringModeValue=Number(i)
};
d.AST.BooleanNode=function(i){this.type="BOOLEAN";
this.bool=i;
this.stringModeValue=i==="true"
};
d.AST.CommentNode=function(i){this.type="comment";
this.comment=i
};
var q=["description","fileName","lineNumber","message","name","number","stack"];
d.Exception=function(u){var l=Error.prototype.constructor.apply(this,arguments);
for(var i=0;
i<q.length;
i++){this[q[i]]=l[q[i]]
}};
d.Exception.prototype=new Error();
d.SafeString=function(i){this.string=i
};
d.SafeString.prototype.toString=function(){return this.string.toString()
};
var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var e=/[&<>"'`]/g;
var p=/[&<>"'`]/;
var t=function(i){return k[i]||"&amp;"
};
d.Utils={extend:function(u,l){for(var i in l){if(l.hasOwnProperty(i)){u[i]=l[i]
}}},escapeExpression:function(i){if(i instanceof d.SafeString){return i.toString()
}else{if(i==null||i===false){return""
}}i=i.toString();
if(!p.test(i)){return i
}return i.replace(e,t)
},isEmpty:function(i){if(!i&&i!==0){return true
}else{if(n.call(i)==="[object Array]"&&i.length===0){return true
}else{return false
}}}};
var j=d.Compiler=function(){};
var g=d.JavaScriptCompiler=function(){};
j.prototype={compiler:j,disassemble:function(){var z=this.opcodes,y,w=[],B,A;
for(var x=0,u=z.length;
x<u;
x++){y=z[x];
if(y.opcode==="DECLARE"){w.push("DECLARE "+y.name+"="+y.value)
}else{B=[];
for(var v=0;
v<y.args.length;
v++){A=y.args[v];
if(typeof A==="string"){A='"'+A.replace("\n","\\n")+'"'
}B.push(A)
}w.push(y.opcode+" "+B.join(" "))
}}return w.join("\n")
},equals:function(u){var l=this.opcodes.length;
if(u.opcodes.length!==l){return false
}for(var x=0;
x<l;
x++){var y=this.opcodes[x],v=u.opcodes[x];
if(y.opcode!==v.opcode||y.args.length!==v.args.length){return false
}for(var w=0;
w<y.args.length;
w++){if(y.args[w]!==v.args[w]){return false
}}}l=this.children.length;
if(u.children.length!==l){return false
}for(x=0;
x<l;
x++){if(!this.children[x].equals(u.children[x])){return false
}}return true
},guid:0,compile:function(i,u){this.children=[];
this.depths={list:[]};
this.options=u;
var v=this.options.knownHelpers;
this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};
if(v){for(var l in v){this.options.knownHelpers[l]=v[l]
}}return this.program(i)
},accept:function(i){return this[i.type](i)
},program:function(w){var v=w.statements,y;
this.opcodes=[];
for(var x=0,u=v.length;
x<u;
x++){y=v[x];
this[y.type](y)
}this.isSimple=u===1;
this.depths.list=this.depths.list.sort(function(l,i){return l-i
});
return this
},compileProgram:function(w){var u=new this.compiler().compile(w,this.options);
var x=this.guid++,z;
this.usePartial=this.usePartial||u.usePartial;
this.children[x]=u;
for(var y=0,v=u.depths.list.length;
y<v;
y++){z=u.depths.list[y];
if(z<2){continue
}else{this.addDepth(z-1)
}}return x
},block:function(w){var v=w.mustache,l=w.program,i=w.inverse;
if(l){l=this.compileProgram(l)
}if(i){i=this.compileProgram(i)
}var u=this.classifyMustache(v);
if(u==="helper"){this.helperMustache(v,l,i)
}else{if(u==="simple"){this.simpleMustache(v);
this.opcode("pushProgram",l);
this.opcode("pushProgram",i);
this.opcode("emptyHash");
this.opcode("blockValue")
}else{this.ambiguousMustache(v,l,i);
this.opcode("pushProgram",l);
this.opcode("pushProgram",i);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},hash:function(x){var w=x.pairs,z,y;
this.opcode("pushHash");
for(var v=0,u=w.length;
v<u;
v++){z=w[v];
y=z[1];
if(this.options.stringParams){if(y.depth){this.addDepth(y.depth)
}this.opcode("getContext",y.depth||0);
this.opcode("pushStringParam",y.stringModeValue,y.type)
}else{this.accept(y)
}this.opcode("assignToHash",z[0])
}this.opcode("popHash")
},partial:function(i){var l=i.partialName;
this.usePartial=true;
if(i.context){this.ID(i.context)
}else{this.opcode("push","depth0")
}this.opcode("invokePartial",l.name);
this.opcode("append")
},content:function(i){this.opcode("appendContent",i.string)
},mustache:function(u){var i=this.options;
var l=this.classifyMustache(u);
if(l==="simple"){this.simpleMustache(u)
}else{if(l==="helper"){this.helperMustache(u)
}else{this.ambiguousMustache(u)
}}if(u.escaped&&!i.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},ambiguousMustache:function(w,u,l){var x=w.id,v=x.parts[0],i=u!=null||l!=null;
this.opcode("getContext",x.depth);
this.opcode("pushProgram",u);
this.opcode("pushProgram",l);
this.opcode("invokeAmbiguous",v,i)
},simpleMustache:function(i){var l=i.id;
if(l.type==="DATA"){this.DATA(l)
}else{if(l.parts.length){this.ID(l)
}else{this.addDepth(l.depth);
this.opcode("getContext",l.depth);
this.opcode("pushContext")
}}this.opcode("resolvePossibleLambda")
},helperMustache:function(v,l,i){var w=this.setupFullMustacheParams(v,l,i),u=v.id.parts[0];
if(this.options.knownHelpers[u]){this.opcode("invokeKnownHelper",w.length,u)
}else{if(this.options.knownHelpersOnly){throw new Error("You specified knownHelpersOnly, but used the unknown helper "+u)
}else{this.opcode("invokeHelper",w.length,u)
}}},ID:function(x){this.addDepth(x.depth);
this.opcode("getContext",x.depth);
var v=x.parts[0];
if(!v){this.opcode("pushContext")
}else{this.opcode("lookupOnContext",x.parts[0])
}for(var w=1,u=x.parts.length;
w<u;
w++){this.opcode("lookup",x.parts[w])
}},DATA:function(w){this.options.data=true;
if(w.id.isScoped||w.id.depth){throw new d.Exception("Scoped data references are not supported: "+w.original)
}this.opcode("lookupData");
var x=w.id.parts;
for(var v=0,u=x.length;
v<u;
v++){this.opcode("lookup",x[v])
}},STRING:function(i){this.opcode("pushString",i.string)
},INTEGER:function(i){this.opcode("pushLiteral",i.integer)
},BOOLEAN:function(i){this.opcode("pushLiteral",i.bool)
},comment:function(){},opcode:function(i){this.opcodes.push({opcode:i,args:[].slice.call(arguments,1)})
},declare:function(i,l){this.opcodes.push({opcode:"DECLARE",name:i,value:l})
},addDepth:function(i){if(isNaN(i)){throw new Error("EWOT")
}if(i===0){return
}if(!this.depths[i]){this.depths[i]=true;
this.depths.list.push(i)
}},classifyMustache:function(v){var u=v.isHelper;
var w=v.eligibleHelper;
var l=this.options;
if(w&&!u){var i=v.id.parts[0];
if(l.knownHelpers[i]){u=true
}else{if(l.knownHelpersOnly){w=false
}}}if(u){return"helper"
}else{if(w){return"ambiguous"
}else{return"simple"
}}},pushParams:function(v){var l=v.length,u;
while(l--){u=v[l];
if(this.options.stringParams){if(u.depth){this.addDepth(u.depth)
}this.opcode("getContext",u.depth||0);
this.opcode("pushStringParam",u.stringModeValue,u.type)
}else{this[u.type](u)
}}},setupMustacheParams:function(i){var l=i.params;
this.pushParams(l);
if(i.hash){this.hash(i.hash)
}else{this.opcode("emptyHash")
}return l
},setupFullMustacheParams:function(u,l,i){var v=u.params;
this.pushParams(v);
this.opcode("pushProgram",l);
this.opcode("pushProgram",i);
if(u.hash){this.hash(u.hash)
}else{this.opcode("emptyHash")
}return v
}};
var s=function(i){this.value=i
};
g.prototype={nameLookup:function(l,i){if(/^[0-9]+$/.test(i)){return l+"["+i+"]"
}else{if(g.isValidJavaScriptVariableName(i)){return l+"."+i
}else{return l+"['"+i+"']"
}}},appendToBuffer:function(i){if(this.environment.isSimple){return"return "+i+";"
}else{return{appendToBuffer:true,content:i,toString:function(){return"buffer += "+i+";"
}}
}},initializeBuffer:function(){return this.quotedString("")
},namespace:"Handlebars",compile:function(i,l,v,u){this.environment=i;
this.options=l||{};
d.log(d.logger.DEBUG,this.environment.disassemble()+"\n\n");
this.name=this.environment.name;
this.isChild=!!v;
this.context=v||{programs:[],environments:[],aliases:{}};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.registers={list:[]};
this.compileStack=[];
this.inlineStack=[];
this.compileChildren(i,l);
var x=i.opcodes,w;
this.i=0;
for(m=x.length;
this.i<m;
this.i++){w=x[this.i];
if(w.opcode==="DECLARE"){this[w.name]=w.value
}else{this[w.opcode].apply(this,w.args)
}}return this.createFunctionContext(u)
},nextOpcode:function(){var i=this.environment.opcodes;
return i[this.i+1]
},eat:function(){this.i=this.i+1
},preamble:function(){var i=[];
if(!this.isChild){var l=this.namespace;
var u="helpers = this.merge(helpers, "+l+".helpers);";
if(this.environment.usePartial){u=u+" partials = this.merge(partials, "+l+".partials);"
}if(this.options.data){u=u+" data = data || {};"
}i.push(u)
}else{i.push("")
}if(!this.environment.isSimple){i.push(", buffer = "+this.initializeBuffer())
}else{i.push("")
}this.lastContext=0;
this.source=i
},createFunctionContext:function(B){var w=this.stackVars.concat(this.registers.list);
if(w.length>0){this.source[1]=this.source[1]+", "+w.join(", ")
}if(!this.isChild){for(var A in this.context.aliases){if(this.context.aliases.hasOwnProperty(A)){this.source[1]=this.source[1]+", "+A+"="+this.context.aliases[A]
}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"
}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"
}if(!this.environment.isSimple){this.source.push("return buffer;")
}var y=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];
for(var z=0,x=this.environment.depths.list.length;
z<x;
z++){y.push("depth"+this.environment.depths.list[z])
}var u=this.mergeSource();
if(!this.isChild){var C=d.COMPILER_REVISION,v=d.REVISION_CHANGES[C];
u="this.compilerInfo = ["+C+",'"+v+"'];\n"+u
}if(B){y.push(u);
return Function.apply(this,y)
}else{var D="function "+(this.name||"")+"("+y.join(",")+") {\n  "+u+"}";
d.log(d.logger.DEBUG,D+"\n\n");
return D
}},mergeSource:function(){var x="",v;
for(var w=0,l=this.source.length;
w<l;
w++){var u=this.source[w];
if(u.appendToBuffer){if(v){v=v+"\n    + "+u.content
}else{v=u.content
}}else{if(v){x+="buffer += "+v+";\n  ";
v=c
}x+=u+"\n  "
}}return x
},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var i=["depth0"];
this.setupParams(0,i);
this.replaceStack(function(l){i.splice(1,0,l);
return"blockHelperMissing.call("+i.join(", ")+")"
})
},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var l=["depth0"];
this.setupParams(0,l);
var i=this.topStack();
l.splice(1,0,i);
l[l.length-1]="options";
this.source.push("if (!"+this.lastHelper+") { "+i+" = blockHelperMissing.call("+l.join(", ")+"); }")
},appendContent:function(i){this.source.push(this.appendToBuffer(this.quotedString(i)))
},append:function(){this.flushInline();
var i=this.popStack();
this.source.push("if("+i+" || "+i+" === 0) { "+this.appendToBuffer(i)+" }");
if(this.environment.isSimple){this.source.push("else { "+this.appendToBuffer("''")+" }")
}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";
this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"))
},getContext:function(i){if(this.lastContext!==i){this.lastContext=i
}},lookupOnContext:function(i){this.push(this.nameLookup("depth"+this.lastContext,i,"context"))
},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)
},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';
this.replaceStack(function(i){return"typeof "+i+" === functionType ? "+i+".apply(depth0) : "+i
})
},lookup:function(i){this.replaceStack(function(l){return l+" == null || "+l+" === false ? "+l+" : "+this.nameLookup(l,i,"context")
})
},lookupData:function(i){this.push("data")
},pushStringParam:function(i,l){this.pushStackLiteral("depth"+this.lastContext);
this.pushString(l);
if(typeof i==="string"){this.pushString(i)
}else{this.pushStackLiteral(i)
}},emptyHash:function(){this.pushStackLiteral("{}");
if(this.options.stringParams){this.register("hashTypes","{}");
this.register("hashContexts","{}")
}},pushHash:function(){this.hash={values:[],types:[],contexts:[]}
},popHash:function(){var i=this.hash;
this.hash=c;
if(this.options.stringParams){this.register("hashContexts","{"+i.contexts.join(",")+"}");
this.register("hashTypes","{"+i.types.join(",")+"}")
}this.push("{\n    "+i.values.join(",\n    ")+"\n  }")
},pushString:function(i){this.pushStackLiteral(this.quotedString(i))
},push:function(i){this.inlineStack.push(i);
return i
},pushLiteral:function(i){this.pushStackLiteral(i)
},pushProgram:function(i){if(i!=null){this.pushStackLiteral(this.programExpression(i))
}else{this.pushStackLiteral(null)
}},invokeHelper:function(u,i){this.context.aliases.helperMissing="helpers.helperMissing";
var l=this.lastHelper=this.setupHelper(u,i,true);
var v=this.nameLookup("depth"+this.lastContext,i,"context");
this.push(l.name+" || "+v);
this.replaceStack(function(w){return w+" ? "+w+".call("+l.callParams+") : helperMissing.call("+l.helperMissingParams+")"
})
},invokeKnownHelper:function(u,i){var l=this.setupHelper(u,i);
this.push(l.name+".call("+l.callParams+")")
},invokeAmbiguous:function(i,w){this.context.aliases.functionType='"function"';
this.pushStackLiteral("{}");
var l=this.setupHelper(0,i,w);
var u=this.lastHelper=this.nameLookup("helpers",i,"helper");
var x=this.nameLookup("depth"+this.lastContext,i,"context");
var v=this.nextStack();
this.source.push("if ("+v+" = "+u+") { "+v+" = "+v+".call("+l.callParams+"); }");
this.source.push("else { "+v+" = "+x+"; "+v+" = typeof "+v+" === functionType ? "+v+".apply(depth0) : "+v+"; }")
},invokePartial:function(i){var l=[this.nameLookup("partials",i,"partial"),"'"+i+"'",this.popStack(),"helpers","partials"];
if(this.options.data){l.push("data")
}this.context.aliases.self="this";
this.push("self.invokePartial("+l.join(", ")+")")
},assignToHash:function(l){var v=this.popStack(),i,u;
if(this.options.stringParams){u=this.popStack();
i=this.popStack()
}var w=this.hash;
if(i){w.contexts.push("'"+l+"': "+i)
}if(u){w.types.push("'"+l+"': "+u)
}w.values.push("'"+l+"': ("+v+")")
},compiler:g,compileChildren:function(u,x){var z=u.children,B,A;
for(var y=0,v=z.length;
y<v;
y++){B=z[y];
A=new this.compiler();
var w=this.matchExistingProgram(B);
if(w==null){this.context.programs.push("");
w=this.context.programs.length;
B.index=w;
B.name="program"+w;
this.context.programs[w]=A.compile(B,x,this.context);
this.context.environments[w]=B
}else{B.index=w;
B.name="program"+w
}}},matchExistingProgram:function(w){for(var v=0,u=this.context.environments.length;
v<u;
v++){var l=this.context.environments[v];
if(l&&l.equals(w)){return v
}}},programExpression:function(v){this.context.aliases.self="this";
if(v==null){return"self.noop"
}var A=this.environment.children[v],z=A.depths.list,y;
var x=[A.index,A.name,"data"];
for(var w=0,u=z.length;
w<u;
w++){y=z[w];
if(y===1){x.push("depth0")
}else{x.push("depth"+(y-1))
}}return(z.length===0?"self.program(":"self.programWithDepth(")+x.join(", ")+")"
},register:function(i,l){this.useRegister(i);
this.source.push(i+" = "+l+";")
},useRegister:function(i){if(!this.registers[i]){this.registers[i]=true;
this.registers.list.push(i)
}},pushStackLiteral:function(i){return this.push(new s(i))
},pushStack:function(l){this.flushInline();
var i=this.incrStack();
if(l){this.source.push(i+" = "+l+";")
}this.compileStack.push(i);
return i
},replaceStack:function(y){var v="",x=this.isInline(),i;
if(x){var w=this.popStack(true);
if(w instanceof s){i=w.value
}else{var l=this.stackSlot?this.topStackName():this.incrStack();
v="("+this.push(l)+" = "+w+"),";
i=this.topStack()
}}else{i=this.topStack()
}var u=y.call(this,i);
if(x){if(this.inlineStack.length||this.compileStack.length){this.popStack()
}this.push("("+v+u+")")
}else{if(!/^stack/.test(i)){i=this.nextStack()
}this.source.push(i+" = ("+v+u+");")
}return i
},nextStack:function(){return this.pushStack()
},incrStack:function(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var v=this.inlineStack;
if(v.length){this.inlineStack=[];
for(var u=0,l=v.length;
u<l;
u++){var w=v[u];
if(w instanceof s){this.compileStack.push(w)
}else{this.pushStack(w)
}}}},isInline:function(){return this.inlineStack.length
},popStack:function(i){var u=this.isInline(),l=(u?this.inlineStack:this.compileStack).pop();
if(!i&&(l instanceof s)){return l.value
}else{if(!u){this.stackSlot--
}return l
}},topStack:function(l){var i=(this.isInline()?this.inlineStack:this.compileStack),u=i[i.length-1];
if(!l&&(u instanceof s)){return u.value
}else{return u
}},quotedString:function(i){return'"'+i.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},setupHelper:function(w,u,l){var v=[];
this.setupParams(w,v,l);
var i=this.nameLookup("helpers",u,"helper");
return{params:v,name:i,callParams:["depth0"].concat(v).join(", "),helperMissingParams:l&&["depth0",this.quotedString(u)].concat(v).join(", ")}
},setupParams:function(w,v,l){var C=[],A=[],B=[],u,x,z;
C.push("hash:"+this.popStack());
x=this.popStack();
z=this.popStack();
if(z||x){if(!z){this.context.aliases.self="this";
z="self.noop"
}if(!x){this.context.aliases.self="this";
x="self.noop"
}C.push("inverse:"+x);
C.push("fn:"+z)
}for(var y=0;
y<w;
y++){u=this.popStack();
v.push(u);
if(this.options.stringParams){B.push(this.popStack());
A.push(this.popStack())
}}if(this.options.stringParams){C.push("contexts:["+A.join(",")+"]");
C.push("types:["+B.join(",")+"]");
C.push("hashContexts:hashContexts");
C.push("hashTypes:hashTypes")
}if(this.options.data){C.push("data:data")
}C="{"+C.join(",")+"}";
if(l){this.register("options",C);
v.push("options")
}else{v.push(C)
}return v.join(", ")
}};
var f=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");
var a=g.RESERVED_WORDS={};
for(var o=0,m=f.length;
o<m;
o++){a[f[o]]=true
}g.isValidJavaScriptVariableName=function(i){if(!g.RESERVED_WORDS[i]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(i)){return true
}return false
};
d.precompile=function(u,v){if(u==null||(typeof u!=="string"&&u.constructor!==d.AST.ProgramNode)){throw new d.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+u)
}v=v||{};
if(!("data" in v)){v.data=true
}var l=d.parse(u);
var i=new j().compile(l,v);
return new g().compile(i,v)
};
d.compile=function(i,l){if(i==null||(typeof i!=="string"&&i.constructor!==d.AST.ProgramNode)){throw new d.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+i)
}l=l||{};
if(!("data" in l)){l.data=true
}var v;
function u(){var y=d.parse(i);
var x=new j().compile(y,l);
var w=new g().compile(x,l,c,true);
return d.template(w)
}return function(x,w){if(!v){v=u()
}return v.call(this,x,w)
}
};
d.VM={template:function(i){var l={escapeExpression:d.Utils.escapeExpression,invokePartial:d.VM.invokePartial,programs:[],program:function(v,w,x){var u=this.programs[v];
if(x){u=d.VM.program(v,w,x)
}else{if(!u){u=this.programs[v]=d.VM.program(v,w)
}}return u
},merge:function(w,v){var u=w||v;
if(w&&v){u={};
d.Utils.extend(u,v);
d.Utils.extend(u,w)
}return u
},programWithDepth:d.VM.programWithDepth,noop:d.VM.noop,compilerInfo:null};
return function(y,x){x=x||{};
var v=i.call(l,d,y,x.helpers,x.partials,x.data);
var z=l.compilerInfo||[],w=z[0]||1,B=d.COMPILER_REVISION;
if(w!==B){if(w<B){var u=d.REVISION_CHANGES[B],A=d.REVISION_CHANGES[w];
throw"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+u+") or downgrade your runtime to an older version ("+A+")."
}else{throw"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+z[1]+")."
}}return v
}
},programWithDepth:function(v,w,x){var u=Array.prototype.slice.call(arguments,3);
var l=function(y,i){i=i||{};
return w.apply(this,[y,i.data||x].concat(u))
};
l.program=v;
l.depth=u.length;
return l
},program:function(u,v,w){var l=function(x,i){i=i||{};
return v(x,i.data||w)
};
l.program=u;
l.depth=0;
return l
},noop:function(){return""
},invokePartial:function(i,u,w,x,v,y){var l={helpers:x,partials:v,data:y};
if(i===c){throw new d.Exception("The partial "+u+" could not be found")
}else{if(i instanceof Function){return i(w,l)
}else{if(!d.compile){throw new d.Exception("The partial "+u+" could not be compiled when running in runtime-only mode")
}else{v[u]=d.compile(i,{data:y!==c});
return v[u](w,l)
}}}}};
d.template=d.VM.template
})(Handlebars);
+function(b){var c=function(e,d){this.$element=b(e);
this.$indicators=this.$element.find(".carousel-indicators");
this.options=d;
this.paused=this.sliding=this.interval=this.$active=this.$items=null;
this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))
};
c.DEFAULTS={interval:5000,pause:"hover",wrap:true};
c.prototype.cycle=function(d){d||(this.paused=false);
this.interval&&clearInterval(this.interval);
this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));
return this
};
c.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");
this.$items=this.$active.parent().children();
return this.$items.index(this.$active)
};
c.prototype.to=function(f){var e=this;
var d=this.getActiveIndex();
if(f>(this.$items.length-1)||f<0){return
}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){e.to(f)
})
}if(d==f){return this.pause().cycle()
}return this.slide(f>d?"next":"prev",b(this.$items[f]))
};
c.prototype.pause=function(d){d||(this.paused=true);
if(this.$element.find(".next, .prev").length&&b.support.transition){this.$element.trigger(b.support.transition.end);
this.cycle(true)
}this.interval=clearInterval(this.interval);
return this
};
c.prototype.next=function(){if(this.sliding){return
}return this.slide("next")
};
c.prototype.prev=function(){if(this.sliding){return
}return this.slide("prev")
};
c.prototype.slide=function(k,f){var m=this.$element.find(".item.active");
var d=f||m[k]();
var j=this.interval;
var l=k=="next"?"left":"right";
var g=k=="next"?"first":"last";
var h=this;
if(!d.length){if(!this.options.wrap){return
}d=this.$element.find(".item")[g]()
}if(d.hasClass("active")){return this.sliding=false
}var i=b.Event("slide.bs.carousel",{relatedTarget:d[0],direction:l});
this.$element.trigger(i);
if(i.isDefaultPrevented()){return
}this.sliding=true;
j&&this.pause();
if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");
this.$element.one("slid.bs.carousel",function(){var e=b(h.$indicators.children()[h.getActiveIndex()]);
e&&e.addClass("active")
})
}if(b.support.transition&&this.$element.hasClass("slide")){d.addClass(k);
d[0].offsetWidth;
m.addClass(l);
d.addClass(l);
m.one(b.support.transition.end,function(){d.removeClass([k,l].join(" ")).addClass("active");
m.removeClass(["active",l].join(" "));
h.sliding=false;
setTimeout(function(){h.$element.trigger("slid.bs.carousel")
},0)
}).emulateTransitionEnd(m.css("transition-duration").slice(0,-1)*1000)
}else{m.removeClass("active");
d.addClass("active");
this.sliding=false;
this.$element.trigger("slid.bs.carousel")
}j&&this.cycle();
return this
};
var a=b.fn.carousel;
b.fn.carousel=function(d){return this.each(function(){var h=b(this);
var g=h.data("bs.carousel");
var e=b.extend({},c.DEFAULTS,h.data(),typeof d=="object"&&d);
var f=typeof d=="string"?d:e.slide;
if(!g){h.data("bs.carousel",(g=new c(this,e)))
}if(typeof d=="number"){g.to(d)
}else{if(f){g[f]()
}else{if(e.interval){g.pause().cycle()
}}}})
};
b.fn.carousel.Constructor=c;
b.fn.carousel.noConflict=function(){b.fn.carousel=a;
return this
};
b(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(j){var i=b(this),f;
var d=b(i.attr("data-target")||(f=i.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,""));
var g=b.extend({},d.data(),i.data());
var h=i.attr("data-slide-to");
if(h){g.interval=false
}d.carousel(g);
if(h=i.attr("data-slide-to")){d.data("bs.carousel").to(h)
}j.preventDefault()
});
b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var d=b(this);
d.carousel(d.data())
})
})
}(jQuery);
+function(c){var b=function(e,d){this.options=d;
this.$element=c(e);
this.$backdrop=this.isShown=null;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,c.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
b.DEFAULTS={backdrop:true,keyboard:true,show:true};
b.prototype.toggle=function(d){return this[!this.isShown?"show":"hide"](d)
};
b.prototype.show=function(g){var d=this;
var f=c.Event("show.bs.modal",{relatedTarget:g});
this.$element.trigger(f);
if(this.isShown||f.isDefaultPrevented()){return
}this.isShown=true;
this.escape();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',c.proxy(this.hide,this));
this.backdrop(function(){var i=c.support.transition&&d.$element.hasClass("fade");
if(!d.$element.parent().length){d.$element.appendTo(document.body)
}d.$element.show().scrollTop(0);
if(i){d.$element[0].offsetWidth
}d.$element.addClass("in").attr("aria-hidden",false);
d.enforceFocus();
var h=c.Event("shown.bs.modal",{relatedTarget:g});
i?d.$element.find(".modal-dialog").one(c.support.transition.end,function(){d.$element.focus().trigger(h)
}).emulateTransitionEnd(300):d.$element.focus().trigger(h)
})
};
b.prototype.hide=function(d){if(d){d.preventDefault()
}d=c.Event("hide.bs.modal");
this.$element.trigger(d);
if(!this.isShown||d.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
c(document).off("focusin.bs.modal");
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");
c.support.transition&&this.$element.hasClass("fade")?this.$element.one(c.support.transition.end,c.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()
};
b.prototype.enforceFocus=function(){c(document).off("focusin.bs.modal").on("focusin.bs.modal",c.proxy(function(d){if(this.$element[0]!==d.target&&!this.$element.has(d.target).length){this.$element.focus()
}},this))
};
b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",c.proxy(function(d){d.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")
}}};
b.prototype.hideModal=function(){var d=this;
this.$element.hide();
this.backdrop(function(){d.removeBackdrop();
d.$element.trigger("hidden.bs.modal")
})
};
b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
b.prototype.backdrop=function(f){var e=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var d=c.support.transition&&e;
this.$backdrop=c('<div class="modal-backdrop '+e+'" />').appendTo(document.body);
this.$element.on("click.dismiss.bs.modal",c.proxy(function(g){if(g.target!==g.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)
},this));
if(d){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!f){return
}d?this.$backdrop.one(c.support.transition.end,f).emulateTransitionEnd(150):f()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
c.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(c.support.transition.end,f).emulateTransitionEnd(150):f()
}else{if(f){f()
}}}};
var a=c.fn.modal;
c.fn.modal=function(d,e){return this.each(function(){var h=c(this);
var g=h.data("bs.modal");
var f=c.extend({},b.DEFAULTS,h.data(),typeof d=="object"&&d);
if(!g){h.data("bs.modal",(g=new b(this,f)))
}if(typeof d=="string"){g[d](e)
}else{if(f.show){g.show(e)
}}})
};
c.fn.modal.Constructor=b;
c.fn.modal.noConflict=function(){c.fn.modal=a;
return this
};
c(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var h=c(this);
var f=h.attr("href");
var d=c(h.attr("data-target")||(f&&f.replace(/.*(?=#[^\s]+$)/,"")));
var g=d.data("bs.modal")?"toggle":c.extend({remote:!/#/.test(f)&&f},d.data(),h.data());
if(h.is("a")){i.preventDefault()
}d.modal(g,this).one("hide",function(){h.is(":visible")&&h.focus()
})
});
c(document).on("show.bs.modal",".modal",function(){c(document.body).addClass("modal-open")
}).on("hidden.bs.modal",".modal",function(){c(document.body).removeClass("modal-open")
})
}(jQuery);
/*! jQuery UI - v1.11.2 - 2014-10-17
* http://jqueryui.com
* Includes: effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)
})(function(c){var b="ui-effects-",a=c;
c.effects={effect:{}},function(y,D){function v(l,f,d){var h=z[f.type]||{};
return null==l?d||!f.def?null:f.def:(l=h.floor?~~l:parseFloat(l),isNaN(l)?f.def:h.mod?(l+h.mod)%h.mod:0>l?0:l>h.max?h.max:l)
}function E(d){var e=q(),f=e._rgba=[];
return d=d.toLowerCase(),x(w,function(t,n){var u,s=n.re.exec(d),p=s&&n.parse(s),i=n.space||"rgba";
return p?(u=e[i](p),e[C[i].cache]=u[C[i].cache],f=e._rgba=u._rgba,!1):D
}),f.length?("0,0,0,0"===f.join()&&y.extend(f,B.transparent),e):B[d]
}function m(h,f,d){return d=(d+1)%1,1>6*d?h+6*(f-h)*d:1>2*d?f:2>3*d?h+6*(f-h)*(2/3-d):h
}var B,k="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",g=/^([\-+])=\s*(\d+\.?\d*)/,w=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(d){return[d[1],d[2],d[3],d[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(d){return[2.55*d[1],2.55*d[2],2.55*d[3],d[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(d){return[parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(d){return[parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(d){return[d[1],d[2]/100,d[3]/100,d[4]]
}}],q=y.Color=function(e,d,f,h){return new y.Color.fn.parse(e,d,f,h)
},C={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},z={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},A=q.support={},j=y("<p>")[0],x=y.each;
j.style.cssText="background-color:rgba(1,1,1,.5)",A.rgba=j.style.backgroundColor.indexOf("rgba")>-1,x(C,function(f,d){d.cache="_"+f,d.props.alpha={idx:3,type:"percent",def:1}
}),q.fn=y.extend(q.prototype,{parse:function(u,s,f,e){if(u===D){return this._rgba=[null,null,null,null],this
}(u.jquery||u.nodeType)&&(u=y(u).css(s),s=D);
var l=this,t=y.type(u),i=this._rgba=[];
return s!==D&&(u=[u,s,f,e],t="array"),"string"===t?this.parse(E(u)||B._default):"array"===t?(x(C.rgba.props,function(h,d){i[d.idx]=v(u[d.idx],d)
}),this):"object"===t?(u instanceof q?x(C,function(h,d){u[d.cache]&&(l[d.cache]=u[d.cache].slice())
}):x(C,function(h,n){var d=n.cache;
x(n.props,function(p,o){if(!l[d]&&n.to){if("alpha"===p||null==u[p]){return
}l[d]=n.to(l._rgba)
}l[d][o.idx]=v(u[p],o,!0)
}),l[d]&&0>y.inArray(null,l[d].slice(0,3))&&(l[d][3]=1,n.from&&(l._rgba=n.from(l[d])))
}),this):D
},is:function(h){var d=q(h),f=!0,l=this;
return x(C,function(p,i){var s,n=d[i.cache];
return n&&(s=l[i.cache]||i.to&&i.to(l._rgba)||[],x(i.props,function(r,o){return null!=n[o.idx]?f=n[o.idx]===s[o.idx]:D
})),f
}),f
},_space:function(){var f=[],d=this;
return x(C,function(e,h){d[h.cache]&&f.push(e)
}),f.pop()
},transition:function(u,f){var l=q(u),G=l._space(),d=C[G],F=0===this.alpha()?q("transparent"):this,p=F[d.cache]||d.to(F._rgba),i=p.slice();
return l=l[d.cache],x(d.props,function(t,I){var r=I.idx,H=p[r],h=l[r],s=z[I.type]||{};
null!==h&&(null===H?i[r]=h:(s.mod&&(h-H>s.mod/2?H+=s.mod:H-h>s.mod/2&&(H-=s.mod)),i[r]=v((h-H)*f+H,I)))
}),this[G](i)
},blend:function(e){if(1===this._rgba[3]){return this
}var d=this._rgba.slice(),f=d.pop(),h=q(e)._rgba;
return q(y.map(d,function(l,i){return(1-f)*h[i]+f*l
}))
},toRgbaString:function(){var e="rgba(",d=y.map(this._rgba,function(h,f){return null==h?f>2?1:0:h
});
return 1===d[3]&&(d.pop(),e="rgb("),e+d.join()+")"
},toHslaString:function(){var e="hsla(",d=y.map(this.hsla(),function(h,f){return null==h&&(h=f>2?1:0),f&&3>f&&(h=Math.round(100*h)+"%"),h
});
return 1===d[3]&&(d.pop(),e="hsl("),e+d.join()+")"
},toHexString:function(e){var d=this._rgba.slice(),f=d.pop();
return e&&d.push(~~(255*f)),"#"+y.map(d,function(h){return h=(h||0).toString(16),1===h.length?"0"+h:h
}).join("")
},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()
}}),q.fn.parse.prototype=q.fn,C.hsla.to=function(J){if(null==J[0]||null==J[1]||null==J[2]){return[null,null,null,J[3]]
}var N,H,O=J[0]/255,F=J[1]/255,L=J[2]/255,p=J[3],f=Math.max(O,F,L),I=Math.min(O,F,L),G=f-I,M=f+I,K=0.5*M;
return N=I===f?0:O===f?60*(F-L)/G+360:F===f?60*(L-O)/G+120:60*(O-F)/G+240,H=0===G?0:0.5>=K?G/M:G/(2-M),[Math.round(N)%360,H,K,null==p?1:p]
},C.hsla.from=function(p){if(null==p[0]||null==p[1]||null==p[2]){return[null,null,null,p[3]]
}var h=p[0]/360,f=p[1],l=p[2],d=p[3],u=0.5>=l?l*(1+f):l+f-l*f,n=2*l-u;
return[Math.round(255*m(n,u,h+1/3)),Math.round(255*m(n,u,h)),Math.round(255*m(n,u,h-1/3)),d]
},x(C,function(i,p){var d=p.props,l=p.cache,f=p.to,e=p.from;
q.fn[i]=function(h){if(f&&!this[l]&&(this[l]=f(this._rgba)),h===D){return this[l].slice()
}var F,o=y.type(h),t="array"===o||"object"===o?h:arguments,u=this[l].slice();
return x(d,function(G,n){var r=t["object"===o?G:n.idx];
null==r&&(r=u[n.idx]),u[n.idx]=v(r,n)
}),e?(F=q(e(u)),F[l]=u,F):q(u)
},x(d,function(n,h){q.fn[n]||(q.fn[n]=function(H){var s,G=y.type(H),F="alpha"===n?this._hsla?"hsla":"rgba":i,r=this[F](),t=r[h.idx];
return"undefined"===G?t:("function"===G&&(H=H.call(this,t),G=y.type(H)),null==H&&h.empty?this:("string"===G&&(s=g.exec(H),s&&(H=t+parseFloat(s[2])*("+"===s[1]?1:-1))),r[h.idx]=H,this[F](r)))
})
})
}),q.hook=function(e){var d=e.split(" ");
x(d,function(h,f){y.cssHooks[f]={set:function(l,F){var i,u,s="";
if("transparent"!==F&&("string"!==y.type(F)||(i=E(F)))){if(F=q(i||F),!A.rgba&&1!==F._rgba[3]){for(u="backgroundColor"===f?l.parentNode:l;
(""===s||"transparent"===s)&&u&&u.style;
){try{s=y.css(u,"backgroundColor"),u=u.parentNode
}catch(p){}}F=F.blend(s&&"transparent"!==s?s:"_default")
}F=F.toRgbaString()
}try{l.style[f]=F
}catch(p){}}},y.fx.step[f]=function(i){i.colorInit||(i.start=q(i.elem,f),i.end=q(i.end),i.colorInit=!0),y.cssHooks[f].set(i.elem,i.start.transition(i.end,i.pos))
}
})
},q.hook(k),y.cssHooks.borderColor={expand:function(f){var d={};
return x(["Top","Right","Bottom","Left"],function(e,h){d["border"+h+"Color"]=f
}),d
}},B=y.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
}(a),function(){function e(k){var j,l,m=k.ownerDocument.defaultView?k.ownerDocument.defaultView.getComputedStyle(k,null):k.currentStyle,h={};
if(m&&m.length&&m[0]&&m[m[0]]){for(l=m.length;
l--;
){j=m[l],"string"==typeof m[j]&&(h[c.camelCase(j)]=m[j])
}}else{for(j in m){"string"==typeof m[j]&&(h[j]=m[j])
}}return h
}function f(j,h){var k,m,l={};
for(k in h){m=h[k],j[k]!==m&&(d[k]||(c.fx.step[k]||!isNaN(parseFloat(m)))&&(l[k]=m))
}return l
}var g=["add","remove","toggle"],d={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
c.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(h,i){c.fx.step[i]=function(j){("none"!==j.end&&!j.setAttr||1===j.pos&&!j.setAttr)&&(a.style(j.elem,i,j.end),j.setAttr=!0)
}
}),c.fn.addBack||(c.fn.addBack=function(h){return this.add(null==h?this.prevObject:this.prevObject.filter(h))
}),c.effects.animateClass=function(k,j,n,m){var l=c.speed(j,n,m);
return this.queue(function(){var i,q=c(this),p=q.attr("class")||"",h=l.children?q.find("*").addBack():q;
h=h.map(function(){var o=c(this);
return{el:o,start:e(this)}
}),i=function(){c.each(g,function(r,o){k[o]&&q[o+"Class"](k[o])
})
},i(),h=h.map(function(){return this.end=e(this.el[0]),this.diff=f(this.start,this.end),this
}),q.attr("class",p),h=h.map(function(){var r=this,o=c.Deferred(),u=c.extend({},l,{queue:!1,complete:function(){o.resolve(r)
}});
return this.el.animate(this.diff,u),o.promise()
}),c.when.apply(c,h.get()).done(function(){i(),c.each(arguments,function(){var o=this.el;
c.each(this.diff,function(r){o.css(r,"")
})
}),l.complete.call(q[0])
})
})
},c.fn.extend({addClass:function(h){return function(k,l,m,j){return l?c.effects.animateClass.call(this,{add:k},l,m,j):h.apply(this,arguments)
}
}(c.fn.addClass),removeClass:function(h){return function(k,l,m,j){return arguments.length>1?c.effects.animateClass.call(this,{remove:k},l,m,j):h.apply(this,arguments)
}
}(c.fn.removeClass),toggleClass:function(h){return function(k,l,p,j,m){return"boolean"==typeof l||void 0===l?p?c.effects.animateClass.call(this,l?{add:k}:{remove:k},p,j,m):h.apply(this,arguments):c.effects.animateClass.call(this,{toggle:k},l,p,j)
}
}(c.fn.toggleClass),switchClass:function(k,j,l,m,h){return c.effects.animateClass.call(this,{add:j,remove:k},l,m,h)
}})
}(),function(){function d(g,f,h,j){return c.isPlainObject(g)&&(f=g,g=g.effect),g={effect:g},null==f&&(f={}),c.isFunction(f)&&(j=f,h=null,f={}),("number"==typeof f||c.fx.speeds[f])&&(j=h,h=f,f={}),c.isFunction(h)&&(j=h,h=null),f&&c.extend(g,f),h=h||f.duration,g.duration=c.fx.off?0:"number"==typeof h?h:h in c.fx.speeds?c.fx.speeds[h]:c.fx.speeds._default,g.complete=j||f.complete,g
}function e(f){return !f||"number"==typeof f||c.fx.speeds[f]?!0:"string"!=typeof f||c.effects.effect[f]?c.isFunction(f)?!0:"object"!=typeof f||f.effect?!1:!0:!0
}c.extend(c.effects,{version:"1.11.2",save:function(h,f){for(var g=0;
f.length>g;
g++){null!==f[g]&&h.data(b+f[g],h[0].style[f[g]])
}},restore:function(h,f){var g,j;
for(j=0;
f.length>j;
j++){null!==f[j]&&(g=h.data(b+f[j]),void 0===g&&(g=""),h.css(f[j],g))
}},setMode:function(g,f){return"toggle"===f&&(f=g.is(":hidden")?"show":"hide"),f
},getBaseline:function(j,g){var f,h;
switch(j[0]){case"top":f=0;
break;
case"middle":f=0.5;
break;
case"bottom":f=1;
break;
default:f=j[0]/g.height
}switch(j[1]){case"left":h=0;
break;
case"center":h=0.5;
break;
case"right":h=1;
break;
default:h=j[1]/g.width
}return{x:h,y:f}
},createWrapper:function(h){if(h.parent().is(".ui-effects-wrapper")){return h.parent()
}var g={width:h.outerWidth(!0),height:h.outerHeight(!0),"float":h.css("float")},j=c("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),l={width:h.width(),height:h.height()},f=document.activeElement;
try{f.id
}catch(k){f=document.body
}return h.wrap(j),(h[0]===f||c.contains(h[0],f))&&c(f).focus(),j=h.parent(),"static"===h.css("position")?(j.css({position:"relative"}),h.css({position:"relative"})):(c.extend(g,{position:h.css("position"),zIndex:h.css("z-index")}),c.each(["top","left","bottom","right"],function(m,i){g[i]=h.css(i),isNaN(parseInt(g[i],10))&&(g[i]="auto")
}),h.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),h.css(l),j.css(g).show()
},removeWrapper:function(g){var f=document.activeElement;
return g.parent().is(".ui-effects-wrapper")&&(g.parent().replaceWith(g),(g[0]===f||c.contains(g[0],f))&&c(f).focus()),g
},setTransition:function(g,f,h,j){return j=j||{},c.each(f,function(m,l){var k=g.cssUnit(l);
k[0]>0&&(j[l]=k[0]*h+k[1])
}),j
}}),c.fn.extend({effect:function(){function g(m){function l(){c.isFunction(k)&&k.call(p[0]),c.isFunction(m)&&m()
}var p=c(this),k=h.complete,o=h.mode;
(p.is(":hidden")?"hide"===o:"show"===o)?(p[o](),l()):i.call(p[0],h,l)
}var h=d.apply(this,arguments),j=h.mode,f=h.queue,i=c.effects.effect[h.effect];
return c.fx.off||!i?j?this[j](h.duration,h.complete):this.each(function(){h.complete&&h.complete.call(this)
}):f===!1?this.each(g):this.queue(f||"fx",g)
},show:function(f){return function(g){if(e(g)){return f.apply(this,arguments)
}var h=d.apply(this,arguments);
return h.mode="show",this.effect.call(this,h)
}
}(c.fn.show),hide:function(f){return function(g){if(e(g)){return f.apply(this,arguments)
}var h=d.apply(this,arguments);
return h.mode="hide",this.effect.call(this,h)
}
}(c.fn.hide),toggle:function(f){return function(g){if(e(g)||"boolean"==typeof g){return f.apply(this,arguments)
}var h=d.apply(this,arguments);
return h.mode="toggle",this.effect.call(this,h)
}
}(c.fn.toggle),cssUnit:function(g){var f=this.css(g),h=[];
return c.each(["em","px","%","pt"],function(j,i){f.indexOf(i)>0&&(h=[parseFloat(f),i])
}),h
}})
}(),function(){var d={};
c.each(["Quad","Cubic","Quart","Quint","Expo"],function(g,f){d[f]=function(e){return Math.pow(e,g+2)
}
}),c.extend(d,{Sine:function(f){return 1-Math.cos(f*Math.PI/2)
},Circ:function(f){return 1-Math.sqrt(1-f*f)
},Elastic:function(f){return 0===f||1===f?f:-Math.pow(2,8*(f-1))*Math.sin((80*(f-1)-7.5)*Math.PI/15)
},Back:function(f){return f*f*(3*f-2)
},Bounce:function(h){for(var g,f=4;
((g=Math.pow(2,--f))-1)/11>h;
){}return 1/Math.pow(4,3-f)-7.5625*Math.pow((3*g-2)/22-h,2)
}}),c.each(d,function(f,e){c.easing["easeIn"+f]=e,c.easing["easeOut"+f]=function(g){return 1-e(1-g)
},c.easing["easeInOut"+f]=function(g){return 0.5>g?e(2*g)/2:1-e(-2*g+2)/2
}
})
}(),c.effects
});
(function(x,t){var z,q,y,B,C;
y=x.requestAnimationFrame||x.mozRequestAnimationFrame||x.webkitRequestAnimationFrame||function(a){x.setTimeout(a,1000/60)
};
function A(a,e){var c=0,b=a.length,d=[];
for(;
c<b;
c++){d[c]=e(a[c],c)
}return d
}function u(a){return a
}C=(function(){if(Object.prototype.hasOwnProperty.call(t.createElement("img"),"naturalWidth")){return function(a){return a.naturalWidth
}
}return function(a){var b=t.createElement("img");
b.src=a.src;
return b.width
}
})();
B=(function(){if(t.addEventListener){return function a(c,e,d){return c.addEventListener(e,d,false)
}
}else{return function b(c,e,d){return c.attachEvent("on"+e,d)
}
}})();
z=[96,130,165,200,235,270,304,340,375,410,445,485,520,555,590,625,660,695,736];
q=typeof Object.keys==="function"?Object.keys:function(c){var a=[],b;
for(b in c){a.push(b)
}return a
};
function p(b,c){var d=this,a=t;
c=c||{};
if(b!==undefined){if(typeof b==="string"){c.selector=b;
b=undefined
}else{if(typeof b.length==="undefined"){c=b;
b=undefined
}}}this.imagesOffScreen=[];
this.viewportHeight=a.documentElement.clientHeight;
this.selector=c.selector||".delayed-image-load";
this.className=c.className||"image-replace";
this.gif=a.createElement("img");
this.gif.src="data:image/gif;base64,R0lGODlhEAAJAIAAAP///wAAACH5BAEAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7";
this.gif.className=this.className;
this.gif.alt="";
this.scrollDelay=c.scrollDelay||250;
this.onResize=c.hasOwnProperty("onResize")?c.onResize:true;
this.lazyload=c.hasOwnProperty("lazyload")?c.lazyload:false;
this.scrolled=false;
this.availablePixelRatios=c.availablePixelRatios||[1,2];
this.availableWidths=c.availableWidths||z;
this.onImagesReplaced=c.onImagesReplaced||function(){};
this.widthsMap={};
this.refreshPixelRatio();
this.widthInterpolator=c.widthInterpolator||u;
this.deltaSquare=c.deltaSquare||0;
this.squareSelector=c.squareSelector||"sqrcrop";
this.adaptSelector=this.adaptSelector||"adapt";
this.gif.removeAttribute("height");
this.gif.removeAttribute("width");
if(typeof this.availableWidths!=="function"){if(typeof this.availableWidths.length==="number"){this.widthsMap=p.createWidthsMap(this.availableWidths,this.widthInterpolator)
}else{this.widthsMap=this.availableWidths;
this.availableWidths=q(this.availableWidths)
}this.availableWidths=this.availableWidths.sort(function(e,f){return e-f
})
}if(b){this.divs=A(b,u);
this.selector=null
}else{this.divs=A(a.querySelectorAll(this.selector),u)
}this.changeDivsToEmptyImages();
y(function(){d.init()
})
}p.prototype.scrollCheck=function(){if(this.scrolled){if(!this.imagesOffScreen.length){x.clearInterval(this.interval)
}this.divs=this.imagesOffScreen.slice(0);
this.imagesOffScreen.length=0;
this.changeDivsToEmptyImages();
this.scrolled=false
}};
p.prototype.init=function(){this.initialized=true;
this.checkImagesNeedReplacing(this.divs);
if(this.onResize){this.registerResizeEvent()
}if(this.lazyload){this.registerScrollEvent()
}};
p.prototype.createGif=function(c){if(c.className.match(new RegExp("(^| )"+this.className+"( |$)"))){return c
}var a=c.getAttribute("data-class");
var b=c.getAttribute("data-width");
var d=this.gif.cloneNode(false);
if(b){d.width=b;
d.setAttribute("data-width",b)
}d.className=(a?a+" ":"")+this.className;
d.setAttribute("data-src",c.getAttribute("data-src"));
d.setAttribute("alt",c.getAttribute("data-alt")||this.gif.alt);
c.parentNode.replaceChild(d,c);
return d
};
p.prototype.changeDivsToEmptyImages=function(){var a=this;
A(this.divs,function(b,c){if(a.lazyload){if(a.isThisElementOnScreen(b)){a.divs[c]=a.createGif(b)
}else{a.imagesOffScreen.push(b)
}}else{a.divs[c]=a.createGif(b)
}});
if(this.initialized){this.checkImagesNeedReplacing(this.divs)
}};
p.prototype.isThisElementOnScreen=function(c){var a=p.getPageOffset();
var b=0;
if(c.offsetParent){do{b+=c.offsetTop
}while(c=c.offsetParent)
}return(b<(this.viewportHeight+a))?true:false
};
p.prototype.checkImagesNeedReplacing=function(b){var a=this;
if(!this.isResizing){this.isResizing=true;
this.refreshPixelRatio();
A(b,function(c){a.replaceImagesBasedOnScreenDimensions(c)
});
this.isResizing=false;
this.onImagesReplaced(b)
}};
p.prototype.replaceImagesBasedOnScreenDimensions=function(b){var d,a,c;
c=C(b);
d=typeof this.availableWidths==="function"?this.availableWidths(b):this.determineAppropriateResolution(b);
b.width=d;
if(b.src!==this.gif.src&&d<=c){return
}a=this.changeImageSrcToUseNewImageDimensions(this.buildUrlStructure(b.getAttribute("data-src"),b),d);
b.src=a;
if(Backbone){Backbone.trigger("imager:ready")
}};
p.prototype.determineAppropriateResolution=function(a){return p.getClosestValue(a.getAttribute("data-width")||a.parentNode.clientWidth,this.availableWidths)
};
p.prototype.refreshPixelRatio=function v(){this.devicePixelRatio=p.getClosestValue(p.getPixelRatio(),this.availablePixelRatios)
};
p.prototype.changeImageSrcToUseNewImageDimensions=function(a,b){return a.replace(/{width}/g,p.transforms.width(b,this.widthsMap)).replace(/{pixel_ratio}/g,p.transforms.pixelRatio(this.devicePixelRatio))
};
p.prototype.buildUrlStructure=function(a,b){var c=this.isImageContainerSquare(b)?"."+this.squareSelector:"";
return a.replace(/\.(jpg|gif|bmp|png)[^s]?({width})?[^s]({pixel_ratio})?/g,"."+this.adaptSelector+".$2.$3"+c+".$1")
};
p.prototype.isImageContainerSquare=function(a){return(a.parentNode.clientWidth/a.parentNode.clientHeight)<=this.deltaSquare
};
p.getPixelRatio=function w(a){return(a||x)["devicePixelRatio"]||1
};
p.createWidthsMap=function D(c,a){var b={},d=c.length;
while(d--){b[c[d]]=a(c[d])
}return b
};
p.transforms={pixelRatio:function(a){return a
},width:function(b,a){return a[b]||b
}};
p.getClosestValue=function s(b,a){var c=a.length,d=a[c-1];
b=parseFloat(b,10);
while(c--){if(b<=a[c]){d=a[c]
}}return d
};
p.prototype.registerResizeEvent=function(){var a=this;
B(x,"resize",function(){a.checkImagesNeedReplacing(a.divs)
})
};
p.prototype.registerScrollEvent=function(){var a=this;
this.scrolled=false;
this.interval=x.setInterval(function(){a.scrollCheck()
},a.scrollDelay);
B(x,"scroll",function(){a.scrolled=true
})
};
p.getPageOffsetGenerator=function r(a){if(a){return function(){return x.pageYOffset
}
}else{return function(){return t.documentElement.scrollTop
}
}};
p.getPageOffset=p.getPageOffsetGenerator(Object.prototype.hasOwnProperty.call(x,"pageYOffset"));
p.applyEach=A;
if(typeof module==="object"&&typeof module.exports==="object"){module.exports=exports=p
}else{if(typeof define==="function"&&define.amd){define(function(){return p
})
}else{if(typeof x==="object"){x.NewsImager=p
}}}}(window,document));
(function(){ngn.galleries={init:function(){if($(".owl-carousel").length===0){return false
}return $(".owl-carousel").each(function(){var f,d,a,j,c,g,k,l,b,i,h,e;
i=$(this);
a=i.hasClass("legacy");
k=i.parent();
g=null;
b=i.parent().parent().find(".owl-prev");
c=i.parent().parent().find(".owl-next");
f=0;
d=i.parent().parent().find("span.current-item");
l=i.parent().find(".owl-prev.gallery__controls");
j=i.parent().find(".owl-next.gallery__controls");
k.on("mouseover",function(m){k.removeClass("carousel--not-moused-over");
return k.unbind("mouseover")
});
if(Modernizr.touch){l.css("width","49px");
j.css("width","49px")
}if(a){$(document).bind("keyup",function(m){if(m.which===39){i.trigger("owl.next")
}else{if(m.which===37){f=g!==null?g.currentItem:0;
if(f!==0){i.trigger("owl.prev")
}}}})
}h=function(){f=g!==null?g.currentItem:0;
d.text(f+1);
$(".legacy-ad").dfp();
return e()
};
e=function(){var m;
f=g!==null?g.currentItem:0;
m=i.find(".owl-item.active").find("figure .gallery__backdrop").height();
if(m<25){setTimeout((function(){return e()
}),250);
return
}l.css("height",m+"px");
j.css("height",m+"px");
if(f===0){return b.css({opacity:0.3})
}else{return b.css({opacity:1})
}};
i.owlCarousel({slideSpeed:300,paginationSpeed:400,singleItem:true,pagination:true,navigation:false,addClassActive:true,autoHeight:true,afterInit:e,afterAction:h});
g=i.data("owlCarousel");
c.on("click",function(m){m.preventDefault();
i.trigger("owl.next");
e()
});
b.on("click",function(m){m.preventDefault();
f=g!==null?g.currentItem:0;
if(f!==0){return i.trigger("owl.prev")
}});
e();
return $(window).resize(function(){return e()
})
})
},fullGalleryInitial:function(){var a;
a=$("#carousel-initial");
a.carousel({interval:1000});
a.carousel("pause");
if(Modernizr.touch){$(".gallery-modal").addClass("touch-devices");
return a.carousel("cycle")
}else{return $(".js-photo-gallery-area").on("mouseenter",function(b){a.carousel("cycle");
$(".photo-gallery-initial--button").css({opacity:0.85})
}).on("mouseleave",function(b){b.preventDefault();
$(".photo-gallery-initial--button").css({opacity:1});
a.carousel("pause")
})
}},fullGalleryModalInit:function(){var g,f,e,b,h,d,a,j,c,l,k,i;
b=$(".gallery-modal");
g=$("#carousel-modal");
d=$("#right-modal-button");
a=$("#left-modal-button");
f=$(".current-item-display");
e=$(".gallery-modal .carousel-inner .item:first");
h=$(".gallery-modal .carousel-inner .item:last");
j=ngn.helpers.hasNextGallery?ngn.helpers.totalSlides+1:ngn.helpers.totalSlides;
g.carousel();
$(".total-items-display").html(j);
if(Modernizr.touch){$(".carousel-control").hide();
$(".presentation-mode-image").unbind();
$(".presentation-mode-image").on("click",function(m){m.preventDefault();
return l()
})
}l=function(){if(ngn.helpers.hasNextGallery){if(h.hasClass("active")){ngn.galleryTemplate.openNextGallery()
}else{g.carousel("next")
}}else{if(h.hasClass("active")){return false
}g.carousel("next")
}};
k=function(){if(e.hasClass("active")||ngn.helpers.nextGalleryDisplayOpen){return false
}else{return g.carousel("prev")
}};
c=function(){var m;
m=$(".gallery-modal .carousel div.active").index()+1;
d.removeClass("faded");
a.removeClass("faded");
if(m===1){a.addClass("faded")
}if(!ngn.helpers.hasNextGallery){if(m===j){d.addClass("faded")
}}f.text(m);
$(".modal-ad").dfp();
g.find(".dotdotdot").dotdotdot();
i();
ngn.helpers.truncateText()
};
d.unbind();
d.on("click",function(m){m.preventDefault();
if(typeof _gaq!=="undefined"&&_gaq!==null){_gaq.push(["_trackEvent","News Gallery","In Gallery","Arrow"])
}l()
});
a.unbind();
a.on("click",function(m){m.preventDefault();
if(typeof _gaq!=="undefined"&&_gaq!==null){_gaq.push(["_trackEvent","News Gallery","In Gallery","Arrow"])
}k()
});
$("#right-side").unbind();
$("#right-side").on("click",function(m){m.preventDefault();
return l()
});
$("#left-side").unbind();
$("#left-side").on("click",function(m){m.preventDefault();
return k()
});
g.unbind();
g.on("swiperight",function(){return k()
});
g.on("swipeleft",function(){return l()
});
g.on("slid.bs.carousel",function(){return c()
});
$(document).unbind();
$(document).bind("keyup",function(m){if(m.which===39){l()
}else{if(m.which===37){k()
}else{if(m.which===27){return ngn.galleryTemplate.closePresentationMode()
}}}});
i=function(){if(ngn.helpers.presentationModeOpen){if(ngn.helpers.windowHeight>ngn.helpers.windowWidth){b.addClass("gallery-portrait")
}else{b.removeClass("gallery-portrait")
}g.find(".carousel-inner figure").each(function(){var q,u,n,s,v,o,t,p,m,r;
n=$(this);
s=$(n).find("img");
v=n.data("aspect-ratio");
u=n.find("figcaption");
o=u.find(".media__caption--text.mobile-collapsed");
t=u.find(".media__caption--text.mobile-expanded");
q=n.height()/n.width();
if(v>=q){n.addClass("vertical")
}else{n.removeClass("vertical")
}if(ngn.helpers.windowWidth<738){if(Modernizr.touch){o.on("swipeup",function(){o.addClass("hidden");
t.removeClass("hidden");
u.removeClass("trigger-mobile-caption");
return u.addClass("close-mobile-caption")
});
t.on("swipedown",function(){t.addClass("hidden");
o.removeClass("hidden");
u.removeClass("close-mobile-caption");
return u.addClass("trigger-mobile-caption")
})
}o.on("click",function(w){o.addClass("hidden");
t.removeClass("hidden");
u.removeClass("trigger-mobile-caption");
return u.addClass("close-mobile-caption")
});
t.on("click",function(w){t.addClass("hidden");
o.removeClass("hidden");
u.removeClass("close-mobile-caption");
return u.addClass("trigger-mobile-caption")
})
}if(ngn.helpers.windowWidth>=1060){m=-(parseInt(s.css("margin-right"))-20);
r=(n.height()-s.height())/2;
return u.css({"margin-left":m+"px","margin-top":r+"px",bottom:"","margin-bottom":"",top:""})
}else{if(ngn.helpers.windowWidth>=568&&ngn.helpers.windowWidth<1060){if(b.hasClass("gallery-portrait")){r=(-(n.height()-s.height())/2)+20;
return u.css({"margin-left":"",top:"initial","margin-top":r+"px",bottom:"","margin-bottom":""})
}else{m=-(parseInt(s.css("margin-right"))-20);
p=(n.height()-s.height())/2;
return u.css({"margin-left":m+"px",top:"initial","margin-top":"",bottom:p+"px","margin-bottom":"40px"})
}}else{if(ngn.helpers.windoWidth<568){return u.css({"margin-left":"",top:"","margin-top":"",bottom:"","margin-bottom":""})
}}}})
}};
i();
return $(window).resize(function(){return i()
})
}}
}).call(this);
(function(){ngn.automaticAds={setHeaderAdData:function(){var b,a;
if(ngn.helpers.isEditMode){return false
}b=ngn.helpers.getAdUnitString();
a=ngn.helpers.getTargetingString();
if(!!a){a=a+", "
}$(".headercomponent .adcomponent").attr("data-adunit",b);
$(".headercomponent .adcomponent").attr("data-targeting","{"+a+'"pos":"top"}');
$(".adunit-upper-right").attr("data-adunit",b);
$(".adunit-upper-right").attr("data-targeting","{"+a+'"pos":"top"}')
},distributeAds:function(){var b,n,k,q,e,d,o,j,f,a,m,l,c,p,h,r,g;
ngn.automaticAds.setHeaderAdData();
q=ngn.helpers.getAdUnitString();
r=ngn.helpers.getTargetingString();
if(!!r){r=r+", "
}p=null;
b=null;
o=null;
k=null;
e=null;
f=$("body");
j=$("#article__body");
l=j.find(".section").length;
h=false;
n=1700;
if(ngn.helpers.isEditMode){f.addClass("remove-component-labels")
}k={placeholders:{largeLeadAd:"<div class='right-rail-slot adunit--automatic-ad adunit--leadAd adunit--largeLeadAd'><div class='AdSlot '><div class='adunit__placeholder adunit--fixed adunit-auto' ></div></div></div>",leadAd:"<div class='right-rail-slot adunit--automatic-ad adunit--leadAd '><div class='AdSlot '><div class='adunit__placeholder adunit--fixed adunit-auto' ></div></div></div>",tabletLeadAd:"<h2 class='cq-component-label ad-component-label hidden-sm hidden-xs'>Ad Placeholder (Body Location for Right Rail ad)</h2><div class='right-rail-slot adunit--automatic-ad'><div class='AdSlot '><div class='adunit__placeholder adunit--fixed adunit-auto'  data-placeholder='ng.news/article/lead-body-ad'></div></div></div>",mobileLeadAd:"<h2 class='cq-component-label ad-component-label hidden-sm hidden-xs'>Ad Placeholder (Body Location for Right Rail ad)</h2><div class='right-rail-slot adunit--automatic-ad'><div class='AdSlot '><div class='adunit__placeholder adunit--fixed adunit-auto'  data-placeholder='ng.news/article/lead-body-ad'></div></div></div>",bodyAd:"<h2 class='cq-component-label ad-component-label hidden-sm hidden-xs'>Ad Placeholder (Body Location for Right Rail ad)</h2><div class='right-rail-slot adunit--automatic-ad'><div class='AdSlot '><div class='adunit__placeholder adunit--fixed adunit-auto'  data-placeholder='ng.news/article/body-"},realAds:{largeLeadAd:"<div class='right-rail-slot adunit--automatic-ad  adunit--leadAd adunit--largeLeadAd adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='300x250, 300x600, 300x1050'  data-adunit='"+q+"' data-targeting='{"+r+'"pos":"top"}\'></div></div></div>',leadAd:"<div class='right-rail-slot adunit--automatic-ad adunit--leadAd adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='300x250, 300x600'  data-adunit='"+q+"' data-targeting='{"+r+'"pos":"top"}\'></div></div></div>',tabletLeadAd:"<div class='adunit--automatic-ad adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='728x90, 300x250'  data-adunit='"+q+"' data-targeting='{"+r+'"pos":"top"}\'></div></div></div>',mobileLeadAd:"<div class='adunit--automatic-ad adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='300x250, 320x250, 300x50'  data-adunit='"+q+"' data-targeting='{"+r+'"pos":"top"}\'></div></div></div>',bodyAd:"<div class='adunit--automatic-ad adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='728x90, 970x250, 970x66, 300x250'  data-adunit='"+q+"' data-targeting='{"+r+'"pos":"body-',tabletAd:"<div class='adunit--automatic-ad adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='728x90, 300x250'  data-adunit='"+q+"' data-targeting='{"+r+'"pos":"body-',mobileAd:"<div class='adunit--automatic-ad adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='300x250, 320x250, 300x50'  data-adunit='"+q+"' data-targeting='{"+r+'"pos":"body-'},closingDivs:"\"}'></div></div></div>"};
if(ngn.helpers.windowWidth<=1059&&ngn.helpers.windowWidth>728){p=(ngn.helpers.isEditMode?k.placeholders.tabletLeadAd:k.realAds.tabletLeadAd);
b=(ngn.helpers.isEditMode?k.placeholders.bodyAd:k.realAds.tabletAd)
}else{if(ngn.helpers.windowWidth<=728){p=(ngn.helpers.isEditMode?k.placeholders.mobileLeadAd:k.realAds.mobileLeadAd);
b=(ngn.helpers.isEditMode?k.placeholders.bodyAd:k.realAds.mobileAd)
}else{if(j.find(".fullsize-element, .media--xsmall.right").length===0){h=true
}if(ngn.helpers.isEditMode){p=(h?k.placeholders.largeLeadAd:k.placeholders.leadAd)
}else{p=(h?k.realAds.largeLeadAd:k.realAds.leadAd)
}b=(ngn.helpers.isEditMode?k.placeholders.bodyAd:k.realAds.bodyAd)
}}if(ngn.helpers.windowWidth<=400){ngn.automaticAds.fixedMobileAd()
}else{ngn.feedbackForm.triggerMobileFeedbackButton("on scroll")
}o=Math.round(j.height()/n);
if(o>5){o=5
}if(l>0){e=0;
g=0;
while(g<l&&e<o){a=$("#article__body .section:eq("+g+")");
m=a.offset().top-j.offset().top;
c=true;
if(a.hasClass("RightRailSlot")||a.parents(".right-rail-slot").length>0||a.find(".xsmall, .media--xsmall").length>0){c=false
}if(a.hasClass("smartbody")&&a.find("h2").length>0){c=false
}if(a.hasClass("RightRailSlot")&&h&&!ngn.helpers.isEditMode){if(a.find(".right-rail-slot").offset().top-j.offset().top<620){a.hide()
}}if(c){if(e===0&&a.hasClass("smartbody")&&a.find("blockquote").length===0){$(p).insertAfter(a);
e=1
}else{if(e!==0&&m>(n*e)){d=e<10?"0"+e:e;
$(b+d+k.closingDivs).insertAfter(a);
e++
}}}g++
}}else{console.log("no valid ad slots")
}if(ngn.helpers.isEditMode){f.removeClass("remove-component-labels")
}},fixedMobileAd:function(){var d,e,f,b,a,c;
d=ngn.helpers.getAdUnitString();
c=ngn.helpers.getTargetingString();
if(!!c){c=c+", "
}e=$("#mobile-fixed-ad");
b="<div class='adunit__placeholder adunit--fixed adunit-auto'></div>";
a="<div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block adunit--not-rendered adunit--mobile-fixed-ad'  data-dimensions='300x50, 320x50' data-adunit='"+d+"' data-targeting='{"+c+'"pos":"mobile-fixed-ad"}\'></div>';
f=ngn.helpers.isEditMode?b:a;
e.html(f);
setTimeout((function(){e.css("bottom","-50px")
}),3000)
},checkRenderedAds:function(c){var b,a;
b=c;
a=0;
$(".adunit--not-rendered").each(function(){var d;
a++;
d=$(this);
if(d.find("iframe").width()>0){if(d.find("iframe").height()>700){ngn.automaticAds.manageLargeLeadAd()
}if(d.find("iframe").height()>10&&d.find("iframe").height()<30){d.remove()
}if(d.find("iframe").width()<350&&d.find("iframe").width()>200){return d.addClass("right-rail-slot")
}}});
if($(".adunit--not-rendered").length>0){return setTimeout((function(){ngn.automaticAds.checkRenderedAds(b+1)
}),3000)
}else{return setTimeout((function(){ngn.automaticAds.checkRenderedAds(b+1)
}),3000)
}},manageLargeLeadAd:function(){return $(".right-rail-slot").each(function(){var a;
a=$(this);
if(!a.hasClass("adunit--automatic-ad")&&!a.hasClass("legacy-ad")&&a.offset().top-$("#article__body").offset().top<1070){return a.hide()
}})
},galleryAds:function(){var a,e,d,c,b;
ngn.automaticAds.setHeaderAdData();
d=ngn.helpers.getAdUnitString();
b=ngn.helpers.getTargetingString();
if(!!b){b=b+", "
}e={placeholders:{bodyAd:"<div class='adunit--automatic-ad'><div class='AdSlot '><div class='adunit__placeholder adunit--fixed adunit-auto'  data-placeholder='ng.news/photo-gallery/body-ad'></div></div></div>",modalAd:"<div class='adunit--automatic-ad'><div class='AdSlot '><div class='adunit__placeholder adunit--fixed adunit-auto'  data-placeholder='ng.news/photo-gallery'></div></div></div>"},realAds:{bodyAd:"<div class='adunit--automatic-ad adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='300x250, 300x600, 300x1050' data-adunit='"+d+"' data-targeting='{"+b+'"pos":"top"}\'></div></div></div>',tabletAd:"<div class='adunit--automatic-ad adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='300x250, 300x600'  data-adunit='"+d+"' data-targeting='{"+b+'"pos":"top"}\'></div></div></div>',mobileAd:"<div class='adunit--automatic-ad adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='300x250'  data-adunit='"+d+"' data-targeting='{"+b+'"pos":"top"}\'></div></div></div>',modalAd:"<div class='adunit--automatic-ad adunit--not-rendered'><div class='AdSlot'><div class='adunit adunit--fixed  adunit--ready adunit-auto display-inline-block' data-dimensions='300x250'  data-adunit='"+d+"' data-targeting='{"+b+'"pos":"top"}\'></div></div></div>'},modalAds:{large:"<div class='adunit modal-ad adunit--lazy' data-dimensions='300x250'  data-adunit='"+d+"' data-targeting='{"+b+'"pos":"modal"}\'></div>',longAd:"<div class='adunit modal-ad adunit--lazy' data-dimensions='468x60'  data-adunit='"+d+"' data-targeting='{"+b+'"pos":"modal"}\'></div> ',small:"<div class='adunit modal-ad adunit--lazy' data-dimensions='320x50'  data-adunit='"+d+"' data-targeting='{"+b+'"pos":"modal"}\'></div>',xsmall:"<div class='adunit modal-ad adunit--lazy' data-dimensions='320x50, 300x50'  data-adunit='"+d+"' data-targeting='{"+b+'"pos":"modal"}\'></div>'}};
if(ngn.helpers.windowWidth<=1059&&ngn.helpers.windowWidth>728){a=(ngn.helpers.isEditMode?e.placeholders.bodyAd:e.realAds.tabletAd)
}else{if(ngn.helpers.windowWidth<=728){a=(ngn.helpers.isEditMode?e.placeholders.bodyAd:e.realAds.mobileAd)
}else{a=(ngn.helpers.isEditMode?e.placeholders.bodyAd:e.realAds.bodyAd)
}}$("#photo-gallery__ad-slot").html(a);
if(ngn.helpers.windowWidth<=1059&&ngn.helpers.windowWidth>720){c=ngn.helpers.isEditMode?e.placeholders.modalAd:e.modalAds.longAd;
$("#gallery-modal__tablet-ad-container").html(c)
}else{if(ngn.helpers.windowWidth<=720&&ngn.helpers.windowWidth>567){c=ngn.helpers.isEditMode?e.placeholders.modalAd:e.modalAds.small;
$("#gallery-modal__small-tablet-ad-container").html(c)
}else{if(ngn.helpers.windowWidth<=567){c=ngn.helpers.isEditMode?e.placeholders.modalAd:e.modalAds.small;
$("#gallery-modal__mobile-ad-container").html(c)
}else{c=ngn.helpers.isEditMode?e.placeholders.modalAd:e.modalAds.large;
$("#gallery-modal__big-web-ad-container").html(c)
}}}if(ngn.helpers.windowWidth<=400){ngn.automaticAds.fixedMobileAd()
}else{ngn.feedbackForm.triggerMobileFeedbackButton("on scroll")
}},legacyGalleryAd:function(){var d,b,c,a;
ngn.automaticAds.setHeaderAdData();
b=ngn.helpers.getAdUnitString();
a=ngn.helpers.getTargetingString();
if(!!a){a=a+", "
}d={placeholders:{bodyAd:"<div class='adunit__placeholder adunit--fixed adunit-auto'></div>"},realAds:{bodyAd:"<div class='adunit legacy-ad adunit--lazy' data-dimensions='300x250'  data-adunit='"+b+"' data-targeting='{"+a+'"pos":"top"}\'></div>',tabletAd:"<div class='adunit legacy-ad adunit--lazy' data-dimensions='728x90, 300x250'  data-adunit='"+b+"' data-targeting='{"+a+'"pos":"top"}\'></div>',mobileAd:"<div class='adunit legacy-adunit--lazy' data-dimensions='300x250, 320x250, 300x50'  data-adunit='"+b+"' data-targeting='{"+a+'"pos":"top"}\'></div>'}};
if(ngn.helpers.windowWidth<=1059&&ngn.helpers.windowWidth>728){c=(ngn.helpers.isEditMode?d.placeholders.bodyAd:d.realAds.tabletAd)
}else{if(ngn.helpers.windowWidth<=728){c=(ngn.helpers.isEditMode?d.placeholders.bodyAd:d.realAds.mobileAd)
}else{c=(ngn.helpers.isEditMode?d.placeholders.bodyAd:d.realAds.bodyAd)
}}return $("#legacy-gallery__ad-slot").html(c)
},sponsorAd:function(){var d,c,b,a;
ngn.automaticAds.setHeaderAdData();
c=ngn.helpers.getAdUnitString();
a=ngn.helpers.getTargetingString();
if(!!a){a=a+", "
}d={placeholders:{sponsorAd:"<div class='adunit__placeholder adunit--fixed adunit-auto adunit-placeholder-small-sponsor'></div>"},realAds:{sponsorAd:"<div class='adunit adunit--lazy' data-dimensions='88x31'  data-adunit='"+c+"' data-targeting='{"+a+'"pos":"sponsor"}\'></div>'}};
b=(ngn.helpers.isEditMode?d.placeholders.sponsorAd:d.realAds.sponsorAd);
return $("#sponsor-info__ad-slot").html(b)
},homepageAds:function(){var e,d,c,b,a;
ngn.automaticAds.setHeaderAdData();
d=ngn.helpers.getAdUnitString();
a=ngn.helpers.getTargetingString();
if(!!a){a=a+", "
}e={placeholders:{leadAd:"<div id='homepage__lead-ad-slot'><div class='adunit__placeholder adunit--fixed adunit-auto'></div></div>",longAd:"<div class='lead-sticky-slot sticky-slot'><div id='homepage__long-ad-slot' class='sticky-ad'><div class='adunit__placeholder adunit--fixed adunit-auto'></div></div></div>"},realAds:{leadAd:"<div id='homepage__lead-ad-slot'><div class='adunit adunit--lazy' data-dimensions='300x250'  data-adunit='"+d+"' data-targeting='{"+a+'"pos":"lead"}\'></div></div>',longAd:"<div class='lead-sticky-slot sticky-slot'><div id='homepage__long-ad-slot' class='sticky-ad'><div class='adunit adunit--lazy' data-dimensions='300x250, 300x600, 300x1050'  data-adunit='"+d+"' data-targeting='{"+a+'"pos":"top"}\'></div></div></div>'}};
if(ngn.helpers.windowWidth>767){c=(ngn.helpers.isEditMode?e.placeholders.leadAd:e.realAds.leadAd);
b=(ngn.helpers.isEditMode?e.placeholders.longAd:e.realAds.longAd);
$("#homepage__desktop-lead-ad-wrap").html(c);
$("#homepage__desktop-long-ad-wrap").html(b)
}if(ngn.helpers.windowWidth<=400){return ngn.automaticAds.fixedMobileAd()
}},homepageDynamicFeedAdsInitial:function(){var d,c,b,a;
c=ngn.helpers.getAdUnitString();
a=ngn.helpers.getTargetingString();
d={placeholders:{mobileAd:"<div class='homepage__mobile-ad-slot'><div class='adunit__placeholder adunit--fixed adunit-auto'></div></div>"},realAds:{mobileAd:"<div class='homepage__mobile-ad-slot'><div class='adunit adunit--lazy' data-dimensions='300x250, 320x250, 300x50'  data-adunit='"+c+"' data-targeting='{"+a+'"pos":"top"}\'></div></div>'}};
if(ngn.helpers.windowWidth<=767){b=(ngn.helpers.isEditMode?d.placeholders.mobileAd:d.realAds.mobileAd);
$(".homepage__mobile-ad-wrap--initial-ad").html(b);
if(!ngn.helpers.isEditMode){return $(".homepage__mobile-ad-slot .adunit").dfp()
}}},homepageDynamicFeedAdsInfinite:function(){var d,c,b,a;
c=ngn.helpers.getAdUnitString();
a=ngn.helpers.getTargetingString();
d={placeholders:{bodyAd:"<div class='homepage__desktop-ad-slot'><div class='adunit__placeholder adunit--fixed adunit-auto'></div></div>",tabletAd:"<div class='homepage__tablet-ad-slot'><div class='adunit__placeholder adunit--fixed adunit-auto'></div></div>",mobileAd:"<div class='homepage__mobile-ad-slot homepage__mobile-ad-slot--infinite'><div class='adunit__placeholder adunit--fixed adunit-auto'></div></div>"},realAds:{bodyAd:"<div class='sticky-slot'><div class='homepage__desktop-ad-slot sticky-ad'><div class='adunit  adunit--lazy' data-dimensions='300x250, 300x600, 300x1050'  data-adunit='"+c+"' data-targeting='{"+a+'"pos":"body"}\'></div></div></div>',tabletAd:"<div class='homepage__tablet-ad-slot'><div class='adunit adunit--lazy' data-dimensions='300x250, 300x600'  data-adunit='"+c+"' data-targeting='{"+a+'"pos":"body"}\'></div></div>',mobileAd:"<div class='homepage__mobile-ad-slot'><div class='adunit adunit--lazy' data-dimensions='300x250, 320x250, 300x50'  data-adunit='"+c+"' data-targeting='{"+a+'"pos":"body"}\'></div></div>'}};
if(ngn.helpers.windowWidth<=767){b=(ngn.helpers.isEditMode?d.placeholders.mobileAd:d.realAds.mobileAd);
return $(".homepage__mobile-ad-wrap--infinite-ad.not-rendered").each(function(){$(this).html(b);
$(this).removeClass("not-rendered");
if(!ngn.helpers.isEditMode){return $(this).find(".adunit").dfp()
}})
}else{if(ngn.helpers.windowWidth>767&&ngn.helpers.windowWidth<1060){b=(ngn.helpers.isEditMode?d.placeholders.tabletAd:d.realAds.tabletAd);
return $(".homepage__tablet-ad-wrap--infinite-ad.not-rendered ").each(function(){$(this).html(b);
$(this).removeClass("not-rendered");
if(!ngn.helpers.isEditMode){return $(this).find(".adunit").dfp()
}})
}else{b=(ngn.helpers.isEditMode?d.placeholders.bodyAd:d.realAds.bodyAd);
return $(".homepage__desktop-ad-wrap--infinite-ad.not-rendered ").each(function(){$(this).html(b);
$(this).removeClass("not-rendered");
if(!ngn.helpers.isEditMode){return $(this).find(".adunit").dfp()
}})
}}}};
ngn.helpers.getTargetingData=function(){var a;
a={template:ngn.helpers.template,source:$("meta[name='tax:source']").attr("content"),firstSubjectAncestor:$("meta[name='tax:firstSubjectAncestor']").attr("content"),firstSubject:$("meta[name='tax:firstSubject']").attr("content"),keywords:$("meta[name='tax:adKeywords']").attr("content"),otherSubjects:$("meta[name='tax:otherSubjects']").attr("content"),series:$("meta[name='tax:series']").attr("content"),genres:$("meta[name='tax:genres']").attr("content"),people:$("meta[name='tax:people']").attr("content"),organizations:$("meta[name='tax:organizations']").attr("content"),events:$("meta[name='tax:events']").attr("content"),concepts:$("meta[name='tax:concepts']").attr("content"),audiences:$("meta[name='tax:audiences']").attr("content"),test:ngn.helpers.getUrlValue("test")};
return a
};
ngn.helpers.getAdUnitString=function(){var b,a;
a=ngn.helpers.getTargetingData();
b="ng.com";
b+=!!a.source?"/"+a.source.replace(/\s+/g,"-").toLowerCase():"/news";
b+=!!a.firstSubjectAncestor?"/"+a.firstSubjectAncestor.replace(/\s+/g,"-").toLowerCase():"/ancestor";
b+=!!a.firstSubject?"/"+a.firstSubject.replace(/\s+/g,"-").toLowerCase():"/subject";
if(!!a.template){b+="/"+a.template
}return b
};
ngn.helpers.getTargetingString=function(){var b,a,c;
a=ngn.helpers.getTargetingData();
c="";
if(!!a.source){c+='"s1":"'+a.source+'"'
}if(c!==""&&!!a.firstSubjectAncestor){c+=", "
}if(!!a.firstSubjectAncestor){c+='"s2":"'+a.firstSubjectAncestor+'"'
}if(c!==""&&!!a.firstSubject){c+=", "
}if(!!a.firstSubject){c+='"s3":"'+a.firstSubject+'"'
}if(c!==""&&!!a.keywords){c+=", "
}if(!!a.keywords){c+='"kw":"'+a.keywords+'"'
}if(c!==""&&!!a.otherSubjects){c+=", "
}if(!!a.otherSubjects){c+='"category":"'+a.otherSubjects+'"'
}if(c!==""&&!!a.test){c+=", "
}if(!!a.test){c+='"test":"'+a.test+'"'
}b="";
if(!!a.location){b+='"'+(a.location='"')
}if(b!==""&&!!a.series){b+=", "
}if(!!a.series){b+='"'+a.series+'"'
}if(b!==""&&!!a.genres){b+=", "
}if(!!a.genres){b+='"'+a.genres+'"'
}if(b!==""&&!!a.people){b+=", "
}if(!!a.people){b+='"'+a.people+'"'
}if(b!==""&&!!a.organizations){b+=", "
}if(!!a.organizations){b+='"'+a.organizations+'"'
}if(b!==""&&!!a.concepts){b+=", "
}if(!!a.concepts){b+='"'+a.concepts+'"'
}if(b!==""&&!!a.audiences){b+=", "
}if(!!a.audiences){b+='"'+a.audiences+'"'
}if(b!==""){c+=', "metadata":['+b+"]"
}return c
}
}).call(this);
(function(){ngn.helpers.mediator=$({});
ngn.events.animationTime=700;
ngn.helpers.windowWidth=1900;
ngn.helpers.windowHeight=1000;
ngn.helpers.updateScreenSize=function(){ngn.helpers.windowWidth=$(window).width();
return ngn.helpers.windowHeight=$(window).height()
};
ngn.fn.modal={el:{comments:null,share:null,react:null,context:null,modal:null,buttons:[]},commentsOpen:false,shareOpen:false,init:function(e,c,d,a,b){this.el.comments=e;
this.el.share=c;
this.el.react=d;
this.el.context=a;
this.el.modal=b;
return this.events()
},events:function(){this.el.comments.add(this.el.share).on("show.bs.modal hidden.bs.modal",function(){return $(".app-"+this.id).toggleClass("active")
});
$(".app-modal-comments").on("click",(function(a){a.preventDefault();
this.el.comments.modal("toggle");
if(this.el.share.hasClass("in")){return this.el.share.modal("toggle")
}}).bind(this));
return $(".app-modal-share").on("click",(function(a){a.preventDefault();
this.el.share.modal("toggle");
if(this.el.comments.hasClass("in")){return this.el.comments.modal("toggle")
}}).bind(this))
},updateCommentCount:function(){var a,c,b;
ngn.helpers.manageTabletBottomPromos();
$(".addthis_button_expanded").each(function(){var d;
d=$(this);
if(d.html()==="0"||d.html()==="?"){return d.hide()
}else{return d.show()
}});
b=$(".fyre-comment-count span");
if(b.length>0){c=b.html().split(" ")[0]
}else{c=0
}if(c){if(c>=1000&&c<10000){c=Math.floor(c/500)*0.5+"K"
}if(c>=10000){c=Math.floor(c/1000)+"K"
}a=(c===1?"COMMENT":"COMMENTS");
if(c==="0"){$(".icon-menu .article__count__menu").addClass("hide-zero");
return $(".stickybar .app-modal-comments > p > span").html("COMMENTS")
}else{$(".icon-menu .article__count__menu").removeClass("hide-zero");
$(".icon-menu .article__count__menu .app-modal-comments span.sharebutton__comment-count").html(c);
$(".comment-count").html(c);
return $(".stickybar .app-modal-comments > p > span").html("<span itemprop='commentCount'>"+c+"</span>&nbsp;"+a)
}}else{return false
}}};
ngn.fn.stickyHeader={el:{modal:null,context:null,start:null,sticky:null,title:null,small:null},isSticky:null,init:function(b,d,e,a,c){this.isSticky=false;
this.el.modal=d;
this.el.context=b;
this.el.title=e;
this.el.start=this.el.title.offset().top;
this.el.sticky=a;
this.el.small=c;
return this.events()
},events:function(a){this.el.context.scroll($.proxy(this.scrollAction,this));
return this.el.context.resize($.proxy(this.resizeAction,this))
},resizeAction:function(){if(this.el.context.outerWidth()<1040){return this.el.modal.css({top:0})
}else{if(this.isSticky){return this.el.modal.css({top:83})
}}},scrollAction:function(){var a;
a=this.el.context[0].pageYOffset;
if(ngn.helpers.windowWidth<567){this.el.start=0
}else{this.el.start=this.el.title.offset().top
}if(a>this.el.start&&!this.isSticky){this.el.sticky.clearQueue().stop().animate({top:0},200,"easeInOutQuad");
$("#app-desktop-feed-back-button").addClass("in-view");
this.el.modal.clearQueue().stop().animate({top:83},200);
this.isSticky=true
}if(a<this.el.start&&this.isSticky){this.el.modal.clearQueue().stop().animate({top:(a>215?0:215-a)},200,"easeInOutQuad");
this.el.sticky.clearQueue().stop().animate({top:"-85px"},200,"easeInOutQuad");
$("#app-desktop-feed-back-button").removeClass("in-view");
this.isSticky=false
}if(!this.isSticky){this.el.modal.clearQueue().stop().animate({top:(a>245?0:215-a)},200,"easeInOutQuad")
}if(this.el.context.outerWidth()<1040){return this.el.modal.clearQueue().stop().css({top:0})
}}};
ngn.fn.changeArticle={el:{arrow:null,button:null},init:function(b,a){this.el.arrow=b;
this.el.button=a;
return this.events()
},events:function(){this.el.arrow.on("mouseenter",this.mouseenter);
return this.el.button.on("mouseleave",this.mouseleave)
},mouseenter:function(){return $(this).parent().find(".title-container").removeClass("hidden").clearQueue().stop().animate({opacity:1},200)
},mouseleave:function(){return $(this).find(".title-container").clearQueue().stop().animate({opacity:0},200,function(){return $(this).addClass("hidden")
})
}};
ngn.fn.toggleSubNav={el:{trigger:null,menu:null},open:0,allowScroll:false,init:function(a,c,b){this.el.trigger=a;
this.el.menu=c;
this.el.context=b;
return this.events()
},events:function(){this.el.menu.removeClass("hidden").slideUp(0);
return this.el.trigger.on("click",$.proxy(this.openClose,this))
},openClose:function(){this.open=(this.open===0?1:0);
this.el.menu.slideToggle();
this.el.trigger.find(".icongs").toggleClass("icongs-open").toggleClass("icongs-remove").end().toggleClass("active");
return ngn.helpers.mediator.trigger("toggleMenu")
},smallDevice:function(){if(ngn.helpers.isSmallDevice){if(!this.open&&this.el.context[0].pageYOffset>110){this.el.trigger.add(this.el.menu).addClass("sticky");
return this.allowScroll=true
}else{this.el.trigger.add(this.el.menu).removeClass("sticky");
return this.allowScroll=false
}}}};
ngn.helpers.getLivefyreScript=function(){return $.ajax({url:"http://zor.livefyre.com/wjs/v3.0/javascripts/livefyre.js",dataType:"script",success:function(){return ngn.helpers.initLivefyre(0)
}})
};
ngn.helpers.initLivefyre=function(a){if(typeof _M==="undefined"){a++;
return setTimeout((function(){return ngn.helpers.initLivefyre(a)
}),5000)
}else{return _M.ready(function(b){var c;
ngn.helpers.user=b.flow.getUser();
ngn.helpers.user.email=ngn.helpers.user.get("email");
if(ngn.helpers.user.email!=null){ngn.feedbackForm.removeFeedbackEmailField()
}c=false;
return window.livefyreManager=new LivefyreManager(b,c)
})
}};
ngn.helpers.manageTabletBottomPromos=function(){var c,b,a;
if($(".delayed-image-load").length===0){b=$(".bottom-promo .bottompromo:first()");
a=$(".bottom-promo .bottompromo:nth-child(3)");
if(b.length>0&&a.length>0){b.css("height","inherit").removeClass("bottompromo--adjusted");
a.css("height","inherit").removeClass("bottompromo--adjusted");
if(ngn.helpers.windowWidth>567&&ngn.helpers.windowWidth<1059){c=b.height()>=a.height();
if(c){return a.css("height",b.height()).addClass("bottompromo--adjusted")
}else{return b.css("height",a.height()).addClass("bottompromo--adjusted")
}}}}else{return setTimeout((function(){return ngn.helpers.manageTabletBottomPromos()
}),1000)
}};
ngn.helpers.truncateText=function(){$(".pre-dotdotdot").each(function(){if($(this).hasClass("hidden")){$(this).removeClass("hidden");
return $(this).removeClass("pre-dotdotdot--visible")
}else{return $(this).addClass("pre-dotdotdot--visible")
}});
$(".dotdotdot").each(function(){var a;
a=$(this);
return a.dotdotdot()
});
return $(".pre-dotdotdot").each(function(){if(!$(this).hasClass("pre-dotdotdot--visible")){return $(this).addClass("hidden")
}})
};
ngn.helpers.getUrlValue=function(e){var b,d,c,a;
c=window.location.search.substring(1);
a=c.split("&");
b=0;
while(b<a.length){d=a[b].split("=");
if(d[0]===e){return d[1]
}b++
}};
ngn.helpers.initSponsoredContentModal=function(){$(".js-open-sponsor-modal").on("click",function(){return $(".sponsor-info__modal").show()
});
$(".js-close-sponsor-modal").on("click",function(){return $(".sponsor-info__modal").hide()
});
return ngn.automaticAds.sponsorAd()
}
}).call(this);

!function(R,Q,P){var O,N=this,M="",L=0,K=0,J=".adunit",I={},H=!1,G="googleAdUnit",F=function(a,f,d){M=a,O=R(f),x(),E(d),R(function(){D(),C()
})
},E=function(b){if(I={setTargeting:{},setCategoryExclusion:"",setLocation:"",enableSingleRequest:!0,collapseEmptyDivs:"original",refreshExisting:!0,disablePublisherConsole:!1,disableInitialLoad:!1,noFetch:!1,namespace:P,sizeMapping:{}},"undefined"==typeof b.setUrlTargeting||b.setUrlTargeting){var a=B();
R.extend(!0,I.setTargeting,{inURL:a.inURL,URLIs:a.URLIs,Query:a.Query,Domain:Q.location.host})
}R.extend(!0,I,b),I.googletag&&Q.googletag.cmd.push(function(){R.extend(!0,Q.googletag,I.googletag)
})
},D=function(){O.each(function(){var g=R(this);
L++;
var f=z(g),d=A(g,f,L),b=y(g),a=g.html();
g.html("").addClass("display-none"),Q.googletag.cmd.push(function(){var m,l=g.data(G);
m=l?l:g.data("outofpage")?Q.googletag.defineOutOfPageSlot("/"+M+"/"+f,d).addService(Q.googletag.pubads()):Q.googletag.defineSlot("/"+M+"/"+f,b,d).addService(Q.googletag.pubads());
var k=g.data("targeting");
k&&R.each(k,function(o,n){m.setTargeting(o,n)
});
var j=g.data("exclusions");
if(j){var i,h=j.split(",");
R.each(h,function(n,o){i=R.trim(o),i.length>0&&m.setCategoryExclusion(i)
})
}var e=g.data("size-mapping");
if(e&&I.sizeMapping[e]){var c=Q.googletag.sizeMapping();
R.each(I.sizeMapping[e],function(o,n){c.addSize(n.browser,n.ad_sizes)
}),m.defineSizeMapping(c.build())
}m.oldRenderEnded=m.oldRenderEnded||m.renderEnded,m.renderEnded=function(){K++;
var n=g.css("display");
"none"===n&&R.trim(a).length>0&&"original"===I.collapseEmptyDivs&&(g.show().html(a),n="block display-original"),g.removeClass("display-none").addClass("display-"+n),m.oldRenderEnded(),"function"==typeof I.afterEachAdLoaded&&I.afterEachAdLoaded.call(this,g),"function"==typeof I.afterAllAdsLoaded&&K===L&&I.afterAllAdsLoaded.call(this,O)
},g.data(G,m)
})
}),Q.googletag.cmd.push(function(){if(I.enableSingleRequest&&Q.googletag.pubads().enableSingleRequest(),R.each(I.setTargeting,function(d,e){Q.googletag.pubads().setTargeting(d,e)
}),"object"==typeof I.setLocation&&("number"==typeof I.setLocation.latitude&&"number"==typeof I.setLocation.longitude&&"number"==typeof I.setLocation.precision?Q.googletag.pubads().setLocation(I.setLocation.latitude,I.setLocation.longitude,I.setLocation.precision):"number"==typeof I.setLocation.latitude&&"number"==typeof I.setLocation.longitude&&Q.googletag.pubads().setLocation(I.setLocation.latitude,I.setLocation.longitude)),I.setCategoryExclusion.length>0){var b,a=I.setCategoryExclusion.split(",");
R.each(a,function(f,c){b=R.trim(c),b.length>0&&Q.googletag.pubads().setCategoryExclusion(b)
})
}I.collapseEmptyDivs&&Q.googletag.pubads().collapseEmptyDivs(),I.disablePublisherConsole&&Q.googletag.pubads().disablePublisherConsole(),I.disableInitialLoad&&Q.googletag.pubads().disableInitialLoad(),I.noFetch&&Q.googletag.pubads().noFetch(),Q.googletag.enableServices()
})
},C=function(){O.each(function(){var b=R(this),a=b.data(G);
Q.googletag.cmd.push(I.refreshExisting&&a&&b.hasClass("display-block")?function(){Q.googletag.pubads().refresh([a])
}:function(){Q.googletag.display(b.attr("id"))
})
})
},B=function(){var t=Q.location.pathname.replace(/\/$/,""),s=new RegExp("/([^/]*)","ig"),r=t.match(s),q=["/"],p="";
if(r&&"/"!==t){var o="",n=r.length;
if(n>0){for(var m=0;
n>m;
m++){o=r[m],q.push(o);
for(var l=m+1;
n>l;
l++){o+=r[l],q.push(o)
}0===m&&(q.splice(-1,1),p=o)
}}q.push(p)
}q=q.reverse();
var b=(Q.location.toString().replace(/\=/gi,":").match(/\?(.+)$/),RegExp.$1.split("&"));
return{inURL:q,URLIs:q[0],Query:b}
},A=function(e,d,f){return e.attr("id")||e.attr("id",d+"-auto-gen-id-"+f).attr("id")
},z=function(d){var c=d.data("adunit")||I.namespace||d.attr("id");
return"function"==typeof I.alterAdUnitName&&(c=I.alterAdUnitName.call(this,c,d)),c
},y=function(a){var h=[],g=a.data("dimensions");
if(g){var f=g.split(",");
R.each(f,function(e,c){var i=c.split("x");
h.push([parseInt(i[0],10),parseInt(i[1],10)])
})
}else{h.push([a.width(),a.height()])
}return h
},x=function(){if(H=H||R('script[src*="googletagservices.com/tag/js/gpt.js"]').length,!H){Q.googletag=Q.googletag||{},Q.googletag.cmd=Q.googletag.cmd||[];
var f=document.createElement("script");
f.async=!0,f.type="text/javascript",f.onerror=function(){w()
};
var b="https:"===document.location.protocol;
f.src=(b?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";
var a=document.getElementsByTagName("script")[0];
a.parentNode.insertBefore(f,a),"none"===f.style.display&&w()
}},w=function(){var a=Q.googletag.cmd;
setTimeout(function(){var b=function(e,g,f){return Q.googletag.ads.push(f),Q.googletag.ads[f]={renderEnded:function(){},addService:function(){return this
}},Q.googletag.ads[f]
};
Q.googletag={cmd:{push:function(c){c.call(N)
}},ads:[],pubads:function(){return this
},noFetch:function(){return this
},disableInitialLoad:function(){return this
},disablePublisherConsole:function(){return this
},enableSingleRequest:function(){return this
},setTargeting:function(){return this
},collapseEmptyDivs:function(){return this
},enableServices:function(){return this
},defineSlot:function(e,d,f){return b(e,d,f,!1)
},defineOutOfPageSlot:function(d,c){return b(d,[],c,!0)
},display:function(c){return Q.googletag.ads[c].renderEnded.call(N),this
}},R.each(a,function(d,e){Q.googletag.cmd.push(e)
})
},50)
};
R.dfp=R.fn.dfp=function(e,c){c=c||{},e===P&&(e=M),"object"==typeof e&&(c=e,e=c.dfpID||M);
var f=this;
return"function"==typeof this&&(f=J),F(e,f,c),this
}
}(window.jQuery||window.Zepto||window.tire,window);

/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */
!function(b,a){typeof module!="undefined"&&module.exports?module.exports.browser=a():typeof define=="function"?define(a):this[b]=a()
}("bowser",function(){function a(v){function g(f){var i=v.match(f);
return i&&i.length>1&&i[1]||""
}var d=g(/(ipod|iphone|ipad)/i).toLowerCase(),j=/like android/i.test(v),w=!j&&/android/i.test(v),e=g(/version\/(\d+(\.\d+)?)/i),q=/tablet/i.test(v),p=!q&&/[^-]mobi/i.test(v),k;
/opera|opr/i.test(v)?k={name:"Opera",opera:b,version:e||g(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(v)?k={name:"Windows Phone",windowsphone:b,msie:b,version:g(/iemobile\/(\d+(\.\d+)?)/i)}:/msie|trident/i.test(v)?k={name:"Internet Explorer",msie:b,version:g(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/chrome|crios|crmo/i.test(v)?k={name:"Chrome",chrome:b,version:g(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:d?(k={name:d=="iphone"?"iPhone":d=="ipad"?"iPad":"iPod"},e&&(k.version=e)):/sailfish/i.test(v)?k={name:"Sailfish",sailfish:b,version:g(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(v)?k={name:"SeaMonkey",seamonkey:b,version:g(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(v)?(k={name:"Firefox",firefox:b,version:g(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(v)&&(k.firefoxos=b)):/silk/i.test(v)?k={name:"Amazon Silk",silk:b,version:g(/silk\/(\d+(\.\d+)?)/i)}:w?k={name:"Android",version:e}:/phantom/i.test(v)?k={name:"PhantomJS",phantom:b,version:g(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(v)||/rim\stablet/i.test(v)?k={name:"BlackBerry",blackberry:b,version:e||g(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(v)?(k={name:"WebOS",webos:b,version:e||g(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(v)&&(k.touchpad=b)):/bada/i.test(v)?k={name:"Bada",bada:b,version:g(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(v)?k={name:"Tizen",tizen:b,version:g(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||e}:/safari/i.test(v)?k={name:"Safari",safari:b,version:e}:k={},/(apple)?webkit/i.test(v)?(k.name=k.name||"Webkit",k.webkit=b,!k.version&&e&&(k.version=e)):!k.opera&&/gecko\//i.test(v)&&(k.name=k.name||"Gecko",k.gecko=b,k.version=k.version||g(/gecko\/(\d+(\.\d+)?)/i)),w||k.silk?k.android=b:d&&(k[d]=b,k.ios=b);
var h="";
d?(h=g(/os (\d+([_\s]\d+)*) like mac os x/i),h=h.replace(/[_\s]/g,".")):w?h=g(/android[ \/-](\d+(\.\d+)*)/i):k.windowsphone?h=g(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):k.webos?h=g(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):k.blackberry?h=g(/rim\stablet\sos\s(\d+(\.\d+)*)/i):k.bada?h=g(/bada\/(\d+(\.\d+)*)/i):k.tizen&&(h=g(/tizen[\/\s](\d+(\.\d+)*)/i)),h&&(k.osversion=h);
var m=h.split(".")[0];
if(q||d=="ipad"||w&&(m==3||m==4&&!p)||k.silk){k.tablet=b
}else{if(p||d=="iphone"||d=="ipod"||w||k.blackberry||k.webos||k.bada){k.mobile=b
}}return k.msie&&k.version>=10||k.chrome&&k.version>=20||k.firefox&&k.version>=20||k.safari&&k.version>=6||k.opera&&k.version>=10||k.ios&&k.osversion&&k.osversion.split(".")[0]>=6?k.a=b:k.msie&&k.version<10||k.chrome&&k.version<20||k.firefox&&k.version<20||k.safari&&k.version<6||k.opera&&k.version<10||k.ios&&k.osversion&&k.osversion.split(".")[0]<6?k.c=b:k.x=b,k
}var b=!0,c=a(typeof navigator!="undefined"?navigator.userAgent:"");
return c._detect=a,c
});
(function(){ngn.feedbackForm={findOS:function(){var a;
a=navigator.platform;
if(a.indexOf("Win")!==-1){return"Windows"
}if(a.indexOf("Mac")!==-1){return"MacOS"
}if(a.indexOf("Linux")!==-1){return"Linux"
}if(a.indexOf("X11")!==-1){return"Unix"
}return"Unknown"
},removeFeedbackEmailField:function(){$("#feedback-form__email-field").remove()
},init:function(){var b,c,a;
a=$(".app-open-feedback-form");
b=$("#popupmessage--feedback");
c=$("#feedback-form--loading");
a.click(function(){b.addClass("active");
a.hide()
});
$("#app-mobile-button-remove, #app-mobile-feed-back-button .app-open-feedback-form").click(function(){return $("#app-mobile-feed-back-button").removeClass("in-view")
});
$("#button--done, .popupmessage--click-off-listener, #feedback-button--close").click(function(){b.removeClass("active");
a.show()
});
$("#feedback-comments").focus(function(){$(this).attr("rows",6)
});
$("#feedback-form").submit(function(f){var d,e;
c.toggle();
e=ngn.helpers.user.email!=null?ngn.helpers.user.email:$("#feedback-email").val();
d="";
if(!!e){d+="<strong>Email Address: </strong>: "+e
}d+="<br /><br /><strong>Rating</strong>: "+$("input[type='radio'][name='rating']:checked").val()+" stars<br />";
d+="<br /><strong>Feedback</strong>:<br />";
d+=$("#feedback-comments").val();
d+="<br /><br /><br />--------------------<br />User Analytics<br />--------------------<br />";
d+="<br /><strong>Browser</strong>: "+bowser.name+" "+bowser.version;
d+="<br /><strong>OS</strong>: "+ngn.feedbackForm.findOS();
d+="<br /><strong>JavaScript Enabled</strong>: true";
d+="<br /><strong>Screen Resolution</strong>: "+window.screen.availWidth+"x"+window.screen.availHeight;
d+="<br /><strong>Browser Size</strong>: "+window.innerWidth+"x"+window.innerHeight;
d+="<br /><strong>User Agent</strong>: "+navigator.userAgent;
d+="<br /><strong>Retina</strong>: ";
d+=window.devicePixelRatio>1;
$.ajax({type:"POST",url:"/bin/services/news/public/feedback",data:"body="+d,success:function(g){c.toggle();
$(".before-send-feedback").toggleClass("active");
$(".after-send-feedback--success").toggleClass("active")
},error:function(g){c.toggle();
$(".before-send-feedback").toggleClass("active");
$(".after-send-feedback--fail").toggleClass("active")
}});
f.preventDefault()
})
},triggerMobileFeedbackButton:function(a){if(a==="now"){return setTimeout((function(){$("#app-mobile-feed-back-button").addClass("in-view")
}),1500)
}else{if(a==="on scroll"){return $(document).on("scroll",function(){$("#app-mobile-feed-back-button").addClass("in-view");
$(document).unbind("scroll")
})
}}}}
}).call(this);