import axios from '../request';

export function getAllMices() {
    return axios.get("/mice")
        .then(response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
        ;
}

export function addMouse(name, adress) {
    return axios.post('/mice', { name: name, adress: adress, id: 13 }).then(res => {
        return res.data
    }).catch(err => {
        return err.response
    })
}

export function removeMouse(id) {
    return axios.delete(`/mice/${id}`).then(res => {
        // console.log(res.data);
        // return res.data
        // setMouses(mouses.filter(mouse => mouse.id != id))
    }).catch(err => {
        console.log('loi');
    })
}