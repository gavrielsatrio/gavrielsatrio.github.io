(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"134c":function(t,e,a){"use strict";a("3bd3")},"1e7b":function(t,e,a){},2381:function(t,e,a){},"3bd3":function(t,e,a){},"3e01":function(t,e,a){t.exports=a.p+"img/Flappy Dragon.971447c1.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o={name:"App",data:function(){return{}}},r=o,c=(a("034f"),a("2877")),l=Object(c["a"])(r,i,n,!1,null,null,null),d=l.exports,u=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"appView"}},[a("div",{staticClass:"container-fluid"},[a("div",{attrs:{id:"appViewContainer"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-12"},[a("div",{attrs:{id:"navBar"}},[a("div",{staticClass:"container-fluid d-flex"},[a("nav",{staticClass:"w-100 navbar navbar-expand-md",attrs:{id:"navBarContainer"}},[a("i",{staticClass:"bx bxs-dashboard navbar-toggler",attrs:{id:"btnCollapseNavBar"},on:{click:function(e){return t.ToogleNavBar()}}}),t._m(0)])])])]),a("div",{staticClass:"col-md-9 col-12"},[a(t.componentSelected,{tag:"component"})],1)])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row collapse navbar-collapse pt-md-0",attrs:{id:"navBarLinksRow"}},[a("div",{staticClass:"col-md-12 d-md-block d-none navBarSpace"}),a("div",{staticClass:"col-md-12 navBarLinksList"},[a("div",{staticClass:"row h-100"},[a("div",{staticClass:"d-flex col-md-12 col-12 align-items-center navBarLinksDiv"},[a("div",{staticClass:"d-flex navBarLinks navBarLinkSelected",attrs:{id:"home"}},[a("div",{staticClass:"d-flex navBarLinkDot justify-content-center align-items-center"},[a("i",{staticClass:"bx bxs-home navBarLinkDotIcon"})]),a("p",{staticClass:"navBarLinkText"},[t._v("Home")])])]),a("div",{staticClass:"d-flex col-md-12 col-12 align-items-center navBarLinksDiv"},[a("div",{staticClass:"d-flex navBarLinks",attrs:{id:"projects"}},[a("div",{staticClass:"d-flex navBarLinkDot justify-content-center align-items-center"},[a("i",{staticClass:"bx bxs-folder-open navBarLinkDotIcon"})]),a("p",{staticClass:"navBarLinkText"},[t._v("Projects")])])]),a("div",{staticClass:"d-flex col-md-12 col-12 align-items-center navBarLinksDiv"},[a("div",{staticClass:"d-flex navBarLinks",attrs:{id:"aboutMe"}},[a("div",{staticClass:"d-flex navBarLinkDot justify-content-center align-items-center"},[a("i",{staticClass:"bx bxs-user navBarLinkDotIcon"})]),a("p",{staticClass:"navBarLinkText"},[t._v("About Me")])])])])]),a("div",{staticClass:"col-md-12 d-md-block d-none navBarSpace"})])}],p=(a("159b"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"homePage"}},[s("div",{staticClass:"container-fluid"},[s("div",{attrs:{id:"homeContainer"}},[s("div",{staticClass:"row min-vh-100"},[s("div",{staticClass:"col-md-5 col-12"},[s("div",{staticClass:"container d-table h-100",attrs:{id:"homeHeader"}},[s("div",{staticClass:"row d-table-cell align-middle h-100"},[s("h1",{attrs:{id:"homeTextName"}},[t._v("Gz Rio")]),s("p",{attrs:{id:"homeTextDesc"}},[t._v("Software Developer &"),s("br"),t._v("Web Developer")]),s("p",{attrs:{id:"homeLinks"}},[s("a",{staticClass:"homeLinksIcon",attrs:{href:"https://www.instagram.com/gavrielsatrio",target:"_blank"}},[s("i",{staticClass:"bx bxl-instagram-alt"})]),s("a",{staticClass:"homeLinksIcon",attrs:{href:"https://github.com/gavrielsatrio",target:"_blank"}},[s("i",{staticClass:"bx bxl-github"})]),s("a",{staticClass:"homeLinksIcon",attrs:{href:"https://www.linkedin.com/in/gavriel-satrio-widjaya/",target:"_blank"}},[s("i",{staticClass:"bx bxl-linkedin-square"})]),s("a",{staticClass:"homeLinksIcon",attrs:{href:"https://api.whatsapp.com/send?phone=6281347923851",target:"_blank"}},[s("i",{staticClass:"bx bxl-whatsapp"})])])])])]),s("div",{staticClass:"col-md-7 col-12 mt-md-0 mt-auto"},[s("div",{staticClass:"container d-table h-100 text-center",attrs:{id:"homeImageDiv"}},[s("div",{staticClass:"row d-table-cell align-middle h-100"},[s("div",{staticClass:"homeImageBackground",attrs:{id:"homeImageBackground4"}}),s("div",{staticClass:"homeImageBackground",attrs:{id:"homeImageBackground3"}}),s("div",{staticClass:"homeImageBackground",attrs:{id:"homeImageBackground2"}}),s("div",{staticClass:"homeImageBackground",attrs:{id:"homeImageBackground1"}}),s("img",{attrs:{src:a("7569"),id:"homeImage"}})])])])])])])])}],v={name:"Home",data:function(){return{}},mounted:function(){this.LoadNameAndDesc(),this.LoadImageAndBackground(),this.LoadLinks()},methods:{LoadNameAndDesc:function(){setTimeout((function(){var t=document.querySelector("#homeTextName");t.style.opacity="1",t.style.transform="none";var e=document.querySelector("#homeTextDesc");e.style.opacity="1",e.style.transform="none"}),400)},LoadLinks:function(){document.querySelectorAll(".homeLinksIcon").forEach((function(t,e){setTimeout((function(){t.style.opacity="1",t.style.transform="none"}),200+250*e)}))},LoadImageAndBackground:function(){var t=document.querySelectorAll(".homeImageBackground");setTimeout((function(){document.querySelector("#homeImage").style.opacity="1",t.forEach((function(t,e){setTimeout((function(){t.style.animation="homeImageAnimation 2.5s ease-in-out infinite"}),500+150*e)}))}),200)}}},g=v,y=(a("cccb"),Object(c["a"])(g,p,f,!1,null,null,null)),b=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"projectsPage"}},[a("div",{staticClass:"container-fluid"},[a("div",{attrs:{id:"projectsContainer"}},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{attrs:{id:"projectsItemList"}},[a("div",{staticClass:"row d-flex align-items-stretch"},t._l(t.projects,(function(e){return a("div",{key:e.id,staticClass:"col-lg-4 col-md-6 d-flex"},[a("div",{staticClass:"projectsItem w-100"},[a("div",{staticClass:"projectsItemImageDiv"},[a("img",{staticClass:"projectsItemImage",attrs:{src:e.image}})]),a("div",{staticClass:"projectsItemContent"},[a("p",{staticClass:"projectsItemTitle"},[t._v(t._s(e.title))]),a("p",{staticClass:"projectsItemLinks"},t._l(e.links,(function(e){return a("a",{key:e.platform,attrs:{href:e.url,target:"_blank"}},["GitHub"==e.platform?a("i",{staticClass:"bx bxl-github projectsItemLink"}):"DesktopApp"==e.platform?a("i",{staticClass:"bx bxl-windows projectsItemLink"}):"GoogleChrome"==e.platform?a("i",{staticClass:"bx bxl-chrome projectsItemLink"}):"AndroidApp"==e.platform?a("i",{staticClass:"bx bxl-android projectsItemLink"}):t._e()])})),0),a("p",{staticClass:"projectsItemDescription"},[t._v(t._s(e.description))]),a("p",{staticClass:"projectsItemTechnologies d-flex flex-wrap"},t._l(e.technologies,(function(e){return a("i",{key:e,staticClass:"projectsItemTechnology"},[t._v(t._s(e))])})),0)])])])})),0)])])])])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h2",{staticClass:"pt-4",attrs:{id:"projectsHeader"}},[t._v("Projects")])])])}],k={name:"Projects",data:function(){return{projects:[{id:1,title:"GzKitchen",description:"GzKitchen is an application for japanese style restaurant",image:a("db8b"),links:[{platform:"GitHub",url:"https://github.com/gavrielsatrio/GzKitchen"},{platform:"DesktopApp",url:"https://github.com/gavrielsatrio/GzKitchen/blob/main/GzKitchen-Setup.msi"}],technologies:["C#","LINQ"]},{id:2,title:"Flappy Dragon",description:"It's flappy bird but it's dragon",image:a("3e01"),links:[{platform:"GitHub",url:"https://github.com/gavrielsatrio/Flappy-Dragon"},{platform:"GoogleChrome",url:"http://gavrielsatrio.github.io/FlappyDragon"}],technologies:["JavaScript","HTML","CSS"]},{id:3,title:"GzKitchen Android",description:"Android version of GzKitchen",image:a("db8b"),links:[{platform:"GitHub",url:"https://github.com/gavrielsatrio/GzKitchen-Android"},{platform:"AndroidApp",url:"https://github.com/gavrielsatrio/GzKitchen-Android/blob/main/GzKitchen.apk"}],technologies:["Java","XML"]},{id:4,title:"Froggy Knight",description:"Demonstrates how a knight move in chess from one place to another place",image:a("e2fe"),links:[{platform:"GitHub",url:"https://github.com/gavrielsatrio/FroggyKnight"},{platform:"GoogleChrome",url:"http://gavrielsatrio.github.io/FroggyKnight"}],technologies:["Vue","JavaScript","Bootstrap","Algorithm"]}]}},mounted:function(){this.LoadHeader(),this.LoadProjectsItem()},methods:{LoadHeader:function(){setTimeout((function(){var t=document.querySelector("#projectsHeader");t.style.opacity="1",t.style.transform="none"}),200)},LoadProjectsItem:function(){document.querySelectorAll(".projectsItem").forEach((function(t,e){setTimeout((function(){t.style.opacity="1",t.style.transform="none"}),200+200*e)}))}}},w=k,I=(a("ed0c"),Object(c["a"])(w,C,x,!1,null,null,null)),_=I.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"aboutMePage"}},[a("div",{staticClass:"container-fluid"},[a("div",{attrs:{id:"aboutMeContainer"}},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{attrs:{id:"aboutMeContent"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{attrs:{id:"aboutMeDesc"}},[t._v(" I'm "+t._s(t.yearsOld)+" years old, and I'm a software and web developer. I'm very enthusiast in technology. I like to discuss with others about solution of a problem. Teamwork is fun for me. Besides technology, I'm into music too. I've made 3 songs with lyric, and 6 songs without lyric ")])])]),t._m(1),t._m(2)])])])])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h2",{staticClass:"pt-4",attrs:{id:"aboutMeHeader"}},[t._v("About Me")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"font-italic text-center",attrs:{id:"aboutMeMotto"}},[t._v(' " Do the best, leave no regrets, and let God do the rest. " ')])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"mt-3 text-center",attrs:{id:"aboutMeMottoCreator"}},[t._v(" ~ Gz Rio ~ ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"mt-5",attrs:{id:"aboutMeInterest"}},[a("h5",{attrs:{id:"aboutMeInterestHeader"}},[t._v("Interest")]),a("div",{staticClass:"row d-flex align-items-stretch"},[a("div",{staticClass:"col-md-4 d-flex"},[a("div",{staticClass:"aboutMeInterestItem w-100"},[a("i",{staticClass:"bx bxs-music bx-tada aboutMeInterestItemIcon"}),a("p",{staticClass:"aboutMeInterestItemHeader"},[t._v("Music")]),a("p",{staticClass:"aboutMeInterestItemDesc"},[t._v("I like music since junior highschool. Music genre that I like is EDM.")])])]),a("div",{staticClass:"col-md-4 d-flex"},[a("div",{staticClass:"aboutMeInterestItem w-100"},[a("i",{staticClass:"bx bx-laptop bx-tada aboutMeInterestItemIcon"}),a("p",{staticClass:"aboutMeInterestItemHeader"},[t._v("Technology")]),a("p",{staticClass:"aboutMeInterestItemDesc"},[t._v("Since I'm a software and web developer, I really like to see the technology growth in the world.")])])]),a("div",{staticClass:"col-md-4 d-flex"},[a("div",{staticClass:"aboutMeInterestItem w-100"},[a("i",{staticClass:"bx bxs-plane-take-off bx-tada aboutMeInterestItemIcon"}),a("p",{staticClass:"aboutMeInterestItemHeader"},[t._v("Travelling")]),a("p",{staticClass:"aboutMeInterestItemDesc"},[t._v("I really like travelling. One of my life goals is to travel the whole world.")])])])])])])])}],j={name:"AboutMe",data:function(){return{yearsOld:""}},mounted:function(){this.LoadHeaderAndDesc(),this.LoadInterestHeaderAndItem(),this.LoadMottoAndCreator();var t=new Date(2003,11,18),e=new Date,a=(e-t)/864e5;this.yearsOld=Math.floor(a/365)},methods:{LoadHeaderAndDesc:function(){setTimeout((function(){var t=document.querySelector("#aboutMeHeader");t.style.transform="none",t.style.opacity="1";var e=document.querySelector("#aboutMeDesc");e.style.transform="none",e.style.opacity="1"}),200)},LoadInterestHeaderAndItem:function(){setTimeout((function(){var t=document.querySelector("#aboutMeInterestHeader");t.style.transform="none",t.style.opacity="1"}),200),document.querySelectorAll(".aboutMeInterestItem").forEach((function(t,e){setTimeout((function(){t.style.opacity="1",t.style.transform="none"}),800+200*e)}))},LoadMottoAndCreator:function(){setTimeout((function(){var t=document.querySelector("#aboutMeMotto");t.style.transform="none",t.style.opacity="1";var e=document.querySelector("#aboutMeMottoCreator");e.style.transform="none",e.style.opacity="1"}),200)}}},A=j,B=(a("134c"),Object(c["a"])(A,L,M,!1,null,null,null)),D=B.exports,S={name:"AppView",data:function(){return{componentSelected:"home"}},components:{home:b,projects:_,aboutMe:D},mounted:function(){var t=this;document.querySelectorAll(".navBarLinks").forEach((function(e){e.onclick=function(){document.querySelectorAll(".navBarLinks").forEach((function(t){t.classList.remove("navBarLinkSelected")})),e.classList.add("navBarLinkSelected"),t.componentSelected=e.id}})),setTimeout((function(){document.querySelector("#btnCollapseNavBar").style.opacity="1",document.querySelector("#navBarLinksRow").style.opacity="1",document.querySelector("#navBarLinksRow").style.transform="none"}),500)},methods:{ToogleNavBar:function(){var t=document.querySelector("#navBarLinksRow");t.classList.contains("collapse")?t.classList.remove("collapse"):t.classList.add("collapse")}}},T=S,G=(a("d918"),Object(c["a"])(T,h,m,!1,null,null,null)),O=G.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"flappyDragonPage"}},[a("div",{staticClass:"container-fluid h-100 d-flex justify-content-center align-items-center"},[a("div",{attrs:{id:"flappyDragonContainer"}},[a("h1",{attrs:{id:"flappyDragonHeader"}},[t._v("Flappy Dragon")]),a("p",{attrs:{id:"flappyDragonDesc"}},[t._v("Jika menabrak meteor maka game akan diulang")]),a("canvas",{attrs:{id:"flappyDragonCanvas",width:"700",height:"400"}})])])])}],q=(a("d3b7"),a("ddb0"),a("d4ec")),P=a("bee2"),z=function(){function t(e){Object(q["a"])(this,t),this.canvas=e,this.context=e.getContext("2d"),this.frameNo=0,this.keys=[]}return Object(P["a"])(t,[{key:"clear",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"stop",value:function(){location.reload()}}]),t}(),K=z,N=function(){function t(e,a,s,i,n,o,r,c){Object(q["a"])(this,t),this.canvas=e,this.ctx=a,this.type=c,"image"!=c&&"background"!=c||(this.image=new Image,this.image.src=n),this.width=s,this.height=i,this.speedX=0,this.speedY=0,this.gravity=.05,this.gravitySpeed=0,this.x=o,this.y=r}return Object(P["a"])(t,[{key:"update",value:function(){"image"==this.type||"background"==this.type?(this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height),"background"==this.type&&this.ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height)):"text"==this.type?(this.ctx.font=this.width+" "+this.height,this.ctx.fillStyle=this.color,this.ctx.fillText(this.text,this.x,this.y)):(this.ctx.fillStyle=this.color,this.ctx.fillRect(this.x,this.y,this.width,this.height))}},{key:"newPos",value:function(){this.gravitySpeed+=this.gravity,this.x+=this.speedX,this.y+=this.speedY+this.gravitySpeed,this.hitBottom(),this.hitTop(),"background"==this.type&&this.x==-this.width&&(this.x=0)}},{key:"crashWith",value:function(t){var e=this.x,a=this.x+this.width,s=this.y,i=this.y+this.height,n=t.x,o=t.x+t.width,r=t.y,c=t.y+t.height,l=!0;return(i<r||s>c||a<n||e>o)&&(l=!1),l}},{key:"hitBottom",value:function(){var t=this.canvas.height-this.height;this.y>t&&(this.y=t)}},{key:"hitTop",value:function(){this.y<0&&(this.y=0,this.gravitySpeed=0)}}]),t}(),$=N,F=a("64e6"),R=a.n(F),J=a("6c28"),X=a.n(J),V=a("e833"),Y=a.n(V),W={name:"FlappyDragon",data:function(){return{canvas:null,naga:null,background:null,score:null,flappyArea:null,obstacle:[],interval:null}},mounted:function(){var t=this;this.initializeCanvas(),window.onkeydown=function(e){e.preventDefault(),t.flappyArea.keys=t.flappyArea.keys||[],t.flappyArea.keys[e.keyCode]="keydown"==e.type},window.onkeyup=function(e){t.flappyArea.keys[e.keyCode]="keydown"==e.type}},computed:{},methods:{initializeCanvas:function(){this.canvas=document.getElementById("flappyDragonCanvas"),this.naga=new $(this.canvas,this.canvas.getContext("2d"),100,100,R.a,50,50,"image"),this.background=new $(this.canvas,this.canvas.getContext("2d"),700,400,X.a,0,0,"background"),this.score=new $(this.canvas,this.canvas.getContext("2d"),"30px","Calibri","black",280,40,"text"),this.flappyArea=new K(this.canvas),this.obstacle=[],this.startGame()},startGame:function(){this.interval=setInterval(this.updateGameArea,20)},updateGameArea:function(){if(this.flappyArea.clear(),this.flappyArea.frameNo+=1,this.naga.speedX=0,this.naga.speedY=0,this.flappyArea.keys[37]&&(this.naga.speedX=-1.5),this.flappyArea.keys[39]&&(this.naga.speedX=1),this.flappyArea.keys[38]&&(this.naga.gravitySpeed=0,this.naga.speedY=-2.5),this.flappyArea.keys[116])document.location.reload();else{for(var t,e,a,s,i,n,o=0;o<this.obstacle.length;o+=1)if(this.naga.crashWith(this.obstacle[o]))return clearInterval(this.interval),void this.initializeCanvas();if(this.background.x-=1,this.background.newPos(),this.background.update(),this.naga.newPos(),this.naga.update(),1==this.flappyArea.frameNo||this.everyinterval(280)){t=this.flappyArea.canvas.width,a=20,s=200,e=Math.floor(Math.random()*(s-a+1)+a),i=100,n=300;var r=Math.floor(Math.random()*(n-i+1)+i),c=Math.floor(Math.random()*(n-i+10)+i),l=Math.floor(Math.random()*(n-i+30)+i);this.obstacle.push(new $(this.canvas,this.canvas.getContext("2d"),60,60,Y.a,t,e,"image")),this.obstacle.push(new $(this.canvas,this.canvas.getContext("2d"),50,50,Y.a,t,e+r,"image")),this.obstacle.push(new $(this.canvas,this.canvas.getContext("2d"),60,60,Y.a,t,e+c+15,"image")),this.obstacle.push(new $(this.canvas,this.canvas.getContext("2d"),50,50,Y.a,t,e+l-40,"image"))}for(var d=0;d<this.obstacle.length;d+=1)d%2==0?(this.obstacle[d].x+=-2,this.obstacle[d].y+=.5,this.obstacle[d].update()):d%3==0?(this.obstacle[d].x+=-4,this.obstacle[d].y+=-.6,this.obstacle[d].update()):(this.obstacle[d].x+=-3,this.obstacle[d].y+=-.7,this.obstacle[d].update());this.score.text="SCORE : "+parseInt(this.flappyArea.frameNo/100),this.score.update()}},everyinterval:function(t){return this.flappyArea.frameNo/t%1==0}}},Q=W,U=(a("9f45"),Object(c["a"])(Q,H,E,!1,null,null,null)),Z=U.exports;s["a"].use(u["a"]);var tt=[{path:"/",name:"AppView",component:O},{path:"/FlappyDragon",name:"FlappyDragon",component:Z},{path:"*",redirect:"/"}],et=new u["a"]({mode:"history",routes:tt}),at=et;s["a"].config.productionTip=!1,new s["a"]({router:at,render:function(t){return t(d)}}).$mount("#app")},"5ced":function(t,e,a){},"64e6":function(t,e,a){t.exports=a.p+"img/naga.3d728716.png"},"6c28":function(t,e,a){t.exports=a.p+"img/background1.3684d769.jpg"},7569:function(t,e,a){t.exports=a.p+"img/GzRio.ddbffb12.svg"},"85ec":function(t,e,a){},"9f45":function(t,e,a){"use strict";a("2381")},cccb:function(t,e,a){"use strict";a("5ced")},d918:function(t,e,a){"use strict";a("1e7b")},db8b:function(t,e,a){t.exports=a.p+"img/GzKitchen.775a22fa.png"},e2fe:function(t,e,a){t.exports=a.p+"img/Froggy Knight.26a4cd10.png"},e79b:function(t,e,a){},e833:function(t,e,a){t.exports=a.p+"img/meteor.9f151df8.png"},ed0c:function(t,e,a){"use strict";a("e79b")}});
//# sourceMappingURL=app.0b48ffd5.js.map