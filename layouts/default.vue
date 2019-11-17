<template>
  <div>
    <TheHeader />
    <div class="pt-20 min-h-screen">
      <div class="px-6 mx-auto max-w-5xl">
        <nuxt />
      </div>
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

<style>
html {
  font-family: 'Lato', -apple-system, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #202227;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  @apply text-primary;
}

.container {
  height: calc(100vh - 80px);
  @apply relative flex justify-center items-center text-center mx-auto;
}

.site-title {
  @apply font-bold text-4xl py-16;
}

.site-title::before {
  content: '';
  display: block;
  width: 66px;
  height: 4px;
  background: #09b3af;
  background: linear-gradient(to right, #05dec1 0%, #09b3af 100%);
  border-radius: 2px;
}

.chapter-title {
  @apply font-bold text-3xl mb-8;
}

.chapter-title::before {
  content: '';
  display: block;
  width: 66px;
  height: 4px;
  background: #09b3af;
  background: linear-gradient(to right, #05dec1 0%, #09b3af 100%);
  border-radius: 2px;
}

@media screen and (min-width: 1024px) {
  .chapter-title {
    @apply text-4xl;
  }
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
