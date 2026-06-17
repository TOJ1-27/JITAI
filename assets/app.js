const siteConfig = {
  // TODO: Replace with confirmed Jitai media assets before launch.
  heroVideoMp4: "assets/jitai-hero-video.mp4",
  heroVideoWebm: "assets/jitai-hero-video.webm",
  heroPoster: "assets/jitai-hero-poster.svg",
  heroTitle: "Custom Hydraulic Cylinders Built for Demanding Equipment",
  heroDescription:
    "Drawing-based customization, engineering communication, production manufacturing and inspection planning for hydraulic cylinder projects.",
  quoteEndpoint: "",
  quoteNotificationEmail: "",
};

const socialLinks = [
  { name: "LinkedIn", url: "", icon: "in" },
  { name: "Facebook", url: "", icon: "f" },
  { name: "YouTube", url: "", icon: "▶" },
  { name: "Instagram", url: "", icon: "◎" },
  { name: "TikTok", url: "", icon: "♪" },
  { name: "X", url: "", icon: "X" },
  { name: "WhatsApp", url: "", icon: "☎" },
];

const translations = {
  zh: {
    nav_home: "首页",
    nav_products: "产品中心",
    nav_about: "关于我们",
    nav_contact: "联系询价",
    nav_quote: "提交询价",
    hero_note: "JITAI HYDRAULIC",
    hero_title: "面向严苛设备工况的定制液压缸",
    hero_lead: "支持按图定制、工程沟通、生产制造与检测规划，为液压缸项目提供清晰的询价和技术对接入口。",
    hero_primary: "发送图纸",
    hero_secondary: "查看产品",
    products_title: "产品中心",
    products_intro: "浏览液压缸产品类别，并可提交图纸、样品或设备工况需求以便项目评估。",
    about_title: "关于我们",
    about_intro: "关于我们栏目集中承接企业介绍、生产能力、出口业务、质量与服务，帮助国内客户和海外采购客户快速判断供应能力。",
    about_subtitle: "正式工业官网气质，兼顾出口询盘转化",
    about_body: "山东吉泰机械有限公司官网以液压机械制造企业的信息结构为基础，突出产品类型、生产制造、质量检测、出口配套和售后服务。后续补充真实车间、设备、证书和案例资料后，可进一步增强信任感。",
    capability_production_title: "生产能力",
    capability_production_text: "预留车间、加工、装配、试压、包装发货图片位。",
    capability_export_title: "出口业务",
    capability_export_text: "支持海外 OEM 询价、国家地区、WhatsApp、英文需求沟通。",
    capability_quality_title: "质量与服务",
    capability_quality_text: "突出检测流程、质量体系、选型支持、备件与售后响应。",
    process_1_title: "社媒点击进入官网",
    process_1_text: "Facebook、TikTok 或搜索流量进入首页，首屏直接看到液压产品和询价入口。",
    process_2_title: "浏览产品与制造实力",
    process_2_text: "客户按产品类型浏览，再通过关于我们了解生产能力、出口业务和质量服务。",
    process_3_title: "提交询价并跟进",
    process_3_text: "表单收集产品类型、国家地区、联系方式、规格参数、数量和交货时间。",
    footer_products: "液压油缸 · 伸缩油缸 · 液压系统 · 电动缸 · 液压动力单元 · 液压配件",
  },
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About Us",
    nav_contact: "Contact & Inquiry",
    nav_quote: "Send Inquiry",
    hero_note: "JITAI HYDRAULIC",
    hero_title: siteConfig.heroTitle,
    hero_lead: siteConfig.heroDescription,
    hero_primary: "Send Your Drawing",
    hero_secondary: "Explore Our Products",
    products_title: "Products",
    products_intro: "Explore hydraulic cylinder categories and send drawings, samples or equipment requirements for project review.",
    about_title: "About Us",
    about_intro: "The About section combines company profile, production capacity, export business, quality control, and service support for quick supplier evaluation.",
    about_subtitle: "A formal industrial website built for export inquiries",
    about_body: "This website follows the information structure of hydraulic machinery manufacturers, highlighting product types, manufacturing, quality inspection, export support, and after-sales service. Real workshop, equipment, certificate, and case materials can be added later to strengthen trust.",
    capability_production_title: "Production Capacity",
    capability_production_text: "Reserved areas for workshop, machining, assembly, pressure testing, packaging, and shipment images.",
    capability_export_title: "Export Business",
    capability_export_text: "Supports overseas OEM inquiries, countries/regions, WhatsApp, and English communication.",
    capability_quality_title: "Quality & Service",
    capability_quality_text: "Highlights inspection flow, quality system, product selection support, spare parts, and after-sales response.",
    process_1_title: "Social Traffic Lands on the Site",
    process_1_text: "Visitors from Facebook, TikTok, or search see hydraulic products and inquiry entries in the first screen.",
    process_2_title: "Review Products and Manufacturing Strength",
    process_2_text: "Customers browse by product type, then review production capacity, export business, and quality service in About Us.",
    process_3_title: "Submit Inquiry and Follow Up",
    process_3_text: "Forms collect product type, country/region, contact details, specifications, quantity, and delivery schedule.",
    footer_products: "Hydraulic Cylinders · Telescopic Cylinders · Hydraulic Systems · Electric Cylinders · Hydraulic Power Units · Hydraulic Components",
  },
};

