<template>
    <div class="timer-content">
        <!-- <img :src="require('@/assets/img/44.jpg')" alt="Descripción de la imagen"> -->
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
</template>

<script>
export default {
    name: 'Contador',
    data() {
        return {
            targetDate: new Date("2025-03-01T12:00:00").getTime(),
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

<style scoped>
.btn-primary {
    border-color: #007eb3;
    color: #007eb3;
}

.btn-xl {
    padding: 10px 15px;
    text-transform: none;
}

.modal .modal-dialog {
    max-width: 65%;
    overflow: auto;
}

.modal-header {
    background-color: rgb(33, 37, 41);
}

.modal-header img {
    width: 100%;
    border-radius: 10px;
    padding: 25px 15px;
}

.modal-body,
.modal-footer {
    background-color: #e6e6e6;
}

.modal-footer {
    justify-content: flex-start;
    padding: 0 15px 25px;
}
</style>