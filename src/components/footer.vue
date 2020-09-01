<template>
  <div class="container-fluid">
    <div class="row jutify-content-between mb-5">
      <div class="col-md-7 about">
        <div class="tab">
          <input type="checkbox" id="chck6" />
          <label class="tab-label footer-title-text" for="chck6">ABOUT ORIENTAL SELECTED</label>
          <div class="tab-content">
            <span
              class="footer-text"
            >Oriental Selected is a Fashion Lifestyle brand, essentially created to provide great quality products at affordable prices; ranging from luxury wrist watches, bags, make-up, sneakers, home and electronic appliances. We are also committed to the empowerment of Traditional retailers and wholesalers. Don’t miss out! Subscribe to our mailing list and become a part of our Oriental Family!</span>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-2 quick-links">
        <div class="tab">
          <input type="checkbox" id="chck7" />
          <label class="tab-label footer-title-text" for="chck7">QUICK LINKS</label>
          <div class="tab-content">
            <ul>
              <li>
                <a class="footer-text" href="#">Blog</a>
              </li>
              <li>
                <a class="footer-text" href="#">FAQ</a>
              </li>
              <li>
                <a class="footer-text" href="#">Privacy Policy</a>
              </li>
              <li>
                <a class="footer-text" href="#">Refund Policy</a>
              </li>
              <li>
                <a class="footer-text" href="#">Terms of Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3 newsletter">
        <p class="footer-title-text">NEWSLETTER</p>
        <p class="footer-text">Sign up for our weekly fashion updates, latest trends and blog posts</p>
        <div class="form__input-wrapper form__input-wrapper--labelled">
          <input type="email" class="form__field form__field--text" />
          <label class="form__floating-label">Your email</label>
        </div>
        <button class="btn subscribe-btn">Subscribe</button>
      </div>
    </div>

    <!-- copy write -->
    <div class="d-flex flex-wrap flex-column flex-lg-row mb-5">
      <div class="mt-3 order-2 order-lg-1">
        <p>© Oriental Selected</p>
      </div>

      <div class="mt-3 ml-lg-auto order-1 order-lg-2">
        <p>Follow Us</p>
        <span>
          <svg class="icon icon--facebook" viewBox="0 0 30 30">
            <path
              d="M15 30C6.71572875 30 0 23.2842712 0 15 0 6.71572875 6.71572875 0 15 0c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15zm3.2142857-17.1429611h-2.1428678v-2.1425646c0-.5852979.8203285-1.07160109 1.0714928-1.07160109h1.071375v-2.1428925h-2.1428678c-2.3564786 0-3.2142536 1.98610393-3.2142536 3.21449359v2.1425646h-1.0714822l.0032143 2.1528011 1.0682679-.0099086v7.499969h3.2142536v-7.499969h2.1428678v-2.1428925z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        </span>

        <span>
          <svg class="icon icon--instagram" role="presentation" viewBox="0 0 30 30">
            <path
              d="M15 30C6.71572875 30 0 23.2842712 0 15 0 6.71572875 6.71572875 0 15 0c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15zm.0000159-23.03571429c-2.1823849 0-2.4560363.00925037-3.3131306.0483571-.8553081.03901103-1.4394529.17486384-1.9505835.37352345-.52841925.20532625-.9765517.48009406-1.42331254.926823-.44672894.44676084-.72149675.89489329-.926823 1.42331254-.19865961.5111306-.33451242 1.0952754-.37352345 1.9505835-.03910673.8570943-.0483571 1.1307457-.0483571 3.3131306 0 2.1823531.00925037 2.4560045.0483571 3.3130988.03901103.8553081.17486384 1.4394529.37352345 1.9505835.20532625.5284193.48009406.9765517.926823 1.4233125.44676084.446729.89489329.7214968 1.42331254.9268549.5111306.1986278 1.0952754.3344806 1.9505835.3734916.8570943.0391067 1.1307457.0483571 3.3131306.0483571 2.1823531 0 2.4560045-.0092504 3.3130988-.0483571.8553081-.039011 1.4394529-.1748638 1.9505835-.3734916.5284193-.2053581.9765517-.4801259 1.4233125-.9268549.446729-.4467608.7214968-.8948932.9268549-1.4233125.1986278-.5111306.3344806-1.0952754.3734916-1.9505835.0391067-.8570943.0483571-1.1307457.0483571-3.3130988 0-2.1823849-.0092504-2.4560363-.0483571-3.3131306-.039011-.8553081-.1748638-1.4394529-.3734916-1.9505835-.2053581-.52841925-.4801259-.9765517-.9268549-1.42331254-.4467608-.44672894-.8948932-.72149675-1.4233125-.926823-.5111306-.19865961-1.0952754-.33451242-1.9505835-.37352345-.8570943-.03910673-1.1307457-.0483571-3.3130988-.0483571zm0 1.44787387c2.1456068 0 2.3997686.00819774 3.2471022.04685789.7834742.03572556 1.2089592.1666342 1.4921162.27668167.3750864.14577303.6427729.31990322.9239522.60111439.2812111.28117926.4553413.54886575.6011144.92395217.1100474.283157.2409561.708642.2766816 1.4921162.0386602.8473336.0468579 1.1014954.0468579 3.247134 0 2.1456068-.0081977 2.3997686-.0468579 3.2471022-.0357255.7834742-.1666342 1.2089592-.2766816 1.4921162-.1457731.3750864-.3199033.6427729-.6011144.9239522-.2811793.2812111-.5488658.4553413-.9239522.6011144-.283157.1100474-.708642.2409561-1.4921162.2766816-.847206.0386602-1.1013359.0468579-3.2471022.0468579-2.1457981 0-2.3998961-.0081977-3.247134-.0468579-.7834742-.0357255-1.2089592-.1666342-1.4921162-.2766816-.37508642-.1457731-.64277291-.3199033-.92395217-.6011144-.28117927-.2811793-.45534136-.5488658-.60111439-.9239522-.11004747-.283157-.24095611-.708642-.27668167-1.4921162-.03866015-.8473336-.04685789-1.1014954-.04685789-3.2471022 0-2.1456386.00819774-2.3998004.04685789-3.247134.03572556-.7834742.1666342-1.2089592.27668167-1.4921162.14577303-.37508642.31990322-.64277291.60111439-.92395217.28117926-.28121117.54886575-.45534136.92395217-.60111439.283157-.11004747.708642-.24095611 1.4921162-.27668167.8473336-.03866015 1.1014954-.04685789 3.247134-.04685789zm0 9.26641182c-1.479357 0-2.6785873-1.1992303-2.6785873-2.6785555 0-1.479357 1.1992303-2.6785873 2.6785873-2.6785873 1.4793252 0 2.6785555 1.1992303 2.6785555 2.6785873 0 1.4793252-1.1992303 2.6785555-2.6785555 2.6785555zm0-6.8050167c-2.2790034 0-4.1264612 1.8474578-4.1264612 4.1264612 0 2.2789716 1.8474578 4.1264294 4.1264612 4.1264294 2.2789716 0 4.1264294-1.8474578 4.1264294-4.1264294 0-2.2790034-1.8474578-4.1264612-4.1264294-4.1264612zm5.2537621-.1630297c0-.532566-.431737-.96430298-.964303-.96430298-.532534 0-.964271.43173698-.964271.96430298 0 .5325659.431737.964271.964271.964271.532566 0 .964303-.4317051.964303-.964271z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        </span>

        <span>
          <svg class="icon icon--youtube" role="presentation" viewBox="0 0 30 30">
            <path
              d="M15 30c8.2842712 0 15-6.7157288 15-15 0-8.28427125-6.7157288-15-15-15C6.71572875 0 0 6.71572875 0 15c0 8.2842712 6.71572875 15 15 15zm7.6656364-18.7823145C23 12.443121 23 15 23 15s0 2.5567903-.3343636 3.7824032c-.184.6760565-.7260909 1.208492-1.4145455 1.3892823C20.0033636 20.5 15 20.5 15 20.5s-5.00336364 0-6.25109091-.3283145c-.68836364-.1807903-1.23054545-.7132258-1.41454545-1.3892823C7 17.5567903 7 15 7 15s0-2.556879.33436364-3.7823145c.184-.6761452.72618181-1.2085807 1.41454545-1.38928227C9.99663636 9.5 15 9.5 15 9.5s5.0033636 0 6.2510909.32840323c.6884546.18070157 1.2305455.71313707 1.4145455 1.38928227zm-9.302 6.103758l4.1818181-2.3213548-4.1818181-2.3215322v4.642887z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  max-width: 1270px;
}
.footer-title-text {
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  color: #3a2a2f;
}
.footer-text {
  color: #3a2a2f;
  line-height: 30px;
  font-size: 15px;
}
.about,
.quick-links,
.newsletter {
  margin-top: 20px;
}
.quick-links ul {
  margin-top: 10px;
  margin-left: 10px;
  list-style: none;
}
.quick-links li a {
  color: #3a2a2f;
}
.quick-links li a:hover {
  color: #ff6128;
  text-decoration: none;
}
.email-input {
  /* padding: 12px 12px 0px 12px; */
  padding-bottom: 0px;
  border-radius: 2px;
  border: 1px solid #dcd5cf;
  width: 100%;
  line-height: normal;
  height: 58px;
  color: #3a2a2f;
  font-size: 1rem;
  box-shadow: 0 1px rgba(220, 213, 207, 0.25) inset;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
}
.subscribe-btn {
  margin-top: 15px;
  background-color: #ff6128;
  color: white;
  padding: 10px 25px;
}
.icon {
  margin-right: 10px;
  width: 28px;
  height: 28px;
  opacity: 0.4;
  transition: color 0.25s ease-in-out, opacity 0.25s ease-in-out;
}
.icon--facebook:hover {
  color: #39599f;
  opacity: 1;
}
.icon--instagram:hover {
  color: #e1306c;
  opacity: 0.9;
}
.icon--youtube:hover {
  color: red;
  opacity: 1;
}
input[type="checkbox"],
input[type="radio"] {
  display: none;
}
.form__input-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 12px;
}
.form__input-wrapper--labelled .form__field {
  padding-top: 20px;
  padding-bottom: 3px;
}

