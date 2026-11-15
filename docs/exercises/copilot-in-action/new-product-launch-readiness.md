---
prev:
  text: "Promotion Review"
  link: /exercises/copilot-in-action/modern-trade-promotion-review
next:
  text: "ตรวจและปรับผลลัพธ์"
  link: /exercises/refine-and-verify
---

# Exercise: Copilot in Action - New Product Launch Readiness Brief

<PageIllustration id="launch" />

[กลับไปหน้า Workshop](../../index.md)

## Exercise Overview

เราจะใช้ Copilot Chat อ่าน brief และ tracker แบบสมมติ เพื่อเห็นความพร้อมของทีม Sales และเตรียม action tracker ก่อนประชุม

> **License:** Core ใช้ Copilot Chat แบบ Basic โดยไม่ต้องใช้ Microsoft 365 Copilot add-on; การเข้าใช้และแนบไฟล์ของบัญชีผู้เรียน **ต้องตรวจสอบก่อนเริ่มอบรม** ไม่ต้องใช้ Excel agent เพื่อจบ Core

## Prerequisites

1. ลงชื่อเข้าใช้ [Microsoft 365 Copilot](https://m365copilot.com/) ด้วยบัญชีองค์กร
2. ดาวน์โหลด [new_product_launch_readiness.zip](/downloads/copilot-in-action/new_product_launch_readiness.zip) แล้วแตกไฟล์เพื่อใช้ `product_launch_brief.docx` และ `launch_readiness_tracker.xlsx`
3. เปิด brief และ sheet **Readiness Tracker** ไว้ตรวจคำตอบ ใช้เฉพาะเนื้อหาที่แนบหรือวางเองในกิจกรรมนี้

> **หากแนบไฟล์ไม่ได้:** เปิด [ข้อมูลย่อสำหรับวางใน Chat](../../resources/pasteable/launch-excerpt.md) แล้ววางข้อความทั้ง brief และ tracker แทน ข้อมูลย่อมีเพียงบางส่วน จำนวนสถานะและผลวิเคราะห์จึงต่างจากไฟล์เต็ม ให้ตรวจเฉพาะข้อมูลชุดที่ใช้
>
> ข้อมูลทั้งหมดเป็นเรื่องสมมติ ไม่ใช่ brand, launch date, budget หรือ retailer จริง ใน tracker ไม่มี Due date จึงต้องใช้ [ต้องระบุ]

## Core: เตรียม Launch Action Tracker {#core-เตรียม-launch-action-tracker-25-นาที}

**ฝึกในคลาส:** Practice 2–3 · **ลองต่อหลังคลาส:** Practice 1 และ 4–7

<span id="practice-1"></span>

## Practice 1: สรุป launch context {#practice-1-สรุป-launch-context-8-นาที}

<PracticeIllustration id="launch-01" />

เราจะสรุป brief เพื่อเข้าใจเป้าหมายและข้อจำกัดก่อนอ่านสถานะงาน

#### Steps

1. เปิด Chat ใหม่ เลือก **+** แล้วเลือก **Upload images or files** เพื่อแนบ `product_launch_brief.docx` หากเมนูต่างออกไปให้ใช้ปุ่มแนบไฟล์ที่บัญชีแสดง หรือวางข้อมูลย่อแทน
2. ส่ง prompt

   ```text
   สรุปภาษาไทยสำหรับทีม Sales ไม่เกิน 6 bullets
   ครอบคลุม Launch objective, Target audience, Channel plan, Known constraints และ Open decisions
   ```

3. เปิด brief ต้นทางแล้วตรวจเป้าหมาย 1 ข้อและข้อจำกัด 1 ข้อ

#### Checkpoint

- สรุปมีเป้าหมายและข้อจำกัดตรงกับ brief โดยไม่เติมรายละเอียดทางการค้า

<span id="practice-2"></span>

## Practice 2: ตรวจ readiness และประเด็นติดขัด {#practice-2-ตรวจ-readiness-และประเด็นติดขัด-9-นาที}

<PracticeIllustration id="launch-02" />

เราจะวิเคราะห์ tracker เพื่อระบุสถานะและความเสี่ยงที่มีข้อมูลรองรับ

#### Steps

1. เปิด Chat ใหม่ แล้วแนบทั้ง `product_launch_brief.docx` และ `launch_readiness_tracker.xlsx` หรือวางข้อความทั้ง brief และ tracker จากข้อมูลย่อ
2. ส่ง prompt

   ```text
   ใช้เฉพาะ brief และ sheet Readiness Tracker ที่แนบ หรือข้อมูลย่อที่ฉันวาง
   สรุปจำนวน workstreams ตาม Status โดยนับแต่ละแถวงานหนึ่งครั้ง
   ระบุทุกรายการที่ Risk Level เป็น 🔴High หรือ Status เป็น ⚠️Blocked
   จัดเป็น Workstream | Status | Risk Level | Dependency | ประเด็นที่ต้องยืนยัน
   แยก Fact | Interpretation | Information needed ไม่คาดเดาสาเหตุของ delay
   ```

3. นับแถวตาม Status ด้วยตัวเอง แล้วตรวจว่ารวมเท่ากับจำนวน workstreams ที่ใช้
4. ตรวจ 1 รายการ High หรือ Blocked กับ tracker โดยดู Dependency และ Current Note

#### Checkpoint

- จำนวนสถานะตรงกับข้อมูลชุดที่ใช้ และรายการ High/Blocked อ้างอิงแถวจริงได้

<span id="practice-3"></span>

## Practice 3: สร้าง action tracker {#practice-3-สร้าง-action-tracker-8-นาที}

<PracticeIllustration id="launch-03" />

เราจะจัดงานที่ต้องติดตามเป็นตาราง เพื่อให้ทีมเห็นเจ้าของงานและสิ่งที่ต้องยืนยัน

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   จาก brief, tracker และผลที่ตรวจแล้ว สร้าง action tracker ภาษาไทย
   คอลัมน์: Workstream | Owner จากไฟล์ | Action | Due | Source data to check
   ใช้ Next Action ใน tracker เป็นข้อมูลตั้งต้น ถ้าเสนอ action เพิ่มให้ขึ้นต้นว่า “ข้อเสนอ”
   ใช้ [ต้องระบุ] สำหรับ Due และข้อมูลที่ไฟล์ไม่ได้ระบุ
   จัดตารางให้พร้อมคัดลอกไป Excel ไม่ต้องสร้างไฟล์
   ```

2. ตรวจ Owner และ Action อย่างน้อย 2 แถวกับ tracker
3. ตรวจว่าทุก Due เป็นข้อมูลที่มีจริงหรือ `[ต้องระบุ]` แล้วคัดลอกตารางเก็บไว้

#### Checkpoint

- Action tracker ตรงกับแหล่งข้อมูล และแยก action ที่เสนอเพิ่มจากงานที่มีอยู่

## ส่วนเสริม: เตรียมงานประชุมและสื่อสารต่อ

ใช้ผลที่ตรวจแล้วจาก Practice 2–3 โดยมี brief และ tracker ต้นทางอยู่ใน Chat เดิม

<span id="practice-4"></span>

## Practice 4: ร่างข้อความติดตามงานตามบทบาท

<PracticeIllustration id="launch-04" />

เราจะร่างข้อความสำหรับหนึ่งบทบาท เพื่อขอข้อมูลที่ยังขาดก่อนประชุม

#### Steps

1. เลือกบทบาทหนึ่งบทบาท แล้วแทนที่ข้อความในวงเล็บก่อนส่ง

   ```text
   จากข้อมูลที่ตรวจแล้ว ร่างข้อความ Microsoft Teams สำหรับ [Marketing / Supply Chain / Sales — เลือกหนึ่งบทบาท]
   สรุปสถานะที่เกี่ยวข้อง 2 ข้อ และคำถามที่ต้องยืนยัน 3 ข้อ
   จัดเป็น Facts | Questions | Next step ใช้น้ำเสียงกระชับ เป็นมืออาชีพ ไม่ตำหนิทีม
   ใช้ [ต้องระบุ] สำหรับข้อมูลที่ไม่มี ไม่เติม retailer target หรือ promotion detail
   เก็บเป็นแบบร่าง ไม่ส่งข้อความ
   ```

2. ตรวจว่าคำถามเกี่ยวกับบทบาทที่เลือกและไม่มีการสรุปสาเหตุแทนทีม

#### Checkpoint

- แบบร่างถามข้อมูลที่ขาดได้ตรงบทบาท โดยไม่ส่งข้อความจริง

<span id="practice-5"></span>

## Practice 5: เตรียม meeting brief

<PracticeIllustration id="launch-05" />

เราจะจัดข้อมูลที่ตรวจแล้วเป็น brief เพื่อช่วยให้การประชุมโฟกัสเรื่องที่ต้องตัดสินใจ

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   ใช้เฉพาะ brief, tracker และผลที่ตรวจแล้วใน Chat นี้
   สร้าง meeting brief ภาษาไทยสำหรับ Launch Readiness ไม่เกิน 1 หน้า
   โครงสร้าง: Meeting objective | Readiness summary 4 ข้อ | Key risks to verify 3 ข้อ | Open decisions

   ```

2. ตรวจว่าสถานะมาจาก tracker และ open decisions มาจาก brief หรือระบุชัดว่าเป็นคำถามเพิ่มเติม

#### Checkpoint

- Meeting brief แยกสถานะจริง ความเสี่ยงที่ต้องตรวจ และเรื่องที่รอการตัดสินใจ

<span id="practice-6"></span>

## Practice 6: ร่าง follow-up email

<PracticeIllustration id="launch-06" />

เราจะร่างอีเมลติดตามเพื่อสรุปสิ่งที่ต้องยืนยัน โดยยังไม่อ้างว่าทีมตัดสินใจแล้ว

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   จาก meeting brief และ action tracker ที่ตรวจแล้ว ร่าง follow-up email ภาษาไทยถึงทีม launch
   โครงสร้าง: Subject | สรุปสถานะ | สิ่งที่ต้องยืนยัน | Owner/Action/Due
   เก็บเป็นแบบร่าง 
   ```

2. ตรวจว่า email ไม่เปลี่ยนคำถามหรือข้อเสนอเป็นมติประชุม

#### Checkpoint

- แบบร่างไม่สร้างมติประชุมหรือกำหนดวันที่แทนทีม

<span id="practice-7"></span>

## Practice 7: เตรียม Excel-ready launch pack

<PracticeIllustration id="launch-07" />

เราจะจัดผลที่ตรวจแล้วเป็นชุดตาราง เพื่อพร้อมใช้ต่อใน Excel

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   ใช้เฉพาะข้อมูลต้นทางและผลที่ตรวจแล้วใน Chat นี้
   สร้าง Excel-ready launch pack ภาษาไทย 4 tables:
   1. Readiness Summary: Status | Count | Key observation | Source
   2. Risk Register: Workstream | Risk level | Dependency | What to verify | Owner
   3. Decision Log: Open decision | Needed from | Impact if unresolved | Next step
   4. Action Tracker: Workstream | Owner | Action | Due | Source data to check
   แสดงวิธีนับ Status 1 บรรทัด แยกข้อเสนอออกจากข้อเท็จจริง
   ใช้ [ต้องระบุ] สำหรับข้อมูลที่ไม่มี ห้ามเติมวันที่จริง budget brand หรือ retailer
   จัดรูปแบบให้พร้อมคัดลอกไป Excel
   ```

2. ตรวจ Status count และ Owner อย่างน้อย 2 แถวกับข้อมูลต้นทาง
3. หากบัญชีมีเครื่องมือสร้างไฟล์ Excel ให้ลองสร้าง 4 sheets จากตารางที่ตรวจแล้ว แล้วเปิดไฟล์ตรวจอีกครั้ง หากไม่มี ให้คัดลอกตารางแทน การสร้างไฟล์เป็นตัวเลือกที่ **ต้องตรวจสอบก่อนเริ่มอบรม**

#### Checkpoint

- ทั้ง 4 ตารางอ้างอิงข้อมูลได้ และข้อมูลที่ยังไม่ทราบไม่ถูกเติมขึ้นเอง

## Expected Output

- **ฝึกในคลาส:** สรุป readiness และ Launch action tracker ที่ตรวจแล้ว 1 ชุด
- **ลองต่อหลังคลาส:** สรุปบริบท, แบบร่าง Teams, meeting brief, follow-up email และ Excel-ready launch pack

## Summary

เราใช้ brief กับ tracker เพื่อแยกสถานะจริงออกจากสิ่งที่ยังต้องถาม ลองเลือกงานที่ต้องติดตามหนึ่งรายการแล้วปรับคำถามให้ทีมตอบได้ชัดขึ้นนะครับ


[กลับไปดู Business Scenarios](copilot-in-action.md)
