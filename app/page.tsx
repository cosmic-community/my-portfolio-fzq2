import Link from 'next/link'
import { getProfile, getProjects, getSkills, getWorkExperience } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import SkillCard from '@/components/SkillCard'
import ExperienceItem from '@/components/ExperienceItem'

export default async function HomePage() {
  const [profile, projects, skills, experiences] = await Promise.all([
    getProfile(),
    getProjects(),
    getSkills(),
    getWorkExperience(),
  ])

  const featuredProjects = projects.filter((p) => p.metadata?.featured)
  const displayProjects = featuredProjects.length > 0 ? featuredProjects.slice(0, 3) : projects.slice(0, 3)
  const displaySkills = skills.slice(0, 6)
  const recentExperience = experiences.slice(0, 3)

  return (
    <div>
      <Hero profile={profile} />

      {displayProjects.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-sm text-primary hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {displaySkills.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
            <Link href="/skills" className="text-sm text-primary hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displaySkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </section>
      )}

      {recentExperience.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
            <Link href="/experience" className="text-sm text-primary hover:underline">
              View all →
            </Link>
          </div>
          <div className="max-w-3xl">
            {recentExperience.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}