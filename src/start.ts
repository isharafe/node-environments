import app from ".";

// get port from env file or use 3000 as default
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is running");
});