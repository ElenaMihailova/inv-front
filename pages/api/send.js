import { SendMail } from "@/components/Brief/Email/nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await SendMail(req.body);
      res.status(200).json("Email send successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "error" });
    }
  }
};
