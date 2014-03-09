goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_8421 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);var table_section_wrapper_8422 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);var cell_wrapper_8423 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_8422,table_section_wrapper_8422,opt_wrapper_8421,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_8423,table_section_wrapper_8422,cell_wrapper_8423,opt_wrapper_8421,table_section_wrapper_8422,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_8422]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,tag_name,"table");if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?(function (){var and__3941__auto__ = div.firstChild;if(cljs.core.truth_(and__3941__auto__))
{return div.firstChild.childNodes;
} else
{return and__3941__auto__;
}
})():(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,start_wrap,"<table>");if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__8428 = cljs.core.seq.call(null,tbody);var chunk__8429 = null;var count__8430 = 0;var i__8431 = 0;while(true){
if((i__8431 < count__8430))
{var child = cljs.core._nth.call(null,chunk__8429,i__8431);if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__8432 = seq__8428;
var G__8433 = chunk__8429;
var G__8434 = count__8430;
var G__8435 = (i__8431 + 1);
seq__8428 = G__8432;
chunk__8429 = G__8433;
count__8430 = G__8434;
i__8431 = G__8435;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8428);if(temp__4092__auto__)
{var seq__8428__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8428__$1))
{var c__3600__auto__ = cljs.core.chunk_first.call(null,seq__8428__$1);{
var G__8436 = cljs.core.chunk_rest.call(null,seq__8428__$1);
var G__8437 = c__3600__auto__;
var G__8438 = cljs.core.count.call(null,c__3600__auto__);
var G__8439 = 0;
seq__8428 = G__8436;
chunk__8429 = G__8437;
count__8430 = G__8438;
i__8431 = G__8439;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__8428__$1);if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__8440 = cljs.core.next.call(null,seq__8428__$1);
var G__8441 = null;
var G__8442 = 0;
var G__8443 = 0;
seq__8428 = G__8440;
chunk__8429 = G__8441;
count__8430 = G__8442;
i__8431 = G__8443;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__8445 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).call(null,domina.wrap_map));var depth = cljs.core.nth.call(null,vec__8445,0,null);var start_wrap = cljs.core.nth.call(null,vec__8445,1,null);var end_wrap = cljs.core.nth.call(null,vec__8445,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__8446 = wrapper.lastChild;
var G__8447 = (level - 1);
wrapper = G__8446;
level = G__8447;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3941__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3941__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){if((function (){var and__3941__auto__ = content;if(and__3941__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3469__auto__ = (((content == null))?null:content);return (function (){var or__3943__auto__ = (domina.nodes[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.nodes["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3941__auto__ = nodeseq;if(and__3941__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3469__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3943__auto__ = (domina.single_node[goog.typeOf(x__3469__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.single_node["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3941__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3941__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3941__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__8448){
var mesg = cljs.core.seq(arglist__8448);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__8449){
var mesg = cljs.core.seq(arglist__8449);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__8450){
var contents = cljs.core.seq(arglist__8450);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__8451_SHARP_){return p1__8451_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__8452_SHARP_,p2__8453_SHARP_){return goog.dom.insertChildAt(p1__8452_SHARP_,p2__8453_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__8455_SHARP_,p2__8454_SHARP_){return goog.dom.insertSiblingBefore(p2__8454_SHARP_,p1__8455_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__8457_SHARP_,p2__8456_SHARP_){return goog.dom.insertSiblingAfter(p2__8456_SHARP_,p1__8457_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__8459_SHARP_,p2__8458_SHARP_){return goog.dom.replaceNode(p2__8458_SHARP_,p1__8459_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__8464_8468 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8465_8469 = null;var count__8466_8470 = 0;var i__8467_8471 = 0;while(true){
if((i__8467_8471 < count__8466_8470))
{var n_8472 = cljs.core._nth.call(null,chunk__8465_8469,i__8467_8471);goog.style.setStyle(n_8472,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8473 = seq__8464_8468;
var G__8474 = chunk__8465_8469;
var G__8475 = count__8466_8470;
var G__8476 = (i__8467_8471 + 1);
seq__8464_8468 = G__8473;
chunk__8465_8469 = G__8474;
count__8466_8470 = G__8475;
i__8467_8471 = G__8476;
continue;
}
} else
{var temp__4092__auto___8477 = cljs.core.seq.call(null,seq__8464_8468);if(temp__4092__auto___8477)
{var seq__8464_8478__$1 = temp__4092__auto___8477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8464_8478__$1))
{var c__3600__auto___8479 = cljs.core.chunk_first.call(null,seq__8464_8478__$1);{
var G__8480 = cljs.core.chunk_rest.call(null,seq__8464_8478__$1);
var G__8481 = c__3600__auto___8479;
var G__8482 = cljs.core.count.call(null,c__3600__auto___8479);
var G__8483 = 0;
seq__8464_8468 = G__8480;
chunk__8465_8469 = G__8481;
count__8466_8470 = G__8482;
i__8467_8471 = G__8483;
continue;
}
} else
{var n_8484 = cljs.core.first.call(null,seq__8464_8478__$1);goog.style.setStyle(n_8484,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8485 = cljs.core.next.call(null,seq__8464_8478__$1);
var G__8486 = null;
var G__8487 = 0;
var G__8488 = 0;
seq__8464_8468 = G__8485;
chunk__8465_8469 = G__8486;
count__8466_8470 = G__8487;
i__8467_8471 = G__8488;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8489){
var content = cljs.core.first(arglist__8489);
arglist__8489 = cljs.core.next(arglist__8489);
var name = cljs.core.first(arglist__8489);
var value = cljs.core.rest(arglist__8489);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__8494_8498 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8495_8499 = null;var count__8496_8500 = 0;var i__8497_8501 = 0;while(true){
if((i__8497_8501 < count__8496_8500))
{var n_8502 = cljs.core._nth.call(null,chunk__8495_8499,i__8497_8501);n_8502.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8503 = seq__8494_8498;
var G__8504 = chunk__8495_8499;
var G__8505 = count__8496_8500;
var G__8506 = (i__8497_8501 + 1);
seq__8494_8498 = G__8503;
chunk__8495_8499 = G__8504;
count__8496_8500 = G__8505;
i__8497_8501 = G__8506;
continue;
}
} else
{var temp__4092__auto___8507 = cljs.core.seq.call(null,seq__8494_8498);if(temp__4092__auto___8507)
{var seq__8494_8508__$1 = temp__4092__auto___8507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8494_8508__$1))
{var c__3600__auto___8509 = cljs.core.chunk_first.call(null,seq__8494_8508__$1);{
var G__8510 = cljs.core.chunk_rest.call(null,seq__8494_8508__$1);
var G__8511 = c__3600__auto___8509;
var G__8512 = cljs.core.count.call(null,c__3600__auto___8509);
var G__8513 = 0;
seq__8494_8498 = G__8510;
chunk__8495_8499 = G__8511;
count__8496_8500 = G__8512;
i__8497_8501 = G__8513;
continue;
}
} else
{var n_8514 = cljs.core.first.call(null,seq__8494_8508__$1);n_8514.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8515 = cljs.core.next.call(null,seq__8494_8508__$1);
var G__8516 = null;
var G__8517 = 0;
var G__8518 = 0;
seq__8494_8498 = G__8515;
chunk__8495_8499 = G__8516;
count__8496_8500 = G__8517;
i__8497_8501 = G__8518;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__8519){
var content = cljs.core.first(arglist__8519);
arglist__8519 = cljs.core.next(arglist__8519);
var name = cljs.core.first(arglist__8519);
var value = cljs.core.rest(arglist__8519);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__8524_8528 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8525_8529 = null;var count__8526_8530 = 0;var i__8527_8531 = 0;while(true){
if((i__8527_8531 < count__8526_8530))
{var n_8532 = cljs.core._nth.call(null,chunk__8525_8529,i__8527_8531);n_8532.removeAttribute(cljs.core.name.call(null,name));
{
var G__8533 = seq__8524_8528;
var G__8534 = chunk__8525_8529;
var G__8535 = count__8526_8530;
var G__8536 = (i__8527_8531 + 1);
seq__8524_8528 = G__8533;
chunk__8525_8529 = G__8534;
count__8526_8530 = G__8535;
i__8527_8531 = G__8536;
continue;
}
} else
{var temp__4092__auto___8537 = cljs.core.seq.call(null,seq__8524_8528);if(temp__4092__auto___8537)
{var seq__8524_8538__$1 = temp__4092__auto___8537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8524_8538__$1))
{var c__3600__auto___8539 = cljs.core.chunk_first.call(null,seq__8524_8538__$1);{
var G__8540 = cljs.core.chunk_rest.call(null,seq__8524_8538__$1);
var G__8541 = c__3600__auto___8539;
var G__8542 = cljs.core.count.call(null,c__3600__auto___8539);
var G__8543 = 0;
seq__8524_8528 = G__8540;
chunk__8525_8529 = G__8541;
count__8526_8530 = G__8542;
i__8527_8531 = G__8543;
continue;
}
} else
{var n_8544 = cljs.core.first.call(null,seq__8524_8538__$1);n_8544.removeAttribute(cljs.core.name.call(null,name));
{
var G__8545 = cljs.core.next.call(null,seq__8524_8538__$1);
var G__8546 = null;
var G__8547 = 0;
var G__8548 = 0;
seq__8524_8528 = G__8545;
chunk__8525_8529 = G__8546;
count__8526_8530 = G__8547;
i__8527_8531 = G__8548;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__8550 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__8550,0,null);var v = cljs.core.nth.call(null,vec__8550,1,null);if(cljs.core.truth_((function (){var and__3941__auto__ = k;if(cljs.core.truth_(and__3941__auto__))
{return v;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__8551_SHARP_){var attr = attrs__$1.item(p1__8551_SHARP_);var value = attr.nodeValue;if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,null,value);if(and__3941__auto__)
{return cljs.core.not_EQ_.call(null,"",value);
} else
{return and__3941__auto__;
}
})())
{return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__8558_8564 = cljs.core.seq.call(null,styles);var chunk__8559_8565 = null;var count__8560_8566 = 0;var i__8561_8567 = 0;while(true){
if((i__8561_8567 < count__8560_8566))
{var vec__8562_8568 = cljs.core._nth.call(null,chunk__8559_8565,i__8561_8567);var name_8569 = cljs.core.nth.call(null,vec__8562_8568,0,null);var value_8570 = cljs.core.nth.call(null,vec__8562_8568,1,null);domina.set_style_BANG_.call(null,content,name_8569,value_8570);
{
var G__8571 = seq__8558_8564;
var G__8572 = chunk__8559_8565;
var G__8573 = count__8560_8566;
var G__8574 = (i__8561_8567 + 1);
seq__8558_8564 = G__8571;
chunk__8559_8565 = G__8572;
count__8560_8566 = G__8573;
i__8561_8567 = G__8574;
continue;
}
} else
{var temp__4092__auto___8575 = cljs.core.seq.call(null,seq__8558_8564);if(temp__4092__auto___8575)
{var seq__8558_8576__$1 = temp__4092__auto___8575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8558_8576__$1))
{var c__3600__auto___8577 = cljs.core.chunk_first.call(null,seq__8558_8576__$1);{
var G__8578 = cljs.core.chunk_rest.call(null,seq__8558_8576__$1);
var G__8579 = c__3600__auto___8577;
var G__8580 = cljs.core.count.call(null,c__3600__auto___8577);
var G__8581 = 0;
seq__8558_8564 = G__8578;
chunk__8559_8565 = G__8579;
count__8560_8566 = G__8580;
i__8561_8567 = G__8581;
continue;
}
} else
{var vec__8563_8582 = cljs.core.first.call(null,seq__8558_8576__$1);var name_8583 = cljs.core.nth.call(null,vec__8563_8582,0,null);var value_8584 = cljs.core.nth.call(null,vec__8563_8582,1,null);domina.set_style_BANG_.call(null,content,name_8583,value_8584);
{
var G__8585 = cljs.core.next.call(null,seq__8558_8576__$1);
var G__8586 = null;
var G__8587 = 0;
var G__8588 = 0;
seq__8558_8564 = G__8585;
chunk__8559_8565 = G__8586;
count__8560_8566 = G__8587;
i__8561_8567 = G__8588;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__8595_8601 = cljs.core.seq.call(null,attrs);var chunk__8596_8602 = null;var count__8597_8603 = 0;var i__8598_8604 = 0;while(true){
if((i__8598_8604 < count__8597_8603))
{var vec__8599_8605 = cljs.core._nth.call(null,chunk__8596_8602,i__8598_8604);var name_8606 = cljs.core.nth.call(null,vec__8599_8605,0,null);var value_8607 = cljs.core.nth.call(null,vec__8599_8605,1,null);domina.set_attr_BANG_.call(null,content,name_8606,value_8607);
{
var G__8608 = seq__8595_8601;
var G__8609 = chunk__8596_8602;
var G__8610 = count__8597_8603;
var G__8611 = (i__8598_8604 + 1);
seq__8595_8601 = G__8608;
chunk__8596_8602 = G__8609;
count__8597_8603 = G__8610;
i__8598_8604 = G__8611;
continue;
}
} else
{var temp__4092__auto___8612 = cljs.core.seq.call(null,seq__8595_8601);if(temp__4092__auto___8612)
{var seq__8595_8613__$1 = temp__4092__auto___8612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8595_8613__$1))
{var c__3600__auto___8614 = cljs.core.chunk_first.call(null,seq__8595_8613__$1);{
var G__8615 = cljs.core.chunk_rest.call(null,seq__8595_8613__$1);
var G__8616 = c__3600__auto___8614;
var G__8617 = cljs.core.count.call(null,c__3600__auto___8614);
var G__8618 = 0;
seq__8595_8601 = G__8615;
chunk__8596_8602 = G__8616;
count__8597_8603 = G__8617;
i__8598_8604 = G__8618;
continue;
}
} else
{var vec__8600_8619 = cljs.core.first.call(null,seq__8595_8613__$1);var name_8620 = cljs.core.nth.call(null,vec__8600_8619,0,null);var value_8621 = cljs.core.nth.call(null,vec__8600_8619,1,null);domina.set_attr_BANG_.call(null,content,name_8620,value_8621);
{
var G__8622 = cljs.core.next.call(null,seq__8595_8613__$1);
var G__8623 = null;
var G__8624 = 0;
var G__8625 = 0;
seq__8595_8601 = G__8622;
chunk__8596_8602 = G__8623;
count__8597_8603 = G__8624;
i__8598_8604 = G__8625;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__8630_8634 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8631_8635 = null;var count__8632_8636 = 0;var i__8633_8637 = 0;while(true){
if((i__8633_8637 < count__8632_8636))
{var node_8638 = cljs.core._nth.call(null,chunk__8631_8635,i__8633_8637);goog.dom.classes.add(node_8638,class$);
{
var G__8639 = seq__8630_8634;
var G__8640 = chunk__8631_8635;
var G__8641 = count__8632_8636;
var G__8642 = (i__8633_8637 + 1);
seq__8630_8634 = G__8639;
chunk__8631_8635 = G__8640;
count__8632_8636 = G__8641;
i__8633_8637 = G__8642;
continue;
}
} else
{var temp__4092__auto___8643 = cljs.core.seq.call(null,seq__8630_8634);if(temp__4092__auto___8643)
{var seq__8630_8644__$1 = temp__4092__auto___8643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8630_8644__$1))
{var c__3600__auto___8645 = cljs.core.chunk_first.call(null,seq__8630_8644__$1);{
var G__8646 = cljs.core.chunk_rest.call(null,seq__8630_8644__$1);
var G__8647 = c__3600__auto___8645;
var G__8648 = cljs.core.count.call(null,c__3600__auto___8645);
var G__8649 = 0;
seq__8630_8634 = G__8646;
chunk__8631_8635 = G__8647;
count__8632_8636 = G__8648;
i__8633_8637 = G__8649;
continue;
}
} else
{var node_8650 = cljs.core.first.call(null,seq__8630_8644__$1);goog.dom.classes.add(node_8650,class$);
{
var G__8651 = cljs.core.next.call(null,seq__8630_8644__$1);
var G__8652 = null;
var G__8653 = 0;
var G__8654 = 0;
seq__8630_8634 = G__8651;
chunk__8631_8635 = G__8652;
count__8632_8636 = G__8653;
i__8633_8637 = G__8654;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__8659_8663 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8660_8664 = null;var count__8661_8665 = 0;var i__8662_8666 = 0;while(true){
if((i__8662_8666 < count__8661_8665))
{var node_8667 = cljs.core._nth.call(null,chunk__8660_8664,i__8662_8666);goog.dom.classes.remove(node_8667,class$);
{
var G__8668 = seq__8659_8663;
var G__8669 = chunk__8660_8664;
var G__8670 = count__8661_8665;
var G__8671 = (i__8662_8666 + 1);
seq__8659_8663 = G__8668;
chunk__8660_8664 = G__8669;
count__8661_8665 = G__8670;
i__8662_8666 = G__8671;
continue;
}
} else
{var temp__4092__auto___8672 = cljs.core.seq.call(null,seq__8659_8663);if(temp__4092__auto___8672)
{var seq__8659_8673__$1 = temp__4092__auto___8672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8659_8673__$1))
{var c__3600__auto___8674 = cljs.core.chunk_first.call(null,seq__8659_8673__$1);{
var G__8675 = cljs.core.chunk_rest.call(null,seq__8659_8673__$1);
var G__8676 = c__3600__auto___8674;
var G__8677 = cljs.core.count.call(null,c__3600__auto___8674);
var G__8678 = 0;
seq__8659_8663 = G__8675;
chunk__8660_8664 = G__8676;
count__8661_8665 = G__8677;
i__8662_8666 = G__8678;
continue;
}
} else
{var node_8679 = cljs.core.first.call(null,seq__8659_8673__$1);goog.dom.classes.remove(node_8679,class$);
{
var G__8680 = cljs.core.next.call(null,seq__8659_8673__$1);
var G__8681 = null;
var G__8682 = 0;
var G__8683 = 0;
seq__8659_8663 = G__8680;
chunk__8660_8664 = G__8681;
count__8661_8665 = G__8682;
i__8662_8666 = G__8683;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__8688_8692 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8689_8693 = null;var count__8690_8694 = 0;var i__8691_8695 = 0;while(true){
if((i__8691_8695 < count__8690_8694))
{var node_8696 = cljs.core._nth.call(null,chunk__8689_8693,i__8691_8695);goog.dom.classes.toggle(node_8696,class$);
{
var G__8697 = seq__8688_8692;
var G__8698 = chunk__8689_8693;
var G__8699 = count__8690_8694;
var G__8700 = (i__8691_8695 + 1);
seq__8688_8692 = G__8697;
chunk__8689_8693 = G__8698;
count__8690_8694 = G__8699;
i__8691_8695 = G__8700;
continue;
}
} else
{var temp__4092__auto___8701 = cljs.core.seq.call(null,seq__8688_8692);if(temp__4092__auto___8701)
{var seq__8688_8702__$1 = temp__4092__auto___8701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8688_8702__$1))
{var c__3600__auto___8703 = cljs.core.chunk_first.call(null,seq__8688_8702__$1);{
var G__8704 = cljs.core.chunk_rest.call(null,seq__8688_8702__$1);
var G__8705 = c__3600__auto___8703;
var G__8706 = cljs.core.count.call(null,c__3600__auto___8703);
var G__8707 = 0;
seq__8688_8692 = G__8704;
chunk__8689_8693 = G__8705;
count__8690_8694 = G__8706;
i__8691_8695 = G__8707;
continue;
}
} else
{var node_8708 = cljs.core.first.call(null,seq__8688_8702__$1);goog.dom.classes.toggle(node_8708,class$);
{
var G__8709 = cljs.core.next.call(null,seq__8688_8702__$1);
var G__8710 = null;
var G__8711 = 0;
var G__8712 = 0;
seq__8688_8692 = G__8709;
chunk__8689_8693 = G__8710;
count__8690_8694 = G__8711;
i__8691_8695 = G__8712;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_8721__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__8717_8722 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8718_8723 = null;var count__8719_8724 = 0;var i__8720_8725 = 0;while(true){
if((i__8720_8725 < count__8719_8724))
{var node_8726 = cljs.core._nth.call(null,chunk__8718_8723,i__8720_8725);goog.dom.classes.set(node_8726,classes_8721__$1);
{
var G__8727 = seq__8717_8722;
var G__8728 = chunk__8718_8723;
var G__8729 = count__8719_8724;
var G__8730 = (i__8720_8725 + 1);
seq__8717_8722 = G__8727;
chunk__8718_8723 = G__8728;
count__8719_8724 = G__8729;
i__8720_8725 = G__8730;
continue;
}
} else
{var temp__4092__auto___8731 = cljs.core.seq.call(null,seq__8717_8722);if(temp__4092__auto___8731)
{var seq__8717_8732__$1 = temp__4092__auto___8731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8717_8732__$1))
{var c__3600__auto___8733 = cljs.core.chunk_first.call(null,seq__8717_8732__$1);{
var G__8734 = cljs.core.chunk_rest.call(null,seq__8717_8732__$1);
var G__8735 = c__3600__auto___8733;
var G__8736 = cljs.core.count.call(null,c__3600__auto___8733);
var G__8737 = 0;
seq__8717_8722 = G__8734;
chunk__8718_8723 = G__8735;
count__8719_8724 = G__8736;
i__8720_8725 = G__8737;
continue;
}
} else
{var node_8738 = cljs.core.first.call(null,seq__8717_8732__$1);goog.dom.classes.set(node_8738,classes_8721__$1);
{
var G__8739 = cljs.core.next.call(null,seq__8717_8732__$1);
var G__8740 = null;
var G__8741 = 0;
var G__8742 = 0;
seq__8717_8722 = G__8739;
chunk__8718_8723 = G__8740;
count__8719_8724 = G__8741;
i__8720_8725 = G__8742;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__8747_8751 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8748_8752 = null;var count__8749_8753 = 0;var i__8750_8754 = 0;while(true){
if((i__8750_8754 < count__8749_8753))
{var node_8755 = cljs.core._nth.call(null,chunk__8748_8752,i__8750_8754);goog.dom.setTextContent(node_8755,value);
{
var G__8756 = seq__8747_8751;
var G__8757 = chunk__8748_8752;
var G__8758 = count__8749_8753;
var G__8759 = (i__8750_8754 + 1);
seq__8747_8751 = G__8756;
chunk__8748_8752 = G__8757;
count__8749_8753 = G__8758;
i__8750_8754 = G__8759;
continue;
}
} else
{var temp__4092__auto___8760 = cljs.core.seq.call(null,seq__8747_8751);if(temp__4092__auto___8760)
{var seq__8747_8761__$1 = temp__4092__auto___8760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8747_8761__$1))
{var c__3600__auto___8762 = cljs.core.chunk_first.call(null,seq__8747_8761__$1);{
var G__8763 = cljs.core.chunk_rest.call(null,seq__8747_8761__$1);
var G__8764 = c__3600__auto___8762;
var G__8765 = cljs.core.count.call(null,c__3600__auto___8762);
var G__8766 = 0;
seq__8747_8751 = G__8763;
chunk__8748_8752 = G__8764;
count__8749_8753 = G__8765;
i__8750_8754 = G__8766;
continue;
}
} else
{var node_8767 = cljs.core.first.call(null,seq__8747_8761__$1);goog.dom.setTextContent(node_8767,value);
{
var G__8768 = cljs.core.next.call(null,seq__8747_8761__$1);
var G__8769 = null;
var G__8770 = 0;
var G__8771 = 0;
seq__8747_8751 = G__8768;
chunk__8748_8752 = G__8769;
count__8749_8753 = G__8770;
i__8750_8754 = G__8771;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__8776_8780 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8777_8781 = null;var count__8778_8782 = 0;var i__8779_8783 = 0;while(true){
if((i__8779_8783 < count__8778_8782))
{var node_8784 = cljs.core._nth.call(null,chunk__8777_8781,i__8779_8783);goog.dom.forms.setValue(node_8784,value);
{
var G__8785 = seq__8776_8780;
var G__8786 = chunk__8777_8781;
var G__8787 = count__8778_8782;
var G__8788 = (i__8779_8783 + 1);
seq__8776_8780 = G__8785;
chunk__8777_8781 = G__8786;
count__8778_8782 = G__8787;
i__8779_8783 = G__8788;
continue;
}
} else
{var temp__4092__auto___8789 = cljs.core.seq.call(null,seq__8776_8780);if(temp__4092__auto___8789)
{var seq__8776_8790__$1 = temp__4092__auto___8789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8776_8790__$1))
{var c__3600__auto___8791 = cljs.core.chunk_first.call(null,seq__8776_8790__$1);{
var G__8792 = cljs.core.chunk_rest.call(null,seq__8776_8790__$1);
var G__8793 = c__3600__auto___8791;
var G__8794 = cljs.core.count.call(null,c__3600__auto___8791);
var G__8795 = 0;
seq__8776_8780 = G__8792;
chunk__8777_8781 = G__8793;
count__8778_8782 = G__8794;
i__8779_8783 = G__8795;
continue;
}
} else
{var node_8796 = cljs.core.first.call(null,seq__8776_8790__$1);goog.dom.forms.setValue(node_8796,value);
{
var G__8797 = cljs.core.next.call(null,seq__8776_8790__$1);
var G__8798 = null;
var G__8799 = 0;
var G__8800 = 0;
seq__8776_8780 = G__8797;
chunk__8777_8781 = G__8798;
count__8778_8782 = G__8799;
i__8779_8783 = G__8800;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3941__auto__ = allows_inner_html_QMARK_;if(and__3941__auto__)
{var and__3941__auto____$1 = (function (){var or__3943__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3941__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{var value_8811 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__8807_8812 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8808_8813 = null;var count__8809_8814 = 0;var i__8810_8815 = 0;while(true){
if((i__8810_8815 < count__8809_8814))
{var node_8816 = cljs.core._nth.call(null,chunk__8808_8813,i__8810_8815);node_8816.innerHTML = value_8811;
{
var G__8817 = seq__8807_8812;
var G__8818 = chunk__8808_8813;
var G__8819 = count__8809_8814;
var G__8820 = (i__8810_8815 + 1);
seq__8807_8812 = G__8817;
chunk__8808_8813 = G__8818;
count__8809_8814 = G__8819;
i__8810_8815 = G__8820;
continue;
}
} else
{var temp__4092__auto___8821 = cljs.core.seq.call(null,seq__8807_8812);if(temp__4092__auto___8821)
{var seq__8807_8822__$1 = temp__4092__auto___8821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8807_8822__$1))
{var c__3600__auto___8823 = cljs.core.chunk_first.call(null,seq__8807_8822__$1);{
var G__8824 = cljs.core.chunk_rest.call(null,seq__8807_8822__$1);
var G__8825 = c__3600__auto___8823;
var G__8826 = cljs.core.count.call(null,c__3600__auto___8823);
var G__8827 = 0;
seq__8807_8812 = G__8824;
chunk__8808_8813 = G__8825;
count__8809_8814 = G__8826;
i__8810_8815 = G__8827;
continue;
}
} else
{var node_8828 = cljs.core.first.call(null,seq__8807_8822__$1);node_8828.innerHTML = value_8811;
{
var G__8829 = cljs.core.next.call(null,seq__8807_8822__$1);
var G__8830 = null;
var G__8831 = 0;
var G__8832 = 0;
seq__8807_8812 = G__8829;
chunk__8808_8813 = G__8830;
count__8809_8814 = G__8831;
i__8810_8815 = G__8832;
continue;
}
}
} else
{}
}
break;
}
}catch (e8806){if((e8806 instanceof Error))
{var e_8833 = e8806;domina.replace_children_BANG_.call(null,content,value_8811);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8806;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3941__auto__ = bubble;if(cljs.core.truth_(and__3941__auto__))
{return (value == null);
} else
{return and__3941__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3943__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__8840_8844 = cljs.core.seq.call(null,children);var chunk__8841_8845 = null;var count__8842_8846 = 0;var i__8843_8847 = 0;while(true){
if((i__8843_8847 < count__8842_8846))
{var child_8848 = cljs.core._nth.call(null,chunk__8841_8845,i__8843_8847);frag.appendChild(child_8848);
{
var G__8849 = seq__8840_8844;
var G__8850 = chunk__8841_8845;
var G__8851 = count__8842_8846;
var G__8852 = (i__8843_8847 + 1);
seq__8840_8844 = G__8849;
chunk__8841_8845 = G__8850;
count__8842_8846 = G__8851;
i__8843_8847 = G__8852;
continue;
}
} else
{var temp__4092__auto___8853 = cljs.core.seq.call(null,seq__8840_8844);if(temp__4092__auto___8853)
{var seq__8840_8854__$1 = temp__4092__auto___8853;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8840_8854__$1))
{var c__3600__auto___8855 = cljs.core.chunk_first.call(null,seq__8840_8854__$1);{
var G__8856 = cljs.core.chunk_rest.call(null,seq__8840_8854__$1);
var G__8857 = c__3600__auto___8855;
var G__8858 = cljs.core.count.call(null,c__3600__auto___8855);
var G__8859 = 0;
seq__8840_8844 = G__8856;
chunk__8841_8845 = G__8857;
count__8842_8846 = G__8858;
i__8843_8847 = G__8859;
continue;
}
} else
{var child_8860 = cljs.core.first.call(null,seq__8840_8854__$1);frag.appendChild(child_8860);
{
var G__8861 = cljs.core.next.call(null,seq__8840_8854__$1);
var G__8862 = null;
var G__8863 = 0;
var G__8864 = 0;
seq__8840_8844 = G__8861;
chunk__8841_8845 = G__8862;
count__8842_8846 = G__8863;
i__8843_8847 = G__8864;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8834_SHARP_,p2__8835_SHARP_){return f.call(null,p1__8834_SHARP_,p2__8835_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3941__auto__ = obj;if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3941__auto____$1)
{return obj.length;
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__8866 = list_thing;if(G__8866)
{if((function (){var or__3943__auto__ = (G__8866.cljs$lang$protocol_mask$partition0$ & 8388608);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__8866.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8866.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8866);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8866);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__8867 = content;if(G__8867)
{if((function (){var or__3943__auto__ = (G__8867.cljs$lang$protocol_mask$partition0$ & 8388608);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__8867.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8867.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8867);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8867);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__8868 = content;if(G__8868)
{if((function (){var or__3943__auto__ = (G__8868.cljs$lang$protocol_mask$partition0$ & 8388608);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__8868.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8868.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8868);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8868);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){return coll.length;
});
} else
{}
