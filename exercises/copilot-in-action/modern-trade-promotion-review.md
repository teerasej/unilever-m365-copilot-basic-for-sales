# Exercise: Copilot in Action - Modern Trade Promotion Performance Review

[กลับไปหน้า Workshop](../../readme.md)

## Exercise Overview

เราจะใช้ Copilot Chat อ่านข้อมูล promotion แบบสมมติ เพื่อเตรียม performance brief สำหรับทีม Sales และ Trade Marketing แล้วตรวจตัวเลขก่อนนำไปใช้ต่อ

> **License:** Core ใช้ Copilot Chat แบบ Basic โดยไม่ต้องใช้ Microsoft 365 Copilot add-on; การเข้าใช้และแนบไฟล์ของบัญชีผู้เรียน **ต้องตรวจสอบก่อนเริ่มอบรม** ไม่ต้องใช้ PowerPoint agent เพื่อจบ Core

## Prerequisites

1. ลงชื่อเข้าใช้ [Microsoft 365 Copilot](https://m365copilot.com/) ด้วยบัญชีองค์กร
2. ดาวน์โหลด [modern_trade_promotion_review.xlsx](../../files/copilot-in-action/modern_trade_promotion_review.xlsx) แล้วเปิด sheet **Promotion Data** ไว้ตรวจคำตอบ
3. ใช้เฉพาะไฟล์ที่แนบหรือข้อความที่วางเองในกิจกรรมนี้ ไม่ต้องค้นข้อมูลจากอีเมลหรือ Teams

> **หากแนบไฟล์ไม่ได้:** เปิด [ข้อมูลย่อสำหรับวางใน Chat](../../files/pasteable/promotion-excerpt.md) แล้วใช้ข้อความในกรอบแทน workbook ตลอด Core ข้อมูลย่อเป็นเพียงบางแถว ผลรวมและอันดับจึงต่างจากไฟล์เต็ม ให้ตรวจเฉพาะข้อมูลชุดที่ใช้
>
> ข้อมูลทั้งหมดเป็นเรื่องสมมติ ไฟล์ไม่มีปี สกุลเงิน retailer ชื่อ campaign หรือสาเหตุที่แท้จริง อย่าให้ Copilot เติมข้อมูลเหล่านี้

## Core: เตรียม Promotion Performance Brief (25 นาที)

ทำ Practice 1–3 ตามลำดับ แล้วเก็บส่วนเสริมไว้ลองภายหลัง

## Practice 1: สรุปยอด promotion ตาม channel (8 นาที)

เราจะสรุปยอดจากข้อมูลต้นทาง เพื่อเห็นภาพรวมที่ตรวจย้อนกลับได้

#### Steps

1. เปิด Chat ใหม่ เลือก **+** แล้วเลือก **Upload images or files** เพื่อแนบ workbook หากเมนูต่างออกไปให้ใช้ปุ่มแนบไฟล์ที่บัญชีแสดง หรือวางข้อมูลย่อแทน
2. วาง prompt ด้านล่าง แล้วกด **Send**

   ```text
   ใช้เฉพาะ sheet Promotion Data ในไฟล์ที่แนบ หรือข้อมูลย่อที่ฉันวาง
   สรุป Total Promotion Sales ตาม Channel ภาษาไทย
   จัดเป็นตาราง Channel | Total Promotion Sales | จำนวนแถวที่ใช้
   แสดงวิธีรวมยอด 1 บรรทัด และระบุว่ากำลังใช้ไฟล์เต็มหรือข้อมูลย่อ
   ห้ามเติมปี สกุลเงิน retailer หรือสาเหตุที่ข้อมูลไม่ได้ระบุ
   ```

3. เปิดข้อมูลต้นทาง แล้วรวมยอดของ 1 channel เพื่อตรวจคำตอบ
4. ตรวจยอดรวมทุก channel ว่าตรงกับ Promotion Sales รวมของแถวที่ใช้

#### Checkpoint

- ยอดของ channel ที่เลือกและยอดรวมทั้งหมดตรงกับข้อมูลชุดที่เราใช้

## Practice 2: หา product และสัญญาณที่ต้องตรวจสอบ (9 นาที)

เราจะวิเคราะห์สัญญาณจากข้อมูล เพื่อเลือกประเด็นที่ควรติดตามต่อโดยไม่สรุปสาเหตุเอง

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   ใช้เฉพาะข้อมูลต้นทางชุดเดิม
   1. รวม Promotion Sales ตาม Product แล้วแสดง 3 products ที่มียอดรวมสูงสุด
   2. เลือกไม่เกิน 3 แถวที่ควรตรวจต่อจาก Stock Issue Flag, Margin Impact หรือ Uplift %
   จัดเป็น Product/Channel/Month | Fact จากข้อมูล | คำถามที่ควรถามทีม
   แยก Fact ออกจาก Interpretation และ Information needed
   ไม่อ้างว่า promotion mechanic หรือ stock issue เป็นสาเหตุของยอดที่เปลี่ยน
   ไม่ใช้ค่าเฉลี่ย Uplift % แทน uplift รวมของทุกแถว
   ```

2. ตรวจยอดรวมของ product อันดับแรกกับข้อมูลต้นทาง
3. ตรวจ 1 แถวที่ Copilot เลือก: flag, margin หรือ uplift ตรงกับแถวจริงหรือไม่
4. ถ้าคำตอบผิด ให้แทนที่ข้อความในวงเล็บแล้วถามต่อเฉพาะจุด

   ```text
   ตรวจรายการนี้อีกครั้ง: [product หรือ channel ที่ต้องการตรวจ]
   ระบุ Product, Channel, Month และค่าต้นทางที่ใช้
   ถ้าผลก่อนหน้าผิด ให้แสดงค่าที่แก้ไข ไม่คาดเดาสาเหตุเพิ่มเติม
   ```

#### Checkpoint

- Product อันดับแรกคำนวณถูก และสัญญาณที่เลือกมีข้อมูลรองรับโดยยังแยกสาเหตุที่ต้องตรวจสอบไว้

## Practice 3: เตรียม performance brief (8 นาที)

เราจะเรียบเรียงผลที่ตรวจแล้ว เพื่อได้ brief สั้นสำหรับหัวหน้าทีม Sales

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   ใช้เฉพาะข้อมูลต้นทางและค่าที่ตรวจแก้แล้วใน Chat นี้
   สร้าง Promotion Performance Brief ภาษาไทยไม่เกิน 1 หน้า สำหรับหัวหน้าทีม Sales
   โครงสร้าง: Executive summary 3 bullets | ตาราง channel จากผลที่ตรวจแล้ว | ประเด็นที่ต้องถามทีม 3 ข้อ | Next step
   ระบุข้อมูลที่ยังไม่ทราบ และใช้ [ต้องระบุ] สำหรับ Owner และ Due
   แยก Fact | Interpretation | Information needed ไม่แต่งสาเหตุหรือรายละเอียด campaign
   ```

2. ตรวจตัวเลขใน brief กับผลที่ตรวจแล้วจาก Practice 1–2
3. คัดลอก brief เก็บในเอกสารของเรา ยังไม่ต้องส่งข้อความให้ใคร

#### Checkpoint

- Brief ใช้ค่าที่ตรวจแล้วและระบุข้อมูลที่ต้องถามต่ออย่างชัดเจน

## ส่วนเสริม: ใช้ผลวิเคราะห์สื่อสารต่อ

ทำหลังจบ Core ได้ โดยใช้ผลที่ตรวจแล้วจาก Practice 1–3

## Practice 4: ร่างข้อความ Teams ให้ทีมตรวจสอบข้อมูล

เราจะร่างข้อความสั้น เพื่อขอให้ทีม Sales และ Trade Marketing ตรวจประเด็นก่อนประชุม

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   จาก brief ที่ตรวจแล้ว ร่างข้อความ Microsoft Teams ภาษาไทยถึงทีม Sales และ Trade Marketing
   โครงสร้าง: หัวข้อ 1 บรรทัด | ข้อสังเกต 3 bullets | คำถามให้ทีมตรวจสอบ 3 ข้อ
   ใช้น้ำเสียงกระชับและเป็นมืออาชีพ ไม่กล่าวถึงสาเหตุที่ไม่มีหลักฐาน
   เก็บเป็นแบบร่าง ไม่ส่งข้อความ
   ```

2. ตรวจว่าคำถามอ้างอิงข้อมูลจริง และไม่มีการกล่าวโทษทีม

#### Checkpoint

- แบบร่างถามให้ทีมตรวจสอบประเด็นได้ โดยไม่เติมสาเหตุหรือส่งข้อความจริง

## Practice 5: ปรับ brief ให้เหมาะกับผู้รับ

เราจะปรับมุมมองของ brief เพื่อให้ตรงกับงานของผู้รับหนึ่งบทบาท

#### Steps

1. เลือกผู้รับหนึ่งบทบาท แล้วแทนที่ข้อความในวงเล็บก่อนส่ง

   ```text
   ปรับ brief ที่ตรวจแล้วสำหรับ [Sales / Trade Marketing / Finance — เลือกหนึ่งบทบาท]
   จัดเป็น Facts | Questions | Next step ไม่เกิน 5 bullets
   Sales เน้น execution และ stock signal; Trade Marketing เน้น promotion signals; Finance เน้น margin impact
   ใช้เฉพาะมุมมองของบทบาทที่เลือก ไม่เติมต้นทุน สกุลเงิน หรือ promotion mechanic ที่ไม่มีในข้อมูล
   ```

2. เทียบกับ brief เดิมว่าข้อเท็จจริงเหมือนเดิม แต่มุมมองเหมาะกับผู้รับ

#### Checkpoint

- Brief เปลี่ยนลำดับความสำคัญตามผู้รับ โดยข้อเท็จจริงไม่เปลี่ยน

## Practice 6: เตรียม PowerPoint-ready outline สำหรับผู้บริหาร

เราจะจัดผลวิเคราะห์เป็นโครงสไลด์ เพื่อพร้อมนำไปสร้างงานนำเสนอ

#### Steps

1. ใช้ Chat เดิม แล้วส่ง prompt

   ```text
   ใช้เฉพาะข้อมูลต้นทางและผลที่ตรวจแล้วใน Chat นี้
   สร้าง PowerPoint-ready outline ภาษาไทย 6 slides:
   1. Title และวัตถุประสงค์
   2. Promotion performance snapshot
   3. Channel signals
   4. Top products และ items to verify
   5. Information gaps และ questions for Sales team
   6. Recommended next steps และ decision checkpoint
   แต่ละ slide มี Slide title, Key message, 2–3 bullets และ Speaker notes ไม่เกิน 2 ประโยค
   ระบุ chart suggestion 1 จุดที่ใช้ตัวเลขจากข้อมูลได้จริง
   ห้ามเติมปี สกุลเงิน retailer campaign mechanic หรือสาเหตุที่ไม่มีหลักฐาน
   จัดคำตอบให้พร้อมคัดลอกไป PowerPoint
   ```

2. ตรวจว่า slide ที่มีตัวเลขอ้างอิงข้อมูลต้นทางได้
3. หากบัญชีมีเครื่องมือสร้างไฟล์ PowerPoint ให้ลองสร้างจาก outline ที่ตรวจแล้ว แล้วเปิดไฟล์ตรวจเนื้อหา หากไม่มี ให้ใช้ outline แบบคัดลอกแทน การสร้างไฟล์เป็นตัวเลือกที่ **ต้องตรวจสอบก่อนเริ่มอบรม**

#### Checkpoint

- Outline ครบ 6 slides และแยกข้อเท็จจริงออกจากสิ่งที่ยังต้องตรวจสอบ

## Expected Output

- **Core:** Promotion Performance Brief ที่ตรวจตัวเลขแล้ว 1 ชุด
- **ส่วนเสริม:** แบบร่าง Teams, brief ตามผู้รับ และ PowerPoint-ready outline

## Summary

เราใช้ข้อมูลชุดเดียวทำ brief ที่ตรวจย้อนกลับได้ ลองนำวิธีนี้ไปใช้กับรายงานของเราโดยตรวจสิทธิ์และข้อกำหนดข้อมูลขององค์กรก่อนนะครับ

[ถัดไป: Launch Readiness](new-product-launch-readiness.md)

---

All rights reserved by [Amaround Co., Ltd.](https://www.nextflow.in.th/)

© 2026 Teerasej Jiraphatchandej. All rights reserved.

[Email me](mailto:teerasej@nextflow.in.th) · [Facebook](https://www.facebook.com/teerasej) · [YouTube](https://www.youtube.com/teerasej)
