import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA(
              {
                manifest :{
                  name        : 'My Awesome App',
                  short_name  : 'myApp',
                  description : 'my Awesome App Description',
                  theme_color : '#ffffff',
                },
                workbox : {
                  sourcemap:true
                },
              }
            ),
  ],
})
