import {mapMutations, mapGetters} from 'vuex'

export default {
    name: "sidebar",
    components: {},
    data() {
        return {

            selectedColor: {"id": "F-Black", "color": "Black", "hash": "#48484c"},
            menu: [
                {
                    id: 'F-Black', color: 'Black', hash: '#48484c', bgStyle: {
                        from: '#232526', to: '#414345', color: 'white'
                    }
                },
                {
                    id: 'F-Blue', color: 'Violet', hash: '#515265',
                    bgStyle: {
                        from: '#d8d8d9', to: '#ffffff', color: 'black'
                    }
                },
                {
                    id: 'F-Coffee', color: 'Coffee', hash: '#6e554f',
                    bgStyle: {
                        from: '#232526', to: '#414345', color: 'white'
                    }
                },
                {
                    id: 'F-Green', color: 'Green', hash: '#576a66',
                    bgStyle: {
                        from: '#d8d8d9', to: '#ffffff', color: 'black'
                    }
                },
                {
                    id: 'T-Red', color: 'Carbon red', hash: '#f74e4f',
                    bgStyle: {
                        from: '#232526', to: '#414345', color: 'white'
                    }
                },
                {
                    id: 'T-Black', color: 'Carbon black', hash: '#434147',
                    bgStyle: {
                        from: '#d8d8d9', to: '#ffffff', color: 'black'
                    }
                },
                {
                    id: 'T-Blue', color: 'Carbon purple', hash: '#37416e', bgStyle: {
                        from: '#232526', to: '#414345', color: 'white'
                    }
                },
                {
                    id: 'T-Brown', color: 'Carbon brown', hash: '#d8714a',
                    bgStyle: {
                        from: '#d8d8d9', to: '#ffffff', color: 'black'
                    }
                },
                {
                    id: 'T-Coffee', color: 'Carbon coffee', hash: '#916242',
                    bgStyle: {
                        from: '#232526', to: '#414345', color: 'white'
                    }
                },
                {
                    id: 'T-Gray', color: 'Carbon gray', hash: '#7a7980',
                    bgStyle: {
                        from: '#d8d8d9', to: '#ffffff', color: 'black'
                    }
                },
                {
                    id: 'T-Pink', color: 'Carbon pink', hash: '#ae4c78',
                    bgStyle: {
                        from: '#232526', to: '#414345', color: 'white'
                    }
                },
                {
                    id: 'T-silver', color: 'Carbon silver', hash: '#b3aea7',
                    bgStyle: {
                        from: '#d8d8d9', to: '#ffffff', color: 'black'
                    }
                },
                {
                    id: 'T-Yellow', color: 'Carbon yellow', hash: '#f9ce3c',
                    bgStyle: {
                        from: '#232526', to: '#414345', color: 'white'
                    }
                },
            ]
        }
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
