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
            component: home,
            meta: { aR: true },
        },
        {
            path: '/wechat',
            component: wechat,
            meta: { aR: true },
        },
        {
            path: '/my',
            component: my,
            meta: { aR: true },
        },
        {
            path: '/from',
            component: from,
            meta: { aR: true },
        },
    ]
}]