const products = [
  {
    name: { zh: "液压油缸", en: "Hydraulic Cylinders" },
    english: "Hydraulic Cylinders",
    description: {
      zh: "适用于工程机械、车辆装备、农业设备等液压执行场景，支持参数定制。",
      en: "For construction machinery, vehicle equipment, agricultural machinery, and other hydraulic actuation scenarios. Custom parameters supported.",
    },
    tags: { zh: ["OEM", "定制行程", "批量订单"], en: ["OEM", "Custom Stroke", "Batch Orders"] },
  },
  {
    name: { zh: "伸缩油缸", en: "Telescopic Cylinders" },
    english: "Telescopic Cylinders",
    description: {
      zh: "面向自卸、举升、拖车等设备需求，预留多级油缸型号与参数扩展。",
      en: "For dump, lifting, trailer, and similar equipment needs. Multi-stage cylinder models and parameters can be added later.",
    },
    tags: { zh: ["多级结构", "举升设备", "出口配套"], en: ["Multi-stage", "Lifting Equipment", "Export Support"] },
  },
  {
    name: { zh: "液压系统", en: "Hydraulic Systems" },
    english: "Hydraulic Systems",
    description: {
      zh: "用于成套设备配套，可承接液压站、控制单元与定制系统方案沟通。",
      en: "For complete equipment integration, including hydraulic stations, control units, and custom system solutions.",
    },
    tags: { zh: ["系统集成", "液压站", "技术选型"], en: ["System Integration", "Hydraulic Station", "Technical Selection"] },
  },
];

const cylinderCategories = [
  ["Welded Hydraulic Cylinders", "For compact equipment layouts and welded body cylinder applications."],
  ["Telescopic Hydraulic Cylinders", "For lifting, dump and long-stroke applications where space is limited."],
  ["Tie-Rod Hydraulic Cylinders", "For serviceable cylinder structures used in industrial equipment."],
  ["Heavy-Duty Hydraulic Cylinders", "For demanding equipment where load, environment and duty cycle need review."],
  ["Agricultural Hydraulic Cylinders", "For farm machinery, implements and utility equipment."],
  ["Construction Machinery Cylinders", "For construction equipment actions such as lifting, steering and attachment movement."],
  ["Mining Equipment Cylinders", "For harsh working conditions where sealing and durability are key concerns."],
  ["Custom OEM Cylinders", "For drawing-based OEM projects, replacement cylinders and application-specific requirements."],
].map(([name, description]) => ({
  name,
  description,
  image: "assets/product-placeholder.svg",
}));

