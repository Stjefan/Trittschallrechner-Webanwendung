<template>
  <q-page>
    <div style="margin: 5px">
      <q-tabs v-model="tab" class="text-teal">
        <q-tab name="add" label="Eingabe" />
        <q-tab name="uebersicht" label="Prognose" />
        <q-tab name="details" label="Details" />
        <q-tab name="history" label="Bisherige Prognosen" />
      </q-tabs>
      <q-separator />

        <q-tab-panels v-model="tab">
          <q-tab-panel name="uebersicht">
            <PrognoseErgebnis />
          </q-tab-panel>
          <q-tab-panel name="add">
             <div class="row">
      <q-form @submit="foo" class="col-5" style="margin: 5px">
        <OberbelagSelection />
        <DaemmschichtSelection />
        <EstrichSelection />
        <ZwischenschichtSelection />
        <RohdeckeSelection />
        <EntkopplungSelection />
        <q-btn label="Prognose erstellen" type="submit" color="primary" />
        <q-btn label="Zurücksetzen" @click="bar" color="secondary" />
      </q-form>
      <BodenaufbauComponent class="col-5" style="margin: 5px" />
    </div>
          </q-tab-panel>

          <q-tab-panel name="details">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="history">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      
    </div>
  </q-page>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from 'stores/example-store';

import { Todo, Meta } from 'components/models';
import BodenaufbauComponent from 'components/BodenaufbauComponent.vue';
import OberbelagSelection from 'components/OberbelagSelection.vue';
import DaemmschichtSelection from 'components/DaemmschichtSelection.vue';
import EstrichSelection from 'components/EstrichSelection.vue';
import RohdeckeSelection from 'components/RohdeckeSelection.vue';
import EntkopplungSelection from 'components/EntkopplungSelection.vue';
import ZwischenschichtSelection from 'components/ZwischenschichtSelection.vue';
import PrognoseErgebnis from 'components/PrognoseErgebnis.vue';
import { defineComponent, ref } from 'vue';
import // Daemmschicht,
// Entkopplungsschicht,
// EstrichNoppenplatte,
'../components/models';

export default defineComponent({
  name: 'IndexPage',
  components: {
    BodenaufbauComponent,
    RohdeckeSelection,
    OberbelagSelection,
    DaemmschichtSelection,
    EstrichSelection,
    EntkopplungSelection,
    ZwischenschichtSelection,
    PrognoseErgebnis,
  },
  data() {
    return {
      tab: 'uebersicht',
      vorhandenSonstigeZwischenschicht: true,
      dickeOptions: [8.0, 20],
      dicke: null,
      rohdecke: null,
      entkopplung: null,
      daemmschichtA: null,
      daemmschichtB: null,
      daemmschichtC: null,
      // oberbelag: null,
      estrich: null,
    };
  },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
        name: 'Bodenbelag',
        vorhanden: true,
      },
      {
        id: 2,
        content: 'ct2',
        name: 'Zwischenschicht',
        vorhanden: true,
      },
      {
        id: 3,
        content: 'ct3',
        name: 'B3',
        vorhanden: true,
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    const store = useCounterStore();
    const { oberbelag } = storeToRefs(store);
    return {
      todos,
      meta,

      // optionsDaemmschichtA,
      // optionsDaemmschichtB,
      // optionsDaemmschichtC,
      store,
      oberbelag,
    };
  },
  methods: {
    foo() {
      console.log('foo');
      this.store.prognostizieren();
      console.log('???');
    },
    bar() {
      this.store.resetBodenaufbau();
    },
  },
  mounted: function () {
    this.foo();
  },
});
</script>
