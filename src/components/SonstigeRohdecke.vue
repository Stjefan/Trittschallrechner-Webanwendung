<template>
  <div class="row">
    <q-input
      type="number"
      :label="label1"
      v-model.number="dicke"
      :rules="myRules"
    />
    <q-input
      type="number"
      :label="label2"
      v-model.number="flaechenbezogeneMasse"
      :rules="myRules"
    />
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    label1: {
      type: String,
      required: true,
    },
    label2: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
  data() {
    return {
      dicke: 5,
      flaechenbezogeneMasse: 10,
      myRules: [
        (arg) => {
          if (arg <= 0) return 'There is something wrong';
          else return true;
        },
      ],
    };
  },
};
</script>
