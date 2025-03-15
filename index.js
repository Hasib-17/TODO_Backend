const express = require("express");
const zod = require("zod");
require('dotenv').config()


const app = express();
app.use(express.json()); // ✅ Add middleware to parse JSON request body

const PORT=process.env.PORT || 3000;
// ✅ Function now returns the validation result

const jsonData={
    name:"Hasibur",
    age:"24",
    university:"PSTU",
    sem:"L-4__S-1",
    session:"2019-2020"
}
function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });
    return schema.safeParse(obj); // ✅ Return the parsed result
}

app.post('/admin', (req, res) => {
    const response = validateInput(req.body);

    if (!response.success) {  // ✅ Fix: `success` is a property, not a function
        return res.status(400).json({
            msg: "Your inputs are invalid!..",
            errors: response.error.format() // ✅ Provide error details
        });
    }

    return res.status(201).send(response);

});

app.get('/info',(req,res)=>{
    res.json(jsonData);
})
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});
