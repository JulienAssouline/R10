      import React from 'react';
      import LinearGradient from 'react-native-linear-gradient';

       const LinearGradientTitle = {
          defaultNavigationOptions: {
            headerBackground: (
              <LinearGradient
                colors={['#C5414D', '#9963E9']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 2, y: 1 }}
              />
              ),
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 25,
                paddingBottom: 10,
            },
            headerTintColor: 'white',
          }
        }

       export default LinearGradientTitle