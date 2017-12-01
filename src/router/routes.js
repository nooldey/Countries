 /* 
 * @Author: nooldey 
 * @Author-Email: <nooldey@gmail.com> 
 * @Date: 2017-11-23 17:20:27 
 * @Last Modified by: nooldey
 * @Last Modified time: 2017-12-01 09:12:28
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
                        name: 'Countries',
                        component: pipe('country/index')
                    },
                    {
                        path: 'currency',
                        name: 'Currency',
                        component: pipe('country/currency.vue')
                    },
                    {
                        path: 'apple',
                        name: 'apple',
                        component: pipe('country/apple.vue')
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