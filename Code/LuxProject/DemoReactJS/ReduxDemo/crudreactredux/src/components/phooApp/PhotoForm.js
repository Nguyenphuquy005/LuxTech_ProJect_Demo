import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { addPhoto, removePhoto, updatePhoto } from 'components/phooApp/PhotoSlice'
const PhotoForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const [addOrEdit, setAddOrEdit] = useState(true)
  const [userRequest, setUserRequest] = useState({
    id: '',
    name: '',
    adress: '',
  });
  const { id, name, adress } = userRequest
  const setUserNull = () => {
    setUserRequest({
      id: '',
      name: '',
      adress: ''
    })
  }
  const onSubmit = (data) => {
    if (addOrEdit) {
      const newData = {
        id: 1 + (Math.random() * 99),
        name: data.name,
        adress: data.adress
      }
      setUserNull()

      dispatch(addPhoto(newData))
    } else {
      console.log(data, 'data');
      const action = updatePhoto(data)
      dispatch(action)
      setAddOrEdit(!addOrEdit)
      setUserNull()
    }
  };
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setUserRequest({
      [name]: value
    })
  }

  const deletePhoto = (photo) => {
    console.log(photo);
    const removePhotoId = photo.id
    const action = removePhoto(removePhotoId)
    dispatch(action)
    console.log(photos, '====');
  }
  const editbutton = (photo) => {
    setAddOrEdit(!addOrEdit)
    setUserRequest({
      id: photo.id,
      name: photo.name,
      adress: photo.adress
    })
  }
  const photos = useSelector(state => state.photos)   // getbyID = filter

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input style={{ display: 'none' }} name="id" ref={register} placeholder=" id" value={id} /><br />
        <input name="name" ref={register} placeholder=" name" value={name} onChange={handleChange} />
        <br />
        <input name="adress" ref={register} placeholder="adress" value={adress} onChange={handleChange} />
        <br />
        {addOrEdit ? <input type="submit" value='Add' /> : <input value='Edit' type='submit' />}

      </form>
      <div className='d-flex justify-content-center'>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Adress</th>
            <th>Action</th>
          </tr>
          {photos.map(photo => {
            return (
              <tr>
                <td>{photo.id} </td>

                <td>{photo.name} </td>
                <td>{photo.adress} </td>
                <td> <button onClick={() => deletePhoto(photo)}>Delete</button> <button onClick={() => editbutton(photo)}>Edit</button> </td>


              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default PhotoForm