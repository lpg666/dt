import App from '../App'

const home = r => require.ensure([], () => r(require('../components/home')), 'home');
const wechat = r => require.ensure([], () => r(require('../components/wechat')), 'wechat');

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
    ]
}]
