// import React from "react";
import { ReactTabulator } from "react-tabulator";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/tabulator.min.css";

const CompanyView = () => {
  const companies = [
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    {
      name: "صنایع مفتول",
      location: "یزد",
      industry: "هیئت مدیره",
      employees: 200,

    },
    
  ];

  const columns = [
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    { title: "نام شرکت", field: "name", headerSort: false, responsive: 0 },
    { title: "موقعیت", field: "location", headerSort: false, responsive: 0 },
    { title: "هیئت مدیره", field: "industry", headerSort: false, responsive: 0 },
    {
      title: "کارکنان",
      field: "employees",
      hozAlign: "center",
      headerSort: false,
      responsive: 0,
    },
    
    
  ];

  return (
    <div
      dir="rtl"
      className="flex items-center justify-center h-full w-full overflow-hidden"
    >
      <ReactTabulator
        data={companies}
        columns={columns}
        layout={"fitDataFill"}
        options={{
          movableColumns: true,
          resizableRows: true,
          responsive: true,
          pagination: "local",
          paginationSizeSelector: [10, 15, 20, 25, 30, 40, 50, 60],
        }}
        className="tabulator-custom"
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default CompanyView;
