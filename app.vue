<script setup>
import { useDisplay } from 'vuetify';

const display = useDisplay();

// list
const itemListMenu = [
  {
    id: 'about',
    label: 'About Me',
  },
  {
    id: 'experience',
    label: 'Experience & Education',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
  },
];

// data
const drawer = ref(false);
const statusScroll = ref(false);
const lastScrollPosition = ref(0); // Track last scroll position

// watch
watch(
  () => display.lg,
  () => {
    drawer.value = null;
  },
  {
    deep: true,
  }
);

const handleScroll = () => {
  const currentScrollPosition = window.scrollY || window.pageYOffset;
  if (currentScrollPosition === 0) {
    // Jika posisi scroll berada di atas (scroll ke atas)
    statusScroll.value = false; // Set transparansi penuh
  } else if (currentScrollPosition > lastScrollPosition.value) {
    // Jika posisi scroll lebih besar dari posisi scroll terakhir (scroll ke bawah)
    statusScroll.value = true; // Set transparansi opak
  }
  // Update posisi scroll terakhir
  lastScrollPosition.value = currentScrollPosition;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop =
      element.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Ensure drawer is set to null only after hydration
  nextTick(() => {
    drawer.value = false;
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <NuxtLayout>
    <v-app style="overflow-x: hidden">
      <!--Sidebar-->
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item
            link
            @click.stop="scrollToTop"
            color="primary"
            rounded="xl"
          >
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item
            v-for="(item, index) in itemListMenu"
            :key="index"
            link
            @click.stop="scrollToSection(item.id)"
            color="primary"
            rounded="xl"
          >
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!--Toolbar-->
      <!-- :class="{ 'elevation-0': !statusScroll }" -->
      <v-app-bar dark app class="elevation-6 navbar-background-cus">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-lg-none"
        ></v-app-bar-nav-icon>

        <v-toolbar-title class="text-grey-darken-1"
          >Ardiansyah Pratama</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-btn
          class="text-capitalize text-gray d-none d-lg-inline-block"
          type="text"
          color="grey-darken-1"
          @click="scrollToTop"
        >
          Home
        </v-btn>

        <v-btn
          v-for="(item, index) in itemListMenu"
          :key="index"
          class="text-capitalize text-gray d-none d-lg-inline-block"
          type="text"
          color="grey-darken-1"
          @click="scrollToSection(item.id)"
        >
          {{ item.label }}
        </v-btn>
      </v-app-bar>

      <!--Page-->
      <v-main>
        <NuxtPage />
      </v-main>

      <v-footer class="elevation-6 pa-4">
        <p class="font-16">
          © {{ new Date().getFullYear() }} <strong>Ardiansyah Pratama</strong>
        </p>
      </v-footer>
    </v-app>
  </NuxtLayout>
</template>
