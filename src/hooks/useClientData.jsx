import { useState, useEffect } from "react";
import { getFormattedClients } from "../utilities.js/formattedApi";

export default function useClientData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [columnFilters, setColumnFilters] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedData = await getFormattedClients();
        setData(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
    columnFilters,
    setColumnFilters,
    selectedRowData,
    setSelectedRowData,
  };
}
