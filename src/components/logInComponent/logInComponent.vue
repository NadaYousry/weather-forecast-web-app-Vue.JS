<template>
  <div id="login">
    <div class="login flex flex-col items-center justify-center p-10">
      <div class="login_form-body p-5 container">
        <div class="login_form-body_header">
          <h3 class="p-3 capitalize md:text-4xl lg:text-5xl text-3xl">Log in</h3>
          <p>
            welcome to
            <span>weather web app</span>
          </p>
        </div>
        <div class="login_form-body_content">
          <form class="login_form-body_content_form" @submit.prevent="onSubmitLoginForm()">
            <div class="login_form-body_content_form_container">
              <input
                class="pt-2 pb-2 my-3"
                v-model="userData.email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="login_form-body_content_form_container">
              <input
                class="pt-2 pb-2 my-3"
                v-model="userData.password"
                type="text"
                placeholder="Password"
              />
            </div>
            <div class="login_form-body_footer text-center">
              <!-- <router-link to="/home">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 login_btn"
            >Log In</button>
              </router-link>-->

              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 login_btn"
                type="submit"
                :disabled="userData.email==='' || userData.password===''"
              >Log In</button>
            </div>
          </form>
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
  watch: {},
  name: "loginComponent",
  data() {
    return {
      userData: {
        email: "",
        password: ""
      },

      currentRoute: window.location.pathname
    };
  },
  methods: {
    onSubmitLoginForm() {
      let url = new URL("http://46.101.170.220/api/auth/login");
      let params = [
        // ["name", this.locationData.city],
        ["email", this.userData.email],
        ["password", this.userData.password]
      ];
      url.search = new URLSearchParams(params).toString();
      const formData = {
        email: this.userData.email,
        password: this.userData.password
      };
      console.log(formData);
      // send user data to get token
      this.$http.post(url, formData).then(result => {
        console.log(result);
        // store token in cookies
        let tokencookie = document.cookie;
        console.log(tokencookie);
        let tokenFromReponse = result.data.data.access_token;

        document.cookie = "access_token=" + tokenFromReponse;
        // change router if there is a token in cookies
        if (document.cookie !== "") {
          console.log(this.currentRoute);
          window.location.pathname = "/home";
        }
      });
    }
  }
};
</script>>