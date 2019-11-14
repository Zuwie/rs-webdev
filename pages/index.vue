<template>
  <div class="pt-20">
    <vue-particles color="#888D7E"></vue-particles>
    <div class="container">
      <!-- HERO -->
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

    <!-- OFFER -->
    <div class="bg-primary text-white">
      <div class="p-6 mb-10 mx-auto max-w-5xl">
        <h2 class="chapter-title text-white">What can I offer you?</h2>
        <ul>
          <li>Develop your personal Website using the latest technologies</li>
          <li>Web Apps shaped to your needs</li>
          <li>Consulting about the needs of your individual projects</li>
        </ul>
      </div>
    </div>

    <div class="p-6 mb-10 mx-auto max-w-5xl">
      <h2 class="chapter-title text-grey">Why me?</h2>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'home',
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
#particles-js {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
