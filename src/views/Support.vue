<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header support">
                <div class="overlay">
                    <h1>Support</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                / Support
            </p>
            <div class="full-page">
                <div id="sidebar" class="sidebar">
                    <ul>
                        <li><a href="#service" v-scroll-to="{el: '#banner', offset: -100, force: true,}">
                            Service</a></li>
                        <li><a href="#documents" v-scroll-to="{el: '#documents', offset: -100}">Documents</a></li>
                        <li><a href="#glossary" v-scroll-to="{el: '#glossary', offset: -100}">Glossary</a></li>
                        <li><a href="#resources" v-scroll-to="{el: '#resources', offset: -100}">Resources</a></li>
                        <li><a href="#tools" v-scroll-to="{el: '#tools', offset: -100}">Tools</a></li>
                    </ul>
                </div>
                <main>
                    <section id="service" v-inview:enter="inView">
                        <p>We want to provide the highest standard of service and quality for our Customers
                            worldwide and be
                            the benchmark of quality and service by which independent transportation and logistics
                            companies of the world are graded.</p>
                        <p class="mt-1">Therefore, <strong>the way we support our customer is just as important as the movement
                            of
                            freight.</strong></p>
                        <p class="mt-1"> If you encounter any problems, please
                            <router-link to="/">contact us</router-link>
                            and our Personal Service team will follow-up
                            with you promptly.
                        </p>
                        <p class="mt-1">Below are some commonly used tools to help you with your shipping needs</p>
                    </section>
                    <section id="documents" v-inview:enter="inView">
                        <h2>Documents Library</h2>
                        <img src="../assets/images/background/support/documents.jpg">
                        <p class="mt-2">First time customers require a place to start. We have assembled the first set
                            of documents
                            you will need to begin the journey with us.</p>
                        <router-link to="/support/documents">Browse Library...</router-link>
                    </section>
                    <section id="glossary" v-inview:enter="inView">
                        <h2>Glossary of Terms</h2>
                        <img src="../assets/images/background/support/glossary_of_terms.jpg">
                        <p class="mt-2">Unfamiliar with a term that is specific to the logistics and transportation
                            industry? Our carefully curated glossary will guide you through commonly used words and
                            terminologies.</p>
                        <router-link to="/support/glossary">Read More...</router-link>
                    </section>
                    <section id="resources" v-inview:enter="inView">
                        <h2>Online Resources</h2>
                        <img src="../assets/images/background/support/resources.jpg">
                        <p class="mt-2">Need to know more about the service industry supporting your transportation
                            goals? A number of websites have been assembled to fill your knowledge gap.</p>
                        <router-link to="/support/resources">Explore Resources...</router-link>
                    </section>
                    <section id="tools" v-inview:enter="inView">
                        <h2>Tools and Calculators</h2>
                        <img src="../assets/images/background/support/tools_and_calculators.jpg">
                        <p class="mt-2">Distance, Country Codes, Weights and Conversions. Knowing these wil help
                            you determine many factors associated with your shipments.</p>
                        <router-link to="/support/tools">Explore Tools...</router-link>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .service .support {
        background: url("../assets/images/background/support/customer-care-office.png") no-repeat fixed center;
        background-size: cover;
    }

</style>

<script>
   import AriesDifference from "../components/AriesDifference";

   export default {
      name: 'Support',
      metaInfo: {
         titleTemplate: '%s | Customer Support'
      },
      components: {AriesDifference},
      methods: {
         inView($v) {
            const __current = '#' + $v.id;
            const mainNavLinks = document.querySelectorAll (".sidebar li a");
            mainNavLinks.forEach (link => {
               if (__current === link.hash) {
                  link.classList.add ("current");
               } else {
                  link.classList.remove ("current");
               }
            });
         }
      },
   }
</script>