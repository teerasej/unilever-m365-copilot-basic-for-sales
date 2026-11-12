---
prev: false
next: false
---

# ข้อความสำรอง: Customer Feedback

[กลับไปหน้าไฟล์สำหรับฝึก](../downloads.md)

ใช้เมื่อแนบไฟล์ไม่ได้: เปิด Chat ใหม่ แล้วคัดลอกข้อมูลในกรอบด้านล่างไปวางก่อนส่ง Prompt ของ exercise

> ชุดนี้เป็น **ข้อมูลบางส่วนจากไฟล์ต้นฉบับ** จำนวนแถว ยอดรวมและอันดับอาจต่างจากไฟล์เต็ม ให้ตอบจากข้อความที่วางเท่านั้น อย่าอ้างว่าเป็นผลของข้อมูลทั้งหมด

ใช้ 4 แถวแรกจาก `Feedback Log` (แถว Excel 2–5) พร้อม guideline สมมติ ข้อมูลไม่มีตัวตนลูกค้าจริง Suggested owner เป็นบทบาทที่เสนอให้ตรวจสอบ ไม่ใช่การมอบหมายงานแล้ว

```text
Feedback Log excerpt — 4 รายการเท่านั้น
Date	Channel	Product	Feedback Theme	Severity	Customer Type	Summary	Requested Follow-up	Status
Day 1	Contact Center	Fresh Clean Liquid 500ml	Packaging question	Medium	Consumer	Question about cap usability after purchase.	Need handling guidance	Open
Day 1	Social	Bright Care Shampoo 300ml	Scent feedback	Low	Consumer	Comment says scent is stronger than expected.	Monitor theme	Open
Day 2	E-commerce Review	Home Fresh Spray 250ml	Delivery condition	Medium	Consumer	Review mentions damaged outer box.	Check logistics signal	Open
Day 2	Sales Feedback	Daily Wash Bar 4-pack	Shelf availability	High	Customer Team	Store team reports repeated out-of-stock signal.	Escalate availability check	Open

Issue Response Guideline - Training Sample
This fictional guideline supports a Microsoft 365 Copilot workshop. Do not use it as an official customer response policy.
Response Principles
Summarize themes without exposing personal data.
Separate facts from interpretation and unknown causes.
Escalate repeated high-severity signals to the relevant owner.
Avoid writing individual customer replies unless approved by the proper team.
Escalation Guidance
Privacy Reminder
Use aggregated summaries for workshop outputs. Do not include names, phone numbers, emails, addresses, or any real customer identifiers.
Signal	Suggested owner	Action
Repeated shelf availability concern	Sales / Supply owner	Verify source data and stock signal.
Label or claim clarity question	Brand / Legal owner	Review wording and approved claim source.
Packaging usability question	Brand / Quality owner	Check whether guidance or FAQ update is needed.
Delivery condition feedback	Customer Care / Logistics owner	Check if issue relates to delivery handling data.
```

กลับไป [Customer Feedback](../../exercises/copilot-in-action/customer-feedback-issue-response.md) แล้วเปลี่ยนแหล่งข้อมูลใน Prompt เป็น “feedback 4 รายการและ guideline ที่วางไว้”
