import './widgetLg.css'
const Button =({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
}
export default function WidgetLg() {
    return (
        <div className='widgetLg'>
            <h3 className="WidgetLgTitle">Latest transactions</h3>
         <tabel className="widgetLgTable">
              <tr className="widgetLgTR">
                  <th className="widgetLgTh">Customer</th>
                  <th className="widgetLgTh">Date</th>
                  <th className="widgetLgTh">Amount</th>
                  <th className="widgetLgTh">Status</th>
              </tr>
              <tr className='widgetLgTr'>
                <td className="widgetLgUser">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                     alt=""
                      className="widgetLgImg" />
                    <span className="widgetLgName">sam orjax</span>
                </td>
                <td className="widgetLgDate"> 2 feb 2021</td>
                <td className="widgetLgAmount"> 122$</td>
                <td className="widgetLgStatus"> <Button type="Approved" /></td>
              </tr>
              <tr className='widgetLgTr'>
                <td className="widgetLgUser">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                     alt=""
                      className="widgetLgImg" />
                    <span className="widgetLgName">sam orjax</span>
                </td>
                <td className="widgetLgDate"> 2 feb 2021</td>
                <td className="widgetLgDate"> 122$</td>
                <td className="widgetLgStatus"> <Button type="Declined" /></td>
              </tr>
              <tr className='widgetLgTr'>
                <td className="widgetLgUser">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                     alt=""
                      className="widgetLgImg" />
                    <span className="widgetLgName">sam orjax</span>
                </td>
                <td className="widgetLgDate"> 2 feb 2021</td>
                <td className="widgetLgDate"> 122$</td>
                <td className="widgetLgStatus"> <Button type="Pending" /></td>
              </tr>
              <tr className='widgetLgTr'>
                <td className="widgetLgUser">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                     alt=""
                      className="widgetLgImg" />
                    <span className="widgetLgName">sam orjax</span>
                </td>
                <td className="widgetLgDate"> 2 feb 2021</td>
                <td className="widgetLgDate"> 122$</td>
                <td className="widgetLgStatus"> <Button type="Approved" /></td>
              </tr>
         </tabel>
        </div>
    )
}
