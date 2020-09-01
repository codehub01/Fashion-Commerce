<template>

    <div class="header">
      <div class="container-fluid">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="logo order-1">
            <img src="" class="img-fluid" alt="">
            <img src="../assets/logo.png" class="img-fluid" alt="">
          </div>
          <div class="search order-4 order-md-2">
            <div class="input-group mb-3 ">
              <input type="text" class="form-control" placeholder="Search...." aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"> <i class="fa fa-search text-white"></i> </span>
              </div>
            </div>
          </div>
    
          <div class="account order-2">
            <span class="account-title d-none d-lg-inline-block">login / sign up</span>
            <div class="dropdown show">
              <a class="dropdown-toggle account-drop-down text-center text-lg-left" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="d-none d-lg-inline-block">My Account</span> <i class="fa fa-user d-lg-none"></i>
              </a>

              <div class="dropdown-menu text-center animate__animated animate__fadeInUp animate__faster" aria-labelledby="dropdownMenuLink">
                <h5 class="popover-title">Login to my account</h5>
                <p>Enter your email and password:</p>
                <input type="email" class="form-control form-field" placeholder="Email" name="" id="">
                <input type="password" class="form-control form-field mt-3" placeholder="Password" name="" id="">
                <button class="btn text-center login-btn">Login</button>
                <div class="text-center mt-4">
                  <span class="d-inline-block create-account">New customer? <a href="#">Create your account</a></span>
                  <span class="d-inline-block forget-password">Lost password? <a href="#">Recover password</a></span>
                </div>
              </div>
            </div>
          </div>
    
          <div class="cart order-3">
            <div class="header-cart d-flex justify-content-center">
              <div class="cart-icon">
                <i class="fa fa-shopping-cart"></i>
              </div> 
              <div class=" ml-3 mt-1 ">
                <span class="cart-title d-none d-lg-block">cart</span>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
</template>

<script>
export default {
  name: 'header',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid{
    max-width: 1300px;
}
.header{
 background: #3a2a2f;
 padding-top: 20px;
}
.logo{
    width: 20%;
}
.search{
    width: 50%;
}

.search .input-group-text{
    background: #ff6128 !important;
    border-radius: 0 3px 3px 0;
    border: 1px solid #ff6128;
}
.account{
    width: 10%;
}
.account .account-title{
    display: block;
    color: #e9e2dd;
    font-size: 14px;
    font-weight: normal;
}
.account .account-drop-down{
    display: block;
    font-weight: bolder;
    font-size: 16px;
    color: white;
}
.account .account-drop-down:hover{
  text-decoration: none;
}
.dropdown-menu.show {
    display: block;
    padding: 1.5rem 1rem;
    width: 330px;
    margin-top: 27px;
    margin-left: -120px;
}
.dropdown-menu::before{
 font-family: FontAwesome;
  content:"\f0d8";
  position: absolute;
  color: white;
  font-size: 40px;
  top: -34px;
}
.popover-title {
    margin-bottom: 8px;
    font-size: 18px;
}
.form-field {
    display: block;
    padding: 12px 12px;
    border-radius: 2px;
    border: 1px solid #dcd5cf;
    width: 100%;
    line-height: normal;
    height: 48px;
    color: #3a2a2f;
    resize: none;
    font-size: 1rem;
}
.login-btn{
  width: 100%;
  margin-top: 30px;
      padding: 0 30px;
    line-height: 48px;
    border-radius: 2px;
    text-align: center;
    font-weight: bolder;
    font-size: 15px;
    cursor: pointer;
    background: #ff6128;
    color: white;
}
.create-account, .forget-password{
  font-size: 13px;
}
.cart{
  text-align: center;
    width: 10%;
    color: white;
}
.cart .header-cart{
  display: block;
  border-left: 1px solid rgba(233,226,221,0.3);;
}
.cart .cart-title{
  font-weight: bolder;
    font-size: 16px;
}
.fa-user, .fa-shopping-cart{
  font-size: 30px;
}

@media (max-width: 1199px) { 
    .dropdown-toggle::after{
      display: inline-block;
    }
}
@media (max-width: 991px) { 
  .cart .header-cart{
  border-left: none;;
}
.logo{
  margin-left: 60px;
  width:40%;
}
.search{
  width: 35%;
}
.account{
  width: 3%;
}
.dropdown-toggle::after{
    display: none !important;
  }
.dropdown-menu.show{
  margin-top: 45px;
    margin-left: -250px;
}
.dropdown-menu::before{
  right: 55px;
}
.cart{
  width: 3%;
}

}
@media (max-width: 767px) { 
  .logo{
    margin-left: 40px;
    width: 63%;
  }
  .account{
    width: 5%;
  }
  .dropdown-toggle::after{
    display: none;
  }
  .dropdown-menu.show{
    width: 300px;
  }
  .dropdown-menu::before{
  right: 28px;
}
  .cart{
    width: 5%;
  }
  .search{
    width: 100%;
    margin-top: 20px;
  }


}
</style>
