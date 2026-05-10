const ConfirmModal = ({
  title,
  message,
  onConfirm,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        
        <h2 className="text-xl font-semibold text-gray-900">
          {title}
        </h2>

        <p className="mt-3 text-gray-600">
          {message}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-[#DC143C] px-4 py-2 text-white hover:bg-[#B01030] transition"
          >
            Continue
          </button>

        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;