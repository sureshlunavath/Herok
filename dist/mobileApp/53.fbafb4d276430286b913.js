(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"6QN/":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("26FU"),o=n("K9Ia"),i=n("7Amg"),a=n("CcnG"),s=n("t/Na"),u=function(){function t(t){this.http=t,this.selectedParams=new r.a({}),this.newsBulletinData=new r.a({GROUNDWATER:[],RIVER_GAUGE:[],RAINFALL:[]}),this.selectedHeatMap=new r.a({}),this.navigatedLayer=new r.a({}),this.sidebarComponentStatus=new r.a(!1),this.sidebarMenuStatus=new r.a(!1),this.sidebarHoveringStatus=new r.a(!1),this.districtClicked=new o.a,this.mapObj=new r.a({}),this.currentComponent=new r.a(null),this.selectedLocAndView=new r.a({}),this.forecastLength=new r.a(null),this.queryParams=new r.a({}),this.latLong=new r.a(null),this.adminBasin=new r.a(!0),this.imdEcmwf=new r.a("IMD"),this.shortLongRange=new r.a(null),this.labelStringValue=new r.a(null),this.blockNo=new r.a(null),this.minMax=new r.a("Max"),this.blocksArray=new r.a(null),this.detEnsmbl=new r.a("deterministic"),this.meanMedian=new r.a("mean"),this.index=new o.a,this.timestamp=new r.a(null),this.playButton=new r.a(null),this.mapLayerData=new r.a(null),this.modelDate=new r.a(null),this.layerList=new r.a([]),this.otherOptions=new r.a(null),this.searchBox=new r.a(null),this.thresholdMap=new r.a({}),this.basinClicked=new o.a,this.popUpData=new r.a({location:"Vijayawada"}),this.map=new r.a(null),this.currentPlayPosition=new r.a(null),this.selectedMiniMap=new r.a(null),this.mapFlag=new r.a(null),this.paramsforDrought=new r.a({}),this.districtClickedDrought=new r.a({}),this.filterLocation=new r.a(null),this.isDashboardSelected=new r.a(!0),this.pointLayerParams=new r.a({}),this.dateRangeDefaultValue=new r.a([]),this.reverNetworkDateRange=new r.a(null)}return t.prototype.setNewsBulletinData=function(t){this.newsBulletinData.next(t)},t.prototype.getNewsBulletinData=function(){return this.newsBulletinData.asObservable()},t.prototype.sendNavigatedLayer=function(t){this.navigatedLayer.next(t)},t.prototype.getNavigatedLayer=function(){return this.navigatedLayer.asObservable()},t.prototype.setSelectedParams=function(t){this.selectedParams.next(t)},t.prototype.getSelectedParams=function(){return this.selectedParams.asObservable()},t.prototype.setSelectedHeatMap=function(t){this.selectedHeatMap.next(t)},t.prototype.getSelectedHeatMap=function(){return this.selectedHeatMap.asObservable()},t.prototype.setQueryParamsDrought=function(t){this.paramsforDrought.next(t)},t.prototype.getQueryParamsDrought=function(){return this.paramsforDrought.asObservable()},t.prototype.getQueryParamsDroughtValue=function(){return this.paramsforDrought.value},t.prototype.setdistrictDrought=function(t){this.districtClickedDrought.next(t)},t.prototype.getdistrictDrought=function(){return this.districtClickedDrought.asObservable()},t.prototype.setDateRangeforRiverFlow=function(t){this.reverNetworkDateRange.next(t)},t.prototype.getDateRangeforRiverFlow=function(){return this.reverNetworkDateRange.asObservable()},t.prototype.setDateRangeDefaultValue=function(t){this.dateRangeDefaultValue.next(t)},t.prototype.getDateRangeDefaultValue=function(){return this.dateRangeDefaultValue.asObservable()},t.prototype.setPointLayerParams=function(t){this.pointLayerParams.next(t)},t.prototype.getPointLayerParams=function(){return this.pointLayerParams.asObservable()},t.prototype.currentDayTimestep=function(t){var e=new Date(t);e.setHours(5),e.setMinutes(30),e.setSeconds(0);var n=e.getTime().toString();return Number(n.substring(0,10)+"000")},t.prototype.getCurrentDayWithTime=function(){var t=new Date;return t.setHours(5),t.setMinutes(30),t.setSeconds(0),t.getTime()},t.prototype.setVisibilitySidebarStatus=function(t){this.sidebarComponentStatus.next(t)},t.prototype.getVisibilitySidebarStatus=function(){return this.sidebarComponentStatus.asObservable()},t.prototype.setVisibilitySidebarMenuStatus=function(t){this.sidebarMenuStatus.next(t)},t.prototype.getVisibilitySidebarMenuStatus=function(){return this.sidebarMenuStatus.asObservable()},t.prototype.setSidebarHoveringStatus=function(t){this.sidebarHoveringStatus.next(t)},t.prototype.getSidebarHoveringStatus=function(){return this.sidebarHoveringStatus.asObservable()},t.prototype.setDistrictClicked=function(t){this.districtClicked.next(t)},t.prototype.getDistrictClicked=function(){return this.districtClicked.asObservable()},t.prototype.setMapObj=function(t){this.mapObj.next(t)},t.prototype.getMapObj=function(){return this.mapObj.asObservable()},t.prototype.setCurrentComponent=function(t){this.currentComponent.next(t)},t.prototype.getCurrentComponent=function(){return this.currentComponent.asObservable()},t.prototype.setSelectedLocationAndView=function(t){this.selectedLocAndView.next(t)},t.prototype.getSelectedLocationAndView=function(){return this.selectedLocAndView.asObservable()},t.prototype.setForecastLengthChanged=function(t){this.forecastLength.next(t)},t.prototype.getForecastLengthChanged=function(){return this.forecastLength.asObservable()},t.prototype.setQueryParams=function(t){this.queryParams.next(t)},t.prototype.getQueryParams=function(){return this.queryParams.asObservable()},t.prototype.setLatLong=function(t){this.latLong.next(t)},t.prototype.getLatLong=function(){return this.latLong.asObservable()},t.prototype.getStateUUID=function(t){return i.c.IDTOUUIDMAPPING[t]},t.prototype.getStateName=function(t){return i.c.IDTOSTATENAMEMAPPING[t]},t.prototype.setAdminBasinToggle=function(t){this.adminBasin.next(t)},t.prototype.getAdminBasinToggle=function(){return this.adminBasin.asObservable()},t.prototype.setImdEcmwf=function(t){this.imdEcmwf.next(t)},t.prototype.getIdmEcmwf=function(){return this.imdEcmwf.asObservable()},t.prototype.setSRLRToggle=function(t){this.shortLongRange.next(t)},t.prototype.getSRLRToggle=function(){return this.shortLongRange.asObservable()},t.prototype.setLabelString=function(t){this.labelStringValue.next(t)},t.prototype.getLabelString=function(){return this.labelStringValue.asObservable()},t.prototype.getBlockNumber=function(){return this.blockNo.asObservable()},t.prototype.setBlockNumber=function(t){this.blockNo.next(t)},t.prototype.setBlocksArray=function(t){this.blocksArray.next(t)},t.prototype.getBlocksArray=function(){return this.blocksArray.asObservable()},t.prototype.getDeterministicOrEnsemble=function(){return this.detEnsmbl.asObservable()},t.prototype.setDetermisnisticOrEnsemble=function(t){this.detEnsmbl.next(t)},t.prototype.getmeanMedian=function(){return this.meanMedian.asObservable()},t.prototype.setmeanMedian=function(t){this.meanMedian.next(t)},t.prototype.setIndex=function(t){this.index.next(t)},t.prototype.setTimestamp=function(t){this.timestamp.next(t)},t.prototype.setPlayButton=function(t){this.playButton.next(t)},t.prototype.getPlayButton=function(){return this.playButton.asObservable()},t.prototype.get24HrsTimeStamps=function(){var t=(new Date).getTime(),e=new Date(t);e.setHours(5,30,0,0);for(var n=e.getTime(),r=Math.floor((t-n)/216e5),o={},i=0;i<4;i++)o[i]=n+216e5*(i+r);return o[4]=o[0],o},t.prototype.get10DaysTimeStamps=function(){var t=(new Date).getTime(),e=new Date(t);e.setHours(5,30,0,0);for(var n=e.getTime(),r={},o=0;o<7;o++)r[o]=n+864e5*o;return r},t.prototype.setMapLayerData=function(t){this.mapLayerData.next(t)},t.prototype.getMapLayerData=function(){return this.mapLayerData.asObservable()},t.prototype.formatNames=function(t){if(void 0!==t&&null!=t)return t.replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})},t.prototype.titleCase=function(t){for(var e=t.toLowerCase().split(" "),n=0;n<e.length;n++)e[n]=e[n].charAt(0).toUpperCase()+e[n].substring(1);return e.join(" ")},t.prototype.setModelDate=function(t){this.modelDate.next(t)},t.prototype.getModelDate=function(){return this.modelDate.asObservable()},t.prototype.getLayerList=function(){return this.layerList.asObservable()},t.prototype.setLayerList=function(t){this.layerList.next(t)},t.prototype.getOtherOptions=function(){return this.otherOptions.asObservable()},t.prototype.setOtherOptions=function(t){this.otherOptions.next(t)},t.prototype.setSearchBox=function(t){this.searchBox.next(t)},t.prototype.getSearchBox=function(){return this.searchBox.asObservable()},t.prototype.setBasinClicked=function(t){this.basinClicked.next(t)},t.prototype.getBasinClicked=function(){return this.basinClicked.asObservable()},t.prototype.setPopUpData=function(t){this.popUpData.next(t)},t.prototype.getPopUpData=function(){return this.popUpData.asObservable()},t.prototype.setMainMap=function(t){this.map.next(t)},t.prototype.getMainMap=function(){return this.map.asObservable()},t.prototype.getCurrentPlayPosition=function(){return this.currentPlayPosition.asObservable()},t.prototype.setCurrentPlayPosition=function(t){this.currentPlayPosition.next(t)},t.prototype.setMinimapSelected=function(t){this.selectedMiniMap.next(t)},t.prototype.getMinimapSelected=function(){return this.selectedMiniMap.asObservable()},t.prototype.setInitialMap=function(t){this.mapFlag.next(t)},t.prototype.getInitialMap=function(){return this.mapFlag.asObservable()},t.prototype.setFilterLoc=function(t){this.filterLocation.next(t)},t.prototype.getFilterLoc=function(){return this.filterLocation.asObservable()},t.prototype.setIsDashboardSelected=function(t){this.isDashboardSelected.next(t)},t.prototype.getIsDashboardSelected=function(){return this.isDashboardSelected.asObservable()},t.prototype.getLocationLayerData=function(t,e,n){var r=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){r.getLocationLayerDataFromLatLong(e.coords.latitude,e.coords.longitude,n).subscribe(function(e){t(e)})},function(t){e(t)}):e("Geolocation is not supported by this browser.")},t.prototype.getLocationLayerDataFromLatLong=function(t,e,n){var r="https://geo.vassarlabs.com/geoserver/forecast/ows?service=WFS&version=1.0.0&request=GetFeature&maxFeatures=50&outputFormat=application%2Fjson&typeName=forecast:"+n;return r=r+"&CQL_FILTER=CONTAINS(geom, POINT ("+e.toString()+" "+t.toString()+"))",this.http.get(r)},t.prototype.getSortedListofDistrictsOfTamilnadu=function(t,e){return t.sort(function(t,n){var r=t[e].toUpperCase(),o=n[e].toUpperCase();return r<o?-1:r>o?1:0}),t},t.ngInjectableDef=a.cb({factory:function(){return new t(a.gb(s.c))},token:t,providedIn:"root"}),t}()},M01y:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("MCLT"),o=n("RShD"),i=function(){function t(){}return t.prototype.transform=function(t,e,n){return Object(r.isNullOrUndefined)(e)?t:this[e]?this[e](t,n):t},t.prototype.isValue=function(t){return Object(o.d)(t)?"-":t},t.prototype.formatNumberToCurrency=function(t,e){return t>=1e7?(t/1e7).toFixed(2)+" Cr":t<1e7&&t>=1e5?(t/1e5).toFixed(2)+" L":t},t.prototype.formatNumber=function(t){return Object(r.isNullOrUndefined)(t)?"-":Object(r.isNumber)(t)?"-0"==parseFloat(t.toFixed(3)).toLocaleString("en-IN")?0:parseFloat(t.toFixed(3)).toLocaleString("en-IN"):t},t.prototype.sortObjectBasedOnKey=function(t,e){var n=this;if("object"==typeof t){var o=t.slice(),i=!Object(r.isNullOrUndefined)(e)&&e.length>0?e[0]:null,a=!Object(r.isNullOrUndefined)(e)&&e.length>1?e[1]:"asc",s=!Object(r.isNullOrUndefined)(e)&&e.length>2?e[2]:[],u=["FIXEDBOTTOM","FIXEDTOP"];return o.sort(function(t,e){var o=Object(r.isNullOrUndefined)(t)||!i||Object(r.isNullOrUndefined)(t[i])?null:t[i],l=Object(r.isNullOrUndefined)(e)||!i||Object(r.isNullOrUndefined)(e[i])?null:e[i];if(!Object(r.isNullOrUndefined)(o)&&!Object(r.isNullOrUndefined)(l)){if(s.length>0){var p=s.map(function(t){return t.split("##")[0]}),c=s.map(function(t){return{}[t.split("##")[0]]=t.split("##")[1]}),f=p.indexOf(o),h=p.indexOf(l),d=-1!=f?u.indexOf(c[o]):-1,b=-1!=h?u.indexOf(c[l]):-1;return-1!=d||-1!=b?d-b:f-h}return n.applySortLogic(o,l,a)}})}return t},t.prototype.vassarTableSorting=function(t,e){var n=this;if(t){var o=t.slice(),i=e[0],a=Object(r.isNullOrUndefined)(i)||Object(r.isNullOrUndefined)(i.sortOrder)?[]:i.sortOrder.split("$$"),s=!Object(r.isNullOrUndefined)(i)&&i.multipleColumnSort;return a.length>0?(a=s?a:[a[0]],Object(r.isNullOrUndefined)(o)||Object(r.isNullOrUndefined)(a)||o.sort(function(t,e){for(var o=function(o){var i=a[o].split("##")[0],s=a[o].split("##")[1],u=t[i].sortOrderList||[],l=t[i].values,p=e[i].values;if(Object(r.isNullOrUndefined)(l)||Object(r.isNullOrUndefined)(p))return{value:Object(r.isNullOrUndefined)(l)?Object(r.isNullOrUndefined)(p)?0:-1:1};var c,f=u.map(function(t){return t.split("##")[0]});l=l.map(function(t){return"object"==typeof t?t.value.toString():t.toString()}),p=p.map(function(t){return"object"==typeof t?t.value.toString():t.toString()});var h=f.some(function(t){return-1!=l.indexOf(t)}),d=f.some(function(t){return-1!=p.indexOf(t)});if(c=h||d?1:0,h^d){var b=void 0,y=h?l.slice():p.slice();switch(b=u.filter(function(t){return-1!==y.indexOf(t.split("##")[0])}),(b=!Object(r.isNullOrUndefined)(b)&&b.length>1?b[0].split("##")[1]:"").toUpperCase()){case"FIXEDTOP":return{value:h?-1:1};case"FIXEDBOTTOM":return{value:h?1:-1};case"NEGLECT":break;default:return{value:h?-1:1}}}else if(h&&d){var g=l.filter(function(t){return-1!==u.indexOf(t)}),m=p.filter(function(t){return-1!==u.indexOf(t)});if(!Object(r.isNullOrUndefined)(g[0])&&!Object(r.isNullOrUndefined)(m[0]))return{value:u.indexOf(g[0])-u.indexOf(m[0])}}if(!c){var O=n.applySortLogic(l,p,s);if(0!==O)return{value:O}}},i=0;i<a.length;i++){var s=o(i);if("object"==typeof s)return s.value}})):console.log("Arguments or value might null or undefined"),o}return[]},t.prototype.applySortLogic=function(t,e,n){for(var o=Math.max(t.length,e.length),i=function(o){var i=t[o]instanceof Object?t[o].value:t[o],a=e[o]instanceof Object?e[o].value:e[o];if("boolean"==typeof i)return{value:i?1:a?-1:0};if("number"==typeof i)return{value:"asc"==n?i-a:a-i};if(!1===isNaN(i)||!1===isNaN(a))return"asc"==n?{value:parseFloat(i)>parseFloat(a)?-1:parseFloat(i)<parseFloat(a)?1:0}:{value:parseFloat(i)<parseFloat(a)?-1:parseFloat(i)>parseFloat(a)?1:0};if(!Object(r.isNullOrUndefined)(i)&&!Object(r.isNullOrUndefined)(a)){var s=[],u=[],l=a;for(i.replace(/(\d+)|(\D+)/g,function(t,e,n){s.push([e||1/0,n||""])}),l.replace(/(\d+)|(\D+)/g,function(t,e,n){u.push([e||1/0,n||""])});s.length&&u.length;){var p=s.shift(),c=u.shift(),f="asc"==n?p[0]-c[0]||p[1].localeCompare(c[1]):c[0]-p[0]||c[1].localeCompare(p[1]);if(f)return{value:f}}return{value:"asc"==n?s.length-u.length:u.length-s.length}}},a=0;a<o;a++){var s=i(a);if("object"==typeof s)return s.value}return 0},t.prototype.indianNumberFormat=function(t,e){return function(t){return null!=t?Number(t).toLocaleString("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}):Number(0).toLocaleString("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0})}},t.prototype.capitalize=function(t){if(null!=(t=t.replace(/[^\w\s]/gi,"").replace(/[0-9]/gi,""))&&null!=t)return t.replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})},t.prototype.sortheader=function(t,e){return t.sort(function(t,n){return t[e.property]<n[e.property]?-1*e.direction:t[e.property]>n[e.property]?1*e.direction:0})},t}()}}]);