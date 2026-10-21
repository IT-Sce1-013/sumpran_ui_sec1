"use client"


import React from 'react';
import './NewCards.css';

const person = "https://www.thaigov.go.th/uploads/images/288/2025/10/jpg/20251015162917_5405.jpg";
const meeting = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop";
const activity1 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop";
const activity2 = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop";

export default function NewsCard() {
  return (
    <section className="news-container">

      {/* Card ซ้าย */}
      <div className="news-card person-card">
        <img src={person} alt="บุคลากร" />

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
