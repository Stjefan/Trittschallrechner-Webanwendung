
<template>
  <div class="q-pa-md" style="border: 1px solid black">
    <p style="font-weight: bold">Zwischenschicht:</p>
    <div class="row">
      <q-toggle
        label="Vorhanden"
        v-model="zwischenschicht.vorhandenSonstigeZwischenschicht"
      />
      <q-input
        label="Dicke [mm]"
        v-model.number="zwischenschicht.dickeSonstiges"
        v-if="zwischenschicht.vorhandenSonstigeZwischenschicht"
      />
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useCounterStore } from 'stores/example-store';
export default {
  // name: 'ComponentName',
  setup() {
    const store = useCounterStore();
    const { zwischenschicht } = storeToRefs(store);
    return { zwischenschicht };
  },
  data() {
    return {
      vorhandenSonstigeZwischenschicht: false,
    };
  },
};
</script>
