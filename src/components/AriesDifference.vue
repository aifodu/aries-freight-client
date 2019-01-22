<template>
    <div class="difference">
        <!--<h2>The Aries Difference</h2>-->
        <agile :arrows="false" :speed="750" :dots="false"
               :timing="'linear'" :fade="true"
               :autoplay="true" :pauseOnHover="false">
            <div class="difference-item ocean-freight">
                <div class="caption">
                    <h4>Aries Difference</h4>
                    <p>Experienced, Cross-Trained Personnel</p>
                </div>
            </div>

            <div class="difference-item air-freight">
                <div class="caption">
                    <h4>Aries Difference</h4>
                    <p>Tenured Team</p>
                </div>
            </div>

            <div class="difference-item haulage-freight">
                <div class="caption">
                    <h4>Aries Difference</h4>
                    <p>Management teams’ combined length of service</p>
                </div>
            </div>

            <div class="difference-item road-freight">
                <div class="caption">
                    <h4>Aries Difference</h4>
                    <p>Turn-key, one-stop logistics</p>
                </div>
            </div>

            <div class="difference-item ocean-freight">
                <div class="caption">
                    <h4>Aries Difference</h4>
                    <p>Diversity of product lines and services</p>
                </div>
            </div>

            <div class="difference-item air-freight">
                <div class="caption">
                    <h4>Aries Difference</h4>
                    <p>Ability to integrate the diversity of services</p>
                </div>
            </div>

            <div class="difference-item haulage-freight">
                <div class="caption">
                    <h4>Aries Difference</h4>
                    <p>Integrated Web-tracking and Reporting</p>
                </div>
            </div>

            <div class="difference-item road-freight">
                <div class="caption">
                    <h4>Aries Difference</h4>
                    <p>Automated Event Communication</p>
                </div>
            </div>
        </agile>
        <!--<div class="typeform-widget" data-url="https://ujade.typeform.com/to/QrgTgg"-->
        <!--style="width: 100%; height: 400px;"></div>-->
    </div>
</template>

<script>
   export default {
      name: 'AriesDifference'
   };
   // (function () {
   //    let qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName,
   //       id = "typef_orm", b = "https://embed.typeform.com/";
   //    if (!gi.call (d, id)) {
   //       js = ce.call (d, "script");
   //       js.id = id;
   //       js.src = b + "embed.js";
   //       q = gt.call (d, "script")[0];
   //       q.parentNode.insertBefore (js, q)
   //    }
   // }) ()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .difference{
        margin-bottom: 1em;
    }

    .difference-item {
        margin-top: 1em;
    }

    .difference-item .caption {
        background: rgba(0, 0, 0, .85);
        padding: 1em;
        text-align: center;
        color: #FFFFFF;
        line-height: 2;
    }

    @media screen and (max-width: 480px) {
        .difference-item {
            margin-top: 0;
        }

        .difference-item .caption {
            font-size: .8em;
        }
    }

    .difference-item h4 {
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #dc143b;
    }
</style>
