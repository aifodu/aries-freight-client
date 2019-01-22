<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header customs-brokerage">
                <div class="overlay">
                    <h1>Customs Brokerage Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/services">Services</router-link>
                / Customs Brokerage Services
            </p>
            <p>As the U.S. Customs Service directs its activities toward complete automation, Aries Freight Systems has
                likewise assimilated these new programs promptly and efficiently. When terminology such as ABI, AMS,
                Duty Drawback and Statement Processing invaded the Custom Brokerage Industry, it was met with
                aggressiveness and determination by Aries Freight Systems. We extend this same determination to our
                customers. Air and ocean consolidations are tailored to the clients' requirements and, since the buying
                power is extended to the importer, it affords them the best possible combination of landed cost and
                prompt delivery.</p>
        </div>
        <div class="container full pd-y-30 lh-2">
            <div class="half pd-x-30">
                <div>
                    <h3 class="text-red">Solution</h3>
                    <ul>
                        <li>Formal Customs Entries</li>
                        <li>Informal Customs Entries</li>
                        <li>Import Breakbulk</li>
                        <li>Total transportation concept worldwide</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Features</h3>
                    <ul>
                        <li>Integrated Customs communication</li>
                        <li>Licensed Customs Broker</li>
                        <li>Integrated Web tracking</li>
                        <li>Integrated Email alerting</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Benefits</h3>
                    <ul>
                        <li>24x7, 365 days a year</li>
                        <li>Knowledgeable experts</li>
                        <li>Best possible combinations created for landed cost and prompt delivery</li>
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

    .service .customs-brokerage {
        background: url("../../assets/images/background/customs-brokerage.jpeg") no-repeat fixed center;
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