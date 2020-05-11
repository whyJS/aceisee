/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const toeflRouter = {
  path: '/toefl',
  component: Layout,
  redirect: '/toefl/learning',
  name: 'studentToefl',
  meta: {
    title: 'TOEFL',
    icon: 'table'
  },
  children: [
    {
      path: 'learning',
      component: () => import('@/views/toefl/learning.vue'),
      name: 'learning',
      meta: { title: 'Learning' }
    },
    {
      path: 'exercise',
      component: () => import('@/views/toefl/exercise.vue'),
      name: 'Exercise',
      meta: { title: 'Exercise' }
    },
    {
      path: 'test',
      component: () => import('@/views/toefl/test.vue'),
      name: 'Test',
      meta: { title: 'Test' }
    },
    {
      path: 'wordbook',
      component: () => import('@/views/toefl/wordbook.vue'),
      name: 'Word Book',
      meta: { title: 'Word Book' }
    }
  ]
}
export default toeflRouter
