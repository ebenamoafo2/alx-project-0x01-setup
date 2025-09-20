import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-lg text-gray-600">@{username}</p>
      </div>
      
      <div className="text-gray-600 space-y-1">
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <p>{address.city}, {address.zipcode}</p>
        <p className="font-medium">{company.name}</p>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
        <span>Company: {company.name}</span>
      </div>
    </div>
  );
};

export default UserCard;