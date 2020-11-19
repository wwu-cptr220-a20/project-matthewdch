(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a(20),i=a.n(c),r=a(10),l=a(4),o=a(5),h=a(7),d=a(6),b=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Topic Overview"}),Object(n.jsx)("p",{children:"This project serves to be able to keep track of your board games. It will be something that you can show your friends to see what they want to play, you can keep track of wins/losses. Check the weather to see if its a good day to stay inside and play, or even find related games that you might want to get."})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Potential Applications"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Have weather available on screen."}),Object(n.jsx)("li",{children:"Inventory your current board games and make notes for missing pieces, etc."}),Object(n.jsx)("li",{children:"Track wins/losses"})]})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Useful Info to look into"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://openweathermap.org/api",children:" Weather API"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win",children:"Score tracking"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.creativebloq.com/features/best-html-apis",children:"Other maybe useful apis"})})]})]})]})}}]),a}(s.Component),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"About"}),Object(n.jsx)("p",{className:"About info",children:"This is a project by Matthew DeChance, Garrett Moody, Grace Morales, Theo Moen, Will Hensel for CPTR220 at Walla Walla University. The project will be creating a virtual game shelf to catalog a person's board game colection. The user will be able to add, organize, and rate each game they own. This app will also allow users to save their progress in the longer games. Final Version (11/18/20)."})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Cataloging"}),Object(n.jsx)("p",{children:"Take every game you own and add it to the catalog. You can then rate the games based on how much you enjoy them. No one else can tell you that risk is a terrible game because its rated at a 5 on the website."})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{id:"Saving",children:"Saving"}),Object(n.jsx)("p",{children:"If you have ever spent multiple days playing monopoly, or spent 2 weeks trying to delay the inevitable in risk; then this will help by allowing you to upload a photo of your current game to set it up later. It also helps counter one of the players tampering with the board game."})]})]})}}]),a}(s.Component),u=a(12),m=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={games:[{id:1,name:"Secret Hitler",rating:5,description:"Find the fascist"},{id:2,name:"Munchkin",rating:4,description:"Explore the dungeons"},{id:3,name:"Bang!",rating:5,description:"Kill the renegades"}],inputText:""},n.addSearchSelectionToCollection=n.addSearchSelectionToCollection.bind(Object(r.a)(n)),n.handleGameDeleteClick=n.handleGameDeleteClick.bind(Object(r.a)(n)),n.handleGameElementClick=n.handleGameElementClick.bind(Object(r.a)(n)),n}return Object(o.a)(a,[{key:"handleGameDeleteClick",value:function(e){var t=this,a=this.state.games.indexOf(e);console.log(a),a>-1&&this.setState((function(){return t.state.games.splice(a,1)}))}},{key:"handleGameElementClick",value:function(e){5===e.rating?this.setState((function(){return e.rating=0})):this.setState((function(){return e.rating+=1}))}},{key:"addNewGame",value:function(){var e=this;""!==this.state.inputText&&(this.setState((function(){return e.state.games.push({name:e.state.inputText,rating:0})})),this.setState({inputText:""}))}},{key:"addSearchSelectionToCollection",value:function(e){var t=[];this.setState(this.state.games.forEach((function(e){e.id=t.length+1,t.push(e)}))),e.forEach((function(e){e.selected&&t.push({id:t.length+1,name:e.name,rating:0})})),this.setState({games:t})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("section",{className:"content",children:[Object(n.jsxs)("div",{className:"container mt-4 mb-4",children:[Object(n.jsx)("label",{for:"boardGameInput",children:"Enter a board game"}),Object(n.jsxs)("div",{className:"form-inline",children:[Object(n.jsx)("input",{type:"text",className:"form-control",value:this.state.inputText,onChange:function(t){return e.setState({inputText:t.target.value})}}),Object(n.jsx)("button",{type:"button",className:"btn btn-success ml-4",id:"submit-button",onClick:function(){return e.addNewGame()},children:"Submit"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary ml-4","data-toggle":"modal","data-target":"#searchModal",id:"search-modal-open-button",children:"Search"})]})]}),Object(n.jsx)("div",{className:"container mt-4 mb-4",children:Object(n.jsx)("table",{className:"table table-dark",children:Object(n.jsx)(p,{games:this.state.games,handleGameElementClickCallback:this.handleGameElementClick,handleGameDeleteClickCallback:this.handleGameDeleteClick})})}),Object(n.jsxs)("div",{className:"container mt-4 mb-4",children:[Object(n.jsx)("h1",{children:"How to"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:"Enter the name of a board game to add to your collection in the input field and click submit to add a new game."})}),Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:"Click on the star rating on the game to change it."})}),Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:"Click on the search button to bring up the search box."})}),Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:"Click on the name of the game to bring up more information about it."})})]})]})]}),Object(n.jsx)("div",{className:"modal fade",id:"searchModal",tabindex:"-1",role:"dialog","aria-labelledby":"searchModalLabel","aria-hidden":"true",children:Object(n.jsx)(O,{addSelectedSearchResultCallback:this.addSearchSelectionToCollection})})]})}}]),a}(s.Component),p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("tbody",{id:"game-list",children:this.props.games.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",className:"text-dark",children:t.id}),Object(n.jsx)(u.b,{to:{pathname:"/catalog/"+t.id,games:e.props.games},children:Object(n.jsx)("td",{children:t.name})}),Object(n.jsxs)("td",{onClick:function(){return e.props.handleGameElementClickCallback(t)},children:[t.rating," stars"]}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return e.props.handleGameDeleteClickCallback(t)},children:Object(n.jsx)("i",{className:"fa fa-trash-o"})})})]})}))})}}]),a}(s.Component),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).clientID="glHGH0lSL1",n.searchLimit=15,n.state={searchResults:[],searchInputText:"",awaitingResults:!1,allowSearch:!1},n}return Object(o.a)(a,[{key:"handleSearchInput",value:function(e){this.setState({searchInputText:e})}},{key:"handleSearchSubmitButtonClick",value:function(){this.addSelectionToCollection()}},{key:"handleSearchModalOpenButtonClick",value:function(){this.setState({searchInputText:"",searchResults:[]}),this.renderSearchTable()}},{key:"componentDidMount",value:function(){this.setState({allowSearch:!0})}},{key:"getResults",value:function(){var e=this;this.setState({awaitingResults:!0});var t="https://api.boardgameatlas.com/api/search?name=".concat(this.state.searchInputText,"&limit=").concat(this.searchLimit,"&client_id=").concat(this.clientID);return fetch(t).then((function(e){return e.json()})).then((function(t){t.games.forEach((function(t,a){return e.setState((function(){return e.state.searchResults.push({id:a+1,name:t.name,selected:!1,description:t.description})}))}))})).then(this.setState({awaitingResults:!1}))}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"modal-dialog",role:"document",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h2",{className:"modal-title",id:"searchModalLabel",children:"Search"}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsxs)("div",{className:"container mt-4 mb-4",children:[Object(n.jsx)("label",{for:"boardGameInput",children:"Search for a game"}),Object(n.jsxs)("div",{className:"form-inline",children:[Object(n.jsx)("input",{type:"text",className:"form-control",id:"searchInput",value:this.state.searchInputText,onChange:function(t){return e.handleSearchInput(t.target.value)}}),Object(n.jsx)("button",{type:"button",className:"btn btn-success ml-4",id:"search-button",disabled:""===this.state.searchInputText&&!!this.state.allowSearch,onClick:function(){return e.getResults()},children:"Search"})]})]}),Object(n.jsx)("div",{className:"container mt-4 mb-4",children:Object(n.jsx)("table",{className:"table",children:Object(n.jsx)("tbody",{id:"game-search-list",children:this.state.awaitingResults?Object(n.jsx)("tr",{children:"Waiting..."}):this.state.searchResults.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:t.id}),Object(n.jsx)("td",{children:t.name}),Object(n.jsx)("td",{children:t.selected?Object(n.jsx)("i",{className:"far fa-check-square",onClick:function(){e.setState((function(){return t.selected=!t.selected}))}}):Object(n.jsx)("i",{className:"far fa-square",onClick:function(){e.setState((function(){return t.selected=!t.selected}))}})})]})}))})})})]}),Object(n.jsxs)("div",{className:"modal-footer",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary",id:"search-submit-button","data-dismiss":"modal",onClick:function(){return e.props.addSelectedSearchResultCallback(e.state.searchResults)},children:"Submit"})]})]})})}}]),a}(s.Component),x=(a(32),a(2)),g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(u.a,{basename:"/project-matthewdch/",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"The Game Shelf"}),Object(n.jsxs)("nav",{children:[Object(n.jsx)(u.b,{to:"/",children:Object(n.jsx)("button",{className:"btn btn-dark",children:"Home"})}),Object(n.jsx)(u.b,{to:"/info",children:Object(n.jsx)("button",{className:"btn btn-dark",children:"About"})}),Object(n.jsx)(u.b,{to:"/catalog",children:Object(n.jsx)("button",{className:"btn btn-dark",children:"Catalog"})}),Object(n.jsx)(u.b,{to:"/gamebookmark",children:Object(n.jsx)("button",{className:"btn btn-dark",children:"Saved Games"})})]})]}),Object(n.jsxs)(x.c,{children:[Object(n.jsx)(x.a,{path:"/",exact:!0,component:b}),Object(n.jsx)(x.a,{path:"/info",exact:!0,component:j}),Object(n.jsx)(x.a,{path:"/catalog",exact:!0,component:m}),Object(n.jsx)(x.a,{path:"/gamebookmark",exact:!0,component:v}),Object(n.jsx)(x.a,{path:"/catalog/:gameId",exact:!0,component:f})]})]}),Object(n.jsx)("footer",{children:Object(n.jsx)("p",{children:"\xa9 Matthew DeChance, Garrett Moody, Grace Morales, Theo Moen, Will Hensel, 2020"})})]})}}]),a}(s.Component),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(l.a)(this,a);var s=(n=t.call(this,e)).props.match.params.gameId,c=n.props.location.games;return n.game=c.find((function(e){return e.id===s})),n}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("section",{class:"content",children:Object(n.jsx)("div",{class:"container mt-4",children:Object(n.jsx)("div",{class:"card text-white bg-dark mb-3",children:Object(n.jsx)("div",{class:"col-md-8",children:Object(n.jsx)("div",{class:"card-body",children:Object(n.jsx)("p",{class:"card-text",children:this.game.name})})})})})})}}]),a}(s.Component),v=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={gameTitle:"",gameComments:"",gameArr:[],fileURL:null},n.submitData=n.submitData.bind(Object(r.a)(n)),n.handleComment=n.handleComment.bind(Object(r.a)(n)),n.handleTitle=n.handleTitle.bind(Object(r.a)(n)),n.uploadSingleFile=n.uploadSingleFile.bind(Object(r.a)(n)),n.delete=n.delete.bind(Object(r.a)(n)),n}return Object(o.a)(a,[{key:"delete",value:function(e){var t=this.state.gameArr.find((function(t){return t.props.gameTitle===e}));console.log(t);var a=this.state.gameArr.indexOf(t);this.state.gameArr[a]=Object(n.jsx)("div",{}),this.setState({gameArr:this.state.gameArr})}},{key:"uploadSingleFile",value:function(e){this.setState({fileURL:URL.createObjectURL(e.target.files[0])})}},{key:"submitData",value:function(){this.state.gameArr.push(Object(n.jsx)(y,{gameTitle:this.state.gameTitle,gameComments:this.state.gameComments,img:this.state.fileURL,delete:this.delete},this.state.gameTitle)),this.setState({gameArr:this.state.gameArr})}},{key:"handleTitle",value:function(e){this.setState({gameTitle:e.target.value})}},{key:"handleComment",value:function(e){this.setState({gameComments:e.target.value})}},{key:"render",value:function(){var e=this;return Object(n.jsx)("section",{class:"content",children:Object(n.jsxs)("div",{class:"container mt-4",children:[Object(n.jsx)("div",{class:"card text-white bg-secondary mb-4",children:Object(n.jsx)("form",{onSubmit:this.submitData,children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"boardName",children:"Board Game Title:"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{onChange:this.handleTitle,class:"form-control inputs",type:"text"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{for:"boardName",children:"How the game left off:"}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{onChange:this.handleComment,class:"form-control inputs",type:"text"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{for:"boardName",children:"Upload a picture of the board:"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{class:"inputs upload",type:"file",accept:"image/*",multiple:"false",onChange:function(t){return e.uploadSingleFile(t)}}),Object(n.jsx)("input",{type:"submit",value:"Submit Game Data",class:"btn btn-primary"})]})})}),Object(n.jsx)("div",{children:this.state.gameArr})]})})}}]),a}(s.Component),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"pad",children:[Object(n.jsxs)("div",{class:"row text-white bg-dark mb-3",children:[Object(n.jsxs)("div",{class:"card-body flex",children:[Object(n.jsx)("h3",{class:"cards-text left",children:this.props.gameTitle}),Object(n.jsx)("p",{class:"cards-text",children:this.props.gameComments})]}),Object(n.jsx)("img",{class:"card-img-top game_photo flex",alt:"",src:this.props.img})]}),Object(n.jsx)("button",{class:"btn btn-primary",onClick:function(){e.props.delete(e.props.gameTitle)},children:"Delete"})]})}}]),a}(s.Component);i.a.render(Object(n.jsx)(g,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.34bb7cde.chunk.js.map