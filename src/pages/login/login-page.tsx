/* eslint-disable qwik/jsx-img */
import { type LoginPageStore, LoginPageContext } from "./login-context"
import {
  $,
  component$,
  useContextProvider,
  useSignal,
  useStore,
} from "@builder.io/qwik"
import { HiArrowRightOnRectangleOutline } from "@qwikest/icons/heroicons"
import ActionButton from "~/components/ui/action-button"
import LoginPanel from "./partials/login-panel"
import LoginForm from "./partials/login-form"

export default component$(() => {
  const store = useStore<LoginPageStore>({
    animate: false,
    toggleView: $(function (this: LoginPageStore) {
      this.view == "panel" ? (this.view = "form") : (this.view = "panel")
    }),
    toggleOperation: $(function (this: LoginPageStore) {
      this.operation == "login"
        ? (this.operation = "register")
        : (this.operation = "login")
    }),
  })

  useContextProvider(LoginPageContext, store)

  const logo = useSignal<HTMLImageElement>()

  logo.value?.addEventListener("transitionend", () => {
    if (!store.operation && !store.view) {
      store.toggleOperation()
      store.toggleView()
    }
  })

  return (
    <section class={"w-full h-full flex flex-col relative lg:flex-row"}>
      <div class={"flex-1 relative z-0 overflow-hidden"}>
        <video
          src="landing-video.webm"
          loop
          webkit-playsinline
          playsInline
          muted
          autoPlay
          class="w-full h-full object-cover"
        ></video>
        <div
          class={`w-full h-full absolute top-0 left-0 z-10 backdrop-filter transition-[backdrop-filter] duration-[1000ms] ${
            store.animate && "backdrop-blur lg:backdrop-blur-none"
          }`}
          style={"box-shadow: inset 0px 10px 100px 20px #00000088;"}
        ></div>
        <span
          class={
            "w-full h-[12svh] absolute bottom-0 bg-gradient-to-t from-black to-transparent lg:hidden"
          }
        ></span>
      </div>
      <section
        class={
          "w-full h-full absolute flex items-end justify-center pb-6 lg:relative lg:w-3/5 lg:bg-gray-800 overflow-y-auto"
        }
      >
        <div
          class={`w-fit h-fit flex flex-col absolute z-10 translate-center transition-[margin-top] duration-[1000ms] ${
            store.animate
              ? "-mt-[18svh] md:-mt-[21svh] lg:-mt-[24svh]"
              : "-mt-[6svh]"
          } ${
            store.operation == "register" &&
            store.view == "form" &&
            "!-mt-[24svh]"
          }`}
          ref={logo}
        >
          <img
            class={`h-[45svw] md:h-[40svw] lg:h-[22svw]`}
            style={"filter: drop-shadow(2px 3px 0px black);"}
            src="favicon.svg"
            alt="Dourados' logo"
          />
          <div class={`absolute top-full translate-center-x pt-8 md:pt-16`}>
            {store.view == "panel" && <LoginPanel />}
            {store.view == "form" && <LoginForm />}
          </div>
        </div>

        <ActionButton
          disabled={store.animate}
          onClick$={() => (store.animate = !store.animate)}
          class={"disabled:!opacity-0"}
        >
          <HiArrowRightOnRectangleOutline class="h-6 w-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
          Login
        </ActionButton>
      </section>
    </section>
  )
})
