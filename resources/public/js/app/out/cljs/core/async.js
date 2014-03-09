goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9044 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9044');

/**
* @constructor
*/
cljs.core.async.t9044 = (function (f,fn_handler,meta9045){
this.f = f;
this.fn_handler = fn_handler;
this.meta9045 = meta9045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9044.cljs$lang$type = true;
cljs.core.async.t9044.cljs$lang$ctorStr = "cljs.core.async/t9044";
cljs.core.async.t9044.cljs$lang$ctorPrWriter = (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t9044");
});
cljs.core.async.t9044.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t9044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t9044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9046){var self__ = this;
return self__.meta9045;
});
cljs.core.async.t9044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9046,meta9045__$1){var self__ = this;
return (new cljs.core.async.t9044(self__.f,self__.fn_handler,meta9045__$1));
});
cljs.core.async.__GT_t9044 = (function __GT_t9044(f__$1,fn_handler__$1,meta9045){return (new cljs.core.async.t9044(f__$1,fn_handler__$1,meta9045));
});
}
return (new cljs.core.async.t9044(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9047 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9047);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9047);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3941__auto__ = ret;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3647__auto___9048 = n;var x_9049 = 0;while(true){
if((x_9049 < n__3647__auto___9048))
{(a[x_9049] = 0);
{
var G__9050 = (x_9049 + 1);
x_9049 = G__9050;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9051 = (i + 1);
i = G__9051;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9055 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9055');

/**
* @constructor
*/
cljs.core.async.t9055 = (function (flag,alt_flag,meta9056){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9056 = meta9056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9055.cljs$lang$type = true;
cljs.core.async.t9055.cljs$lang$ctorStr = "cljs.core.async/t9055";
cljs.core.async.t9055.cljs$lang$ctorPrWriter = (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t9055");
});
cljs.core.async.t9055.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9057){var self__ = this;
return self__.meta9056;
});
cljs.core.async.t9055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9057,meta9056__$1){var self__ = this;
return (new cljs.core.async.t9055(self__.flag,self__.alt_flag,meta9056__$1));
});
cljs.core.async.__GT_t9055 = (function __GT_t9055(flag__$1,alt_flag__$1,meta9056){return (new cljs.core.async.t9055(flag__$1,alt_flag__$1,meta9056));
});
}
return (new cljs.core.async.t9055(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9061 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9061');

/**
* @constructor
*/
cljs.core.async.t9061 = (function (cb,flag,alt_handler,meta9062){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9062 = meta9062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9061.cljs$lang$type = true;
cljs.core.async.t9061.cljs$lang$ctorStr = "cljs.core.async/t9061";
cljs.core.async.t9061.cljs$lang$ctorPrWriter = (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t9061");
});
cljs.core.async.t9061.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9063){var self__ = this;
return self__.meta9062;
});
cljs.core.async.t9061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9063,meta9062__$1){var self__ = this;
return (new cljs.core.async.t9061(self__.cb,self__.flag,self__.alt_handler,meta9062__$1));
});
cljs.core.async.__GT_t9061 = (function __GT_t9061(cb__$1,flag__$1,alt_handler__$1,meta9062){return (new cljs.core.async.t9061(cb__$1,flag__$1,alt_handler__$1,meta9062));
});
}
return (new cljs.core.async.t9061(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).call(null,opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9064_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__9064_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3943__auto__ = wport;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__9065 = (i + 1);
i = G__9065;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3943__auto__ = ret;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).call(null,opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9066){var map__9068 = p__9066;var map__9068__$1 = ((cljs.core.seq_QMARK_.call(null,map__9068))?cljs.core.apply.call(null,cljs.core.hash_map,map__9068):map__9068);var opts = map__9068__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9066 = null;if (arguments.length > 1) {
  p__9066 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9066);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9069){
var ports = cljs.core.first(arglist__9069);
var p__9066 = cljs.core.rest(arglist__9069);
return alts_BANG___delegate(ports,p__9066);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9077 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9077');

/**
* @constructor
*/
cljs.core.async.t9077 = (function (ch,f,map_LT_,meta9078){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9078 = meta9078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9077.cljs$lang$type = true;
cljs.core.async.t9077.cljs$lang$ctorStr = "cljs.core.async/t9077";
cljs.core.async.t9077.cljs$lang$ctorPrWriter = (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t9077");
});
cljs.core.async.t9077.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9077.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9080 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9080');

/**
* @constructor
*/
cljs.core.async.t9080 = (function (fn1,_,meta9078,ch,f,map_LT_,meta9081){
this.fn1 = fn1;
this._ = _;
this.meta9078 = meta9078;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9081 = meta9081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9080.cljs$lang$type = true;
cljs.core.async.t9080.cljs$lang$ctorStr = "cljs.core.async/t9080";
cljs.core.async.t9080.cljs$lang$ctorPrWriter = (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t9080");
});
cljs.core.async.t9080.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9080.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__9070_SHARP_){return f1.call(null,(((p1__9070_SHARP_ == null))?null:self__.f.call(null,p1__9070_SHARP_)));
});
;})(f1))
});
cljs.core.async.t9080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9082){var self__ = this;
return self__.meta9081;
});
cljs.core.async.t9080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9082,meta9081__$1){var self__ = this;
return (new cljs.core.async.t9080(self__.fn1,self__._,self__.meta9078,self__.ch,self__.f,self__.map_LT_,meta9081__$1));
});
cljs.core.async.__GT_t9080 = (function __GT_t9080(fn1__$1,___$1,meta9078__$1,ch__$2,f__$2,map_LT___$2,meta9081){return (new cljs.core.async.t9080(fn1__$1,___$1,meta9078__$1,ch__$2,f__$2,map_LT___$2,meta9081));
});
}
return (new cljs.core.async.t9080(fn1,_,self__.meta9078,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3941__auto__ = ret;if(cljs.core.truth_(and__3941__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9077.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9079){var self__ = this;
return self__.meta9078;
});
cljs.core.async.t9077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9079,meta9078__$1){var self__ = this;
return (new cljs.core.async.t9077(self__.ch,self__.f,self__.map_LT_,meta9078__$1));
});
cljs.core.async.__GT_t9077 = (function __GT_t9077(ch__$1,f__$1,map_LT___$1,meta9078){return (new cljs.core.async.t9077(ch__$1,f__$1,map_LT___$1,meta9078));
});
}
return (new cljs.core.async.t9077(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9086 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9086');

/**
* @constructor
*/
cljs.core.async.t9086 = (function (ch,f,map_GT_,meta9087){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9087 = meta9087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9086.cljs$lang$type = true;
cljs.core.async.t9086.cljs$lang$ctorStr = "cljs.core.async/t9086";
cljs.core.async.t9086.cljs$lang$ctorPrWriter = (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t9086");
});
cljs.core.async.t9086.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9086.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9086.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9088){var self__ = this;
return self__.meta9087;
});
cljs.core.async.t9086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9088,meta9087__$1){var self__ = this;
return (new cljs.core.async.t9086(self__.ch,self__.f,self__.map_GT_,meta9087__$1));
});
cljs.core.async.__GT_t9086 = (function __GT_t9086(ch__$1,f__$1,map_GT___$1,meta9087){return (new cljs.core.async.t9086(ch__$1,f__$1,map_GT___$1,meta9087));
});
}
return (new cljs.core.async.t9086(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9092 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9092');

/**
* @constructor
*/
cljs.core.async.t9092 = (function (ch,p,filter_GT_,meta9093){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9093 = meta9093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9092.cljs$lang$type = true;
cljs.core.async.t9092.cljs$lang$ctorStr = "cljs.core.async/t9092";
cljs.core.async.t9092.cljs$lang$ctorPrWriter = (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t9092");
});
cljs.core.async.t9092.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9092.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9092.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9094){var self__ = this;
return self__.meta9093;
});
cljs.core.async.t9092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9094,meta9093__$1){var self__ = this;
return (new cljs.core.async.t9092(self__.ch,self__.p,self__.filter_GT_,meta9093__$1));
});
cljs.core.async.__GT_t9092 = (function __GT_t9092(ch__$1,p__$1,filter_GT___$1,meta9093){return (new cljs.core.async.t9092(ch__$1,p__$1,filter_GT___$1,meta9093));
});
}
return (new cljs.core.async.t9092(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5419__auto___9169 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_9152){var state_val_9153 = (state_9152[1]);if((state_val_9153 === 1))
{var state_9152__$1 = state_9152;var statearr_9154_9170 = state_9152__$1;(statearr_9154_9170[2] = null);
(statearr_9154_9170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9153 === 2))
{var state_9152__$1 = state_9152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9152__$1,4,ch);
} else
{if((state_val_9153 === 3))
{var inst_9150 = (state_9152[2]);var state_9152__$1 = state_9152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9152__$1,inst_9150);
} else
{if((state_val_9153 === 4))
{var inst_9134 = (state_9152[5]);var inst_9134__$1 = (state_9152[2]);var inst_9135 = (inst_9134__$1 == null);var state_9152__$1 = (function (){var statearr_9155 = state_9152;(statearr_9155[5] = inst_9134__$1);
return statearr_9155;
})();if(cljs.core.truth_(inst_9135))
{var statearr_9156_9171 = state_9152__$1;(statearr_9156_9171[1] = 5);
} else
{var statearr_9157_9172 = state_9152__$1;(statearr_9157_9172[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9153 === 5))
{var inst_9137 = cljs.core.async.close_BANG_.call(null,out);var state_9152__$1 = state_9152;var statearr_9158_9173 = state_9152__$1;(statearr_9158_9173[2] = inst_9137);
(statearr_9158_9173[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9153 === 6))
{var inst_9134 = (state_9152[5]);var inst_9139 = p.call(null,inst_9134);var state_9152__$1 = state_9152;if(cljs.core.truth_(inst_9139))
{var statearr_9159_9174 = state_9152__$1;(statearr_9159_9174[1] = 8);
} else
{var statearr_9160_9175 = state_9152__$1;(statearr_9160_9175[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9153 === 7))
{var inst_9148 = (state_9152[2]);var state_9152__$1 = state_9152;var statearr_9161_9176 = state_9152__$1;(statearr_9161_9176[2] = inst_9148);
(statearr_9161_9176[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9153 === 8))
{var inst_9134 = (state_9152[5]);var state_9152__$1 = state_9152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9152__$1,11,out,inst_9134);
} else
{if((state_val_9153 === 9))
{var state_9152__$1 = state_9152;var statearr_9162_9177 = state_9152__$1;(statearr_9162_9177[2] = null);
(statearr_9162_9177[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9153 === 10))
{var inst_9145 = (state_9152[2]);var state_9152__$1 = (function (){var statearr_9163 = state_9152;(statearr_9163[6] = inst_9145);
return statearr_9163;
})();var statearr_9164_9178 = state_9152__$1;(statearr_9164_9178[2] = null);
(statearr_9164_9178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9153 === 11))
{var inst_9142 = (state_9152[2]);var state_9152__$1 = state_9152;var statearr_9165_9179 = state_9152__$1;(statearr_9165_9179[2] = inst_9142);
(statearr_9165_9179[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_9167 = (new Array(7));(statearr_9167[0] = state_machine__5370__auto__);
(statearr_9167[1] = 1);
return statearr_9167;
});
var state_machine__5370__auto____1 = (function (state_9152){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_9152);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_9152){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_9152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_9168 = f__5420__auto__.call(null);(statearr_9168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto___9169);
return statearr_9168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_9327){var state_val_9328 = (state_9327[1]);if((state_val_9328 === 1))
{var state_9327__$1 = state_9327;var statearr_9329_9362 = state_9327__$1;(statearr_9329_9362[2] = null);
(statearr_9329_9362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 2))
{var state_9327__$1 = state_9327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9327__$1,4,in$);
} else
{if((state_val_9328 === 3))
{var inst_9325 = (state_9327[2]);var state_9327__$1 = state_9327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9327__$1,inst_9325);
} else
{if((state_val_9328 === 4))
{var inst_9273 = (state_9327[5]);var inst_9273__$1 = (state_9327[2]);var inst_9274 = (inst_9273__$1 == null);var state_9327__$1 = (function (){var statearr_9330 = state_9327;(statearr_9330[5] = inst_9273__$1);
return statearr_9330;
})();if(cljs.core.truth_(inst_9274))
{var statearr_9331_9363 = state_9327__$1;(statearr_9331_9363[1] = 5);
} else
{var statearr_9332_9364 = state_9327__$1;(statearr_9332_9364[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 5))
{var inst_9276 = cljs.core.async.close_BANG_.call(null,out);var state_9327__$1 = state_9327;var statearr_9333_9365 = state_9327__$1;(statearr_9333_9365[2] = inst_9276);
(statearr_9333_9365[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 6))
{var inst_9273 = (state_9327[5]);var inst_9278 = f.call(null,inst_9273);var inst_9283 = cljs.core.seq.call(null,inst_9278);var inst_9284 = inst_9283;var inst_9285 = null;var inst_9286 = 0;var inst_9287 = 0;var state_9327__$1 = (function (){var statearr_9334 = state_9327;(statearr_9334[6] = inst_9284);
(statearr_9334[7] = inst_9285);
(statearr_9334[8] = inst_9287);
(statearr_9334[9] = inst_9286);
return statearr_9334;
})();var statearr_9335_9366 = state_9327__$1;(statearr_9335_9366[2] = null);
(statearr_9335_9366[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 7))
{var inst_9323 = (state_9327[2]);var state_9327__$1 = state_9327;var statearr_9336_9367 = state_9327__$1;(statearr_9336_9367[2] = inst_9323);
(statearr_9336_9367[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 8))
{var inst_9287 = (state_9327[8]);var inst_9286 = (state_9327[9]);var inst_9289 = (inst_9287 < inst_9286);var inst_9290 = inst_9289;var state_9327__$1 = state_9327;if(cljs.core.truth_(inst_9290))
{var statearr_9337_9368 = state_9327__$1;(statearr_9337_9368[1] = 10);
} else
{var statearr_9338_9369 = state_9327__$1;(statearr_9338_9369[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 9))
{var inst_9320 = (state_9327[2]);var state_9327__$1 = (function (){var statearr_9339 = state_9327;(statearr_9339[10] = inst_9320);
return statearr_9339;
})();var statearr_9340_9370 = state_9327__$1;(statearr_9340_9370[2] = null);
(statearr_9340_9370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 10))
{var inst_9285 = (state_9327[7]);var inst_9287 = (state_9327[8]);var inst_9292 = cljs.core._nth.call(null,inst_9285,inst_9287);var state_9327__$1 = state_9327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9327__$1,13,out,inst_9292);
} else
{if((state_val_9328 === 11))
{var inst_9284 = (state_9327[6]);var inst_9298 = (state_9327[11]);var inst_9298__$1 = cljs.core.seq.call(null,inst_9284);var state_9327__$1 = (function (){var statearr_9344 = state_9327;(statearr_9344[11] = inst_9298__$1);
return statearr_9344;
})();if(inst_9298__$1)
{var statearr_9345_9371 = state_9327__$1;(statearr_9345_9371[1] = 14);
} else
{var statearr_9346_9372 = state_9327__$1;(statearr_9346_9372[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 12))
{var inst_9318 = (state_9327[2]);var state_9327__$1 = state_9327;var statearr_9347_9373 = state_9327__$1;(statearr_9347_9373[2] = inst_9318);
(statearr_9347_9373[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 13))
{var inst_9284 = (state_9327[6]);var inst_9285 = (state_9327[7]);var inst_9287 = (state_9327[8]);var inst_9286 = (state_9327[9]);var inst_9294 = (state_9327[2]);var inst_9295 = (inst_9287 + 1);var tmp9341 = inst_9284;var tmp9342 = inst_9285;var tmp9343 = inst_9286;var inst_9284__$1 = tmp9341;var inst_9285__$1 = tmp9342;var inst_9286__$1 = tmp9343;var inst_9287__$1 = inst_9295;var state_9327__$1 = (function (){var statearr_9348 = state_9327;(statearr_9348[12] = inst_9294);
(statearr_9348[6] = inst_9284__$1);
(statearr_9348[7] = inst_9285__$1);
(statearr_9348[8] = inst_9287__$1);
(statearr_9348[9] = inst_9286__$1);
return statearr_9348;
})();var statearr_9349_9374 = state_9327__$1;(statearr_9349_9374[2] = null);
(statearr_9349_9374[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 14))
{var inst_9298 = (state_9327[11]);var inst_9300 = cljs.core.chunked_seq_QMARK_.call(null,inst_9298);var state_9327__$1 = state_9327;if(inst_9300)
{var statearr_9350_9375 = state_9327__$1;(statearr_9350_9375[1] = 17);
} else
{var statearr_9351_9376 = state_9327__$1;(statearr_9351_9376[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 15))
{var state_9327__$1 = state_9327;var statearr_9352_9377 = state_9327__$1;(statearr_9352_9377[2] = null);
(statearr_9352_9377[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 16))
{var inst_9316 = (state_9327[2]);var state_9327__$1 = state_9327;var statearr_9353_9378 = state_9327__$1;(statearr_9353_9378[2] = inst_9316);
(statearr_9353_9378[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 17))
{var inst_9298 = (state_9327[11]);var inst_9302 = cljs.core.chunk_first.call(null,inst_9298);var inst_9303 = cljs.core.chunk_rest.call(null,inst_9298);var inst_9304 = cljs.core.count.call(null,inst_9302);var inst_9284 = inst_9303;var inst_9285 = inst_9302;var inst_9286 = inst_9304;var inst_9287 = 0;var state_9327__$1 = (function (){var statearr_9354 = state_9327;(statearr_9354[6] = inst_9284);
(statearr_9354[7] = inst_9285);
(statearr_9354[8] = inst_9287);
(statearr_9354[9] = inst_9286);
return statearr_9354;
})();var statearr_9355_9379 = state_9327__$1;(statearr_9355_9379[2] = null);
(statearr_9355_9379[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 18))
{var inst_9298 = (state_9327[11]);var inst_9307 = cljs.core.first.call(null,inst_9298);var state_9327__$1 = state_9327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9327__$1,20,out,inst_9307);
} else
{if((state_val_9328 === 19))
{var inst_9313 = (state_9327[2]);var state_9327__$1 = state_9327;var statearr_9356_9380 = state_9327__$1;(statearr_9356_9380[2] = inst_9313);
(statearr_9356_9380[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9328 === 20))
{var inst_9298 = (state_9327[11]);var inst_9309 = (state_9327[2]);var inst_9310 = cljs.core.next.call(null,inst_9298);var inst_9284 = inst_9310;var inst_9285 = null;var inst_9286 = 0;var inst_9287 = 0;var state_9327__$1 = (function (){var statearr_9357 = state_9327;(statearr_9357[13] = inst_9309);
(statearr_9357[6] = inst_9284);
(statearr_9357[7] = inst_9285);
(statearr_9357[8] = inst_9287);
(statearr_9357[9] = inst_9286);
return statearr_9357;
})();var statearr_9358_9381 = state_9327__$1;(statearr_9358_9381[2] = null);
(statearr_9358_9381[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_9360 = (new Array(14));(statearr_9360[0] = state_machine__5370__auto__);
(statearr_9360[1] = 1);
return statearr_9360;
});
var state_machine__5370__auto____1 = (function (state_9327){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_9327);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_9327){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_9327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_9361 = f__5420__auto__.call(null);(statearr_9361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto__);
return statearr_9361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return c__5419__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5419__auto___9454 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_9437){var state_val_9438 = (state_9437[1]);if((state_val_9438 === 1))
{var state_9437__$1 = state_9437;var statearr_9439_9455 = state_9437__$1;(statearr_9439_9455[2] = null);
(statearr_9439_9455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9438 === 2))
{var state_9437__$1 = state_9437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9437__$1,4,from);
} else
{if((state_val_9438 === 3))
{var inst_9435 = (state_9437[2]);var state_9437__$1 = state_9437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9437__$1,inst_9435);
} else
{if((state_val_9438 === 4))
{var inst_9420 = (state_9437[5]);var inst_9420__$1 = (state_9437[2]);var inst_9421 = (inst_9420__$1 == null);var state_9437__$1 = (function (){var statearr_9440 = state_9437;(statearr_9440[5] = inst_9420__$1);
return statearr_9440;
})();if(cljs.core.truth_(inst_9421))
{var statearr_9441_9456 = state_9437__$1;(statearr_9441_9456[1] = 5);
} else
{var statearr_9442_9457 = state_9437__$1;(statearr_9442_9457[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9438 === 5))
{var state_9437__$1 = state_9437;if(cljs.core.truth_(close_QMARK_))
{var statearr_9443_9458 = state_9437__$1;(statearr_9443_9458[1] = 8);
} else
{var statearr_9444_9459 = state_9437__$1;(statearr_9444_9459[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9438 === 6))
{var inst_9420 = (state_9437[5]);var state_9437__$1 = state_9437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9437__$1,11,to,inst_9420);
} else
{if((state_val_9438 === 7))
{var inst_9433 = (state_9437[2]);var state_9437__$1 = state_9437;var statearr_9445_9460 = state_9437__$1;(statearr_9445_9460[2] = inst_9433);
(statearr_9445_9460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9438 === 8))
{var inst_9424 = cljs.core.async.close_BANG_.call(null,to);var state_9437__$1 = state_9437;var statearr_9446_9461 = state_9437__$1;(statearr_9446_9461[2] = inst_9424);
(statearr_9446_9461[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9438 === 9))
{var state_9437__$1 = state_9437;var statearr_9447_9462 = state_9437__$1;(statearr_9447_9462[2] = null);
(statearr_9447_9462[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9438 === 10))
{var inst_9427 = (state_9437[2]);var state_9437__$1 = state_9437;var statearr_9448_9463 = state_9437__$1;(statearr_9448_9463[2] = inst_9427);
(statearr_9448_9463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9438 === 11))
{var inst_9430 = (state_9437[2]);var state_9437__$1 = (function (){var statearr_9449 = state_9437;(statearr_9449[6] = inst_9430);
return statearr_9449;
})();var statearr_9450_9464 = state_9437__$1;(statearr_9450_9464[2] = null);
(statearr_9450_9464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_9452 = (new Array(7));(statearr_9452[0] = state_machine__5370__auto__);
(statearr_9452[1] = 1);
return statearr_9452;
});
var state_machine__5370__auto____1 = (function (state_9437){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_9437);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_9437){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_9437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_9453 = f__5420__auto__.call(null);(statearr_9453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto___9454);
return statearr_9453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5419__auto___9543 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_9525){var state_val_9526 = (state_9525[1]);if((state_val_9526 === 1))
{var state_9525__$1 = state_9525;var statearr_9527_9544 = state_9525__$1;(statearr_9527_9544[2] = null);
(statearr_9527_9544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9526 === 2))
{var state_9525__$1 = state_9525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9525__$1,4,ch);
} else
{if((state_val_9526 === 3))
{var inst_9523 = (state_9525[2]);var state_9525__$1 = state_9525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9525__$1,inst_9523);
} else
{if((state_val_9526 === 4))
{var inst_9506 = (state_9525[5]);var inst_9506__$1 = (state_9525[2]);var inst_9507 = (inst_9506__$1 == null);var state_9525__$1 = (function (){var statearr_9528 = state_9525;(statearr_9528[5] = inst_9506__$1);
return statearr_9528;
})();if(cljs.core.truth_(inst_9507))
{var statearr_9529_9545 = state_9525__$1;(statearr_9529_9545[1] = 5);
} else
{var statearr_9530_9546 = state_9525__$1;(statearr_9530_9546[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9526 === 5))
{var inst_9509 = cljs.core.async.close_BANG_.call(null,tc);var inst_9510 = cljs.core.async.close_BANG_.call(null,fc);var state_9525__$1 = (function (){var statearr_9531 = state_9525;(statearr_9531[6] = inst_9509);
return statearr_9531;
})();var statearr_9532_9547 = state_9525__$1;(statearr_9532_9547[2] = inst_9510);
(statearr_9532_9547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9526 === 6))
{var inst_9506 = (state_9525[5]);var inst_9512 = p.call(null,inst_9506);var state_9525__$1 = state_9525;if(cljs.core.truth_(inst_9512))
{var statearr_9533_9548 = state_9525__$1;(statearr_9533_9548[1] = 9);
} else
{var statearr_9534_9549 = state_9525__$1;(statearr_9534_9549[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9526 === 7))
{var inst_9521 = (state_9525[2]);var state_9525__$1 = state_9525;var statearr_9535_9550 = state_9525__$1;(statearr_9535_9550[2] = inst_9521);
(statearr_9535_9550[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9526 === 8))
{var inst_9518 = (state_9525[2]);var state_9525__$1 = (function (){var statearr_9536 = state_9525;(statearr_9536[7] = inst_9518);
return statearr_9536;
})();var statearr_9537_9551 = state_9525__$1;(statearr_9537_9551[2] = null);
(statearr_9537_9551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9526 === 9))
{var state_9525__$1 = state_9525;var statearr_9538_9552 = state_9525__$1;(statearr_9538_9552[2] = tc);
(statearr_9538_9552[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9526 === 10))
{var state_9525__$1 = state_9525;var statearr_9539_9553 = state_9525__$1;(statearr_9539_9553[2] = fc);
(statearr_9539_9553[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9526 === 11))
{var inst_9506 = (state_9525[5]);var inst_9516 = (state_9525[2]);var state_9525__$1 = state_9525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9525__$1,8,inst_9516,inst_9506);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_9541 = (new Array(8));(statearr_9541[0] = state_machine__5370__auto__);
(statearr_9541[1] = 1);
return statearr_9541;
});
var state_machine__5370__auto____1 = (function (state_9525){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_9525);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_9525){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_9525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_9542 = f__5420__auto__.call(null);(statearr_9542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto___9543);
return statearr_9542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_9596){var state_val_9597 = (state_9596[1]);if((state_val_9597 === 7))
{var inst_9592 = (state_9596[2]);var state_9596__$1 = state_9596;var statearr_9598_9610 = state_9596__$1;(statearr_9598_9610[2] = inst_9592);
(statearr_9598_9610[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9597 === 6))
{var inst_9585 = (state_9596[5]);var inst_9582 = (state_9596[6]);var inst_9589 = f.call(null,inst_9582,inst_9585);var inst_9582__$1 = inst_9589;var state_9596__$1 = (function (){var statearr_9599 = state_9596;(statearr_9599[6] = inst_9582__$1);
return statearr_9599;
})();var statearr_9600_9611 = state_9596__$1;(statearr_9600_9611[2] = null);
(statearr_9600_9611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9597 === 5))
{var inst_9582 = (state_9596[6]);var state_9596__$1 = state_9596;var statearr_9601_9612 = state_9596__$1;(statearr_9601_9612[2] = inst_9582);
(statearr_9601_9612[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9597 === 4))
{var inst_9585 = (state_9596[5]);var inst_9585__$1 = (state_9596[2]);var inst_9586 = (inst_9585__$1 == null);var state_9596__$1 = (function (){var statearr_9602 = state_9596;(statearr_9602[5] = inst_9585__$1);
return statearr_9602;
})();if(cljs.core.truth_(inst_9586))
{var statearr_9603_9613 = state_9596__$1;(statearr_9603_9613[1] = 5);
} else
{var statearr_9604_9614 = state_9596__$1;(statearr_9604_9614[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9597 === 3))
{var inst_9594 = (state_9596[2]);var state_9596__$1 = state_9596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9596__$1,inst_9594);
} else
{if((state_val_9597 === 2))
{var state_9596__$1 = state_9596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9596__$1,4,ch);
} else
{if((state_val_9597 === 1))
{var inst_9582 = init;var state_9596__$1 = (function (){var statearr_9605 = state_9596;(statearr_9605[6] = inst_9582);
return statearr_9605;
})();var statearr_9606_9615 = state_9596__$1;(statearr_9606_9615[2] = null);
(statearr_9606_9615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_9608 = (new Array(7));(statearr_9608[0] = state_machine__5370__auto__);
(statearr_9608[1] = 1);
return statearr_9608;
});
var state_machine__5370__auto____1 = (function (state_9596){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_9596);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_9596){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_9596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_9609 = f__5420__auto__.call(null);(statearr_9609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto__);
return statearr_9609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return c__5419__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5419__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_9673){var state_val_9674 = (state_9673[1]);if((state_val_9674 === 1))
{var inst_9653 = cljs.core.seq.call(null,coll);var inst_9654 = inst_9653;var state_9673__$1 = (function (){var statearr_9675 = state_9673;(statearr_9675[5] = inst_9654);
return statearr_9675;
})();var statearr_9676_9690 = state_9673__$1;(statearr_9676_9690[2] = null);
(statearr_9676_9690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9674 === 2))
{var inst_9654 = (state_9673[5]);var state_9673__$1 = state_9673;if(cljs.core.truth_(inst_9654))
{var statearr_9677_9691 = state_9673__$1;(statearr_9677_9691[1] = 4);
} else
{var statearr_9678_9692 = state_9673__$1;(statearr_9678_9692[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9674 === 3))
{var inst_9671 = (state_9673[2]);var state_9673__$1 = state_9673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9673__$1,inst_9671);
} else
{if((state_val_9674 === 4))
{var inst_9654 = (state_9673[5]);var inst_9657 = cljs.core.first.call(null,inst_9654);var state_9673__$1 = state_9673;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9673__$1,7,ch,inst_9657);
} else
{if((state_val_9674 === 5))
{var state_9673__$1 = state_9673;if(cljs.core.truth_(close_QMARK_))
{var statearr_9679_9693 = state_9673__$1;(statearr_9679_9693[1] = 8);
} else
{var statearr_9680_9694 = state_9673__$1;(statearr_9680_9694[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9674 === 6))
{var inst_9669 = (state_9673[2]);var state_9673__$1 = state_9673;var statearr_9681_9695 = state_9673__$1;(statearr_9681_9695[2] = inst_9669);
(statearr_9681_9695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9674 === 7))
{var inst_9654 = (state_9673[5]);var inst_9659 = (state_9673[2]);var inst_9660 = cljs.core.next.call(null,inst_9654);var inst_9654__$1 = inst_9660;var state_9673__$1 = (function (){var statearr_9682 = state_9673;(statearr_9682[6] = inst_9659);
(statearr_9682[5] = inst_9654__$1);
return statearr_9682;
})();var statearr_9683_9696 = state_9673__$1;(statearr_9683_9696[2] = null);
(statearr_9683_9696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9674 === 8))
{var inst_9664 = cljs.core.async.close_BANG_.call(null,ch);var state_9673__$1 = state_9673;var statearr_9684_9697 = state_9673__$1;(statearr_9684_9697[2] = inst_9664);
(statearr_9684_9697[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9674 === 9))
{var state_9673__$1 = state_9673;var statearr_9685_9698 = state_9673__$1;(statearr_9685_9698[2] = null);
(statearr_9685_9698[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9674 === 10))
{var inst_9667 = (state_9673[2]);var state_9673__$1 = state_9673;var statearr_9686_9699 = state_9673__$1;(statearr_9686_9699[2] = inst_9667);
(statearr_9686_9699[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_9688 = (new Array(7));(statearr_9688[0] = state_machine__5370__auto__);
(statearr_9688[1] = 1);
return statearr_9688;
});
var state_machine__5370__auto____1 = (function (state_9673){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_9673);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_9673){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_9673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_9689 = f__5420__auto__.call(null);(statearr_9689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto__);
return statearr_9689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return c__5419__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3941__auto__ = _;if(and__3941__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3469__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3469__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3469__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3469__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t9912 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t9912');

/**
* @constructor
*/
cljs.core.async.t9912 = (function (cs,ch,mult,meta9913){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta9913 = meta9913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9912.cljs$lang$type = true;
cljs.core.async.t9912.cljs$lang$ctorStr = "cljs.core.async/t9912";
cljs.core.async.t9912.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t9912");
});})(cs))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t9912.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t9912.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t9912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9914){var self__ = this;
return self__.meta9913;
});})(cs))
;
cljs.core.async.t9912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9914,meta9913__$1){var self__ = this;
return (new cljs.core.async.t9912(self__.cs,self__.ch,self__.mult,meta9913__$1));
});})(cs))
;
cljs.core.async.__GT_t9912 = ((function (cs){
return (function __GT_t9912(cs__$1,ch__$1,mult__$1,meta9913){return (new cljs.core.async.t9912(cs__$1,ch__$1,mult__$1,meta9913));
});})(cs))
;
}
return (new cljs.core.async.t9912(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5419__auto___10124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_10042){var state_val_10043 = (state_10042[1]);if((state_val_10043 === 32))
{try{var inst_9993 = (state_10042[5]);var inst_9917 = (state_10042[6]);var inst_9999 = cljs.core.async.put_BANG_.call(null,inst_9993,inst_9917,done);var state_10042__$1 = state_10042;var statearr_10046_10125 = state_10042__$1;(statearr_10046_10125[2] = inst_9999);
(statearr_10046_10125[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e10044){if((e10044 instanceof Object))
{var ex__5363__auto__ = e10044;var statearr_10045_10126 = state_10042;(statearr_10045_10126[1] = 31);
(statearr_10045_10126[2] = ex__5363__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10044;
} else
{return null;
}
}
}} else
{if((state_val_10043 === 1))
{var state_10042__$1 = state_10042;var statearr_10047_10127 = state_10042__$1;(statearr_10047_10127[2] = null);
(statearr_10047_10127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 33))
{var inst_10005 = (state_10042[7]);var inst_10007 = cljs.core.chunked_seq_QMARK_.call(null,inst_10005);var state_10042__$1 = state_10042;if(inst_10007)
{var statearr_10048_10128 = state_10042__$1;(statearr_10048_10128[1] = 36);
} else
{var statearr_10049_10129 = state_10042__$1;(statearr_10049_10129[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 2))
{var state_10042__$1 = state_10042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10042__$1,4,ch);
} else
{if((state_val_10043 === 34))
{var state_10042__$1 = state_10042;var statearr_10050_10130 = state_10042__$1;(statearr_10050_10130[2] = null);
(statearr_10050_10130[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 3))
{var inst_10040 = (state_10042[2]);var state_10042__$1 = state_10042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10042__$1,inst_10040);
} else
{if((state_val_10043 === 35))
{var inst_10029 = (state_10042[2]);var state_10042__$1 = state_10042;var statearr_10051_10131 = state_10042__$1;(statearr_10051_10131[2] = inst_10029);
(statearr_10051_10131[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 4))
{var inst_9917 = (state_10042[6]);var inst_9917__$1 = (state_10042[2]);var inst_9918 = (inst_9917__$1 == null);var state_10042__$1 = (function (){var statearr_10052 = state_10042;(statearr_10052[6] = inst_9917__$1);
return statearr_10052;
})();if(cljs.core.truth_(inst_9918))
{var statearr_10053_10132 = state_10042__$1;(statearr_10053_10132[1] = 5);
} else
{var statearr_10054_10133 = state_10042__$1;(statearr_10054_10133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 36))
{var inst_10005 = (state_10042[7]);var inst_10009 = cljs.core.chunk_first.call(null,inst_10005);var inst_10010 = cljs.core.chunk_rest.call(null,inst_10005);var inst_10011 = cljs.core.count.call(null,inst_10009);var inst_9985 = inst_10010;var inst_9986 = inst_10009;var inst_9987 = inst_10011;var inst_9988 = 0;var state_10042__$1 = (function (){var statearr_10055 = state_10042;(statearr_10055[8] = inst_9985);
(statearr_10055[9] = inst_9986);
(statearr_10055[10] = inst_9988);
(statearr_10055[11] = inst_9987);
return statearr_10055;
})();var statearr_10056_10134 = state_10042__$1;(statearr_10056_10134[2] = null);
(statearr_10056_10134[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 5))
{var inst_9924 = cljs.core.deref.call(null,cs);var inst_9925 = cljs.core.seq.call(null,inst_9924);var inst_9926 = inst_9925;var inst_9927 = null;var inst_9928 = 0;var inst_9929 = 0;var state_10042__$1 = (function (){var statearr_10057 = state_10042;(statearr_10057[12] = inst_9929);
(statearr_10057[13] = inst_9926);
(statearr_10057[14] = inst_9927);
(statearr_10057[15] = inst_9928);
return statearr_10057;
})();var statearr_10058_10135 = state_10042__$1;(statearr_10058_10135[2] = null);
(statearr_10058_10135[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 37))
{var inst_10005 = (state_10042[7]);var inst_10014 = cljs.core.first.call(null,inst_10005);var state_10042__$1 = (function (){var statearr_10059 = state_10042;(statearr_10059[16] = inst_10014);
return statearr_10059;
})();var statearr_10060_10136 = state_10042__$1;(statearr_10060_10136[2] = null);
(statearr_10060_10136[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 6))
{var inst_9976 = cljs.core.deref.call(null,cs);var inst_9977 = cljs.core.keys.call(null,inst_9976);var inst_9978 = cljs.core.count.call(null,inst_9977);var inst_9979 = cljs.core.reset_BANG_.call(null,dctr,inst_9978);var inst_9984 = cljs.core.seq.call(null,inst_9977);var inst_9985 = inst_9984;var inst_9986 = null;var inst_9987 = 0;var inst_9988 = 0;var state_10042__$1 = (function (){var statearr_10061 = state_10042;(statearr_10061[8] = inst_9985);
(statearr_10061[9] = inst_9986);
(statearr_10061[10] = inst_9988);
(statearr_10061[11] = inst_9987);
(statearr_10061[17] = inst_9979);
return statearr_10061;
})();var statearr_10062_10137 = state_10042__$1;(statearr_10062_10137[2] = null);
(statearr_10062_10137[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 38))
{var inst_10026 = (state_10042[2]);var state_10042__$1 = state_10042;var statearr_10063_10138 = state_10042__$1;(statearr_10063_10138[2] = inst_10026);
(statearr_10063_10138[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 7))
{var inst_10038 = (state_10042[2]);var state_10042__$1 = state_10042;var statearr_10064_10139 = state_10042__$1;(statearr_10064_10139[2] = inst_10038);
(statearr_10064_10139[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 39))
{var inst_10005 = (state_10042[7]);var inst_10022 = (state_10042[2]);var inst_10023 = cljs.core.next.call(null,inst_10005);var inst_9985 = inst_10023;var inst_9986 = null;var inst_9987 = 0;var inst_9988 = 0;var state_10042__$1 = (function (){var statearr_10065 = state_10042;(statearr_10065[8] = inst_9985);
(statearr_10065[9] = inst_9986);
(statearr_10065[10] = inst_9988);
(statearr_10065[11] = inst_9987);
(statearr_10065[18] = inst_10022);
return statearr_10065;
})();var statearr_10066_10140 = state_10042__$1;(statearr_10066_10140[2] = null);
(statearr_10066_10140[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 8))
{var inst_9929 = (state_10042[12]);var inst_9928 = (state_10042[15]);var inst_9931 = (inst_9929 < inst_9928);var inst_9932 = inst_9931;var state_10042__$1 = state_10042;if(cljs.core.truth_(inst_9932))
{var statearr_10067_10141 = state_10042__$1;(statearr_10067_10141[1] = 10);
} else
{var statearr_10068_10142 = state_10042__$1;(statearr_10068_10142[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 40))
{var inst_10014 = (state_10042[16]);var inst_10015 = (state_10042[2]);var inst_10016 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10017 = cljs.core.async.untap_STAR_.call(null,m,inst_10014);var state_10042__$1 = (function (){var statearr_10069 = state_10042;(statearr_10069[19] = inst_10015);
(statearr_10069[20] = inst_10016);
return statearr_10069;
})();var statearr_10070_10143 = state_10042__$1;(statearr_10070_10143[2] = inst_10017);
(statearr_10070_10143[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 9))
{var inst_9974 = (state_10042[2]);var state_10042__$1 = state_10042;var statearr_10071_10144 = state_10042__$1;(statearr_10071_10144[2] = inst_9974);
(statearr_10071_10144[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 41))
{try{var inst_10014 = (state_10042[16]);var inst_9917 = (state_10042[6]);var inst_10020 = cljs.core.async.put_BANG_.call(null,inst_10014,inst_9917,done);var state_10042__$1 = state_10042;var statearr_10074_10145 = state_10042__$1;(statearr_10074_10145[2] = inst_10020);
(statearr_10074_10145[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e10072){if((e10072 instanceof Object))
{var ex__5363__auto__ = e10072;var statearr_10073_10146 = state_10042;(statearr_10073_10146[1] = 40);
(statearr_10073_10146[2] = ex__5363__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10072;
} else
{return null;
}
}
}} else
{if((state_val_10043 === 10))
{var inst_9929 = (state_10042[12]);var inst_9927 = (state_10042[14]);var inst_9935 = cljs.core._nth.call(null,inst_9927,inst_9929);var inst_9936 = cljs.core.nth.call(null,inst_9935,0,null);var inst_9937 = cljs.core.nth.call(null,inst_9935,1,null);var state_10042__$1 = (function (){var statearr_10075 = state_10042;(statearr_10075[21] = inst_9936);
return statearr_10075;
})();if(cljs.core.truth_(inst_9937))
{var statearr_10076_10147 = state_10042__$1;(statearr_10076_10147[1] = 13);
} else
{var statearr_10077_10148 = state_10042__$1;(statearr_10077_10148[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 42))
{var inst_10035 = (state_10042[2]);var state_10042__$1 = (function (){var statearr_10078 = state_10042;(statearr_10078[22] = inst_10035);
return statearr_10078;
})();var statearr_10079_10149 = state_10042__$1;(statearr_10079_10149[2] = null);
(statearr_10079_10149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 11))
{var inst_9946 = (state_10042[23]);var inst_9926 = (state_10042[13]);var inst_9946__$1 = cljs.core.seq.call(null,inst_9926);var state_10042__$1 = (function (){var statearr_10080 = state_10042;(statearr_10080[23] = inst_9946__$1);
return statearr_10080;
})();if(inst_9946__$1)
{var statearr_10081_10150 = state_10042__$1;(statearr_10081_10150[1] = 16);
} else
{var statearr_10082_10151 = state_10042__$1;(statearr_10082_10151[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 12))
{var inst_9972 = (state_10042[2]);var state_10042__$1 = state_10042;var statearr_10083_10152 = state_10042__$1;(statearr_10083_10152[2] = inst_9972);
(statearr_10083_10152[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 13))
{var inst_9936 = (state_10042[21]);var inst_9939 = cljs.core.async.close_BANG_.call(null,inst_9936);var state_10042__$1 = state_10042;var statearr_10087_10153 = state_10042__$1;(statearr_10087_10153[2] = inst_9939);
(statearr_10087_10153[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 14))
{var state_10042__$1 = state_10042;var statearr_10088_10154 = state_10042__$1;(statearr_10088_10154[2] = null);
(statearr_10088_10154[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 15))
{var inst_9929 = (state_10042[12]);var inst_9926 = (state_10042[13]);var inst_9927 = (state_10042[14]);var inst_9928 = (state_10042[15]);var inst_9942 = (state_10042[2]);var inst_9943 = (inst_9929 + 1);var tmp10084 = inst_9926;var tmp10085 = inst_9927;var tmp10086 = inst_9928;var inst_9926__$1 = tmp10084;var inst_9927__$1 = tmp10085;var inst_9928__$1 = tmp10086;var inst_9929__$1 = inst_9943;var state_10042__$1 = (function (){var statearr_10089 = state_10042;(statearr_10089[24] = inst_9942);
(statearr_10089[12] = inst_9929__$1);
(statearr_10089[13] = inst_9926__$1);
(statearr_10089[14] = inst_9927__$1);
(statearr_10089[15] = inst_9928__$1);
return statearr_10089;
})();var statearr_10090_10155 = state_10042__$1;(statearr_10090_10155[2] = null);
(statearr_10090_10155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 16))
{var inst_9946 = (state_10042[23]);var inst_9948 = cljs.core.chunked_seq_QMARK_.call(null,inst_9946);var state_10042__$1 = state_10042;if(inst_9948)
{var statearr_10091_10156 = state_10042__$1;(statearr_10091_10156[1] = 19);
} else
{var statearr_10092_10157 = state_10042__$1;(statearr_10092_10157[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 17))
{var state_10042__$1 = state_10042;var statearr_10093_10158 = state_10042__$1;(statearr_10093_10158[2] = null);
(statearr_10093_10158[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 18))
{var inst_9970 = (state_10042[2]);var state_10042__$1 = state_10042;var statearr_10094_10159 = state_10042__$1;(statearr_10094_10159[2] = inst_9970);
(statearr_10094_10159[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 19))
{var inst_9946 = (state_10042[23]);var inst_9950 = cljs.core.chunk_first.call(null,inst_9946);var inst_9951 = cljs.core.chunk_rest.call(null,inst_9946);var inst_9952 = cljs.core.count.call(null,inst_9950);var inst_9926 = inst_9951;var inst_9927 = inst_9950;var inst_9928 = inst_9952;var inst_9929 = 0;var state_10042__$1 = (function (){var statearr_10095 = state_10042;(statearr_10095[12] = inst_9929);
(statearr_10095[13] = inst_9926);
(statearr_10095[14] = inst_9927);
(statearr_10095[15] = inst_9928);
return statearr_10095;
})();var statearr_10096_10160 = state_10042__$1;(statearr_10096_10160[2] = null);
(statearr_10096_10160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 20))
{var inst_9946 = (state_10042[23]);var inst_9956 = cljs.core.first.call(null,inst_9946);var inst_9957 = cljs.core.nth.call(null,inst_9956,0,null);var inst_9958 = cljs.core.nth.call(null,inst_9956,1,null);var state_10042__$1 = (function (){var statearr_10097 = state_10042;(statearr_10097[25] = inst_9957);
return statearr_10097;
})();if(cljs.core.truth_(inst_9958))
{var statearr_10098_10161 = state_10042__$1;(statearr_10098_10161[1] = 22);
} else
{var statearr_10099_10162 = state_10042__$1;(statearr_10099_10162[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 21))
{var inst_9967 = (state_10042[2]);var state_10042__$1 = state_10042;var statearr_10100_10163 = state_10042__$1;(statearr_10100_10163[2] = inst_9967);
(statearr_10100_10163[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 22))
{var inst_9957 = (state_10042[25]);var inst_9960 = cljs.core.async.close_BANG_.call(null,inst_9957);var state_10042__$1 = state_10042;var statearr_10101_10164 = state_10042__$1;(statearr_10101_10164[2] = inst_9960);
(statearr_10101_10164[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 23))
{var state_10042__$1 = state_10042;var statearr_10102_10165 = state_10042__$1;(statearr_10102_10165[2] = null);
(statearr_10102_10165[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 24))
{var inst_9946 = (state_10042[23]);var inst_9963 = (state_10042[2]);var inst_9964 = cljs.core.next.call(null,inst_9946);var inst_9926 = inst_9964;var inst_9927 = null;var inst_9928 = 0;var inst_9929 = 0;var state_10042__$1 = (function (){var statearr_10103 = state_10042;(statearr_10103[12] = inst_9929);
(statearr_10103[26] = inst_9963);
(statearr_10103[13] = inst_9926);
(statearr_10103[14] = inst_9927);
(statearr_10103[15] = inst_9928);
return statearr_10103;
})();var statearr_10104_10166 = state_10042__$1;(statearr_10104_10166[2] = null);
(statearr_10104_10166[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 25))
{var inst_9988 = (state_10042[10]);var inst_9987 = (state_10042[11]);var inst_9990 = (inst_9988 < inst_9987);var inst_9991 = inst_9990;var state_10042__$1 = state_10042;if(cljs.core.truth_(inst_9991))
{var statearr_10105_10167 = state_10042__$1;(statearr_10105_10167[1] = 27);
} else
{var statearr_10106_10168 = state_10042__$1;(statearr_10106_10168[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 26))
{var inst_10033 = (state_10042[2]);var state_10042__$1 = (function (){var statearr_10107 = state_10042;(statearr_10107[27] = inst_10033);
return statearr_10107;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10042__$1,42,dchan);
} else
{if((state_val_10043 === 27))
{var inst_9986 = (state_10042[9]);var inst_9988 = (state_10042[10]);var inst_9993 = cljs.core._nth.call(null,inst_9986,inst_9988);var state_10042__$1 = (function (){var statearr_10108 = state_10042;(statearr_10108[5] = inst_9993);
return statearr_10108;
})();var statearr_10109_10169 = state_10042__$1;(statearr_10109_10169[2] = null);
(statearr_10109_10169[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 28))
{var inst_9985 = (state_10042[8]);var inst_10005 = (state_10042[7]);var inst_10005__$1 = cljs.core.seq.call(null,inst_9985);var state_10042__$1 = (function (){var statearr_10113 = state_10042;(statearr_10113[7] = inst_10005__$1);
return statearr_10113;
})();if(inst_10005__$1)
{var statearr_10114_10170 = state_10042__$1;(statearr_10114_10170[1] = 33);
} else
{var statearr_10115_10171 = state_10042__$1;(statearr_10115_10171[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 29))
{var inst_10031 = (state_10042[2]);var state_10042__$1 = state_10042;var statearr_10116_10172 = state_10042__$1;(statearr_10116_10172[2] = inst_10031);
(statearr_10116_10172[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 30))
{var inst_9985 = (state_10042[8]);var inst_9986 = (state_10042[9]);var inst_9988 = (state_10042[10]);var inst_9987 = (state_10042[11]);var inst_10001 = (state_10042[2]);var inst_10002 = (inst_9988 + 1);var tmp10110 = inst_9985;var tmp10111 = inst_9986;var tmp10112 = inst_9987;var inst_9985__$1 = tmp10110;var inst_9986__$1 = tmp10111;var inst_9987__$1 = tmp10112;var inst_9988__$1 = inst_10002;var state_10042__$1 = (function (){var statearr_10117 = state_10042;(statearr_10117[8] = inst_9985__$1);
(statearr_10117[9] = inst_9986__$1);
(statearr_10117[10] = inst_9988__$1);
(statearr_10117[28] = inst_10001);
(statearr_10117[11] = inst_9987__$1);
return statearr_10117;
})();var statearr_10118_10173 = state_10042__$1;(statearr_10118_10173[2] = null);
(statearr_10118_10173[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10043 === 31))
{var inst_9993 = (state_10042[5]);var inst_9994 = (state_10042[2]);var inst_9995 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9996 = cljs.core.async.untap_STAR_.call(null,m,inst_9993);var state_10042__$1 = (function (){var statearr_10119 = state_10042;(statearr_10119[29] = inst_9994);
(statearr_10119[30] = inst_9995);
return statearr_10119;
})();var statearr_10120_10174 = state_10042__$1;(statearr_10120_10174[2] = inst_9996);
(statearr_10120_10174[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_10122 = (new Array(31));(statearr_10122[0] = state_machine__5370__auto__);
(statearr_10122[1] = 1);
return statearr_10122;
});
var state_machine__5370__auto____1 = (function (state_10042){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_10042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_10042){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_10042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_10123 = f__5420__auto__.call(null);(statearr_10123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto___10124);
return statearr_10123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3469__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3469__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3469__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3469__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3469__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424));if(and__3941__auto__)
{return !(cljs.core.empty_QMARK_.call(null,solos));
} else
{return and__3941__auto__;
}
})())?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10295 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t10295');

/**
* @constructor
*/
cljs.core.async.t10295 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10296){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10296 = meta10296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10295.cljs$lang$type = true;
cljs.core.async.t10295.cljs$lang$ctorStr = "cljs.core.async/t10295";
cljs.core.async.t10295.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t10295");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10295.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10295.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10295.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10295.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10295.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10295.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10295.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10297){var self__ = this;
return self__.meta10296;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10297,meta10296__$1){var self__ = this;
return (new cljs.core.async.t10295(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10296__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10295 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10295(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10296){return (new cljs.core.async.t10295(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10296));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10295(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5419__auto___10415 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_10368){var state_val_10369 = (state_10368[1]);if((state_val_10369 === 1))
{var inst_10301 = (state_10368[5]);var inst_10301__$1 = calc_state.call(null);var inst_10302 = cljs.core.seq_QMARK_.call(null,inst_10301__$1);var state_10368__$1 = (function (){var statearr_10370 = state_10368;(statearr_10370[5] = inst_10301__$1);
return statearr_10370;
})();if(inst_10302)
{var statearr_10371_10416 = state_10368__$1;(statearr_10371_10416[1] = 2);
} else
{var statearr_10372_10417 = state_10368__$1;(statearr_10372_10417[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 2))
{var inst_10301 = (state_10368[5]);var inst_10304 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10301);var state_10368__$1 = state_10368;var statearr_10373_10418 = state_10368__$1;(statearr_10373_10418[2] = inst_10304);
(statearr_10373_10418[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 3))
{var inst_10301 = (state_10368[5]);var state_10368__$1 = state_10368;var statearr_10374_10419 = state_10368__$1;(statearr_10374_10419[2] = inst_10301);
(statearr_10374_10419[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 4))
{var inst_10301 = (state_10368[5]);var inst_10307 = (state_10368[2]);var inst_10308 = cljs.core.get.call(null,inst_10307,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10309 = cljs.core.get.call(null,inst_10307,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10310 = cljs.core.get.call(null,inst_10307,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10311 = inst_10301;var state_10368__$1 = (function (){var statearr_10375 = state_10368;(statearr_10375[6] = inst_10308);
(statearr_10375[7] = inst_10309);
(statearr_10375[8] = inst_10311);
(statearr_10375[9] = inst_10310);
return statearr_10375;
})();var statearr_10376_10420 = state_10368__$1;(statearr_10376_10420[2] = null);
(statearr_10376_10420[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 5))
{var inst_10311 = (state_10368[8]);var inst_10314 = cljs.core.seq_QMARK_.call(null,inst_10311);var state_10368__$1 = state_10368;if(inst_10314)
{var statearr_10377_10421 = state_10368__$1;(statearr_10377_10421[1] = 7);
} else
{var statearr_10378_10422 = state_10368__$1;(statearr_10378_10422[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 6))
{var inst_10366 = (state_10368[2]);var state_10368__$1 = state_10368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10368__$1,inst_10366);
} else
{if((state_val_10369 === 7))
{var inst_10311 = (state_10368[8]);var inst_10316 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10311);var state_10368__$1 = state_10368;var statearr_10379_10423 = state_10368__$1;(statearr_10379_10423[2] = inst_10316);
(statearr_10379_10423[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 8))
{var inst_10311 = (state_10368[8]);var state_10368__$1 = state_10368;var statearr_10380_10424 = state_10368__$1;(statearr_10380_10424[2] = inst_10311);
(statearr_10380_10424[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 9))
{var inst_10319 = (state_10368[10]);var inst_10319__$1 = (state_10368[2]);var inst_10320 = cljs.core.get.call(null,inst_10319__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10321 = cljs.core.get.call(null,inst_10319__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10322 = cljs.core.get.call(null,inst_10319__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10368__$1 = (function (){var statearr_10381 = state_10368;(statearr_10381[11] = inst_10322);
(statearr_10381[12] = inst_10321);
(statearr_10381[10] = inst_10319__$1);
return statearr_10381;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10368__$1,10,inst_10320);
} else
{if((state_val_10369 === 10))
{var inst_10326 = (state_10368[13]);var inst_10328 = (state_10368[14]);var inst_10325 = (state_10368[2]);var inst_10326__$1 = cljs.core.nth.call(null,inst_10325,0,null);var inst_10327 = cljs.core.nth.call(null,inst_10325,1,null);var inst_10328__$1 = (inst_10326__$1 == null);var state_10368__$1 = (function (){var statearr_10382 = state_10368;(statearr_10382[13] = inst_10326__$1);
(statearr_10382[14] = inst_10328__$1);
(statearr_10382[15] = inst_10327);
return statearr_10382;
})();if(cljs.core.truth_(inst_10328__$1))
{var statearr_10383_10425 = state_10368__$1;(statearr_10383_10425[1] = 11);
} else
{var statearr_10384_10426 = state_10368__$1;(statearr_10384_10426[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 11))
{var inst_10328 = (state_10368[14]);var state_10368__$1 = state_10368;var statearr_10385_10427 = state_10368__$1;(statearr_10385_10427[2] = inst_10328);
(statearr_10385_10427[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 12))
{var inst_10327 = (state_10368[15]);var inst_10331 = cljs.core._EQ_.call(null,inst_10327,change);var state_10368__$1 = state_10368;var statearr_10386_10428 = state_10368__$1;(statearr_10386_10428[2] = inst_10331);
(statearr_10386_10428[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 13))
{var inst_10333 = (state_10368[2]);var state_10368__$1 = state_10368;if(cljs.core.truth_(inst_10333))
{var statearr_10387_10429 = state_10368__$1;(statearr_10387_10429[1] = 14);
} else
{var statearr_10388_10430 = state_10368__$1;(statearr_10388_10430[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 14))
{var inst_10326 = (state_10368[13]);var inst_10335 = (inst_10326 == null);var state_10368__$1 = state_10368;if(cljs.core.truth_(inst_10335))
{var statearr_10389_10431 = state_10368__$1;(statearr_10389_10431[1] = 17);
} else
{var statearr_10390_10432 = state_10368__$1;(statearr_10390_10432[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 15))
{var inst_10322 = (state_10368[11]);var inst_10327 = (state_10368[15]);var inst_10344 = (state_10368[16]);var inst_10344__$1 = inst_10322.call(null,inst_10327);var state_10368__$1 = (function (){var statearr_10391 = state_10368;(statearr_10391[16] = inst_10344__$1);
return statearr_10391;
})();if(cljs.core.truth_(inst_10344__$1))
{var statearr_10392_10433 = state_10368__$1;(statearr_10392_10433[1] = 20);
} else
{var statearr_10393_10434 = state_10368__$1;(statearr_10393_10434[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 16))
{var inst_10364 = (state_10368[2]);var state_10368__$1 = state_10368;var statearr_10394_10435 = state_10368__$1;(statearr_10394_10435[2] = inst_10364);
(statearr_10394_10435[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 17))
{var inst_10327 = (state_10368[15]);var inst_10337 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10327);var state_10368__$1 = state_10368;var statearr_10395_10436 = state_10368__$1;(statearr_10395_10436[2] = inst_10337);
(statearr_10395_10436[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 18))
{var state_10368__$1 = state_10368;var statearr_10396_10437 = state_10368__$1;(statearr_10396_10437[2] = null);
(statearr_10396_10437[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 19))
{var inst_10340 = (state_10368[2]);var inst_10341 = calc_state.call(null);var inst_10311 = inst_10341;var state_10368__$1 = (function (){var statearr_10397 = state_10368;(statearr_10397[17] = inst_10340);
(statearr_10397[8] = inst_10311);
return statearr_10397;
})();var statearr_10398_10438 = state_10368__$1;(statearr_10398_10438[2] = null);
(statearr_10398_10438[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 20))
{var inst_10344 = (state_10368[16]);var state_10368__$1 = state_10368;var statearr_10399_10439 = state_10368__$1;(statearr_10399_10439[2] = inst_10344);
(statearr_10399_10439[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 21))
{var inst_10322 = (state_10368[11]);var inst_10347 = (state_10368[18]);var inst_10347__$1 = cljs.core.empty_QMARK_.call(null,inst_10322);var state_10368__$1 = (function (){var statearr_10400 = state_10368;(statearr_10400[18] = inst_10347__$1);
return statearr_10400;
})();if(inst_10347__$1)
{var statearr_10401_10440 = state_10368__$1;(statearr_10401_10440[1] = 23);
} else
{var statearr_10402_10441 = state_10368__$1;(statearr_10402_10441[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 22))
{var inst_10355 = (state_10368[2]);var state_10368__$1 = state_10368;if(cljs.core.truth_(inst_10355))
{var statearr_10403_10442 = state_10368__$1;(statearr_10403_10442[1] = 26);
} else
{var statearr_10404_10443 = state_10368__$1;(statearr_10404_10443[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 23))
{var inst_10321 = (state_10368[12]);var inst_10327 = (state_10368[15]);var inst_10349 = inst_10321.call(null,inst_10327);var inst_10350 = cljs.core.not.call(null,inst_10349);var state_10368__$1 = state_10368;var statearr_10405_10444 = state_10368__$1;(statearr_10405_10444[2] = inst_10350);
(statearr_10405_10444[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 24))
{var inst_10347 = (state_10368[18]);var state_10368__$1 = state_10368;var statearr_10406_10445 = state_10368__$1;(statearr_10406_10445[2] = inst_10347);
(statearr_10406_10445[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 25))
{var inst_10353 = (state_10368[2]);var state_10368__$1 = state_10368;var statearr_10407_10446 = state_10368__$1;(statearr_10407_10446[2] = inst_10353);
(statearr_10407_10446[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 26))
{var inst_10326 = (state_10368[13]);var state_10368__$1 = state_10368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10368__$1,29,out,inst_10326);
} else
{if((state_val_10369 === 27))
{var state_10368__$1 = state_10368;var statearr_10408_10447 = state_10368__$1;(statearr_10408_10447[2] = null);
(statearr_10408_10447[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 28))
{var inst_10319 = (state_10368[10]);var inst_10361 = (state_10368[2]);var inst_10311 = inst_10319;var state_10368__$1 = (function (){var statearr_10409 = state_10368;(statearr_10409[19] = inst_10361);
(statearr_10409[8] = inst_10311);
return statearr_10409;
})();var statearr_10410_10448 = state_10368__$1;(statearr_10410_10448[2] = null);
(statearr_10410_10448[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10369 === 29))
{var inst_10358 = (state_10368[2]);var state_10368__$1 = state_10368;var statearr_10411_10449 = state_10368__$1;(statearr_10411_10449[2] = inst_10358);
(statearr_10411_10449[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_10413 = (new Array(20));(statearr_10413[0] = state_machine__5370__auto__);
(statearr_10413[1] = 1);
return statearr_10413;
});
var state_machine__5370__auto____1 = (function (state_10368){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_10368);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_10368){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_10368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_10414 = f__5420__auto__.call(null);(statearr_10414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto___10415);
return statearr_10414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3469__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3469__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3469__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3469__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3943__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3943__auto__,mults){
return (function (p1__10450_SHARP_){if(cljs.core.truth_(p1__10450_SHARP_.call(null,topic)))
{return p1__10450_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10450_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10574 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t10574');

/**
* @constructor
*/
cljs.core.async.t10574 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10575){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10575 = meta10575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10574.cljs$lang$type = true;
cljs.core.async.t10574.cljs$lang$ctorStr = "cljs.core.async/t10574";
cljs.core.async.t10574.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3410__auto__,writer__3411__auto__,opt__3412__auto__){return cljs.core._write.call(null,writer__3411__auto__,"cljs.core.async/t10574");
});})(mults,ensure_mult))
;
cljs.core.async.t10574.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10574.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10574.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10574.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10574.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10574.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10576){var self__ = this;
return self__.meta10575;
});})(mults,ensure_mult))
;
cljs.core.async.t10574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10576,meta10575__$1){var self__ = this;
return (new cljs.core.async.t10574(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10575__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10574 = ((function (mults,ensure_mult){
return (function __GT_t10574(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10575){return (new cljs.core.async.t10574(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10575));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10574(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5419__auto___10697 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_10649){var state_val_10650 = (state_10649[1]);if((state_val_10650 === 1))
{var state_10649__$1 = state_10649;var statearr_10651_10698 = state_10649__$1;(statearr_10651_10698[2] = null);
(statearr_10651_10698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 2))
{var state_10649__$1 = state_10649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10649__$1,4,ch);
} else
{if((state_val_10650 === 3))
{var inst_10647 = (state_10649[2]);var state_10649__$1 = state_10649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10649__$1,inst_10647);
} else
{if((state_val_10650 === 4))
{var inst_10579 = (state_10649[5]);var inst_10579__$1 = (state_10649[2]);var inst_10580 = (inst_10579__$1 == null);var state_10649__$1 = (function (){var statearr_10652 = state_10649;(statearr_10652[5] = inst_10579__$1);
return statearr_10652;
})();if(cljs.core.truth_(inst_10580))
{var statearr_10653_10699 = state_10649__$1;(statearr_10653_10699[1] = 5);
} else
{var statearr_10654_10700 = state_10649__$1;(statearr_10654_10700[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 5))
{var inst_10586 = cljs.core.deref.call(null,mults);var inst_10587 = cljs.core.vals.call(null,inst_10586);var inst_10588 = cljs.core.seq.call(null,inst_10587);var inst_10589 = inst_10588;var inst_10590 = null;var inst_10591 = 0;var inst_10592 = 0;var state_10649__$1 = (function (){var statearr_10655 = state_10649;(statearr_10655[6] = inst_10589);
(statearr_10655[7] = inst_10592);
(statearr_10655[8] = inst_10590);
(statearr_10655[9] = inst_10591);
return statearr_10655;
})();var statearr_10656_10701 = state_10649__$1;(statearr_10656_10701[2] = null);
(statearr_10656_10701[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 6))
{var inst_10627 = (state_10649[10]);var inst_10629 = (state_10649[11]);var inst_10579 = (state_10649[5]);var inst_10627__$1 = topic_fn.call(null,inst_10579);var inst_10628 = cljs.core.deref.call(null,mults);var inst_10629__$1 = cljs.core.get.call(null,inst_10628,inst_10627__$1);var state_10649__$1 = (function (){var statearr_10657 = state_10649;(statearr_10657[10] = inst_10627__$1);
(statearr_10657[11] = inst_10629__$1);
return statearr_10657;
})();if(cljs.core.truth_(inst_10629__$1))
{var statearr_10658_10702 = state_10649__$1;(statearr_10658_10702[1] = 19);
} else
{var statearr_10659_10703 = state_10649__$1;(statearr_10659_10703[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 7))
{var inst_10645 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10660_10704 = state_10649__$1;(statearr_10660_10704[2] = inst_10645);
(statearr_10660_10704[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 8))
{var inst_10592 = (state_10649[7]);var inst_10591 = (state_10649[9]);var inst_10594 = (inst_10592 < inst_10591);var inst_10595 = inst_10594;var state_10649__$1 = state_10649;if(cljs.core.truth_(inst_10595))
{var statearr_10664_10705 = state_10649__$1;(statearr_10664_10705[1] = 10);
} else
{var statearr_10665_10706 = state_10649__$1;(statearr_10665_10706[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 9))
{var inst_10625 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10666_10707 = state_10649__$1;(statearr_10666_10707[2] = inst_10625);
(statearr_10666_10707[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 10))
{var inst_10589 = (state_10649[6]);var inst_10592 = (state_10649[7]);var inst_10590 = (state_10649[8]);var inst_10591 = (state_10649[9]);var inst_10597 = cljs.core._nth.call(null,inst_10590,inst_10592);var inst_10598 = cljs.core.async.muxch_STAR_.call(null,inst_10597);var inst_10599 = cljs.core.async.close_BANG_.call(null,inst_10598);var inst_10600 = (inst_10592 + 1);var tmp10661 = inst_10589;var tmp10662 = inst_10590;var tmp10663 = inst_10591;var inst_10589__$1 = tmp10661;var inst_10590__$1 = tmp10662;var inst_10591__$1 = tmp10663;var inst_10592__$1 = inst_10600;var state_10649__$1 = (function (){var statearr_10667 = state_10649;(statearr_10667[12] = inst_10599);
(statearr_10667[6] = inst_10589__$1);
(statearr_10667[7] = inst_10592__$1);
(statearr_10667[8] = inst_10590__$1);
(statearr_10667[9] = inst_10591__$1);
return statearr_10667;
})();var statearr_10668_10708 = state_10649__$1;(statearr_10668_10708[2] = null);
(statearr_10668_10708[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 11))
{var inst_10589 = (state_10649[6]);var inst_10603 = (state_10649[13]);var inst_10603__$1 = cljs.core.seq.call(null,inst_10589);var state_10649__$1 = (function (){var statearr_10669 = state_10649;(statearr_10669[13] = inst_10603__$1);
return statearr_10669;
})();if(inst_10603__$1)
{var statearr_10670_10709 = state_10649__$1;(statearr_10670_10709[1] = 13);
} else
{var statearr_10671_10710 = state_10649__$1;(statearr_10671_10710[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 12))
{var inst_10623 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10672_10711 = state_10649__$1;(statearr_10672_10711[2] = inst_10623);
(statearr_10672_10711[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 13))
{var inst_10603 = (state_10649[13]);var inst_10605 = cljs.core.chunked_seq_QMARK_.call(null,inst_10603);var state_10649__$1 = state_10649;if(inst_10605)
{var statearr_10673_10712 = state_10649__$1;(statearr_10673_10712[1] = 16);
} else
{var statearr_10674_10713 = state_10649__$1;(statearr_10674_10713[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 14))
{var state_10649__$1 = state_10649;var statearr_10675_10714 = state_10649__$1;(statearr_10675_10714[2] = null);
(statearr_10675_10714[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 15))
{var inst_10621 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10676_10715 = state_10649__$1;(statearr_10676_10715[2] = inst_10621);
(statearr_10676_10715[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 16))
{var inst_10603 = (state_10649[13]);var inst_10607 = cljs.core.chunk_first.call(null,inst_10603);var inst_10608 = cljs.core.chunk_rest.call(null,inst_10603);var inst_10609 = cljs.core.count.call(null,inst_10607);var inst_10589 = inst_10608;var inst_10590 = inst_10607;var inst_10591 = inst_10609;var inst_10592 = 0;var state_10649__$1 = (function (){var statearr_10677 = state_10649;(statearr_10677[6] = inst_10589);
(statearr_10677[7] = inst_10592);
(statearr_10677[8] = inst_10590);
(statearr_10677[9] = inst_10591);
return statearr_10677;
})();var statearr_10678_10716 = state_10649__$1;(statearr_10678_10716[2] = null);
(statearr_10678_10716[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 17))
{var inst_10603 = (state_10649[13]);var inst_10612 = cljs.core.first.call(null,inst_10603);var inst_10613 = cljs.core.async.muxch_STAR_.call(null,inst_10612);var inst_10614 = cljs.core.async.close_BANG_.call(null,inst_10613);var inst_10615 = cljs.core.next.call(null,inst_10603);var inst_10589 = inst_10615;var inst_10590 = null;var inst_10591 = 0;var inst_10592 = 0;var state_10649__$1 = (function (){var statearr_10679 = state_10649;(statearr_10679[14] = inst_10614);
(statearr_10679[6] = inst_10589);
(statearr_10679[7] = inst_10592);
(statearr_10679[8] = inst_10590);
(statearr_10679[9] = inst_10591);
return statearr_10679;
})();var statearr_10680_10717 = state_10649__$1;(statearr_10680_10717[2] = null);
(statearr_10680_10717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 18))
{var inst_10618 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10681_10718 = state_10649__$1;(statearr_10681_10718[2] = inst_10618);
(statearr_10681_10718[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 19))
{var state_10649__$1 = state_10649;var statearr_10682_10719 = state_10649__$1;(statearr_10682_10719[2] = null);
(statearr_10682_10719[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 20))
{var state_10649__$1 = state_10649;var statearr_10683_10720 = state_10649__$1;(statearr_10683_10720[2] = null);
(statearr_10683_10720[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 21))
{var inst_10642 = (state_10649[2]);var state_10649__$1 = (function (){var statearr_10684 = state_10649;(statearr_10684[15] = inst_10642);
return statearr_10684;
})();var statearr_10685_10721 = state_10649__$1;(statearr_10685_10721[2] = null);
(statearr_10685_10721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 22))
{var inst_10639 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10686_10722 = state_10649__$1;(statearr_10686_10722[2] = inst_10639);
(statearr_10686_10722[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 23))
{var inst_10627 = (state_10649[10]);var inst_10631 = (state_10649[2]);var inst_10632 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10627);var state_10649__$1 = (function (){var statearr_10687 = state_10649;(statearr_10687[16] = inst_10631);
return statearr_10687;
})();var statearr_10688_10723 = state_10649__$1;(statearr_10688_10723[2] = inst_10632);
(statearr_10688_10723[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10650 === 24))
{try{var inst_10629 = (state_10649[11]);var inst_10579 = (state_10649[5]);var inst_10635 = cljs.core.async.muxch_STAR_.call(null,inst_10629);var state_10649__$1 = state_10649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10649__$1,25,inst_10635,inst_10579);
}catch (e10689){if((e10689 instanceof Object))
{var ex__5363__auto__ = e10689;var statearr_10690_10724 = state_10649;(statearr_10690_10724[1] = 23);
(statearr_10690_10724[2] = ex__5363__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10689;
} else
{return null;
}
}
}} else
{if((state_val_10650 === 25))
{try{var inst_10637 = (state_10649[2]);var state_10649__$1 = state_10649;var statearr_10693_10725 = state_10649__$1;(statearr_10693_10725[2] = inst_10637);
(statearr_10693_10725[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e10691){if((e10691 instanceof Object))
{var ex__5363__auto__ = e10691;var statearr_10692_10726 = state_10649;(statearr_10692_10726[1] = 23);
(statearr_10692_10726[2] = ex__5363__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10691;
} else
{return null;
}
}
}} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_10695 = (new Array(17));(statearr_10695[0] = state_machine__5370__auto__);
(statearr_10695[1] = 1);
return statearr_10695;
});
var state_machine__5370__auto____1 = (function (state_10649){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_10649);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_10649){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_10649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_10696 = f__5420__auto__.call(null);(statearr_10696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto___10697);
return statearr_10696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,java.util.Arrays.copyOf.call(null,rets,cnt));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5419__auto___10857 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_10829){var state_val_10830 = (state_10829[1]);if((state_val_10830 === 1))
{var state_10829__$1 = state_10829;var statearr_10831_10858 = state_10829__$1;(statearr_10831_10858[2] = null);
(statearr_10831_10858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 2))
{var inst_10793 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10794 = 0;var state_10829__$1 = (function (){var statearr_10832 = state_10829;(statearr_10832[5] = inst_10794);
(statearr_10832[6] = inst_10793);
return statearr_10832;
})();var statearr_10833_10859 = state_10829__$1;(statearr_10833_10859[2] = null);
(statearr_10833_10859[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 3))
{var inst_10827 = (state_10829[2]);var state_10829__$1 = state_10829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10829__$1,inst_10827);
} else
{if((state_val_10830 === 4))
{var inst_10794 = (state_10829[5]);var inst_10796 = (inst_10794 < cnt);var state_10829__$1 = state_10829;if(cljs.core.truth_(inst_10796))
{var statearr_10834_10860 = state_10829__$1;(statearr_10834_10860[1] = 6);
} else
{var statearr_10835_10861 = state_10829__$1;(statearr_10835_10861[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 5))
{var inst_10813 = (state_10829[2]);var state_10829__$1 = (function (){var statearr_10836 = state_10829;(statearr_10836[7] = inst_10813);
return statearr_10836;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10829__$1,12,dchan);
} else
{if((state_val_10830 === 6))
{var state_10829__$1 = state_10829;var statearr_10837_10862 = state_10829__$1;(statearr_10837_10862[2] = null);
(statearr_10837_10862[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 7))
{var state_10829__$1 = state_10829;var statearr_10838_10863 = state_10829__$1;(statearr_10838_10863[2] = null);
(statearr_10838_10863[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 8))
{var inst_10811 = (state_10829[2]);var state_10829__$1 = state_10829;var statearr_10839_10864 = state_10829__$1;(statearr_10839_10864[2] = inst_10811);
(statearr_10839_10864[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 9))
{var inst_10794 = (state_10829[5]);var inst_10806 = (state_10829[2]);var inst_10807 = (inst_10794 + 1);var inst_10794__$1 = inst_10807;var state_10829__$1 = (function (){var statearr_10840 = state_10829;(statearr_10840[5] = inst_10794__$1);
(statearr_10840[8] = inst_10806);
return statearr_10840;
})();var statearr_10841_10865 = state_10829__$1;(statearr_10841_10865[2] = null);
(statearr_10841_10865[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 10))
{var inst_10798 = (state_10829[2]);var inst_10799 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10829__$1 = (function (){var statearr_10842 = state_10829;(statearr_10842[9] = inst_10798);
return statearr_10842;
})();var statearr_10843_10866 = state_10829__$1;(statearr_10843_10866[2] = inst_10799);
(statearr_10843_10866[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 11))
{try{var inst_10794 = (state_10829[5]);var inst_10802 = chs__$1.call(null,inst_10794);var inst_10803 = done.call(null,inst_10794);var inst_10804 = cljs.core.async.take_BANG_.call(null,inst_10802,inst_10803);var state_10829__$1 = state_10829;var statearr_10846_10867 = state_10829__$1;(statearr_10846_10867[2] = inst_10804);
(statearr_10846_10867[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e10844){if((e10844 instanceof Object))
{var ex__5363__auto__ = e10844;var statearr_10845_10868 = state_10829;(statearr_10845_10868[1] = 10);
(statearr_10845_10868[2] = ex__5363__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10844;
} else
{return null;
}
}
}} else
{if((state_val_10830 === 12))
{var inst_10815 = (state_10829[10]);var inst_10815__$1 = (state_10829[2]);var inst_10816 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10815__$1);var state_10829__$1 = (function (){var statearr_10847 = state_10829;(statearr_10847[10] = inst_10815__$1);
return statearr_10847;
})();if(cljs.core.truth_(inst_10816))
{var statearr_10848_10869 = state_10829__$1;(statearr_10848_10869[1] = 13);
} else
{var statearr_10849_10870 = state_10829__$1;(statearr_10849_10870[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 13))
{var inst_10818 = cljs.core.async.close_BANG_.call(null,out);var state_10829__$1 = state_10829;var statearr_10850_10871 = state_10829__$1;(statearr_10850_10871[2] = inst_10818);
(statearr_10850_10871[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 14))
{var inst_10815 = (state_10829[10]);var inst_10820 = cljs.core.apply.call(null,f,inst_10815);var state_10829__$1 = state_10829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10829__$1,16,out,inst_10820);
} else
{if((state_val_10830 === 15))
{var inst_10825 = (state_10829[2]);var state_10829__$1 = state_10829;var statearr_10851_10872 = state_10829__$1;(statearr_10851_10872[2] = inst_10825);
(statearr_10851_10872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10830 === 16))
{var inst_10822 = (state_10829[2]);var state_10829__$1 = (function (){var statearr_10852 = state_10829;(statearr_10852[11] = inst_10822);
return statearr_10852;
})();var statearr_10853_10873 = state_10829__$1;(statearr_10853_10873[2] = null);
(statearr_10853_10873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_10855 = (new Array(12));(statearr_10855[0] = state_machine__5370__auto__);
(statearr_10855[1] = 1);
return statearr_10855;
});
var state_machine__5370__auto____1 = (function (state_10829){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_10829);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_10829){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_10829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_10856 = f__5420__auto__.call(null);(statearr_10856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto___10857);
return statearr_10856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5419__auto___10973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5420__auto__ = (function (){var switch__5369__auto__ = (function (state_10953){var state_val_10954 = (state_10953[1]);if((state_val_10954 === 1))
{var inst_10924 = cljs.core.vec.call(null,chs);var inst_10925 = inst_10924;var state_10953__$1 = (function (){var statearr_10955 = state_10953;(statearr_10955[5] = inst_10925);
return statearr_10955;
})();var statearr_10956_10974 = state_10953__$1;(statearr_10956_10974[2] = null);
(statearr_10956_10974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 2))
{var inst_10925 = (state_10953[5]);var inst_10927 = cljs.core.count.call(null,inst_10925);var inst_10928 = (inst_10927 > 0);var state_10953__$1 = state_10953;if(cljs.core.truth_(inst_10928))
{var statearr_10957_10975 = state_10953__$1;(statearr_10957_10975[1] = 4);
} else
{var statearr_10958_10976 = state_10953__$1;(statearr_10958_10976[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 3))
{var inst_10951 = (state_10953[2]);var state_10953__$1 = state_10953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10953__$1,inst_10951);
} else
{if((state_val_10954 === 4))
{var inst_10925 = (state_10953[5]);var state_10953__$1 = state_10953;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10953__$1,7,inst_10925);
} else
{if((state_val_10954 === 5))
{var inst_10947 = cljs.core.async.close_BANG_.call(null,out);var state_10953__$1 = state_10953;var statearr_10959_10977 = state_10953__$1;(statearr_10959_10977[2] = inst_10947);
(statearr_10959_10977[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 6))
{var inst_10949 = (state_10953[2]);var state_10953__$1 = state_10953;var statearr_10960_10978 = state_10953__$1;(statearr_10960_10978[2] = inst_10949);
(statearr_10960_10978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 7))
{var inst_10933 = (state_10953[6]);var inst_10932 = (state_10953[7]);var inst_10932__$1 = (state_10953[2]);var inst_10933__$1 = cljs.core.nth.call(null,inst_10932__$1,0,null);var inst_10934 = cljs.core.nth.call(null,inst_10932__$1,1,null);var inst_10935 = (inst_10933__$1 == null);var state_10953__$1 = (function (){var statearr_10961 = state_10953;(statearr_10961[6] = inst_10933__$1);
(statearr_10961[7] = inst_10932__$1);
(statearr_10961[8] = inst_10934);
return statearr_10961;
})();if(cljs.core.truth_(inst_10935))
{var statearr_10962_10979 = state_10953__$1;(statearr_10962_10979[1] = 8);
} else
{var statearr_10963_10980 = state_10953__$1;(statearr_10963_10980[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 8))
{var inst_10933 = (state_10953[6]);var inst_10932 = (state_10953[7]);var inst_10934 = (state_10953[8]);var inst_10925 = (state_10953[5]);var inst_10937 = (function (){var c = inst_10934;var v = inst_10933;var vec__10930 = inst_10932;var cs = inst_10925;return ((function (c,v,vec__10930,cs,inst_10933,inst_10932,inst_10934,inst_10925,state_val_10954){
return (function (p1__10874_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__10874_SHARP_);
});
;})(c,v,vec__10930,cs,inst_10933,inst_10932,inst_10934,inst_10925,state_val_10954))
})();var inst_10938 = cljs.core.filterv.call(null,inst_10937,inst_10925);var inst_10925__$1 = inst_10938;var state_10953__$1 = (function (){var statearr_10964 = state_10953;(statearr_10964[5] = inst_10925__$1);
return statearr_10964;
})();var statearr_10965_10981 = state_10953__$1;(statearr_10965_10981[2] = null);
(statearr_10965_10981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 9))
{var inst_10933 = (state_10953[6]);var state_10953__$1 = state_10953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10953__$1,11,out,inst_10933);
} else
{if((state_val_10954 === 10))
{var inst_10945 = (state_10953[2]);var state_10953__$1 = state_10953;var statearr_10967_10982 = state_10953__$1;(statearr_10967_10982[2] = inst_10945);
(statearr_10967_10982[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10954 === 11))
{var inst_10925 = (state_10953[5]);var inst_10942 = (state_10953[2]);var tmp10966 = inst_10925;var inst_10925__$1 = tmp10966;var state_10953__$1 = (function (){var statearr_10968 = state_10953;(statearr_10968[9] = inst_10942);
(statearr_10968[5] = inst_10925__$1);
return statearr_10968;
})();var statearr_10969_10983 = state_10953__$1;(statearr_10969_10983[2] = null);
(statearr_10969_10983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5369__auto__){
return (function() {
var state_machine__5370__auto__ = null;
var state_machine__5370__auto____0 = (function (){var statearr_10971 = (new Array(10));(statearr_10971[0] = state_machine__5370__auto__);
(statearr_10971[1] = 1);
return statearr_10971;
});
var state_machine__5370__auto____1 = (function (state_10953){while(true){
var result__5371__auto__ = switch__5369__auto__.call(null,state_10953);if(cljs.core.keyword_identical_QMARK_.call(null,result__5371__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5371__auto__;
}
break;
}
});
state_machine__5370__auto__ = function(state_10953){
switch(arguments.length){
case 0:
return state_machine__5370__auto____0.call(this);
case 1:
return state_machine__5370__auto____1.call(this,state_10953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5370__auto____0;
state_machine__5370__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5370__auto____1;
return state_machine__5370__auto__;
})()
;})(switch__5369__auto__))
})();var state__5421__auto__ = (function (){var statearr_10972 = f__5420__auto__.call(null);(statearr_10972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5419__auto___10973);
return statearr_10972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5421__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
