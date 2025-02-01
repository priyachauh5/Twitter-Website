// import React, {useEffect, useState} from 'react';
// import { useUserauth } from '../context/userauthcontext';

// const useLoggedinuser=()=> {
//     const {user}=useUserauth();
//     const email=user?.email;
//     const [loggedinuser, setloggedinuser]=useState({});

//     useEffect(()=>{
//         fetch(`http://localhost:5000/loggedinuser?email=${email}`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data);
//             setloggedinuser(data);
//         });
//     }, [email, loggedinuser]);
//     return [loggedinuser,setloggedinuser];
// }

// export default useLoggedinuser;

import React, { useEffect, useState } from 'react';
import { useUserauth } from '../context/userauthcontext';

const useLoggedinuser = () => {
  const { user } = useUserauth();
  const email = user?.email;
  const [loggedinuser, setLoggedinuser] = useState(null);  // Use null to indicate when data is not fetched yet
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    if (email) {
      // Fetch data only if email is available
      const fetchLoggedInUser = async () => {
        try {
          const response = await fetch(`http://localhost:5000/loggedinuser?email=${email}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setLoggedinuser(data);  // Set the fetched data
        } catch (error) {
          console.error('Failed to fetch data:', error);
          setError(error.message); // Set the error message in state
        }
      };

      fetchLoggedInUser();
    }
  }, [email]);  // Fetch data when email changes

  return { loggedinuser, setLoggedinuser, error };
};

export default useLoggedinuser;