const cylinderFeatures = [
  {
    id: "base-mount",
    title: "Base Mount",
    description: "The base mount connects the cylinder to the equipment frame and helps transfer load into the structure.",
    image: "assets/cylinder-components.svg",
    bullets: ["Mounting style selected around equipment layout", "Geometry should match load direction and stroke path", "Designed for maintainable installation when possible"],
    options: ["Clevis, lug, flange or project-specific mounting", "Dimensions confirmed by drawings or samples"],
  },
  {
    id: "head-gland",
    title: "Head / Gland",
    description: "The head or gland supports the rod area and creates a service point for sealing and guidance.",
    image: "assets/cylinder-components.svg",
    bullets: ["Supports rod guidance and sealing layout", "Can be designed for service access", "Configuration depends on cylinder structure"],
    options: ["Threaded, bolted or retained structures to be confirmed"],
  },
  {
    id: "piston",
    title: "Piston",
    description: "The piston separates pressure chambers and transfers hydraulic force into cylinder movement.",
    image: "assets/cylinder-components.svg",
    bullets: ["Seal selection depends on pressure and movement requirements", "Guidance surfaces should support stable motion", "Design reviewed against application duty cycle"],
    options: ["Seal and wear ring arrangements confirmed per project"],
  },
  {
    id: "piston-rod",
    title: "Piston Rod",
    description: "The piston rod transmits force to the equipment and is a key area for surface protection and alignment.",
    image: "assets/cylinder-components.svg",
    bullets: ["Rod dimensions based on load and stroke requirements", "Surface treatment selected after project review", "Alignment and mounting conditions should be confirmed"],
    options: ["Diameter, end machining and surface treatment to be specified"],
  },
  {
    id: "rod-end-mount",
    title: "Rod-End Mount",
    description: "The rod-end mount connects cylinder movement to the machine linkage or attachment.",
    image: "assets/cylinder-components.svg",
    bullets: ["Connection geometry should match the equipment linkage", "Can be adapted to replacement or OEM drawings", "Maintenance clearance should be considered"],
    options: ["Eye, clevis, threaded or custom end structures"],
  },
  {
    id: "tube-barrel",
    title: "Cylinder Tube / Barrel",
    description: "The tube or barrel forms the main pressure body of the hydraulic cylinder.",
    image: "assets/cylinder-components.svg",
    bullets: ["Internal finish and geometry affect sealing performance", "Wall and structure reviewed against working conditions", "Length and ports configured around installation space"],
    options: ["Tube dimensions and process details confirmed by technical review"],
  },
  {
    id: "end-cap",
    title: "End Cap",
    description: "The end cap closes the cylinder body and can integrate mounting or port details.",
    image: "assets/cylinder-components.svg",
    bullets: ["End structure selected by cylinder design", "Can support ports or mounting features", "Serviceability depends on project requirements"],
    options: ["Welded, bolted or custom structures"],
  },
  {
    id: "hydraulic-ports",
    title: "Hydraulic Ports",
    description: "Hydraulic ports connect the cylinder to hose routing and control circuits.",
    image: "assets/cylinder-components.svg",
    bullets: ["Port position should match equipment routing", "Thread and connection type must be confirmed", "Port protection can be considered for harsh environments"],
    options: ["Thread type, angle and location based on drawings"],
  },
  {
    id: "sealing-system",
    title: "Sealing System",
    description: "The sealing system helps control leakage, contamination and movement stability.",
    image: "assets/cylinder-components.svg",
    bullets: ["Seal layout depends on pressure, speed and environment", "Wipers help reduce contamination ingress", "Maintenance expectations should be discussed early"],
    options: ["Seal type and material confirmed by application requirements"],
  },
  {
    id: "surface-treatment",
    title: "Surface Treatment",
    description: "Surface treatment supports corrosion resistance, wear behavior and service life expectations.",
    image: "assets/cylinder-components.svg",
    bullets: ["Treatment selected around environment and duty cycle", "No coating thickness is assumed without confirmation", "Project-specific requirements should be documented"],
    options: ["Painting, plating or other treatments to be confirmed"],
  },
];

