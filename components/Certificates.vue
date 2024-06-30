<template>
  <div id="certificate" class="bg-grey pa-8 customP">
    <v-row>
      <v-col cols="12">
        <p class="font-40 font-weight-bold">Certificate</p>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12">
        <div class="pa-4 elevation-3 rounded bg-white">
          <v-data-table
            density="compact"
            hover
            :items="items"
            :headers="headers"
          >
          </v-data-table>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// table
const headers = [
  {
    title: 'Name',
    sortable: false,
    key: 'name'
  },
  {
    title: 'Place',
    sortable: false,
    key: 'place'
  },
]

const items = ref([
  {
    name: 'Course React and React Native',
    place: 'Hacktiv8'
  },
  {
    name: 'Testing React with Jest and Testing Library',
    place: 'Udemy'
  },
  {
    name: 'Web Programming With JQuery',
    place: 'Universitas Gunadarma'
  },
  {
    name: 'Fundamental Server OS',
    place: 'Universitas Gunadarma'
  },
  {
    name: 'Web Desisgn Using Macromedia Flash',
    place: 'Universitas Gunadarma'
  },
  {
    name: 'Introduction to Visual C++ with MFC',
    place: 'Universitas Gunadarma'
  },
  {
    name: 'Oracle for Beginner',
    place: 'Universitas Gunadarma'
  },
  {
    name: 'Oracle for Intermediate',
    place: 'Universitas Gunadarma'
  },
  {
    name: 'Juara 3 Cabor Catur FOSC 2017',
    place: 'Universitas Gunadarma'
  },
  {
    name: 'Piagam Penghargaan Japfa Chess Festival 2012',
    place: 'Gedung Serbaguna Senayan'
  },
  {
    name: 'Piagam Penghargaan Kejuraraan Nasional Catur Mahasiswa VI',
    place: 'Gedung Kemendikbud'
  },
])
</script>