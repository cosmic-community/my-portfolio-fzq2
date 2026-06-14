import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const name = getMetafieldValue(skill.metadata?.name) || skill.title
  const percentage = skill.metadata?.proficiency_percentage ?? 0
  const proficiency = getMetafieldValue(skill.metadata?.proficiency)
  const color = getMetafieldValue(skill.metadata?.color) || '#8b5cf6'

  return (
    <div className="bg-card rounded-xl p-5 border border-border">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-card-foreground">{name}</h4>
        {proficiency && (
          <span className="text-xs text-muted-foreground">{proficiency}</span>
        )}
      </div>

      <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-right">{percentage}%</p>
    </div>
  )
}