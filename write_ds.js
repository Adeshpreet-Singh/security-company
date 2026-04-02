const fs=require("fs");const p="c:/Projects/agent-batches/design-studio/app/page.tsx";fs.mkdirSync(require("path").dirname(p),{recursive:true});fs.writeFileSync(p,ds())
