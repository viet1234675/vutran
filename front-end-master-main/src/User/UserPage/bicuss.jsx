import React, {  useEffect } from 'react';
import { getApi } from '../../api/config';



function Bicuss(props) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("__firebase_request_key")
   useEffect(() => {
   
   })


   async function getpa(){
    let params = (new URL(document.location)).searchParams;
    let paymentId = params.get('paymentId');
    let PayerID = params.get('PayerID');
   
    await getApi(`/user/box?paymentId=${paymentId}&PayerID=${PayerID}`);
   
   }

    return (
        <div className="main">
          <p>Xac nhan giao dich</p>
         <button onClick={()=>getpa()}>ok</button>

        </div>
    );
}

export default Bicuss;