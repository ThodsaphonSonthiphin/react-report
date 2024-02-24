import {InvoiceData} from "../Data/invoice-data";
import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});

export function BillTo(props: { invoice: InvoiceData }) {
   return<>
       <View style={styles.headerContainer} >
           <Text style={styles.billTo}>Bill To:</Text>
           <Text>{props.invoice.company}</Text>
           <Text>{props.invoice.address}</Text>
           <Text>{props.invoice.phone}</Text>
           <Text>{props.invoice.email}</Text>
       </View>
   </>
}