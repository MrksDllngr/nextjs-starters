export default async function handler (req, res){

    const {secret} = req.query
    console.log(req.query);

    if (secret !== '1234') {
        return res.status(401).json({ message: 'Invalid token' })
    }

    res.setPreviewData({},{maxAge: 60*30,})
    res.redirect("/")
   
}
