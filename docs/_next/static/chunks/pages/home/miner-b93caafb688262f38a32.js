_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/mw4":function(e,t,a){"use strict";a.r(t);var c=a("nKUr"),n=a("LvDl"),i=a("q1tI"),s=a("/MKj"),r=a("0/uQ"),l=a("nArF"),b=a("Re8R"),j=a("Kk9b"),u=a("RFev"),o=a("CBHK"),d=a("wMKo"),m=a("KQm4"),O=a("N7A6"),p=a.n(O),_=a("ma3e"),v=["#F9F9F9","white"];function f(e){var t=e.files,a=e.filterStr,s=Object(b.c)().t,r=Object(i.useMemo)((function(){return Object(n.sortBy)(t,(function(e){return 0-e.expiredTime}))}),[t]),l=!Object(n.isEmpty)(a)?Object(n.filter)(r,(function(e){return e.cid===a})):r,j=t?Object(n.chunk)(l,10):null,o=Object(n.size)(j),d=Object(i.useState)(0),O=d[0],f=d[1],x=Object(i.useMemo)((function(){if(o>5){var e=O+1,t=e>3,a=e<o-2,c=Object(n.range)(Math.max(e-1,2),Math.min(e+2,o));return Object(n.filter)([1,t?"\xb7\xb7\xb7":null].concat(Object(m.a)(c),[a?"\xb7\xb7\xb7":null,o]))}return o>1?Object(n.range)(1,o+1):null}),[o,O]);return Object(b.b)(),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:p.a.head,children:[Object(c.jsx)("div",{className:p.a.tab,children:s("fileCID")}),Object(c.jsx)("div",{className:p.a.tab,children:s("fileSize")}),Object(c.jsx)("div",{className:p.a.tab,children:s("fileExpiredTime")}),Object(c.jsx)("div",{className:p.a.tab,children:s("expectedEarning")})]}),o>0?j[O].map((function(e,t){return Object(c.jsxs)("div",{className:p.a.item,style:{backgroundColor:v[t%2]},children:[Object(c.jsx)("div",{className:p.a.tab,"data-tip":e.cid,children:Object(u.b)(e.cid)}),Object(c.jsx)("div",{className:p.a.tab,children:"".concat(e.fileSize," GB")}),Object(c.jsx)("div",{className:p.a.tab,children:"".concat(e.expiredTime)}),Object(c.jsx)("div",{className:p.a.tab,children:"".concat(e.expectedReward," CRU")})]},"key_files_".concat(t))})):Object(c.jsx)("div",{className:p.a.empty,children:s("emptyData")}),o>1&&Object(c.jsxs)("div",{className:p.a.pages,children:[Object(c.jsx)("div",{className:p.a.page,onClick:function(){return f(Math.max(0,O-1))},children:Object(c.jsx)(_.a,{})}),x.map((function(e){return Object(c.jsx)("div",{className:Object(u.a)(p.a.page,O+1===e?p.a.pageActive:null),onClick:function(){Object(n.isNumber)(e)&&f(e-1)},children:"".concat(e)})})),Object(c.jsx)("div",{className:p.a.page,onClick:function(){return f(Math.min(o-1,O+1))},children:Object(c.jsx)(_.b,{})})]})]})}var x=a("01WV"),h=a("Hrvy"),N=a.n(h),g=a("ZBdN");t.default=function(){var e=Object(b.c)().t,t=function(){var e=Object(s.c)(j.c),t=Object(s.c)(j.b),a=Object(b.d)();return{minerID:e,setMinerID:function(e){return a(Object(j.f)(e))},minerData:t,updateMinerData:function(){Object(g.b)(Object(r.a)(Object(l.b)(e)),a).subscribe((function(e){return a(Object(j.e)(e))}))}}}(),a=t.minerID,m=t.setMinerID,O=t.minerData,p=t.updateMinerData,_=O,v="********",h=_?Object(u.b)(_.accountId):v,w=_?_.accountId:null,C=_?"".concat(_.freeBalance," CRU"):v,D=_?[{value:_.availableStorage},{value:_.totalStorage-_.availableStorage}]:void 0,F=_?"".concat(_.rewardToBeClaim,"/").concat(_.totalPledge):v,y=_?"".concat(_.effectiveStake," CRU"):v,M=Object(i.useState)(""),I=M[0],P=M[1],k=Object(i.useState)(""),S=k[0],E=k[1],T=Object(n.get)(_,"files");return Object(c.jsxs)(x.HomeTabs,{active:"miner",children:[Object(c.jsx)("input",{className:N.a.input,value:a,placeholder:e("inputMinerID"),onKeyPress:function(e){var t=Object(n.get)(e,"charCode");13!==t&&32!==t||p()},onChange:function(e){return m(e.target.value)}}),Object(c.jsxs)("div",{className:N.a.topPanel,children:[Object(c.jsx)(d.d,{minerID:h,balence:C,minerIDTip:w}),Object(c.jsx)("div",{className:N.a.space}),Object(c.jsx)(o.b,{data:D}),Object(c.jsx)("div",{className:N.a.space}),Object(c.jsx)(d.e,{text:F}),Object(c.jsx)("div",{className:N.a.space}),Object(c.jsx)(d.f,{text:y})]}),Object(c.jsx)("input",{className:N.a.input,value:I,placeholder:e("inputFileCID"),onKeyPress:function(e){var t=Object(n.get)(e,"charCode");13!==t&&32!==t||E(I)},onChange:function(e){return P(e.target.value)}}),Object(c.jsx)(f,{files:T,filterStr:S})]})}},EquF:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/miner",function(){return a("/mw4")}])},Hrvy:function(e,t,a){e.exports={input:"miner_input__3BoY8",topPanel:"miner_topPanel__-apy2",space:"miner_space__2myZZ",bottomPanel:"miner_bottomPanel__2HmuN"}},N7A6:function(e,t,a){e.exports={head:"Files_head__1Utk5",item:"Files_item__1hUN2",tab:"Files_tab__3T3JP",empty:"Files_empty__3Bz_I",pages:"Files_pages__3sPaR",page:"Files_page__151v6",pageActive:"Files_pageActive__2MmtG"}}},[["EquF",1,2,3,8,6,9,0,5,4,7]]]);