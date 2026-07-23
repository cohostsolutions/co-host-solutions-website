'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export default function AdminDashboard() {
  const [drafts, setDrafts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDrafts();
  }, []);

  const fetchDrafts = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/draft/list');
      if (!res.ok) {
        if (res.status === 401) {
          window.location.href = '/admin/login';
          return;
        }
        throw new Error('Failed to fetch drafts');
      }
      const data = await res.json();
      setDrafts(data.drafts || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)' }}>
      {/* Header */}
      <header style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '0 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '800',
              color: 'var(--crimson)',
              fontFamily: 'var(--font-display)',
              margin: 0,
            }}>
              Admin Dashboard
            </h1>
            <p style={{
              fontSize: '14px',
              color: 'var(--ink-muted)',
              margin: '4px 0 0',
            }}>
              Manage blog posts and drafts
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-dark)',
              color: 'var(--ink-mid)',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--crimson-bg)';
              e.currentTarget.style.color = 'var(--crimson)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--ink-mid)';
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1140px',
        margin: '0 auto',
        padding: '40px 28px',
      }}>
        {/* Create New Button */}
        <div style={{ marginBottom: '40px' }}>
          <Link href="/admin/blog/new">
            <button style={{
              background: 'var(--crimson)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '700',
              fontSize: '15px',
              cursor: 'pointer',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--crimson-dark)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--crimson)';
              e.currentTarget.style.transform = 'none';
            }}
            >
              + New Blog Post
            </button>
          </Link>
        </div>

        {/* Drafts Section */}
        {loading ? (
          <p style={{ color: 'var(--ink-muted)', fontSize: '16px' }}>Loading drafts...</p>
        ) : error ? (
          <div style={{
            background: '#FEE2E2',
            color: '#991B1B',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
          }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Error: {error}</p>
          </div>
        ) : drafts.length === 0 ? (
          <div style={{
            background: 'var(--surface)',
            padding: '48px',
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid var(--border)',
          }}>
            <p style={{ color: 'var(--ink-muted)', fontSize: '16px', margin: 0 }}>
              No drafts yet. <Link href="/admin/blog/new" style={{ color: 'var(--crimson)', textDecoration: 'underline' }}>Create your first post</Link>.
            </p>
          </div>
        ) : (
          <div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--ink)',
              marginBottom: '20px',
              fontFamily: 'var(--font-display)',
            }}>
              Drafts ({drafts.length})
            </h2>
            <div style={{
              display: 'grid',
              gap: '16px',
            }}>
              {drafts.map((draft) => (
                <div
                  key={draft.id}
                  style={{
                    background: 'var(--surface)',
                    padding: '20px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'var(--ink)',
                      margin: '0 0 4px',
                    }}>
                      {draft.data.title}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: 'var(--ink-muted)',
                      margin: 0,
                    }}>
                      Last edited: {new Date(draft.data.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Link href={`/admin/blog/${draft.id}/edit`}>
                      <button style={{
                        background: 'var(--gold)',
                        color: '#fff',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        border: 'none',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                      }}>
                        Edit
                      </button>
                    </Link>
                    <Link href={`/admin/blog/${draft.id}/preview`}>
                      <button style={{
                        background: 'transparent',
                        color: 'var(--crimson)',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        border: '1px solid var(--crimson)',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                      }}>
                        Preview
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
