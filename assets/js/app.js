let selector = (o) => document.querySelector(o);

let pushData = data.map((row) => {
  return `<div class="link-container"><img src="${getImageUrl(
    row.img,
    "svg"
  )}" class="link-logo" alt="" /><button class="btn link-go-btn mt-1-5">  <a href="${
    row.link
  }" class="no-a" target="_blank">${
    row.name
  } &#8605;  </a></button><button class="btn link-about-btn" data-link="github"><a href="${
    row.docs
  }" class="no-a" target="_blank">Docs &#8605;
  </a></button>
  </div>`;
});
selector(".dev-sites").innerHTML = pushData.join(" ");
function getImageUrl(img_name, extension) {
  return `./assets/images/${img_name}.${extension}`;
}
