import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  'resolve.alias': {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
  },
  hostname: '127.0.0.1',
  port: 3001,
  base: './',
  define: {
    'process.env': {
      'BUILD_ENV': process.env.BUILD_ENV
    }
  },
  outDir: 'dist',
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 75, // （设计稿/10）1rem的大小
          propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
  server: {
    port: 3301,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    target: 'es2015',
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
      },
    },
  }
})
