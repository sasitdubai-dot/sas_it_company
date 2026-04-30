import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPost, getRecentPosts, blogPosts } from '@/lib/blog-data';
import SchemaMarkup from '@/components/SchemaMarkup';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const recentPosts = getRecentPosts(5).filter((p) => p.slug !== post.slug);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'SAS IT Services',
      url: 'https://www.sasitdubai.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SAS IT Services',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sasitdubai.com/images/logo.jpeg',
      },
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
        if (line.startsWith('## '))
          return `<h2 class="text-2xl font-bold text-white mt-10 mb-4">${line.slice(3)}</h2>`;
        if (line.startsWith('### '))
          return `<h3 class="text-xl font-semibold text-white mt-8 mb-3">${line.slice(4)}</h3>`;
        if (line.startsWith('- ') || line.startsWith('* '))
          return `<li class="text-gray-300 ml-6 list-disc mb-1">${line.slice(2)}</li>`;
        if (line.startsWith('---'))
          return `<hr class="border-gray-700 my-8" />`;
        if (line.match(/^\|/))
          return `<p class="font-mono text-sm text-gray-300">${line}</p>`;
        if (line.trim() === '') return `<br />`;
        const processed = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');
        const withLinks = processed.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>'
        );
        const withCode = withLinks.replace(
          /`([^`]+)`/g,
          '<code class="bg-gray-800 text-blue-300 px-1 rounded text-sm">$1</code>'
        );
        return `<p class="text-gray-300 leading-relaxed mb-3">${withCode}</p>`;
      })
      .join('');
  };

  return (
    <>
      <SchemaMarkup schema={articleSchema} />
      <main className="min-h-screen bg-[#050d1a] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <article className="flex-1 max-w-3xl">
              {/* Breadcrumb */}
              <div className="mb-6 text-sm text-gray-400">
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  ← Blog
                </Link>
                <span className="mx-2">/</span>
                <span>{post.category}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800">
                <span>By {post.author}</span>
                <span>•</span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-AE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Content */}
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 space-y-6">
              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-2">Need IT Support in Dubai?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  SAS IT provides professional IT services across Dubai. 500+ businesses supported.
                  24/7 support available.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+971526716178"
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    Call +971-526716178
                  </a>
                  <a
                    href="https://wa.me/971526716178"
                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full text-center border border-blue-500/50 hover:border-blue-400 text-blue-400 font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>

              {/* Recent articles */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Recent Articles</h3>
                <div className="space-y-4">
                  {recentPosts.slice(0, 4).map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                      <span className="text-xs text-blue-400 font-medium">{p.category}</span>
                      <p className="text-gray-300 text-sm group-hover:text-white transition-colors leading-snug mt-1">
                        {p.title}
                      </p>
                      <span className="text-xs text-gray-500">{p.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Our IT Services</h3>
                <div className="space-y-2">
                  {[
                    { label: 'IT Support Dubai', href: '/it-support-dubai' },
                    { label: 'CCTV Installation Dubai', href: '/commercial-cctv-installation-dubai' },
                    { label: 'IT AMC Dubai', href: '/amc-annual-maintenance-dubai' },
                    { label: 'Networking & Security', href: '/networking-security-dubai' },
                    { label: 'Managed IT Services', href: '/managed-it-services-dubai' },
                    { label: 'Server Solutions', href: '/server-solutions-dubai' },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block text-gray-400 hover:text-blue-400 text-sm transition-colors"
                    >
                      → {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <p className="text-white font-semibold mb-1">Free IT Consultation</p>
                <p className="text-gray-400 text-xs mb-3">Dubai-based engineers. 24/7 support.</p>
                <a href="tel:+971526716178" className="block text-blue-400 font-medium text-sm hover:text-blue-300">
                  +971-526716178
                </a>
                <a
                  href="https://wa.me/971526716178"
                  className="block text-green-400 font-medium text-sm hover:text-green-300 mt-1"
                >
                  WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
