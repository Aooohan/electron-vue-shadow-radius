import axios from 'axios';
import store from '@/store';
import Message from 'ant-design-vue/es/message'

const baseURL = 'http://119.3.228.222:8080';

const instance = axios.create({
    baseURL,
    timeout: 6000,
});
// request拦截 添加token
/**
 * request拦截 添加id_token
 */
instance.interceptors.request.use(config => {
    if (store.getters.id_token) {
        // 添加token   拼接 id_token
        config.headers['authorization'] = store.getters.id_token;
    }
    return config;
}, error => {
    Message.error(error);
    Promise.reject(error)
});

instance.interceptors.response.use(
    response => {
        const res = response.data;
        // 提示错误
        // 2001 藏书没数据 1501 版本最新
        if (res.code !== 1000 && res.code !== 2001 && res.code !== 1501) {
            Message.error(res.message);
            return Promise.reject(res.message);
        }
        // 当前版本为最新 藏书暂无数据
        if (res.code === 1501 || res.code === 2001) {
            return Promise.reject(res.message);
        } else {
            return response.data;
        }


    },
    error => {
        // 网络请求超时 需要使用自定义toast
        if(error.message.includes('timeout')){
            return Promise.reject('timeout');
        }
        return Promise.reject(error);
    }
);

export default instance