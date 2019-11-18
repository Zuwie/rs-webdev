<template>
  <button
    @click="toggleMenu"
    class="flex flex-col items-center hover:text-primary hover:border-primary"
  >
    <span class="sr-only">Menu</span>
    <span
      class="menu-toggle-bar menu-toggle-bar--top block w-8 h-1 mb-1 bg-darkShade rounded"
    ></span>
    <span
      class="menu-toggle-bar menu-toggle-bar--mid block w-8 h-1 mb-1 bg-darkShade rounded"
    ></span>
    <span
      class="menu-toggle-bar menu-toggle-bar--bot block w-8 h-1 mb-1 bg-darkShade rounded"
    ></span>
  </button>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'ToggleButton',

  data() {
    return {
      tl: gsap.timeline({ paused: true, reversed: true })
    }
  },

  mounted() {
    this.tl
      .to(
        ' .menu-toggle-bar--top',
        0.2,
        { y: '-9px', transformOrigin: '50% 50%' },
        'burg'
      )
      .to(
        ' .menu-toggle-bar--bot',
        0.2,
        { y: '9px', transformOrigin: '50% 50%' },
        'burg'
      )
      .to(
        ' .menu-toggle-bar--mid',
        0.2,
        { scale: 0.1, transformOrigin: '50% 50%' },
        'burg'
      )
      .add('rotate')
      .to(' .menu-toggle-bar--top', 0.2, { y: '8' }, 'rotate')
      .to(' .menu-toggle-bar--bot', 0.2, { y: '-8' }, 'rotate')
      .to(
        ' .menu-toggle-bar--top',
        0.2,
        { rotationZ: 45, transformOrigin: '50% 50%' },
        'rotate'
      )
      .to(
        ' .menu-toggle-bar--bot',
        0.2,
        { rotationZ: -45, transformOrigin: '50% 50%' },
        'rotate'
      )
  },

  methods: {
    toggleMenu() {
      this.tl.reversed() ? this.tl.restart() : this.tl.reverse()

      this.$emit('toggleMenu')
    }
  }
}
</script>

<style scoped></style>
