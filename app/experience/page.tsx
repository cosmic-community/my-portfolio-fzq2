import { getWorkExperience } from '@/lib/cosmic'
import ExperienceItem from '@/components/ExperienceItem'

export const metadata = {
  title: 'Experience | My Portfolio',
}

export default async function ExperiencePage() {
  const experiences = await getWorkExperience()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Work Experience</h1>
      <p className="text-muted-foreground mb-10">My professional journey so far.</p>

      {experiences.length === 0 ? (
        <p className="text-muted-foreground">No experience found.</p>
      ) : (
        <div>
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      )}
    </div>
  )
}