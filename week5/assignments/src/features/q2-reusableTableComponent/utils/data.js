export const tableData = {
  columns: [
    {
      key: "id",
      label: "ID",
      sortable: true,
      filterable: false,
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
      filterable: true,
    },
    {
      key: "email",
      label: "Email",
      sortable: true,
      filterable: true,
    },
    {
      key: "role",
      label: "Role",
      sortable: false,
      filterable: true,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      filterable: true,
      render: "statusBadge",
    },
  ],
  pageSizeOptions: [5, 10, 20],
  defaultPageSize: 5,
};

export const tableRows = [
  {
    id: 1,
    name: "Namrata",
    email: "namratadas334@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Smith",
    email: "sara@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alex Brown",
    email: "alex@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma@example.com",
    role: "Manager",
    status: "Active",
  },
  {
    id: 5,
    name: "Alex Brown",
    email: "alex@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 6,
    name: "Emma Wilson",
    email: "emma@example.com",
    role: "Manager",
    status: "Active",
  },
];
