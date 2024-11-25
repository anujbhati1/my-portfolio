"use client";
import BackToTop from "@/components/backToTop";
import ContactMe from "@/components/contactMe";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProjectCard from "@/components/projectCard";
import SkillCard from "@/components/skillCard";
import { extraSkills, projects, skills } from "@/lib/constants";
import { SectionRefs } from "@/types";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";
import { CiCalendar } from "react-icons/ci";

export default function Home() {
  const sectionRefs = useRef<SectionRefs>({
    home: null,
    skills: null,
    projects: null,
    contact: null,
  });

  const scrollToSection = (section: keyof SectionRefs) => {
    sectionRefs.current[section]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const setRef =
    (section: keyof SectionRefs) => (el: HTMLDivElement | null) => {
      sectionRefs.current[section] = el;
    };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  /*
    Below code is for Floating Book my Cal button 
    Use it if you need the floating button but make sure to 
    remove the two same functions.  
  */

  // useEffect(() => {
  //   (async function () {
  //     const cal = await getCalApi({ namespace: "30min" });
  //     cal("floatingButton", {
  //       calLink: "anujbhati/30min",
  //       config: { layout: "month_view", theme: "dark" },
  //       buttonColor: "#7b4ae2",
  //     });
  //     cal("ui", {
  //       theme: "dark",
  //       styles: { branding: { brandColor: "#000000" } },
  //       hideEventTypeDetails: false,
  //       layout: "month_view",
  //     });
  //   })();
  // }, []);

  return (
    <>
      <div className='bg-black container mx-auto' ref={setRef("home")}>
        <Header onNavigate={scrollToSection} />
        <Hero />
        <div>
          <div ref={setRef("projects")}>
            <div className='mb-8 mx-4'>
              <div className='text-[#7b4ae2] w-fit bg-[#7b4ae2]/10 text-sm font-bold px-2 py-1 rounded-lg mx-1'>
                🔗 Portfolio
              </div>
              <h1 className='text-2xl md:text-4xl font-bold text-white mt-3'>
                Works and projects
              </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between mx-3'>
              {projects.map((item) => (
                <ProjectCard
                  key={item.id}
                  id={item.id}
                  url={item.url}
                  status={item.status}
                  tech={item.tech}
                  tech2={item.tech2}
                  title={item.title}
                  image={item.image}
                  type={item.type}
                />
              ))}
            </div>
          </div>
          <div ref={setRef("skills")} className='my-10 w-full'>
            <div className='flex justify-center items-center mb-12'>
              <div className='mx-4'>
                <div className='flex justify-center'>
                  <div className='text-[#7b4ae2] w-fit text-center bg-[#7b4ae2]/10 text-sm font-bold px-2 py-1 rounded-lg mx-1'>
                    🧑‍💻 Skills · Experiences
                  </div>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold text-white mt-3'>
                  My technical arsenal includes:
                </h1>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between'>
              {skills.map((item) => (
                <SkillCard
                  key={item.id}
                  des={item.des}
                  name={item.name}
                  Icon={item.icon}
                />
              ))}
            </div>
          </div>
          <div className='mb-20 mt-10'>
            <div className='flex justify-center items-center mb-12'>
              <div className='mx-4'>
                {/* <div className="flex justify-center">
                  <div className="text-[#7b4ae2] w-fit text-center bg-[#7b4ae2]/10 text-sm font-bold px-2 py-1 rounded-lg mx-1">
                    🧑‍💻 Skills · Experiências
                  </div>
                </div> */}
                <h1 className='text-2xl md:text-4xl font-bold text-center text-white mt-3'>
                  Additional Tools and Expertise
                </h1>
              </div>
            </div>
            <div className='flex gap-4 justify-center flex-wrap max-w-2xl mx-auto'>
              {extraSkills.map((item) => (
                <div key={item.id} className='text-white'>
                  <item.icon size={50} color='#7B4AE280' />
                </div>
              ))}
            </div>
          </div>
          <div ref={setRef("contact")} className='mb-20 mt-10'>
            <div className='flex justify-center items-center mb-12'>
              <div className='mx-4'>
                <div className='flex justify-center'>
                  <div className='text-[#7b4ae2] w-fit text-center bg-[#7b4ae2]/10 text-sm font-bold px-2 py-1 rounded-lg mx-1'>
                    📬 Contacts
                  </div>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold text-center text-white mt-3'>
                  Let&apos;s Talk!
                </h1>
              </div>
            </div>
            <ContactMe />
          </div>
          <div className='w-full'>
            <button
              data-cal-namespace='30min'
              data-cal-link='anujbhati/30min'
              data-cal-config='{"layout":"month_view"}'
              className='mx-auto bg-primary hover:brightness-90 duration-300 flex justify-center items-center gap-2 text-white px-4 py-3 rounded-full font-semibold'
            >
              <CiCalendar size={23} color='#ffffff' />
              <span className=''>Book my Cal</span>
            </button>
          </div>
          <BackToTop />
        </div>
      </div>
      <Footer />
    </>
  );
}
