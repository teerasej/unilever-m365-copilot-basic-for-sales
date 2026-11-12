export type Practice = { label: string; optional?: boolean }
export type Exercise = { id: string; title: string; short: string; route: string; optional?: boolean; practices: Practice[] }

export const exercises: Exercise[] = [
  { id: 'quick', title: 'ลองใช้ Copilot กับ 6 งานของทีม Sales', short: '1. 6 งานของทีม Sales', route: '/exercises/sales-quick-start', practices: [
    { label: '1. สรุปบันทึกเยี่ยมร้าน' }, { label: '2. Email ติดตามผู้ซื้อ' }, { label: '3. อธิบายผลโปรโมชัน' },
    { label: '4. ติดตามก่อน Launch' }, { label: '5. ส่งต่อ Customer Feedback' }, { label: '6. อัปเดตหัวหน้าทีม' }
  ] },
  { id: 'comm', title: 'จากบันทึกเยี่ยมลูกค้า สู่รายงานและ Email', short: '2. สื่อสารหลังเยี่ยมร้าน', route: '/exercises/sales-communication', practices: [
    { label: '1. รายงานเยี่ยมร้าน' }, { label: '2. Email ยืนยันข้อตกลง' }, { label: '3. ปรับ Email ให้กระชับ', optional: true }
  ] },
  { id: 'promo', title: 'อ่านผล Promotion และเตรียม Performance Brief', short: '3. Promotion Review', route: '/exercises/copilot-in-action/modern-trade-promotion-review', practices: [
    { label: '1. สรุปยอดตาม Channel' }, { label: '2. Product และสัญญาณ', optional: true }, { label: '3. Performance Brief' },
    { label: '4. ข้อความ Teams', optional: true }, { label: '5. Brief ตามผู้รับ', optional: true }, { label: '6. PowerPoint Outline', optional: true }
  ] },
  { id: 'launch', title: 'ตรวจ Launch Readiness และเตรียม Action Tracker', short: '4. Launch Readiness', route: '/exercises/copilot-in-action/new-product-launch-readiness', practices: [
    { label: '1. Launch Context', optional: true }, { label: '2. Readiness และจุดติดขัด' }, { label: '3. Action Tracker' },
    { label: '4. ข้อความตามบทบาท', optional: true }, { label: '5. Meeting Brief', optional: true }, { label: '6. Follow-up Email', optional: true }, { label: '7. Excel-ready Pack', optional: true }
  ] },
  { id: 'verify', title: 'ตรวจข้อมูลและปรับคำตอบให้พร้อมใช้', short: '5. ตรวจและปรับผลลัพธ์', route: '/exercises/refine-and-verify', practices: [
    { label: '1. เทียบคำตอบกับหลักฐาน' }, { label: '2. ปรับให้หัวหน้าทีมอ่าน' }
  ] },
  { id: 'gallery', title: 'บันทึก Sales Prompt ไว้ใช้ซ้ำ', short: '6. เก็บ Prompt ใช้ซ้ำ', route: '/exercises/copilot-prompt-gallery', practices: [
    { label: '1. บันทึกและเรียกใช้ Prompt' }, { label: '2. เตรียมแชร์ Prompt', optional: true }
  ] },
  { id: 'pages', title: 'จัดระเบียบ Launch Action Tracker ด้วย Copilot Pages', short: '7. จัดผลลัพธ์ด้วย Pages', route: '/exercises/copilot-pages', practices: [
    { label: '1. เก็บ Tracker เป็น Page' }, { label: '2. เพิ่มจุดที่ต้องยืนยัน', optional: true }, { label: '3. ตรวจทางเลือกแชร์', optional: true }
  ] },
  { id: 'feedback', title: 'Customer Feedback และการส่งต่อ', short: 'เพิ่มเติม: Customer Feedback', optional: true, route: '/exercises/copilot-in-action/customer-feedback-issue-response', practices: [
    { label: '1. Feedback Themes', optional: true }, { label: '2. Response Guideline', optional: true }, { label: '3. ข้อความภายใน', optional: true },
    { label: '4. Issue Priority', optional: true }, { label: '5. Action Items', optional: true }, { label: '6. Word-ready Summary', optional: true }
  ] },
  { id: 'create', title: 'สร้างภาพแคมเปญด้วย Copilot Create', short: 'เพิ่มเติม: Copilot Create', optional: true, route: '/exercises/copilot-create-mode', practices: [
    { label: '1. ภาพแคมเปญไม่มีแบรนด์', optional: true }
  ] }
]

// Illustration IDs and stable Practice links share the exercise order above.
export const practiceModes: Record<string, 'live' | 'additional'> = Object.fromEntries(
  exercises.flatMap(ex => ex.practices.map((practice, index) => [
    `${ex.id}-${String(index + 1).padStart(2, '0')}`,
    ex.optional || practice.optional ? 'additional' : 'live'
  ]))
)

export function sidebarFor(activeRoute = '') {
  return [
    { text: 'เริ่มต้น', items: [
      { text: 'ภาพรวม Workshop', link: '/' },
      { text: 'Agenda ช่วงบ่าย', link: '/afternoon-agenda' },
      { text: 'ดาวน์โหลดไฟล์', link: '/resources/downloads' }
    ] },
    ...exercises.map(ex => ({
      text: ex.short,
      link: ex.route,
      collapsed: ex.route !== activeRoute,
      items: ex.practices.map((p, i) => ({
        text: p.label + (ex.optional || p.optional ? ' · หลังคลาส' : ''),
        link: `${ex.route}#practice-${i + 1}`
      }))
    })),
    { text: 'ข้อมูลประกอบ', collapsed: true, items: [
      { text: 'Business Scenarios', link: '/exercises/copilot-in-action/copilot-in-action' },
      { text: 'Promotion — ข้อความสำรอง', link: '/resources/pasteable/promotion-excerpt' },
      { text: 'Launch — ข้อความสำรอง', link: '/resources/pasteable/launch-excerpt' },
      { text: 'Feedback — ข้อความสำรอง', link: '/resources/pasteable/feedback-excerpt' }
    ] }
  ]
}

export const sidebars = Object.fromEntries([
  ...exercises.map(ex => [`${ex.route}.md`, sidebarFor(ex.route)]),
  ['/', sidebarFor()]
])
