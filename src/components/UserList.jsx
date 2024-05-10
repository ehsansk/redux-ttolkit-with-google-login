import React, { useEffect } from 'react'
import {fetchDataFromApi } from "../features/gmail-slice/GmailSlice"
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
    const dispatch = useDispatch();
    const gmailData = useSelector((state) => state?.userData?.gmailData || []);
    const loading = useSelector((state) => state?.loading);
    const error = useSelector((state) => state?.error);
  
    useEffect(() => {
      dispatch(fetchDataFromApi());
      
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    console.log('gmailData=>', gmailData);
  return (
    <div>
        <ul>
            {gmailData?.map((el,index)=>(
            <li key={index}>{el.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default UserList