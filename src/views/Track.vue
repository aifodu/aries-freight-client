<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header track">
                <div class="overlay">
                    <h1>Order Tracking</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                / Order Tracking
            </p>
            <form @submit.prevent="trackOrder">
                <input type="text" v-model="trackingID" placeholder="Enter order tracking code.."
                       name="trackingID" v-validate="'min:9'">
                <transition name="alert-in">
                    <p v-if="errors.has('trackingID')" class="validation-alert">{{ errors.first('trackingID') }}</p>
                </transition>
                <button v-bind:disabled="errors.has('trackingID') || trackingID === ''" type="submit">
                    <span class="title">Track<span v-if="tracking">ing</span>
                        Order<span v-if="tracking">...</span></span>
                    <span v-if="tracking" class="loader"></span>
                </button>
            </form>
            <div v-if="attempted && found" class="order">
                <h2>
                    <small>Tracking#</small>
                    {{order.trackingId}}
                </h2>
                <p>Created {{order.dateSent | moment("calendar")}}</p>
                <p>Status: {{order.status}}</p>
                <p class="description">
                    <small>Order Description</small>
                    {{order.description}}
                </p>
                <div class="details">
                    <div>
                        <p v-if="order.sender">
                            <small>Sender</small>
                            {{order.sender}}
                        </p>
                        <p v-if="order.senderAddress">
                            <small>Sender Address</small>
                            {{order.senderAddress}}
                        </p>
                        <p v-if="order.senderEmail">
                            <small>Sender Email</small>
                            {{order.senderEmail}}
                        </p>
                        <p v-if="order.senderPhone">
                            <small>Sender Phone</small>
                            {{order.senderPhone}}
                        </p>
                    </div>
                    <div>
                        <p v-if="order.receiver">
                            <small>Receiver</small>
                            {{order.receiver}}
                        </p>
                        <p v-if="order.receiverAddress">
                            <small>Receiver Address</small>
                            {{order.receiverAddress}}
                        </p>
                        <p v-if="order.receiverEmail">
                            <small>Receiver Email</small>
                            {{order.receiverEmail}}
                        </p>
                        <p v-if="order.receiverPhone">
                            <small>Receiver Phone</small>
                            {{order.receiverPhone}}
                        </p>
                    </div>
                    <div v-if="order.timeline.length > 0">
                        <h4 class="text-blue text-uppercase">Order Timeline</h4>
                        <ul>
                            <li v-for="(data, index) in order.timeline" :key="index">
                                {{ ++index }}. {{ data.note }} on {{data.date | moment("dddd, MMMM Do YYYY")}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-if="attempted && !found && !tracking" class="order">
                <h2 class="text-red">Not Found!</h2>
            </div>
        </div>
    </div>
</template>

<script>
   const api = 'https://ariesfreight.herokuapp.com/api/v1/order/track/';
   // const api = 'http://127.0.0.1:4400/api/v1/order/track/';
   export default {
      name: 'Track',
      metaInfo: {
         titleTemplate: '%s | Track Order'
      },
      data() {
         return {
            item: '',
            found: null,
            order: {
               timeline: []
            },
            trackingID: '',
            attempted: false,
            tracking: false
         }
      },
      methods: {
         trackOrder() {
            if (!this.tracking) {
               this.$validator.validateAll ()
                  .then (result => {
                     this.attempted = true;
                     if (result) {
                        this.tracking = true;
                        this.$http.get (`${api}${this.trackingID}`)
                           .then ((response) => {
                              this.order = response.data;
                              this.order.timeline = this.order.timeline.sort ((a, b) => a.date.localeCompare (b.date));
                              this.found = true;
                              this.tracking = false;
                           }, (error) => {
                              console.log (error);
                              this.found = this.tracking = false;
                           });
                     }
                  })
            }
         }
      }
   }
</script>

<style scoped>

    .service .track {
        background: url("../assets/images/background/track/tube_whole.png") no-repeat fixed center;
        background-size: cover;
    }

    h2 small {
        font-weight: 200;
    }

    .order {
        padding-bottom: 3em;
    }

    form,
    .order {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }

    .description {
        margin: 2em 0;
        line-height: 1.5;
        white-space: pre-line;
    }

    .description small {
        display: block;
        color: #bbbbbb;
        transform: translateY(1em);
        text-transform: uppercase;
    }

    .details {
        margin-top: .5em;
        padding-top: 1em;
        border-top: 1px solid #dc143b;
    }

    .details div {
        margin: 2em 0;
        padding-bottom: 2em;
        border-bottom: 1px solid #dc143b;
    }

    .details p {
        margin-top: 1em;
        padding-left: 1em;
    }

    .details p small {
        display: block;
        line-height: 0;
        color: #AAA;
        transform: translateX(-1em);
        text-transform: uppercase;
        margin-bottom: 6px;
    }

    ul {
        display: block;
        list-style-type: none;
    }

    li {
        padding: .25em .5em;
        margin-top: 1px;
    }

    form {
        margin-top: 2em;
        margin-bottom: 4em;
        display: block;
        overflow-x: hidden;
    }

    form button,
    form input {
        background: rgba(13, 5, 44, 0.95);
        padding: 1.5em 1em;
        color: #FFFFFF;
        display: block;
        position: relative;
        outline: none;
        border: none;
        width: 100%;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        letter-spacing: 2px;
    }

    form button {
        background: rgba(248, 242, 139, 0.8);
        color: #dc143b;
        cursor: pointer;
        width: 40%;
        font-size: .90em;
        margin-top: 5px;
        border-radius: 5px;
    }

    form button:disabled {
        background: #DDDDDD;
        cursor: not-allowed;
    }

    form button .loader {
        top: 0;
        left: 0;
        width: 0;
        z-index: 1;
        height: 100%;
        border-radius: 5px;
        position: absolute;
        display: inline-block;
        background: rgba(13, 5, 44, 0.9);
        /*background: rgba(0, 0, 0, .5);*/
        animation: fill 2s infinite ease-out;
    }

    form button .title {
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        padding: 1em 0;
        position: absolute;
        z-index: 5;
    }

    @media screen and (max-width: 864px) {
        form,
        .order {
            width: 80%;
        }

        form button {
            width: 55%;
        }
    }

    @media screen and (max-width: 480px) {
        form,
        .order {
            width: 100%;
        }

        form button {
            width: 65%;
        }
    }

</style>