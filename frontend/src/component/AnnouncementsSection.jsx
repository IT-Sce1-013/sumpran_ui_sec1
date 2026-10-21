import React from 'react';
import { Megaphone, ClipboardCheck, FileText, Play, File } from 'lucide-react';
import './AnnouncementsSection.css';

export default function AnnouncementsSection() {
  // ข้อมูลคอลัมน์ที่ 1: ข่าวประชาสัมพันธ์
  const newsList = [
    {
      title: 'ประกาศสัมพันธ์ องค์การบริหารส่วนตำบลสามพราน ประกาศรับสมัครบุคคลเพื่อคัดเลือกกรรมการ...',
      thumb: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=200&auto=format&fit=crop',
      link: '#news-1'
    },
    {
      title: 'ประกาศสัมพันธ์ การจัดการรับสินค้า กำหนดจัดอบรมรอบแรกที่ได้เลิกหลักประกันต่อยขออบบขอร้อง...',
      thumb: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=200&auto=format&fit=crop',
      link: '#news-2'
    },
    {
      title: 'ประกาศองค์การบริหารส่วนตำบลสามพราน เรื่อง รายชื่อผู้ผ่านการสรรหาและเลือกสรรเป็นพ...',
      thumb: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop',
      link: '#news-3'
    },
    {
      title: 'ประกาศองค์การบริหารส่วนตำบลสามพราน เรื่อง รายชื่อผู้มีสิทธิ์เข้ารับการสรรหาหรือ...',
      thumb: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=200&auto=format&fit=crop',
      link: '#news-4'
    }
  ];

  // ข้อมูลคอลัมน์ที่ 2: ประกาศจัดซื้อจัดจ้าง / ผลประกาศ
  const procurementList = [
    {
      title: 'รายงานผลการพิจารณาการจัดซื้อจัดจ้าง นายกเทศมนตรีตำบลคลองทราย (e-bidding)',
      link: '#procurement-1'
    },
    {
      title: 'รายงานผลการพิจารณาการจัดซื้อจัดจ้าง นายกเทศมนตรีตำบลคลองทราย (ก. 2569)',
      link: '#procurement-2'
    },
    {
      title: 'รายงานผลการพิจารณาการจัดซื้อจัดจ้าง นายกเทศมนตรีตำบลคลองทราย (e-กพ พ.ศ. 2569)',
      link: '#procurement-3'
    },
    {
      title: 'ประกาศผลการพิจารณาการจัดซื้อจัดจ้าง ประจำลาผลสอบ สอบทพ พ.ศ. 2569',
      link: '#procurement-4'
    }
  ];

  // ข้อมูลคอลัมน์ที่ 3: หนังสือราชการ
  const govLetterList = [
    {
      date: '23 มิ.ย.',
      year: '2569',
      title: '[นน 0810.4/15503] ออกหนังสือการบันทึกในการปรับปรุงทางองค์การเมือง อำเภอบางเลน',
      link: '#gov-1'
    },
    {
      date: '23 มิ.ย.',
      year: '2569',
      title: '[นน 0816.6/2939] การรับสินค้าอบบุคคลการศึกษาลูกเสือ จำนวน 3 หลักสูตร',
      link: '#gov-2'
    },
    {
      date: '23 มิ.ย.',
      year: '2569',
      title: '[นน 0816.6//2991] ส่งประกาศสัมพันธ์ทานปรับปรุงสัมมนาการออกหนังสือเรียนโดยทางการจัดการยุทธการเน้นคุณธรรมจริยธรรม',
      link: '#gov-3'
    },
    {
      date: '23 มิ.ย.',
      year: '2569',
      title: '[นน 0808 2/7 2998] การโอนเงินภาษี',
      link: '#gov-4'
    }
  ];

  return (
    <section className="announcements-section">
      <div className="announcements-grid">

        {/* ==================== คอลัมน์ที่ 1: ข่าวประชาสัมพันธ์ ==================== */}
        <div className="announcement-card">
          <div>
            <div className="card-header">
              <span className="card-header-icon">
                <Megaphone size={22} />
              </span>
              <h3 className="card-title">ข่าวประชาสัมพันธ์</h3>
            </div>

            <div className="card-body">
              {newsList.map((item, index) => (
                <a key={index} href={item.link} className="announcement-item">
                  <span className="news-text">{item.title}</span>
                  <div className="news-thumb-box">
                    <img src={item.thumb} alt="เอกสาร" className="news-thumb" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="card-footer">
            <a href="#all-news" className="btn-view-all">ดูทั้งหมด</a>
          </div>
        </div>

        {/* ==================== คอลัมน์ที่ 2: ประกาศจัดซื้อจัดจ้าง / ผลประกาศ ==================== */}
        <div className="announcement-card">
          <div>
            <div className="card-header">
              <span className="card-header-icon">
                <ClipboardCheck size={22} />
              </span>
              <h3 className="card-title">ประกาศจัดซื้อจัดจ้าง / ผลประกาศ</h3>
            </div>

            <div className="card-body">
              {procurementList.map((item, index) => (
                <a key={index} href={item.link} className="procurement-item">
                  <Play size={10} fill="#0c4d2d" className="bullet-icon" />
                  <span className="procurement-text">{item.title}</span>
                  <div className="pdf-badge">
                    <File size={22} />
                    <span className="pdf-tag">PDF</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="card-footer">
            <a href="#all-procurements" className="btn-view-all">ดูทั้งหมด</a>
          </div>
        </div>

        {/* ==================== คอลัมน์ที่ 3: หนังสือราชการ ==================== */}
        <div className="announcement-card">
          <div>
            <div className="card-header">
              <span className="card-header-icon">
                <FileText size={22} />
              </span>
              <h3 className="card-title">หนังสือราชการ</h3>
            </div>

            <div className="card-body">
              {govLetterList.map((item, index) => (
                <a key={index} href={item.link} className="gov-item">
                  <div className="date-badge">
                    <span>{item.date}</span>
                    <span>{item.year}</span>
                  </div>
                  <span className="gov-text">{item.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="card-footer">
            <a href="#all-gov" className="btn-view-all">ดูทั้งหมด</a>
          </div>
        </div>

      </div>
    </section>
  );
}
