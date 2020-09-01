import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },
    data(){
        return{
            slickOptions:{
                "dots": true,
                "arrows": true,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 6,
                "slidesToScroll": 6,
                "initialSlide": 0,
                "responsive": [
                    {
                    "breakpoint": 1299,
                    "settings": {
                        "slidesToShow": 4,
                        "slidesToScroll": 4,
                        "infinite": false,
                        "dots": true,
                        "arrows": true,
                    }
                    },
                    {
                    "breakpoint": 991,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                    }
                ]
            },
            slickOptionsBeauuty:{
                "dots": true,
                "arrows": true,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 5,
                "slidesToScroll": 5,
                "initialSlide": 0,
                "responsive": [
                    {
                    "breakpoint": 1299,
                    "settings": {
                        "slidesToShow": 4,
                        "slidesToScroll": 4,
                        "infinite": false,
                        "dots": true,
                        "arrows": true,
                    }
                    },
                    {
                    "breakpoint": 991,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                    }
                ]
            },
            slickOptionsBags:{
                "dots": true,
                "arrows": true,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "initialSlide": 0,
                "responsive": [
                    {
                    "breakpoint": 1299,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "infinite": false,
                        "dots": true,
                        "arrows": true,
                    }
                    },
                    {
                    "breakpoint": 991,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                    }
                ]
            }
        }
    
      }
}