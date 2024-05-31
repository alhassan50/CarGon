export const fadeIn = (direction: string, duration: number, delay: number) => {
    return {
        offscreen: {
        y: direction === 'up' ? 70 : direction === 'down' ? -70 : 0, //changed from 80 to 50
        opacity: 0,
        x: direction === 'left' ? 70 : direction === 'right' ? -70 : 0, //changed from 80 to 50
        transition: {
            type: 'tween',
            duration: duration,
            delay: delay,
            ease: [0.25, 0.6, 0.3, 0.8],
        },
        },
        onscreen: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: duration,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
        },
    },
}};
