# 山东吉泰机械有限公司官网

山东吉泰机械有限公司官方网站静态版，面向国内工业客户与海外采购客户，重点承接液压缸产品展示、按图定制询价、出口业务线索和社媒落地访问。

## 已包含

- 全宽视频主视觉，带海报回退、播放/暂停和静音控制
- 产品中心与液压缸类别入口
- Custom Hydraulic Cylinders 产品详情结构
- 液压缸部件与定制设计选项说明
- 产品类型说明与制造能力展示
- RFQ 在线询价表，含必填校验、邮箱校验、文件类型/大小校验、隐私同意和反垃圾字段
- 社媒关注区域，链接从配置读取，未确认链接不渲染
- 中英文导航与首屏文案切换
- GitHub Pages 自动部署

## 文件说明

- `index.html`：网站首页与所有页面区块
- `assets/styles.css`：视觉样式与响应式布局
- `assets/app.js`：配置、产品数据、部件数据、视频控制、RFQ 校验和社媒渲染
- `assets/jitai-hero-poster.svg`：首页视频海报占位图
- `assets/product-placeholder.svg`：产品图占位
- `assets/cylinder-components.svg`：液压缸结构示意占位
- `assets/process-placeholder.svg`：制造/检测图片占位
- `mobile-preview.html`：手机端预览页
- `tests/smoke.ps1`：规格检查脚本
- `.env.example`：后端接口与通知邮箱配置示例
- `.github/workflows/pages.yml`：GitHub Pages 自动部署流程

## 配置位置

在 `assets/app.js` 顶部修改：

- `siteConfig.heroVideoMp4`
- `siteConfig.heroVideoWebm`
- `siteConfig.heroPoster`
- `siteConfig.quoteEndpoint`
- `siteConfig.quoteNotificationEmail`
- `socialLinks`

未确认真实视频、产品图片、社媒账号和 RFQ 后端前，请保留占位或空值，不要填写虚假链接或无法验证的数据。

## 环境变量

后续如接入后端或表单服务，可参考 `.env.example`：

```text
NEXT_PUBLIC_QUOTE_ENDPOINT=
QUOTE_NOTIFICATION_EMAIL=
```

当前静态站不会自动读取服务器环境变量，需要在部署流程或后端服务中接入。

## 本地查看

直接打开 `index.html` 可预览网站。
打开 `mobile-preview.html` 可查看手机端预览。

## 本地检查

```powershell
powershell -ExecutionPolicy Bypass -File tests/smoke.ps1
```

## GitHub Pages 发布

发布地址：

https://toj1-27.github.io/JITAI/

手机端预览：

https://toj1-27.github.io/JITAI/mobile-preview.html

## 待替换真实内容

- 企业宣传视频 MP4/WebM
- 视频海报真实图片
- 产品类别真实照片
- 部件结构图或产品剖面图
- 工厂、加工、装配、检测、包装发货图片
- 企业邮箱、电话、WhatsApp
- 官方 LinkedIn、Facebook、YouTube、Instagram、TikTok、X 账号
- RFQ 后端接口或表单服务
- 可公开证明的证书、产能、设备、测试数据和案例资料
