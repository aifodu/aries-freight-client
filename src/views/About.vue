<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header about">
                <div class="overlay">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                / About Us
            </p>
            <div class="full-page">
                <div id="sidebar" class="sidebar">
                    <ul>
                        <li><a href="#introduction" v-scroll-to="{el: '#banner', force: true,}">
                            Introduction</a></li>
                        <li><a href="#facilities" v-scroll-to="{el: '#facilities', offset: -105}">Facilities</a></li>
                        <li><a href="#mission" v-scroll-to="{el: '#mission', offset: -105}">Mission</a></li>
                        <li><a href="#philosophy" v-scroll-to="{el: '#philosophy', offset: -105}">Philosophy</a></li>
                    </ul>
                </div>
                <main>
                    <section id="introduction" v-inview:enter="inView">
                        <p>Since our inception in 1984, Aries Freight Systems has specialized in handling both domestic
                            and
                            international time sensitive shipments. Our goal then was to build a business by providing
                            our
                            customers with quality, cost effective and dependable transportation services. With the
                            foundation of our past, the goal today focuses on providing the highest standard of service
                            and
                            quality worldwide while setting the bar by which all other independent transportation and
                            logistics companies are measured.</p>
                        <p class="mt-1">Today, as a CNS/IATA certified agent, a licensed NVOCC and FMC Forwarder, and
                            licensed Customs House Broker, the services that Aries Freight Systems offers are
                            continually
                            evolving. Today, we excel in handling time-critical shipments, anytime and anywhere.
                            Additionally, we succeed in moving freight for any need or situation, with a comprehensive
                            set
                            of supporting services for a complete logistics experience. By air, sea, truck, or rail, we
                            handle door-to-door or door-to-port throughout the world. Our Customer Service Department is
                            trained to provide professional service with a personal touch to ensure that each shipment
                            arrives at its destination on schedule. They are well supported through integrated,
                            process-driven, logistics software and a fully connected Operations team, 24 hours a day.
                            You can depend on the friendly, qualified team of experts at Aries Freight Systems to move
                            your
                            freight to its destination... at a competitive cost that addresses your needs. With Aries
                            Freight Systems, the difference is personal.</p>
                        <p class="mt-1">Aries is proud to have a comprehensive list of licenses, certifications and
                            memberships.</p>
                    </section>
                    <section id="facilities" v-inview:enter="inView">
                        <h2>State of the Art Facilities</h2>
                        <img src="../assets/images/background/about/facilities.jpg">
                        <h3 class="mt-1">Houston</h3>
                        <p>Our Global Headquarters is located at 1501 E. Richey Road, Houston, TX. 77073. The building
                            is less than 10 minutes away from the airport. With over 45,000 square feet of Warehouse
                            space, 15,000 square feet of Office space, and 9 acres of land, the Houston facility is
                            equipped with the capacity to handle all types of freight requirements with a complete
                            in-house crating and packing. We have the ability to offer long-term storage as well as
                            cross-docking opportunities based on the needs. We operate various types of assets to deal
                            with local cartage, pickup and delivery, as well as over-the-road shipments. From security
                            of the facility and perimeter to close proximity of fire and police departments, the Houston
                            facility is well positioned.</p>
                        <h3 class="mt-2">Dallas/Fort-Worth</h3>
                        <p>The Dallas/Ft. Worth facility is located at 751 Port America Place, STE 425, Grapevine, TX
                            76051. As part of extended solutions and services from Global Headquarters in Houston, the
                            facility offers additional facets to our customers logistics needs. From a temperature
                            controlled warehouse facility and supporting assets to assist our customers efforts, the
                            facility is fully monitored by an alarm system and with phones answered 24/7. The Dallas
                            facility simply adds to our efforts to treat every customer as if they are our only
                            customer.</p>
                        <h3 class="mt-2">Miami</h3>
                        <p>Our latest branch is located at 8190 NW 21st Street, Doral, FL 33122. With over 26,000 square
                            feet of Warehouse space, this facility is equipped to handle both long or short term storage
                            as well as any cross dock opportunities. This location is strategically placed just minutes
                            away from the Miami airport and the Port of Miami, which are among the nation’s busiest
                            ports of entry, especially for cargo from South America and the Caribbean. Additionally, the
                            Port of Miami is the world’s busiest cruise port, and MIA is the busiest airport in Florida,
                            and the largest gateway to Latin America.</p>
                        <h3 class="mt-2">McAllen</h3>
                        <p>Our McAllen branch is located at 9105 S. Cage, Ste. D, Pharr, TX. 78577. Our location offers
                            warehousing for both long or short term storage as well as any cross dock opportunities.
                            Located just 3 miles from the airport and 5 miles from the Mexico border, our facility is
                            strategically located in deep South Texas. The McAllen/Reynosa and Brownsville/Matamoros
                            area has been one of the top 10 fastest growing cities in the U.S. over the last few years,
                            supported mainly by the manufacturing facilities or “Maquiladoras” across the border. Our
                            facility is well positioned to offer a full range of transportation services to this
                            area.</p>
                    </section>
                    <section id="mission" v-inview:enter="inView">
                        <h2>Our Mission Statement</h2>
                        <img src="../assets/images/background/about/mission-dart-board.jpg">
                        <p class="mt-2">To provide the highest standard of service and quality for our Customers
                            worldwide and to be
                            the benchmark of quality and service by which independent transportation and logistics
                            companies of the world are graded.</p>
                        <h3 class="sub-header">Our Commitment</h3>
                        <div class="full">
                            <div class="half">
                                <h4>To Our Customers</h4>
                                <ul>
                                    <li>Dependability, timeliness and quality come FIRST</li>
                                    <li>We provide exceptional value and total satisfaction</li>
                                </ul>
                                <h4>To Our Employees</h4>
                                <ul>
                                    <li>We provide direction and leadership</li>
                                    <li>We provide an opportunity to be creative</li>
                                    <li>We recognize personal achievement and contribution on an ongoing basis</li>
                                    <li>We provide a pleasant, healthy and safe workplace</li>
                                </ul>
                            </div>
                            <div class="half">
                                <h4>To Our Community</h4>
                                <ul>
                                    <li>We represent responsible behavior</li>
                                    <li>We acknowledge the importance of the environment</li>
                                    <li>We provide equitable return on assets entrusted to us</li>
                                    <li>We follow prudent business practices to ensure growth and profits</li>
                                </ul>
                                <h4>To Our Shareholders</h4>
                                <ul>
                                    <li>We provide equitable return on assets entrusted to us</li>
                                    <li>We follow prudent business practices to ensure growth and profits</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id="philosophy" v-inview:enter="inView">
                        <h2>Our Business Philosophy</h2>
                        <img src="../assets/images/background/about/autumsunsnet.jpg">
                        <p class="mt-2"><em>Do it right every time. Be an innovator &mdash; whenever possible.</em></p>
                        <p class="mt-2">The Aries World is a world of continuous rapid change, growth, and competition.
                            A world Where:</p>
                        <ul>
                            <li class="mt-1">ARIES FREIGHT SYSTEMS is continually creating value for the customer by
                                improving
                                customer benefits, exceeding customer expectations and increasing customer satisfaction.
                            </li>
                            <li class="mt-1">ARIES FREIGHT SYSTEMS and its customers have established very successful
                                and long term
                                business relationships based on mutual trust.
                            </li>
                            <li class="mt-1">ARIES FREIGHT SYSTEMS is able to fully provide the time and cost critical
                                distribution
                                functions that are becoming more important to global manufacturers as they concentrate
                                more on just their core activities.
                            </li>
                            <li class="mt-1">ARIES FREIGHT SYSTEMS is fully equipped to perform any task that will give
                                the customer
                                all the market place advantages in such important areas as cost control and revenue
                                increases.
                            </li>
                            <li class="mt-1">The array of ARIES FREIGHT SYSTEMS value added services are vast, and
                                individually
                                tailored to the customer needs.
                            </li>
                            <li class="mt-1">The heart of the ARIES FREIGHT SYSTEMS effort lies in its total dedication
                                to the
                                customer by continually committing to tackling new tasks and enthusiastically embarking
                                on new ventures.
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .service .about {
        background: url("../assets/images/background/about/offices.jpg") no-repeat fixed center;
        background-size: cover;
    }

</style>

<script>
   import AriesDifference from "../components/AriesDifference";

   export default {
      name: 'About',
      metaInfo: {
         titleTemplate: '%s | About Us'
      },
      data() {
         return {
            inViewObject: {
               showIfPartial: false,
            }
         }
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
      components: {
         AriesDifference
      }
   }
</script>