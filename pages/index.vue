<template>
  <div>
    <!-- HERO -->
    <section class="relative">
      <vue-particles color="#7B7990"></vue-particles>
      <div class="container">
        <div>
          <logo />
          <h1
            class="font-bold text-darkShade text-4xl md:text-6xl text-center mb-6"
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
    <section class="bg-darkShade text-lightShade py-6">
      <div class="p-6 mb-10 mx-auto max-w-5xl">
        <h2 class="chapter-title text-lightShadee">What can I offer you?</h2>
        <ul class="dashed-list">
          <li class="mb-2">
            Develop your personal Website using the latest technologies
          </li>
          <li class="mb-2">Web Apps shaped to your needs</li>
          <li class="mb-2">
            Consulting about the needs of your individual projects
          </li>
          <li class="mb-2">
            Optimize your site to get higher ranked at Google's Search-Engine
          </li>
        </ul>
      </div>
    </section>

    <section>
      <div class="p-6 py-12 mb-10 mx-auto max-w-5xl">
        <h2 class="chapter-title">Why me?</h2>

        <div class="md:flex md:flex-row-reverse md:justify-between mt-12">
          <div class="md:w-2/5">
            <img
              class="mb-2 md:mb-0"
              :srcset="require('~/assets/entry.png').srcSet"
              alt="A person entering a portal"
            />
          </div>
          <div class="md:w-3/5">
            <div class="rounded p-6 shadow md:mr-4">
              <h3 class="font-bold text-2xl mb-6">Argument</h3>
              <p class="font-bold text-xl mb-4">
                Lorem ipsum dolor amet whatever
              </p>
              <p>
                Experience on lots of different projects with difficult
                requirements Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Architecto aspernatur at blanditiis consectetur culpa, cum
                dicta dolore dolorem ducimus esse incidunt laudantium
                perspiciatis quisquam soluta sunt vero voluptates. Blanditiis,
                consectetur.
              </p>
            </div>
          </div>
        </div>

        <div class="md:flex md:justify-between mt-12">
          <div class="md:w-2/5">
            <img
              class="mb-2 md:mb-0"
              :srcset="require('~/assets/searching.png').srcSet"
              alt="A person searching"
            />
          </div>
          <div class="md:w-3/5">
            <div class="rounded p-6 shadow md:ml-4">
              <h3 class="font-bold text-2xl mb-6">Argument</h3>
              <p class="font-bold text-xl mb-4">
                I will build you robust, scalable web-apps or websites so you
                won't have to worry about the future.
              </p>
              <p>
                Good understanding of what the market wants Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Architecto aspernatur at
                blanditiis consectetur culpa, cum dicta dolore dolorem ducimus
                esse incidunt laudantium perspiciatis quisquam soluta sunt vero
                voluptates. Blanditiis, consectetur.
              </p>
            </div>
          </div>
        </div>

        <div class="md:flex md:flex-row-reverse md:justify-between mt-12">
          <div class="md:w-2/5">
            <img
              class="mb-2 md:mb-0"
              :srcset="require('~/assets/order-completed.png').srcSet"
              alt="Order completed"
            />
          </div>
          <div class="md:w-3/5">
            <div class="rounded p-6 shadow md:mr-4">
              <h3 class="font-bold text-2xl mb-6">Argument</h3>
              <p class="font-bold text-xl mb-4">
                Lorem ipsum dolor amet whatever
              </p>
              <p>
                Experience with different technologies Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Architecto aspernatur at
                blanditiis consectetur culpa, cum dicta dolore dolorem ducimus
                esse incidunt laudantium perspiciatis quisquam soluta sunt vero
                voluptates. Blanditiis, consectetur.
              </p>
            </div>
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
