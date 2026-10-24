"use client";

import React ,{ useState,useEffect } from "react";
import { House , Folders , University , MessageCircleMore , PhoneCall , Network } from 'lucide-react';
import logo from '../assets/logo.png';
import './nevber.css';

export default function Nevber() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo-container">
                    <img src={logo} alt="ตรา อบต.สามพราน" className="navbar-logo-img" />
                    <div className="navbar-logo-text">
                        <div className="logo-sub">องค์การบริหารส่วนตำบล</div>
                        <div className="logo-main">สามพราน</div>
                        <div className="logo-sub">Sampran Subdistrict Administrative Organization</div>
                    </div>
                </a>
                <div className="navbar-menu">
                    <a href="#home" className="navbar-item">
                        <House />
                        <span>หน้าแรก</span>
                    </a>
                    <a href="#portfolio" className="navbar-item">
                        <Folders/>
                        <span>ผลงาน</span>
                    </a>
                    <a href="#academy" className="navbar-item">
                        <University/>
                        <span>ข้อมูลสถาบัน</span>
                    </a>
                    <a href="#chat" className="navbar-item">
                        <MessageCircleMore/>
                        <span>แชท</span>
                    </a>
                    <a href="#contact" className="navbar-item">
                        <PhoneCall />
                        <span>ติดต่อเรา</span>
                    </a>
                    <a href="#network" className="navbar-item">
                        <Network />
                        <span>เครือข่าย</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}