<template>
  <div class="footer">
    <div class="overlay">
      <div class="scroll-top" v-scroll-to="{ element: '#banner', easing: 'linear' }">
        <div class="container">
          <div class="pd-x-30">Return to Top
            <span class="top-icon"></span>
          </div>
        </div>
      </div>
      <div class="container pd-x-30">
        <div class="content">
          <div class="address">
            <h4>Aries Freight Systems, L.P.</h4>
            <h5>Global Headquarters Address:</h5>
            <p>
              200 Imperial Blvd,
              Cape Canaveral,
              FL 32920
              United States.
            </p>
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

          <div class="certification">
            <a href="http://www.fmc.gov/">
              <img src="../assets/images/certifications/ad1.png" alt="FMC">
            </a>
            <a href="http://www.cbp.gov/xp/cgov/home.xml">
              <img src="../assets/images/certifications/ad2.png" alt="CPB">
            </a>
            <a href="http://www.c-tpat.com/">
              <img src="../assets/images/certifications/ad3.png" alt="C-TPAT">
            </a>
            <a href="http://www.dot.gov/">
              <img src="../assets/images/certifications/DOTLogo.gif" alt="DOT">
            </a>
            <a href="http://www.iata.org/Pages/default.aspx">
              <img src="../assets/images/certifications/iata_logo_ad.png" alt="IATA">
            </a>
          </div>
        </div>
        <div class="copyright">
          <p>
            <router-link to="/sitemap">Sitemap</router-link>|
            <router-link to="/privacy">Privacy Policy</router-link>|
            <router-link to="/terms-and-conditions">T &amp; C</router-link>
          </p>
          <p>
            Copyright &copy; {{ date }} Aries Freight Systems. All rights reserved
            worldwide.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
  margin-top: 2em;
  color: #000000;
  background: url("../assets/images/background/world-map.jpg") no-repeat fixed
    center;
  background-size: cover;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
}

.scroll-top {
  line-height: 40px;
  display: block;
  cursor: pointer;
  text-align: right;
  padding: 1.5em 30px;
  font-size: 0.75em;
  color: #aaa;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.5);
}

.top-icon {
  background: #000;
  width: 10px;
  height: 10px;
  border-bottom: 50px solid red;
  border-top: 50px solid red;
}

.content {
  padding: 2em 0;
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
  font-size: 0.8em;
}

@media screen and (max-width: 864px) {
  .scroll-top {
    display: none;
    line-height: 1;
    padding: 0.5em 2em 1em;
    background: rgba(0, 0, 0, 0.5);
  }

  .content {
    font-size: 1em;
  }
}

.content .address {
  color: #dddddd;
  margin-right: 4em;
}

.content h4 {
  color: #dc143b;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.content h5 {
  color: #dddddd;
  margin-top: 1em;
  margin-bottom: 0.25em;
}

.address a {
  color: inherit;
  text-decoration: none;
}

.certification {
  margin-top: 2em;
  margin-bottom: 2em;
  /*position: absolute;*/
  right: 2em;
}

.certification a + a {
  margin-left: 2em;
}

.copyright {
  border-top: 1px dotted #dddddd;
  padding: 4em 0 5em;
  margin-top: 1em;
  text-align: center;
  font-size: 0.75em;
  color: #ccc;
}

.copyright a {
  text-transform: uppercase;
  text-decoration: none;
  color: yellow;
  display: inline-block;
  padding: 0 1em 1em;
}

@media screen and (max-width: 480px) {
  .certification {
    text-align: center;
  }

  .certification img {
    height: 50px;
  }

  .certification a + a {
    margin-left: 0.5em;
  }

  .copyright {
    margin-top: 0;
    /*padding: 0 0 5em;*/
  }
}
</style>
