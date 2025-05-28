import { FaReact } from "react-icons/fa";
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
import { RiSupabaseFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import carplan from "../../public/img/carplan.png";
import camping from "../../public/img/camping.png";
import social from "../../public/img/social.png";
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
];
