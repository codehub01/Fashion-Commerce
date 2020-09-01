<template>
  <div id="beauty-watches" class="vueslickcarousel-lg">
   <div class="container-fluid">
       <div class="row">
           <div class="col-12">
               <p class="heading">Beauty</p>
           </div>
       </div>

       
        <div class=" vueslickcarousel">
            <VueSlickCarousel class="text-dark" v-bind="slickOptionsBeauuty" :arrows="true" :dots="true" >

                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/product-image-1425840221_400x.jpg?v=1592555371" alt="">
                            <div class="save">
                                <p>Save ₦2,000</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Focallure</h5>
                                <p class="card-text">FOCALLURE Full Coverage Oil Control Matt Make-up Foundation</p>
                                <span class="price">₦3,400</span>
                            </div>
                            </div>
                        </div>
                </div>

                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Main_1_3e40a427-26e2-4e7f-aa1b-196e9d6820fc_400x.jpg?v=1580801616" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Focallure</h5>
                                <p class="card-text">FOCALLURE Full Coverage Oil Control Matt Make-up Foundation</p>
                                <span class="price">₦3,400</span>
                            </div>
                            </div>
                        </div>
                </div>


                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Main_1_cdb3d8e2-d84b-496d-8930-16811f28d673_400x.jpg?v=1575270389" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Focallure</h5>
                                <p class="card-text">FOCALLURE Full Coverage Oil Control Matt Make-up Foundation</p>
                                <span class="price">₦3,400</span>
                            </div>
                            </div>
                        </div>
                </div>


                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Main_1_fe9a97b5-8ae5-4e3b-8dd6-a9b20f4c56d8_400x.jpg?v=1575284540" alt="Card image cap">
                            <div class="save">
                                <p>Save ₦2,000</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Focallure</h5>
                                <p class="card-text">FOCALLURE Full Coverage Oil Control Matt Make-up Foundation</p>
                                <span class="price">₦3,400</span>
                            </div>
                            </div>
                        </div>
                </div>


                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/Cover3_35c8d891-def2-4aff-bc6d-c1fdeb060a9c_400x.jpg?v=1583432129" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Focallure</h5>
                                <p class="card-text">FOCALLURE Full Coverage Oil Control Matt Make-up Foundation</p>
                                <span class="price">₦3,400</span>
                            </div>
                            </div>
                        </div>
                </div>

                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/products/A_d8c991a8-637c-4ddc-b346-18b5737eb736_400x.jpg?v=1590429412" alt="Card image cap">
                            <div class="save">
                                <p>Save ₦2,000</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Focallure</h5>
                                <p class="card-text">FOCALLURE Full Coverage Oil Control Matt Make-up Foundation</p>
                                <span class="price">₦3,400</span>
                            </div>
                            </div>
                        </div>
                </div>

                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src= "https://cdn.shopify.com/s/files/1/0246/9327/6757/products/WhatsAppImage2020-07-30at2.35.15PM_400x.jpg?v=1596117586" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Focallure</h5>
                                <p class="card-text">FOCALLURE Full Coverage Oil Control Matt Make-up Foundation</p>
                                <span class="price">₦3,400</span>
                            </div>
                            </div>
                        </div>
                </div>


                <div>
                    <div class="">
                            <div class="card">
                            <img class="card-img-top" src="../assets/beauty-1.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Focallure</h5>
                                <p class="card-text">FOCALLURE Full Coverage Oil Control Matt Make-up Foundation</p>
                                <span class="price">₦3,400</span>
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
