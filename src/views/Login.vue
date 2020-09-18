<template>
  <div class="login">
    <Card shadow class="cd">
      <div>
        <p class="txt-ct" style="height: 80px;">Login</p>

        <Form :model="loginForm" :label-width="80">
          <FormItem label="Username">
            <Input v-model="loginForm.uname" placeholder="username" size="large">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem label="Password">
            <Input v-model="loginForm.pwd" placeholder="password" size="large" type="password"
                   @on-enter="login">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>

          <FormItem>
            <Row type="flex" justify="center" class="btm">
              <Col span="24">
                <Button size="large" type="primary"
                        @click="login"
                        style="width: 100%">Login</Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>

<script>
import api from '../api/index';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        uname: '',
        pwd: '',
      },
    };
  },
  methods: {
    login() {
      api.post('/loginApi', this.loginForm)
        .then(() => {
          this.$Message.success('login success!');
          this.loginForm = {
            uname: '',
            pwd: '',
          };
          this.$router.push({ name: 'index' });
        })
        .catch(({ response }) => {
          this.$Message.error(response.data.message);
        });
    },
  },
};
</script>

<style scoped>
.login {
  background-color: #085278;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cd {
  width: 500px;
}
.txt-ct {
  text-align: center;
}
</style>
