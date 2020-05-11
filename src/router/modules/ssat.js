/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const ssatRouter = {
  path: '/ssat',
  component: Layout,
  redirect: '/ssat/learning',
  name: 'studentSSAT',
  meta: {
    title: 'SSAT',
    icon: 'chart'
  },
  children: [
    {
      path: 'learning',
      component: () => import('@/views/ssat/learning.vue'),
      name: 'learning',
      meta: { title: 'Learning' }
    },
    {
      path: 'exercise',
      component: () => import('@/views/ssat/exercise.vue'),
      name: 'Exercise',
      meta: { title: 'Exercise' }
    },
    {
      path: 'test',
      component: () => import('@/views/ssat/test.vue'),
      name: 'Test',
      meta: { title: 'Test' }
    },
    {
      path: 'wordbook',
      component: () => import('@/views/ssat/wordbook.vue'),
      name: 'Word Book',
      meta: { title: 'Word Book' }
    }
  ]
}
export default ssatRouter
