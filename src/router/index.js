import App from '../App'

const home = r => require.ensure([], () => r(require('../components/home')), 'home');
const wechat = r => require.ensure([], () => r(require('../components/wechat')), 'wechat');
const from = r => require.ensure([], () => r(require('../components/myFrom')), 'from');
const my = r => require.ensure([], () => r(require('../components/my')), 'my');

export default [{
    path: '',
    component: App,
    children: [
        {
            path: '',
            redirect: '/index'
        },
        {
            path: '/index',
            component: home
        },
        {
            path: '/wechat',
            component: wechat
        },
        {
            path: '/my',
            component: my
        },
        {
            path: '/from',
            component: from
        },
    ]
}]
