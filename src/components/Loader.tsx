export default function Loader() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div className="spinner" style={spinnerStyle}></div>
      <p>Chargement...</p>
    </div>
  );
}

// Style pour le spinner
const spinnerStyle = {
  border: '4px solid #f3f3f3',
  borderTop: '4px solid #3498db',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  animation: 'spin 2s linear infinite',
};

