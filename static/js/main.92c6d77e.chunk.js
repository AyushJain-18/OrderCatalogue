(this["webpackJsonporder-catalogue"]=this["webpackJsonporder-catalogue"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(3),r=a(0),o=a.n(r),s=a(9),i=a.n(s),d=(a(90),a(20)),n=a(55),p=a(56),u=a(60),l=a(59),m=(a(91),a(92),a(75)),b=a.n(m),g=a(158),_=a(155),h=a(28),j=a(67),w=function(e){return e.cart},f=Object(j.a)([w],(function(e){return e.cartItems.length})),k=Object(j.a)([w],(function(e){return e.cartItems})),O={ADD_ITEMS_TO_CART:"ADD_ITEMS_TO_CART",CLEAR_CART:"CLEAR_CART"};function x(e){return Object(c.jsx)(_.a,Object(d.a)({elevation:6,variant:"filled"},e))}var y=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).handleClick=function(){c.setState({open:!0})},c.handleClose=function(e,t){"clickaway"!==t&&c.setState({open:!1})},c.state={open:!1},c}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.product_brand,r=t.product_image,o=t.product_name,s=t.category,i=t.isAddToCart,d=t.addItems,n=t.totalItemsInCart;return Object(c.jsxs)("div",{className:"product-container",children:[Object(c.jsx)("img",{src:r,alt:o,className:"product-image"}),Object(c.jsxs)("div",{className:"product-data-container",children:[Object(c.jsxs)("div",{style:{width:"inherit"},children:[Object(c.jsxs)("div",{className:"each-product-data",children:[" ",Object(c.jsxs)("span",{style:{width:"95%",minHeight:45,margin:"10px auto",color:"brown",fontSize:"1.2rem"},children:["  ",o," "]})," "]}),Object(c.jsxs)("div",{className:"each-product-data",children:[" ",Object(c.jsx)("span",{children:"Brand "}),"        ",Object(c.jsxs)("span",{style:{width:"60%"},children:[" ",a," "]})," "]}),Object(c.jsxs)("div",{className:"each-product-data",children:[" ",Object(c.jsx)("span",{children:" Category"}),"     ",Object(c.jsxs)("span",{style:{width:"60%"},children:[" ",s,"  "]})," "]})]}),i&&Object(c.jsxs)("button",{className:"product-add-to-cart",onClick:function(){d({product_brand:a,product_image:r,product_name:o,category:s}),e.handleClick()},children:[Object(c.jsx)(b.a,{}),Object(c.jsx)("span",{children:"Add to cart"})]})]}),Object(c.jsx)(g.a,{open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(c.jsxs)(x,{onClose:this.handleClose,severity:"info",children:["Item added to cart ",Object(c.jsx)("br",{}),"total items in cart are ",n]})})]})}}]),a}(o.a.Component),v=Object(h.b)((function(e){return{totalItemsInCart:f(e)}}),(function(e){return{addItems:function(t){return e((a=t,console.log("items",a),{type:O.ADD_ITEMS_TO_CART,payload:a}));var a}}}))(y),C=a(76),N=a.n(C),S=a(5),D=a(156),L=a(154),A=a(149),I=a(160),H=a(159),B=a(148),T=a(150),F=a(77),q=a.n(F),R=a(46),M=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).onSearch=function(t){var a=function(e,t){var a=[];return t.forEach((function(t){var c={};c.category=t.category,c.category_id=t.category_id,c.category_image=t.category_image,c.products=t.products.filter((function(t){return t.product_name.toLowerCase().includes(e.toLowerCase())||t.product_brand.toLowerCase().includes(e.toLowerCase())?t:null})),a.push(c)})),a}(t.target.value,R.Catalogue);e.setState({catalogue:a,selectedFilters:[],searchedData:a})},e.onFilterValueChange=function(t){var a=e.state.searchedData,c=function(e,t){if(0===e.length)return t;var a=[];return t.forEach((function(t){var c={};c.category=t.category,c.category_id=t.category_id,c.category_image=t.category_image,c.products=t.products.filter((function(t){return e.map((function(e){return e.toLowerCase()})).includes(t.product_brand.toLowerCase().toLowerCase())?t:""})),a.push(c)})),a}(t.target.value,a);e.setState({selectedFilters:t.target.value,catalogue:c})},e.state={catalogue:R.Catalogue,brands:R.all_brands,searchedData:R.Catalogue,hasDisplayCloseIcon:!0,selectedFilters:[]},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;console.log(R);var t={PaperProps:{style:{maxHeight:224,width:250,marginTop:60}}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"search-header",children:" Search  & filter products "}),Object(c.jsxs)("div",{className:"action-container",children:[Object(c.jsxs)("div",{className:"sarch-cotainer",children:[Object(c.jsx)(N.a,{className:"search-icon"}),Object(c.jsx)("input",{type:"text",placeholder:"Search product based on name and brand",className:"search-bar",onChange:this.onSearch})]}),Object(c.jsxs)("div",{className:"filter-container",children:[Object(c.jsxs)(B.a,{className:this.props.classes.formControl,children:[Object(c.jsx)(I.a,{id:"filter-mutiple-checkbox-label",children:"Filter for brands"}),Object(c.jsx)(L.a,{labelId:"filter-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:this.state.selectedFilters,onChange:this.onFilterValueChange,onClose:function(){return e.setState({hasDisplayCloseIcon:!0})},onOpen:function(){return e.setState({hasDisplayCloseIcon:!1})},input:Object(c.jsx)(A.a,{}),renderValue:function(e){return e.join(", ")},MenuProps:t,children:this.state.brands.map((function(t){return Object(c.jsxs)(H.a,{value:t,children:[Object(c.jsx)(D.a,{checked:e.state.selectedFilters.indexOf(t)>-1}),Object(c.jsx)(T.a,{primary:t})]},t)}))})]}),Object(c.jsx)(q.a,{className:"clear-button",style:{visibility:this.state.hasDisplayCloseIcon&&this.state.selectedFilters.length>0?"visible":"hidden"},onClick:function(){return e.setState({selectedFilters:[],catalogue:e.state.searchedData})}})]})]}),this.state.catalogue.map((function(e){return Object(c.jsxs)("div",{className:"category-container",children:[Object(c.jsx)("h1",{className:"category-header",children:e.category}),Object(c.jsx)("div",{className:"category-items-container",children:e.products.length>0?e.products.map((function(t){return Object(c.jsx)(v,Object(d.a)({isAddToCart:!0,category:e.category},t),t.product_id)})):Object(c.jsx)("div",{style:{width:"calc(100vw - 55px)",textAlign:"center"},children:"No Data found"})})]},e.category_id)}))]})}}]),a}(o.a.Component),E=Object(S.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:310,maxWidth:350}}}))(M),P=(a(98),Object(h.b)((function(e){return{cartItems:k(e)}}))((function(e){var t=e.cartItems;return Object(c.jsxs)("div",{className:"category-items-container",children:[t.length>0&&Object(c.jsx)("h1",{className:"category-header",children:"Cart Items are"}),t.length>0?t.map((function(e){return Object(c.jsx)(v,Object(d.a)({category:e.category},e),e.product_id)})):Object(c.jsx)("div",{className:"empty-cart",children:"Your Cart is Empty"})]})}))),V=a(151),z=a(152),J=a(153),G=a(61),W=a(147),K=a(78),Y=a.n(K),Q=a(13),U=Object(V.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,cursor:"pointer"}}})),X=Object(h.b)((function(e){return{totalCartItems:f(e)}}))(Object(Q.f)((function(e){var t=e.isFooter,a=e.history,r=e.totalCartItems,o=U();return Object(c.jsx)("div",{className:o.root,children:Object(c.jsx)(z.a,{position:"static",children:Object(c.jsxs)(J.a,{children:[t&&Object(c.jsx)(G.a,{variant:"h6",className:o.title,children:"Footer for Order Catalogue "}),!t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(W.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"menu",children:Object(c.jsx)(Y.a,{})}),Object(c.jsx)(G.a,{variant:"h6",onClick:function(){return a.push("/")},className:o.title,children:"Dashboard"}),Object(c.jsx)(G.a,{variant:"h6",onClick:function(){return a.push("/orderCatalogue")},className:o.title,children:"Order Catalogue"}),Object(c.jsx)(G.a,{variant:"h6",onClick:function(){return a.push("/cart")},className:o.title,children:"Cart"}),Object(c.jsxs)(G.a,{children:["Total items in cart are ",r]})]})]})})})}))),Z=a(65),$=a(43),ee={cartItems:[]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.ADD_ITEMS_TO_CART:return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.concat(t.payload)});case O.CLEAR_CART:return Object(d.a)(Object(d.a)({},e),{},{cartItems:[]});default:return e}};a(100);var ae=Object($.c)({cart:te}),ce=Object($.d)(ae,$.a.apply(void 0,[])),re=function(){return Object(c.jsx)("div",{children:"Dashborad"})};var oe=function(){return Object(c.jsx)(h.a,{store:ce,children:Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(X,{}),Object(c.jsxs)(Q.c,{children:[Object(c.jsx)(Q.a,{path:"/",exact:!0,component:re}),Object(c.jsx)(Q.a,{path:"/Catalogue",exact:!0,component:E}),Object(c.jsx)(Q.a,{path:"/cart",exact:!0,component:P})]}),Object(c.jsx)(X,{isFooter:!0})]})})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,161)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),o(e),s(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(oe,{})}),document.getElementById("root")),se()},46:function(e){e.exports=JSON.parse('{"Catalogue":[{"category":"Beauty","category_id":"A","category_image":"http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/63b74769-3445-4fa9-b7e9-b311b1b65030/90050cbe-b2b6-4224-b76a-eaf26fdb9b56/2101075_makeup_378.jpg","products":[{"product_name":"Himalaya face wash","product_image":"https://www.bigbasket.com/media/uploads/p/s/40018854_4-himalaya-purifying-neem-face-wash.jpg","product_brand":"Himalaya","product_id":"A1"},{"product_name":"Lakme kajal eyeconic","product_image":"https://www.bigbasket.com/media/uploads/p/s/40135734_3-lakme-kajal-eyeconic-twin-pack.jpg","product_brand":"Himalaya","product_id":"A2"},{"product_name":"Himalaya face wash","product_image":"https://www.bigbasket.com/media/uploads/p/s/40018854_4-himalaya-purifying-neem-face-wash.jpg","product_brand":"Surf excel","product_id":"A3"},{"product_name":"Foundation","product_image":"https://www.bigbasket.com/media/uploads/p/s/40195632_1-iba-pure-skin-liquid-foundation.jpg","product_brand":"Pure-skin","product_id":"A4"},{"product_name":"Lotus herbals cream","product_image":"https://www.bigbasket.com/media/uploads/p/s/40142281_1-lotus-herbals-whiteglow-skin-whitening-brightening-gel-creme-pa-spf-25.jpg","product_brand":"Lays","product_id":"A5"},{"product_name":"Lotus herbals cream","product_image":"https://www.bigbasket.com/media/uploads/p/s/40142281_1-lotus-herbals-whiteglow-skin-whitening-brightening-gel-creme-pa-spf-25.jpg","product_brand":"Haldirams","product_id":"A6"},{"product_name":"Biotique tan removal","product_image":"https://www.bigbasket.com/media/uploads/p/s/252311_9-biotique-bio-papaya-revitalizing-tan-removal-scrub.jpg","product_brand":"Biotique","product_id":"A7"},{"product_name":"Lakme kajal eyeconic","product_image":"https://www.bigbasket.com/media/uploads/p/s/40135734_3-lakme-kajal-eyeconic-twin-pack.jpg","product_brand":"Lakme","product_id":"A8"},{"product_name":"Biotique tan removal","product_image":"https://www.bigbasket.com/media/uploads/p/s/252311_9-biotique-bio-papaya-revitalizing-tan-removal-scrub.jpg","product_brand":"Biotique","product_id":"A9"},{"product_name":"Vlcc gold facial kit","product_image":"https://www.bigbasket.com/media/uploads/p/s/307406_6-vlcc-gold-facial-kit.jpg","product_brand":"Vlcc","product_id":"A10"}]},{"category":"Home & Kitchen Essentials","category_id ":"B","category_image":"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg","products":[{"product_name":"Non stick tawa","product_image":"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg","product_brand":"Himalaya","product_id":"B1"},{"product_name":"Spoon","product_image":"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg","product_brand":"Lotus Herbals","product_id":"B2"},{"product_name":"Non stick tawa","product_image":"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg","product_brand":"Lotus Herbals","product_id":"B3"},{"product_name":"Spoon","product_image":"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg","product_brand":"Lotus Herbals","product_id":"B4"},{"product_name":"Non stick tawa","product_image":"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg","product_brand":"Biotique","product_id":"B5"},{"product_name":"Spoon","product_image":"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg","product_brand":"Lotus Herbals","product_id":"B6"},{"product_name":"Non stick tawa","product_image":"https://www.bigbasket.com/media/uploads/p/s/40077281_3-nirlon-non-stick-concave-dosa-chapati-tawa-285-cm-red.jpg","product_brand":"Vlcc","product_id":"B7"},{"product_name":"Spoon","product_image":"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg","product_brand":"Haldirams","product_id":"B8"},{"product_name":"Spoon","product_image":"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg","product_brand":"Haldirams","product_id":"B9"},{"product_name":"Spoon","product_image":"https://www.bigbasket.com/media/uploads/p/s/40120200_1-ritu-dessert-spoon-super-pack.jpg","product_brand":"Biotique","product_id":"B10"}]},{"category":"Snacks & Munchies Corner","category_id ":"C","category_image":"http://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/63b74769-3445-4fa9-b7e9-b311b1b65030/da796b5f-fcc4-4e90-a561-cd4cb78171e4/T1_All_Chips-Namkeens_560x378_25thDec.jpg","products":[{"product_name":"Namkeen","product_image":"https://www.bigbasket.com/media/uploads/p/s/100022552_1-haldirams-namkeen-bhujia-sev.jpg","product_brand":"Haldirams","product_id":"C1"},{"product_name":"Namkeen","product_image":"https://www.bigbasket.com/media/uploads/p/s/100022552_1-haldirams-namkeen-bhujia-sev.jpg","product_brand":"Himalaya","product_id":"C2"},{"product_name":"Namkeen","product_image":"https://www.bigbasket.com/media/uploads/p/s/100022552_1-haldirams-namkeen-bhujia-sev.jpg","product_brand":"Biotique","product_id":"C3"},{"product_name":"Namkeen","product_image":"https://www.bigbasket.com/media/uploads/p/s/100022552_1-haldirams-namkeen-bhujia-sev.jpg","product_brand":"Lays","product_id":"C4"},{"product_name":"Lays","product_image":"https://www.bigbasket.com/media/uploads/p/s/1212775_2-lays-potato-chips-american-style-cream-onion-flavour.jpg","product_brand":"Haldirams","product_id":"C5"},{"product_name":"Lays","product_image":"https://www.bigbasket.com/media/uploads/p/s/1212775_2-lays-potato-chips-american-style-cream-onion-flavour.jpg","product_brand":"Surf excel","product_id":"C6"},{"product_name":"Lays","product_image":"https://www.bigbasket.com/media/uploads/p/s/1212775_2-lays-potato-chips-american-style-cream-onion-flavour.jpg","product_brand":"Biotique","product_id":"C7"},{"product_name":"Maggi","product_image":"https://www.bigbasket.com/media/uploads/p/mm/266109_15-maggi-2-minute-instant-noodles-masala.jpg","product_brand":"Maggi","product_id":"C8"},{"product_name":"Maggi","product_image":"https://www.bigbasket.com/media/uploads/p/mm/266109_15-maggi-2-minute-instant-noodles-masala.jpg","product_brand":"Lakme","product_id":"C9"},{"product_name":"Maggi","product_image":"https://www.bigbasket.com/media/uploads/p/mm/266109_15-maggi-2-minute-instant-noodles-masala.jpg","product_brand":"Surf excel","product_id":"C10"}]},{"category":"Cleaning & Household","category_id ":"D","category_image":"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg","products":[{"product_name":"Rin detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg","product_brand":"Rin","product_id":"D1"},{"product_name":"Surf excel detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg","product_brand":"Himalaya","product_id":"D2"},{"product_name":"Rin detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg","product_brand":"Maggi","product_id":"D3"},{"product_name":"Surf excel detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg","product_brand":"Himalaya","product_id":"D4"},{"product_name":"Rin detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg","product_brand":"Surf excel","product_id":"D5"},{"product_name":"Rin detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266942_9-rin-detergent-powder.jpg","product_brand":"Haldirams","product_id":"D6"},{"product_name":"Surf excel detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg","product_brand":"Vlcc","product_id":"D7"},{"product_name":"Surf excel detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg","product_brand":"Lakme","product_id":"D8"},{"product_name":"Surf excel detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg","product_brand":"Pure-skin","product_id":"D9"},{"product_name":"Surf excel detergent","product_image":"https://www.bigbasket.com/media/uploads/p/s/266953_12-surf-excel-quick-wash-detergent-powder.jpg","product_brand":"Himalaya","product_id":"D10"}]}],"all_brands":["Himalaya","Lotus Herbals","Biotique","Vlcc","Lakme","Pure-skin","Haldirams","Lays","Maggi","Rin","Surf excel"]}')},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},98:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.92c6d77e.chunk.js.map