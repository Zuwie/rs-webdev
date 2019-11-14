<template>
  <div class="pt-20">
    <div class="px-6 mx-auto max-w-5xl">
      <h1 class="site-title">{{ siteTitle }}</h1>

      <div class="lg:flex lg:flex-wrap -mx-4">
        <div v-for="project in projects" class="lg:w-1/3 px-4 mb-6">
          <div
            class="max-w-sm rounded overflow-hidden shadow-lg lg:h-full lg:flex lg:flex-col"
          >
            <img
              class="w-full"
              src="https://via.placeholder.com/300x200"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ project.title }}</div>
              <p class="text-gray-700 text-base">{{ project.text }}</p>
            </div>
            <div class="px-6 py-4 lg:mt-auto">
              <span
                v-for="tag in project.tags"
                class="inline-block bg-lightAccent rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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
        },
        {
          title: 'Bilfinger',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          tags: ['Animation', 'Video']
        },
        {
          title: 'HHLA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          tags: ['Animation', 'Video', 'Charts']
        },
        {
          title: 'Shell',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          tags: ['Accessibility']
        },
        {
          title: 'Essity',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
          tags: ['Animation', 'Filter']
        }
      ]
    }
  }
}
</script>

<style scoped></style>
