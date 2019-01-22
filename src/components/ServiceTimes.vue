<template>
    <div class="service-times">
        <h3 class="text-blue">Aries Service Times</h3>
        <ul>
            <li>Same Day (Delivery on the same day)</li>
            <li>Next Day (Delivery by the next business day)</li>
            <li>2nd Day (Delivery by the second business day)</li>
            <li>3 to 5 Days Charters</li>
        </ul>
    </div>
</template>

<script>
   export default {
      name: 'ServiceTimes'
   }
</script>

<style scoped>
    .service-times h3 {
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .service-times {
        font-size: .9em;
        padding-top: 1em;
        /*margin-top: -1em;*/
        margin-bottom: 0;
    }

    .service-times ul {
        list-style: none;
        padding-left: 0;
    }

    .service-times ul li {
        margin-bottom: .3em;
    }


</style>
