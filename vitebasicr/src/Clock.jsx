import React, { useState, useEffect } from 'react';
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return ( 
    <div className="p-4 border rounded-lg shadow-md bg-gray-50 flex flex-col items-center gap-2">
      <h3 className="text-xl font-semibold text-gray-800">Live Clock</h3>
      <p className="text-4xl font-bold text-purple-700">{time}</p>
    </div>
  );
}
export default Clock;