<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header resources">
                <div class="overlay">
                    <h1>Online Resources</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/support">Support</router-link>
                / Online Resources
            </p>
            <div class="full-page">
                <div>
                    <h3><a href="http://www.aircargoworld.com" target="_blank">Air Cargo World</a></h3>
                    <p>The air cargo industry's leading international monthly, providing in-depth analysis of trends and
                        strategic decision-making involving airlines forwarders, express carriers and logistics
                        companies. Based in Washington, D.C., with correspondents around the world, the magazine is
                        published monthly in the U.S. and also publishes international editions nine times a year.</p>

                    <h3><a href="http://www.atwonline.com/news3.shtm" target="_blank">Air Transport World</a></h3>
                    The magazine of airline world management; covers airline and cargo industry news; provides analysis
                    and insight on air cargo trends.

                    <h3><a href="http://www.aapa-ports.org" target="_blank">American Association of Port Authorities</a>
                    </h3>
                    <p>The American Association of Port Authorities (AAPA) is the alliance of ports of the Western
                        Hemisphere. The Association promotes the common interests of the port community and provides
                        leadership on trade, transportation, environmental and other issues related to port development
                        and operations. AAPA furthers public understanding of the essential role fulfilled by ports
                        within the global transportation system. The Association serves as a resource to help members
                        accomplish their professional responsibilities.</p>

                    <h3><a href="http://www.americanshipper.com" target="_blank">American Shipper</a></h3>
                    <p>Known for its in-depth reporting on issues affecting the freight industry, global trade, customs
                        and logistics, this monthly magazine covers air, ocean, maritime, trade, customs regulatory
                        actions and shipper issues worldwide. Focus is primarily on North America although the coverage
                        often contains international-related topics.</p>

                    <h3><a href="http://www.bloomberg.com" target="_blank">Bloomberg Business News</a></h3>
                    <p>One of the major online business and financial news web sites, this wire service provides
                        extensive coverage of daily business activities, financial, corporate and securities news,
                        primarily for publicly traded companies.</p>

                    <h3><a href="http://www.brokerpower.com" target="_blank">Broker Power, Inc.</a></h3>
                    <p>This online service monitors the actions of every Federal agency and institution involved in
                        setting and implementing US trade policy, as well as reports on general international trade
                        practices and trends.</p>

                    <h3><a href="http://www.cio.com" target="_blank">CIO Online</a></h3>
                    <p>Leading resource of IT trends and information services management issues for technology
                        executives.</p>

                    <h3><a href="http://cnnfn.cnn.com" target="_blank">CNNfn the financial network</a></h3>
                    <p>Web-based version of the popular television all news channel, provides up to the minute business
                        and financial news as well as world and general news.</p>

                    <h3><a href="http://www.access.gpo.gov/nara/cfr/cfr-table-search.htm" target="_blank">Code of
                        Federal
                        Regulations</a></h3>
                    <p>A very useful web site for researching and obtaining detail on U.S. Federal Regulations, Customs
                        laws and other subjects of federal legislative and regulatory actions, etc.</p>

                    <h3><a href="http://www.cpsc.gov" target="_blank">Consumer Product Safety Commission</a></h3>
                    <p>The Consumer Product Safety Commission web site has regular updates on products which are subject
                        to recall or investigation for safety issues, as well as general information on product safety
                        matters.</p>

                    <h3><a href="http://www.ftc.gov" target="_blank">Federal Trade Commission (FTC)</a></h3>
                    <p>The Federal Trade Commission enforces a variety of federal antitrust and consumer protection
                        laws. The Commission seeks to ensure that the nation's markets function competitively, and are
                        vigorous, efficient, and free of undue restrictions. The Commission also works to enhance the
                        smooth operation of the marketplace by eliminating acts or practices that are unfair or
                        deceptive. In general, the Commission's efforts are directed toward stopping actions that
                        threaten consumers' opportunities to exercise informed choice. Finally, the Commission
                        undertakes economic analysis to support its law enforcement efforts and to contribute to the
                        policy deliberations of the Congress, the Executive Branch, other independent agencies, and
                        state and local governments when requested.</p>

                    <h3><a href="http://www.fita.org/index.htm" target="_blank">Federation of International Trade
                        Associations</a></h3>
                    <p>The Federation of International Trade Associations (FITA), founded in 1984, fosters international
                        trade by strengthening the role of local, regional, and national associations throughout the
                        United States, Mexico and Canada that have an international mission. FITA affiliates are 400+
                        independent international associations with an aggregate membership of more than 300,000 North
                        American companies and organizations active in international trade.</p>

                    <h3><a href="http://www.hcbffa.org" target="_blank">Houston Customhouse Brokers & Freight Forwarders
                        Association</a></h3>
                    <p>HCBFFA has been instrumental in providing leadership to international trade service companies
                        since 1982. Our membership represents over 75,000 importers and exporters who do business
                        through Houston, the third largest seaport and one of the largest international gateways in the
                        United States. Members are provided with a forum for exchanging ideas and staying informed on
                        pertinent issued and new technologies that affect the international trade community.</p>


                    <h3><a href="http://www.inboundlogistics.com" target="_blank">Inbound Logistics</a></h3>
                    <p>A monthly magazine, focuses heavily on logistics-oriented stories and emphasizes resources for
                        logistics professionals as well as shipper-driven stories relating logistics practice in the
                        market today. Also contains a number of interactive resources for generating sales leads and
                        routing bids for logisics projects.</p>

                    <h3><a href="http://www.manufacturing.net/magazine/id/main.htm" target="_blank">Industrial
                        Distribution</a></h3>
                    <p>The magazine for management and sales personnel involved in distribution operations for
                        companies, as well as specialized distribution firms. Generally reports on distribution
                        products, services, tools and techniques for industrial manufacturers.</p>

                    <h3><a href="http://www.intermodal.org" target="_blank">Intermodal Association of North America</a>
                    </h3>
                    <p>IANA is North America's leading industry trade association representing the combined interests of
                        the intermodal freight industry. IANA provides its members with a variety of products and
                        services that not only meet the needs of a diverse and growing membership, but also address
                        issues of common concern. These quality programs keep members informed of legislative and
                        regulatory issues, and provide reliable industry data, educational forums, networking
                        opportunities, news and information, and more.</p>

                    <router-link class="fetch" to="/support/resources">Load More Resources...</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .service .resources {
        background: url("../../assets/images/background/support/resources.jpg") no-repeat fixed center;
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

    h3 a {
        color: #1A065A;
    }

    p {
        margin-bottom: 1.5em;
    }

    a.fetch {
        display: block;
        margin-top: 2em;
        margin-bottom: 1em;
        text-decoration: none;
        text-transform: uppercase;
    }

</style>

<script>

   export default {
      name: 'SupportResources',
      metaInfo: {
         titleTemplate: '%s | Support | Resources'
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