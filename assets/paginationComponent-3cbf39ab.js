import{q as w,s as h,o as d,c as P,b as i,t as _,n as l,u as f,i as p,v as u,F as D,e as b,p as v,a as k}from"./index-aeefd941.js";import{_ as m}from"./imgDefault-f9756a0a.js";const y=w("statusStore",{state:()=>({isLoading:!1})}),c=y(),C=w("renderStore",{state:()=>({jData:[],filterData:[],page:{totalPage:0,hasPage:!1,nextPage:!0,currentPage:1,prePage:20,showPageStart:"",showPageEnd:""}}),actions:{getAllActivityData(){c.isLoading=!0;const a="https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?$format=JSON";h.get(a).then(e=>{this.jData=e.data,this.showPage(this.jData),c.isLoading=!1})},getAllSpotsData(){c.isLoading=!0;const a="https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?$format=JSON";h.get(a).then(e=>{this.jData=e.data,this.showPage(this.jData),c.isLoading=!1})},getAllHotelData(){c.isLoading=!0;const a="https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel?$format=JSON";h.get(a).then(e=>{this.jData=e.data,console.log(this.jData),this.showPage(this.jData),c.isLoading=!1})},getAllFoodsData(){c.isLoading=!0;const a="https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?$format=JSON";h.get(a).then(e=>{this.jData=e.data,this.showPage(this.jData),c.isLoading=!1})},showPage(a){const e=Math.ceil(a.length/20);this.page.totalPage=e,this.filterShowData(a)},filterShowData(a,e=1){this.filterData=[],this.page.currentPage=e,this.page.showPageStart=e-3,this.page.showPageEnd=e+3;const t=e*this.page.prePage-this.page.prePage,g=e*this.page.prePage-1;a.forEach((s,o)=>{o>=t&&o<=g&&this.filterData.push(s)})}}}),r=C(),z=w("filterStore",{state:()=>({areaSearch:"",class:""}),actions:{filterArea(a,e){this.areaSearch=e.target.value;let t="";switch(this.areaSearch){case"台北":t="Taipei";break;case"新北":t="NewTaipei";break;case"桃園":t="Taoyuan";break;case"新竹":t="Hsinchu";break;case"苗栗":t="MiaoliCounty";break;case"台中":t="Taichung";break;case"彰化":t="ChanghuaCounty";break;case"雲林":t="YunlinCounty";break;case"嘉義":t="ChiayiCounty";break;case"台南":t="Tainan";break;case"高雄":t="Kaohsiung";break;case"屏東":t="PingtungCounty";break;case"基隆":t="Keelung";break;case"宜蘭":t="YilanCounty";break;case"花蓮":t="HualienCounty";break;case"台東":t="TaitungCounty";break;case"南投":t="NantouCounty";break;case"澎湖":t="PenghuCounty";break;case"連江":t="LienchiangCounty";break;case"金門":t="KinmenCounty";break}a==="spot"?this.getSpotAreaData(t):a==="activity"?this.getActivityAreaData(t):a==="foods"?this.getFoodsAreaData(t):a==="hotel"&&this.getHotelAreaData(t)},filterClass(a,e){this.class=e.target.value;const t=a.filter(g=>g.Class===this.class||g.Class1===this.class||g.Class2===this.class||g.Class3===this.class);r.showPage(t)},getActivityAreaData(a){a===""&&r.getAllActivityData();const e=`https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/${a}?$format=JSON`;h.get(e).then(t=>{r.showPage(t.data)})},getSpotAreaData(a){a===""&&r.getAllSpotsData();const e=`https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${a}?$format=JSON`;h.get(e).then(t=>{r.showPage(t.data)})},getFoodsAreaData(a){a===""&&r.getAllFoodsData();const e=`https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/${a}?$format=JSON`;h.get(e).then(t=>{r.showPage(t.data)})},getHotelAreaData(a){a===""&&r.getAllHotelData();const e=`https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel/${a}?$format=JSON`;h.get(e).then(t=>{r.showPage(t.data)})}}});const x={props:{title:{type:String},img:{type:String}}},A={class:"hero"},T=["src","alt"];function $(a,e,t,g,s,o){return d(),P("div",A,[i("h2",null,_(t.title),1),i("img",{src:`../../img/${t.img}.png`,alt:`${t.title}banner`},null,8,T)])}const V=m(x,[["render",$]]);const H={props:{page:{type:Object,default(){return{}}}},data(){return{pagination:this.page}},methods:{switchPage(a){this.pagination.currentPage=a,this.goToTop(),this.disabled(),this.filterShowData()},switchHasPage(){this.pagination.currentPage===1?this.pagination.currentPage=1:this.pagination.currentPage=this.pagination.currentPage-1,this.goToTop(),this.disabled(),this.filterShowData()},switchNextPage(){this.pagination.currentPage===this.pagination.totalPage?this.pagination.currentPage=this.pagination.totalPage:this.pagination.currentPage=this.pagination.currentPage+1,this.goToTop(),this.disabled(),this.filterShowData()},disabled(){this.pagination.currentPage===1?this.pagination.hasPage=!1:this.pagination.hasPage=!0,this.pagination.currentPage===this.pagination.totalPage?this.pagination.nextPage=!1:this.pagination.nextPage=!0},filterShowData(){this.$emit("filter-data",this.pagination.currentPage)},goToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},S=a=>(v("data-v-412ec40c"),a=a(),k(),a),N={class:"pagination"},j={class:"page-item"},L={class:"page-item"},O=S(()=>i("span",{class:"mx-2 text-primary"},"...",-1)),J=[O],F=["onClick"],B={class:"page-item"},E=S(()=>i("span",{class:"mx-2 text-primary"},"...",-1)),I=[E],K={class:"page-item"};function M(a,e,t,g,s,o){return d(),P("ul",N,[i("li",{class:f(["page-item",{disabled:!s.pagination.hasPage}])},[i("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=l((...n)=>o.switchHasPage&&o.switchHasPage(...n),["prevent"]))},"＜")],2),p(i("li",j,[i("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=l(n=>o.switchPage(1),["prevent"]))}," 1 ")],512),[[u,s.pagination.currentPage>3]]),p(i("li",L,J,512),[[u,s.pagination.currentPage>4]]),(d(!0),P(D,null,b(s.pagination.totalPage,n=>p((d(),P("li",{class:f(["page-item",{active:s.pagination.currentPage===n}]),key:n},[i("a",{class:"page-link",href:"#",onClick:l(R=>o.switchPage(n),["prevent"])},_(n),9,F)],2)),[[u,n>s.pagination.showPageStart&&n<s.pagination.showPageEnd]])),128)),p(i("li",B,I,512),[[u,s.pagination.totalPage-s.pagination.currentPage>3]]),p(i("li",K,[i("a",{class:"page-link border",href:"#",onClick:e[2]||(e[2]=l(n=>o.switchPage(s.pagination.totalPage),["prevent"]))},_(s.pagination.totalPage),1)],512),[[u,s.pagination.totalPage-s.pagination.currentPage>2]]),i("li",{class:f(["page-item",{disabled:s.pagination.currentPage===s.pagination.totalPage}])},[i("a",{class:"page-link",href:"#",onClick:e[3]||(e[3]=l((...n)=>o.switchNextPage&&o.switchNextPage(...n),["prevent"]))},"＞")],2)])}const G=m(H,[["render",M],["__scopeId","data-v-412ec40c"]]);export{V as H,z as f,G as p,C as r,y as s};
