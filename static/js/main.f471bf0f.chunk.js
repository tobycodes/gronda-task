(this["webpackJsonpgronda-task"]=this["webpackJsonpgronda-task"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),c=a.n(s),i=(a(13),a(14),a(2)),l=function(e){var t=e.statTitle,a=e.currentPeriod,r=e.lastPeriod,s=e.bgColors;return n.a.createElement("div",{className:"card",style:{backgroundImage:"linear-gradient(to right, ".concat(null===s||void 0===s?void 0:s.first,", ").concat(null===s||void 0===s?void 0:s.second,")")}},n.a.createElement("span",{className:"card__sub"},t),n.a.createElement("span",{className:"card__value"},a),n.a.createElement("span",{className:"card__sub"},"".concat(r," Last period")))},o=[{id:1,title:"This month",time_unit:"MONTH",time_unit_count:0},{id:2,title:"Last month",time_unit:"MONTH",time_unit_count:1},{id:3,title:"This quarter",time_unit:"QUARTER",time_unit_count:0},{id:4,title:"Last quarter",time_unit:"QUARTER",time_unit_count:1},{id:5,title:"This year",time_unit:"YEAR",time_unit_count:0},{id:6,title:"Last year",time_unit:"YEAR",time_unit_count:1}],u=function(e){var t=e.label,a=e.options,s=e.onChange,c=Object(r.useState)(!1),l=Object(i.a)(c,2),o=l[0],u=l[1],d=Object(r.useState)(a&&a[0]),m=Object(i.a)(d,2),p=m[0],_=m[1];Object(r.useEffect)((function(){s&&s(p)}),[p,s]);return n.a.createElement("div",{className:"dropdown"},n.a.createElement("span",{className:"dropdown-label"},t),n.a.createElement("input",{className:"dropdown-button",type:"button",value:p.title,onClick:function(){return u(!o)}}),n.a.createElement("ul",{id:"dropdown-list",className:"dropdown-list".concat(o?" show":"")},a.map((function(e){return n.a.createElement("li",{className:"dropdown-item",key:e.id,onClick:function(){return function(e){_(e),u(!1)}(e)}},e.title)}))))},d=function(e){var t=e.filterStatData,a=Object(r.useCallback)((function(e){var a={type:e.time_unit,payload:e.time_unit_count};t(a)}),[t]);return n.a.createElement("div",{className:"filter"},n.a.createElement(u,{label:"Filter by",options:o,onChange:function(e){return a(e)}}))},m=[{first:"#F5C099",second:"#F29E98"},{first:"#94C1F4",second:"#6A9FEA"},{first:"#94D5D0",second:"#78D0C0"}],p=a(1),_={thisMonth:{active_source:{current_period:45,last_period:30},weekly_active:{current_period:38,last_period:26},nps:{current_period:25,last_period:39}},lastMonth:{active_source:{current_period:25,last_period:14},weekly_active:{current_period:59,last_period:16},nps:{current_period:19,last_period:38}},thisQuarter:{active_source:{current_period:87,last_period:53},weekly_active:{current_period:109,last_period:50},nps:{current_period:89,last_period:78}},lastQuarter:{active_source:{current_period:72,last_period:61},weekly_active:{current_period:115,last_period:49},nps:{current_period:94,last_period:81}},thisYear:{active_source:{current_period:219,last_period:198},weekly_active:{current_period:286,last_period:151},nps:{current_period:170,last_period:199}},lastYear:{active_source:{current_period:334,last_period:283},weekly_active:{current_period:401,last_period:209},nps:{current_period:221,last_period:269}}},b=function(e,t){switch(t.type){case"MONTH":return t.payload?_.lastMonth:_.thisMonth;case"QUARTER":return t.payload?_.lastQuarter:_.thisQuarter;case"YEAR":return t.payload?_.lastYear:_.thisYear;default:return e}},v=function(e,t){switch(t.type){case"ID":return Object(p.a)(e).sort((function(e,t){return e.id-t.id}));case"COMPANY_NAME":return Object(p.a)(e).sort((function(e,t){return e.name.localeCompare(t.name)}));case"SEGMENT":return Object(p.a)(e).sort((function(e,t){return e.segment.localeCompare(t.segment)}));case"CONTRACT":return Object(p.a)(e).sort((function(e,t){return e.contract-t.contract}));case"BEST_NPS_AVG":return Object(p.a)(e).sort((function(e,t){return t.npsAvg-e.npsAvg}));case"WORST_NPS_AVG":return Object(p.a)(e).sort((function(e,t){return e.npsAvg-t.npsAvg}));case"NPS_LAST":return Object(p.a)(e).sort((function(e,t){return e.npsLast-t.npsLast}));case"NPS_FIRST":return Object(p.a)(e).sort((function(e,t){return e.npsFirst-t.npsFirst}));default:return e}},E=function(){var e=Object(r.useReducer)(b,{}),t=Object(i.a)(e,2),a=t[0],s=t[1],c=a.active_source,o=a.weekly_active,u=a.nps;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{filterStatData:s}),n.a.createElement("div",{id:"stat-board",className:"stat-board"},n.a.createElement(l,{statTitle:"Active sourcing",currentPeriod:null===c||void 0===c?void 0:c.current_period,lastPeriod:null===c||void 0===c?void 0:c.last_period,bgColors:m[0]}),n.a.createElement(l,{statTitle:"Weekly active",currentPeriod:null===o||void 0===o?void 0:o.current_period,lastPeriod:null===o||void 0===o?void 0:o.last_period,bgColors:m[1]}),n.a.createElement(l,{statTitle:"NPS",currentPeriod:null===u||void 0===u?void 0:u.current_period,lastPeriod:null===u||void 0===u?void 0:u.last_period,bgColors:m[2]})))},N=[{id:1,name:"Gronda GmbH",segment:"Hospitality",contract:3,renewals:16,npsAvg:255,npsFirst:303,npsLast:299},{id:2,name:"Baker's Den",segment:"Food",contract:1,renewals:21,npsAvg:109,npsFirst:211,npsLast:165},{id:3,name:"TheKop GmbH",segment:"Sports Entertainment",contract:4,renewals:25,npsAvg:409,npsFirst:382,npsLast:607},{id:4,name:"Cartco GmbH",segment:"Marketing",contract:3,renewals:8,npsAvg:89,npsFirst:62,npsLast:97},{id:5,name:"AboutYou",segment:"eCommerce",contract:2,renewals:13,npsAvg:202,npsFirst:218,npsLast:181},{id:6,name:"Robert Bosch GmbH",segment:"Automobile",contract:3,renewals:89,npsAvg:285,npsFirst:369,npsLast:419},{id:7,name:"Deutsche Bahn",segment:"Transportation",contract:2,renewals:29,npsAvg:321,npsFirst:306,npsLast:327},{id:8,name:"Fresenius",segment:"Healthcare",contract:0,renewals:5,npsAvg:109,npsFirst:121,npsLast:98}],h=a(7),g=function e(t,a,r,n,s,c,i,l){Object(h.a)(this,e),this.id=t,this.name=a,this.segment=r,this.contract=n,this.renewals=s,this.npsAvg=c,this.npsLast=i,this.npsFirst=l},f=[{id:1,title:"Id",sortType:"ID"},{id:2,title:"Company Name",sortType:"COMPANY_NAME"},{id:3,title:"Segment",sortType:"SEGMENT"},{id:4,title:"Contract",sortType:"CONTRACT"},{id:5,title:"Best NPS avg",sortType:"BEST_NPS_AVG"},{id:6,title:"Worst NPS avg",sortType:"WORST_NPS_AVG"},{id:7,title:"NPS Last",sortType:"NPS_LAST"},{id:8,title:"NPS First",sortType:"NPS_FIRST"}],y=function(e){var t=e.sortTableData,a=Object(r.useCallback)((function(e){var a={type:e.sortType};t(a)}),[t]);return n.a.createElement("div",{className:"sort"},n.a.createElement(u,{label:"Sort by",options:f,onChange:a}))},w=["Weekly","Monthly","Quarterly","Yearly","Seasonal"],T=function(){var e=Object(r.useReducer)(v,N.map((function(e){return new g(e.id,e.name,e.segment,e.contract,e.renewals,e.npsAvg,e.npsLast,e.npsFirst)}))),t=Object(i.a)(e,2),a=t[0],s=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"sort-box"},n.a.createElement("div",{className:"critical-box"},n.a.createElement("input",{name:"critical",id:"critical",type:"checkbox",className:"critical-checkbox"}),n.a.createElement("label",{htmlFor:"critical",className:"critical-label"},"Show critical")),n.a.createElement(y,{sortTableData:s})),n.a.createElement("div",{className:"table-wrapper"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"table-row"},n.a.createElement("th",{className:"table-col fixed"},"Id"),n.a.createElement("th",{className:"table-col fixed"},"Company name"),n.a.createElement("th",{className:"table-col"},"Segment"),n.a.createElement("th",{className:"table-col"},"Contract"),n.a.createElement("th",{className:"table-col"},"Renewals"),n.a.createElement("th",{className:"table-col"},"NPS avg"),n.a.createElement("th",{className:"table-col"},"NPS last"),n.a.createElement("th",{className:"table-col"},"NPS first"))),n.a.createElement("tbody",null,a.map((function(e){return n.a.createElement("tr",{key:e.id,className:"table-row"},n.a.createElement("td",{className:"table-col fixed"},e.id),n.a.createElement("td",{className:"table-col fixed"},e.name),n.a.createElement("td",{className:"table-col"},e.segment),n.a.createElement("td",{className:"table-col"},w[e.contract]),n.a.createElement("td",{className:"table-col"},e.renewals),n.a.createElement("td",{className:"table-col"},e.npsAvg),n.a.createElement("td",{className:"table-col"},e.npsLast),n.a.createElement("td",{className:"table-col"},e.npsFirst))}))))))};var A=function(){return n.a.createElement("div",{className:"stat-page"},n.a.createElement(E,null),n.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f471bf0f.chunk.js.map