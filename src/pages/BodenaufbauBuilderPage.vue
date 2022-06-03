<template>
  <q-page style="background-color: cyan">
    <div>
      <div style="background-color: red; width: 50%">
        <div>1.Spalte</div>
        <q-btn label="foo" @click="foo" style="float: right; height: 200px; width: 200px"/>
        <div v-for="n in 20" :key="n">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
        </div>
      </div>
      <q-form @submit="onSubmit" @reset="onReset" style="background-color: green; float: right;">
        <div class="row" style="background-color: grey">
          <div>??????</div>
          <div style="background-color: coral; vertical-align: center">
            !!!!
          </div>
          <div style="font-size: xx-large">blub</div>
          <q-input
            v-if="mySelection"
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <q-select
          v-model="mySelection"
          :options="myOptions"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
    <div>
      <PrognoseErgebnis />
    </div>
  </q-page>
</template>

<script>
import PrognoseErgebnis from 'components/PrognoseErgebnis.vue';

import { useQuasar } from 'quasar';
import { ref } from 'vue';

import { useCounterStore } from 'stores/example-store';

export default {
  components: {
    PrognoseErgebnis,
  },
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);
    const myOptions = ref(['A', 'B']);
    const mySelection = ref(null);
    const store = useCounterStore();
    store.randomInitial();
    return {
      store,
      name,
      age,
      accept,
      myOptions,
      mySelection,
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
      foo() {
        this.store.randomInitial();
      },
    };
  },
};
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid green;
}
</style>