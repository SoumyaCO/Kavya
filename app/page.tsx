import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PoemCard } from "@/components/PoemCard"
import { MOCK_POEMS, TRENDING_TAGS } from "@/lib/mockData"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-saffron-100 via-white to-peacockBlue-100 dark:from-saffron-900/20 dark:via-background dark:to-peacockBlue-900/20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paisley.png')] opacity-5 pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-heading mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-saffron-600 to-terracotta">
            Where Words Become Art
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground mb-8">
            Discover the beauty of Hindi, Urdu, and English poetry. Share your soul with the world on Kavya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/feed">
              <Button size="lg" className="bg-saffron hover:bg-saffron-600 text-white rounded-full px-8">
                Start Reading
              </Button>
            </Link>
            <Link href="/write">
              <Button size="lg" variant="outline" className="border-saffron text-saffron hover:bg-saffron-50 rounded-full px-8">
                Write a Poem
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Poems Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-heading">Featured Poems</h2>
              <p className="text-muted-foreground mt-2">Curated masterpieces just for you</p>
            </div>
            <Link href="/feed" className="group flex items-center text-primary font-medium hover:underline">
              View all <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {MOCK_POEMS.map((poem, index) => (
              <PoemCard key={poem.id} poem={poem} className={index === 1 ? "md:translate-y-8" : ""} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Tags Section */}
      <section className="py-12 bg-muted/30 border-y border-border/40">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-8 font-heading">Trending on Kavya</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {TRENDING_TAGS.map((tag) => (
              <Link key={tag} href={`/feed?tag=${tag.replace('#', '')}`}>
                <div className="px-6 py-3 bg-background rounded-full border shadow-sm hover:shadow-md hover:border-primary transition-all cursor-pointer">
                  <span className="text-lg font-medium text-foreground/80">
                    <span className="text-saffron mr-1">#</span>
                    {tag.replace('#', '')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 container px-4 md:px-6 text-center">
        <div className="bg-gradient-to-r from-peacockBlue/10 to-saffron/10 rounded-3xl p-8 md:p-16 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-peacockBlue/10 rounded-full blur-3xl -z-10" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with thousands of poets and readers. Get weekly digests of the best shayaris delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href={"/signup"}>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
