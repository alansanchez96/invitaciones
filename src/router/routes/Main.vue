<template>
  <div id="page-top">
    <!-- <Navbar /> -->
    <Header />
    <Nosotros />
    <Information />
   <!-- <Projects />
    <Profile />
    <Contact />
    <Footer />  -->
  </div>
</template>

<script>
import Information from '@/components/Information.vue';
import Header from '@/components/Header.vue';
import Nosotros from '@/components/Nosotros.vue';
import Navbar from '@/components/Navbar.vue';
import Projects from '@/components/Projects.vue';
import Profile from '@/components/Profile.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Portfolio',
  components: {
    Information,
    Header,
    Nosotros,
    Navbar,
    Projects,
    Profile,
    Contact,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
