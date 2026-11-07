import { chromium } from 'playwright';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const studio = path.join(root, 'assets', 'anim-studio.html');
const framesRoot = path.join(root, 'assets', '_frames');
const ffmpeg =
  process.env.FFMPEG ||
  'C:\\Users\\IVORRA\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-9.0.1-full_build\\bin\\ffmpeg.exe';

const scenes = [
  { id: 'hero', out: 'hero.gif', seconds: 4 },
  { id: 'problem', out: '01-chat-loop.gif', seconds: 5 },
  { id: 'salto', out: '04-salto.gif', seconds: 4 },
  { id: 'factory', out: '02-pipeline.gif', seconds: 6 }
];

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit' });
    p.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exit ${code}`))));
  });
}

async function captureScene(browser, scene) {
  const dir = path.join(framesRoot, scene.id);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });

  const page = await browser.newPage({ viewport: { width: 1200, height: 520 }, deviceScaleFactor: 1 });
  const url = `${pathToFileURL(studio).href}?scene=${scene.id}`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__ready === true);
  await page.waitForTimeout(400);

  const fps = 12;
  const total = scene.seconds * fps;
  for (let i = 0; i < total; i++) {
    const file = path.join(dir, `frame-${String(i).padStart(4, '0')}.png`);
    await page.screenshot({ path: file, type: 'png' });
    await page.waitForTimeout(1000 / fps);
  }
  await page.close();

  const outGif = path.join(root, 'assets', scene.out);
  await run(ffmpeg, [
    '-y',
    '-framerate', String(fps),
    '-i', path.join(dir, 'frame-%04d.png'),
    '-vf', 'fps=12,scale=1200:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=4',
    '-loop', '0',
    outGif
  ]);
  console.log('GIF', outGif, Math.round(fs.statSync(outGif).size / 1024) + 'KB');
}

const browser = await chromium.launch();
try {
  for (const scene of scenes) {
    console.log('Capturing', scene.id);
    await captureScene(browser, scene);
  }
} finally {
  await browser.close();
}
fs.rmSync(framesRoot, { recursive: true, force: true });
console.log('Done');
