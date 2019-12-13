<template>
  <header class="header">
    <nav class="nav">
      <g-link exact class="nav__link" to="/">Home</g-link>
      <g-link exact class="nav__link" to="/docs/demo/">Remark Demo</g-link>
      <g-link class="nav__link" to="/about">About</g-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss" scoped>
  .header {
    margin: 0px;
    background: #eee;
    border-bottom: 1px solid #ddd;
  }

  nav {
    margin: 0 auto;
    padding: 8px;
    display: flex;
    max-width: 600px;
  }

  /* class applied to active glink route */
  /* use exact for home page */
  .active {
    color: #f66;
  }

  .placeholder {
    display: inline-block;
    margin-left: 20px;
  }
  .nav__link {
    color: #222;
    font-size: 16px;
    line-height: 1;
    margin: 0 0.5rem 0 0;
    padding: 0.25rem;
    text-decoration: none;
    &.active {
      border-bottom: 2px solid #222;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
</style>
