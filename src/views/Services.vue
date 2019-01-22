<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header">
                <div class="overlay">
                    <h1>Services</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                / Services
            </p>
            <div class="full-page">
                <div id="sidebar" class="sidebar">
                    <ul>
                        <li><a href="#air-freight" v-scroll-to="{el: '#banner', force: true,}">Air</a></li>
                        <li><a href="#crating-packing" v-scroll-to="{el: '#crating-packing', offset: -105}">
                            Crating</a></li>
                        <li><a href="#customs-brokerage" v-scroll-to="{el: '#customs-brokerage', offset: -105}">Customs
                            </a></li>
                        <li><a href="#expedited-cargo" v-scroll-to="{el: '#expedited-cargo', offset: -105}">Expedited
                            </a></li>
                        <li><a href="#ground-shipping" v-scroll-to="{el: '#ground-shipping', offset: -105}">Ground
                            </a></li>
                        <li><a href="#ocean-shipping" v-scroll-to="{el: '#ocean-shipping', offset: -105}">Ocean
                            </a></li>
                        <li><a href="#project-cargo" v-scroll-to="{el: '#project-cargo', offset: -105}">Project
                            </a></li>
                        <li><a href="#trade-compliance" v-scroll-to="{el: '#trade-compliance', offset: -105}">
                            Compliance</a></li>
                        <li><a href="#warehousing" v-scroll-to="{el: '#warehousing', offset: -105}">Warehousing
                        </a></li>
                    </ul>
                </div>
                <main>
                    <section id="air-freight" v-inview:enter="inView">
                        <h2 class="no-pt">Air Freight</h2>
                        <p>Aries Freight Systems provides exceptional service and quality to help our customers meet
                            their needs
                            through industry defining flexibility and personal service. Our Air Freight options will
                            address all
                            the intricacies of Domestic and International shipping while keeping your freight
                            moving.</p>
                        <router-link to="/services/air-freight-services">Read More...</router-link>
                    </section>
                    <section id="crating-packing" v-inview:enter="inView">
                        <h2>Crating and Packing</h2>
                        <p>Aries Freight Systems' comprehensive in-house crating and packing services make us truly
                            unique. With
                            over 45,000 square feet of warehouse space, valuable cargo stays on location at Aries
                            Freight
                            Systems. This gives more control over the freight because it is not exposed to the
                            possibility of
                            loss or damage. Our experts crate for all modes of transportation, air, ocean and surface
                            shipments,
                            to meet the customer and destination country's specific requirements.</p>
                        <router-link to="/services/crating-packing-services">Read More...</router-link>
                    </section>
                    <section id="customs-brokerage" v-inview:enter="inView">
                        <h2>Customs Brokerage</h2>
                        <p>As the U.S. Customs Service directs its activities toward complete automation, Aries
                            Freight Systems has likewise assimilated these new programs promptly and efficiently. When
                            terminology such as ABI, AMS, Duty Drawback and Statement Processing invaded the Custom
                            Brokerage
                            Industry, it was met with aggressiveness and determination by Aries Freight Systems. We
                            extend this
                            same determination to our customers. Air and ocean consolidations are tailored to the
                            clients'
                            requirements and, since the buying power is extended to the importer, it affords them the
                            best
                            possible combination of landed cost and prompt delivery.</p>
                        <router-link to="/services/customs-brokerage-services">Read More...</router-link>
                    </section>
                    <section id="expedited-cargo" v-inview:enter="inView">
                        <h2>Expedited Cargo</h2>
                        <p>Aries Freight Systems employs a highly experienced staff to handle all of the customer's
                            Project
                            Cargo and Exhibition needs. We have provided these services, through project consulting and
                            feasibility studies, that effectively handle the extremely time critical to the highly cost
                            sensitive moves. We understand that each step may require special needs and consideration
                            that will
                            be designed to effectively deliver on each leg of the journey.</p>
                        <router-link to="/services/expedited-cargo-services">Read More...</router-link>
                    </section>
                    <section id="ground-shipping" v-inview:enter="inView">
                        <h2>Ground Shipping</h2>
                        <p> Truckload or LTL Freight Aries Freight Systems can custom tailor a domestic transportation
                            solution
                            for you, regardless of the size, destination, or urgency of your shipments. Our services
                            have been
                            designed to deliver superior service and innovative transportation and logistics solutions
                            in order
                            to give you the competitive edge you need in your domestic marketplace.</p>
                        <router-link to="/services/ground-shipping-services">Read More...</router-link>
                    </section>
                    <section id="ocean-shipping" v-inview:enter="inView">
                        <h2>Ocean Shipping</h2>
                        <p>As an FMC licensed transportation provider, Aries Freight Systems offers a comprehensive
                            approach
                            and view to understanding your required freight movements. Through consulting, rate
                            negotiation,
                            and carrier selection, we are seeking the best rates and most competitive transit times for
                            our
                            customers.</p>
                        <router-link to="/services/ocean-shipping-services">Read More...</router-link>
                    </section>
                    <section id="project-cargo" v-inview:enter="inView">
                        <h2>Project Cargo</h2>
                        <p>Aries Freight Systems employs a highly experienced staff to handle all of the customer's
                            Project
                            Cargo and Exhibition needs. We have provided these services, through project consulting and
                            feasibility studies, that effectively handle the extremely time critical to the highly cost
                            sensitive moves. We understand that each step may require special needs and consideration
                            that will
                            be designed to effectively deliver on each leg of the journey.</p>
                        <router-link to="/services/project-cargo-services">Read More...</router-link>
                    </section>
                    <section id="trade-compliance" v-inview:enter="inView">
                        <h2>Trade Compliance</h2>
                        <p>Aries Freight Systems advises and offers our customer an international business partner in
                            the world
                            of compliance. Together, we face many challenges conducting world commerce and Aries
                            provides the
                            experience necessary to navigate U.S. and Foreign government regulations and policies. We
                            are
                            continually reviewing and taking steps to maintain awareness of government regulations.
                            Regardless
                            of which rules or polices with which we must interact (CTPAT, TSA, FMC, NAFTA, ITAR, AES or
                            EAR),
                            the resulting assurance for you is that all transactions with Aries will be handled with
                            diligence
                            and compliance.</p>
                        <router-link to="/services/trade-compliance-services">Read More...</router-link>
                    </section>
                    <section id="warehousing" v-inview:enter="inView">
                        <h2>Warehousing and Logistics</h2>
                        <p>With the power of an integrated Warehousing solution along with associate Logistics Services,
                            Aries
                            Freight Systems has the full ability to intricately receive, control, and handle stock
                            across single
                            and multiple warehouses. From any process of delivery, receipt, inventory request, put away,
                            pick
                            and pack, stock control and other operational steps, we have a complete view to our
                            customer’s
                            inventory lifecycle.</p>
                        <router-link to="/services/warehousing-logistics-services">Read More...</router-link>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .services {

    }

    .sub-page-header {
        background: url("../assets/images/slides/AdobeStock_95970928.jpeg") no-repeat fixed center;
        background-size: cover;
    }

</style>


<script>

   export default {
      name: 'Services',
      metaInfo: {
         titleTemplate: '%s | Services'
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
   }

</script>