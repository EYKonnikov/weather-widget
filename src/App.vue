<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.checkColorScheme();
  },

  methods: {
    checkColorScheme() {
      const color_scheme = localStorage.getItem("color-scheme");

      // Set color scheme prop, if it hasn't been set yet
      if (!color_scheme) {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
          localStorage.setItem("color-scheme", "light");
        } else {
          localStorage.setItem("color-scheme", "dark");
        }
      }

      this.applyColorScheme();
    },

    applyColorScheme() {
      const color_scheme = localStorage.getItem("color-scheme");
      document.documentElement.setAttribute("data-color-scheme", color_scheme);
    },
  },
};
</script>

<style>
/* Import font */
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800&display=swap");

/* Remove outlines */
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

*:focus {
  outline: none;
}

/* Remove number input arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

/* Color schemes */
[data-color-scheme="dark"] {
  --background-color-primary: #010409;
  --background-color-secondary: #0d1117;
  --background-color-blurred: rgba(0, 0, 0, 0.8);
  --accent-color: #171b22;
  --text-color: #ffffff;
  --text-color-hover: #9a9a9a;
}
[data-color-scheme="light"] {
  --background-color-primary: #ffffff;
  --background-color-secondary: #edebe9;
  --background-color-blurred: rgba(255, 255, 255, 0.8);
  --accent-color: #e0e0e0;
  --text-color: #000000;
  --text-color-hover: #9a9a9a;
}

/* Defaults */
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

html,
body {
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: "Montserrat", sans-serif;
  line-height: 1.4;
  background: var(--background-color-primary);
  color: var(--text-color);
}

.app {
  height: 100vh;
  overflow-y: scroll;
  margin: 0 auto;
}

/* .app::-webkit-scrollbar-track {
	border-radius: 20px;
	background-color: transparent;
}

.app::-webkit-scrollbar {
	width: 5px;
}

.app::-webkit-scrollbar-thumb {
	border-radius: 20px;
	background-color: #f2f2f2;
} */

.app::-webkit-scrollbar {
  display: none;
}
</style>
