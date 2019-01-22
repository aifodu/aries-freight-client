<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header contact">
                <div class="overlay">
                    <h1>Contact Us</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                / Contact Us
            </p>
            <div id="contact-form">
                <iframe
                    id="JotFormIFrame-82642559256566"
                    onload="document.getElementById('contact-form').classList.add('show')"
                    allowtransparency="true"
                    src="https://form.myjotform.com/82642559256566"
                    frameborder="0"
                    scrolling="no"
                ></iframe>
            </div>
            <div class="full">
                <div class="half address">
                    <h2>Office Address</h2>
                    <h4>Aries Freight Systems, L.P.</h4>
                    <h5>Global Headquarters Address:</h5>
                    <p>200 Imperial Blvd,
                        Cape Canaveral,
                        FL 32920
                        United States.</p>
                    <h5>Phone Numbers:</h5>
                    <p>
                        +1 832 280 6407,
                        +1 281 656 9426
                    </p>

                    <h5>Email:</h5>
                    <p>
                        <a href="mailto:info@ariesfreightsystem.com">info@ariesfreightsystem.com</a>,
                        <a href="mailto:dispatch@ariesfreightsystem.com">dispatch@ariesfreightsystem.com</a>
                        <!-- <a href="mailto:ariesfreight@fastservice.com">ariesfreight@fastservice.com</a> -->
                    </p>
                </div>
                <div class="half pr-0">
                    <AriesDifference/>
                    <ServiceTimes/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

   var ifr = document.getElementById ("JotFormIFrame-82642559256566");
   if (window.location.href && window.location.href.indexOf ("?") > -1) {
      var get = window.location.href.substr (window.location.href.indexOf ("?") + 1);
      if (ifr && get.length > 0) {
         var src = ifr.src;
         src = src.indexOf ("?") > -1 ? src + "&" + get : src + "?" + get;
         ifr.src = src;
      }
   }
   let iframe;
   window.handleIFrameMessage = function (e) {
      if (typeof e.data.split !== 'function')
         return;
      var args = e.data.split (":");
      if (args.length > 2) {
         iframe = document.getElementById ("JotFormIFrame-" + args[(args.length - 1)]);
      } else {
         iframe = document.getElementById ("JotFormIFrame");
      }
      if (!iframe) {
         return;
      }
      switch (args[0]) {
         case "scrollIntoView":
            iframe.scrollIntoView ();
            break;
         case "setHeight":
            iframe.style.height = args[1] + "px";
            break;
         case "collapseErrorPage":
            if (iframe.clientHeight > window.innerHeight) {
               iframe.style.height = window.innerHeight + "px";
            }
            break;
         case "reloadPage":
            window.location.reload ();
            break;
         case "loadScript":
            var src = args[1];
            if (args.length > 3) {
               src = args[1] + ':' + args[2];
            }
            var script = document.createElement ('script');
            script.src = src;
            script.type = 'text/javascript';
            document.body.appendChild (script);
            break;
         case "exitFullscreen":
            if (window.document.exitFullscreen) window.document.exitFullscreen ();
            else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen ();
            else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen ();
            else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen ();
            else if (window.document.msExitFullscreen) window.document.msExitFullscreen ();
            break;
      }
      var isJotForm = (e.origin.indexOf ("jotform") > -1) ? true : false;
      if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
         var urls = {"docurl": encodeURIComponent (document.URL), "referrer": encodeURIComponent (document.referrer)};
         iframe.contentWindow.postMessage (JSON.stringify ({"type": "urls", "value": urls}), "*");
      }
   };
   if (window.addEventListener) {
      window.addEventListener ("message", window.handleIFrameMessage, false);
   } else if (window.attachEvent) {
      window.attachEvent ("onmessage", window.handleIFrameMessage);
   }

   import ServiceTimes from "../components/ServiceTimes";
   import AriesDifference from "../components/AriesDifference";

   export default {
      name: 'Contact',
      components: {AriesDifference, ServiceTimes},
      metaInfo: {
         titleTemplate: '%s | Contact'
      },
      methods: {
         showContactPage() {
            console.log ('myframe is loaded');
            window.parent.scrollTo (0, 0);
         }
      }
   }
</script>

<style scoped>

    #contact-form{
        display: none;
    }

    #contact-form.show {
        display: block;
    }

    iframe {
        width: 1px;
        min-width: 100%;
        height: 539px;
        border: none;
        margin-bottom: 2em;
    }

    .service .contact {
        background: url("../assets/images/background/contact/two-way.jpg") no-repeat fixed center;
        background-size: cover;
    }

    /* .address { */
        /*margin-right: 4em;*/
    /* } */

    .address h2,
    .address h4,
    .address h5 {
        text-transform: uppercase;
    }

    .address h2 {
        color: #dc143b;
        line-height: 1.5;
        letter-spacing: 4px;
    }

    .address h4 {
        color: #1A065A;
        line-height: 1.5;
        letter-spacing: 2px;
        margin-top: 2em;
    }

    .address h5 {
        /*color: rgba(193, 70, 45, 0.40);*/
        color: #999;
        margin-top: 1em;

    }

    .address p {
        margin-bottom: 1.5em;
    }

    .address p a {
        color: inherit;
        text-decoration: none;
    }

</style>