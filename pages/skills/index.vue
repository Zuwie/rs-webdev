<template>
  <div class="pt-20">
    <div class="px-6 mx-auto max-w-5xl">
      <h1 class="site-title">{{ siteTitle }}</h1>
      <ul>
        <li v-for="skill in devSkills">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteTitle: 'Skills',
      devSkills: [
        'VueJS',
        'NuxtJS',
        'PHP / Laravel',
        'HTML & CSS',
        'SCSS / LESS',
        'TailwindCSS',
        'Bootstrap'
      ]
    }
  }
}
</script>

<style scoped></style>
