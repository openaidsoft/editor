import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { title : 'Home' },
    },
    {
      path: '/note-demo',
      name: 'note-demo',
      component: () => import('@/views/NoteDemo.vue'),
      meta: { title : 'Note demo' },
    },
    {
      path: '/popper',
      name: 'popper',
      component: () => import('@/views/Popper.vue'),
      meta: { title : 'Popper' },
    },
    {
      path: '/popper-example',
      name: 'popper-example',
      component: () => import('@/views/PopperExample.vue'),
      meta: { title : 'Popper example' },
    },
    {
      path: '/draggable-list',
      name: 'draggable-list',
      component: () => import('@/views/DraggableList.vue'),
      meta: { title : 'Draggable list' },
    },
    {
      path: '/draggable-column',
      name: 'draggable-column',
      component: () => import('@/views/DraggableColumn.vue'),
      meta: { title : 'Draggable column' },
    },
    {
      path: '/draggable-grid',
      name: 'draggable-grid',
      component: () => import('@/views/DraggableGrid.vue'),
      meta: { title : 'Draggable grid' },
    },
  ]
})

export default router
