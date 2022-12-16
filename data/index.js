const login=require('./login.json')
const register=require('./register.json')
const posts=require('./db.json')
const post=require('./post.json')


module.exports =()=>({
    login,
    register,
    posts,
    post,
})