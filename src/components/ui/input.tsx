import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik"
import { animationClasses, type AnimatableProps } from "./animatable"

type Input = QwikIntrinsicElements["input"]

interface InputProps extends Input, AnimatableProps {
  label?: string
}

export default component$<InputProps>(props => {
  return (
    <div
      class={`flex flex-col-reverse text-white 
      ${animationClasses(props.animate)}`}
    >
      <input
        name={props.type}
        placeholder={props.placeholder}
        type={props.type}
        minLength={props.minLength}
        required={props.required}
        class={
          "rounded-full px-4 pb-2 pt-[calc(.5rem+2px)] bg-gray-900 transition-colors border-b-2 border-transparent focus:border-golden-400 focus:outline-none peer md:text-2xl md:px-8 md:pb-4 md:pt-[calc(1rem+4px)] md:border-b-4"
        }
      />
      <label
        class={
          "text-sm font-medium ml-4 flex flex-col transition-colors peer-focus:text-golden-400 md:text-xl"
        }
        for={props.type}
      >
        {props.label}
      </label>
    </div>
  )
})
