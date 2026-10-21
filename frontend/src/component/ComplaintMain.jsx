import React, { useState } from 'react';
import {
  ShieldAlert,
  Scale,
  RotateCw,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify
} from 'lucide-react';
import './ComplaintMain.css';

export default function ComplaintMain() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'ชาย',
    career: '',
    homePhone: '',
    mobilePhone: '',
    email: '',
    address: '',
    topic: '',
    detail: '',
    isHuman: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      alert('กรุณากรอกชื่อ-สกุล ผู้แจ้ง');
      return;
    }
    if (!formData.topic.trim()) {
      alert('กรุณากรอกเรื่องที่ร้องเรียน/ร้องทุกข์');
      return;
    }
    if (!formData.detail.trim()) {
      alert('กรุณากรอกรายละเอียดเรื่องร้องเรียน');
      return;
    }
    if (!formData.isHuman) {
      alert('กรุณาคลิกยืนยันว่า "ฉันไม่ใช่โปรแกรมอัตโนมัติ"');
      return;
    }

    alert('✅ ส่งข้อมูลแจ้งเรื่องร้องเรียนการทุจริตเรียบร้อยแล้ว ข้อมูลจะถูกเก็บเป็นความลับสูงสุดครับ');
  };

  return (
    <div className="complaint-main-card">
      {/* ==================== 1. แถบหัวเรื่องสีเขียว (รูปที่ 1) ==================== */}
      <div className="main-header-banner">
        <h2 className="main-header-title">แจ้งเรื่องร้องเรียนการทุจริต</h2>
      </div>

      <div className="main-body-content">
        {/* โลโก้และชื่อองค์กร */}
        <div className="main-org-section">
          <div className="main-seal-logo">
            <span className="seal-mini-text-top">อบต.สามพราน</span>
            {/* ตราสัญลักษณ์ใบไม้ */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#0c4d2d">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4L12 22l5.4-1.6C20.2 18.6 22 15.5 22 12c0-5.5-4.5-10-10-10zm-1 15h2v3h-2v-3zm3.5-3.5L12 11l-2.5 2.5-1.5-1.5L12 8l4 4-1.5 1.5z" />
            </svg>
            <span className="seal-mini-text-bottom">อ.สามพราน จ.นครปฐม</span>
          </div>
          <h3 className="main-org-name">องค์การบริหารส่วนตำบลสามพราน</h3>
          <p className="main-org-desc">
            รับแจ้งข้อมูลทุจริต ประพฤติมิชอบ ในบริการประชาชนของพนักงานและลูกจ้าง องค์การบริหารส่วนตำบลสามพราน
          </p>
        </div>

        {/* หมายเหตุสำคัญ 2 ข้อ (สีแดง) */}
        <div className="main-notes-section">
          <p className="notes-heading">หมายเหตุ</p>
          <p className="notes-text">
            1. ผู้แจ้งข้อมูลการทุจริตต้องให้ข้อมูลที่เป็นจริง ชัดเจนกับเอกสารพยานหลักฐาน จะได้รับการคุ้มครองข้อมูล ผู้แจ้งข้อมูลจากผู้เกี่ยวข้อง ผู้รับผิดชอบของหน่วยงานจะรักษาความลับ ไม่กระทำการสิ่งใด อันจะเป็นการก่อความเสียหายหรือทำให้ผู้แจ้งข้อมูลต้องเดือดร้อนเสียหายใด ๆ ทั้งสิ้น จากหน่วยงานหรือเจ้าหน้าที่ที่เกี่ยวข้อง
          </p>
          <p className="notes-text">
            2. ในการให้ข้อมูลการทุจริต ผู้แจ้งจำเป็นต้องระบุรายละเอียดตามความเป็นจริง โปรดตระหนักว่าข้อความที่ท่านได้แจ้งหากเป็นการกล่าวหาหรือให้ร้ายผู้อื่นโดยมิชอบ หรือหากข้อมูลเป็นเท็จหรือทำให้ผู้อื่นได้รับความเสียหาย หรือผิดกฎหมาย จะถูกดำเนินคดีตามกฎหมายทุกกรณี
          </p>
        </div>

        {/* ลิงก์หน่วยงานภายนอก (ป.ป.ช. และ ป.ป.ท.) */}
        <div className="main-external-links">
          <p className="external-links-prompt">
            กรุณาเลือกช่องทางของท่านจากหน่วยงานที่ท่านต้องการแจ้ง เพื่อแสดงความเกี่ยวข้องและข้อมูลของท่าน
          </p>

          <a
            href="https://www.nacc.go.th"
            target="_blank"
            rel="noreferrer"
            className="external-link-row"
          >
            <span className="external-arrow">คลิกที่นี่ &gt;&gt;</span>
            <div className="external-badge">
              <ShieldAlert size={20} color="#d97706" />
            </div>
            <span className="external-agency-title">
              ช่องทางแจ้งเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ สำนักงาน ป.ป.ช.
            </span>
          </a>

          <a
            href="https://www.pacc.go.th"
            target="_blank"
            rel="noreferrer"
            className="external-link-row"
          >
            <span className="external-arrow">คลิกที่นี่ &gt;&gt;</span>
            <div className="external-badge">
              <Scale size={20} color="#7c3aed" />
            </div>
            <span className="external-agency-title">
              ช่องทางแจ้งเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ สำนักงาน ป.ป.ท.
            </span>
          </a>
        </div>

        {/* ==================== 2. แบบฟอร์มกรอกข้อมูล (รูปที่ 2) ==================== */}
        <form onSubmit={handleSubmit} className="complaint-form">
          {/* ชื่อ-สกุล ผู้แจ้ง */}
          <div className="form-group-row">
            <label className="form-label-col">
              ชื่อ-สกุล ผู้แจ้ง <span className="required-star">*</span>
            </label>
            <div className="form-input-col">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-text-input"
                placeholder="ระบุชื่อ-นามสกุล"
              />
            </div>
          </div>

          {/* อายุ */}
          <div className="form-group-row">
            <label className="form-label-col">อายุ</label>
            <div className="form-input-col">
              <div className="age-input-group">
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="form-text-input age-input"
                  min="1"
                  max="120"
                />
                <span>ปี</span>
              </div>
            </div>
          </div>

          {/* เพศ */}
          <div className="form-group-row">
            <label className="form-label-col">เพศ</label>
            <div className="form-input-col">
              <div className="gender-radio-group">
                <label className="gender-radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="ชาย"
                    checked={formData.gender === 'ชาย'}
                    onChange={handleChange}
                  />
                  <span>ชาย</span>
                </label>
                <label className="gender-radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="หญิง"
                    checked={formData.gender === 'หญิง'}
                    onChange={handleChange}
                  />
                  <span>หญิง</span>
                </label>
              </div>
            </div>
          </div>

          {/* อาชีพ */}
          <div className="form-group-row">
            <label className="form-label-col">อาชีพ</label>
            <div className="form-input-col">
              <select
                name="career"
                value={formData.career}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">กรุณาเลือก</option>
                <option value="ข้าราชการ/พนักงานรัฐวิสาหกิจ">ข้าราชการ/พนักงานรัฐวิสาหกิจ</option>
                <option value="พนักงานบริษัท/เอกชน">พนักงานบริษัท/เอกชน</option>
                <option value="ค้าขาย/ธุรกิจส่วนตัว">ค้าขาย/ธุรกิจส่วนตัว</option>
                <option value="เกษตรกร">เกษตรกร</option>
                <option value="นักเรียน/นักศึกษา">นักเรียน/นักศึกษา</option>
                <option value="รับจ้างทั่วไป">รับจ้างทั่วไป</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
            </div>
          </div>

          {/* โทรศัพท์บ้าน */}
          <div className="form-group-row">
            <label className="form-label-col">โทรศัพท์บ้าน</label>
            <div className="form-input-col">
              <input
                type="text"
                name="homePhone"
                value={formData.homePhone}
                onChange={handleChange}
                className="form-text-input"
              />
            </div>
          </div>

          {/* เบอร์โทรศัพท์ */}
          <div className="form-group-row">
            <label className="form-label-col">เบอร์โทรศัพท์</label>
            <div className="form-input-col">
              <input
                type="text"
                name="mobilePhone"
                value={formData.mobilePhone}
                onChange={handleChange}
                className="form-text-input"
              />
            </div>
          </div>

          {/* อีเมล */}
          <div className="form-group-row">
            <label className="form-label-col">อีเมล</label>
            <div className="form-input-col">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-text-input"
              />
            </div>
          </div>

          {/* ที่อยู่ */}
          <div className="form-group-row">
            <label className="form-label-col">ที่อยู่</label>
            <div className="form-input-col">
              <textarea
                name="address"
                rows="4"
                value={formData.address}
                onChange={handleChange}
                className="form-textarea"
              />
            </div>
          </div>

          {/* เรื่องที่ร้องเรียน/ร้องทุกข์ */}
          <div className="form-group-row">
            <label className="form-label-col">
              เรื่องที่ร้องเรียน/ร้องทุกข์ <span className="required-star">*</span>
            </label>
            <div className="form-input-col">
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="form-text-input full-width-input"
                placeholder="ระบุหัวข้อเรื่องที่ต้องการร้องเรียน"
              />
            </div>
          </div>

          {/* รายละเอียด + Rich Text Editor Toolbar */}
          <div className="form-group-row">
            <label className="form-label-col">
              รายละเอียด <span className="required-star">*</span>
            </label>
            <div className="form-input-col">
              <div className="editor-container">
                {/* แถบเครื่องมือตกแต่งข้อความ */}
                <div className="editor-toolbar">
                  <button type="button" className="editor-btn" title="ตัวหนา"><Bold size={13} /></button>
                  <button type="button" className="editor-btn" title="ตัวเอียง"><Italic size={13} /></button>
                  <button type="button" className="editor-btn" title="ขีดเส้นใต้"><Underline size={13} /></button>
                  <button type="button" className="editor-btn" title="ขีดฆ่า"><Strikethrough size={13} /></button>
                  <span style={{ borderLeft: '1px solid #cbd5e1', height: '16px', margin: '0 2px' }} />
                  <button type="button" className="editor-btn" title="จัดชิดซ้าย"><AlignLeft size={13} /></button>
                  <button type="button" className="editor-btn" title="จัดกึ่งกลาง"><AlignCenter size={13} /></button>
                  <button type="button" className="editor-btn" title="จัดชิดขวา"><AlignRight size={13} /></button>
                  <button type="button" className="editor-btn" title="จัดเต็มบรรทัด"><AlignJustify size={13} /></button>
                  <span style={{ borderLeft: '1px solid #cbd5e1', height: '16px', margin: '0 2px' }} />
                  <select className="editor-select" defaultValue="TH SarabunPSK">
                    <option value="TH SarabunPSK">TH SarabunPSK</option>
                    <option value="Arial">Arial</option>
                    <option value="Tahoma">Tahoma</option>
                  </select>
                  <select className="editor-select" defaultValue="16px">
                    <option value="14px">14px</option>
                    <option value="16px">16px</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                  </select>
                </div>

                <textarea
                  name="detail"
                  value={formData.detail}
                  onChange={handleChange}
                  className="editor-textarea"
                  placeholder="กรอกรายละเอียดเหตุการณ์ พฤติการณ์ หรือข้อเท็จจริงเกี่ยวกับการทุจริต..."
                />

                <div className="editor-statusbar">
                  <span>พารากราฟ: p</span>
                </div>
              </div>
            </div>
          </div>

          {/* reCAPTCHA Widget */}
          <div className="form-group-row">
            <label className="form-label-col">
              ตรวจสอบว่าท่านไม่ใช่<br />โปรแกรมอัตโนมัติ <span className="required-star">*</span>
            </label>
            <div className="form-input-col">
              <div className="recaptcha-widget-box">
                <label className="recaptcha-checkbox-label">
                  <input
                    type="checkbox"
                    name="isHuman"
                    checked={formData.isHuman}
                    onChange={handleChange}
                    className="recaptcha-input"
                  />
                  <span>ฉันไม่ใช่โปรแกรมอัตโนมัติ</span>
                </label>

                <div className="recaptcha-brand-info">
                  <RotateCw size={24} className="recaptcha-logo-icon" />
                  <span className="recaptcha-text-logo">reCAPTCHA</span>
                  <span className="recaptcha-links">ข้อมูลส่วนบุคคล - ข้อกำหนด</span>
                </div>
              </div>
            </div>
          </div>

          {/* ปุ่มส่ง */}
          <div className="form-footer-action">
            <button type="submit" className="btn-submit-complaint">
              ส่ง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
