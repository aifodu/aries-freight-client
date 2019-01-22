<template>
    <div id="services">
        <div class="item air-freight">
            <div class="brief">
                <h3>Air Freight Services</h3>
                <p>Aries Freight Systems provides exceptional service and quality to help our customers meet their needs
                    through industry defining flexibility and personal service. Our Air Freight options will address all
                    the intricacies of Domestic and International shipping while keeping your freight moving.</p>
                <router-link to="/services/air-freight-services">Read More...</router-link>
            </div>
        </div>
        <div class="item expedited-freight">
            <div class="brief">
                <h3>Expedited Cargo Services</h3>
                <p>Aries Freight Systems provides access to all means of assets and transportation solutions for our
                    customers with time sensitive, critical, and expedited freight. Our extended network of
                    transportation
                    options, integrated tracking, and event driven communication assists our customers in their
                    time-sensitive deliveries across the world.</p>
                <router-link to="/services/expedited-cargo-services">Read More...</router-link>
            </div>
        </div>
        <div class="item ocean-shipping">
            <div class="brief">
                <h3>Ocean Shipping Services</h3>
                <p>As an FMC licensed transportation provider, Aries Freight Systems offers a comprehensive approach
                    and view to understanding your required freight movements. Through consulting, rate negotiation,
                    and carrier selection, we are seeking the best rates and most competitive transit times for our
                    customers.</p>
                <router-link to="/services/ocean-shipping-services">Read More...</router-link>
            </div>
        </div>
        <div class="item ground-shipping">
            <div class="brief">
                <h3>Ground Shipping Services</h3>
                <p> Truckload or LTL Freight Aries Freight Systems can custom tailor a domestic transportation solution
                    for you, regardless of the size, destination, or urgency of your shipments. Our services have been
                    designed to deliver superior service and innovative transportation and logistics solutions in order
                    to give you the competitive edge you need in your domestic marketplace.</p>
                <router-link to="/services/ground-shipping-services">Read More...</router-link>
            </div>
        </div>
        <div class="item project-cargo">
            <div class="brief">
                <h3>Project Cargo</h3>
                <p>Aries Freight Systems employs a highly experienced staff to handle all of the customer's Project
                    Cargo and Exhibition needs. We have provided these services, through project consulting and
                    feasibility studies, that effectively handle the extremely time critical to the highly cost
                    sensitive moves. We understand that each step may require special needs and consideration that will
                    be designed to effectively deliver on each leg of the journey.</p>
                <router-link to="/services/project-cargo-services">Read More...</router-link>
            </div>
        </div>
        <div class="item customs-brokerage">
            <div class="brief">
                <h3>Customs Brokerage Services</h3>
                <p>As the U.S. Customs Service directs its activities toward complete automation, Aries
                    Freight Systems has likewise assimilated these new programs promptly and efficiently. When
                    terminology such as ABI, AMS, Duty Drawback and Statement Processing invaded the Custom Brokerage
                    Industry, it was met with aggressiveness and determination by Aries Freight Systems. We extend this
                    same determination to our customers. Air and ocean consolidations are tailored to the clients'
                    requirements and, since the buying power is extended to the importer, it affords them the best
                    possible combination of landed cost and prompt delivery.</p>
                <router-link to="/services/customs-brokerage-services">Read More...</router-link>
            </div>
        </div>
        <div class="item trade-compliance">
            <div class="brief">
                <h3>Trade Compliance Services</h3>
                <p>Aries Freight Systems advises and offers our customer an international business partner in the world
                    of compliance. Together, we face many challenges conducting world commerce and Aries provides the
                    experience necessary to navigate U.S. and Foreign government regulations and policies. We are
                    continually reviewing and taking steps to maintain awareness of government regulations. Regardless
                    of which rules or polices with which we must interact (CTPAT, TSA, FMC, NAFTA, ITAR, AES or EAR),
                    the resulting assurance for you is that all transactions with Aries will be handled with diligence
                    and compliance.</p>
                <router-link to="/services/trade-compliance-services">Read More...</router-link>
            </div>
        </div>
        <div class="item crating-and-packing">
            <div class="brief">
                <h3>Crating & Packing Services</h3>
                <p>Aries Freight Systems' comprehensive in-house crating and packing services make us truly unique. With
                    over 45,000 square feet of warehouse space, valuable cargo stays on location at Aries Freight
                    Systems. This gives more control over the freight because it is not exposed to the possibility of
                    loss or damage. Our experts crate for all modes of transportation, air, ocean and surface shipments,
                    to meet the customer and destination country's specific requirements.</p>
                <router-link to="/services/crating-packing-services">Read More...</router-link>
            </div>
        </div>
        <div class="item warehousing-and-logistics">
            <div class="brief">
                <h3>Warehousing and Logistics Services</h3>
                <p>With the power of an integrated Warehousing solution along with associate Logistics Services, Aries
                    Freight Systems has the full ability to intricately receive, control, and handle stock across single
                    and multiple warehouses. From any process of delivery, receipt, inventory request, put away, pick
                    and pack, stock control and other operational steps, we have a complete view to our customer’s
                    inventory lifecycle.</p>
                <router-link to="/services/warehousing-logistics-services">Read More...</router-link>
            </div>
        </div>
    </div>
