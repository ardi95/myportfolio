<template>
  <div id="contact" class="pa-8 customP">
    <v-row>
      <v-col cols="12">
        <p class="font-40 font-weight-bold">Contact</p>
      </v-col>
      <v-col cols="6" class="d-none d-md-flex">
        <v-img
          src="/static/images/google-maps.png"
          aspect-ratio="20/9"
          cover
          alt="google maps"
        ></v-img>
      </v-col>
      <v-col cols="6" class="d-none d-md-flex">
        <div class="mt-4">
          <div class="mt-2">
            <v-btn
              class="justify-start text-capitalize"
              color="grey-darken-2"
              variant="text"
              block
              link
              href="https://www.linkedin.com/in/ardiansyah-pratama-6b2a4014b/"
              target="_blank"
            >
              <template v-slot:prepend>
                <img
                  src="/static/images/sosmed/linkedin.svg"
                  class="height-42px width-42px"
                />
              </template>
              Ardiansyah Pratama
            </v-btn>
          </div>

          <div class="mt-2">
            <v-btn
              class="justify-start text-capitalize"
              color="grey-darken-2"
              variant="text"
              block
              link
              href="https://api.whatsapp.com/send/?phone=6289674256264&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <template v-slot:prepend>
                <img
                  src="/static/images/sosmed/whatsapp.svg"
                  class="height-42px width-42px"
                />
              </template>
              +62 896 7425 6264
            </v-btn>
          </div>

          <div class="mt-2">
            <v-btn
              class="justify-start text-lowercase"
              color="grey-darken-2"
              variant="text"
              block
              link
              href="https://www.instagram.com/ardiansyahpratama95/"
              target="_blank"
            >
              <template v-slot:prepend>
                <img
                  src="/static/images/sosmed/instagram.svg"
                  class="height-42px width-42px"
                />
              </template>
              @ardiansyahpratama95
            </v-btn>
          </div>

          <div class="mt-2">
            <v-btn
              class="justify-start text-lowercase"
              color="grey-darken-2"
              variant="text"
              block
              link
              href="https://github.com/ardi95"
              target="_blank"
            >
              <template v-slot:prepend>
                <img
                  src="/static/images/sosmed/github.svg"
                  class="height-42px width-42px"
                />
              </template>
              @ardi95
            </v-btn>
          </div>

          <div class="mt-2">
            <v-btn
              class="justify-start text-lowercase"
              color="grey-darken-2"
              variant="text"
              block
              link
              href="https://gitlab.com/ardi24"
              target="_blank"
            >
              <template v-slot:prepend>
                <img
                  src="/static/images/sosmed/gitlab.svg"
                  class="height-42px width-42px"
                />
              </template>
              @ardi24
            </v-btn>
          </div>

          <div class="mt-2">
            <v-btn
              class="justify-start text-lowercase"
              color="grey-darken-2"
              variant="text"
              block
              link
              href="https://www.youtube.com/channel/UCj2393PdKHrO10U42TeFZLQ"
              target="_blank"
            >
              <template v-slot:prepend>
                <img
                  src="/static/images/sosmed/youtube.svg"
                  class="height-42px width-42px"
                />
              </template>
              @arzicreative
            </v-btn>
          </div>

          <div class="mt-8">
            <v-btn
              class="justify-start text-lowercase"
              color="grey-darken-2"
              variant="text"
              block
              link
              href="https://icons8.com"
              target="_blank"
            >
              <template v-slot:prepend>
                <img
                  src="/static/images/sosmed/icons8.svg"
                  class="height-42px width-42px"
                />
              </template>
              Icon by https://icons8.com
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" class="d-md-none">
        <div>
          <v-parallax src="/static/images/google-maps.png">
            <div class="mt-4">
              <div class="mt-2">
                <v-btn
                  class="justify-start text-capitalize"
                  variant="text"
                  block
                  link
                  href="https://www.linkedin.com/in/ardiansyah-pratama-6b2a4014b/"
                  target="_blank"
                >
                  <template v-slot:prepend>
                    <img
                      src="/static/images/sosmed/linkedin.svg"
                      class="height-42px width-42px"
                    />
                  </template>
                  Ardiansyah Pratama
                </v-btn>
              </div>

              <div class="mt-2">
                <v-btn
                  class="justify-start text-capitalize"
                  variant="text"
                  block
                  link
                  href="https://api.whatsapp.com/send/?phone=6289674256264&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <template v-slot:prepend>
                    <img
                      src="/static/images/sosmed/whatsapp.svg"
                      class="height-42px width-42px"
                    />
                  </template>
                  +62 896 7425 6264
                </v-btn>
              </div>

              <div class="mt-2">
                <v-btn
                  class="justify-start text-lowercase"
                  variant="text"
                  block
                  link
                  href="https://www.instagram.com/ardiansyahpratama95/"
                  target="_blank"
                >
                  <template v-slot:prepend>
                    <img
                      src="/static/images/sosmed/instagram.svg"
                      class="height-42px width-42px"
                    />
                  </template>
                  @ardiansyahpratama95
                </v-btn>
              </div>

              <div class="mt-2">
                <v-btn
                  class="justify-start text-lowercase"
                  variant="text"
                  block
                  link
                  href="https://github.com/ardi95"
                  target="_blank"
                >
                  <template v-slot:prepend>
                    <img
                      src="/static/images/sosmed/github.svg"
                      class="height-42px width-42px"
                    />
                  </template>
                  @ardi95
                </v-btn>
              </div>

              <div class="mt-2">
                <v-btn
                  class="justify-start text-lowercase"
                  variant="text"
                  block
                  link
                  href="https://gitlab.com/ardi24"
                  target="_blank"
                >
                  <template v-slot:prepend>
                    <img
                      src="/static/images/sosmed/gitlab.svg"
                      class="height-42px width-42px"
                    />
                  </template>
                  @ardi24
                </v-btn>
              </div>

              <div class="mt-2">
                <v-btn
                  class="justify-start text-lowercase"
                  variant="text"
                  block
                  link
                  href="https://www.youtube.com/channel/UCj2393PdKHrO10U42TeFZLQ"
                  target="_blank"
                >
                  <template v-slot:prepend>
                    <img
                      src="/static/images/sosmed/youtube.svg"
                      class="height-42px width-42px"
                    />
                  </template>
                  @arzicreative
                </v-btn>
              </div>

              <div class="mt-8">
                <v-btn
                  class="justify-start text-lowercase"
                  variant="text"
                  block
                  link
                  href="https://icons8.com"
                  target="_blank"
                >
                  <template v-slot:prepend>
                    <img
                      src="/static/images/sosmed/icons8.svg"
                      class="height-42px width-42px"
                    />
                  </template>
                  Icon by https://icons8.com
                </v-btn>
              </div>
            </div>
          </v-parallax>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
