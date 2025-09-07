import { useDispatch } from 'react-redux';
import { addWidget } from '../store/dashboardSlice';
import { useState } from 'react';

export default function AddWidgetModal({ categoryId, onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const submit = () => {
    if (name) {
      dispatch(addWidget({
        categoryId,
        widget: { id: Date.now().toString(), name, text }
      }));
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white rounded shadow p-6 w-80">
        <h2 className="mb-4 font-bold">Add Widget</h2>
        <input
          className="border mb-2 w-full p-2"
          placeholder="Widget Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="border mb-2 w-full p-2"
          placeholder="Widget Text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={submit}>
          Add
        </button>
        <button className="px-4 py-2" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
