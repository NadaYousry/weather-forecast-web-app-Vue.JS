<template>
  <div id="login">
    <div class="login flex flex-col items-center justify-center p-2">
      <div class="login_header p-10">
        <div class="login_header_icon">
          <img src="./../../assets/images/lightning.svg" class="w-100" />
        </div>
      </div>
      <div class="login_form-body p-5 container">
        <div class="login_form-body_header">
          <h3 class="text-3xl capitalize">Log in</h3>
          <p>
            welcome to
            <span>weather web app</span>
          </p>
        </div>
        <div class="login_form-body_content">
          <form class="login_form-body_content_form">
            <div class="login_form-body_content_form_container">
              <label>Email</label>
              <input class="p-3 my-3" v-model="userData.email" type="text" />
            </div>
            <div class="login_form-body_content_form_container">
              <label>Password</label>
              <input class="p-3 my-3" v-model="userData.password" type="text" />
            </div>
          </form>
        </div>
        <div class="login_form-body_footer text-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 login_btn"
          >Log In</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./logInComponent";
</style>
<script>
export default {
  name: "loginComponent",
  data() {
    return {
      userData: {
        email: "",
        password: ""
      }
    };
  }
};
</script>>