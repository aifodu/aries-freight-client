<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header project-cargo">
                <div class="overlay">
                    <h1>Project Cargo Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb"><router-link to="/">Home</router-link> / <router-link to="/services">Services</router-link> / Project Cargo Services</p>
            <p>Aries Freight Systems employs a highly experienced staff to handle all of the customer's Project Cargo
                and Exhibition needs. We have provided these services, through project consulting and feasibility
                studies, that effectively handle the extremely time critical to the highly cost sensitive moves. We
                understand that each step may require special needs and consideration that will be designed to
                effectively deliver on each leg of the journey.</p>
        </div>
        <div class="container full pd-y-30 lh-2">
            <div class="half pd-x-30">
                <div>
                    <h3 class="text-red">Solution</h3>
                    <ul>
                        <li>Project Feasibility Studies</li>
                        <li>Rate Negotiations for Liner and Charter</li>
                        <li>Air and Sea consolidation for all destinations</li>
                        <li>Export registering for return shipments</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Features</h3>
                    <ul>
                        <li>Complete transporting of goods to and from locations</li>
                        <li>Sensitivity to time critical shipments</li>
                        <li>ATA carnets for international exhibitions</li>
                        <li>Integrated Storage and Warehousing</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-red">Benefits</h3>
                    <ul>
                        <li>Engage with a highly experienced staff</li>
                        <li>Customized consulting to the logistics need</li>
                        <li>Cost sensitive planning</li>
                        <li>Competitive rating for each specific leg of the journey</li>
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

    .service .project-cargo {
        background: url("../../assets/images/background/truck.jpeg") no-repeat fixed center;
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