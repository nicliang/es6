import ajaxData from '../api/ajaxData'
let event = ()=>{
    let btn= document.getElementById('btn')
    let userName = document.getElementById("userName")
    let userPwd  = document.getElementById('password')
    btn.onclick=async ()=>{
      let resdata= await ajaxData('/login',{
           name:userName.value,
           pwd :userPwd.value
       })
       console.log(resdata)
    }

}
export default event;