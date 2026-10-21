import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  Download,
  LogIn,
  Home,
  Folder,
  BookOpen,
  FileText,
  Megaphone,
  ClipboardList,
  Mail,
  Globe,
  Users,
  Monitor
} from 'lucide-react';
import './QuickServices.css';

export default function QuickServices() {
  const serviceItems = [
    {
      titleLine1: 'หน้าแรก',
      titleLine2: 'ที่ทำการ',
      icon: <Home size={32} className="icon-home" />,
      link: '#office'
    },
    {
      titleLine1: 'หมู่บ้าน',
      titleLine2: 'ในเขตพื้นที่',
      icon: <Folder size={32} className="icon-folder" />,
      link: '#villages'
    },
    {
      titleLine1: 'คู่มือ',
      titleLine2: 'ประชาชน',
      icon: <BookOpen size={32} className="icon-handbook" />,
      link: '#handbook'
    },
    {
      titleLine1: 'รายงาน',
      titleLine2: 'กิจการสภา',
      icon: <FileText size={32} className="icon-report" />,
      link: '#council-report'
    },
    {
      titleLine1: 'ร้องเรียน',
      titleLine2: 'ดาวน์โหลดแบบฟอร์ม',
      icon: <Megaphone size={32} className="icon-megaphone" />,
      link: '#complaint-form'
    },
    {
      titleLine1: 'แบบสอบถาม',
      titleLine2: 'ความพึงพอใจ',
      icon: <ClipboardList size={32} className="icon-survey" />,
      link: '#survey'
    },
    {
      titleLine1: 'สื่อสารข้อมูล',
      titleLine2: 'ข่าวสาร',
      icon: <Mail size={32} className="icon-news" />,
      link: '#news'
    },
    {
      titleLine1: 'ศูนย์ข้อมูล',
      titleLine2: 'ข่าวสาร',
      icon: <Globe size={32} className="icon-globe" />,
      link: '#info-center'
    },
    {
      titleLine1: 'กลุ่มการ',
      titleLine2: 'กลุ่มองค์กร',
      icon: <Users size={32} className="icon-group" />,
      link: '#groups'
    },
    {
      titleLine1: 'E-Service',
      titleLine2: 'รับบริการที่ดี',
      icon: <Monitor size={32} className="icon-eservice-card" />,
      link: '#eservice-portal'
    }
  ];

  return (
    <section className="quick-services-section">
      {/* แถวบน: 4 ปุ่ม Action */}
      <div className="action-buttons-grid">
        <a href="#contact" className="action-btn btn-contact">
          <Phone size={22} />
          <span>ติดต่อ</span>
        </a>

        <Link to="/complaint" className="action-btn btn-complaint">
          <MessageSquare size={22} />
          <span>ร้องเรียน</span>
        </Link>

        <a href="#download" className="action-btn btn-download">
          <Download size={22} />
          <span>ดาวน์โหลดเอกสาร</span>
        </a>

        <a href="#eservice" className="action-btn btn-eservice">
          <LogIn size={22} />
          <span>E-Service</span>
        </a>
      </div>

      {/* แถวล่าง: 10 ไอคอนบริการ */}
      <div className="service-icons-card">
        {serviceItems.map((item, index) => (
          <a key={index} href={item.link} className="service-item">
            <div className="service-icon-box">
              {item.icon}
            </div>
            <div className="service-title">
              <span>{item.titleLine1}</span>
              <span>{item.titleLine2}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
