<template>
  <footer class="border-t border-t-2 bg-darkShade text-white mt-10 p-6">
    <div class="w-full lg:flex lg:justify-between">
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
        &copy; {{ dateYear }} Rafael Seifert
      </div>
      <a href="https://icons8.com" class="hidden"></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  computed: {
    dateYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped></style>
