export const rules = {
  //blur  失去焦点 触发验证  change 一改变就验证
  name: [
    { required: true, message: "用户名不正确", trigger: "blur" },
    { pattern: /^[a-z0-9]{5,10}$/, message: "用户名为5-10个数字或字母", trigger: "blur" }
  ],
  password: [
    { required: true, message: "密码必须输入", trigger: "blur" },
    { pattern: /^[a-z0-9]{3,}$/, message: "密码为3位以上数字或密码", trigger: "blur" }
  ]
}
