(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{HgZ9:function(l,n,e){"use strict";e.d(n,"a",function(){return a});var a=function(){function l(l){this.spinnerService=l}return l.prototype.ngOnInit=function(){},l.prototype.ngOnChanges=function(l){l.show&&l.show.currentValue?this.startLoader():this.stopLoader()},l.prototype.startLoader=function(){this.spinnerService.startLoader(this.id)},l.prototype.stopLoader=function(){try{this.spinnerService.stopLoader(this.id)}catch(l){}},l}()},PMFU:function(l,n,e){"use strict";e.d(n,"a",function(){return u});var a=e("RShD"),t=e("CcnG"),u=function(){function l(){}return l.prototype.verifyAllParamsPresent=function(l,n){var e=!0,a=l.params;if(Object.keys(a).length>0){for(var t=0;t<n.length;t++){var u=n[t];if(-1==Object.keys(a).indexOf(u)&&(e=!1),!e)return}return e}return!1},l.prototype.formDefaultParams=function(l,n){var e={};if(!Object(a.d)(l)){for(var t=0,u=Object.keys(l);t<u.length;t++){var i=u[t];e[i]=l[i]}return e}},l.ngInjectableDef=t.cb({factory:function(){return new l},token:l,providedIn:"root"}),l}()},iCKj:function(l,n,e){"use strict";var a=e("CcnG"),t=e("FdbF"),u=e("iJXZ"),i=e("ZYjt");e("HgZ9"),e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o});var r=a.zb({encapsulation:0,styles:[[""]],data:{}});function o(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,1,"ngx-ui-loader",[],null,null,null,t.b,t.a)),a.Ab(1,770048,null,0,u.i,[i.c,a.i,u.d],{fgsSize:[0,"fgsSize"],fgsType:[1,"fgsType"],loaderId:[2,"loaderId"]},null)],function(l,n){l(n,1,0,60,"fading-circle",n.component.id)},null)}},liCR:function(l,n,e){"use strict";e.r(n);var a=e("CcnG"),t=function(){return function(){}}(),u=e("pMnS"),i=e("gIcY"),r=e("iCKj"),o=e("HgZ9"),s=e("iJXZ"),b=e("flh0"),c=e("CYUB"),p=e("8gHh"),d=e("JKE8"),f=e("x0dF"),m=e("XRV1"),h=e("QqAL"),T=e("jmvC"),A=e("SZbH"),g=e("ZYCi"),y=e("q4vc"),v=e("4GxJ"),E=e("t/Na"),S=e("wJPv"),J=e("0gkA"),I=e("cDaN"),C=e("Gy67"),N=e("b67C"),O=e("zKbe"),D=e("Io2v"),L=e("6QN/"),P=e("62rn"),R=e("gM3f"),w=e("m1qP"),M=e("VvG+"),U=e("Ip0R"),k=e("W52G"),B=e("PMFU"),x={pType:"STATE",cType:"DISTRICT",location:"TAMILNADU",uuid:e("7Amg").c.STATETOUUIDMAPPING.TAMILNADU},V=["pType","cType","uuid","location"],G=e("ocs2"),j=e("Ex5H"),F=e("CFBS"),_=e("PzTR"),H=e("MAUo"),K=function(){return(K=Object.assign||function(l){for(var n,e=1,a=arguments.length;e<a;e++)for(var t in n=arguments[e])Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t]);return l}).apply(this,arguments)},Z=function(l,n,e,a){return new(e||(e=Promise))(function(t,u){function i(l){try{o(a.next(l))}catch(n){u(n)}}function r(l){try{o(a.throw(l))}catch(n){u(n)}}function o(l){l.done?t(l.value):new e(function(n){n(l.value)}).then(i,r)}o((a=a.apply(l,n||[])).next())})},q=function(l,n){var e,a,t,u,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return u={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function r(u){return function(r){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,a&&(t=2&u[0]?a.return:u[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,u[1])).done)return t;switch(a=0,t&&(u=[2&u[0],t.value]),u[0]){case 0:case 1:t=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,a=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(t=(t=i.trys).length>0&&t[t.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!t||u[1]>t[0]&&u[1]<t[3])){i.label=u[1];break}if(6===u[0]&&i.label<t[1]){i.label=t[1],t=u;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(u);break}t[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(l,i)}catch(r){u=[6,r],a=0}finally{e=t=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,r])}}},z=function(){function l(l,n,e,a,t,u,i,r){this.router=l,this.route=n,this.misService=e,this.locationService=a,this.dataService=t,this.tableEventsHandler=u,this.evapotranspirationDataService=i,this.visibilityUtils=r,this.selectedComp="",this.newsBulletinData="",this.ETtableData=[],this.selectedType="Realtime",this.etTableSpinner=!1,this.locTypes=["STATE","DISTRICT","BLOCK"],this.monthLabel={"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":" July","08":"August","09":"September",10:"October",11:"November",12:"December"},this.sourceList=[]}return l.prototype.ngOnInit=function(){return Z(this,void 0,void 0,function(){return q(this,function(l){switch(l.label){case 0:return[4,this.getAndSetSource()];case 1:return l.sent(),this.subscribeParams(),[2]}})})},l.prototype.subscribeParams=function(){var l=this;this.route.paramMap.subscribe(function(n){l.urlParams=n.params;var e={};for(var a in n)n.hasOwnProperty(a)&&(e[a]=n[a]);var t=l.dataService.deepClone(x),u=l.locationService.formDefaultParams(t);l.locationService.verifyAllParamsPresent(e,JSON.parse(JSON.stringify(V)))?(l.generateBreadCrumb(),l.getEtTable()):l.router.navigate(["tamilnadu","mis","misevapotranspiration",u])}),this.tableEventsHandler.breadcrumbClicked.subscribe(function(n){l.tablebreadcrumbClick(n)})},l.prototype.tablebreadcrumbClick=function(l){var n=K({},l);delete n.name,this.router.navigate(["tamilnadu","mis","misevapotranspiration",{pType:n.parent,cType:n.child,location:n.location,uuid:n.uuid}])},l.prototype.generateBreadCrumb=function(){this.breadcrumb=[];for(var l=this.urlParams.location.split("&"),n=1;n<=l.length;n++){var e={name:l[n-1],parent:this.urlParams.pType.split("&").slice(0,n).join("&"),child:this.locTypes[this.locTypes.indexOf(this.urlParams.pType.split("&")[n-1])+1],uuid:this.urlParams.uuid.split("&").slice(0,n).join("&"),location:this.urlParams.location.split("&").slice(0,n).join("&")};this.breadcrumb.push(e)}},l.prototype.GoToGisView=function(){this.router.navigate(["tamilnadu","visibility","waterSupply","evapotranspiration"])},l.prototype.onSourceChange=function(){this.getEtTable()},l.prototype.toggleType=function(l){this.selectedType=l},l.prototype.getAndSetSource=function(){return Z(this,void 0,void 0,function(){var l,n,e,a,t,u,i,r,o;return q(this,function(s){switch(s.label){case 0:return l=[],[4,this.evapotranspirationDataService.get(F.c.API_MAPPING.SOURCE,H.b.COMPONENT.EVAPOTRANSPIRATION+"/ADMIN_HIERARCHY/"+G.a.STATETOUUIDMAPPING.TAMILNADU).toPromise()];case 1:for(l=s.sent(),n=[],[],e=function(e){l.forEach(function(l){l.key==e&&n.push(l.key)})},a=0,t="ADMIN"==j.m.VIEWS.PROJECT?[j.m.SOURCES.NRSC,j.m.SOURCES.TNSMART,j.m.SOURCES.IMD_GRID]:[j.m.SOURCES.NRSC,j.m.SOURCES.TNSMART];a<t.length;a++)e(t[a]);return(u=l=n)&&u.length>0&&(-1!=(i=u.findIndex(function(l){return l.key==j.m.SOURCES.NRSC}))&&u.splice(i,1),r=0,this.sourceList=u,o=j.m.SOURCES.NRSC,r=this.sourceList.findIndex(function(l){return o.key==l}),this.selectedSource=this.sourceList[r=-1==r?0:r]),[2]}})})},l.prototype.EtTableRowClick=function(l){if(null!=l&&null!=l.values&&l.values.length>1&&null!=l.values[0]&&"BLOCK"!=this.urlParams.cType){var n=this.urlParams.pType+"&"+this.urlParams.cType,e=this.locTypes[this.locTypes.indexOf(this.urlParams.cType)+1],a=this.urlParams.location+"&"+l.values[0].toUpperCase();this.router.navigate(["tamilnadu","mis","misevapotranspiration",{pType:n,cType:e,location:a,uuid:this.urlParams.uuid+"&"+l.values[1]}])}else console.log("Incorrect parameters of the clicked column. Cannot drill down into the location.")},l.prototype.getEtTable=function(){var l=this,n=this.urlParams.pType.split("&"),e=n[n.length-1],a=this.urlParams.uuid.split("&"),t=a[a.length-1];this.etTableSpinner=!0,this.ETtableData=[];var u={cType:this.urlParams.cType,eDate:this.misService.getRainfallDates()[1],format:"yyyyMMdd",pEUUID:G.a.STATETOUUIDMAPPING.TAMILNADU,lType:e,lUUID:t,sDate:this.misService.getRainfallDates()[0],src:this.selectedSource};this.misService.getMISEtData(u).subscribe(function(n){for(var e=0;e<n.length;e++){var a={},t=n[e];"TOTAL"!=t.name&&(a.name=t.name?t.name:"-",a.entityId=t.uuid?t.uuid:"-",a.etVolume=t.etVolume?l.visibilityUtils.getDecimalNumber(t.etVolume,4):"0",a.etLevel=t.etLevel?l.visibilityUtils.getDecimalNumber(t.etLevel,4):"0",l.ETtableData.push(a)),"TOTAL"==t.name&&(a.name=t.name?t.name:"-",a.entityId="-1",a.etVolume=t.etVolume?l.visibilityUtils.getDecimalNumber(t.etVolume,4):"0",a.etLevel=t.etLevel?l.visibilityUtils.getDecimalNumber(t.etLevel,4):"0",l.ETtableData.push(a))}l.tableEventsHandler.data.next(l.ETtableData),l.etTableSpinner=!1,l.EtTableConfig={tableInfo:{type:"dataTable",title:""},css:{tableClass:"table table-bordered table-striped align-items-center",theadClass:" text-center"},sortOptions:{sortIndex:0,sortType:"asc"},searchFilter:!0,breadcrumbCons:{show:!0,queryparams:[]},downloadButton:{display:!0,text:"Download",align:"right",order:"order-md-2"},downloadOptions:[{downloadType:"xls",downloadFileName:"Evapotranspiration",downloadAll:!0,metaData:!1},{downloadType:"pdf",downloadFileName:"Evapotranspiration",downloadAll:!0,metaData:!1}],paginatorOptions:{visible:!1,limit:15,maxSize:5,dropdownOptions:[{value:15,display:"15"},{value:25,display:"25"},{value:50,display:"50"},{value:-1,display:"All"}]},tableHeaderFixerInfo:{headerFix:!1,colFix:!1,noOfCol:2},totalRow:{position:"bottom",displayAs:"Summary",name:"TOTAL",colspan:2,jsonKey:"-1"},indexCons:{show:!0,class:"tc-bg-01"},columns:[{name:"District",jsonKey:{path:"name##entityId"},dataType:"LOCATION",defaultValue:"-",class:"tc-bg-05"},{name:"ET Level (mm)",jsonKey:{path:"etLevel"},dataType:"TEXT",defaultValue:"-",class:"tc-bg-05"},{name:"ET Volume (MCFT)",jsonKey:{path:"etVolume"},dataType:"TEXT",defaultValue:"-",class:"tc-bg-05"}]},l.EtTableConfig.breadcrumbCons.queryparams=l.breadcrumb,l.EtTableConfig.columns[0].name=l.urlParams.cType.toUpperCase(),"BLOCK"==l.urlParams.cType&&(l.EtTableConfig.columns[0].dataType="TEXT")})},l.prototype.getsideBarStatus=function(l){this.sidebarstatus=l},l}(),X=a.zb({encapsulation:0,styles:[[""]],data:{}});function Y(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,3,"option",[],null,null,null,null,null)),a.Ab(1,147456,null,0,i.u,[a.n,a.N,[2,i.y]],{ngValue:[0,"ngValue"]},null),a.Ab(2,147456,null,0,i.G,[a.n,a.N,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),a.Sb(3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit)})}function Q(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,1,"app-spinner",[],null,null,null,r.b,r.a)),a.Ab(1,638976,null,0,o.a,[s.d],{id:[0,"id"],show:[1,"show"]},null)],function(l,n){l(n,1,0,"ET",n.component.etTableSpinner)},null)}function W(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,1,"lib-data-table",[["tableId","EtMISTable"],["tableType","dataTable"]],null,[[null,"onRowClick"]],function(l,n,e){var a=!0;return"onRowClick"===n&&(a=!1!==l.component.EtTableRowClick(e)&&a),a},b.b,b.a)),a.Ab(1,770048,null,0,c.a,[p.a,d.a],{tableConfig:[0,"tableConfig"],data:[1,"data"],tableType:[2,"tableType"],tableId:[3,"tableId"],metaData:[4,"metaData"]},{onRowClick:"onRowClick"})],function(l,n){var e=n.component;l(n,1,0,e.EtTableConfig,e.ETtableData,"dataTable","EtMISTable",a.ob)},null)}function $(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,42,"div",[["class","vh-100 d-flex flex-column bg-light"]],null,null,null,null,null)),(l()(),a.Bb(1,0,null,null,1,"app-tnw-navbar",[],null,[[null,"sidebarstatus"]],function(l,n,e){var a=!0;return"sidebarstatus"===n&&(a=!1!==l.component.getsideBarStatus(e)&&a),a},f.b,f.a)),a.Ab(2,114688,null,0,m.a,[h.a,T.a,A.j,g.p,y.a,v.C,E.c],null,{sidebarstatus:"sidebarstatus"}),(l()(),a.Bb(3,0,null,null,39,"div",[["class","tn-main-container"]],null,null,null,null,null)),(l()(),a.Bb(4,0,null,null,1,"app-side-bar",[["class","app-sidebar"]],null,null,null,S.b,S.a)),a.Ab(5,4964352,null,0,J.a,[I.a,C.a,g.p,N.a,g.a,y.a,O.a,y.a,v.C,T.a,h.a,A.j,D.a,v.C,L.a,P.a,R.a,w.a,M.a],{sidebarstate:[0,"sidebarstate"]},null),(l()(),a.Bb(6,0,null,null,36,"main",[["class","container-fluid"]],null,null,null,null,null)),(l()(),a.Bb(7,0,null,null,13,"div",[["class","page-header"]],null,null,null,null,null)),(l()(),a.Bb(8,0,null,null,6,"div",[["class","page-header-start"]],null,null,null,null,null)),(l()(),a.Bb(9,0,null,null,5,"div",[["class","btn-group btn-group-warning"]],null,null,null,null,null)),(l()(),a.Bb(10,0,null,null,4,"div",[["class","page-title d-flex text-nowrap"]],null,null,null,null,null)),(l()(),a.Bb(11,0,null,null,1,"span",[["class","icon pr-2"]],null,null,null,null,null)),(l()(),a.Bb(12,0,null,null,0,"i",[["class","tnw-et"]],null,null,null,null,null)),(l()(),a.Bb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Sb(-1,null,[" ET "])),(l()(),a.Bb(15,0,null,null,5,"div",[["class","page-header-end"]],null,null,null,null,null)),(l()(),a.Bb(16,0,null,null,4,"div",[["class","btn-group btn-group-warning "]],null,null,null,null,null)),(l()(),a.Bb(17,0,null,null,1,"button",[["class","btn "]],null,[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.GoToGisView()&&a),a},null,null)),(l()(),a.Sb(-1,null,["GIS"])),(l()(),a.Bb(19,0,null,null,1,"button",[["class","btn active"]],null,null,null,null,null)),(l()(),a.Sb(-1,null,["MIS"])),(l()(),a.Bb(21,0,null,null,21,"div",[["class","card  bg-white mt-3"]],null,null,null,null,null)),(l()(),a.Bb(22,0,null,null,15,"div",[["class","card-filter"]],null,null,null,null,null)),(l()(),a.Bb(23,0,null,null,14,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a.Bb(24,0,null,null,13,"div",[["class","form-row align-items-end"]],null,null,null,null,null)),(l()(),a.Bb(25,0,null,null,12,"div",[["class","form-group col-lg-2 mb-lg-0 mb-sm-4"]],null,null,null,null,null)),(l()(),a.Bb(26,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),a.Sb(-1,null,["Select Source "])),(l()(),a.Bb(28,0,null,null,1,"span",[["class","mandatory-asterisk"]],null,null,null,null,null)),(l()(),a.Sb(-1,null,["*"])),(l()(),a.Bb(30,0,null,null,7,"select",[["class","form-control"],["id","name"],["name","name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,u=l.component;return"change"===n&&(t=!1!==a.Lb(l,31).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==a.Lb(l,31).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(u.selectedSource=e)&&t),"ngModelChange"===n&&(t=!1!==u.onSourceChange()&&t),t},null,null)),a.Ab(31,16384,null,0,i.y,[a.N,a.n],null,null),a.Pb(1024,null,i.o,function(l){return[l]},[i.y]),a.Ab(33,671744,null,0,i.t,[[8,null],[8,null],[8,null],[6,i.o]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Pb(2048,null,i.p,null,[i.t]),a.Ab(35,16384,null,0,i.q,[[4,i.p]],null,null),(l()(),a.sb(16777216,null,null,1,null,Y)),a.Ab(37,278528,null,0,U.p,[a.Y,a.V,a.x],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Bb(38,0,null,null,4,"div",[["class","card-body p-2"]],null,null,null,null,null)),(l()(),a.sb(16777216,null,null,1,null,Q)),a.Ab(40,16384,null,0,U.q,[a.Y,a.V],{ngIf:[0,"ngIf"]},null),(l()(),a.sb(16777216,null,null,1,null,W)),a.Ab(42,16384,null,0,U.q,[a.Y,a.V],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0),l(n,5,0,e.sidebarstatus),l(n,33,0,"name",e.selectedSource),l(n,37,0,e.sourceList),l(n,40,0,e.etTableSpinner),l(n,42,0,null!=e.ETtableData&&e.ETtableData.length>0)},function(l,n){l(n,30,0,a.Lb(n,35).ngClassUntouched,a.Lb(n,35).ngClassTouched,a.Lb(n,35).ngClassPristine,a.Lb(n,35).ngClassDirty,a.Lb(n,35).ngClassValid,a.Lb(n,35).ngClassInvalid,a.Lb(n,35).ngClassPending)})}function ll(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,1,"app-mis-evapotranspiration",[],null,null,null,$,X)),a.Ab(1,114688,null,0,z,[g.p,g.a,k.a,B.a,R.a,p.a,_.a,N.a],null,null)],function(l,n){l(n,1,0)},null)}var nl=a.xb("app-mis-evapotranspiration",z,ll,{},{},[]),el=e("9AJC"),al=e("atuK"),tl=e("lfa1"),ul=e("I5r7"),il=e("xkgV"),rl=e("uBvM"),ol=e("eDkP"),sl=e("Fzqc"),bl=e("4tE/"),cl=e("M2Lx"),pl=e("Wf4p"),dl=e("NJnL"),fl=e("lqqz"),ml=e("ARl4"),hl=e("LUGh"),Tl=function(){return function(){}}(),Al=e("JUyF"),gl=e("dU2b"),yl=e("sAfe"),vl=e("dENO"),El=e("QpxQ"),Sl=e("ZYjt"),Jl=e("dWZg"),Il=e("4c35"),Cl=e("qAlS"),Nl=e("/VYK"),Ol=e("seP3"),Dl=e("b716"),Ll=e("FpXt"),Pl=e("FTix"),Rl=e("cZPp"),wl=e("tIxg"),Ml=e("t9UD"),Ul=e("E6Y+");e.d(n,"MisEvapotranspirationModuleNgFactory",function(){return kl});var kl=a.yb(t,[],function(l){return a.Ib([a.Jb(512,a.l,a.lb,[[8,[u.a,nl,el.a,el.b,el.j,el.k,el.g,el.h,el.i,al.a,al.b,al.c,tl.a]],[3,a.l],a.D]),a.Jb(4608,U.s,U.r,[a.z,[2,U.L]]),a.Jb(4608,i.E,i.E,[]),a.Jb(4608,v.C,v.C,[a.l,a.v,v.sb,v.D]),a.Jb(4608,i.f,i.f,[]),a.Jb(4608,E.j,E.p,[U.d,a.I,E.n]),a.Jb(4608,E.q,E.q,[E.j,E.o]),a.Jb(5120,E.a,function(l){return[l]},[E.q]),a.Jb(4608,E.m,E.m,[]),a.Jb(6144,E.k,null,[E.m]),a.Jb(4608,E.i,E.i,[E.k]),a.Jb(6144,E.b,null,[E.i]),a.Jb(4608,E.f,E.l,[E.b,a.v]),a.Jb(4608,E.c,E.c,[E.f]),a.Jb(4608,ul.b,ul.b,[]),a.Jb(4608,il.e,il.e,[]),a.Jb(4608,rl.a,rl.a,[]),a.Jb(4608,p.a,p.a,[]),a.Jb(4608,ol.a,ol.a,[ol.g,ol.c,a.l,ol.f,ol.d,a.v,a.F,U.d,sl.b,[2,U.l]]),a.Jb(5120,ol.h,ol.i,[ol.a]),a.Jb(5120,bl.b,bl.c,[ol.a]),a.Jb(4608,cl.c,cl.c,[]),a.Jb(4608,pl.b,pl.b,[]),a.Jb(4608,dl.a,dl.a,[a.O]),a.Jb(4608,fl.a,fl.a,[a.l,a.F,a.v,dl.a,a.g]),a.Jb(4608,ml.w,ml.w,[]),a.Jb(4608,ml.y,ml.y,[]),a.Jb(4608,ml.a,ml.a,[]),a.Jb(4608,ml.e,ml.e,[]),a.Jb(4608,ml.c,ml.c,[]),a.Jb(4608,ml.f,ml.f,[]),a.Jb(4608,ml.x,ml.x,[ml.y,ml.f]),a.Jb(4608,hl.a,hl.a,[]),a.Jb(4608,k.a,k.a,[E.c,y.a,C.a]),a.Jb(4608,U.e,U.e,[a.z]),a.Jb(1073742336,U.c,U.c,[]),a.Jb(1073742336,i.A,i.A,[]),a.Jb(1073742336,i.l,i.l,[]),a.Jb(1073742336,g.r,g.r,[[2,g.x],[2,g.p]]),a.Jb(1073742336,Tl,Tl,[]),a.Jb(1073742336,s.b,s.b,[]),a.Jb(1073742336,v.c,v.c,[]),a.Jb(1073742336,v.g,v.g,[]),a.Jb(1073742336,v.h,v.h,[]),a.Jb(1073742336,v.l,v.l,[]),a.Jb(1073742336,v.m,v.m,[]),a.Jb(1073742336,v.s,v.s,[]),a.Jb(1073742336,v.y,v.y,[]),a.Jb(1073742336,v.E,v.E,[]),a.Jb(1073742336,v.I,v.I,[]),a.Jb(1073742336,v.L,v.L,[]),a.Jb(1073742336,v.O,v.O,[]),a.Jb(1073742336,v.R,v.R,[]),a.Jb(1073742336,v.X,v.X,[]),a.Jb(1073742336,v.bb,v.bb,[]),a.Jb(1073742336,v.eb,v.eb,[]),a.Jb(1073742336,v.fb,v.fb,[]),a.Jb(1073742336,v.F,v.F,[]),a.Jb(1073742336,i.w,i.w,[]),a.Jb(1073742336,E.e,E.e,[]),a.Jb(1073742336,E.d,E.d,[]),a.Jb(1073742336,ml.d,ml.d,[]),a.Jb(1073742336,Al.b,Al.b,[]),a.Jb(1073742336,ul.a,ul.a,[]),a.Jb(1073742336,il.a,il.a,[]),a.Jb(1073742336,gl.a,gl.a,[]),a.Jb(1073742336,yl.a,yl.a,[]),a.Jb(1073742336,vl.a,vl.a,[]),a.Jb(1073742336,El.c,El.c,[]),a.Jb(1073742336,sl.a,sl.a,[]),a.Jb(1073742336,pl.j,pl.j,[[2,pl.c],[2,Sl.g]]),a.Jb(1073742336,Jl.b,Jl.b,[]),a.Jb(1073742336,pl.t,pl.t,[]),a.Jb(1073742336,pl.r,pl.r,[]),a.Jb(1073742336,pl.o,pl.o,[]),a.Jb(1073742336,Il.b,Il.b,[]),a.Jb(1073742336,Cl.b,Cl.b,[]),a.Jb(1073742336,ol.e,ol.e,[]),a.Jb(1073742336,bl.e,bl.e,[]),a.Jb(1073742336,Nl.c,Nl.c,[]),a.Jb(1073742336,cl.d,cl.d,[]),a.Jb(1073742336,Ol.d,Ol.d,[]),a.Jb(1073742336,Dl.b,Dl.b,[]),a.Jb(1073742336,Ll.a,Ll.a,[]),a.Jb(1073742336,Pl.a,Pl.a,[]),a.Jb(1073742336,Rl.a,Rl.a,[]),a.Jb(1073742336,wl.a,wl.a,[]),a.Jb(1073742336,Ml.a,Ml.a,[]),a.Jb(1073742336,Ul.a,Ul.a,[]),a.Jb(1073742336,t,t,[]),a.Jb(1024,g.n,function(){return[[{path:"",component:z}],[]]},[]),a.Jb(256,E.n,"XSRF-TOKEN",[]),a.Jb(256,E.o,"X-XSRF-TOKEN",[]),a.Jb(256,El.d,El.e,[]),a.Jb(256,s.h,{bgsColor:"red",bgsPosition:"bottom-center",bgsSize:10,bgsType:"rectangle-bounce",fgsType:"chasing-dots",pbDirection:"ltr",hasProgressBar:!1,bgsOpacity:0},[])])})},ocs2:function(l,n,e){"use strict";e.d(n,"a",function(){return a});var a={STATE_INFO:{NAME:"Andhra Pradesh",UUID:"",layerName:"",ZOOM_LEVEL:7,CENTER:[16.2,80.7],LAYER_NAME:"INDIA_STATE"},LOCATION_ZOOM_MAPPING:{district:10,mandal:12},"ANDHRA PRADESH_ZOOM_LEVEL":7,"ANDHRA PRADESH_CENTER":[16.2,80.7],INDIA_ZOOM_LEVEL:1,INDIA_CENTER:[17.8,79.06],TELANGANA_ZOOM_LEVEL:8,TELANGANA_BASIN_ZOOM_LEVEL:8,TELANGANA_CENTER:[17.638787196813762,78.55861865667588],GODAVARI_CENTER:[18.387606552494624,77.74710395866968],GODAVARI_ZOOM_LEVEL:7,STATE_LATLONG_MAPPING:{"ANDHRA PRADESH":[16.2,80.7],KARNATAKA:[14.6,76.2],ORISSA:[20.4,85],KERALA:[10.4,76.4],TELANGANA:[17.8,79.06]},IDTOUUIDMAPPING:{akbm:"2b9beab2-1495-4f05-b4da-29761ebeb2ee",chka:"91220b18-e7bb-4b27-82bc-496fe0d887e2",maks:"5c372a24-576e-4429-bce7-8d6244247ef8",dvaj:"fad63e29-1ee0-48fc-be22-210a45a0dc46",kskc:"da54f44f-c15e-40ac-92c5-aaeb41696990"},IDTOSTATENAMEMAPPING:{akbm:"ANDHRA PRADESH",chka:"KARNATAKA",maks:"KERALA",dvaj:"ORISSA",kskc:"TELANGANA"},STATETOUUIDMAPPING:{"ANDHRA PRADESH":"2b9beab2-1495-4f05-b4da-29761ebeb2ee",KARNATAKA:"91220b18-e7bb-4b27-82bc-496fe0d887e2",KERALA:"5c372a24-576e-4429-bce7-8d6244247ef8",ORISSA:"fad63e29-1ee0-48fc-be22-210a45a0dc46",TELANGANA:"da54f44f-c15e-40ac-92c5-aaeb41696990",TAMILNADU:"e98cd5b7-6556-4c0f-a778-3429e1c14a6b"},IDTOLOCATIONMAPPING:{akbm:"Vijayawada",chka:"Bangalore",maks:"Thiruvananthapuram",dvaj:"Bhubaneswar",kskc:"Hyderabad"},STATENAME:"ANDHRA PRADESH",CHENNAI_TAMILNADU_BASIN:"9e376091-6011-44d9-8596-c028cb1e17a1"}}}]);