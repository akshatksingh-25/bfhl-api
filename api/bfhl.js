export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body.data;

      if (!Array.isArray(data)) {
        return res.status(400).json({
          is_success: false,
          error: "Invalid input format. Expected: { data: [] }",
        });
      }

      let even_numbers = [];
      let odd_numbers = [];
      let alphabets = [];
      let special_characters = [];
      let sum = 0;

      data.forEach((item) => {
        if (/^\d+$/.test(item)) {
          let num = parseInt(item);
          sum += num;
          if (num % 2 === 0) {
            even_numbers.push(item);
          } else {
            odd_numbers.push(item);
          }
        } else if (/^[a-zA-Z]+$/.test(item)) {
          alphabets.push(item.toUpperCase());
        } else {
          special_characters.push(item);
        }
      });

      let concat_string = "";
      let allChars = alphabets.join("").split("").reverse();
      concat_string = allChars
        .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
        .join("");

      res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        sum,
        concat_string,
      });
    } catch (err) {
      res.status(500).json({ is_success: false, error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
