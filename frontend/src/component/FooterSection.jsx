import React from 'react';
import {
  MessageCircle,
  MessageSquare,
  Phone,
  MapPin,
  PhoneCall,
  Mail,
  ShieldCheck
} from 'lucide-react';
import './FooterSection.css';

const FacebookIcon = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function FooterSection() {
  // ข้อมูลรายการกระทู้
  const forumTopics = [
    {
      title: 'ซ่อมบ้านหมู่ 2',
      views: 286,
      replies: 0,
      link: '#forum-1'
    },
    {
      title: 'รบกวนช่วยสอบถามคอนกรีตถล่ม 22 ตั้งอยู่ผู้ใหญ่เหน่ง สำนักอาคารเรือ',
      views: 151,
      replies: 0,
      link: '#forum-2'
    },
    {
      title: 'รบกวนช่วยสอบถามคอนกรีตถล่ม 22 ตั้งอยู่ผู้ใหญ่เหน่ง สำนักอาคารเรือ',
      views: 151,
      replies: 0,
      link: '#forum-3'
    }
  ];

  return (
    <footer className="footer-section">
      {/* ==================== 3 การ์ดด้านบน ==================== */}
      <div className="footer-cards-container">

        {/* การ์ดที่ 1: กระดานกระทู้ */}
        <div className="footer-card">
          <div className="footer-card-header">
            <MessageCircle size={22} className="forum-icon" />
            <h3 className="footer-card-title forum-title">กระดานกระทู้</h3>
          </div>

          <div className="forum-list">
            {forumTopics.map((item, index) => (
              <a key={index} href={item.link} className="forum-item">
                <MessageSquare size={18} className="forum-item-icon" />
                <div className="forum-item-content">
                  <span className="forum-topic">{item.title}</span>
                  <span className="forum-stats">
                    (อ่าน : {item.views}, ตอบ : {item.replies})
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* การ์ดที่ 2: Social Media */}
        <div className="footer-card">
          <div className="footer-card-header">
            <FacebookIcon size={22} className="social-icon-header" />
            <h3 className="footer-card-title social-title">Social Media</h3>
          </div>

          <div className="social-banners">
            {/* Facebook Banner */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="fb-banner"
            >
              <span className="fb-logo-text">facebook</span>
              <span className="fb-subtext">องค์การบริหารส่วนตำบลสามพราน</span>
            </a>

            {/* e-GP Banner */}
            <a
              href="http://www.gprocurement.go.th"
              target="_blank"
              rel="noreferrer"
              className="egp-banner"
            >
              <div className="egp-seal-box">
                <ShieldCheck size={26} />
              </div>
              <div className="egp-text">
                <span className="egp-title">ช่องทางร้องขอ e-GP</span>
                <span className="egp-desc">บริการภาครัฐ e-GP</span>
              </div>
            </a>
          </div>
        </div>

        {/* การ์ดที่ 3: ติดต่อ | Info */}
        <div className="footer-card">
          <div className="footer-card-header">
            <div className="info-header-badge">
              <Phone size={16} />
            </div>
            
          </div>

          <div className="info-list">
            <h3 className="footer-card-title info-title">ติดต่อ | Info</h3>
            <div className="info-item">
              <MapPin size={20} className="info-item-icon" />
              <span>องค์การบริหารส่วนตำบลสามพราน</span>
            </div>

            <a href="tel:0922549902" className="info-item">
              <Phone size={20} className="info-item-icon" />
              <span>09-2254-9902</span>
            </a>

            <a href="tel:0922549902" className="info-item">
              <PhoneCall size={20} className="info-item-icon" />
              <span>09-2254-9902</span>
            </a>

            <a href="mailto:email@sao-sampran.com" className="info-item">
              <Mail size={20} className="info-item-icon" />
              <span>email@sao-sampran.com</span>
            </a>
          </div>
        </div>

      </div>

      {/* ==================== แถบ Footer ท้ายเว็บ ==================== */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-content">
          <p className="footer-org-name">องค์การบริหารส่วนตำบลสามพราน</p>
          <p className="footer-address">
            111 หมู่ที่ 5 ตำบลสามพราน อำเภอสามพราน จังหวัดนครปฐม 73110
          </p>
          <p className="footer-contact-details">
            โทรศัพท์ 09-2254-9902, 09-2254-9903 &nbsp; E-mail: email@sao-sampran.com
          </p>
        </div>
      </div>
    </footer>
  );
}
