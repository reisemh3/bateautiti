<template>
  <div class="home">
    <header></header>
    <main>
      <div
        class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
      >
        <p class="text-3xl text-gray-700 font-bold mb-5">
          Le Bateau de Thibault!
        </p>
        <p class="text-gray-500 text-lg">
          {{ $store.state.fish.length }} produits
        </p>
      </div>
      <br />
      <!-- <div>
        <ul id="produits-liste">
          <li
            class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
            v-for="fish in $store.state.fish"
            :key="fish.id"
          >
            {{ fish.name }} - {{ fish.price }} {{ fish.unit }}
          </li>
        </ul>
      </div> -->
      <!-- component -->
      <div class="bg-white p-8 rounded-md w-full">
        <div class="flex items-center justify-between pb-6">
          <div>
            <h2 class="text-gray-600 font-semibold">Products Oder</h2>
            <span class="text-xs">All products item</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="bg-gray-50 outline-none ml-1 block"
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div class="lg:ml-40 ml-10 space-x-8">
              <button
                class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
              >
                New Report
              </button>
              <button
                class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
              >
                Card
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      category
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      price
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      unit
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      availability
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      discount
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      comments
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="text-center px-5 py-5 border-b border-gray-200 bg-white text-sm hover:bg-sky-100 hover:text-sky-900 last:border-none transition-all duration-300 ease-in-out"
                    id="produits-liste"
                    v-for="fish in $store.state.fish"
                    :key="fish.id"
                  >
                    <td>
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://api.unsplash.com/photos/random?query=${{fish.name}}"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {{ fish.name }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span v-if="$store.state.fish.category > 1"
                        >Crustaceans</span
                      >
                      <span v-else-if="$store.state.fish.category < 1"
                        >Fish</span
                      >
                      <span v-else>Seafood</span>
                    </td>
                    <td>{{ fish.price }} €</td>
                    <td>{{ fish.unit }}</td>
                    <td>
                      <span
                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span v-if="condition" class="relative">{{
                          fish.availability
                        }}</span>
                      </span>
                    </td>
                    <td>{{ fish.discount }}</td>
                    <td>{{ fish.comments }}</td>
                  </tr>
                </tbody>
              </table>
              <div
                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
              >
                <span class="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                  <button
                    class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                  >
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button
                    class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      fish: [
        {
          id: 12,
          name: "Aile de raie",
          category: 0,
          price: 10.0,
          unit: "kg",
          availability: true,
          sale: false,
          discount: 0.0,
          comments: "Pêche à la corde",
          owner: "tig",
        },
        // other fish items
      ],
      condition: true,
    };
  },
});
</script>

<style>
.home {
}

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
