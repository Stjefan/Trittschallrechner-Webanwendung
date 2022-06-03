<template>
  <div>
    <div>Prognose-Ergebnis:</div>
    
    <p v-if="currentPrognose" style="font-size: xx-large;">L<sup>'</sup><sub>n, w, R</sub> = {{currentPrognose.lwr.toFixed(2)}}</p>
    <q-select :options="allPrognosen" v-model="selectedPrognose" label="Prognosen" option-label="erstellt"/>
    <div v-if="selectedPrognose">
    {{selectedPrognose.bodenaufbau.getAufbau()}}
    </div>
    <div v-if="selectedPrognose">
    {{selectedPrognose}}
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from 'stores/example-store';

export default {
  data() { return { 
    selectedPrognose: null
  }},
  // name: 'ComponentName',
  setup () {
    const store = useCounterStore();
    const { currentPrognose, allPrognosen } = storeToRefs(store);
    return {currentPrognose, allPrognosen}
  }
}
</script>
