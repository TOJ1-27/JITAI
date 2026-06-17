const siteConfig = {
  // TODO: Replace with confirmed Jitai media assets before launch.
  heroVideoMp4: "assets/jitai-hero-video.mp4",
  heroVideoWebm: "assets/jitai-hero-video.webm",
  heroPoster: "assets/jitai-hero-poster.svg",
  quoteEndpoint: "",
  quoteNotificationEmail: "",
};

const socialLinks = [
  { key: "youtube", name: "YouTube", url: "" },
  { key: "facebook", name: "Facebook", url: "" },
  { key: "x", name: "X", url: "" },
  { key: "linkedin", name: "LinkedIn", url: "" },
  { key: "tiktok", name: "TikTok", url: "" },
  { key: "instagram", name: "Instagram", url: "" },
];

const socialIcons = {
  youtube:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12s0-3.1-.4-4.6c-.2-.8-.9-1.5-1.7-1.7C18.4 5.3 12 5.3 12 5.3s-6.4 0-7.9.4c-.8.2-1.5.9-1.7 1.7C2 8.9 2 12 2 12s0 3.1.4 4.6c.2.8.9 1.5 1.7 1.7 1.5.4 7.9.4 7.9.4s6.4 0 7.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.6.4-4.6Zm-12.1 3.1V8.9l5.5 3.1-5.5 3.1Z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.2V6.6c0-.8.5-1 1.1-1h2.1V2.1c-.4-.1-1.7-.1-3.1-.1-3.1 0-5.2 1.9-5.2 5.3v.9H5.5V12h3.4v10H13V12h3.4l.6-3.8h-3Z"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 10.5 21.1 2h-1.8l-6.4 7.3L7.8 2H2l7.8 11.2L2 22h1.8l6.8-7.7L16 22h5.8l-8.1-11.5Zm-2.4 2.7-.8-1.1L4.2 3.3H7l5 7 .8 1.1 6.6 9.3h-2.8l-5.3-7.5Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 8.7H2.8V22h3.8V8.7ZM4.7 2C3.5 2 2.5 3 2.5 4.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2S5.9 2 4.7 2Zm16.8 12.4c0-3.6-1.9-5.9-5-5.9-2.2 0-3.2 1.2-3.8 2.1V8.7H9V22h3.8v-6.6c0-1.8.3-3.5 2.5-3.5s2.2 2 2.2 3.6V22h3.8v-7.6Z"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.8 2c.3 2.4 1.6 3.8 4 4v3.8c-1.5.1-2.8-.4-4-1.2v6.7c0 3.4-2.2 6.7-6.7 6.7-3.4 0-6.2-2.4-6.6-5.6-.4-3.8 2.6-7 6.4-7 .5 0 .9.1 1.4.2v3.9c-.4-.2-.8-.3-1.4-.3-1.6 0-2.9 1.3-2.8 3 .1 1.5 1.3 2.6 2.8 2.6 1.8 0 3-1 3-3.2V2h3.9Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6C19.7 2 22 4.3 22 7.2v9.6c0 2.9-2.3 5.2-5.2 5.2H7.2C4.3 22 2 19.7 2 16.8V7.2C2 4.3 4.3 2 7.2 2Zm0 2C5.4 4 4 5.4 4 7.2v9.6C4 18.6 5.4 20 7.2 20h9.6c1.8 0 3.2-1.4 3.2-3.2V7.2C20 5.4 18.6 4 16.8 4H7.2Zm9.3 2.5a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z"/></svg>',
};

