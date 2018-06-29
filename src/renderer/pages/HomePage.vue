<template>
  <v-layout column fill-height>
    <v-jumbotron v-dropzone @dragover="onDragover" @drop="onDrop" color="primary" dark height="100%" class="height-ease">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">
              <v-icon x-large>insert_drive_file</v-icon>
            </h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container v-show="files.length > 0" style="overflow: auto">
      <v-flex>
        <v-list two-line>
          <template v-for="(file, index) in files">
            <v-list-tile :key="file.path" avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="file.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="file.size"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-container>
    <v-flex>
      <v-footer height="auto" v-show="files.length > 0" color="secondary">
        <v-layout row wrap justify-space-between>
      <v-btn>
      test
      </v-btn>
            <v-btn>
      test
      </v-btn>
    </v-layout>
      </v-footer>
    </v-flex>
    <v-snackbar :timeout="3000" bottom v-model="snackbar">
      {{ snackbarText }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import Dropzone from "@/components/Dropzone";

export default {
  components: { Dropzone },
  data() {
    return {
      snackbar: false,
      snackbarText: "",
      files: [
        /*         {
          path: "okjokok",
          size: 56465
        },
        {
          path: "dfyhqAZ",
          size: 5647765
        },
        {
          path: "okjQSDGFTUokok",
          size: 56866465
        },
        {
          path: "AEZR",
          size: 56444865
        },
        {
          path: "UYTHGCJG",
          size: 45635467
        },
        {
          path: "jfgthghk",
          size: 43531
        } */
      ]
    };
  },
  methods: {
    snack(text) {
      this.snackbarText = text;
      this.snackbar = true;
    },
    onDragover() {
      console.log("dragover");
    },
    onDrop(event) {
      console.log(event.dataTransfer.files);
      if (event.dataTransfer.files.length > 0) {
        Array.from(event.dataTransfer.files).forEach(file => {
          if (!this.files.find(f => f.name === file.name)) {
            this.files.push(file);
          } else {
            this.snack(`File already present : ${file.name}!`);
          }
        });
      }
    }
  }
};
</script>

<style>
.height-ease {
   -webkit-transition: height 1s ease;
    -moz-transition: height 1s ease;
      -o-transition: height 1s ease;
     -ms-transition: height 1s ease;
         transition: height 1s ease;
    -webkit-transition: height 1s ease;
    -moz-transition: height 1s ease;
      -o-transition: height 1s ease;
     -ms-transition: height 1s ease;
         transition: height 1s ease;
}
</style>
