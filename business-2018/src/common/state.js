import axios from 'axios';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export default {
    state:{
        host:IS_PRODUCTION ? '' : '/api/mock'
    },
    mutations:{

    },
    actions:{
        postForm(context,params){
            return axios.post(context.state.host+'/form/post',params,{
                withCredentials:false // 如果为true，就不能跨域了，但是如果为false就不能发送cookie
            }).then((response) => {
                return Promise.resolve(response.data)
            })
        }
    }
}