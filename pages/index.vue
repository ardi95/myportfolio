<template>
  <div class="customP">
    <div class="mtc-30vh px-6 mbc-30vh">
      <p data-aos="zoom-in" class="font-53 text-center text-grey-darken-1">
        Hi, I'm Ardiansyah Pratama.
      </p>
      <p class="font-53 text-center text-grey-darken-1" data-aos="zoom-in">
        I'm a Fullstack Web Developer in Jakarta.
      </p>
    </div>
    <about></about>
    <experience-education></experience-education>
    <portfolio></portfolio>
    <skills></skills>
    <certificates></certificates>
    <contact></contact>
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init();
});
</script>
