<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header studies">
                <div class="overlay">
                    <h1>Case Studies</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                / Case Studies
            </p>
            <div class="full-page">
                <div id="sidebar" class="sidebar">
                    <ul>
                        <li><a href="#charter" v-scroll-to="{el: '#banner', force: true,}">Charter</a></li>
                        <li><a href="#emergency" v-scroll-to="{el: '#emergency', offset: -105}">Emergency</a></li>
                        <li><a href="#hand-carry" v-scroll-to="{el: '#hand-carry', offset: -105}">Hand Carry</a></li>
                    </ul>
                </div>
                <main>
                    <section id="charter"  v-inview:enter="inView">
                        <h2 class="no-pt">Seismic Charter Case Study</h2>
                        <p>One of the world’s leading international geophysical companies had a vessel conducting
                            seismic exploration off the coast of Norway. Issues arose when the streamers (seismic
                            cables) became tangled, which, ultimately, shut down the vessel and the data gathering
                            services they were performing. The project was forced into an “on hold” status until they
                            could replace the cables. Needless to say, time is money, expenses remain when the vessel is
                            down, and their customers would be facing extended delays on receiving the results of the
                            exploration.</p>
                        <img class="mt-2" src="../assets/images/background/case-studies/siesmic-charter.jpg">
                        <p class="mt-2">In order to continue the exploration project, the streamers needed to be
                            replaced
                            on the vessel quickly. The company procured seismic equipment located in Houston, TX, and
                            asked Aries to assist with the delivery. As time was of the essence, the Aries team used its
                            knowledge of the product and the first-hand relationship with the customer to understand the
                            magnitude of the request and the importance of the effort. </p>
                        <p class="mt-1"><strong>The decision:</strong> Aries arranged an air charter and assembled the
                            Aries resources
                            that would support the size of the order as well as the timeliness of the delivery.</p>
                        <p class="mt-1">Thursday afternoon, <strong><em>Aries conducted the receipt and delivery of 64
                            reels</em></strong> of seismic cables from the manufacturer and delivered them to the
                            warehouse in
                            Houston. The size of the order required extra dedication to meet the flight schedule and,
                            ultimately, each reel had to be prepared appropriately for the journey by the Aries’ Crating
                            team. With each reel being lagged and skidded throughout the evening, Friday morning saw the
                            reels delivered to and loaded on-board a dedicated 747. By Saturday morning, they were in
                            Norway and ready for final leg of the journey to the vessel.</p>
                        <p class="mt-1"><strong>The bottom line:</strong> the Aries’ team enjoys being part of the
                            supply chain that enables our customers’ speed of business and minimizes the economic impact
                            of the unforeseen issues.</p>
                    </section>
                    <section id="emergency" v-inview:enter="inView">
                        <h2>Emergency Medical Equipment</h2>
                        <p><strong>On January 12, 2010</strong>, a magnitude 7.0 earthquake struck the country of Haiti,
                            home to almost 10 million people and the poorest country in the Western hemisphere. The
                            earthquake and dozens of aftershocks were responsible for an estimated death toll of more
                            than 230,000, hundreds of thousands of destroyed buildings, and left almost a million
                            Haitians homeless. Without adequate resources or essential services, the Haitian government
                            was unable to effectively respond and recover. As a result, several humanitarian
                            organizations provided aid and assistance to Haiti in the immediate aftermath of the
                            earthquake.</p>
                        <img class="mt-2" src="../assets/images/background/case-studies/emergency-relief-2.jpg">
                        <p class="mt-2"><strong>A prominent, humanitarian organization</strong> requested the aid of a
                            reputable medical supply distributor to donate medical equipment and hospital beds for the
                            relief efforts in Haiti. Aries Freight Systems was awarded the opportunity to provide
                            logistical support for this time-sensitive shipment.</p>
                        <p class="mt-1">Immediately, <strong><em>Aries arranged for transport</em></strong> of this
                            equipment from San
                            Antonio, Texas to our facility in Houston, Texas. The medical equipment and hospital beds
                            were then crated for transport via air and shipped to Santo Domingo within 48 hours.</p>
                        <p class="mt-1">Being involved in a relief effort of such magnitude, Aries Freight Systems
                            realizes that every second counts and was able to provide a seamless delivery to meet the
                            emergent needs of a humanitarian cause and those affected by the earthquake in Haiti.</p>
                    </section>
                    <section id="hand-carry" v-inview:enter="inView">
                        <h2>Hand Carry Shipping Solution</h2>
                        <p class="mt-1"><strong>The United States Navy</strong>, in Sigonella, Sicily, grounded one of
                            their aircraft due to a maintenance requirement. The aircraft, however, was scheduled for an
                            upcoming mission on which a strict timeline had to be met. Unfortunately, the required part
                            for the repair was available in Atlanta, Georgia, from a prominent Aerospace supplier who
                            had been contracted to provide this service to the military. Ultimately, the challenge they
                            faced was to get the part to Sicily to meet the mission schedule.</p>
                        <p class="mt-1">Due to our relationship with the Aerospace supplier, Aries Freight Systems was
                            selected to provide the solution for this emergency service, which put us into high gear for
                            creating a best route with the tightest timeline restrictions. Based on the details, Aries
                            elected to provide a Hand Carry service and committed to an 18 hour delivery from Atlanta,
                            Georgia, to the base in Sicily.</p>
                        <p class="mt-1">This required flying an employee from Houston, Texas, to Atlanta, Georgia, where
                            the part was retrieved. With part in hand, the next leg carried the employee to London,
                            England, and then on to Catania, Sicily, where an awaiting agent provided the final leg of
                            the journey to the base. All of this effort was made within the 18 hour delivery commitment
                            we provided to the supplier and the Navy.</p>
                        <p class="mt-1"><strong>The final result</strong> – the aircraft was repaired successfully and
                            the timeline for the mission was met. This situation provided Aries a great opportunity to
                            enable success even when a time sensitive solution is needed and when the impact is truly
                            beyond just making a door to door delivery.</p>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .service .studies {
        background: url("../assets/images/background/case-studies/haiti-earthquake.jpg") no-repeat fixed center;
        background-size: cover;
    }

</style>

<script>
   import AriesDifference from "../components/AriesDifference";

   export default {
      name: 'CaseStudies',
      metaInfo: {
         titleTemplate: '%s | Case Studies'
      },
      methods: {
         inView($v) {
            const __current = '#' + $v.id;
            const mainNavLinks = document.querySelectorAll (".sidebar li a");
            mainNavLinks.forEach (link => {
               if (__current === link.hash) {
                  link.classList.add ("current");
               } else {
                  link.classList.remove ("current");
               }
            });
         }
      },
      components: {AriesDifference},
   }
</script>