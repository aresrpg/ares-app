import animate from 'animejs';

export const anime =
  options =>
  (ref, delay = 0) => {
    const memory = {
      trigerred: false,
      observer: null,
    };
    return {
      mount: () => {
        memory.observer = new IntersectionObserver(
          ([entry]) => {
            if (memory.trigerred) return;
            if (entry.isIntersecting) {
              memory.trigerred = true;
              animate({
                targets: ref.value?.$el ?? ref.value,
                delay,
                opacity: [0, 1],
                ...options,
              });
            }
          },
          { threshold: [0] },
        );
        memory.observer.observe(ref.value?.$el ?? ref.value);
      },
      unmount: () => {
        memory.trigerred = false;
        memory.observer?.disconnect();
      },
    };
  };

export const fade_up = anime({ translateY: [50, 0] });
export const fade_down = anime({ translateY: [-50, 0] });
export const fade_right = anime({ translateX: [-50, 0] });
export const fade_left = anime({ translateX: [50, 0] });
export const minimal_fade_down = anime({
  translateY: [-20, 0],
  easing: 'easeInCubic',
});
export const minimal_fade_up = anime({
  translateY: [20, 0],
  easing: 'easeInSine',
});
export const appear_right = anime({ translateX: ['-30%', 0] });
export const appear_left = anime({ translateX: ['30%', 0] });
export const appear_top = anime({ translateY: ['-30%', 0] });
export const rotate_in = anime({ rotate: ['-30deg', 0] });
export const fade_in = anime({ easing: 'easeInCubic' });
