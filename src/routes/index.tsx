import type { DocumentHead } from "@builder.io/qwik-city"
import { component$ } from "@builder.io/qwik"
import LoginPage from "~/pages/login/login-page"

export default component$(() => {
  return <LoginPage />
})

export const head: DocumentHead = {
  title: "Login | Barbearia Dourado's",
  meta: [
    {
      name: "description",
      content: "Do login to use the entire Dourado's application",
    },
  ],
}
