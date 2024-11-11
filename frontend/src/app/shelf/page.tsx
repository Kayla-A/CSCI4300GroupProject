import React from 'react';

const items = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Label ${i + 1}`,
  image: '/cd.png', 
}));

const ShelfPage = () => {
  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={shelfContainerStyle}>
          <img src="/shelf.png" alt="Shelf" style={shelfImageStyle} />
          <div style={itemsContainerStyle}>
            {items.map((item, index) => (
              <div key={item.id} style={itemStyle}>
                <img src={item.image} alt={item.title} style={cdImageStyle} />
                <span style={labelStyle}>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={quickAddStyle}>
          <h3>Quick Add</h3>
          <input type="text" placeholder="Label" style={inputStyle} />
          <button style={addButtonStyle}>Add Manually</button>
        </div>
      </div>
      <div style={paginationStyle}>
        <button>❮</button>
        <span>Page 1 of totalPages</span>
        <button>❯</button>
      </div>
    </div>
  );
};

// Inline styles
const pageStyle = {
  backgroundColor: '#e6d0f5',
  height: '100vh',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '2rem',
};

const shelfContainerStyle = {
  position: 'relative',
  width: '800px',
  height: '800px',
};

const shelfImageStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
};

const itemsContainerStyle = {
    position: 'absolute',
    top: '5px',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    gap: '1px', 
    padding: '105px', 
    zIndex: 2, 
  };
  
  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontWeight: 'bold',
  };
  
  const cdImageStyle = {
    width: '55px', 
    height: '55px',
    borderRadius: '50%',
  };
  
  const labelStyle = {
    marginTop: '5px',
    fontSize: '0.8rem',
  };
  
  const quickAddStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  
  const inputStyle = {
    padding: '0.5rem',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  };
  
  const addButtonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
  };
  
  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '20px',
  };
  
  export default ShelfPage;