const cylinderTypes = [
  {
    title: "Single-Acting Hydraulic Cylinders",
    text: "Single-acting cylinders use hydraulic pressure in one direction and external force or gravity for return. They are often considered for lifting or simple motion where return force is available.",
  },
  {
    title: "Double-Acting Hydraulic Cylinders",
    text: "Double-acting cylinders use hydraulic power for extension and retraction. They are suitable when controlled movement is required in both directions.",
  },
  {
    title: "Heavy-Duty Hydraulic Cylinders",
    text: "Heavy-duty cylinders should be reviewed around load, mounting, sealing, environment and duty cycle. Drawings and working conditions are important for evaluation.",
  },
];

const manufacturingCapabilities = [
  {
    title: "Engineering and Custom Design",
    text: "Jitai can review drawings, samples and equipment requirements to clarify cylinder structure, mounting, stroke and connection needs before production planning.",
  },
  {
    title: "Precision Manufacturing",
    text: "This section is reserved for verified machining, welding, assembly and process photos. Replace the placeholder once factory images are confirmed.",
  },
  {
    title: "Inspection and Pressure Testing",
    text: "This section is reserved for inspection and pressure testing information. Add confirmed process images and quality documents before public launch.",
  },
];

let currentLanguage = localStorage.getItem("jitaiLanguage") || "zh";

function renderProducts() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  grid.innerHTML = products
    .map((product, index) => {
      const tags = product.tags[currentLanguage].map((tag) => `<span>${tag}</span>`).join("");
      return `
        <article class="product-card">
          <img class="product-image" src="assets/product-placeholder.svg" alt="${product.english} product placeholder">
          <div class="product-body">
            <p>${product.english}</p>
            <h3>${product.name[currentLanguage]}</h3>
            <span>${product.description[currentLanguage]}</span>
          </div>
          <div class="product-tags">${tags}</div>
          <a href="#rfq">${currentLanguage === "zh" ? "询价" : "Inquiry"}</a>
        </article>
      `;
    })
    .join("");
}

function renderCylinderCategories() {
  const grid = document.querySelector("[data-category-grid]");
  if (!grid) return;

  grid.innerHTML = cylinderCategories
    .map((category) => `
      <article class="category-card">
        <img src="${category.image}" alt="${category.name}">
        <div>
          <h3>${category.name}</h3>
          <p>${category.description}</p>
          <a href="#rfq">View Details</a>
        </div>
      </article>
    `)
    .join("");
}

function renderFeatureSections() {
  const links = document.querySelector("[data-component-links]");
  const list = document.querySelector("[data-feature-list]");

  if (links) {
    links.innerHTML = cylinderFeatures
      .map((feature) => `<a href="#${feature.id}">${feature.title}</a>`)
      .join("");
  }

  if (list) {
    list.innerHTML = cylinderFeatures
      .map((feature, index) => `
        <article class="feature-section ${index % 2 ? "is-reversed" : ""}" id="${feature.id}">
          <img src="${feature.image}" alt="${feature.title} illustration">
          <div>
            <span>Custom Option</span>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
            <ul>${feature.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
            ${feature.options ? `<div class="option-list">${feature.options.map((item) => `<strong>${item}</strong>`).join("")}</div>` : ""}
            <p class="customer-value">Customer value: reliable sealing, easier maintenance and fit-for-purpose design after project review.</p>
          </div>
        </article>
      `)
      .join("");
  }
}

function renderCylinderTypes() {
  const grid = document.querySelector("[data-type-grid]");
  if (!grid) return;

  grid.innerHTML = cylinderTypes
    .map((type) => `
      <article class="type-card">
        <h3>${type.title}</h3>
        <p>${type.text}</p>
        <a href="#rfq">Discuss This Type</a>
      </article>
    `)
    .join("");
}

