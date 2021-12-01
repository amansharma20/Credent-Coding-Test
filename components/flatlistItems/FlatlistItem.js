import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FlatlistItem({ item }) {
    return (
        <View style={styles.item}>
            <View style={styles.subItem}>
                <Text style={styles.title}>Handover Item Type -</Text>
                <Text style={styles.title}>{item.handover_item_type}</Text>
            </View>
            <View style={styles.subItem}>
                <Text style={styles.title}>Cash -</Text>
                <Text style={styles.title}>{item.cash}</Text>
            </View>
            <View style={styles.subItem}>
                <Text style={styles.title}>Date -</Text>
                <Text style={styles.title}>{item.date}</Text>
            </View>
            <View style={styles.subItem}>
                <Text style={styles.title}>Center name -</Text>
                <Text style={[styles.title, { width: '50%', textAlign: 'right' }]}>{item.original_sender_id.centername}</Text>
            </View>
            <View style={styles.subItem}>
                <Text style={styles.title}>Pincode -</Text>
                <Text style={styles.title}>{item.original_sender_id.pincode}</Text>
            </View>
            <View style={styles.subItem}>
                <Text style={styles.title}>Email -</Text>
                <Text style={[styles.title, { width: '80%', textAlign: 'right' }]}>{item.original_sender_id.email}</Text>
            </View>
            <View style={styles.subItem}>
                <Text style={styles.title}>Mobile -</Text>
                <Text style={styles.title}>{item.original_sender_id.mobile}</Text>
            </View>
            <View style={styles.subItem}>
                <Text style={styles.title}>Delivery Status -</Text>
                <Text style={styles.title}>{item.delivery_status}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    item: {
        backgroundColor: '#DB3E6F',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        borderRadius: 15
    },
    title: {
        fontSize: 18,
        color: '#ffffff'
    },
    subItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6
    }
});
