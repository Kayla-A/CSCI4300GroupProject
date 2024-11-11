function Item({ image, title }) {
    return (
      <div style={{ 
        border: '1px solid #ddd', 
        padding: '1rem', 
        textAlign: 'center', 
        margin: '1rem' ,
        width: '200px',
        }}>
        <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
        <h3 style={{ marginTop: '0.5rem' }}>{title}</h3>
      </div>
    );
  }
  
  export default Item;
  