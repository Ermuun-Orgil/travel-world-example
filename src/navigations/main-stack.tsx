import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Home, TravelDetail } from '../screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ({ current: { progress } }) => {
        return {
            cardStyle: {
                opacity: progress
            }
        };
    }
};

export const StackNavigation: React.FC<any> = () => {

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen
                name="Detail"
                component={TravelDetail}
                options={options}
            /> */}
            <Stack.Screen
                name="Detail"
                component={TravelDetail}
                sharedElementsConfig={(route, otherRoute, showing) => {
                    const { id } = route.params;
                    return [
                        {
                            id: `image-${id}`,
                            animation: 'fade',
                        },
                        {
                            id: `title-${id}`,
                            animation: 'move',
                        }
                    ];
                }} 
                />
        </Stack.Navigator>
    )
}
