(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){},25:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){e.exports=t.p+"static/media/logo-wb-header-en.8a87b797.svg"},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){e.exports=t(86)},54:function(e,a,t){},6:function(e,a,t){},8:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(34),l=t.n(c),o=t(87),i=t(9),u=t(19),s=t(37),m=(t(54),t(10)),d=t(11),g=t(13),p=t(12),E=t(14),f=t(90),h=t(20),v=t(88),w=t(89),b=function(e){return e.children},C=t(38),y=t.n(C),k=t(8),N=t.n(k),O=t(39),j=t.n(O),L=t(40),T=t.n(L),S=function(e){return r.a.createElement("div",{className:j.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:T.a,alt:"World Bank Logo"}))},A=t(91),D=t(24),_=t.n(D),H=function(e){return r.a.createElement("li",{className:_.a.NavigationItem},r.a.createElement(A.a,{to:e.link,exact:e.exact,activeClassName:_.a.active},e.children))},F=t(41),x=t.n(F),G=function(e){return r.a.createElement("div",{className:x.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},U=function(e){return r.a.createElement("header",{className:N.a.Toolbar},r.a.createElement(G,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:N.a.Logo},r.a.createElement(S,null)),r.a.createElement("div",{className:N.a.Nav},r.a.createElement("nav",{className:N.a.NavLeft},r.a.createElement("ul",{className:N.a.NavList},r.a.createElement(H,{link:"/",exact:!0},"Data Catalog"))),r.a.createElement("nav",{className:N.a.NavRight},r.a.createElement("ul",{className:N.a.NavList},r.a.createElement(H,{link:"/login"},"Login"),r.a.createElement(H,{link:"/signup"},"Sign Up")))))},B=t(6),I=t.n(B),R=t(42),W=t.n(R),q=function(e){return e.show?r.a.createElement("div",{className:W.a.Backdrop,onClick:e.clicked}):null},J=function(e){var a=[I.a.SideDrawer,I.a.Close];return e.open&&(a=[I.a.SideDrawer,I.a.Open]),r.a.createElement(b,null,r.a.createElement(q,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:a.join(" "),onClick:e.closed},r.a.createElement("div",{className:I.a.Logo},r.a.createElement(S,null)),r.a.createElement("div",{className:I.a.Nav},r.a.createElement("nav",{className:I.a.NavLeft},r.a.createElement("ul",{className:I.a.NavList},r.a.createElement(H,{link:"/",exact:!0},"Data Catalog"),r.a.createElement(H,{link:"/login"},"Login"),r.a.createElement(H,{link:"/signup"},"Sign Up"))))))},M=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},t.sideDrawerClosedHandler=function(){t.setState({showSideDrawer:!1})},t.sideDrawerToggleHandler=function(){t.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(U,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(J,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:y.a.Content},this.props.children))}}]),a}(n.Component),P=t(43),V=t.n(P),$=t(25),z=t.n($),K=function(e){var a=e.description.replace(/<\/?[^>]+>/gi,"");return r.a.createElement("div",{className:z.a.DataCatalog},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",{className:z.a.Heading},e.name," (",e.acronym,")")),r.a.createElement("p",null,a),r.a.createElement("a",{href:e.detailpageurl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,"View Details")))},Q=t(44),X=t.n(Q),Y=function(){return r.a.createElement("div",{className:X.a.Loader},"Loading...")},Z=t(45),ee=t.n(Z),ae=function(e){function a(){return Object(m.a)(this,a),Object(g.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.onFetchCatalogs()}},{key:"render",value:function(){var e=r.a.createElement(Y,null),a=[];return this.props.loading||(this.props.catalogs.forEach(function(t){var n={};e=t.metatype.map(function(e){return n[e.id]=e.value}),a.push(n)}),console.log(a),e=a.map(function(e){return r.a.createElement(K,{key:100*Math.random(),name:e.name,url:e.url,acronym:e.acronym,languagesupported:e.languagesupported,description:e.description,economycoverage:e.economycoverage,updatefrequency:e.updatefrequency,updateschedule:e.updateschedule,lastrevisiondate:e.lastrevisiondate,detailpageurl:e.detailpageurl,cite:e.cite,topics:e.topics,contactdetails:e.contactdetails,bulkdownload:e.bulkdownload,numberofeconomies:e.numberofeconomies,type:e.type,granularity:e.granularity,popularity:e.popularity,periodicity:e.periodicity})})),r.a.createElement("div",{className:V.a.DataCatalogs},e)}}]),a}(n.Component),te=Object(u.b)(function(e){return{catalogs:e.cat.catalogs,loading:e.cat.loading}},function(e){return{onFetchCatalogs:function(){return e(function(e){e({type:"FETCH_CATALOG_START"}),ee.a.get("http://127.0.0.1:5000/api/v1/data_catalog").then(function(a){console.log(a.data.datacatalog),e({type:"FETCH_CATALOG_SUCCESS",catalogs:a.data.datacatalog})}).catch(function(a){e(function(e){return{type:"FETCH_CATALOG_FAIL",error:e}}(a))})})}}})(ae),ne=function(){return r.a.createElement("div",null,"Login Page")},re=function(){return r.a.createElement("div",null,"Sign Up Page")},ce=function(e){function a(){return Object(m.a)(this,a),Object(g.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,null,r.a.createElement(f.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:te}),r.a.createElement(h.a,{path:"/login",component:ne}),r.a.createElement(h.a,{path:"/signup",component:re}),r.a.createElement(v.a,{to:"/"}))))}}]),a}(n.Component),le=Object(w.a)(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=t(21),ie={catalogs:[],loading:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_CATALOG_START":return function(e,a){return Object(oe.a)({},e,{loading:!0})}(e);case"FETCH_CATALOG_SUCCESS":return function(e,a){return Object(oe.a)({},e,{loading:!1,catalogs:a.catalogs})}(e,a);case"FETCH_CATALOG_FAIL":return function(e,a){return Object(oe.a)({},e,{loading:!1})}(e);default:return e}},se=i.d,me=Object(i.c)({cat:ue}),de=Object(i.e)(me,se(Object(i.a)(s.a))),ge=r.a.createElement(u.a,{store:de},r.a.createElement(o.a,null,r.a.createElement(le,null)));l.a.render(ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,2,1]]]);
//# sourceMappingURL=main.bff97ae6.chunk.js.map