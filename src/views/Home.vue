<template>
    <div class="home">
        <div class="container text-white">
            <agile :arrows="false" :speed="750"
                   :timing="'linear'" :fade="true"
                   :autoplay="true" :pauseOnHover="false">
                <div class="slide template slide-item ocean-freight">
                    <div class="caption">
                        <h1>Warehousing and Logistics</h1>
                        <p>Aries Freight Systems has the full ability to intricately receive, control, and handle stock
                            across single and multiple warehouses</p>
                    </div>
                </div>

                <div class="slide template slide-item air-freight">
                    <div class="caption">
                        <h1>Ocean Shipping</h1>
                        <p>Aries Freight Systems offers a comprehensive approach and view to understanding your required
                            freight movements</p>
                    </div>
                </div>

                <div class="slide template slide-item haulage-freight">
                    <div class="caption">
                        <h1>Air Freight</h1>
                        <p>Aries Freight Systems keep your freight moving and address all the intricacies of Domestic
                            and International shipping</p>
                    </div>
                </div>

                <div class="slide template slide-item road-freight">
                    <div class="caption">
                        <h1>Ground Shipping</h1>
                        <p>We can custom tailor a domestic transportation solution for you, regardless of the size,
                            destination, or urgency of your shipments</p>
                    </div>
                </div>
            </agile>
        </div>
        <div class="container pd-x-30 lh-2">

            <div class="pd-y-50">
                <h3 class="text-blue">For {{ span }} years Aries Freight System has specialized in handling both
                    domestic and
                    international time sensitive
                    shipments.
                </h3>
                <p class="mt-1">Our goal has been to provide our customers with quality, cost
                    effective and dependable transportation services. With the foundation of our past, today we
                    focus on providing the highest standard of service and quality worldwide while setting the bar by
                    which all other independent transportation and logistics companies are measured.</p>
                <p class="mt-1">
                    It is our philosophy to do it right every time, to be an innovator — whenever possible.
                    This is immediately obvious in the services we offer: </p>
                <ul class="mt-2">
                    <li>
                        <router-link to="/services/air-freight-services">Air freight</router-link>
                    </li>
                    <li>
                        <router-link to="/services/ocean-shipping-services">Ocean shipping</router-link>
                    </li>
                    <li>
                        <router-link to="/services/warehousing-logistics-services">
                            Warehousing and logistics
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/services/crating-packing-services">Crating and packing</router-link>
                    </li>
                    <li>
                        <router-link to="/services">And more...</router-link>
                    </li>
                </ul>
            </div>

            <!--<h1 id="services" class="title">Services</h1>-->
            <!--<HomePageServices/>-->

        </div>
    </div>
</template>

<style scoped>
    ul {
        display: flex;
        flex-direction: row;
        list-style: inside none none;
    }

    ul li {
        padding-right: 2em;
    }

    ul li a {
        padding: .25em .5em;
        color: #dc143b;
        /*border-bottom: 1px solid #dc143b;*/
        letter-spacing: 2px;
        text-decoration: none;
        text-transform: uppercase;
        transition: all 300ms ease-out;
    }

    ul li a:hover {
        color: #dc143b;
        background: #EEEEEE;
    }

    @media screen and (max-width: 840px) {
        ul {
            flex-direction: column;
        }

        ul li {
            margin-bottom: .5em;
        }
    }

</style>

<style>
    .template {
        top: 0;
        width: 100%;
        z-index: -1;
        padding-top: 100px;
        position: absolute;
    }

    .agile__dots {
        bottom: 0;
        display: block;
        right: 40px;
        position: absolute;
        width: 30px;
    }

    .agile__dot {
        margin-bottom: 10px;
    }

    .agile__dot button {
        margin-top: 10px;
        margin-right: 10px;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid #fff;

        transition: all 300ms ease-out;
        width: 6px;
        height: 6px;
    }

    .agile__dot button:hover {
        background-color: #F36B5B;
        border: 1px solid #F36B5B;
    }

    .agile__dot--current button {
        background-color: #F36B5B;
        border: 1px solid #F36B5B;
    }

    .slide {
        /*background-position: center;*/
        /*background-size: contain;*/
        /*height: 500px;*/
    }

    .slide-item {
        height: 80vh;
        padding: 100px 30px 0;
        position: relative;
    }

    .slide-item .caption {
        background: rgba(0, 0, 0, .65);
        padding: 1em 3em 2em;
        position: relative;
        margin-top: 15%;
        width: 60%;
        line-height: 2;
    }

    @media screen and (max-width: 864px) {
        .slide-item {
            height: 70vh;
        }

        .slide-item .caption {
            padding: 1em 2em 2em;
            width: 100%;
        }

        .slide-item .caption h1 {
            line-height: 1;
            margin-bottom: .5em;
        }
    }

    @media screen and (max-width: 480px) {
        .slide-item .caption {
            display: none;
        }
    }

    .slide-item h1 {
        text-transform: uppercase;
        font-size: 2em;
    }

    .ocean-freight {
        background: url("../assets/images/slides/warehousing-e1472743206476.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .air-freight {
        background: url("../assets/images/slides/AdobeStock_56987728.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .road-freight {
        background: url("../assets/images/slides/AdobeStock_14320831-e1472740146585.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .haulage-freight {
        background: url("../assets/images/slides/AdobeStock_95648980.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    h1.title {
        color: #AAAAAA;
        font-size: 2.5em;
        letter-spacing: 5px;
        text-transform: uppercase;
    }

</style>

<script>
   // @ is an alias to /src
   import HomePageServices from '@/components/HomePageServices.vue'

   export default {
      name: 'home',
      data() {
         return {
            span: (new Date ().getFullYear () - 1984)
         }
      },
      components: {
         HomePageServices
      }
   }
</script>
