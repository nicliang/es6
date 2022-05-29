import  fetchMock from 'fetch-mock';

fetchMock.mock('/login',(url,params)=>{
    let param =params.params
    // console.log(param)
   if (param.name == 'admin'){
      if(param.pwd == '123456'){
          return {code: 200,
                  msg:'登录成功'
                  }
      }else{
          return {code:400,msg:'密码不对'}
      }
   }else {
       return {code:400,
               msg:'用户名不对'}
   }
    
    // return {
    //     a:1
    // }
})