"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SkillData } from "@/constants";
import { TfiFacebook } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import "swiper/css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (  
    <main>
      <section className="section section-home-banner">
        <div className="container">
          <div className="row full-screen align-items-center p-100px-tb">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <div className="ht-text">
                <h1>Kimhay Suk</h1>
                <h2>I Am Developer</h2>
                <p>The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.</p>
                <div className="flex pt-7">
                  <div className="btn-my-work m-btn m-btn-theme">
                    <Link href="">SKILLS</Link> 
                  </div>
                  <div className="btn-hire-me m-btn m-btn-t-theme ml-5">
                    <Link href="">HIRE ME</Link> 
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <div className="profile-photo">
                <Image alt="Profile picture" src="/home-about.png" width={700} height={700} />
              </div>
            </div>
          </div>
        </div>        
      </section>
      <section className="section section-about-me">
        <div className="container">
          <div className="row sm-m-25px-b mb-10">
            <div className="section-title">
              <h3>ABOUT ME</h3>
              <p>A LEAD UX & UI DESIGNER BASED IN CANADA</p>            
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 mt-10 mb-10">
              <div className="about-me-img box-shadow">
                <Image alt="About me picture" src="/about-me.jpg" width={900} height={600} />
                <div className="nav social-icon">
                  <Link href=""><TfiFacebook /></Link> 
                  <Link href=""><GrInstagram /></Link> 
                  <Link href=""><GrLinkedinOption /></Link> 
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-10 mb-10">
              <div className="about-me mt-10">
                <h4>I'M Kimhay Suk</h4>
                <h6>A Lead <span className="theme-color">UX &amp; UI</span> designer based in <span className="theme-color">Canada</span></h6>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Birthday</label>
                      <p>18 june 1999</p>
                    </div>
                    <div className="media">
                      <label>Age</label>
                      <p>25 Yr</p>
                    </div>
                    <div className="media">
                      <label>Residence</label>
                      <p>Phnom Penh</p>
                    </div>
                    <div className="media">
                      <label>Address</label>
                      <p>Phnom Penh, Cambodia</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>kimhaysuk1999@gmail.com</p>
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      <p>820-885-3321</p>
                    </div>
                    <div className="media">
                      <label>Skype</label>
                      <p>skype.0404</p>
                    </div>
                    <div className="media">
                      <label>Freelance</label>
                      <p>Available</p>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <div className="btn-my-work m-btn m-btn-theme">
                    <Link href="">DOWNLOAD CV</Link> 
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </section>
      <section className="section section-skills">
        <div className="container">
          <div className="row sm-m-25px-b mb-10">
            <div className="section-title">
              <h3>SKILLS</h3>
              <p>A LEAD UX & UI DESIGNER BASED IN CANADA</p>            
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="flex items-center justify-center bg-cover bg-center">
                <div className="flex flex-col gap-20 max-w-[100%] text-center items-center">                  
                  <Swiper slidesPerView={5} loop={true} autoplay={{ delay: 0, disableOnInteraction: false }} speed={5000} modules={[Autoplay]} className="max-w-[100%]" >
                    {SkillData.map((skill, index) => (
                      <SwiperSlide key={index}>
                        <Image src={skill.Image} alt={skill.name} width={skill.width} height={skill.height} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper slidesPerView={5} loop={true} autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }} speed={5000} modules={[Autoplay]} className="max-w-[100%]">
                    {SkillData.map((skill, index) => (
                      <SwiperSlide key={index}>
                        <Image src={skill.Image} alt={skill.name} width={skill.width} height={skill.height} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-contact">
        <div className="container">
          <div className="section-title">
            <h3>GET IN TOUCH</h3>
            <p>A LEAD UX & UI DESIGNER BASED IN CANADA</p>            
          </div>
        </div>
      </section>
    </main>
  );
}
