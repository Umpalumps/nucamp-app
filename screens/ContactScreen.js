import { Card } from 'react-native-elements';
import { ScrollView, Text } from 'react-native';

const ContactScreen =()=>{
    return(
    < ScrollView>
        <Card wrapperStyle={{margin: 20}}>
                <Card.Title >Contact Information</Card.Title>
                <Card.Divider/>
                <Text style={{ marginBottom: 10}}>
                    1 Nucamp Way
                    Seattle, WA 98001
                    U.S.A.
                    </Text>
                <Text style={{ marginBottom: 10}}>Phone: 1-206-555-1234</Text>    
                <Text style={{ marginBottom: 10}}>Email: campsites@nucamp.co</Text>   
            </Card>
    </ScrollView>
    )
}
export default ContactScreen