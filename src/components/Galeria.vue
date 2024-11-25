<template>
    <div class="gallery-container">
        <button class="nav-btn prev-btn" @click="prevSlide">‹</button>
            <div class="gallery-wrapper">
                <div
                    class="gallery"
                    :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
                    @mousedown="startDrag"
                    @mouseup="endDrag"
                    @mouseleave="endDrag"
                    @mousemove="drag"
                    @touchstart="startDrag"
                    @touchend="endDrag"
                    @touchmove="drag"
                >
                <div class="gallery-item" v-for="(image, index) in images" :key="index">
                    <img :src="image" alt="Gallery Image" />
                </div>
                </div>
            </div>
        <button class="nav-btn next-btn" @click="nextSlide">›</button>
    </div>
</template>

<script>
export default {
    name: 'Galeria',
    data() {
        return {
            images: [
                "https://via.placeholder.com/400x300?text=Image+1",
                "https://via.placeholder.com/400x300?text=Image+2",
                "https://via.placeholder.com/400x300?text=Image+3",
                "https://via.placeholder.com/400x300?text=Image+4",
                "https://via.placeholder.com/400x300?text=Image+6",
                "https://via.placeholder.com/400x300?text=Image+7",
                "https://via.placeholder.com/400x300?text=Image+8",
                "https://via.placeholder.com/400x300?text=Image+9",
                "https://via.placeholder.com/400x300?text=Image+10",
                "https://via.placeholder.com/400x300?text=Image+11",
                "https://via.placeholder.com/400x300?text=Image+12",
            ],
            currentIndex: 0,
            isDragging: false,
            startPosition: 0,
            currentTranslate: 0,
            prevTranslate: 0,
            animationId: null,
        };
    },
    computed: {
        totalSlides() {
            return this.images.length;
        },
        maxIndex() {
            return this.totalSlides - (window.innerWidth > 768 ? 3 : 1);
        },
    },
    methods: {
        nextSlide() {
            if (this.currentIndex < this.maxIndex) {
                this.currentIndex++;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        startDrag(event) {
            this.isDragging = true;
            this.startPosition = this.getPositionX(event);
            this.prevTranslate = this.currentIndex * -100;
        },
        endDrag() {
            if (!this.isDragging) return;
            this.isDragging = false;

            const movedBy = this.currentTranslate - this.prevTranslate;

            if (movedBy < -50 && this.currentIndex < this.maxIndex) {
                this.nextSlide();
            } else if (movedBy > 50 && this.currentIndex > 0) {
                this.prevSlide();
            }

            this.currentTranslate = this.currentIndex * -100;
        },
        drag(event) {
            if (!this.isDragging) return;

            const currentPosition = this.getPositionX(event);
            const movedBy = currentPosition - this.startPosition;
            this.currentTranslate = this.prevTranslate + movedBy;

            requestAnimationFrame(() => {
                const gallery = document.querySelector(".gallery");
                gallery.style.transform = `translateX(${this.currentTranslate}%)`;
            });
        },
        getPositionX(event) {
            return event.type.includes("mouse")
                ? event.pageX
                : event.touches[0].clientX;
        },
    },
    mounted() {
        window.addEventListener("resize", this.endDrag);
    },
}
</script>