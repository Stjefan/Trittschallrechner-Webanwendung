<template>
  <q-page style="">
    <div style="">We were so young</div>
    <div>Dont waste your whole life trying</div>
    <div>To get back what was taken away</div>
    <div class="row" style="">
      <q-btn label="baz" @click="myModelArray.push({ a: 'A' })" />
      <q-select
        label="Eigenschaft"
        v-for="el in myModelArray"
        :key="el.a"
        :options="options"
        v-model="el.a"
        style="min-width: 150px"
      />
    </div>
    <div style="">
      <p>Falling apart...</p>
      <div class="row">
      <q-input v-for="el in shownFields" :key="el.label" :label="el.label" v-model="el.value"/>
      </div>
      <q-btn label="Paste"/>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      myModelArray: [{ a: 'A' }, { a: 'B' }],
      options: ['A', 'B'],
      shownFields: [
        {
          label: '20 Hz',
          value: 10,
        },
        { label: '25 Hz',
        value: 10, },
        { label: '31.5 Hz',
        value: 10, },
        { label: '40 Hz',
        value: 10, },
        { label: '50 Hz',
        value: 10, },
        { label: '63 Hz',
        value: 10, },
        { label: '80 Hz',
        value: 10, },
        { label: '100 Hz',
        value: 10, },
        { label: '125 Hz',
        value: 10, },
        { label: '160 Hz',
        value: 10, },
        { label: '200 Hz',value: 10, },
      ],
    };
  },
};
</script>
