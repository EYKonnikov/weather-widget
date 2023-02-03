<template>
  <div class="settings">
    <!-- Mask -->
    <div class="settings__mask" @click="closeSettings()"></div>

    <!-- Content -->
    <div class="settings__content">
      <!-- Header -->
      <h1>Settings.</h1>
      <svg
        class="settings__content__close_button"
        @click="closeSettings()"
        viewBox="0 0 311 311.07733"
      >
        <path
          d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"
        />
        <path
          d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"
        />
      </svg>

      <!-- Body -->
      <LocationsList></LocationsList>
      <AddLocation></AddLocation>
    </div>
  </div>
</template>

<script>
import AddLocation from "./AddLocation/AddLocation.vue";
import LocationsList from "./LocationsList/LocationsList.vue";

export default {
  components: {
    AddLocation,
    LocationsList
  },

  methods: {
    closeSettings() {
      document.getElementsByClassName("settings__content")[0].style.animation =
        "fadeOut_slideDown 0.275s ease-in-out";
      document.getElementsByClassName("settings__mask")[0].style.animation =
        "fadeOut 0.275s ease-in-out";

      // Wait for animations to end, then emit
      setTimeout(() => {
        this.$emit("closeSettings");
      }, 275);
    },
  },
};
</script>

<style>
.settings {
  position: fixed;
  z-index: 100;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.settings__mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  -webkit-animation: fadeIn 0.275s ease-in-out;
  animation: fadeIn 0.275s ease-in-out;
}

@-webkit-keyframes fadeIn_slideUp {
  0% {
    opacity: 0;
    margin-top: 40px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}

@keyframes fadeIn_slideUp {
  0% {
    opacity: 0;
    margin-top: 40px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}

@-webkit-keyframes fadeOut_slideDown {
  0% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 40px;
  }
}

@keyframes fadeOut_slideDown {
  0% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    margin-top: 40px;
  }
}

.settings__content {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  width: 460px;
  max-height: 80%;

  background: var(--background-color-primary);
  border: 1px solid var(--accent-color);
  -webkit-transition: 0.275s;
  -o-transition: 0.275s;
  transition: 0.275s;

  padding: 20px;

  overflow-y: scroll;
  overflow-x: hidden;

  -webkit-animation: fadeIn_slideUp 0.275s ease-in-out;
  animation: fadeIn_slideUp 0.275s ease-in-out;
}

.settings__content::-webkit-scrollbar {
  display: none;
}

.settings__content__title {
  font-size: 21px;
  font-weight: 600;

  padding-top: 20px;
  padding-bottom: 5px;
}

.settings__content__close_button {
  position: absolute;
  top: calc(20px + 12.4px);
  right: 20px;

  width: 20px;
  height: 20px;
  fill: var(--text-color);

  cursor: pointer;
  -webkit-transition: 0.275s;
  -o-transition: 0.275s;
  transition: 0.275s;
}

.settings__content__close_button:hover {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

@media screen and (max-width: 500px) {
  .settings__content {
    width: calc(100% - 40px);
  }
}
</style>
