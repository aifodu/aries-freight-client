<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header tandc">
                <div class="overlay">
                    <h1>Terms and Conditions</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                / Terms and Conditions
            </p>
            <div>
                <ul>
                    <li>Carriage and other services performed hereunder are subject to these conditions and to the
                        rates, rules and classifications set forth in the Forwarder’s currently effective service
                        conditions, which are available for inspection and are incorporated into this contract by
                        reference.
                    </li>

                    <li>As used in this contract, <strong>“Forwarder”</strong> means <span class="text-red"> ARIES FREIGHT SYSTEMS</span>
                        and its authorized agents.
                    </li>

                    <li>In tending the shipment for carriage, the shipper warrants that the shipment is packaged to
                        protect the enclosed goods and to insure safe transportation with ordinary care in handling, and
                        that each package is approximately labeled and is in good order for carriage as specified.
                    </li>

                    <li>All shipments may, at Forwarder’s option, be opened and inspected.</li>

                    <li>Forwarder shall not be liable for loss, damage, delay, or other results caused by (a) acts of
                        God, public enemies, public authorities acting with an actual or apparent authority, authority
                        of law, quarantine, riots, strikes, civil commotions, or hazards or dangers incident to a state
                        war: (b) the act or default of the shipper or consignee, including any breach of the warranty
                        set forth in Paragraph 3 above: (c) the nature of the shipment or any defect, characteristic or
                        inherit vice thereof; (d) violation by shipper or consignee of any of these conditions of
                        contract; (e) compliance or non- compliance with delivery or special instructions.
                    </li>

                    <li><strong>FORWARDER SHALL NOT BE LIABLE FOR SPECIAL INSIDENTAL, OR CONSEQUENTAL DAMAGE INCLUDING,
                        BUT NOT LIMITED TO, LOSS OF PROFITS OR LOSS OF INCOME, WHEATHER OR NOT FORWARDER HAD KNOWLEDGE
                        THAT SUCH DAMAGES MIGHT BE INCURRED.</strong></li>

                    <li><strong>CARRIER’S LIABILITY IS LIMITED TO .50 CENTS PER POUND PER PIECE ON DOMESTIC TRANSPORT
                        AND 9.07 PER POUND PER PIECE ON INTERNATIONAL TRANSPORT. SPECIAL OR CONSEQUENTAL DAMAGES ARE NOT
                        RECOVERABLE.</strong> Unless a different amount is specified by the shipper, the declared value
                        on a C.O.D shipment shall be deemed to be the C.O.D amount.
                    </li>

                    <li>The shipper and the consignee shall be liable, jointly and severely, (a) for all unpaid charges
                        payable on accounts of a shipment pursuant to this Contract, and (b) to pay or indemnify
                        Forwarder for all claims, fines, penalties, damages, costs or other sums which may be incurred
                        by Forwarder by reason for any violation of this contract or any other default of the shipper or
                        consignee or their agents.
                    </li>

                    <li>Forwarder shall have a lien on the shipment for all sums due and payable to the Forwarder.</li>

                    <li>In the event of the failure or inability of the consignee to take the delivery of the shipment,
                        Forwarder will notify shipper in writing at the address shown on the air bill and request
                        disposition instructions. If the shipper fails to provide disposition instructions within 30
                        days after the date of Forwarder’s notice. Forwarder will return the shipment, dispose of the
                        shipment at public or private sale and pay itself out of the proceeds to satisfy the
                        transportation charges owning on the shipment. Any sums collected by Forwarder in excess of such
                        transportation charges will be paid to the shipper. No sale or disposal pursuant to this charge
                        will discharge any liability or lien to any greater extent than the proceeds thereof. The
                        shipper and he consignee shall remain liable, jointly and severally, for any deficiency.
                    </li>

                    <li>Forwarder will exercise due diligence in routing shipment. In the absence of specific contrary
                        instructions by the shipper on the air bill, Forwarder may divert any shipment to surface
                        transportation in order to expedite its movement. Regardless of the method of transportation
                        employed, the Forwarder’s air freight charges from origin to destination will apply.
                    </li>

                    <li>Claims for loss or damage discovered by the consignee after delivery and after a clear receipt
                        has been given to the Forwarder must be reported in writing to Forwarder within 10 days after
                        the delivery of shipment, with privilege to Forwarder to inspect the shipment and its
                        container(s) and packing material within 15 days after receipt of such notice. (On shipments to
                        Puerto Rico and Canada claims must be reported within 7 days after delivery).
                    </li>

                    <li>Claims of loss or damage must be made in writing within a period of 15 days after the date of
                        acceptance of the shipment by the Forwarder. (On shipments to Puerto Rico and Canada, claims
                        must be made within 120 days).
                    </li>

                    <li>No Claims with respect to a shipment, any part of which is received by the consignee, will be
                        entertained until all transportation charges have been paid.
                    </li>

                    <li>Claims for overcharges or duplicate billings must be made in writing within a period of 90 days
                        after the date of acceptance of the shipment by the Forwarder.
                    </li>

                    <li>Forwarder shall not be liable in any action unless a claim has been filed and such action is
                        brought within 1 year after the date written notice is given to the claimant that Forwarder has
                        disallowed the claim in full or in part. (On shipments to Canada, action must be brought within
                        2 years after delivery of shipment).
                    </li>

                    <li>International air carriage is subject to the rules relating to the liability established by the
                        convention for the Unification of Certain Rules relation to the International Carriage by Air,
                        signed at Warsaw, October 12, 1929.
                    </li>

                    <li>To the extent that it is not governed by Federal law, this Contract and the tariffs incorporated
                        by references shall be construed and the performance of the transportation hereunder shall be
                        determined in accordance with the laws of the shipment is accepted be the Forwarder. If any
                        provision of this Contract including the tariffs incorporated by reference is determined to be
                        invalid or enforceable, the remainder of the Contract shall not be affected thereby.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
   import AriesDifference from "../components/AriesDifference";
   import SimpleContact from "../components/SimpleContact";

   export default {
      name: 'Privacy',
      components: {SimpleContact, AriesDifference},
      metaInfo: {
         titleTemplate: '%s | Privacy Policy'
      }
   }
</script>

<style scoped>

    .service .tandc {
        background: url("../assets/images/background/tandc/90723 - Copy.jpg") no-repeat fixed center;
        background-size: cover;
    }

    h3 {
        text-transform: uppercase;
        letter-spacing: 4px;
        color: #1A065A;
        line-height: 1.5;
        margin-top: 2em;
        margin-bottom: 1em;
    }

    ul {
        display: block;
        text-align: justify;
        padding: 0!important;
    }

    li {
        display: block;
        list-style: circle;
        margin-bottom: 1.5em;
    }

</style>