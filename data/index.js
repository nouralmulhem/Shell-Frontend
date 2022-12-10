const login=require('./login.json')
const register=require('./register.json')
const posts=require('./db.json')


module.exports =()=>({
    login,
    register,
    posts,
})