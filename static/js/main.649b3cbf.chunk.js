/*! For license information please see main.649b3cbf.chunk.js.LICENSE.txt */
(this["webpackJsonpcama.20"]=this["webpackJsonpcama.20"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(39),a=n(3),i="ADD_MESSAGE",c={messages:[{id:1,message:"He"},{id:2,message:"What's up"},{id:3,message:"How are you"},{id:4,message:"Yo"}],dialogs:[{id:1,name:"Vasia"},{id:2,name:"Kolia"},{id:3,name:"Shihka"},{id:4,name:"Na kol"},{id:5,name:"Nina"}]},s=function(e){return{type:i,newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n=t.newMessage;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:n}])});default:return e}}},129:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return P})),n.d(t,"e",(function(){return R}));var r=n(9),a=n.n(r),i=n(14),c=n(39),s=n(3),u=n(15),o=function(e,t,n,r){return e.users.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},l="UNFOLLOW",d="FOLLOW",f="SET-USERS",A="SET-TOTAL-COUNT",j="SET-CURRENT-PAGE",p="CHANGE-IS-LOADING",b="CHANGE-FOLLOWING-IN_PROGGRES",O={users:[],totalCount:0,pageSize:10,page:1,isFetching:!0,followingInProgress:[],fake:10},E=function(e){return{type:d,userId:e}},m=function(e){return{type:l,userId:e}},h=function(e){return{type:j,page:e}},g=function(e){return{type:p,isFetching:e}},x=function(e,t){return{type:b,isFetching:e,userId:t}},v=function(e,t){return function(){var n=Object(i.a)(a.a.mark((function n(r){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),r(h(e)),n.next=4,u.c.getUsers(e,t);case 4:i=n.sent,r(g(!1)),r((c=i.items,{type:f,users:c})),r((a=i.totalCount,{type:A,totalCount:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(i.a)(a.a.mark((function e(t,n,r,i){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resaltCode&&t(m(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),P=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=u.c.follow.bind(e),y(n,e,r,E);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=u.c.unfollow.bind(e),y(n,e,r,m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAKE":return Object(s.a)(Object(s.a)({},e),{},{fake:e.fake+1});case d:var n=Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});return n;case l:return Object(s.a)(Object(s.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case f:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case A:return Object(s.a)(Object(s.a)({},e),{},{totalCount:t.totalCount});case j:return Object(s.a)(Object(s.a)({},e),{},{pPage:t.page});case p:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case b:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},130:function(e,t,n){e.exports={footer:"Footer_footer__3qiHp"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n(71),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"43cf8331-1a06-40ea-a5cd-1b1f77152b17"}}),i={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status?]/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("/profile",e)}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},161:function(e,t,n){},162:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(66),c=n.n(i),s=(n(161),n(52)),u=n(53),o=n(56),l=n(55),d=(n(162),n(10)),f=n(3),A=n(48),j=n.n(A),p=n(22),b=n(2),O=function(e){return Object(b.jsxs)("div",{className:j.a.header,children:[Object(b.jsx)("img",{src:"data:image/jpeg;base64,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"}),Object(b.jsxs)("div",{className:j.a.loginBlock,children:[e.isAuth?Object(b.jsxs)("div",{children:[e.login," ",Object(b.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(b.jsx)(p.b,{to:"./login",children:" LOGIN "}),Object(b.jsxs)("div",{children:[" Me id \u2116 ",e.id," "]})]})]})},E=(n(71),n(19)),m=n(9),h=n.n(m),g=n(14),x=n(15),v=n(25),y="SET_USER_DATA",P={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},R=function(e,t,n,r){return{type:y,payload:{userId:e,email:t,login:n,isAuth:r}}},w=function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){var n,r,a,i,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,i=r.email,c=r.login,t(R(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:j.a.header,children:Object(b.jsx)(O,Object(f.a)({},this.props))})}}]),n}(a.a.Component),I=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.userId}}),{logout:function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.logout();case 2:0===e.sent.data.resultCode&&t(R(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(q),k=n(30),T=n.n(k),V=function(){return Object(b.jsxs)("nav",{className:T.a.nav,children:[Object(b.jsx)("div",{className:T.a.item,children:Object(b.jsx)(p.b,{to:"/profile",activeClassName:T.a.activeLink,children:"Profile"})}),Object(b.jsx)("div",{className:T.a.item,children:Object(b.jsx)(p.b,{to:"/messages",activeClassName:T.a.activeLink,children:"Message"})}),Object(b.jsx)("div",{className:T.a.item,children:Object(b.jsx)(p.b,{to:"/users",activeClassName:T.a.activeLink,children:"Users"})})]})},C=n(130),B=n.n(C),z=function(){return Object(b.jsx)("div",{className:B.a.footer,children:" FOOTER "})},U=n(127),D=n(88),M=n(54),L=n(44),N=n(43),W=n.n(N),H=Object(L.a)(50),J=Object(U.a)({form:"login"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(D.a,{placeholder:"Email",component:M.a,validate:[L.c,H],name:"email"})}),Object(b.jsx)("div",{children:Object(b.jsx)(D.a,{placeholder:"Password",component:M.a,validate:[L.c],name:"password",type:"password"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(D.a,{type:"checkbox",component:M.a,validate:[L.c],name:"rememberMe"}),"remember me"]}),e.error&&Object(b.jsxs)("div",{className:W.a.formSummaryError,children:[e.error," "]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),Q=Object(E.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(g.a)(h.a.mark((function r(a){var i,c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x.a.login(e,t,n);case 2:0===(i=r.sent).data.resultCode?a(w()):(c=i.data.messages.length>0?i.data.messages[0]:"Some error",a(Object(v.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(d.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"LOGIN"}),Object(b.jsx)(J,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Z=n(11),G=n(65),K="INITIALIZED-SUCCESS",Y={initialized:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(f.a)(Object(f.a)({},e),{},{initialized:!0});default:return e}},X=n(125),_=n(93),$=n(126),ee=n(129),te=n(128),ne=Object(Z.c)({usersPage:ee.a,profilePage:_.a,messagesPage:$.b,auth:S,form:te.a,app:F}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,ae=Object(Z.e)(ne,re(Object(Z.a)(X.a)));window._store_=ae;var ie=ae,ce=function(e){return function(t){return Object(b.jsx)(a.a.Suspense,{fallback:Object(b.jsx)(G.a,{}),children:Object(b.jsx)(e,Object(f.a)({},t))})}},se=a.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),ue=a.a.lazy((function(){return n.e(5).then(n.bind(null,302))})),oe=a.a.lazy((function(){return n.e(4).then(n.bind(null,301))})),le=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(I,{}),Object(b.jsx)(V,{}),Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsx)(d.b,{path:"/messages",render:ce(ue)}),Object(b.jsx)(d.b,{path:"/profile/:userId?",render:ce(se)}),Object(b.jsx)(d.b,{path:"/users",render:ce(oe)}),Object(b.jsx)(d.b,{path:"/login",component:Q})]}),Object(b.jsx)(z,{})]}):Object(b.jsx)(G.a,{})}}]),n}(r.Component),de=Object(Z.d)(d.f,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(w());Promise.all([t]).then((function(){e({type:K})}))}}}))(le),fe=function(e){return Object(b.jsx)(p.a,{children:Object(b.jsx)(E.a,{store:ie,children:Object(b.jsx)(de,{})})})},Ae=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,299)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},je=document.createElement("h1");je.innerHTML="",document.querySelector("body").appendChild(je),c.a.render(Object(b.jsx)(fe,{}),document.getElementById("root")),Ae()},30:function(e,t,n){e.exports={nav:"Navbar_nav__1MmSr",item:"Navbar_item__2rBm8",activeLink:"Navbar_activeLink__gUOQ2"}},43:function(e,t,n){e.exports={formControl:"FormsControls_formControl__VmhvR",error:"FormsControls_error__3gAlL",formSummaryError:"FormsControls_formSummaryError__9-ca7"}},44:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=function(e){if(!e)return"Field is required "},a=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},i=function(e){return function(t){return t&&t.length<e?"Min length is ".concat(e," symbols"):void 0}}},48:function(e,t,n){e.exports={header:"Header_header__15_oz",loginBlock:"Header_loginBlock__2LRxs"}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(3),a=n(69),i=(n(0),n(43)),c=n.n(i),s=n(88),u=n(2),o=function(e){e.input;var t=e.meta,n=(e.element,Object(a.a)(e,["input","meta","element"])),r=t.touched;return Object(u.jsxs)("div",{className:c.a.formControl+" "+(r?c.a.error:""),children:[Object(u.jsx)("div",{children:n.children}),r&&t.error&&Object(u.jsx)("span",{children:t.error})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(u.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(u.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,Object(r.a)({placeholder:e,component:a,validate:n,name:t},i)),c]})}},65:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loader.9ff919dc.svg",a=n(2);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},93:function(e,t,n){"use strict";n.d(t,"f",(function(){return E})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"g",(function(){return x})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return y}));var r=n(9),a=n.n(r),i=n(14),c=n(39),s=n(3),u=n(15),o=n(25),l="GET-USERS-PROFILE",d="UPDATE-NEW-POST-TEXT",f="SET-USER-PROFILE",A="SET-STATUS",j="DELETE-POST",p="SAVE-PHOTO-SUCCES",b="SAVE-PROFILE-SUCCES",O={posts:[{id:1,message:"he",likesCount:"100"},{id:2,message:"it's me life",likesCount:"0"},{id:3,message:"Fucking English",likesCount:"10"},{id:4,message:"Ha ha ha",likesCount:"0"}],profile:null,status:""},E=function(e){return{type:d,newText:e}},m=function(e){return{type:A,status:e}},h=function(e){return function(t){u.b.getProfile(e).then((function(e){var n;t((n=e.data,{type:f,profile:n}))}))}},g=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n,r){var i,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:0===(c=t.sent).data.resultCode?n({type:l,id:i}):n(Object(o.a)("",{_error:c.data.messages[0]}));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n=t.newText;return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:5,message:n,likesCount:10}])});case f:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case A:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case j:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});case p:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});case b:case l:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)({},e.profile)});default:return e}}}},[[286,1,2]]]);
//# sourceMappingURL=main.649b3cbf.chunk.js.map