<template>
  <div>
    <TheHeader />
    <div class="pt-20">
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/Navigation/TheHeader'
import TheFooter from '../components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style></style>
