const textarea = document.getElementById("memo");
const status = document.getElementById("status");

// 🔹 저장된 메모 불러오기
chrome.storage.local.get("memoText", (data) => {
  if (data.memoText) textarea.value = data.memoText;
});

// 🔹 입력할 때마다 자동 저장
textarea.addEventListener("input", () => {
  const text = textarea.value;
  chrome.storage.local.set({ memoText: text });
  status.textContent = "✅ Saved!";
  setTimeout(() => (status.textContent = "💾 Auto-saving..."), 1500);
});
