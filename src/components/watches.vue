<template>
  <div id="watches" class="vueslickcarousel-lg">
   <div class="container-fluid">
       <div class="row">
           <div class="col-12">
               <p class="heading">Watches</p>
           </div>
       </div>

       
        <div class=" vueslickcarousel">
            <VueSlickCarousel class="text-dark" v-bind="slickOptionsBeauuty" :arrows="true" :dots="true" >

                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Black_5bdafb17-0a05-430b-9839-a53a31a9b112_400x.jpg?v=1579922015" alt="">
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
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Brown_Gold_3_400x.jpg?v=1581588028" alt="Card image cap">
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
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Brown_Gold_400x.jpg?v=1582388921" alt="Card image cap">
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
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Brown_Rose_Gold_1_400x.jpg?v=1579191354" alt="Card image cap">
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
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/3_770512e3-e310-4b3f-9713-624661a1bd47_400x.jpg?v=1571293879" alt="Card image cap">
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
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/2_a96a777b-df65-46fe-8bc8-b1918884b985_400x.jpg?v=1571185154" alt="Card image cap">
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
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/3_770512e3-e310-4b3f-9713-624661a1bd47_400x.jpg?v=1571293879" alt="Card image cap">
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
                            <img class="card-img-top" src="../assets/watches-1.jpg" alt="Card image cap">
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
        width: 98%;
    } 
}
@media (max-width: 991.98px) { 

}
@media (max-width: 767.98px) { 
    .vueslickcarousel{
        width: 90%;
    }
    .card, .vueslickcarousel{
        margin-left: auto;
        margin-right: auto;
    }

}

</style>
