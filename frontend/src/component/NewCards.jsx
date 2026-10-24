"use client"

import React from 'react';
import './NewCards.css';
import persons from "../assets/P.jpg"
import meeting from "../assets/p1.jpg"
import activity1 from "../assets/p2.jpg"
import activity2 from "../assets/p3.jpg"

export default function NewsCard() {
  return (
    <section className="news-container">

      {/* Card ซ้าย */}
      <div className="news-card person-card">
        <img src={persons} alt="บุคลากร" />

        <div className="news-content">
          <h2>นายบุญสม จรดล</h2>
          <p>นายกองค์การบริหารส่วนตำบลสามพราน</p>
        </div>
      </div>


      {/* Card กลาง */}
      <div className="news-card main-card">
        <img src={meeting} alt="ห้องประชุม" />

        <div className="news-content">
          <p>
            องค์การบริหารส่วนตำบลสามพราน
            กำหนดจัดอบรมการใช้ระบบสารบรรณอิเล็กทรอนิกส์
          </p>
        </div>
      </div>


      {/* Card ด้านขวา */}
      <div className="side-cards">

        <div className="news-card small-card">
          <img src={activity1} alt="กิจกรรม" />

          <div className="news-content">
            <p>
              การจัดการอบรมต้นแบบ
              สร้างวิสัยทัศน์ที่รับผิดชอบต่อสิ่งแวดล้อม
            </p>
          </div>
        </div>


        <div className="news-card small-card">
          <img src={activity2} alt="พิธี" />

          <div className="news-content">
            <p>
              พิธีทำบุญถวายเทียน
              กระบวนพิธี
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
