/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../style/style';

interface ItemProps {
    content: String;
    onDelete: Function
}


export const Item = ({content, onDelete}: ItemProps) => {
return  <TouchableOpacity onPress={() => onDelete()}>
                <View style={[styles.item, styles.mt_16]}>
                                <View style={styles.subItem}>
                                        <View style={[styles.square, styles.mr_16]} />
                                        <Text>{content}</Text>
                                </View>
                                <View style={styles.circle} />
                </View>
        </TouchableOpacity>;
};
