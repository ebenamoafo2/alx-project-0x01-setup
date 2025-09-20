import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import PostCard from '../../components/common/PostCard';

const Posts: React.FC = () => {
  const samplePosts = [
    {
      title: "Getting Started with Next.js",
      content: "Next.js is a powerful React framework that enables you to build full-stack web applications. It provides many features out of the box including server-side rendering, static site generation, and API routes.",
      author: "John Doe",
      date: "2024-01-15"
    },
    {
      title: "Understanding React Components",
      content: "React components are the building blocks of React applications. They allow you to split the UI into independent, reusable pieces that can be managed separately.",
      author: "Jane Smith",
      date: "2024-01-10"
    },
    {
      title: "Tailwind CSS Best Practices",
      content: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.",
      author: "Mike Johnson",
      date: "2024-01-05"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Posts</h1>
          <div className="space-y-6">
            {samplePosts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.content}
                author={post.author}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Posts;