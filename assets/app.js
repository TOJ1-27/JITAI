import { products, productCategories, socialIcons, socialLinks, translations, withBasePath } from "./catalog.js";

const siteConfig = {
  quoteEndpoint: "",
  quoteNotificationEmail: "",
};

const languageStorageKey = "jitaiLanguage";
let currentLanguage = getInitialLanguage();
let activeCategoryId = productCategories[0]?.id || "";

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

function setTranslatedAttributes() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });
}

function renderCategoryTabs() {
  const tabs = document.querySelector("[data-category-tabs]");
  const description = document.querySelector("[data-category-description]");
  if (!tabs) return;

  tabs.innerHTML = productCategories
    .map((category) => {
      const isActive = category.id === activeCategoryId;
      return `
        <button
          class="category-tab${isActive ? " is-active" : ""}"
          type="button"
          data-category-id="${category.id}"
          aria-pressed="${isActive ? "true" : "false"}"
        >
          ${escapeHtml(t(category.nameKey))}
        </button>
      `;
    })
    .join("");

  const activeCategory = productCategories.find((category) => category.id === activeCategoryId);
  if (description && activeCategory) {
    description.textContent = t(activeCategory.descriptionKey);
  }

  tabs.querySelectorAll("[data-category-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategoryId = button.dataset.categoryId;
      renderCategoryTabs();
      renderProductCards();
    });
  });
}

function renderProductCards() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  const categoryProducts = products.filter((product) => product.categoryId === activeCategoryId);
  grid.innerHTML = categoryProducts
    .map((product) => {
      const productName = t(product.nameKey);
      return `
        <article class="product-card">
          <a href="${withBasePath(`product.html?product=${product.slug}`)}" class="product-card-link">
            <span class="product-image-frame">
              <img src="${withBasePath(product.image)}" alt="${escapeHtml(productName)}">
            </span>
            <span class="product-card-copy">
              <strong>${escapeHtml(productName)}</strong>
              <span>${escapeHtml(t(product.summaryKey))}</span>
              <b>${escapeHtml(t("view_details"))}</b>
            </span>
          </a>
        </article>
      `;
    })
    .join("");
}

function renderProductSelect() {
  const select = document.querySelector("[data-product-select]");
  if (!select) return;

  const requestedProduct = new URLSearchParams(window.location.search).get("product") || "";
  const selectedValue = select.value || requestedProduct;
  select.innerHTML = `<option value="">${escapeHtml(t("select_placeholder"))}</option>${productCategories
    .map((category) => {
      const options = products
        .filter((product) => product.categoryId === category.id)
        .map((product) => `<option value="${product.slug}">${escapeHtml(t(product.nameKey))}</option>`)
        .join("");
      return `<optgroup label="${escapeHtml(t(category.nameKey))}">${options}</optgroup>`;
    })
    .join("")}`;

  if (products.some((product) => product.slug === selectedValue)) {
    select.value = selectedValue;
    prefillProjectDetails(selectedValue);
  }
}

function prefillProjectDetails(productSlug) {
  const product = products.find((item) => item.slug === productSlug);
  const details = document.querySelector("[data-rfq-form] textarea[name='details']");
  if (!product || !details || details.dataset.prefilled === "true" || details.value.trim()) return;

  details.value = `${t(product.nameKey)} - ${t(product.summaryKey)}`;
  details.dataset.prefilled = "true";
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

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem(languageStorageKey, language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = t("site_title");

  setTranslatedAttributes();
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", language === "zh" ? "true" : "false");
  });

  renderCategoryTabs();
  renderProductCards();
  renderProductSelect();
  renderSocialLinks();
  updateVideoButtonLabels();
}

function bindLanguageToggle() {
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(currentLanguage === "zh" ? "en" : "zh");
    });
  });
}

function getTrafficSource() {
  const params = new URLSearchParams(window.location.search);
  return params.get("utm_source") || params.get("source") || "direct";
}

