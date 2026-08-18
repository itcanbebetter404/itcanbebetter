const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const root = __dirname;
const pages = [
  {
    source: "qa-report/report.md",
    output: "qa-report/report.html",
    label: "QA case study",
  },
  {
    source: "projects/tana-organization.md",
    output: "projects/tana-organization.html",
    label: "Systems design case study",
  },
  {
    source: "projects/shiftright.md",
    output: "projects/shiftright.html",
    label: "Web application QA case study",
  },
  {
    source: "projects/projects.md",
    output: "projects/projects.html",
    label: "Portfolio projects",
  },
  {
    source: "qa-report/defect-summary.md",
    output: "qa-report/defect-summary.html",
    label: "Defect documentation",
  },
  {
    source: "skill-evidence/skills.md",
    output: "skill-evidence/skills.html",
    label: "Skills and evidence",
  },
  {
    source: "about.md",
    output: "about.html",
    label: "Professional profile",
  },
];

marked.use({
  gfm: true,
  headerIds: true,
  mangle: false,
});

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function template({ title, label, body, depth }) {
  const prefix = depth ? "../" : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#102a2e">
    <meta name="description" content="${escapeHtml(title)} — Jessica A.'s human-centered technology and systems portfolio.">
    <title>${escapeHtml(title)} | Jessica A.</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&amp;family=DM+Serif+Display&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${prefix}styles.css">
  </head>
  <body>
    <a class="skip-link" href="#article">Skip to main content</a>
    <header class="site-header">
      <a class="wordmark" href="${prefix}index.html" aria-label="Jessica A. portfolio home">
        <span class="wordmark-mark" aria-hidden="true">JA</span>
        <span>Jessica A.</span>
      </a>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="${prefix}index.html#work">Work</a>
        <a href="${prefix}index.html#skills">Skills</a>
        <a href="${prefix}index.html#about">About</a>
        <a href="${prefix}assets/resume/Jessica_A_Resume.pdf">Résumé</a>
        <a class="nav-contact" href="mailto:itcanbebetter404@gmail.com">Contact</a>
      </nav>
    </header>
    <main id="article">
      <header class="article-hero">
        <p class="eyebrow">${escapeHtml(label)}</p>
        <h1>${escapeHtml(title)}</h1>
      </header>
      <div class="article-layout">
        <aside class="article-sidebar">
          <p>Part of Jessica A.'s human-centered technology and systems portfolio.</p>
          <a href="${prefix}index.html">← Portfolio home</a>
        </aside>
        <article class="prose">
          ${body}
        </article>
      </div>
    </main>
    <footer class="site-footer">
      <p>Designed and documented by Jessica A.</p>
      <p>Jacksonville metropolitan area · 2026</p>
    </footer>
  </body>
</html>
`;
}

for (const page of pages) {
  const sourcePath = path.join(root, page.source);
  const outputPath = path.join(root, page.output);
  const markdown = fs.readFileSync(sourcePath, "utf8");
  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : page.label;
  const withoutTitle = markdown.replace(/^#\s+.+(?:\r?\n)+/, "");
  const body = marked
    .parse(withoutTitle)
    .replaceAll(/href="([^"]*)README\.md([^"]*)"/g, 'href="$1index.html$2"')
    .replaceAll(/href="([^"]+)\.md([^"]*)"/g, 'href="$1.html$2"');
  const depth = page.output.includes("/");

  fs.writeFileSync(
    outputPath,
    template({ title, label: page.label, body, depth }),
    "utf8",
  );
}

console.log(`Generated ${pages.length} styled HTML pages.`);
