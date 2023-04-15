import React from 'react';

const MenuCard = ({ menuData }) => {
  //  console.log(menuData) ;
  return (
    <>

      <section className='main-card--container'>
        {
          menuData.map((currElement) => {
            //  console.log( currElement.image) ;
            return (

              <>

                <div className="card-container" key={currElement.id}>
                  <div className="card">
                    <div className="card-body">
                      <span className="card-number card-circle subtle">{currElement.id}</span>
                      <span className="card-author subtle">
                        {currElement.category}
                      </span>
                      <h2 className='card-title'>{currElement.name}</h2>
                      <span className='card-desciption subtle'>
                        {currElement.description}
                      </span>
                      <div className='card-red'>
                        Read
                      </div>
                      <img
                        src={currElement.image} alt='image' className='card-media'
                      >
                      </img>

                      <span className='card-tag'> Order Now</span>
                    </div>

                  </div>
                </div>

              </>
            );
          })
        }
      </section>
    </>


  )
}

export default MenuCard


