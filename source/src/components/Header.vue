<script setup>
import { ref, onMounted } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import LaunchIcon from "../assets/LaunchIcon.vue";

// Reactive variable to track the active page
const activePage = ref("splashpad");

// Method to check if a page is active
const isActive = (page) => {
  return activePage.value === page;
};

// Method to set the active page
const setActive = (page) => {
  activePage.value = page;
  localStorage.setItem("activePage", page);
};

// Retrieve the active page from localStorage on component mount
onMounted(() => {
  const savedPage = localStorage.getItem("activePage");
  if (savedPage) {
    activePage.value = savedPage;
  } else {
    activePage.value = "splashpad"; // default page
  }
});
</script>

<template>
  <Disclosure
    as="nav"
    class="sticky top-0 z-50 shadow bg-launch-blue"
    v-slot="{ open }"
  >
    <div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Left Section -->
        <div class="flex px-2 lg:px-0">
          <!-- Logo -->
          <div class="flex items-center flex-shrink-0">
            <LaunchIcon class="w-auto text-white h-9" />
          </div>
          <!-- Desktop Navigation -->
          <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
            <!-- Navigation Links -->
            <router-link
              to="/"
              :class="
                isActive('splashpad')
                  ? 'border-white text-white'
                  : 'border-transparent text-light-blue hover:border-light-blue hover:text-light-blue'
              "
              class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
              @click="setActive('splashpad')"
              >Splash Pad</router-link
            >

            <router-link
              to="/login"
              :class="
                isActive('login')
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              "
              class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
              @click="setActive('login')"
              >Login</router-link
            >

            <router-link
              to="/projectlist"
              :class="
                isActive('projectlist')
                  ? 'border-white text-white'
                  : 'border-transparent text-light-blue hover:border-light-blue hover:text-light-blue'
              "
              class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
              @click="setActive('projectlist')"
              >Project Tracker</router-link
            >

            <router-link
              to="/calendar"
              :class="
                isActive('calendar')
                  ? 'border-white text-white'
                  : 'border-transparent text-light-blue hover:border-light-blue hover:text-light-blue'
              "
              class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
              @click="setActive('calendar')"
              >Calendar</router-link
            >

            <router-link
              to="/contributions"
              :class="
                isActive('contributions')
                  ? 'border-white text-white'
                  : 'border-transparent text-light-blue hover:border-light-blue hover:text-light-blue'
              "
              class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
              @click="setActive('contributions')"
              >Contributions</router-link
            >
            <router-link
              to="/dashboard"
              :class="
                isActive('dashboard')
                  ? 'border-white text-white'
                  : 'border-transparent text-light-blue hover:border-light-blue hover:text-light-blue'
              "
              class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
              @click="setActive('dashboard')"
              >Dashboard</router-link
            >
            <router-link
              to="/demo"
              :class="
                isActive('demo')
                  ? 'border-white text-white'
                  : 'border-transparent text-light-blue hover:border-light-blue hover:text-light-blue'
              "
              class="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2"
              @click="setActive('demo')"
              >Demo</router-link
            >
          </div>
        </div>
        <!-- Center Section (Search Bar) -->
        <div
          class="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end"
        >
          <div class="w-full max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <MagnifyingGlassIcon
                  class="w-5 h-5 text-medium-gray"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                class="block w-full py-2 pl-10 pr-3 text-sm bg-white border rounded-md text-launch-black placeholder-medium-gray border-light-gray focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        <!-- Right Section -->
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-light-blue hover:text-launch-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-blue"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:ml-4 lg:flex lg:items-center">
          <!-- Notifications -->
          <button
            type="button"
            class="relative flex-shrink-0 p-1 text-white rounded-full bg-launch-blue hover:text-light-blue focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-launch-blue"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon class="w-6 h-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative flex-shrink-0 ml-4">
            <div>
              <MenuButton
                class="relative flex text-sm rounded-full bg-launch-blue focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-launch-blue"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-light-gray' : '',
                      'block px-4 py-2 text-sm text-dark-gray',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-light-gray' : '',
                      'block px-4 py-2 text-sm text-dark-gray',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-light-gray' : '',
                      'block px-4 py-2 text-sm text-dark-gray',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <DisclosurePanel class="lg:hidden">
      <div class="pt-2 pb-3 space-y-1 bg-launch-blue">
        <DisclosureButton
          as="button"
          @click="
            setActive('splashpad');
            $router.push('/');
          "
          class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left border-l-4"
          :class="
            isActive('splashpad')
              ? 'text-white border-white bg-light-blue'
              : 'text-light-blue border-transparent hover:border-light-blue hover:bg-light-blue hover:text-white'
          "
        >
          Splash Pad
        </DisclosureButton>
        <!-- Repeat for other navigation items -->
        <DisclosureButton
          as="button"
          @click="
            setActive('projectlist');
            $router.push('/projectlist');
          "
          class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left border-l-4"
          :class="
            isActive('projectlist')
              ? 'text-white border-white bg-light-blue'
              : 'text-light-blue border-transparent hover:border-light-blue hover:bg-light-blue hover:text-white'
          "
        >
          Project Tracker
        </DisclosureButton>
        <DisclosureButton
          as="button"
          @click="
            setActive('calendar');
            $router.push('/calendar');
          "
          class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left border-l-4"
          :class="
            isActive('calendar')
              ? 'text-white border-white bg-light-blue'
              : 'text-light-blue border-transparent hover:border-light-blue hover:bg-light-blue hover:text-white'
          "
        >
          Calendar
        </DisclosureButton>
        <DisclosureButton
          as="button"
          @click="
            setActive('contributions');
            $router.push('/contributions');
          "
          class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left border-l-4"
          :class="
            isActive('contributions')
              ? 'text-white border-white bg-light-blue'
              : 'text-light-blue border-transparent hover:border-light-blue hover:bg-light-blue hover:text-white'
          "
        >
          Contributions
        </DisclosureButton>
        <DisclosureButton
          as="button"
          @click="
            setActive('dashboard');
            $router.push('/dashboard');
          "
          class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left border-l-4"
          :class="
            isActive('dashboard')
              ? 'text-white border-white bg-light-blue'
              : 'text-light-blue border-transparent hover:border-light-blue hover:bg-light-blue hover:text-white'
          "
        >
          Dashboard
        </DisclosureButton>
        <DisclosureButton
          as="button"
          @click="
            setActive('demo');
            $router.push('/demo');
          "
          class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left border-l-4"
          :class="
            isActive('demo')
              ? 'text-white border-white bg-light-blue'
              : 'text-light-blue border-transparent hover:border-light-blue hover:bg-light-blue hover:text-white'
          "
        >
          Demo
        </DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-light-blue bg-launch-blue">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Tom Cook</div>
            <div class="text-sm font-medium text-light-blue">
              tom@example.com
            </div>
          </div>
          <button
            type="button"
            class="relative flex-shrink-0 p-1 ml-auto text-white rounded-full bg-launch-blue hover:text-light-blue focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-launch-blue"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <DisclosureButton
            as="a"
            href="#"
            class="block px-4 py-2 text-base font-medium text-light-blue hover:bg-light-blue hover:text-white"
            >Your Profile</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="block px-4 py-2 text-base font-medium text-light-blue hover:bg-light-blue hover:text-white"
            >Settings</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="block px-4 py-2 text-base font-medium text-light-blue hover:bg-light-blue hover:text-white"
            >Sign out</DisclosureButton
          >
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
