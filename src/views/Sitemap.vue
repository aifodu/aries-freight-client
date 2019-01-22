<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header sitemap">
                <div class="overlay">
                    <h1>Sitemap</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                / Sitemap
            </p>
            <div>
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                        <ul>
                            <li><router-link to="/about">About</router-link></li>
                            <li><router-link to="/services">Services</router-link>
                                <ul>
                                    <li><router-link to="/services/air-freight-services">Air Freight</router-link></li>
                                    <li><router-link to="/services/crating-packing-services">Crating & Packing</router-link></li>
                                    <li><router-link to="/services/customs-brokerage-services">Customs Brokerage</router-link></li>
                                    <li><router-link to="/services/expedited-cargo-services">Expedited Cargo</router-link></li>
                                    <li><router-link to="/services/ground-shipping-services">Ground Shipping</router-link></li>
                                    <li><router-link to="/services/ocean-shipping-services">Ocean Shipping</router-link></li>
                                    <li><router-link to="/services/project-cargo-services">Project Cargo</router-link></li>
                                    <li><router-link to="/services/trade-compliance-services">Trade Compliance</router-link></li>
                                    <li><router-link to="/services/warehousing-logistics-services">Warehousing & Logistics</router-link></li>
                                </ul>
                            </li>
                            <li><router-link to="/case-studies">Studies</router-link></li>
                            <li><router-link to="/support">Support</router-link>
                                <ul>
                                    <li></li>
                                    <li><router-link to="/support/documents">Documents</router-link></li>
                                    <li><router-link to="/support/glossary">Glossary</router-link></li>
                                    <li><router-link to="/support/resources">Resources</router-link></li>
                                    <li><router-link to="/support/tools">Tools</router-link></li>
                                </ul>
                            </li>
                            <li><router-link to="/contact">Contact</router-link></li>
                            <li><router-link to="/track">Track Order</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
      name: 'Sitemap',
      metaInfo: {
         titleTemplate: '%s | Sitemap'
      }
   }
</script>

<style scoped>

    .service .sitemap {
        background: url("../assets/images/background/sitemap/sitemap.jpg") no-repeat fixed center;
        background-size: cover;
    }

    ul {
        font-weight: 700;
        line-height: 4;
    }

    ul li ul {
        font-weight: 400;
        margin-left: 8em;
        font-size: .9em;
    }

    ul li {
        display: block;
    }

    ul li a {
        text-decoration: none;
        text-transform: uppercase;
    }

</style>