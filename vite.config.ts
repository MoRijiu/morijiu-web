/*
 * @Author: zhengduo
 * @Date: 2023-02-28 10:12:42
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-02-28 10:20:48
 * @Descripttion: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
        })
      ]
    }
  },
  plugins: [vue()],
})
