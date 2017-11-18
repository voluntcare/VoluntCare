if (self.CavalryLogger) { CavalryLogger.start_js(["j3HZf"]); }

__d("UFIShareNowMenu.react",["ContextualDialogArrow","ContextualLayerAsyncRelative","ContextualLayerAutoFlip","PopoverAsyncMenu.react","React","ShareNowController","UFIShareLink.react"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;function k(){__p&&__p();var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$UFIShareNowMenu1=function(q){if(!q)return;var r=q.getPopoverMenu();c("ShareNowController").initMenu(r);if(this.props.focusOnInit)r.getTriggerElem().focus();if(this.props.openOnInit)r.getTriggerElem().click()}.bind(this),m}k.prototype.render=function(){var l=this.props,m=l.endpoint,n=l.endpointData,o=l.onShow,p=l.onHide;return c("React").createElement(c("PopoverAsyncMenu.react"),{alignv:"baseline",endpoint:m,endpointData:n,onShow:o,onHide:p,layerBehaviors:[c("ContextualLayerAutoFlip"),c("ContextualDialogArrow"),c("ContextualLayerAsyncRelative")],ref:this.$UFIShareNowMenu1},c("React").createElement(c("UFIShareLink.react"),{href:"#","data-testid":this.props.testID}))};k.propTypes={focusOnInit:j.bool,openOnInit:j.bool,testID:j.string};f.exports=k}),null);
__d("EmbeddedVideoWatchAndScrollControl.react",["ix","cx","fbt","AbstractButton.react","CurrentUser","Image.react","Locale","React","ReactDOM","TooltipData","VideoWebDriverIDs","VideoPlayerExperiments","XUIAmbientNUX.react","fbglyph","shallowCompare"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("React").PropTypes;k=babelHelpers.inherits(n,c("React").Component);l=k&&k.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.$EmbeddedVideoWatchAndScrollControl1=function(){if(typeof this.props.onWNSNUXClose==="function")this.props.onWNSNUXClose()}.bind(this),p}n.prototype.shouldComponentUpdate=function(o,p){return c("shallowCompare")(this,o,p)};n.prototype.onMouseOut=function(o){c("ReactDOM").findDOMNode(this.refs.button).blur()};n.prototype.onButtonClick=function(){if(this.props.showWNSNUX)this.$EmbeddedVideoWatchAndScrollControl1();this.props.onEnterWatchAndScroll&&this.props.onEnterWatchAndScroll()};n.prototype.getIconSrc=function(){__p&&__p();var o=c("VideoPlayerExperiments").rhcWNSEnabled,p=c("Locale").isRTL();if(o&&!p||!o&&p){var q=c("VideoPlayerExperiments").pipEntryIcon;if(q)return q;if(this.props.isSlidingWNSEligible)return h("282887");return h("282515")}if(this.props.isSlidingWNSEligible)return h("134816");return h("115593")};n.prototype.render=function(){var o=c("React").createElement(c("Image.react"),{className:"_5i0o",src:this.getIconSrc()}),p=c("CurrentUser").isWorkUser()?j._("Continuer de regarder en utilisant Workplace"):j._("Continuer de regarder en utilisant Facebook"),q=c("React").createElement(c("AbstractButton.react"),babelHelpers["extends"]({},c("TooltipData").propsFor(p,"above"),{className:"_3u33","data-testid":c("VideoWebDriverIDs").WNS_CONTROL,disabled:this.props.disabled,image:o,label:j._("Acc\u00e9der au mode Regarder et d\u00e9filer"),labelIsHidden:true,onClick:this.onButtonClick.bind(this),onMouseOut:this.onMouseOut.bind(this),ref:"button",tabIndex:this.props.tabIndex,type:"button"})),r=j._("La vid\u00e9o ne fonctionne pas\u00a0?"),s=j._("Cliquer pour charger la vid\u00e9o pendant que vous continuez \u00e0 utiliser Facebook"),t=c("React").createElement(c("XUIAmbientNUX.react"),{alignment:"right",contextRef:function(){return this.refs.button}.bind(this),customwidth:250,onCloseButtonClick:this.$EmbeddedVideoWatchAndScrollControl1,shown:this.props.showWNSNUX,position:"above",width:"custom"},c("React").createElement("div",{className:"_302j"},r),s);return c("React").createElement("span",null,q,t)};n.propTypes={onEnterWatchAndScroll:m.func,tabIndex:m.string};f.exports=n}),null);