function renderManufacturingCapabilities() {
  const grid = document.querySelector("[data-capability-grid]");
  if (!grid) return;

  grid.innerHTML = manufacturingCapabilities
    .map((capability) => `
      <article class="manufacturing-card">
        <img src="assets/process-placeholder.svg" alt="${capability.title} placeholder">
        <div>
          <h3>${capability.title}</h3>
          <p>${capability.text}</p>
          <a href="#about">Learn More</a>
        </div>
      </article>
    `)
    .join("");
}

function renderSocialLinks() {
  const wrapper = document.querySelector("[data-social-links]");
  const empty = document.querySelector("[data-social-empty]");
  if (!wrapper) return;

  const confirmedLinks = socialLinks.filter((link) => link.url);
  wrapper.innerHTML = confirmedLinks
    .map((link) => `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="Follow Jitai Hydraulic on ${link.name}">
        <span>${link.icon}</span>
        ${link.name}
      </a>
    `)
    .join("");

  if (empty) {
    empty.hidden = confirmedLinks.length > 0;
  }
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("jitaiLanguage", language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.textContent = language === "zh" ? "EN" : "中文";
    button.setAttribute("aria-pressed", language === "en" ? "true" : "false");
  });

  renderProducts();
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
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
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
  });

  if (playButton) {
    playButton.addEventListener("click", () => {
      if (video.paused) {
        video.play().catch(() => {
          video.dataset.failed = "true";
        });
      } else {
        video.pause();
      }
      playButton.textContent = video.paused ? "Play" : "Pause";
      playButton.setAttribute("aria-label", video.paused ? "Play background video" : "Pause background video");
    });
  }

  if (muteButton) {
    muteButton.addEventListener("click", () => {
      video.muted = !video.muted;
      muteButton.textContent = video.muted ? "Muted" : "Sound On";
      muteButton.setAttribute("aria-label", video.muted ? "Unmute background video" : "Mute background video");
    });
  }
}

function validateFile(file) {
  if (!file) return "";
  const maxSize = 10 * 1024 * 1024;
  const allowed = [".pdf", ".dwg", ".dxf", ".step", ".stp", ".jpg", ".jpeg", ".png", ".zip"];
  const name = file.name.toLowerCase();

  if (!allowed.some((extension) => name.endsWith(extension))) {
    return "Please upload PDF, DWG, DXF, STEP/STP, JPG, PNG or ZIP files only.";
  }

  if (file.size > maxSize) {
    return "File size must be 10 MB or smaller.";
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

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.dataset.submitting === "true") return;

    const submitButton = form.querySelector("button[type='submit']");
    const fileInput = form.querySelector("input[type='file']");
    const honeypot = form.querySelector(".hp-field");
    const fileError = validateFile(fileInput.files[0]);

    status.classList.remove("is-success", "is-error");

    if (honeypot && honeypot.value) {
      status.textContent = "Submission blocked.";
      status.classList.add("is-visible", "is-error");
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Please complete the required fields and confirm privacy consent.";
      status.classList.add("is-visible", "is-error");
      return;
    }

    if (fileError) {
      status.textContent = fileError;
      status.classList.add("is-visible", "is-error");
      return;
    }

    if (!siteConfig.quoteEndpoint) {
      status.textContent = "RFQ endpoint is not configured yet. Your inquiry was not sent.";
      status.classList.add("is-visible", "is-error");
      return;
    }

    form.dataset.submitting = "true";
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
      const response = await fetch(siteConfig.quoteEndpoint, {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Request failed");

      status.textContent = "RFQ submitted successfully. We will review your project information.";
      status.classList.add("is-visible", "is-success");
      form.reset();
    } catch (error) {
      status.textContent = "Submission failed. Please try again or contact us by email.";
      status.classList.add("is-visible", "is-error");
    } finally {
      form.dataset.submitting = "false";
      submitButton.disabled = false;
      submitButton.textContent = "Submit RFQ";
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
setLanguage(currentLanguage);
renderCylinderCategories();
renderFeatureSections();
renderCylinderTypes();
renderManufacturingCapabilities();
renderSocialLinks();
bindHeaderState();
bindHeroVideo();
bindRfqForm();
setCurrentYear();
