(function(e){function t(t){for(var r,c,i=t[0],u=t[1],o=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&b.push(s[c][0]),s[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/memory-game/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},b107:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),s={class:"memory-game"},a={class:"wrapper"},c={key:0,class:"start-game"},i=Object(r["g"])("h2",{class:"start-game__h2"},"Нажмите кнопку старт чтобы начать игру",-1),u=[i],o={key:1,class:"game-over"},l=Object(r["g"])("h2",{class:"game-over__h2"},"Игра окончена",-1),d={class:"game-over__form"},b={class:"wrapper"},m=Object(r["g"])("tr",{class:"table__header"},[Object(r["g"])("td",null,"Имя игрока"),Object(r["g"])("td",null,"Время прохождения")],-1);function f(e,t,n,i,f,h){var O=Object(r["q"])("Card"),p=Object(r["q"])("Grid"),j=Object(r["q"])("Button"),v=Object(r["q"])("Timer"),g=Object(r["q"])("Table");return Object(r["k"])(),Object(r["f"])("div",s,[Object(r["g"])("div",a,[Object(r["h"])(p,null,{content:Object(r["u"])((function(){return[(Object(r["k"])(!0),Object(r["f"])(r["a"],null,Object(r["o"])(e.cards,(function(t,n){return Object(r["k"])(),Object(r["d"])(O,{key:n,index:n,element:t,disabled:e.isDisabledAllCards,onOnClick:function(t){return e.cardClickHandler(n)}},null,8,["index","element","disabled","onOnClick"])})),128))]})),_:1}),e.hasGameStarted?Object(r["e"])("",!0):(Object(r["k"])(),Object(r["f"])("div",c,u)),e.isGameOver?(Object(r["k"])(),Object(r["f"])("div",o,[l,Object(r["g"])("form",d,[Object(r["v"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",placeholder:"Введите имя игрока",class:"input game-over__input"},null,512),[[r["s"],e.username]]),Object(r["h"])(j,{value:"Сохранить",class:"button_primary",onOnClick:e.saveResultHandler},null,8,["onOnClick"])])])):Object(r["e"])("",!0)]),Object(r["g"])("div",b,[Object(r["h"])(v,{class:"timer_mb-1",duration:"10:00","is-timer-started":e.hasGameStarted,onResetTimer:t[1]||(t[1]=function(t){return e.resetTimer(t)})},null,8,["is-timer-started"]),e.hasGameStarted?(Object(r["k"])(),Object(r["d"])(j,{key:0,value:"Стоп",class:"button_error",onOnClick:e.stopGameHandler},null,8,["onOnClick"])):(Object(r["k"])(),Object(r["d"])(j,{key:1,value:"Старт",class:"button_primary",onOnClick:e.startGameHandler},null,8,["onOnClick"]))]),Object(r["h"])(g,{elements:e.results},{header:Object(r["u"])((function(){return[m]})),row:Object(r["u"])((function(e){var t=e.item;return[Object(r["g"])("td",null,Object(r["r"])(t.username),1),Object(r["g"])("td",null,Object(r["r"])(t.time),1)]})),_:1},8,["elements"])])}var h=n("9ab4"),O=n("ce1f"),p=n("5502");function j(e){for(var t,n=JSON.parse(JSON.stringify(e)),r=n.length-1;r>0;r--){var s=Math.floor(Math.random()*(r+1));t=[n[s],n[r]],n[r]=t[0],n[s]=t[1]}return n}var v=function(e){var t=Math.floor(e/60),n=e%60;return t=t.toString().length>1?t:"0"+t,n=n.toString().length>1?n:"0"+n,t+":"+n};function g(e,t,n,s,a,c){return Object(r["k"])(),Object(r["f"])("div",{class:"button",onClick:t[0]||(t[0]=function(t){return e.$emit("onClick")})},Object(r["r"])(e.value),1)}var C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(h["d"])(t,e),t=Object(h["c"])([Object(O["a"])({props:{value:{type:String,required:!0}}})],t),t}(O["b"]),y=C,k=n("6b0d"),T=n.n(k);const S=T()(y,[["render",g]]);var G=S,_=Object(r["g"])("div",{class:"card__front"},null,-1),w={class:"card__back"};function R(e,t,n,s,a,c){return Object(r["k"])(),Object(r["f"])("div",null,[Object(r["h"])(r["b"],{name:"fade"},{default:Object(r["u"])((function(){return[e.isMatched?Object(r["e"])("",!0):(Object(r["k"])(),Object(r["f"])("div",{key:0,class:Object(r["j"])(["card",{card_select:e.element.isOpened}]),onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.handleClick&&e.handleClick.apply(e,t)})},[_,Object(r["g"])("div",w,Object(r["r"])(e.element.value),1)],2))]})),_:1})])}var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(h["d"])(t,e),t=Object(h["c"])([Object(O["a"])({props:{element:{type:Object,required:!0},disabled:{type:Boolean,required:!0},index:{type:Number,required:!0}},computed:Object(h["a"])(Object(h["a"])({},Object(p["d"])(["matchedCards"])),{isMatched:function(){var e=this;return this.matchedCards.find((function(t){return t.id===e.element.id}))}}),methods:{handleClick:function(){this.disabled||this.element.isOpened||this.$emit("onClick")}}})],t),t}(O["b"]),A=x;const q=T()(A,[["render",R]]);var P=q;const M={class:"grid"};function H(e,t){return Object(r["k"])(),Object(r["f"])("div",M,[Object(r["p"])(e.$slots,"content")])}const D={},E=T()(D,[["render",H]]);var I=E,J={class:"table"};function $(e,t,n,s,a,c){return Object(r["k"])(),Object(r["f"])("table",J,[Object(r["p"])(e.$slots,"header"),(Object(r["k"])(!0),Object(r["f"])(r["a"],null,Object(r["o"])(e.elements,(function(t,n){return Object(r["k"])(),Object(r["f"])("tr",{key:n,class:"table__content"},[Object(r["p"])(e.$slots,"row",{item:t})])})),128))])}var N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(h["d"])(t,e),t=Object(h["c"])([Object(O["a"])({props:{elements:{type:Array,default:function(){return[]}}}})],t),t}(O["b"]),B=N;const U=T()(B,[["render",$]]);var L=U,V={class:"timer"},z={class:"timer__p"};function F(e,t,n,s,a,c){return Object(r["k"])(),Object(r["f"])("div",V,[Object(r["g"])("p",z,Object(r["r"])(e.formattedTime),1)])}var K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(h["d"])(t,e),t=Object(h["c"])([Object(O["a"])({props:{duration:{type:String,default:"04:30"},isTimerStarted:{type:Boolean,required:!0}},data:function(){return{timer:null,currentTime:null}},computed:{formattedTime:function(){return v(this.currentTime)}},mounted:function(){this.currentTime=this.getSeconds(this.duration)},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.currentTime--}),1e3)},resetTimer:function(){this.$emit("resetTimer",this.getSpentTime()),clearTimeout(this.timer),this.currentTime=this.getSeconds(this.duration)},getSeconds:function(e){var t=e.split(":"),n=t[0],r=t[1];return 60*parseInt(n)+parseInt(r)},getSpentTime:function(){return this.getSeconds(this.duration)-this.currentTime}},watch:{currentTime:function(e){0===e&&this.resetTimer()},isTimerStarted:function(e){e?this.startTimer():this.resetTimer()}}})],t),t}(O["b"]),Q=K;const W=T()(Q,[["render",F]]);var X=W,Y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(h["d"])(t,e),t=Object(h["c"])([Object(O["a"])({components:{Button:G,Card:P,Grid:I,Table:L,Timer:X},data:function(){return{spentTime:0,username:""}},computed:Object(h["a"])({},Object(p["d"])(["cards","hasGameStarted","isDisabledAllCards","isGameOver","openedCards","results"])),mounted:function(){return Object(h["b"])(this,void 0,void 0,(function(){return Object(h["e"])(this,(function(e){switch(e.label){case 0:return[4,this.init()];case 1:return e.sent(),[2]}}))}))},methods:Object(h["a"])(Object(h["a"])(Object(h["a"])({},Object(p["b"])(["getCards","getResults"])),Object(p["c"])(["checkingEndOfGame","closeAllCards","compareCards","openCard","saveResult","setCards","setResults","startGame","stopGame","switchCardState","switchGameStatus","updateTimer"])),{init:function(){return Object(h["b"])(this,void 0,void 0,(function(){var e,t,n,r,s,a,c;return Object(h["e"])(this,(function(i){switch(i.label){case 0:return[4,this.getCards()];case 1:return e=i.sent(),t=e.concat(e),n=j(t),r=n.map((function(e){return e.isOpened=!1,e})),c=(a=JSON).parse,[4,this.getResults()];case 2:return s=c.apply(a,[i.sent()])||[],this.setCards(r),this.setResults(s),[2]}}))}))},startGameHandler:function(){return Object(h["b"])(this,void 0,void 0,(function(){return Object(h["e"])(this,(function(e){switch(e.label){case 0:return[4,this.init()];case 1:return e.sent(),this.startGame(),[2]}}))}))},stopGameHandler:function(){this.stopGame(),this.closeAllCards()},resetTimer:function(e){this.isGameOver&&(this.spentTime=e),this.stopGame(),this.closeAllCards()},cardClickHandler:function(e){var t,n=this;if(this.openCard(e),2===this.openedCards.length){var r=function(){n.compareCards(),n.checkingEndOfGame(),n.switchCardState(!1)};this.switchCardState(!0),t=this.setTimer(r,1e3)}else t=this.setTimer(this.closeAllCards,5e3);this.updateTimer(t)},setTimer:function(e,t){return void 0===e&&(e=function(){return!1}),setTimeout(e,t)},saveResultHandler:function(){this.username&&(this.saveResult({username:this.username,time:v(this.spentTime)}),this.switchGameStatus(!1))}})})],t),t}(O["b"]),Z=Y;const ee=T()(Z,[["render",f]]);var te=ee,ne=n("bc3a"),re=n.n(ne),se="/memory-game/",ae=function(){function e(){this.client=re.a.create({baseURL:se})}return e.prototype.execute=function(e,t,n){var r=n.data,s=n.params;return Object(h["b"])(this,void 0,Promise,(function(){var n;return Object(h["e"])(this,(function(a){switch(a.label){case 0:return[4,this.client({method:e,url:t,params:s,data:r})];case 1:return n=a.sent(),[2,n.data]}}))}))},e.prototype.get=function(e,t){return void 0===t&&(t={}),this.execute("get",e,{params:t})},e}(),ce=new ae,ie=Object(p["a"])({state:{cards:[],openedCards:[],matchedCards:[],timer:0,hasGameStarted:!1,isDisabledAllCards:!0,isGameOver:!1,results:[]},mutations:{setCards:function(e,t){e.cards=t},startGame:function(e){e.hasGameStarted=!0,e.isDisabledAllCards=!1},stopGame:function(e){e.hasGameStarted=!1,e.isDisabledAllCards=!0,e.matchedCards=[],e.openedCards=[]},openCard:function(e,t){2===e.openedCards.length&&(e.openedCards.forEach((function(e){e.isOpened=!1})),e.openedCards=[]),e.openedCards.push(e.cards[t]),e.cards[t].isOpened=!0},closeAllCards:function(e){e.cards.forEach((function(e){e.isOpened=!1})),e.openedCards=[]},compareCards:function(e){e.openedCards[0].id===e.openedCards[1].id?e.matchedCards.push(e.openedCards[0]):(e.openedCards.forEach((function(e){e.isOpened=!1})),e.openedCards=[])},checkingEndOfGame:function(e){e.matchedCards.length===e.cards.length/2&&(e.hasGameStarted=!1,e.isGameOver=!0,e.matchedCards=[],e.openedCards=[])},updateTimer:function(e,t){clearInterval(e.timer),e.timer=t},switchCardState:function(e,t){e.isDisabledAllCards=t},saveResult:function(e,t){e.results.push(t),localStorage.setItem("memoryGame",JSON.stringify(e.results))},setResults:function(e,t){e.results=t},switchGameStatus:function(e,t){e.isGameOver=t}},actions:{getCards:function(){return Object(h["b"])(this,void 0,Promise,(function(){return Object(h["e"])(this,(function(e){switch(e.label){case 0:return[4,ce.get("/jsons/cards.json")];case 1:return[2,e.sent()]}}))}))},getResults:function(){return Object(h["b"])(this,void 0,Promise,(function(){return Object(h["e"])(this,(function(e){return[2,localStorage.getItem("memoryGame")]}))}))}}});n("b107");Object(r["c"])(te).use(ie).mount("#app")}});
//# sourceMappingURL=app.e13aa4c7.js.map