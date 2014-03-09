goog.provide('sol.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sol.util');
goog.require('sol.connect');
goog.require('singult.core');
goog.require('domina.events');
goog.require('domina.css');
goog.require('domina');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
sol.core.send = cljs.core.async.chan.call(null);
sol.core.receive = cljs.core.async.chan.call(null);
sol.core.ws_url = "ws://localhost:21112/async";
sol.core.ws = (new WebSocket(sol.core.ws_url));
sol.core.two_pi = (2 * Math.PI);
sol.core.paper_dimensions = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"width","width",1127031096),820,new cljs.core.Keyword(null,"height","height",4087841945),820], true);
sol.core.draw = Snap(new cljs.core.Keyword(null,"width","width",1127031096).call(null,sol.core.paper_dimensions),new cljs.core.Keyword(null,"height","height",4087841945).call(null,sol.core.paper_dimensions));
sol.core.layer_radius = 75;
sol.core.board_radius = 400;
sol.core.sun_radius = (sol.core.board_radius - sol.core.layer_radius);
sol.core.orbit_opacity = 0.8;
sol.core.zone_opacity = 0.5;
sol.core.starmax = 1000;
sol.core.board_center = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"x","x",1013904362),(0.5 * new cljs.core.Keyword(null,"width","width",1127031096).call(null,sol.core.paper_dimensions)),new cljs.core.Keyword(null,"y","y",1013904363),(0.5 * new cljs.core.Keyword(null,"height","height",4087841945).call(null,sol.core.paper_dimensions))], true);
sol.core.log = (function log(e){return console.log(e);
});
sol.core.attr = (function attr(obj,attrs){return obj.attr(cljs.core.clj__GT_js.call(null,attrs));
});
sol.core.move_to = (function move_to(point){return [cljs.core.str("M"),cljs.core.str(Math.floor(new cljs.core.Keyword(null,"x","x",1013904362).call(null,point))),cljs.core.str(","),cljs.core.str(Math.floor(new cljs.core.Keyword(null,"y","y",1013904363).call(null,point)))].join('');
});
sol.core.line_to = (function line_to(point){return [cljs.core.str("L"),cljs.core.str(Math.floor(new cljs.core.Keyword(null,"x","x",1013904362).call(null,point))),cljs.core.str(","),cljs.core.str(Math.floor(new cljs.core.Keyword(null,"y","y",1013904363).call(null,point)))].join('');
});
sol.core.line = (function line(draw,p__11861){var map__11863 = p__11861;var map__11863__$1 = ((cljs.core.seq_QMARK_.call(null,map__11863))?cljs.core.apply.call(null,cljs.core.hash_map,map__11863):map__11863);var width = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"width","width",1127031096));var color = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"color","color",1108746965));var end = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"end","end",1014004813));var begin = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"begin","begin",1107520539));var l = draw.path([cljs.core.str(sol.core.move_to.call(null,begin)),cljs.core.str(sol.core.line_to.call(null,end))].join(''));return sol.core.attr.call(null,l,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"stroke","stroke",4416891306),color,new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),width], true));
});
sol.core.circle = (function circle(draw,opts){var map__11865 = opts;var map__11865__$1 = ((cljs.core.seq_QMARK_.call(null,map__11865))?cljs.core.apply.call(null,cljs.core.hash_map,map__11865):map__11865);var radius = cljs.core.get.call(null,map__11865__$1,new cljs.core.Keyword(null,"radius","radius",4370292740));var y = cljs.core.get.call(null,map__11865__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__11865__$1,new cljs.core.Keyword(null,"x","x",1013904362));var attrs = cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"radius","radius",4370292740));return sol.core.attr.call(null,draw.circle(x,y,radius),attrs);
});
sol.core.radial_angles = (function radial_angles(divisions){var interval = (sol.core.two_pi / divisions);var half = (0.5 * interval);return cljs.core.range.call(null,half,sol.core.two_pi,interval);
});
sol.core.radial_offset = (function radial_offset(center,angle,radius){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"x","x",1013904362),(new cljs.core.Keyword(null,"x","x",1013904362).call(null,center) + (radius * Math.cos(angle))),new cljs.core.Keyword(null,"y","y",1013904363),(new cljs.core.Keyword(null,"y","y",1013904363).call(null,center) + (radius * Math.sin(angle)))], true);
});
sol.core.radial = (function radial(draw,p__11866){var map__11868 = p__11866;var map__11868__$1 = ((cljs.core.seq_QMARK_.call(null,map__11868))?cljs.core.apply.call(null,cljs.core.hash_map,map__11868):map__11868);var color = cljs.core.get.call(null,map__11868__$1,new cljs.core.Keyword(null,"color","color",1108746965));var end_radius = cljs.core.get.call(null,map__11868__$1,new cljs.core.Keyword(null,"end-radius","end-radius",4216104246));var begin_radius = cljs.core.get.call(null,map__11868__$1,new cljs.core.Keyword(null,"begin-radius","begin-radius",3180392872));var angle = cljs.core.get.call(null,map__11868__$1,new cljs.core.Keyword(null,"angle","angle",1106865221));var center = cljs.core.get.call(null,map__11868__$1,new cljs.core.Keyword(null,"center","center",3944857543));var begin = sol.core.radial_offset.call(null,center,angle,begin_radius);var end = sol.core.radial_offset.call(null,center,angle,end_radius);return sol.core.line.call(null,draw,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"begin","begin",1107520539),begin,new cljs.core.Keyword(null,"end","end",1014004813),end,new cljs.core.Keyword(null,"color","color",1108746965),color,new cljs.core.Keyword(null,"width","width",1127031096),3], true));
});
sol.core.sol_colors = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"outer-orbit","outer-orbit",2107908074),"#2255aa",13], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"inner-orbit","inner-orbit",3635101061),"#227733",13], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"convective-zone","convective-zone",4392321237),"#ffee22",13], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"radiative-zone","radiative-zone",2942810650),"#d87f1b",8], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"core","core",1016963857),"#aa1100",5], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"warp","warp",1017546234),"#000000",0], true)], true);
sol.core.membrane_colors = cljs.core.PersistentVector.fromArray(["#ffffff","#fc8a22","#ffffff","#ffffff","#000000","#000000"], true);
sol.core.radial_colors = cljs.core.PersistentVector.fromArray(["#ffffff","#ffffff","#ffffff","#ffffff","#000000","#000000"], true);
sol.core.draw_sun = (function draw_sun(){var inner_radius = sol.core.sun_radius;return sol.core.draw.image("img/SOL.jpg",(new cljs.core.Keyword(null,"x","x",1013904362).call(null,sol.core.board_center) - inner_radius),(new cljs.core.Keyword(null,"y","y",1013904363).call(null,sol.core.board_center) - inner_radius),(2 * inner_radius),(2 * inner_radius));
});
sol.core.distance = (function distance(a,b){var dx = (new cljs.core.Keyword(null,"x","x",1013904362).call(null,a) - new cljs.core.Keyword(null,"x","x",1013904362).call(null,b));var dy = (new cljs.core.Keyword(null,"y","y",1013904363).call(null,a) - new cljs.core.Keyword(null,"y","y",1013904363).call(null,b));return Math.sqrt(((dx * dx) + (dy * dy)));
});
sol.core.inside_sun_QMARK_ = (function inside_sun_QMARK_(p){var d = sol.core.distance.call(null,p,sol.core.board_center);return (d < (sol.core.sun_radius - sol.core.layer_radius));
});
sol.core.random_point = (function random_point(){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"x","x",1013904362),(new cljs.core.Keyword(null,"width","width",1127031096).call(null,sol.core.paper_dimensions) * Math.random()),new cljs.core.Keyword(null,"y","y",1013904363),(new cljs.core.Keyword(null,"height","height",4087841945).call(null,sol.core.paper_dimensions) * Math.random())], true);
});
sol.core.draw_stars = (function draw_stars(){return cljs.core.mapv.call(null,(function (_){var star_position = sol.core.random_point.call(null);if(cljs.core.not.call(null,sol.core.inside_sun_QMARK_.call(null,star_position)))
{return sol.core.circle.call(null,sol.core.draw,cljs.core.merge.call(null,star_position,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"radius","radius",4370292740),Math.log((Math.E + (0.1 * Math.random()))),new cljs.core.Keyword(null,"opacity","opacity",4041665405),Math.random(),new cljs.core.Keyword(null,"fill","fill",1017047285),"#ffffff",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#ffffff"], true)));
} else
{return null;
}
}),cljs.core.range.call(null,sol.core.starmax));
});
sol.core.draw_board = (function draw_board(){var board = cljs.core.mapv.call(null,(function (p__11873,number){var vec__11874 = p__11873;var layer = cljs.core.nth.call(null,vec__11874,0,null);var color = cljs.core.nth.call(null,vec__11874,1,null);var cells = cljs.core.nth.call(null,vec__11874,2,null);var radius = (sol.core.board_radius - (number * sol.core.layer_radius));return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"layer","layer",1116653763),layer,new cljs.core.Keyword(null,"cells","cells",1108448963),cells,new cljs.core.Keyword(null,"number","number",4274507451),number,new cljs.core.Keyword(null,"radius","radius",4370292740),radius,new cljs.core.Keyword(null,"color","color",1108746965),color], true);
}),sol.core.sol_colors,cljs.core.range.call(null));var layers = cljs.core.map.call(null,cljs.core.vector,board,cljs.core.concat.call(null,cljs.core.rest.call(null,board),cljs.core.PersistentVector.fromArray([null], true)));var sun = sol.core.draw_sun.call(null);var cells = cljs.core.mapv.call(null,((function (board,layers,sun){
return (function (p__11875){var vec__11876 = p__11875;var outer = cljs.core.nth.call(null,vec__11876,0,null);var inner = cljs.core.nth.call(null,vec__11876,1,null);var angles = sol.core.radial_angles.call(null,new cljs.core.Keyword(null,"cells","cells",1108448963).call(null,outer));var zone_radius = (new cljs.core.Keyword(null,"radius","radius",4370292740).call(null,outer) - (0.5 * sol.core.layer_radius));var zone = ((!((zone_radius < 0)))?sol.core.circle.call(null,sol.core.draw,cljs.core.merge.call(null,sol.core.board_center,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"radius","radius",4370292740),zone_radius,new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),sol.core.layer_radius,new cljs.core.Keyword(null,"fill","fill",1017047285),"none",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",4058747187),0,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",1400081640),(((2 > new cljs.core.Keyword(null,"number","number",4274507451).call(null,outer)))?sol.core.orbit_opacity:sol.core.zone_opacity),new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.Keyword(null,"color","color",1108746965).call(null,outer)], true))):null);var radials = (cljs.core.truth_(inner)?cljs.core.mapv.call(null,((function (angles,zone_radius,zone,vec__11876,outer,inner,board,layers,sun){
return (function (angle){return sol.core.radial.call(null,sol.core.draw,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"center","center",3944857543),sol.core.board_center,new cljs.core.Keyword(null,"angle","angle",1106865221),((1.0 * Math.PI) + angle),new cljs.core.Keyword(null,"begin-radius","begin-radius",3180392872),new cljs.core.Keyword(null,"radius","radius",4370292740).call(null,outer),new cljs.core.Keyword(null,"end-radius","end-radius",4216104246),new cljs.core.Keyword(null,"radius","radius",4370292740).call(null,inner),new cljs.core.Keyword(null,"color","color",1108746965),cljs.core.get.call(null,sol.core.radial_colors,new cljs.core.Keyword(null,"number","number",4274507451).call(null,outer))], true));
});})(angles,zone_radius,zone,vec__11876,outer,inner,board,layers,sun))
,angles):null);var membrane_color = cljs.core.get.call(null,sol.core.membrane_colors,new cljs.core.Keyword(null,"number","number",4274507451).call(null,outer));var membrane = sol.core.circle.call(null,sol.core.draw,cljs.core.merge.call(null,sol.core.board_center,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"radius","radius",4370292740),new cljs.core.Keyword(null,"radius","radius",4370292740).call(null,outer),new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),3,new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.Keyword(null,"color","color",1108746965).call(null,outer),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",4058747187),0,new cljs.core.Keyword(null,"stroke","stroke",4416891306),membrane_color], true)));return cljs.core.assoc.call(null,outer,new cljs.core.Keyword(null,"membrane","membrane",4659803717),membrane,new cljs.core.Keyword(null,"zone","zone",1017648926),zone,new cljs.core.Keyword(null,"radials","radials",1982713254),radials);
});})(board,layers,sun))
,layers);var core_radius = (sol.core.board_radius - (5 * sol.core.layer_radius));var core = sol.core.circle.call(null,sol.core.draw,cljs.core.merge.call(null,sol.core.board_center,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"radius","radius",4370292740),core_radius,new cljs.core.Keyword(null,"stroke-width","stroke-width",3636011363),0,new cljs.core.Keyword(null,"fill","fill",1017047285),"#000000",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",4058747187),1], true)));var stars = sol.core.draw_stars.call(null);return cells;
});
sol.core.init = (function init(data){sol.core.draw_board.call(null);
return sol.core.log.call(null,sol.core.draw.toString());
});
sol.core.dispatch_message = (function dispatch_message(){var c__5670__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5671__auto__ = (function (){var switch__5620__auto__ = (function (state_11944){var state_val_11945 = (state_11944[1]);if((state_val_11945 === 1))
{var state_11944__$1 = state_11944;var statearr_11946_11961 = state_11944__$1;(statearr_11946_11961[2] = null);
(statearr_11946_11961[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11945 === 2))
{var state_11944__$1 = state_11944;if(true)
{var statearr_11947_11962 = state_11944__$1;(statearr_11947_11962[1] = 4);
} else
{var statearr_11948_11963 = state_11944__$1;(statearr_11948_11963[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11945 === 3))
{var inst_11942 = (state_11944[2]);var state_11944__$1 = state_11944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11944__$1,inst_11942);
} else
{if((state_val_11945 === 4))
{var state_11944__$1 = state_11944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11944__$1,7,sol.core.receive);
} else
{if((state_val_11945 === 5))
{var state_11944__$1 = state_11944;var statearr_11949_11964 = state_11944__$1;(statearr_11949_11964[2] = null);
(statearr_11949_11964[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11945 === 6))
{var inst_11940 = (state_11944[2]);var state_11944__$1 = state_11944;var statearr_11950_11965 = state_11944__$1;(statearr_11950_11965[2] = inst_11940);
(statearr_11950_11965[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11945 === 7))
{var inst_11924 = (state_11944[5]);var inst_11922 = (state_11944[2]);var inst_11923 = inst_11922.data;var inst_11924__$1 = cljs.reader.read_string.call(null,inst_11923);var inst_11928 = new cljs.core.Keyword(null,"op","op",1013907795).call(null,inst_11924__$1);var inst_11929 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",1017141378),inst_11928);var state_11944__$1 = (function (){var statearr_11951 = state_11944;(statearr_11951[5] = inst_11924__$1);
return statearr_11951;
})();if(inst_11929)
{var statearr_11952_11966 = state_11944__$1;(statearr_11952_11966[1] = 8);
} else
{var statearr_11953_11967 = state_11944__$1;(statearr_11953_11967[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11945 === 8))
{var inst_11924 = (state_11944[5]);var inst_11931 = sol.core.init.call(null,inst_11924);var state_11944__$1 = state_11944;var statearr_11954_11968 = state_11944__$1;(statearr_11954_11968[2] = inst_11931);
(statearr_11954_11968[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11945 === 9))
{var inst_11924 = (state_11944[5]);var inst_11933 = [cljs.core.str("op not supported! "),cljs.core.str(inst_11924)].join('');var inst_11934 = sol.core.log.call(null,inst_11933);var state_11944__$1 = state_11944;var statearr_11955_11969 = state_11944__$1;(statearr_11955_11969[2] = inst_11934);
(statearr_11955_11969[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11945 === 10))
{var inst_11936 = (state_11944[2]);var state_11944__$1 = (function (){var statearr_11956 = state_11944;(statearr_11956[6] = inst_11936);
return statearr_11956;
})();var statearr_11957_11970 = state_11944__$1;(statearr_11957_11970[2] = null);
(statearr_11957_11970[1] = 2);
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
});return ((function (switch__5620__auto__){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_11959 = (new Array(7));(statearr_11959[0] = state_machine__5621__auto__);
(statearr_11959[1] = 1);
return statearr_11959;
});
var state_machine__5621__auto____1 = (function (state_11944){while(true){
var result__5622__auto__ = switch__5620__auto__.call(null,state_11944);if(cljs.core.keyword_identical_QMARK_.call(null,result__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_11944){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_11944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__))
})();var state__5672__auto__ = (function (){var statearr_11960 = f__5671__auto__.call(null);(statearr_11960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5670__auto__);
return statearr_11960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5672__auto__);
}));
return c__5670__auto__;
});
sol.core.make_sender = (function make_sender(){sol.core.log.call(null,"HELLO");
sol.util.event_chan.call(null,sol.core.send,new cljs.core.Keyword(null,"click","click",1108654330),document.body,new cljs.core.Keyword(null,"click","click",1108654330),cljs.core.PersistentArrayMap.EMPTY);
var c__5670__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5671__auto__ = (function (){var switch__5620__auto__ = (function (state_12042){var state_val_12043 = (state_12042[1]);if((state_val_12043 === 1))
{var state_12042__$1 = state_12042;var statearr_12044_12059 = state_12042__$1;(statearr_12044_12059[2] = null);
(statearr_12044_12059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12043 === 2))
{var state_12042__$1 = state_12042;if(true)
{var statearr_12045_12060 = state_12042__$1;(statearr_12045_12060[1] = 4);
} else
{var statearr_12046_12061 = state_12042__$1;(statearr_12046_12061[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12043 === 3))
{var inst_12040 = (state_12042[2]);var state_12042__$1 = state_12042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12042__$1,inst_12040);
} else
{if((state_val_12043 === 4))
{var state_12042__$1 = state_12042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12042__$1,7,sol.core.send);
} else
{if((state_val_12043 === 5))
{var state_12042__$1 = state_12042;var statearr_12047_12062 = state_12042__$1;(statearr_12047_12062[2] = null);
(statearr_12047_12062[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12043 === 6))
{var inst_12038 = (state_12042[2]);var state_12042__$1 = state_12042;var statearr_12048_12063 = state_12042__$1;(statearr_12048_12063[2] = inst_12038);
(statearr_12048_12063[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12043 === 7))
{var inst_12020 = (state_12042[5]);var inst_12019 = (state_12042[2]);var inst_12020__$1 = cljs.core.nth.call(null,inst_12019,0,null);var inst_12021 = cljs.core.nth.call(null,inst_12019,1,null);var inst_12022 = cljs.core.nth.call(null,inst_12019,2,null);var inst_12026 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"click","click",1108654330),inst_12020__$1);var state_12042__$1 = (function (){var statearr_12049 = state_12042;(statearr_12049[6] = inst_12022);
(statearr_12049[5] = inst_12020__$1);
(statearr_12049[7] = inst_12021);
return statearr_12049;
})();if(inst_12026)
{var statearr_12050_12064 = state_12042__$1;(statearr_12050_12064[1] = 8);
} else
{var statearr_12051_12065 = state_12042__$1;(statearr_12051_12065[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12043 === 8))
{var inst_12028 = sol.core.log.call(null,"click!");var state_12042__$1 = state_12042;var statearr_12052_12066 = state_12042__$1;(statearr_12052_12066[2] = inst_12028);
(statearr_12052_12066[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12043 === 9))
{var inst_12020 = (state_12042[5]);var inst_12030 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_12020)].join('');var inst_12031 = (new Error(inst_12030));var inst_12032 = (function(){throw inst_12031})();var state_12042__$1 = state_12042;var statearr_12053_12067 = state_12042__$1;(statearr_12053_12067[2] = inst_12032);
(statearr_12053_12067[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12043 === 10))
{var inst_12034 = (state_12042[2]);var state_12042__$1 = (function (){var statearr_12054 = state_12042;(statearr_12054[8] = inst_12034);
return statearr_12054;
})();var statearr_12055_12068 = state_12042__$1;(statearr_12055_12068[2] = null);
(statearr_12055_12068[1] = 2);
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
});return ((function (switch__5620__auto__){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_12057 = (new Array(9));(statearr_12057[0] = state_machine__5621__auto__);
(statearr_12057[1] = 1);
return statearr_12057;
});
var state_machine__5621__auto____1 = (function (state_12042){while(true){
var result__5622__auto__ = switch__5620__auto__.call(null,state_12042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_12042){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_12042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__))
})();var state__5672__auto__ = (function (){var statearr_12058 = f__5671__auto__.call(null);(statearr_12058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5670__auto__);
return statearr_12058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5672__auto__);
}));
return c__5670__auto__;
});
sol.core.make_receiver = (function make_receiver(){sol.core.ws.onmessage = (function (msg){return cljs.core.async.put_BANG_.call(null,sol.core.receive,msg);
});
sol.core.ws.onopen = (function (msg){return sol.core.ws.send(cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"init","init",1017141378)], true));
});
return sol.core.dispatch_message.call(null);
});
sol.core.init_BANG_ = (function init_BANG_(){sol.core.make_sender.call(null);
return sol.core.make_receiver.call(null);
});
sol.core.on_load = window.onload = sol.core.init_BANG_;
sol.connect.connect.call(null);