.form__field {
  display: block;
  padding: 12px 12px;
  border-radius: 2px;
  border: 1px solid #dcd5cf;
  width: 100%;
  line-height: normal;
  height: 48px;
  color: #3a2a2f;
  -webkit-appearance: none;
  resize: none;
  font-size: 1rem;
  box-shadow: 0 1px rgba(220, 213, 207, 0.25) inset;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

.form__floating-label {
  position: absolute;
  left: 13px;
  top: 0;
  line-height: 48px;
  font-size: 1rem;
  color: #3a2a2f;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  pointer-events: none;
}
.form__field--text:focus + .form__floating-label {
  transform: scale(0.7);
  font-size: 13px;
}
@media (max-width: 767.98px) {
  .about,
  .quick-links,
  .newsletter {
    border-top: 1px solid rgb(226, 226, 226);
    padding-top: 40px;
    padding-bottom: 10px;
  }
  .tab {
    width: 100%;
    overflow: hidden;
  }
  .tab-label {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    cursor: pointer;
  }
  .tab-label::after {
    content: "\276F";
    width: 1em;
    height: 1em;
    text-align: center;
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
  }
  .tab-content {
    max-height: 0;
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
  }
  input:checked + .tab-label::after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  input:checked ~ .tab-content {
    max-height: 100vh;
  }
}
</style>
