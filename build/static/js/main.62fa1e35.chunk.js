(this["webpackJsonpfootball-bet"]=this["webpackJsonpfootball-bet"]||[]).push([[0],{37:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(26),r=n.n(s),c=(n(37),n(27)),l=n.n(c),o=n(30),d=n(67),u=n(68),b=n(69),m=n(2);var j=e=>{let{id:t,index:n,moveItem:i,name:a,className:s}=e;const[{isDragging:r},c]=Object(u.a)({type:"ITEM",item:{id:t,index:n},collect:e=>({isDragging:e.isDragging()})}),[,l]=Object(b.a)({accept:"ITEM",drop:e=>{e.index!==n&&i(e.index,n)}}),o=r?.5:1;return Object(m.jsx)("div",{ref:e=>c(l(e)),className:s,style:{opacity:o},children:a})};var h=e=>{let{player:t,initialTeams:n}=e;const[a,s]=Object(i.useState)(n),r=(e,t)=>{const n=[...a],[i]=n.splice(e,1);n.splice(t,0,i),s(n)};return Object(m.jsxs)("div",{className:"table",style:{flexDirection:"column"},children:[Object(m.jsx)("h3",{children:t}),a.map(((e,t)=>Object(m.jsx)(j,{className:"table-row",id:e,index:t,moveItem:r,name:"".concat(t+1,". ").concat(e)},e)))]})};var p=e=>{let{standings:t}=e;return Object(m.jsxs)("div",{className:"table",style:{flexDirection:"column"},children:[Object(m.jsx)("h3",{children:"Aktuelle Tabelle"}),t.map(((e,t)=>Object(m.jsxs)("div",{className:"table-row",children:[t+1,". ",e.teamName]},t)))]})};var g=e=>{let{players:t,standings:n}=e;const[a,s]=Object(i.useState)([]);return Object(i.useEffect)((()=>{(()=>{const e=t.map((e=>{let t=0;return e.initialTeams.forEach(((e,i)=>{const a=n.findIndex((t=>t.teamName===e));if(-1!==a){const e=Math.abs(i-a);t+=e}})),{...e,points:t}})).sort(((e,t)=>e.points-t.points));s(e)})()}),[t,n]),Object(m.jsxs)("div",{className:"table",style:{flexDirection:"column"},children:[Object(m.jsx)("h3",{children:"Aktueller Stand"}),a.map(((e,t)=>Object(m.jsxs)("div",{className:"table-row",children:[t+1,". ",e.name,": ",e.points," points"]},e.name)))]})};var x=()=>{const[e,t]=Object(i.useState)([]);console.log("App  standings",e);const[n,a]=Object(i.useState)(!0),[s,r]=Object(i.useState)("");if(Object(i.useEffect)((()=>{(async()=>{const e={method:"GET",url:"https://api.openligadb.de/getbltable/bl1/2024"};try{const n=await l.a.request(e);t(n.data),a(!1)}catch(n){console.error(n)}})()}),[]),n)return Object(m.jsx)("div",{children:"Loading..."});const c=[{name:"Happy",initialTeams:["Borussia Dortmund","RB Leipzig","Bayer Leverkusen","FC Bayern M\xfcnchen","Eintracht Frankfurt","VfB Stuttgart","VfL Wolfsburg","1. FC Union Berlin","SC Freiburg","Borussia M\xf6nchengladbach","TSG 1899 Hoffenheim","Werder Bremen","FC Augsburg","Mainz","VfL Bochum","1. FC Heidenheim 1846","Holstein Kiel","FC St. Pauli"]},{name:"Peter",initialTeams:["FC Bayern M\xfcnchen","Bayer Leverkusen","Borussia Dortmund","RB Leipzig","Eintracht Frankfurt","VfB Stuttgart","TSG 1899 Hoffenheim","VfL Wolfsburg","Werder Bremen","SC Freiburg","Mainz","Borussia M\xf6nchengladbach","1. FC Union Berlin","VfL Bochum","FC Augsburg","1. FC Heidenheim 1846","FC St. Pauli","Holstein Kiel"]},{name:"Vicke",initialTeams:["FC Bayern M\xfcnchen","Bayer Leverkusen","Borussia Dortmund","RB Leipzig","Eintracht Frankfurt","VfL Wolfsburg","TSG 1899 Hoffenheim","VfB Stuttgart","SC Freiburg","Mainz","Werder Bremen","Borussia M\xf6nchengladbach","FC Augsburg","1. FC Union Berlin","1. FC Heidenheim 1846","FC St. Pauli","VfL Bochum","Holstein Kiel"]}];return Object(m.jsx)(d.a,{backend:o.a,children:Object(m.jsx)("div",{style:{justifyContent:"center",padding:20},children:Object(m.jsxs)("div",{style:{alignItems:"center",position:"relative",gap:"20px"},children:[Object(m.jsxs)("select",{value:s,onChange:e=>{r(e.target.value)},style:{padding:"10px",fontSize:"16px",background:"white",border:"1px solid #ccc",borderRadius:"4px",zIndex:10,cursor:"pointer"},children:[Object(m.jsx)("option",{value:"",children:"Spielertipps w\xe4hlen"}),c.map((e=>Object(m.jsx)("option",{value:e.name,children:e.name},e.name)))]}),s&&Object(m.jsx)("div",{style:{width:"300px"},children:c.filter((e=>e.name===s)).map((e=>Object(m.jsx)(h,{player:e.name,initialTeams:e.initialTeams},e.name)))}),Object(m.jsxs)("div",{style:{gap:"20px"},children:[Object(m.jsx)("div",{style:{width:"300px"},children:e&&Object(m.jsx)(p,{standings:e})}),Object(m.jsx)("div",{style:{width:"300px"},children:e&&Object(m.jsx)(g,{players:c,standings:e})})]})]})})})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.62fa1e35.chunk.js.map