import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Star,
  Radio,
  BarChart2
} from 'lucide-react';
import './ComplaintFooter.css';

export default function ComplaintFooter() {
  const visitorStats = [
    { label: 'ขณะนี้', value: '15', isOnline: true },
    { label: 'เดือนนี้', value: '8,630' },
    { label: 'วันนี้', value: '248' },
    { label: 'ปีนี้', value: '94,520' },
    { label: 'สัปดาห์นี้', value: '1,842' },
    { label: 'ทั้งหมด', value: '382,140' },
  ];

  return (
    <footer className="complaint-footer-wrapper">
      <div className="complaint-footer-container">

        {/* 1. ฝั่งซ้าย: ข้อมูลที่อยู่และการติดต่อ */}
        <div className="footer-left-info">
          <div className="footer-seal-logo">
            <span className="footer-seal-top">อบต.สามพราน</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0c4d2d">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4L12 22l5.4-1.6C20.2 18.6 22 15.5 22 12c0-5.5-4.5-10-10-10zm-1 15h2v3h-2v-3zm3.5-3.5L12 11l-2.5 2.5-1.5-1.5L12 8l4 4-1.5 1.5z" />
            </svg>
            <span className="footer-seal-bottom">อ.สามพราน จ.นครปฐม</span>
          </div>

          <div className="footer-contact-text">
            <h4 className="footer-org-heading">องค์การบริหารส่วนตำบลสามพราน</h4>
            <p className="footer-text-line">
              99 หมู่ที่ 6 ต.สามพราน อ.สามพราน จ.นครปฐม 73110 &bull; โทร. 0-3438-5111
            </p>
            <p className="footer-text-line">
              เว็บ: <a href="http://www.sao-sampran.go.th" target="_blank" rel="noreferrer">www.sao-sampran.go.th</a> &bull; อีเมล: sao.sampran99@gmail.com
            </p>

            <div className="footer-nav-links">
              <Link to="/">หน้าแรก</Link>
              <span>/</span>
              <a href="#sitemap">แผนผังเว็บไซต์</a>
              <span>/</span>
              <a href="#contact">ติดต่อ</a>
            </div>
          </div>
        </div>

        {/* 2. ตรงกลาง: กล่องสถิติผู้เข้าชมเว็บไซต์ (กะทัดรัดแบบ 2 คอลัมน์) */}
        <div className="visitor-stats-card">
          <div className="visitor-stats-header">
            <BarChart2 size={14} />
            <span>จำนวนผู้เข้าชมเว็บไซต์</span>
          </div>

          <div className="visitor-stats-grid">
            {visitorStats.map((item, index) => (
              <div key={index} className="visitor-stat-row">
                <div className="stat-label-group">
                  {item.isOnline && <span className="stat-dot" />}
                  <span>{item.label}</span>
                </div>
                <span className="stat-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. ฝั่งขวา: 4 ปุ่มด่วนและไอคอนเบราว์เซอร์ */}
        <div className="footer-tools-grid">
          {/* ปุ่ม 1: ตรวจสอบ E-Mail */}
          <a href="#check-email" className="footer-tool-btn">
            <Mail size={15} className="tool-icon-green" />
            <span>ตรวจ E-Mail</span>
          </a>

          {/* ปุ่ม 2: เว็บไซต์เดิม */}
          <a href="#old-web" className="footer-tool-btn">
            <Star size={15} className="tool-icon-green" fill="#0c4d2d" />
            <span>เว็บไซต์เดิม</span>
          </a>

          {/* ปุ่ม 3: ติดต่อ เว็บมาสเตอร์ */}
          <a href="#webmaster" className="footer-tool-btn">
            <Radio size={15} className="tool-icon-green" />
            <span>เว็บมาสเตอร์</span>
          </a>

          {/* กล่อง 4: PDF & Chrome */}
          <div className="footer-tool-btn-icons">
            <div className="pdf-icon-badge" title="Adobe Acrobat PDF">
              PDF
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" title="Google Chrome">
              <circle cx="12" cy="12" r="10" fill="#4285F4" />
              <circle cx="12" cy="12" r="5" fill="#ffffff" />
              <circle cx="12" cy="12" r="4" fill="#1a73e8" />
            </svg>
          </div>
        </div>

      </div>

      {/* แถบล่างสุด: ข้อความลิขสิทธิ์และการแสดงผล */}
      <div className="complaint-footer-copyright">
        เหมาะสำหรับการแสดงผลบน Google Chrome และ Firefox &bull; สงวนลิขสิทธิ์ 2568 องค์การบริหารส่วนตำบลสามพราน
      </div>
    </footer>
  );
}
