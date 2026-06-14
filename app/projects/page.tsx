import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Projects | My Portfolio',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-10">A collection of things I've built.</p>

      {projects.length === 0 ? (
        <p className="text-muted-foreground">No projects found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}