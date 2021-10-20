import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AppText({ title, customStyle }) {
    return (
        <>
            <Text style={[styles.textT, customStyle]}>{title}</Text>
        </>
    )
}
const styles = StyleSheet.create({
    textT: {
        fontSize: 20,
    }
})