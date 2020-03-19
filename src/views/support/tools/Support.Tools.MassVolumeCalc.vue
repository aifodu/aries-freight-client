<template>
  <div class="service">
    <div class="container">
      <div class="sub-page-header mass-volume">
        <div class="overlay">
          <h1>Mass and Volume Calculator</h1>
        </div>
      </div>
    </div>
    <div class="container pd-x-30 lh-2">
      <p class="breadcrumb">
        <router-link to="/">Home</router-link>/
        <router-link to="/support">Support</router-link>/
        <router-link to="/support/tools">Tools</router-link>/ Mass and Volume Calculator
      </p>
      <div>
        <p>
          You may choose to ship your package by volume instead of weight. This
          is beneficial because you can fit as much as you are able into the same box and pay a flat rate to
          have it shipped. With the Mass and Volume Calculator you can do it in a few simple steps.
        </p>
        <div class="full mt-2">
          <div class="half">
            <img
              class="sample"
              src="../../../assets/images/background/support/tools/boxes-dims.png"
              alt="Box Dimensions"
            />
          </div>
          <div class="half">
            <h3 class="text-red">Calculator</h3>
            <p>
              I am measuring in
              <select name="measure" id="measure" v-model="measure">
                <option value="cm">centimetres</option>
                <option value="in">inches</option>
              </select>
            </p>
            <div class="mt-1">
              <transition name="alert-in">
                <span
                  v-if="errors.has('length')"
                  class="validation-alert"
                >{{ errors.first('length') }}</span>
                <span
                  v-if="errors.has('width')"
                  class="validation-alert"
                >{{ errors.first('width') }}</span>
                <span
                  v-if="errors.has('height')"
                  class="validation-alert"
                >{{ errors.first('height') }}</span>
              </transition>
            </div>
            <form @submit.prevent="calculate" class="control-group">
              <div class="form-control">
                <label for="length">
                  Length
                  <span>*</span>
                </label>
                <input
                  type="number"
                  step="0.5"
                  placeholder="Enter length"
                  v-validate="{min:1, required: true}"
                  v-bind:onkeyup="calculate()"
                  min="1"
                  id="length"
                  name="length"
                  v-model="length"
                />
              </div>
              <div class="form-control">
                <label for="width">
                  Width
                  <span>*</span>
                </label>
                <input
                  type="number"
                  step="0.5"
                  placeholder="Enter width"
                  v-validate="{min:1, required: true}"
                  v-bind:onkeyup="calculate()"
                  min="1"
                  id="width"
                  name="width"
                  v-model="width"
                />
              </div>
              <div class="form-control">
                <label for="height">
                  Height
                  <span>*</span>
                </label>
                <input
                  type="number"
                  step="0.5"
                  placeholder="Enter height"
                  v-validate="{min:1, required: true}"
                  v-bind:onkeyup="calculate()"
                  min="1"
                  id="height"
                  name="height"
                  v-model="height"
                />
              </div>
            </form>
            <h2
              v-bind:class="{'old': (errors.has('length') || errors.has('width') ||
                                    errors.has('height'))}"
            >
              <small>Volume =</small>
              {{computedVolume}}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const centimetres = 5000;
// const inches = (Math.pow ((1 / 2.54), 3) * centimetres);
export default {
  name: "DIMWeightCalculator",
  data() {
    return {
      measure: "cm",
      length: 1,
      width: 1,
      height: 1,
      computedVolume: 0,
      kiloWeight: (0).toFixed(1),
      poundWeight: (0).toFixed(1)
    };
  },
  methods: {
    calculate() {
      const volume = Math.ceil(this.length * this.width * this.height);
      if (this.measure === "in") {
        this.computedVolume = `${volume} square inches`;
      } else {
        this.computedVolume = `${volume} square centimeters`;
      }
    }
  },
  metaInfo: {
    titleTemplate: "%s | Support | Tools | DIM Weight Calculator"
  }
};
</script>

<style scoped>
.old {
  color: #dddddd;
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
  font-family: "Montserrat", sans-serif;
}

select {
  color: #1a065a;
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
  font-size: 0.8em;
  margin-bottom: 1em;
}

.form-control label {
  font-size: 0.85em;
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
  padding: 0.5em;
  background: rgba(248, 242, 139, 0.6);
}

.form-control button {
  padding: 0.5em 1em;
  color: #eeeeee;
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

.service .mass-volume {
  background: url("../../../assets/images/background/support/tools/mass-volume.jpg")
    no-repeat fixed center;
  background-size: cover;
}
</style>