const translations = {
  zh: {
    top_company: "山东吉泰机械有限公司",
    top_scope: "液压油缸 · OEM 定制 · 出口询价",
    brand_home_label: "山东吉泰机械有限公司首页",
    brand_mark: "吉泰",
    company_name_zh: "山东吉泰机械有限公司",
    company_name_en: "液压油缸制造商",
    main_nav_label: "主导航",
    nav_home: "首页",
    nav_products: "产品中心",
    nav_about: "关于我们",
    nav_contact: "联系询价",
    nav_quote: "提交询价",
    lang_toggle: "EN",
    hero_label: "吉泰液压视频介绍",
    video_controls_label: "视频控制",
    video_pause: "暂停",
    video_play: "播放",
    video_muted: "静音",
    video_sound_on: "有声",
    video_pause_label: "暂停背景视频",
    video_play_label: "播放背景视频",
    video_muted_label: "打开背景视频声音",
    video_sound_label: "关闭背景视频声音",
    hero_note: "吉泰液压",
    hero_title: "面向工业设备的液压油缸与定制液压方案",
    hero_lead: "支持按图定制、工程沟通、生产制造与检测规划，为国内客户和海外采购商提供清晰的询价入口。",
    hero_primary: "发送图纸询价",
    hero_secondary: "查看产品类型",
    scroll_label: "向下查看产品",
    scroll_text: "查看产品",
    products_eyebrow: "产品",
    products_title: "产品中心",
    products_intro: "以产品类型作为第一入口，后续可替换为真实产品图片、型号参数和技术资料。",
    product_strip_label: "产品类型入口",
    product_inquiry: "询价",
    components_eyebrow: "组件",
    components_title: "关键部件与定制设计选项",
    components_intro: "围绕安装方式、缸筒、活塞杆、密封、油口和表面处理进行项目确认，让询价沟通更高效。",
    components_image_alt: "液压油缸关键部件示意图",
    component_list_label: "关键部件列表",
    about_eyebrow: "关于吉泰",
    about_title: "关于我们",
    about_intro: "关于我们栏目集中承接企业介绍、生产能力、出口业务、质量与服务，帮助国内客户和海外采购商快速判断供应能力。",
    about_subtitle: "正式工业官网气质，兼顾出口询盘转化",
    about_body: "山东吉泰机械有限公司官网以液压机械制造企业的信息结构为基础，突出产品类型、生产制造、质量检测、出口配套和售后服务。后续补充真实车间、设备、证书和案例资料后，可进一步增强信任感。",
    capability_production_title: "生产能力",
    capability_production_text: "预留车间、加工、装配、试压、包装发货图片位。",
    capability_export_title: "出口业务",
    capability_export_text: "支持海外 OEM 询价、国家地区、WhatsApp、英文需求沟通。",
    capability_quality_title: "质量与服务",
    capability_quality_text: "突出检测流程、质量体系、选型支持、备件与售后响应。",
    process_panel_label: "从社媒到询价的转化路径",
    process_1_title: "社媒点击进入官网",
    process_1_text: "Facebook、TikTok 或搜索流量进入首页，首屏直接看到液压产品和询价入口。",
    process_2_title: "浏览产品与供应能力",
    process_2_text: "客户按产品类型快速浏览，再通过关于我们了解生产能力、出口业务和质量服务。",
    process_3_title: "提交询价并跟进",
    process_3_text: "表单收集产品类型、国家地区、联系方式、规格参数、数量和交货时间。",
    rfq_eyebrow: "询价",
    rfq_title: "告诉我们您的液压项目需求",
    rfq_intro: "发送图纸、规格或应用需求。我们会根据您提供的信息进行项目评估，并与您确认下一步沟通。",
    contact_email: "邮箱：sales@example.com",
    contact_tel: "电话：+86 000 0000 0000",
    contact_whatsapp: "WhatsApp：待补充",
    field_full_name: "姓名 *",
    field_company: "公司名称",
    field_email: "商务邮箱 *",
    field_phone: "电话 / WhatsApp",
    field_country: "国家 / 地区 *",
    field_product_type: "产品类型",
    select_placeholder: "请选择",
    field_application: "应用设备",
    field_bore: "缸径",
    field_rod: "杆径",
    field_stroke: "行程",
    field_pressure: "工作压力",
    field_quantity: "需求数量",
    field_delivery: "目标交期",
    field_details: "项目详情 *",
    field_file: "图纸 / 文件上传",
    field_file_help: "支持：PDF、DWG、DXF、STEP/STP、JPG、PNG、ZIP。最大 10 MB。",
    field_privacy: "我同意将所填写信息用于报价与项目沟通。",
    placeholder_confirm: "例如：待确认",
    placeholder_details: "请描述图纸、设备工况、数量、材料、替换需求或其他技术要求。",
    rfq_endpoint_note: "询价接口尚未配置。正式收集询盘前需要添加 NEXT_PUBLIC_QUOTE_ENDPOINT。",
    submit_rfq: "提交询价",
    submit_loading: "提交中...",
    support_eyebrow: "客户支持",
    social_eyebrow: "社媒",
    social_title: "关注吉泰液压",
    social_intro: "社媒账号确认后，可用于展示产品视频、加工过程、检测记录和出口项目动态。",
    social_links_label: "社媒账号入口",
    social_empty: "官方社媒链接尚未配置，图标已预留为禁用状态。",
    social_disabled_label: "官方账号待更新",
    footer_products: "液压油缸 · 伸缩油缸 · 液压系统 · 电动缸 · 液压动力单元 · 液压配件",
    footer_copyright_prefix: "版权所有",
    footer_company_legal: "山东吉泰机械有限公司",
    error_blocked: "提交已被拦截。",
    error_required: "请填写必填项并确认隐私授权。",
    error_file_type: "请上传 PDF、DWG、DXF、STEP/STP、JPG、PNG 或 ZIP 文件。",
    error_file_size: "文件大小不能超过 10 MB。",
    error_endpoint: "询价接口尚未配置，您的询价尚未发送。",
    success_rfq: "询价已提交。我们会查看您的项目信息并尽快联系。",
    error_submit: "提交失败。请稍后重试，或通过邮箱联系我们。",
  },
  en: {
    top_company: "Shandong Jitai Machinery Co., Ltd.",
    top_scope: "Hydraulic Cylinders · OEM Solutions · Export Inquiry",
    brand_home_label: "Shandong Jitai Machinery Co., Ltd. home",
    brand_mark: "Jitai",
    company_name_zh: "Shandong Jitai Machinery Co., Ltd.",
    company_name_en: "Hydraulic Cylinder Manufacturer",
    main_nav_label: "Main navigation",
    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About Us",
    nav_contact: "Contact & Inquiry",
    nav_quote: "Send Inquiry",
    lang_toggle: "中文",
    hero_label: "Jitai Hydraulic video introduction",
    video_controls_label: "Video controls",
    video_pause: "Pause",
    video_play: "Play",
    video_muted: "Muted",
    video_sound_on: "Sound On",
    video_pause_label: "Pause background video",
    video_play_label: "Play background video",
    video_muted_label: "Unmute background video",
    video_sound_label: "Mute background video",
    hero_note: "JITAI HYDRAULIC",
    hero_title: "Hydraulic Cylinders and Custom Hydraulic Solutions for Industrial Equipment",
    hero_lead: "Drawing-based customization, engineering communication, manufacturing and inspection planning for domestic customers and overseas buyers.",
    hero_primary: "Send Your Drawing",
    hero_secondary: "View Product Types",
    scroll_label: "Scroll to products",
    scroll_text: "View Products",
    products_eyebrow: "Products",
    products_title: "Products",
    products_intro: "Product types are used as the first entry. Real product photos, model data and technical sheets can be added later.",
    product_strip_label: "Product type entries",
    product_inquiry: "Inquiry",
    components_eyebrow: "Components",
    components_title: "Key Components and Custom Design Options",
    components_intro: "Confirm mounting, tube, piston rod, sealing, ports and surface treatment early so quotation communication is more efficient.",
    components_image_alt: "Hydraulic cylinder key component diagram",
    component_list_label: "Key component list",
    about_eyebrow: "About Jitai",
    about_title: "About Us",
    about_intro: "The About section combines company profile, production capacity, export business, quality control and service support for quick supplier evaluation.",
    about_subtitle: "A formal industrial website built for export inquiries",
    about_body: "This website follows the information structure of hydraulic machinery manufacturers, highlighting product types, manufacturing, quality inspection, export support and after-sales service. Real workshop, equipment, certificate and case materials can be added later to strengthen trust.",
    capability_production_title: "Production Capacity",
    capability_production_text: "Reserved areas for workshop, machining, assembly, pressure testing, packaging and shipment images.",
    capability_export_title: "Export Business",
    capability_export_text: "Supports overseas OEM inquiries, countries and regions, WhatsApp and English communication.",
    capability_quality_title: "Quality & Service",
    capability_quality_text: "Highlights inspection flow, quality system, product selection support, spare parts and after-sales response.",
    process_panel_label: "Conversion path from social traffic to inquiry",
    process_1_title: "Social Traffic Lands on the Site",
    process_1_text: "Visitors from Facebook, TikTok or search see hydraulic products and inquiry entries in the first screen.",
    process_2_title: "Review Products and Supply Capability",
    process_2_text: "Customers browse by product type, then review production capacity, export business and quality service in About Us.",
    process_3_title: "Submit Inquiry and Follow Up",
    process_3_text: "Forms collect product type, country or region, contact details, specifications, quantity and delivery schedule.",
    rfq_eyebrow: "RFQ",
    rfq_title: "Tell Us About Your Hydraulic Project",
    rfq_intro: "Send drawings, specifications or application requirements. We will review the information and confirm the next communication steps.",
    contact_email: "Email: sales@example.com",
    contact_tel: "Tel: +86 000 0000 0000",
    contact_whatsapp: "WhatsApp: To be confirmed",
    field_full_name: "Full Name *",
    field_company: "Company Name",
    field_email: "Business Email *",
    field_phone: "Phone / WhatsApp",
    field_country: "Country / Region *",
    field_product_type: "Product Type",
    select_placeholder: "Please select",
    field_application: "Application / Equipment",
    field_bore: "Bore Diameter",
    field_rod: "Rod Diameter",
    field_stroke: "Stroke",
    field_pressure: "Working Pressure",
    field_quantity: "Required Quantity",
    field_delivery: "Target Delivery Date",
    field_details: "Project Details *",
    field_file: "Drawing / File Upload",
    field_file_help: "Supported: PDF, DWG, DXF, STEP/STP, JPG, PNG, ZIP. Max size: 10 MB.",
    field_privacy: "I agree to the processing of my information for quotation and project communication.",
    placeholder_confirm: "e.g. to be confirmed",
    placeholder_details: "Describe drawings, equipment, working conditions, quantity, materials, replacement needs or other technical requirements.",
    rfq_endpoint_note: "RFQ endpoint is not configured yet. Add NEXT_PUBLIC_QUOTE_ENDPOINT before collecting live inquiries.",
    submit_rfq: "Submit RFQ",
    submit_loading: "Submitting...",
    support_eyebrow: "Customer Support",
    social_eyebrow: "Social",
    social_title: "Follow Jitai Hydraulic",
    social_intro: "Confirmed social accounts can show product videos, machining processes, inspection records and export project updates.",
    social_links_label: "Social media entries",
    social_empty: "Official social links are not configured yet. Icons are reserved in a disabled state.",
    social_disabled_label: "Official account coming soon",
    footer_products: "Hydraulic Cylinders · Telescopic Cylinders · Hydraulic Systems · Electric Cylinders · Hydraulic Power Units · Hydraulic Components",
    footer_copyright_prefix: "All rights reserved",
    footer_company_legal: "Shandong Jitai Machinery Co., Ltd.",
    error_blocked: "Submission blocked.",
    error_required: "Please complete the required fields and confirm privacy consent.",
    error_file_type: "Please upload PDF, DWG, DXF, STEP/STP, JPG, PNG or ZIP files only.",
    error_file_size: "File size must be 10 MB or smaller.",
    error_endpoint: "RFQ endpoint is not configured yet. Your inquiry was not sent.",
    success_rfq: "RFQ submitted successfully. We will review your project information.",
    error_submit: "Submission failed. Please try again or contact us by email.",
  },
};

