// app/projects/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, getMetafieldValue } from '@/lib/cosmic'

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const name = getMetafieldValue(project.metadata?.name) || project.title
  const shortDesc = getMetafieldValue(project.metadata?.short_description)
  const description = getMetafieldValue(project.metadata?.description)
  const screenshots = project.metadata?.screenshots || []
  const techStack = project.metadata?.tech_stack || []
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/projects" className="text-sm text-primary hover:underline mb-6 inline-block">
        ← Back to projects
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold mb-3">{name}</h1>
      {shortDesc && <p className="text-lg text-muted-foreground mb-6">{shortDesc}</p>}

      <div className="flex flex-wrap gap-4 mb-8">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-border font-medium hover:bg-card transition-colors"
          >
            View Source
          </a>
        )}
      </div>

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {techStack.map((tech, idx) => (
            <span key={idx} className="text-sm px-3 py-1 rounded-md bg-muted text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      )}

      {screenshots.length > 0 && (
        <div className="space-y-6 mb-10">
          {screenshots.map((shot, idx) => (
            <img
              key={idx}
              src={`${shot.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={`${name} screenshot ${idx + 1}`}
              width={800}
              height={450}
              className="w-full rounded-xl border border-border"
            />
          ))}
        </div>
      )}

      {description && (
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  )
}