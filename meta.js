module.exports = {
    helpers: {
        is_belle: function(group, options) {
            if(/^belle+$/g.test(group)){
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
        version: {
            type: "input",
            message: "版本",
            validate: function(_v){
                if(/^\d+(.\d)+$/g.test(_v)){
                    return true
                }
                return '版本号不合法 例：1.0.0'
            }
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