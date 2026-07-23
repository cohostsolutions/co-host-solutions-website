'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NewBlogPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Title and content are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const draftId = `draft-${Date.now()}`;
      const res = await fetch('/api/admin/draft/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: draftId,
          title: formData.title,
          description: formData.description,
          content: formData.content,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to save draft');
      }

      setSuccess(true);
      setFormData({ title: '', description: '', content: '' });
      setTimeout(() => {
        router.push('/admin');
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)', paddingTop: '40px' }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 28px 40px',
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <Link href="/admin">
            <button style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--crimson)',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              padding: '8px 0',
              marginBottom: '12px',
            }}>
              ← Back to Dashboard
            </button>
          </Link>
          <h1 style={{
            fontSize: '32px',
            fontWeight: '800',
            color: 'var(--ink)',
            fontFamily: 'var(--font-display)',
            margin: '0',
          }}>
            Create New Blog Post
          </h1>
        </div>

        {/* Success Message */}
        {success && (
          <div style={{
            background: '#DCFCE7',
            color: '#166534',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            fontSize: '14px',
            fontWeight: '600',
          }}>
            ✓ Draft saved! Redirecting to dashboard...
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#FEE2E2',
            color: '#991B1B',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            fontSize: '14px',
            fontWeight: '600',
          }}>
            ✕ {error}
          </div>
        )}

        {/* Form */}
        <div style={{
          background: 'var(--surface)',
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid var(--border)',
        }}>
          {/* Title */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '700',
              color: 'var(--ink)',
              marginBottom: '8px',
            }}>
              Title <span style={{ color: 'var(--crimson)' }}>*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="How to Maximize Airbnb Earnings in CDO"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '16px',
                fontFamily: 'var(--font-body)',
                boxSizing: 'border-box',
              }}
            />
            <span style={{
              display: 'block',
              fontSize: '12px',
              color: 'var(--ink-muted)',
              marginTop: '6px',
            }}>
              {formData.title.length}/200
            </span>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '700',
              color: 'var(--ink)',
              marginBottom: '8px',
            }}>
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="A brief summary of the post"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '16px',
                fontFamily: 'var(--font-body)',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Content */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '700',
              color: 'var(--ink)',
              marginBottom: '8px',
            }}>
              Content <span style={{ color: 'var(--crimson)' }}>*</span>
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your blog post content here (Markdown supported)..."
              style={{
                width: '100%',
                minHeight: '400px',
                padding: '12px 16px',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily: 'var(--font-body)',
                boxSizing: 'border-box',
                resize: 'vertical',
              }}
            />
            <span style={{
              display: 'block',
              fontSize: '12px',
              color: 'var(--ink-muted)',
              marginTop: '6px',
            }}>
              {formData.content.length} characters
            </span>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleSave}
              disabled={loading}
              style={{
                background: 'var(--crimson)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: '6px',
                border: 'none',
                fontWeight: '700',
                fontSize: '15px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = 'var(--crimson-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--crimson)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {loading ? 'Saving...' : '💾 Save Draft'}
            </button>
            <Link href="/admin">
              <button style={{
                background: 'transparent',
                color: 'var(--ink-mid)',
                padding: '14px 28px',
                borderRadius: '6px',
                border: '1px solid var(--border-dark)',
                fontWeight: '700',
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--paper)';
                e.currentTarget.style.color = 'var(--crimson)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--ink-mid)';
              }}
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
