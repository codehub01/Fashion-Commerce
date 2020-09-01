<template>

    <div id="navbar" class="bg-white">
        <div class="container-fluid app-navbar">
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="nav-menu"></div>
                    <div class="nav-menu"></div>
                    <div class="nav-menu"></div>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" v-on:click="show" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cartegories
                        </a>
                        <div class="dropdown-menu nav-drop" aria-labelledby="navbarDropdownMenuLink">
                            <div class="d-flex flex-wrap flex-column flex-lg-row">
                                <div class="tabs-warpper">
                                    <div class="tab">
                                        <input type="checkbox" id="chck1">
                                        <label class="tab-label tab-title-text" for="chck1">Watches</label>
                                        <div class="tab-content">
                                            <ul class="">
                                                <li><a class="tab-links">Curren</a></li>
                                                <li><a class="tab-links">Kinyued</a></li>
                                                <li><a class="tab-links">Migeer</a></li>
                                                <li><a class="tab-links">Naviforce</a></li>
                                                <li><a class="tab-links">Shaarms</a></li>
                                                <li><a class="tab-links">Skmei</a></li>
                                                <li><a class="tab-links">Tevise</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div class="tabs-warpper">
                                    <div class="tab">
                                        <input type="checkbox" id="chck2">
                                        <label class="tab-label tab-title-text" for="chck2">Beauty</label>
                                        <div class="tab-content">
                                            <ul>
                                                <li><a class="tab-links">Focallure</a></li>
                                                <li><a class="tab-links">Sace Lady</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div class="tabs-warpper">
                                    <div class="tab">
                                        <input type="checkbox" id="chck3">
                                        <label class="tab-label tab-title-text" for="chck3">Fashion</label>
                                        <div class="tab-content">
                                            <ul>
                                                <li><a class="tab-links">Jewelries</a></li>
                                                <li><a class="tab-links">Laggage and Bags</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div class="tabs-warpper">
                                    <div class="tab">
                                        <input type="checkbox" id="chck4">
                                        <label class="tab-label tab-title-text" for="chck4">Clothing</label>
                                        <div class="tab-content">
                                            <ul>
                                                <li><a class="tab-links">Trousers</a></li>
                                                <li><a class="tab-links">Sneakers</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                 <div class="tabs-warpper">
                                    <div class="tab">
                                        <input type="checkbox" id="chck5">
                                        <label class="tab-label tab-title-text" for="chck5">Electronics</label>
                                        <div class="tab-content">
                                          
                                        </div>
                                    </div>

                                </div>

                                <div class="nav-cards d-flex">

                                    <div>
                                        <div class="">
                                            <div class="card">
                                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/files/nav1_550x.jpg?v=1586721810" alt="">
                                            <div class="card-body ">
                                                <h5 class="card-title">Best Selling Wristwatch</h5>
                                                <p class="card-text">Shop some of these products and find out why they are best selling</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="">
                                            <div class="card">
                                            <img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0246/9327/6757/files/nav2_550x.jpg?v=1586722032" alt="">
                                            <div class="card-body text-center">
                                                <h5 class="card-title">Best Selling Beauty Bundle(Park 3)</h5>
                                                <p class="card-text">Tried and Trusted. Check the bundle pack out</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Wholesale</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">LifeStyle and Beauty Tips</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contactless Delevery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>
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
.container-fluid{
    max-width: 1340px;
}
.dropdown-menu{
    width: 100vw !important;
    left: -34px !important;
    padding: 30px;
}
.nav-item.dropdown:hover .dropdown-menu{
    display: block;
}
.nav-item{
    margin-right: 30px;
}
.nav-link{
    font-size: 13px;
    color: black !important;
    transition: all 0.3s ease;
}
.nav-link:hover{
    color: #ff6128 !important;
}
.dropdown-toggle::after {
    position: absolute;
    display: inline-block;
    margin-left: 0em;
    vertical-align: 0em;
    margin-left: 5px;
    font-family: FontAwesome;
    content:"\f078";
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-left: none;
}
.tabs-warpper{
    margin: 0 30px 30px 30px;
}
.tab-title-text{
    font-weight: 500;
    font-style: normal;
    color: #3a2a2f;
}
.tab-content ul {
    list-style: none;
}
.tab-links{
    display: block;
    padding: 5px 0 6px 0;
    line-height: 1.4;
    color: inherit;
    text-decoration: none;
}
.card{
    border: none;
    overflow: hidden;
    margin: 0 30px 30px 30px;
    width: 240px;
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
input[type=checkbox], input[type=radio]{
    display: none;
}
@media (max-width: 1199px) { 

    
}
@media (max-width: 991px) { 
.navbar{
    padding: 0px !important;
}
.nav-menu {
  width: 20px;
  border-bottom: 2px solid white;
  margin-bottom: 4px;
}
.navbar-toggler{
    position: absolute;
    top: -40px;
    left: -10px;
    border: none;
}
.navbar-nav{
    padding: .5rem 1rem;
}
.dropdown-menu{
    border: none;
    padding: 10px 30px;
}
.tabs-warpper{
    margin: 0 0px 10px 0px;
}
.card{
    margin: 0px 30px 0px 0px;
}
.tab-content ul{
    margin-left: 10px;
}
.tab-title-text{
    font-weight: bold;
}
.tab {
    width: 100%;
    overflow: hidden;
}
.tab-label {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
            /* justify-content: space-between; */
    cursor: pointer;
    /* Icon */
}
.tab-label::after {
    content: "\276F";
    margin-left: 10px;
    width: 1rem;
    height: 1em;
    text-align: center;
    -webkit-transition: all .35s;
    transition: all .35s;
}
.tab-content {
    max-height: 0;
    -webkit-transition: all .35s;
    transition: all .35s;
}
input:checked + .tab-label::after {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
}
input:checked ~ .tab-content {
    max-height: 100vh;
} 

}
@media (max-width: 767px) { 
.navbar-toggler{
    position: absolute;
    top: -95px;
    left: -10px;
    border: none;
}
.navbar-toggler-icon{
    font-size: 12px;
}
.nav-cards{
    overflow-x: scroll !important;
    width: 100%;
}
}
</style>
