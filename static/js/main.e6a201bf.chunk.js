(this["webpackJsonporder-catalogue"]=this["webpackJsonporder-catalogue"]||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var r=a(3),c=a(0),o=a.n(c),i=a(9),s=a.n(i),d=(a(125),a(20)),n=a(67),p=a(68),u=a(72),l=a(71),m=(a(126),a(127),a(110)),b=a.n(m),g=a(286),h=a(283),_=a(30),j=a(87),w=function(e){return e.cart},k=Object(j.a)([w],(function(e){return e.cartItems.length})),f=Object(j.a)([w],(function(e){return e.cartItems})),y={ADD_ITEMS_TO_CART:"ADD_ITEMS_TO_CART",CLEAR_CART:"CLEAR_CART"};function x(e){return Object(r.jsx)(h.a,Object(d.a)({elevation:6,variant:"filled"},e))}var O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleClick=function(){r.setState({open:!0})},r.handleClose=function(e,t){"clickaway"!==t&&r.setState({open:!1})},r.state={open:!1},r}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.product_brand,c=t.product_image,o=t.product_name,i=t.category,s=t.isAddToCart,d=t.addItems,n=t.totalItemsInCart;return Object(r.jsxs)("div",{className:"product-container",children:[Object(r.jsx)("img",{src:c,alt:o,className:"product-image"}),Object(r.jsxs)("div",{className:"product-data-container",children:[Object(r.jsxs)("div",{style:{width:"inherit"},children:[Object(r.jsxs)("div",{className:"each-product-data",children:[" ",Object(r.jsxs)("span",{style:{width:"95%",minHeight:45,margin:"10px auto",color:"brown",fontSize:"1.2rem"},children:["  ",o," "]})," "]}),Object(r.jsxs)("div",{className:"each-product-data",children:[" ",Object(r.jsx)("span",{children:"Brand "}),"        ",Object(r.jsxs)("span",{style:{width:"60%"},children:[" ",a," "]})," "]}),Object(r.jsxs)("div",{className:"each-product-data",children:[" ",Object(r.jsx)("span",{children:" Category"}),"     ",Object(r.jsxs)("span",{style:{width:"60%"},children:[" ",i,"  "]})," "]})]}),s&&Object(r.jsxs)("button",{className:"product-add-to-cart",onClick:function(){d({product_brand:a,product_image:c,product_name:o,category:i}),e.handleClick()},children:[Object(r.jsx)(b.a,{}),Object(r.jsx)("span",{children:"Add to cart"})]})]}),Object(r.jsx)(g.a,{open:this.state.open,autoHideDuration:1e3,onClose:this.handleClose,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(r.jsxs)(x,{onClose:this.handleClose,severity:"info",children:["Item added to cart ",Object(r.jsx)("br",{}),"total items in cart are ",n]})})]})}}]),a}(o.a.Component),C=Object(_.b)((function(e){return{totalItemsInCart:k(e)}}),(function(e){return{addItems:function(t){return e((a=t,console.log("items",a),{type:y.ADD_ITEMS_TO_CART,payload:a}));var a}}}))(O),v=a(111),S=a.n(v),A=a(5),N=a(284),B=a(282),D=a(277),L=a(288),I=a(287),H=a(276),F=a(278),M=a(112),T=a.n(M),R={Catalogue:[{category:"Beauty",category_id:"A",category_image:"http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/63b74769-3445-4fa9-b7e9-b311b1b65030/90050cbe-b2b6-4224-b76a-eaf26fdb9b56/2101075_makeup_378.jpg",products:[{product_name:"Himalaya face wash",product_image:"https://www.bigbasket.com/media/uploads/p/s/40018854_4-himalaya-purifying-neem-face-wash.jpg",product_brand:"Himalaya",product_id:"A1"},{product_name:"Lakme kajal eyeconic",product_image:"https://www.bigbasket.com/media/uploads/p/s/40135734_3-lakme-kajal-eyeconic-twin-pack.jpg",product_brand:"Himalaya",product_id:"A2"},{product_name:"Himalaya face wash",product_image:"https://www.bigbasket.com/media/uploads/p/s/40018854_4-himalaya-purifying-neem-face-wash.jpg",product_brand:"Surf excel",product_id:"A3"},{product_name:"Foundation",product_image:"https://www.bigbasket.com/media/uploads/p/s/40195632_1-iba-pure-skin-liquid-foundation.jpg",product_brand:"Pure-skin",product_id:"A4"},{product_name:"Lotus herbals cream",product_image:"https://www.bigbasket.com/media/uploads/p/s/40142281_1-lotus-herbals-whiteglow-skin-whitening-brightening-gel-creme-pa-spf-25.jpg",product_brand:"Lays",product_id:"A5"},{product_name:"Lotus herbals cream",product_image:"https://www.bigbasket.com/media/uploads/p/s/40142281_1-lotus-herbals-whiteglow-skin-whitening-brightening-gel-creme-pa-spf-25.jpg",product_brand:"Haldirams",product_id:"A6"},{product_name:"Biotique tan removal",product_image:"https://www.bigbasket.com/media/uploads/p/s/252311_9-biotique-bio-papaya-revitalizing-tan-removal-scrub.jpg",product_brand:"Biotique",product_id:"A7"},{product_name:"Lakme kajal eyeconic",product_image:"https://www.bigbasket.com/media/uploads/p/s/40135734_3-lakme-kajal-eyeconic-twin-pack.jpg",product_brand:"Lakme",product_id:"A8"},{product_name:"Biotique tan removal",product_image:"https://www.bigbasket.com/media/uploads/p/s/252311_9-biotique-bio-papaya-revitalizing-tan-removal-scrub.jpg",product_brand:"Biotique",product_id:"A9"},{product_name:"Vlcc gold facial kit",product_image:"https://www.bigbasket.com/media/uploads/p/s/307406_6-vlcc-gold-facial-kit.jpg",product_brand:"Vlcc",product_id:"A10"}]},{category:"Home & Kitchen Essentials","category_id ":"B",category_image:"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg",products:[{product_name:"Non stick tawa",product_image:"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg",product_brand:"Himalaya",product_id:"B1"},{product_name:"Spoon",product_image:"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg",product_brand:"Lotus Herbals",product_id:"B2"},{product_name:"Non stick tawa",product_image:"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg",product_brand:"Lotus Herbals",product_id:"B3"},{product_name:"Spoon",product_image:"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg",product_brand:"Lotus Herbals",product_id:"B4"},{product_name:"Non stick tawa",product_image:"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg",product_brand:"Biotique",product_id:"B5"},{product_name:"Spoon",product_image:"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg",product_brand:"Lotus Herbals",product_id:"B6"},{product_name:"Non stick tawa",product_image:"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg",product_brand:"Vlcc",product_id:"B7"},{product_name:"Spoon",product_image:"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg",product_brand:"Haldirams",product_id:"B8"},{product_name:"Spoon",product_image:"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg",product_brand:"Haldirams",product_id:"B9"},{product_name:"Spoon",product_image:"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg",product_brand:"Biotique",product_id:"B10"}]},{category:"Snacks & Munchies Corner","category_id ":"C",category_image:"http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/63b74769-3445-4fa9-b7e9-b311b1b65030/da796b5f-fcc4-4e90-a561-cd4cb78171e4/T1_All_Chips-Namkeens_560x378_25thDec.jpg",products:[{product_name:"Namkeen",product_image:"https://www.bigbasket.com/media/uploads/p/s/100022552_1-haldirams-namkeen-bhujia-sev.jpg",product_brand:"Haldirams",product_id:"C1"},{product_name:"Namkeen",product_image:"https://www.bigbasket.com/media/uploads/p/s/100022552_1-haldirams-namkeen-bhujia-sev.jpg",product_brand:"Himalaya",product_id:"C2"},{product_name:"Namkeen",product_image:"https://www.bigbasket.com/media/uploads/p/s/100022552_1-haldirams-namkeen-bhujia-sev.jpg",product_brand:"Biotique",product_id:"C3"},{product_name:"Namkeen",product_image:"https://www.bigbasket.com/media/uploads/p/s/100022552_1-haldirams-namkeen-bhujia-sev.jpg",product_brand:"Lays",product_id:"C4"},{product_name:"Lays",product_image:"https://www.bigbasket.com/media/uploads/p/s/1212775_2-lays-potato-chips-american-style-cream-onion-flavour.jpg",product_brand:"Haldirams",product_id:"C5"},{product_name:"Lays",product_image:"https://www.bigbasket.com/media/uploads/p/s/1212775_2-lays-potato-chips-american-style-cream-onion-flavour.jpg",product_brand:"Surf excel",product_id:"C6"},{product_name:"Lays",product_image:"https://www.bigbasket.com/media/uploads/p/s/1212775_2-lays-potato-chips-american-style-cream-onion-flavour.jpg",product_brand:"Biotique",product_id:"C7"},{product_name:"Maggi",product_image:"https://www.bigbasket.com/media/uploads/p/mm/266109_15-maggi-2-minute-instant-noodles-masala.jpg",product_brand:"Maggi",product_id:"C8"},{product_name:"Maggi",product_image:"https://www.bigbasket.com/media/uploads/p/mm/266109_15-maggi-2-minute-instant-noodles-masala.jpg",product_brand:"Lakme",product_id:"C9"},{product_name:"Maggi",product_image:"https://www.bigbasket.com/media/uploads/p/mm/266109_15-maggi-2-minute-instant-noodles-masala.jpg",product_brand:"Surf excel",product_id:"C10"}]},{category:"Cleaning & Household","category_id ":"D",category_image:"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg",products:[{product_name:"Rin detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg",product_brand:"Rin",product_id:"D1"},{product_name:"Surf excel detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg",product_brand:"Himalaya",product_id:"D2"},{product_name:"Rin detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg",product_brand:"Maggi",product_id:"D3"},{product_name:"Surf excel detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg",product_brand:"Himalaya",product_id:"D4"},{product_name:"Rin detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg",product_brand:"Surf excel",product_id:"D5"},{product_name:"Rin detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg",product_brand:"Haldirams",product_id:"D6"},{product_name:"Surf excel detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg",product_brand:"Vlcc",product_id:"D7"},{product_name:"Surf excel detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg",product_brand:"Lakme",product_id:"D8"},{product_name:"Surf excel detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg",product_brand:"Pure-skin",product_id:"D9"},{product_name:"Surf excel detergent",product_image:"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg",product_brand:"Himalaya",product_id:"D10"}]}],all_brands:["Himalaya","Lotus Herbals","Biotique","Vlcc","Lakme","Pure-skin","Haldirams","Lays","Maggi","Rin","Surf excel"]},q=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).onSearch=function(t){var a=function(e,t){var a=[];return t.forEach((function(t){var r={};r.category=t.category,r.category_id=t.category_id,r.category_image=t.category_image,r.products=t.products.filter((function(t){return t.product_name.toLowerCase().includes(e.toLowerCase())||t.product_brand.toLowerCase().includes(e.toLowerCase())?t:null})),a.push(r)})),a}(t.target.value,R.Catalogue);e.setState({catalogue:a,selectedFilters:[],searchedData:a})},e.onFilterValueChange=function(t){var a=e.state.searchedData,r=function(e,t){if(0===e.length)return t;var a=[];return t.forEach((function(t){var r={};r.category=t.category,r.category_id=t.category_id,r.category_image=t.category_image,r.products=t.products.filter((function(t){return e.map((function(e){return e.toLowerCase()})).includes(t.product_brand.toLowerCase().toLowerCase())?t:""})),a.push(r)})),a}(t.target.value,a);e.setState({selectedFilters:t.target.value,catalogue:r})},e.state={catalogue:R.Catalogue,brands:R.all_brands,searchedData:R.Catalogue,hasDisplayCloseIcon:!0,selectedFilters:[]},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;console.log(R);var t={PaperProps:{style:{maxHeight:224,width:250,marginTop:60}}};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"search-header",children:" Search  & filter products "}),Object(r.jsxs)("div",{className:"action-container",children:[Object(r.jsxs)("div",{className:"sarch-cotainer",children:[Object(r.jsx)(S.a,{className:"search-icon"}),Object(r.jsx)("input",{type:"text",placeholder:"Search product based on name and brand",className:"search-bar",onChange:this.onSearch})]}),Object(r.jsxs)("div",{className:"filter-container",children:[Object(r.jsxs)(H.a,{className:this.props.classes.formControl,children:[Object(r.jsx)(L.a,{id:"filter-mutiple-checkbox-label",children:"Filter for brands"}),Object(r.jsx)(B.a,{labelId:"filter-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:this.state.selectedFilters,onChange:this.onFilterValueChange,onClose:function(){return e.setState({hasDisplayCloseIcon:!0})},onOpen:function(){return e.setState({hasDisplayCloseIcon:!1})},input:Object(r.jsx)(D.a,{}),renderValue:function(e){return e.join(", ")},MenuProps:t,children:this.state.brands.map((function(t){return Object(r.jsxs)(I.a,{value:t,children:[Object(r.jsx)(N.a,{checked:e.state.selectedFilters.indexOf(t)>-1}),Object(r.jsx)(F.a,{primary:t})]},t)}))})]}),Object(r.jsx)(T.a,{className:"clear-button",style:{visibility:this.state.hasDisplayCloseIcon&&this.state.selectedFilters.length>0?"visible":"hidden"},onClick:function(){return e.setState({selectedFilters:[],catalogue:e.state.searchedData})}})]})]}),this.state.catalogue.map((function(e){return Object(r.jsxs)("div",{className:"category-container",children:[Object(r.jsx)("h1",{className:"category-header",children:e.category}),Object(r.jsx)("div",{className:"category-items-container",children:e.products.length>0?e.products.map((function(t){return Object(r.jsx)(C,Object(d.a)({isAddToCart:!0,category:e.category},t),t.product_id)})):Object(r.jsx)("div",{style:{width:"calc(100vw - 55px)",textAlign:"center"},children:"No Data found"})})]},e.category_id)}))]})}}]),a}(o.a.Component),E=Object(A.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:310,maxWidth:350}}}))(q),P=(a(133),Object(_.b)((function(e){return{cartItems:f(e)}}))((function(e){var t=e.cartItems;return Object(r.jsxs)("div",{className:"category-items-container-cart",children:[t.length>0&&Object(r.jsx)("h1",{className:"category-header-cart",children:"Cart Items are"}),t.length>0?t.map((function(e){return Object(r.jsx)(C,Object(d.a)({category:e.category},e),e.product_id)})):Object(r.jsx)("div",{className:"empty-cart",children:"Your Cart is Empty"})]})}))),V=a(279),z=a(280),J=a(281),G=a(74),W=a(275),K=a(113),Y=a.n(K),Q=a(13),U=Object(V.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,cursor:"pointer"}}})),X=Object(_.b)((function(e){return{totalCartItems:k(e)}}))(Object(Q.f)((function(e){var t=e.isFooter,a=e.history,c=e.totalCartItems,o=U();return Object(r.jsx)("div",{className:o.root,children:Object(r.jsx)(z.a,{position:"static",children:Object(r.jsxs)(J.a,{children:[t&&Object(r.jsx)(G.a,{variant:"h6",className:o.title,children:"Footer for Order Catalogue "}),!t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"menu",children:Object(r.jsx)(Y.a,{})}),Object(r.jsx)(G.a,{variant:"h6",onClick:function(){return a.push("/")},className:o.title,children:"Order Catalogue"}),Object(r.jsx)(G.a,{variant:"h6",onClick:function(){return a.push("/Charts")},className:o.title,children:"Dashboard Charts"}),Object(r.jsx)(G.a,{variant:"h6",onClick:function(){return a.push("/cart")},className:o.title,children:"Cart"}),Object(r.jsxs)(G.a,{children:["Total items in cart are ",c]})]})]})})})}))),Z=(a(135),a(73)),$=function(){return Object(r.jsxs)("div",{style:{width:700,margin:" 50px auto"},children:[Object(r.jsx)(Z.Line,{data:{labels:["Jan","Feb","March","April","May"],datasets:[{label:"Scale for 2020(M)",data:[3,2,2,1,5],borderColor:["red"],backgroundColor:["lightcoral"],pointBackgroundColor:"yellow",pointBorderColor:"blue"},{label:"Scale for 2019(M)",data:[5,2,1,4,3],borderColor:["black"],backgroundColor:["lightblue"],pointBackgroundColor:"yellow",pointBorderColor:"blue"}]},options:{maintainAspectRatio:!0,title:{display:!0,text:"Line Chart"},scales:{yAxes:[{ticks:{min:0,max:6,stepSize:1}}]}}}),Object(r.jsx)("div",{style:{height:100}}),Object(r.jsx)(Z.Bar,{data:{labels:["Jan","Feb","March","April","May"],datasets:[{label:"Scale for 2020(M)",data:[3,2,2,1,5],borderColor:["red"],backgroundColor:["lightpink","lightpink","lightpink","lightpink","lightpink"],pointBackgroundColor:"yellow",pointBorderColor:"blue"},{label:"Scale for 2019(M)",data:[5,2,1,4,3],borderColor:["black"],backgroundColor:["lightblue","lightblue","lightblue","lightblue","lightblue"],pointBackgroundColor:"yellow",pointBorderColor:"blue"}]},options:{maintainAspectRatio:!0,title:{display:!0,text:"Bar Chart"},scales:{yAxes:[{ticks:{min:0,max:6,stepSize:1}}]}}}),Object(r.jsx)("div",{style:{height:100}}),Object(r.jsx)(Z.Doughnut,{data:{labels:["Jan","Feb","March","April","May"],datasets:[{label:"Scale for 2020(M)",data:[3,2,2,1,5],backgroundColor:["lightpink","cadetblue","cornflowerblue","coral","dodgerblue"]}]},options:{maintainAspectRatio:!0,title:{display:!0,text:"Doughnut Chart"}}})]})};var ee=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(X,{}),Object(r.jsxs)(Q.c,{children:[Object(r.jsx)(Q.a,{exact:!0,path:"/",component:E}),Object(r.jsx)(Q.a,{exact:!0,path:"/Charts",component:$}),Object(r.jsx)(Q.a,{exact:!0,path:"/cart",component:P})]}),Object(r.jsx)(X,{isFooter:!0})]})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,289)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),r(e),c(e),o(e),i(e)}))},ae=a(66),re=a(46),ce={cartItems:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.ADD_ITEMS_TO_CART:return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.concat(t.payload)});case y.CLEAR_CART:return Object(d.a)(Object(d.a)({},e),{},{cartItems:[]});default:return e}};a(231);var ie=Object(re.c)({cart:oe}),se=Object(re.d)(ie,re.a.apply(void 0,[]));s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(_.a,{store:se,children:Object(r.jsx)(ae.a,{basename:"/",children:Object(r.jsx)(ee,{})})})}),document.getElementById("root")),te()}},[[232,1,2]]]);
//# sourceMappingURL=main.e6a201bf.chunk.js.map