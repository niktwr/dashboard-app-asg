import Category from './Category';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const categories = useSelector((state) => state.dashboard.categories);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">CNAPP Dashboard</h1>
      <div className="flex flex-wrap gap-8">
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
