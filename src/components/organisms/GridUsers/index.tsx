'use client'

import { Button, IconButton, Stack } from "@mui/material"
import { DataGrid, GridCellParams, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


import { useState } from "react";

export default function GridUsers() {
    const [nbRows, setNbRows] = useState(5);
    const [loading, setLoading] = useState(false);
    const handleEdit = (id: number) => {
        console.log("Edit button is working:", id);
    }
    const handleDelete = (id: number) => {
        console.log("Delete button is working:", id);
    }

    const columns: GridColDef[] = [

        { field: 'firstName', headerName: 'First name', width: 150, headerAlign: 'center', align: 'center' },
        { field: 'lastName', headerName: 'Last name', width: 150, headerAlign: 'center', align: 'center' },
        { field: 'email', headerName: 'Email', width: 300, headerAlign: 'center', align: 'center' },
        { field: 'isActive', headerName: 'Status', width: 125, headerAlign: 'center', align: 'center' },
        {
            field: 'lastLogin', headerName: 'Last Login', width: 300, headerAlign: 'center', align: 'center', type: 'date', renderCell: (params) => {
                const v = params.value as Date | string | number | null | undefined;
                if (!v) return '';
                const date = v instanceof Date ? v : new Date(v);
                return new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(date);
            }
        },
        {
            field: 'actions', headerName: 'Actions', width: 125, headerAlign: 'center', align: 'center',
            sortable: false, filterable: false, renderCell: (params: GridCellParams) => {
                return (

                    <Stack direction="row" spacing={1}>
                        <IconButton color="primary" onClick={() => handleEdit(params.row.id)}>
                            <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Stack>
                );
            }
        }



    ];
    const [rows, setRows] = useState<GridRowsProp>([
        { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'jon@jon.com', isActive: true, lastLogin: new Date(), fullName: 'Jon Snow' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'cersei@cersei.com', isActive: true, lastLogin: new Date(), fullName: 'Cersei Lannister' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'jaime@jaime.com', isActive: true, lastLogin: new Date(), fullName: 'Jaime Lannister' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'arya@arya.com', isActive: true, lastLogin: new Date(), fullName: 'Arya Stark' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'daenerys@daenerys.com', isActive: true, lastLogin: new Date(), fullName: 'Daenerys Targaryen' },
        { id: 6, lastName: 'Melisandre', firstName: "Maria", email: 'melisandre@melisandre.com', isActive: true, lastLogin: new Date(), fullName: 'Melisandre' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'ferrara@ferrara.com', isActive: true, lastLogin: new Date(), fullName: 'Ferrara Clifford' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'rossini@rossini.com', isActive: true, lastLogin: new Date(), fullName: 'Rossini Frances' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'harvey@harvey.com', isActive: true, lastLogin: new Date(), fullName: 'Harvey Roxie' },
    ]);
    const removeRow = () => {
        setNbRows(nbRows - 1);
    };
    const addRow = () => {
        setNbRows(nbRows + 1);
    };
    return (
        <><Stack direction="row" spacing={2} sx={{ mb: 1 }}>
            <Button size="small" onClick={removeRow}>
                Remove a row
            </Button>
            <Button size="small" onClick={addRow}>
                Add a row
            </Button>
        </Stack>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
                <DataGrid columns={columns} rows={rows.slice(0, nbRows)} loading={loading} />
            </div></>
    )
}
