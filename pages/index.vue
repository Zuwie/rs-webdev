<template>
  <div class="pt-20">
    <vue-particles color="#998079"></vue-particles>
    <div class="container">
      <div>
        <logo />
        <h1
          class="font-bold text-primary text-4xl lg:text-6xl text-center mb-6"
        >
          {{ siteTitle }}
        </h1>
        <h2 class="subtitle mb-4">
          {{ subTitle }}
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
  },
  data() {
    return {
      siteTitle: 'RS - Webdeveloper',
      subTitle: 'Personal website of Rafael Seifert'
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  @apply text-primary;
}

.container {
  @apply min-h-screen relative flex justify-center items-center text-center mx-auto;
}

#particles-js {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.site-title {
  @apply font-bold text-primary text-4xl text-center py-16;
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
