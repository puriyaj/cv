import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { Tilt } from 'react-next-tilt';
const Data = [
  {
    img: "/images/venmate.png",
    name: "Venmate",
    des: "A web-based customer success platform, Venerate, designed to enhance client management and engagement. With AI integration, it provides actionable insights, automates workflows, and optimizes customer success strategies, similar to Salesforce. Features include client tracking, real-time analytics, and personalized recommendations for improved outcomes",
    tec: "React",
    tec2: "React Query",
    tec3: "Tailwind",
    tec4: "typescript",
    url: "https://www.venmate.net",
    url2: ""
  },
  {
    img: "/images/dreamSkin.png",
    name: "Dream Skin",
    des: "An e-commerce site for a laser shop with a sleek interface and TailAdmin Dashboard for managing inventory, sales, and orders. Features include a product catalog, secure checkout, and real-time analytics.",
    tec: "NextJS",
    tec2: "Prisma",
    tec3: "Tailwind",
    url: "",
    url2: "https://github.com/puriyaj/Dream-skin.git"
  },
  {
    img: "/images/foodi.png",
    name: "FooDi",
    des: "I've revamped pizza ordering using Three.js for immersive visuals, a microservices architecture for efficiency, and a 3D module with GraphQL in TypeScript for real-time customization. Enjoy a seamless experience with cutting-edge technology at your fingertips!",
    tec: "Nest",
    tec2: "React",
    tec3: "GraphQL",
    tec4: "THREE.JS",
    url: "",
    url2: "https://github.com/puriyaj/3D-Fullstack-webpage",
  },
  {
    img: "/images/captcha-solver.png",
    name: "Captcha solver Bot",
    des: "Building an appointment scheduling bot that uses machine learning to solve CAPTCHAs with CNNs, RNNs, and CTC, and extracts and autofills text from forms. The bot automates the entire booking process, from navigating web forms to inputting data. It leverages advanced algorithms to handle various CAPTCHA types and ensures seamless user interaction.",
    tec: "Tensorflow",
    tec2: "Python",
    tec3: "keras",
    tec4: "selenium",
    url: "",
    url2: "https://github.com/puriyaj/reading-image-text-tensorflow/blob/main/dd/3-8.ipynb",
  },
  {
    img: "/images/face-detection.webp",
    name: "Face Detection",
    des: "Building a face detection web application using TensorFlow's pre-trained models and React, allowing real-time facial recognition and processing. The app integrates TensorFlow for accurate face detection and React for a dynamic, user-friendly interface.",
    tec: "Tensorflow js",
    tec2: "Python",
    tec3: "canvas",
    tec4: "React",
    url: "https://face-detection-one-brown.vercel.app/",
    url2: "https://github.com/puriyaj/face-detection/tree/master",
  },
  {
    img: "/images/dataset-card.png",
    name: "Food Detection",
    des: "The Food101 project leverages a Convolutional Neural Network (CNN) model to classify 101 different food categories, utilizing the EfficientNetB0 architecture for improved performance. This model is trained on a comprehensive food dataset to enhance classification accuracy beyond the DeepFood paper, which achieved 77.4% top-1 accuracy using a similar CNN approach. By employing fine-tuning techniques, our model surpasses DeepFood’s benchmark, demonstrating superior performance in food classification tasks.",
    tec: "Tensorflow ",
    tec2: "Python",
    tec3: "Transfer learning",
    tec4: "fine tuning",
    url: "",
    url2: "https://github.com/puriyaj/Food101-Tensorflow/tree/master",
  },
  {
    img: "/images/travel.png",
    name: "WanderVista",
    des: "I've infused dynamic animation with Framer Motion and React for an engaging and user-friendly travel experience. Explore destinations, seamlessly navigate, and book your next adventure with ease, all thanks to the captivating animations and responsive design that our website offers. Start your journey with us today!",
    tec: "Frontend",
    tec2: "React",
    tec3: "Framer Motion",
    url: "https://travel-app-nine-pi.vercel.app",
    url2: "https://github.com/puriyaj/Travel-app",
  },
  {
    img: "/images/kauf.png",
    name: "Kaufmann",
    des: "Kaufmann platform boasts three dashboards tailored for buyers, sellers, and administrators. Buyers enjoy a seamless shopping experience, sellers efficiently manage products, and admins have control with roll-based functionality.(Currently)",
    tec: "Next",
    tec2: "Dynamic",
    tec3: "Fullstack",
    tec4: "RestApi",
    url: "https://kaufmann-web-app.vercel.app",
    url2: "https://github.com/puriyaj/Kaufmann_web_app",
  },
  {
    img: "/images/asb.png",
    name: "Asb Davani",
    des: "Asbdavani is your go-to destination for live horse competitions and the latest news in the equestrian world. With a user-friendly interface, the platform offers real-time updates on competitions, allowing enthusiasts to experience the thrill from anywhere.",
    tec: "Full-Stack",
    tec2: "React",
    tec3: "Nest.js",
    tec4: "SQL",
    url: "https://asbdavani.app",
    url2: "",
  },
  {
    img: "/images/blog.png",
    name: "MyBlog",
    des: "I've transformed the blogging experience. With user authentication, live post updates, and a database-connected comment system, our platform offers a dynamic and secure space for engaging content and discussions. Stay informed with real-time posts and share your thoughts seamlessly. Join us on [Your Blog] for a personalized and interactive blogging journey!",
    tec: "Prisma",
    tec2: "React",
    tec3: "Next Auth",
    tec4: "MongoDB",
    url: "https://my-blog-ten-pearl.vercel.app",
    url2: "https://github.com/puriyaj/myBlog",
  },
  {
    img: "/images/indie-game.jpg",
    name: "Game-Reviews",
    des: "The ultimate hub for gaming enthusiasts. Our platform showcases live data, prioritizing the latest author edits first. With a sleek dashboard, access real-time insights and engage effortlessly with the gaming community. Elevate your gaming experience with us and stay ahead of the curve!",
    tec: "strapi",
    tec2: "React",
    tec3: "Tailwind",
    tec4: "MongoDB",
    url: "",
    url2: "https://github.com/puriyaj/React_Fullstack-Game-Reviews-",
  },
  {
    img: "/images/vet-one.jpg",
    name: "Vet-One",
    des: "Vet-One is where caring for your dogs is made simple. With secure user authentication and an easy appointment service, finding the right doctor for your furry friends is a breeze. Join us for a hassle-free pet care experience!",
    tec: "React",
    tec2: "Node.js",
    tec3: "Express",
    tec4: "Typescript",
    url: "https://vet-one.ir",
    url2: "",
  },
  {
    img: "/images/carpet.jpg",
    name: "Eleishe",
    des: "Eleishe is a website that sells carpets. I worked on both the design and functionality of the site, handling both the front and back ends. I also helped with making sure user accounts are secure. This project was my last one at Tuv International.",
    tec: "laravel",
    tec2: "Bootstrap",
    tec3: "React",
    tec4: "MySQL",
    url: "https://eleishe.ir",
    url2: "",
  },
];

