<template>
    <div id="app">
        <nav>
            <div id="banner">
                <div class="container pd-x-30 pd-x-0-sm">
                    <!--<a href="/track" class="btn btn-track-order router-link-exact-active router-link-active"><strong>Track-->
                    <!--Order </strong>-->
                    <!--</a>-->
                    <span @click="closeNav">
                        <router-link class="btn btn-track-order" to="/track">
                            <strong>Track Order </strong>
                        </router-link>
                    </span>
                    <vue-typed-js :strings="[
                    'Experienced, Cross-Trained Personnel',
                    'Tenured Team',
                    'Management teams’ combined length of service',
                    'Turn-key, one-stop logistics',
                    'Diversity of product lines and services',
                    'Insured warehouse facilities',
                    'Ability to integrate the diversity of services',
                    'Integrated Web-tracking and Reporting',
                    'Automated Event Communication'
                    ]" :loop="true" :showCursor="false" :typeSpeed="80" :fadeOut="true">
                        <span class="typing"></span>
                    </vue-typed-js>
                </div>
            </div>
            <div id="navigation" class="container pd-x-30 pd-x-0-sm">
                <input type="checkbox" id="nav" class="hidden">
                <label for="nav" class="nav-btn">
                    <i></i>
                    <i></i>
                    <i></i>
                </label>
                <span class="logo"><router-link to="/"><img src="./assets/images/aries_animated_2011.gif"
                                                            alt="Logo"></router-link></span>
                <div class="nav-wrapper">
                    <ul class=navigation>
                        <li @click="closeNav" class="router-nav">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li @click="closeNav" class="router-nav">
                            <router-link to="/about">About</router-link>
                        </li>
                        <li @click="closeNav" class="router-nav">
                            <router-link to="/services">Services</router-link>
                        </li>
                        <li @click="closeNav" class="router-nav">
                            <router-link to="/case-studies">Studies</router-link>
                        </li>
                        <li @click="closeNav" class="router-nav">
                            <router-link to="/support">Support</router-link>
                        </li>
                        <li @click="closeNav" class="router-nav">
                            <router-link to="/contact">Contact</router-link>
                        </li>
                        <!--<li>-->
                        <!--<a href="#" id="search-trigger">-->
                        <!--<span class="search-icon"></span>-->
                        <!--</a>-->
                        <!--</li>-->
                    </ul>
                </div>
            </div>
        </nav>

        <div id="router-outlet">
            <router-view/>
        </div>


        <Footer msg="Footer Section"/>
    </div>
</template>


<style>
    @import url(./assets/styles.css);
    @import url(./assets/utilities.css);

    #app {
        font-family: 'Montserrat', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 1.125em;

        position: absolute;
        top: 0;
        width: 100%;
        margin: 0 !important;
    }

    /*#router-outlet {*/
    /*padding-top: 100px;*/
    /*}*/

    /*.router-nav {*/
    /*padding: 30px;*/
    /*}*/

    /*.router-nav a {*/
    /*font-weight: bold;*/
    /*text-decoration: none;*/
    /*font-family: 'Montserrat', 'Fira Sans Light', sans-serif;*/
    /*color: #2c3e50;*/
    /*}*/

    h1 {
        font-family: 'Fira Sans', sans-serif;
    }

    #banner {
        text-align: right;
        width: 100%;
        padding: 5px 0;
        background: #dc143b;
        position: absolute;
        z-index: 99;
    }

    #navigation {
        margin-top: 2em;
    }

    .typed-element {
        display: inline-block;
        text-align: center;
        float: left;
    }

    .typed-element span {
        font-family: 'Ubuntu Condensed', 'Segoe UI', sans-serif;
        padding-top: 4px;
        font-size: 17px;
    }

    .typing {
        display: inline;
        color: #FFFFFF;
        font-size: 10px;
    }

    @media screen and (max-width: 480px) {

        #banner {
            text-align: center;
        }

        .typing {
            display: none;
        }
    }

    .breadcrumb {
        margin-top: -2em;
        margin-bottom: 2em;
        text-transform: uppercase;
        font-size: .7em;
        color: #999999;
    }

    .breadcrumb a {
        color: #1A065A;
        font-weight: bold;
        text-decoration: none;
    }

</style>

<script>
   // @ is an alias to /src
   import Footer from '@/components/Footer.vue'

   export default {
      name: 'Home',
      metaInfo: {
         title: 'Aries Freight System'
      },
      methods: {
         closeNav() {
            if (document.getElementById ('nav').checked)
               document.getElementById ('nav').click ();
         }
      },
      components: {
         Footer
      }
   }
</script>