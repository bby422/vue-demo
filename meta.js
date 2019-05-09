module.exports = {
    prompts: {
        name: {
            type: "input",
            message: "项目名称"
        },
        author: {
            type: "input",
            message: "作者"
        },
        email: {
            type: "input",
            message: "邮箱",
            validate: function(_email){
                if(/@/g.test(_email)){
                    return true
                }
                return '邮箱不合法'
            }
        },
        group: {
            type: "input",
            message: "组织"
        }
    }
}