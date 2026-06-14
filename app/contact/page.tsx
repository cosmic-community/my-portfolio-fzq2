import { getProfile, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Contact | My Portfolio',
}

export default async function ContactPage() {
  const profile = await getProfile()

  const fullName = getMetafieldValue(profile?.metadata?.full_name)
  const email = getMetafieldValue(profile?.metadata?.email)
  const location = getMetafieldValue(profile?.metadata?.location)
  const githubUrl = getMetafieldValue(profile?.metadata?.github_url)
  const linkedinUrl = getMetafieldValue(profile?.metadata?.linkedin_url)
  const twitterUrl = getMetafieldValue(profile?.metadata?.twitter_url)
  const resume = profile?.metadata?.resume

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Get in Touch</h1>
      <p className="text-muted-foreground mb-10">
        {fullName ? `Let's connect, ${fullName.split(' ')[0]} is happy to chat.` : "Let's connect."}
      </p>

      <div className="bg-card rounded-xl p-8 border border-border space-y-6">
        {email && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <a href={`mailto:${email}`} className="text-lg text-primary hover:underline">
              {email}
            </a>
          </div>
        )}

        {location && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="text-lg">{location}</p>
          </div>
        )}

        <div>
          <p className="text-sm text-muted-foreground mb-3">Find me online</p>
          <div className="flex flex-wrap gap-3">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm">
                GitHub
              </a>
            )}
            {linkedinUrl && (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm">
                LinkedIn
              </a>
            )}
            {twitterUrl && (
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm">
                Twitter
              </a>
            )}
          </div>
        </div>

        {resume && (
          <div>
            <a
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </div>
  )
}