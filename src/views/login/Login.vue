<template>
  <div class="login_container">
    <div class="login_box">
      <div class="back" @click="backClick">
        <i class="iconfont icon-tuichu2"></i>
      </div>
      <div class="login_icon">
        <i class="iconfont icon-wangyiyunyinle1"></i>
        <h2>某云</h2>
      </div>
      <!--        登录-->
      <el-form
        :model="login"
        :rules="loginRules"
        ref="longinRuleForm"
        label-width="100px"
        v-show="loginShow"
      >
        <el-form-item label="手机号:" prop="phone">
          <el-input v-model="login.phone" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="密码: " prop="password">
          <el-input
            type="password"
            v-model="login.password"
            placeholder="请输入密码"
          />
        </el-form-item>
      </el-form>
      <!--        注册-->
      <el-form
        :model="login"
        :rules="loginRules"
        ref="registerRuleForm"
        label-width="100px"
        v-show="!loginShow"
      >
        <el-form-item label="手机号: " prop="phone">
          <el-input v-model="login.phone" placeholder="注册的手机号码" />
        </el-form-item>
        <el-form-item label="密码: " prop="password">
          <el-input
            type="password"
            v-model="login.password"
            placeholder="验证码"
          />
        </el-form-item>
      </el-form>
      <div class="login_button">
        <el-button
          type="success"
          :style="{ width: '250px' }"
          @click="loginPwd"
          >{{ loginShow ? "登录" : "点击注册" }}</el-button
        >
        <el-button
          type="primary"
          :style="{ width: '250px' }"
          @click="
            (loginShow = !loginShow), $refs.longinRuleForm.resetFields();
            $refs.registerRuleForm.resetFields();
          "
          >{{ loginShow ? "注册" : "返回登录" }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  components: {},
  data () {
    return {
      loginShow: true,
      isBack: false,
      login: {
        phone: '',
        password: ''
      },
      loginRules: {
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'change' },
          {
            pattern: /^1(3|5|7|8|9)\d{9}$/,
            message: '请输入正确的号码格式',
            trigger: 'change'
          }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'change' },
          {
            min: 6,
            max: 18,
            message: '请输入6 - 18 位数的密码',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    loginPwd () {
      this.$refs.longinRuleForm.validate(async vaild => {
        if (!vaild) return this.$message.error('验证失败!重新输入~')
        this.$store.dispatch('getUserInfo', this.login)
        this.$message.success('登录成功~')
        this.$router.push('/home')
      })
    },
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus">
.login_container
  position absolute
  top 0
  width 100%
  height 100%
  background rgba(0, 0, 0, .3)
  .login_box
    position relative
    top 50%
    left 50%
    transform translate(-50%, -50%)
    animation box_scale 1.5s
    padding 5px
    width 400px
    height 550px
    background #fff
    //border 1px solid rgba(0, 0, 0, .5)
    box-shadow 0 0 20px rgba(0, 0, 0, .5)
    .back
      position absolute
      top 10px
      right 20px
      .icon-tuichu2
        font-size 20px
      &:hover
        animation box_rotate .5s
        color red
    .login_icon
      text-align center
      margin 30px auto 0
      h2
        margin 10px 0 60px
        font-size 50px
      .icon-wangyiyunyinle1
        color red
        font-size 100px
    .el-input
      width 250px
    .login_button
      text-align center
      padding 0 0 0 45px
      margin 10px auto
      .el-button
        margin 5px 0
</style>
