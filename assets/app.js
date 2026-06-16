const products = [
  {
    name: "液压油缸",
    english: "Hydraulic Cylinders",
    description: "适用于工程机械、车辆装备、农业设备等液压执行场景，支持参数定制。",
    tags: ["OEM", "定制行程", "批量订单"],
  },
  {
    name: "伸缩油缸",
    english: "Telescopic Cylinders",
    description: "面向自卸、举升、拖车等设备需求，预留多级油缸型号与参数扩展。",
    tags: ["多级结构", "举升设备", "出口配套"],
  },
  {
    name: "液压系统",
    english: "Hydraulic Systems",
    description: "用于成套设备配套，可承接液压站、控制单元与定制系统方案沟通。",
    tags: ["系统集成", "液压站", "技术选型"],
  },
  {
    name: "电动缸",
    english: "Electric Cylinders",
    description: "适合直线驱动和自动化升级类需求，后续可补充伺服电动缸产品资料。",
    tags: ["直线执行", "自动化", "低维护"],
  },
  {
    name: "液压动力单元",
    english: "Hydraulic Power Units",
    description: "预留小型泵站、动力包、阀组与控制单元等产品入口。",
    tags: ["泵站", "动力包", "阀组"],
  },
  {
    name: "液压配件",
    english: "Hydraulic Components",
    description: "预留密封件、接头、阀块、油管及相关液压部件内容。",
    tags: ["密封", "接头", "备件"],
  },
];

function renderProducts() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  grid.innerHTML = products
    .map((product, index) => {
      const tags = product.tags.map((tag) => `<span>${tag}</span>`).join("");
      return `
        <article class="product-card">
          <div class="product-media" aria-hidden="true">
            <span class="media-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="media-cylinder"></span>
          </div>
          <div class="product-body">
            <p>${product.english}</p>
            <h3>${product.name}</h3>
            <span>${product.description}</span>
          </div>
          <div class="product-tags">${tags}</div>
          <a href="#contact">询价</a>
        </article>
      `;
    })
    .join("");
}

function getTrafficSource() {
  const params = new URLSearchParams(window.location.search);
  return params.get("utm_source") || params.get("source") || "direct";
}

function bindInquiryForms() {
  const forms = document.querySelectorAll("[data-inquiry-form]");
  const source = getTrafficSource();

  document.querySelectorAll("[data-source-field]").forEach((field) => {
    field.value = source;
  });

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) {
        status.classList.add("is-visible", "inquiry-success");
        status.textContent = "提交成功。我们已记录您的需求，后续可接入邮箱或后台自动发送。";
      }
      form.reset();
      form.querySelectorAll("[data-source-field]").forEach((field) => {
        field.value = source;
      });
    });
  });
}

function setCurrentYear() {
  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

renderProducts();
bindInquiryForms();
setCurrentYear();
