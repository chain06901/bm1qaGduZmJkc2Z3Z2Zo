(this.webpackJsonpPWA=this.webpackJsonpPWA||[]).push([[2],{15:function(e,a,t){"use strict";t.d(a,"g",(function(){return m})),t.d(a,"a",(function(){return u})),t.d(a,"c",(function(){return d})),t.d(a,"e",(function(){return f})),t.d(a,"b",(function(){return p})),t.d(a,"f",(function(){return b})),t.d(a,"d",(function(){return E}));var n=t(238),r=t(105),c=t.n(r),l=t(67),o=t.n(l),s=t(239),i=t.n(s);t(284);o.a.extend(i.a);var m=function(){var e=localStorage.getItem("token");return e?Object(n.a)(e):null},u=function(e,a){return new Promise((function(t,n){c.a.fire({title:e,text:a,icon:"warning",showCancelButton:!0,confirmButtonText:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",cancelButtonText:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",confirmButtonColor:"#3085d6",cancelButtonColor:"#dcd7d7",allowOutsideClick:!1}).then((function(e){e.isConfirmed?t("ok"):e.isDismissed&&n("cancel")}))}))},d=function(e){return new Promise((function(a,t){c.a.fire({icon:"error",title:e.error,html:e.message,confirmButtonText:"\u0e15\u0e01\u0e25\u0e07",allowOutsideClick:!1}).then((function(e){e.isConfirmed&&a("ok")}))}))},f=function(e){return new Promise((function(a,t){c.a.fire({icon:"success",title:e.title,text:e.message,confirmButtonText:"\u0e15\u0e01\u0e25\u0e07",allowOutsideClick:!1}).then((function(e){e.isConfirmed&&a("ok")}))}))},p=function(e){return o()(e).format("DD/MM/BBBB HH:mm:ss")},b=function(e){return o()(e).format("YYYY")},E=function(e,a){return Math.max(0,parseInt(e)).toString().slice(0,a)}},233:function(e,a,t){e.exports=t.p+"static/media/pwalogo.534090d6.jpg"},234:function(e,a,t){"use strict";var n=t(106),r=t.n(n),c=t(145),l=t(1),o=t.n(l),s=t(12),i=t(58),m=t(35),u=t(25),d=t(140),f=t(138),p=t(139),b=t(136),E=t(80),g=t(54),h=t(15);a.a=function(e){var a=Object(s.b)(),t=Object(s.c)((function(e){return e.user})),n=function(){var t=Object(c.a)(r.a.mark((function t(n,c){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"SHOW_LOADING"}),t.next=3,Object(i.a)().post("/company/resetpassword",{id:e.id,oldpassword:c.oldpassword,password:c.newpassword}).then((function(t){a({type:"HIDE_LOADING"}),h.e(t.data).then((function(a){e.option.onClose()}))}));case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{isOpen:e.option.onOpen},o.a.createElement(f.a,{toggle:e.option.onClose},"Change Password"),o.a.createElement(p.a,{className:"bg-secondary"},o.a.createElement(b.a,null,o.a.createElement(m.AvForm,{onValidSubmit:n},2==t.role_id&&o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,null,o.a.createElement("label",{className:"form-control-label"},"Old Password "),o.a.createElement(m.AvField,{name:"oldpassword",type:"password",className:"form-control-alternative",placeholder:"",validate:{required:{value:!0,errorMessage:" "}}}))),o.a.createElement(E.a,null,o.a.createElement("label",{className:"form-control-label"},"New Password"," ",o.a.createElement("span",{className:"text-muted"},"(* ",u.a.validation.error.minchar,")")),o.a.createElement(m.AvField,{name:"newpassword",type:"password",className:"form-control-alternative",placeholder:"",validate:{required:{value:!0,errorMessage:" "},minLength:{value:u.a.validation.minchar,errorMessage:u.a.validation.error.minchar},maxLength:{value:u.a.validation.maxchar,errorMessage:u.a.validation.error.maxchar}}})),o.a.createElement(E.a,null,o.a.createElement("label",{className:"form-control-label"},"Comfirm Password"),o.a.createElement(m.AvField,{name:"cnewpassword",type:"password",className:"form-control-alternative",placeholder:"",validate:{required:{value:!0,errorMessage:" "},required:{value:!0,errorMessage:"Password \u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19"},match:{value:"newpassword",errorMessage:"Password \u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19"}}})),o.a.createElement("div",{className:"text-center"},o.a.createElement(g.a,{color:"primary"},"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19")))))))}},246:function(e,a,t){e.exports=t(478)},25:function(e,a,t){"use strict";a.a={createdAt:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",lot:{company:"\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17",contract:"\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e2a\u0e31\u0e0d\u0e0d\u0e32",pipeFittinglotNo:"Pipe / Fitting Lot No.",p_id:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e1c\u0e25\u0e34\u0e15\u0e40\u0e21\u0e47\u0e14 \u0e2f",coa_material:"Material Lot No.",coa_product:"Product / Grade",coa_delivery:"Delivery No.",material:"Material",pressure_class:"Pressure class",component_id:"Component Type",category_parent:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e1c\u0e25\u0e34\u0e15",category_id:"\u0e0a\u0e19\u0e34\u0e14\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c",size_diameter:"Size diameter (DN)",weight:"\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01 (\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e15\u0e31\u0e19)",index:"\u0e17\u0e48\u0e2d\u0e17\u0e48\u0e2d\u0e19\u0e17\u0e35\u0e48 / \u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c\u0e0a\u0e34\u0e49\u0e19\u0e17\u0e35\u0e48",amount:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",categoryType:"Category type (\u0e0a\u0e19\u0e34\u0e14\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c)",month:"\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e25\u0e34\u0e15",year:"\u0e1b\u0e35\u0e17\u0e35\u0e48\u0e1c\u0e25\u0e34\u0e15",lot_number:"Lot number",coa_file:"\u0e44\u0e1f\u0e25\u0e4c COA ",detail:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14",createdAt:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",acceptedAt:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a",canceledAt:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"},button:{save:'<i class="fas fa-save"></i> \u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01',login:'<i class="fas fa-sign-in-alt"></i> Login',logout:'<i class="fas fa-sign-out-alt"></i> Logout',print:'<i class="fas fa-print"></i> Print',changepass:'<i class="fas fa-key"></i> Change Password'},validation:{minchar:6,maxchar:20,error:{minchar:"\u0e44\u0e21\u0e48\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e27\u0e48\u0e32 6 \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23",maxchar:"\u0e44\u0e21\u0e48\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 20 \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23",confirmpass:"Password \u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19"}},constant:{status:{W:"\u0e23\u0e2d\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a",A:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e41\u0e25\u0e49\u0e27",C:"\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"},confirmsave:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01 ?",confirmdel:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e25\u0e1a ?",recheckdata:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e2b\u0e49\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e17\u0e33\u0e01\u0e32\u0e23\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"}}},474:function(e,a,t){e.exports=t.p+"static/media/user.545eb98f.png"},476:function(e,a,t){},477:function(e,a,t){},478:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(12),l=t(29),o=t.n(l),s=t(57),i=t(21),m=t(65),u=t(13),d=t(185),f=t(186),p=t(136),b=t(206),E=t(209),g=t(207),h=t(54),v=t(69),O=t.n(v),N=t(58),j=t(25),y=t(35),w=t(15);var x=function(){var e=Object(n.useState)(),a=Object(u.a)(e,2),l=a[0],o=a[1],s=Object(n.useState)(),m=Object(u.a)(s,2),v=m[0],x=m[1],k=Object(c.b)(),C=Object(n.useState)(!1),S=Object(u.a)(C,2),A=S[0],P=S[1],_=Object(i.g)();return Object(n.useLayoutEffect)((function(){if(A){var e=w.g();k({type:"LOGIN_SUCCESS",payload:e}),_.push(e.role+"/dashboard")}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-content bg-gradient-light"},r.a.createElement(d.a,{className:"pt-8 pb-5"},r.a.createElement(f.a,{className:"justify-content-center"},r.a.createElement(p.a,{lg:"5",md:"7"},r.a.createElement(b.a,{className:" shadow border-0"},r.a.createElement(E.a,{className:"bg-transparent pb-3"},r.a.createElement("img",{className:"img-fluid",src:t(233),alt:""})),r.a.createElement(g.a,null,r.a.createElement("div",{className:"text-center mb-4"},r.a.createElement("h3",{className:"text-muted"},"Tracking and Traceability")),r.a.createElement(y.AvForm,{onValidSubmit:function(){k({type:"SHOW_LOADING"}),Object(N.a)().post("/login",{username:l,password:v}).then((function(e){e.data.login&&(localStorage.setItem("token",e.data.token),P(!0))})).catch((function(e){}))}},r.a.createElement(y.AvGroup,null,r.a.createElement(y.AvInput,{name:"username",type:"text",placeholder:"Username",className:"form-control-alternative",onChange:function(e){return o(e.target.value)},required:!0})),r.a.createElement(y.AvInput,{name:"password",type:"password",placeholder:"Password",className:"form-control-alternative",onChange:function(e){return x(e.target.value)},required:!0}),r.a.createElement("div",{className:"text-center"},r.a.createElement(h.a,{className:"my-4",color:"primary"},O()(j.a.button.login)))))))))))},k=t(42),C=t(36),S=t.n(C);S.a.config({barColors:{0:"#5e72e4"},shadowBlur:1});var A=Object(k.a)((function(){return t.e(9).then(t.bind(null,585))}),{fallback:r.a.createElement(S.a,null)}),P=Object(k.a)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,592))}),{fallback:r.a.createElement(S.a,null)}),_=Object(k.a)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,586))}),{fallback:r.a.createElement(S.a,null)}),L=Object(k.a)((function(){return t.e(7).then(t.bind(null,587))}),{fallback:r.a.createElement(S.a,null)}),I=Object(k.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,588))}),{fallback:r.a.createElement(S.a,null)}),D=Object(k.a)((function(){return t.e(8).then(t.bind(null,589))}),{fallback:r.a.createElement(S.a,null)}),F=[{path:"/dashboard",name:"\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01",icon:"fas fa-home",component:P,leftmenu:!0,exact:!1,admin:!0,company:!0},{path:"/dashboard",name:"\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e25\u0e31\u0e01",icon:"fas fa-home",component:_,leftmenu:!0,exact:!1,employee:!0},{path:"/companys",name:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17",icon:"fas fa-building",component:I,leftmenu:!0,exact:!0,admin:!0},{path:"/companys/add",name:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17",icon:"fas fa-building",component:D,exact:!0,admin:!0},,{path:"/companys/edit",name:"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17",icon:"fas fa-building",component:D,exact:!0,admin:!0},{path:"/users",name:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19",icon:"fas fa-users",component:Object(k.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,590))}),{fallback:r.a.createElement(S.a,null)}),leftmenu:!0,exact:!0,admin:!0},{path:"/users/add",name:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",icon:"fas fa-building",component:Object(k.a)((function(){return t.e(12).then(t.bind(null,591))}),{fallback:r.a.createElement(S.a,null)}),exact:!0,admin:!0},{path:"/lot",name:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14",icon:"far fa-file-alt",component:L,exact:!0,admin:!0,company:!0,employee:!0},{path:"/add",name:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",icon:"fas fa-plus",component:L,exact:!0,admin:!0,leftmenucompany:!0,company:!0},{path:"/token",name:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14",icon:"fas fa-plus",component:A,exact:!0,public:!0}],B=t(244),G=t(187),M=t(189),H=t(190),T=t(191),q=t(188),U=t(103),W=t(219),Y=t(235),z=t(218),J=t(193),V=t(192),R=t(63),K=t(234);var Q=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),l=a[0],o=a[1],s=Object(c.c)((function(e){return e.user}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{nav:!0},r.a.createElement(Y.a,{className:"pr-0",nav:!0},r.a.createElement(z.a,{className:"align-items-center"},r.a.createElement("span",{className:"avatar avatar-sm rounded-circle"},r.a.createElement("img",{src:t(474),alt:""})),r.a.createElement(z.a,{className:"ml-2"},r.a.createElement("span",{className:"mb-0 text-sm font-weight-bold"},s.fullname)))),r.a.createElement(J.a,{className:"dropdown-menu-arrow mt-2",right:!0},2===s.role_id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{onClick:function(e){return o(!0)}},O()(j.a.button.changepass)),r.a.createElement(K.a,{option:{id:s.id,onOpen:l,onClose:function(e){o(!l)}}})),r.a.createElement(V.a,{onClick:R.a.logout},O()(j.a.button.logout)))))};var X=function(e){var a=Object(c.c)((function(e){return e.user})),l=Object(n.useState)(!1),o=Object(u.a)(l,2),i=o[0],m=o[1],b=function(){m(!i)};return r.a.createElement(G.a,{className:"navbar-vertical fixed-left navbar-light bg-white",expand:"md",id:"sidenav-main"},r.a.createElement(d.a,{fluid:!0},r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:b},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(q.a,{className:"pt-0 d-none d-md-block"},r.a.createElement("img",{alt:"",className:"navbar-brand-img",src:t(233)})),r.a.createElement(M.a,{className:"align-items-center d-md-none"},r.a.createElement(Q,null)),r.a.createElement(U.a,{navbar:!0,isOpen:i},r.a.createElement("div",{className:"navbar-collapse-header d-md-none"},r.a.createElement(f.a,null,r.a.createElement(p.a,{className:"collapse-brand",xs:"10"},r.a.createElement("span",{className:"h3 mb-0 text-uppercase"},"\u0e23\u0e30\u0e1a\u0e1a\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e25\u0e30\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e04\u0e38\u0e13\u0e2a\u0e21\u0e1a\u0e31\u0e15\u0e34\u0e17\u0e48\u0e2d\u0e41\u0e25\u0e30\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c\u0e17\u0e48\u0e2d\u0e1b\u0e23\u0e30\u0e1b\u0e32")),r.a.createElement(p.a,{className:"collapse-close",xs:"2"},r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:b},r.a.createElement("span",null),r.a.createElement("span",null))))),r.a.createElement(M.a,{navbar:!0},function(e,a){return F.filter((function(a){return a.leftmenu&&a[e]||"company"===e&&a.leftmenucompany})).map((function(t,n){return r.a.createElement(H.a,{key:n},r.a.createElement(T.a,{to:"/"+e+t.path,tag:s.c,onClick:a,activeClassName:"active"},r.a.createElement("i",{className:t.icon+" text-blue"}),t.name))}))}(a.role,(function(){m(!1)}))))))};var Z=function(e){var a=Object(c.c)((function(e){return e.user}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,e),r.a.createElement("div",{className:"main-content bg-gradient-lighter"},r.a.createElement(G.a,{className:"navbar-dark bg-gradient-pwa p-2 d-none d-md-block"},r.a.createElement(d.a,{fluid:!0},r.a.createElement("span",{className:"h2 mb-0 text-white text-uppercase"},"\u0e23\u0e30\u0e1a\u0e1a\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e25\u0e30\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e04\u0e38\u0e13\u0e2a\u0e21\u0e1a\u0e31\u0e15\u0e34\u0e17\u0e48\u0e2d\u0e41\u0e25\u0e30\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c\u0e17\u0e48\u0e2d\u0e1b\u0e23\u0e30\u0e1b\u0e32"),r.a.createElement(M.a,{className:"align-items-center d-none d-md-block",navbar:!0},r.a.createElement(Q,null)))),r.a.createElement("div",{id:"content"},r.a.createElement(d.a,{className:"mt-4",fluid:!0},r.a.cloneElement(e.children,{user:a}))),r.a.createElement("footer",{className:"py-3"},r.a.createElement(d.a,null,r.a.createElement(f.a,{className:"align-items-center justify-content-xl-between"},r.a.createElement(p.a,{xl:"12"},r.a.createElement("div",{className:"copyright text-center text-xl-center text-muted"},"Copyright \xa9 ",w.f(a.loginDate)," ","\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e42\u0e14\u0e22 \u0e01\u0e2d\u0e07\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e23\u0e30\u0e1a\u0e1a\u0e2a\u0e32\u0e23\u0e2a\u0e19\u0e40\u0e17\u0e28\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 \u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e1b\u0e32\u0e2a\u0e48\u0e27\u0e19\u0e20\u0e39\u0e21\u0e34\u0e20\u0e32\u0e04\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48")))))))},$=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(),s=Object(u.a)(o,2),m=s[0],d=s[1],f=Object(n.useState)(),p=Object(u.a)(f,2),b=p[0],E=p[1];return Object(n.useEffect)((function(){var e=w.g();e?(E(e),d(!0),l(!1)):(d(!1),l(!1))}),[]),r.a.createElement(i.b,{path:e,render:function(){return m?r.a.createElement(i.a,{to:b.role+"/dashboard"}):c?"":r.a.createElement(i.a,{to:"/login"})}})},ee=function(e){var a=e.component,t=(e.exact,e.path),c=Object(B.a)(e,["component","exact","path"]),l=Object(n.useState)(!0),o=Object(u.a)(l,2),s=o[0],m=o[1],d=Object(n.useState)(),f=Object(u.a)(d,2),p=f[0],b=f[1],E=Object(n.useState)(),g=Object(u.a)(E,2),h=g[0],v=g[1],O=Object(i.h)();return Object(n.useEffect)((function(){var e=w.g();e?O.pathname.indexOf(e.role)>-1?(b(!0),m(!1)):(v(!0),b(!1),m(!1)):(v(!1),b(!1),m(!1))}),[O]),r.a.createElement(i.b,{path:t,render:function(e){return p?r.a.createElement(Z,c,r.a.createElement(a,Object.assign({},e,c))):s?"":h?R.a.logout():r.a.createElement(i.a,{to:"/login"})}})};var ae=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.isLoading?"parentDisable":"d-none",width:"100%"},r.a.createElement("div",{className:"overlay-box"},r.a.createElement("div",{className:"fa-4x"},r.a.createElement("i",{className:"fas fa-circle-notch fa-spin"})))))};t(475),t(476),t(477);function te(){var e=Object(c.c)((function(e){return e.loading})),a=Object(c.b)(),t=["admin","company","employee"],l=localStorage.getItem("token");return m.a.subscribe((function(){})),Object(n.useEffect)((function(){if(l){var e=w.g();a({type:"LOGIN_SUCCESS",payload:e})}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{isLoading:e}),r.a.createElement(s.a,{basename:"/pwatracking"},r.a.createElement(i.d,null,r.a.createElement($,{exact:!0,path:"/"}),r.a.createElement(i.b,{path:"/login"},l?r.a.createElement(i.a,{to:"/"}):r.a.createElement(x,null)),t.map((function(e){return F.filter((function(a){return a[e]})).map((function(a,t){var n="/"+e+a.path;return r.a.createElement(ee,{key:t,path:n,exact:a.exact,routesdetail:a,component:a.component})}))})),t.map((function(e){return F.filter((function(e){return e.public})).map((function(e,a){var t=e.path;return r.a.createElement(i.b,{key:a,path:t,exact:e.exact,routesdetail:e,component:e.component})}))})),l?r.a.createElement(i.a,{to:"/"}):r.a.createElement(i.a,{to:"/login"}))))}o.a.render(r.a.createElement(c.a,{store:m.a},r.a.createElement(te,null)),document.getElementById("root"))},58:function(e,a,t){"use strict";var n=t(65),r=t(237),c=t.n(r),l=t(63),o=t(15);a.a=function(){var e={};localStorage.token&&(e.Authorization="Bearer ".concat(localStorage.token));var a=c.a.create({baseURL:"https://appservice.pwa.co.th/pwatracking/api",timeout:1e4,headers:e});return a.interceptors.response.use((function(e){return 401===e.data.status?(n.a.dispatch({type:"HIDE_LOADING"}),o.c(e.data),Promise.reject()):e}),(function(e){return n.a.dispatch({type:"HIDE_LOADING"}),e.response&&404!==e.response.status?403===e.response.status&&l.a.logout():o.c({error:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",message:e}),Promise.reject(e)})),a}},63:function(e,a,t){"use strict";var n=t(58),r=t(243),c={logout:function(){localStorage.clear(),(new r.a).remove("token"),Object(n.a)().get("/logout"),window.location.href=""}};a.a=c},65:function(e,a,t){"use strict";var n=t(43),r=t(104),c={loading:!1,user:{}},l=Object(r.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_SUCCESS":return Object(n.a)(Object(n.a)({},e),{},{user:a.payload});case"LOGOUT":return Object(n.a)(Object(n.a)({},e),{},{user:{}});case"SHOW_LOADING":return Object(n.a)(Object(n.a)({},e),{},{loading:!0});case"HIDE_LOADING":return Object(n.a)(Object(n.a)({},e),{},{loading:!1});default:return e}}));a.a=l}},[[246,3,4]]]);
//# sourceMappingURL=main.42c6cd8a.chunk.js.map