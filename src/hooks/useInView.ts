import { useEffect, useRef, useState } from 'react'

interface Options {
  /** Fraction of the element that must be visible (0–1). */
  threshold?: number
  /** Stop observing after the first time the element becomes visible. */
  once?: boolean
  /** Grows/shrinks the viewport box used for the check, e.g. '-20% 0px -20% 0px'. */
  rootMargin?: string
  /** Value to report before the observer's first callback. */
  initialInView?: boolean
}

/** Tracks whether an element is in the viewport. */
export function useInView<T extends Element>({ threshold = 0.25, once = false, rootMargin = '0px', initialInView = false }: Options = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(initialInView)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  return { ref, inView }
}
