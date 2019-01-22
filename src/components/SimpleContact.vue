<template>
  <div class="simple-contact">
    <h3 class="text-blue">Contact Us</h3>
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
  </div>
</template>

<script>
export default {
  name: "SimpleContact"
};
</script>

<style scoped>
.simple-contact {
  padding-top: 1em;
  font-size: 12px;
  color: #888888;
}

.simple-contact h3 {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.simple-contact ul {
  list-style: none;
}

.address h4 {
  text-transform: uppercase;
  margin-bottom: 1em;
}

.address h5 {
  margin-top: 0.5em;
}

.address a {
  color: inherit;
}
</style>
