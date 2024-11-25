<template>
    <section id="save-the-date" class="section-div">
        <div class="date-content">
            <div class="date-information">
                <h2 class="section-title">SÁBADO</h2>
                <p class="date">01 Mar 2025</p>
                <p class="subtitle">A special day, our wedding day!</p>
            </div>
            <div class="date-image">
                <img src="https://images.pixieset.com/89695938/01469c484bf2c644d182dba60adbb200-large.JPG" alt="">
            </div>
        </div>
        <div class="ring-content">
            <img :src="require('@/assets/img/ring1.png')" alt="Descripción de la imagen">
        </div>
        <div class="location-content">
            <div class="location-information">
                <h2 class="section-title">UBICACIÓN</h2>
                <p class="location">Av. Zapiola 965, Posadas, Misiones</p>
                <a href="https://maps.app.goo.gl/nCtw8NKcvsLKWnsr7" target="_blank" class="location-btn">¡Abrir en Google Maps!</a>
            </div>
            <div class="location-image">
                <img src="https://lh3.googleusercontent.com/places/ANXAkqERcMxY77dfn7Q9jhRhglp-Vk9x892C7469juHNTOG8dXGmlSXS-qilmGByG8nIyggEUP7UhHz79gTZeaMrd-3h8UmsYWIlcpI=s1600-w1000" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Information',
}
</script>