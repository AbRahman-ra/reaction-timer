(function(){"use strict";var e={801:function(e,t,n){var o=n(9199);const i=["disabled"];function r(e,t,n,r,a,s){const l=(0,o.up)("Header"),c=(0,o.up)("Game"),u=(0,o.up)("Results");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o._)("button",{id:"play-now",onClick:t[0]||(t[0]=(...t)=>e.startGame&&e.startGame(...t)),disabled:e.isPlaying}," Play Now 🤩 ",8,i),e.isPlaying?((0,o.wg)(),(0,o.j4)(c,{key:0,delay:e.delay,onEndGame:e.endGame},null,8,["delay","onEndGame"])):(0,o.kq)("",!0),e.showResults?((0,o.wg)(),(0,o.j4)(u,{key:1,reactionTime:e.reactionTime},null,8,["reactionTime"])):(0,o.kq)("",!0)],64)}const a=(0,o._)("h1",null,"Welcome to Reaction Timer Game 🔥🔥",-1),s=(0,o._)("header",null,[(0,o._)("h2",null,"Game Description"),(0,o._)("p",null,' Reaction Timer is a small, easy & funny game, to start: click on the "Play" button below, then wait for the random timer to finish and the block appears (Note that the block will show up in a random place on the screen 😈), after the block appears, a new timer will start counting the time needed to press the appeared block again, based on your reflex speed, you will be given a rank ')],-1);function l(e,t){return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,s],64)}var c=n(89);const u={},h=(0,c.Z)(u,[["render",l]]);var d=h;function m(e,t,n,i,r,a){return(0,o.wy)(((0,o.wg)(),(0,o.iD)("section",{ref:"game",class:"game",onClick:t[0]||(t[0]=(...t)=>e.endGame&&e.endGame(...t))}," Click it fast baby ⚡🚀 ",512)),[[o.F8,e.showGame]])}var f=(0,o.aZ)({props:["delay"],data(){return{showGame:!1,timer:-1,seconds:0,top:0,left:0}},mounted(){setTimeout((()=>{this.top=100*Math.random(),this.left=100*Math.random();let e=this.$refs.game;e.style.top=`${this.top}%`,e.style.left=`${this.left}%`,this.showGame=!0,this.startTimer(),console.log("Game Started")}),this.delay)},methods:{startTimer(){this.timer=setInterval((()=>{this.seconds+=.1,console.log(this.seconds)}),100)},endGame(){clearInterval(this.timer),console.log(`seconds passed is: ${this.seconds}`),this.$emit("endGame",this.seconds),this.seconds=0}}});const y=(0,c.Z)(f,[["render",m]]);var p=y;const g={class:"result"};function w(e,t,n,i,r,a){return(0,o.wg)(),(0,o.iD)("section",g,[(0,o._)("h2",null,"Your Reflex Time: "+(0,o.zw)(e.reactionTime)+" seconds",1),(0,o._)("p",null,(0,o.zw)(e.msg),1)])}var b=(0,o.aZ)({props:["reactionTime"],data(){return{msg:""}},mounted(){this.reactionTime<=.5?this.msg="You are a true superhero 🚀🔥⚡🦾, you have ultimate reflexes that makes you a very good and detail oriented person, good job 😊⭐":this.reactionTime<=1.2?this.msg="Great! You have a very catchy eye 👁️, like a hawk 🦅, train yourself so that you catch in in 0.5 second or less 🦾":this.reactionTime<=2?this.msg="Good job! you are a normal person with a good eye-catching skills 🙂, try to challenge yourself so that you finish it in less than 1.2 seconds":this.reactionTime<=3?this.msg="Pretty slow 🐥, but it's not that bad. Train yourself to get it in less than 2 seconds":this.msg="Are you a turtle or what? 🥸🤡🐢"}});const v=(0,c.Z)(b,[["render",w]]);var k=v,T=(0,o.aZ)({name:"App",data(){return{isPlaying:!1,showResults:!1,delay:0,reactionTime:0}},components:{Header:d,Game:p,Results:k},methods:{startGame(){this.isPlaying=!0,this.showResults=!1,this.delay=2e3+3e3*Math.random(),console.log(this.delay)},endGame(e){this.isPlaying=!1,this.showResults=!0,this.reactionTime=+e.toPrecision(2)}}});const G=(0,c.Z)(T,[["render",r]]);var O=G;(0,o.ri)(O).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(t&&t(o);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkreaction_timer"]=self["webpackChunkreaction_timer"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(801)}));o=n.O(o)})();
//# sourceMappingURL=app.d72c729d.js.map