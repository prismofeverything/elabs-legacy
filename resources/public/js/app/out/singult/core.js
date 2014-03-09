goog.provide('singult.core');
goog.require('cljs.core');
goog.require('singult.coffee');
goog.provide('singult.core.Unify');

/**
* @constructor
* @param {*} data
* @param {*} mapping
* @param {*} key_fn
* @param {*} enter
* @param {*} update
* @param {*} exit
* @param {*} force_update_QMARK_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
singult.core.Unify = (function (data,mapping,key_fn,enter,update,exit,force_update_QMARK_,__meta,__extmap){
this.data = data;
this.mapping = mapping;
this.key_fn = key_fn;
this.enter = enter;
this.update = update;
this.exit = exit;
this.force_update_QMARK_ = force_update_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
singult.core.Unify.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3423__auto__){var self__ = this;
var h__3290__auto__ = self__.__hash;if(!((h__3290__auto__ == null)))
{return h__3290__auto__;
} else
{var h__3290__auto____$1 = cljs.core.hash_imap.call(null,this__3423__auto__);self__.__hash = h__3290__auto____$1;
return h__3290__auto____$1;
}
});
singult.core.Unify.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3428__auto__,k__3429__auto__){var self__ = this;
return this__3428__auto__.cljs$core$ILookup$_lookup$arity$3(this__3428__auto__,k__3429__auto__,null);
});
singult.core.Unify.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3430__auto__,k8872,else__3431__auto__){var self__ = this;
if(cljs.core.keyword_identical_QMARK_.call(null,k8872,new cljs.core.Keyword(null,"data","data",1016980252)))
{return self__.data;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8872,new cljs.core.Keyword(null,"mapping","mapping",1851460672)))
{return self__.mapping;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8872,new cljs.core.Keyword(null,"key-fn","key-fn",4174150248)))
{return self__.key_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8872,new cljs.core.Keyword(null,"enter","enter",1110571594)))
{return self__.enter;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8872,new cljs.core.Keyword(null,"update","update",4470025275)))
{return self__.update;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8872,new cljs.core.Keyword(null,"exit","exit",1017031824)))
{return self__.exit;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8872,new cljs.core.Keyword(null,"force-update?","force-update?",4639172390)))
{return self__.force_update_QMARK_;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k8872,else__3431__auto__);
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
});
singult.core.Unify.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3435__auto__,k__3436__auto__,G__8871){var self__ = this;
var pred__8874 = cljs.core.keyword_identical_QMARK_;var expr__8875 = k__3436__auto__;if(pred__8874.call(null,new cljs.core.Keyword(null,"data","data",1016980252),expr__8875))
{return (new singult.core.Unify(G__8871,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(pred__8874.call(null,new cljs.core.Keyword(null,"mapping","mapping",1851460672),expr__8875))
{return (new singult.core.Unify(self__.data,G__8871,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(pred__8874.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",4174150248),expr__8875))
{return (new singult.core.Unify(self__.data,self__.mapping,G__8871,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(pred__8874.call(null,new cljs.core.Keyword(null,"enter","enter",1110571594),expr__8875))
{return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,G__8871,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(pred__8874.call(null,new cljs.core.Keyword(null,"update","update",4470025275),expr__8875))
{return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,G__8871,self__.exit,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(pred__8874.call(null,new cljs.core.Keyword(null,"exit","exit",1017031824),expr__8875))
{return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,G__8871,self__.force_update_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(pred__8874.call(null,new cljs.core.Keyword(null,"force-update?","force-update?",4639172390),expr__8875))
{return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,G__8871,self__.__meta,self__.__extmap,null));
} else
{return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3436__auto__,G__8871),null));
}
}
}
}
}
}
}
});
singult.core.Unify.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3442__auto__,writer__3443__auto__,opts__3444__auto__){var self__ = this;
var pr_pair__3445__auto__ = (function (keyval__3446__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3443__auto__,cljs.core.pr_writer,""," ","",opts__3444__auto__,keyval__3446__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3443__auto__,pr_pair__3445__auto__,"#singult.core.Unify{",", ","}",opts__3444__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"data","data",1016980252),self__.data),cljs.core.vector.call(null,new cljs.core.Keyword(null,"mapping","mapping",1851460672),self__.mapping),cljs.core.vector.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",4174150248),self__.key_fn),cljs.core.vector.call(null,new cljs.core.Keyword(null,"enter","enter",1110571594),self__.enter),cljs.core.vector.call(null,new cljs.core.Keyword(null,"update","update",4470025275),self__.update),cljs.core.vector.call(null,new cljs.core.Keyword(null,"exit","exit",1017031824),self__.exit),cljs.core.vector.call(null,new cljs.core.Keyword(null,"force-update?","force-update?",4639172390),self__.force_update_QMARK_)], true),self__.__extmap));
});
singult.core.Unify.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3433__auto__,entry__3434__auto__){var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__3434__auto__))
{return this__3433__auto__.cljs$core$IAssociative$_assoc$arity$3(this__3433__auto__,cljs.core._nth.call(null,entry__3434__auto__,0),cljs.core._nth.call(null,entry__3434__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3433__auto__,entry__3434__auto__);
}
});
singult.core.Unify.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3440__auto__){var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"data","data",1016980252),self__.data),cljs.core.vector.call(null,new cljs.core.Keyword(null,"mapping","mapping",1851460672),self__.mapping),cljs.core.vector.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",4174150248),self__.key_fn),cljs.core.vector.call(null,new cljs.core.Keyword(null,"enter","enter",1110571594),self__.enter),cljs.core.vector.call(null,new cljs.core.Keyword(null,"update","update",4470025275),self__.update),cljs.core.vector.call(null,new cljs.core.Keyword(null,"exit","exit",1017031824),self__.exit),cljs.core.vector.call(null,new cljs.core.Keyword(null,"force-update?","force-update?",4639172390),self__.force_update_QMARK_)], true),self__.__extmap));
});
singult.core.Unify.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3432__auto__){var self__ = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});
singult.core.Unify.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3424__auto__,other__3425__auto__){var self__ = this;
if(cljs.core.truth_((function (){var and__3941__auto__ = other__3425__auto__;if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (this__3424__auto__.constructor === other__3425__auto__.constructor);if(and__3941__auto____$1)
{return cljs.core.equiv_map.call(null,this__3424__auto__,other__3425__auto__);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
singult.core.Unify.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3427__auto__,G__8871){var self__ = this;
return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,G__8871,self__.__extmap,self__.__hash));
});
singult.core.Unify.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3426__auto__){var self__ = this;
return self__.__meta;
});
singult.core.Unify.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3437__auto__,k__3438__auto__){var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"data","data",1016980252),null,new cljs.core.Keyword(null,"force-update?","force-update?",4639172390),null,new cljs.core.Keyword(null,"enter","enter",1110571594),null,new cljs.core.Keyword(null,"exit","exit",1017031824),null,new cljs.core.Keyword(null,"key-fn","key-fn",4174150248),null,new cljs.core.Keyword(null,"update","update",4470025275),null,new cljs.core.Keyword(null,"mapping","mapping",1851460672),null], true),k__3438__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3437__auto__),self__.__meta),k__3438__auto__);
} else
{return (new singult.core.Unify(self__.data,self__.mapping,self__.key_fn,self__.enter,self__.update,self__.exit,self__.force_update_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3438__auto__)),null));
}
});
singult.core.Unify.cljs$lang$type = true;
singult.core.Unify.cljs$lang$ctorPrSeq = (function (this__3462__auto__){return cljs.core.list.call(null,"singult.core/Unify");
});
singult.core.Unify.cljs$lang$ctorPrWriter = (function (this__3462__auto__,writer__3463__auto__){return cljs.core._write.call(null,writer__3463__auto__,"singult.core/Unify");
});
singult.core.__GT_Unify = (function __GT_Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_){return (new singult.core.Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_));
});
singult.core.map__GT_Unify = (function map__GT_Unify(G__8873){return (new singult.core.Unify(new cljs.core.Keyword(null,"data","data",1016980252).call(null,G__8873),new cljs.core.Keyword(null,"mapping","mapping",1851460672).call(null,G__8873),new cljs.core.Keyword(null,"key-fn","key-fn",4174150248).call(null,G__8873),new cljs.core.Keyword(null,"enter","enter",1110571594).call(null,G__8873),new cljs.core.Keyword(null,"update","update",4470025275).call(null,G__8873),new cljs.core.Keyword(null,"exit","exit",1017031824).call(null,G__8873),new cljs.core.Keyword(null,"force-update?","force-update?",4639172390).call(null,G__8873),null,cljs.core.dissoc.call(null,G__8873,new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"mapping","mapping",1851460672),new cljs.core.Keyword(null,"key-fn","key-fn",4174150248),new cljs.core.Keyword(null,"enter","enter",1110571594),new cljs.core.Keyword(null,"update","update",4470025275),new cljs.core.Keyword(null,"exit","exit",1017031824),new cljs.core.Keyword(null,"force-update?","force-update?",4639172390))));
});
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
singult.core.clj__GT_js = (function clj__GT_js(x){if((x instanceof singult.core.Unify))
{var map__8897 = x;var map__8897__$1 = ((cljs.core.seq_QMARK_.call(null,map__8897))?cljs.core.apply.call(null,cljs.core.hash_map,map__8897):map__8897);var force_update_QMARK_ = cljs.core.get.call(null,map__8897__$1,new cljs.core.Keyword(null,"force-update?","force-update?",4639172390));var exit = cljs.core.get.call(null,map__8897__$1,new cljs.core.Keyword(null,"exit","exit",1017031824));var update = cljs.core.get.call(null,map__8897__$1,new cljs.core.Keyword(null,"update","update",4470025275));var enter = cljs.core.get.call(null,map__8897__$1,new cljs.core.Keyword(null,"enter","enter",1110571594));var key_fn = cljs.core.get.call(null,map__8897__$1,new cljs.core.Keyword(null,"key-fn","key-fn",4174150248));var mapping = cljs.core.get.call(null,map__8897__$1,new cljs.core.Keyword(null,"mapping","mapping",1851460672));var data = cljs.core.get.call(null,map__8897__$1,new cljs.core.Keyword(null,"data","data",1016980252));var data_arr = (function (){var a = [];var seq__8898_8916 = cljs.core.seq.call(null,data);var chunk__8899_8917 = null;var count__8900_8918 = 0;var i__8901_8919 = 0;while(true){
if((i__8901_8919 < count__8900_8918))
{var d_8920 = cljs.core._nth.call(null,chunk__8899_8917,i__8901_8919);a.push(d_8920);
{
var G__8921 = seq__8898_8916;
var G__8922 = chunk__8899_8917;
var G__8923 = count__8900_8918;
var G__8924 = (i__8901_8919 + 1);
seq__8898_8916 = G__8921;
chunk__8899_8917 = G__8922;
count__8900_8918 = G__8923;
i__8901_8919 = G__8924;
continue;
}
} else
{var temp__4092__auto___8925 = cljs.core.seq.call(null,seq__8898_8916);if(temp__4092__auto___8925)
{var seq__8898_8926__$1 = temp__4092__auto___8925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8898_8926__$1))
{var c__3600__auto___8927 = cljs.core.chunk_first.call(null,seq__8898_8926__$1);{
var G__8928 = cljs.core.chunk_rest.call(null,seq__8898_8926__$1);
var G__8929 = c__3600__auto___8927;
var G__8930 = cljs.core.count.call(null,c__3600__auto___8927);
var G__8931 = 0;
seq__8898_8916 = G__8928;
chunk__8899_8917 = G__8929;
count__8900_8918 = G__8930;
i__8901_8919 = G__8931;
continue;
}
} else
{var d_8932 = cljs.core.first.call(null,seq__8898_8926__$1);a.push(d_8932);
{
var G__8933 = cljs.core.next.call(null,seq__8898_8926__$1);
var G__8934 = null;
var G__8935 = 0;
var G__8936 = 0;
seq__8898_8916 = G__8933;
chunk__8899_8917 = G__8934;
count__8900_8918 = G__8935;
i__8901_8919 = G__8936;
continue;
}
}
} else
{}
}
break;
}
return a;
})();return (new singult.coffee.Unify(data_arr,(function (p1__8877_SHARP_){return clj__GT_js.call(null,mapping.call(null,p1__8877_SHARP_));
}),key_fn,enter,update,exit,force_update_QMARK_));
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var o = {};var seq__8902_8937 = cljs.core.seq.call(null,x);var chunk__8903_8938 = null;var count__8904_8939 = 0;var i__8905_8940 = 0;while(true){
if((i__8905_8940 < count__8904_8939))
{var vec__8906_8941 = cljs.core._nth.call(null,chunk__8903_8938,i__8905_8940);var k_8942 = cljs.core.nth.call(null,vec__8906_8941,0,null);var v_8943 = cljs.core.nth.call(null,vec__8906_8941,1,null);var key_8944 = clj__GT_js.call(null,k_8942);if(typeof key_8944 === 'string')
{} else
{throw "Cannot convert; JavaScript map keys must be strings";
}
(o[key_8944] = clj__GT_js.call(null,v_8943));
{
var G__8945 = seq__8902_8937;
var G__8946 = chunk__8903_8938;
var G__8947 = count__8904_8939;
var G__8948 = (i__8905_8940 + 1);
seq__8902_8937 = G__8945;
chunk__8903_8938 = G__8946;
count__8904_8939 = G__8947;
i__8905_8940 = G__8948;
continue;
}
} else
{var temp__4092__auto___8949 = cljs.core.seq.call(null,seq__8902_8937);if(temp__4092__auto___8949)
{var seq__8902_8950__$1 = temp__4092__auto___8949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8902_8950__$1))
{var c__3600__auto___8951 = cljs.core.chunk_first.call(null,seq__8902_8950__$1);{
var G__8952 = cljs.core.chunk_rest.call(null,seq__8902_8950__$1);
var G__8953 = c__3600__auto___8951;
var G__8954 = cljs.core.count.call(null,c__3600__auto___8951);
var G__8955 = 0;
seq__8902_8937 = G__8952;
chunk__8903_8938 = G__8953;
count__8904_8939 = G__8954;
i__8905_8940 = G__8955;
continue;
}
} else
{var vec__8907_8956 = cljs.core.first.call(null,seq__8902_8950__$1);var k_8957 = cljs.core.nth.call(null,vec__8907_8956,0,null);var v_8958 = cljs.core.nth.call(null,vec__8907_8956,1,null);var key_8959 = clj__GT_js.call(null,k_8957);if(typeof key_8959 === 'string')
{} else
{throw "Cannot convert; JavaScript map keys must be strings";
}
(o[key_8959] = clj__GT_js.call(null,v_8958));
{
var G__8960 = cljs.core.next.call(null,seq__8902_8950__$1);
var G__8961 = null;
var G__8962 = 0;
var G__8963 = 0;
seq__8902_8937 = G__8960;
chunk__8903_8938 = G__8961;
count__8904_8939 = G__8962;
i__8905_8940 = G__8963;
continue;
}
}
} else
{}
}
break;
}
return o;
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{var a = [];a.push(":*:");
var seq__8908_8964 = cljs.core.seq.call(null,x);var chunk__8909_8965 = null;var count__8910_8966 = 0;var i__8911_8967 = 0;while(true){
if((i__8911_8967 < count__8910_8966))
{var item_8968 = cljs.core._nth.call(null,chunk__8909_8965,i__8911_8967);a.push(clj__GT_js.call(null,item_8968));
{
var G__8969 = seq__8908_8964;
var G__8970 = chunk__8909_8965;
var G__8971 = count__8910_8966;
var G__8972 = (i__8911_8967 + 1);
seq__8908_8964 = G__8969;
chunk__8909_8965 = G__8970;
count__8910_8966 = G__8971;
i__8911_8967 = G__8972;
continue;
}
} else
{var temp__4092__auto___8973 = cljs.core.seq.call(null,seq__8908_8964);if(temp__4092__auto___8973)
{var seq__8908_8974__$1 = temp__4092__auto___8973;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8908_8974__$1))
{var c__3600__auto___8975 = cljs.core.chunk_first.call(null,seq__8908_8974__$1);{
var G__8976 = cljs.core.chunk_rest.call(null,seq__8908_8974__$1);
var G__8977 = c__3600__auto___8975;
var G__8978 = cljs.core.count.call(null,c__3600__auto___8975);
var G__8979 = 0;
seq__8908_8964 = G__8976;
chunk__8909_8965 = G__8977;
count__8910_8966 = G__8978;
i__8911_8967 = G__8979;
continue;
}
} else
{var item_8980 = cljs.core.first.call(null,seq__8908_8974__$1);a.push(clj__GT_js.call(null,item_8980));
{
var G__8981 = cljs.core.next.call(null,seq__8908_8974__$1);
var G__8982 = null;
var G__8983 = 0;
var G__8984 = 0;
seq__8908_8964 = G__8981;
chunk__8909_8965 = G__8982;
count__8910_8966 = G__8983;
i__8911_8967 = G__8984;
continue;
}
}
} else
{}
}
break;
}
return a;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{var a = [];var seq__8912_8985 = cljs.core.seq.call(null,x);var chunk__8913_8986 = null;var count__8914_8987 = 0;var i__8915_8988 = 0;while(true){
if((i__8915_8988 < count__8914_8987))
{var item_8989 = cljs.core._nth.call(null,chunk__8913_8986,i__8915_8988);a.push(clj__GT_js.call(null,item_8989));
{
var G__8990 = seq__8912_8985;
var G__8991 = chunk__8913_8986;
var G__8992 = count__8914_8987;
var G__8993 = (i__8915_8988 + 1);
seq__8912_8985 = G__8990;
chunk__8913_8986 = G__8991;
count__8914_8987 = G__8992;
i__8915_8988 = G__8993;
continue;
}
} else
{var temp__4092__auto___8994 = cljs.core.seq.call(null,seq__8912_8985);if(temp__4092__auto___8994)
{var seq__8912_8995__$1 = temp__4092__auto___8994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8912_8995__$1))
{var c__3600__auto___8996 = cljs.core.chunk_first.call(null,seq__8912_8995__$1);{
var G__8997 = cljs.core.chunk_rest.call(null,seq__8912_8995__$1);
var G__8998 = c__3600__auto___8996;
var G__8999 = cljs.core.count.call(null,c__3600__auto___8996);
var G__9000 = 0;
seq__8912_8985 = G__8997;
chunk__8913_8986 = G__8998;
count__8914_8987 = G__8999;
i__8915_8988 = G__9000;
continue;
}
} else
{var item_9001 = cljs.core.first.call(null,seq__8912_8995__$1);a.push(clj__GT_js.call(null,item_9001));
{
var G__9002 = cljs.core.next.call(null,seq__8912_8995__$1);
var G__9003 = null;
var G__9004 = 0;
var G__9005 = 0;
seq__8912_8985 = G__9002;
chunk__8913_8986 = G__9003;
count__8914_8987 = G__9004;
i__8915_8988 = G__9005;
continue;
}
}
} else
{}
}
break;
}
return a;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
}
}
}
});
singult.core.node_data = singult.coffee.node_data;
singult.core.attr = (function attr($n,m){return singult.coffee.attr.call(null,$n,singult.core.clj__GT_js.call(null,m));
});
singult.core.render = (function render(v){return singult.coffee.render.call(null,singult.coffee.canonicalize.call(null,singult.core.clj__GT_js.call(null,v)));
});
singult.core.merge_BANG_ = (function merge_BANG_($n,v){if((v == null))
{return null;
} else
{return singult.coffee.merge.call(null,$n,singult.coffee.canonicalize.call(null,singult.core.clj__GT_js.call(null,v)));
}
});
/**
* @param {...*} var_args
*/
singult.core.unify = (function() { 
var unify__delegate = function (data,mapping,p__9006){var map__9008 = p__9006;var map__9008__$1 = ((cljs.core.seq_QMARK_.call(null,map__9008))?cljs.core.apply.call(null,cljs.core.hash_map,map__9008):map__9008);var force_update_QMARK_ = cljs.core.get.call(null,map__9008__$1,new cljs.core.Keyword(null,"force-update?","force-update?",4639172390));var exit = cljs.core.get.call(null,map__9008__$1,new cljs.core.Keyword(null,"exit","exit",1017031824));var update = cljs.core.get.call(null,map__9008__$1,new cljs.core.Keyword(null,"update","update",4470025275));var enter = cljs.core.get.call(null,map__9008__$1,new cljs.core.Keyword(null,"enter","enter",1110571594));var key_fn = cljs.core.get.call(null,map__9008__$1,new cljs.core.Keyword(null,"key-fn","key-fn",4174150248));return (new singult.core.Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_));
};
var unify = function (data,mapping,var_args){
var p__9006 = null;if (arguments.length > 2) {
  p__9006 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return unify__delegate.call(this,data,mapping,p__9006);};
unify.cljs$lang$maxFixedArity = 2;
unify.cljs$lang$applyTo = (function (arglist__9009){
var data = cljs.core.first(arglist__9009);
arglist__9009 = cljs.core.next(arglist__9009);
var mapping = cljs.core.first(arglist__9009);
var p__9006 = cljs.core.rest(arglist__9009);
return unify__delegate(data,mapping,p__9006);
});
unify.cljs$core$IFn$_invoke$arity$variadic = unify__delegate;
return unify;
})()
;
singult.core.ignore = (function ignore(){return (new singult.coffee.Ignore());
});
