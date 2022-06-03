<template>
  <div class="q-pa-md" style="border: 1px solid black;">
    <p style="font-weight: bold">Estrich:</p>
    <div class="row">
      <q-select
        label="Estrich"
        :options="optionsEstrich"
        v-model="estrich"
        option-label="bezeichnung"
        :clearable="true"
        class="col-3"
        rules-lazy
        :rules="[val => (val != null) || 'Please type something']"
      />
      <div v-if="estrich != null">
        <div v-if="estrich.typ == '1S'">
          <q-select
            label="Dicke [mm]"
            :options="estrich.dickeOptions"
            v-model="estrich.dicke"
            style="width: 200px"
          />
        </div>
        <div v-else-if="estrich.typ == '2N'">
          <SonstigeRohdecke
            label1="Dicke [mm]"
            label2="Dynamische Steifigkeit"
            class="row"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from 'stores/example-store';

import SonstigeRohdecke from 'components/SonstigeRohdecke.vue';
// import { ref } from 'vue';

export default {
  // name: 'ComponentName',
  components: { SonstigeRohdecke },
  setup() {
      const store = useCounterStore();
    const { estrich, optionsEstrich } = storeToRefs(store);
    return { optionsEstrich, estrich, store };
  },
  data() {
    return {
    };
  },
};
</script>
