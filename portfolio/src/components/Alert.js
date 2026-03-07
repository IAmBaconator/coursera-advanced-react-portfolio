import { useAlertContext } from "../context/alertContext";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const isSuccess = type === "success";

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: isSuccess ? '#81C784' : '#FF8A65',
          padding: '1rem',
          borderRadius: '0.5rem',
          maxWidth: '400px',
          color: 'white',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {isSuccess ? 'All good!' : 'Oops!'}
        </h2>
        <p style={{ marginBottom: '1rem' }}>{message}</p>
        <button
          onClick={onClose}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Alert;