const products = [
  {
    id: "hydraulic-cylinders",
    name: { zh: "液压油缸", en: "Hydraulic Cylinders" },
    image: "assets/product-hydraulic-cylinder.svg",
    href: "#rfq",
  },
  {
    id: "telescopic-cylinders",
    name: { zh: "伸缩油缸", en: "Telescopic Cylinders" },
    image: "assets/product-telescopic-cylinder.svg",
    href: "#rfq",
  },
  {
    id: "hydraulic-systems",
    name: { zh: "液压系统", en: "Hydraulic Systems" },
    image: "assets/product-hydraulic-system.svg",
    href: "#rfq",
  },
  {
    id: "electric-cylinders",
    name: { zh: "电动缸", en: "Electric Cylinders" },
    image: "assets/product-electric-cylinder.svg",
    href: "#rfq",
  },
  {
    id: "power-units",
    name: { zh: "液压动力单元", en: "Hydraulic Power Units" },
    image: "assets/product-power-unit.svg",
    href: "#rfq",
  },
  {
    id: "components",
    name: { zh: "液压配件", en: "Hydraulic Components" },
    image: "assets/product-components.svg",
    href: "#components",
  },
];

const componentOptions = [
  { zh: "底部安装", en: "Base Mount" },
  { zh: "缸头 / 导向套", en: "Head / Gland" },
  { zh: "活塞", en: "Piston" },
  { zh: "活塞杆", en: "Piston Rod" },
  { zh: "杆端安装", en: "Rod-End Mount" },
  { zh: "缸筒结构", en: "Cylinder Tube / Barrel" },
  { zh: "端盖", en: "End Cap" },
  { zh: "液压油口", en: "Hydraulic Ports" },
  { zh: "密封系统", en: "Sealing System" },
  { zh: "表面处理", en: "Surface Treatment" },
];

