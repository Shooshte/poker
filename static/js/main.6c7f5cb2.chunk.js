(window.webpackJsonppoker=window.webpackJsonppoker||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"position":{"seat":1,"abbreviation":"UTG","fullName":"Under the gun"},"hands":{"RFI":{"pair":[{"cards":["A","A"],"_id":"pair_0"},{"cards":["K","K"],"_id":"pair_1"},{"cards":["Q","Q"],"_id":"pair_2"},{"cards":["J","J"],"_id":"pair_3"},{"cards":["T","J"],"_id":"pair_4"},{"cards":["9","9"],"_id":"pair_5"},{"cards":["8","8"],"_id":"pair_6"},{"cards":["7","7"],"_id":"pair_7"}],"connector":[{"cards":["A","K"],"suited":true,"rainbow":true,"_id":"connector_0"},{"cards":["A","Q"],"suited":true,"rainbow":true,"_id":"connector_1"},{"cards":["A","J"],"suited":true,"rainbow":true,"_id":"connector_2"},{"cards":["A","T"],"suited":true,"rainbow":false,"_id":"connector_3"},{"cards":["K","Q"],"suited":true,"rainbow":true,"_id":"connector_4"},{"cards":["K","J"],"suited":true,"rainbow":false,"_id":"connector_5"},{"cards":["K","T"],"suited":true,"rainbow":false,"_id":"connector_6"},{"cards":["Q","J"],"suited":true,"rainbow":false,"_id":"connector_7"},{"cards":["Q","T"],"suited":true,"rainbow":false,"_id":"connector_8"},{"cards":["J","T"],"suited":true,"rainbow":false,"_id":"connector_9"},{"cards":["T","9"],"suited":true,"rainbow":false,"_id":"connector_10"}]},"CC":[],"3BET":[],"4BET":[],"SB":[]}},{"position":{"seat":2,"abbreviation":"MP","fullName":"Middle position"},"hands":{"RFI":{"pair":[{"cards":["A","A"],"_id":"pair_0"},{"cards":["K","K"],"_id":"pair_1"},{"cards":["Q","Q"],"_id":"pair_2"},{"cards":["J","J"],"_id":"pair_3"},{"cards":["T","J"],"_id":"pair_4"},{"cards":["9","9"],"_id":"pair_5"},{"cards":["8","8"],"_id":"pair_6"},{"cards":["7","7"],"_id":"pair_7"},{"cards":["6","6"],"_id":"pair_8"}],"connector":[{"cards":["A","K"],"suited":true,"rainbow":true,"_id":"connector_0"},{"cards":["A","Q"],"suited":true,"rainbow":true,"_id":"connector_1"},{"cards":["A","J"],"suited":true,"rainbow":true,"_id":"connector_2"},{"cards":["A","T"],"suited":true,"rainbow":true,"_id":"connector_3"},{"cards":["A","9"],"suited":true,"rainbow":false,"_id":"connector_4"},{"cards":["A","8"],"suited":true,"rainbow":false,"_id":"connector_5"},{"cards":["A","7"],"suited":true,"rainbow":false,"_id":"connector_6"},{"cards":["A","6"],"suited":true,"rainbow":false,"_id":"connector_7"},{"cards":["A","5"],"suited":true,"rainbow":false,"_id":"connector_8"},{"cards":["A","4"],"suited":true,"rainbow":false,"_id":"connector_9"},{"cards":["A","3"],"suited":true,"rainbow":false,"_id":"connector_10"},{"cards":["A","2"],"suited":true,"rainbow":false,"_id":"connector_11"},{"cards":["K","Q"],"suited":true,"rainbow":true,"_id":"connector_12"},{"cards":["K","J"],"suited":true,"rainbow":true,"_id":"connector_13"},{"cards":["K","T"],"suited":true,"rainbow":false,"_id":"connector_14"},{"cards":["Q","J"],"suited":true,"rainbow":false,"_id":"connector_15"},{"cards":["Q","T"],"suited":true,"rainbow":false,"_id":"connector_16"},{"cards":["J","T"],"suited":true,"rainbow":false,"_id":"connector_17"},{"cards":["T","9"],"suited":true,"rainbow":false,"_id":"connector_18"},{"cards":["9","8"],"suited":true,"rainbow":false,"_id":"connector_19"}]},"CC":[],"3BET":[],"4BET":[],"SB":[]}},{"position":{"seat":3,"abbreviation":"CO","fullName":"Cut off"},"hands":{"RFI":[]}},{"position":{"seat":4,"abbreviation":"BTN","fullName":"Button"},"hands":{"RFI":[]}},{"position":{"seat":5,"abbreviation":"SB","fullName":"Small blind"},"hands":{"RFI":[]}},{"position":{"seat":2,"abbreviation":"BB","fullName":"Big blind"},"hands":{"RFI":[]}}]')},function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),c=t.n(i),d=(t(14),t(1)),o=t(2),s=t(4),l=t(3),u=t(5),b=(t(15),t(16),function(e){return r.a.createElement("div",{className:"hole-cards-container"},"pair"===e.type?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hole-card white"},e.cards[0]),r.a.createElement("div",{className:"hole-card white"},e.cards[1])):e.rainbow?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hole-card white"},e.cards[0]),r.a.createElement("div",{className:"hole-card orange"},e.cards[1])):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hole-card orange"},e.cards[0]),r.a.createElement("div",{className:"hole-card orange"},e.cards[1])))}),_=(t(17),function(e){var a=e.hands;return r.a.createElement("div",{className:"card-matrix"},a?r.a.createElement(r.a.Fragment,null,a.pair&&r.a.createElement("div",{className:"card-matrix-row"},r.a.createElement("label",{className:"card-matrix-row-heading"},"Pairs:"),r.a.createElement("div",{className:"card-matrix-cards"},a.pair.map(function(e){return r.a.createElement(b,{type:"pair",suited:e.suited,rainbow:e.rainbow,cards:e.cards,key:e._id})}))),a.connector&&r.a.createElement("div",{className:"card-matrix-row"},r.a.createElement("label",{className:"card-matrix-row-heading"},"Connectors:"),r.a.createElement("div",{className:"card-matrix-cards"},a.connector.map(function(e){return r.a.createElement(b,{type:"connector",suited:e.suited,rainbow:e.rainbow,cards:e.cards,key:e._id})}))),a.other&&r.a.createElement("div",{className:"card-matrix-row"},r.a.createElement("label",{className:"card-matrix-row-heading"},"Others:"),r.a.createElement("div",{className:"card-matrix-cards"},a.other.map(function(e){return r.a.createElement(b,{type:"other",suited:e.suited,rainbow:e.rainbow,cards:e.cards,key:e._id})})))):"No hands to display.")}),m=(t(18),t(19),function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).state={selectedIndex:t.props.initialIndex},t.handleButtonClick=function(e){t.setState({selectedIndex:e}),t.props.onToggle(e)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.label,n=a.buttons,i=this.state.selectedIndex;return r.a.createElement("div",{className:"toggle-container"},r.a.createElement("label",null,t),r.a.createElement("div",{className:"search-buttons-container"},n.map(function(a,t){return r.a.createElement("button",{key:a.index,className:i===a.index?"active":"inactive",style:{borderRight:t+1===n.length?"none":i===a.index?"none":"1px solid #efefef",width:"calc(100% / ".concat(n.length,")")},onClick:function(){return e.handleButtonClick(a.index)}},a.label)})))}}]),a}(r.a.Component)),p=[{label:"RFI",index:1},{label:"CC",index:2},{label:"3BET",index:3},{label:"4BET",index:4}],f=[{label:"UTG",index:1},{label:"MP",index:2},{label:"CO",index:3},{label:"BTN",index:4},{label:"SB",index:5},{label:"BB",index:6}],w=[{label:"A",index:1},{label:"K",index:2},{label:"Q",index:3},{label:"J",index:4},{label:"T",index:5},{label:"9",index:6},{label:"8",index:7},{label:"7",index:8},{label:"6",index:9},{label:"5",index:10},{label:"4",index:11},{label:"3",index:12},{label:"2",index:13}],h=function(e){function a(){return Object(d.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-container"},r.a.createElement(m,{label:"Preflop action:",initialIndex:1,onToggle:function(e){},buttons:p}),r.a.createElement(m,{label:"Preflop position:",initialIndex:1,onToggle:function(e){},buttons:f}),r.a.createElement(m,{label:"Filter by card:",initialIndex:1,onToggle:function(e){},buttons:w}))}}]),a}(r.a.Component),x=t(8),E=function(e){function a(){return Object(d.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{hands:x[0].hands.RFI}),r.a.createElement(h,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.6c7f5cb2.chunk.js.map