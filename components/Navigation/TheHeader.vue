<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-white p-6 border-b border-b-2 border-lightShade fixed top-0 left-0 right-0 z-50"
  >
    <nuxt-link to="/" class="block flex items-center flex-shrink-0 mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      <span class="font-semibold text-xl tracking-tight">Rafael Seifert</span>
    </nuxt-link>
    <div class="block lg:hidden">
      <button
        @click="toggleMenu"
        class="flex items-center px-3 py-2 border rounded hover:text-primary hover:border-primary"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="menuOpen ? 'menu-is-open' : 'menu-is-closed'"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <nuxt-link
          to="/about"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-4"
          >About</nuxt-link
        >
        <nuxt-link
          to="/portfolio"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-4"
          >Portfolio</nuxt-link
        >
        <nuxt-link
          to="/skills"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-4"
          >Skills</nuxt-link
        >
      </div>
      <div>
        <nuxt-link
          to="/contact"
          class="inline-block text-sm py-2 leading-none border rounded border-white hover:text-primary mt-4 lg:mt-0"
          >Contact</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      menuOpen: false
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-primary;
}

.menu-is-closed {
  display: none;
}

@media screen and (min-width: 1024px) {
  .menu-is-closed {
    display: flex;
  }
}
</style>
