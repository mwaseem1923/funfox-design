import React from 'react'
import "./Sidebar.css"

export default function SidebarLeft({img1, img2, img3}) {
  return (
    <div className="left-bg-img">
    <img src={img1}  alt="Profile Icon"/>
    <img src={img2}  alt="Profile Icon"/>
    <img src={img3}  alt="Profile Icon"/>{" "}
  </div>
  )
}
