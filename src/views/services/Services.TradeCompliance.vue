<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header trade-compliance">
                <div class="overlay">
                    <h1>Trade Compliance Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/services">Services</router-link>
                / Trade Compliance Services
            </p>
            <p>Aries Freight Systems advises and offers our customer an international business partner in the world of
                compliance. Together, we face many challenges conducting world commerce and Aries provides the
                experience necessary to navigate U.S. and Foreign government regulations and policies. We are
                continually reviewing and taking steps to maintain awareness of government regulations. The rules and
                regulations are constantly changing and evolving, which means we must remain and are committed to
                providing our customers with the most current regulatory information. We achieve these efforts by
                keeping in contact with the mandating agencies, by maintaining the resources at our fingertips, and by
                integration with government entities through our systems. We have the resources and educational
                opportunities necessary to help your organization pilot the complex world of compliance. Regardless of
                which rules or polices with which we must interact (CTPAT, TSA, FMC, NAFTA, ITAR, AES or EAR), the
                resulting assurance for you is that all transactions with Aries will be handled with diligence and
                compliance.</p>
        </div>
        <div class="container full pd-y-30 lh-2">
            <div class="half pd-x-30">
                <div>
                    <h3 class="text-red">Solution</h3>
                    <ul>
                        <li>Dedicated team to Regulatory Review</li>
                        <li>Compliance Review and Assessments</li>
                        <li>Certified Providers</li>
                        <li>Extensive Global presence</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Features</h3>
                    <ul>
                        <li>Government platform integration</li>
                        <li>Required documentation retention and storage</li>
                        <li>Compliance management to assist in minimizing delays</li>
                        <li>Record keeping and data retention</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Benefits</h3>
                    <ul>
                        <li>Web-based review of shipments</li>
                        <li>Knowledgeable team with extensive experience</li>
                        <li>Real-time transmissions of required compliance data</li>
                        <li>Stand-alone assistance or integrated with all shipping requirements</li>
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

    .service .trade-compliance {
        background: url("../../assets/images/background/services/trade-compliance.jpg") no-repeat fixed center;
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