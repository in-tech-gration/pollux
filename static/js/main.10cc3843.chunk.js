(this.webpackJsonppollux=this.webpackJsonppollux||[]).push([[0],{134:function(e,t,a){e.exports=a.p+"static/media/cat.4333af26.svg"},1621:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),o=a.n(l),c=(a(338),a(339),a(322)),i=a(1634),m=a(17),s=a(21),u=a(7),d=a(1639),p=a(1644),h=a(1645),E=a(1646),f=a(325),b=a(49),g=a(311),y=a(327),v=a(321),w=a(14),O=a(1627),j=a(323),k=a(48),N=function(e){return{type:"ADD_MODEL",payload:e}},x=function(e){return{type:"JUST_ADD_PROP",payload:e}},C=function(e){return{type:"EDIT_PROP",payload:e}},M=a(1640),A=O.a.Header,P=O.a.Body,I=O.a.Footer,D=O.a.Title,T=Object(w.b)()((function(e){var t=e.dispatch,a=Object(n.useState)({showNameModal:!1,modelName:""}),l=Object(m.a)(a,2),o=l[0],c=l[1],i=function(){return c(Object(u.a)({},o,{showNameModal:!1}))},s=function(){t(N({id:Object(M.a)(),name:o.modelName,createdAt:+new Date})),c(Object(u.a)({},o,{modelName:"",showNameModal:!1}))},d=function(e){return c(Object(u.a)({},o,{modelName:e.trim("")}))};return r.a.createElement("section",null,r.a.createElement(f.a,{id:"add-prototype-btn",color:"cyan",onClick:function(){return c(Object(u.a)({},o,{showNameModal:!0}))},appearance:"ghost",style:{width:"100%"},icon:r.a.createElement(b.a,{icon:"plus"})},"Add a model prototype"),r.a.createElement(O.a,{show:o.showNameModal,onHide:i,style:{maxWidth:"100%"}},r.a.createElement(A,null,r.a.createElement(D,null,"Choose the model name")),r.a.createElement(P,null,r.a.createElement("p",null,"Click ",r.a.createElement("span",{className:"note"},"`Enter`")," to create the model or",r.a.createElement("span",{className:"note"},"`esc`")," to close this model"),r.a.createElement(j.a,{onPressEnter:function(){d(o.modelName),s()},onChange:d,autoFocus:!0,style:{width:"100%"},placeholder:"Your model name",size:"lg",value:o.modelName})),r.a.createElement(I,null,r.a.createElement(k.a,{onClick:s,appearance:"primary"},"Create"),r.a.createElement(k.a,{onClick:i,appearance:"subtle"},"Cancel"))))})),S=a(1641),_=a(1649),R=a(295),L=a.n(R),F=a(18),z=a(326),U=a(1648),B=a(1650),H=O.a.Body,W=O.a.Footer,J=O.a.Header,G=O.a.Title,V=function(e){var t=e.showConfirmModal,a=e.closeConfirmModal,n=e.name,l=e.del,o=e.id;return r.a.createElement(O.a,{backdrop:"static",onHide:a,size:"xs",show:t,style:{maxWidth:"100%"}},r.a.createElement(J,null,r.a.createElement(G,null,"Confirm")),r.a.createElement(H,null,r.a.createElement(b.a,{icon:"remind",style:{color:"#ffb300",fontSize:24}}),r.a.createElement("b",null," ","Are you sure you want to delete this model ","`",r.a.createElement("span",{style:{color:"#E30712"}},n),"`","?")),r.a.createElement(W,null,r.a.createElement(k.a,{onClick:function(){return l(o)},appearance:"primary",color:"red"},"Ok"),r.a.createElement(k.a,{onClick:a,appearance:"subtle"},"Cancel")))},$=a(134),K=a.n($),Y=a(1635),X=a(1632),q=a(1643),Z=a(1629),Q=O.a.Body,ee=O.a.Footer,te=O.a.Header,ae=O.a.Title,ne=Object(w.b)((function(e,t){var a=e.prop;return Object(u.a)({},t,{propNamesForThisModel:a[t.id]})}))((function(e){var t=e.showPropNameModal,a=e.closeConfirmModal,l=e.name,o=e.addProp,c=e.propNamesForThisModel,i=e.id,s=e.mode,d=e.propNameProp,p=e.dispatch,h=e.propId,E=Object(n.useState)({propName:"edit"===s?d:"",valid:!0}),f=Object(m.a)(E,2),b=f[0],g=f[1],y=function(e){g("edit"===s?{propName:e.trim(""),valid:!0}:{propName:e,valid:!0})},v=function(){g(Object(u.a)({},b,{valid:!0})),a()};return r.a.createElement(O.a,{backdrop:"static",show:t,onHide:v,style:{maxWidth:"100%"},size:"lg"},r.a.createElement(te,null,r.a.createElement(ae,null,"edit"===s?"Edit ".concat(d," property"):"Enter the properties names")),r.a.createElement(Q,null,r.a.createElement("div",{style:{display:b.valid?"none":"block",marginBottom:"10px"}},r.a.createElement(q.a,{type:"error",showIcon:!0,description:'The Property "'.concat(b.propName,'" is already exists in this model (').concat(l,")")})),r.a.createElement("p",null,r.a.createElement("b",null,"Type the prop name then press enter to add them")),"edit"===s?r.a.createElement(j.a,{style:{width:"100%"},placeholder:"Change prop name",onChange:y}):r.a.createElement(Z.a,{creatable:!0,placeholder:"add as many properties you want here",style:{width:"100%"},onChange:y,menuStyle:{width:300,display:"none"}})),r.a.createElement(ee,null,r.a.createElement(k.a,{onClick:function(){if(c&&c.find((function(e){return e.propName===b.propName})))return void g(Object(u.a)({},b,{valid:!1}));"edit"===s?p(C({propName:b.propName,id:i,propId:h})):(b.propName.forEach((function(e){return o(e)})),g(Object(u.a)({},b,{propName:""}))),a()},appearance:"primary",color:"cyan",disabled:!b.propName.length},"Ok"),r.a.createElement(k.a,{onClick:v,appearance:"subtle"},"Cancel")))})),re=function(){return/Mobi/.test(navigator.userAgent)||/Mobi|Android/i.test(navigator.userAgent)},le=Object(w.b)((function(e,t){return Object(u.a)({},t,{inputData:e.faker})}))((function(e){var t=e.i,a=e.name,l=e.id,o=e.modelName,c=e.modelId,i=e.dispatch,s=e.inputData,d=e.func,g=Object(n.useState)({showPropNameModal:!1,func:d}),y=Object(m.a)(g,2),v=y[0],w=y[1];return r.a.createElement(Y.a.Item,{key:t,index:t},r.a.createElement(p.a,{fluid:!0},r.a.createElement(h.a,{colSpan:6,style:{textAlign:re()?"center":"left"}},r.a.createElement(E.a,{xs:24,sm:24,md:8},r.a.createElement("h4",null,r.a.createElement(b.a,{icon:"circle"})," ",a," ",re()?r.a.createElement(b.a,{icon:"circle"}):"")),r.a.createElement(E.a,{xs:24,sm:24,md:10,style:{textAlign:"left"}},r.a.createElement(X.a,{onChange:function(e){var t=s.find((function(t){var a=t.value;return e===a}));if(t){var a=t.groupName;w(Object(u.a)({},v,{func:e})),i(C({id:c,propId:l,func:e,groupName:a}))}},data:s,defaultValue:v.func,groupBy:"groupName",placeholder:"Select a function",style:{width:"100%"}})),r.a.createElement(ne,{id:c,showPropNameModal:v.showPropNameModal,closeConfirmModal:function(){return w(Object(u.a)({},v,{showPropNameModal:!1}))},propNameProp:a,name:o,propId:l,mode:"edit"}),r.a.createElement(E.a,{xs:12,sm:12,md:3,style:{textAlign:re()?"left":"right"}},r.a.createElement(f.a,{style:{margin:"5px"},icon:r.a.createElement(b.a,{icon:"edit"}),color:"cyan",circle:!0,onClick:function(){return w(Object(u.a)({},v,{showPropNameModal:!0}))}})),r.a.createElement(E.a,{xs:12,sm:12,md:1,style:{textAlign:"right"}},r.a.createElement(f.a,{style:{margin:"5px"},icon:r.a.createElement(b.a,{icon:"minus"}),color:"red",circle:!0,onClick:function(){return i({type:"DELETE_PROP",payload:{propId:l,modelId:c}})}})))))})),oe=Object(w.b)((function(e,t){return Object(u.a)({},t,{props:e.prop[t.id]})}))((function(e){var t=e.id,a=e.props,n=e.modelName,l=a&&(null===a||void 0===a?void 0:a.length)>0?r.a.createElement(Y.a,{hover:!0},a.map((function(e,a){var l=e.propName,o=e.id,c=e.func;return r.a.createElement(le,{i:a,key:a,func:c,name:l,id:o,modelId:t,modelName:n})}))):r.a.createElement("section",{style:{width:"100%",textAlign:"center"}},r.a.createElement("h5",null,"Add Properties to this model using the + button"),r.a.createElement("img",{src:K.a,alt:"cat waiting",width:"100px",height:"100px"}));return r.a.createElement("section",null,l)})),ce=a(1647),ie=O.a.Body,me=O.a.Footer,se=O.a.Header,ue=O.a.Title,de=Object(w.b)((function(e,t){var a=e.models,n=e.relations;return Object(u.a)({},t,{eligibleModels:(a||[]).filter((function(e){return e.id!==t.id})),mainModel:(a||[]).filter((function(e){return e.id===t.id}))[0],checkedModels:new Set(n[t.id]||[])})}))((function(e){var t=e.showCreateRel,a=e.mainModel,n=e.close,l=e.id,o=e.eligibleModels,c=e.dispatch,i=e.checkedModels,m=function(e,t){e?(d.a.success("created the link with ".concat(a.name," (1:m)")),c({type:"ADD_RELATION",payload:{distId:t,modelId:l}})):(d.a.info("removed the link with ".concat(a.name)),c(function(e){return{type:"REMOVE_RELATION",payload:e}}({distId:t,modelId:l})))};return a?r.a.createElement(O.a,{backdrop:"static",onHide:n,show:t,style:{maxWidth:"100%"},size:"lg"},r.a.createElement(se,null,r.a.createElement(ue,null,"Create Relation for"," ",r.a.createElement("span",{style:{color:"#1b9cb0"}},a.name.toUpperCase())," ","model")),r.a.createElement(ie,null,r.a.createElement("h4",null,"Eligible Models:"),r.a.createElement(p.a,{fluid:!0,style:{marginTop:20}},r.a.createElement(h.a,null,0===o.length?r.a.createElement("section",{style:{width:"100%",textAlign:"center"}},r.a.createElement("h5",null,"There is no eligible models, create models to link them!"),r.a.createElement("img",{src:K.a,alt:"cat waiting",width:"100px",height:"100px"})):(o||[]).map((function(e){var t=e.name,a=e.id;return r.a.createElement(E.a,{xs:24,sm:24,md:6,key:a},r.a.createElement("span",{style:{color:"#1b9cb0"}},t.toUpperCase())," ",r.a.createElement(ce.a,{style:{marginLeft:5},onChange:function(e){return m(e,a)},checked:i.has(a)}))}))))),r.a.createElement(me,null,r.a.createElement(k.a,{appearance:"primary",color:"cyan",onClick:n},"Ok"),r.a.createElement(k.a,{appearance:"subtle",onClick:n},"Cancel"))):""})),pe=a(202),he=a.n(pe),Ee=a(309),fe=a(23),be=a(203),ge=a(310),ye=a.n(ge),ve={description:"The file is generated using https://mohammedal-rowad.github.io/pollux/",scripts:{dev:"json-server-auth --watch db.json -r routes.json"},author:"Rowadz",license:"MIT",dependencies:{"json-server":"^0.16.2","json-server-auth":"^2.0.2"}},we=function(e){return"# Generated json-server API for ".concat(e," model\nThis json-server api was generated via [pollux](https://mohammedal-rowad.github.io/pollux/)\nand it runs using [json-server](https://github.com/typicode/json-server), please read json-server docs for more info.\n\n> the authtication is made with [json-server-auth](https://www.npmjs.com/package/json-server-auth) read the docs there to customize the auth behavior \n\n\n\n# How to run\n\n```bash\n$ cd into this folder\n$ npm install or npm i\n$ npm run dev\n$ now look at the terminal\n```\n")},Oe=function(e,t,a,n,r,l){if(e){var o=e.filter((function(e){return!e.func})).map((function(e){return e.propName})),c=o.length;if(c>0)d.a.warning("There is ".concat(c," ").concat(1===c?"property":"properties"," without function ").concat(o.join(" || ")));else{var i=je(e,a);if(n){var m=i.map((function(e){return Object(u.a)({},e,{},n.reduce((function(e,t){var a=t.name,n=t.id;return Object(u.a)({},e,Object(s.a)({},a,je(r[n],10)))}),{}))}));if(l)return m;ke(m,t)}else{if(l)return i;ke(i,t)}}}else d.a.warning("plz add some properties to this model (".concat(t,")"))},je=function(e,t){return Array.from({length:t}).map((function(){return e.reduce((function(e,t){var a=t.propName,n=t.groupName,r=t.func;return"image"===n||"random"===n&&"image"===r?Object(u.a)({},e,Object(s.a)({},a,fe.random.arrayElement(["http://placekitten.com/500/600","http://placekitten.com/1200/600","http://placekitten.com/1200/1200"]))):Object(u.a)({},e,Object(s.a)({},a,fe[n]["fullName"===r?"findName":r]()))}),{})}))},ke=function(e,t){Object(be.saveAs)(new Blob([Ne(e)],{type:"application/json"}),t),d.a.success("Downloaded ".concat(t,".json \ud83d\udc4d"))},Ne=function(e){return JSON.stringify(e,null,2)},xe=function(e,t){return(e.relations[t]||[]).reduce((function(t,a){return Object(u.a)({},t,Object(s.a)({},a,e.prop[a]))}),{})},Ce=function(e,t){return(e.relations[t]||[]).map((function(t){return e.models.find((function(e){var a=e.id;return t===a}))}))},Me=function(){var e=Object(Ee.a)(he.a.mark((function e(t,a,n,r,l,o){var c,i;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a||o){e.next=4;break}return d.a.warning("plz add some properties to this model (".concat(t,")")),e.abrupt("return");case 4:return(c=new ye.a).file("package.json",Ne(ve)),c.file("db.json",Ne(o||Object(s.a)({},t,Oe(a,t,n,r,l,!0)))),c.file("README.md",we(t)),c.file("routes.json",Ne(Object(s.a)({},t,660))),e.next=11,c.generateAsync({type:"blob"});case 11:i=e.sent,Object(be.saveAs)(i,"pollux-api.zip"),d.a.success("Downloaded pollux-api.zip \ud83d\udc4d"),e.next=25;break;case 16:e.prev=16,e.t0=e.catch(0),d.a.error("Something went wrong while generating your API, please checkout the console"),console.group("Error generating the API"),console.log("the error object"),console.error(e.t0),console.log("you can open an issue with this error in the link below"),console.log("https://github.com/MohammedAl-Rowad/pollux"),console.groupEnd();case 25:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,a,n,r,l,o){return e.apply(this,arguments)}}(),Ae=a(1637),Pe=Object(w.b)((function(e,t){return Object(u.a)({},t,{propsCount:(e.prop[t.model.id]||[]).length,props:e.prop[t.model.id],relations:Ce(e,t.model.id),relationsProps:xe(e,t.model.id),faker:e.faker})}))((function(e){var t=e.dispatch,a=e.model,l=a.id,o=a.name,c=a.amount,i=e.propsCount,s=e.props,v=e.relations,w=e.relationsProps,O=e.isTourOpen,j=e.faker,k=Object(n.useState)({showConfirmModal:!1,showPropNameModal:!1,showCreateRel:!1,amount:10}),N=Object(m.a)(k,2),C=N[0],A=N[1],P=Object(Ae.a)({accept:["UUID","Email","Password","Full Name","Paragraphs","Paragraph","IP","Image"].concat(Object(F.a)(j.map((function(e){return e.groupName})))),canDrop:function(){return!0},collect:function(e){return{canDrop:e&&e.canDrop(),hovered:e&&e.isOver()}},drop:function(e){var a=e.data;t(x({uuid:l,props:[Object(u.a)({},a,{id:Object(M.a)()})]})),d.a.success("Added the ".concat(a.propName," props"))}}),I=Object(m.a)(P,2),D=I[0],T=D.canDrop,R=D.hovered,L=I[1],H=r.a.createElement(y.a,null,"Click here to ",r.a.createElement("b",null,"Delete")," this model ","`",o,"`","."),W=r.a.createElement(y.a,null,"Click here to add an attribute."),J=r.a.createElement(y.a,null,"Click here to ",r.a.createElement("b",null,"generate")," a json for this model."),G=function(){return A(Object(u.a)({},C,{showConfirmModal:!1,showPropNameModal:!1,showCreateRel:!1}))},$=r.a.createElement("div",null,"Model name ",o,r.a.createElement(z.a,{color:"cyan",style:{marginLeft:"5px"},id:O?"prop-tag-count":null},i),r.a.createElement(g.a,{placement:"right",trigger:"hover",speaker:r.a.createElement(y.a,null,"Click here to create a relationship with other models")},r.a.createElement(f.a,{id:O?"create-a-relationship-btn":null,icon:r.a.createElement(b.a,{icon:"link"}),style:{marginLeft:"5px"},color:"violet",onClick:function(){return A(Object(u.a)({},C,{showConfirmModal:!1,showPropNameModal:!1,showCreateRel:!0}))},circle:!0})),r.a.createElement(g.a,{placement:"right",trigger:"hover",speaker:r.a.createElement(y.a,null,"Click here to generate a json-server API from this model")},r.a.createElement(f.a,{id:O?"create-a-api-btn":null,icon:r.a.createElement(b.a,{icon:"twinkle-star"}),style:{marginLeft:"5px"},color:"blue",circle:!0,onClick:function(){return Me(o,s,c,v,w)}})),r.a.createElement("div",{ref:L},r.a.createElement(S.a,{shaded:!0,style:{backgroundColor:R?"#8BCAD9":T?"#5E6D8C":"",height:50,marginTop:10}},r.a.createElement(U.a,{style:{background:"#1b9cb0"}})," Drop Props Here"," ",r.a.createElement(U.a,{style:{background:"#1b9cb0"}}))));return r.a.createElement("section",{style:{marginTop:20}},r.a.createElement(_.a,{bordered:!0},r.a.createElement(S.a,{shaded:!0,header:$},r.a.createElement(p.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement(E.a,{xs:24,sm:24,md:24},r.a.createElement(g.a,{placement:"right",trigger:"hover",speaker:W},r.a.createElement(f.a,{icon:r.a.createElement(b.a,{icon:"plus"}),id:O?"add-attribute-btn":null,color:"cyan",circle:!0,onClick:function(){return A(Object(u.a)({},C,{showConfirmModal:!1,showCreateRel:!1,showPropNameModal:!0}))}})),r.a.createElement(g.a,{placement:"right",trigger:"hover",speaker:J},r.a.createElement(f.a,{id:O?"generate-data-btn":null,style:{marginLeft:"5px"},icon:r.a.createElement(b.a,{icon:"magic2"}),color:"orange",circle:!0,onClick:function(){return Oe(s,o,c,v,w)}})),r.a.createElement("div",{style:{width:100,display:"inline",position:"absolute",paddingLeft:10}},r.a.createElement(B.a,{defaultValue:c,max:1e5,min:1,onChange:function(e){A(Object(u.a)({},C,{amount:+e})),t(function(e){return{type:"UPDATE_AMOUNT",payload:e}}({modelId:l,amount:+e}))}})),r.a.createElement(g.a,{placement:"left",trigger:"hover",speaker:H},r.a.createElement(f.a,{icon:r.a.createElement(b.a,{icon:"minus"}),style:{float:"right"},color:"red",circle:!0,onClick:function(){return A(Object(u.a)({},C,{showConfirmModal:!0,showCreateRel:!1}))}})),r.a.createElement(V,{id:l,del:function(e){G(),t({type:"REMOVE_ALL_RPOPS",payload:e}),t(function(e){return{type:"DELETE_MODEL",payload:e}}(e))},closeConfirmModal:G,name:o,showConfirmModal:C.showConfirmModal}),r.a.createElement(ne,{id:l,showPropNameModal:C.showPropNameModal,closeConfirmModal:G,name:o,addProp:function(e){return t(function(e){return{type:"ADD_RPOP_NAME",payload:e}}({propName:e,uuid:l}))}}),O?"":r.a.createElement(de,{showCreateRel:C.showCreateRel,id:l,close:G})),r.a.createElement(E.a,{xs:24,sm:24,md:24,style:{textAlign:"right",marginTop:"10px"}},r.a.createElement(oe,{id:l,modelName:o})))))))})),Ie=Object(w.b)((function(e){return e}))((function(e){var t=e.models,a=e.isTourOpen,n=t.length>0?t.map((function(e,t){return r.a.createElement(Pe,{model:e,key:t})})):r.a.createElement(S.a,{bordered:!0,header:"Add models to start!",style:{textAlign:"center"}},r.a.createElement("img",{src:L.a,with:"100%",height:"200px",alt:"empty-img"}));return r.a.createElement("section",{id:"models-section"},a?r.a.createElement(Pe,{model:{id:"",name:"Demo",createdAt:+new Date},isTourOpen:a}):r.a.createElement(_.a,null,n))})),De=a(81),Te=a(324),Se=a(312),_e=a.n(Se),Re=O.a.Header,Le=O.a.Body,Fe=O.a.Footer,ze=O.a.Title,Ue=Object(w.b)((function(e,t){var a=e.models,n=e.prop;return Object(u.a)({},t,{models:a,prop:n})}))((function(e){var t=e.models,a=e.prop,l=Object(n.useState)({showModalSave:!1,toSave:[],modelsKey:"models"}),o=Object(m.a)(l,2),c=o[0],i=o[1],s=function(){return i(Object(u.a)({},c,{showModalSave:!1}))},p=function(e,t){i(t?Object(u.a)({},c,{toSave:[].concat(Object(F.a)(c.toSave),[e])}):Object(u.a)({},c,{toSave:Object(F.a)(c.toSave.filter((function(t){return t.id!==e.id})))}))},h=t.length?t.map((function(e){var t=e.name,a=e.id;return r.a.createElement(Te.a,{name:t,onChange:p,key:a,value:{name:t,id:a}},t)})):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:_e.a,height:"100",width:"100%",alt:"no models img"}),r.a.createElement("p",null,"You need to create some models to save them "));return r.a.createElement("section",{style:{display:"inline"}},r.a.createElement(f.a,{color:"cyan",id:"save-model-btn",onClick:function(){return i(Object(u.a)({},c,{toSave:[],showModalSave:!0}))},circle:!0,icon:r.a.createElement(b.a,{icon:"save"})}),r.a.createElement(O.a,{show:c.showModalSave,onHide:s,style:{maxWidth:"100%"}},r.a.createElement(Re,null,r.a.createElement(ze,null,"You can save a model here, then load it")),r.a.createElement(Le,null,h),r.a.createElement(Fe,null,r.a.createElement(k.a,{onClick:function(){var e=t.map((function(e){var t=e.id,n=Object(De.a)(e,["id"]);return Object(u.a)({props:a[t],id:t},n)})),n=new Set(e.map((function(e){return e.id}))),r=(JSON.parse(localStorage.getItem(c.modelsKey))||[]).filter((function(e){var t=e.id;return!n.has(t)})),l=[].concat(Object(F.a)(r),Object(F.a)(e));localStorage.setItem(c.modelsKey,JSON.stringify(l)),d.a.success("Saved models [ ".concat(e.map((function(e){return e.name})).join(" || ")," ]"))},appearance:"primary",disabled:0===t.length},"Save"),r.a.createElement(k.a,{onClick:s,appearance:"subtle"},"Cancel"))))})),Be=a(1651),He=a(313),We=a.n(He),Je=O.a.Header,Ge=O.a.Body,Ve=O.a.Footer,$e=O.a.Title,Ke=Object(w.b)((function(e,t){var a=e.models;return Object(u.a)({},t,{models:a})}))((function(e){var t=e.dispatch,a=e.models,l=Object(n.useState)({showTheModalOfModels:!1,models:[]}),o=Object(m.a)(l,2),c=o[0],i=o[1],s=function(){return i(Object(u.a)({},c,{showTheModalOfModels:!1}))};return r.a.createElement("section",{style:{display:"inline",marginLeft:10}},r.a.createElement(f.a,{color:"yellow",onClick:function(){return i(Object(u.a)({},c,{showTheModalOfModels:!0,models:JSON.parse(localStorage.getItem("models"))||[]}))},circle:!0,id:"load-model-btn",icon:r.a.createElement(b.a,{icon:"tasks"})}),r.a.createElement(O.a,{show:c.showTheModalOfModels,onHide:s,style:{maxWidth:"100%"}},r.a.createElement(Je,null,r.a.createElement($e,null,"Load your saved models!")),r.a.createElement(Ge,null,0===c.models.length?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:We.a,height:"240",width:"100%",alt:"empty models"}),r.a.createElement("p",null,"Your saved models will appear here!")):c.models.map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement("h3",null,r.a.createElement("strong",null,e.name)),r.a.createElement(k.a,{style:{float:"right"},appearance:"ghost",onClick:function(){return function(e){var n=e.id,r=e.name,l=e.createdAt,o=e.amount,c=Object(De.a)(e,["id","name","createdAt","amount"]);0===(a.find((function(e){var t=e.id;return n===t}))||[]).length?(t(N({id:n,name:r,createdAt:l,amount:+o})),t(x(Object(u.a)({uuid:n},c))),d.a.info("Loaded ".concat(r," model \ud83d\udc4d"))):d.a.warning("We already loaded ".concat(r," - id[").concat(n,"]"))}(e)}},"Click to Load ",e.name),r.a.createElement("pre",null,JSON.stringify(e,null,2)),r.a.createElement(Be.a,null))}))),r.a.createElement(Ve,null,r.a.createElement(k.a,{onClick:s,appearance:"subtle"},"Close"))))})),Ye=[{selector:"#add-prototype-btn",content:"Click here to create new model aka prototype"},{selector:"#save-model-btn",content:"Click here to save models after you create them ( they are saved in your localstorage - hope you don't mind :p )"},{selector:"#load-model-btn",content:"Click here to load your saved models after you save them"},{selector:"#create-a-api-btn-for-all",content:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Click here to generate an API with all the models in the model section (this might take some time....)."),r.a.createElement("p",null,"After generation you just need to"),r.a.createElement("ul",null,r.a.createElement("li",null,"unzip the folder"),r.a.createElement("li",null,"`cd pollux-api`"),r.a.createElement("li",null,"`npm i`")),r.a.createElement("p",null,"then you are done"))}},{selector:"#models-section",content:"An empty model"},{selector:"#add-attribute-btn",content:"Click here to add attributes (props) to this model"},{selector:"#prop-tag-count",content:"This number shows the number of attributes (props) this models have"},{selector:"#generate-data-btn",content:"Click here to generate this model data with its related models"},{selector:"#create-a-relationship-btn",content:"Click here to create a 1:m relation with another model"},{selector:"#create-a-api-btn",content:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Click here to generate a json-server API from this model, after generation you just need to"),r.a.createElement("ul",null,r.a.createElement("li",null,"unzip the folder"),r.a.createElement("li",null,"`cd pollux-api`"),r.a.createElement("li",null,"`npm i`")),r.a.createElement("p",null,"then you are done"))}}].map((function(e){return Object(u.a)({},e,{style:{backgroundColor:"#0f131a"}})}));var Xe=Object(w.b)((function(e,t){var a=e.models,n=e.prop,r=e.relations;return Object(u.a)({},t,{models:a,prop:n,relations:r})}))((function(e){var t=e.models,a=e.prop,l=e.relations,o=Object(n.useState)(!1),c=Object(m.a)(o,2),i=c[0],w=c[1];return r.a.createElement(p.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement(v.a,{steps:Ye,isOpen:i,onRequestClose:function(){return w(!1)}}),r.a.createElement(E.a,{xs:24,sm:24,md:6},r.a.createElement(T,null),r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(f.a,{style:{marginRight:10},color:"violet",onClick:function(){return w(!0)},circle:!0,icon:r.a.createElement(b.a,{icon:"lightbulb-o"})}),r.a.createElement(Ue,null),r.a.createElement(Ke,null),r.a.createElement(g.a,{placement:"right",trigger:"hover",speaker:r.a.createElement(y.a,null,"Click here to generate a json-server API from this model")},r.a.createElement(f.a,{id:"create-a-api-btn-for-all",icon:r.a.createElement(b.a,{icon:"twinkle-star"}),style:{marginLeft:"5px"},color:"blue",circle:!0,onClick:function(){return function(e,t,a){if(0!==e.length){var n=e.reduce((function(n,r){var l=r.name,o=r.amount,c=r.id;return Object(u.a)({},n,Object(s.a)({},l,Oe(t[c],l,o,Ce({relations:a,models:e},c),xe({relations:a,prop:t},c),!0)))}),{});Me(e.map((function(e){return e.name})).join(" || "),null,null,null,null,n)}else d.a.warning("Plz load/create some models first")}(t,a,l)}})))),r.a.createElement(E.a,{xs:24,sm:24,md:18},r.a.createElement(Ie,{isTourOpen:i}))))}));var qe=function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement(h.a,{style:{margin:"1rem"}},r.a.createElement(E.a,{xs:24,sm:24,md:24,style:{marginTop:"20px"}},r.a.createElement(Xe,null))))},Ze=a(1633),Qe=a(1636),et=a(1642),tt=a(106),at=a(1638),nt=a(314),rt=a.n(nt),lt=new Map([["UUID",{groupName:"random",func:"uuid",propName:"id"}],["Email",{groupName:"internet",func:"email",propName:"email"}],["Password",{groupName:"internet",func:"password",propName:"password"}],["Full Name",{groupName:"name",func:"fullName",propName:"name"}],["Paragraphs",{groupName:"lorem",func:"paragraphs",propName:"paragraphs"}],["Paragraph",{groupName:"lorem",func:"paragraph",propName:"paragraph"}],["IP",{groupName:"internet",func:"ip",propName:"ip"}],["Image",{groupName:"random",func:"image",propName:"image"}]]),ot=function(e){var t=e.type,a=e.icon,n=e.label,l=e.func,o=Object(at.a)({item:{type:t,data:lt.get(t)||{propName:n,groupName:t,func:l}},collect:function(e){return{isDragging:e.isDragging()}}}),c=Object(m.a)(o,2),i=c[0].isDragging,s=c[1];return r.a.createElement("div",{ref:s},r.a.createElement(Y.a.Item,{className:rt.a.item,style:{cursor:i&&"grabbing",backgroundColor:"transparent",boxShadow:"none"}},r.a.createElement(b.a,{icon:a||"circle-o"})," ",n||t))},ct=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Common Items"),r.a.createElement(Y.a,null,r.a.createElement(ot,{type:"UUID",icon:"id-mapping"}),r.a.createElement(ot,{type:"Email",icon:"envelope"}),r.a.createElement(ot,{type:"Password",icon:"eye-slash"}),r.a.createElement(ot,{type:"Full Name",icon:"user"}),r.a.createElement(ot,{type:"Paragraphs",icon:"file-text"}),r.a.createElement(ot,{type:"Paragraph",icon:"file-text-o"}),r.a.createElement(ot,{type:"IP",icon:"circle-o"}),r.a.createElement(ot,{type:"Image",icon:"image"})))},it=Object(w.b)((function(e){return{faker:e.faker}}))((function(e){var t=e.faker,a=Object(n.useMemo)((function(){return t}),[t]),l=Object(n.useState)(""),o=Object(m.a)(l,2),c=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ct,null),r.a.createElement(Be.a,null),r.a.createElement("h4",null,"Other Items"),r.a.createElement(j.a,{style:{marginBottom:10},placeholder:"search in faker functions!",value:c,onChange:i}),r.a.createElement(Y.a,null,a.filter((function(e){return e.label.toLowerCase().includes(c.toLowerCase())})).map((function(e){var t=e.groupName,a=e.label,n=e.value;return r.a.createElement(ot,{type:t,label:a,func:n})}))))})),mt=Ze.a.Body,st=Qe.a.Item;var ut=function(){var e=Object(n.useState)({show:!1}),t=Object(m.a)(e,2),a=t[0],l=t[1],o=Object(n.useCallback)((function(e){return l({show:!e})}),[l]);return r.a.createElement(Ze.a,null,r.a.createElement(mt,null,r.a.createElement(Qe.a,null,r.a.createElement(tt.b,{to:"/",activeClassName:"active-route",exact:!0},r.a.createElement(st,{renderItem:function(){return r.a.createElement("span",{className:"rs-nav-item-content"},r.a.createElement(b.a,{icon:"home"})," Pollux")}})),r.a.createElement(tt.b,{to:"/generate",activeClassName:"active-route"},r.a.createElement(st,{renderItem:function(){return r.a.createElement("span",{className:"rs-nav-item-content"},r.a.createElement(b.a,{icon:"magic2"}),"Generate")}},"About"))),r.a.createElement(Qe.a,{pullRight:!0},r.a.createElement(st,{onClick:function(){return o(a.show)},icon:r.a.createElement(b.a,{icon:"creative"})},"Builder ",r.a.createElement(U.a,{content:"NEW!"})),r.a.createElement(et.a,{backdrop:!1,show:a.show,size:"xs",placement:"left",onHide:function(){return o(!0)}},r.a.createElement(et.a.Header,null,r.a.createElement(et.a.Title,null,r.a.createElement("h4",null,"Builder Items"),r.a.createElement("p",null,"You can drag and drop them into any model"))),r.a.createElement(et.a.Body,null,r.a.createElement(it,null))))))},dt=a(316),pt=a.n(dt),ht=a(317),Et=a.n(ht),ft=a(318),bt=a.n(ft),gt=a(319),yt=a.n(gt),vt=function(){return r.a.createElement("section",null,r.a.createElement(p.a,{fluid:!0,className:"site-layout-content"},r.a.createElement(h.a,null,r.a.createElement(E.a,{xs:1,sm:1,md:6}),r.a.createElement(E.a,{xs:24,sm:24,md:12},r.a.createElement(S.a,{bodyFill:!0,style:{display:"inline-block",width:"100%"}},r.a.createElement("img",{src:pt.a,height:"240",width:"100%",alt:"taken"}),r.a.createElement(S.a,{header:r.a.createElement("h1",null,"POLLUX"),style:{textAlign:"center"}},r.a.createElement("h4",null,r.a.createElement(b.a,{icon:"certificate",size:"2x"})," The app that generate fake data and"," ",r.a.createElement("a",{href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"},"json-server")," ","APIs")))),r.a.createElement(E.a,{xs:1,sm:1,md:6})),r.a.createElement(Be.a,null),r.a.createElement(h.a,null,r.a.createElement(E.a,{xs:1,sm:1,md:6}),r.a.createElement(E.a,{xs:24,sm:24,md:12},r.a.createElement("img",{src:Et.a,height:"240",width:"100%",alt:"taken"}),r.a.createElement(S.a,{bodyFill:!0,style:{display:"inline-block",width:"100%"}},r.a.createElement(S.a,{header:r.a.createElement("h1",null,"Prototype"),style:{textAlign:"center"}},r.a.createElement("h4",null,r.a.createElement(b.a,{icon:"certificate",size:"2x"})," Define prototypes and their properties")))),r.a.createElement(E.a,{xs:1,sm:1,md:6})),r.a.createElement(Be.a,null),r.a.createElement(h.a,null,r.a.createElement(E.a,{xs:1,sm:1,md:6}),r.a.createElement(E.a,{xs:24,sm:24,md:12},r.a.createElement("img",{src:yt.a,height:"240",width:"100%",alt:"taken"}),r.a.createElement(S.a,{bodyFill:!0,style:{display:"inline-block",width:"100%"}},r.a.createElement(S.a,{header:r.a.createElement("h1",null,"Generate"),style:{textAlign:"center"}},r.a.createElement("h4",null,r.a.createElement(b.a,{icon:"certificate",size:"2x"})," Generate fake data and"," ",r.a.createElement("a",{href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"},"json-server")," ","API's based on your prototypes")))),r.a.createElement(E.a,{xs:1,sm:1,md:6})),r.a.createElement(Be.a,null),r.a.createElement(h.a,null,r.a.createElement(E.a,{xs:1,sm:1,md:6}),r.a.createElement(E.a,{xs:24,sm:24,md:12},r.a.createElement("img",{src:bt.a,height:"240",width:"100%",alt:"taken"}),r.a.createElement(S.a,{bodyFill:!0,style:{display:"inline-block",width:"100%"}},r.a.createElement(S.a,{header:r.a.createElement("h1",{style:{textAlign:"center"}},"Features")},r.a.createElement(q.a,{showIcon:!0,type:"info",title:r.a.createElement("h6",null,"Most of"," ",r.a.createElement("a",{href:"https://github.com/marak/Faker.js/",target:"_blank",rel:"noopener noreferrer"},"faker"),"'s functions")}),r.a.createElement(q.a,{showIcon:!0,type:"info",title:r.a.createElement("h6",null,r.a.createElement("a",{href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"},"json-server")," ","intergration")}),r.a.createElement(q.a,{showIcon:!0,type:"info",title:r.a.createElement("h6",null,"one to many relations between models")}),r.a.createElement(q.a,{showIcon:!0,type:"info",title:r.a.createElement("h6",null,"Drag Drop interface for selecting"," ",r.a.createElement("a",{href:"https://github.com/marak/Faker.js/",target:"_blank",rel:"noopener noreferrer"},"faker"),"'s functions in an easy way")}),r.a.createElement(q.a,{showIcon:!0,type:"warning",title:r.a.createElement("h6",null,"lost? checkout these videos"," ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=Vh0M0oNo7Gc&t=9s",target:"_blank",rel:"noopener noreferrer"},"#1")," ",r.a.createElement("a",{href:"https://youtu.be/4Kwv98RDoSM",target:"_blank",rel:"noopener noreferrer"},"#2")," ",r.a.createElement("a",{href:"https://youtu.be/Vh0M0oNo7Gc",target:"_blank",rel:"noopener noreferrer"},"#3")," ",r.a.createElement("a",{href:"https://youtu.be/M8XhhTzK00g",target:"_blank",rel:"noopener noreferrer"},"#4")," ","or click on the"," ",r.a.createElement(f.a,{icon:r.a.createElement(b.a,{icon:"twinkle-star"}),color:"blue",circle:!0})," ","icon")}),r.a.createElement(q.a,{showIcon:!0,type:"warning",title:r.a.createElement("h6",null,"Repo"," ",r.a.createElement("a",{href:"https://github.com/MohammedAl-Rowad/pollux",target:"_blank",rel:"noopener noreferrer"},"here"))})))),r.a.createElement(E.a,{xs:1,sm:1,md:6}))))},wt=function(){return r.a.createElement("section",{style:{textAlign:"center"}},"Made by ",r.a.createElement("b",null,"Rowad")," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/mohammed-al-rowad/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{size:"xs",icon:r.a.createElement(b.a,{icon:"linkedin-square"})})),"  ",r.a.createElement("a",{href:"https://github.com/MohammedAl-Rowad",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{size:"xs",icon:r.a.createElement(b.a,{icon:"github-alt"})})),"  ",r.a.createElement("a",{href:"https://www.youtube.com/channel/UC1Uw_GN4sodGisimwZNzMoA?view_as=subscriber",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{size:"xs",icon:r.a.createElement(b.a,{icon:"youtube-play"})})))},Ot=a(16);console.log("%c\n\n'########:::'#######::'##:::::::'##:::::::'##::::'##:'##::::'##:\n ##.... ##:'##.... ##: ##::::::: ##::::::: ##:::: ##:. ##::'##::\n ##:::: ##: ##:::: ##: ##::::::: ##::::::: ##:::: ##::. ##'##:::\n ########:: ##:::: ##: ##::::::: ##::::::: ##:::: ##:::. ###::::\n ##.....::: ##:::: ##: ##::::::: ##::::::: ##:::: ##::: ## ##:::\n ##:::::::: ##:::: ##: ##::::::: ##::::::: ##:::: ##:: ##:. ##::\n ##::::::::. #######:: ########: ########:. #######:: ##:::. ##:\n..::::::::::.......:::........::........:::.......:::..:::::..::\n","color: #4E7F97"),console.log("%cRepo: https://github.com/MohammedAl-Rowad/pollux","color: #4E7F97; font-size: 20px");var jt=function(){return r.a.createElement(tt.a,null,r.a.createElement(i.a,{backend:c.a,options:{enableMouseEvents:!0}},r.a.createElement(ut,null),r.a.createElement(Ot.a,{path:"/",exact:!0},r.a.createElement("main",null,r.a.createElement(vt,null),r.a.createElement(wt,null))),r.a.createElement(Ot.a,{path:"/generate"},r.a.createElement(qe,null),r.a.createElement(wt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var kt=a(47),Nt=[],xt=Object(u.a)({},fe.random),Ct=Object(u.a)({},fe.date);delete xt.objectElement,delete xt.arrayElement,delete Ct.between;var Mt=Object(u.a)({},fe.name);Mt.fullName=fe.name.findName,delete Mt.findName;var At={random:xt,name:Mt,address:fe.address,commerce:fe.commerce,company:fe.company,database:fe.database,date:Ct,finance:fe.finance,hacker:fe.hacker,image:fe.image,internet:fe.internet,lorem:fe.lorem,phone:fe.phone},Pt=Object.keys(At).map((function(e){return Object.keys(At[e]).map((function(t){return{groupName:e,label:function(){var e=t.replace(/([A-Z])/g," $1");return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))}(),value:t}}))})).reduce((function(e,t){return[].concat(Object(F.a)(e),Object(F.a)(t))}),[]),It={},Dt={},Tt=Object(kt.combineReducers)({models:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_MODEL":return[].concat(Object(F.a)(e),[Object(u.a)({},n,{amount:n.amount||10})]);case"DELETE_MODEL":return e.filter((function(e){return e.id!==n}));case"UPDATE_AMOUNT":var r=n.modelId,l=n.amount;return e.map((function(e){return e.id===r?Object(u.a)({},e,{amount:l}):Object(u.a)({},e)}));default:return e}},faker:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt;arguments.length>1&&arguments[1];return e},prop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RPOP_NAME":var a=t.payload,n=a.uuid,r=a.propName;return Object(u.a)({},e,Object(s.a)({},n,[].concat(Object(F.a)(e[n]||[]),[{propName:r,id:Object(M.a)()}])));case"JUST_ADD_PROP":var l=t.payload,o=l.uuid,c=l.props;return Object(u.a)({},e,Object(s.a)({},o,[].concat(Object(F.a)(e[o]||[]),Object(F.a)(c))));case"REMOVE_ALL_RPOPS":var i=t.payload;return delete e[i],Object(u.a)({},e);case"EDIT_PROP":var m=t.payload,d=m.id,p=m.propId,h=Object(De.a)(m,["id","propId"]),E=e[d].findIndex((function(e){return e.id===p})),f=Object(u.a)({},e[d].find((function(e){return e.id===p})),{},h);h.func||f.func||delete f.func;var b=e[d].filter((function(e){return e.id!==p}));return Object(u.a)({},e,Object(s.a)({},d,[].concat(Object(F.a)(b.slice(0,E)),[f],Object(F.a)(b.slice(E)))));case"DELETE_PROP":var g=t.payload,y=g.modelId,v=g.propId;return Object(u.a)({},e,Object(s.a)({},y,Object(F.a)(e[y].filter((function(e){return e.id!==v})))));default:return e}},relations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_RELATION":var r=n.distId,l=n.modelId;return Object(u.a)({},e,Object(s.a)({},l,[].concat(Object(F.a)(e[l]||[]),[r])));case"REMOVE_RELATION":var o=n.distId,c=n.modelId;return Object(u.a)({},e,Object(s.a)({},c,(e[c]||[]).filter((function(e){return o!==e}))));default:return e}}}),St=a(320),_t=Object(kt.createStore)(Tt,Object(St.composeWithDevTools)());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w.a,{store:_t},r.a.createElement(jt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},295:function(e,t,a){e.exports=a.p+"static/media/empty.7448158e.svg"},312:function(e,t,a){e.exports=a.p+"static/media/emptySave.10032122.svg"},313:function(e,t,a){e.exports=a.p+"static/media/loadModels.a2b0ac77.svg"},314:function(e,t,a){e.exports={item:"DraggableCommonProp_item__2XOIf"}},316:function(e,t,a){e.exports=a.p+"static/media/prototype.ea2fca44.svg"},317:function(e,t,a){e.exports=a.p+"static/media/prototype2.f4e51a29.svg"},318:function(e,t,a){e.exports=a.p+"static/media/features.ac13338d.svg"},319:function(e,t,a){e.exports=a.p+"static/media/box.d0bcb7b7.svg"},333:function(e,t,a){e.exports=a(1621)},338:function(e,t,a){},339:function(e,t,a){}},[[333,1,2]]]);
//# sourceMappingURL=main.10cc3843.chunk.js.map