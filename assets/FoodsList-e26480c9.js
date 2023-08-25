import{S as k,_ as P}from"./goodIcon-e9ec51ec.js";import{S as $,N as I,P as x,a as C,A as N,b as O,c as F,d as T}from"./swiper-bundle-f5bfd748.js";import{r as p,o,d as u,w as f,c as a,e as B,F as R,b as t,n as V,t as i,f as m,p as w,a as g,l as c,g as A}from"./index-aeefd941.js";import{_ as y,a as D}from"./imgDefault-f9756a0a.js";import{_ as G}from"./landMark-c7acd33a.js";$.use([I,x,C,N,O]);const L={components:{Swiper:F,SwiperSlide:T},props:{city:{type:String},titleName:{type:String}},data(){return{spaceBetween:68,autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20,slidesPerGroup:1},480:{slidesPerView:2,spaceBetween:30,slidesPerGroup:2},640:{slidesPerView:3,spaceBetween:68,slidesPerGroup:3}},otherData:{}}},methods:{getOtherFoods(){const e=`https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?$filter=contains(Address, '${this.city}')&$top=15&$format=JSON`;this.$http.get(e).then(n=>{this.otherData=n.data})},getProduct(e){this.$router.push(`/foods/${e}`)}},created(){this.getOtherFoods()}},M=e=>(w("data-v-38a9c2bb"),e=e(),g(),e),U=["onClick"],E={class:"swiperImg"},J={key:0,src:D,alt:"預設圖片"},j=["src","alt"],q={class:"swiperTextContent"},z=M(()=>t("img",{class:"landMark",src:G,alt:"地點icon"},null,-1));function H(e,n,S,v,s,h){const l=p("swiper-slide"),_=p("swiper");return o(),u(_,{"slides-per-view":3,navigation:"",autoplay:!1,breakpoints:s.breakpoints},{default:f(()=>[(o(!0),a(R,null,B(s.otherData,(r,b)=>(o(),u(l,{class:"slide",key:b},{default:f(()=>[t("a",{href:"#",onClick:V(pt=>h.getProduct(r.RestaurantID),["prevent"])},[t("div",E,[r.Picture.PictureUrl1?(o(),a("img",{key:1,class:"swiperImg",src:r.Picture.PictureUrl1,alt:r.Picture.PictureDescription1},null,8,j)):(o(),a("img",J))]),t("div",q,[t("h4",null,i(r.RestaurantName),1),t("p",null,[z,m(" "+i(r.Address),1)])])],8,U)]),_:2},1024))),128))]),_:1},8,["breakpoints"])}const K=y(L,[["render",H],["__scopeId","data-v-38a9c2bb"]]);const Q={components:{SwiperThumbs:k,SwiperOther:K},data(){return{id:"",foodsData:[]}},methods:{getFoods(){const e=`https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?$filter=contains(RestaurantID, '${this.id}')&$format=JSON`;this.$http.get(e).then(n=>{this.foodsData=n.data,console.log(this.foodsData)})}},created(){this.id=this.$route.params.foodsId,this.getFoods()}},d=e=>(w("data-v-443f7c3f"),e=e(),g(),e),W={class:"container"},X={key:0},Y={class:"swiperImg"},Z={key:0,src:D,alt:"預設圖片"},tt={class:"activityText"},st={key:0},et={key:1},ot=d(()=>t("h4",null," 關於 ",-1)),at=d(()=>t("h4",null,"開放時間",-1)),it=d(()=>t("h4",null,"地址",-1)),rt={key:1,class:"swiperOther"},nt=d(()=>t("h4",null,[t("img",{src:P,alt:"其他推薦icon"}),m(" 其他推薦")],-1));function ct(e,n,S,v,s,h){const l=p("SwiperThumbs"),_=p("SwiperOther");return o(),a("main",null,[t("div",W,[s.foodsData[0]?(o(),a("section",X,[t("div",Y,[s.foodsData[0].Picture.PictureUrl1?(o(),u(l,{key:1,imgs:s.foodsData[0].Picture},null,8,["imgs"])):(o(),a("img",Z))]),t("div",tt,[t("h3",null,i(s.foodsData[0].RestaurantName),1),t("p",null,[s.foodsData[0].Class1?(o(),a("span",st,"#"+i(s.foodsData[0].Class1),1)):c("",!0),s.foodsData[0].Class2?(o(),a("span",et,"#"+i(s.foodsData[0].Class2),1)):c("",!0)]),ot,t("p",null,i(s.foodsData[0].Description),1),at,t("p",null,i(s.foodsData[0].OpenTime),1),it,t("p",null,i(s.foodsData[0].Address),1)])])):c("",!0),s.foodsData[0]?(o(),a("section",rt,[nt,A(_,{city:s.foodsData[0].City,"title-name":"RestaurantName"},null,8,["city"])])):c("",!0)])])}const ft=y(Q,[["render",ct],["__scopeId","data-v-443f7c3f"]]);export{ft as default};
