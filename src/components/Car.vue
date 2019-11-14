<template>
  <div class="car">
    <h3>Name: {{ carName }} </h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeNames">Change name</button>
    <button @click="changeFunc()">Change from parent</button>
    <button @click="updateCounter">Update counter</button>
  </div>
</template>

<script>
  export default {
    props: ['carName', 'carYear', 'changeFunc', 'counter'],
    methods: {
      changeNames() {
        this.carName = 'new name!';
        this.$emit('changeName', this.carName);
      },
      updateCounter() {
        this.$emit('counterUpdated', this.counter + 1);
      }
    }
  }
</script>

<style>
  .car {
    border: 1px solid black;
  }
</style>
