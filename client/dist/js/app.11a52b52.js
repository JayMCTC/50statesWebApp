(function(){"use strict";var t={4635:function(t,e,a){var n=a(9963),i=a(6252);function s(t,e,a,n,s,r){const o=(0,i.up)("page-header"),c=(0,i.up)("router-view"),u=(0,i.up)("page-footer");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(o),(0,i.Wm)(c),(0,i.Wm)(u)])}const r=t=>((0,i.dD)("data-v-4be1912e"),t=t(),(0,i.Cn)(),t),o={id:"block-header"},c=r((()=>(0,i._)("h1",{id:"title"},"Have you visited every state?",-1))),u=[c];function l(t,e,a,n,s,r){return(0,i.wg)(),(0,i.iD)("div",o,u)}var d={name:"PageHeader"},p=a(3744);const h=(0,p.Z)(d,[["render",l],["__scopeId","data-v-4be1912e"]]);var f=h;const v=t=>((0,i.dD)("data-v-32e5297c"),t=t(),(0,i.Cn)(),t),m={class:"navigation-links"},g={class:"nav-link"},y={class:"nav-link"},b={class:"nav-link"},S=v((()=>(0,i._)("p",null,[(0,i.Uk)(" Header Image by "),(0,i._)("a",{href:"https://unsplash.com/photos/duQ1ulzTJbM",target:"_blank"},"@Chris Lawton on Unsplash ")],-1))),k=v((()=>(0,i._)("p",null,[(0,i._)("a",{target:"_blank",href:"https://icons8.com/icon/BcL4mksn90LQ/map-marker"},"Map Marker"),(0,i.Uk)(" icon by "),(0,i._)("a",{target:"_blank",href:"https://icons8.com"},"Icons8")],-1)));function w(t,e,a,n,s,r){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",m,[(0,i._)("span",g,[(0,i.Wm)(o,{to:{name:"StateList"}},{default:(0,i.w5)((()=>[(0,i.Uk)("Home")])),_:1})]),(0,i._)("span",y,[(0,i.Wm)(o,{to:{name:"AboutSite"}},{default:(0,i.w5)((()=>[(0,i.Uk)("About this site")])),_:1})]),(0,i._)("span",b,[(0,i.Wm)(o,{to:{name:"StatesVisited"}},{default:(0,i.w5)((()=>[(0,i.Uk)("All Visited States")])),_:1})])]),S,k],64)}var A={name:"PageFooter"};const O=(0,p.Z)(A,[["render",w],["__scopeId","data-v-32e5297c"]]);var _=O;const j={class:"state-lists-container"};function V(t,e,a,n,s,r){const o=(0,i.up)("StateSummery"),c=(0,i.up)("StateDetail");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[(0,i.Wm)(o,{states:s.states},null,8,["states"])]),(0,i._)("div",j,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.states,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"state-container",key:t.name},[(0,i.Wm)(c,{state:t,onUpdateVisited:r.onUpdateVisited},null,8,["state","onUpdateVisited"])])))),128))])],64)}var C=a(3577),D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbklEQVR4nO2aXYgcRRCAJ2f8C/6gPkjkst27dxKNoqIveRBEfRPMyaEBfVBRRBR9EBTjg24eJP5AkMPdqp1ECWhAOB8jgsS4inG3algVJGg88SEYCUgMJiZ3Bk1Wqmfmsj8zu/OzO3voNhQcO91V/XVV1/RUn2WN2/+o3dawz88T3q8JdmuCHzTBScX4p/f3bnkmfayV3DThjGJY0IzNXmL6EM5YK641ixOa8LV+AG1CcFYzbJOx1kppsSHaBLalnoAi/FwT1LRTviMFxIy7uglBCM7qOmzqZydHO/KK4UNN8Gn3JFrjlnCv4tItcSBk00bZE/1h8OcNB+YvCLIxWdt+sWLcqhmW/P49QTyFZzTBrimnvC4KiMlOaSHYFdEVpF8RHOrs2x/kXNwuKcY3c1/CFb1ATIoNz0y/yETW73/nUhHlVGZ7eU8Rvu/rLThwo2bcF9Y3Bsgy0O+a8HlV3XWRP0Ym5YeBIjwYBjFZ23llpz35TTMcDgE5KH02VEuXKMa/e80rAYhvRNwLj+QIH9eER9Y27DUGhOFE1DBpsbk5BP5Ei6dPDgWkU6YX5i70PPJX0HPxWhhIoWFfHhbO1rl5HcsEJF/febW7cngkEJTmLksAcnj55crwTyYgimCj6xH4IvC5U5lNkOn2yfN1DXuqn/2BgWjGJ1yPwPYQ0B+v4bevCtrsivGn4DH4ulkcpzKbGYi8YV2PlO8M72ey02YJMxHzTgiB0IzNQt2+3ehktDMEweMmBc/Pn6cJj6bwrCuER0WXF66HsgytZo7gLm8F30sNwviu2T/18k1R+g8URELAW8GNaUFyNftWbz5vZQ6iGRf9DW1O0In1QHX5jU7wxyhAZBIvmpBgeCCxDnK/FJWDT0cdM3AQ2Zhm07tfiN/GH4+O1Wyucj8HwjNaBh4RqTzbPxX3SxjwVJxxQwFRhL/5RxJN+HGMsR/JmLUNe41m/HXkIEYIXhV9hTpeK0kgwphFOYq4c4CX49obGoicglW9fL0XJlv69mfYIn2naqXpiOAZecSVz2TjWtXias3wdbj38Bu/QKcYP0lia9ggksUeMxNs2NdpglOBIcWlGzyIR5PasYYOwnhcyjbexn+y83me8Bnz7KuSivry06MAcUMH9kt4BZzDPjBGq8XVYd8xekWBuJv5DT+1KgYSkSNI+qokZgsi1UNF5fu67NVhU6qqJGcNYgSWNMEL07RjUgp+ivAlRXB6ELqtbEGGJ9YYhEfvBT32CI9+5fXYIzz61dZjj/B/wCOKgUY9KR1TZM5dIHLPoQifG0jZ0zckJU/ChxXhg5rx+wFCLGrCV1pvz7qad921NclnZ4sckzpXm6FmcSLvVO5NUirSbYuDe/zvnEhNDnhuNbz3RUuHB04rwrmeF6cJgRTDgqrjPVbSJoUExTjf0xDhGekTa6WiAhGckgjxr/hStxxX7taMjQBX79WENydW3ANIEe4pNOzcQADajTZXKYaH5BYq7b97dOsuTkhSUAzfSXUlru5/AYYnUF/izjLyAAAAAElFTkSuQmCC";const Y=t=>((0,i.dD)("data-v-7833a9d4"),t=t(),(0,i.Cn)(),t),N={class:"state-info"},T={class:"'state=name'"},E=Y((()=>(0,i._)("img",{class:"map-icon",src:D},null,-1)));function W(t,e,a,s,r,o){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",N,[(0,i._)("span",T,(0,C.zw)(a.state.name),1),(0,i._)("div",null,[(0,i.wy)((0,i._)("input",{class:"visit-state",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=t=>r.visited=t),onChange:e[1]||(e[1]=(...t)=>o.visitedChange&&o.visitedChange(...t))},null,544),[[n.e8,r.visited]])]),(0,i._)("div",null,[(0,i.Wm)(c,{to:{name:"StateMap",params:{state:a.state.name}}},{default:(0,i.w5)((()=>[E])),_:1},8,["to"])])])}var z=a(2119),B={name:"StateDetail",emits:["update-visited"],props:{state:Object},data(){const t=(0,z.tv)();return{visited:this.state.visited,router:t}},methods:{visitedChange(){this.$emit("update-visited",this.state.name,this.visited)}}};const R=(0,p.Z)(B,[["render",W],["__scopeId","data-v-7833a9d4"]]);var U=R;const P={key:0,id:"all-visited-message"};function M(t,e,a,n,s,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("p",null," There are a total of "+(0,C.zw)(a.states.length)+" States including District of Columbia ",1),(0,i._)("p",null,"You visited "+(0,C.zw)(r.totalVisited)+" "+(0,C.zw)(r.units),1),r.statesAreAllVisited?((0,i.wg)(),(0,i.iD)("p",P," 🎉 You have visited all States including District of Columbia 🎉 ")):(0,i.kq)("",!0)])}var H={name:"StateSummery",props:{states:Array},computed:{totalVisited(){let t=0;return this.states.forEach((e=>{e.visited&&t++})),t},units(){return 1==this.totalVisited?"State":"States"},statesAreAllVisited(){return this.totalVisited===this.states.length}}};const x=(0,p.Z)(H,[["render",M],["__scopeId","data-v-55bcafbc"]]);var L=x,I={name:"StateList",data(){return{states:[]}},components:{StateDetail:U,StateSummery:L},mounted(){this.fetchAllStates()},methods:{fetchAllStates(){this.$stateServices.getAllStates().then((t=>{this.states=t})).catch((t=>{alert("Sorry can't fetch state lists"),console.error(t)}))},onUpdateVisited(t,e){this.$stateServices.setVisitedOrNot(t,e).then((()=>this.fetchAllStates())).catch((t=>{alert("Sorry, cannot update State visited or not request!"),console.error(t)}))}}};const F=(0,p.Z)(I,[["render",V],["__scopeId","data-v-3eaf7144"]]);var Z=F;const X=(0,i._)("h2",null,"Where have you traveled to?",-1),J=(0,i._)("p",null,"Use this site to keep track of which states you have traveled to",-1),q=(0,i._)("p",null,"A Vue site by Jay",-1),G=[X,J,q];function K(t,e,a,n,s,r){return(0,i.wg)(),(0,i.iD)("div",null,G)}var Q={name:"AboutSite"};const $=(0,p.Z)(Q,[["render",K]]);var tt=$;const et={class:"state-map"},at={key:0},nt={key:1},it={key:2,id:"map-container"};function st(t,e,a,n,s,r){const o=(0,i.up)("l-tile-layer"),c=(0,i.up)("l-map");return(0,i.wg)(),(0,i.iD)("div",et,[(0,i._)("h2",null,"The State of "+(0,C.zw)(s.state.name),1),s.state.visited?((0,i.wg)(),(0,i.iD)("p",at,"You have visited this State")):((0,i.wg)(),(0,i.iD)("p",nt,"You have not visited this state")),s.dataReady?((0,i.wg)(),(0,i.iD)("div",it,[(0,i.Wm)(c,{ref:"map",onReady:r.onMapReady,center:r.mapCenter,zoom:s.state.zoom},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"© OpenStreetMap contributors"})])),_:1},8,["onReady","center","zoom"])])):(0,i.kq)("",!0)])}a(7658);var rt=a(7713),ot={name:"StateMap",components:{LMap:rt.iA,LTileLayer:rt.Hw},data(){return{state:{},dataReady:!1,mapReady:!1}},mounted(){this.state.name=this.$route.params.state,this.fetchStateData()},methods:{fetchStateData(){this.$stateServices.getOneState(this.state.name).then((t=>{this.state=t,this.dataReady=!0})).catch((t=>{t.response&&404===t.response.status?this.state.name=this.$router.push({name:"NotFoundPage"}):(alert("Sorry, error fetching data about this State"),console.error(t))}))},onMapReady(){this.mapReady=!0},setMapView(){this.mapReady&&this.dataReady&&this.$refs.map.leafletObject.setView(this.mapCenter,this.zoom)}},computed:{mapCenter(){return[this.state.lat,this.state.lon]}}};const ct=(0,p.Z)(ot,[["render",st],["__scopeId","data-v-3f10c748"]]);var ut=ct;const lt=(0,i._)("h2",null,"Page not found 😲",-1),dt={id:"go-home-link"};function pt(t,e,a,n,s,r){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[lt,(0,i._)("div",dt,[(0,i.Uk)(" Would you like to "),(0,i.Wm)(o,{to:{name:"StateList"}},{default:(0,i.w5)((()=>[(0,i.Uk)("go to the home page?")])),_:1})])])}var ht={name:"NotFound"};const ft=(0,p.Z)(ht,[["render",pt]]);var vt=ft;const mt=t=>((0,i.dD)("data-v-d5beeb1a"),t=t(),(0,i.Cn)(),t),gt={class:"visitedStatesContainer"},yt=mt((()=>(0,i._)("h2",{class:"visitedStatesTitle"},"Here are your visited States!",-1))),bt={class:"visitedLists"};function St(t,e,a,n,s,r){return(0,i.wg)(),(0,i.iD)("div",gt,[yt,(0,i._)("ul",bt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.onlyVisitedStates,(t=>((0,i.wg)(),(0,i.iD)("p",{class:"visitedStates",key:t.id},(0,C.zw)(t.name),1)))),128))])])}var kt={name:"StatesVisited",data(){return{onlyVisitedStates:[]}},mounted(){this.fetchOnlyVisited()},methods:{async fetchOnlyVisited(){try{const t=await this.$stateServices.requestOnlyVisitedStates();this.onlyVisitedStates=t}catch(t){alert("Sorry, error fetching visited states data!"),console.error(t)}}}};const wt=(0,p.Z)(kt,[["render",St],["__scopeId","data-v-d5beeb1a"]]);var At=wt,Ot=(0,z.p7)({history:(0,z.r5)(),routes:[{path:"/",name:"StateList",component:Z},{path:"/about",name:"AboutSite",component:tt},{path:"/map/:state",name:"StateMap",component:ut},{path:"/:pathMatch(.*)*",name:"NotFoundPage",component:vt},{path:"/visited States",name:"StatesVisited",component:At}]}),_t={name:"App",components:{PageHeader:f,PageFooter:_,StateList:Z}};const jt=(0,p.Z)(_t,[["render",s]]);var Vt=jt,Ct=a(6154),Dt={getAllStates(){return Ct.Z.get("/api/states").then((t=>t.data))},getOneState(t){return Ct.Z.get("/api/state/"+t).then((t=>t.data))},async requestOnlyVisitedStates(){const t=await Ct.Z.get("/api/states/visited");return t.data},setVisitedOrNot(t,e){let a={visited:e};return Ct.Z.patch("/api/states/"+t,a).then((t=>t.data))}};let Yt=(0,n.ri)(Vt);Yt.config.globalProperties.$stateServices=Dt,Yt.use(Ot),Yt.mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,s){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],s=t[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&s||r>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(o=!1,s<r&&(r=s));if(o){t.splice(l--,1);var u=i();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,i,s]}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var s=Object.create(null);a.r(s);var r={};t=t||[null,e({}),e([]),e(e)];for(var o=2&i&&n;"object"==typeof o&&!~t.indexOf(o);o=e(o))Object.getOwnPropertyNames(o).forEach((function(t){r[t]=function(){return n[t]}}));return r["default"]=function(){return n},a.d(s,r),s}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{93:"0dae71fb",243:"167e9819",431:"db4991a7",633:"1df9effc",858:"71dcec91"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";a.l=function(n,i,s,r){if(t[n])t[n].push(i);else{var o,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+s){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+s),o.src=n),t[n]=[i];var p=function(e,a){o.onerror=o.onload=null,clearTimeout(h);var i=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(a)})),e)return e(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,n){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var s=new Promise((function(a,n){i=t[e]=[a,n]}));n.push(i[2]=s);var r=a.p+a.u(e),o=new Error,c=function(n){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",o.name="ChunkLoadError",o.type=s,o.request=r,i[1](o)}};a.l(r,c,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,r=n[0],o=n[1],c=n[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(c)var l=c(a)}for(e&&e(n);u<r.length;u++)s=r[u],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(l)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4635)}));n=a.O(n)})();
//# sourceMappingURL=app.11a52b52.js.map