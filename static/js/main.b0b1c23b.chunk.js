(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),s=t.n(r),i=(t(12),t(3)),l=t.n(i),o=t(6),m=t(2),u=t(1),p=(t(14),function(e){var a=e.title,t=e.calories,n=e.image,r=e.ingredients,s=e.url;return c.a.createElement("div",{className:"recipe"},c.a.createElement("h1",null,a),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,"Calories: ",t),c.a.createElement("img",{className:"image",src:n,alt:""}),c.a.createElement("div",{className:"Link"},c.a.createElement("a",{href:s,target:"blank",rel:"noopener noreferer"},"Click to Get Recipe",c.a.createElement(u.a,{className:"icon-link"}))))}),f=(t(15),function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),f=i[0],h=i[1],d=Object(n.useState)(""),E=Object(m.a)(d,2),g=E[0],b=E[1];Object(n.useEffect)((function(){v()}),[g]);var v=function(){var e=Object(o.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(g,"&app_id=").concat("7d7f91fd","&app_key=").concat("0f093d8910e07ecf53802867ebd7dbc8"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"shopName"},c.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/3026/3026994.svg",class:"image"}),"Chef's Deck"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b(f),h("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Enter your food",value:f,onChange:function(e){h(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search",c.a.createElement(u.b,{className:"icon-search"}))),""!==g&&c.a.createElement("h3",{className:"message-search"},"Search performed on ",g),c.a.createElement("div",{className:"recipes"},t.map((function(e){return c.a.createElement(p,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url})}))),""!==g&&c.a.createElement("div",{className:"message-end"},"End of results"))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b0b1c23b.chunk.js.map