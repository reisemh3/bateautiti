<template>
  <div class="h-screen flex">
    <div
      class="flex w-1/2 bg-gradient-to-tr from-blue-500 to-blue-700 i justify-around items-center"
    >
      <div>
        <h1 class="text-white font-bold text-4xl font-sans">
          Le Bateau de Thibault !
        </h1>
        <p class="text-white mt-1">
          Revenez en lieu sûr pour consulter nos articles.
        </p>
        <button
          type="submit"
          class="block w-28 bg-white text-black mt-4 py-2 rounded-2xl font-bold mb-2"
        >
          <router-link to="/">Site Web</router-link>
        </button>
      </div>
      <div class="loader">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
      </div>
    </div>
    <div class="flex w-1/2 justify-center items-center bg-white">
      <form @submit.prevent="login">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">
          Bonjour à nouveau!
        </h1>
        <p class="text-sm font-normal text-gray-600 mb-7">
          Bienvenue sur l'administration
        </p>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            for="user_email"
            class="pl-2 outline-none border-none"
            type="text"
            name=""
            id="user_email"
            placeholder="Put your email"
            v-model="user.email"
          />
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            for="user_password"
            class="pl-2 outline-none border-none"
            type="text"
            name=""
            id="user_password"
            placeholder="Mot de Passe"
            v-model="user.password"
          />
        </div>

        <div class="flex justify-between mt-4 ml-2">
          <div class="text-sm">
            <input class="cursor-pointer" type="checkbox" name="rememberme" />
            <span class="text-sm"> Se souvenir de moi </span>
          </div>
          <span class="ml-2 text-sm hover:text-blue-500 cursor-pointer"
            >Mot de passe oublié ?
          </span>
        </div>
        <div>
          <button
            type="submit"
            class="button block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Connexion
          </button>
          <div
            class="flex space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white transition duration-100 py-2 rounded-2xl"
          >
            <img
              class="h-5 cursor-pointer"
              src="https://i.imgur.com/arC60SB.png"
              alt=""
            />
            <button>Se connecter avec Google</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { accountService } from '@/_services'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      accountService
        .login(this.user)
        .then(res => {
          // console.log(res.data)
          accountService.saveToken(res.data.acces_token)
          this.$router.push('/admin/dashboard')
        })
        .catch(err => console.error(err))
    },
  },
}
</script>

<style>
.item1,
.item2,
.item3 {
  position: absolute;
  background-color: transparent;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
}

.loader .item1 {
  --size: 90px;
  animation: size1_1 2.5s infinite alternate;
  z-index: 1;
}

.loader .item2 {
  --size: 60px;
  animation: size1_2 2.5s infinite alternate;
  z-index: 2;
}

.loader .item3 {
  --size: 30px;
  animation: size1_3 2.5s infinite alternate;
  z-index: 3;
}

@keyframes size1_1 {
  0%,
  10% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
    box-shadow: 8px 8px 14px #c5c5c5, -8px -8px 14px #ffffff;
  }
}

@keyframes size1_2 {
  0%,
  40% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
    box-shadow: 8px 8px 14px #c5c5c5, -8px -8px 14px #ffffff;
  }
}

@keyframes size1_3 {
  0%,
  70% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
    box-shadow: 8px 8px 14px #c5c5c5, -8px -8px 14px #ffffff;
  }
}
</style>
