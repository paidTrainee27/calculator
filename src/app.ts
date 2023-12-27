import express  from "express";
import router from "./routes/dev"

const app = express();
const port = 8000;

app.use(router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})