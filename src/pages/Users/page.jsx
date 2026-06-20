import { useState } from "react";
import users from "../../data/users";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableCell from "../../components/common/Table/elements/TableCell";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableRow from "../../components/common/Table/elements/TableRow";
import Table from "../../components/common/Table/Table";
import SectionTitle from "../../components/common/SectionTitle";

function Users({ searchTerm, setSearchTerm, filters, setFilters }) {
  const usersTableHeader = ["ID", "User", "Email", "Role", "Phone"];

  const ITEMS_PER_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <div>
      <div className="mb-6">
        <SectionTitle title="User dashboard" />
      </div>

      <div dir="ltr" className="w-full">
        <div className="hidden md:block rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <Table
            header={{ title: "Users List" }}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
          >
        
            <TableHead>
              {usersTableHeader.map((cell, index) => (
                <TableHeadCell key={index}>
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {cell}
                  </span>
                </TableHeadCell>
              ))}
            </TableHead>

            <TableBody>
              {currentUsers.map((user) => (
                <TableRow
                  key={user.id}
                  className="group hover:bg-gray-50 transition-colors duration-150"
                >
                  <TableCell>
                    <span className="text-xs font-mono text-gray-400">
                      #{user.id}
                    </span>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={user.profile}
                        alt={user.fullName}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
                      />

                      <div className="flex flex-col leading-tight">
                        <span className="font-medium text-gray-800 text-sm">
                          {user.fullName}
                        </span>

                        <span className="text-xs text-gray-400">
                          @{user.userName}
                        </span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm text-gray-600">{user.email}</span>
                  </TableCell>

                  <TableCell>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">
                      {user.role}
                    </span>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm text-gray-600">
                      {user.phoneNumber}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Users;
