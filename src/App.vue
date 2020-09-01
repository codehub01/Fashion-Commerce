<template>
  <div id="app">
    <div class="sticky-top w-100">
      <app-header></app-header>
      <app-navbar></app-navbar>
    </div>
    <app-carosel></app-carosel>
    <app-collection></app-collection>
    <app-beauty></app-beauty>
    <app-watches></app-watches>
    <app-bags></app-bags>
    <app-electronics></app-electronics>
    <app-sneakers></app-sneakers>
    <app-blogs></app-blogs>
    <app-delivery></app-delivery>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import navbar from "./components/navbar.vue";
import carosel from "./components/carosel.vue";
import collection from "./components/collection.vue";
import beauty from "./components/beauty.vue";
import watches from "./components/watches.vue";
import bags from "./components/bags.vue";
import electronics from "./components/electronics.vue";
import sneakers from "./components/sneakers.vue";
import blogs from "./components/blogs.vue";
import delivery from "./components/deliveryOptions.vue";
import footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    "app-header": header,
    "app-navbar": navbar,
    "app-carosel": carosel,
    "app-collection": collection,
    "app-beauty": beauty,
    "app-watches": watches,
    "app-bags": bags,
    "app-electronics": electronics,
    "app-sneakers": sneakers,
    "app-blogs": blogs,
    "app-delivery": delivery,
    "app-footer": footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100% !important;
  overflow-x: hidden;
  height: 100% !important; 
  color: black;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  background-color: #F7F4F2;
  box-sizing: border-box;
}
*:focus {
  box-shadow: none;
}
textarea {
  resize: none;
}
.btn.focus,
.btn:focus {
  box-shadow: none !important;
}
.slick-prev:before,
.slick-next:before {
  color: black;
}

.vueslickcarousel-lg .slick-next:before{
  position: relative;
  left: -40px;
  font-size: 50px;
  color: grey;
}
.vueslickcarousel-lg .slick-prev {
    left: -25px;
    z-index: 1;
}

.vueslickcarousel-lg .slick-prev:before{
  position: relative;
  left: 10px;
  font-size: 50px;
  color: grey;
}

.vueslickcarousel-lg .slick-next:hover::before, .vueslickcarousel-lg .slick-prev:hover::before{
  color: #ff6128;
}
.vueslickcarousel-lg .slick-next:before, .vueslickcarousel-lg .slick-prev:before{
  display: none;
}
.vueslickcarousel-lg .vueslickcarousel:hover .slick-next:before, .vueslickcarousel-lg .vueslickcarousel:hover .slick-prev:before {

  display: block;
}
.vueslickcarousel-lg .slick-prev.slick-disabled:before, .vueslickcarousel-lg .slick-next.slick-disabled:before{
  display: none !important;
}
.slick-slide div {
outline: none ;
}

p.heading {
  margin-top: 60px;
  margin-bottom: 30px;
  font-weight: 500;
  font-style: normal;
  color: #3a2a2f;
  font-size: 20px;
}
.card{
    border-radius: 0px;
}
.bg-red{
  background-color: red !important;
  border: 2px solid red !important;
}
@media (max-width: 767.98px){

}
</style>
