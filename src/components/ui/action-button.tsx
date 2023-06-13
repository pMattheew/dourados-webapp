import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik"
import { type AnimatableProps, animationClasses } from "./animatable"

type Button = QwikIntrinsicElements["button"]

interface ActionButtonProps extends Button, AnimatableProps {
  transparent?: boolean
}

export default component$<ActionButtonProps>(props => {
  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick$={props.onClick$}
      class={`flex items-center font-medium rounded-full shadow-md text-sm sm:text-2xl px-5 sm:px-8 py-2.5 sm:py-4 text-center transition-all whitespace-nowrap text-gray-800 focus:outline-none focus:ring-4 focus:ring-golden-600 disabled:grayscale-[25%] disabled:opacity-80 ${
        props.class ?? ""
      } ${animationClasses(props.animate)} ${
        props.transparent
          ? "backdrop-filter backdrop-blur-3xl bg-black/10"
          : "bg-golden-400"
      }`}
    >
      <Slot />
    </button>
  )
})
