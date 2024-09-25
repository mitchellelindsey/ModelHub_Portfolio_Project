// const monthly = "16,500"
// const quarterly = "46,500"
// const bi-annual = "88,000"
// const yearly = "166,700"
require("dotenv").config();

const verifyPayment = async function (req, res) {
  const { reference } = req.body;

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK}`,
          "Content-Type": "application/json",
        },
      }
    );

    const verificationData = await response.json();
    res.json(verificationData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = verifyPayment;