<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header tools">
                <div class="overlay">
                    <h1>Tools and Calculators</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/support">Support</router-link>
                / Tools and Calculators
            </p>
            <div class="full-page">
                <div id="sidebar" class="sidebar">
                    <ul>
                        <li><a href="#dim-weight" v-scroll-to="{el: '#banner', offset: -100, force: true,}">
                            Dim Weight</a></li>
                        <li><a href="#mass-volume" v-scroll-to="{el: '#mass-volume', offset: -100}">
                            Mass/Volume</a></li>
                        <!--<li><a href="#countries" v-scroll-to="{el: '#countries', offset: -100}">-->
                            <!--Countries</a></li>-->
                    </ul>
                </div>
                <main>
                    <section>
                        <p>Distance, Country Codes, Weights and Conversions. Knowing these wil help
                            you determine many factors associated with your shipments.</p>
                    </section>
                    <section class="glossary" id="dim-weight" v-inview:enter="inView">
                        <h2>Dimensional Weight Calculator</h2>
                        <img src="../../assets/images/background/support/tools/weight-scale.jpg">
                        <p>The cost of a shipment can be affected by the amount of space that it occupies rather than
                            the actual weight. This is the volumetric (or dimensional) weight.</p>
                        <router-link to="/support/tools/dimensional-weight">Calculate DIM weight</router-link>
                    </section>
                    <section class="glossary" id="mass-volume" v-inview:enter="inView">
                        <h2>Mass and Volume Calculator</h2>
                        <img src="../../assets/images/background/support/tools/mass-volume.jpg">
                        <p>The cost of a shipment can be affected by the amount of space that it occupies rather than
                            the actual weight. This is the volumetric (or dimensional) weight.</p>
                        <router-link to="/support/tools/mass-volume">Calculate Mass and Volume</router-link>
                    </section>
                    <!--<section class="glossary" id="countries" v-inview:enter="inView">-->
                        <!--<h2>Country Codes and Distances</h2>-->
                        <!--<img src="../../assets/images/background/support/tools/state-map.jpg">-->
                        <!--<p>The cost of a shipment can be affected by the amount of space that it occupies rather than-->
                            <!--the actual weight. This is the volumetric (or dimensional) weight.</p>-->
                        <!--<router-link to="/support/tools/countries">Open Countries Tool</router-link>-->
                    <!--</section>-->
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .service .tools {
        background: url("../../assets/images/background/support/tools_and_calculators.jpg") no-repeat fixed center;
        background-size: cover;
    }

</style>

<script>
   import AriesDifference from "../../components/AriesDifference";
   import SupportGlossaryA from "../../components/glossary/Support.Glossary.A";
   import SupportGlossaryB from "../../components/glossary/Support.Glossary.B";
   import SupportGlossaryC from "../../components/glossary/Support.Glossary.C";
   import SupportGlossaryD from "../../components/glossary/Support.Glossary.D";
   import SupportGlossaryEF from "../../components/glossary/Support.Glossary.EF";
   import SupportGlossaryGH from "../../components/glossary/Support.Glossary.GH";
   import SupportGlossaryIL from "../../components/glossary/Support.Glossary.IL";
   import SupportGlossaryOP from "../../components/glossary/Support.Glossary.OP";
   import SupportGlossaryMN from "../../components/glossary/Support.Glossary.MN";
   import SupportGlossaryRS from "../../components/glossary/Support.Glossary.RS";
   import SupportGlossaryT from "../../components/glossary/Support.Glossary.T";
   import SupportGlossaryUZ from "../../components/glossary/Support.Glossary.UZ";

   export default {
      name: 'SupportTools',
      metaInfo: {
         titleTemplate: '%s | Support | Tools'
      },
      components: {
         SupportGlossaryUZ,
         SupportGlossaryT,
         SupportGlossaryRS,
         SupportGlossaryMN,
         SupportGlossaryOP,
         SupportGlossaryIL,
         SupportGlossaryGH,
         SupportGlossaryEF,
         SupportGlossaryD, SupportGlossaryC, SupportGlossaryB, SupportGlossaryA, AriesDifference
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