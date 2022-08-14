import {mapMutations, mapGetters} from 'vuex'

export default {
    name: "product",
    components: {},
    props: {
        item: {
            type: Object,
            default: () => {
            }
        }
    },
    data() {
        return {}
    },
    mounted() {
    },
    created() {
    },
    methods: {
        ...mapMutations({
            setTheme: 'main/setStyle'
        })
    },
    watch: {},
    computed: {
        ...mapGetters({
            getTheme: 'main/getStyle'
        })
    },
}
