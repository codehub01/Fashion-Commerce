<template>
    <div class="app-carosel">
       

     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="false">

      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <!-- <div class="intro-text">
            <div class="text">
              <span class="display-4 font-weight-bold">Make your trip easier.</span>
              <br />
              <span class="font-weight-bold d-none d-md-block">We are professionals on making your vacation reservation easier</span>
            </div>
          </div> -->
        </div>
        <div class="carousel-item">
          <!-- <div class="intro-text">
            <div class="text">
              <span class="display-4 font-weight-bold">Make your trip easier.</span>
              <br />
              <span class="font-weight-bold d-none d-md-block">We are here for you</span>
            </div>
          </div> -->
        </div>
        <div class="carousel-item">
          <!-- <div class="intro-text">
            <div class="text">
              <span class="display-4 font-weight-bold">Make your trip easier.</span>
              <br />
              <span class="font-weight-bold d-none d-md-block">We are professionals on making your vacation reservation easier</span>
            </div>
          </div> -->
        </div>
        <div class="carousel-item">
          <!-- <div class="intro-text">
            <div class="text">
              <span class="display-4 font-weight-bold">Make your trip easier.</span>
              <br />
              <span class="font-weight-bold d-none d-md-block">We are professionals on making your vacation reservation easier</span>
            </div>
          </div> -->
        </div>
        <div class="carousel-item">
          <!-- <div class="intro-text">
            <div class="text">
              <span class="display-4 font-weight-bold">Make your trip easier.</span>
              <br />
              <span class="font-weight-bold d-none d-md-block">We are professionals on making your vacation reservation easier</span>
            </div>
          </div> -->
        </div>
        <div class="carousel-item">
          <!-- <div class="intro-text">
            <div class="text">
              <span class="display-4 font-weight-bold">Make your trip easier.</span>
              <br />
              <span class="font-weight-bold d-none d-md-block">We are professionals on making your vacation reservation easier</span>
            </div>
          </div> -->
        </div>
      </div>

    </div>

    </div>
</template>

<script>
export default {
  name: 'navbar',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#carouselExampleIndicators .carousel-inner .carousel-item {
  text-align: center;
  color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover !important;
  width: 100%;
  height: 400px;
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(1) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/Fashion_2_1400x.jpg?v=1585627949");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(2) {
  background-image: url("../assets/carosel-3.jpg");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(3) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/Oriental_1400x.jpg?v=1585565801");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(4) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/beauty12_1400x.jpg?v=1585628113");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(5) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/Beauty_Newa_1400x.jpg?v=1591361252");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(6) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/Lifestyle_a1096a87-102e-42af-9e15-589ee005d06e_1400x.jpg?v=1586253706");
}
.intro-text .text {
  position: relative;
  top: 160px;
}

@media (max-width: 1199px) { 

    
}
@media (max-width: 991px) { 
  #carouselExampleIndicators .carousel-inner .carousel-item{
     height: 220px;
  }

}
@media (max-width: 767px) { 

.intro-text .text span {
  font-size: 38px;
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(6) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/newaa_600x.jpg?v=1591361318");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(4) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/mobile4_600x.jpg?v=1585743575");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(3) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/mobile2_600x.jpg?v=1585739434");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(2) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/delivery1_600x.jpg?v=1590156848");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(1) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/mobile1_600x.jpg?v=1585739598");
}
#carouselExampleIndicators .carousel-inner .carousel-item:nth-child(5) {
  background-image: url("https://cdn.shopify.com/s/files/1/0246/9327/6757/files/lifestyle_Mobile_600x.jpg?v=1586280098");
}

}
</style>
