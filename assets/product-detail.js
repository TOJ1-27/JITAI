import {
  customOptionKeys,
  inquiryInfoKeys,
  products,
  socialIcons,
  socialLinks,
  translations,
  withBasePath,
} from "./catalog.js";

const languageStorageKey = "jitaiLanguage";
let currentLanguage = getInitialLanguage();

function getInitialLanguage() {
  const storedLanguage = localStorage.getItem(languageStorageKey);
  return storedLanguage === "en" || storedLanguage === "zh" ? storedLanguage : "zh";
}

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getProductSlug() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("product");
  const fromHash = window.location.hash ? window.location.hash.replace("#", "") : "";
  return fromQuery || fromHash || "";
}

function getCurrentProduct() {
  const slug = getProductSlug();
  return products.find((product) => product.slug === slug);
}

function getAdjacentProducts(product) {
  const currentIndex = products.findIndex((item) => item.slug === product.slug);
  const previous = products[(currentIndex - 1 + products.length) % products.length];
  const next = products[(currentIndex + 1) % products.length];
  return { previous, next };
}

function setTranslatedAttributes() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });
}

function setImage(element, source, alt) {
  if (!element) return;
  element.setAttribute("src", withBasePath(source));
  element.setAttribute("alt", alt);
}

function renderNotFound() {
  document.querySelector("[data-product-title]").textContent = t("product_not_found");
  document.querySelector("[data-product-summary]").textContent = t("product_not_found_text");
  document.querySelector("[data-product-detail]")?.classList.add("is-not-found");
}

function renderThumbnails(product, productName) {
  const wrapper = document.querySelector("[data-product-thumbnails]");
  const mainImage = document.querySelector("[data-product-main-image]");
  if (!wrapper) return;

  const thumbnails = product.thumbnails?.length ? product.thumbnails : [product.image];
  wrapper.innerHTML = thumbnails
    .map(
      (thumbnail, index) => `
        <button class="thumbnail-button${index === 0 ? " is-active" : ""}" type="button" data-thumbnail="${escapeHtml(thumbnail)}">
          <img src="${withBasePath(thumbnail)}" alt="${escapeHtml(`${productName} ${t("product_image_alt")}`)}">
        </button>
      `,
    )
    .join("");

  wrapper.querySelectorAll("[data-thumbnail]").forEach((button) => {
    button.addEventListener("click", () => {
      wrapper.querySelectorAll(".thumbnail-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      setImage(mainImage, button.dataset.thumbnail, `${productName} ${t("product_image_alt")}`);
    });
  });
}

function renderSocialLinks() {
  const wrapper = document.querySelector("[data-social-links]");
  if (!wrapper) return;

  wrapper.innerHTML = socialLinks
    .map((link) => {
      const icon = socialIcons[link.key] || "";
      const label = `${link.name} ${t("social_disabled_label")}`;
      if (!link.url) {
        return `
          <button class="social-icon is-disabled" type="button" disabled aria-label="${escapeHtml(label)}" title="${escapeHtml(t("social_disabled_label"))}">
            ${icon}
            <b>${escapeHtml(link.name)}</b>
          </button>
        `;
      }

      return `
        <a class="social-icon" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(link.name)}">
          ${icon}
          <b>${escapeHtml(link.name)}</b>
        </a>
      `;
    })
    .join("");
}

function renderProductDetail() {
  const product = getCurrentProduct();
  if (!product) {
    renderNotFound();
    renderSocialLinks();
    return;
  }

  const productName = t(product.nameKey);
  const { previous, next } = getAdjacentProducts(product);

  document.title = `${productName} | ${t("site_title")}`;
  document.querySelector("[data-product-title]").textContent = productName;
  document.querySelector("[data-product-summary]").textContent = t(product.summaryKey);
  document.querySelector("[data-product-applications]").textContent = t(product.applicationsKey);
  setImage(
    document.querySelector("[data-product-main-image]"),
    product.image,
    `${productName} ${t("product_image_alt")}`,
  );

  document.querySelector("[data-custom-options]").innerHTML = customOptionKeys
    .map((key) => `<li>${escapeHtml(t(key))}</li>`)
    .join("");

  document.querySelector("[data-inquiry-info]").innerHTML = inquiryInfoKeys
    .map((key) => `<li>${escapeHtml(t(key))}</li>`)
    .join("");

  renderThumbnails(product, productName);
  renderPagerLink("[data-prev-product]", previous, "previous_product");
  renderPagerLink("[data-next-product]", next, "next_product");

  const quoteHref = withBasePath(`index.html?product=${product.slug}#rfq`);
  const backHref = withBasePath("index.html#products");
  document.querySelectorAll("[data-product-rfq]").forEach((link) => {
    link.setAttribute("href", quoteHref);
  });
  document.querySelectorAll("[data-back-products]").forEach((link) => {
    link.setAttribute("href", backHref);
  });
  document.querySelector("[data-share-product]")?.setAttribute("data-share-title", productName);
  renderSocialLinks();
}

function renderPagerLink(selector, product, labelKey) {
  const link = document.querySelector(selector);
  if (!link) return;

  link.setAttribute("href", withBasePath(`product.html?product=${product.slug}`));
  link.querySelector("strong").textContent = t(labelKey);
  link.querySelector("span").textContent = t(product.nameKey);
}

function bindLanguageToggle() {
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(currentLanguage === "zh" ? "en" : "zh");
    });
  });
}

function bindShareButton() {
  const button = document.querySelector("[data-share-product]");
  const status = document.querySelector("[data-share-status]");
  if (!button) return;

  button.addEventListener("click", async () => {
    const productName = button.dataset.shareTitle || document.title;
    try {
      if (navigator.share) {
        await navigator.share({ title: productName, url: window.location.href });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
      if (status) status.textContent = t("share_success");
    } catch {
      if (status) status.textContent = t("share_error");
    }
  });
}

function bindHeaderState() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem(languageStorageKey, language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  setTranslatedAttributes();
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", language === "zh" ? "true" : "false");
  });
  renderProductDetail();
}

function setCurrentYear() {
  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

bindLanguageToggle();
bindShareButton();
bindHeaderState();
setCurrentYear();
setLanguage(currentLanguage);
