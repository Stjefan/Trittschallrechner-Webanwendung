<template>
  <div class="q-pa-md" style="border: 1px solid black;">
    <p style="font-weight: bold">Entkopplungsschicht:</p>
    <div class="row">
    <q-select
      label="Entkopplung"
      :options="optionsEntkopplung"
      v-model="entkopplung"
      option-label="bezeichnung"
      :clearable="true"
      rules-lazy
        :rules="[val => (val != null) || 'Please type something']"
        class="col-3"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Entkopplungsschicht } from './models';

import { storeToRefs } from 'pinia';
import { useCounterStore } from 'stores/example-store';
export default {
  // name: 'ComponentName',
  setup() {
    const optionsEntkopplung = ref<Entkopplungsschicht[]>(
      Entkopplungsschicht.createOptions()
    );
    const store = useCounterStore();
    const { entkopplung } = storeToRefs(store);
    return { optionsEntkopplung, entkopplung };
  },
  data() {
    return {
    };
  },
};
</script>
