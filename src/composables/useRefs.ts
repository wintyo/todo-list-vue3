import { reactive } from 'vue';

export function useRefs<T extends Record<string, any>>(initialRefs: T) {
  const refs = reactive<T>(initialRefs);

  return {
    refs,
    setRef: (key: keyof T) => (el: any) => {
      refs[key] = el;
    },
  };
}
