import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Button, {BorderedButton} from '../../../components/Button';
import globalStyles from '../../../global-styles';
import ScreenContainer from '../../../components/ScreenContainer';
import Text, {H1} from '../../../components/Text';
import {EmailIcon, FacebookIcon, GoogleIcon} from '../../../components/Icons';
import {COLOUR_PURPLE, STANDARD_SPACING} from '../../../constants';

export default function LandingScreen() {
  return (
    <ScreenContainer style={styles.screenContainer}>
      <View style={styles.carouselContainer}>
        <Image
          resizeMode="contain"
          source={require('../../../../assets/images/phone_illustration.png')}
          style={styles.illustration}
        />
        <H1 style={globalStyles.centeredText}>Organize your works</H1>
        <Text style={[globalStyles.centeredText, globalStyles.greyText]}>
          Let's organize your works with priority and do everything without
          stress
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          icon={<FacebookIcon color={'#3b5998'} size={26} />}
          title="Continue with Facebook"
        />
        <Button icon={<GoogleIcon size={26} />} title="Continue with Google" />
        <BorderedButton
          icon={<EmailIcon color={COLOUR_PURPLE} size={26} />}
          title="Continue with email"
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 0.6,
    marginTop: STANDARD_SPACING * 6,
  },
  buttonsContainer: {
    flex: 0.3,
    justifyContent: 'space-evenly',
  },
  illustration: {
    height: 270,
    width: '100%',
  },
  screenContainer: {
    flex: 1,
  },
});
