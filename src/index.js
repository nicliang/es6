import './api/fetchmock'
import login from "./login/init";

export default login({
    main:document.getElementById('main')
})