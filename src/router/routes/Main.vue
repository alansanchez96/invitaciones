<template>
  <div id="page-top">
    <!-- <Navbar /> -->
    <Header />
    <Nosotros />
    <Information />
    <Contador />
    <Galeria />
    <!--  <Contact />
    <Footer />  -->
  </div>
</template>

<script>
import Information from '@/components/Information.vue';
import Header from '@/components/Header.vue';
import Nosotros from '@/components/Nosotros.vue';
import Navbar from '@/components/Navbar.vue';
import Contador from '@/components/Contador.vue';
import Galeria from '@/components/Galeria.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Portfolio',
  components: {
    Information,
    Header,
    Nosotros,
    Navbar,
    Contador,
    Galeria,
    Contact,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
