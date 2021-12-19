import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import './product.css'
import {productData} from '../../testData'
import {Publish} from '@material-ui/icons'

export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                 <h1 className="productTitle">Product</h1>
                 <Link to='/newproduct'>
                 <button className="productAddButton">Crate</button>
                 </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey='sales' title='Sales Performance'  />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000" alt="" className="productInfoImg" />
                         <span className="productName">Iphone 13 pro max</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">848</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">3000</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form  className="productForm">
                  <div className="productFormLeft">
                      <label htmlFor="">Product Name</label>
                       <input type="text" placeholder='Iphone 13 pro max' />
                       <label>In stock</label>
                       <select name='instock' id='idstock'>
                           <option value='yes'> Yes</option>
                           <option value='no'> No</option>
                       </select>
                       <label>Active</label>
                       <select name='active' id='active'>
                           <option value='yes'> Yes</option>
                           <option value='no'> No</option>
                       </select>
                  </div>
                  <div className="productFormRight">
                      <div className="productUpload">
                          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000" alt="" className="productUpload" />
                          <label for='file'>
                              <Publish />
                          </label>
                          <input type='file' id='file' style={{display:'none'}}  />
                      </div>
                      <button className="productBotton">Update</button>
                   </div>    
                </form>
            </div>
        </div>
    )
}
