(this["webpackJsonpreact-03"]=this["webpackJsonpreact-03"]||[]).push([[0],{242:function(c){c.exports=JSON.parse('{"TAA":[{"cnm":"\uc11c\uc6b8","per":"31.58"},{"cnm":"\uae30\ud0c0","per":"29.89"},{"cnm":"\uacbd\uae30","per":"28.49"},{"cnm":"\ub300\uad6c","per":"5.26"},{"cnm":"\uc778\ucc9c","per":"4.78"}],"TAA1":[{"cnm":"\uc120\uc0dd\ud655\uc9c4\uc790 \uc811\ucd09","per":"31.58"},{"cnm":"\uac10\uc5fc\uacbd\ub85c \uc870\uc0ac\uc911","per":"36.7"},{"cnm":"\uc9c0\uc5ed\uc9d1\ub2e8\ubc1c\uc0dd","per":"12.3"},{"cnm":"\ud574\uc678\uc720\uc785","per":"2.1"},{"cnm":"\ubcd1\uc6d0 \ubc0f \uc694\uc591(\ubcd1)\uc6d0 \ub4f1","per":"0.8"}]}')},257:function(c,i,_){},380:function(c,i,_){"use strict";_.r(i);var n=_(2),r=_.n(n),s=_(104),e=_.n(s),t=(_(257),_(52),_(11)),d=_(72),a=_(110),f=_(0);function b(c){var i=c.d,_=Object(n.useState)(i),r=Object(t.a)(_,2),s=r[0],e=r[1];return Object(n.useEffect)((function(){e([{country:"1\ucc28 \uc811\uc885\uc790","\uc811\uc885\uc790 \uc218":i[0].fir_inc1,"\uc811\uc885 \ub204\uacc4":i[0].fir_inc},{country:"2\ucc28 \uc811\uc885\uc790","\uc811\uc885\uc790 \uc218":i[0].scd_inc1,"\uc811\uc885 \ub204\uacc4":i[0].scd_inc}])}),[i]),Object(f.jsx)("div",{className:"grap",children:Object(f.jsx)(a.a,{data:s,keys:["\uc811\uc885\uc790 \uc218","\uc811\uc885 \ub204\uacc4"],indexBy:"country",margin:{top:50,right:130,bottom:50,left:60},padding:.3,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},valueFormat:{format:"",enabled:!1},colors:{scheme:"nivo"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"\uc811\uc885\uc790",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}]})})}function o(){var c=[],i=Object(n.useState)(d.DATA),_=Object(t.a)(i,2),r=_[0],s=_[1];for(var e in d.DESCRIPTION)c.push(d.DESCRIPTION[e]);return Object(f.jsxs)("div",{className:"contents1",children:[Object(f.jsxs)("section",{children:[Object(f.jsx)("h3",{children:"\ucf54\ub85c\ub098 \uc608\ubc29\uc811\uc885 \ud604\ud669"}),Object(f.jsx)("div",{children:Object(f.jsx)("select",{id:"day",onChange:function(c){s(d.DATA.filter((function(i){return i.s_vc_dt==c.target.value})))},children:d.DATA.map((function(c,i){return Object(f.jsx)("option",{children:c.s_vc_dt},i)}))})}),Object(f.jsxs)("table",{className:"main1",border:"1",children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:c.map((function(c,i){return Object(f.jsxs)("th",{children:[" ",c," "]},i)}))})}),Object(f.jsx)("tbody",{children:r.map((function(c,i){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:c.s_vc_dt}),Object(f.jsx)("td",{children:c.fir_sub}),Object(f.jsx)("td",{children:c.fir_inc1}),Object(f.jsx)("td",{children:c.fir_inc}),Object(f.jsx)("td",{children:c.fir_inc_rate}),Object(f.jsx)("td",{children:c.scd_inc1}),Object(f.jsx)("td",{children:c.scd_inc}),Object(f.jsx)("td",{children:c.scd_inc_rate})]},i)}))})]})]}),Object(f.jsx)(b,{d:r})]})}var l=_(86),u=_(17),j=_(85);function h(c){var i=c.d,_=Object(n.useState)(i),r=Object(t.a)(_,2),s=r[0],e=r[1];return Object(n.useEffect)((function(){e([{country:"\uc11c\uc6b8","\uc2e0\uaddc \ud655\uc9c4\uc790 \uc218":i[0].newCase,"\uc0ac\ub9dd\uc790 \uc218":i[0].death,"\ubc1c\uc0dd\ub960":i[0].percentage,"\uc9c0\uc5ed\ubc1c\uc0dd":i[0].newCcase,"\ud574\uc678\uc720\uc785":i[0].newFcase},{country:"\uacbd\uae30","\uc2e0\uaddc \ud655\uc9c4\uc790 \uc218":i[1].newCase,"\uc0ac\ub9dd\uc790 \uc218":i[1].death,"\ubc1c\uc0dd\ub960":i[1].percentage,"\uc9c0\uc5ed\ubc1c\uc0dd":i[1].newCcase,"\ud574\uc678\uc720\uc785":i[1].newFcase},{country:"\uac15\uc6d0","\uc2e0\uaddc \ud655\uc9c4\uc790 \uc218":i[2].newCase,"\uc0ac\ub9dd\uc790 \uc218":i[2].death,"\ubc1c\uc0dd\ub960":i[2].percentage,"\uc9c0\uc5ed\ubc1c\uc0dd":i[2].newCcase,"\ud574\uc678\uc720\uc785":i[2].newFcase},{country:"\ucda9\uccad","\uc2e0\uaddc \ud655\uc9c4\uc790 \uc218":i[3].newCase,"\uc0ac\ub9dd\uc790 \uc218":i[3].death,"\ubc1c\uc0dd\ub960":i[3].percentage,"\uc9c0\uc5ed\ubc1c\uc0dd":i[3].newCcase,"\ud574\uc678\uc720\uc785":i[3].newFcase},{country:"\uc804\ub77c","\uc2e0\uaddc \ud655\uc9c4\uc790 \uc218":i[4].newCase,"\uc0ac\ub9dd\uc790 \uc218":i[4].death,"\ubc1c\uc0dd\ub960":i[4].percentage,"\uc9c0\uc5ed\ubc1c\uc0dd":i[4].newCcase,"\ud574\uc678\uc720\uc785":i[4].newFcase},{country:"\uacbd\uc0c1","\uc2e0\uaddc \ud655\uc9c4\uc790 \uc218":i[5].newCase,"\uc0ac\ub9dd\uc790 \uc218":i[5].death,"\ubc1c\uc0dd\ub960":i[5].percentage,"\uc9c0\uc5ed\ubc1c\uc0dd":i[5].newCcase,"\ud574\uc678\uc720\uc785":i[5].newFcase},{country:"\uc81c\uc8fc","\uc2e0\uaddc \ud655\uc9c4\uc790 \uc218":i[6].newCase,"\uc0ac\ub9dd\uc790 \uc218":i[6].death,"\ubc1c\uc0dd\ub960":i[6].percentage,"\uc9c0\uc5ed\ubc1c\uc0dd":i[6].newCcase,"\ud574\uc678\uc720\uc785":i[6].newFcase}])}),[i]),Object(f.jsx)("div",{className:"grap",children:Object(f.jsx)(a.a,{data:s,keys:["\uc9c0\uc5ed\uba85","\uc2e0\uaddc \ud655\uc9c4\uc790 \uc218","\uc0ac\ub9dd\uc790 \uc218","\ubc1c\uc0dd\ub960","\uc9c0\uc5ed\ubc1c\uc0dd","\ud574\uc678\uc720\uc785"],indexBy:"country",margin:{top:50,right:130,bottom:50,left:60},padding:.3,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},valueFormat:{format:"",enabled:!1},colors:{scheme:"nivo"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}]})})}function v(){var c=[],i=Object(n.useState)(j.DAA),_=Object(t.a)(i,2),r=_[0];_[1];for(var s in j.DSCRT)c.push(j.DSCRT[s]);return Object(f.jsxs)("div",{className:"contents",children:[Object(f.jsxs)("section",{children:[Object(f.jsxs)("h3",{children:["\uc2dc\ub3c4\ubcc4 \ubc1c\uc0dd\ub3d9\ud5a5 \uc751\ub2f5 \ud604\ud669",Object(f.jsx)("span",{children:"(9.9.00\uc2dc \uae30\uc900)"})]}),Object(f.jsxs)("table",{border:"1",children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:c.map((function(c,i){return Object(f.jsxs)("th",{children:[" ",c," "]},i)}))})}),Object(f.jsx)("tbody",{children:r.map((function(c,i){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:c.countryName}),Object(f.jsx)("td",{children:c.newCase}),Object(f.jsx)("td",{children:c.death}),Object(f.jsx)("td",{children:c.percentage}),Object(f.jsx)("td",{children:c.newCcase}),Object(f.jsx)("td",{children:c.newFcase})]},i)}))})]})]}),Object(f.jsx)(h,{d:r})]})}var O=_(242),m=_(109),p=_(111);function x(c){Object(m.a)(c);var i=Object(n.useState)(),_=Object(t.a)(i,2),r=_[0],s=_[1];return Object(n.useEffect)((function(){s([{id:"\uc11c\uc6b8",label:"\uc11c\uc6b8",value:31.58},{id:"\uae30\ud0c0",label:"\uae30\ud0c0",value:29.89},{id:"\uacbd\uae30",label:"\uacbd\uae30",value:28.49},{id:"\ub300\uad6c",label:"\ub300\uad6c",value:5.26},{id:"\uc778\ucc9c",label:"\uc778\ucc9c",value:4.78}])}),[]),Object(f.jsxs)("div",{className:"grh",style:{height:"280px"},children:[Object(f.jsx)("h4",{children:"\ucd5c\uadfc 2\uc8fc\uac04 \uac10\uc5fc\uacbd\ub85c\ubcc4 \ud655\uc9c4\uc790 \ube44\uc728"}),Object(f.jsx)(p.a,{data:r,margin:{top:40,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"ruby"},id:"dots"},{match:{id:"c"},id:"dots"},{match:{id:"go"},id:"dots"},{match:{id:"python"},id:"dots"},{match:{id:"scala"},id:"lines"},{match:{id:"lisp"},id:"lines"},{match:{id:"elixir"},id:"lines"},{match:{id:"javascript"},id:"lines"}],legends:[{anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:56,itemsSpacing:0,itemWidth:100,itemHeight:18,itemTextColor:"#999",itemDirection:"left-to-right",itemOpacity:1,symbolSize:18,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]})]})}function g(c){Object(m.a)(c);var i=Object(n.useState)(),_=Object(t.a)(i,2),r=_[0],s=_[1];return Object(n.useEffect)((function(){s([{id:"\uc120\uc0dd\ud655\uc9c4\uc790",label:"\uc120\uc0dd\ud655\uc9c4\uc790",value:31.58},{id:"\uacbd\ub85c \uc870\uc0ac\uc911",label:"\uacbd\ub85c \uc870\uc0ac\uc911",value:36.7},{id:"\uc9c0\uc5ed\uc9d1\ub2e8\ubc1c\uc0dd",label:"\uc9c0\uc5ed\uc9d1\ub2e8\ubc1c\uc0dd",value:12.3},{id:"\ud574\uc678\uc720\uc785",label:"\ud574\uc678\uc720\uc785",value:2.1},{id:"\ubcd1\uc6d0 \ubc0f \uc694\uc591(\ubcd1)\uc6d0",label:"\ubcd1\uc6d0 \ubc0f \uc694\uc591(\ubcd1)\uc6d0",value:.8}])}),[]),Object(f.jsxs)("div",{style:{height:"280px"},children:[Object(f.jsx)("h4",{children:"\ud655\uc9c4\ud658\uc790 \uc9c0\uc5ed\ubcc4 \ube44\uc728"}),Object(f.jsx)(p.a,{data:r,margin:{top:40,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"ruby"},id:"dots"},{match:{id:"c"},id:"dots"},{match:{id:"go"},id:"dots"},{match:{id:"python"},id:"dots"},{match:{id:"scala"},id:"lines"},{match:{id:"lisp"},id:"lines"},{match:{id:"elixir"},id:"lines"},{match:{id:"javascript"},id:"lines"}],legends:[{anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:56,itemsSpacing:0,itemWidth:100,itemHeight:18,itemTextColor:"#999",itemDirection:"left-to-right",itemOpacity:1,symbolSize:18,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]})]})}function y(){var c=Object(n.useState)(O.TAA),i=Object(t.a)(c,2),_=i[0];i[1];return Object(f.jsxs)("div",{className:"contents2",children:[Object(f.jsxs)("section",{children:[Object(f.jsx)("h3",{children:"\ub204\uc801 \uac80\uc0ac\ud604\ud669"}),Object(f.jsx)("div",{className:"tee",children:Object(f.jsxs)("table",{border:"1",children:[Object(f.jsx)("caption",{children:"\ub204\uc801 \uac80\uc0ac\ud604\ud669 - \uac80\uc0ac\uc644\ub8cc (\ud655\uc9c4\uc790\uc218 (\uaca9\ub9ac\uc911, \uaca9\ub9ac\ud574\uc81c, \uc0ac\ub9dd, \uc18c\uacc4), \uacb0\uacfc\uc74c\uc131, \uc18c\uacc4), \uac80\uc0ac\uc911, \ud569\uacc4\ub85c \uad6c\uc131"}),Object(f.jsxs)("colgroup",{children:[Object(f.jsx)("col",{style:{width:"12.5%"}}),Object(f.jsx)("col",{style:{width:"12.5%"}}),Object(f.jsx)("col",{style:{width:"10%"}}),Object(f.jsx)("col",{style:{width:"12.5%"}}),Object(f.jsx)("col",{style:{width:"12.5%"}}),Object(f.jsx)("col",{style:{width:"12.5%"}}),Object(f.jsx)("col",{style:{width:"12.5%"}}),Object(f.jsx)("col",{style:{width:"15%"}})]}),Object(f.jsxs)("thead",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"colgroup",colSpan:"6",children:" \uac80\uc0ac\uc644\ub8cc "}),Object(f.jsx)("th",{scope:"col",colSpan:"1",rowspan:"3",children:" \uac80\uc0ac\uc911 "}),Object(f.jsx)("th",{scope:"col",colSpan:"2",rowspan:"3",children:" \ud569\uacc4 "})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"colgroup",colSpan:"4",children:" \ud655\uc9c4\ud658\uc790\uc218 "}),Object(f.jsxs)("th",{scope:"col",colSpan:"1",rowspan:"2",children:[" \uacb0\uacfc",Object(f.jsx)("br",{})," \uc74c\uc131 "]}),Object(f.jsx)("th",{scope:"col",colSpan:"1",rowspan:"2",children:" \uc18c\uacc4 "})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:" \uaca9\ub9ac\uc911 "}),Object(f.jsx)("th",{scope:"col",children:" \uaca9\ub9ac\ud574\uc81c "}),Object(f.jsx)("th",{scope:"col",children:" \uc0ac\ub9dd "}),Object(f.jsx)("th",{scope:"col",children:" \uc18c\uacc4 "})]})]}),Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:" 26,207 "}),Object(f.jsx)("td",{children:" 238,920 "}),Object(f.jsx)("td",{children:" 2,343 "}),Object(f.jsx)("td",{children:" 267,470 "}),Object(f.jsx)("td",{children:" 12,403,479 "}),Object(f.jsx)("td",{children:" 12,670,949 "}),Object(f.jsx)("td",{children:" 897,924 "}),Object(f.jsx)("td",{children:" 13,568,873 "})]})})]})})]}),Object(f.jsx)(x,{d:_}),Object(f.jsx)(g,{d:_})]})}var C=function(){return Object(f.jsx)(l.a,{basename:"/corona",children:Object(f.jsxs)("div",{className:"boo",children:[Object(f.jsxs)("header",{children:[Object(f.jsx)("img",{className:"loo",src:"img/img2.jpg",alt:"\uc9c8\ubcd1\uad00\ub9ac\uccad\ub85c\uace0"}),Object(f.jsx)("h1",{className:"boo2",to:"/",children:"\ucf54\ub85c\ub098\ubc14\uc774\ub7ec\uc2a4\uac10\uc5fc\uc99d-19 \ud604\ud669"}),Object(f.jsxs)("div",{className:"boo3",children:["\uacfc\ud559\uc801 \uadfc\uac70\uc5d0 \uae30\ubc18\ud55c \uc548\uc804\ud55c \uc811\uc885\uc73c\ub85c, ",Object(f.jsx)("br",{}),"\uc9d1\ub2e8 \uba74\uc5ed\uc744 \ud655\ubcf4\ud558\uc5ec \uc804 \uad6d\ubbfc\uc758 \uc0dd\uba85\uacfc",Object(f.jsx)("br",{})," \uac74\uac15 \ubcf4\ud638\ub294 \ubb3c\ub860, \uc77c\uc0c1 \ud68c\ubcf5\uc5d0 \ub9cc\uc804\uc744 \uae30\ud558\uaca0\uc2b5\ub2c8\ub2e4."]}),Object(f.jsx)(l.b,{to:"/",children:"\uc608\ubc29\uc811\uc885"}),Object(f.jsx)(l.b,{to:"/company",children:"\uc2dc\ub3c4\ubcc4 \ubc1c\uc0dd"}),Object(f.jsx)(l.b,{to:"/service",children:"\ub204\uc801 \uac80\uc0ac"}),Object(f.jsxs)("div",{className:"boo4",children:[Object(f.jsx)("p",{children:"\uc2e0\uace0\uc0c1\ub2f4"}),"\ubcf4\uac74\uc18c |",Object(f.jsx)("br",{}),"\uc9c8\ubcd1\uad00\ub9ac\uccad \ucf5c\uc13c\ud130 1339 |",Object(f.jsx)("br",{}),"\uc9c0\uc5ed\ubc88\ud638 + 120 |",Object(f.jsx)("br",{}),"\uc9c0\uc5ed\ubc88\ud638 + 114 |",Object(f.jsx)("br",{}),Object(f.jsx)("img",{className:"img120",src:"./img/wa.png",alt:"\uacfc\uae30\uace0\ub85c\uace0"}),Object(f.jsx)("img",{className:"img114",src:"./img/open.png",alt:"\uacf5\uacf5\ub204\ub9ac\ub85c\uace0"}),Object(f.jsx)("br",{}),Object(f.jsx)("span",{children:"Copyright \u24d2 By MOHW. All Rights Reserved."})]})]}),Object(f.jsxs)(u.c,{children:[Object(f.jsxs)(u.a,{exact:!0,path:"/",children:[" ",Object(f.jsx)(o,{})," "]}),Object(f.jsxs)(u.a,{path:"/company",children:[" ",Object(f.jsx)(v,{})," "]}),Object(f.jsxs)(u.a,{path:"/service",children:[" ",Object(f.jsx)(y,{})," "]})]})]})})},w=function(c){c&&c instanceof Function&&_.e(3).then(_.bind(null,419)).then((function(i){var _=i.getCLS,n=i.getFID,r=i.getFCP,s=i.getLCP,e=i.getTTFB;_(c),n(c),r(c),s(c),e(c)}))};e.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),w()},52:function(c,i,_){},72:function(c){c.exports=JSON.parse('{"DESCRIPTION":{"S_VC_DT":"\uc811\uc885\uc77c","FIR_SUB":"\uc811\uc885\ub300\uc0c1\uc790","FIR_INC1":"\ub2f9\uc77c 1\ucc28\uc811\uc885\uc790 \uc218","FIR_INC":"1\ucc28\uc811\uc885 \ub204\uacc4","FIR_INC_RATE":"1\ucc28\uc811\uc885\ub960(%)","SCD_INC1":"\ub2f9\uc77c 2\ucc28\uc811\uc885\uc790 \uc218","SCD_INC":"2\ucc28\uc811\uc885 \ub204\uacc4","SCD_INC_RATE":"2\ucc28\uc811\uc885\ub960(%)"},"DATA":[{"scd_inc":3497620,"fir_inc1":111410,"fir_inc_rate":"60.7","scd_inc1":80167,"s_vc_dt":"2021.09.07","scd_inc_rate":"36.5","fir_inc":5816238,"fir_sub":9575355},{"scd_inc":3417102,"fir_inc1":145248,"fir_inc_rate":"59.6","scd_inc1":116052,"s_vc_dt":"2021.09.06","scd_inc_rate":"35.7","fir_inc":5704290,"fir_sub":9575355},{"scd_inc":3300807,"fir_inc1":1388,"fir_inc_rate":"58.1","scd_inc1":1580,"s_vc_dt":"2021.09.05","scd_inc_rate":"34.5","fir_inc":5558869,"fir_sub":9575355},{"scd_inc":3299212,"fir_inc1":22326,"fir_inc_rate":"58.0","scd_inc1":42787,"s_vc_dt":"2021.09.04","scd_inc_rate":"34.5","fir_inc":5557393,"fir_sub":9575355},{"scd_inc":3256323,"fir_inc1":45045,"fir_inc_rate":"57.8","scd_inc1":113133,"s_vc_dt":"2021.09.03","scd_inc_rate":"34.1","fir_inc":5534916,"fir_sub":9575355},{"scd_inc":3142962,"fir_inc1":39320,"fir_inc_rate":"57.3","scd_inc1":88297,"s_vc_dt":"2021.09.02","scd_inc_rate":"32.8","fir_inc":5489715,"fir_sub":9575355},{"scd_inc":3054297,"fir_inc1":39320,"fir_inc_rate":"56.9","scd_inc1":88297,"s_vc_dt":"2021.09.01","scd_inc_rate":"31.9","fir_inc":5450266,"fir_sub":9575355},{"scd_inc":2959659,"fir_inc1":34235,"fir_inc_rate":"56.6","scd_inc1":94420,"s_vc_dt":"2021.08.31","scd_inc_rate":"30.9","fir_inc":5415837,"fir_sub":9575355},{"scd_inc":2863236,"fir_inc1":51342,"fir_inc_rate":"56.0","scd_inc1":95981,"s_vc_dt":"2021.08.30","scd_inc_rate":"29.9","fir_inc":5364255,"fir_sub":9575355},{"scd_inc":2755524,"fir_inc1":83424,"fir_inc_rate":"55.1","scd_inc1":107394,"s_vc_dt":"2021.08.29","scd_inc_rate":"28.8","fir_inc":5280462,"fir_sub":9575355},{"scd_inc":2752565,"fir_inc1":2697,"fir_inc_rate":"55.1","scd_inc1":2921,"s_vc_dt":"2021.08.28","scd_inc_rate":"28.7","fir_inc":5276953,"fir_sub":9575355},{"scd_inc":2702208,"fir_inc1":51398,"fir_inc_rate":"54.6","scd_inc1":50134,"s_vc_dt":"2021.08.27","scd_inc_rate":"28.2","fir_inc":5224286,"fir_sub":9575355},{"scd_inc":2599571,"fir_inc1":110086,"fir_inc_rate":"53.4","scd_inc1":101098,"s_vc_dt":"2021.08.26","scd_inc_rate":"27.1","fir_inc":5111802,"fir_sub":9575355},{"scd_inc":2533738,"fir_inc1":126823,"fir_inc_rate":"52.2","scd_inc1":71032,"s_vc_dt":"2021.08.25","scd_inc_rate":"26.5","fir_inc":4994132,"fir_sub":9575355},{"scd_inc":2450543,"fir_inc1":63242,"fir_inc_rate":"51.5","scd_inc1":82944,"s_vc_dt":"2021.08.24","scd_inc_rate":"25.6","fir_inc":4929671,"fir_sub":9575355},{"scd_inc":2342494,"fir_inc1":71407,"fir_inc_rate":"50.7","scd_inc1":107587,"s_vc_dt":"2021.08.23","scd_inc_rate":"24.5","fir_inc":4856923,"fir_sub":9575355},{"scd_inc":2210777,"fir_inc1":74785,"fir_inc_rate":"48.8","scd_inc1":130725,"s_vc_dt":"2021.08.22","scd_inc_rate":"22.6","fir_inc":4780478,"fir_sub":9795426},{"scd_inc":2210176,"fir_inc1":7449,"fir_inc_rate":"49.8","scd_inc1":561,"s_vc_dt":"2021.08.21","scd_inc_rate":"23.1","fir_inc":4771762,"fir_sub":9575355},{"scd_inc":2183532,"fir_inc1":65430,"fir_inc_rate":"49.1","scd_inc1":26500,"s_vc_dt":"2021.08.20","scd_inc_rate":"22.8","fir_inc":4704843,"fir_sub":9575355},{"scd_inc":2116503,"fir_inc1":116425,"fir_inc_rate":"47.9","scd_inc1":66759,"s_vc_dt":"2021.08.19","scd_inc_rate":"22.1","fir_inc":4587049,"fir_sub":9575355},{"scd_inc":2058630,"fir_inc1":85052,"fir_inc_rate":"78.1","scd_inc1":57683,"s_vc_dt":"2021.08.18","scd_inc_rate":"35.7","fir_inc":4500520,"fir_sub":5762857},{"scd_inc":1995627,"fir_inc1":93303,"fir_inc_rate":"80.0","scd_inc1":62833,"s_vc_dt":"2021.08.17","scd_inc_rate":"36.3","fir_inc":4405330,"fir_sub":5503804},{"scd_inc":1900836,"fir_inc1":128626,"fir_inc_rate":"86.9","scd_inc1":94563,"s_vc_dt":"2021.08.16","scd_inc_rate":"38.7","fir_inc":4273365,"fir_sub":4915812},{"scd_inc":1849485,"fir_inc1":123845,"fir_inc_rate":"86.4","scd_inc1":51259,"s_vc_dt":"2021.08.15","scd_inc_rate":"38.5","fir_inc":4149042,"fir_sub":4802523},{"scd_inc":1848314,"fir_inc1":3875,"fir_inc_rate":"86.3","scd_inc1":1162,"s_vc_dt":"2021.08.14","scd_inc_rate":"38.5","fir_inc":4145096,"fir_sub":4802523},{"scd_inc":1808837,"fir_inc1":29755,"fir_inc_rate":"85.9","scd_inc1":39280,"s_vc_dt":"2021.08.13","scd_inc_rate":"37.8","fir_inc":4115097,"fir_sub":4788775},{"scd_inc":1686971,"fir_inc1":43931,"fir_inc_rate":"85.9","scd_inc1":121688,"s_vc_dt":"2021.08.12","scd_inc_rate":"35.6","fir_inc":4070622,"fir_sub":4737032},{"scd_inc":1551492,"fir_inc1":28270,"fir_inc_rate":"84.6","scd_inc1":135399,"s_vc_dt":"2021.08.11","scd_inc_rate":"32.5","fir_inc":4041944,"fir_sub":4774960},{"scd_inc":1515914,"fir_inc1":31041,"fir_inc_rate":"90.7","scd_inc1":35492,"s_vc_dt":"2021.08.10","scd_inc_rate":"34.3","fir_inc":4010500,"fir_sub":4419973},{"scd_inc":1481476,"fir_inc1":48625,"fir_inc_rate":"89.6","scd_inc1":34387,"s_vc_dt":"2021.08.09","scd_inc_rate":"33.5","fir_inc":3961449,"fir_sub":4419959},{"scd_inc":1446195,"fir_inc1":70831,"fir_inc_rate":"89.1","scd_inc1":35253,"s_vc_dt":"2021.08.08","scd_inc_rate":"33.1","fir_inc":3890343,"fir_sub":4364248},{"scd_inc":1446093,"fir_inc1":6105,"fir_inc_rate":"89.2","scd_inc1":106,"s_vc_dt":"2021.08.07","scd_inc_rate":"33.2","fir_inc":3884200,"fir_sub":4356536},{"scd_inc":1437142,"fir_inc1":23333,"fir_inc_rate":"88.9","scd_inc1":8911,"s_vc_dt":"2021.08.06","scd_inc_rate":"33.1","fir_inc":3860574,"fir_sub":4341693},{"scd_inc":1406907,"fir_inc1":41614,"fir_inc_rate":"88.4","scd_inc1":30152,"s_vc_dt":"2021.08.05","scd_inc_rate":"32.6","fir_inc":3818469,"fir_sub":4321444},{"scd_inc":1381042,"fir_inc1":31027,"fir_inc_rate":"87.6","scd_inc1":25819,"s_vc_dt":"2021.08.04","scd_inc_rate":"31.9","fir_inc":3787227,"fir_sub":4324428},{"scd_inc":1357865,"fir_inc1":26082,"fir_inc_rate":"87.3","scd_inc1":23102,"s_vc_dt":"2021.08.03","scd_inc_rate":"31.5","fir_inc":3760901,"fir_sub":4308530},{"scd_inc":1337105,"fir_inc1":35750,"fir_inc_rate":"86.4","scd_inc1":20557,"s_vc_dt":"2021.08.02","scd_inc_rate":"31.0","fir_inc":3724642,"fir_sub":4308673},{"scd_inc":1329967,"fir_inc1":77877,"fir_inc_rate":"95.7","scd_inc1":7123,"s_vc_dt":"2021.08.01","scd_inc_rate":"34.9","fir_inc":3646552,"fir_sub":3810055},{"scd_inc":1329899,"fir_inc1":5674,"fir_inc_rate":"87.3","scd_inc1":68,"s_vc_dt":"2021.07.31","scd_inc_rate":"31.9","fir_inc":3640808,"fir_sub":4170013},{"scd_inc":1325451,"fir_inc1":39795,"fir_inc_rate":"86.4","scd_inc1":4188,"s_vc_dt":"2021.07.30","scd_inc_rate":"31.8","fir_inc":3600688,"fir_sub":4164203},{"scd_inc":1310875,"fir_inc1":80425,"fir_inc_rate":"84.5","scd_inc1":13659,"s_vc_dt":"2021.07.29","scd_inc_rate":"31.5","fir_inc":3519568,"fir_sub":4164261},{"scd_inc":1302735,"fir_inc1":60488,"fir_inc_rate":"83.6","scd_inc1":7742,"s_vc_dt":"2021.07.28","scd_inc_rate":"31.5","fir_inc":3458804,"fir_sub":4137685},{"scd_inc":1293099,"fir_inc1":84052,"fir_inc_rate":"81.2","scd_inc1":8120,"s_vc_dt":"2021.07.27","scd_inc_rate":"31.1","fir_inc":3372307,"fir_sub":4150036},{"scd_inc":1283718,"fir_inc1":74786,"fir_inc_rate":"81.2","scd_inc1":9381,"s_vc_dt":"2021.07.26","scd_inc_rate":"31.6","fir_inc":3297521,"fir_sub":4058839},{"scd_inc":1268914,"fir_inc1":125490,"fir_inc_rate":"77.9","scd_inc1":14631,"s_vc_dt":"2021.07.25","scd_inc_rate":"31.2","fir_inc":3168908,"fir_sub":4065645},{"scd_inc":1268896,"fir_inc1":85,"fir_inc_rate":"77.9","scd_inc1":19,"s_vc_dt":"2021.07.24","scd_inc_rate":"31.2","fir_inc":3168820,"fir_sub":4065545},{"scd_inc":1266249,"fir_inc1":6610,"fir_inc_rate":"77.8","scd_inc1":2639,"s_vc_dt":"2021.07.23","scd_inc_rate":"31.1","fir_inc":3162205,"fir_sub":4065798},{"scd_inc":1254560,"fir_inc1":27951,"fir_inc_rate":"77.5","scd_inc1":10128,"s_vc_dt":"2021.07.22","scd_inc_rate":"31","fir_inc":3134191,"fir_sub":4046086},{"scd_inc":1245273,"fir_inc1":31573,"fir_inc_rate":"78.7","scd_inc1":8022,"s_vc_dt":"2021.07.21","scd_inc_rate":"31.6","fir_inc":3102494,"fir_sub":3943320},{"scd_inc":1237904,"fir_inc1":31192,"fir_inc_rate":"78.0","scd_inc1":6008,"s_vc_dt":"2021.07.20","scd_inc_rate":"31.4","fir_inc":3071180,"fir_sub":3939275},{"scd_inc":1226600,"fir_inc1":31212,"fir_inc_rate":"77.2","scd_inc1":8800,"s_vc_dt":"2021.07.19","scd_inc_rate":"31.1","fir_inc":3039867,"fir_sub":3939611},{"scd_inc":1216767,"fir_inc1":31651,"fir_inc_rate":"75.2","scd_inc1":9668,"s_vc_dt":"2021.07.18","scd_inc_rate":"29.8","fir_inc":3008122,"fir_sub":3939611},{"scd_inc":1216426,"fir_inc1":118,"fir_inc_rate":"76.1","scd_inc1":151,"s_vc_dt":"2021.07.17","scd_inc_rate":"30.8","fir_inc":3000991,"fir_sub":3955276},{"scd_inc":1203490,"fir_inc1":8953,"fir_inc_rate":"75.8","scd_inc1":7397,"s_vc_dt":"2021.07.16","scd_inc_rate":"30.4","fir_inc":2998367,"fir_sub":3950821},{"scd_inc":1176298,"fir_inc1":26086,"fir_inc_rate":"75.2","scd_inc1":27192,"s_vc_dt":"2021.07.15","scd_inc_rate":"29.8","fir_inc":2972281,"fir_sub":3950821},{"scd_inc":1152859,"fir_inc1":25026,"fir_inc_rate":"75.3","scd_inc1":20650,"s_vc_dt":"2021.07.14","scd_inc_rate":"29.5","fir_inc":2946540,"fir_sub":3911307},{"scd_inc":1130848,"fir_inc1":25553,"fir_inc_rate":"78.4","scd_inc1":18514,"s_vc_dt":"2021.07.13","scd_inc_rate":"30.3","fir_inc":2922594,"fir_sub":3726883},{"scd_inc":1110216,"fir_inc1":20140,"fir_inc_rate":"82.6","scd_inc1":16581,"s_vc_dt":"2021.07.12","scd_inc_rate":"31.6","fir_inc":2902429,"fir_sub":3514797},{"scd_inc":1096845,"fir_inc1":7439,"fir_inc_rate":"82.1","scd_inc1":13483,"s_vc_dt":"2021.07.11","scd_inc_rate":"31.1","fir_inc":2896204,"fir_sub":3528530},{"scd_inc":1096559,"fir_inc1":66,"fir_inc_rate":"81.9","scd_inc1":222,"s_vc_dt":"2021.07.10","scd_inc_rate":"31.0","fir_inc":2896137,"fir_sub":3537117},{"scd_inc":1083665,"fir_inc1":3864,"fir_inc_rate":"81.7","scd_inc1":8264,"s_vc_dt":"2021.07.09","scd_inc_rate":"30.6","fir_inc":2892191,"fir_sub":3538319},{"scd_inc":1058784,"fir_inc1":14064,"fir_inc_rate":"81.2","scd_inc1":20660,"s_vc_dt":"2021.07.08","scd_inc_rate":"29.9","fir_inc":2877851,"fir_sub":3546224},{"scd_inc":1041173,"fir_inc1":7439,"fir_inc_rate":"80.9","scd_inc1":13483,"s_vc_dt":"2021.07.07","scd_inc_rate":"29.4","fir_inc":2869885,"fir_sub":3545987},{"scd_inc":1025199,"fir_inc1":6871,"fir_inc_rate":"80.6","scd_inc1":11909,"s_vc_dt":"2021.07.06","scd_inc_rate":"28.9","fir_inc":2862693,"fir_sub":3551180},{"scd_inc":1008177,"fir_inc1":7703,"fir_inc_rate":"81.6","scd_inc1":12346,"s_vc_dt":"2021.07.05","scd_inc_rate":"28.8","fir_inc":2854873,"fir_sub":3496816},{"scd_inc":998134,"fir_inc1":13454,"fir_inc_rate":"83","scd_inc1":9389,"s_vc_dt":"2021.07.04","scd_inc_rate":"29.2","fir_inc":2841244,"fir_sub":3421953},{"scd_inc":997938,"fir_inc1":0,"fir_inc_rate":"81.7","scd_inc1":0,"s_vc_dt":"2021.07.03","scd_inc_rate":"28.7","fir_inc":2841238,"fir_sub":3476510},{"scd_inc":989375,"fir_inc1":696,"fir_inc_rate":"81.7","scd_inc1":4139,"s_vc_dt":"2021.07.02","scd_inc_rate":"28.5","fir_inc":2840470,"fir_sub":3476385},{"scd_inc":964356,"fir_inc1":1588,"fir_inc_rate":"83.0","scd_inc1":20529,"s_vc_dt":"2021.07.01","scd_inc_rate":"28.2","fir_inc":2838855,"fir_sub":3420685},{"scd_inc":941358,"fir_inc1":1642,"fir_inc_rate":"81.6","scd_inc1":18865,"s_vc_dt":"2021.06.30","scd_inc_rate":"27.1","fir_inc":2837158,"fir_sub":3475794},{"scd_inc":914519,"fir_inc1":3893,"fir_inc_rate":"81.0","scd_inc1":22749,"s_vc_dt":"2021.06.29","scd_inc_rate":"26.2","fir_inc":2833050,"fir_sub":3496257},{"scd_inc":887508,"fir_inc1":3321,"fir_inc_rate":"81.1","scd_inc1":22407,"s_vc_dt":"2021.06.28","scd_inc_rate":"25.4","fir_inc":2829341,"fir_sub":3490157},{"scd_inc":865395,"fir_inc1":3278,"fir_inc_rate":"81.0","scd_inc1":21853,"s_vc_dt":"2021.06.27","scd_inc_rate":"24.8","fir_inc":2825862,"fir_sub":3484201},{"scd_inc":865395,"fir_inc1":0,"fir_inc_rate":"81.0","scd_inc1":0,"s_vc_dt":"2021.06.26","scd_inc_rate":"24.8","fir_inc":2825885,"fir_sub":3484201},{"scd_inc":858697,"fir_inc1":2216,"fir_inc_rate":"81.0","scd_inc1":6655,"s_vc_dt":"2021.06.25","scd_inc_rate":"24.6","fir_inc":2821282,"fir_sub":3484201},{"scd_inc":835878,"fir_inc1":7635,"fir_inc_rate":"82.2","scd_inc1":22720,"s_vc_dt":"2021.06.24","scd_inc_rate":"24.5","fir_inc":2811191,"fir_sub":3418720},{"scd_inc":813666,"fir_inc1":6581,"fir_inc_rate":"80.7","scd_inc1":22040,"s_vc_dt":"2021.06.23","scd_inc_rate":"23.4","fir_inc":2802006,"fir_sub":3470953},{"scd_inc":791467,"fir_inc1":6694,"fir_inc_rate":"80.6","scd_inc1":21120,"s_vc_dt":"2021.06.22","scd_inc_rate":"22.8","fir_inc":2792660,"fir_sub":3466857},{"scd_inc":770137,"fir_inc1":6694,"fir_inc_rate":"80.4","scd_inc1":21120,"s_vc_dt":"2021.06.21","scd_inc_rate":"21.9","fir_inc":2781609,"fir_sub":3510564},{"scd_inc":747880,"fir_inc1":4973,"fir_inc_rate":"79.0","scd_inc1":21087,"s_vc_dt":"2021.06.20","scd_inc_rate":"21.3","fir_inc":2774797,"fir_sub":3511095},{"scd_inc":747652,"fir_inc1":66,"fir_inc_rate":"79.0","scd_inc1":65,"s_vc_dt":"2021.06.19","scd_inc_rate":"21.3","fir_inc":2774543,"fir_sub":3511144},{"scd_inc":739623,"fir_inc1":36213,"fir_inc_rate":"79.3","scd_inc1":7884,"s_vc_dt":"2021.06.18","scd_inc_rate":"21.5","fir_inc":2732982,"fir_sub":3446554},{"scd_inc":711572,"fir_inc1":90850,"fir_inc_rate":"76.9","scd_inc1":27755,"s_vc_dt":"2021.06.17","scd_inc_rate":"20.7","fir_inc":2637993,"fir_sub":3430375},{"scd_inc":685532,"fir_inc1":78339,"fir_inc_rate":"75.1","scd_inc1":25631,"s_vc_dt":"2021.06.16","scd_inc_rate":"20.2","fir_inc":2554809,"fir_sub":3401641},{"scd_inc":627708,"fir_inc1":112311,"fir_inc_rate":"71.9","scd_inc1":57409,"s_vc_dt":"2021.06.15","scd_inc_rate":"18.5","fir_inc":2437954,"fir_sub":3391964},{"scd_inc":589320,"fir_inc1":122487,"fir_inc_rate":"68.5","scd_inc1":37687,"s_vc_dt":"2021.06.14","scd_inc_rate":"17.5","fir_inc":2309534,"fir_sub":3371856},{"scd_inc":535930,"fir_inc1":145519,"fir_inc_rate":"64.3","scd_inc1":52848,"s_vc_dt":"2021.06.13","scd_inc_rate":"15.9","fir_inc":2163259,"fir_sub":3364373},{"scd_inc":533379,"fir_inc1":5702,"fir_inc_rate":"64.1","scd_inc1":2522,"s_vc_dt":"2021.06.12","scd_inc_rate":"15.9","fir_inc":2157602,"fir_sub":3364288},{"scd_inc":504526,"fir_inc1":82931,"fir_inc_rate":"61.7","scd_inc1":28724,"s_vc_dt":"2021.06.11","scd_inc_rate":"15.0","fir_inc":2070561,"fir_sub":3353331},{"scd_inc":448684,"fir_inc1":165265,"fir_inc_rate":"56.9","scd_inc1":55544,"s_vc_dt":"2021.06.10","scd_inc_rate":"13.4","fir_inc":1900981,"fir_sub":3338670},{"scd_inc":380200,"fir_inc1":148732,"fir_inc_rate":"56.2","scd_inc1":68440,"s_vc_dt":"2021.06.09","scd_inc_rate":"12.3","fir_inc":1746392,"fir_sub":3102614},{"scd_inc":377030,"fir_inc1":104841,"fir_inc_rate":"53.9","scd_inc1":3076,"s_vc_dt":"2021.06.08","scd_inc_rate":"12.4","fir_inc":1636992,"fir_sub":3034302},{"scd_inc":372339,"fir_inc1":131465,"fir_inc_rate":"49.7","scd_inc1":4672,"s_vc_dt":"2021.06.07","scd_inc_rate":"12.3","fir_inc":1500832,"fir_sub":3018205},{"scd_inc":366927,"fir_inc1":158842,"fir_inc_rate":"58.7","scd_inc1":5412,"s_vc_dt":"2021.06.06","scd_inc_rate":"16.0","fir_inc":1341990,"fir_sub":2286469},{"scd_inc":366926,"fir_inc1":463,"fir_inc_rate":"58.8","scd_inc1":0,"s_vc_dt":"2021.06.05","scd_inc_rate":"16.1","fir_inc":1341398,"fir_sub":2282866},{"scd_inc":365789,"fir_inc1":31613,"fir_inc_rate":"57.5","scd_inc1":1135,"s_vc_dt":"2021.06.04","scd_inc_rate":"16.1","fir_inc":1309610,"fir_sub":2275616},{"scd_inc":355399,"fir_inc1":76685,"fir_inc_rate":"54.4","scd_inc1":10339,"s_vc_dt":"2021.06.03","scd_inc_rate":"15.7","fir_inc":1232478,"fir_sub":2265073},{"scd_inc":346936,"fir_inc1":66402,"fir_inc_rate":"51.8","scd_inc1":8383,"s_vc_dt":"2021.06.02","scd_inc_rate":"15.4","fir_inc":1165736,"fir_sub":2249314},{"scd_inc":340624,"fir_inc1":73063,"fir_inc_rate":"48.9","scd_inc1":6277,"s_vc_dt":"2021.06.01","scd_inc_rate":"15.3","fir_inc":1092306,"fir_sub":2231513},{"scd_inc":333469,"fir_inc1":103600,"fir_inc_rate":"44.6","scd_inc1":7109,"s_vc_dt":"2021.05.31","scd_inc_rate":"15.1","fir_inc":988327,"fir_sub":2215425},{"scd_inc":325079,"fir_inc1":75387,"fir_inc_rate":"41.6","scd_inc1":8127,"s_vc_dt":"2021.05.30","scd_inc_rate":"14.8","fir_inc":912517,"fir_sub":2195709},{"scd_inc":325079,"fir_inc1":950,"fir_inc_rate":"41.5","scd_inc1":0,"s_vc_dt":"2021.05.29","scd_inc_rate":"14.8","fir_inc":911559,"fir_sub":2196518},{"scd_inc":321446,"fir_inc1":33824,"fir_inc_rate":"40.1","scd_inc1":3843,"s_vc_dt":"2021.05.28","scd_inc_rate":"14.7","fir_inc":877710,"fir_sub":2188641},{"scd_inc":304336,"fir_inc1":105089,"fir_inc_rate":"35.5","scd_inc1":17084,"s_vc_dt":"2021.05.27","scd_inc_rate":"14.0","fir_inc":772541,"fir_sub":2175217},{"scd_inc":291118,"fir_inc1":122034,"fir_inc_rate":"57.6","scd_inc1":13061,"s_vc_dt":"2021.05.26","scd_inc_rate":"25.8","fir_inc":650432,"fir_sub":1129593},{"scd_inc":274749,"fir_inc1":10780,"fir_inc_rate":"56.9","scd_inc1":16175,"s_vc_dt":"2021.05.25","scd_inc_rate":"24.5","fir_inc":639483,"fir_sub":1123393},{"scd_inc":253528,"fir_inc1":7748,"fir_inc_rate":"56.2","scd_inc1":21010,"s_vc_dt":"2021.05.24","scd_inc_rate":"22.6","fir_inc":631695,"fir_sub":1124159},{"scd_inc":231821,"fir_inc1":7688,"fir_inc_rate":"55.5","scd_inc1":21524,"s_vc_dt":"2021.05.23","scd_inc_rate":"20.6","fir_inc":623942,"fir_sub":1123388},{"scd_inc":231820,"fir_inc1":0,"fir_inc_rate":"55.6","scd_inc1":0,"s_vc_dt":"2021.05.22","scd_inc_rate":"20.6","fir_inc":623941,"fir_sub":1122778},{"scd_inc":227493,"fir_inc1":2478,"fir_inc_rate":"55.4","scd_inc1":4100,"s_vc_dt":"2021.05.21","scd_inc_rate":"20.3","fir_inc":621463,"fir_sub":1121838},{"scd_inc":198625,"fir_inc1":2271,"fir_inc_rate":"55.1","scd_inc1":28449,"s_vc_dt":"2021.05.20","scd_inc_rate":"17.7","fir_inc":619017,"fir_sub":1123023},{"scd_inc":175445,"fir_inc1":2205,"fir_inc_rate":"55.0","scd_inc1":22755,"s_vc_dt":"2021.05.19","scd_inc_rate":"15.6","fir_inc":616705,"fir_sub":1121981},{"scd_inc":171720,"fir_inc1":14,"fir_inc_rate":"55.1","scd_inc1":3724,"s_vc_dt":"2021.05.18","scd_inc_rate":"15.3","fir_inc":616699,"fir_sub":1120058},{"scd_inc":154898,"fir_inc1":2983,"fir_inc_rate":"54.7","scd_inc1":16649,"s_vc_dt":"2021.05.17","scd_inc_rate":"13.8","fir_inc":613630,"fir_sub":1122759},{"scd_inc":141769,"fir_inc1":3197,"fir_inc_rate":"54.5","scd_inc1":13074,"s_vc_dt":"2021.05.16","scd_inc_rate":"12.7","fir_inc":610403,"fir_sub":1119118},{"scd_inc":141769,"fir_inc1":0,"fir_inc_rate":"54.6","scd_inc1":0,"s_vc_dt":"2021.05.15","scd_inc_rate":"12.7","fir_inc":610338,"fir_sub":1118166},{"scd_inc":137973,"fir_inc1":1021,"fir_inc_rate":"54.1","scd_inc1":3796,"s_vc_dt":"2021.05.14","scd_inc_rate":"11.2","fir_inc":609382,"fir_sub":1118491},{"scd_inc":125220,"fir_inc1":3827,"fir_inc_rate":"54.2","scd_inc1":12751,"s_vc_dt":"2021.05.13","scd_inc_rate":"11.2","fir_inc":604185,"fir_sub":1113909},{"scd_inc":112781,"fir_inc1":3391,"fir_inc_rate":"53.8","scd_inc1":12435,"s_vc_dt":"2021.05.12","scd_inc_rate":"10.1","fir_inc":600548,"fir_sub":1116796},{"scd_inc":98810,"fir_inc1":1617,"fir_inc_rate":"53.7","scd_inc1":13970,"s_vc_dt":"2021.05.11","scd_inc_rate":"8.9","fir_inc":598266,"fir_sub":1114297},{"scd_inc":85775,"fir_inc1":2796,"fir_inc_rate":"53.4","scd_inc1":13030,"s_vc_dt":"2021.05.10","scd_inc_rate":"7.7","fir_inc":594975,"fir_sub":1113580},{"scd_inc":73295,"fir_inc1":3131,"fir_inc_rate":"53.1","scd_inc1":12457,"s_vc_dt":"2021.05.09","scd_inc_rate":"6.6","fir_inc":591040,"fir_sub":1113434},{"scd_inc":73003,"fir_inc1":0,"fir_inc_rate":"53.0","scd_inc1":0,"s_vc_dt":"2021.05.08","scd_inc_rate":"6.6","fir_inc":589744,"fir_sub":1112095},{"scd_inc":70926,"fir_inc1":4044,"fir_inc_rate":"52.9","scd_inc1":2082,"s_vc_dt":"2021.05.07","scd_inc_rate":"6.3","fir_inc":592073,"fir_sub":1119900},{"scd_inc":59707,"fir_inc1":11230,"fir_inc_rate":"51.9","scd_inc1":11486,"s_vc_dt":"2021.05.06","scd_inc_rate":"5.4","fir_inc":574583,"fir_sub":1108162},{"scd_inc":47940,"fir_inc1":11021,"fir_inc_rate":"50.9","scd_inc1":11715,"s_vc_dt":"2021.05.05","scd_inc_rate":"4.3","fir_inc":563044,"fir_sub":1106344},{"scd_inc":46290,"fir_inc1":1788,"fir_inc_rate":"50.6","scd_inc1":1650,"s_vc_dt":"2021.05.04","scd_inc_rate":"4.1","fir_inc":559605,"fir_sub":1104738},{"scd_inc":41624,"fir_inc1":20592,"fir_inc_rate":"49.0","scd_inc1":4665,"s_vc_dt":"2021.05.03","scd_inc_rate":"3.8","fir_inc":540404,"fir_sub":1102593},{"scd_inc":36591,"fir_inc1":19795,"fir_inc_rate":"47.2","scd_inc1":5033,"s_vc_dt":"2021.05.02","scd_inc_rate":"3.3","fir_inc":520200,"fir_sub":1101302},{"scd_inc":36591,"fir_inc1":491,"fir_inc_rate":"47.2","scd_inc1":0,"s_vc_dt":"2021.05.01","scd_inc_rate":"3.3","fir_inc":519845,"fir_sub":1100067},{"scd_inc":35900,"fir_inc1":6655,"fir_inc_rate":"46.6","scd_inc1":691,"s_vc_dt":"2021.04.30","scd_inc_rate":"3.3","fir_inc":511162,"fir_sub":1096899},{"scd_inc":31620,"fir_inc1":38789,"fir_inc_rate":"43.6","scd_inc1":4280,"s_vc_dt":"2021.04.29","scd_inc_rate":"2.9","fir_inc":472376,"fir_sub":1084245},{"scd_inc":27699,"fir_inc1":33484,"fir_inc_rate":"40.2","scd_inc1":3921,"s_vc_dt":"2021.04.28","scd_inc_rate":"2.5","fir_inc":438269,"fir_sub":1088155},{"scd_inc":25631,"fir_inc1":31795,"fir_inc_rate":"37.3","scd_inc1":2062,"s_vc_dt":"2021.04.27","scd_inc_rate":"2.4","fir_inc":403093,"fir_sub":1080433},{"scd_inc":21910,"fir_inc1":26585,"fir_inc_rate":"35.1","scd_inc1":3725,"s_vc_dt":"2021.04.26","scd_inc_rate":"2","fir_inc":379120,"fir_sub":1079832},{"scd_inc":18513,"fir_inc1":23323,"fir_inc_rate":"34.2","scd_inc1":3411,"s_vc_dt":"2021.04.25","scd_inc_rate":"1.8","fir_inc":350631,"fir_sub":1023346},{"scd_inc":18513,"fir_inc1":200,"fir_inc_rate":"34.2","scd_inc1":0,"s_vc_dt":"2021.04.24","scd_inc_rate":"1.8","fir_inc":350427,"fir_sub":1023346},{"scd_inc":18376,"fir_inc1":10195,"fir_inc_rate":"33.6","scd_inc1":119,"s_vc_dt":"2021.04.23","scd_inc_rate":"1.8","fir_inc":345764,"fir_sub":1027740},{"scd_inc":15901,"fir_inc1":27074,"fir_inc_rate":"31.0","scd_inc1":2479,"s_vc_dt":"2021.04.22","scd_inc_rate":"1.6","fir_inc":317386,"fir_sub":1023538},{"scd_inc":13543,"fir_inc1":22501,"fir_inc_rate":"28.6","scd_inc1":2358,"s_vc_dt":"2021.04.21","scd_inc_rate":"1.3","fir_inc":291857,"fir_sub":1019322}]}')},85:function(c){c.exports=JSON.parse('{"DSCRT":{"countryName":"\uc9c0\uc5ed\uba85","newCase":"\uc2e0\uaddc \ud655\uc9c4\uc790 \uc218","death":"\uc0ac\ub9dd\uc790 \uc218","percentage":"\ubc1c\uc0dd\ub960","newCcase":"\uc804\uc77c \ub300\ube44\uc99d\uac10 -\uc9c0\uc5ed\ubc1c\uc0dd","newFcase":"\uc804\uc77c \ub300\ube44\uc99d\uac10 -\ud574\uc678\uc720\uc785"},"DAA":[{"countryName":"\uc11c\uc6b8","newCase":"365","death":"535","percentage":"674.28","newCcase":"362","newFcase":"3"},{"countryName":"\uacbd\uae30","newCase":"337","death":"684","percentage":"420.97","newCcase":"328","newFcase":"9"},{"countryName":"\uac15\uc6d0","newCase":"25","death":"56","percentage":"295.69","newCcase":"24","newFcase":"1"},{"countryName":"\ucda9\uccad\ub3c4","newCase":"38","death":"45","percentage":"237.15","newCcase":"35","newFcase":"3"},{"countryName":"\uc804\ub77c\ub3c4","newCase":"13","death":"60","percentage":"154.87","newCcase":"11","newFcase":"2"},{"countryName":"\uacbd\uc0c1\ub3c4","newCase":"84","death":"22","percentage":"220.70","newCcase":"77","newFcase":"7"},{"countryName":"\uc81c\uc8fc","newCase":"12","death":"1","percentage":"261.47","newCcase":"12","newFcase":"0"}]}')}},[[380,1,2]]]);
//# sourceMappingURL=main.c4935242.chunk.js.map