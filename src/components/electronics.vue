<template>
  <div id="beauty-watches" class="vueslickcarousel-lg">
   <div class="container-fluid">
       <div class="row">
           <div class="col-12">
               <p class="heading">Electronics Accesories</p>
           </div>
       </div>

       
        <div class=" vueslickcarousel">
            <VueSlickCarousel class="text-dark" v-bind="slickOptionsBeauuty" :arrows="true" :dots="true" >

                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/PB66_Nemo-05-Overview_03_-_Copy_200x.jpg?v=1572273812" alt="">
                            <div class="save">
                                <p>Save ₦2,000</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">curren</h5>
                                <p class="card-text">CURREN Business Chronograph Men's Wrist Watch 8329</p>
                                <span class="price">₦3,400</span> <del class="ml-3">₦2,000</del> 
                            </div>
                            </div>
                        </div>
                </div>

                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/1_HTB1JhsoQNTpK1RjSZR0q6zEwXXaz_200x.jpg?v=1582893744" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">curren</h5>
                                <p class="card-text">CURREN Business Chronograph Men's Wrist Watch 8329</p>
                                <span class="price">₦3,400</span> <del class="ml-3">₦2,000</del>
                            </div>
                            </div>
                        </div>
                </div>


                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/5_ab6e64a5-156f-4a50-acbe-ce773041b426_200x.jpg?v=1571442872" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">curren</h5>
                                <p class="card-text">CURREN Business Chronograph Men's Wrist Watch 8329</p>
                                <span class="price">₦3,400</span> <del class="ml-3">₦2,000</del>
                            </div>
                            </div>
                        </div>
                </div>


                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Main_00_200x.jpg?v=1583407833" alt="Card image cap">
                            <div class="save">
                                <p>Save ₦2,000</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">curren</h5>
                                <p class="card-text">CURREN Business Chronograph Men's Wrist Watch 8329</p>
                                <span class="price">₦3,400</span> <del class="ml-3">₦2,000</del>
                            </div>
                            </div>
                        </div>
                </div>


                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Main_4_c6c756df-7495-47ad-9f9d-ca0634fede94_200x.jpg?v=1582891273" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">curren</h5>
                                <p class="card-text">CURREN Business Chronograph Men's Wrist Watch 8329</p>
                                <span class="price">₦3,400</span> <del class="ml-3">₦2,000</del>
                            </div>
                            </div>
                        </div>
                </div>

                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Main_2_9742e7e5-d5a8-4677-a1bf-3b3a7a1efb51_200x.jpg?v=1583422846" alt="Card image cap">
                            <div class="save">
                                <p>Save ₦2,000</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">curren</h5>
                                <p class="card-text">CURREN Business Chronograph Men's Wrist Watch 8329</p>
                                <span class="price">₦3,400</span> <del class="ml-3">₦2,000</del>
                            </div>
                            </div>
                        </div>
                </div>

                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Main_00_200x.jpg?v=1583407833" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">curren</h5>
                                <p class="card-text">CURREN Business Chronograph Men's Wrist Watch 8329</p>
                                <span class="price">₦3,400</span> <del class="ml-3">₦2,000</del>
                            </div>
                            </div>
                        </div>
                </div>


                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/3_9648141f-dc7e-4c9d-a7b0-84e4e4fc058d_200x.jpg?v=1571437886" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">curren</h5>
                                <p class="card-text">CURREN Business Chronograph Men's Wrist Watch 8329</p>
                                <span class="price">₦3,400</span> <del class="ml-3">₦2,000</del>
                            </div>
                            </div>
                        </div>
                </div>

            </VueSlickCarousel>
        </div>


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
.card{
    width: 17rem;
    border-collapse: collapse;
}
.card-body .card-title{
    margin-bottom: 6px;
    font-size: 12px;
    text-transform: uppercase;
    color: #3a2a2f;
}
.card-body .card-text{
    font-size: 14px;
    transition: color 0.2s ease-in-out;
    color: #3a2a2f;
    font-weight: bolder;
    margin-bottom: 12px;
}
.card-title:hover, .card-text:hover{
    color: #ff6128;
}
.price{
    font-size: 20px;
    color: #ff6128;
}
.save{
    position: absolute;
    background: #e00;
    color: #ffffff;
    top: 10px;
    padding: 4px 10px;
}
.save p{
    font-weight: bolder;
    font-size: 13px;
    margin-bottom: 0px;
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
    .card{
        margin-left: auto;
        margin-right: auto;
    }

}

</style>
