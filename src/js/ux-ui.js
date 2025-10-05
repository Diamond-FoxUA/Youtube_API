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