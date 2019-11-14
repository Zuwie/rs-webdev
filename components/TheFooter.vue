<template>
  <footer class="border-t border-t-2 border-lightShade mt-10 p-6">
    <div class="w-full bg-white lg:flex lg:justify-between">
      <ul class="lg:flex text-sm">
        <li>
          <a class="block lg:inline-block mr-4 text-center" href="#Contact"
            >Impressum</a
          >
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="block lg:inline-block mr-4 mt-4 lg:mt-0 text-center"
            >Contact</nuxt-link
          >
        </li>
      </ul>
      <div
        class="copyright block lg:inline-block mr-4 mt-4 lg:mt-0 text-sm text-center"
      >
        &copy; Copyright 2019, Rafael Seifert
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped></style>
