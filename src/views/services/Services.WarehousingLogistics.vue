<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header warehousing-logistics">
                <div class="overlay">
                    <h1>Warehousing & Logistics Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/services">Services</router-link>
                / Warehousing & Logistics Services
            </p>
            <p>With the power of an integrated Warehousing solution along with associate Logistics Services, Aries
                Freight Systems has the full ability to intricately receive, control, and handle stock across single and
                multiple warehouses. From any process of delivery, receipt, inventory request, put away, pick and pack,
                stock control and other operational steps, we have a complete view to our customer’s inventory
                lifecycle.</p>
        </div>
        <div class="container full pd-y-30 lh-2">
            <div class="half pd-x-30">
                <div>
                    <h3 class="text-red">Solution</h3>
                    <ul>
                        <li>Extensive Warehousing facility</li>
                        <li>Integrated Warehousing with all freight movements</li>
                        <li>Inventory Lifecycle and Management</li>
                        <li>Service and Control through the web</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Features</h3>
                    <ul>
                        <li>Servicing Canada, United States, Mexico</li>
                        <li>Most effective mode of transportation solutions</li>
                        <li>Integrated Order Management</li>
                        <li>Integrated Reporting</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Benefits</h3>
                    <ul>
                        <li>24x7, 365 days a year</li>
                        <li>Customized crating to meet requirements</li>
                        <li>Extensive space for any sized solution</li>
                        <li>Robust approach to stocktaking and auditing</li>
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

    .service .warehousing-logistics {
        background: url("../../assets/images/background/services/warehousing-and-logistics.jpg") no-repeat fixed center;
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