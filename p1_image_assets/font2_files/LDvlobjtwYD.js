if (self.CavalryLogger) { CavalryLogger.start_js(["obLkf"]); }

__d("NotificationAttachmentUtils",["NotificationAttachmentConfig"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={shouldOpenSnowlift:function i(j){__p&&__p();var k=j.attachments,l=j.feedback_context,m=j.attached_story,n=[];if(k)n.push.apply(n,k);if(l&&l.relevant_comments){var o=l.relevant_comments;o.reduce(function(p,q){return p.concat(q.attachments)},n)}if(m&&m.attachments)n.push.apply(n,m.attachments);return n.some(function(p){if(!p.style_list||!p.style_list.length)return false;var q=p.style_list[0];return!!c("NotificationAttachmentConfig").snowliftStyles[q]})}};f.exports=h}),null);
__d("NotificationConstants",[],(function a(b,c,d,e,f,g){f.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}}}),null);
__d("NotificationPhotoThumbnail",["NotificationAttachmentConfig"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(j){if(!j.media||!j.style_list||!j.style_list.length)return null;var k=j.style_list[0];if(c("NotificationAttachmentConfig").thumbnailStyles[k])return j.media.image;return null}var i={getThumbnailForNotification:function j(k){var l=k.attachments,m=k.attached_story,n=k.feedback_context;return i.getThumbnail(l,m,n)},getThumbnail:function j(k,l,m){__p&&__p();var n=void 0;if(k&&k.length){k.some(function(r){n=h(r);if(n)return true;return false});if(n)return n}if(m){var o=m.relevant_comments;if(o&&o.length){var p=o[0].attachments;if(p&&p.length){n=h(p[0]);if(n)return n}}}if(l){var q=l.attachments;if(q&&q.length)return h(q[0])}return null}};f.exports=i}),null);
__d("NotificationURI",["BusinessURI.brands","URI","VideoPermalinkURI","isFacebookURI"],(function a(b,c,d,e,f,g){__p&&__p();var h={localize:function i(j){try{j=c("BusinessURI.brands")(j)}catch(k){return j.toString()}var l=j.getSubdomain();return j.getUnqualifiedURI().getQualifiedURI().setSubdomain(l).toString()},snowliftable:function i(j){if(!j)return false;var k=new(c("URI"))(j),l=k.getQueryData();return c("isFacebookURI")(k)&&(c("VideoPermalinkURI").isValid(k)||"fbid"in l)},isVaultSetURI:function i(j){return this._areEquals(j,"/ajax/vault/sharer_preview.php")},isAlbumDraftRecoveryDialogURI:function i(j){return this._areEquals(j,"/ajax/photos/upload/overlay/")},isQuicksilverURI:function i(j){return this._areEquals(j,"/games/quicksilver/spotlight/")},isDirectURI:function i(j){return this._startsWith(j,"/direct/")},isIGAccountCreationURI:function i(j){return this._areEquals(j,"/ads/growth/aymt/instagram/account-creation-dialog/")},_areEquals:function i(j,k){if(!j)return false;var l=new(c("URI"))(j);return c("isFacebookURI")(l)&&l.getPath()===k},_startsWith:function i(j,k){if(!j)return false;var l=new(c("URI"))(j);return c("isFacebookURI")(l)&&l.getPath().startsWith(k)}};f.exports=h}),null);
__d("NotificationUtils",["NotificationAttachmentUtils","NotificationURI","URI"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(l){return!!(l&&l.can_render_in_tahoe)}function i(l){return!!(l&&l.bucket_data)}function j(l){return!!(l&&l.video_channel_id)&&!h(l)}var k={getLinkProps:function l(m){__p&&__p();var n=c("NotificationURI").localize(new(c("URI"))(m.url)),o=n;if(j(m.rendererData)||h(m.rendererData)||i(m.rendererData))return{href:o};var p=c("NotificationAttachmentUtils").shouldOpenSnowlift(m)&&c("NotificationURI").snowliftable(n),q=c("NotificationURI").isAlbumDraftRecoveryDialogURI(n),r=p||q?n:m.ajaxify_url||"",s=null;if(p)s="theater";else if(q)s="async-post";else if(c("NotificationURI").isQuicksilverURI(r)||c("NotificationURI").isIGAccountCreationURI(r))s="dialog-post";else if(c("NotificationURI").isDirectURI(n))s="async";else if(r)s="dialog";return{ajaxify:r,href:o,rel:s}}};f.exports=k}),null);
__d("normalizeNotificationPayload",["ix","NotificationPhotoThumbnail","NotificationUtils","idx"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(j){__p&&__p();var k;if(Array.isArray(j.classifications))j.classifications=j.classifications.map(function(u){return u.toUpperCase()});if(Array.isArray(j.eligible_buckets))j.eligible_buckets=j.eligible_buckets.map(function(u){return u.toUpperCase()});if(Object.prototype.hasOwnProperty.call(j,"menu_options")){var l=j,m=l.menu_options;delete l.menu_options;j.notif_option_sets={edges:m&&[{node:{notif_options:{edges:m&&m.map(function(u){return{node:{client_info:{action_type:u.client_action,undo_server_action:u.undo_server_action},server_action:u.server_action,option_display:{text:{text:u.text},subtext:u.subtext!=null?{text:u.subtext}:null,undo_text:u.undo_text}}}})}}}]}}if(Object.prototype.hasOwnProperty.call(j,"previewImage")===false){var n=j,o=c("NotificationPhotoThumbnail").getThumbnailForNotification(n);j.previewImage=o}if(Object.prototype.hasOwnProperty.call(j,"primerAttributes")===false){var p=j,q=c("NotificationUtils").getLinkProps(p);j.primerAttributes={ajaxify:q.ajaxify===undefined?undefined:q.ajaxify,rel:q.rel};delete p.ajaxify_url}if(Object.prototype.hasOwnProperty.call(j,"renderer_data")===false)(function(){__p&&__p();var l=j,u=l.rendererData;if(u&&(Object.prototype.hasOwnProperty.call(u,"bucket_data")||Object.prototype.hasOwnProperty.call(u,"bucket_id")||Object.prototype.hasOwnProperty.call(u,"can_render_in_tahoe")||Object.prototype.hasOwnProperty.call(u,"owner_id")||Object.prototype.hasOwnProperty.call(u,"sender_id")||Object.prototype.hasOwnProperty.call(u,"time_to_hide")||Object.prototype.hasOwnProperty.call(u,"video_channel_caller")||Object.prototype.hasOwnProperty.call(u,"video_channel_id")||Object.prototype.hasOwnProperty.call(u,"video_id"))||l.notif_type==="live_video_explicit"||l.notif_type==="live_video_share"||l.notif_type==="live_video"||l.notif_type==="live_with_video_explicit"||l.notif_type==="live_with_video")j.renderer_data=babelHelpers["extends"]({__typename:"LiveVideoNotificationRendererData"},u,{beeper_time_to_hide:u==null?null:u.time_to_hide,bucket_data:u==null?null:function(){try{return JSON.stringify(u.bucket_data)}catch(w){return null}}()});else if(l.notif_type==="accept_gifted_game"||l.notif_type==="app_content_update"||l.notif_type==="app_invite"||l.notif_type==="app_notification"||l.notif_type==="app_request"||l.notif_type==="decline_gifted_game"||l.notif_type==="send_game_as_gift"){var v=l.app_request_ids;j.renderer_data={__typename:"AppRequestNotificationRendererData",app_request_ids:v?v.split(","):[]}}else j.renderer_data={__typename:"FallbackNotificationRendererData",should_log_menu_exposure:!!(u&&u.logMenuExposure)}})();if(Object.prototype.hasOwnProperty.call(j,"thumbnail")===false){var r,s=j,t=(r=s)!=null?(r=r.actors)!=null?(r=r[0])!=null?(r=r.profile_picture)!=null?r.uri:r:r:r:r;j.thumbnail={uri:t==null?h("97000"):t}}return j}f.exports=i}),null);
__d("normalizeNotificationUpdatePayload",["normalizeNotificationPayload"],(function a(b,c,d,e,f,g){"use strict";function h(i){i=i;if(i.nodes!=null&&Array.isArray(i.nodes))i.nodes=i.nodes.map(c("normalizeNotificationPayload"));return i}f.exports=h}),null);
__d("once",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(j){var k=i(j);for(var l in j)if(Object.prototype.hasOwnProperty.call(j,l))k[l]=j[l];return k}function i(j){var k=j,l=void 0,m=function m(){if(k){l=k.apply(this,arguments);k=null}return l};return m}f.exports=h}),null);
__d("NotificationServerTransport",["invariant","DOM","UIPagelet","compactArray","ifRequired","normalizeNotificationUpdatePayload","objectValues","once","promiseFinally","setImmediateAcrossTransitions","uniqueID"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i={},j={},k={},l={};function m(w){if(l[w]==null){l[w]=c("DOM").create("div",{"class":"hidden_elem",id:w});c("DOM").appendContent(document.documentElement,l[w])}return l[w].id}function n(w){return w.reduce(function(x,y){var z=y.targetNumToLoad;return Math.max(x,z)},0)}function o(w,x,y,z){var A=i[x];if(!A||A.clientRequestID!==w)return;A.calls.forEach(function(B){var C=B.onError;if(C)C(z)})}function p(w,x){__p&&__p();var y=x.getHash(),z=i[y];if(!z||z.clientRequestID!==w)return;delete i[y];z.calls.forEach(function(A){var B=A.onCompleted;if(B)B()});if(j[y]!=null)q(x)}function q(w){__p&&__p();var x=w.getHash();if(k[x]!=null)return;k[x]=c("setImmediateAcrossTransitions")(function(){__p&&__p();delete k[x];var y=c("uniqueID")(),z=j[x];delete j[x];if(z==null)return;var A=n(z),B=w.getRequestParams(A);if(B.length<=0){z.forEach(function(F){var G=F.onCompleted;if(G)G()});return}var C=o.bind(this,y,x,w),D=w.getStreamingTransportPageletName();D!=null||h(0);var E=c("UIPagelet").loadFromEndpoint(D,m(y),babelHelpers["extends"]({},B,{clientRequestID:y}),{allowIrrelevantRequests:true,automatic:false,crossPage:true,errorHandler:C,jsNonblock:true,transportErrorHandler:C,usePipe:true,usePostRequest:false});i[x]={calls:z,clientRequestID:y,endpointState:w,transport:E}}.bind(this))}var r={makeRequest:function w(x,y,z){__p&&__p();var A=z.onChunkResponse,B=z.onCompleted,C=z.onError,D=x.getHash(),E={onChunkResponse:A,onCompleted:B,onError:C,targetNumToLoad:y};v(D);var F=i[D],G=F?n(F.calls)>=y:false;if(G){F!=null||h(0);F.calls.push(E)}else{if(j[D]==null)j[D]=[];j[D].push(E);if(F==null)q(x)}return{remove:function H(){__p&&__p();var F=i[D];if(F!=null){var I=F.calls.indexOf(E);if(I!==-1)F.calls.splice(I,1);if(F.calls.length===0){if(F.transport)F.transport.abandon();delete i[D];if(j[D]!=null)q(x)}}var J=j[D];if(J!=null){var K=J.indexOf(E);if(K!==-1)J.splice(K,1)}}}},handleResponseChunk:function w(x,y){var z=s(x);z.forEach(function(A){A(c("normalizeNotificationUpdatePayload")(y))})},handleRequestCompleted:function w(x){var y=c("objectValues")(i).find(function(y){return y&&y.clientRequestID===x});y||h(0);p(x,y.endpointState)}};function s(w){__p&&__p();var x=Object.keys(i).find(function(B){var C=i[B];return C&&C.clientRequestID===w}),y=x&&i[x];if(!y||!x)return[];var z=y.calls,A=j[x];if(A)z=z.concat(A);return c("compactArray")(z.map(function(B){return B.onChunkResponse}))}function t(w,x){__p&&__p();var y=x.targetNumToLoad,z=x.endpointState,A=x.payloadPromise;if(i[w]!=null)return;var B=c("uniqueID")(),C={calls:[{targetNumToLoad:y}],clientRequestID:B,endpointState:z};i[w]=C;var D=A.then(function(E){var F=s(B);F.forEach(function(G){G(E)})});c("promiseFinally")(D,function(){p(B,z)}).done()}var u=function u(w){c("ifRequired")("NotificationEagerLoader",function(x){var y=x.eagerlyLoadedData;if(y.hasData&&w===y.endpointState.getHash())t(w,y)})},v=c("once")(u);f.exports=r}),null);
__d("NotificationServerTransportLegacy",["AsyncRequest","normalizeNotificationUpdatePayload"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={makeRequest:function i(j,k,l){__p&&__p();var m=l.onError,n=l.onChunkResponse,o=l.onCompleted,p=true;function q(u){if(!p)return;var v=c("normalizeNotificationUpdatePayload")(u.getPayload());try{n(v)}finally{o()}}function r(u){if(!p)return;if(m)m(u)}var s=j.getRequestParams(k);if(s.length<=0){o();return{remove:function u(){}}}var t=new(c("AsyncRequest"))(j.endpointURI).setAllowCrossPageTransition(true).setData(s).setErrorHandler(r).setTransportErrorHandler(r).setHandler(q);t.send();return{remove:function u(){p=false;t.abandon()}}}};f.exports=h}),null);
__d("sortBy",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i,j){__p&&__p();var k=i.map(function(l,m){return{index:m,sortValue:j(l),value:l}});k.sort(function(l,m){var n=l.sortValue,o=m.sortValue;if(n>o)return 1;if(n<o)return-1;return l.index-m.index});return k.map(function(l){return l.value})}f.exports=h}),null);
__d("NotificationStore",["ErrorUtils","NotificationConstants","NotificationEndpointState","NotificationListConfig","NotificationsDefaultEndpointURI","NotificationServerTransport","NotificationServerTransportLegacy","NotificationUpdates","QE2Logger","createObjectBy","distinctArrayBy","flatMapArray","objectValues","sortBy","sprintf"],(function a(b,c,d,e,f,g){__p&&__p();var h={};function i(p,q,r){return p.page_info!=null&&q.classification==r.classification&&q.endpointURI===r.endpointURI&&q.filter==r.filter}function j(p){if(!p.eligible_buckets||!p.eligible_buckets.includes("PRIORITY_INBOX"))p.eligible_buckets=["PRIORITY_INBOX"].concat(p.eligible_buckets||[]);if(!p.sort_keys){var q=p.creation_time||Date.now()/1e3;p.sort_keys=[""+q,q+"000000"]}return p}function k(p){if(p.nodes&&p.payloadsource===c("NotificationConstants").PayloadSourceType.LIVE_SEND)return babelHelpers["extends"]({},p,{nodes:p.nodes.map(j)});return p}function l(p,q){__p&&__p();p=k(p);var r={};c("NotificationEndpointState").getAllInstances(q.endpointURI).forEach(function(s){__p&&__p();var t=void 0;if(i(p,s,q)){s.graphQLPageInfo=p.page_info;t=p}else if(p.payloadsource===c("NotificationConstants").PayloadSourceType.SYNC&&q.endpointURI===c("NotificationsDefaultEndpointURI")&&s.classification==null&&s.filter==null)t=p;else t=babelHelpers["extends"]({},p,{nodes:p.nodes?p.nodes.filter(function(v){return m(v,s)}):undefined});if(t.nodes&&t.nodes.length>0){var u=n(s,t);if(u!=null)u.forEach(function(v){r[v]=true})}});c("NotificationUpdates").didUpdateNotifications(Object.keys(r))}function m(p,q){__p&&__p();var r=q.classification,s=q.filter,t=q.notifications,u=q.order,v=u.getAllResources();v.length===0;if(v.length>0){var w=v[0],x=t.getResource(w);if(x.creation_time>=p.creation_time)return false}if(r&&(!p.classifications||!p.classifications.includes(r)))return false;if(s&&s==="read"!==(p.seen_state==="SEEN_AND_READ"))return false;return true}function n(p,q){__p&&__p();var r=[],s={};if(q.nodes&&q.nodes.length>0)q.nodes.forEach(function(t){var u=t.alert_id,v=p.notifications.getResource(u);if(!v||v.creation_time<t.creation_time){r.push(u);s[u]=t}});p.notifications.addResourcesAndExecute(s);p.order.addResources(r);return r}c("NotificationUpdates").subscribe("update-notifications",function(p,q){if(q.payloadsource!==c("NotificationConstants").PayloadSourceType.ENDPOINT)l(q,{endpointURI:q.endpoint!=null?q.endpoint:c("NotificationsDefaultEndpointURI")})});var o={getNotifications:function p(q,r,s){__p&&__p();var t=c("NotificationEndpointState").getInstance(r),u=t.notifications,v=t.order,w=void 0,x=v.executeOrEnqueue(0,q,function(G){if(s){w=u.executeOrEnqueue(G,s);var H=u.getUnavailableResources(w);if(H.length>0)c("ErrorUtils").reportError(new Error(c("sprintf")("The range for this endpoint contained notification IDs for which we have no payload (Notification IDs: `%s`. Endpoint config: `%s`).",JSON.stringify(H),JSON.stringify(t.getConfig()))))}});function y(){v.unsubscribe(x);if(w)u.unsubscribe(w)}if(v.getUnavailableResources(x).length===0)return{remove:y};if(!o.canFetchMore(r)){v.forceRunCallbacks();return{remove:y}}var z=t.getHash();if(h[z]==null)h[z]=1;else h[z]++;function A(){h[z]--;if(h[z]===0)v.forceRunCallbacks()}function B(G){if(!(G&&G.nodes))return;c("NotificationUpdates").handleUpdate(c("NotificationConstants").PayloadSourceType.ENDPOINT,G,r.filter,r.classification);l(babelHelpers["extends"]({},G,{payloadsource:c("NotificationConstants").PayloadSourceType.ENDPOINT}),r)}function C(){h[z]--;if(h[z]===0)v.forceRunCallbacks()}var D=void 0;if(c("NotificationListConfig").useStreamingTransport&&t.getStreamingTransportPageletName()!=null)D=c("NotificationServerTransport");else D=c("NotificationServerTransportLegacy");if(r.endpointURI===c("NotificationsDefaultEndpointURI"))c("QE2Logger").logExposureForUser("www_notifications_perf_h2_2017");var E=D.makeRequest(t,q,{onChunkResponse:B,onCompleted:C,onError:A}),F=E.remove;return{remove:function G(){y();F()}}},getNotification:function p(q){var r=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],s=r.classification,t=r.endpointURI,u=t===undefined?c("NotificationsDefaultEndpointURI"):t,v=r.filter,w=c("NotificationEndpointState").getInstance({classification:s,endpointURI:u,filter:v}),x=w.notifications;return x.getResource(q)},getAllForAllEndpoints:function p(){var q=c("NotificationEndpointState").getAllInstances(),r=c("flatMapArray")(q,function(v){var w=this.getAll(v.getConfig());return c("objectValues")(w)}.bind(this)),s=c("sortBy")(r,function(v){return v.creation_time}),t=s.reverse(),u=c("distinctArrayBy")(t,function(v){return v.alert_id});return c("createObjectBy")(u,function(v){return v.alert_id})},getAll:function p(q){var r=c("NotificationEndpointState").getInstance(q),s=r.notifications,t=r.order,u={};t.getAllResources().forEach(function(v){var w=s.getResource(v);if(w==null)c("ErrorUtils").reportError(new Error(c("sprintf")("The range for this endpoint contained a notification ID for which we have no payload (Notification ID: `%s`. Endpoint config: `%s`).",v,JSON.stringify(q))));else u[v]=w});return u},getCount:function p(q){var r=c("NotificationEndpointState").getInstance(q);return r.order.getAllResources().length},canFetchMore:function p(q){var r=c("NotificationEndpointState").getInstance(q),s=r.graphQLPageInfo;return!s||!Object.prototype.hasOwnProperty.call(s,"has_next_page")||s.has_next_page},registerEndpoint:function p(q){c("NotificationEndpointState").getInstance(q)}};o.registerEndpoint({endpointURI:c("NotificationsDefaultEndpointURI")});f.exports=o}),null);
__d("NotificationTokens",["CurrentUser"],(function a(b,c,d,e,f,g){var h={tokenizeIDs:function i(j){return j.map(function(k){return c("CurrentUser").getID()+":"+k})},untokenizeIDs:function i(j){return j.map(function(k){return k.split(":")[1]})}};f.exports=h}),null);
__d("NotificationUpdates",["Arbiter","AsyncRequest","BusinessUserConf","ChannelConstants","JSLogger","LiveTimer","NotificationConstants","NotificationTokens","createObjectFrom","normalizeNotificationUpdatePayload","NotificationStore"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i={},j={},k={},l=false,m=[],n=0,o=void 0,p=new(c("Arbiter"))(),q=c("JSLogger").create("notification_updates");function r(){__p&&__p();if(n)return;var w=h,x=i,y=j,z=k;h={};i={};j={};k={};if(Object.keys(w).length||l){l=false;t("notifications-updated",w)}if(Object.keys(x).length)t("seen-state-updated",x);if(Object.keys(y).length)t("read-state-updated",y);if(Object.keys(z).length)t("hidden-state-updated",z);m.pop()}function s(){if(m.length)return m[m.length-1];return c("NotificationConstants").PayloadSourceType.UNKNOWN}function t(event,w){v.inform(event,{updates:w,source:s()})}var u=null,v={getserverTime:function w(){return u},setEndPoint:function w(x){o=x},handleUpdate:function w(x,y,z,A){__p&&__p();y=c("normalizeNotificationUpdatePayload")(y);if(y.nodes&&Array.isArray(y.nodes))y.nodes=this._filterNodesBasedOnBusinessUser(y.nodes,c("BusinessUserConf").businessUserID);if(y.servertime){u=y.servertime;c("LiveTimer").restart(y.servertime)}var B=y.nodes;if(o&&x===c("NotificationConstants").PayloadSourceType.LIVE_SEND&&B&&Array.isArray(B)&&B.length>0){var C=c("NotificationStore"),D={classification:A,endpointURI:o,filter:z};if(C.getCount(D)>0||!C.canFetchMore(D))return;new(c("AsyncRequest"))(o).setAllowCrossPageTransition(true).setData({businessUserID:c("BusinessUserConf").businessUserID,classification:A!=null?A.toLowerCase():null,filter:z,length:B.length}).setHandler(function(E){__p&&__p();var y=E.getPayload();if(y==null)return;var F=y.nodes;if(F==null||F.length===0)return;var G={};F.forEach(function(H){var I=H.alert_id;G[I]=true});y.nodes=B.filter(function(H){var I=H.alert_id;return G[I]===true});if(y.nodes.length>0)this._updateWithPayload(x,y)}.bind(this)).send()}else this._updateWithPayload(x,y)},_updateWithPayload:function w(x,y){if(Object.keys(y).length)this.synchronizeInforms(function(){m.push(x);var z=babelHelpers["extends"]({},y,{payloadsource:s()});this.inform("update-notifications",z);this.inform("update-seen",z);this.inform("update-read",z);this.inform("update-hidden",z)}.bind(this))},getArbiter:function w(){return p},inform:function w(event,x){return p.inform(event,x)},subscribe:function w(event,x){return p.subscribe(event,x)},didUpdateNotifications:function w(x){Object.assign(h,c("createObjectFrom")(x));l=true;r()},didUpdateSeenState:function w(x){Object.assign(i,c("createObjectFrom")(x));r()},didUpdateReadState:function w(x){Object.assign(j,c("createObjectFrom")(x));r()},didUpdateHiddenState:function w(x){Object.assign(k,c("createObjectFrom")(x));r()},synchronizeInforms:function w(x){n++;try{x()}catch(y){throw y}finally{n--;r()}},_filterNodesBasedOnBusinessUser:function w(x,y){return x.filter(function(z){return y==z.biz_user_id})}};c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("notification_json"),function(w,x){var y=Date.now(),z=x.obj.nodes;if(z){z.forEach(function(B){B.receivedTime=y});q.debug("notifications_received",z);var A=x.obj.servertime;v.handleUpdate(c("NotificationConstants").PayloadSourceType.LIVE_SEND,{nodes:z,servertime:A})}});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("notifications_seen"),function(w,x){var y=c("NotificationTokens").tokenizeIDs(x.obj.alert_ids),z=x.obj.new_state;v.handleUpdate(c("NotificationConstants").PayloadSourceType.LIVE_SEND,{seenState:c("createObjectFrom")(y,z)})});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("notifications_read"),function(w,x){var y=c("NotificationTokens").tokenizeIDs(x.obj.alert_ids),z=x.obj.new_state;v.handleUpdate(c("NotificationConstants").PayloadSourceType.LIVE_SEND,{readState:c("createObjectFrom")(y,z)})});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("notification_hidden"),function(w,x){var y=c("NotificationTokens").tokenizeIDs([x.obj.notif_id+""]),z=x.obj.state===1;v.handleUpdate(c("NotificationConstants").PayloadSourceType.LIVE_SEND,{hiddenState:c("createObjectFrom")(y,z)})});f.exports=v}),null);
__d("NotificationOptionActionWebGraphQLMutation",["WebGraphQLMutationBase"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();f.exports=function(){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("WebGraphQLMutationBase"));i=h&&h.prototype;j.__getDocID=function(){"use strict";return"1420844941369152"};j.getQueryID=function(){"use strict";return"318967338567215"};function j(){"use strict";h.apply(this,arguments)}return j}()}),null);
__d("NotificationUserActions",["AsyncRequest","Bootloader","BusinessUserConf","CurrentUser","NotificationConstants","NotificationOptionActionWebGraphQLMutation","NotificationTokens","NotificationUpdates","WebGraphQL","createObjectFrom"],(function a(b,c,d,e,f,g){__p&&__p();var h=c("NotificationConstants").PayloadSourceType.USER_ACTION,i=false;function j(m){if(c("BusinessUserConf").businessUserID!=null)m.biz_user_id=c("BusinessUserConf").businessUserID;new(c("AsyncRequest"))("/ajax/notifications/mark_read.php").setData(m).setAllowCrossPageTransition(true).send()}function k(m){var n={};m.forEach(function(o,p){n["alert_ids["+p+"]"]=o});return n}var l={markNotificationsAsSeen:function m(n){var o=document.getElementById("notificationsCountValue"),p=null;if(o)p=o.textContent;c("NotificationUpdates").handleUpdate(h,{seenState:c("createObjectFrom")(n)});var q=c("NotificationTokens").untokenizeIDs(n),r=k(q);r.seen=true;if(p)r.badgeCount=p;j(r)},setNextIsFromReadButton:function m(n){i=n},markNotificationsAsRead:function m(n,o){c("NotificationUpdates").handleUpdate(h,{readState:c("createObjectFrom")(n,true)});var p=c("NotificationTokens").untokenizeIDs(n),q=k(p);if(i){q.from_read_button=true;i=false}if(o)q.source_view=o;j(q)},markNotificationsAsUnread:function m(n,o){__p&&__p();c("NotificationUpdates").handleUpdate(h,{readState:c("createObjectFrom")(n,false)});var p=c("NotificationTokens").untokenizeIDs(n),q=k(p);if(i){q.from_read_button=true;i=false}q.unread=true;if(o)q.source_view=o;j(q)},markAllNotificationsAsRead:function m(){__p&&__p();c("Bootloader").loadModules(["NotificationSeenState"],function(n){var o=n.getUnreadIDs();if(o.length>0)c("NotificationUpdates").handleUpdate(h,{readState:c("createObjectFrom")(o)});var p={read:true};if(i){p.from_read_button=true;i=false}j(p)},"NotificationUserActions")},sendNotifOption:function m(n){return c("WebGraphQL").exec(new(c("NotificationOptionActionWebGraphQLMutation"))({input:{action_type:n,actor_id:c("CurrentUser").getID(),client_mutation_id:"0"}}))}};f.exports=l}),null);