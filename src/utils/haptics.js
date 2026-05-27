export function haptic(enabled, pattern = [30, 20, 30]) {
  if (!enabled) return;
  if (typeof navigator === 'undefined') return;
  const vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.msVibrate;
  if (typeof vibrate === 'function') {
    try {
      vibrate.call(navigator, pattern);
    } catch (_) {
      // ignore vibration failures
    }
  }
}