let currentLanguage = localStorage.getItem("jitaiLanguage") || "en";

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function renderProducts() {
  const strip = document.querySelector("[data-product-strip]");
  if (!strip) return;

  strip.innerHTML = products
    .map((product) => `
      <a class="product-entry" id="${product.id}" href="${product.href}">
        <img src="${product.image}" alt="${product.name[currentLanguage]}">
        <h3>${product.name[currentLanguage]}</h3>
      </a>
    `)
    .join("");

  renderProductSelect();
}

function renderProductSelect() {
  const select = document.querySelector("[data-product-select]");
  if (!select) return;

  const selectedValue = select.value;
  select.innerHTML = `<option value="">${t("select_placeholder")}</option>${products
    .map((product) => `<option value="${product.id}">${product.name[currentLanguage]}</option>`)
    .join("")}`;
  select.value = selectedValue;
}

function renderComponentOptions() {
  const list = document.querySelector("[data-component-list]");
  if (!list) return;

  list.innerHTML = componentOptions
    .map((item) => `<span>${item[currentLanguage]}</span>`)
    .join("");
}

function renderSocialLinks() {
  const wrapper = document.querySelector("[data-social-links]");
  if (!wrapper) return;

  wrapper.innerHTML = socialLinks
    .map((link) => {
      const icon = socialIcons[link.key] || "";
      if (!link.url) {
        return `
          <button class="social-icon is-disabled" type="button" disabled aria-label="${link.name} ${t("social_disabled_label")}" title="${link.name} - ${t("social_disabled_label")}">
            ${icon}
            <b>${link.name}</b>
          </button>
        `;
      }

      return `
        <a class="social-icon" href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.name}">
          ${icon}
          <b>${link.name}</b>
        </a>
      `;
    })
    .join("");
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("jitaiLanguage", language);
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

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

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", language === "en" ? "true" : "false");
  });

  renderProducts();
  renderComponentOptions();
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
    header.classList.toggle("is-scrolled", window.scrollY > 40);
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
    } catch (error) {
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
bindHeroVideo();
bindRfqForm();
setCurrentYear();
setLanguage(currentLanguage);
