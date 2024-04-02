    /**
     * main.js
     *
     * Bootstraps Vuetify and other plugins then mounts the App`
     */

    // Plugins
    import { registerPlugins } from './router'

    // Components
    import App from './App.vue'

    // Composables
    import { createApp } from 'vue'

    const app = createApp(App)

    registerPlugins(app)

    app.mount('#app')

    // router
    import router from './router'
    app.use(router);