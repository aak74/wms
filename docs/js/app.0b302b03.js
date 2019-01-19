(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],f=0,g=[];f<o.length;f++)i=o[f],s[i]&&g.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/wms/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2fe3":function(t,e,a){"use strict";var n=a("c325"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("a026"),s=a("bb71");a("da64");n["a"].use(s["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("h1",[t._v('Visualization "How Warehouse works"')]),a("dashboard")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("backlog",{staticClass:"clearfix",attrs:{items:t.backlog}}),a("v-layout",[a("v-flex",{attrs:{sm1:""}}),a("v-flex",{attrs:{sm11:""}},[a("h2",{staticClass:"text-md-center"},[t._v("Gates")])])],1),a("v-layout",[a("v-flex",{attrs:{sm1:""}},[a("h2",[t._v("Stages")]),a("stages",{attrs:{stages:t.stages}})],1),a("v-flex",{attrs:{sm11:""}},[a("gates",{attrs:{gates:t.gates,"stages-count":t.stages.length}})],1)],1),a("done"),a("v-btn",{on:{click:t.next}},[t._v("Next")])],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-iterator",{attrs:{items:t.stages,"hide-actions":""},scopedSlots:t._u([{key:"item",fn:function(e){return a("div",{staticClass:"stage"},[t._v("\n    "+t._s(e.item.name)+"\n  ")])}}])})},u=[],f={name:"Stages",props:["stages"]},g=f,d=a("2877"),m=a("6544"),v=a.n(m),p=a("c377"),h=Object(d["a"])(g,c,u,!1,null,null,null);h.options.__file="Stages.vue";var _=h.exports;v()(h,{VDataIterator:p["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",t._l(t.gates,function(e){return a("v-flex",{key:e.id},[a("gate",{attrs:{gate:e,stagesCount:t.stagesCount}})],1)}),1)},k=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"text-md-center"},[t._v(t._s(t.gate.id))]),a("v-data-iterator",{staticClass:"gate",attrs:{items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"item",fn:function(e){return a("v-card",{},[a("p",{staticClass:"text-md-center",domProps:{innerHTML:t._s(e.item)}})])}}])})],1)},x=[],O={name:"Gate",props:["gate","stagesCount"],computed:{items:function(){for(var t=[],e=0;e<this.stagesCount;e++)this.gate.stage===e&&this.gate.task?t.push(this.gate.task.id):t.push("&nbsp;");return t}}},j=O,w=a("b0af"),S=Object(d["a"])(j,y,x,!1,null,null,null);S.options.__file="Gate.vue";var C=S.exports;v()(S,{VCard:w["a"],VDataIterator:p["a"]});var L={name:"Gates",props:["gates","stagesCount"],components:{Gate:C}},M=L,V=a("0e8f"),D=a("a722"),G=Object(d["a"])(M,b,k,!1,null,null,null);G.options.__file="Gates.vue";var $=G.exports;v()(G,{VFlex:V["a"],VLayout:D["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Backlog")]),a("v-layout",[a("v-flex",{attrs:{sm1:""}},[a("v-data-iterator",{staticClass:"backlog",attrs:{items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"item",fn:function(e){return a("div",{staticClass:"backlog-item text-md-center"},[t._v("\n          "+t._s(e.item)+"\n        ")])}}])})],1),a("v-flex",{attrs:{sm11:""}},[a("v-data-iterator",{staticClass:"time-slots",attrs:{items:t.timeslots,"hide-actions":""},scopedSlots:t._u([{key:"item",fn:function(e){return a("div",{staticClass:"time-slot text-md-center"},[t._v("\n          "+t._s(e.item)+":00\n        ")])}}])})],1)],1)],1)},P=[],T={name:"Backlog",props:["items"],computed:{timeslots:function(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}}},I=T,B=Object(d["a"])(I,E,P,!1,null,null,null);B.options.__file="Backlog.vue";var F=B.exports;v()(B,{VDataIterator:p["a"],VFlex:V["a"],VLayout:D["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Done")]),a("v-data-iterator",{staticClass:"backlog",attrs:{items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"item",fn:function(e){return a("div",{staticClass:"backlog-item text-md-center"},[t._v("\n      "+t._s(e.item)+"\n      ")])}}])})],1)},H=[],J={name:"Done",props:["items"]},z=J,N=Object(d["a"])(z,A,H,!1,null,null,null);N.options.__file="Done.vue";var W=N.exports;v()(N,{VDataIterator:p["a"]});var q={name:"Dashboard",components:{Stages:_,Gates:$,Backlog:F,Done:W},data:function(){return{gates:[]}},watch:{gates:{handler:"getGates",immediate:!0}},computed:{backlog:function(){return this.controller.getList("backlog")},stages:function(){return this.controller.getList("stage")},controller:function(){return this.$root.$options.controller}},methods:{next:function(){console.log("next"),this.controller.updateStage(),this.getGates()},getGates:function(){this.gates=this.controller.getList("gate")}},created:function(){var t=this;this.timer=setInterval(function(){t.getGates()},1e3)},destroyed:function(){clearInterval(this.timer)}},K=q,Q=(a("2fe3"),a("8336")),R=Object(d["a"])(K,o,l,!1,null,null,null);R.options.__file="Dashboard.vue";var U=R.exports;v()(R,{VBtn:Q["a"],VFlex:V["a"],VLayout:D["a"]});var X={name:"app",components:{Dashboard:U}},Y=X,Z=a("7496"),tt=Object(d["a"])(Y,r,i,!1,null,null,null);tt.options.__file="App.vue";var et=tt.exports;v()(tt,{VApp:Z["a"]});var at=a("d225"),nt=a("b0b4"),st=(a("ac6a"),function(){function t(e){Object(at["a"])(this,t),this.stages=e,this.gates=[{id:11,stage:1,time:2,task:{id:123}},{id:2,stage:1,time:3,task:{id:234}},{id:3,stage:0,time:4,task:{id:345}},{id:4,stage:3,time:2,task:{id:546}},{id:5,stage:1,time:2,task:{id:675}}]}return Object(nt["a"])(t,[{key:"getList",value:function(){return this.gates}},{key:"update",value:function(t){var e=this;this.gates.forEach(function(a,n,s){s[n].task&&(s[n].time-=t,s[n].time<=0&&s[n].stage<e.stages.length&&(s[n].stage++,s[n].stage<e.stages.length&&(s[n].time=e.getTimeForStage(s[n].stage),console.log("update time",n,s[n].time))),s[n].stage>=e.stages.length&&(s[n].task=null))})}},{key:"getTimeForStage",value:function(t){return console.log("gtfs",this.stages[t].time),this.stages[t].time*(1.5-Math.random())}}]),t}()),rt=st,it=function(t){var e=function e(){t.update(.5),setTimeout(function(){e()},500)};e()},ot=function(){function t(){Object(at["a"])(this,t)}return Object(nt["a"])(t,[{key:"getList",value:function(){return[12,23,34,45,56]}}]),t}(),lt=ot,ct=function(){function t(){Object(at["a"])(this,t)}return Object(nt["a"])(t,[{key:"getList",value:function(){return[{name:"Picking",time:4},{name:"Truck waiting",time:1},{name:"Loading",time:2},{name:"Sealing",time:1}]}}]),t}(),ut=ct,ft=function(){function t(){Object(at["a"])(this,t),this.stageModel=new ut,this.gateModel=new rt(this.stageModel.getList()),this.backlogModel=new lt}return Object(nt["a"])(t,[{key:"getList",value:function(t){if(this["".concat(t,"Model")]&&this["".concat(t,"Model")].getList)return this["".concat(t,"Model")].getList();throw new Error("Model ".concat(t," doesn't registered"))}},{key:"updateStage",value:function(){it(this.gateModel)}}]),t}(),gt=ft;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(et)},controller:new gt}).$mount("#app")},c325:function(t,e,a){}});
//# sourceMappingURL=app.0b302b03.js.map