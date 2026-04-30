import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPost, getRecentPosts, blogPosts } from '@/lib/blog-data';
import SchemaMarkup from '@/components/SchemaMarkup';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `https://www.sasitdubai.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.sasitdubai.com/blog/${post.slug}`,
      siteName: 'SAS IT Services',
      locale: 'en_AE',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['SAS IT Team'],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const recentPosts = getRecentPosts(5).filter(p => p.slug !== post.slug);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: { '@type': 'Organization', name: 'SAS IT Services', url: 'https://www.sasitdubai.com' },
    publisher: {
      '@type': 'Organization',
      name: 'SAS IT Services',
      logo: { '@type': 'ImageObject', url: 'https://www.sasitdubai.com/images/logo.jpeg' }
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: `https://www.sasitdubai.com/blog/${post.slug}`,
    keywords: post.keywords,
    articleSection: post.category,
    inLanguage: 'en-AE',
  };

  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('## ')) return `<h2 class="text-2xl font-black text-white mt-10 mb-4 border-l-4 border-blue-500 pl-4">${line.slice(3)}</h2>`;
        if (line.startsWith('### ')) return `<h3 class="text-xl font-bold text-blue-400 mt-8 mb-3">${line.slice(4)}</h3>`;
        if (line.startsWith('- ') || line.startsWith('* ')) return `<li class="text-gray-300 ml-6 mb-1 list-disc">${line.slice(2)}</li>`;
        if (line.startsWith('---')) return `<hr class="border-gray-700 my-8" />`;
        if (line.match(/^\|/)) return `<div class="text-gray-400 text-sm font-mono overflow-x-auto my-1">${line}</div>`;
        if (line.trim() === '') return `<div class="mb-2"></div>`;
        const processed = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
        const withLinks = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>');
        const withCode = withLinks.replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-green-400 px-1 rounded text-sm">$1</code>');
        return `<p class="text-gray-300 leading-relaxed mb-3">${withCode}</p>`;
      })
      .join('');
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <SchemaMarkup schema={articleSchema} />

      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm">← Blog</Link>
            <span className="text-gray-600">/</span>
            <span className="text-sm text-gray-400">{post.category}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString('en-AE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <article className="flex-1 max-w-3xl">
            <div dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
            <div className="mt-12 bg-gradient-to-br from-blue-900/40 to-gray-800 border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-black text-white mb-3">Need IT Support in Dubai?</h3>
              <p className="text-gray-300 text-sm mb-6">SAS IT provides professional IT services across Dubai. 500+ businesses supported. 24/7 support available.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+971526716178" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all text-center">Call +971-526716178</a>
                <a href="https://wa.me/971526716178" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all text-center">WhatsApp Us</a>
                <Link href="/contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all text-center">Get Free Quote</Link>
              </div>
            </div>
          </article>

          <aside className="lg:w-80 space-y-8">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Recent Articles</h3>
              <div className="space-y-4">
                {recentPosts.slice(0, 4).map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                    <div className="text-blue-400 text-xs font-semibold mb-1">{p.category}</div>
                    <div className="text-gray-300 text-sm group-hover:text-white transition-colors leading-snug">{p.title}</div>
                    <div className="text-gray-500 text-xs mt-1">{p.readTime}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Our IT Services</h3>
              <div className="space-y-2">
                {[
                  { label: 'IT Support Dubai', href: '/it-support-dubai' },
                  { label: 'CCTV Installation Dubai', href: '/commercial-cctv-installation-dubai' },
                  { label: 'IT AMC Dubai', href: '/amc-annual-maintenance-dubai' },
                  { label: 'Networking & Security', href: '/networking-security-dubai' },
                  { label: 'Managed IT Services', href: '/managed-it-services-dubai' },
                  { label: 'Server Solutions', href: '/server-solutions-dubai' },
                ].map(s => (
                  <Link key={s.href} href={s.href} className="block text-gray-400 hover:text-blue-400 text-sm transition-colors py-1 border-b border-gray-800">{s.label}</Link>
                ))}
              </div>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
              <p className="text-white font-bold mb-3">Free IT Consultation</p>
              <p className="text-gray-400 text-sm mb-4">Dubai-based engineers. 24/7 support.</p>
              <a href="tel:+971526716178" className="block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all mb-2">+971-526716178</a>
              <a href="https://wa.me/971526716178" className="block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all">WhatsApp</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
