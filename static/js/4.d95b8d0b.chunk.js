/*! For license information please see 4.d95b8d0b.chunk.js.LICENSE.txt */
(this["webpackJsonpcama.20"]=this["webpackJsonpcama.20"]||[]).push([[4],{287:function(r,n,e){"use strict";e.d(n,"a",(function(){return o}));var t=e(94);function o(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r)){var e=[],t=!0,o=!1,s=void 0;try{for(var i,a=r[Symbol.iterator]();!(t=(i=a.next()).done)&&(e.push(i.value),!n||e.length!==n);t=!0);}catch(u){o=!0,s=u}finally{try{t||null==a.return||a.return()}finally{if(o)throw s}}return e}}(r,n)||Object(t.a)(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},295:function(r,n,e){r.exports={paginator:"Paginator_paginator__27JyC",pageNumber:"Paginator_pageNumber__2k8oS",selectedPages:"Paginator_selectedPages__2Pxgq"}},296:function(r,n,e){var t;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var r=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)r.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&r.push(i)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var a in t)e.call(t,a)&&t[a]&&r.push(a);else r.push(t.toString())}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(r.exports=t)}()},297:function(r,n,e){r.exports={smail:"Users_smail__2vjzz",userPhoto:"Users_userPhoto__1Eypp",selectedPages:"Users_selectedPages__flizx"}},298:function(r,n,e){r.exports={smail:"User_smail__2cti5",userPhoto:"User_userPhoto__1PWGV",selectedPages:"User_selectedPages__1cUsZ"}},301:function(r,n,e){"use strict";e.r(n);var t=e(52),o=e(53),s=e(55),i=e(54),a=e(0),u=e.n(a),c=e(17),l=(e(71),e(125),e(69)),p=e(95),A=e(287),g=e(295),f=e.n(g),d=e(296),x=e.n(d),S=e(2),h=function(r){for(var n=r.totalItemsCount,e=r.pageSize,t=r.currentPage,o=r.onPageChanged,s=r.portionSize,i=void 0===s?10:s,u=n/e,c=[],l=1;l<u;l++)c.push(l);var g=Math.ceil(u/i),d=Object(a.useState)(1),h=Object(A.a)(d,2),j=h[0],b=h[1],v=(j-1)*i+1,V=j*i;return Object(S.jsxs)("div",{className:f.a.paginator,children:[j>1&&Object(S.jsx)("button",{onClick:function(){b(j-1)},children:"PREV"}),c.filter((function(r){return r>=v&&r<=V})).map((function(r){return Object(S.jsx)("span",{className:x()(Object(p.a)({},f.a.selectedPages,t===r),f.a.pageNumber),onClick:function(){return o(r)},children:r},r)})),g>j&&Object(S.jsx)("button",{onClick:function(){b(j+1)},children:"NEXT"})]})},j=(e(297),e(22)),b=e(298),v=e.n(b),V=function(r){var n=r.user,e=r.followingInProgress,t=r.unfollow,o=r.follow;return Object(S.jsxs)("div",{children:[Object(S.jsxs)("span",{children:[Object(S.jsx)("div",{children:Object(S.jsx)(j.b,{to:"/profile/"+n.id,children:Object(S.jsx)("img",{src:null!=n.photos.small?n.photos.small:"data:image/jpeg;base64,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",className:v.a.userPhoto})})}),n.followed?Object(S.jsx)("button",{disabled:e.some((function(r){return r===n.id})),onClick:function(){t(n.id)},children:"Unfollow"}):Object(S.jsx)("button",{disabled:e.some((function(r){return r===n.id})),onClick:function(){o(n.id)},children:"Follow"})]}),Object(S.jsxs)("span",{children:[Object(S.jsx)("div",{children:n.name}),Object(S.jsxs)("div",{children:[" status: ",n.status," "]}),Object(S.jsxs)("div",{children:[" number \u2116 ",n.id]}),Object(S.jsx)("div",{children:n.followed?"followed":"unfollowed"})]})]})},q=function(r){var n=r.currentPage,e=r.onPageChanged,t=r.totalUsersCount,o=r.pageSize,s=r.users,i=Object(l.a)(r,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return Object(S.jsxs)("div",{children:[Object(S.jsx)(h,{currentPage:n,onPageChanged:e,totalItemsCount:t,pageSize:o}),s.map((function(r){return Object(S.jsx)(V,{user:r,follow:i.follow,following:i.following,followingInProgress:i.followingInProgress},r.id)})),"  "]})},K=e(129),y=e(65);function P(r,n){return r===n}function O(r,n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!r(n[o],e[o]))return!1;return!0}function G(r){var n=Array.isArray(r[0])?r[0]:r;if(!n.every((function(r){return"function"===typeof r}))){var e=n.map((function(r){return typeof r})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+e+"]")}return n}var I=function(r){for(var n=arguments.length,e=Array(n>1?n-1:0),t=1;t<n;t++)e[t-1]=arguments[t];return function(){for(var n=arguments.length,t=Array(n),o=0;o<n;o++)t[o]=arguments[o];var s=0,i=t.pop(),a=G(t),u=r.apply(void 0,[function(){return s++,i.apply(null,arguments)}].concat(e)),c=r((function(){for(var r=[],n=a.length,e=0;e<n;e++)r.push(a[e].apply(null,arguments));return u.apply(null,r)}));return c.resultFunc=i,c.dependencies=a,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}((function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,e=null,t=null;return function(){return O(n,e,arguments)||(t=r.apply(null,arguments)),e=arguments,t}}));var N=function(r){return r.usersPage.users},W=function(r){return N(r).filter((function(r){return!0}))},C=(I(N,(function(r){return r.filter((function(r){return!0}))})),function(r){return r.usersPage.pageSize}),T=function(r){return r.usersPage.currentPage},m=function(r){return r.usersPage.isFetching},k=function(r){return r.usersPage.followingInProgress},w=function(r){return r.usersPage.totalCount},R=function(r){Object(s.a)(e,r);var n=Object(i.a)(e);function e(){var r;Object(t.a)(this,e);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(r=n.call.apply(n,[this].concat(s))).onPageChanged=function(n){r.props.getUsers(n,r.props.pageSize),r.props.setCurrentPage(n)},r}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return console.log("render"),Object(S.jsxs)("div",{children:[this.props.isFetching?Object(S.jsx)(y.a,{}):null,Object(S.jsx)(q,{totalUsersCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),e}(u.a.Component);n.default=Object(c.b)((function(r){return console.log("mapStateToProps USERS"),{users:W(r),totalCount:w(r),pageSize:C(r),currentPage:T(r),isFetching:m(r),followingInProgress:k(r)}}),{follow:K.b,unfollow:K.e,setCurrentPage:K.d,getUsers:K.c})(R)}}]);
//# sourceMappingURL=4.d95b8d0b.chunk.js.map