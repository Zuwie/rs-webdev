<template>
  <div>
    <div class="container">
      <div>
        <logo />
        <h1 class="text-6xl">
          rs-website
        </h1>
        <h2 class="subtitle">
          Personal website of Rafael Seifert
        </h2>

        <button class="btn btn-primary">Testbutton</button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.btn {
  @apply font-bold py-2 px-4 rounded bg-darkShade text-white;
}

.btn:hover {
  @apply bg-lightShade;
}

.btn-primary {
  @apply text-white bg-primary;
}

.btn-primary:hover {
  @apply bg-lightShade;
}
</style>
