import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

test('production server serves assets and rejects invalid requests', { timeout: 15000 }, async (t) => {
  const child = spawn(process.execPath, ['server.mjs'], {
    env: { ...process.env, PORT: '0' }, stdio: ['ignore', 'pipe', 'inherit'],
  });
  t.after(async () => {
    if (child.exitCode !== null) return;
    const exited = once(child, 'exit');
    child.kill();
    await exited;
  });
  const [ready] = await once(child.stdout, 'data');
  const port = String(ready).match(/port (\d+)/)?.[1];
  assert.ok(port);
  const base = `http://127.0.0.1:${port}`;
  const home = await fetch(base);
  assert.equal(home.status, 200);
  assert.match(home.headers.get('content-type'), /text\/html/);
  assert.equal(home.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(home.headers.get('cache-control'), 'no-cache');
  const html = await home.text();
  const head = await fetch(base, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  assert.equal(head.headers.get('content-length'), String(Buffer.byteLength(html)));
  const assetPath = html.match(/src="([^"]+\.js)"/)?.[1];
  assert.ok(assetPath);
  const asset = await fetch(new URL(assetPath, base));
  assert.equal(asset.status, 200);
  assert.match(asset.headers.get('cache-control'), /immutable/);
  assert.equal((await fetch(`${base}/missing-file`)).status, 404);
  assert.equal((await fetch(`${base}/%ZZ`)).status, 400);
  const post = await fetch(base, { method: 'POST' });
  assert.equal(post.status, 405);
  assert.equal(post.headers.get('allow'), 'GET, HEAD');
});
