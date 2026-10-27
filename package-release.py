from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parent
out = root / 'release'
out.mkdir(exist_ok=True)
with ZipFile(out / 'batchwell-static-site.zip', 'w', ZIP_DEFLATED) as z:
    for file in sorted((root / 'dist').rglob('*')):
        if file.is_file(): z.write(file, file.relative_to(root / 'dist'))
with ZipFile(out / 'batchwell-siteground-source.zip', 'w', ZIP_DEFLATED) as z:
    for name in ['package.json', 'package-lock.json', 'index.html', 'server.mjs', 'README.md', '.env.example']:
        z.write(root / name, name)
    for folder in ['src', 'public']:
        for file in sorted((root / folder).rglob('*')):
            if file.is_file() and not file.name.startswith('.'):
                z.write(file, file.relative_to(root))
print(out / 'batchwell-static-site.zip')
print(out / 'batchwell-siteground-source.zip')
