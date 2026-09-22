let notify = null;

export function setToastNotifier(fn) {
  notify = fn;
}

export const toast = {
  success(message) {
    notify?.(message);
  },
};
