<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header ground-shipping">
                <div class="overlay">
                    <h1>Ground Shipping Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/services">Services</router-link>
                / Ground Shipping Services
            </p>
            <p>Truckload or LTL Freight Aries Freight Systems can custom tailor a domestic transportation solution for
                you, regardless of the size, destination, or urgency of your shipments. Our services have been designed
                to deliver superior service and innovative transportation and logistics solutions in order to give you
                the competitive edge you need in your domestic marketplace.</p>
        </div>
        <div class="container full pd-y-30 lh-2">
            <div class="half pd-x-30">
                <div>
                    <h3 class="text-red">Solution</h3>
                    <ul>
                        <li>Hotshot – with/without team drivers</li>
                        <li>FTL or LTL solutions</li>
                        <li>Expedited and specialized services</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Features</h3>
                    <ul>
                        <li>Servicing Canada, United States, Mexico</li>
                        <li>Permit, Reefer, Heavy Haul specialties</li>
                        <li>Intermodal</li>
                        <li>Asset and Brokerage based movements</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Benefits</h3>
                    <ul>
                        <li>24x7, 365 days a year</li>
                        <li>Customized crating to meet requirements</li>
                        <li>Cross-border transaction knowledge</li>
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

    .service .ground-shipping {
        background: url("../../assets/images/background/services/ground-shipping.jpg") no-repeat fixed center;
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