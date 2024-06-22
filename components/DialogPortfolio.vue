<template>
  <v-card>
    <div class="pa-6 color-white-bg customP rounded-lg">
      <v-row class="d-flex align-center">
        <v-col cols="6">
          <p class="font-24 font-bold text-grey-darken-1">
            {{ selectData.label }}
          </p>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn
            variant="text"
            color="grey"
            @click="$emit('closeDialog')"
            class="mr-2 mb-2"
            icon="mdi-close"
          >
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12">
          <template v-if="selectData.src.length">
            <img
              v-for="(itemSrc, index) in selectData.src"
              :key="index"
              :src="itemSrc"
              :alt="selectData.label"
              class="w-100 mt-2"
            />
          </template>

          <div class="mt-4">
            <p class="font-24 font-weight-bold">Description</p>
          </div>

          <div class="mt-4" v-html="selectData.description"></div>

          <div
            class="mt-4"
            v-if="selectData.link !== null && selectData.link !== ''"
          >
            <p class="font-24 font-weight-bold">
              Link <v-icon>mdi-link</v-icon>
            </p>
          </div>
          <a
            v-if="selectData.link !== null && selectData.link !== ''"
            :href="selectData.link"
            class="text-grey-darken-1 mt-2 font-18"
            target="blank"
          >
            {{ selectData.link }}
          </a>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script setup>
// props
defineEmits(['closeDialog']);
defineProps({
  selectData: {
    type: Object,
    default: null,
  },
});
</script>
