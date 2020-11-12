(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a(20),i=a.n(c),r=a(8),l=a(10),o=a(11),h=a(14),d=a(13),b=(a(27),a(12)),j=a(2),u=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(b.a,{children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"The Game Shelf"}),Object(n.jsxs)("nav",{children:[Object(n.jsx)(b.b,{to:"/",children:Object(n.jsx)("button",{className:"btn btn-dark",children:"Home"})}),Object(n.jsx)(b.b,{to:"/info",children:Object(n.jsx)("button",{className:"btn btn-dark",children:"About"})}),Object(n.jsx)(b.b,{to:"/catalog",children:Object(n.jsx)("button",{className:"btn btn-dark",children:"Catalog"})})]})]}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/",exact:!0,component:m}),Object(n.jsx)(j.a,{path:"/info",exact:!0,component:O}),Object(n.jsx)(j.a,{path:"/catalog",exact:!0,component:x})]})]}),Object(n.jsx)("footer",{children:Object(n.jsx)("p",{children:"\xa9 Matthew DeChance, Garrett Moody, Grace Morales, Theo Moen, Will Hensel, 2020"})})]})}}]),a}(s.Component),m=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("main",{children:[Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Topic Overview"}),Object(n.jsx)("p",{children:"This project serves to be able to keep track of your board games. It will be something that you can show your friends to see what they want to play, you can keep track of wins/losses. Check the weather to see if its a good day to stay inside and play, or even find related games that you might want to get."})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Potential Applications"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Have weather available on screen."}),Object(n.jsx)("li",{children:"Inventory your current board games and make notes for missing pieces, etc."}),Object(n.jsx)("li",{children:"Track wins/losses"})]})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Useful Info to look into"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://openweathermap.org/api",children:" Weather API"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win",children:"Score tracking"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.creativebloq.com/features/best-html-apis",children:"Other maybe useful apis"})})]})]})]})}}]),a}(s.Component),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("main",{children:[Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"About"}),Object(n.jsx)("p",{class:"About info",children:"This is a project by Matthew DeChance for CPTR220 at Walla Walla University. The project will be creatign a virtual game shelf to catalog a persons board game colection. The user will be able to organize and interact with the data to rate, make notes, and track stats for each game they own. Work in progress as of 10/7/20."})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Weather Info"}),Object(n.jsx)("p",{children:"Have you ever wondered if a storm will clear up soon, or if it will actually rain today? As soon as you want to do something the weather flips. Check the integrated weather widget to see what the forecast will be before starting that game of monopoly."}),Object(n.jsx)("img",{class:"weather",src:"img/weather.png",alt:"weather widget"})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{id:"Stats",children:"Stat Tracking"}),Object(n.jsxs)("p",{children:["If you think you cant be beat at your favorite game, but have no way to prove it, fear not! Now you can input your wins and losses for each game into this and you will get a comparison of how often you win. Show off to your friends and prove to them that you ",Object(n.jsx)("del",{children:"have no life."})," ",Object(n.jsx)("del",{children:"are better than them."})," ",Object(n.jsx)("ins",{children:" should go pro!"})]}),Object(n.jsx)("img",{class:"stats",src:"img/graph.jpg",alt:"win/loss stats graph"})]})]})}}]),a}(s.Component),x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).tempClientID="glHGH0lSL1",n.searchLimit=15,n.state={games:[{name:"Secret Hitler",rating:5},{name:"Munchkin",rating:4},{name:"Bang!",rating:5}],searchResults:[],inputText:"",searchInputText:"",awaitingResults:!1},n.handleGameDeleteClick=n.handleGameDeleteClick.bind(Object(r.a)(n)),n.handleGameElementClick=n.handleGameElementClick.bind(Object(r.a)(n)),n.getResults=n.getResults(Object(r.a)(n)),n}return Object(o.a)(a,[{key:"handleGameDeleteClick",value:function(e){var t=this,a=this.state.games.indexOf(e);console.log(a),a>-1&&this.setState((function(){return t.state.games.splice(a,1)}))}},{key:"handleGameElementClick",value:function(e){5==e.rating?this.setState((function(){return e.rating=0})):this.setState((function(){return e.rating+=1}))}},{key:"addNewGame",value:function(){var e=this;""!=this.state.inputText&&(this.setState((function(){return e.state.games.push({name:e.state.inputText,rating:0})})),this.setState({inputText:""}))}},{key:"handleSearchInput",value:function(e){this.setState({searchInputText:e})}},{key:"handleSearchSubmitButtonClick",value:function(){this.addSelectionToCollection()}},{key:"handleSearchModalOpenButtonClick",value:function(){this.setState({searchInputText:"",searchResults:[]}),this.renderSearchTable()}},{key:"getResults",value:function(){var e=this;this.setState({awaitingResults:!0});var t="https://api.boardgameatlas.com/api/search?name=".concat(this.state.searchInputText,"&limit=").concat(this.searchLimit,"&client_id=").concat(this.tempClientID);return fetch(t).then((function(e){return e.json()})).then((function(t){t.games.forEach((function(t){return e.setState((function(){return e.state.searchResults.push({name:t.name,selected:!1})}))}))})).then(this.setState({awaitingResults:!1}))}},{key:"addSelectionToCollection",value:function(){var e=this;this.setState((function(){return e.state.searchResults.forEach((function(t){t.selected&&e.state.games.push({name:t.name,rating:0})}))}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("main",{children:[Object(n.jsxs)("section",{className:"content",children:[Object(n.jsxs)("div",{className:"container mt-4 mb-4",children:[Object(n.jsx)("label",{for:"boardGameInput",children:"Enter a board game"}),Object(n.jsxs)("div",{className:"form-inline",children:[Object(n.jsx)("input",{type:"text",className:"form-control",value:this.state.inputText,onChange:function(t){return e.setState({inputText:t.target.value})}}),Object(n.jsx)("button",{type:"button",className:"btn btn-success ml-4",id:"submit-button",onClick:function(){return e.addNewGame()},children:"Submit"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary ml-4","data-toggle":"modal","data-target":"#searchModal",id:"search-modal-open-button",children:"Search"})]})]}),Object(n.jsx)("div",{className:"container mt-4 mb-4",children:Object(n.jsx)("table",{className:"table table-dark",children:Object(n.jsx)("tbody",{id:"game-list",children:this.state.games.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",className:"text-dark",children:t.id}),Object(n.jsx)("td",{children:t.name}),Object(n.jsxs)("td",{onClick:function(){return e.handleGameElementClick(t)},children:[t.rating," stars"]}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return e.handleGameDeleteClick(t)},children:Object(n.jsx)("i",{className:"fa fa-trash-o"})})})]})}))})})}),Object(n.jsxs)("div",{className:"container mt-4 mb-4",children:[Object(n.jsx)("h1",{children:"How to"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:"Enter the name of a board game to add to your collection in the input field and click submit to add a new game."})}),Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:"Click on the star rating on the game to change it."})}),Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:"Click on the search button to bring up the search box."})})]})]})]}),Object(n.jsx)("div",{className:"modal fade",id:"searchModal",tabindex:"-1",role:"dialog","aria-labelledby":"searchModalLabel","aria-hidden":"true",children:Object(n.jsx)("div",{className:"modal-dialog",role:"document",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h2",{className:"modal-title",id:"searchModalLabel",children:"Search"}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsxs)("div",{className:"container mt-4 mb-4",children:[Object(n.jsx)("label",{for:"boardGameInput",children:"Search for a game"}),Object(n.jsxs)("div",{className:"form-inline",children:[Object(n.jsx)("input",{type:"text",className:"form-control",id:"searchInput",value:this.state.searchInputText,onChange:function(t){return e.handleSearchInput(t.target.value)}}),Object(n.jsx)("button",{type:"button",className:"btn btn-success ml-4",id:"search-button",disabled:""==this.state.searchInputText,onClick:this.getResults,children:"Search"})]})]}),Object(n.jsx)("div",{className:"container mt-4 mb-4",children:Object(n.jsx)("table",{className:"table",children:Object(n.jsx)("tbody",{id:"game-search-list",children:this.state.awaitingResults?{}:this.state.searchResults.map((function(e){e.id,e.name,e.selected}))})})})]}),Object(n.jsxs)("div",{className:"modal-footer",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary",id:"search-submit-button","data-dismiss":"modal",children:"Submit"})]})]})})})]})}}]),a}(s.Component);i.a.render(Object(n.jsx)(u,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4523a742.chunk.js.map