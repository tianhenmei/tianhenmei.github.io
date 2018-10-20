import axios from 'axios';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export default {
    state:{
        host:IS_PRODUCTION ? 'https://activity.lagou.com' : '/api/mock',
        countId: '1biv',
        activeActivity:'activity0',
        user:{
            avitvityFlag:0,
            name:"",  // 联系人姓名
            contact:"",  // 联系人手机
            city:"",   // 公司所在地
            companyName:""  // 公司名称
        }
    },
    mutations:{
        setActivity(state,one){
            state.activeActivity = one;
        },
        setUserInfo(state,data){
            let content = data.content;
            if(data.state == 200){
                // setTimeout(() => {
                    state.user.avitvityFlag = content.avitvityFlag || 0;
                    state.user.user = content.name || '';
                    state.user.phone = content.contact || '';
                    state.user.address = content.city || '';
                    state.user.name = content.companyName || '';
                // },2000);
            }
        }
    },
    actions:{
        getUserData(context,params){
            return axios.get(context.state.host+'/activityapi/common/getLoginUserAndCompany',{
                withCredentials:false // 如果为true，就不能跨域了，但是如果为false就不能发送cookie
            }).then((response) => {
                context.commit('setUserInfo',response.data);
                return Promise.resolve(response.data);
            })
        },
        postForm(context,params){
            return axios.get(context.state.host+'/activityapi/common/busiSubmit',params,{
                withCredentials:false // 如果为true，就不能跨域了，但是如果为false就不能发送cookie
            }).then((response) => {
                return Promise.resolve(response.data)
            })
        }
    }
}