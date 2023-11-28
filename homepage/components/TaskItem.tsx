/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import {styles} from '../style/style';

export const Item = () => {
return  <View style={styles.item}>
                <View style={styles.subItem}>
                        <View style={[styles.square, styles.mr_16]} />
                        <Text>Like</Text>
                </View>
                <View style={styles.circle} />
        </View>;
};
