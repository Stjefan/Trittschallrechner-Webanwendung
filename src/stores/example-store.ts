import { defineStore } from 'pinia';
import { Bodenaufbau, Daemmschicht, Entkopplungsschicht, EstrichNoppenplatte, Oberbelag, Rohdecke, TrittschallPrognose, Zwischenschicht } from 'src/components/models';
import * as _ from 'lodash'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    oberbelag: null,
    allPrognosen: [] as TrittschallPrognose[],
    rohdecke: null,
    entkopplung: null,
    estrich: null as unknown as EstrichNoppenplatte | null,
    zwischenschicht: new Zwischenschicht(),
    daemmschichtA: null,
    daemmschichtB: null,
    daemmschichtC: null,
    currentPrognose: null as unknown as TrittschallPrognose,
    optionsRohdecke: [] as Rohdecke[],
    optionsEstrich: [] as EstrichNoppenplatte[],
    optionsDaemmschichtA: [] as Daemmschicht[],
    optionsDaemmschichtB: [] as Daemmschicht[],
    optionsDaemmschichtC: [] as Daemmschicht[],
    optionsOberbelag: [] as Oberbelag[],
    optionsEntkopplung: [] as Entkopplungsschicht[],

  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    init() {
      this.optionsRohdecke = Rohdecke.createOptions()
      this.optionsEstrich = EstrichNoppenplatte.createOptions()
      this.optionsDaemmschichtA = Daemmschicht.createOptions()
      this.optionsDaemmschichtB = Daemmschicht.createOptions()
      this.optionsDaemmschichtC = Daemmschicht.createOptions()
      this.optionsOberbelag = Oberbelag.createOptions()
      this.optionsEntkopplung = Entkopplungsschicht.createOptions()

    },
    randomInitial() {
      this.init();
      this.currentPrognose = new TrittschallPrognose()
      const b = new Bodenaufbau();
      if (false) {
        b.entkopplungsschicht = this.entkopplung
        b.estrichNoppenplatte = this.estrich
        b.oberbelag = this.oberbelag
        b.rohdecke = this.rohdecke
      } else {
        b.entkopplungsschicht = _.cloneDeep(this.entkopplung)
      b.estrichNoppenplatte = _.cloneDeep(this.estrich)
      b.oberbelag = _.cloneDeep(this.oberbelag)
      b.rohdecke = _.cloneDeep(this.rohdecke)
      }
      
      this.currentPrognose.bodenaufbau = b;

      this.currentPrognose.lwr = Math.random()*100
      this.allPrognosen.push(this.currentPrognose)

    },
    prognostizieren() {
      console.log(this.oberbelag)
      this.randomInitial()
      if (this.oberbelag !== null) {
        // this.currentPrognose = new TrittschallPrognose()
       
        

        
      }

    },
    resetBodenaufbau() {
      this.oberbelag = null;
      this.rohdecke = null;
      this.entkopplung = null;
      this.estrich = null;
      this.daemmschichtA = null;
      this.daemmschichtB = null;
      this.daemmschichtC = null;
      this.zwischenschicht = new Zwischenschicht()
    }
  },
});
