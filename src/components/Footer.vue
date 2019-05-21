<template>
    <footer>Copyright {{getCurrentYear}} by <a :href="href">potter.ca</a></footer>
</template>
<script>
export default {
    data: () => ({
        href: 'https://www.potter.ca'
    }),
    computed: {
        getCurrentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>
footer {
  text-align: center;
  color: #00a672;
  letter-spacing: .5px;
  padding: 20px;
}

</style>