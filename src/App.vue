<template>
  <div class="container">
    <form action="" class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email"
               id="email"
               class="form-control"
               :class="{ 'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid }"
               v-model="email"
               @blur="$v.email.$touch()">
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password"
               id="password"
               class="form-control"
               :class="{ 'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid }"
               v-model="password"
               @blur="$v.password.$touch()">
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
        </div>
      </div>
      <div class="form-group">
        <label for="password">Confirm password</label>
        <input type="password"
               id="confirm"
               class="form-control"
               :class="{ 'is-invalid': $v.confirmPassword.$error, 'is-valid': !$v.confirmPassword.$invalid }"
               v-model="confirmPassword"
               @blur="$v.confirmPassword.$touch()">
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Password should match
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  name: 'app',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs('password')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
