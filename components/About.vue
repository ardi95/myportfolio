<template>
  <div id="about" class="bg-grey pa-8 customP">
    <v-row>
      <v-col cols="12">
        <p class="font-40 font-weight-bold">About Me</p>
      </v-col>
      <v-col cols="12" md="6">
        <div
          class="hc-50vh background-image-cus background-size-cover d-sm-none"
        ></div>
        <div
          class="hc-50vh background-image-cus background-size-contain d-none d-sm-block d-md-none"
        ></div>
        <div
          class="h-md-100 background-image-cus background-size-contain d-none d-md-block"
        ></div>
      </v-col>
      <v-col cols="12" md="6" data-aos="fade-left">
        <p class="mt-6 mt-md-0">
          I graduated with a degree in Informatics Engineering from Universitas
          Gunadarma in 2017. Over the past six years, I have gained extensive
          experience as a Web Developer, with a strong focus on Frontend
          Development for the last three years. My technical skill set includes
          proficiency in modern frameworks such as Vue.js, React, and Laravel.
        </p>

        <p class="mt-4">
          My journey as a Fullstack Web Developer has been driven by a passion
          for creating seamless, user-friendly web applications that meet the
          needs of both businesses and their customers. I am dedicated to
          continually improving my skills and staying current with industry
          trends to deliver high-quality, efficient, and scalable solutions.
        </p>

        <p class="mt-4">
          In addition to my formal education, I completed a specialized course
          in React and React Native at Hacktiv8, which has further honed my
          abilities in building dynamic, responsive, and cross-platform
          applications. I thrive in collaborative environments and am committed
          to contributing to the success of the product team by ensuring we are
          always aligned with the users' needs and the business objectives.
        </p>

        <p class="mt-4">
          My design and development process is rooted in an iterative approach
          that includes user research, problem definition, hypothesis creation,
          prototyping, and testing. This methodology allows me to effectively
          identify and solve the right problems, ensuring that the final product
          is not only functional but also provides an exceptional user
          experience.
        </p>

        <v-btn color="white" class="text-capitalize mt-8" @click="downloadPDF">
          Check out my Resume
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const downloadPDF = () => {
  // Create a link element
  const link = document.createElement('a');
  link.href = '/static/pdf/resume.pdf';
  link.download = 'resume_ardiansyah_pratama.pdf'; // Optional: You can specify the download filename

  // Append to the document
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Clean up and remove the link
  document.body.removeChild(link);
};
</script>
