import React from 'react';
import { useParams } from 'react-router-dom';
import CarCard from './CarCard';

const CompanyDetails = ({ companiesData }) => {
  const { companyId } = useParams();

  const company = companiesData.find((c) => c.id === parseInt(companyId));

  if (!company) {
    // Handle the case where the company is not found
    return <p>Company not found.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{company.name} Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {company.cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CompanyDetails;
