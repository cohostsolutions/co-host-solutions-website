import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.frontmatter.title} - Co-Host Solutions`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <>
        <Header />
        <main style={{ minHeight: "100vh", padding: "80px 0" }}>
          <div className="wrap">
            <p style={{ fontSize: "18px", color: "var(--ink-mid)" }}>Article not found.</p>
            <Link href="/resources" style={{ color: "var(--crimson)", textDecoration: "underline", marginTop: "16px", display: "inline-block" }}>
              ← Back to Resources
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main style={{ background: "var(--paper)", minHeight: "100vh" }}>
        <article>
          {/* Header Section */}
          <section style={{ paddingTop: "80px", paddingBottom: "48px", background: "var(--surface)" }}>
            <div className="wrap">
              <Link href="/resources" style={{ color: "var(--gold)", fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
                ← Back to Resources
              </Link>
              <h1 style={{ fontSize: "42px", marginTop: "24px", marginBottom: "16px" }}>{post.frontmatter.title}</h1>
              <p style={{ fontSize: "16px", color: "var(--ink-muted)", marginBottom: "24px" }}>
                By {post.frontmatter.author || "Co-Host Solutions"} • {new Date(post.frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section style={{ paddingTop: "48px", paddingBottom: "80px" }}>
            <div className="wrap" style={{ maxWidth: "800px" }}>
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "var(--ink-mid)",
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
