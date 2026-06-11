import { randomBytes } from "crypto";

const generateReferralCode = () => {
  return randomBytes(4)
    .toString("hex")
    .toUpperCase();
};

export default generateReferralCode;