<template>
  <form id="dropzone" ref="dropzone"></form>
</template>

<script>
export default {
  mounted() {
    const mainRef = this.$refs.dropzone;
    console.log("refs", mainRef);

    const eve = [
      "drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop"
    ];
    eve.forEach(evt => {
      /*
    For each event add an event listener that prevents the default action
    (opening the file in the browser) and stop the propagation of the event (so
    no other elements open the file in the browser)
  */
      mainRef.addEventListener(
        evt,
        e => {
          e.preventDefault();
          e.stopPropagation();
          this.$emit(evt, e);
        },
        false
      );
    });
  }
};
</script>

<style scope>
#dropzone {
  height: 100%;
  width: 100%;
}
</style>