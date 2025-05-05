import { FaReact } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiDaisyui } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbBrandRedux } from "react-icons/tb";
import carplan from "../../public/img/carplan.png";
import camping from "../../public/img/camping.png";
import social from "../../public/img/social.png";
import blog from "../../public/img/simpleblog.png";
import employee from "../../public/img/employee.png";
import chatassitance from "../../public/img/chatassitance.png";
import ecom from "../../public/img/ecom.png";

export const project = [
  {
    image: carplan,
    title: "CARPLAN PROJECT",
    icon: [
      <FaLaravel key="laravel" />,
      <RiTailwindCssFill key="tailwind" />,
      <DiMysql key="mysql" />,
      <SiDaisyui key="daisyui" />,
      <DiJqueryLogo key="jquery" />,
    ],
    des: [
      "แอปพ:เค: CRUD ด้วย Laravel",
      "ออกแบบ UI ด้วย Tailwind CSS และ DaisyUI",
      "ฟีเจอร์แสดงข้อมูลในตาราง เอม/แก้ไขข้อมูล และสร้างรายงาน PDF จากฐานข้อมูล",
      "โฮสต์บน HostNeverDie เอ่อให้สามารถใช้งาน",
      "ได้ฝนด้านเว็บ การออกแบบฐานข้อมูล และการสร้าง PDF report",
    ].map((item, index) => <span key={`carplan-des-${index}`}>{item}</span>),
    demo: "",
    github: ["https://github.com/Arnonleesakun2/Project-carplan-laravel"],
  },
  {
    image: ecom,
    title: "E-COMMERCE PROJECT",
    icon: [
      <FaReact key="react" />,
      <TbBrandRedux key="redux" />,
      <RiTailwindCssFill key="tailwind" />,
      <FaNodeJs key="nodejs" />,
      <SiExpress key="express" />,
      <RiSupabaseFill key="supabase" />,
      <SiPostgresql key="postgresql" />,
    ],
    des: [
      " Frontend ด้วย React และ Tailwind CSS",
      " State ด้วย Redux Toolkit",
      " Backend ด้วย Node.js และ Express โดยใช้ Supabase และ PostgreSQL",
      "ระบบ Login/Register และแยกบทบาท้ใช้ (User / Admin)",
      "้ใช้สามารถซื้อค้า ใส่ตะกร้า และ งซื้อ",
      "้ ระบบสามารถค้าและคำงซื้อได้",
    ].map((item, index) => <span key={`ecom-des-${index}`}>{item}</span>),
    demo: "https://e-commerce-ryes.netlify.app/",
    github: ["https://github.com/Arnonleesakun2/E-commerce-project"],
  },
  {
    image: camping,
    title: "Camping-Project",
    icon: [
      <FaReact key="react" />,
      <FaNodeJs key="nodejs" />,
      <RiTailwindCssFill key="tailwind" />,
      <SiPrisma key="prisma" />,
      <DiMysql key="mysql" />,
      <SiClerk key="clerk" />,
      <FaCcStripe key="stripe" />,
      <SiDaisyui key="daisyui" />,
    ],
    des: [
      "เป็นเว็บแอปพ:เค: ทำงานแบบ CRUD การจองและข้อมูล",
      "ใช้ Clerk ระบบล็อก, Stripe ระบบชำระ และ Prisma ฐานข้อมูล",
      "่ง Backend ใช้ Node.js และ Express",
      "จากการโปรเจกต์ ได้ ออกแบบโครงสร้างโฟลเดอร์ (Folder Structure) อย่างเป็นระบเพื่อให้ง่ายต่อการ, การ API, และการแยกส่วน Component เอ่อให้โค้ดสามารถและต่อยอดได้สะดวกในอนาคต",
    ].map((item, index) => <span key={`camping-des-${index}`}>{item}</span>),
    demo: "",
    github: ["https://github.com/Arnonleesakun2/Project-Camping"],
  },
  {
    image: "",
    title: "TODOLIST PROJECT",
    icon: [
      <FaReact key="react" />,
      <SiShadcnui key="shadcn" />,
      <RiTailwindCssFill key="tailwind" />,
      <FaLaravel key="laravel" />,
      <SiSqlite key="sqlite" />,
    ],
    des: [
      " Frontend ด้วย React แล้วลบรายการใน To-Do List",
      "ด้าน Backend ใช้ Laravel เอ่อคำร้องและเชื้อมต่อกับฐานข้อมูล",
      "ใช้ SQLite เป็นฐานข้อมูลเก็บรายการ",
    ].map((item, index) => <span key={`todolist-des-${index}`}>{item}</span>),
    demo: "",
    github: ["https://github.com/Arnonleesakun2/Project-Todolist"],
  },
  {
    image: social,
    title: "SOCIAL PROJECT",
    icon: [
      <FaReact key="react" />,
      <SiShadcnui key="shadcn" />,
      <RiTailwindCssFill key="tailwind" />,
      <SiClerk key="clerk" />,
      <FaNodeJs key="nodejs" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongodb" />,
    ],
    des: [
      "ระบบ ตนผ่าน Clerk เอ่อในการเข้าใช้งาน",
      "ฟีเจอร์ประกอบด้วย: สร้างโพสต์, ลบโพสต์, กด Like, ข้อมูล้ใช้, และระบบ /ล็อก ่",
      "โปรเจกต์ช่วยให้เข้าใจการ ้ใช้งาน การทำงาน API และ แอปพ:เค:แบบโซเชียล องต้น",
    ].map((item, index) => <span key={`social-des-${index}`}>{item}</span>),
    demo: "https://stalwart-creponne-3c6cd7.netlify.app/",
    github: ["https://github.com/Arnonleesakun2/Project-Social"],
  },
  {
    image: blog,
    title: "SIMPLE BLOG PROJECT",
    icon: [
      <RiNextjsFill key="nextjs" />,
      <SiShadcnui key="shadcn" />,
      <RiTailwindCssFill key="tailwind" />,
      <SiClerk key="clerk" />,
      <SiTypescript key="typescript" />,
      <RiSupabaseFill key="supabase" />,
      <SiPostgresql key="postgresql" />,
    ],
    des: [
      "้ใช้สามารถ เอม, แก้ไข, และ ลบโพสต์บล็อก ได้อย่างง่ายดาย",
      "ใช้ Next.js เป็นเฟรม์กในการเว็บไซต์",
      "ออกแบบ UI ด้วย ShadcnUI เอ่อให้เว็บหน้าตาและใช้งานง่าย",
      "เก็บข้อมูลด้วย PostgreSQL และใช้ Supabase เป็น ฐานข้อมูล",
      "ระบบ้ใช้และการ ตนด้วย Clerk",
    ].map((item, index) => <span key={`blog-des-${index}`}>{item}</span>),
    github: ["https://github.com/Arnonleesakun2/Project-SimpleBlog"],
  },
  {
    image: employee,
    title: "EMPLOYEE MANAGEMENT SYSTEM",
    icon: [
      <FaReact key="react" />,
      <SiShadcnui key="shadcn" />,
      <RiTailwindCssFill key="tailwind" />,
      <FaNodeJs key="nodejs" />,
      <SiExpress key="express" />,
      <RiSupabaseFill key="supabase" />,
      <SiPostgresql key="postgresql" />,
    ],
    des: [
      "ฟีเจอร์ สร้าง, แก้ไข, และลบข้อมูล,คำนวณ,สร้างรายงาน",
      "โปรเจกต์ช่วย ด้านการทำงานข้อมูลหลายประเภท การออกแบบฟอร์ม และการประมวลผลข้อมูลผลใน",
    ].map((item, index) => <span key={`employee-des-${index}`}>{item}</span>),
    demo: "https://employeemn.netlify.app/",
    github: ["https://github.com/Arnonleesakun2/Employee-Management-System"],
  },
  {
    image: chatassitance,
    title: "CHAT ASSISTANCE",
    icon: [
      <FaReact key="react" />,
      <SiMui key="mui" />,
      <RiTailwindCssFill key="tailwind" />,
      <FaNodeJs key="nodejs" />,
      <SiExpress key="express" />,
      <GiArtificialIntelligence key="ai" />,
    ],
    des: [
      "เป็นโปรเจกต์ขนาดเล็ก,เพื่อทดลองสร้างระบบ แชทสนทนา  AI",
      "ใช้ Cohere AIให้โมเดลประษฐ์ (AI model)",
      "้ใช้สามารถ ์คำถามและ คำตอบแบบ ลไทม์",
      "โปรเจกต์ช่วย ความเข้าใจเกี่ยว เรียกใช้งาน API ของโมเดล AI, การข้อมูลข้อความ และการแสดงผลใน ่เป็น ้ใช้",
    ].map((item, index) => <span key={`chat-des-${index}`}>{item}</span>),
    demo: "https://chat-assitance-client.vercel.app/",
    github: ["https://github.com/Arnonleesakun2/Chat-Assitance"],
  },
];
