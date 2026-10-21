import React from 'react';
import {
  Users,
  MapPin,
  Landmark,
  Home,
  GraduationCap,
  Sparkles,
  Building2,
  Coins
} from 'lucide-react';
import ComplaintHeader from '../component/ComplaintHeader.jsx';
import ComplaintSidebar from '../component/ComplaintSidebar.jsx';
import ComplaintArticle from '../component/ComplaintArticle.jsx';
import ComplaintFooter from '../component/ComplaintFooter.jsx';
import './GeneralInfoPage.css';

export default function GeneralInfoPage() {
  // ข้อมูลหมู่บ้าน 10 หมู่
  const villages = [
    { no: 'หมู่ที่ 1', name: 'บ้านสวนหลวง' },
    { no: 'หมู่ที่ 2', name: 'บ้านบางช้าง' },
    { no: 'หมู่ที่ 3', name: 'บ้านศิริชัยบ้าน' },
    { no: 'หมู่ที่ 4', name: 'บ้านคลองชุม' },
    { no: 'หมู่ที่ 5', name: 'บ้านโรงหีบ' },
    { no: 'หมู่ที่ 6', name: 'บ้านชัยพัฒนา' },
    { no: 'หมู่ที่ 7', name: 'บ้านคลองเตย' },
    { no: 'หมู่ที่ 8', name: 'บ้านใหม่' },
    { no: 'หมู่ที่ 9', name: 'บ้านแหลมบัว' },
    { no: 'หมู่ที่ 10', name: 'บ้านคลองบางจาก' },
  ];

  // ข้อมูล 3 ภาพวงกลม ผลิตผลการเกษตร (รูปที่ 2)
  const agriProducts = [
    {
      name: 'กล้วยไม้',
      img: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'สวนผลไม้ (ชมพู่, มะม่วง, ฝรั่ง)',
      img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'ไม้ประดับ (ไม้ใบ)',
      img: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=400&auto=format&fit=crop'
    }
  ];

  // ข้อมูล 5 การ์ด สามพรานน่าอยู่ น่าเที่ยว น่าลงทุน (รูปที่ 3)

  return (
    <div className="general-info-page-root">
      {/* 1. ส่วน Header ด้านบน */}
      <ComplaintHeader />

      {/* 2. ส่วนเนื้อหาแบ่ง 3 คอลัมน์ (ซ้าย ~20% | กลาง Main | ขวา ~22%) */}
      <div className="general-info-body">
        
        {/* คอลัมน์ซ้าย: Sidebar + Article เดิม */}
        <div className="general-info-left">
          <ComplaintSidebar />
          <ComplaintArticle />
        </div>

        {/* คอลัมน์กลาง: Main เนื้อหา "ข้อมูลสภาพทั่วไป" (รูป 1 + 2) + "สามพรานน่าอยู่" (รูป 3) */}
        <main className="general-info-main">
          
          {/* การ์ดเนื้อหาข้อมูลสภาพทั่วไป (รูป 1 และ 2) */}
          <div className="general-info-card">
            
            {/* หัวข้อหลัก */}
            <div className="main-content-header">
              <Users size={28} className="main-header-icon" />
              <h2 className="main-page-title">ข้อมูลสภาพทั่วไป</h2>
            </div>

            {/* หมวด 1: ด้านกายภาพ */}
            <section className="info-section">
              <h3 className="section-title">1. ด้านกายภาพ</h3>

              <div className="sub-section">
                <div className="sub-title-row">
                  <span className="badge-number">1</span>
                  <h4 className="sub-title">ที่ตั้งและอาณาเขต</h4>
                </div>
                <p className="sub-desc">
                  องค์การบริหารส่วนตำบลสามพราน ตั้งอยู่เลขที่ 111 หมู่ที่ 5 ตำบลสามพราน อำเภอสามพราน จังหวัดนครปฐม มีอาณาเขตติดต่อกับตำบลอื่นๆ ดังนี้
                </p>

                <div className="directions-list">
                  <div className="direction-row">
                    <span className="direction-bullet">•</span>
                    <span className="direction-name">ทิศเหนือ</span>
                    <span className="direction-contact">ติดต่อกับ</span>
                    <span className="direction-detail">แม่น้ำท่าจีน และตำบลยายชา อำเภอสามพราน จังหวัดนครปฐม</span>
                  </div>
                  <div className="direction-row">
                    <span className="direction-bullet">•</span>
                    <span className="direction-name">ทิศใต้</span>
                    <span className="direction-contact">ติดต่อกับ</span>
                    <span className="direction-detail">แม่น้ำท่าจีน และตำบลบ้านใหม่ อำเภอสามพราน จังหวัดนครปฐม</span>
                  </div>
                  <div className="direction-row">
                    <span className="direction-bullet">•</span>
                    <span className="direction-name">ทิศตะวันออก</span>
                    <span className="direction-contact">ติดต่อกับ</span>
                    <span className="direction-detail">แม่น้ำท่าจีน และตำบลท่าข้าม อำเภอสามพราน จังหวัดนครปฐม</span>
                  </div>
                  <div className="direction-row">
                    <span className="direction-bullet">•</span>
                    <span className="direction-name">ทิศตะวันตก</span>
                    <span className="direction-contact">ติดต่อกับ</span>
                    <span className="direction-detail">แม่น้ำท่าจีน และตำบลบางช้าง อำเภอสามพราน จังหวัดนครปฐม</span>
                  </div>
                </div>
              </div>

              <div className="sub-section">
                <div className="sub-title-row">
                  <MapPin size={18} className="section-icon-green" />
                  <h4 className="sub-title">ลักษณะพื้นที่</h4>
                </div>
                <p className="sub-desc">
                  องค์การบริหารส่วนตำบลสามพราน มีพื้นที่โดยประมาณ 27.90 ตารางกิโลเมตร หรือประมาณ 17,437.50 ไร่
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            {/* หมวด 2: ด้านการเมือง/การปกครอง */}
            <section className="info-section">
              <h3 className="section-title">
                <Landmark size={20} className="section-icon-green" />
                2. ด้านการเมือง/การปกครอง
              </h3>

              <div className="sub-section">
                <div className="sub-title-row">
                  <span className="badge-number">★</span>
                  <h4 className="sub-title">การแบ่งเขตการปกครอง</h4>
                </div>
                <p className="sub-desc">
                  องค์การบริหารส่วนตำบลสามพราน มีพื้นที่การปกครอง รวม 10 หมู่บ้าน ได้แก่ หมู่ที่ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ตำบลสามพราน (หมู่ที่ 7 และ 9 อยู่ในเขตเทศบาลตำบลเมืองสามพราน) ประกอบด้วย
                </p>

                <div className="villages-grid">
                  {villages.map((v, i) => (
                    <div key={i} className="village-item">
                      <Home size={15} className="village-icon" />
                      <span className="village-no">{v.no}</span>
                      <span className="village-name">{v.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <hr className="section-divider" />

            {/* หมวด 3: ด้านเศรษฐกิจ */}
            <section className="info-section">
              <h3 className="section-title">
                <Home size={20} className="section-icon-green" />
                3. ด้านเศรษฐกิจ
              </h3>

              <div className="sub-section">
                <div className="sub-title-row">
                  <span className="badge-number">★</span>
                  <h4 className="sub-title">การประกอบอาชีพ</h4>
                </div>
                <p className="sub-desc">
                  ประชากรส่วนใหญ่ประกอบอาชีพเกษตรกรรม รองลงมารับจ้างทั่วไป ค้าขาย และประกอบอาชีพอื่นๆ เช่น รับราชการ ธุรกิจส่วนตัว
                </p>
              </div>

              <div className="sub-section">
                <div className="sub-title-row">
                  <Sparkles size={18} color="#d97706" />
                  <h4 className="sub-title">แหล่งผลิตทางการเกษตรที่สำคัญ</h4>
                </div>

                <div className="agri-products-grid">
                  {agriProducts.map((p, i) => (
                    <div key={i} className="agri-product-card">
                      <img src={p.img} alt={p.name} className="agri-circle-img" />
                      <span className="agri-name">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <hr className="section-divider" />

            {/* หมวด 4: สภาพสังคม */}
            <section className="info-section" style={{ marginBottom: 0 }}>
              <h3 className="section-title">
                <span className="badge-number" style={{ background: '#dc2626' }}>★</span>
                4. สภาพสังคม
              </h3>

              {/* สถานศึกษา */}
              <div className="social-item-row">
                <GraduationCap size={18} className="social-item-icon" />
                <div className="social-item-content">
                  <span className="social-item-title">สถานศึกษาในพื้นที่</span>
                  <p className="social-bullet-text">• โรงเรียนบ้านคลองเตย ตั้งอยู่หมู่ที่ 5 ตำบลสามพราน</p>
                  <p className="social-bullet-text">• โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านคลองชุม ตั้งอยู่หมู่ที่ 5 ตำบลสามพราน</p>
                </div>
              </div>

              {/* สถาบันศาสนา */}
              <div className="social-item-row">
                <Building2 size={18} className="social-item-icon" />
                <div className="social-item-content">
                  <span className="social-item-title">สถาบันอาชีวศึกษา/การศาสนา</span>
                  <p className="social-bullet-text">• วัดคลองชุม ตั้งอยู่เลขที่ 111/1 หมู่ที่ 5</p>
                  <p className="social-bullet-text">• มูลนิธิบ้านทุ่งกาญจนาศิริ ตั้งอยู่หมู่ที่ 2 ตำบลสามพราน</p>
                </div>
              </div>

              {/* หน่วยงานราชการ */}
              <div className="social-item-row">
                <Home size={18} className="social-item-icon" />
                <div className="social-item-content">
                  <span className="social-item-title">หน่วยงานราชการในพื้นที่</span>
                  <p className="social-bullet-text">• ศูนย์ฝึกและอบรมเด็กและเยาวชนหญิงบ้านปราณี</p>
                </div>
              </div>

              {/* สาธารณูปโภคขั้นพื้นฐาน */}
              <div className="social-item-row">
                <MapPin size={18} className="social-item-icon" />
                <div className="social-item-content">
                  <span className="social-item-title">สาธารณูปโภคขั้นพื้นฐาน</span>
                  
                  <div className="utilities-sub-grid">
                    <span style={{ fontWeight: 600, color: '#111827', fontSize: '13.5px', marginTop: '4px' }}>
                      สาธารณูปโภค
                    </span>
                    <p className="utility-line">• ไฟฟ้า ไฟสาธารณะทั้งตำบล</p>
                    <p className="utility-line">• ประปาหมู่บ้าน จำนวน 10 สาย</p>
                    <p className="utility-line">• ประปาหมู่บ้าน จำนวน 15 แห่ง</p>

                    <span style={{ fontWeight: 600, color: '#111827', fontSize: '13.5px', marginTop: '6px' }}>
                      แหล่งน้ำธรรมชาติ
                    </span>
                    <p className="utility-line">• แม่น้ำท่าจีน จำนวน 2 สาย</p>
                    <p className="utility-line">• คลองธรรมชาติ จำนวน 3 สาย</p>
                    <p className="utility-line">• การคมนาคมสามารถเดินทางได้ทั้งทางบกและทางน้ำ</p>
                  </div>
                </div>
              </div>
            </section>

          </div>


        </main>

        {/* คอลัมน์ขวาสุด: Aside ประกอบด้วย 3 Article */}
        <aside className="general-info-aside">
          
          {/* Article 1: แผนที่ตำบลสามพราน (รูปที่ 1) */}
          <article className="aside-article-card">
            <h3 className="aside-card-title">แผนที่ตำบลสามพราน</h3>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.05200242293!2d100.21784007508957!3d13.715300286672743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2ea88cc1fd325%3A0x440c3e01abb48ea2!2z4Lit4LiH4LiE4LmM4LiB4Liy4Lij4Lia4Lij4Li04Lir4Liy4Lij4Liq4LmI4Lin4LiZ4LiV4Liz4Lia4Lil4Liq4Liy4Lih4Lie4Lij4Liy4LiZ!5e0!3m2!1sth!2sth!4v1792570315606!5m2!1sth!2sth"
              className="aside-map-iframe"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="แผนที่ อบต.สามพราน"
            />

            <h4 className="aside-map-org">องค์การบริหารส่วนตำบลสามพราน</h4>
            <p className="aside-map-address">
              111 หมู่ที่ 5 ตำบลสามพราน อำเภอสามพราน จังหวัดนครปฐม 73110
            </p>

            <a
              href="https://maps.google.com/?q=13.715300,100.217840"
              target="_blank"
              rel="noreferrer"
              className="aside-map-btn"
            >
              เปิดใน Google Maps
            </a>
          </article>

          {/* Article 2: ข้อมูลสำคัญในภาพรวม (รูปที่ 2) */}
          <article className="aside-article-card">
            <h3 className="aside-card-title">ข้อมูลสำคัญในภาพรวม</h3>

            <div className="overview-stats-list">
              {/* สถิติ 1: ประชากรทั้งหมด */}
              <div className="overview-stat-box">
                <div className="overview-stat-icon-wrap">
                  <Users size={30} color="#0c4d2d" />
                </div>
                <div className="overview-stat-content">
                  <span className="stat-label-title">ประชากรทั้งหมด</span>
                  <div className="stat-number-row">
                    <span className="stat-number-bold">6,197</span>
                    <span className="stat-unit-text">คน</span>
                  </div>
                  <span className="stat-subtext-note">*ข้อมูล ณ 31 ธ.ค. 2568</span>
                </div>
              </div>

              {/* สถิติ 2: จำนวนครัวเรือน */}
              <div className="overview-stat-box">
                <div className="overview-stat-icon-wrap">
                  <Home size={30} color="#0c4d2d" />
                </div>
                <div className="overview-stat-content">
                  <span className="stat-label-title">จำนวนครัวเรือน</span>
                  <div className="stat-number-row">
                    <span className="stat-number-bold">2,597</span>
                    <span className="stat-unit-text">ครัวเรือน</span>
                  </div>
                </div>
              </div>

              {/* สถิติ 3: พื้นที่ทั้งหมด */}
              <div className="overview-stat-box highlight-pink">
                <div className="overview-stat-icon-wrap">
                  <MapPin size={30} color="#e11d48" />
                </div>
                <div className="overview-stat-content">
                  <span className="stat-label-title pink">พื้นที่ทั้งหมด</span>
                  <div className="stat-number-row">
                    <span className="stat-number-bold pink">27.90</span>
                    <span className="stat-unit-text pink">ตารางกิโลเมตร</span>
                  </div>
                </div>
              </div>

              {/* สถิติ 4: งบประมาณรายจ่าย */}
              <div className="overview-stat-box">
                <div className="overview-stat-icon-wrap">
                  <Coins size={30} color="#d97706" />
                </div>
                <div className="overview-stat-content">
                  <span className="stat-label-title">งบประมาณรายจ่าย</span>
                  <div className="stat-number-row">
                    <span className="stat-number-bold">45.23</span>
                    <span className="stat-unit-text">ล้านบาท</span>
                  </div>
                  <span className="stat-subtext-note">*ข้อมูลปี 2569</span>
                </div>
              </div>
            </div>
          </article>

          {/* Article 3: สรุปจุดเด่นของตำบลสามพราน (รูปที่ 3) */}
          <article className="aside-article-card">
            <h3 className="aside-card-title">สรุปจุดเด่นของตำบลสามพราน</h3>

            <div className="highlights-list">
              {/* จุดเด่น 1 */}
              <div className="highlight-item-row">
                <div className="highlight-thumb-circle">
                  <span>🌸</span>
                </div>
                <div className="highlight-item-text">
                  <span className="highlight-item-title">พื้นที่ทำเกษตรอุดมสมบูรณ์</span>
                  <span className="highlight-item-sub">โดยเฉพาะกล้วยไม้และผลไม้</span>
                </div>
              </div>

              {/* จุดเด่น 2 */}
              <div className="highlight-item-row">
                <div className="highlight-thumb-circle">
                  <span>🚤</span>
                </div>
                <div className="highlight-item-text">
                  <span className="highlight-item-title">การคมนาคมสะดวก</span>
                  <span className="highlight-item-sub">ทั้งทางบกและทางน้ำ</span>
                </div>
              </div>

              {/* จุดเด่น 3 */}
              <div className="highlight-item-row">
                <div className="highlight-thumb-circle">
                  <span>👥</span>
                </div>
                <div className="highlight-item-text">
                  <span className="highlight-item-title">ชุมชนเข้มแข็ง</span>
                  <span className="highlight-item-sub">มีความสามัคคีและร่วมพัฒนา</span>
                </div>
              </div>

              {/* จุดเด่น 4 */}
              <div className="highlight-item-row">
                <div className="highlight-thumb-circle">
                  <span>🛕</span>
                </div>
                <div className="highlight-item-text">
                  <span className="highlight-item-title">แหล่งท่องเที่ยวและวัฒนธรรม</span>
                  <span className="highlight-item-sub">ที่น่าสนใจ</span>
                </div>
              </div>
            </div>
          </article>

        </aside>

      </div>

      {/* 3. ส่วน Footer ด้านล่างสุด */}
      <ComplaintFooter />
    </div>
  );
}
