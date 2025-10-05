import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function changeLayout(containerEl) {
  containerEl.forEach(el => {
    el.style.marginTop = "15px";
  });
}

export function changeBtnCondition(btn) {
  if (btn.disabled) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

export function showError(message) {
  iziToast.error({
    message,
    position: 'topRight',
  })
}

export function showInfo(message) {
  iziToast.info({
    message,
    position: 'topRight'
  })
}

export function showWarning(message) {
  iziToast.warning({
    message,
    position: 'topRight'
  })
}