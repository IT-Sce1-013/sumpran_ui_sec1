import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './ComplaintHeader.css';
import logo from '../assets/logo.png';
import './nevber.css';

export default function ComplaintHeader() {
  return (
    <header className="complaint-header-wrapper">
      <div className="complaint-header-container">
        
        {/* ฝั่งซ้าย: โลโก้ตรา อบต. และชื่อหน่วยงาน */}
        <Link to="/" className="complaint-header-left">
          <img src={logo} alt="ตรา อบต.สามพราน" className="navbar-logo-img" />

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
