## Rüzgar Selvan – Next.js Sitesi

Kişisel portföy, blog ve iletişim sayfalarını barındıran Next.js uygulaması.

### Geliştirme

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

### Üretim

```bash
npm run build
npm run start
```

`next.config.ts` içinde `output: "export"` tanımlı olduğu için `npm run build` çıktıyı otomatik olarak `out/` klasörüne statik dosya olarak yazar.

SVG ikonları PNG’e çevirmek için:

```bash
npm run assets:png
```

### Lisans

Tüm içerik ve tasarım Rüzgar Selvan’a aittir. Kullanıma açıktır. <3
