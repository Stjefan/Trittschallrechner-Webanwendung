<template>
  <div>
    <p>{{ title }}</p>
    <q-select :options="optionsDitra" v-model="selectedDitra" hint="Ditra" :clearable="true" />
    <q-input type="numeric" label="Dicke [mm]" />
  </div>
  <div class="row">
  <q-btn label="Prognose erstellen"/>
  <q-btn label="Zurücksetzen" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo, Meta } from './models';

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: 'ExampleComponent',
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    return {
      ...useClickCount(),
      ...useDisplayTodo(toRef(props, 'todos')),
    };
  },
  data() {
    return {
      optionsDitra: [
        'DitraDefault',
        'DitraHeatDefault',
        'DitraHeatDuo',
        'DitraSound',
      ],
      selectedDitra: null,
      title: 'Entkopplungsschicht',
    };
  },
});
</script>
