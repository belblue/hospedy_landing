export function useCountUp(target: number, duration: number = 2000) {
  const count = ref(0)
  const isVisible = ref(false)

  const startCount = () => {
    if (isVisible.value) return
    isVisible.value = true

    const startTime = performance.now()
    const startValue = 0

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out-cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)

      count.value = Math.round(startValue + (target - startValue) * easeOutCubic)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        count.value = target
      }
    }

    requestAnimationFrame(animate)
  }

  return {
    count,
    startCount
  }
}