const Project = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-3 justify-center">
        {Data.map((item, index) => {
          return (
            <>
           
              <div
                key={index}
                className="flex flex-col w-[25rem] rounded-lg  p-3 shadow-2xl bg-slate-100 dark:bg-slate-700 justify-center items-center"
              >
                <Tilt>
                  <Image
                  src={item.img}
                  width={300}
                  height={300}
                  alt="asb website"
                  className="rounded-lg max-h-[10rem]"
                  priority
                />
                </Tilt>
                
                <h1 className="text-xl p-3"> {item.name} </h1>
                <p className="dark:text-gray-300 text-gray-700">{item.des}</p>
                <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
                  <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">
                    {item.tec}
                  </li>
                  <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">
                    {item.tec2}
                  </li>
                  <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">
                    {item.tec3}
                  </li>
                  <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">
                    {item.tec4}
                  </li>
                </ul>
                <div className="flex gap-2 w-fit">
                  <a
                    className={`${
                      item.url ? "" : "hidden"
                    } group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 text-slate-50`}
                    href={item.url}
                  >
                    <CgWebsite />
                    WEBSITE
                  </a>
                  <a
                    className={`${
                      item.url2 ? "" : "hidden"
                    } group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 text-slate-50`}
                    href={item.url2}
                  >
                    <FaGithub />
                    REPOSITORIES
                  </a>
                </div>
              </div>
           
            </>
          );
        })}
      </div>
    </>
  );
};

export default Project;
