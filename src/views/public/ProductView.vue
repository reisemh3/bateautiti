<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
    <div class="relative bg-blueGray-100 w-full">
      <div class="relative pt-32 pb-32 bg-lightBlue-500">
        <div class="px-4 md:px-6 mx-auto w-full">
          <div>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Traffic</h5>
                        <span class="font-bold text-xl">350,897</span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                          <i class="far fa-chart-bar"></i></div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-emerald-500 mr-2"><i
                          class="fas fa-arrow-up"></i> 3.48%</span><span class="whitespace-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">NEW USERS</h5>
                        <span class="font-bold text-xl">2,356</span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                          <i class="fas fa-chart-pie"></i></div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-red-500 mr-2"><i
                          class="fas fa-arrow-down"></i> 3.48%</span><span class="whitespace-nowrap">Since last
                        week</span></p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">SALES</h5>
                        <span class="font-bold text-xl">924</span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                          <i class="fas fa-users"></i></div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-orange-500 mr-2"><i
                          class="fas fa-arrow-down"></i> 1.10%</span><span class="whitespace-nowrap">Since
                        yesterday</span></p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">PERFORMANCE</h5>
                        <span class="font-bold text-xl">49,65%</span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                          <i class="fas fa-percent"></i></div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-emerald-500 mr-2"><i
                          class="fas fa-arrow-up"></i> 12%</span><span class="whitespace-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 md:px-6 mx-auto w-full -mt-24">
        <div class="flex flex-wrap">
          <div class="w-full xl:w-8/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-blueGray-800">
              <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full max-w-full flex-grow flex-1">
                    <h6 class="uppercase mb-1 text-xs font-semibold text-blueGray-200">Overview</h6>
                    <h2 class="text-xl font-semibold text-white">Sales value</h2>
                  </div>
                </div>
              </div>
              <div class="p-4 flex-auto">
                <div class="relative h-350-px">
                  <canvas width="496" height="291"
                    style="display: block; box-sizing: border-box; height: 350px; width: 595.5px;"
                    id="line-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full xl:w-4/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white">
              <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full max-w-full flex-grow flex-1">
                    <h6 class="uppercase mb-1 text-xs font-semibold text-blueGray-500">Performance</h6>
                    <h2 class="text-xl font-semibold text-blueGray-800">Total orders</h2>
                  </div>
                </div>
              </div>
              <div class="p-4 flex-auto">
                <div class="relative h-350-px">
                  <canvas width="221" height="291"
                    style="display: block; box-sizing: border-box; height: 350px; width: 265.7px;"
                    id="bar-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full xl:w-8/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
              <div class="px-6 py-4 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full max-w-full flex-grow flex-1">
                    <h3 class="font-bold text-lg text-blueGray-700">Page visits</h3>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                        Page name</th>
                      <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                        Visitors</th>
                      <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                        Unique Users</th>
                      <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                        Bounce Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">/argon/</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">4,569</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">340</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><i class="fas fa-arrow-up mr-2 text-emerald-500"></i>46,53%</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">/argon/index.html</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">3,985</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">319</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><i class="fas fa-arrow-down mr-2 text-orange-500"></i>46,53%</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">/argon/charts.html</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">3,513</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">294</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><i class="fas fa-arrow-down mr-2 text-orange-500"></i>36,49%</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">/argon/tables.html</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">2,050</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">147</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><i class="fas fa-arrow-up mr-2 text-emerald-500"></i>50,87%</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">/argon/profile.html</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">1,795</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">190</div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><i class="fas fa-arrow-up mr-2 text-red-500"></i>46,53%</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="w-full xl:w-4/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
              <div class="px-6 py-4 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full max-w-full flex-grow flex-1">
                    <h3 class="font-bold text-lg text-blueGray-700">Social traffic</h3>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                        Referral</th>
                      <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                        Visitors</th>
                      <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">Facebook</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">1,480</div>
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                        <div class="flex items-center">
                          <span class="mr-2">60%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                style="width: 60%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">Facebook</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">5,480</div>
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                        <div class="flex items-center">
                          <span class="mr-2">70%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                              <div
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                style="width: 70%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">Google</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">4,807</div>
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                        <div class="flex items-center">
                          <span class="mr-2">80%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-indigo-200">
                              <div
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                                style="width: 80%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">Instagram</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">3,678</div>
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                        <div class="flex items-center">
                          <span class="mr-2">75%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200">
                              <div
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"
                                style="width: 75%;"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center"><span class="ml-3 font-bold NaN">Twitter</span></div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">2,645 </div>
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                        <div class="flex items-center">
                          <span class="mr-2">30%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-amber-200">
                              <div
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"
                                style="width: 30%;"></div>
                            </div>
                          </div>
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="fish">
        <div v-if="fish" class="bloc grid grid-cols-2 p-4 max-w-[50%]">
          <div class="text-3xl pb-16">
            {{ fish.name }}
          </div>
          <div>
            <div v-if="fish.sale" class="rotate-12 text-red-600">
              En promotion !
            </div>
          </div>

          <div class="text-sm italic font-light">
            {{
              fish.comments == ''
                ? 'Pas de description supplémentaire'
                : fish.comments
            }}
          </div>
          <div>
            <div>{{ fish.sale ? fish.discount + '€ /' + fish.unit : fish.price + '€ /' + fish.unit }}</div>
          </div>
        </div>
        <div class="p-4">
          <button class="button" v-on:click="$router.back()">Back</button>
          <button class="button" v-on:click="openWindow(fish.id)">Edit</button>
          <button class="delete-btn" v-on:click="deleteFish(fish)">
            Delete
          </button>
        </div>
      </div>
      <div v-else>
        <div class="m-8 text-2xl">No fish found</div>
      </div>
  </div>
</div></template>

<script lang="ts">
import { loggedIn } from '@/_helpers/auth-guard'
import store from '@/store'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ProductsView',
  components: {},
  methods: {
    openWindow(id: string | URL | undefined) {
      this.$router.push('/edit/' + id)
    },
    deleteFish(fish: any) {
      store.commit('deleteFish', fish)
      this.$router.push('/')
    },
  },
  computed: {
    fish() {
      const id = Number(this.$route.params.id)
      const fish = this.$store.state.fishArray.find(
        (fish: { id: number }) => fish.id === id
      )
      console.log(fish)
      return fish || null
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    loggedIn().then(res => {
      console.log('loggedIn : ' + res)
      if (!res) {
        next('/login')
      } else {
        // next();
      }
    })
  },
})
</script>

<style>
/* .home {
}

@tailwind base;
@tailwind components;
@tailwind utilities; */
</style>
