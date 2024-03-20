import React, { useState, useEffect} from 'react';

type User = {
  id: number,
  name: string,
  email: string
};

const App = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchFunction = async () => {
      const response = await fetch("/users");
      const data = await response.json();
      setData(data);
    };
    fetchFunction();
  }, []);

  return (
    <div className="App">
      <p className="text-3xl font-bold underline">User List</p>
      {data.map(user => {
        return <p className="text-2xl" key={user.id}>{user.name}, {user.email}</p>
      })}
    </div>
  );
}

export default App;
