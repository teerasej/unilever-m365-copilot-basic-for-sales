---
prev: false
next: false
---

# ข้อความสำรอง: Promotion Review

[กลับไปหน้าไฟล์สำหรับฝึก](../downloads.md)

ใช้เมื่อแนบไฟล์ไม่ได้: เปิด Chat ใหม่ แล้วคัดลอกข้อมูลในกรอบด้านล่างไปวางก่อนส่ง Prompt ของ exercise

> ชุดนี้เป็น **ข้อมูลบางส่วนจากไฟล์ต้นฉบับ** จำนวนแถว ยอดรวมและอันดับอาจต่างจากไฟล์เต็ม ให้ตอบจากข้อความที่วางเท่านั้น อย่าอ้างว่าเป็นผลของข้อมูลทั้งหมด

เลือก 6 แถวจาก `Promotion Data` (แถว Excel 2–6 และ 8) ไม่มีปี สกุลเงิน retailer หรือ promotion mechanic

```text
ชุดข้อมูล: Promotion Review excerpt — 6 แถวเท่านั้น
Product	Category	Channel	Region	Month	Baseline Sales	Promotion Sales	Uplift %	Stock Issue Flag	Margin Impact	Notes
Fresh Clean Liquid 500ml	Home Care	Hypermarket	Central	Month 1	85000	112000	31.8	No	4.2	Strong lift; verify display execution details
Fresh Clean Liquid 500ml	Home Care	Supermarket	Central	Month 2	78000	101500	30.1	No	3.8	Sustained uplift across planned stores
Fresh Clean Liquid 500ml	Home Care	E-commerce	Nationwide	Month 3	54000	90500	67.6	No	2.4	High uplift; verify traffic source and price display
Bright Care Shampoo 300ml	Personal Care	Convenience Store	Bangkok	Month 1	64000	82000	28.1	Yes	-1.6	Stock issue flag appears despite positive uplift
Bright Care Shampoo 300ml	Personal Care	Supermarket	Central	Month 2	70000	92000	31.4	No	1.2	Good uplift; check repeat availability
Home Fresh Spray 250ml	Home Care	Hypermarket	East	Month 1	58000	70500	21.6	No	1.5	Stable response
```

กลับไป [Promotion Review](../../exercises/copilot-in-action/modern-trade-promotion-review.md) แล้วใช้ Prompt โดยเปลี่ยนจาก “ไฟล์ที่แนบมา” เป็น “ข้อความตัวอย่าง 6 แถวที่วางไว้”
