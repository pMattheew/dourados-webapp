import { component$, useComputed$, useContext } from "@builder.io/qwik"
import { type LoginPageStore, LoginPageContext } from "../login-context"
import {
  HiEnvelopeSolid,
  HiArrowRightCircleOutline,
  HiArrowLeftCircleOutline,
} from "@qwikest/icons/heroicons"
import { IoLogoGoogle, IoLogoApple } from "@qwikest/icons/ionicons"
import ActionButton from "~/components/ui/action-button"

export default component$(() => {
  const store = useContext<LoginPageStore>(LoginPageContext)
  const sentence = useComputed$(() =>
    store.operation == "login" ? "Continuar" : "Cadastrar-se"
  )

  return (
    <section class={"flex flex-col gap-2 md:gap-4"}>
      <ActionButton animate="fadeInDown">
        <IoLogoGoogle class="h-6 w-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
        {sentence} com Google
      </ActionButton>
      <ActionButton animate={{ animation: "fadeInDown", delay: 1 }}>
        <IoLogoApple class="h-6 w-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
        {sentence} com Apple ID
      </ActionButton>
      <ActionButton
        onClick$={() => store.toggleView()}
        animate={{ animation: "fadeInDown", delay: 2 }}
      >
        <HiEnvelopeSolid class="h-5 w-5 sm:w-8 sm:h-8 mr-3 sm:mr-5" />
        {sentence} com email
      </ActionButton>
      <ActionButton
        onClick$={() => store.toggleOperation()}
        animate={{ animation: "fadeIn", delay: 3, speed: "slow" }}
        transparent
        class={`w-full mt-4 justify-between !text-start !rounded-3xl !shadow-lg self-center font-medium text-white ${
          store.operation == "register" ? "!justify-start !text-gray-200" : ""
        }`}
      >
        {store.operation == "register" ? (
          <>
            <HiArrowLeftCircleOutline class="h-6 w-6 sm:w-8 sm:h-8 mr-2 sm:mr-4 text-golden-400" />
            Voltar
          </>
        ) : (
          <>
            <span>
              Não tem cadastro? <br />{" "}
              <span class={"font-semibold text-golden-400"}>Faça o seu!</span>
            </span>
            <HiArrowRightCircleOutline class="h-6 w-6 sm:w-8 sm:h-8 text-golden-400" />
          </>
        )}
      </ActionButton>
    </section>
  )
})
