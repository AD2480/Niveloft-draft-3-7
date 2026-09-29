import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
process.chdir(fileURLToPath(new URL('.', import.meta.url)));
const run = (command, args, extra = {}) => execFileSync(command, args, { stdio: 'inherit', ...extra });
const action = process.argv[2];
if (action === 'install') {
  run('tar', ['-xzf', 'source.tar.gz']);
  run('npm', ['ci', '--include=dev', '--no-audit', '--no-fund'], { cwd: 'app-source/frontend' });
} else if (action === 'build') {
  if (!existsSync('app-source/frontend/package.json')) throw new Error('Run node build.mjs install first.');
  run('npm', ['run', 'build'], { cwd: 'app-source/frontend', env: { ...process.env, VITE_USE_MOCK_API: process.env.VITE_USE_MOCK_API ?? 'true' } });
} else {
  throw new Error('Expected install or build.');
}
