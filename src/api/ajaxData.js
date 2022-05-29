let ajaxData=(url,obj)=>{
    // window 自带的请求数据工具
    // url 是请求的地址，{metod:post, //请求方式，
                    //  params:obj   //请求参数}
    return fetch(url,{
        method:'post',
        params:obj
    }).then(data=>{
        return data.json();
 
    })
 }
 export default ajaxData;