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
      <ToggleButton v-on:toggleMenu="toggleMenu"></ToggleButton>
    </div>
    <div
      :class="menuOpen ? 'menu-is-open' : 'menu-is-closed'"
      class="main-menu w-full flex flex-col lg:flex-row flex-grow items-center justify-center lg:w-auto lg:h-auto overflow-hidden lg:overflow-visible"
    >
      <div class="w-full lg:w-auto lg:flex-grow">
        <nuxt-link to="/about" class="main-menu-link">About</nuxt-link>
        <nuxt-link to="/portfolio" class="main-menu-link">Portfolio</nuxt-link>
        <nuxt-link to="/skills" class="main-menu-link">Skills</nuxt-link>
      </div>
      <div>
        <nuxt-link to="/contact" class="main-menu-link lg:mr-0"
          >Contact</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import gsap from 'gsap'
import ToggleButton from './ToggleButton'

export default {
  name: 'Header',

  components: {
    ToggleButton
  },

  data() {
    return {
      menuOpen: false,
      tl: gsap.timeline({ paused: true, reversed: true })
    }
  },

  mounted() {
    this.tl.fromTo(
      '.main-menu-link',
      { x: -50, autoAlpha: 0, stagger: 0.2 },
      { x: 0, autoAlpha: 1, stagger: 0.2 }
    )
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen

      this.tl.restart()
    }
  }
}
</script>

<style scoped>
.main-menu {
  height: calc(100vh - 80px);
}

@media screen and (min-width: 1024px) {
  .main-menu {
    height: auto;
  }
}

.main-menu-link {
  @apply block text-center mt-4 py-6 text-2xl;
}

.main-menu-link:hover {
  @apply text-primary;
}

@media screen and (min-width: 1024px) {
  .main-menu-link {
    @apply inline-block text-left mt-0 mr-4 text-base py-0;
  }
}

.nuxt-link-exact-active {
  @apply text-primary;
}

.menu-is-closed {
  height: 0;
}

@media screen and (min-width: 1024px) {
  .menu-is-closed {
    display: flex;
  }
}
</style>
