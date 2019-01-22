<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header ocean-shipping">
                <div class="overlay">
                    <h1>Ocean Shipping Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/services">Services</router-link>
                / Ocean Shipping Services
            </p>
            <p>As an FMC licensed transportation provider, Aries Freight Systems offers a comprehensive approach and
                view to understanding your required freight movements. Through consulting, rate negotiation, and carrier
                selection, we are seeking the best rates and most competitive transit times for our customers.
            </p>
        </div>
        <div class="container full pd-y-30 lh-2">
            <div class="half pd-x-30">
                <h3 class="text-red">Solution</h3>
                <ul>
                    <li>Consulting Services</li>
                    <li>Pier Delivery Services</li>
                    <li>L/C Banking and Legalization</li>
                    <li>Rate Negotiation and Filing</li>
                </ul>

                <h3 class="text-red">Features</h3>
                <ul>
                    <li>Integrated and Automated Bookings</li>
                    <li>All Risk Insurance</li>
                    <li>Competitive Transit Time</li>
                    <li>Frequent Sailing</li>
                </ul>

                <h3 class="text-red">Benefits</h3>
                <ul>
                    <li>Non-Vessel Operating Common Carrier (NVOCC) licensed</li>
                    <li>FMC Licensed Carriers</li>
                    <li>Pier Delivery Services</li>
                    <li>Freight Consolidations to accelerate routing and transit globally</li>
                </ul>
            </div>
            <div class="half pd-x-30">
                <AriesDifference/>
                <ServiceTimes/>
                <SimpleContact/>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .service .ocean-shipping {
        background: url("../../assets/images/slides/AdobeStock_56987728.jpeg") no-repeat fixed center;
        background-size: cover;
    }

</style>

<script>
   import AriesDifference from "@/components/AriesDifference";
   import ServiceTimes from "@/components/ServiceTimes";
   import SimpleContact from "@/components/SimpleContact";

   export default {
      components: {SimpleContact, ServiceTimes, AriesDifference}
   }
</script>