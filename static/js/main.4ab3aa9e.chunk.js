(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/IMG_5733.44e23dfb.jpg"},101:function(e,t,a){e.exports=a.p+"static/media/IMG_5740.e51ba331.jpg"},102:function(e,t,a){e.exports=a.p+"static/media/IMG_5700.8cc3d730.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/IMG_5702.3609d22f.jpg"},104:function(e,t,a){e.exports=a.p+"static/media/IMG_5725.3e608f18.jpg"},111:function(e,t,a){e.exports=a(205)},116:function(e,t,a){},120:function(e,t,a){},181:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),c=a.n(l),o=(a(116),a(11)),i=a(12),s=a(14),u=a(13),p=a(15),m=(a(35),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=null;return"Hide Form",e=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSd1sLdB-sNR0X2F5C6lMEPU_tagEjNvMIaq3Ar-1Krs9mtl8A/viewform?embedded=true",width:"600",height:"1255",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading...")),r.a.createElement("div",null,e)}}]),t}(r.a.Component)),h=a(214),d=a(207),g=a(213),f=(a(120),{apiKey:"AIzaSyBIe-MGvrJ2560PsAgDJhbou_ggIa3Ys6A",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1h-UJlgXtuydbPonqGLyPRx3FG8hp9XANk_TxjoQ46uw"});var E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={workshops:[],error:null},a.initClient=function(){window.gapi.client.init({apiKey:f.apiKey,discoveryDocs:f.discoveryDocs}).then(function(){var e;e=a.onLoad,window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:f.spreadsheetId,range:"Sheet1!A2:D"}).then(function(t){var a=t.result.values.map(function(e){return{category:e[0],instructor:e[1],title:e[2],description:e[3]}})||[];e({workshops:a})},function(t){e(!1,t.result.error)})})})},a.onLoad=function(e,t){if(e){var n=e.workshops,r=[];n.map(function(e,t){r.push(e)}),a.setState({workshops:r})}else a.setState({error:t})},a.createWorkshops=function(){var e=[],t=0,n=[];return a.state.workshops.map(function(a){var l=r.a.createElement("div",null,r.a.createElement("p",null,a.description),r.a.createElement("p",null,"Instructor: ",a.instructor));n.push(r.a.createElement(h.a,{className:"gutter-row",span:6},r.a.createElement(d.a,{content:l,title:a.category,trigger:"hover",overlayStyle:{width:"300px"}},r.a.createElement("div",{className:"gutter-box"}," ",a.title," ")))),(t+=1)>=4&&(t=0,e.push(r.a.createElement(g.a,{gutter:48},n)),n=[])}),e},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){return this.state.error?r.a.createElement("div",null,this.state.error):(console.log(this.state.workshops),r.a.createElement("div",{className:"gutter-example"},this.createWorkshops()))}}]),t}(r.a.Component),v=a(97),b=a.n(v),y=(a(181),a(98)),j=a.n(y),w=a(99),k=a.n(w),O=a(100),x=a.n(O),A=a(101),C=a.n(A),N=a(102),I=a.n(N),M=a(103),S=a.n(M),G=a(104),H=a.n(G),W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:window.innerWidth,display:!0}},r.a.createElement(b.a,{dots:!0,speed:1e3,autoplay:!0,autoplaySpeed:5e3,centerMode:!0,centerPadding:"0px",variableWidth:!0,adaptiveHeight:!0,overflow:"hidden"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:j.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:k.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:x.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:C.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:I.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:S.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:H.a,height:"300px",alt:"logo"})))))}}]),t}(r.a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},r.a.createElement("div",{className:"App-header-text"},r.a.createElement("p",null,r.a.createElement(W,null)),r.a.createElement("p",{className:"App-header-text"},"Welcome to Great Explorations!"),r.a.createElement("p",{className:"App-text"},"A Science, Technology, Engineering and Math conference for 5th thru 8th grade girls.",r.a.createElement("br",null),"March 9th, 2019 - Whitman College"),r.a.createElement("p",null,r.a.createElement(E,null)),r.a.createElement("p",null,r.a.createElement(m,null))))}}]),t}(n.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},r.a.createElement("div",{className:"App-header-text"},r.a.createElement("p",{className:"App-header-text"},"About page!"),r.a.createElement("p",{className:"App-text"},"Our information:")))}}]),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},r.a.createElement("div",{className:"App-header-text"},r.a.createElement("p",{className:"App-header-text"},"Sponsor page!"),r.a.createElement("p",{className:"App-text"},"Our sponsors:")))}}]),t}(n.Component),D=(n.Component,a(212)),J=a(208),F=a(211),P=a(209),B=a(210),U=P.a.Header,X=P.a.Content,q=P.a.Footer,z={about:K,registration:_,sponsors:L},Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={current:"registration"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,null,r.a.createElement(P.a,{className:"layout"},r.a.createElement(U,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(B.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[this.state.current],style:{lineHeight:"64px"},onClick:this.handleClick},Object.keys(z).map(function(e){return r.a.createElement(B.a.Item,{key:e},r.a.createElement(J.a,{to:"/"+e},e.charAt(0).toUpperCase()+e.slice(1)))}))),r.a.createElement(X,{style:{padding:"0 50px 0 50px",minHeight:"100vh"}},r.a.createElement("div",null,Object.keys(z).map(function(e){return r.a.createElement(F.a,{exact:!0,path:"/"+e,component:z[e],key:e})})),r.a.createElement("div",null,r.a.createElement(F.a,{exact:!0,path:"/",component:_,key:"default"}))),r.a.createElement(q,{style:{textAlign:"center"}},"Whitman College Copyright \xa92018 Nelson Hayes, Melissa Kohl, Kirk Lange, and Jack Stewart")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,a){},98:function(e,t,a){e.exports=a.p+"static/media/aurora.ab77d2ad.jpg"},99:function(e,t,a){e.exports=a.p+"static/media/IMG_5710.be4749a8.jpg"}},[[111,2,1]]]);
//# sourceMappingURL=main.4ab3aa9e.chunk.js.map