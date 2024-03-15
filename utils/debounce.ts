export default function debounce(this: any, func: Function, delay: number) {
  let timer: NodeJS.Timeout | undefined;
  return function(this: any, ...args: unknown[]) {
    clearTimeout(timer!);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
