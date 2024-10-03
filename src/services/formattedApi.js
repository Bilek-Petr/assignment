import { fetchClients } from "./api";

export const getFormattedClients = async () => {
  try {
    const clientData = await fetchClients();

    // Just to get data that will be displayed in the table
    return clientData.map((client) => ({
      name: client?.name || "Unknown",
      rating: client?.rating || "",
      ownerFullName: client?.owner?.fullName || "",
      regNumber: client?.regNumber || "",
      city: client?.primaryAddress?.address?.city || "",
      category: client?.category?.value || "",

      // to trigger error.jsx uncomment the code below
      // category: client?.category.value
    }));
  } catch (error) {
    throw new Error("Fetch of clients has failed");
  }
};
