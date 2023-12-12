import * as React from 'react';
import {useSelector} from 'react-redux';
import styles from '../styles';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import ThemeSwitch from './themeSwitch';

export default function CustomDrawer() {
  const Theme = useSelector((state: any) => state.Theme);
  return (
    <DrawerContentScrollView style={styles(Theme).CustomDrawer}>

      <ThemeSwitch Theme={Theme} />

    </DrawerContentScrollView>
  );
}
