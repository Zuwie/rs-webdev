<template>
  <div>
    <h1 class="site-title">{{ siteTitle }}</h1>
    <ul class="dashed-list">
      <li v-for="skill in devSkills" class="mb-2">{{ skill }}</li>
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
