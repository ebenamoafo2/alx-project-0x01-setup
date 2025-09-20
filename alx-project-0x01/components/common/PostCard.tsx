interface PostCardProps {
  title: string;
  content: string;
  author: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, author, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default PostCard;