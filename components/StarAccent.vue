<template>
    <div
        class="star-accent pointer-events-none select-none"
        :class="[animationClass, positionClass]"
        :style="{
            width: sizeValue,
            height: sizeValue,
            opacity: opacity,
            '--delay': `${delay}s`
        }"
    >
        <svg
            :width="sizeValue"
            :height="sizeValue"
            viewBox="0 0 9.9496765 9.8873596"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m 7.55374,5.740834 c -0.15088,0.0251 -0.22423,0.43692 -0.28799,0.70383 -0.0782,0.32717 -0.3262,0.5858 -0.76125,0.79375 -0.88127,0.42125 -0.90271,0.66893 -0.0936,1.08169 0.49504,0.25255 0.73538,0.51499 0.85564,0.93431 0.23934,0.83451 0.68871,0.84488 1.07485,0.0248 0.21085,-0.44779 0.53694,-0.77593 0.977,-0.98314 0.82806,-0.3899 0.84192,-0.75017 0.0391,-1.01514 -0.44282,-0.14614 -0.72094,-0.40013 -0.96762,-0.88365 -0.40874,-0.80121 -0.46346,-0.71856 -0.83607,-0.65646 z m -4.83946,0.28365 c -0.15154,-0.17337 -0.36557,-0.59613 -0.47562,-0.93947 -0.19531,-0.60935 -0.95375,-1.10191 -1.47598,-1.22782 -0.27887,-0.0672 -0.86406,-0.60873 -0.74754,-0.91237 0.0544,-0.1418 0.49041,-0.42322 0.96887,-0.62536 0.77247,-0.32636 0.91951,-0.47963 1.31238,-1.36798 0.37183,-0.840769 0.50644,-0.991368 0.84337,-0.943554 0.28837,0.04092 0.52073,0.316532 0.82771,0.981774 0.38028,0.82407 0.52446,0.96125 1.32292,1.25869 0.51766,0.19284 0.92127,0.4596 0.95568,0.63165 0.0827,0.4136 -0.41841,0.91662 -1.03624,1.04019 -0.64095,0.12819 -1.05951,0.59316 -1.40973,1.56604 -0.29937,0.8316 -0.66914,1.01489 -1.08582,0.53821 z"
                :fill="color"
                fill-opacity="1"
            />
        </svg>
    </div>
</template>

<script setup lang="ts">
interface Props {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    animation?: 'float' | 'twinkle' | 'pulse' | 'spin' | 'none'
    opacity?: number
    color?: string
    delay?: number
    position?: 'static' | 'absolute'
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    animation: 'float',
    opacity: 0.6,
    color: '#f59e0b',
    delay: 0,
    position: 'absolute'
})

const sizeMap = {
    xs: '16px',
    sm: '24px',
    md: '32px',
    lg: '48px',
    xl: '64px'
}

const sizeValue = computed(() => sizeMap[props.size])

const animationClass = computed(() => {
    if (props.animation === 'none') return ''
    return `star-${props.animation}`
})

const positionClass = computed(() => {
    return props.position === 'absolute' ? 'absolute' : 'relative inline-block'
})
</script>

<style scoped>
.star-accent {
    z-index: 1;
    animation-delay: var(--delay);
}

/* Float animation - gentle up/down movement */
.star-float {
    animation: star-float 6s ease-in-out infinite;
    animation-delay: var(--delay);
}

@keyframes star-float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(5deg); }
}

/* Twinkle animation - opacity pulse */
.star-twinkle {
    animation: star-twinkle 3s ease-in-out infinite;
    animation-delay: var(--delay);
}

@keyframes star-twinkle {
    0%, 100% { opacity: var(--opacity, 0.6); transform: scale(1); }
    50% { opacity: calc(var(--opacity, 0.6) * 1.5); transform: scale(1.1); }
}

/* Pulse animation - scale pulse */
.star-pulse {
    animation: star-pulse 4s ease-in-out infinite;
    animation-delay: var(--delay);
}

@keyframes star-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
}

/* Spin animation - slow rotation */
.star-spin {
    animation: star-spin 12s linear infinite;
    animation-delay: var(--delay);
}

@keyframes star-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
