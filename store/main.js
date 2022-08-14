export const state = () => ({
    style:  {
        id: 'F-Black', color: 'Black', hash: '#48484c', bgStyle: {
            from: '#232526', to: '#414345', color: 'white'
        }
    },
})

export const getters = {
    getStyle(state) {
        return state.style
    }
}

export const mutations = {
    setStyle(state, data) {
        state.style = data
    }
}

export const actions = {}