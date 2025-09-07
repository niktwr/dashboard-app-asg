import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/dashboardSlice';

export default function Widget({ widget, categoryId }) {
  const dispatch = useDispatch();
  return (
    <div className="border-b py-2 flex justify-between items-center group">
      <div>
        <div className="font-medium">{widget.name}</div>
        <div className="text-sm text-gray-600">{widget.text}</div>
      </div>
      <button
        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
      >
        ✕
      </button>
    </div>
  );
}
