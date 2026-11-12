# Exercise: Copilot in Action - Customer Feedback And Issue Response Summary

[กลับไปหน้า Workshop](../../readme.md)

## Exercise Overview

เราจะใช้ Copilot Chat สรุป feedback และ issue log แบบสมมติ เพื่อช่วยทีม Sales, Brand, Customer Care และ Quality ตรวจประเด็นสำคัญ แล้วเตรียม Word-ready summary

> **กิจกรรมเพิ่มเติม:** Walkthrough นี้เก็บไว้ฝึกต่อหลังคลาส ส่วนตัวอย่างสั้นอยู่ใน [6 งานของทีม Sales](../sales-quick-start.md)
>
> **License:** ใช้ Copilot Chat แบบ Basic โดยไม่ต้องใช้ Microsoft 365 Copilot add-on; การเข้าใช้และแนบไฟล์ของบัญชีผู้เรียน **ต้องตรวจสอบก่อนเริ่มอบรม** การสร้างไฟล์ Word เป็นตัวเลือก

## Prerequisites

1. ลงชื่อเข้าใช้ [Microsoft 365 Copilot](https://m365copilot.com/) ด้วยบัญชีองค์กร
2. ดาวน์โหลด [customer_feedback_issue_response.zip](../../files/copilot-in-action/customer_feedback_issue_response.zip) แล้วแตกไฟล์เพื่อใช้ `customer_feedback_log.xlsx` และ `issue_response_guideline.docx`
3. เปิด sheet **Feedback Log** และ guideline ไว้ตรวจคำตอบ ใช้เฉพาะเนื้อหาที่แนบหรือวางเองในกิจกรรมนี้

> **หากแนบไฟล์ไม่ได้:** เปิด [ข้อมูลย่อสำหรับวางใน Chat](../../files/pasteable/feedback-excerpt.md) แล้วใช้ข้อความทั้ง log และ guideline แทน ข้อมูลย่อเป็นเพียงบางส่วน จำนวน theme/severity จึงต่างจากไฟล์เต็ม ให้ตรวจเฉพาะข้อมูลชุดที่ใช้
>
> Sample files ไม่มีชื่อ เบอร์โทร อีเมล ที่อยู่ หรือ complaint จริง Guideline เป็นตัวอย่างฝึก ไม่ใช่นโยบายตอบลูกค้าขององค์กร เราจะร่างข้อความภายในเท่านั้น

## Scenario 1: เตรียม Weekly Feedback And Issue Response Summary

ทีมต้องรู้ว่าประเด็นใดควรติดตามและควรถามใคร โดยไม่คาดเดาสาเหตุหรือให้คำมั่นแทนผู้รับผิดชอบ

## Practice 1: สรุป feedback themes จาก log

เราจะจัดกลุ่ม feedback เพื่อเห็นประเด็นที่มีข้อมูลรองรับ

#### Steps

1. เปิด Chat ใหม่ เลือก **+** แล้วเลือก **Upload images or files** เพื่อแนบ `customer_feedback_log.xlsx` หากเมนูต่างออกไปให้ใช้ปุ่มแนบไฟล์ที่บัญชีแสดง หรือวางข้อมูลย่อแทน
2. ส่ง prompt

   ```text
   ใช้เฉพาะ sheet Feedback Log ที่แนบ หรือข้อมูลย่อที่ฉันวาง
   สรุป customer feedback ภาษาไทย
   จัดเป็นตาราง Feedback Theme | Count | Severity signal | What to verify
   นับจากคอลัมน์ Feedback Theme ตามที่มี ไม่รวมกลุ่มใหม่โดยไม่อธิบาย
   สรุป Top themes ไม่เกิน 4 bullets และ Information needed 3 ข้อ
   ระบุว่ากำลังใช้ไฟล์เต็มหรือข้อมูลย่อ
   ห้ามเติมข้อมูลส่วนบุคคล สาเหตุ หรือ claim ที่ข้อมูลไม่ได้ให้
   ```

3. ตรวจจำนวนอย่างน้อย 1 theme กับ log และเช็กว่าไม่นับรายการเดียวซ้ำ

#### Checkpoint

- Theme และ Count ตรงกับ log ชุดที่ใช้ โดยไม่มีข้อมูลส่วนบุคคลหรือสาเหตุที่แต่งขึ้น

## Practice 2: ใช้ guideline เลือก response approach

เราจะจับคู่ประเด็นกับ guideline เพื่อหาแนวทางตรวจสอบที่เหมาะสม

#### Steps

1. ใช้ Chat เดิม แล้วแนบ `issue_response_guideline.docx` เพิ่ม หรือวางส่วน guideline จากข้อมูลย่อ
2. ส่ง prompt

   ```text
   ใช้เฉพาะ feedback log และ guideline ที่ให้
   จับคู่ theme กับ response approach ในตาราง:
   Theme | Relevant guideline | Suggested owner ตาม guideline | Suggested response approach | Information needed
   ถ้า guideline ไม่ครอบคลุม ให้ระบุ “ต้องถามทีมเพิ่ม”
   Suggested owner เป็นเพียงบทบาทแนะนำ ไม่ใช่การมอบหมายงานแล้ว
   ห้ามสร้างข้อความตอบลูกค้ารายบุคคล สาเหตุ หรือ claim ที่ไม่มีในไฟล์
   ```

3. ตรวจ 1 approach กับแถว **Signal / Suggested owner / Action** ใน guideline

#### Checkpoint

- Approach อ้างอิง guideline ได้ และไม่เปลี่ยนบทบาทที่แนะนำเป็นผู้ได้รับมอบหมายจริง

## Practice 3: ร่างข้อความให้ทีมภายในตรวจสอบ

เราจะร่างข้อความภายในหนึ่งฉบับ เพื่อให้ทีมเห็นคำถามที่ต้องช่วยตรวจ

#### Steps

1. เลือกผู้รับหนึ่งทีม แล้วแทนที่ข้อความในวงเล็บก่อนส่ง

   ```text
   จากข้อมูลที่ตรวจแล้ว ร่างข้อความ Microsoft Teams ภาษาไทยสำหรับทีม [Sales / Brand / Customer Care / Quality — เลือกหนึ่งทีม]
   โครงสร้าง: Themes ที่เกี่ยวข้อง 2 bullets | คำถามที่ต้องตรวจสอบ 3 ข้อ | Next step
   น้ำเสียงกระชับ เป็นมืออาชีพ ไม่กล่าวโทษหรือสรุปสาเหตุที่ไม่มีหลักฐาน
   ไม่ตอบลูกค้ารายบุคคล ไม่ให้คำมั่นเรื่องชดเชยหรือวันแก้ไข เก็บเป็นแบบร่าง ไม่ส่ง
   ```

2. ตรวจว่าคำถามเกี่ยวกับทีมที่เลือก และไม่มีข้อความส่งออกถึงลูกค้า

#### Checkpoint

- ได้แบบร่างภายในที่ทีมช่วยตรวจต่อได้ โดยไม่มีคำมั่นหรือข้อมูลเกินหลักฐาน

## Practice 4: วิเคราะห์ issue priority

เราจะจัดลำดับประเด็นเพื่อเลือกเรื่องที่ควรให้ทีมตรวจสอบก่อน

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   ใช้เฉพาะ feedback log และ guideline ชุดเดิม
   1. นับจำนวน feedback ตาม Severity
   2. เลือกไม่เกิน 3 themes ที่ควรตรวจสอบก่อน
   3. ระบุรายการที่ควรพิจารณา escalate พร้อมเหตุผลจาก log และ guideline
   จัดเป็น Theme | Evidence | Severity | Guideline | What to verify
   แยก severity ที่ไฟล์ระบุออกจากลำดับความสำคัญที่เสนอ
   ห้ามเติมข้อมูลส่วนบุคคล root cause หรือ claim
   ```

2. ตรวจจำนวน Severity กับ log และตรวจรายการที่เสนอให้ escalate อย่างน้อย 1 รายการกับ guideline
3. หากคำตอบอ้างสาเหตุที่ไม่มีหลักฐาน ให้ส่ง prompt แก้ไข

   ```text
   ตรวจคำตอบก่อนหน้าอีกครั้ง
   ลบ root cause หรือ claim ที่แหล่งข้อมูลไม่ได้สนับสนุน
   แยก Fact | Interpretation | Information needed ให้ชัดเจน
   ```

#### Checkpoint

- จำนวน Severity ตรงกับ log และข้อเสนอ escalate มีเหตุผลตรวจย้อนกลับได้

## Practice 5: เตรียม action items

เราจะจัดงานติดตามเป็นตาราง เพื่อแยกสิ่งที่เสนอจากการมอบหมายจริง

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   จากประเด็นที่ตรวจแล้ว สร้างตาราง action items สำหรับ weekly review
   คอลัมน์: Theme | Proposed action | Suggested owner จาก guideline | Assigned owner | Due | Source data to check
   ระบุว่า action เป็นข้อเสนอ ใช้ [ต้องระบุ] สำหรับ Assigned owner และ Due ที่ไม่มีในไฟล์
   ไม่แต่งชื่อบุคคล วันนัด หรือคำมั่นให้ลูกค้า
   ```

2. ตรวจ Suggested owner กับ guideline และตรวจว่า Assigned owner / Due ไม่ถูกเติมขึ้นเอง

#### Checkpoint

- Action items แยกบทบาทแนะนำออกจากผู้รับผิดชอบที่ยังต้องยืนยัน

## Practice 6: เตรียม Word-ready issue response summary

เราจะเรียบเรียงผลที่ตรวจแล้วเป็นเอกสาร เพื่อพร้อมใช้ใน weekly review

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   ใช้เฉพาะข้อมูลต้นทางและผลที่ตรวจแล้วใน Chat นี้
   สร้าง Word-ready summary ภาษาไทยสำหรับ Weekly Feedback And Issue Response Summary
   โครงสร้าง:
   1. Title
   2. Executive summary ไม่เกิน 4 bullets
   3. Feedback themes 1 ตาราง
   4. Response approach ที่อ้างอิง guideline 1 ตาราง
   5. Priority และ action items ที่เสนอ
   6. Information needed และ privacy reminder 3 bullets
   จัดรูปแบบให้พร้อมคัดลอกไป Word
   ห้ามเติมข้อมูลส่วนบุคคล สาเหตุ claim หรือคำตอบถึงลูกค้ารายบุคคล
   ```

2. ตรวจว่า theme counts, guideline และ action items ตรงกับผลที่ตรวจแล้ว
3. หากบัญชีมีเครื่องมือสร้างไฟล์ Word ให้ลองสร้างจาก summary ที่ตรวจแล้ว แล้วเปิดไฟล์ตรวจเนื้อหา หากไม่มี ให้คัดลอกข้อความแทน การสร้างไฟล์เป็นตัวเลือกที่ **ต้องตรวจสอบก่อนเริ่มอบรม**

#### Checkpoint

- Summary อ้างอิง log และ guideline ได้ ไม่มีข้อมูลส่วนบุคคล สาเหตุ หรือคำมั่นที่แต่งขึ้น

## Expected Output

- Feedback themes และ response approach ที่ตรวจแล้ว
- แบบร่างข้อความภายในสำหรับหนึ่งทีม
- Issue priority พร้อม action items ที่เสนอ
- Word-ready issue response summary 1 ชุด

## Summary

เราใช้ log กับ guideline เพื่อเตรียมข้อเท็จจริง คำถาม และข้อเสนอให้ทีมตัดสินใจต่อ ก่อนใช้งานจริงให้ตรวจนโยบายและขอผู้รับผิดชอบทบทวนเสมอนะครับ

[กลับไปดู Business Scenarios](copilot-in-action.md)

---

All rights reserved by [Amaround Co., Ltd.](https://www.nextflow.in.th/)

© 2026 Teerasej Jiraphatchandej. All rights reserved.

[Email me](mailto:teerasej@nextflow.in.th) · [Facebook](https://www.facebook.com/teerasej) · [YouTube](https://www.youtube.com/teerasej)
