<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header documents">
                <div class="overlay">
                    <h1>Documents Library</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/support">Support</router-link>
                / Documents Library
            </p>
            <section>
                <p>First time customers require a place to start. We have assembled the first set of documents you will
                    need to begin the journey with us.</p>
            </section>
            <div class="full mb-3">
                <div class="half">
                    <h3 class="text-red">Frequently Requested Documents</h3>
                    <table>
                        <tr>
                            <td>Consent to Screen</td>
                            <td>
                                <!--<a title="Download Consent to Screen" download="Consent_to_Screen"-->
                                <a title="Download Consent to Screen"
                                   href="">Download</a></td>
                        </tr>
                        <tr>
                            <td>Credit Application</td>
                            <!--<td><a title="Download Credit Application" download="Credit_Application"-->
                            <td><a title="Download Credit Application"
                                   href="">Download</a></td>
                        </tr>
                        <tr>
                            <td>Export Power Of Attorney</td>
                            <!--<td><a title="Download Export Power Of Attorney" download="Export_Power_of_Attorney"-->
                            <td><a title="Download Export Power Of Attorney"
                                   href="">Download</a></td>
                        </tr>
                        <tr>
                            <td>Customs Power Of Attorney</td>
                            <!--<td><a title="Download Customs Power Of Attorney" download="Credit_Power_of_Attorney"-->
                            <td><a title="Download Customs Power Of Attorney"
                                   href="">Download</a></td>
                        </tr>
                        <tr>
                            <td>Known Shipper Verification Form (KSVF)</td>
                            <!--<td><a title="Download Known Shipper Verification Form (KSVF)" download="KSVF"-->
                            <td><a title="Download Known Shipper Verification Form (KSVF)"
                                   href="">Download</a></td>
                        </tr>
                        <tr>
                            <td>Conditions of Contract</td>
                            <!--<td><a title="Download Conditions of Contract" download="Conditions_of_Contract"-->
                            <td><a title="Download Conditions of Contract"
                                   href="">Download</a></td>
                        </tr>
                        <tr>
                            <td>Service Conditions</td>
                            <!--<td><a title="Download Service Conditions" download="Service_Conditions"-->
                            <td><a title="Download Service Conditions"
                                   href="">Download</a></td>
                        </tr>
                    </table>
                </div>
                <div class="half pr-0">
                    <AriesDifference/>
                    <ServiceTimes/>
                    <SimpleContact/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .service .documents {
        background: url("../../assets/images/background/support/documents.jpg") no-repeat fixed center;
        background-size: cover;
    }

    table {
        width: 100%;
        margin-top: 1em;
        margin-bottom: 2em;
    }

    tr {
        line-height: 4;
    }

    tr td:first-child {
        font-weight: bold;
    }

    tr td:nth-child(2) a {
        display: inline-block;
        font-size: .75em;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 1px;
        transition: all 500ms ease-in-out;
    }

    tr td:nth-child(2) a:focus,
    tr td:nth-child(2) a:hover,
    tr td:nth-child(2) a:active {
        color: #dc143b;
        /*text-decoration: underline;*/
    }

</style>

<script>
   import AriesDifference from "@/components/AriesDifference";
   import ServiceTimes from "@/components/ServiceTimes";
   import SimpleContact from "@/components/SimpleContact";

   export default {
      name: 'SupportDocuments',
      metaInfo: {
         titleTemplate: '%s | Support | Documents'
      },
      components: {SimpleContact, ServiceTimes, AriesDifference}
   }

</script>