import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from "bootstrap";
import Data from '../data/Data';
import { AiFillCloseCircle } from "react-icons/ai";
import './Men.css'

const Men = ({add}) => {
  const [detail,set]=useState([]);
  const [close, setClose] = useState(false);


  function page(pro) {
    set([{...pro}])
    setClose(true);

  }
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '20px',
    },
    productCard: {
      flex: '0 0 calc(33.33% - 20px)',
      marginBottom: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
    },
    productImage: {
      width: '100%',
      height: 'auto',
    },
    productInfo: {
      padding: '10px',
    },
    banner: {
      width: '100%',
      overflow: 'hidden',
    },
    bannerImage: {
      width: '100%',
      height: '600',
      display: 'block',
    },
  
  };
  
  // Media query for small screens
  styles['@media (max-width: 768px)'] = {
    productCard: {
      flex: '0 0 calc(100% - 20px)', // One column on smaller screens
    },
    
  };

  
  

  return (
    <>
    {
      close ?
        <div className='detail-container'>

      <div className='detail-content'>
        <button onClick={()=>setClose(false)} className='close'>
        <AiFillCloseCircle></AiFillCloseCircle>

        </button>
      {
        detail.map((x)=>{
          return(
            <div className='detail-info' key={x.id}>
              <div className='img-boxx'>
                <img src={x.Pic1} alt="" height={350}  width={300}  />
            <div className='product-detail'>
            <h1 class="color">{x.title1}</h1>
            <h2>${x.price}</h2>
            <h2>Size:{x.size}</h2>
            <h2>Colors Available:{x.av}</h2>

<p>{x.des}</p>
<button className='cart' onClick={()=>add(x)}>Add to cart</button>
    </div>
    </div>
            </div>
          )
        })
      }
      </div>
    </div> :null
}

    <hr />
     <div className='app text-center'>
     <div style={styles.banner}>
        <img src="/b1.jpg" style={styles.bannerImage} height={300} />

      </div>

      <div>
      </div>
     <h1 className=' okk'> Men Products</h1>
     <div style={styles.container }  className='query'>

              {
        Data.map((element)=>{
            return(
              <div key={element.id} style={styles.productCard}>
              <img src={element.Pic1}  style={styles.productImage} />
              <div style={styles.productInfo}>
    
                  <h5 class="color">{element.title1}</h5>


  <h2 class="text-center" >$15</h2>

    <button onClick={()=>page(element)} className='cart'>View Details</button>

  </div>
       </div>
            )
        })
    }
    </div>
    </div>
    </>

  )
  
}

export default Men
