<template>
  <div>
   <div class="container-fluid mb-5">

       <div class="row">
           <div class="col-md-6 col-lg-3 mt-5">
               <div class="d-flex">
                    <div>
                        <svg viewBox="0 0 24 24" role="presentation" style="width:30px; height:30px;">
                        <g stroke-width="1.5" fill="none" fill-rule="evenodd">
                            <path d="M6.5 3.25l12 6" stroke="#ff6128"></path>
                            <path stroke="#3a2a2f" d="M23 7l-10 5L1 6M13 12v11"></path>
                            <path stroke="#3a2a2f" stroke-linecap="square" d="M23 7v10l-10 6-12-6V6l10-5z"></path>
                        </g>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p  class="delivery-type">Door Delivery Nationwide</p>
                        <span class="delevery-details">Quick door to door nationwide delivery service</span>
                    </div>
                </div>
           </div>
           <div class="col-md-6 col-lg-3 mt-5">
               <div class="d-flex">
                    <div>
                        <svg viewBox="0 0 23 24" role="presentation" style="width:30px; height:30px;">
                        <g transform="translate(1 1)" stroke-width="1.5" fill="none" fill-rule="evenodd">
                            <path stroke="#ff6128" d="M8 4h8v7"></path>
                            <path stroke="#ff6128" stroke-linecap="square" d="M11 7L8 4l3-3"></path>
                            <circle stroke="#3a2a2f" stroke-linecap="square" cx="6" cy="20" r="2"></circle>
                            <circle stroke="#3a2a2f" stroke-linecap="square" cx="18" cy="20" r="2"></circle>
                            <path stroke="#3a2a2f" stroke-linecap="square" d="M21 5l-2 10H5L3 0H0"></path>
                        </g>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p  class="delivery-type">Satisfied or refunded</p>
                        <span class="delevery-details">Easy returns and refunds on any damaged items</span>
                    </div>
                </div>
           </div>
           <div class="col-md-6 col-lg-3 mt-5">
               <div class="d-flex">
                    <div>
                        <svg viewBox="0 0 24 24" role="presentation" style="width:30px; height:30px;">
                        <g stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="square">
                            <path d="M10 17H4c-1.7 0-3 1.3-3 3v3h12v-3c0-1.7-1.3-3-3-3zM7 14c-1.7 0-3-1.3-3-3v-1c0-1.7 1.3-3 3-3s3 1.3 3 3v1c0 1.7-1.3 3-3 3z" stroke="#3a2a2f"></path>
                            <path stroke="#ff6128" d="M13 1v10l4-3h6V1z"></path>
                        </g>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p  class="delivery-type">Top-notch support</p>
                        <span class="delevery-details">Reliable 24/7 customer service team.</span>
                    </div>
                </div>
           </div>
           <div class="col-md-6 col-lg-3 mt-5">
               <div class="d-flex">
                    <div>
                        <svg viewBox="0 0 23 24" role="presentation" style="width:30px; height:30px;">
                        <g stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="square">
                            <path d="M1 5h22M1 9h22M9 17H3c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v10M5 13h5" stroke="#3a2a2f"></path>
                            <path stroke="#ff6128" d="M13 16h8v7h-8zM15 16v-2c0-1.1.9-2 2-2s2 .9 2 2v2M17 19v1"></path>
                        </g>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <p  class="delivery-type">Pay on Delivery</p>
                        <span class="delevery-details">Pay on delivery or card transactions</span>
                    </div>
                </div>
           </div>
       </div>

   </div>
  </div>
</template>

<script>
export default {
  name: 'deliveryoption',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid{
    max-width: 1270px;
}
.delivery-type{
    color: #3a2a2f;
    font-weight: bolder;
    margin-bottom: 4px;
    font-size: 15px;
}
.delivery-details{
    font-size: 15px;
    color: #3a2a2f;
}

</style>
