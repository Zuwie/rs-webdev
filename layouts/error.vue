<template>
  <div class="error-page p-12">
    <img src="~assets/404.png" alt="A man looking out for something" />
    <h1 class="text-3xl">Oops, something went wrong!</h1>
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>
.error-page {
  text-align: center;
}
.error-page a {
  text-decoration: none;
  color: red;
}
.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
