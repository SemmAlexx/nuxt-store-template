import {mapMutations, mapGetters} from 'vuex'
import review1 from 'assets/img/review/1.jpg'
import review2 from 'assets/img/review/2.jpg'
import review2_1 from 'assets/img/review/2.1.jpg'
import review2_2 from 'assets/img/review/2.2.jpg'

export default {
    name: "reviews",
    components: {},
    data() {
        return {
            mainSlide: {
                "centerMode": true,
                "centerPadding": "0px",
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "arrows": false,
                "draggable": false
            },
            smallSlide: {

                "speed": 500,
                "focusOnSelect": true,
                "arrows": false,

                "infinite": true,
            },
            littleSliders: {
                "slidesToShow": 3,
                "focusOnSelect": true,
                "speed": 500,
                "infinite": true,
                "draggable": false,
                "arrows": false,
                "dots": true,
                "dotsClass": 'reviews__slider-dots'
            },
            reviews: [
                {
                    name: 'Homer',
                    review: 'I think this card holder is very good',
                    images: [review1, review2, review1, review1, review1]
                },
                {
                    name: 'Antony',
                    review: 'Really pleased by what you received, it is of very good quality',
                    images: [review1, review2_1, review1, review1, review1]
                },
                {
                    name: 'Antony',
                    review: 'Really pleased by what you received, it is of very good quality',
                    images: [review1, review2_2, review1, review1, review1]
                },
                {
                    name: 'Antony',
                    review: 'Really pleased by what you received, it is of very good quality',
                    images: [review1, review1, review1, review1, review1]
                }
            ]
        }
    },
    methods: {
        ...mapMutations({}),
        showNext() {
            this.$refs.reviewSlider.next()
        },
        showPrev() {
            this.$refs.reviewSlider.prev()
        },
    },
    watch: {},
    computed: {
        ...mapGetters({
            getTheme: 'main/getStyle',
        })
    },
}
