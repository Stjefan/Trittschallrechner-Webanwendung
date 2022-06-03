<template>
  <div class="q-pa-md" style="border: 1px solid black;">
    <div style="font-weight: bold">Oberbelag</div>
    <div class="row">
      <q-select
        label="Oberbelag"
        :options="optionsOberbelag"
        v-model="store.oberbelag"
        class="col-3"
        option-label="bezeichnung"
        :clearable="true"
        rules-lazy
        :rules="myRules"
      />
      <div v-if="oberbelag != null" class="col-6">
        <div v-if="oberbelag.typ == '2S'" class="row">
          <q-select
            label="Dicke Fliesen [mm]"
            :options="oberbelag.dickeFlieseOptions"
            v-model="oberbelag.dickeFliese"
            class="col-6"
          />
          <q-select
            label="Dicke Kleber [mm]"
            :options="oberbelag.dickeKleberOptions"
            v-model="oberbelag.dickeKleber"
            class="col-6"
          />
        </div>
        <div v-else-if="oberbelag.typ == '1S'">
          <q-select
            label="Befestigungsart"
            :options="oberbelag.befestigungOptions"
            v-model="oberbelag.befestigung"
            style="width: 200px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from 'stores/example-store';
// import { ref } from 'vue';

import { Oberbelag } from '../components/models';

export default {
  // name: 'ComponentName',
  setup() {
    const store = useCounterStore();
    const { oberbelag, optionsOberbelag } = storeToRefs(store);
    return { store, oberbelag, optionsOberbelag };
  },
  data() {
    return { 
      myRules: [(val: Oberbelag) => {
        return (val != null) || 'Please type something';
      }
      ]
    }
  }
};
</script>
