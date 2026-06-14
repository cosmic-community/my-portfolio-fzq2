import type { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ExperienceItemProps {
  experience: WorkExperience
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const company = getMetafieldValue(experience.metadata?.company) || experience.title
  const role = getMetafieldValue(experience.metadata?.role)
  const description = getMetafieldValue(experience.metadata?.description)
  const location = getMetafieldValue(experience.metadata?.location)
  const logo = experience.metadata?.company_logo
  const isCurrent = experience.metadata?.current
  const startDate = formatDate(experience.metadata?.start_date)
  const endDate = isCurrent ? 'Present' : formatDate(experience.metadata?.end_date)

  return (
    <div className="relative pl-8 pb-10 border-l border-border last:border-l-transparent last:pb-0">
      <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

      <div className="bg-card rounded-xl p-6 border border-border ml-2">
        <div className="flex items-start gap-4">
          {logo && (
            <img
              src={`${logo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={company}
              width={48}
              height={48}
              className="w-12 h-12 rounded-lg object-cover bg-muted flex-shrink-0"
            />
          )}
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-card-foreground">{role}</h3>
            <p className="text-primary font-medium">{company}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mt-1">
              {(startDate || endDate) && (
                <span>
                  {startDate} {endDate && `– ${endDate}`}
                </span>
              )}
              {location && <span>• {location}</span>}
            </div>
          </div>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}