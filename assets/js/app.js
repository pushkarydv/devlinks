let selector = (o) => document.querySelector(o),
  selectorAll = (o) => document.querySelectorAll(o);
selector(
  ".wrapper"
).innerHTML = `<div class="header"></div><div class="links-grid dev-sites"></div>`;
function displaySite(state, header) {
  let pushData = state
    .map((row) => {
      return `<div class="link-container"><img src="${getImageUrl(
        row.img,
        "svg"
      )}" class="link-logo" alt="" /><button class="btn link-go-btn mt-1-5">  <a href="${
        row.link
      }" class="no-a main-link" target="_blank">${
        row.name
      } &#8605;  </a></button><button class="btn link-about-btn" data-link="github"><a href="${
        row.docs
      }" class="no-a" target="_blank">Docs &#8605;
    </a></button>
    </div>`;
    })
    .join(" ");
  let wrapper = selector(".wrapper");
  let div = document.createElement("div");
  let heading = document.createElement("div");
  heading.classList.add("heading");
  heading.innerHTML = header;
  div.classList.add("links-grid");
  div.innerHTML = pushData;
  wrapper.appendChild(heading);
  wrapper.appendChild(div);
}
displaySite(hosting, "Hosting");
displaySite(js_world, "JS World");
displaySite(css_world, "CSS world");
function getImageUrl(img_name, extension) {
  return `./assets/images/${img_name}.${extension}`;
}
function navState() {
  selector(".l1").classList.toggle("l1-click");
  selector(".l2").classList.toggle("l2-click");
  selector(".nav-links").classList.toggle("display-nav");
}

selector(".mobile-toggle").addEventListener("click", () => {
  navState();
});

function setFaq() {
  let pageData = faq
    .map((d) => {
      return `<div class="heading">${d.question}</div><p>${d.answer}</p>`;
    })
    .join(" ");
  selector(".wrapper").innerHTML = pageData;
}
function removeActiveStates() {
  selectorAll(".page-target").forEach((target) => {
    if (target.classList.contains("active-page")) {
      target.classList.remove("active-page");
    }
  });
}
selectorAll(".page-target").forEach((target) => {
  target.addEventListener("click", () => {
    console.log(target.innerHTML.toLowerCase());
    removeActiveStates();
    target.classList.add("active-page");
    navState();
  });
});
