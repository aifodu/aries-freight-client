import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use (Router);

export default new Router ({
   mode: 'history',
   base: process.env.BASE_URL,
   routes: [
      {
         path: '/',
         name: 'home',
         component: Home
      },
      {
         path: '/about',
         name: 'about',
         // route level code-splitting
         // this generates a separate chunk (about.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      },
      {
         path: '/services',
         name: 'services',
         component: () => import(/* webpackChunkName: "services" */ './views/Services.vue')
      },
      {
         path: '/case-studies',
         name: 'case-studies',
         component: () => import(/* webpackChunkName: "cases" */ './views/CaseStudies.vue')
      },
      {
         path: '/support',
         name: 'support',
         component: () => import(/* webpackChunkName: "support" */ './views/Support.vue')
      },
      {
         path: '/contact',
         name: 'contact',
         component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
      },
      {
         path: '/services/air-freight-services',
         name: 'air-freight-services',
         component: () => import(/* webpackChunkName: "services.air" */ './views/services/Services.AirFreight.vue')
      },
      {
         path: '/services/expedited-cargo-services',
         name: 'expedited-cargo-services',
         component: () => import(/* webpackChunkName: "services.expedited" */ './views/services/Services.ExpeditedCargo.vue')
      },
      {
         path: '/services/project-cargo-services',
         name: 'project-cargo-services',
         component: () => import(/* webpackChunkName: "services.project" */ './views/services/Services.ProjectCargo.vue')
      },
      {
         path: '/services/trade-compliance-services',
         name: 'trade-compliance-services',
         component: () => import(/* webpackChunkName: "services.compliance" */ './views/services/Services.TradeCompliance.vue')
      },
      {
         path: '/services/crating-packing-services',
         name: 'crating-packing-services',
         component: () => import(/* webpackChunkName: "services.crating" */ './views/services/Services.CratingPacking.vue')
      },
      {
         path: '/services/ocean-shipping-services',
         name: 'ocean-shipping-services',
         component: () => import(/* webpackChunkName: "services.ocean" */ './views/services/Services.OceanShipping.vue')
      },
      {
         path: '/services/ground-shipping-services',
         name: 'ground-shipping-services',
         component: () => import(/* webpackChunkName: "services.ground" */ './views/services/Services.GroundShipping.vue')
      },
      {
         path: '/services/customs-brokerage-services',
         name: 'customs-brokerage-services',
         component: () => import(/* webpackChunkName: "services.customs" */ './views/services/Services.CustomsBrokerage.vue')
      },
      {
         path: '/services/warehousing-logistics-services',
         name: 'warehousing-logistics-services',
         component: () => import(/* webpackChunkName: "services.warehousing" */ './views/services/Services.WarehousingLogistics.vue')
      },
      {
         path: '/support/documents',
         name: 'documents',
         component: () => import(/* webpackChunkName: "support.documents" */ './views/support/Support.Documents.vue')
      },
      {
         path: '/support/glossary',
         name: 'glossary',
         component: () => import(/* webpackChunkName: "support.glossary" */ './views/support/Support.Glossary.vue')
      },
      {
         path: '/support/resources',
         name: 'resources',
         component: () => import(/* webpackChunkName: "support.resources" */ './views/support/Support.Resources.vue')
      },
      {
         path: '/support/tools',
         name: 'tools',
         component: () => import(/* webpackChunkName: "support.tools" */ './views/support/Support.Tools.vue')
      },
      {
         path: '/support/tools/countries',
         name: 'countries',
         component: () => import(/* webpackChunkName: "support.tools.countries" */ './views/support/tools/Support.Tools.CountriesDistCodes.vue')
      },
      {
         path: '/support/tools/dimensional-weight',
         name: 'dimensional-weight',
         component: () => import(/* webpackChunkName: "support.tools.dimensional-weight" */ './views/support/tools/Support.Tools.DimensionalWeightCalc.vue')
      },
      {
         path: '/support/tools/mass-volume',
         name: 'mass-volume',
         component: () => import(/* webpackChunkName: "support.tools.mass-volume" */ './views/support/tools/Support.Tools.MassVolumeCalc.vue')
      },
      {
         path: '/sitemap',
         name: 'sitemap',
         component: () => import(/* webpackChunkName: "sitemap" */ './views/Sitemap.vue')
      },
      {
         path: '/privacy',
         name: 'privacy',
         component: () => import(/* webpackChunkName: "privacy" */ './views/PrivacyPolicy.vue')
      },
      {
         path: '/terms-and-conditions',
         name: 'terms-and-conditions',
         component: () => import(/* webpackChunkName: "tandc" */ './views/TermsAndConditions.vue')
      },
      {
         path: '/track',
         name: 'track',
         component: () => import(/* webpackChunkName: "track" */ './views/Track.vue')
      },
      {
         path: '*',
         redirect: '/'
      }
   ]
})
