import { component$, Slot } from "@builder.io/qwik"

export default component$(() => {
  return (
    <main class={"w-[100svw] h-[100svh] flex flex-col relative"}>
      <Slot />
    </main>
  )
})
