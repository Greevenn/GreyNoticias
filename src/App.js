import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsList from "./NewsList";
import NewsDetail from "./NewsDetail";

const Stack =createNativeStackNavigator();

function App (){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen
                name="NewsList"
                component={NewsList}
                options={{title: 'Ultimas noticas'}}
                />
                 <Stack.Screen
                name="NewsDetail"
                component={NewsDetail}
                options={{title: 'Detalles de Noticas'}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;