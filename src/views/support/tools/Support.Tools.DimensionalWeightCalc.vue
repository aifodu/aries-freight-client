<template>
    <div class="service">
        <div class="container">
            <div class="sub-page-header dimensional-weight">
                <div class="overlay">
                    <h1>DIM Weight Calculator</h1>
                </div>
            </div>
        </div>
        <div class="container pd-x-30 lh-2">
            <p class="breadcrumb">
                <router-link to="/">Home</router-link>
                /
                <router-link to="/support">Support</router-link>
                /
                <router-link to="/support/tools">Tools</router-link>
                / DIM Weight Calculator
            </p>
            <div>
                <p>The volumetric weight of a shipment is a calculation that reflects the density of a package.
                    A less dense item generally occupies more volume of space, in comparison to its actual
                    weight. The volumetric or dimensional weight is calculated and compared with the actual
                    weight of the shipment to ascertain which is greater; <em>the higher weight is used to calculate
                        the shipment cost.</em></p>
                <div class="full mt-2">
                    <div class="half">
                        <img class="sample" src="../../../assets/images/background/support/tools/boxes-dims.png"
                             alt="Box Dimensions">
                    </div>
                    <div class="half">
                        <h3 class="text-red">Calculator</h3>
                        <p> I am measuring in
                            <select name="measure" id="measure" v-model="measure">
                                <option value="cm">centimetres</option>
                                <option value="in">inches</option>
                            </select>
                        </p>
                        <div class="mt-1">
                            <transition name="alert-in">
                                <span v-if="errors.has('length')"
                                      class="validation-alert">{{ errors.first('length') }}</span>
                                <span v-if="errors.has('width')"
                                      class="validation-alert">{{ errors.first('width') }}</span>
                                <span v-if="errors.has('height')"
                                      class="validation-alert">{{ errors.first('height') }}</span>
                            </transition>
                        </div>
                        <form @submit.prevent="calculate" class="control-group">
                            <div class="form-control">
                                <label for="length">Length <span>*</span></label>
                                <input type="number" step="0.5" placeholder="Enter length"
                                       v-validate="{min:1, required: true}" v-bind:onkeyup="calculate()"
                                       min="1" id="length" name="length" v-model="length">
                            </div>
                            <div class="form-control">
                                <label for="width">Width <span>*</span></label>
                                <input type="number" step="0.5" placeholder="Enter width"
                                       v-validate="{min:1, required: true}" v-bind:onkeyup="calculate()"
                                       min="1" id="width" name="width" v-model="width">
                            </div>
                            <div class="form-control">
                                <label for="height">Height <span>*</span></label>
                                <input type="number" step="0.5" placeholder="Enter height"
                                       v-validate="{min:1, required: true}" v-bind:onkeyup="calculate()"
                                       min="1" id="height" name="height" v-model="height">
                            </div>
                        </form>
                        <h2 v-bind:class="{'old': (errors.has('length') || errors.has('width') ||
                                    errors.has('height'))}">
                            <small>Dimensional Weight =</small>
                            {{kiloWeight}}
                            <small>kg</small>&nbsp;
                            ({{poundWeight}}
                            <small>lb</small>
                            )
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   const centimetres = 5000;
   const inches = (Math.pow ((1 / 2.54), 3) * centimetres);
   export default {
      name: 'DIMWeightCalculator',
      data() {
         return {
            measure: 'cm',
            length: 1,
            width: 1,
            height: 1,
            kiloWeight: (0).toFixed (1),
            poundWeight: (0).toFixed (1),
         }
      },
      methods: {
         calculate() {
            const volume = this.length * this.width * this.height;
            if (this.measure === 'in') {
               const weight = (volume / inches);
               this.kiloWeight = weight.toFixed (1);
               this.poundWeight = (weight * 2.204623).toFixed (1);
            } else {
               const weight = (volume / centimetres);
               this.kiloWeight = weight.toFixed (1);
               this.poundWeight = (weight * 2.204623).toFixed (1);
            }
         }
      },
      metaInfo: {
         titleTemplate: '%s | Support | Tools | DIM Weight Calculator'
      }
   }

</script>

<style scoped>

    .old {
        color: #DDDDDD;
    }

    .half h2 {
        margin-top: 1em;
        font-weight: 400;
    }

    input,
    select,
    button {
        border: none;
        outline: none;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
    }

    select {
        color: #1A065A;
        text-transform: uppercase;
    }

    .control-group {
        flex-wrap: wrap;
        display: flex;
    }

    @media screen and (max-width: 480px) {
        .control-group {
            flex-direction: column;
        }
    }

    .control-group div {
        margin-right: 1em;
    }

    .form-control {
        font-size: .8em;
        margin-bottom: 1em;
    }

    .form-control label {
        font-size: .85em;
        text-transform: uppercase;
    }

    .form-control label span {
        color: #dc143b;
    }

    .form-control input,
    .form-control button {
        display: block;
    }

    .form-control input {
        padding: .5em;
        background: rgba(248, 242, 139, .6);
    }

    .form-control button {
        padding: .5em 1em;
        color: #EEEEEE;
        cursor: pointer;
        border-radius: 4px;
        text-transform: uppercase;
        background: rgba(13, 5, 44, 0.9);
    }

    .form-control button:disabled {
        cursor: none;
        background: #666;
    }

    .half {
        padding: 2em 0;
    }

    img.sample {
        width: 80%;
        margin: 0 auto;
        display: block;
    }

    .service .dimensional-weight {
        background: url("../../../assets/images/background/support/tools/weight-scale.jpg") no-repeat fixed center;
        background-size: cover;
    }

</style>