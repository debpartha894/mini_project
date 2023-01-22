import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { classdetailsloading, homeloading, plandetailsloading } from '../apis/api';

const Loadingscreen = () => {
    //const dispatch = useDispatch();
    const classdate = useSelector(state => state.class_date)
    return ( !classdate && (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
        </View>
    )
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default Loadingscreen;