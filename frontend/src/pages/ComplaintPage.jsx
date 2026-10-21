import React from 'react';
import ComplaintHeader from '../component/ComplaintHeader.jsx';
import ComplaintSidebar from '../component/ComplaintSidebar.jsx';
import ComplaintArticle from '../component/ComplaintArticle.jsx';
import ComplaintMain from '../component/ComplaintMain.jsx';
import ComplaintFooter from '../component/ComplaintFooter.jsx';
import './ComplaintPage.css';

export default function ComplaintPage() {
  return (
    <div className="complaint-page-root">
      {/* 1. ส่วน Header ด้านบน */}
      <ComplaintHeader />

      {/* 2. ส่วนเนื้อหาแบ่ง 20% (ซ้าย) : 80% (ขวา) */}
      <div className="complaint-page-body">
        
        {/* คอลัมน์ซ้าย ~20% */}
        <div className="complaint-left-column">
          {/* ซ้ายบน: Sidebar (รูปที่ 1) */}
          <ComplaintSidebar />

          {/* ซ้ายล่าง: Article (รูปที่ 2) */}
          <ComplaintArticle />
        </div>

        {/* คอลัมน์ขวา ~80% (พื้นที่เนื้อหาหลัก) */}
        <main className="complaint-right-column">
          <ComplaintMain />
        </main>

      </div>

      {/* 3. ส่วน Footer ด้านล่างสุด */}
      <ComplaintFooter />
    </div>
  );
}
