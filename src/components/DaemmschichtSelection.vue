<template>
  <div class="q-pa-md" style="border: 1px solid black;">
    <p style="font-weight: bold">Dämmschicht:</p>
    <div class="row">
    <q-select label="Anzahl Dämmschichten" :options="numberDaemmschichten" v-model="selectedNumberDaemmschichten" class="col-3"/>
    </div>
    <p style="font-weight: bold">Dämmschicht A:</p>
    <div class="row" >
      <q-select
        label="Dämmschicht"
        :options="optionsDaemmschichtA"
        v-model="daemmschichtA"
        option-label="bezeichnung"
        :clearable="true"
        class="col-3"
      />
      <SonstigeRohdecke
        v-if="daemmschichtA"
        label1="Dicke [mm]"
        label2="Dynamische Steifigkeit [MN/m³]"
        class="col-6"
      />
    </div>

    <div v-if="selectedNumberDaemmschichten >= 2">
    <p style="font-weight: bold">Dämmschicht B:</p>
    <div class="row">
      <q-select
        label="Dämmschicht"
        :options="optionsDaemmschichtB"
        v-model="daemmschichtB"
        option-label="bezeichnung"
        :clearable="true"
        lazy-rules
        :rules="myRules"
      />
      <SonstigeRohdecke
        v-if="daemmschichtB"
        label1="Dicke [mm]"
        label2="Dynamische Steifigkeit [MN/m³]"
        class="col-6"
      />
    </div>
    </div>
    <div v-if="selectedNumberDaemmschichten >= 3">
    <p>Dämmschicht C:</p>
    <div class="row">
      <q-select
        label="Dämmschicht"
        :options="optionsDaemmschichtC"
        v-model="daemmschichtC"
        option-label="bezeichnung"
        :clearable="true"
        lazy-rules
        :rules="myRulesC"
      />
      <SonstigeRohdecke
        v-if="daemmschichtC"
        label1="Dicke [mm]"
        label2="Dynamische Steifigkeit [MN/m³]"
        class="col-6"
      />
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import SonstigeRohdecke from 'components/SonstigeRohdecke.vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from 'stores/example-store';

import { Daemmschicht } from '../components/models';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  // name: 'ComponentName',
  components: { SonstigeRohdecke },
  setup() {
    const optionsDaemmschichtA = ref<Daemmschicht[]>(
      Daemmschicht.createOptions()
    );
    const optionsDaemmschichtB = ref<Daemmschicht[]>(
      Daemmschicht.createOptions()
    );
    const optionsDaemmschichtC = ref<Daemmschicht[]>(
      Daemmschicht.createOptions()
    );
    const store = useCounterStore();
    const { daemmschichtA, daemmschichtB, daemmschichtC} = storeToRefs(store);

    return { optionsDaemmschichtA, optionsDaemmschichtB, optionsDaemmschichtC, daemmschichtA, daemmschichtB, daemmschichtC };
  },
  methods: {
    foo() {
      console.log('foo');
    }
  },
  data() {
    return {
      numberDaemmschichten: [1, 2, 3],
      selectedNumberDaemmschichten: 1,
      vorhandenDaemmschichtA: true,
      vorhandenDaemmschichtB: false,
      vorhandenDaemmschichtC: false,
      myRules: [(val: string) => {
        // console.log('myRules', this.vorhandenDaemmschichtB);
        if (this.vorhandenDaemmschichtB) {
          return (val && val.length > 0) || 'Please type something'

        }
        // return 'Fuck off'
      }],
      myRulesC: [(val: string) => {
        if (this.vorhandenDaemmschichtC) {
          return (val && val.length > 0) || 'Please type something'

        }
        // return 'Fuck off'
      }],
    };
  },
  mounted: function() {
    // this.foo()
  }
});
</script>
