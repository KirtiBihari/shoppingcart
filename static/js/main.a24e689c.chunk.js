(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"items":[{"name":"Samsung Series 4","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":13999,"display":22500},"discount":37},{"name":"Samsung Super 6","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":35999,"display":66900},"discount":46},{"name":"Samsung The Frame","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":84999,"display":133900},"discount":36},{"name":"Thomson B9 Pro","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":9999,"display":16999},"discount":41},{"name":"LG Ultra HD","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":39990,"display":79990},"discount":50},{"name":"Vu Ready LED TV","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":7999,"display":17000},"discount":52},{"name":"Koryo Android TV","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":55999,"display":199990},"discount":71},{"name":"Micromax LED Smart","image":"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90","price":{"actual":9999,"display":27990},"discount":64}]}')},26:function(e,t,a){e.exports=a(52)},32:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),c=a.n(r),l=(a(31),a(32),a(33),a(11)),o=a(9),s=a(8),m=(a(38),Object(s.b)((function(e){return{cartItems:e.cartItems}}),(function(e){return{searchApply:function(t){e({type:"SEARCH_APPLY",value:t})}}}))((function(e){return i.a.createElement("div",{className:"headerContainer"},i.a.createElement("nav",{className:"navbar justify-content-between"},i.a.createElement(l.b,{to:"/",className:"navbar-brand"},i.a.createElement("i",{className:"fa fa-star"})),i.a.createElement("form",{className:"form-inline"},i.a.createElement("div",{className:"search"},i.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(t){return function(t){e.searchApply(t.target.value)}(t)}}),i.a.createElement("i",{className:"fa fa-search"})),i.a.createElement(l.b,{to:"/cart",className:"cartIcon"},i.a.createElement("i",{className:"fa fa-shopping-cart"},e.cartItems.length>0?i.a.createElement("span",{className:"badge badge-danger"},e.cartItems.length):null)))))}))),u=(a(40),a(41),a(42),function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"itemInfo"},i.a.createElement("label",{className:"itemName"},e.item.name),i.a.createElement("div",{className:"price_offer"},i.a.createElement("label",{className:"price"},"\u20b9",e.item.price.actual," ",i.a.createElement("del",null,e.item.price.display)),i.a.createElement("label",{className:"offer"},e.item.discount,"% off"))))}),p=function(e){return i.a.createElement("div",{className:"shoppingItem"},i.a.createElement("img",{src:e.item.image,alt:e.item.name}),i.a.createElement(u,{item:e.item}),i.a.createElement("button",{onClick:function(){return e.addToCartClick(e.item)}},"Add to Cart"))},d=(a(43),function(e){var t=e.itemList.map((function(t,a){return i.a.createElement(p,{item:t,key:a,addToCartClick:e.itemClick})}));return i.a.createElement("div",{className:"shoppingList"},t)}),f=(a(44),a(45),function(e){return i.a.createElement("div",{className:"sortOptionContainer"},e.sortOptionList.map((function(t){return i.a.createElement("label",{key:t.id,className:t.checked?"bold":""},i.a.createElement("input",{type:"checkbox",name:t.displayName,checked:t.checked,onChange:function(){return e.checkedSortItem(t)}}),t.displayName)})))}),h=function(e){return i.a.createElement("div",{className:"sortListContainer"},i.a.createElement("label",null,"Sort By "),i.a.createElement(f,{sortOptionList:e.sortOptionList,checkedSortItem:e.handleSorting}))},g=a(25),E=(a(46),function(e){var t={code:{margin:"10px 0",textAlign:"left"},info:{fontStyle:"italic",color:"#3131d4",fontSize:15,margin:"5px 0"},sliderWrapper:{width:"100%"},slider:{height:40},trackStyle:{height:5,border:"2px solid #b6b4b4",backgroundColor:"#b6b4b4",top:11},highlightedTrackStyle:{height:2,border:"2px solid #2874f0",backgroundColor:"#2874f0",top:11},handleStyle:{height:24,width:24,border:"2px solid #978f8f",backgroundColor:"#fff"},hoveredHandleStyle:{backgroundColor:"#fff",border:"2px solid #978f8f"},activeHandleStyle:{backgroundColor:"#fff",border:"2px solid #978f8f"},focusedHandleStyle:{backgroundColor:"#fff",border:"2px solid #978f8f"}};return i.a.createElement("div",{className:"filtersContainer"},i.a.createElement("label",{className:"heading"},"Filters"),i.a.createElement("div",{className:"valueContainer"},i.a.createElement("span",{className:"valueText text-left"},"\u20b9",e.priceRange.start),i.a.createElement("span",{className:"valueText text-right"},"\u20b9",e.priceRange.end)),i.a.createElement("div",{style:t.sliderWrapper},i.a.createElement(g.RangeSlider,{step:2e3,value:e.priceRange,min:0,max:1e5,onChange:function(t){return e.updatePriceRange(t)},wrapperStyle:t.slider,trackStyle:t.trackStyle,highlightedTrackStyle:t.highlightedTrackStyle,handleStyle:t.handleStyle,hoveredHandleStyle:t.hoveredHandleStyle,focusedHandleStyle:t.focusedHandleStyle,activeHandleStyle:t.activeHandleStyle})),i.a.createElement("div",{className:"buttonContainer"},i.a.createElement("button",{onClick:function(){return e.applyFilter()}},"Apply")))}),b=Object(s.b)((function(e){return{shoppingItemList:e.shoppingItemList,sortOptionList:e.sortOptionList,priceRange:e.priceRange}}),(function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",item:e}}(t))},updateSort:function(t){e(function(e){return{type:"UPDATE_SORT",item:e}}(t))},updateFliter:function(t){e({type:"UPDATE_FILTER",priceRangeVal:t})},updatePriceRange:function(t){e(function(e){return{type:"UPDATE_PRICE_RANGE",value:e}}(t))}}}))((function(e){return i.a.createElement("div",{className:"homeContainer"},i.a.createElement(E,{priceRange:e.priceRange,updatePriceRange:function(t){e.updatePriceRange(t)},applyFilter:function(){e.updateFliter(e.priceRange)}}),i.a.createElement("div",{className:"sortShoppingContainer"},i.a.createElement(h,{sortOptionList:e.sortOptionList,handleSorting:function(t){e.updateSort(t)}}),i.a.createElement(d,{itemList:e.shoppingItemList,itemClick:function(t){e.addToCart(t)}})))})),y=(a(47),a(48),function(e){return i.a.createElement("div",{className:"cartItem"},i.a.createElement("img",{src:e.item.image,alt:e.item.name}),i.a.createElement("div",{className:"itemDetails"},i.a.createElement(u,{item:e.item}),i.a.createElement("div",{className:"qtyActions"},i.a.createElement("span",{className:"minus",onClick:function(){return e.handleUpdateCart(e.item,!1)}},"-"),i.a.createElement("span",{className:"qty"},e.item.quantity),i.a.createElement("span",{className:"plus",onClick:function(){return e.handleUpdateCart(e.item,!0)}},"+")),i.a.createElement("label",{className:"removeLink",onClick:function(){return e.handleRemoveFromCart(e.item)}},"REMOVE")))}),v=(a(49),function(e){return i.a.createElement("div",{className:"priceInfoContainer"},i.a.createElement("label",{className:"heading_lbl"},"PRICE DETAILS"),i.a.createElement("div",{className:"details"},i.a.createElement("div",{className:"actualPriceInfo"},i.a.createElement("span",{className:"lbl"},"Price (",e.itemCount," ",e.itemCount>1?"items":"item",")"),i.a.createElement("span",{className:"symbol_txt"},":"),i.a.createElement("span",{className:"val"},"\u20b9",e.totalDisplayPrice)),i.a.createElement("div",{className:"discountPriceInfo"},i.a.createElement("span",{className:"lbl"},"Discount"),i.a.createElement("span",{className:"symbol_txt"},":"),i.a.createElement("span",{className:"val"},"\u20b9",e.totalDiscountPrice))),i.a.createElement("div",{className:"totalPriceInfo"},i.a.createElement("span",{className:"lbl"},"Total Payable"),i.a.createElement("span",{className:"val"},"\u20b9",e.totalPrice)))}),k=Object(s.b)((function(e){return{cartItemList:e.cartItems,totalPrice:e.total}}),(function(e){return{updateCart:function(t,a){e(function(e,t){return{type:"UPDATE_CART",data:{item:e,isAdd:t}}}(t,a))},removeFromCart:function(t){e(function(e){return{type:"REMOVE_FROM_CART",item:e}}(t))}}}))((function(e){var t=0,a=0,n=e.cartItemList.map((function(n,r){return t+=parseInt(n.quantity),a+=parseInt(n.price.display),i.a.createElement(y,{item:n,key:r,handleUpdateCart:e.updateCart,handleRemoveFromCart:e.removeFromCart})})),r={itemCount:t,totalDisplayPrice:a,totalDiscountPrice:a-e.totalPrice,totalPrice:e.totalPrice};return i.a.createElement("div",{className:"cartContainer"},i.a.createElement("div",{className:"cartItemList"},e.cartItemList.length>0?n:"No Item in Cart"),i.a.createElement(v,r))})),N=(a(50),function(e){return i.a.createElement("div",{className:"footerContainer"},i.a.createElement("p",null,"@copyright"))}),C=(a(51),function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:["/shoppingcart","/"],component:b}),i.a.createElement(o.a,{path:"/cart",component:k})),i.a.createElement(N,null))});var I=function(){return i.a.createElement(l.a,null,i.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(7),R=a(6),S=a(20),L=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=-1;return"asc"===e&&(n=1),function(e,i){var r=""!==a?e[t][a]:e[t],c=""!==a?i[t][a]:i[t];return r<c?-1*n:r>c?1*n:0*n}},A={items:Object(R.a)(S.items),shoppingItemList:Object(R.a)(S.items),cartItems:[],total:0,sortOptionList:[{id:1,displayName:"Price -- High Low",sortKey:"desc",checked:!1},{id:2,displayName:"Price -- Low High",sortKey:"asc",checked:!1},{id:3,displayName:"Discount",sortKey:"discount",checked:!1}],priceRange:{start:0,end:1e5},isFilterApplied:!1},P=function(e,t){var a=e.shoppingItemList.find((function(e){return e.name===t.item.name}));if(e.cartItems.find((function(e){return e.name===t.item.name})))return a.quantity+=1,Object(O.a)({},e,{total:e.total+a.price.actual});a.quantity=1;var n=e.total+a.price.actual;return Object(O.a)({},e,{cartItems:[].concat(Object(R.a)(e.cartItems),[a]),total:n})},T=function(e,t){var a=e.cartItems.find((function(e){return e.name===t.data.item.name}));if(a)if(t.data.isAdd)a.quantity+=1;else if(1===a.quantity){var n=e.cartItems.findIndex((function(e){return e.name===t.data.item.name}));e.cartItems.splice(n,1)}else a.quantity-=1;return Object(O.a)({},e,{total:t.data.isAdd?e.total+a.price.actual:e.total-a.price.actual})},x=function(e,t){var a=e.cartItems.find((function(e){return e.name===t.item.name})),n=0;if(a){n=a.price.actual*a.quantity;var i=e.cartItems.findIndex((function(e){return e.name===t.item.name}));e.cartItems.splice(i,1)}return Object(O.a)({},e,{total:e.total-n})},j=function(e,t){var a=Object(R.a)(e.sortOptionList),n=Object(R.a)(e.shoppingItemList),i=e.priceRange,r="";return a.forEach((function(e,a){t.item.id===e.id?(e.checked=!0,r=e.sortKey):e.checked=!1})),n="discount"===r?n.sort(L(r,"discount")):n.sort(L(r,"price","actual")),e.isFilterApplied&&(n=n.filter((function(e){return e.price.actual>=i.start&&e.price.actual<=i.end}))),Object(O.a)({},e,{shoppingItemList:n,sortOptionList:a})},q=function(e,t){var a=t.priceRangeVal,n=Object(R.a)(e.items),i=Object(R.a)(e.sortOptionList).filter((function(e){return!0===e.checked}));return n=n.filter((function(e){return e.price.actual>=a.start&&e.price.actual<=a.end})),i.length>0&&(n="discount"===i[0].sortKey?n.sort(L(i[0].sortKey,"discount")):n.sort(L(i[0].sortKey,"price","actual"))),Object(O.a)({},e,{shoppingItemList:n,isFilterApplied:!0})},z=function(e,t){return Object(O.a)({},e,{priceRange:t.value})},_=function(e,t){var a=t.value,n=e.priceRange,i=Object(R.a)(e.items),r=Object(R.a)(e.sortOptionList).filter((function(e){return!0===e.checked}));return a.trim().length>0&&(i=i.filter((function(e){return e.name.toLowerCase().indexOf(a.toLowerCase())>=0}))),e.isFilterApplied&&(i=i.filter((function(e){return e.price.actual>=n.start&&e.price.actual<=n.end}))),r.length>0&&(i="discount"===r[0].sortKey?i.sort(L(r[0].sortKey,"discount")):i.sort(L(r[0].sortKey,"price","actual"))),Object(O.a)({},e,{shoppingItemList:i})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return P(e,t);case"UPDATE_CART":return T(e,t);case"REMOVE_FROM_CART":return x(e,t);case"UPDATE_SORT":return j(e,t);case"UPDATE_FILTER":return q(e,t);case"UPDATE_PRICE_RANGE":return z(e,t);case"SEARCH_APPLY":return _(e,t);default:return e}},F=a(15),w=Object(F.b)(D);c.a.render(i.a.createElement(s.a,{store:w},i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a24e689c.chunk.js.map