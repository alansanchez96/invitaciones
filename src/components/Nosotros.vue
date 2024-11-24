<template>
    <section class="section-div eres-especial" id="nosotros">
        <h2 class="section-title">Algo especial merece celebrarse contigo</h2>
        <p class="subtitle">Tu presencia en nuestras vidas es invaluable, y es un gran honor invitarte a compartir con nosotros el día más especial de nuestra historia de amor.</p>
    </section>
</template>

<script>

export default {
    name: 'Nosotros',
    data() {
        return {
            'url': 'https://dev-alansan-netlify-app.preview-domain.com/',
            'stacks': [],
            'showStacks': true,
            'serverError': false,
        }
    },
    async mounted() {
        await this.axios.get('/api/stacks-tecnologicos')
            .then(response => this.stacks = response.data.data)
            .catch(() => {
                this.serverError = true;
                this.showStacks = false;
            })
    }
}
</script>