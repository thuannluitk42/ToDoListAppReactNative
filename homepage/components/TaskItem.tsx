/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import {styles} from '../style/style';

interface ItemProps {
    content: String;
}


export const Item = ({content}: ItemProps) => {
return  <View style={[styles.item, styles.mt_16]}>
                <View style={styles.subItem}>
                        <View style={[styles.square, styles.mr_16]} />
                        <Text>{content}</Text>
                </View>
                <View style={styles.circle} />
        </View>;
};
