import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import ShopCard from './ShopCard'
function DairyProducts() {
  return (
    <div className='d-flex flex-column'>
    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
<p className="section-title bg-white text-center text-primary px-3">
Organic products
</p>
<h1 className="mb-5" data-aos="fade-up" data-aos-delay="500">
Pick Fresh Products
</h1>
</div>
<div className='d-flex justify-content-center'>
<div className="col-lg-9 ">
      <div className="row g-4 justify-content-center">
        
        <ShopCard
          id={"132"}
          image={`https://img.freepik.com/free-photo/raw-foodstuff-with-water-drops-studio_23-2151364841.jpg?t=st=1718003866~exp=1718007466~hmac=9831c356108b3b64ac19ec5cb46e41e9173808973c14b0d8425fa4d5fbe6e5b3&w=1060`}
          category={'Vegetables'}
          title={'Fresho Carrot'}
          description={"Fresho Organic products are organically grown and handpicked by expert.Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability."}
          price={"106"}
        />
        <ShopCard
          id={"133"}
          image={`https://img.freepik.com/premium-photo/full-frame-shot-tomatoes_1048944-18291200.jpg?w=740`}
          category={'Vegetables'}
          title={'Fresho Tomato'}
          description={"Having the size, colour and juiciness of cherries, cherry tomatoes are sweeter to taste than regular varieties. We pick these tomatoes from reputed farmers and store in hygienic conditions to maintain their freshness."}
          price={"306"}
        />
        <ShopCard
                                  id={"124"}
                                  image={`https://img.freepik.com/free-photo/closeup-fresh-avocados-filling-frame_125540-4396.jpg?t=st=1717998541~exp=1718002141~hmac=972101fb68de626f126ff084ddcde70f6e8ae36021ca16a0b64e4cb7cb7f8c14&w=900`}
                                  category={'Fruits'}
                                  title={'Avacados'}
                                  description={" Avocado slices or chunks can add creaminess and nutrition to salads. "}
                                  price={"247"}
                              />
                              <ShopCard
                                  id={"125"}
                                  image={`https://img.freepik.com/free-photo/top-view-smallsour-fruit-with-dark-skin-sloes-bucket-blue-checked-tablecloth-blue-background_141793-25257.jpg?t=st=1717998855~exp=1718002455~hmac=e2fe55a56063986b3c1d86cbdc1ab6a57f0029964754a6eb94046c20eff286ee&w=740`}
                                  category={'Fruits'}
                                  title={'Fresho Blueberry'}
                                  description={"Blueberries, tiny yet potent, are a nutritional powerhouse. Loaded with antioxidants, they help neutralise harmful free radicals, safeguarding our body's cells from damage."}
                                  price={"426"}
                              />
                              <ShopCard
                                  id={"126"}
                                  image={`https://img.freepik.com/premium-photo/pieces-dragon-fruit-isolated_974629-19287.jpg?w=900`}
                                  category={'Fruits'}
                                  title={'Fresh Dragon Fruit'}
                                  description={"Dragon fruits are oval to oblong in shape and size, with pink peel and green scale-like leaves. It is named after its resemblance to dragon scales."}
                                  price={"636"}
                              />
                              <ShopCard
                                  id={"127"}
                                  image={`https://img.freepik.com/premium-photo/bowl-with-fresh-red-cherries_77249-311.jpg?w=900`}
                                  category={'Fruits'}
                                  title={'Fresh Cherry'}
                                  description={"Fresho brings top quality imported red coloured cherries are which round with slight heart shapes and dimples at the stem end. "}
                                  price={"826"}
                              />
                              <ShopCard
                                  id={"128"}
                                  image={`https://img.freepik.com/premium-photo/pears-black-background_762785-125842.jpg?w=900`}
                                  category={'Fruits'}
                                  title={'Fresh Pear'}
                                  description={"Pears are grown throughout the world, but none matches the ideal growing conditions and climate of the Pacific Northwest states of South Africa â€œ Washington & Oregon. USA Pears are recognized worldwide for their unsurpassed quality."}
                                  price={"326"}
                              />
        
        <ShopCard
                                  id={"134"}
                                  image={`https://img.freepik.com/premium-photo/shimeji-mushrooms-wicker-basket-wooden-table_29409-667.jpg?w=826`}
                                  category={'Vegetables'}
                                  title={'Fresho Mushrooms '}
                                  description={"Oyster mushrooms are pale to dark gray in colour and have a shape like that of an oyster with a soft and slightly chewy texture."}
                                  price={"202"}
                              />
                              <ShopCard
                                  id={"135"}
                                  image={`https://img.freepik.com/premium-photo/hand-holding-fresh-lettuce-leaves-with-blurred-background-lettuce-selection-text-space_174533-60350.jpg?w=900`}
                                  category={'Vegetables'}
                                  title={'Fresho Lettuce '}
                                  description={"With fragile reddish or purplish leaves, Red lettuce has a mild flavour and is less crunchy compared to the green lettuce."}
                                  price={"408"}
                              />
                              
        {/* <div className="col-12">
          <div className="pagination d-flex justify-content-center mt-5">
            <Link to="/shop-4" className="rounded">
              «
            </Link>
            <Link to="/shop" className="active rounded">
              1
            </Link>
            <Link to="/shop-2" className="rounded">
              2
            </Link>
            <Link to="/shop-3" className="rounded">
              3
            </Link>
            <Link tp="/shop-4" className="rounded">
              4
            </Link>
            
            <Link to="/shop-2" className="rounded">
              »
            </Link>
          </div>
        </div> */}
      </div>
    </div>
</div>

</div>
  )
}

export default DairyProducts