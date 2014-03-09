goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3941__auto__ = evt;if(and__3941__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3469__auto__ = (((evt == null))?null:evt);return (function (){var or__3943__auto__ = (domina.events.prevent_default[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.prevent_default["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3941__auto__ = evt;if(and__3941__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3469__auto__ = (((evt == null))?null:evt);return (function (){var or__3943__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3941__auto__ = evt;if(and__3941__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3469__auto__ = (((evt == null))?null:evt);return (function (){var or__3943__auto__ = (domina.events.target[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.target["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3941__auto__ = evt;if(and__3941__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3469__auto__ = (((evt == null))?null:evt);return (function (){var or__3943__auto__ = (domina.events.current_target[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.current_target["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3941__auto__ = evt;if(and__3941__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3469__auto__ = (((evt == null))?null:evt);return (function (){var or__3943__auto__ = (domina.events.event_type[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.event_type["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3941__auto__ = evt;if(and__3941__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3941__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3469__auto__ = (((evt == null))?null:evt);return (function (){var or__3943__auto__ = (domina.events.raw_event[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.events.raw_event["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t8257 !== 'undefined')
{} else
{goog.provide('domina.events.t8257');

/**
* @constructor
*/
domina.events.t8257 = (function (evt,f,create_listener_function,meta8258){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta8258 = meta8258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t8257.cljs$lang$type = true;
domina.events.t8257.cljs$lang$ctorStr = "domina.events/t8257";
domina.events.t8257.cljs$lang$ctorPrWriter = (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"domina.events/t8257");
});
domina.events.t8257.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t8257.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var or__3943__auto__ = o.cljs$core$ILookup$_lookup$arity$2(o,k);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return not_found;
}
});
domina.events.t8257.prototype.domina$events$Event$ = true;
domina.events.t8257.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
return self__.evt.preventDefault();
});
domina.events.t8257.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
return self__.evt.stopPropagation();
});
domina.events.t8257.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
return self__.evt.target;
});
domina.events.t8257.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
return self__.evt.currentTarget;
});
domina.events.t8257.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
return self__.evt.type;
});
domina.events.t8257.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
return self__.evt;
});
domina.events.t8257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8259){var self__ = this;
return self__.meta8258;
});
domina.events.t8257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8259,meta8258__$1){var self__ = this;
return (new domina.events.t8257(self__.evt,self__.f,self__.create_listener_function,meta8258__$1));
});
domina.events.__GT_t8257 = (function __GT_t8257(evt__$1,f__$1,create_listener_function__$1,meta8258){return (new domina.events.t8257(evt__$1,f__$1,create_listener_function__$1,meta8258));
});
}
return (new domina.events.t8257(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3569__auto__ = (function iter__8264(s__8265){return (new cljs.core.LazySeq(null,(function (){var s__8265__$1 = s__8265;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8265__$1);if(temp__4092__auto__)
{var s__8265__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8265__$2))
{var c__3567__auto__ = cljs.core.chunk_first.call(null,s__8265__$2);var size__3568__auto__ = cljs.core.count.call(null,c__3567__auto__);var b__8267 = cljs.core.chunk_buffer.call(null,size__3568__auto__);if((function (){var i__8266 = 0;while(true){
if((i__8266 < size__3568__auto__))
{var node = cljs.core._nth.call(null,c__3567__auto__,i__8266);cljs.core.chunk_append.call(null,b__8267,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__8268 = (i__8266 + 1);
i__8266 = G__8268;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8267),iter__8264.call(null,cljs.core.chunk_rest.call(null,s__8265__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8267),null);
}
} else
{var node = cljs.core.first.call(null,s__8265__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__8264.call(null,cljs.core.rest.call(null,s__8265__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3569__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__8277 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8278 = null;var count__8279 = 0;var i__8280 = 0;while(true){
if((i__8280 < count__8279))
{var node = cljs.core._nth.call(null,chunk__8278,i__8280);goog.events.removeAll(node);
{
var G__8285 = seq__8277;
var G__8286 = chunk__8278;
var G__8287 = count__8279;
var G__8288 = (i__8280 + 1);
seq__8277 = G__8285;
chunk__8278 = G__8286;
count__8279 = G__8287;
i__8280 = G__8288;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8277);if(temp__4092__auto__)
{var seq__8277__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8277__$1))
{var c__3600__auto__ = cljs.core.chunk_first.call(null,seq__8277__$1);{
var G__8289 = cljs.core.chunk_rest.call(null,seq__8277__$1);
var G__8290 = c__3600__auto__;
var G__8291 = cljs.core.count.call(null,c__3600__auto__);
var G__8292 = 0;
seq__8277 = G__8289;
chunk__8278 = G__8290;
count__8279 = G__8291;
i__8280 = G__8292;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8277__$1);goog.events.removeAll(node);
{
var G__8293 = cljs.core.next.call(null,seq__8277__$1);
var G__8294 = null;
var G__8295 = 0;
var G__8296 = 0;
seq__8277 = G__8293;
chunk__8278 = G__8294;
count__8279 = G__8295;
i__8280 = G__8296;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__8281 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8282 = null;var count__8283 = 0;var i__8284 = 0;while(true){
if((i__8284 < count__8283))
{var node = cljs.core._nth.call(null,chunk__8282,i__8284);goog.events.removeAll(node,type__$1);
{
var G__8297 = seq__8281;
var G__8298 = chunk__8282;
var G__8299 = count__8283;
var G__8300 = (i__8284 + 1);
seq__8281 = G__8297;
chunk__8282 = G__8298;
count__8283 = G__8299;
i__8284 = G__8300;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8281);if(temp__4092__auto__)
{var seq__8281__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8281__$1))
{var c__3600__auto__ = cljs.core.chunk_first.call(null,seq__8281__$1);{
var G__8301 = cljs.core.chunk_rest.call(null,seq__8281__$1);
var G__8302 = c__3600__auto__;
var G__8303 = cljs.core.count.call(null,c__3600__auto__);
var G__8304 = 0;
seq__8281 = G__8301;
chunk__8282 = G__8302;
count__8283 = G__8303;
i__8284 = G__8304;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8281__$1);goog.events.removeAll(node,type__$1);
{
var G__8305 = cljs.core.next.call(null,seq__8281__$1);
var G__8306 = null;
var G__8307 = 0;
var G__8308 = 0;
seq__8281 = G__8305;
chunk__8282 = G__8306;
count__8283 = G__8307;
i__8284 = G__8308;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__8309 = parent;
var G__8310 = cljs.core.cons.call(null,parent,so_far);
n = G__8309;
so_far = G__8310;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__8319_8327 = cljs.core.seq.call(null,ancestors);var chunk__8320_8328 = null;var count__8321_8329 = 0;var i__8322_8330 = 0;while(true){
if((i__8322_8330 < count__8321_8329))
{var n_8331 = cljs.core._nth.call(null,chunk__8320_8328,i__8322_8330);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8331;
goog.events.fireListeners(n_8331,evt.type,true,evt);
}
{
var G__8332 = seq__8319_8327;
var G__8333 = chunk__8320_8328;
var G__8334 = count__8321_8329;
var G__8335 = (i__8322_8330 + 1);
seq__8319_8327 = G__8332;
chunk__8320_8328 = G__8333;
count__8321_8329 = G__8334;
i__8322_8330 = G__8335;
continue;
}
} else
{var temp__4092__auto___8336 = cljs.core.seq.call(null,seq__8319_8327);if(temp__4092__auto___8336)
{var seq__8319_8337__$1 = temp__4092__auto___8336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8319_8337__$1))
{var c__3600__auto___8338 = cljs.core.chunk_first.call(null,seq__8319_8337__$1);{
var G__8339 = cljs.core.chunk_rest.call(null,seq__8319_8337__$1);
var G__8340 = c__3600__auto___8338;
var G__8341 = cljs.core.count.call(null,c__3600__auto___8338);
var G__8342 = 0;
seq__8319_8327 = G__8339;
chunk__8320_8328 = G__8340;
count__8321_8329 = G__8341;
i__8322_8330 = G__8342;
continue;
}
} else
{var n_8343 = cljs.core.first.call(null,seq__8319_8337__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8343;
goog.events.fireListeners(n_8343,evt.type,true,evt);
}
{
var G__8344 = cljs.core.next.call(null,seq__8319_8337__$1);
var G__8345 = null;
var G__8346 = 0;
var G__8347 = 0;
seq__8319_8327 = G__8344;
chunk__8320_8328 = G__8345;
count__8321_8329 = G__8346;
i__8322_8330 = G__8347;
continue;
}
}
} else
{}
}
break;
}
var seq__8323_8348 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__8324_8349 = null;var count__8325_8350 = 0;var i__8326_8351 = 0;while(true){
if((i__8326_8351 < count__8325_8350))
{var n_8352 = cljs.core._nth.call(null,chunk__8324_8349,i__8326_8351);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8352;
goog.events.fireListeners(n_8352,evt.type,false,evt);
}
{
var G__8353 = seq__8323_8348;
var G__8354 = chunk__8324_8349;
var G__8355 = count__8325_8350;
var G__8356 = (i__8326_8351 + 1);
seq__8323_8348 = G__8353;
chunk__8324_8349 = G__8354;
count__8325_8350 = G__8355;
i__8326_8351 = G__8356;
continue;
}
} else
{var temp__4092__auto___8357 = cljs.core.seq.call(null,seq__8323_8348);if(temp__4092__auto___8357)
{var seq__8323_8358__$1 = temp__4092__auto___8357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8323_8358__$1))
{var c__3600__auto___8359 = cljs.core.chunk_first.call(null,seq__8323_8358__$1);{
var G__8360 = cljs.core.chunk_rest.call(null,seq__8323_8358__$1);
var G__8361 = c__3600__auto___8359;
var G__8362 = cljs.core.count.call(null,c__3600__auto___8359);
var G__8363 = 0;
seq__8323_8348 = G__8360;
chunk__8324_8349 = G__8361;
count__8325_8350 = G__8362;
i__8326_8351 = G__8363;
continue;
}
} else
{var n_8364 = cljs.core.first.call(null,seq__8323_8358__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8364;
goog.events.fireListeners(n_8364,evt.type,false,evt);
}
{
var G__8365 = cljs.core.next.call(null,seq__8323_8358__$1);
var G__8366 = null;
var G__8367 = 0;
var G__8368 = 0;
seq__8323_8348 = G__8365;
chunk__8324_8349 = G__8366;
count__8325_8350 = G__8367;
i__8326_8351 = G__8368;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3941__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3941__auto__))
{return o.dispatchEvent;
} else
{return and__3941__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__8375_8381 = cljs.core.seq.call(null,evt_map);var chunk__8376_8382 = null;var count__8377_8383 = 0;var i__8378_8384 = 0;while(true){
if((i__8378_8384 < count__8377_8383))
{var vec__8379_8385 = cljs.core._nth.call(null,chunk__8376_8382,i__8378_8384);var k_8386 = cljs.core.nth.call(null,vec__8379_8385,0,null);var v_8387 = cljs.core.nth.call(null,vec__8379_8385,1,null);(evt[k_8386] = v_8387);
{
var G__8388 = seq__8375_8381;
var G__8389 = chunk__8376_8382;
var G__8390 = count__8377_8383;
var G__8391 = (i__8378_8384 + 1);
seq__8375_8381 = G__8388;
chunk__8376_8382 = G__8389;
count__8377_8383 = G__8390;
i__8378_8384 = G__8391;
continue;
}
} else
{var temp__4092__auto___8392 = cljs.core.seq.call(null,seq__8375_8381);if(temp__4092__auto___8392)
{var seq__8375_8393__$1 = temp__4092__auto___8392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8375_8393__$1))
{var c__3600__auto___8394 = cljs.core.chunk_first.call(null,seq__8375_8393__$1);{
var G__8395 = cljs.core.chunk_rest.call(null,seq__8375_8393__$1);
var G__8396 = c__3600__auto___8394;
var G__8397 = cljs.core.count.call(null,c__3600__auto___8394);
var G__8398 = 0;
seq__8375_8381 = G__8395;
chunk__8376_8382 = G__8396;
count__8377_8383 = G__8397;
i__8378_8384 = G__8398;
continue;
}
} else
{var vec__8380_8399 = cljs.core.first.call(null,seq__8375_8393__$1);var k_8400 = cljs.core.nth.call(null,vec__8380_8399,0,null);var v_8401 = cljs.core.nth.call(null,vec__8380_8399,1,null);(evt[k_8400] = v_8401);
{
var G__8402 = cljs.core.next.call(null,seq__8375_8393__$1);
var G__8403 = null;
var G__8404 = 0;
var G__8405 = 0;
seq__8375_8381 = G__8402;
chunk__8376_8382 = G__8403;
count__8377_8383 = G__8404;
i__8378_8384 = G__8405;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__8406_SHARP_){return goog.events.getListeners(p1__8406_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
