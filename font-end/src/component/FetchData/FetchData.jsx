import { useEffect, useState } from "react";
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore";
import "./aaa.css";
import { Button } from "antd";

const FetchData = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let list = []
      try {
        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])

  console.log(data)


  return (<>


<span style={{marginBottom : 30, fontSize: 30}}><strong>Booking list</strong></span>

      <table className="table table-bordered">
       
        <tr>
          <th>Avatar</th>
          <th>Tên</th>
          <th>SĐT</th>
          <th>Loại phòng</th>
          <th>Check in</th>
          <th>Check out</th>
          <th>Trạng thái</th>
          <th>Hành động</th>

        </tr>
{/*  */}
        {data.map((item) => (
          <tr>
            <td style={{textAlign: "center"}}><img style={{ width: 30 ,height : 30 }} src="https://firebasestorage.googleapis.com/v0/b/buoi2-6849f.appspot.com/o/person.jpg?alt=media&token=97130810-a701-4e8f-bcd6-d305f8658b61" alt="" /></td>
            <td style={{textAlign: "center"}}>{item.Name}</td>
            <td style={{textAlign: "center"}}>{item.SDT}</td>
            <td style={{textAlign: "center" }}>{item.TypeRoom}</td>
            <td style={{textAlign: "center"}}>{item.CheckIn}</td>
            <td style={{textAlign: "center"}}>{item.CheckOut}</td>
            <td style={{textAlign: "center" }}>{item.Status}</td>
            <td style={{textAlign: "center"}}><Button type="primary" ghost>
              Detele
            </Button> |
              <Button type="primary" danger ghost>
                Edit
              </Button>
            </td>
          </tr>
        ))}

      </table>

  </>);
}

export default FetchData;