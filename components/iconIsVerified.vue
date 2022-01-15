<template>
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" :stroke="isVerified ? '#3BF79D' : '#464646'" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.3335 6.00003L5.44461 7.11114L7.66683 4.88892" :stroke="isVerified ? '#3BF79D' : '#464646'" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
  export default {
    props: {
      isVerified: {
        type: Boolean,
      }
    }
  }
</script>
