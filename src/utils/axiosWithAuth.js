import axios from 'axios';

const axiosWithAuth = () => {

    const token = localStorage.getItem("token");

    return (
        axios.create({
            headers: { authorization: token },
            baseURL: 'https://lambdapotluck.herokuapp.com/api'
        })
    )
}

export default axiosWithAuth;