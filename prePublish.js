import { execSync } from 'child_process';

console.log('Building...................');
execSync('yarn run build', { stdio: 'inherit' });
