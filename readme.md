# AI for Everyone — Copilot Basic learner site

เว็บไซต์แบบฝึกสำหรับคลาส Unilever ผ่าน Montivory เนื้อหาหลักอยู่ใน `docs/` เพื่อแก้ไขเพียงชุดเดียว

- [หน้า Workshop](docs/index.md)
- [Agenda](docs/afternoon-agenda.md)
- [ไฟล์ตัวอย่างและข้อความสำรอง](docs/resources/downloads.md)
- [Source provenance](SOURCE.md)

## Local preview

```sh
npm ci
npm run docs:dev
```

ตรวจ production build และเปิด preview:

```sh
npm run docs:build
npm run docs:preview
```

ตรวจ path สำหรับ GitHub Pages:

```sh
SITE_BASE=/unilever-m365-copilot-basic-for-sales/ npm run docs:build
```

ก่อนกลับมา preview ที่ root ให้รัน `npm run docs:build` โดยไม่ตั้ง `SITE_BASE` อีกครั้ง

คำสั่งจะแสดง local URL ที่ใช้ได้จริงในเครื่อง สถานะการ preview และผลตรวจสรุปใน instructor notes ของโครงการแม่

## GitHub Pages

- เว็บไซต์: [Copilot Basic สำหรับทีม Sales](https://teerasej.github.io/unilever-m365-copilot-basic-for-sales/)
- Repository: `teerasej/unilever-m365-copilot-basic-for-sales`
- Push ไปที่ `main` จะ build และเผยแพร่ผ่าน GitHub Actions โดยใช้ไฟล์จาก `docs/.vitepress/dist` เท่านั้น
- Local preview ยังคงใช้ `/` ส่วน workflow กำหนด `SITE_BASE` สำหรับเว็บไซต์ที่เผยแพร่

## ดูแลเนื้อหา

คลาส 13:00–16:00 ใช้ 16 Practices และมีอีก 20 Practices สำหรับลองต่อหลังคลาส ดูเวลาและลำดับล่าสุดใน Agenda ส่วนรายละเอียดการสอนอยู่ใน instructor notes ของโครงการแม่

- แก้ข้อความผู้เรียนใน `docs/` และรักษาข้อมูลสมมติ/ข้อจำกัดของแต่ละไฟล์
- เก็บไฟล์สำหรับดาวน์โหลดใน `docs/public/downloads/` และใช้ path ที่รองรับ site base
- Sidebar, Practice links และลำดับ exercise ใช้ navigation definition ชุดเดียวใน theme configuration
- Artwork ต้นฉบับ บันทึกการสร้างและ instructor notes อยู่ภายนอก learner repository
- ตรวจ build, links, Practice anchors, downloads และ mobile ก่อนส่งต่อ

## Site toolchain

ใช้ VitePress 1.6.4 และ Vue ตาม lockfile มี scoped override เป็น Vite 6.4.6 เพื่อแก้ dependency advisories ของรุ่นเดิม ตรวจ compatibility และ production build ทั้ง root/prefix แล้ว หากอัพเดต dependencies ให้ตรวจ override นี้อีกครั้งด้วย

## Credits

All rights reserved by [Amaround Co., Ltd.](https://www.nextflow.in.th/)

© 2026 Teerasej Jiraphatchandej. All rights reserved.

[Email me](mailto:teerasej@nextflow.in.th) · [Facebook](https://www.facebook.com/teerasej) · [YouTube](https://www.youtube.com/teerasej)
