<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header expedited-service">
                <div class="overlay">
                    <h1>Expedited Cargo Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/services">Services</router-link>
                / Expedited Cargo Services
            </p>
            <p>Aries Freight Systems provides access to all means of assets and transportation solutions for our
                customers with time sensitive, critical, and expedited freight. Our extended network of transportation
                options, integrated tracking, and event driven communication assists our customers in their
                time-sensitive deliveries across the world.</p>
        </div>
        <div class="container full pd-y-30 lh-2">
            <div class="half pd-x-30">
                <div>
                    <h3 class="text-red">Solution</h3>
                    <ul>
                        <li>Air Charter</li>
                        <li>Specialized Equipment, Air and Ground</li>
                        <li>Specialized Handling, Air and Ground</li>
                        <li>Dedicated Courier Hand Carry</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Features</h3>
                    <ul>
                        <li>Servicing Canada, United States, Mexico</li>
                        <li>Most effective mode of transportation solutions</li>
                        <li>Integrated Web tracking</li>
                        <li>Integrated Email alerting</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Benefits</h3>
                    <ul>
                        <li>24x7, 365 days a year</li>
                        <li>Customized movements to meet requirements</li>
                        <li>International transaction knowledge</li>
                        <li>Optimized routes for cost and delivery constraints</li>
                    </ul>
                </div>
            </div>
            <div class="half pd-x-30">
                <AriesDifference/>
                <SimpleContact/>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .service .expedited-service {
        background: url("../../assets/images/background/services/exepedited-freight.jpg") no-repeat fixed center;
        background-size: cover;
    }

</style>

<script>
   import AriesDifference from "@/components/AriesDifference";
   import SimpleContact from "@/components/SimpleContact";

   export default {
      components: {SimpleContact, AriesDifference}
   }
</script>