<template>
  <div id="portfolio" class="bg-grey pa-8 customP">
    <v-row>
      <v-col cols="12">
        <p class="font-40 font-weight-bold">Portfolio</p>
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col
            v-for="(item, index) in state"
            :key="index"
            cols="12"
            md="6"
            lg="3"
          >
            <v-card class="mx-auto" max-width="374" data-aos="zoom-in">
              <v-img
                v-if="item.src.length"
                :src="item.src[0]"
                aspect-ratio="20/9"
                height="150"
                cover
                :alt="item.label"
              ></v-img>

              <v-img
                v-else
                src="/static/images/no-image.png"
                aspect-ratio="20/9"
                height="150"
                cover
                :alt="item.label"
              ></v-img>

              <v-card-title>{{ item.label }}</v-card-title>
              

              <v-card-actions>
                <v-btn
                  variant="elevated"
                  color="grey"
                  text="Detail"
                  block
                  border
                  @click="openDialog(item)"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-dialog v-model="statusDialogPortfolio" width="900" persistent scrollable>
      <dialog-portfolio
        v-if="statusDialogPortfolio"
        :selectData="selectData"
        @closeDialog="closeDialog"
      ></dialog-portfolio>
    </v-dialog>
  </div>
</template>

<script setup>
// dialog
const statusDialogPortfolio = ref(false);
const selectData = ref(null);

// data
const state = [
  {
    src: ['/static/images/portfolio/myresume.png'],
    label: 'My Resume',
    link: 'https://arzhicreativesolutions.com',
    description: '<p>This is web My Resume.</p><br /><p>Frontend: Nuxt 3</p>',
  },
  {
    src: ['/static/images/portfolio/samuderasis.png'],
    label: 'System Information Shipping',
    link: 'https://samudera.arzhicreativesolutions.com',
    description:
      '<p>Refactoring the Shipping Application utilized by Samudera Indonesia.</p><br /><p>Frontend: Vue.js (version 3)</p><p>Backend: Laravel (version 8)</p>',
  },
  {
    src: ['/static/images/portfolio/olsera.png'],
    label: 'Olsera Backoffice',
    link: 'https://dashboard.olsera.co.id',
    description:
      '<p>For the back office of Olsera`s POS (Point of Sale). Dealing with the addition of features such as franchisee, Customer Journey, and some user feedback.</p><br /><p>Frontend: Vue.js</p>',
  },
  {
    src: [
      '/static/images/portfolio/bigview.png',
      '/static/images/portfolio/bigview2.png',
    ],
    label: 'Big View',
    link: 'https://bigview.bigbox.co.id',
    description:
      '<p>Used to create a government data for Telkom. Here, I am the team lead Frontend.</p><br /><p>Frontend: React.js</p><p>Backend: Lumen</p>',
  },
  {
    src: ['/static/images/portfolio/cliqapartments.png'],
    label: 'Cliqapartments',
    link: 'https://www.cliqapartments.com',
    description:
      '<p>Creating an E-Commerce platform named "Cliq Apartments" using the CMS Canvas within the Canvas Web Design Software House.</p><br /><p>Monolithic: Codeigniter</p>',
  },
  {
    src: ['/static/images/portfolio/redpodgifts.png'],
    label: 'Redpodgifts',
    link: 'https://www.redpodgifts.com',
    description:
      '<p>Creating an E-Commerce platform named "redpodgifts" using the CMS Canvas within the Canvas Web Design Software House.</p><br /><p>Monolithic: Codeigniter</p>',
  },
  {
    src: ['/static/images/portfolio/kiranamegatara.png'],
    label: 'Kirana Megatara',
    link: 'https://www.kiranamegatara.com/',
    description:
      '<p>Creating an E-Commerce platform named "Kirana Megatara" using the CMS Canvas within the Canvas Web Design Software House.</p><br /><p>Monolithic: Codeigniter</p>',
  },
  {
    src: [
      '/static/images/portfolio/lagalanalytics.png',
    ],
    label: 'Izin Prakasa Legal Analytics',
    link: null,
    description:
      '<p>System for issuing permits at the Ministry of State Secretariat.</p><br /><p>Frontend: React.js</p><p>Backend: Laravel</p>',
  },
  {
    src: [
      '/static/images/portfolio/bigscore.png',
    ],
    label: 'Landing Page BigScore',
    link: null,
    description:
      '<p>Landing page for the Telcorisk BigScore project created by Telkom. Here, I am the team lead.</p><br /><p>Frontend: React.js</p><p>Backend: Laravel</p>',
  },
  {
    src: [
      '/static/images/portfolio/cmsbigscore.png',
      '/static/images/portfolio/cmsbigscore2.png'
    ],
    label: 'CMS BigScore',
    link: null,
    description:
      '<p>CMS for the Telcorisk BigScore project created by Telkom. Here, I am the team lead.</p><br /><p>Frontend: React.js</p><p>Backend: Express.js</p>',
  },
  {
    src: [],
    label: 'E-Tax BRI',
    link: null,
    description:
      '<p>Creating E-Tax REST API. Here, I am responsible for the Backend.</p><br /><p>Frontend: React.js</p><p>Backend: Laravel</p>',
  },
  {
    src: ['/static/images/portfolio/dailyactivity.png'],
    label: 'Daily Activity (Development)',
    link: null,
    description:
      '<p>This application is used for monitoring the daily activities of employees.</p><br /><p>Frontend: Vue.js</p><p>Backend: Laravel</p>',
  },
  {
    src: ['/static/images/portfolio/erptasti.png'],
    label: 'ERP Tasti',
    link: null,
    description:
      '<p>This ERP application is used by a subsidiary created by Toyota Astra Motor, namely PT.TASTI ANUGERAH MANDIRI. Here, I am the team lead.</p><br /><p>Monolithic: CakePHP</p>',
  },
  {
    src: ['/static/images/portfolio/dmshonda.png'],
    label: 'Database Management System Honda',
    link: null,
    description:
      '<p>This application is used by PT. Wahana Honda. Here, I am the team lead.</p><br /><p>Monolithic: CakePHP</p>',
  },
  {
    src: ['/static/images/portfolio/ckmd.png', '/static/images/portfolio/ckmd2.png'],
    label: 'CKMD (Checklist Karyawan Mengundurkan Diri)',
    link: null,
    description:
      '<p>This application is used to replace the employee resignation checklist form and to upload the necessary data at BCA Finance. This application is categorized as a Microservice application.</p><br /><p>Frontend: Laravel</p><p>Backend: Laravel</p>',
  },
  {
    src: ['/static/images/portfolio/tca.png'],
    label: 'Tracking Credit Analyst',
    link: null,
    description:
      '<p>This application is used to track incoming credits at BCA Finance.</p><br /><p>Monolithic: Codeigniter</p>',
  },
  {
    src: ['/static/images/portfolio/schoolgrade.png'],
    label: 'School Grade Information System',
    link: null,
    description:
      '<p>Creating a School Grade Information System Application.</p><br /><p>Monolithic: Laravel</p>',
  },
  {
    src: [],
    label: 'Form Beasiswa',
    link: null,
    description:
      '<p>Creating a Scholarship Registration Form at BCA Finance.</p><br /><p>Monolithic: Laravel</p>',
  },
];

const openDialog = (item) => {
  selectData.value = item;
  statusDialogPortfolio.value = true;
};

const closeDialog = () => {
  selectData.value = null;
  statusDialogPortfolio.value = false;
};
</script>
