import { useArticles } from "@/hooks/use-portfolio";
import { ArticleCard } from "@/components/ArticleCard";
import { Loader2 } from "lucide-react";

export default function Articles() {
  const { data: articles, isLoading, isError } = useArticles();

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Writing</h1>
        <p className="text-xl text-muted-foreground">
          Articles, tutorials, and technical deep-dives. I write about React, 
          system design, and software engineering practices.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin w-10 h-10 text-primary" />
        </div>
      ) : isError ? (
        <div className="text-center py-20 text-destructive">
          Failed to load articles.
        </div>
      ) : (
        <div className="space-y-16">
          {/* Client Projects Section */}
          {articles?.filter(a => a.client).length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                Client Technical Writing
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.filter(a => a.client).map((article, idx) => (
                  <ArticleCard key={idx} article={article} index={idx} />
                ))}
              </div>
            </section>
          )}

          {/* Personal/Medium Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Latest from Medium
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles?.filter(a => !a.client).map((article, idx) => (
                <ArticleCard key={idx} article={article} index={idx} />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
