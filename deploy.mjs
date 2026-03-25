import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'dist');
const repo = 'https://github.com/MunirahMuda/moon-portfolio.git';

const run = (cmd) => {
    console.log(`> ${cmd}`);
    execSync(cmd, { cwd: dist, stdio: 'inherit' });
};

// Clean any leftover .git in dist
const gitDir = path.join(dist, '.git');
if (fs.existsSync(gitDir)) {
    fs.rmSync(gitDir, { recursive: true, force: true });
}

run('git init');
run('git add -A');
run('git commit -m "deploy"');
run(`git push -f ${repo} HEAD:gh-pages`);

console.log('\nDeployed to https://MunirahMuda.github.io/moon-portfolio/');
