<template>
  <div class="pt-20">
    <div class="px-6 mx-auto max-w-5xl">
      <h1 class="site-title">{{ siteTitle }}</h1>

      <div class="lg:flex -mx-4">
        <div v-for="project in projects" class="w-1/3 px-4">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://via.placeholder.com/300x200"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ project.title }}</div>
              <p class="text-gray-700 text-base">{{ project.text }}</p>
            </div>
            <div class="px-6 py-4">
              <span
                v-for="tag in project.tags"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >#{{ tag }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteTitle: 'Portfolio of Rafael Seifert',
      projects: [
        {
          title: 'Prosiebensat1',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          tags: ['Animation', 'Video', 'Slider']
        },
        {
          title: 'Merck',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          tags: ['Animation', 'Games', 'colorfull']
        }
      ]
    }
  }
}
</script>

<style scoped></style>
