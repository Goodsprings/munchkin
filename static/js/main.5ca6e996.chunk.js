(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=a(3),s=a(4),i=a(6),u=a(5),d=a(7),f=(a(13),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).upLvl=function(e){switch(e){case 1:a.state.first<10&&a.setState({first:++a.state.first});break;case 2:a.state.second<10&&a.setState({second:++a.state.second});break;case 3:a.state.third<10&&a.setState({third:++a.state.third});break;case 4:a.state.fourth<10&&a.setState({fourth:++a.state.fourth});break;default:console.log("default")}},a.downLvl=function(e){switch(e){case 1:a.state.first>1&&a.setState({first:--a.state.first});break;case 2:a.state.second>1&&a.setState({second:--a.state.second});break;case 3:a.state.third>1&&a.setState({third:--a.state.third});break;case 4:a.state.fourth>1&&a.setState({fourth:--a.state.fourth});break;default:console.log("default")}},a.state={first:1,second:1,third:1,fourth:1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{rowSpan:"2"},"First:"),r.a.createElement("td",{rowSpan:"2"},this.state.first),r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){e.upLvl(1)}},"\u25b2"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){e.downLvl(1)}},"\u25bc"))),r.a.createElement("tr",null,r.a.createElement("td",{rowSpan:"2",style:{paddingRight:15}},"Second:"),r.a.createElement("td",{rowSpan:"2"},this.state.second),r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){e.upLvl(2)}},"\u25b2"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){e.downLvl(2)}},"\u25bc"))),r.a.createElement("tr",null,r.a.createElement("td",{rowSpan:"2"},"Third:"),r.a.createElement("td",{rowSpan:"2"},this.state.third),r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){e.upLvl(3)}},"\u25b2"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){e.downLvl(3)}},"\u25bc"))),r.a.createElement("tr",null,r.a.createElement("td",{rowSpan:"2"},"Fourth:"),r.a.createElement("td",{rowSpan:"2"},this.state.fourth),r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){e.upLvl(4)}},"\u25b2"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){e.downLvl(4)}},"\u25bc"))))),r.a.createElement("br",null),r.a.createElement("a",{id:"new",href:"#",onClick:function(){e.setState({first:1,second:1,third:1,fourth:1})}},"New game"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.5ca6e996.chunk.js.map