function bindHeaderState() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 36);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function bindNavState() {
  const navLinks = [...document.querySelectorAll(".main-nav a[href^='#']")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter((section) => section);

  const update = () => {
    const active = sections
      .map((section) => ({ id: section.id, top: Math.abs(section.getBoundingClientRect().top - 110) }))
      .sort((a, b) => a.top - b.top)[0];

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", active ? link.getAttribute("href") === `#${active.id}` : false);
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function updateVideoButtonLabels() {
  const video = document.querySelector("[data-hero-video]");
  const playButton = document.querySelector("[data-video-toggle]");
  const muteButton = document.querySelector("[data-mute-toggle]");
  if (!video) return;

  if (playButton) {
    playButton.textContent = video.paused ? t("video_play") : t("video_pause");
    playButton.setAttribute("aria-label", video.paused ? t("video_play_label") : t("video_pause_label"));
  }

  if (muteButton) {
    muteButton.textContent = video.muted ? t("video_muted") : t("video_sound_on");
    muteButton.setAttribute("aria-label", video.muted ? t("video_muted_label") : t("video_sound_label"));
  }
}

function bindHeroVideo() {
  const video = document.querySelector("[data-hero-video]");
  const playButton = document.querySelector("[data-video-toggle]");
  const muteButton = document.querySelector("[data-mute-toggle]");
  if (!video) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection && navigator.connection.saveData;

  if (reduceMotion || saveData || window.innerWidth < 760) {
    video.removeAttribute("autoplay");
    video.pause();
    video.dataset.paused = "true";
  }

  video.addEventListener("error", () => {
    video.dataset.failed = "true";
    video.pause();
    updateVideoButtonLabels();
  });

  video.addEventListener("play", updateVideoButtonLabels);
  video.addEventListener("pause", updateVideoButtonLabels);

  if (playButton) {
    playButton.addEventListener("click", () => {
      if (video.paused) {
        video.play().catch(() => {
          video.dataset.failed = "true";
        });
      } else {
        video.pause();
      }
      updateVideoButtonLabels();
    });
  }

  if (muteButton) {
    muteButton.addEventListener("click", () => {
      video.muted = !video.muted;
      updateVideoButtonLabels();
    });
  }

  updateVideoButtonLabels();
}

function validateFile(file) {
  if (!file) return "";
  const maxSize = 10 * 1024 * 1024;
  const allowed = [".pdf", ".dwg", ".dxf", ".step", ".stp", ".jpg", ".jpeg", ".png", ".zip"];
  const name = file.name.toLowerCase();

  if (!allowed.some((extension) => name.endsWith(extension))) {
    return t("error_file_type");
  }

  if (file.size > maxSize) {
    return t("error_file_size");
  }

  return "";
}

function bindRfqForm() {
  const form = document.querySelector("[data-rfq-form]");
  if (!form) return;

  const status = form.querySelector("[data-rfq-status]");
  const source = getTrafficSource();
  form.querySelectorAll("[data-source-field]").forEach((field) => {
    field.value = source;
  });

  form.querySelector("[data-product-select]")?.addEventListener("change", (event) => {
    prefillProjectDetails(event.target.value);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.dataset.submitting === "true") return;

    const submitButton = form.querySelector("button[type='submit']");
    const fileInput = form.querySelector("input[type='file']");
    const honeypot = form.querySelector(".hp-field");
    const fileError = validateFile(fileInput.files[0]);

    status.classList.remove("is-success", "is-error");

    if (honeypot && honeypot.value) {
      status.textContent = t("error_blocked");
      status.classList.add("is-visible", "is-error");
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = t("error_required");
      status.classList.add("is-visible", "is-error");
      return;
    }

    if (fileError) {
      status.textContent = fileError;
      status.classList.add("is-visible", "is-error");
      return;
    }

    if (!siteConfig.quoteEndpoint) {
      status.textContent = t("error_endpoint");
      status.classList.add("is-visible", "is-error");
      return;
    }

    form.dataset.submitting = "true";
    submitButton.disabled = true;
    submitButton.textContent = t("submit_loading");

    try {
      const response = await fetch(siteConfig.quoteEndpoint, {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Request failed");

      status.textContent = t("success_rfq");
      status.classList.add("is-visible", "is-success");
      form.reset();
      renderProductSelect();
    } catch {
      status.textContent = t("error_submit");
      status.classList.add("is-visible", "is-error");
    } finally {
      form.dataset.submitting = "false";
      submitButton.disabled = false;
      submitButton.textContent = t("submit_rfq");
    }
  });
}

function setCurrentYear() {
  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

bindLanguageToggle();
bindHeaderState();
bindNavState();
bindHeroVideo();
bindRfqForm();
setCurrentYear();
setLanguage(currentLanguage);
