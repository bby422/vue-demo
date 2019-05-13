module.exports = {
    helpers: {
        if_or: function(v1, v2, options) {
            if(v1 || v2){
                return options.fn(this)
            }

            //运行结果为假
            return options.inverse(this)
        }
    },
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
        description: {
            type: 'input',
            message: '项目描述'
        },
        group: {
            type: "input",
            message: "组织"
        }
    }
}