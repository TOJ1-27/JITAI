# 山东吉泰机械有限公司官网

这是山东吉泰机械有限公司官方网站第一版，面向国内工业客户与海外采购客户。

## 已包含

- 首页
- 产品中心
- 关于我们
- 联系询价
- 液压产品类型数据
- Facebook / TikTok / WhatsApp 引流入口预留
- 询价表单本地成功提示

## 文件说明

- `index.html`：网站首页
- `assets/styles.css`：网站样式
- `assets/app.js`：产品数据与表单交互
- `tests/smoke.ps1`：规格检查脚本
- `.github/workflows/pages.yml`：GitHub Pages 自动部署流程

## 本地查看

直接打开 `index.html` 即可预览网站。

## GitHub Pages 发布

仓库已加入 GitHub Pages 部署流程。发布成功后，默认访问地址通常是：

https://toj1-27.github.io/JITAI/

如果首次没有自动发布，请在 GitHub 仓库中打开：

`Settings` -> `Pages` -> `Build and deployment`

然后把 Source 设置为 `GitHub Actions`，保存后进入 `Actions` 页面重新运行 `Deploy static site to GitHub Pages`。

## 后续替换内容

后续可在 `assets/app.js` 中替换真实产品类型、产品名称、描述和标签；在 `index.html` 中替换电话、邮箱、WhatsApp、Facebook、TikTok 和企业资料。
