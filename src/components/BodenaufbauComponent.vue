<template>
  <div>
    Schematischer Aufbau:
    <img
      :src="rohdecke.imgSrc"
      v-if="rohdecke"
      class="row"
      style="max-height: 150px"
    />
    <img
      :src="estrich.imgSrc"
      v-if="estrich"
      class="row"
      style="max-height: 150px"
    />
    <img
      :src="daemmschichtA.imgSrc"
      v-if="daemmschichtA"
      class="row"
      style="max-height: 150px"
    />
    <img
      :src="daemmschichtB.imgSrc"
      v-if="daemmschichtB"
      class="row"
      style="max-height: 150px"
    />
    <img
      :src="daemmschichtC.imgSrc"
      v-if="daemmschichtC"
      class="row"
      style="max-height: 150px"
    />
    <img
      :src="oberbelag.imgSrc"
      v-if="oberbelag"
      class="row"
      style="max-height: 150px"
    />
    <img
      :src="entkopplung.imgSrc"
      v-if="entkopplung"
      class="row"
      style="max-height: 150px"
    />
    <img
      :src="zwischenschicht.imgSrc"
      v-if="zwischenschicht.vorhandenSonstigeZwischenschicht"
      class="row"
      style="max-height: 150px"
    />
  </div>
</template>

<script>
import { useCounterStore } from 'stores/example-store';
import { computed } from 'vue';
export default {
  // name: 'ComponentName',
  setup() {
    const store = useCounterStore();
    return {
      oberbelag: computed(() => store.oberbelag),
      daemmschichtA: computed(() => store.daemmschichtA),
      daemmschichtB: computed(() => store.daemmschichtB),
      daemmschichtC: computed(() => store.daemmschichtC),
      zwischenschicht: computed(() => store.zwischenschicht),
      estrich: computed(() => store.estrich),
      rohdecke: computed(() => store.rohdecke),
      entkopplung: computed(() => store.entkopplung),
    };
  },
  data() {
    return {
      srcImg1: 'longImage1.jpg',
      srcImg2: 'longImage2.jpg',
      srcImg3: 'longImage3.jpg',
      img1: true,
      img2: true,
      img3: true,
    };
  },
};
</script>
<style scoped>
</style>