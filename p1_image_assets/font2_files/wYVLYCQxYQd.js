if (self.CavalryLogger) { CavalryLogger.start_js(["eEHFK"]); }

__d("ProfileTimelineUITypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:ProfileTimelineUILoggerConfig",this.$ProfileTimelineUITypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:ProfileTimelineUILoggerConfig",this.$ProfileTimelineUITypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$ProfileTimelineUITypedLogger1={};return this};h.prototype.updateData=function(j){this.$ProfileTimelineUITypedLogger1=babelHelpers["extends"]({},this.$ProfileTimelineUITypedLogger1,j);return this};h.prototype.setEvent=function(j){this.$ProfileTimelineUITypedLogger1.event=j;return this};h.prototype.setEventMetadata=function(j){this.$ProfileTimelineUITypedLogger1.event_metadata=c("GeneratedLoggerUtils").serializeMap(j);return this};h.prototype.setProfileID=function(j){this.$ProfileTimelineUITypedLogger1.profile_id=j;return this};h.prototype.setRelationshipType=function(j){this.$ProfileTimelineUITypedLogger1.relationship_type=j;return this};h.prototype.setUIComponent=function(j){this.$ProfileTimelineUITypedLogger1.ui_component=j;return this};h.prototype.setVC=function(j){this.$ProfileTimelineUITypedLogger1.vc=j;return this};var i={event:true,event_metadata:true,profile_id:true,relationship_type:true,ui_component:true,vc:true};f.exports=h}),null);
__d("ScrollingPager",["Arbiter","CSS","DOM","OnVisible","UIPagelet","$","ge"],(function a(b,c,d,e,f,g){__p&&__p();var h={};function i(j,k,l,m){"use strict";__p&&__p();this.scroll_loader_id=j;this.pagelet_src=k;this.data=l;this.options=m||{};if(this.options.target_id){this.target_id=this.options.target_id;this.options.append=true}else this.target_id=j;this.scroll_area_id=this.options.scroll_area_id;this.handler=null}i.prototype.setBuffer=function(j){"use strict";this.options.buffer=j;this.onvisible&&this.onvisible.setBuffer(j)};i.prototype.getBuffer=function(){"use strict";return this.options.buffer};i.prototype.register=function(){"use strict";this.onvisible=new(c("OnVisible"))(c("$")(this.scroll_loader_id),this.getHandler(),false,this.options.buffer,false,c("ge")(this.scroll_area_id));h[this.scroll_loader_id]=this;c("Arbiter").inform(i.REGISTERED,{id:this.scroll_loader_id})};i.prototype.getInstance=function(j){"use strict";return h[j]};i.prototype.getHandler=function(){"use strict";__p&&__p();if(this.handler)return this.handler;function j(k){__p&&__p();var l=c("ge")(this.scroll_loader_id);if(!l){this.onvisible.remove();return}c("CSS").addClass(l.firstChild,"async_saving");var m=this.options.handler,n=this.options.force_remove_pager&&this.scroll_loader_id!==this.target_id;this.options.handler=function(){c("Arbiter").inform("ScrollingPager/loadingComplete");m&&m.apply(null,arguments);if(n)c("DOM").remove(l)};if(k)this.data.pager_fired_on_init=true;c("UIPagelet").loadFromEndpoint(this.pagelet_src,this.target_id,this.data,this.options)}return j.bind(this)};i.prototype.setHandler=function(j){"use strict";this.handler=j};i.prototype.removeOnVisible=function(){"use strict";this.onvisible.remove()};i.prototype.checkBuffer=function(){"use strict";this.onvisible&&this.onvisible.checkBuffer()};i.getInstance=function(j){"use strict";return h[j]};Object.assign(i,{REGISTERED:"ScrollingPager/registered"});f.exports=i}),null);
__d("TidyArbiter",["TidyArbiterMixin"],(function a(b,c,d,e,f,g){var h=babelHelpers["extends"]({},c("TidyArbiterMixin"));f.exports=h}),null);
__d("ProfileNavRef",["LinkController","Parent","URI"],(function a(b,c,d,e,f,g){__p&&__p();var h="pnref",i="data-"+h,j=false;f.exports={_resolveRef:function k(l){var m=[],n=c("Parent").byAttribute(l,i),o=void 0;while(n){m.unshift(n.getAttribute(i));o=n.parentNode;if(o)n=c("Parent").byAttribute(o,i)}return m.join(".")},track:function k(){if(j)return;j=true;c("LinkController").registerHandler(function(l){var m=this._resolveRef(l);if(m)l.href=new(c("URI"))(l.href).addQueryData(h,m).toString()}.bind(this))}}}),null);
__d("ProfileDOMID",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ABOVE_HEADER_TIMELINE:"pagelet_above_header_timeline",ABOVE_HEADER_TIMELINE_PLACEHOLDER:"above_header_timeline_placeholder",COVER:"fbProfileCover",MAIN_COLUMN:"pagelet_main_column",MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal",MAIN_COLUMN_PERSONAL_OTHER:"pagelet_main_column_personal_other",RIGHT_SIDEBAR:"pagelet_right_sidebar",TAB_LOAD_INDICATOR:"tab_load_indicator",TOP_SECTION:"timeline_top_section",FIG_PROFILE_PIC:"profile_fig_profile_pic",FIG_ACTION_BAR:"profile_fig_action_bar",FIG_SUBTITLE:"profile_fig_subtitle",DISCOVERY_INTENT_BUTTON:"discovery_intent_button",DISCOVERY_INTENT_BANNER:"discovery_intent_banner",PREFIX_MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal_"})}),null);
__d("TimelineComponentKeys",["ImmutableObject"],(function a(b,c,d,e,f,g){var h=new(c("ImmutableObject"))({ADS:"ads",ASYNC_NAV:"async_nav",CONTENT:"content",COVER_NAV:"cover_nav",ESCAPE_HATCH:"escape_hatch",LOGGING:"logging",NAV:"nav",SCRUBBER:"scrubber",STICKY_COLUMN:"sticky_column",STICKY_HEADER:"sticky_header",STICKY_HEADER_NAV:"sticky_header_nav"});f.exports=h}),null);
__d("TimelineConstants",[],(function a(b,c,d,e,f,g){var h=Object.freeze({DS_LOADED:"timeline-capsule-loaded",DS_COLUMN_HEIGHT_DIFFERENTIAL:"timeline-column-diff-height",SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_EXPAND:"TimelineConstants/sectionExpand",SECTION_LOADING:"TimelineConstants/sectionLoading",SECTION_LOADED:"TimelineConstants/sectionLoaded",SECTION_FULLY_LOADED:"TimelineConstants/sectionFullyLoaded",SECTION_REGISTERED:"TimelineConstants/sectionRegistered",UNIT_SEGMENT_LOADED:"TimelineConstants/unitSegmentLoaded"});f.exports=h}),null);
__d("TimelineLegacySections",["fbt","CSS","DOM","getElementText"],(function a(b,c,d,e,f,g,h){__p&&__p();var i={},j={},k=false,l=[],m={},n={get:function o(p){return Object.prototype.hasOwnProperty.call(j,p)?j[p]:null},getAll:function o(){return j},remove:function o(p){for(var q=0;q<l.length;q++)if(l[q]===p){l[q]=null;break}delete j[p]},removeAll:function o(){j={}},set:function o(p,q){j[p]=q},addOnVisible:function o(p,q){m[p]=q},destroyOnVisible:function o(p){var q=m[p];if(q){q.remove();c("DOM").remove(q.getElement())}m[p]=null},removeOnVisible:function o(p){var q=m[p];if(q)q.remove()},removeAllOnVisibles:function o(){Object.keys(m).forEach(function(p){return this.removeOnVisible(p)}.bind(this))},getOnVisible:function o(p){return m[p]},setMainSectionOrder:function o(p,q){l[q]=p},getMainSectionOrder:function o(){return l},addLoadPagelet:function o(p,q){i[p]=q},cancelLoadPagelet:function o(p){if(i[p])i[p].cancel()},cancelLoadPagelets:function o(){Object.keys(i).forEach(function(p){return this.cancelLoadPagelet(p)}.bind(this));i={}},shouldForceNoFriendActivity:function o(){return k},forceNoFriendActivity:function o(){k=true},collapsePlaceHolderHeaders:function o(){__p&&__p();var p=void 0,q=void 0,r=false;for(var s=0;s<l.length;s++){var t=l[s];if(!t)continue;var u=n.get(t);if(!u)continue;if(u.canScrollLoad()||u.isLoaded()){if(!u.isLoaded()){c("CSS").removeClass(u.getNode(),"fbTimelineTimePeriodSuppressed");c("CSS").addClass(u.getNode(),"fbTimelineTimePeriodUnexpanded")}if(p&&q){this.combineSectionHeaders(p,q);if(r)p.deactivateScrollLoad();r=true}p=null;q=null;continue}else if(p){q=u;u.deactivateScrollLoad()}else{p=u;q=u;if(r)u.activateScrollLoad()}c("CSS").removeClass(u.getNode(),"fbTimelineTimePeriodSuppressed");c("CSS").addClass(u.getNode(),"fbTimelineTimePeriodUnexpanded")}},combineSectionHeaders:function o(p,q){__p&&__p();c("CSS").removeClass(q.getNode(),"fbTimelineTimePeriodUnexpanded");c("CSS").addClass(q.getNode(),"fbTimelineTimePeriodSuppressed");var r=c("DOM").find(p.getNode(),"span.sectionLabel"),s=c("DOM").find(q.getNode(),"span.sectionLabel");if(!s.getAttribute("data-original-label"))s.setAttribute("data-original-label",c("getElementText")(s));if(r.getAttribute("data-month")&&s.getAttribute("data-month")&&r.getAttribute("data-year")==s.getAttribute("data-year"))c("DOM").setContent(s,h._("Afficher {month1} - {month2} {year}",[h.param("month1",s.getAttribute("data-month")),h.param("month2",r.getAttribute("data-month")),h.param("year",r.getAttribute("data-year"))]));else if(r.getAttribute("data-year")!==s.getAttribute("data-year"))c("DOM").setContent(s,h._("Afficher {year1} - {year2}",[h.param("year1",s.getAttribute("data-year")),h.param("year2",r.getAttribute("data-year"))]));else c("DOM").setContent(s,h._("Afficher {year}",[h.param("year",s.getAttribute("data-year"))]))}};f.exports=n}),null);
__d("TimelineScrubberKey",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({MONTH:"month",RECENT_ACTIVITY:"recent",YEAR:"year"})}),null);
__d("TimelineController",["Arbiter","BlueBar","CSS","DataStore","DOMQuery","Event","ProfileDOMID","ProfileNavRef","ProfileTabConst","ProfileTabUtils","Run","ScrollingPager","TidyArbiter","TimelineComponentKeys","TimelineConstants","TimelineLegacySections","TimelineScrubberKey","UITinyViewportAction","Vector","$","forEachObject","ge","queryThenMutateDOM","randomInt","tidyEvent"],(function a(b,c,d,e,f,g){__p&&__p();var h=740,i=5,j="top",k="paddingTop",l="paddingTop",m=null,n=false,o=null,p=null,q=void 0,r={},s={},t=[],u=null,v=0,w=c("Vector").getViewportDimensions(),x=false,y=false,z=false;function A(M,N,O){O=O||[];if(r[M])return r[M][N].apply(r[M],O);s[M]=s[M]||{};s[M][N]=O;return false}function B(){if(x)x=F(c("ge")("rightCol"),l,L.getCurrentScrubber());if(y)y=F(c("$")(c("ProfileDOMID").ABOVE_HEADER_TIMELINE),j);if(z)z=F(c("BlueBar").getBar(),k)}function C(){v=c("Vector").getScrollPosition()}function D(){B();if(c("ProfileTabUtils").tabHasStickyHeader(m))A(c("TimelineComponentKeys").STICKY_HEADER,"check",[v.y]);A(c("TimelineComponentKeys").CONTENT,"checkCurrentSectionChange")}function E(){c("queryThenMutateDOM")(C,D,"TimelineController/scrollListener")}function F(M,N,O){__p&&__p();if(!M)return false;if(v.y<=0){G(M,N);return false}if(O&&c("CSS").hasClass(O.getRoot(),"fixed_elem")){G(M,N);return false}var P=parseInt(M.style[N],10)||0;if(v.y<P){c("CSS").addClass(M,"timeline_fixed");M.style[N]=v.y+"px"}else c("CSS").removeClass(M,"timeline_fixed");return true}function G(M,N){M.style[N]="0px";c("CSS").removeClass(M,"timeline_fixed")}function H(){w=c("Vector").getViewportDimensions()}function I(){c("queryThenMutateDOM")(H,function(){A(c("TimelineComponentKeys").ADS,"adjustAdsToFit");A(c("TimelineComponentKeys").STICKY_HEADER_NAV,"adjustMenuHeights");A(c("TimelineComponentKeys").STICKY_HEADER,"check",[v.y])},"TimelineController/resize")}function J(event,M){__p&&__p();var N=c("Vector").getScrollPosition();M=Math.min(M,N.y);var O=c("ge")("rightCol");if(O){O.style[l]=M+"px";x=true}L.showAboveHeaderContent(M);z=c("UITinyViewportAction").isTinyHeight();if(z)c("BlueBar").getBar().style[k]=M+"px";c("Arbiter").inform("reflow")}function K(){__p&&__p();while(t.length)t.pop().remove();c("forEachObject")(r,function(N,O){N.reset&&N.reset()});m=null;o=null;q=null;r={};s={};u=null;n=false;y=false;if(x){var M=c("ge")("rightCol");if(M)G(M,l)}x=false;if(z){G(c("BlueBar").getBar(),k);z=false}c("DataStore").purge(c("TimelineConstants").DS_LOADED);c("DataStore").purge(c("TimelineConstants").DS_COLUMN_HEIGHT_DIFFERENTIAL)}var L={init:function M(N,O,P){__p&&__p();var Q;if(n)return;if(c("ProfileTabUtils").isTimelineTab(O))O=c("ProfileTabConst").TIMELINE;n=true;o=N;q=c("randomInt")(Number.MAX_SAFE_INTEGER).toString();p=P.relationship_type;t.push(c("Event").listen(window,"scroll",E),c("Event").listen(window,"resize",I));c("tidyEvent")(c("TidyArbiter").subscribe("TimelineCover/coverCollapsed",J));c("ProfileNavRef").track();c("Run").onLeave(K);L.registerCurrentKey(O);var R="#"+c("TimelineScrubberKey").WAY_BACK;if(window.location.hash===R)(function(){var S=c("Arbiter").subscribe(c("TimelineConstants").SECTION_FULLY_LOADED,function(){A(c("TimelineComponentKeys").CONTENT,"navigateToSection",[c("TimelineScrubberKey").WAY_BACK]);S.unsubscribe()})})()},setAdsTracking:function M(N){A(c("TimelineComponentKeys").ADS,"start",[N])},showAboveHeaderContent:function M(N){var O=c("Vector").getScrollPosition();N=Math.min(N,O.y);var P=c("$")(c("ProfileDOMID").ABOVE_HEADER_TIMELINE);if(P.firstChild){var Q=c("$")(c("ProfileDOMID").ABOVE_HEADER_TIMELINE_PLACEHOLDER);Q.style.height=P.offsetHeight+"px";P.style.top=N+"px";y=true}},registerCurrentKey:function M(N){__p&&__p();m=N;u=N!==c("ProfileTabConst").MAP&&c("Vector").getViewportDimensions().y<h&&c("ProfileTabUtils").tabHasScrubber(N);u=u||c("BlueBar").getBar().offsetTop;A(c("TimelineComponentKeys").ADS,"setShortMode",[u]);A(c("TimelineComponentKeys").ADS,"updateCurrentKey",[N]);A(c("TimelineComponentKeys").ADS,"adjustAdsToFit");A(c("TimelineComponentKeys").COVER_NAV,"handleTabChange",[N]);A(c("TimelineComponentKeys").SCRUBBER,"handleTabChange",[N]);A(c("TimelineComponentKeys").ESCAPE_HATCH,"handleTabChange",[N]);A(c("TimelineComponentKeys").STICKY_COLUMN,"adjust");A(c("TimelineComponentKeys").STICKY_HEADER,"handleTabChange",[N]);E()},getProfileID:function M(){return o},getRelationshipType:function M(){return p},getCurrentKey:function M(){return m},getCurrentScrubber:function M(){return r[c("TimelineComponentKeys").SCRUBBER]},getCurrentStickyHeaderNav:function M(){return r[c("TimelineComponentKeys").STICKY_HEADER_NAV]},scrubberHasLoaded:function M(N){c("CSS").conditionClass(N.getRoot(),"fixed_elem",!u);A(c("TimelineComponentKeys").ADS,"registerScrubber",[N])},scrubberHasChangedState:function M(){A(c("TimelineComponentKeys").ADS,"adjustAdsToFit")},scrubberWasClicked:function M(N){A(c("TimelineComponentKeys").LOGGING,"logScrubberClick",[N])},stickyHeaderNavWasClicked:function M(N){A(c("TimelineComponentKeys").LOGGING,"logStickyHeaderNavClick",[N])},sectionHasChanged:function M(N,O){var P=[N,O];A(c("TimelineComponentKeys").STICKY_HEADER_NAV,"updateSection",P);A(c("TimelineComponentKeys").SCRUBBER,"updateSection",P);A(c("TimelineComponentKeys").ADS,"loadAdsIfEnoughTimePassed");A(c("TimelineComponentKeys").LOGGING,"logSectionChange",P)},navigateToSection:function M(N){A(c("TimelineComponentKeys").CONTENT,"navigateToSection",[N])},adjustStickyHeaderWidth:function M(){A(c("TimelineComponentKeys").STICKY_HEADER,"adjustWidth")},hideStickyHeaderNavSectionMenu:function M(){A(c("TimelineComponentKeys").STICKY_HEADER_NAV,"hideSectionMenu")},register:function M(N,O){r[N]=O;if(s[N]){c("forEachObject")(s[N],function(P,Q){A(N,Q,P)});delete s[N]}},runOnceWhenSectionFullyLoaded:function M(N,O,P){__p&&__p();var Q,R=c("TimelineLegacySections").get(O),S=false;if(R){var T=c("DOMQuery").scry(R.getNode(),".fbTimelineCapsule");S=T.some(function(U){var V=c("DataStore").get(c("TimelineConstants").DS_LOADED,U.id);if(parseInt(V,10)>=parseInt(P,10)){N();return true}})}if(!S)(function(){var U=c("Arbiter").subscribe(c("TimelineConstants").SECTION_FULLY_LOADED,function(V,W){if(W.scrubberKey===O&&W.pageIndex===P){N();U.unsubscribe()}})})()}};f.exports=L}),null);
__d("ProfileTimelineUILogger",["Banzai","ProfileTimelineUITypedLogger","TimelineController"],(function a(b,c,d,e,f,g){__p&&__p();var h="profile_timeline_ui";function i(event,k,l){var m=c("TimelineController").getProfileID(),n=c("TimelineController").getRelationshipType();if(c("Banzai").isEnabled(h)&&!!m&&!!n)new(c("ProfileTimelineUITypedLogger"))().setEvent(event).setUIComponent(k).setProfileID(m).setRelationshipType(n).setEventMetadata(l).log()}var j={logCoverNavItemClick:function k(l){i("click","cover_nav_item",{tab_key:l})},logCoverNavMoreItemClick:function k(l){i("click","cover_nav_more_item",{tab_key:l})},logScrubberClick:function k(l){i("click","scrubber",{section_key:l})},logStickyHeaderImpression:function k(){i("view","sticky_header",{})},logStickyHeaderNavItemClick:function k(l){i("click","sticky_header_nav_item",{tab_key:l})},logStickyHeaderScrubberClick:function k(l){i("click","sticky_header_scrubber",{section_key:l})},logStickyHeaderNavItemWithJumperClick:function k(l){i("click","sticky_header_nav_item_with_jumper",{tab_key:l})},logStickyHeaderScrubberWithJumperClick:function k(l){i("click","sticky_header_scrubber_with_jumper",{section_key:l})},logJumperRecentStoriesButtonClick:function k(l){i("click","jumper_recent_stories_button",{cursor:l})},logJumperMoreStoriesSpinnerView:function k(l){i("view","jumper_more_stories_spinner",{cursor:l})}};f.exports=j}),null);
__d("TimelineCapsule",["csx","Arbiter","CSS","DataStore","DOM","DOMQuery","DOMScroll","Parent","TimelineConstants","TimelineLegacySections","Vector","$","queryThenMutateDOM"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=function(){__p&&__p();var j={},k={};function l(n){__p&&__p();c("DOMQuery").scry(n,"._3ram").forEach(function(o){__p&&__p();var p,q=o.getAttribute("data-endmarker"),r=o.getAttribute("data-pageindex"),s=function s(){if(!o.parentNode)return;c("DataStore").set(c("TimelineConstants").DS_LOADED,n.id,r);c("DOM").remove(o);c("Arbiter").inform(c("TimelineConstants").SECTION_FULLY_LOADED,{scrubberKey:q,pageIndex:r,capsuleID:n.id,childCount:n.childNodes.length})};if(c("TimelineLegacySections").get(q))s();else(function(){var t=c("Arbiter").subscribe(c("TimelineConstants").SECTION_REGISTERED,function(u,v){if(v.scrubberKey===q){s();t.unsubscribe()}})})()});c("Arbiter").inform("TimelineCapsule/balanced",{capsule:n})}function m(n,o){var p=c("Parent").byAttribute(n,"data-size");if(p)if(c("CSS").hasClass(n.parentNode,"timelineReportContent"))o(n);else o(p)}return{removeUnit:function n(o){m(o,function(p){c("DOM").remove(p)})},removeUnitWithID:function n(o){i.removeUnit(c("$")(o))},hideUnit:function n(o){m(o,function(p){c("CSS").addClass(p,"fbTimelineColumnHidden")})},undoHideUnit:function n(o,p){c("DOM").remove(c("Parent").byClass(p,"hiddenText"));m(o,function(q){c("CSS").removeClass(q,"fbTimelineColumnHidden")})},unplacehold:function n(o){var p=c("$")(o);p.style.top=null;c("CSS").removeClass(p,"visiblePlaceholder");c("CSS").removeClass(p,"placeholder");var q=c("Parent").byClass(p,"fbTimelineCapsule");delete j[q.id][o];i.balanceCapsule(q)},scrollToCapsule:function n(o){if(!Object.prototype.hasOwnProperty.call(k,o.id)){var p=c("Vector").getElementPosition(o.parentNode);c("DOMScroll").scrollTo(new(c("Vector"))(c("Vector").getScrollPosition().x,p.y-c("TimelineConstants").SCROLL_TO_OFFSET,"document"));k[o.id]=true}},loadTwoColumnUnits:function n(o,p,q){var r=c("$")(o);c("queryThenMutateDOM")(function(){var s=c("Parent").byClass(r,"fbTimelineSection");if(s&&!p){var t=c("DOMQuery").find(r,"._2t4u"),u=c("DOMQuery").find(r,"._2t4v"),v=u.offsetHeight-t.offsetHeight;c("DataStore").set(c("TimelineConstants").DS_COLUMN_HEIGHT_DIFFERENTIAL,q,v)}},l.bind(null,r))}}}();f.exports=i}),null);
__d("TimelineStickyHeader",["Animation","Arbiter","BlueBar","Bootloader","CSS","DOM","DOMQuery","Event","ProfileTabConst","ProfileTabUtils","ProfileTimelineUILogger","Style","TimelineComponentKeys","TimelineController","Vector","ViewportBounds","UITinyViewportAction","ge","getOrCreateDOMID","queryThenMutateDOM"],(function a(b,c,d,e,f,g){__p&&__p();var h=200,i=358,j=48,k=false,l=false,m=void 0,n=void 0,o=void 0,p=void 0,q=false,r=0,s=void 0,t=void 0,u={},v={VISIBLE:"TimelineStickyHeader/visible",ADJUST_WIDTH:"TimelineStickyHeader/adjustWidth",init:function w(x){__p&&__p();if(k)return;k=true;m=x;n=c("DOM").find(x,"div.name");o=c("DOM").find(x,"div.actions");l=c("CSS").hasClass(x,"fbTimelineStickyHeaderVisible");var y=void 0,z=false,A=true;c("queryThenMutateDOM")(function(){var B=c("BlueBar").getBar();if(B.offsetTop&&!c("ge")("page_admin_panel")&&c("TimelineController").getCurrentKey()!==c("ProfileTabConst").TIMELINE){y=c("Vector").tElementDimensions(B).y;z=true}A=c("BlueBar").hasFixedBlueBar()},function(){if(z)c("Bootloader").loadModules(["StickyController"],function(B){new B(x,y).start()},"TimelineStickyHeader");else c("CSS").addClass(x,"fixed_elem");if(!A)c("CSS").addClass(x,"fbTimelineStickyHeaderNonFixedBlueBar");v.updateBounds(l);v.toggleVisibilityOnFocus();c("TimelineController").register(c("TimelineComponentKeys").STICKY_HEADER,v)},"TimelineStickyHeader/init")},reset:function w(){k=false;l=false;m=null;n=null;o=null;u={};p.remove();p=null},toggleVisibilityOnFocus:function w(){c("Event").listen(m,"focusin",function(){this.toggle(true)}.bind(this));c("Event").listen(m,"focusout",function(event){var x=event.relatedTarget||null;if(!c("DOMQuery").contains(m,x))this.toggle(false)}.bind(this))},handleTabChange:function w(x){r=c("ProfileTabUtils").isTimelineTab(x)?i-j:0;if(!c("ProfileTabUtils").tabHasStickyHeader(x)){this.toggle(false,function(){return c("CSS").hide(m)});return}c("CSS").show(m)},updateBounds:function w(){c("queryThenMutateDOM")(function(){s=m.offsetTop;t=m.scrollHeight},function(){p=c("ViewportBounds").addTop(function(){return l?s+t:0})},"TimelineStickyHeader/init")},check:function w(x){if(c("UITinyViewportAction").isTiny()){this.toggle(false);return}var y=r===0||x>=r;this.toggle(y)},toggle:function w(x,y){__p&&__p();if(x===l){y&&y();return}var z=x?s-t:s,A=x?s:s-t;c("Style").set(m,"top",z+"px");c("CSS").addClass(m,"fbTimelineStickyHeaderAnimating");var B=c("getOrCreateDOMID")(m);u[B]&&u[B].stop();u[B]=new(c("Animation"))(m).from("top",z).to("top",A).duration(h).ondone(function(){__p&&__p();u[B]=null;if(x&&!q){c("ProfileTimelineUILogger").logStickyHeaderImpression();q=true}c("queryThenMutateDOM")(null,function(){c("CSS").conditionClass(m,"fbTimelineStickyHeaderHidden",!x);m.setAttribute("aria-hidden",x?"false":"true");c("CSS").removeClass(m,"fbTimelineStickyHeaderAnimating");c("Style").set(m,"top","");v.updateBounds();c("Arbiter").inform(v.VISIBLE,x);y&&y()})}).go();l=x;if(l)v.adjustWidth()},adjustWidth:function w(){c("Arbiter").inform(v.ADJUST_WIDTH,n,c("Arbiter").BEHAVIOR_STATE)},getRoot:function w(){return m},setActions:function w(x){if(k&&x){c("DOM").setContent(o,x);o=x}}};f.exports=b.TimelineStickyHeader||v}),null);
__d("ButtonGroup",["CSS","DataStore","Parent"],(function a(b,c,d,e,f,g){__p&&__p();var h="firstItem",i="lastItem";function j(o,p){var q=c("Parent").byClass(o,p);if(!q)throw new Error("invalid use case");return q}function k(o){return c("CSS").shown(o)&&Array.from(o.childNodes).some(c("CSS").shown)}function l(o){__p&&__p();var p,q,r;Array.from(o.childNodes).forEach(function(s){r=k(s);c("CSS").removeClass(s,h);c("CSS").removeClass(s,i);c("CSS").conditionShow(s,r);if(r){p=p||s;q=s}});p&&c("CSS").addClass(p,h);q&&c("CSS").addClass(q,i);c("CSS").conditionShow(o,p)}function m(o,p){var q=j(p,"uiButtonGroupItem");o(q);l(q.parentNode)}function n(o){"use strict";this._root=j(o,"uiButtonGroup");c("DataStore").set(this._root,"ButtonGroup",this);l(this._root)}n.getInstance=function(o){"use strict";var p=j(o,"uiButtonGroup"),q=c("DataStore").get(p,"ButtonGroup");return q||new n(p)};Object.assign(n.prototype,{hideItem:m.bind(null,c("CSS").hide),showItem:m.bind(null,c("CSS").show),toggleItem:m.bind(null,c("CSS").toggle)});f.exports=n}),null);
__d("TimelineStickyHeaderNav",["Arbiter","BlueBar","ButtonGroup","CSS","DataStore","DateStrings","DOM","Event","Parent","ProfileTimelineUILogger","SelectorDeprecated","Style","SubscriptionsHandler","TimelineComponentKeys","TimelineConstants","TimelineController","UITinyViewportAction","URI","Vector","queryThenMutateDOM"],(function a(b,c,d,e,f,g){__p&&__p();var h=false,i=void 0,j=void 0,k=void 0,l=void 0,m=void 0,n=void 0,o=void 0,p=void 0,q=void 0,r=void 0,s=void 0,t={},u={},v=[],w=false,x=[],y=[],z=void 0,A=80;function B(){var N=c("SelectorDeprecated").getSelectorMenu(m);z.addSubscriptions(c("Event").listen(N,"click",C),c("Arbiter").subscribe(c("TimelineConstants").SECTION_REGISTERED,E))}function C(event){var N=c("Parent").byTag(event.getTarget(),"a"),O=N&&c("DataStore").get(N,"key");if(O){c("TimelineController").stickyHeaderNavWasClicked(O);c("TimelineController").navigateToSection(O);c("ProfileTimelineUILogger").logStickyHeaderScrubberClick(O);event.prevent()}}function D(N){if(r===N&&p[N]&&!j.custom_subsection_menu)I(N);else F();c("TimelineController").adjustStickyHeaderWidth()}function E(N,O){var P=O.section,Q=P&&P.getParentKey();if(!Q)return;var R=H(Q),S=c("TimelineController").getCurrentScrubber(),T=P.getScrubberKey(),U=S?S.getLabelForSubnav(Q,T):U=G(T);if(U){p[Q]=true;J(R,{key:T,label:U});D(Q)}}function F(){if(k)k.hideItem(n)}function G(N){var O=N.split("_");return c("DateStrings").getMonthName(parseInt(O.pop(),10))}function H(N){var O=o[N];if(!O){O=o[N]=n.cloneNode(true);var P=c("DOM").scry(O,"li.activityLog a")[0];if(P)P.href=new(c("URI"))(P.href).addQueryData({key:N});z.addSubscriptions(c("Event").listen(O,"click",C))}return O}function I(N){var O=H(N);c("DOM").insertAfter(n,O);c("CSS").hide(n);for(var P in o){var Q=o[P];c("CSS").conditionShow(Q,Q===O)}if(k)k.showItem(n)}function J(N,O){__p&&__p();var P=c("DOM").create("a",{href:"#",rel:"ignore",className:"itemAnchor",tabIndex:0},c("DOM").create("span",{className:"itemLabel fsm"},O.label));P.setAttribute("data-key",O.key);P.setAttribute("aria-checked",false);var Q=c("DOM").create("li",{className:"uiMenuItem uiMenuItemRadio uiSelectorOption"},P);Q.setAttribute("data-label",O.label);var R=c("DOM").find(N,"ul.uiMenuInner"),S=c("DOM").create("option",{value:O.key},O.label),T=c("DOM").find(N,"select");if(O.key==="recent"){c("DOM").prependContent(R,Q);c("DOM").insertAfter(T.options[0],S)}else{c("DOM").appendContent(R,Q);c("DOM").appendContent(T,S)}}function K(N,O){__p&&__p();var P=c("DOM").scry(N,"li.uiMenuItem");if(!P)return;for(var Q=0;Q<P.length;Q++){var R=P[Q];if(c("CSS").hasClass(R,O)||R.firstChild.getAttribute("data-key")==O){c("DOM").remove(R);break}}var S=c("DOM").find(N,"select"),T=c("DOM").scry(S,"option");for(var U=0;U<T.length;U++)if(T[U].value===O){c("DOM").remove(T[U]);return}}function L(event){var N=c("Parent").byClass(event.target,"itemAnchor");if(N){var O=c("DataStore").get(N,"tab-key");if(O)c("ProfileTimelineUILogger").logStickyHeaderNavItemClick(O)}}var M={init:function N(O,P){__p&&__p();if(h)return;h=true;i=O;j=P||{};l=c("DOM").find(i,"div.pageMenu");m=c("DOM").find(i,"div.sectionMenu");n=c("DOM").find(i,"div.subsectionMenu");s=c("DOM").find(l,"li.uiMenuSeparator");k=c("ButtonGroup").getInstance(l);z=new(c("SubscriptionsHandler"))();o={};p={};q={};M.adjustMenuHeights();B();c("TimelineController").register(c("TimelineComponentKeys").STICKY_HEADER_NAV,M);y.forEach(function(Q){Q()});z.addSubscriptions(c("Event").listen(l,"click",L))},reset:function N(){__p&&__p();h=false;j={};v=[];t={};u={};w=false;x=[];i=null;l=null;m=null;n=null;s=null;o={};p={};q={};z.release()},addTimePeriod:function N(O){__p&&__p();var P=c("TimelineController").getCurrentScrubber();if(!P)return;var Q=P.getLabelForNav(O);if(!Q)return;J(m,{key:O,label:Q});var R=c("DOM").find(m,"ul.uiMenuInner");if(O==="recent"||R.children.length<2)c("SelectorDeprecated").setSelected(m,O,true)},updateSection:function N(O,P){if(P){var Q=H(O);c("SelectorDeprecated").setSelected(Q,P)}else q[O]=true;r=O;c("SelectorDeprecated").setSelected(m,O,true);D(O)},adjustMenuHeights:function N(){var O="";c("queryThenMutateDOM")(function(){if(!c("UITinyViewportAction").isTiny()){O=c("Vector").getViewportDimensions().y-c("Vector").getElementDimensions(c("BlueBar").getBar()).y-A;O+="px"}},function(){[l,m].map(function(P){if(P)c("Style").set(c("DOM").find(P,"ul.uiMenuInner"),"maxHeight",O)})})},initPageMenu:function N(O,P){__p&&__p();if(!h){y.push(M.initPageMenu.bind(null,O,P));return}function Q(R,S){R.forEach(function(T){var U=u[T]=c("DOM").create("li");c("CSS").hide(U);S?c("DOM").insertBefore(s,U):c("DOM").appendContent(c("DOM").find(l,"ul.uiMenuInner"),U)})}Q(O,true);Q(P,false);t.info=c("DOM").scry(l,"li")[0];v=P;w=true;if(x.length)x.forEach(function(R){M.registerPageMenuItem(R.key,R.item)})},registerPageMenuItem:function N(O,P){__p&&__p();if(!w){x.push({key:O,item:P});return}if(u[O]){c("DOM").replace(u[O],P);t[O]=P;delete u[O];if(v.indexOf(O)>=0)c("CSS").show(s)}},removeTimePeriod:function N(O){K(m,O)},hideSectionMenu:function N(){if(h)c("CSS").hide(m)}};f.exports=M}),null);
__d("legacy:ui-scrolling-pager-js",["ScrollingPager"],(function a(b,c,d,e,f,g){b.ScrollingPager=c("ScrollingPager")}),3);
__d("ButtonGroupMonitor",["ContextualDialog","ContextualLayer","CSS","Layer","Parent","SelectorDeprecated","DataStore"],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j){var k=c("Parent").byClass(i,"bg_stat_elem")||c("Parent").byClass(i,"uiButtonGroup");if(!k&&j)k=c("DataStore").get(j,"toggleElement",null);if(k){j&&c("DataStore").set(j,"toggleElement",k);c("CSS").toggleClass(k,"uiButtonGroupActive")}}c("Layer").subscribe(["hide","show"],function(i,j){if(j instanceof c("ContextualLayer")||j instanceof c("ContextualDialog"))h(j.getCausalElement(),j)});c("SelectorDeprecated").subscribe(["close","open"],function(i,j){h(j.selector)})}),null);