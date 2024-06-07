import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const DocCard = ({ id, title, content, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(); 
  };

  return (
    <Card style={{ width: '15rem',minHeight:'50px', marginRight:'15px',alignSelf:"start" ,color:'red',backgroundColor:'lightcoral'}} >
      <Card.Body>
        <h5 className='d-flex justify-content-between'>
          {title} 
          <span>
            <Link to={`/edit/${id}`} className='btn btn-sm'>
              <i className="fa-solid fa-pen-to-square"></i>
            </Link>  
            <button className='btn btn-sm' onClick={handleDeleteClick}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </span>
        </h5>
        <Card.Text dangerouslySetInnerHTML={{ __html: content }} /> 
      </Card.Body>
    </Card>
  );
}

export default DocCard;




