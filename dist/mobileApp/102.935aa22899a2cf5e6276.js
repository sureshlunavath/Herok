(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{CFBS:function(l,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return r});var a,t=n("Ex5H"),o={STATION:"Station",GODAVARI:"Godavari",TELANGANA:"Telangana",KALESHWARAM:"Kaleshwaram",BASIN:"BASIN",SUBBASIN:"SUBBASIN",RAINFALL:"RAINFALL",STATE:"STATE",TAMILNADU:"TAMILNADU",DISTRICT:"DISTRICT"},u={COMPONENT:{SOILMOISTURE:"SOILMOISTURE"},VIEWS:{ADMIN:"ADMIN",BASIN:"BASIN"},API_MAPPING:{SOURCE:"comm/getrankwisesource1/",TABLE:"sm/aggregated",BREADCRUMB:"locations/heirarchy",LOCATION_TYPES:"comm/getLocTypes",HEATMAP:"sm/heatmap"},LOCATIONS:{TELANGANA:{NAME:o.TELANGANA,ADMIN:{UUID:"927b67e9-a2aa-46e9-99bc-41cf8c502668",PTYPE:"STATE"},BASIN:{UUID:"927b67e9-a2aa-46e9-99bc-41cf8c502668",PTYPE:"STATE"}},KALESHWARAM:{NAME:o.KALESHWARAM,ADMIN:{UUID:"",PTYPE:"STATE"},BASIN:{UUID:"",PTYPE:"BASIN"}},TAMILNADU:{NAME:o.TAMILNADU,ADMIN:{UUID:"e98cd5b7-6556-4c0f-a778-3429e1c14a6b",PTYPE:"STATE"},BASIN:{UUID:"e98cd5b7-6556-4c0f-a778-3429e1c14a6b",PTYPE:"STATE"}},GODAVARI:{NAME:o.GODAVARI,ADMIN:{UUID:"",PTYPE:"BASIN"},BASIN:{UUID:"5ddb60ef-aede-46ab-b319-e8e9c36fd715",PTYPE:"BASIN"}}},TIME_STEP_MAPPING:{yyyy:"YEARLY",yyyyMMdd:"DAILY",yyyyMM:"MONTHLY",season:"SESONALLY"},SOILMOISTURE_LAYERLIST:(a={},a[t.m.LOCATIONS.TAMILNADU]={},a[t.m.LOCATIONS.ALL]={"Soilmoisture Actual Heatmap":{component:t.m.COMPONENT.SOILMOISTURE,source:t.m.SOURCES.ALL,view:t.m.VIEWS.ALL,displayName:"Available Soil Moisture Heatmap",name:"Soilmoisture Actual Heatmap",visible:!0,layerptions_show_on_selector:!1,layer_name:"Soilmoisture Actual Heatmap",hasLegend:!0,legendName:"ASMP",key:"Soilmoisture Actual Heatmap",layeroptions_pane:"heatMap",layeroptions_min_zoom:t.g[t.m.LOCATIONS.RAINFALL].MIN,layeroptions_max_zoom:t.g[t.m.LOCATIONS.RAINFALL].MAX,group:"Soilmoisture HeatMap",group_type:"radio-deselect",layerServiceType:t.d.HEATMAP_LAYER,cqlfilter:null,type:t.d.HEATMAP_LAYER},"Soilmoisture Volume Heatmap":{component:t.m.COMPONENT.SOILMOISTURE,source:t.m.SOURCES.ALL,view:t.m.VIEWS.ALL,displayName:"Volumetric Soil Moisture Heatmap",name:"Soilmoisture Volume Heatmap",visible:!0,layerptions_show_on_selector:!1,layer_name:"Soilmoisture Volume Heatmap",hasLegend:!0,legendName:"VSMP",key:"Soilmoisture Volume Heatmap",layeroptions_pane:"heatMap",layeroptions_min_zoom:t.g[t.m.LOCATIONS.RAINFALL].MIN,layeroptions_max_zoom:t.g[t.m.LOCATIONS.RAINFALL].MAX,group:"Soilmoisture HeatMap",group_type:"radio-deselect",layerServiceType:t.d.HEATMAP_LAYER,cqlfilter:null,type:t.d.HEATMAP_LAYER}},a[t.m.LOCATIONS.GODAVARI]={},a)},r={VSMP:{Units:"Volumetric Soil Moisture (%)",colorValues:[{color:"#FFFFFF",backgroundColor:" #cc471d",text:"0 - 5"},{color:"#FFFFFF",backgroundColor:"#e45a0d",text:"5 - 10"},{color:"#FFFFFF",backgroundColor:"#f1b210",text:"10 - 15"},{color:"#000000",backgroundColor:"#fde313",text:"15 - 20"},{color:"#000000",backgroundColor:"#dfef10",text:"20 - 25"},{color:"#000000",backgroundColor:"#77bc06",text:"25 - 30"},{color:"#FFFFFF",backgroundColor:"#4c8505",text:"30 - 35"},{color:"#FFFFFF",backgroundColor:"#6ec382",text:"35 - 40"},{color:"#000000",backgroundColor:"#84f5f6",text:"40 - 45"},{color:"#FFFFFF",backgroundColor:"#47a5fe",text:"45 - 50"},{color:"#FFFFFF",backgroundColor:"#2758fd",text:"50 - 55"},{color:"#FFFFFF",backgroundColor:"#2849d4",text:"55 - 60"},{color:"#FFFFFF",backgroundColor:"#182e8f",text:"> 65"}]},ASMP:{Units:"Available Soil Moisture (%)",colorValues:[{color:"#FFFFFF",backgroundColor:" #cc471d",text:"0 - 5"},{color:"#FFFFFF",backgroundColor:"#e45a0d",text:"5 - 10"},{color:"#FFFFFF",backgroundColor:"#f1b210",text:"10 - 15"},{color:"#000000",backgroundColor:"#fde313",text:"15 - 20"},{color:"#000000",backgroundColor:"#dfef10",text:"20 - 25"},{color:"#000000",backgroundColor:"#77bc06",text:"25 - 30"},{color:"#FFFFFF",backgroundColor:"#4c8505",text:"30 - 35"},{color:"#FFFFFF",backgroundColor:"#6ec382",text:"35 - 40"},{color:"#000000",backgroundColor:"#84f5f6",text:"40 - 45"},{color:"#FFFFFF",backgroundColor:"#47a5fe",text:"45 - 50"},{color:"#FFFFFF",backgroundColor:"#2758fd",text:"50 - 55"},{color:"#FFFFFF",backgroundColor:"#2849d4",text:"55 - 60"},{color:"#FFFFFF",backgroundColor:"#182e8f",text:"> 65"}]}}},HgZ9:function(l,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){function l(l){this.spinnerService=l}return l.prototype.ngOnInit=function(){},l.prototype.ngOnChanges=function(l){l.show&&l.show.currentValue?this.startLoader():this.stopLoader()},l.prototype.startLoader=function(){this.spinnerService.startLoader(this.id)},l.prototype.stopLoader=function(){try{this.spinnerService.stopLoader(this.id)}catch(l){}},l}()},PMFU:function(l,e,n){"use strict";n.d(e,"a",function(){return o});var a=n("RShD"),t=n("CcnG"),o=function(){function l(){}return l.prototype.verifyAllParamsPresent=function(l,e){var n=!0,a=l.params;if(Object.keys(a).length>0){for(var t=0;t<e.length;t++){var o=e[t];if(-1==Object.keys(a).indexOf(o)&&(n=!1),!n)return}return n}return!1},l.prototype.formDefaultParams=function(l,e){var n={};if(!Object(a.d)(l)){for(var t=0,o=Object.keys(l);t<o.length;t++){var u=o[t];n[u]=l[u]}return n}},l.ngInjectableDef=t.cb({factory:function(){return new l},token:l,providedIn:"root"}),l}()},iCKj:function(l,e,n){"use strict";var a=n("CcnG"),t=n("FdbF"),o=n("iJXZ"),u=n("ZYjt");n("HgZ9"),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=a.zb({encapsulation:0,styles:[[""]],data:{}});function i(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,1,"ngx-ui-loader",[],null,null,null,t.b,t.a)),a.Ab(1,770048,null,0,o.i,[u.c,a.i,o.d],{fgsSize:[0,"fgsSize"],fgsType:[1,"fgsType"],loaderId:[2,"loaderId"]},null)],function(l,e){l(e,1,0,60,"fading-circle",e.component.id)},null)}},ocs2:function(l,e,n){"use strict";n.d(e,"a",function(){return a});var a={STATE_INFO:{NAME:"Andhra Pradesh",UUID:"",layerName:"",ZOOM_LEVEL:7,CENTER:[16.2,80.7],LAYER_NAME:"INDIA_STATE"},LOCATION_ZOOM_MAPPING:{district:10,mandal:12},"ANDHRA PRADESH_ZOOM_LEVEL":7,"ANDHRA PRADESH_CENTER":[16.2,80.7],INDIA_ZOOM_LEVEL:1,INDIA_CENTER:[17.8,79.06],TELANGANA_ZOOM_LEVEL:8,TELANGANA_BASIN_ZOOM_LEVEL:8,TELANGANA_CENTER:[17.638787196813762,78.55861865667588],GODAVARI_CENTER:[18.387606552494624,77.74710395866968],GODAVARI_ZOOM_LEVEL:7,STATE_LATLONG_MAPPING:{"ANDHRA PRADESH":[16.2,80.7],KARNATAKA:[14.6,76.2],ORISSA:[20.4,85],KERALA:[10.4,76.4],TELANGANA:[17.8,79.06]},IDTOUUIDMAPPING:{akbm:"2b9beab2-1495-4f05-b4da-29761ebeb2ee",chka:"91220b18-e7bb-4b27-82bc-496fe0d887e2",maks:"5c372a24-576e-4429-bce7-8d6244247ef8",dvaj:"fad63e29-1ee0-48fc-be22-210a45a0dc46",kskc:"da54f44f-c15e-40ac-92c5-aaeb41696990"},IDTOSTATENAMEMAPPING:{akbm:"ANDHRA PRADESH",chka:"KARNATAKA",maks:"KERALA",dvaj:"ORISSA",kskc:"TELANGANA"},STATETOUUIDMAPPING:{"ANDHRA PRADESH":"2b9beab2-1495-4f05-b4da-29761ebeb2ee",KARNATAKA:"91220b18-e7bb-4b27-82bc-496fe0d887e2",KERALA:"5c372a24-576e-4429-bce7-8d6244247ef8",ORISSA:"fad63e29-1ee0-48fc-be22-210a45a0dc46",TELANGANA:"da54f44f-c15e-40ac-92c5-aaeb41696990",TAMILNADU:"e98cd5b7-6556-4c0f-a778-3429e1c14a6b"},IDTOLOCATIONMAPPING:{akbm:"Vijayawada",chka:"Bangalore",maks:"Thiruvananthapuram",dvaj:"Bhubaneswar",kskc:"Hyderabad"},STATENAME:"ANDHRA PRADESH",CHENNAI_TAMILNADU_BASIN:"9e376091-6011-44d9-8596-c028cb1e17a1"}},"v2k/":function(l,e,n){"use strict";n.r(e);var a=n("CcnG"),t=function(){return function(){}}(),o=n("pMnS"),u=n("gIcY"),r=n("iCKj"),i=n("HgZ9"),s=n("iJXZ"),c=n("flh0"),b=n("CYUB"),d=n("8gHh"),p=n("JKE8"),A=n("x0dF"),m=n("XRV1"),f=n("QqAL"),T=n("jmvC"),S=n("SZbH"),g=n("ZYCi"),h=n("q4vc"),I=n("4GxJ"),y=n("t/Na"),N=n("wJPv"),E=n("0gkA"),F=n("cDaN"),L=n("Gy67"),v=n("b67C"),C=n("zKbe"),O=n("Io2v"),M=n("6QN/"),P=n("62rn"),J=n("gM3f"),D=n("m1qP"),R=n("VvG+"),U=n("Ip0R"),k=n("W52G"),w=n("PMFU"),x={pType:"STATE",cType:"DISTRICT",location:"TAMILNADU",uuid:n("7Amg").c.STATETOUUIDMAPPING.TAMILNADU},B=["pType","cType","uuid","location"],_=n("ocs2"),H=n("Ex5H"),G=n("CFBS"),V=n("Q5G+"),Y=function(){return(Y=Object.assign||function(l){for(var e,n=1,a=arguments.length;n<a;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(l[t]=e[t]);return l}).apply(this,arguments)},j=function(l,e,n,a){return new(n||(n=Promise))(function(t,o){function u(l){try{i(a.next(l))}catch(e){o(e)}}function r(l){try{i(a.throw(l))}catch(e){o(e)}}function i(l){l.done?t(l.value):new n(function(e){e(l.value)}).then(u,r)}i((a=a.apply(l,e||[])).next())})},K=function(l,e){var n,a,t,o,u={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,a&&(t=2&o[0]?a.return:o[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,o[1])).done)return t;switch(a=0,t&&(o=[2&o[0],t.value]),o[0]){case 0:case 1:t=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,a=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(t=(t=u.trys).length>0&&t[t.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!t||o[1]>t[0]&&o[1]<t[3])){u.label=o[1];break}if(6===o[0]&&u.label<t[1]){u.label=t[1],t=o;break}if(t&&u.label<t[2]){u.label=t[2],u.ops.push(o);break}t[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(l,u)}catch(r){o=[6,r],a=0}finally{n=t=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},Z=function(){function l(l,e,n,a,t,o,u,r,i,s){this.router=l,this.route=e,this.misService=n,this.locationService=a,this.dataService=t,this.tableEventsHandler=o,this.utils=u,this.gisUtils=r,this.soilMoistureService=i,this.visibilityUtils=s,this.selectedComp="",this.newsBulletinData="",this.smtableData=[],this.selectedType="Realtime",this.smTableSpinner=!1,this.locTypes=["STATE","DISTRICT","BLOCK","SOILMOISTURE"],this.monthLabel={"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":" July","08":"August","09":"September",10:"October",11:"November",12:"December"},this.sourceList=[]}return l.prototype.ngOnInit=function(){return j(this,void 0,void 0,function(){return K(this,function(l){switch(l.label){case 0:return[4,this.getAndSetSource()];case 1:return l.sent(),this.subscribeParams(),[2]}})})},l.prototype.subscribeParams=function(){var l=this;this.route.paramMap.subscribe(function(e){l.urlParams=e.params;var n={};for(var a in e)e.hasOwnProperty(a)&&(n[a]=e[a]);var t=l.dataService.deepClone(x),o=l.locationService.formDefaultParams(t);l.locationService.verifyAllParamsPresent(n,JSON.parse(JSON.stringify(B)))?(l.generateBreadCrumb(),l.getSoilMoistureTable()):l.router.navigate(["tamilnadu","mis","missoilmoisture",o])}),this.tableEventsHandler.breadcrumbClicked.subscribe(function(e){l.tablebreadcrumbClick(e)})},l.prototype.tablebreadcrumbClick=function(l){var e=Y({},l);delete e.name,this.router.navigate(["tamilnadu","mis","missoilmoisture",{pType:e.parent,cType:e.child,location:e.location,uuid:e.uuid}])},l.prototype.generateBreadCrumb=function(){this.breadcrumb=[];for(var l=this.urlParams.location.split("&"),e=1;e<=l.length;e++){var n={name:l[e-1],parent:this.urlParams.pType.split("&").slice(0,e).join("&"),child:this.locTypes[this.locTypes.indexOf(this.urlParams.pType.split("&")[e-1])+1],uuid:this.urlParams.uuid.split("&").slice(0,e).join("&"),location:this.urlParams.location.split("&").slice(0,e).join("&")};this.breadcrumb.push(n)}},l.prototype.GoToGisView=function(){this.router.navigate(["tamilnadu","visibility","waterSupply","soilmoisture"])},l.prototype.onSourceChange=function(){this.getSoilMoistureTable()},l.prototype.toggleType=function(l){this.selectedType=l},l.prototype.getAndSetSource=function(){return j(this,void 0,void 0,function(){var l,e,n,a,t,o,u,r,i;return K(this,function(s){switch(s.label){case 0:return l=[],[4,this.soilMoistureService.get(G.c.API_MAPPING.SOURCE,G.c.COMPONENT.SOILMOISTURE+"/ADMIN_HIERARCHY/"+_.a.STATETOUUIDMAPPING.TAMILNADU).toPromise()];case 1:for(l=s.sent(),e=[],[],n=function(n){l.forEach(function(l){l.key==n&&e.push(l.key)})},a=0,t="ADMIN"==H.m.VIEWS.PROJECT?[H.m.SOURCES.NRSC,H.m.SOURCES.TNAU,H.m.SOURCES.IMD_GRID]:[H.m.SOURCES.NRSC,H.m.SOURCES.TNAU];a<t.length;a++)n(t[a]);return(o=l=e)&&o.length>0&&(-1!=(u=o.findIndex(function(l){return l.key==H.m.SOURCES.NRSC}))&&o.splice(u,1),r=0,this.sourceList=o,i=H.m.SOURCES.NRSC,r=this.sourceList.findIndex(function(l){return i.key==l}),this.selectedSource=this.sourceList[r=-1==r?0:r]),[2]}})})},l.prototype.soilmoistureTableRowClick=function(l){if(null!=l&&null!=l.values&&l.values.length>1&&null!=l.values[0]&&"BLOCK"!=this.urlParams.cType){var e=this.urlParams.pType+"&"+this.urlParams.cType,n=this.locTypes[this.locTypes.indexOf(this.urlParams.cType)+1],a=this.urlParams.location+"&"+l.values[0].toUpperCase();this.router.navigate(["tamilnadu","mis","missoilmoisture",{pType:e,cType:n,location:a,uuid:this.urlParams.uuid+"&"+l.values[1]}])}else console.log("Incorrect parameters of the clicked column. Cannot drill down into the location.")},l.prototype.getSoilMoistureTable=function(){var l=this,e=this.urlParams.pType.split("&"),n=e[e.length-1],a=this.urlParams.uuid.split("&"),t=a[a.length-1];this.smTableSpinner=!0,this.smtableData=[];var o={aggr:"LATEST",cType:this.urlParams.cType,eDate:this.misService.getRainfallDates()[1],format:"DAILY",pEUUID:_.a.STATETOUUIDMAPPING.TAMILNADU,viewPEUUID:_.a.STATETOUUIDMAPPING.TAMILNADU,pType:n,pUUID:t,sDate:this.misService.getRainfallDates()[0],src:this.selectedSource,depth:"NRSC"==this.selectedSource?"50.0":"15.0",view:"ADMIN"};this.sourceBased="NRSC"==this.selectedSource?"50":"15",this.misService.getMISSoilmoistureData(o).subscribe(function(e){for(var n=0;n<e.length;n++){var a={},t=e[n];"TOTAL"!=t.name&&(a.name=t.name?t.name:"-",a.entityId=t.uuid?t.uuid:"-",a.asm5=t.asmLevel?t.asmLevel:"0",a.asmp5=t.asmPerc?t.asmPerc:"0",l.smtableData.push(a)),"TOTAL"==t.name&&(a.name=t.name?t.name:"-",a.entityId="-1",a.asm5=t.asmLevel?t.asmLevel:"0",a.asmp5=t.asmPerc?t.asmPerc:"0",l.smtableData.push(a))}l.tableEventsHandler.data.next(l.smtableData),l.smTableSpinner=!1,l.smTableConfig={tableInfo:{type:"dataTable",title:""},css:{tableClass:"table table-bordered table-striped align-items-center",theadClass:" text-center"},sortOptions:{sortIndex:0,sortType:"asc"},searchFilter:!0,breadcrumbCons:{show:!0,queryparams:[]},downloadButton:{display:!0,text:"Download",align:"right",order:"order-md-2"},downloadOptions:[{downloadType:"xls",downloadFileName:"Soil Moisture",downloadAll:!0,metaData:!1},{downloadType:"pdf",downloadFileName:"Soil Moisture",downloadAll:!0,metaData:!1}],paginatorOptions:{visible:!1,limit:15,maxSize:5,dropdownOptions:[{value:15,display:"15"},{value:25,display:"25"},{value:50,display:"50"},{value:-1,display:"All"}]},tableHeaderFixerInfo:{headerFix:!1,colFix:!1,noOfCol:2},totalRow:{position:"bottom",displayAs:"TOTAL",name:"TOTAL",colspan:2,jsonKey:"-1"},indexCons:{show:!0,class:"tc-bg-01",colspan:2},columns:[{name:"District",jsonKey:{path:"name##entityId"},dataType:"LOCATION",defaultValue:"-",class:"tc-bg-05"},{name:"Available Soil Moisture (mm) till "+l.sourceBased+"cms depth",jsonKey:{path:"asm5"},dataType:"TEXT",defaultValue:"-",class:"tc-bg-05"},{name:"Available Soil Moisture  (%) till "+l.sourceBased+"cms depth ",jsonKey:{path:"asmp5"},dataType:"TEXT",defaultValue:"-",class:"tc-bg-05"}]},l.smTableConfig.breadcrumbCons.queryparams=l.breadcrumb,l.smTableConfig.columns[0].name=l.urlParams.cType.toUpperCase(),"BLOCK"==l.urlParams.cType&&(l.smTableConfig.columns[0].dataType="TEXT")})},l.prototype.getsideBarStatus=function(l){this.sidebarstatus=l},l}(),q=a.zb({encapsulation:0,styles:[[""]],data:{}});function z(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,3,"option",[],null,null,null,null,null)),a.Ab(1,147456,null,0,u.u,[a.n,a.N,[2,u.y]],{ngValue:[0,"ngValue"]},null),a.Ab(2,147456,null,0,u.G,[a.n,a.N,[8,null]],{ngValue:[0,"ngValue"]},null),(l()(),a.Sb(3,null,[" "," "]))],function(l,e){l(e,1,0,e.context.$implicit),l(e,2,0,e.context.$implicit)},function(l,e){l(e,3,0,e.context.$implicit)})}function X(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,1,"app-spinner",[],null,null,null,r.b,r.a)),a.Ab(1,638976,null,0,i.a,[s.d],{id:[0,"id"],show:[1,"show"]},null)],function(l,e){l(e,1,0,"soilmoisture",e.component.smTableSpinner)},null)}function W(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,1,"lib-data-table",[["tableId","smMISTable"],["tableType","dataTable"]],null,[[null,"onRowClick"]],function(l,e,n){var a=!0;return"onRowClick"===e&&(a=!1!==l.component.soilmoistureTableRowClick(n)&&a),a},c.b,c.a)),a.Ab(1,770048,null,0,b.a,[d.a,p.a],{tableConfig:[0,"tableConfig"],data:[1,"data"],tableType:[2,"tableType"],tableId:[3,"tableId"],metaData:[4,"metaData"]},{onRowClick:"onRowClick"})],function(l,e){var n=e.component;l(e,1,0,n.smTableConfig,n.smtableData,"dataTable","smMISTable",a.ob)},null)}function Q(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,42,"div",[["class","vh-100 d-flex flex-column bg-light"]],null,null,null,null,null)),(l()(),a.Bb(1,0,null,null,1,"app-tnw-navbar",[],null,[[null,"sidebarstatus"]],function(l,e,n){var a=!0;return"sidebarstatus"===e&&(a=!1!==l.component.getsideBarStatus(n)&&a),a},A.b,A.a)),a.Ab(2,114688,null,0,m.a,[f.a,T.a,S.j,g.p,h.a,I.C,y.c],null,{sidebarstatus:"sidebarstatus"}),(l()(),a.Bb(3,0,null,null,39,"div",[["class","tn-main-container"]],null,null,null,null,null)),(l()(),a.Bb(4,0,null,null,1,"app-side-bar",[["class","app-sidebar"]],null,null,null,N.b,N.a)),a.Ab(5,4964352,null,0,E.a,[F.a,L.a,g.p,v.a,g.a,h.a,C.a,h.a,I.C,T.a,f.a,S.j,O.a,I.C,M.a,P.a,J.a,D.a,R.a],{sidebarstate:[0,"sidebarstate"]},null),(l()(),a.Bb(6,0,null,null,36,"main",[["class","container-fluid"]],null,null,null,null,null)),(l()(),a.Bb(7,0,null,null,13,"div",[["class","page-header"]],null,null,null,null,null)),(l()(),a.Bb(8,0,null,null,6,"div",[["class","page-header-start"]],null,null,null,null,null)),(l()(),a.Bb(9,0,null,null,5,"div",[["class","btn-group btn-group-warning"]],null,null,null,null,null)),(l()(),a.Bb(10,0,null,null,4,"div",[["class","page-title d-flex text-nowrap"]],null,null,null,null,null)),(l()(),a.Bb(11,0,null,null,1,"span",[["class","icon pr-2"]],null,null,null,null,null)),(l()(),a.Bb(12,0,null,null,0,"i",[["class","tnw-soil"]],null,null,null,null,null)),(l()(),a.Bb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.Sb(-1,null,[" SOIL MOISTURE "])),(l()(),a.Bb(15,0,null,null,5,"div",[["class","page-header-end"]],null,null,null,null,null)),(l()(),a.Bb(16,0,null,null,4,"div",[["class","btn-group btn-group-warning "]],null,null,null,null,null)),(l()(),a.Bb(17,0,null,null,1,"button",[["class","btn "]],null,[[null,"click"]],function(l,e,n){var a=!0;return"click"===e&&(a=!1!==l.component.GoToGisView()&&a),a},null,null)),(l()(),a.Sb(-1,null,["GIS"])),(l()(),a.Bb(19,0,null,null,1,"button",[["class","btn active"]],null,null,null,null,null)),(l()(),a.Sb(-1,null,["MIS"])),(l()(),a.Bb(21,0,null,null,21,"div",[["class","card  bg-white mt-3"]],null,null,null,null,null)),(l()(),a.Bb(22,0,null,null,15,"div",[["class","card-filter"]],null,null,null,null,null)),(l()(),a.Bb(23,0,null,null,14,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a.Bb(24,0,null,null,13,"div",[["class","form-row align-items-end"]],null,null,null,null,null)),(l()(),a.Bb(25,0,null,null,12,"div",[["class","form-group col-lg-2 mb-lg-0 mb-sm-4"]],null,null,null,null,null)),(l()(),a.Bb(26,0,null,null,3,"label",[["for",""]],null,null,null,null,null)),(l()(),a.Sb(-1,null,["Select Source "])),(l()(),a.Bb(28,0,null,null,1,"span",[["class","mandatory-asterisk"]],null,null,null,null,null)),(l()(),a.Sb(-1,null,["*"])),(l()(),a.Bb(30,0,null,null,7,"select",[["class","form-control"],["id","name"],["name","name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,e,n){var t=!0,o=l.component;return"change"===e&&(t=!1!==a.Lb(l,31).onChange(n.target.value)&&t),"blur"===e&&(t=!1!==a.Lb(l,31).onTouched()&&t),"ngModelChange"===e&&(t=!1!==(o.selectedSource=n)&&t),"ngModelChange"===e&&(t=!1!==o.onSourceChange()&&t),t},null,null)),a.Ab(31,16384,null,0,u.y,[a.N,a.n],null,null),a.Pb(1024,null,u.o,function(l){return[l]},[u.y]),a.Ab(33,671744,null,0,u.t,[[8,null],[8,null],[8,null],[6,u.o]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Pb(2048,null,u.p,null,[u.t]),a.Ab(35,16384,null,0,u.q,[[4,u.p]],null,null),(l()(),a.sb(16777216,null,null,1,null,z)),a.Ab(37,278528,null,0,U.p,[a.Y,a.V,a.x],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Bb(38,0,null,null,4,"div",[["class","card-body p-2"]],null,null,null,null,null)),(l()(),a.sb(16777216,null,null,1,null,X)),a.Ab(40,16384,null,0,U.q,[a.Y,a.V],{ngIf:[0,"ngIf"]},null),(l()(),a.sb(16777216,null,null,1,null,W)),a.Ab(42,16384,null,0,U.q,[a.Y,a.V],{ngIf:[0,"ngIf"]},null)],function(l,e){var n=e.component;l(e,2,0),l(e,5,0,n.sidebarstatus),l(e,33,0,"name",n.selectedSource),l(e,37,0,n.sourceList),l(e,40,0,n.smTableSpinner),l(e,42,0,null!=n.smtableData&&n.smtableData.length>0)},function(l,e){l(e,30,0,a.Lb(e,35).ngClassUntouched,a.Lb(e,35).ngClassTouched,a.Lb(e,35).ngClassPristine,a.Lb(e,35).ngClassDirty,a.Lb(e,35).ngClassValid,a.Lb(e,35).ngClassInvalid,a.Lb(e,35).ngClassPending)})}function $(l){return a.Ub(0,[(l()(),a.Bb(0,0,null,null,1,"app-mis-soilmoisture",[],null,null,null,Q,q)),a.Ab(1,114688,null,0,Z,[g.p,g.a,k.a,w.a,J.a,d.a,h.a,M.a,V.a,v.a],null,null)],function(l,e){l(e,1,0)},null)}var ll=a.xb("app-mis-soilmoisture",Z,$,{},{},[]),el=n("9AJC"),nl=n("atuK"),al=n("lfa1"),tl=n("I5r7"),ol=n("xkgV"),ul=n("uBvM"),rl=n("eDkP"),il=n("Fzqc"),sl=n("4tE/"),cl=n("M2Lx"),bl=n("Wf4p"),dl=n("NJnL"),pl=n("lqqz"),Al=n("ARl4"),ml=n("LUGh"),fl=function(){return function(){}}(),Tl=n("JUyF"),Sl=n("dU2b"),gl=n("sAfe"),hl=n("dENO"),Il=n("QpxQ"),yl=n("ZYjt"),Nl=n("dWZg"),El=n("4c35"),Fl=n("qAlS"),Ll=n("/VYK"),vl=n("seP3"),Cl=n("b716"),Ol=n("FpXt"),Ml=n("FTix"),Pl=n("cZPp"),Jl=n("tIxg"),Dl=n("t9UD"),Rl=n("E6Y+");n.d(e,"MisSoilmoistureModuleNgFactory",function(){return Ul});var Ul=a.yb(t,[],function(l){return a.Ib([a.Jb(512,a.l,a.lb,[[8,[o.a,ll,el.a,el.b,el.j,el.k,el.g,el.h,el.i,nl.a,nl.b,nl.c,al.a]],[3,a.l],a.D]),a.Jb(4608,U.s,U.r,[a.z,[2,U.L]]),a.Jb(4608,u.E,u.E,[]),a.Jb(4608,I.C,I.C,[a.l,a.v,I.sb,I.D]),a.Jb(4608,u.f,u.f,[]),a.Jb(4608,y.j,y.p,[U.d,a.I,y.n]),a.Jb(4608,y.q,y.q,[y.j,y.o]),a.Jb(5120,y.a,function(l){return[l]},[y.q]),a.Jb(4608,y.m,y.m,[]),a.Jb(6144,y.k,null,[y.m]),a.Jb(4608,y.i,y.i,[y.k]),a.Jb(6144,y.b,null,[y.i]),a.Jb(4608,y.f,y.l,[y.b,a.v]),a.Jb(4608,y.c,y.c,[y.f]),a.Jb(4608,tl.b,tl.b,[]),a.Jb(4608,ol.e,ol.e,[]),a.Jb(4608,ul.a,ul.a,[]),a.Jb(4608,d.a,d.a,[]),a.Jb(4608,rl.a,rl.a,[rl.g,rl.c,a.l,rl.f,rl.d,a.v,a.F,U.d,il.b,[2,U.l]]),a.Jb(5120,rl.h,rl.i,[rl.a]),a.Jb(5120,sl.b,sl.c,[rl.a]),a.Jb(4608,cl.c,cl.c,[]),a.Jb(4608,bl.b,bl.b,[]),a.Jb(4608,dl.a,dl.a,[a.O]),a.Jb(4608,pl.a,pl.a,[a.l,a.F,a.v,dl.a,a.g]),a.Jb(4608,Al.w,Al.w,[]),a.Jb(4608,Al.y,Al.y,[]),a.Jb(4608,Al.a,Al.a,[]),a.Jb(4608,Al.e,Al.e,[]),a.Jb(4608,Al.c,Al.c,[]),a.Jb(4608,Al.f,Al.f,[]),a.Jb(4608,Al.x,Al.x,[Al.y,Al.f]),a.Jb(4608,ml.a,ml.a,[]),a.Jb(4608,k.a,k.a,[y.c,h.a,L.a]),a.Jb(4608,U.e,U.e,[a.z]),a.Jb(1073742336,U.c,U.c,[]),a.Jb(1073742336,u.A,u.A,[]),a.Jb(1073742336,u.l,u.l,[]),a.Jb(1073742336,g.r,g.r,[[2,g.x],[2,g.p]]),a.Jb(1073742336,fl,fl,[]),a.Jb(1073742336,s.b,s.b,[]),a.Jb(1073742336,I.c,I.c,[]),a.Jb(1073742336,I.g,I.g,[]),a.Jb(1073742336,I.h,I.h,[]),a.Jb(1073742336,I.l,I.l,[]),a.Jb(1073742336,I.m,I.m,[]),a.Jb(1073742336,I.s,I.s,[]),a.Jb(1073742336,I.y,I.y,[]),a.Jb(1073742336,I.E,I.E,[]),a.Jb(1073742336,I.I,I.I,[]),a.Jb(1073742336,I.L,I.L,[]),a.Jb(1073742336,I.O,I.O,[]),a.Jb(1073742336,I.R,I.R,[]),a.Jb(1073742336,I.X,I.X,[]),a.Jb(1073742336,I.bb,I.bb,[]),a.Jb(1073742336,I.eb,I.eb,[]),a.Jb(1073742336,I.fb,I.fb,[]),a.Jb(1073742336,I.F,I.F,[]),a.Jb(1073742336,u.w,u.w,[]),a.Jb(1073742336,y.e,y.e,[]),a.Jb(1073742336,y.d,y.d,[]),a.Jb(1073742336,Al.d,Al.d,[]),a.Jb(1073742336,Tl.b,Tl.b,[]),a.Jb(1073742336,tl.a,tl.a,[]),a.Jb(1073742336,ol.a,ol.a,[]),a.Jb(1073742336,Sl.a,Sl.a,[]),a.Jb(1073742336,gl.a,gl.a,[]),a.Jb(1073742336,hl.a,hl.a,[]),a.Jb(1073742336,Il.c,Il.c,[]),a.Jb(1073742336,il.a,il.a,[]),a.Jb(1073742336,bl.j,bl.j,[[2,bl.c],[2,yl.g]]),a.Jb(1073742336,Nl.b,Nl.b,[]),a.Jb(1073742336,bl.t,bl.t,[]),a.Jb(1073742336,bl.r,bl.r,[]),a.Jb(1073742336,bl.o,bl.o,[]),a.Jb(1073742336,El.b,El.b,[]),a.Jb(1073742336,Fl.b,Fl.b,[]),a.Jb(1073742336,rl.e,rl.e,[]),a.Jb(1073742336,sl.e,sl.e,[]),a.Jb(1073742336,Ll.c,Ll.c,[]),a.Jb(1073742336,cl.d,cl.d,[]),a.Jb(1073742336,vl.d,vl.d,[]),a.Jb(1073742336,Cl.b,Cl.b,[]),a.Jb(1073742336,Ol.a,Ol.a,[]),a.Jb(1073742336,Ml.a,Ml.a,[]),a.Jb(1073742336,Pl.a,Pl.a,[]),a.Jb(1073742336,Jl.a,Jl.a,[]),a.Jb(1073742336,Dl.a,Dl.a,[]),a.Jb(1073742336,Rl.a,Rl.a,[]),a.Jb(1073742336,t,t,[]),a.Jb(1024,g.n,function(){return[[{path:"",component:Z}],[]]},[]),a.Jb(256,y.n,"XSRF-TOKEN",[]),a.Jb(256,y.o,"X-XSRF-TOKEN",[]),a.Jb(256,Il.d,Il.e,[]),a.Jb(256,s.h,{bgsColor:"red",bgsPosition:"bottom-center",bgsSize:10,bgsType:"rectangle-bounce",fgsType:"chasing-dots",pbDirection:"ltr",hasProgressBar:!1,bgsOpacity:0},[])])})}}]);