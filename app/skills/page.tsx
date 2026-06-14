import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'
import type { Skill } from '@/types'

export const metadata = {
  title: 'Skills | My Portfolio',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  const grouped: Record<string, Skill[]> = {}
  for (const skill of skills) {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    const existing = grouped[category]
    if (existing) {
      existing.push(skill)
    } else {
      grouped[category] = [skill]
    }
  }

  const categories = Object.keys(grouped)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Skills</h1>
      <p className="text-muted-foreground mb-10">Technologies and tools I work with.</p>

      {categories.length === 0 ? (
        <p className="text-muted-foreground">No skills found.</p>
      ) : (
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = grouped[category]
            if (!categorySkills || categorySkills.length === 0) {
              return null
            }
            return (
              <div key={category}>
                <h2 className="text-xl font-semibold mb-4">{category}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}