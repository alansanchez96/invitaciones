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
        <div class="date-content">
            <div class="temporizador">
                <div class="temporizador-content">
                    <h2 class="section-title">¡Qué ansias de que llegue el día! Solo falta</h2>
                    <div class="timer-bg">
                        <div id="timer" class="timer">
                            <div class="timer-text"><span>{{ countdown.days }}</span> Días</div>
                            <div><span>:</span></div>
                            <div class="timer-text"><span>{{ countdown.hours }}</span> Horas</div>
                            <div><span>:</span></div>
                            <div class="timer-text"><span>{{ countdown.minutes }}</span> Minutos</div>
                            <div><span>:</span></div>
                            <div class="timer-text"><span>{{ countdown.seconds }}</span> Segundos</div>
                        </div>
                    </div>
                </div>
            </div>
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
    data() {
        return {
            targetDate: new Date("2025-03-01T00:00:00").getTime(),
            countdown: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
        };
    },
    methods: {
        updateCountdown() {
            const now = new Date().getTime();
            const timeDifference = this.targetDate - now;

            if (timeDifference <= 0) {
                this.countdown = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };

                return;
            }

            this.countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.countdown.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdown.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            this.countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        },
    },
    mounted() {
        this.updateCountdown(); // Update immediately
        setInterval(this.updateCountdown, 1000); // Update every second
    },
}
</script>