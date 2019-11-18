<template>
  <div>
    <h2 v-colored:background.font="'green'">{{ title }}</h2>
    <h2 v-colored:color.delay="'blue'">{{ title }}</h2>
    <h2 v-font>{{ title }}</h2>
  </div>
  <!--<div>-->
    <!--<h1>Parent: {{ carName }}</h1>-->
    <!--<app-counter :counter="counter"></app-counter>-->
    <!--<app-car :carName="carName"-->
             <!--:carYear="carYear"-->
             <!--:counter="counter"-->
             <!--:changeFunc="changeNameToAudi"-->
             <!--@changeName="carName = $event"-->
             <!--@counterUpdated="counter = $event"></app-car>-->
  <!--</div>-->
</template>

<script>
import Car from './components/Car.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'app',
  data () {
    return {
      // carName: 'Ford from parent',
      // carYear: 2018,
      // counter: 0
      title: 'Hello Vue'
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '50px';
      }
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'audi';
    }
  },
  components: {
    'app-car': Car,
    'app-counter': Counter,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
