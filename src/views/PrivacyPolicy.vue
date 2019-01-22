<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header privacy">
                <div class="overlay">
                    <h1>Privacy Policy</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                / Privacy Policy
            </p>
            <div>
                <p><strong class="text-red">Aries Freight Systems, L.P. (ARIES)</strong> respects and protects the
                    privacy of everyone who accesses
                    our applications and systems. We will not intentionally disclose individually identifiable
                    information about our customers or members to any third party without specific consent or prior
                    notice to our users.</p>

                <h3>Does ARIES request personal information?</h3>
                <p>Yes, we do. ARIES may ask for general information in some instances. This may include your name,
                    e-mail address, and other personal information when you request our services by completing
                    online forms. We may also ask for such information at other times, such as when you request
                    information or enter areas with restricted access.</p>

                <p>ARIES will not disclose any of your personal information, except as described below; when we
                    believe, in good faith, that the law requires it; or to protect the rights or property of ARIES.
                    ARIES does disclose aggregated user statistics (for example, 45% of our users are interested in
                    specific areas of interest) in order to describe our services to prospective partners,
                    advertisers, and other third parties, and for other lawful purposes.</p>

                <p>Under confidentiality agreements, ARIES may match user information with third party data. If and
                    when we do match user information, we endeavor to keep personal information confidential from
                    those third parties.</p>

                <p>Additionally, if you elect to conduct business from our site, the information obtained during
                    your visit to these areas, and the information that you give such as your credit card number and
                    contact information, is provided to the person of record to assist the completion of the
                    transaction with any third party company or ARIES’ partner. These companies and partners have
                    separate privacy and data collection practices. ARIES does not have responsibility or liability
                    for these independent policies.</p>

                <h3>How Does ARIES use my personal information?</h3>
                <p>By knowing a little about you, ARIES is able to deliver more relevant content and communication,
                    and hence a better service, to you. ARIES' goal in collecting personal information is to provide
                    you, the user, with the most intuitive Web experience possible.</p>

                <p>In our role of delivering targeted communications, ARIES delivers communication to users meeting
                    criteria for the communication. The communication will typically include information, but will
                    not be limited to, regarding customer shipments, ARIES’ operations, and other information
                    important to the ongoing interaction between ARIES and the customer. Only ARIES has access to
                    individuals' accounts.</p>

                <p>ARIES may send you information about our various products and services, or other products and
                    services for which you have expressed interest. You can remove yourself from any distribution
                    list via a link in the communication. Only ARIES (or agents working on behalf of ARIES under
                    confidentiality agreements) will send you communication.</p>

                <h3>Does ARIES use cookies and "IP Addresses"?</h3>
                <p>Yes, cookies and IP Addresses are used throughout ARIES products and services.</p>

                <p class="pl-2">We use cookies to be reminded of who you are and to access your account information (stored
                    securely on servers behind firewalls) in order to deliver to you a more personalized and robust
                    service. These cookies are set when you register or submit online forms.</p>
                <p class="pl-2">Cookies are used in ARIES e-Commerce to help track visits to specific areas and process the items
                    in your transactions and requests for information.</p>
                <p class="pl-2">Cookies are also used for reporting aggregate site traffic information. Each browser accessing
                    ARIES is given a unique cookie to determine initial usage versus repeat usage.</p>
                <p class="pl-2">Cookies will also track activity for debugging purposes and contains request variables, including
                    submitted form elements. This data is only used in the event of an error and assists development
                    teams in reproducing errors, which will better serve your time with us.</p>
                <p class="pl-2">We use IP Addresses to report aggregate information regarding the use of our site as well as for
                    the purpose of system administration. A third party company collects the information used in
                    these efforts.</p>

                <h3>What else should I know about my privacy?</h3>
                <p>Please keep in mind that whenever you voluntarily disclose personal information online - for
                    example by submitting online forms, participating in discussion groups, or through e-mail - your
                    information can be collected and used by others. In short, if you post personal information
                    online that is accessible to the public, you may receive unsolicited messages from other parties
                    in return. When you join a private e-mail group online, that group's mailing list will be
                    disclosed to the third-party Administrator. Consequently, unless you remove yourself from that
                    list via a link made available to users, you may receive unsolicited messages from the
                    Administrator.</p>

                <p>The password protected areas of this Web site can only be accessed with a valid password. You are
                    responsible for keeping your password secret and confidential, and for notifying us if you
                    believe that your password has been stolen or might otherwise be misused.</p>

                <p>Furthermore, while we strive to protect your personal information, ARIES cannot ensure or warrant
                    the security of any information you transmit to us, and you do so at your own risk. In addition,
                    ARIES agents, partners, third party companies, and third party Internet sites and services
                    accessible through ARIES, have separate privacy and data collection practices, independent of
                    us. ARIES has no responsibility or liability for these independent policies or actions.</p>
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

    .service .privacy {
        background: url("../assets/images/background/privacy/privacy-vault.jpg") no-repeat fixed center;
        background-size: cover;
    }

    h3 {
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #1A065A;
        line-height: 1.5;
        margin-top: 2em;
        margin-bottom: 1em;
    }

    p {
        text-align: justify;
        margin-bottom: 1.5em;
    }

</style>