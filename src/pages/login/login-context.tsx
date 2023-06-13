import { type QRL, createContextId } from "@builder.io/qwik"

export interface LoginPageStore {
  animate: boolean
  view?: "panel" | "form"
  operation?: "login" | "register"
  toggleView: QRL<(this: LoginPageStore) => void>
  toggleOperation: QRL<(this: LoginPageStore) => void>
}

export const LoginPageContext = createContextId<LoginPageStore>("pages.login")
