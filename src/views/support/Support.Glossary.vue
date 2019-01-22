<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header support">
                <div class="overlay">
                    <h1>Glossary of Terms</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/support">Support</router-link>
                / Glossary of Terms
            </p>
            <div class="full-page">
                <div id="sidebar" class="sidebar">
                    <ul>
                        <li><a href="#a-d" v-scroll-to="{el: '#banner', offset: -100, force: true,}">
                            A &mdash; D</a></li>
                        <li><a href="#e-h" v-scroll-to="{el: '#e-h', offset: -100}">E &mdash; H</a></li>
                        <li><a href="#i-l" v-scroll-to="{el: '#i-l', offset: -100}">I &mdash; L</a></li>
                        <li><a href="#m-p" v-scroll-to="{el: '#m-p', offset: -100}">M &mdash; P</a></li>
                        <li><a href="#q-t" v-scroll-to="{el: '#q-t', offset: -100}">Q &mdash; T</a></li>
                        <li><a href="#u-z" v-scroll-to="{el: '#u-z', offset: -100}">U &mdash; Z</a></li>
                    </ul>
                </div>
                <main>
                    <section>
                        <p>Unfamiliar with a term that is specific to the logistics and transportation
                            industry? Our carefully curated glossary will guide you through commonly used words and
                            terminologies.</p>
                    </section>
                    <section class="glossary" id="a-d" v-inview:enter="inView">
                        <h2>A &mdash; D</h2>
                        <SupportGlossaryA/>
                        <SupportGlossaryB/>
                        <SupportGlossaryC/>
                        <SupportGlossaryD/>
                    </section>
                    <section class="glossary" id="e-h" v-inview:enter="inView">
                        <h2>E &mdash; H</h2>
                        <SupportGlossaryEF/>
                        <SupportGlossaryGH/>
                    </section>
                    <section class="glossary" id="i-l" v-inview:enter="inView">
                        <h2>I &mdash; L</h2>
                        <SupportGlossaryIL/>
                    </section>
                    <section class="glossary" id="m-p" v-inview:enter="inView">
                        <h2>M &mdash; P</h2>
                        <SupportGlossaryMN/>
                        <SupportGlossaryOP/>
                    </section>
                    <section class="glossary" id="q-t" v-inview:enter="inView">
                        <h2>Q &mdash; T</h2>
                        <SupportGlossaryRS/>
                        <SupportGlossaryT/>
                    </section>
                    <section class="glossary" id="u-z" v-inview:enter="inView">
                        <h2>U &mdash; Z</h2>
                        <SupportGlossaryUZ/>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .service .support {
        background: url("../../assets/images/background/support/glossary_of_terms.jpg") no-repeat fixed center;
        background-size: cover;
    }

</style>

<style>

    section.glossary ul {
        padding-left: 1em;
    }

    section.glossary ul li {
        margin-top: 1em;
        display: block;
    }

    section.glossary ul li span {
        color: #666666;
        font-weight: 700;
    }

    section.glossary ul li,
    section.glossary p {
        margin-top: 1.25em;
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
      name: 'SupportGlossary',
      metaInfo: {
         titleTemplate: '%s | Support | Glossary'
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