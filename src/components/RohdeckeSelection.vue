<template>
  <div class="q-pa-md" style="border: 1px solid black;">
    <p style="font-weight: bold">Rohdecke:</p>
    <div class="row">
      <q-select
        label="Rohdecke"
        :options="optionsRohdecke"
        v-model="rohdecke"
        option-label="bezeichnung"
        rules-lazy
        :rules="[(val) => val != null || 'Please type something']"
        class="col-3"
      />
      <div v-if="rohdecke != null">
        <div v-if="rohdecke.typ == '1N'">
          <q-input type="number" label="Dicke [mm]" v-model="rohdecke.dicke" />
        </div>
        <div v-else-if="rohdecke.typ == '2N'">
          <div class="row">
          <q-input type="number" label="Dicke [mm]" v-model="rohdecke.dicke" />
          <q-input type="number" label="Flächenbezogene Masse [kg/mm²]" v-model="rohdecke.flaechenbezogeneMasse" />
          </div>
        </div>
        <div v-else-if="rohdecke.typ == 'W'">Keine Berechnung möglich</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { ref } from 'vue';

import { storeToRefs } from 'pinia';
import { useCounterStore } from 'stores/example-store';

import {
  // Rohdecke,
} from '../components/models';
export default {
  // name: 'ComponentName',
  setup() {
    const store = useCounterStore();
    const { rohdecke, optionsRohdecke } = storeToRefs(store);
    return { optionsRohdecke, rohdecke };
  },
  data() {
    return {
      // rohdecke: null,
    };
  },
};
</script>
