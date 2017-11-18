if (self.CavalryLogger) { CavalryLogger.start_js(["3GkYb"]); }

__d("TypeaheadFacepile",["DOM"],(function a(b,c,d,e,f,g){function h(){}h.render=function(i){var j=[c("DOM").create("span",{className:"splitpic leftpic"},[c("DOM").create("img",{alt:"",src:i[0]})]),c("DOM").create("span",{className:"splitpic"+(i[2]?" toppic":"")},[c("DOM").create("img",{alt:"",src:i[1]})])];if(i[2])j.push(c("DOM").create("span",{className:"splitpic bottompic"},[c("DOM").create("img",{alt:"",src:i[2]})]));return c("DOM").create("span",{className:"splitpics clearfix"},j)};f.exports=h}),null);
__d("BucketedTypeaheadView",["fbt","DOM","TypeaheadView"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(k,c("TypeaheadView"));j=i&&i.prototype;k.prototype.render=function(l,m,n,o){"use strict";__p&&__p();var p=m.length>0;for(var q=0;q<m.length;++q)if(m[q].type!=="hashtag")p=false;if(!p)m=this.buildBuckets(l,m);if(n&&o){var r=this.results.length-this.index;this.index=m.length-r}return j.render.call(this,l,m,n)};k.prototype.highlight=function(l,m){"use strict";this.headerIndex=false;if(l==-1&&this.index!==0)l=this.index;while(l>=0&&l<this.items.length&&!this.isHighlightable(this.results[l])){l=l+1;this.headerIndex=true}j.highlight.call(this,l,m)};k.prototype.buildBuckets=function(l,m){"use strict";__p&&__p();if(!this.typeObjects||!m||!m.length)return m;var n=[],o={};for(var p=0;p<m.length;++p){var q=m[p],r=q.render_type||q.type;if(!Object.prototype.hasOwnProperty.call(o,r)){o[r]=n.length;n.push([this.buildBucketHeader(r)])}q.classNames=q.classNames||r;q.groupIndex=o[r];q.indexInGroup=n[q.groupIndex].length-1;q.globalIndex=p;n[q.groupIndex].push(q)}for(r in this.typeObjects)if(!Object.prototype.hasOwnProperty.call(o,r)&&this.typeObjects[r].show_always){o[r]=n.length;n.push([this.buildBucketHeader(r)]);q=this.buildNoResultsEntry();q.classNames=q.type;q.groupIndex=o[r];q.indexInGroup=n[q.groupIndex].length-1;n[q.groupIndex].push(q)}var s=[];if(this.typeObjectsOrder)for(var t=0;t<this.typeObjectsOrder.length;++t){var u=this.typeObjectsOrder[t];if(Object.prototype.hasOwnProperty.call(o,u))s=s.concat(n[o[u]])}else for(var v=0;v<n.length;++v)s=s.concat(n[v]);return s};k.prototype.buildNoResultsEntry=function(){"use strict";return{uid:"disabled_result",type:"disabled_result",text:h._("Aucun r\u00e9sultat")}};k.prototype.buildBucketHeader=function(l){"use strict";var m=this.typeObjects[l];if(m===undefined)throw new Error(l+" is undefined in "+JSON.stringify(this.typeObjects));if(m.markup){m.text=m.markup;delete m.markup}return this.typeObjects[l]};k.prototype.buildResults=function(l){"use strict";var m=j.buildResults.call(this,l);if(this.typeObjects)return c("DOM").create("div",{className:"bucketed"},[m]);else return m};k.prototype.isHighlightable=function(l){"use strict";return l.type!="header"&&l.type!="disabled_result"};k.prototype.select=function(l){"use strict";var m=this.results[this.index];if(m&&this.isHighlightable(m))j.select.call(this,l)};k.prototype.updateResults=function(l){"use strict";this.results=l};k.prototype.normalizeIndex=function(l){"use strict";var m=this.results.length;if(m===0)return-1;else if(l<-1)return l%m+m+1;else if(l>=m)return l%m-1;else return l};k.prototype.getDefaultIndex=function(l){"use strict";__p&&__p();var m=this.autoSelect&&!this.disableAutoSelect;if(this.index<0&&!m)return-1;if(l.length===0)return-1;var n=0;while(!this.isHighlightable(l)&&n<l.length)n++;return n};k.prototype.prev=function(){"use strict";var l=this.results[this.normalizeIndex(this.index-1)];while(l&&!this.isHighlightable(l)){this.index=this.normalizeIndex(this.index-1);l=this.results[this.normalizeIndex(this.index-1)]}return j.prev.call(this)};k.prototype.next=function(){"use strict";var l=this.results[this.normalizeIndex(this.index+1)];while(l&&!this.isHighlightable(l)){this.index=this.normalizeIndex(this.index+1);l=this.results[this.normalizeIndex(this.index+1)]}return j.next.call(this)};function k(){"use strict";i.apply(this,arguments)}f.exports=k}),null);
__d("ContextualTypeaheadView",["BucketedTypeaheadView","CSS","ContextualLayer","ContextualLayerAutoFlip","ContextualLayerHideOnScroll","DOM","DOMDimensions","Style"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("BucketedTypeaheadView"));i=h&&h.prototype;j.prototype.init=function(){"use strict";this.initializeLayer();i.init.call(this)};j.prototype.initializeLayer=function(){"use strict";__p&&__p();this.context=this.getContext();this.wrapper=c("DOM").create("div");c("DOM").appendContent(this.wrapper,this.element);c("CSS").addClass(this.element,"uiContextualTypeaheadView");this.layer=new(c("ContextualLayer"))({context:this.context,position:"below",alignment:this.alignment,causalElement:this.causalElement,permanent:true,shouldSetARIAProperties:false},this.wrapper);this.layer.enableBehavior(c("ContextualLayerHideOnScroll"));if(c("Style").isFixed(this.context)||this.autoflip)this.layer.enableBehavior(c("ContextualLayerAutoFlip"));this.subscribe("render",this.renderLayer.bind(this))};j.prototype.show=function(){"use strict";__p&&__p();if(this.minWidth)c("Style").set(this.wrapper,"min-width",this.minWidth+"px");else if(this.width)c("Style").set(this.wrapper,"width",this.width+"px");else c("Style").set(this.wrapper,"width",c("DOMDimensions").getElementDimensions(this.context).width+"px");var k=i.show.call(this);this.layer.show();this.inform("show");return k};j.prototype.hide=function(){"use strict";this.layer.hide();this.inform("hide");return i.hide.call(this)};j.prototype.renderLayer=function(){"use strict";if(!this.isVisible())return;if(this.layer.isShown())this.layer.updatePosition();else this.layer.show()};j.prototype.clearText=function(){"use strict";this.layer.getCausalElement().value=""};j.prototype.getContext=function(){"use strict";return this.element.parentNode};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("TypeaheadCore",["Arbiter","ArbiterMixin","CSS","DOM","Event","Focus","Input","InputSelection","Keys","StickyPlaceholderInput","UserAgent","bind","emptyFunction","mixin"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("mixin")(c("ArbiterMixin")));i=h&&h.prototype;function j(k){"use strict";__p&&__p();i.constructor.call(this);this.events=["blur","focus","click","unselect","loading","change"];this.keepFocused=true;this.preventFocusChangeOnTab=false;this.queryTimeout=250;this.resetOnKeyup=true;this.resetOnSelect=false;this.setValueOnSelect=false;this.selectOnTabKey=true;Object.assign(this,k)}j.prototype.init=function(k,l,m){"use strict";__p&&__p();this.init=c("emptyFunction");this.data=k;this.view=l;this.root=m;this.initInput();this.inputWrap=c("DOM").find(m,"div.wrap");this.hiddenInput=c("DOM").find(m,"input.hiddenInput");this.value="";this.nextQuery=null;this.selectedText=null;if(this.setValueOnSelect&&c("CSS").hasClass(this.inputWrap,"selected"))this.selectedText=this.getValue();this.initView();this.initData();this.initEvents();this.initToggle();this._exclusions=[]};j.prototype.initInput=function(){"use strict";this.element=c("DOM").find(this.root,".textInput");var k=c("DOM").scry(this.element,"input")[0];if(k)this.element=k};j.prototype.initView=function(){"use strict";this.view.subscribe("highlight",c("Focus").set.bind(null,this.element));this.view.subscribe("select",function(k,l){this.select(l.selected)}.bind(this));this.view.subscribe("afterSelect",function(){this.afterSelect()}.bind(this))};j.prototype.initData=function(){"use strict";__p&&__p();this.data.subscribe("notify",function(k,l){if(this.root.id==l.rootid&&!this.element.disabled&&l.value==this.getValue())this.view.render(l.value,l.results,l.isAsync)}.bind(this));this.data.subscribe("respond",function(k,l){if(l.forceDisplay||l.value==this.getValue()&&!this.element.disabled&&(this.element.getAttribute("singlestate")!=="true"||l.nullState))this.view.render(l.value,l.results,l.isAsync)}.bind(this));this.data.subscribe("activity",function(k,l){this.fetching=l.activity;if(!this.fetching)this.nextQuery&&this.performQuery();if(this.loading!=this.fetching){this.loading=this.fetching;this.inform("loading",{loading:this.loading})}}.bind(this))};j.prototype.initEvents=function(){"use strict";c("Event").listen(this.view.getElement(),{mouseup:this.viewMouseup.bind(this),mousedown:this.viewMousedown.bind(this)});var k={blur:c("bind")(this,"blur"),focus:c("bind")(this,"focus"),click:c("bind")(this,"click"),keyup:c("bind")(this,"keyup"),keydown:c("bind")(this,"keydown"),keypress:c("bind")(this,"keypress")};if(c("UserAgent").isBrowser("Firefox"))c("Event").listen(this.element,{input:k.keyup});c("Event").listen(this.element,k)};j.prototype.initToggle=function(){"use strict";this.subscribe("blur",this.view.hide.bind(this.view));this.subscribe("focus",this.view.show.bind(this.view))};j.prototype.viewMousedown=function(){"use strict";this.selecting=true};j.prototype.viewMouseup=function(){"use strict";this.selecting=false};j.prototype.blur=function(){"use strict";if(this.selecting){this.selecting=false;return}this.inform("blur")};j.prototype.click=function(){"use strict";var k=c("InputSelection").get(this.element);if(k.start==k.end)this.element.select();this.inform("click")};j.prototype.focus=function(){"use strict";this.checkValue();this.inform("focus")};j.prototype.keyup=function(){"use strict";if(this.resetOnKeyup&&!this.getValue())this.view.reset();this.checkValue();if(this.getValue().length===0)this.inform("change",null)};j.prototype.keydown=function(event){"use strict";__p&&__p();if(!this.view.isVisible()||this.view.isEmpty()){setTimeout(this.checkValue.bind(this),0);return}switch(c("Event").getKeyCode(event)){case c("Keys").TAB:this.handleTab(event);return;case c("Keys").UP:this.view.prev();break;case c("Keys").DOWN:this.view.next();break;case c("Keys").ESC:this.view.reset();break;default:setTimeout(this.checkValue.bind(this),0);return}event.kill()};j.prototype.keypress=function(event){"use strict";if(this.view.getSelection()&&c("Event").getKeyCode(event)==c("Keys").RETURN){this.view.select();event.kill()}};j.prototype.handleTab=function(event){"use strict";if(this.preventFocusChangeOnTab)if(this.view.getSelection())event.kill();else event.prevent();this.selectOnTabKey&&this.view.select()};j.prototype.select=function(k){"use strict";if(k&&this.setValueOnSelect){var l=k.orig_text||k.text;this.setValue(l);this.setHiddenValue(k.uid);this.selectedText=l;c("CSS").addClass(this.inputWrap,"selected")}};j.prototype.afterSelect=function(){"use strict";this.keepFocused?c("Focus").set(this.element):this.element.blur();this.resetOnSelect?this.reset():this.view.reset()};j.prototype.unselect=function(){"use strict";if(this.setValueOnSelect){this.selectedText=null;c("CSS").removeClass(this.inputWrap,"selected")}this.setHiddenValue();this.inform("unselect",this)};j.prototype.setEnabled=function(k){"use strict";var l=k===false;this.element.disabled=l;c("CSS").conditionClass(this.root,"uiTypeaheadDisabled",l)};j.prototype.reset=function(){"use strict";this.unselect();this.setValue();!this.keepFocused&&c("Input").reset(this.element);this.view.reset();this.inform("reset")};j.prototype.getElement=function(){"use strict";return this.element};j.prototype.setExclusions=function(k){"use strict";this._exclusions=k.map(String)};j.prototype.getExclusions=function(){"use strict";return this._exclusions};j.prototype.setValue=function(k){"use strict";this.value=this.nextQuery=k||"";c("Input").setValue(this.element,this.value);c("StickyPlaceholderInput").update(this.element);this.inform("change",k)};j.prototype.setHiddenValue=function(k){"use strict";if(typeof k==="number")k=String(k);this.hiddenInput.value=k||"";c("Arbiter").inform("Form/change",{node:this.hiddenInput});var event=document.createEvent("HTMLEvents");event.initEvent("change",false,true);this.hiddenInput.dispatchEvent(event)};j.prototype.getValue=function(){"use strict";return c("Input").getValue(this.element)};j.prototype.getHiddenValue=function(){"use strict";return this.hiddenInput.value||""};j.prototype.checkValue=function(){"use strict";__p&&__p();var k=this.getValue();if(k==this.value)return;if(this.selectedText&&this.selectedText!=k)this.unselect();var l=Date.now(),m=l-this.time;this.time=l;this.value=this.nextQuery=k;this.inform("change",this.value);this.performQuery(m)};j.prototype.performQuery=function(k){"use strict";if(this.selectedText)return;k=k||0;if(this.fetching&&k<this.queryTimeout)this.data.query(this.nextQuery,true,this._exclusions,k);else{this.data.query(this.nextQuery,false,this._exclusions,k);this.nextQuery=null}};j.prototype.updateHeight=function(){"use strict"};f.exports=j}),null);
__d("SearchFiltersCustomSource",["csx","cx","CSS","DOM","DOMQuery","EventListener","Form","tidyEvent"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();function j(k,l,m){__p&&__p();this.sourceElem=k;this.placeholder=l;this.form=m;var n=c("DOMQuery").scry(this.sourceElem,'input[type="text"]');if(n.length>0)this.input=n[0];c("tidyEvent")(c("EventListener").listen(this.placeholder,"click",function(event){c("CSS").addClass(this.sourceElem,"_4ivt");c("CSS").show(this.sourceElem);c("CSS").hide(this.placeholder);this.$SearchFiltersCustomSource1();this.$SearchFiltersCustomSource2()}.bind(this)));if(this.input!=null)c("tidyEvent")(c("EventListener").listen(this.input,"blur",function(o){c("CSS").show(this.placeholder);c("CSS").hide(this.sourceElem)}.bind(this)))}j.prototype.$SearchFiltersCustomSource1=function(){if(this.input!=null)this.input.focus()};j.prototype.$SearchFiltersCustomSource2=function(){__p&&__p();var k=c("DOMQuery").scry(this.sourceElem,"._4ivu input");if(k.length>0){c("Form").getElements(this.form).forEach(function(q){if(q.type==="radio")c("DOM").setAttributes(q,{checked:false})});for(var l=k,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var o;if(m){if(n>=l.length)break;o=l[n++]}else{n=l.next();if(n.done)break;o=n.value}var p=o;c("DOM").setAttributes(p,{checked:true})}}};f.exports=j}),null);
__d("SearchFiltersDateSelector",["csx","DateStrings","DateTime","DOM","DOMQuery","goURI"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(j,k){this.date=c("DateTime").localCreate(k.timestamp).toFBDate();this.monthSelector=k.monthSelect;this.requestParam=k.requestParam;this.uri=k.uri;this.useWildcard=k.useWildcard;this.yearSelector=k.yearSelect;this.filterName=k.filterName;this.init()}i.prototype.init=function(){__p&&__p();if(this.useWildcard)this.monthSelector.setValue("none");else{this.monthSelector.setValue(String(this.date.getMonth()));this.$SearchFiltersDateSelector1()}this.yearSelector.setValue(String(this.date.getYear()));this.$SearchFiltersDateSelector2();this.$SearchFiltersDateSelector3();this.monthSelector.subscribe("change",function(){this.$SearchFiltersDateSelector1();this.refreshFilter()}.bind(this));this.yearSelector.subscribe("change",function(){this.$SearchFiltersDateSelector2();this.refreshFilter()}.bind(this))};i.prototype.$SearchFiltersDateSelector3=function(){var j=c("DateTime").localNow(),k=this.monthSelector.getMenu();if(j.getYear()===this.date.getYear())k.forEachItem(function(l){var m=Number(l.getValue());if(m>j.getMonth())l.disable();else l.enable()});else k.forEachItem(function(l){l.enable()})};i.prototype.$SearchFiltersDateSelector1=function(){var j=this.monthSelector.getValue();if(j==="none")return;var k=Number(j),l=c("DateStrings").getMonthNameShort(k);this.date=this.date.setMonth(k);var m=c("DOMQuery").find(this.monthSelector.getButton(),"span._55pe");c("DOM").setContent(m,l)};i.prototype.$SearchFiltersDateSelector2=function(){var j=this.yearSelector.getValue();this.date=this.date.setYear(Number(j))};i.prototype.refreshFilter=function(){__p&&__p();var j=String(this.date.getYear()),k=void 0,l=this.monthSelector.getValue();if(l==="none")k={start_year:j,end_year:j};else{var m=this.date.format("m");switch(m){case"01":k={start_year:j,end_month:j+"-"+m};break;case"12":k={start_month:j+"-"+m,end_year:j};break;default:k={start_month:j+"-"+m,end_month:j+"-"+m}}}k={name:this.filterName,args:JSON.stringify(k)};this.uri.addQueryData(this.requestParam,JSON.stringify(k));c("goURI")(this.uri)};f.exports=i}),null);
__d("SearchFiltersFreeFormSelection",["cx","fbt","DOM","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();function j(k){"use strict";this.typeahead=k;this.subscription=null}j.prototype.enable=function(){"use strict";__p&&__p();var k=this.typeahead.getElement(),l=c("DOM").find(k,"input.hiddenInput");if(!l)return;var m=l.name,n="",o="";switch(m){case"filters_employer":n="employer";o="_378l";break;case"filters_city":n="location";o="_378m";break;case"filters_school":n="school";o="_378n";break;default:return}var p=this.typeahead.getView();this.subscription=p.subscribe("beforeRender",function(q,r){var s=String(i._("Utiliser n\u2019importe quel\/quelle {entityType} correspondant \u00e0 \u00ab\u00a0{value}\u00a0\u00bb",[i.param("entityType",n),i.param("value",r.value)])),t=c("joinClasses")("_378o",o);r.results.unshift({text:s,uid:r.value,iconClass:t,type:"_378p"})})};j.prototype.disable=function(){"use strict";this.typeahead.getView().unsubscribe(this.subscription);this.subscription=null};f.exports=j}),null);
__d("SearchLHCFilters.react",["DOMContainer.react","React","ReactDOM","ScrollColumn.react","onEnclosingPageletDestroy"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=60;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;function k(l){"use strict";i.constructor.call(this,l)}k.prototype.componentDidMount=function(){"use strict";var l=c("ReactDOM").findDOMNode(this);if(l instanceof Element)c("onEnclosingPageletDestroy")(l,function(){var l=c("ReactDOM").findDOMNode(this);if(l&&l.parentNode)c("ReactDOM").unmountComponentAtNode(l.parentNode)}.bind(this))};k.prototype.render=function(){"use strict";var l=this.props.content;return c("React").createElement(c("ScrollColumn.react"),{topOffset:j},c("React").createElement(c("DOMContainer.react"),null,l))};f.exports=k}),null);
__d("Selector",["csx","ArbiterMixin","BehaviorsMixin","Button","DOM","DOMQuery","mixin"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(k,c("mixin")(c("ArbiterMixin"),c("BehaviorsMixin")));j=i&&i.prototype;function k(l,m,n,o,p){"use strict";j.constructor.call(this);this._popoverMenu=l;this._button=m;this._menu=n;this._input=o;this.init();p.behaviors&&this.enableBehaviors(p.behaviors)}k.prototype.init=function(){"use strict";this._menu.subscribe("change",function(l,m){this._setLabelContent(m.label);this._input.value=m.value;this.inform("change",m)}.bind(this));this._popoverMenu.getPopover().subscribe(["hide","show"],function(l){this.inform(l)}.bind(this))};k.prototype._getLabel=function(){"use strict";return c("DOMQuery").find(this._button,"span._55pe")};k.prototype._setLabelContent=function(l){"use strict";var m=this._getLabel();c("DOM").setContent(m,l)};k.prototype.getLabelContent=function(){"use strict";var l=this._getLabel();return l.firstChild};k.prototype.setValue=function(l){"use strict";this._menu.setValue(l)};k.prototype.getValue=function(){"use strict";return this._input.value};k.prototype.getName=function(){"use strict";return this._input.name};k.prototype.getButton=function(){"use strict";return this._button};k.prototype.getMenu=function(){"use strict";return this._menu};k.prototype.enable=function(){"use strict";c("Button").setEnabled(this._button,true);this._popoverMenu.enable()};k.prototype.disable=function(){"use strict";c("Button").setEnabled(this._button,false);this._popoverMenu.disable()};f.exports=k}),null);
__d("BrowseInstantFilterTypeahead",["URI"],(function a(b,c,d,e,f,g){"use strict";function h(i){i.typeahead.subscribe("select",function(j,k){var l,m=new(c("URI"))(i.current_uri);m.addQueryData((l={},l[i.request_param]=JSON.stringify({name:i.filter_name,args:k.selected.uid}),l));m.go()})}f.exports=h}),null);
__d("TypeaheadShowLoadingIndicator",["CSS"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this._typeahead=i}h.prototype.enable=function(){"use strict";this._subscription=this._typeahead.subscribe("loading",function(i,j){c("CSS").conditionClass(this._typeahead.getElement(),"typeaheadLoading",j.loading);c("CSS").conditionClass(this._typeahead.getView().getElement(),"typeaheadViewLoading",j.loading)}.bind(this))};h.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription);this._subscription=null};Object.assign(h.prototype,{_subscription:null});f.exports=h}),null);
__d("legacy:ShowLoadingIndicatorTypeaheadBehavior",["TypeaheadShowLoadingIndicator"],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.showLoadingIndicator=function(h){h.enableBehavior(c("TypeaheadShowLoadingIndicator"))}}),3);
__d("TypeaheadPreventSubmitOnEnter",["Event","Keys"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this._typeahead=i}h.prototype.enable=function(){"use strict";var i=this._typeahead.getCore().getElement();this._listener=c("Event").listen(i,"keypress",function(j){if(c("Event").getKeyCode(j)==c("Keys").RETURN)j.kill()})};h.prototype.disable=function(){"use strict";this._listener.remove();this._listener=null};Object.assign(h.prototype,{_listener:null});f.exports=h}),null);
__d("createEmojiElement",["cx","JSXDOM"],(function a(b,c,d,e,f,g,h){function i(j,k,l){l=l||16;return c("JSXDOM").span({className:"_5mfr _47e3"},[c("JSXDOM").img({"aria-hidden":true,className:"img",height:l,src:k,width:l}),c("JSXDOM").span({className:"_7oe"},j)])}f.exports=i}),null);
__d("DOMEmoji",["cx","EmojiImageURL","EmojiRenderer","FBEmojiUtils","JSXDOM","SupportedFBEmoji","Utf16","createEmojiElement","flattenArray","isElementNode"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i={MAX_ITEMS:40,transform:function j(k,l){__p&&__p();l=l||{};var m=l.size||16;return c("flattenArray")(k.map(function(n){__p&&__p();if(!c("isElementNode")(n))return c("EmojiRenderer").render(n,function(o){__p&&__p();if(l.isSupportedEmoji){var p=c("FBEmojiUtils").getKeyFromCodepoints(o);if(l.isSupportedEmoji(p))return c("createEmojiElement")(o.join(""),c("EmojiImageURL").getMessengerURL(p,m),m)}else{var q=c("FBEmojiUtils").getSupportedKey(o);if(q)return c("createEmojiElement")(o.join(""),c("EmojiImageURL").getFBEmojiURL(q,m),m)}return c("JSXDOM").span({className:"_4ay8"+(m===16?" _3kkw":"")},o.join(""))},this.MAX_ITEMS);else return n}.bind(this)))},params:function j(k){if(!k)return this;var l=this;return{__params:true,obj:l,params:k}}};f.exports=i}),null);
__d("TransformTextToDOMMixin",["flattenArray","isElementNode"],(function a(b,c,d,e,f,g){__p&&__p();var h=3,i={transform:function j(k,l){__p&&__p();return c("flattenArray")(k.map(function(m){__p&&__p();if(!c("isElementNode")(m)){var n=m,o=[],p=this.MAX_ITEMS||h;while(p--){var q=l?[n].concat(l):[n],r=this.match.apply(this,q);if(!r)break;o.push(n.substring(0,r.startIndex));o.push(r.element);n=n.substring(r.endIndex)}n&&o.push(n);return o}return m}.bind(this)))},params:function j(){for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];var n=this;return{__params:true,obj:n,params:l}}};f.exports=i}),null);
__d("DOMEmote",["cx","fbt","EmojiImageURL","EmoticonEmojiList","EmoticonsList","JSXDOM","SupportedFBEmoji","TransformTextToDOMMixin"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j={MAX_ITEMS:40,match:function k(l,m){var n=m&&m.getMessengerEmote,o=n?c("EmoticonEmojiList").regexp.exec(l):c("EmoticonsList").regexp.exec(l);if(!o||!o.length)return false;var k=o[2],p=o.index+o[1].length,q=n?c("EmoticonEmojiList").names[k]:c("EmoticonsList").emotes[k];return{startIndex:p,endIndex:p+k.length,element:this._element(k,q,m)}},_element:function k(l,m,n){var o=n&&n.getMessengerEmote,p=o?o(m):c("EmoticonsList").emoji[m],q=null;if(o&&p)q=c("JSXDOM").img({"aria-hidden":true,className:"img",height:16,src:c("EmojiImageURL").getMessengerURL(p,16),width:16});else if(p)q=c("JSXDOM").img({"aria-hidden":true,className:"img",height:16,src:c("SupportedFBEmoji")[p]?c("EmojiImageURL").getFBEmojiURL(p):c("EmojiImageURL").getFBEmojiExtendedURL(p),width:16});else q=c("JSXDOM").span({"aria-hidden":true,className:"emoticon emoticon_"+m});var r=i._("\u00e9motic\u00f4ne {emoticonName}",[i.param("emoticonName",m)]);return c("JSXDOM").span({className:"_47e3 _5mfr",title:r},[q,c("JSXDOM").span({"aria-hidden":true,className:"_7oe"},l)])}};f.exports=Object.assign(j,c("TransformTextToDOMMixin"))}),null);
__d("transformTextToDOM",["createArrayFromMixed"],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j){__p&&__p();var k=[i];j=c("createArrayFromMixed")(j);j.forEach(function(l){var m,n=l;if(l.__params){m=l.params;n=l.obj}k=n.transform(k,m)});return k}f.exports=h}),null);
__d("emojiAndEmote",["DOMEmoji","DOMEmote","FbtResultBase","transformTextToDOM"],(function a(b,c,d,e,f,g){"use strict";var h=function h(i,j){if(i instanceof c("FbtResultBase"))return[i];var k=j?{isSupportedEmoji:j.isSupportedEmoji}:null,l=j?{getMessengerEmote:j.getMessengerEmote}:null,m=[c("DOMEmoji").params(k),c("DOMEmote").params(l)];return c("transformTextToDOM")(i,m)};f.exports=h}),null);
__d("CompactTypeaheadRenderer",["BadgeHelper","DOM","emojiAndEmote","TypeaheadFacepile","isSocialPlugin"],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j){__p&&__p();var k=[];if(i.xhp)return c("DOM").create("li",{className:"raw"},i.xhp);var l=i.photos||i.photo;if(l){if(l instanceof Array)l=c("TypeaheadFacepile").render(l);else l=c("DOM").create("img",{alt:"",src:l});k.push(l)}var m=i.iconClass;if(m){var n=c("DOM").create("span",{className:m});k.push(n)}var o=i.debug_info;if(o)k.push(c("DOM").create("span",{className:"debugInfo"},o));if(i.text){var p=[i.text];if(!c("isSocialPlugin")())p=c("emojiAndEmote")(i.text);if(i.is_verified)p.push(c("BadgeHelper").renderBadge("xsmall","verified"));else if(i.is_work_user)p.push(c("BadgeHelper").renderBadge("xsmall","work"));else if(i.is_trending_hashtag)p.push(c("BadgeHelper").renderBadge("xsmall","trending"));k.push(c("DOM").create("span",{className:"text"},p))}var q=i.subtext,r=i.category;if(q||r){var s=[];q&&s.push(q);q&&r&&s.push(" \xb7 ");r&&s.push(r);k.push(c("DOM").create("span",{className:"subtext"},s))}var t=c("DOM").create("li",{className:i.type||""},k);if(i.text){t.setAttribute("title",i.text);t.setAttribute("aria-label",i.text)}return t}h.className="compact";f.exports=h}),null);
__d("legacy:CompactTypeaheadRenderer",["CompactTypeaheadRenderer"],(function a(b,c,d,e,f,g){if(!b.TypeaheadRenderers)b.TypeaheadRenderers={};b.TypeaheadRenderers.compact=c("CompactTypeaheadRenderer")}),3);