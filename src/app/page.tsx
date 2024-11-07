import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProjectCard from "@/components/projectCard";
import SkillCard from "@/components/skillCard";
import { extraSkills, projects, skills } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <div className="bg-black container mx-auto">
        <Header />
        <Hero />
        <div>
          <div className="mb-8 mx-4">
            <div className="text-[#7b4ae2] w-fit bg-[#7b4ae2]/10 text-sm font-bold px-2 py-1 rounded-lg mx-1">
              🔗 Portfólio
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mt-3">
              Works and projects
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between mx-3">
            {projects.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
          <div className="my-10 w-full">
            <div className="flex justify-center items-center mb-12">
              <div className="mx-4">
                <div className="flex justify-center">
                  <div className="text-[#7b4ae2] w-fit text-center bg-[#7b4ae2]/10 text-sm font-bold px-2 py-1 rounded-lg mx-1">
                    🧑‍💻 Skills · Experiences
                  </div>
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-white mt-3">
                  My technical arsenal includes:
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between">
              {skills.map((item) => (
                <SkillCard
                  key={item.id}
                  des={item.des}
                  name={item.name}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
          <div className="mb-20 mt-10">
            <div className="flex justify-center items-center mb-12">
              <div className="mx-4">
                {/* <div className="flex justify-center">
                  <div className="text-[#7b4ae2] w-fit text-center bg-[#7b4ae2]/10 text-sm font-bold px-2 py-1 rounded-lg mx-1">
                    🧑‍💻 Skills · Experiências
                  </div>
                </div> */}
                <h1 className="text-2xl md:text-4xl font-bold text-center text-white mt-3">
                  Other Extra Softwear and skills
                </h1>
              </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap max-w-2xl mx-auto">
              {extraSkills.map((item) => (
                <div key={item.id} className="text-white">
                  <item.icon size={50} color="#7B4AE280" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
