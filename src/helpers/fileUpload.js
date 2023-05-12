export const fileUpload = async(file)=>{

    if(!file) throw new Error('No hay imagenes a subir');
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dpj37tpxh/upload';
    const formData = new FormData();
    formData.append('upload_preset','react-jounal');
    formData.append('file', file);
    try {
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData,
        });
        if (!resp.ok) throw new Error('No se puedo subir imagees');
        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}