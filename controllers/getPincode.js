const { AuthenticationError, UserInputError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const AuthService = require("../services/AuthService");
const genPincode = require("../utils/genPincode");
const sendMail = require("../utils/sendMail");

const getPincodeController = async (_, __, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { email } = req.user;
  const pincode = genPincode();
  const user = await AuthService.getUserByEmail(email);

  if (!user) return new AuthenticationError("User not found.");

  try {
    const message = `
     <div style="text-align:center;">
     <p>Hello, ${user?.username}</p>
     <br/>
     <p>Here's your email validation pincode 
      <span>
       <b>${pincode}</b>
      </span>
     </p>
     <br/>
     <br/>
     <p>If you haven't requested it, feel free to ignore it.</p>
     </div>
    `;

    await sendMail({
      email,
      subject: "Email Validation Pincode - Thoughts Tracker",
      message,
    });
    await AuthService.setPincode(email, pincode);
    return {
      success: true,
      message: "Pincode successfuly sent to your email.",
    };
  } catch (error) {
    return new UserInputError(error);
  }
};

module.exports = getPincodeController;
