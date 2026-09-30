import course1 from "./assets/course1.jpg";
import course2 from "./assets/course2.jpg";
import course3 from "./assets/course3.jpg";
import course4 from "./assets/course4.jpg";
import course5 from "./assets/course5.jpg";
import course6 from "./assets/course6.jpg";
import sarah from "./assets/sarah.jpg";
import james from "./assets/james.jpg";
import alex from "./assets/alex.jpg";

export const navLinks = ["Home", "Courses", "Creators"];

export const chips = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking", "+ More"];

const base = { author: "pureperl studio", lessons: "17 Lessons", duration: "2 hours 16 mins", comments: "59 Comments", rating: "4.5", level: "Beginner", price: 25 };
export const courses = [
  { title: "Learn Figma from Basic", img: course1 },
  { title: "Build Digital Asset", img: course2 },
  { title: "the Power of Big Data", img: course3 },
  { title: "Balancing Productivity and Focus", img: course4 },
  { title: "Mastering Money Management", img: course5 },
  { title: "From Idea to Startup Success", img: course6 },
].map((c) => ({ ...base, ...c }));

export const paths = ["Design", "Development", "IT & Software", "Business", "Marketing", "Photography"];
export const stats = [["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]];
export const perks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

export const testimonials = [
  { img: sarah, name: "Sarah M.", role: "Enthusiastic Learner", text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { img: james, name: "James L.", role: "Lifelong Learner", text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { img: alex, name: "Alex B.", role: "Inspired Creator", text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

export const footerCols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];
