<template>
  <div class="container">
    <form action="" class="pt-3" @submit.prevent="onSubmit">
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
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is already exist</div>
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
      <button class="btn btn-success" type="submit"
              :disabled="$v.$invalid">Submit</button>
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
  methods: {
    onSubmit() {
      console.log('Email', this.email);
      console.log('Password', this.password);
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail: function (newEmail) {
        if (newEmail === '') return true;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== 'test@mail.ru';
            resolve(value);
          }, 1000);
        })
      },
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
