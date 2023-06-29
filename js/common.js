window.onload = function () {
  let e = document.querySelector(".menu_icon > a"),
    t = document.querySelector(".menu_nav"),
    l = document.querySelector(".close"),
    n = document.querySelectorAll(".menu_nav_box > ul > li");
  if (t) {
    e.addEventListener("click", () => {
      (t.style.left = "0"), (t.style.transition = "1s");
    }),
      l.addEventListener("click", () => {
        t.style.left = "-200%";
      });
    for (let c = 0; c < n.length; c++)
      !(function (e) {
        (n[e].onclick = function () {
          n[e].classList.add("nav_active");
        }),
          n[e].classList.remove("nav_active");
      })(c);
  }
  let i = document.querySelectorAll(".event_tab > li");
  console.log(i);
  let r = document.querySelectorAll(".event_tab_list > li");
  console.log(r),
    i.forEach((e, t) => {
      e.addEventListener("click", function () {
        r.forEach((e) => {
          e.classList.remove("event_active");
        }),
          i.forEach((e) => {
            e.classList.remove("event_active");
          }),
          i[t].classList.add("event_active"),
          r[t].classList.add("event_active");
      });
    });
  let o = document.querySelector(".modal_delete"),
    s = document.querySelector(".md_cancel_btn"),
    a = document.querySelector(".md_delete_btn"),
    d = document.querySelector(".infor_delete_btn");
  o &&
    (d.addEventListener("click", () => {
      o.style.display = "block";
    }),
    s.addEventListener("click", () => {
      o.style.display = "none";
    }),
    a.addEventListener("click", () => {
      o.style.display = "none";
    }));
  let y = document.querySelector(".menu_complete_btn"),
    u = document.querySelector(".modal_origin_btn"),
    v = document.querySelector(".modal_complete");
  v &&
    (y.addEventListener("click", () => {
      v.style.display = "block";
    }),
    u.addEventListener("click", () => {
      v.style.display = "none";
    }));
  let m = document.querySelector(".modal_reset_btn"),
    q = document.querySelector(".reset_btn"),
    S = document.querySelector(".modal_pw_complete");
  S &&
    (q.addEventListener("click", () => {
      S.style.display = "block";
    }),
    m.addEventListener("click", () => {
      S.style.display = "none";
    }));
  let L = document.querySelector(".menu_modal"),
    b = document.querySelector(".sub_menu_btn > li:nth-child(1)"),
    k = document.querySelector(".modal_origin_btn");
  L &&
    (b.addEventListener("click", () => {
      L.style.display = "block";
    }),
    k.addEventListener("click", () => {
      L.style.display = "none";
    }));
};
