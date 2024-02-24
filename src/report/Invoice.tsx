import React from 'react';
import {Document, Image, Page, StyleSheet} from '@react-pdf/renderer';
import {InvoiceTitle} from "./InvoiceTitle";
import {InvoiceNo} from "./InvoiceNo";
import {InvoiceData} from "../Data/invoice-data";
import {BillTo} from "./BillTo";
import {InvoiceItemsTable} from "./InvoiceItemsTable";
import {InvoiceThankYouMsg} from "./InvoiceThankYouMsg";
import logo from '../logo512.png'


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

type InvoiceProps = {
    invoice: InvoiceData;
};
export const Invoice = (props:InvoiceProps) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Image style={styles.logo} src={logo} />
            <InvoiceTitle title='Invoice'/>
            <InvoiceNo invoice={props.invoice}/>
            <BillTo invoice={props.invoice}/>
            <InvoiceItemsTable invoice={props.invoice} />
            <InvoiceThankYouMsg />
        </Page>
    </Document>
);