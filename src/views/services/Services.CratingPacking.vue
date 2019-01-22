<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header crating-packing">
                <div class="overlay">
                    <h1>Crating & Packing Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb"><router-link to="/">Home</router-link> / <router-link to="/services">Services</router-link> / Crating & Packing Services</p>
            <p>Aries Freight Systems' comprehensive in-house crating and packing services make us truly unique. With
                over 45,000 square feet of warehouse space, valuable cargo stays on location at Aries Freight Systems.
                This gives more control over the freight because it is not exposed to the possibility of loss or damage.
                Our experts crate for all modes of transportation, air, ocean and surface shipments, to meet the
                customer and destination country's specific requirements.</p>
        </div>
        <div class="container full pd-y-30 lh-2">
            <div class="half pd-x-30">
                <div>
                    <h3 class="text-red">Solution</h3>
                    <ul>
                        <li>Export Crating</li>
                        <li>Domestic Packaging</li>
                        <li>Specialized knowledge for Country Requirements</li>
                        <li>Ocean Container Rebuilding</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Features</h3>
                    <ul>
                        <li>Palletizing</li>
                        <li>Reusable Crating</li>
                        <li>Fumigation</li>
                        <li>Bundling/Strapping/Skidding</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Benefits</h3>
                    <ul>
                        <li>24x7, 365 days a year</li>
                        <li>Customized crating to meet requirements</li>
                        <li>Ocean Container sub-floors, blocking, bracing, weather-proofing</li>
                        <li>Certified Handling of Hazardous Cargo</li>
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

    .service .crating-packing {
        background: url("../../assets/images/background/services/crating-and-packing.jpg") no-repeat fixed center;
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