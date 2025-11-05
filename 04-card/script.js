// สลับ Follow/Unfollow ต่อการ์ด
document.querySelectorAll(".follow-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const on = btn.classList.toggle("following");
    btn.textContent = on ? "Unfollow" : "Follow";
  });
});

// สลับธีม (light/dark) ต่อการ์ด ด้วยโครงเดิม (card-item)
document.querySelectorAll(".mode-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const cardItem = btn.closest(".card-item");
    cardItem.classList.toggle("dark");
  });
});
