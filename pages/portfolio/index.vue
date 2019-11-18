<template>
  <div>
    <h1 class="site-title">{{ siteTitle }}</h1>

    <div class="md:flex md:flex-wrap -mx-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :img="project.img"
        :title="project.title"
        :text="project.text"
        :tags="project.tags"
      ></ProjectCard>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../../components/ProjectCard'

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      siteTitle: 'Portfolio of Rafael Seifert',
      projects: [
        {
          img:
            'https://annual-report2018.prosiebensat1.com/layout/img/og-social.png',
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
          img:
            'https://csrreport.bilfinger.com/2018/sustainability-report/layout/img/og-social.png',
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
