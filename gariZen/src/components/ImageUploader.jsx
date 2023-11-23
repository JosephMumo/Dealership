import React from 'react'

const ImageUploader = ({setSelectedImage}) => {
    
    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if(file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
  return (
    <div>
        <input type='file' accept='image/*' onChange={handleImageChange} />
    </div>
  )
}

export default ImageUploader