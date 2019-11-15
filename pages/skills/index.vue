<template>
  <div>
    <h1 class="site-title">{{ siteTitle }}</h1>
    <ul>
      <li v-for="skill in devSkills">{{ skill }}</li>
    </ul>
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
        'Bootstrap',
        'SEO-Optimization'
      ]
    }
  }
}
</script>

<style scoped></style>
