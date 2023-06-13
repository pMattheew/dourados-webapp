export interface AnimatableProps {
  animate?:
    | string
    | {
        animation?: string
        delay?: number
        speed?: "slow" | "slower" | "fast" | "faster"
      }
}

/**
 * Generate animation classes with delay and speed optionally
 *
 * @export
 * @param {(string | AnimatableProps["animate"])} [animation] Animation name|parameters
 * @return {string} Animation classes
 */
export function animationClasses(
  animation?: string | AnimatableProps["animate"]
) {
  if (!animation) return ""
  if (typeof animation === "string")
    return `animate__animated animate__${animation}`
  return `animate__animated animate__${animation.animation} ${
    animation.delay ? `animate__delay-${animation.delay}s` : ""
  } ${animation.speed ? `animate__${animation.speed}` : ""}`
}
