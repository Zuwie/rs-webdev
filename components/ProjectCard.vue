<template>
  <div class="md:2/4 lg:w-1/3 px-4 mb-10">
    <a
      href="#"
      class="max-w-sm md:max-w-full lg:max-w-sm rounded overflow-hidden shadow-lg lg:h-full block md:flex lg:flex-col"
    >
      <img :src="project.img" class="w-full" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ project.title }}</div>
        <p class="text-gray-700 text-base">{{ project.text }}</p>
      </div>
      <div class="px-6 py-4 lg:mt-auto">
        <span
          v-for="tag in project.tags"
          class="inline-block bg-primary text-lightShade rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-lightAccent hover:text-lightShade transition"
          >#{{ tag }}</span
        >
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default() {
        return {
          img: {
            type: String,
            default: 'https://via.placeholder.com/300x200'
          },
          title: {
            type: String,
            default: 'Give me a title'
          },
          text: {
            type: String,
            default: 'I need some text'
          },
          tags: {
            type: Array,
            default() {
              return ['Tag 1']
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
a {
  transition: all 0.5s ease;
}

a:hover,
a:focus {
  transform: scale(1.05);
  color: inherit;
}
</style>
