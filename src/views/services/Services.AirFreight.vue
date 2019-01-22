<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header air-freight">
                <div class="overlay">
                    <h1>Air Freight Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb"><router-link to="/">Home</router-link> / <router-link to="/services">Services</router-link> / Air Freight Services</p>
            <p>Aries Freight Systems provides exceptional service and quality to help our customers meet their needs
                through industry defining flexibility and personal service. Our Air Freight options will address all
                the intricacies of Domestic and International shipping while keeping your freight moving.</p>
        </div>
        <div class="container full pd-y-30 lh-2">
            <div class="half pd-x-30">
                <h3 class="text-red">Solution</h3>
                <ul>
                    <li>Expedited delivery</li>
                    <li>Flexible routing</li>
                    <li>Minimized touch delivery options</li>
                    <li>North American and International flights</li>
                </ul>

                <h3 class="text-red">Features</h3>
                <ul>
                    <li>Global coverage for International trade</li>
                    <li>Servicing Canada, United States, Mexico</li>
                    <li>Integrated Web tracking/Integrated Email alerting</li>
                    <li>Long-standing Carrier relationships</li>
                </ul>

                <h3 class="text-red">Benefits</h3>
                <ul>
                    <li>24x7, 365 days a year</li>
                    <li>Customized movements to meet requirements</li>
                    <li>International transaction knowledge</li>
                    <li>Optimized routes for cost and delivery constraints</li>
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

    .service .air-freight {
        background: url("../../assets/images/background/services/air-freight.jpg") no-repeat fixed center;
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