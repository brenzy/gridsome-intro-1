<template>
  <section class="hero">
    <div class="hero-title">
      <h1>{{ $static.metadata.siteName }}</h1>
      <h2>Sample Project One</h2>
    </div>
  </section>
</template>

<static-query>
  query {
  metadata {
      siteName
    }
  }
</static-query>

<script>
  export default {
    name: "Hero"
  }
</script>

<style lang="scss" scoped>
  .hero {
    background-image: url('~@/assets/images/2019-november-001.jpg');
    background-position: center center;
    background-size: cover;
    height: 20vh;
    + * {
      margin-top: 0;
    }
  }
  .hero-title {
    background-image: linear-gradient(to top, #ffffffdd 2rem, #ffffff00);
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    h1 {
      font-size: 40px;
      margin: 0px;
    }
    h2 {
      font-size: 20px;
      margin: 0px;
    }
    @media only screen and (min-width: 960px) {
      h1 {
        font-size: 48px;
      }
      h2 {
        font-size: 24px;
      }
    }
    @media only screen and (max-width: 200px) {
      h1 {
        font-size: 16px;
      }
      h2 {
        font-size: 8px;
      }
    }
  }
</style>
