import React from 'react';

const JobList = () => {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-100 rounded shadow">
        <h3 className="text-xl font-bold">Software Development Engineer at Amazon</h3>
        <p className="text-gray-600">AWS Route 53</p>
        <p className="text-gray-500">Jan 2020 - Present</p>
      </div>
      <div className="p-4 bg-gray-100 rounded shadow">
        <h3 className="text-xl font-bold">Intern at XYZ Company</h3>
        <p className="text-gray-600">Software Engineering</p>
        <p className="text-gray-500">Jun 2019 - Dec 2019</p>
      </div>
    </div>
  );
};

export default JobList;
