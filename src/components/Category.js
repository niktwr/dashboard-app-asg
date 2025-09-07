import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import { useState } from 'react';

export default function Category({ category }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow p-4 w-96">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">{category.name}</h2>
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded"
          onClick={() => setModalOpen(true)}
        >
          + Add Widget
        </button>
      </div>
      <div>
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
      {modalOpen && <AddWidgetModal categoryId={category.id} onClose={() => setModalOpen(false)} />}
    </div>
  );
}
