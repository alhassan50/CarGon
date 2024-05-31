export const fadeIn = (direction: string, duration: number, delay: number) => {
    return {
        offscreen: {
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0, //changed from 80 to 50
        opacity: 0,
        x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0, //changed from 80 to 50
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

export const container = {
    offscreen: { opacity: 1, scale: .7 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }
    }
};
  
export const item = {
    offscreen: { x: -20, y: 20, opacity: 0 },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: .5
      }
    }
};

export const scaleUp = (duration: number ,delay: number) => {
    return {
    offscreen: {
        y: 50,
        opacity: 0,
        scale: 0.8,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.1, 0.1, 0.1, .15],
        },
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.1, 0.1, 0.1, .15],
        },
    },
}};

export const scaleDown = (duration: number ,delay: number) => {
    return {
    offscreen: {
        y: -30,
        opacity: 0,
        scale: 1.2,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.1, 0.1, 0.1, .15],
        },
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.1, 0.1, 0.1, .15],
        },
    },
}};

export const scaleCenter = (duration: number ,delay: number) => {
    return {
    offscreen: {
        opacity: 0,
        scale: 0.8,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.1, 0.1, 0.1, .15],
        },
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.1, 0.1, 0.1, .15],
        },
    },
}};

export const flipX = {
    offscreen: { opacity: 0, scaleX: 0 },
    onscreen: {
      opacity: 1,
      scaleX: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: 0.2,
        ease: [0.25, 0.5, 0.5, 0.75],
      }
    }
};