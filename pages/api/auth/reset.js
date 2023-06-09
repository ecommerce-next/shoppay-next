import {createRouter} from 'next-connect';
import bcrypt from "bcrypt";
import db from "../../../utils/db";
import User from "../../../models/User";
const router = createRouter();

router.put(async (req, res) => {
  try {
    await db.connectDb();
    const { user_id, password } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "This Account does not exist." });
    }
    const encryptedPassword = await bcrypt.hash(password, 12);
    await user.updateOne({
      password: encryptedPassword,
    });
    res.status(200).json({ email: user.email });
    await db.disconnectDb();

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router.handler();
