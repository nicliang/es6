let render = (opts={})=>{
    opts.main.innerHTML=`
        <form onsubmit="return false">
            <input type="text" placeholder="${opts.userName}" id='userName'>
            <input type="password" placeholder="${opts.userPwd}" id='password'>
            <input type="submit" value="${opts.loginBtn}" id='btn'>
        </form>
    `
}
export default render;