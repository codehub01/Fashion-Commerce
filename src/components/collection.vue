<template>
  <div id="collection">
   <div class="container-fluid">
       <div class="row">
           <div class="col-12">
               <p class="heading">Our Collections</p>
           </div>
       </div>

       
        <VueSlickCarousel class="text-dark vueslickcarousel" v-bind="slickOptions" :arrows="true" :dots="true" >
            <div>
                <div class="">
                        <div class="collection-card card-1 text-center w-100">
                        <div class="collection-card-img">
                            <img class="img-fluid" src="../assets/collection-img.jpg" alt="">
                        </div>
                        <div class="collection-card-body">
                            <p> <span class="text">Watches</span> <span class=" arrow animate__animated animate__fadeInRight"><i class="fa fa-long-arrow-right"></i></span></p>
                        </div>
                        </div>
                    </div>
            </div>

            <div>
                <div class="">
                        <div class="collection-card card-1 text-center w-100">
                        <div class="collection-card-img">
                            <img class="img-fluid" src="../assets/collection-img-2.jpg" alt="">
                        </div>
                        <div class="collection-card-body">
                            <p> <span class="text">Beauty</span> <span class=" arrow animate__animated animate__fadeInRight"><i class="fa fa-long-arrow-right"></i></span></p>
                        </div>
                        </div>
                    </div>
            </div>

            <div>
                <div class="">
                        <div class="collection-card card-1 text-center w-100">
                        <div class="collection-card-img">
                            <img class="img-fluid" src="../assets/collection-img-3.jpg" alt="">
                        </div>
                        <div class="collection-card-body">
                            <p> <span class="text">Clothing</span> <span class=" arrow animate__animated animate__fadeInRight"><i class="fa fa-long-arrow-right"></i></span></p>
                        </div>
                        </div>
                    </div>
            </div>

            <div>
                <div class="">
                        <div class="collection-card card-1 text-center w-100">
                        <div class="collection-card-img">
                            <img class="img-fluid" src="../assets/collection-img-4.jpg" alt="">
                        </div>
                        <div class="collection-card-body">
                            <p> <span class="text">Luggages & Bags</span> <span class=" arrow animate__animated animate__fadeInRight"><i class="fa fa-long-arrow-right"></i></span></p>
                        </div>
                        </div>
                    </div>
            </div>

            <div>
                <div class="">
                        <div class="collection-card card-1 text-center w-100">
                        <div class="collection-card-img">
                            <img class="img-fluid" src="../assets/collection-img-5.jpg" alt="">
                        </div>
                        <div class="collection-card-body">
                            <p> <span class="text">Electronic Accessories</span> <span class=" arrow animate__animated animate__fadeInRight"><i class="fa fa-long-arrow-right"></i></span></p>
                        </div>
                        </div>
                    </div>
            </div>

            <div>
                <div class="">
                        <div class="collection-card card-1 text-center w-100">
                        <div class="collection-card-img">
                            <img class="img-fluid" src="../assets/collection-img-6.jpg" alt="">
                        </div>
                        <div class="collection-card-body">
                            <p> <span class="text">Sneakers</span> <span class=" arrow animate__animated animate__fadeInRight"><i class="fa fa-long-arrow-right"></i></span></p>
                        </div>
                        </div>
                    </div>
            </div>

        </VueSlickCarousel>


   </div>
  </div>
</template>

<script>
import slickSlider from '../mixins/slickSliderMixin'    

export default {
  name: 'collection',
  
  mixins:[slickSlider]
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid{
    max-width: 1270px;
}
.collection-card {
  margin-bottom: 10px;
}
.collection-card-img{
    width: 188px;
    height: 188px;
    border-radius: 50% !important;
    overflow: hidden;
    margin-left: auto !important;
    margin-right: auto !important;
}
.collection-card-img img{
    transition: all 0.5s ease;
}
.arrow{
    display: none;
}
.collection-card:hover .collection-card-img img{
    transform: scale(1.1)
}
.collection-card .collection-card-body .text{

    transition: all 0.7s ease !important;
}
.collection-card:hover .collection-card-body .text{
    margin-right: 1px;
    color: #ff6128;
}
.collection-card:hover .arrow{
    display: inline-block;
    color: #ff6128;
}
.collection-card .collection-card-body{
    margin-top: 10px;
    font-weight: bold;
    color: #3a2a2f;
}

@media (max-width: 1199.98px) { 
    .vueslickcarousel{
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }

}
@media (max-width: 991.98px) { 
    

}
@media (max-width: 767.98px) { 
    

}

</style>
