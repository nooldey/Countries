 /* 
 * @Author: nooldey 
 * @Author-Email: <nooldey@gmail.com> 
 * @Date: 2017-11-23 17:20:27 
 * @Last Modified by: nooldey
 * @Last Modified time: 2017-11-30 10:42:36
 * @Description: 具体的路由定义
 */

const view = () => import('../views/view')
const layout = () => import('../views/layout')
const pipe = x => () => import(/* webpackChunkName: [request] */ `~/${x}`)

export default [
    {
        path: '/',
        component: layout,
        children: [
            {
                path: 'home',
                name: 'Home-Page',
                component: view,
                children: [
                    {
                        path: '',
                        name: 'Countries',
                        component: pipe('country/index')
                    }
                ]
            },
            {
                path: '404',
                name: 'Error-Page',
                component: pipe('404/index')
            },
        ]
    },
    {
        path: '*',
        redirect: '/404'
    }
]