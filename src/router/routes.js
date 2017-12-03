 /* 
 * @Author: nooldey 
 * @Author-Email: <nooldey@gmail.com> 
 * @Date: 2017-11-23 17:20:27 
 * @Last Modified by: nooldey
 * @Last Modified time: 2017-12-03 12:00:32
 * @Description: 具体的路由定义
 */

const view = () => import('../views/view')
const layout = () => import('../views/layout')
const pipe = x => () => import(/* webpackChunkName: [request] */ `~/${x}`)

export default [
    {
        path: '/',
        component: layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: view,
                children: [
                    {
                        path: '',
                        name: '常用国家',
                        component: pipe('country/apple.vue')
                    },
                    {
                        path: 'currency',
                        name: '货币查询',
                        component: pipe('country/currency.vue')
                    },
                    {
                        path: 'countries',
                        name: '国家列表',
                        component: pipe('country/index')
                    }
                ]
            },
            {
                path: '404',
                name: 'Error-Page',
                hidden: true,
                component: pipe('404/index')
            },
        ]
    },
    {
        path: '*',
        redirect: '/404'
    }
]