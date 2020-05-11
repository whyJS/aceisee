/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const satRouter = {
  path: '/sat',
  component: Layout,
  redirect: '/sat/learning',
  name: 'studentSAT',
  meta: {
    title: 'SAT',
    icon: 'component'
  },
  children: [
    {
      path: 'learning',
      component: () => import('@/views/sat/learning.vue'),
      name: 'learning',
      meta: { title: 'Learning' }
    },
    {
      path: 'exercise',
      component: () => import('@/views/sat/exercise.vue'),
      name: 'Exercise',
      meta: { title: 'Exercise' }
    },
    {
      path: 'test',
      component: () => import('@/views/sat/test.vue'),
      name: 'Test',
      meta: { title: 'Test' }
    },
    {
      path: 'wordbook',
      component: () => import('@/views/sat/wordbook.vue'),
      name: 'Word Book',
      meta: { title: 'Word Book' }
    }
  ]
}
export default satRouter
