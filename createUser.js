const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("./models/user");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  const email = "admin@email.com";
  const password = "123456";
  const role = "admin"; 

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ email, password: hashedPassword, role }); 
  await user.save();

  console.log("Utilizador criado com sucesso!");
  mongoose.disconnect();
})
.catch((err) => {
  console.error("Erro a ligar ao MongoDB:", err);
});
