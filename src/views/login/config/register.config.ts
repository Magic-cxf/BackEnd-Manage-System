export const rules = {
  number: [
    { required: false, message: "手机号必填", trigger: "blur" },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: "请输入正确的手机号",
      trigger: "blur"
    }
  ]
  // code: [{}, {}]
}
