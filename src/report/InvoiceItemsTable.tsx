import {InvoiceData} from "../Data/invoice-data";
import React from 'react';
import {StyleSheet, View} from '@react-pdf/renderer';
import {InvoiceTableHeader} from "./InvoiceTableHeader";
import {InvoiceTableRow} from "./InvoiceTableRow";
import {InvoiceTableBlankSpace} from "./InvoiceTableBlankSpace";
import {InvoiceTableFooter} from "./InvoiceTableFooter";


const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

export function InvoiceItemsTable(props: { invoice: InvoiceData }) {

    const items = props.invoice?.items;

    if (!items) {
        alert("array is null")
        // Optionaly you can return some error message or a different fallback UI
        return null;
    }
    return <>
        <View style={styles.tableContainer}>
            <InvoiceTableHeader />
            <InvoiceTableRow items={props.invoice.items} />
            <InvoiceTableBlankSpace rowsCount={ tableRowsCount - props.invoice.items.length} />
            <InvoiceTableFooter items={props.invoice.items} />
        </View>
    </>
}