</template>

<script>
   export default {
      name: 'HomePageServices'
   }
</script>

<style scoped>

    /* =====================
        Services Section
    =======================*/

    .item {
        flex: 1 1 0;
    }

    .item .brief {
        position: relative;
        height: 100%;
        width: 100%;
        color: #EEEEEE;
        padding: 2.5em 2em 2em;
        margin-bottom: 15px;
        background: rgba(0, 0, 0, .9);
        transition: all 400ms ease-out;
    }

    .item .brief:active,
    .item .brief:focus,
    .item .brief:hover {
        background: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, .8);
    }

    .item .brief h3 {
        letter-spacing: 2px;
        color: #dc143b;
        text-transform: uppercase;
    }

    .item .brief a {
        opacity: 0;
        display: inline-block;
        margin-top: 1em;
        padding: 10px 15px;
        font-weight: 700;
        font-size: 12px;
        text-decoration: none;
        text-transform: uppercase;
        background: #EEEEEE;
        color: #dc143b;
        transform: translateX(50px);
        transition: all 400ms ease-out;
    }

    .item .brief:active a,
    .item .brief:focus a,
    .item .brief:hover a {
        opacity: 1;
        transform: translateX(0);
    }

    .air-freight {
        background: url("../assets/images/background/services/air-freight.jpg") no-repeat center;
        background-size: cover;
    }

    .expedited-freight {
        background: url("../assets/images/background/services/exepedited-freight.jpg") no-repeat center;
        background-size: cover;
    }

    .ocean-shipping {
        background: url("../assets/images/background/services/ocean-shipping.jpg") no-repeat center;
        background-size: cover;
    }

    .domestic-forwarding-service {
        background: url("../assets/images/background/haulage.jpeg") no-repeat center;
        background-size: cover;
    }

    .logistics-service {
        background: url("../assets/images/background/truck.jpeg") no-repeat center;
        background-size: cover;
    }

    .ground-shipping {
        background: url("../assets/images/background/truck.jpeg") no-repeat center;
        background-size: cover;
    }

    .project-cargo {
        background: url("../assets/images/background/haulage.jpeg") no-repeat center;
        background-size: cover;
    }

    .customs-brokerage {
        background: url("../assets/images/background/customs-brokerage.jpeg") no-repeat center;
        background-size: cover;
    }

    .trade-compliance {
        background: url("../assets/images/background/services/trade-compliance.jpg") no-repeat center;
        background-size: cover;
    }

    .crating-and-packing {
        background: url("../assets/images/background/services/crating-and-packing.jpg") no-repeat center;
        background-size: cover;
    }

    .warehousing-and-logistics {
        background: url("../assets/images/background/services/warehousing-and-logistics.jpg") no-repeat center;
        background-size: cover;
    }

</style>
