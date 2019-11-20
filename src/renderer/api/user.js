import request from '@/utils/request'
import qs from 'qs'

/**
 * 用户登录
 * @param params
 * @returns
      "needSetPassword": true,
      "token": "string",
      "userId": "string"
 */
export function login(params) {
    return request.post('/user', qs.stringify(params));
}

/**
 * 登出
 * @returns {*}
 */
export function logout() {
    return request.delete('/user');
}

/**
 * 用户注册
 * @param params
 * @returns needSetPassword | token | userId
 */
export function uRegist(params) {
    return request.put('/user', qs.stringify(params));
}

/**
 * 获取用户信息
 * @param userId  用户id
 * @returns {*}
 */
export function uGetUserInfo(userId = null) {
    return request.get('/user/get_user_info', {
        params: {
            userId
        }
    });
}

/**
 * 找回密码
 * @param params
 * @returns {*}
 */
export function uPhoneBinding(params) {
    return request.post('/user/phone_binding', qs.stringify(params));
}

/**
 * 找回密码
 * @param params
 * @returns {*}
 */
export function uRetrievePassword(params) {
    return request.post('/user/retrieve_password', qs.stringify(params));
}

/**
 * 搜索用户
 * @param keywords 关键字
 * @param page 第几页
 * @param size 每页显示条数
 * @returns {*}
 */
export function uSearchUser({keywords, page = 0, size = 10}) {
    return request.get('/user/search', {
        params: {
            keywords,
            page,
            size
        }
    });
}


