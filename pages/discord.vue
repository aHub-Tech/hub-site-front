<template>
  <div></div>
</template>

<script>
export default {
  middleware({ redirect, $config }) {
    return redirect($config.discordLink);
  },
  mounted() {
    this.$nextTick(() => {
      window.location.href = this.$config.discordLink;
    });
  },
};
</script>
