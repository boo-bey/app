const LoginModule = {
    namespaced: true,
    state: {
        userinfo: {
            token: '',
            isLogin: false,
            user: '張三'
        }
    },
    mutations: {
        changeLogin(state, playod) {
            state.userinfo = playod
        }
    }
}

export default LoginModule