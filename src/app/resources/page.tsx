import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import { extractExcerpt } from "@/lib/mdx";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Co-Host Solutions",
  description: "Blog articles and guides about Airbnb property management in the Philippines.",
};

export default function ResourcesPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main style={{ background: "var(--paper)", minHeight: "100vh" }}>
        <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="wrap">
            <div style={{ marginBottom: "64px" }}>
              <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>Resources</h1>
              <p style={{ fontSize: "18px", color: "var(--ink-mid)", maxWidth: "600px" }}>
                Expert insights and strategies for maximizing your Airbnb property earnings.
              </p>
            </div>

            {posts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <p style={{ fontSize: "18px", color: "var(--ink-muted)" }}>No articles yet. Check back soon!</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "32px" }}>
                {posts.map((post) => (
                  <Link key={post.slug} href={`/resources/${post.slug}`} style={{ textDecoration: "none" }}>
                    <article
                      style={{
                        background: "var(--surface)",
                        padding: "32px",
                        borderRadius: "var(--radius)",
                        boxShadow: "var(--shadow-sm)",
                        cursor: "pointer",
                        transition: "all 0.22s ease",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="resource-card"
                    >
                      <span style={{ color: "var(--gold)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: "12px" }}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "var(--crimson)" }}>{post.title}</h3>
                      <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-mid)", flex: 1 }}>{post.description}</p>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
