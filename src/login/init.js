import render from './render'
import event from './event'
let login = (opts={})=>{
 
    let msg = {
        userName:'请输入用户名',
        userPwd :'请输入密码',
        loginBtn: '登录'
    }
    let newobj = Object.assign(opts,msg)
    render(newobj)
    event()

}
export default login;