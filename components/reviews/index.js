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
            settings: {
                "centerMode": true,
                "centerPadding": "0px",
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 1,

            },
            reviews: [
                {name: 'Homer', review: 'I think this card holder is very good', images: review1},
                {
                    name: 'Antony',
                    review: 'Really pleased by what you received, it is of very good quality',
                    images: review2_2
                },
                {
                    name: 'Antony',
                    review: 'Really pleased by what you received, it is of very good quality',
                    images: review2_2
                },
                {
                    name: 'Antony',
                    review: 'Really pleased by what you received, it is of very good quality',
                    images: review2_2
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
