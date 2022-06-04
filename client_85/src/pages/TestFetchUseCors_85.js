import axios from 'axios';

const TestFetchUseCors_85 = async () => {
    const response = await fetch('http://localhost:5000');
    const data1 = await response.json();
    console.log('fetch data1', data1);

    const data2 = await axios.get('http://localhost:5000');
    console.log('axios data2', data2.data);

    const currentUser = {
        name: '湯士緯',
        email: "209410785@gms.tku.edu.tw",
        password: 'secret5',
    };

    try {
        const { data } = await axios.post(
            'http://localhost:5000/api/v1/auth_85/register_85',
            currentUser
        );
        console.log('register data', data);
    } catch (err) {
        console.log(err);
    }
};

export default TestFetchUseCors_85;