import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Newseletter from '../../components/Newseletter';
import { getPostFilePaths, getPostBySlug, getNextPostBySlug, getPreviousPostBySlug } from '../../utils/mdx-utils';

export default function BlogPost({ mdxSource, frontMatter, slug, documentPath, nextPost, previousPost }) {
  return (
    <Layout>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description || ''}
        canonical={`/blog/${slug}`}
        ogType="article"
        author={frontMatter.author || 'Moxie Themes'}
        publishedTime={frontMatter.date}
        section="Blog"
        tags={frontMatter.tags}
        keywords={frontMatter.tags?.join(', ')}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden" 
            data-netlify-document={`git:${documentPath}`} 
            data-netlify-sidebar-shortcuts='[{"label":"All posts","href":"/blog"}]'
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
              <h1 
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white" 
                data-netlify-field="title" 
                data-netlify-group="meta"
              >
                {frontMatter.title}
              </h1>
              {frontMatter.date && (
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <p 
                    className="text-blue-100 font-medium" 
                    data-netlify-field="date" 
                    data-netlify-group="meta"
                  >
                    {new Date(frontMatter.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              )}
            </div>
            
            {/* Content Section */}
            <div className="px-8 py-12">
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed" 
                data-netlify-field="body" 
                data-netlify-group="content"
              >
                <MDXRemote {...mdxSource} />
              </div>
            </div>
          </article>

          {/* Navigation Section */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Back to all blogs */}
              <Link 
                href="/blog" 
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to all posts</span>
              </Link>

              {/* Navigation buttons */}
              <div className="flex space-x-4">
                {previousPost && (
                  <Link 
                    href={`/blog/${previousPost.slug}`}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Previous</span>
                  </Link>
                )}
                
                {nextPost && (
                  <Link 
                    href={`/blog/${nextPost.slug}`}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA Section */}
      <div className="border-2 border-charcoal/50">
        <Newseletter />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { mdxSource, data } = await getPostBySlug(slug);
  const documentPath = `posts/${slug}.mdx`;
  
  // Get navigation data
  const nextPost = getNextPostBySlug(slug);
  const previousPost = getPreviousPostBySlug(slug);
  
  return {
    props: { 
      mdxSource, 
      frontMatter: data, 
      slug, 
      documentPath,
      nextPost,
      previousPost
    },
  };
}

export function getStaticPaths() {
  const paths = getPostFilePaths().map((path) => ({
    params: {
      slug: path.replace(/\.mdx?$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}


