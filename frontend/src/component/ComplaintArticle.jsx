import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  ShieldAlert,
  Clock,
  ShieldCheck
} from 'lucide-react';
import './ComplaintArticle.css';

export default function ComplaintArticle() {
  // นาฬิกาดิจิทัลเดินสดแบบ Real-time
  const [time, setTime] = useState(new Date());
  const [selectedVote, setSelectedVote] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDigits = (num) => String(num).padStart(2, '0');

  // แปลงวันที่เป็นรูปแบบภาษาไทย พ.ศ.
  const thaiDays = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'];
  const thaiMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  const thaiDateString = `${thaiDays[time.getDay()]}ที่ ${time.getDate()} ${thaiMonths[time.getMonth()]} ${time.getFullYear() + 543}`;

  const handleVoteSubmit = (e) => {
    e.preventDefault();
    if (!selectedVote) {
      alert('กรุณาเลือกตัวเลือกก่อนกด VOTE ครับ');
      return;
    }
    alert(`ขอบคุณสำหรับการร่วมแสดงความคิดเห็น: ${selectedVote}`);
  };

  return (
    <article className="complaint-article-stack">
      {/* 1. การ์ด มหาวิทยาลัยราชภัฏสวนสุนันทา */}
      <a
        href="https://nkpt.ssru.ac.th"
        target="_blank"
        rel="noreferrer"
        className="article-card card-ssru"
      >
        <div className="ssru-logo-box">
          <GraduationCap size={28} />
        </div>
        <div className="ssru-info">
          <span className="ssru-title">มหาวิทยาลัยราชภัฏสวนสุนันทา</span>
          <span className="ssru-sub">ศูนย์การศึกษาจังหวัดนครปฐม</span>
          <span className="ssru-link">www.nkpt.ssru.ac.th</span>
        </div>
      </a>

      {/* 2. การ์ด LINE QR Code อบต.สามพราน */}
      <div className="article-card card-line-qr">
        <div className="line-header">
          <div className="line-seal">อบต.</div>
          <div className="line-org-text">
            <span className="line-org-name">อบต.สามพราน</span>
            <span className="line-id">@sao-sampran</span>
          </div>
        </div>
        <div className="line-qr-box">
          {/* QR Code SVG / Mockup พร้อมโลโก้ Line */}
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/ti/p/@sao-sampran"
            alt="LINE QR Code"
            className="line-qr-img"
          />
        </div>
      </div>

      {/* 3. การ์ด สำนักงาน ป.ป.ช. */}
      <a
        href="https://www.nacc.go.th"
        target="_blank"
        rel="noreferrer"
        className="article-card card-nacc"
      >
        <div className="nacc-logo">
          <ShieldAlert size={28} />
        </div>
        <div className="nacc-info">
          <span className="nacc-title">สำนักงานคณะกรรมการป้องกัน<br />และปราบปรามการทุจริตแห่งชาติ</span>
          <span className="nacc-sub">Office of the National Anti-Corruption Commission</span>
        </div>
      </a>

      {/* 4. แบนเนอร์ Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="article-card card-facebook"
      >
        <span className="fb-text-logo">facebook</span>
        <span className="fb-text-sub">องค์การบริหารส่วนตำบลสามพราน</span>
      </a>

      {/* 5. แบนเนอร์ ประกาศจัดซื้อจัดจ้าง e-GP */}
      <a
        href="http://www.gprocurement.go.th"
        target="_blank"
        rel="noreferrer"
        className="article-card card-egp"
      >
        <div className="egp-seal-mini">
          <ShieldCheck size={26} />
        </div>
        <div className="egp-mini-info">
          <span className="egp-mini-title">ประกาศ</span>
          <span className="egp-mini-sub">จัดซื้อจัดจ้าง</span>
          <span className="egp-mini-title" style={{ fontSize: '10.5px' }}>ภาครัฐผ่านระบบ e-GP</span>
        </div>
      </a>

      {/* 6. วิดเจ็ต ร่วมแสดงความคิดเห็น (Poll) */}
      <form onSubmit={handleVoteSubmit} className="article-card card-poll">
        <span className="poll-top-label">ร่วมแสดง</span>
        <h4 className="poll-heading">ความคิดเห็น</h4>
        <p className="poll-question">
          ท่านคิดว่า อบต.สามพราน ควรเน้นพัฒนาด้านใดในการจัดทำบริการต่อไป
        </p>

        <div className="poll-options-list">
          {[
            'แก้ไขปัญหายาเสพติด',
            'แก้ไขปัญหาสิ่งแวดล้อม',
            'ปรับปรุงระบบสาธารณูปโภค',
            'พัฒนาคุณภาพชีวิตเด็ก/ผู้สูงอายุ',
            'จัดการเรื่องการศึกษาที่ทั่วถึงและนอกระบบ'
          ].map((option, idx) => (
            <label key={idx} className="poll-option-label">
              <input
                type="radio"
                name="poll"
                value={option}
                checked={selectedVote === option}
                onChange={(e) => setSelectedVote(e.target.value)}
                className="poll-radio"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        <button type="submit" className="poll-vote-btn">
          VOTE
        </button>
      </form>

      {/* 7. วิดเจ็ต นาฬิกาและวันที่ดิจิทัล (Live Clock) */}
      <div className="article-card card-clock">
        <div className="clock-icon-box">
          <Clock size={32} />
        </div>
        <div className="clock-text-box">
          <div className="clock-time">
            {formatDigits(time.getHours())} : {formatDigits(time.getMinutes())} : {formatDigits(time.getSeconds())}
          </div>
          <div className="clock-date">{thaiDateString}</div>
        </div>
      </div>
    </article>
  );
}
