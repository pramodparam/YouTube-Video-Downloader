import express from 'express';
import cors from 'cors';
import ytdl from 'ytdl-core';

const app = express()
const port = 4000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Youtube Video Downloader backend');
})

app.get('/download', async (req, res) => {
    try {
        const url = req.query.url
        const videoId = await ytdl.getURLVideoID(url)
        const metaInfo = await ytdl.getInfo(url)
        let data = {
            url: 'https://www.youtube.com/embed/' + videoId,
            info: metaInfo.formats
        }
        return res.send(data);
    } catch (error) {
        return res.status(500);
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})