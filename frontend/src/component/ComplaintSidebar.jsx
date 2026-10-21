import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Database,
  Users,
  TrendingUp,
  Layers,
  Files,
  FileText,
  Scale,
  ChevronDown
} from 'lucide-react';
import './ComplaintSidebar.css';

export default function ComplaintSidebar() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [isBasicInfoOpen, setIsBasicInfoOpen] = useState(location.pathname === '/general-info');

  const basicInfoSubmenu = [
    { title: 'ประวัติความเป็นมา', link: '#history' },
    { title: 'ข้อมูลสภาพทั่วไป', link: '/general-info' },
    { title: 'ข้อมูลชุมชน', link: '#community-info' },
    { title: 'ผลิตภัณฑ์ชุมชน หรือ OTOP', link: '#otop' },
    { title: 'สถานที่สำคัญ', link: '#landmarks' },
    { title: 'แกลอรี่ภาพถ่ายภูมิทัศน์', link: '#gallery' },
  ];

  const menuItems = [
    { title: 'บุคลากร', icon: <Users size={19} />, link: '#personnel' },
    { title: 'ผลการดำเนินงาน', icon: <TrendingUp size={19} />, link: '#performance' },
    { title: 'อำนาจหน้าที่', icon: <Layers size={19} />, link: '#authority' },
    { title: 'เอกสารประชาสัมพันธ์', icon: <Files size={19} />, link: '#pr-docs' },
    { title: 'กฎหมายและระเบียบ', icon: <FileText size={19} />, link: '#regulations' },
    { title: 'แบบสำหรับประชาชน', icon: <Scale size={19} />, link: '#citizen-forms' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`ค้นหา: ${searchTerm}`);
    }
  };

  return (
    <aside className="complaint-sidebar-card">
      {/* 1. ช่องค้นหาข้อมูล */}
      <form onSubmit={handleSearch} className="sidebar-search-box">
        <input
          type="text"
          placeholder="ค้นหาข้อมูลที่ต้องการ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sidebar-search-input"
        />
        <button type="submit" className="sidebar-search-btn" title="ค้นหา">
          <Search size={16} />
        </button>
      </form>

      {/* 2. รายการเมนู */}
      <nav className="sidebar-menu-list">
        
        {/* เมนูที่ 1: ข้อมูลพื้นฐานตำบล (Dropdown) */}
        <div className="sidebar-dropdown-group">
          <button
            type="button"
            className={`sidebar-menu-item sidebar-dropdown-btn ${isBasicInfoOpen ? 'active' : ''}`}
            onClick={() => setIsBasicInfoOpen(!isBasicInfoOpen)}
          >
            <div className="sidebar-item-left">
              <span className="sidebar-menu-icon">
                <Database size={19} />
              </span>
              <span>ข้อมูลพื้นฐานตำบล</span>
            </div>
            <ChevronDown
              size={16}
              className={`sidebar-chevron ${isBasicInfoOpen ? 'rotate' : ''}`}
            />
          </button>

          {/* รายการเมนูย่อยของข้อมูลพื้นฐานตำบล */}
          {isBasicInfoOpen && (
            <div className="sidebar-submenu-list">
              {basicInfoSubmenu.map((sub, idx) =>
                sub.link.startsWith('/') ? (
                  <Link key={idx} to={sub.link} className="sidebar-submenu-item">
                    <span className="submenu-bullet">•</span>
                    <span>{sub.title}</span>
                  </Link>
                ) : (
                  <a key={idx} href={sub.link} className="sidebar-submenu-item">
                    <span className="submenu-bullet">•</span>
                    <span>{sub.title}</span>
                  </a>
                )
              )}
            </div>
          )}
        </div>

        {/* เมนูอื่น ๆ 6 เมนู */}
        {menuItems.map((item, index) => (
          <a key={index} href={item.link} className="sidebar-menu-item">
            <span className="sidebar-menu-icon">{item.icon}</span>
            <span>{item.title}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
