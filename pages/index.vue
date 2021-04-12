<template>
  <div>
    <!-- <Nav /> -->
    <Header />
    <Testimonials />
    <Chart />
  </div>
</template>

<script>
// import Nav from "../components/Nav";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import Chart from "../components/Chart";

export default {
  components: {
    Header,
    Testimonials,
    Chart
    // Nav
  },
  async asyncData() {
    const mountains = await fetch(
      "https://api.nuxtjs.dev/mountains"
    ).then(res => res.json());

    return { mountains };
  }
};
</script>
