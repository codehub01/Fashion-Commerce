<template>
  <div>
   <div class="container-fluid">
       <div class="row">
           <div class="col-12">
               <p class="heading">Blog posts</p>
           </div>
       </div>

       <div class="row">
           <div class="col-md-4">
               <div class="">
                    <div class="card">
                    <img class="card-img-top" src="../assets/blog-1.jpg" alt="">
                    <div class="card-body pl-1">
                        <h5 class="card-title">MEET OUR INFLUENCER OF THE MONTH!</h5>
                        <p class="card-text"><span class="blog-cartegory">Beauty</span> <span>Aug 18, 2020</span></p>
                    </div>
                    </div>
                </div>
           </div>
           <div class="col-md-4">
               <div class="">
                    <div class="card">
                    <img class="card-img-top" src="../assets/blog-1.jpg" alt="">
                    <div class="card-body pl-1">
                        <h5 class="card-title">MEET OUR INFLUENCER OF THE MONTH!</h5>
                        <p class="card-text"><span class="blog-cartegory">Beauty</span> <span>Aug 18, 2020</span></p>
                    </div>
                    </div>
                </div>
           </div>
           <div class="col-md-4">
               <div class="">
                    <div class="card">
                    <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/articles/baner_2_ca17c953-6218-4abb-a5b7-c16a74ec60fd_500x.jpg?v=1594030866" alt="">
                    <div class="card-body pl-1">
                        <h5 class="card-title">MEET OUR INFLUENCER OF THE MONTH!</h5>
                        <p class="card-text"><span class="blog-cartegory">Beauty</span> <span>Aug 18, 2020</span></p> 
                    </div>
                    </div>
                </div>
           </div>
       </div>

   </div>
  </div>
</template>

<script>
export default {
  name: 'home',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid{
    max-width: 1270px;
}
.card{
    border: none;
    overflow: hidden;
}
.card-title{
    transition: color 0.3s ease;
}
.card-img-top{
    transition: transform 0.9s ease;
}
.card:hover .card-img-top{
    transform: scale(1.1);
}
.card:hover .card-title{
  color: #ff6128;
}
.card-text{
    font-size: 13px;
}
.blog-cartegory:after{
    display: inline-block;
    content: '';
    width: 5px;
    height: 5px;
    margin: -1px 10px 0 10px;
    border-radius: 100%;
    background: rgba(58,42,47,0.4);
    vertical-align: middle;
}


</style>
