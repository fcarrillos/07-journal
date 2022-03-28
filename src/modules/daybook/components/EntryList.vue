<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" name="" id="" placeholder="Buscar entrada">
    </div>

    <div class="entry-scrollarea">
      <Entry
        v-for="item in 100"
        :key="item"
      />

    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
    }
}
</script>

<style lang="scss" scoped>

  .entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc( 100vh - 56px ); /* calcula del 100% del vh (view hight) le resta 56px */
  }

  .entry-scrollarea {
    height: calc( 100vh - 110px );
    overflow: scroll; /* si el contenido es más grande que 100% del wiew hight menos 120px entonces permite hacer scroll */
  }

</style>