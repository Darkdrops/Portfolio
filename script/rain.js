const rain = document.querySelector(".rain");
const html = '<i class="fa-brands fa-html5" style="color: #e5652e;"></i>';
const css = '<i class="fa-brands fa-css3-alt" style="color: #1f99e5;"></i>';
const js = '<i class="fa-brands fa-js" style="color: #dbdb0a;"></i>';
const bootstrap =
  '<i class="fa-brands fa-bootstrap" style="color: #9d19cc;"></i>';

const createIcons = (htmlContent, animationDuration) => {
  const icon = document.createElement("i");
  icon.classList.add("rain_icon");
  icon.innerHTML = htmlContent;
  icon.style.left = Math.random() * window.innerWidth + "px";
  icon.style.animationDuration = animationDuration;
  icon.style.opacity = Math.random();
  rain.append(icon);

  setTimeout(() => {
    icon.remove();
  }, 8000);
};

const raining = () => {
  createIcons(html, `${Math.random() * 6 + 3}s`);
  createIcons(css, `${Math.random() * 6 + 3}s`);
  createIcons(js, `${Math.random() * 6 + 3}s`);
  createIcons(bootstrap, `${Math.random() * 5 + 2}s`);
};

setInterval(raining, 100);
