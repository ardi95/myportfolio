<template>
  <div id="skills" class="pa-8 customP">
    <v-row>
      <v-col cols="12">
        <p class="font-40 font-weight-bold">Skills</p>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <v-col cols="12">
        <div class="pa-4 elevation-3 rounded">
          <v-data-table
            density="compact"
            hover
            :items="items"
            :headers="headers"
            show-expand
            :item-value="(index) => index"
          >
            <template v-slot:[`item.logo`]="{ item }">
              <v-card elevation="2" rounded>
                <v-img :src="item.logo" height="26" :alt="item.tools"></v-img>
              </v-card>
            </template>
            <template v-slot:expanded-row="{ columns, item }">
              <tr>
                <td :colspan="columns.length">
                  Description: {{ item.description }}
                </td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { calculateYearMonthDifference } from '~/tools.js';
const headers = [
  {
    title: 'Logo',
    align: 'center',
    sortable: false,
    key: 'logo',
    maxWidth: '65px',
  },
  {
    title: 'Tools',
    align: 'start',
    sortable: false,
    key: 'tools',
  },
  {
    title: 'Experience From',
    align: 'start',
    sortable: false,
    key: 'experienceAt',
    minWidth: '150px',
    value: ({ experienceAt }) => {
      if (experienceAt === null) {
        return '-';
      } else {
        const diff = calculateYearMonthDifference(experienceAt);

        return diff.years != 0
          ? `${diff.years} years ${diff.months} months`
          : `${diff.months} months`;
      }
    },
  },
  {
    title: 'Experience In',
    align: 'start',
    sortable: false,
    key: 'experienceIn',
    value: ({ experienceIn }) => {
      if (!experienceIn.length) {
        return '-';
      } else {
        let string = '';

        string += experienceIn.map(({ name }) => {
          return ` ${name}`;
        });

        return string;
      }
    },
  },
];

const items = ref([
  {
    logo: '/static/images/skills/vue.png',
    tools: 'Vue.js',
    experienceAt: '2018-04-01',
    experienceIn: [
      {
        name: 'PT Samudera Indonesia',
      },
      {
        name: 'PT Telkom Indonesia',
      },
      {
        name: 'PT Olsera Indonesia Pratama',
      },
      {
        name: 'BPJS Ketenagakerjaan',
      },
      {
        name: 'Daily Activity',
      },
    ],
    description:
      'This is the framework I like the most in frontend technology.',
  },
  {
    logo: '/static/images/skills/react.png',
    tools: 'React.js',
    experienceAt: '2018-12-01',
    experienceIn: [
      {
        name: 'PT Samudera Indonesia',
      },
      {
        name: 'PT Telkom Indonesia',
      },
      {
        name: 'PT Olsera Indonesia Pratama',
      },
      {
        name: 'Hacktiv8',
      },
    ],
    description:
      'Due to the high demand in the frontend market for using libraries, I have studied and can utilize them.',
  },
  {
    logo: '/static/images/skills/laravel.png',
    tools: 'Laravel',
    experienceAt: '2016-11-01',
    experienceIn: [
      {
        name: 'PT Samudera Indonesia',
      },
      {
        name: 'PT Telkom Indonesia',
      },
      {
        name: 'Bank BRI',
      },
      {
        name: 'BCA Finance',
      },
      {
        name: 'Daily Activity',
      },
      {
        name: 'Universitas Gunadarma',
      },
    ],
    description:
      'This is the backend framework I have used the longest since I was in college, especially when I used it for my final project.',
  },
  {
    logo: '/static/images/skills/mysql.png',
    tools: 'MySQL',
    experienceAt: '2014-03-01',
    experienceIn: [
      {
        name: 'PT Samudera Indonesia',
      },
      {
        name: 'PT Telkom Indonesia',
      },
      {
        name: 'Bank BRI',
      },
      {
        name: 'PT CDC Global Informatika',
      },
      {
        name: 'Canvas Web Design',
      },
      {
        name: 'Daily Activity',
      },
      {
        name: 'Universitas Gunadarma',
      },
    ],
    description:
      'This is the RDBMS I have used the longest since I was in college, especially when I used it for my final project.',
  },
  {
    logo: '/static/images/skills/sqlserver.png',
    tools: 'SQL Server',
    experienceAt: '2015-04-01',
    experienceIn: [
      {
        name: 'Bank BRI',
      },
      {
        name: 'PT CDC Global Informatika',
      },
      {
        name: 'BCA Finance',
      },
      {
        name: 'Universitas Gunadarma',
      },
    ],
    description: 'I have used this RDBMS to create a private game server.',
  },
  {
    logo: '/static/images/skills/git.png',
    tools: 'GIT',
    experienceAt: '2018-02-01',
    experienceIn: [
      {
        name: 'PT Samudera Indonesia',
      },
      {
        name: 'PT Telkom Indonesia',
      },
      {
        name: 'PT Olsera Indonesia Pratama',
      },
      {
        name: 'BPJS Ketenagakerjaan',
      },
      {
        name: 'Bank BRI',
      },
      {
        name: 'PT CDC Global Informatika',
      },
      {
        name: 'BCA Finance',
      },
    ],
    description: '-',
  },
  {
    logo: '/static/images/skills/git.png',
    tools: 'Autodeploy CI/CD',
    experienceAt: '2024-02-01',
    experienceIn: [
      {
        name: 'PT Samudera Indonesia',
      },
      {
        name: 'My Resume',
      },
    ],
    description: '-',
  },
  {
    logo: '/static/images/skills/centos.png',
    tools: 'Centos OS',
    experienceAt: '2018-02-04',
    experienceIn: [
      {
        name: 'PT Samudera Indonesia',
      },
      {
        name: 'My VPS',
      },
      {
        name: 'PT Telkom Indonesia',
      },
      {
        name: 'Bank BRI',
      },
      {
        name: 'PT CDC Global Informatika',
      },
    ],
    description:
      'This is the operating system server that I use most frequently.',
  },
  {
    logo: '/static/images/skills/nuxt.png',
    tools: 'Nuxt',
    experienceAt: '2024-05-01',
    experienceIn: [
      {
        name: 'My Resume',
      },
    ],
    description: '-',
  },
  {
    logo: '/static/images/skills/express.png',
    tools: 'Express',
    experienceAt: null,
    experienceIn: [],
    description:
      'I have no prior experience with this tool, but I have studied it and can use it.',
  },
  {
    logo: '/static/images/skills/mongodb.png',
    tools: 'MongoDB',
    experienceAt: null,
    experienceIn: [],
    description:
      'I have no prior experience with this tool, but I have studied it and can use it.',
  },
]);
</script>
