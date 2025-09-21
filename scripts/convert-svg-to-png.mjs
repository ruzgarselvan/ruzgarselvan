import { promises as fs } from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const publicDir = path.resolve(process.cwd(), 'public');

async function *walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield *walk(fullPath);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.svg')) {
      yield fullPath;
    }
  }
}

const svgFiles = [];
for await (const file of walk(publicDir)) {
  svgFiles.push(file);
}

if (svgFiles.length === 0) {
  console.log('No SVG files found in public directory.');
  process.exit(0);
}

for (const svgPath of svgFiles) {
  const svgContent = await fs.readFile(svgPath);
  const resvg = new Resvg(svgContent, {
    background: 'rgba(255,255,255,0)'
  });
  const pngData = resvg.render();
  const outputPath = svgPath.replace(/\.svg$/i, '.png');
  await fs.writeFile(outputPath, pngData.asPng());
  console.log(`Converted ${path.relative(publicDir, svgPath)} -> ${path.relative(publicDir, outputPath)}`);
}
