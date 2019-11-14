<template>
  <div>
    <!-- HERO -->
    <section class="relative">
      <vue-particles color="#888D7E"></vue-particles>
      <div class="container">
        <div>
          <logo />
          <h1
            class="font-bold text-darkShade text-4xl lg:text-6xl text-center mb-6"
          >
            {{ siteTitle }}
          </h1>
          <h2 class="subtitle mb-4">
            {{ subTitle }}
          </h2>

          <button class="btn btn-primary">Testbutton</button>
        </div>
      </div>
    </section>

    <!-- OFFER -->
    <section class="bg-darkShade text-white py-6">
      <div class="p-6 mb-10 mx-auto max-w-5xl">
        <h2 class="chapter-title text-white">What can I offer you?</h2>
        <ul class="list-disc">
          <li>Develop your personal Website using the latest technologies</li>
          <li>Web Apps shaped to your needs</li>
          <li>Consulting about the needs of your individual projects</li>
        </ul>
      </div>
    </section>

    <section>
      <div class="p-6 py-12 mb-10 mx-auto max-w-5xl bg-white">
        <h2 class="chapter-title text-grey">Why me?</h2>

        <div class="lg:flex lg:justify-between mt-12">
          <div class="bg-white rounded p-6 shadow lg:w-2/3">
            <h3 class="font-bold text-3xl mb-6">Argument</h3>
            <p class="font-bold text-xl mb-4">
              Lorem ipsum dolor amet whatever
            </p>
            <p>
              Experience on lots of different projects with difficult
              requirements Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Architecto aspernatur at blanditiis consectetur culpa, cum
              dicta dolore dolorem ducimus esse incidunt laudantium perspiciatis
              quisquam soluta sunt vero voluptates. Blanditiis, consectetur.
            </p>
          </div>
          <div class="lg:w-1/3">
            <img src="https://via.placeholder.com/450" alt="" />
          </div>
        </div>

        <div class="lg:flex lg:justify-between mt-12 lg:flex-row-reverse">
          <div class="bg-white rounded p-6 shadow lg:w-2/3">
            <h3 class="font-bold text-3xl mb-6">Argument</h3>
            <p class="font-bold text-xl mb-4">
              Lorem ipsum dolor amet whatever
            </p>
            <p>
              Good understanding of what the market wants Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Architecto aspernatur at
              blanditiis consectetur culpa, cum dicta dolore dolorem ducimus
              esse incidunt laudantium perspiciatis quisquam soluta sunt vero
              voluptates. Blanditiis, consectetur.
            </p>
          </div>
          <div class="lg:w-1/3">
            <img src="https://via.placeholder.com/450" alt="" />
          </div>
        </div>

        <div class="lg:flex lg:justify-between mt-12">
          <div class="bg-white rounded p-6 shadow lg:w-2/3">
            <h3 class="font-bold text-3xl mb-6">Argument</h3>
            <p class="font-bold text-xl mb-4">
              Lorem ipsum dolor amet whatever
            </p>
            <p>
              Experience with different technologies Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Architecto aspernatur at blanditiis
              consectetur culpa, cum dicta dolore dolorem ducimus esse incidunt
              laudantium perspiciatis quisquam soluta sunt vero voluptates.
              Blanditiis, consectetur.
            </p>
          </div>
          <div class="lg:w-1/3">
            <img src="https://via.placeholder.com/450" alt="" />
          </div>
        </div>
      </div>
    </section>
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
