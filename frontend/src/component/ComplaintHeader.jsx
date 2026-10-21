import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './ComplaintHeader.css';

export default function ComplaintHeader() {
  return (
    <header className="complaint-header-wrapper">
      <div className="complaint-header-container">
        
        {/* ฝั่งซ้าย: โลโก้ตรา อบต. และชื่อหน่วยงาน */}
        <Link to="/" className="complaint-header-left">
          <div className="complaint-logo-seal">
            <span className="seal-top-text">อบต.สามพราน</span>
            <div className="seal-icon-box">
              {/* ตราสัญลักษณ์ใบไม้/ต้นไม้ */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0c4d2d">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4L12 22l5.4-1.6C20.2 18.6 22 15.5 22 12c0-5.5-4.5-10-10-10zm-1 15h2v3h-2v-3zm3.5-3.5L12 11l-2.5 2.5-1.5-1.5L12 8l4 4-1.5 1.5z" />
              </svg>
            </div>
            <span className="seal-bottom-text">อ.สามพราน จ.นครปฐม</span>
          </div>

          <div className="complaint-header-info">
            <h1 className="complaint-header-title">องค์การบริหารส่วนตำบลสามพราน</h1>
            <p className="complaint-header-subtitle">อำเภอสามพราน จังหวัดนครปฐม</p>
          </div>
        </Link>

        {/* ฝั่งขวา: ปุ่มหน้าหลัก (นำมาไว้ตำแหน่ง ดูทั้งหมด เดิม ตามที่สั่ง) */}
        <div className="complaint-header-right">
          <Link to="/" className="complaint-btn-home">
            <Home size={18} />
            <span>หน้าหลัก</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
