import { type LoginPageStore, LoginPageContext } from "../login-context"
import { component$, useComputed$, useContext } from "@builder.io/qwik"
import {
  HiArrowLeftCircleOutline,
  HiArrowRightOnRectangleOutline,
} from "@qwikest/icons/heroicons"
import ActionButton from "~/components/ui/action-button"
import Input from "~/components/ui/input"

export default component$(() => {
  const store = useContext<LoginPageStore>(LoginPageContext)
  const sentence = useComputed$(() =>
    store.operation == "login" ? "login" : "cadastro"
  )

  return (
    <form
      preventdefault:submit
      class={"flex flex-col gap-4 md:gap-8 md:pb-16"}
    >
      <Input
        animate="fadeInDown"
        label="Seu email"
        placeholder="patrick@exemplo.com"
        type="email"
        required
      />
      <Input
        animate={{ animation: "fadeInDown", delay: 1 }}
        label="Sua senha"
        placeholder="●●●●●●●●"
        minLength={4}
        type="password"
        required
      />
      {store.operation == "register" && (
        <Input
          animate={{ animation: "fadeInDown", delay: 2 }}
          label="Repita sua senha"
          placeholder="●●●●●●●●"
          type="password"
          required
        />
      )}
      <ActionButton
        animate={{
          animation: "fadeIn",
          delay: store.operation == "register" ? 3 : 2,
          speed: "slow",
        }}
        type="submit"
        class="h-fit"
      >
        <HiArrowRightOnRectangleOutline class="h-6 w-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
        Fazer {sentence}
      </ActionButton>
      <ActionButton
        animate={{
          animation: "fadeIn",
          delay: store.operation == "register" ? 4 : 3,
          speed: "slow",
        }}
        onClick$={() => store.toggleView()}
        class="!text-gray-200 h-fit"
        transparent
      >
        <HiArrowLeftCircleOutline class="h-6 w-6 sm:w-8 sm:h-8 mr-2 sm:mr-4 text-golden-400" />
        Voltar
      </ActionButton>
    </form>
  )
})
