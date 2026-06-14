import Link from 'next/link'
import type { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const screenshots = project.metadata?.screenshots
  const firstImage = screenshots && screenshots.length > 0 ? screenshots[0] : null
  const techStack = project.metadata?.tech_stack || []
  const name = getMetafieldValue(project.metadata?.name) || project.title
  const shortDesc = getMetafieldValue(project.metadata?.short_description)

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="aspect-video overflow-hidden bg-muted">
        {firstImage ? (
          <img
            src={`${firstImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No image
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          {project.metadata?.featured && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium">
              Featured
            </span>
          )}
        </div>

        {shortDesc && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{shortDesc}</p>
        )}

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}