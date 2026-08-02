# MkDocs 根目录章节 + 符号链接恢复设计

**日期：** 2026-08-02  
**状态：** 已批准（待实现）  
**分支：** `ningg`

## 背景

合并 `main` 后，章节 Markdown 从 `chapters/` 挪到仓库根目录（便于 GitHub 直接浏览），但 `mkdocs.yml` 仍配置 `docs_dir: chapters`。本地 `mkdocs build --strict` 因此失败：

```text
ERROR - Config value 'docs_dir': The path '.../chapters' isn't an existing directory.
```

主题 CSS（暗色科技风）与 Material 配置仍在，只是文档目录与路径对不上。MkDocs 不允许将 `docs_dir` 设为 `.`（与 `mkdocs.yml` 同级根目录）。

## 目标

1. 章节 Markdown **继续留在仓库根目录**，GitHub 可直接按章阅读。
2. 恢复可构建、可浏览的 MkDocs Material 站点，样式与合并前一致（暗色科技风 + 默认浅色、可切换深色）。
3. 书名统一为 **《前线部署工程师》**。

## 非目标

- 不改章节正文内容。
- 不重做 / 重新生成 PDF。
- 不调整 Material 功能清单（除非构建报错必须改）。
- 不把章节搬回 `chapters/`。

## 方案

在 `docs/` 下为根目录源文件建立 **符号链接**；`mkdocs.yml` 的 `docs_dir` 指向 `docs`。根目录是唯一源文件；`docs/` 不存放正文副本。

### 目录结构

```text
仓库根/
├── 01-第1章-FDE的崛起.md … 12-附录C-….md   # 唯一源文件
├── index.md
├── stylesheets/extra.css
├── mkdocs.yml                                 # docs_dir: docs
├── docs/
│   ├── index.md          → ../index.md
│   ├── 01-….md … 12-….md → ../对应文件
│   ├── stylesheets       → ../stylesheets
│   └── superpowers/      # 设计文档等，不进站点（见下）
├── README.md
└── 前线部署工程师.pdf
```

### 符号链接清单

| `docs/` 路径 | 目标 |
| --- | --- |
| `index.md` | `../index.md` |
| `01-第1章-FDE的崛起.md` | `../01-第1章-FDE的崛起.md` |
| `02-第2章-解决正确的问题.md` | `../02-第2章-解决正确的问题.md` |
| `03-第3章-赢得客户.md` | `../03-第3章-赢得客户.md` |
| `04-第4章-激活部署.md` | `../04-第4章-激活部署.md` |
| `05-第5章-守住续约.md` | `../05-第5章-守住续约.md` |
| `06-第6章-扩大收入.md` | `../06-第6章-扩大收入.md` |
| `07-第7章-规模化复制.md` | `../07-第7章-规模化复制.md` |
| `08-第8章-完整案例集.md` | `../08-第8章-完整案例集.md` |
| `09-后记-FDE的职业道德.md` | `../09-后记-FDE的职业道德.md` |
| `10-附录A-FDE应当关注的常用指标.md` | `../10-附录A-FDE应当关注的常用指标.md` |
| `11-附录B-FDE人物与团队名单.md` | `../11-附录B-FDE人物与团队名单.md` |
| `12-附录C-全书案例索引与资料出处.md` | `../12-附录C-全书案例索引与资料出处.md` |
| `stylesheets` | `../stylesheets` |

符号链接提交进 git。macOS / Linux / GitHub Actions 均支持；Windows 需开发者模式（本仓库主要在 Unix 环境构建）。

### `docs/superpowers/` 与站点隔离

本规格文件位于 `docs/superpowers/specs/`。实现时在 `mkdocs.yml` 中排除该树，避免 `--strict` 因未入 nav 的文件失败，且不发布到站点：

```yaml
exclude_docs: |
  superpowers/**
```

## 配置与文案变更

### `mkdocs.yml`

- `docs_dir: docs`（原 `chapters`）
- `site_name: 前线部署工程师`（及 description 中书名对齐，若有）
- 保留现有 theme / palette（默认 `default` 浅色，可切 `slate` 深色）、`extra_css: stylesheets/extra.css`、plugins、markdown_extensions、nav 结构
- 增加 `exclude_docs` 排除 `superpowers/**`

### `index.md`

- 标题改为「前线部署工程师：…」
- PDF 链接改为根目录实际文件名 `前线部署工程师.pdf`

### `README.md`

- 「整本下载」链接从错误的 `前置部署工程师.pdf` 改为 `前线部署工程师.pdf`

### `stylesheets/extra.css`

- 保持现有暗色科技风覆盖，不做视觉重做

### CI

- `.github/workflows/deploy-docs.yml` 保持：`mkdocs build --strict` → Upload Pages
- 依赖 Linux checkout 保留 symlink；不加额外准备脚本

## 验收标准

1. 本地 `mkdocs build --strict` 成功。
2. `mkdocs serve` 可见：侧栏（首页 / 正文 / 附录）、暗色科技风、浅色默认 + 深色切换。
3. 站点首页标题与 PDF 文案为「前线部署工程师」。
4. 仓库根目录章节 Markdown 仍可在 GitHub 直接打开。

## 实现顺序（供后续计划使用）

1. 在 `docs/` 创建章节与 `stylesheets` 的符号链接（保留已有 `docs/superpowers/`）。
2. 更新 `mkdocs.yml`（`docs_dir`、书名、`exclude_docs`）。
3. 更新 `index.md`、`README.md` 中的书名与 PDF 链接。
4. 本地 `mkdocs build --strict` 验证。
5. （可选）`mkdocs serve` 目视确认主题与导航。
