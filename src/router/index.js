import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Archives from './Archives'
import About from './About'

import Markdown from './onlineTools/Markdown'
import Resume from './onlineTools/Resume'
import Reg from './onlineTools/Reg'
import Base from './onlineTools/Base'
import Draw from './onlineTools/Draw'

import DealWidthImage from './onlineTools/DealWidthImage'
import compressImage from './onlineTools//DealWidthImage/compress'
import cropImage from './onlineTools/DealWidthImage/crop'

import Doraemon from './onlyCss/Doraemon'



// const Home = resolve => require(['./Home'], resolve)

// const Archives = resolve => require(['./Archives'], resolve)

// const About = resolve => require(['./About'], resolve)

// const Markdown = resolve => require(['./onlineTools/Markdown'], resolve)

// const Resume = resolve => require(['./onlineTools/Resume'], resolve)

// const Reg = resolve => require(['./onlineTools/Reg'], resolve)

// const Base = resolve => require(['./onlineTools/Base'], resolve)

// const Draw = resolve => require(['./onlineTools/Draw'], resolve)

// const Doraemon = resolve => require(['./onlyCss/Doraemon'], resolve)



Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Archives',
      path: '/archives',
      component: Archives
    },
    {
      name: 'About',
      path: '/about',
      component: About
    },
    {
      name: 'Markdown',
      path: '/markdown',
      component: Markdown
    },
    {
      name: 'Resume',
      path: '/resume',
      component: Resume
    },
    {
      name: 'Reg',
      path: '/reg',
      component: Reg
    },
    {
      name: 'Base',
      path: '/base',
      component: Base
    },
    {
      name: 'Draw',
      path: '/draw',
      component: Draw
    },
    {
      name: 'Doraemon',
      path: '/doraemon',
      component: Doraemon
    },
    {
      name: 'DealWidthImage',
      path: '/dealimg',
      component: DealWidthImage,
      children: [
        { path: 'compress', component: compressImage },
        { path: 'crop', component: cropImage }
      ]
    }
  ]
})
